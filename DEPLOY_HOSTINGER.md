Hostinger Deploy — Branch "deploy" con build en la raíz

Contexto
- Hostinger clona un branch directamente en `public_html` (o el directorio que indiques), no dentro de `dist/`.
- Para servir la web, el branch que Hostinger clona debe contener los archivos finales (lo que normalmente está en `dist/`) en la raíz del branch.

Estrategia
1) Mantené el desarrollo en `main` (o el branch que uses).
2) Creamos un branch `deploy` que contiene SOLO el build (contenido de `dist/`) en la raíz del branch.
3) Hostinger clona el branch `deploy` directo en `public_html`.

Pasos (una sola vez)
1. Asegurá tener un build fresco:
   - `pnpm install`
   - `pnpm build` (genera `dist/`)

2. Crear el branch `deploy` con el contenido de `dist/` en raíz:
   - Opción PowerShell (Windows):
     - `pnpm run deploy:branch:ps`
   - Opción Bash (macOS/Linux):
     - `pnpm run deploy:branch:sh`

Los scripts hacen:
- Guardan `dist/` en una carpeta temporal
- Cambian/sincronizan el branch `deploy` para que quede limpio y vacío
- Copian el contenido de `dist/` a la raíz
- `git add . && git commit -m "deploy: static build" && git push -u origin deploy`
- Vuelven a tu branch anterior

Config en Hostinger
- Repository: https://github.com/<tu-usuario>/<tu-repo>.git
- Branch: `deploy`
- Directory: vacío (para clonar directo en `public_html`)
- Importante: `public_html` debe estar vacío la primera vez (borrá archivos viejos o usá un subdominio con carpeta vacía).

Actualizar deploy (cada vez que quieras publicar)
1. En `main`: `pnpm build`
2. Ejecutar el script de deploy para refrescar el branch `deploy`:
   - `pnpm run deploy:branch:ps` (Windows) o `pnpm run deploy:branch:sh` (macOS/Linux)
3. Hostinger vuelve a clonar/pull del branch `deploy` y queda online.

Notas
- El formulario usa `contact.php` en la raíz; el build lo copia (viene de `public/`).
- Si desplegás en subcarpeta, no es necesario con esta estrategia: el branch `deploy` apunta directo a `public_html`.
- Para SEO previsualizable y campañas, esta estructura MPA expone páginas reales: `/desarrollo-web/`, `/gestion-de-redes/`, `/pauta-publicitaria/`, `/lp/landing-a/`, `/gracias/`.

