Param(
  [string]$Branch = "deploy"
)

function Stop-OnError($msg) {
  Write-Error $msg
  exit 1
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Stop-OnError "git no está instalado o no está en PATH" }

# Asegurar build
Write-Host "Construyendo (pnpm build)..."
pnpm build || Stop-OnError "Fallo el build"

$repoRoot = (Get-Location).Path
$tmp = Join-Path $repoRoot ".deploy-tmp"

if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
New-Item -ItemType Directory -Path $tmp | Out-Null
Copy-Item -Recurse -Force (Join-Path $repoRoot "dist\*") $tmp

# Recordar branch actual
$currentBranch = (git rev-parse --abbrev-ref HEAD).Trim()

Write-Host "Cambiando a branch '$Branch' como huérfano..."
git checkout --orphan $Branch 2>$null | Out-Null

Write-Host "Limpiando branch '$Branch'..."
git reset --hard

# Borrar todo excepto .git
Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force

# Copiar build a raíz del repo
Copy-Item -Recurse -Force (Join-Path $tmp "*") $repoRoot

git add .
git commit -m "deploy: static build" --allow-empty
git push -u origin $Branch

Write-Host "Volviendo a '$currentBranch'..."
git checkout $currentBranch

Remove-Item -Recurse -Force $tmp
Write-Host "Listo. Branch '$Branch' actualizado con el build en raíz."

