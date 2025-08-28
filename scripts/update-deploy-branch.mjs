#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts }).trim();
}

function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function rmAllExcept(exceptions = []) {
  const items = fs.readdirSync(process.cwd(), { withFileTypes: true });
  for (const it of items) {
    if (exceptions.includes(it.name)) continue;
    const target = path.join(process.cwd(), it.name);
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function cpAll(srcDir, destDir) {
  for (const name of fs.readdirSync(srcDir)) {
    fs.cpSync(path.join(srcDir, name), path.join(destDir, name), { recursive: true });
  }
}

function main() {
  const BRANCH = process.env.DEPLOY_BRANCH || 'deploy';
  const repoRoot = process.cwd();
  const gitDir = path.join(repoRoot, '.git');
  const distDir = path.join(repoRoot, 'dist');
  if (!exists(gitDir)) {
    console.log('[deploy] No es un repo git; salto actualización de branch');
    return;
  }
  if (!exists(distDir)) {
    console.log('[deploy] No existe dist/; asegurate de correr vite build antes');
    return;
  }

  const tmpDir = path.join(repoRoot, '.deploy-tmp');
  if (exists(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir);
  cpAll(distDir, tmpDir);

  let currentBranch = 'main';
  try {
    currentBranch = run('git rev-parse --abbrev-ref HEAD');
  } catch {
    currentBranch = 'HEAD';
  }

  const branchExists = (() => {
    try { run(`git rev-parse --verify ${BRANCH}`); return true; } catch { return false; }
  })();

  try {
    if (branchExists) {
      run(`git checkout ${BRANCH}`, { stdio: 'inherit' });
    } else {
      run(`git checkout --orphan ${BRANCH}`, { stdio: 'inherit' });
    }

    // limpiar branch
    run('git reset --hard', { stdio: 'inherit' });
    rmAllExcept(['.git', path.basename(tmpDir)]);
    cpAll(tmpDir, repoRoot);

    run('git add .', { stdio: 'inherit' });
    try {
      run('git commit -m "deploy: static build"', { stdio: 'inherit' });
    } catch {
      // allow empty commit
      run('git commit -m "deploy: static build (empty)" --allow-empty', { stdio: 'inherit' });
    }
    try {
      run(`git push -u origin ${BRANCH}`, { stdio: 'inherit' });
    } catch (err) {
      console.warn('[deploy] Advertencia: no se pudo pushear a origin. ¿Remoto configurado?');
    }
  } finally {
    try { run(`git checkout ${currentBranch}`, { stdio: 'inherit' }); } catch {}
    if (exists(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
  }

  console.log(`[deploy] Branch '${BRANCH}' actualizado con el contenido de dist/ en la raíz.`);
}

main();

