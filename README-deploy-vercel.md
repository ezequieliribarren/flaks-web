Flaks — Deploy en Vercel (SSR)

Requisitos
- Repo en GitHub/GitLab/Bitbucket.
- Variables de entorno SMTP para el formulario de contacto (opcional pero recomendado).

Pasos
1) Importar el repo en Vercel
   - Vercel → New Project → Import Git Repository → seleccionar este repo.
   - Framework: detecta Next.js automáticamente.
   - Gestor de paquetes: pnpm (usa pnpm-lock.yaml).

2) Variables de entorno (Project → Settings → Environment Variables)
   - SMTP_HOST: host SMTP (p. ej. smtp.sendgrid.net / smtp.gmail.com)
   - SMTP_PORT: 465 (SSL) o 587 (STARTTLS)
   - SMTP_USER: usuario SMTP
   - SMTP_PASS: contraseña SMTP
   - SMTP_SECURE: "true" para 465, "false" para 587 (opcional)
   - CONTACT_TO: info@flaks.com.ar (opcional; por defecto se usa ese mail)
   - CONTACT_FROM: remitente visible (p. ej. no-reply@flaks.com.ar)

3) Build & Deploy
   - Build Command: next build
   - Output: automático (Vercel para Next.js)
   - Deploy → se generan previews por rama y Prod al hacer merge en main.

4) Dominio
   - Project → Settings → Domains → Add
   - Opción A (Vercel DNS): apuntar nameservers al de Vercel.
   - Opción B (mantener tu DNS actual): agregar registros sugeridos (A / CNAME) que muestra Vercel.
   - SSL se emite automáticamente al propagar DNS.

Comprobación
- /, /desarrollo-web, /gestion-de-redes, /pauta-publicitaria (si aplica), /preview/[slug] deben renderizar HTML SSR.
- Formulario: enviar una prueba; revisar logs en Vercel si no llega.

Notas
- Si no definís SMTP_* el endpoint responde ok pero omite el envío (pensado para no romper en entornos sin credenciales).
- Las páginas SSR usan getServerSideProps con props vacías ya que el contenido es estático.

