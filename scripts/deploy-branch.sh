#!/usr/bin/env bash
set -euo pipefail

BRANCH=${1:-deploy}

if ! command -v git >/dev/null 2>&1; then
  echo "git no está instalado en PATH" >&2
  exit 1
fi

echo "Construyendo (pnpm build)..."
pnpm build

REPO_ROOT=$(pwd)
TMP="$REPO_ROOT/.deploy-tmp"
rm -rf "$TMP"
mkdir -p "$TMP"
cp -R dist/* "$TMP/" || true

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Cambiando a rama huérfana '$BRANCH'..."
git checkout --orphan "$BRANCH" >/dev/null 2>&1 || true
git reset --hard

find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$TMP/"* . || true

git add .
git commit -m "deploy: static build" --allow-empty
git push -u origin "$BRANCH"

echo "Volviendo a '$CURRENT_BRANCH'..."
git checkout "$CURRENT_BRANCH"

rm -rf "$TMP"
echo "Listo. Branch '$BRANCH' actualizado con el build en raíz."

