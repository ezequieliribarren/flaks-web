import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { resolve } from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: "mpa",
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [
        path.resolve(__dirname, "."),
        path.resolve(__dirname, "./client"),
        path.resolve(__dirname, "./shared"),
        path.resolve(__dirname, "./src"),
        path.resolve(__dirname, "./components"),
        path.resolve(__dirname, "./desarrollo-web"),
        path.resolve(__dirname, "./gestion-de-redes"),
        path.resolve(__dirname, "./redes-sociales"),
        path.resolve(__dirname, "./pauta-publicitaria"),
        path.resolve(__dirname, "./lp"),
        path.resolve(__dirname, "./gracias"),
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        desarrollo: resolve(__dirname, "desarrollo-web/index.html"),
        redes: resolve(__dirname, "gestion-de-redes/index.html"),
        redesAlias: resolve(__dirname, "redes-sociales/index.html"),
        pauta: resolve(__dirname, "pauta-publicitaria/index.html"),
        lpA: resolve(__dirname, "lp/landing-a/index.html"),
        lpB: resolve(__dirname, "lp/landing-b/index.html"),
        gracias: resolve(__dirname, "gracias/index.html"),
      },
    },
  },
  plugins: [react(), folderIndexRedirect()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./client") },
      { find: "@shared", replacement: path.resolve(__dirname, "./shared") },
      // Workaround for antivirus false-positive on lucide chrome icon file (dev)
      // Additional stubbing is done in optimizeDeps esbuild plugin below
      { find: /lucide-react\/dist\/esm\/icons\/chrome\.js$/, replacement: path.resolve(__dirname, "./src/shims/lucide-chrome-stub.js") },
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "stub-lucide-chrome",
          setup(build) {
            // Stub any resolution of chrome.js within lucide-react during dep optimization
            const chromeFilter = /(^|[\\\/])chrome\.js$/;
            build.onResolve({ filter: chromeFilter }, (args) => {
              if (args.importer && /lucide-react[\\\/]dist[\\\/]esm/.test(args.importer)) {
                return { path: args.path, namespace: "stub-lucide" };
              }
              return null;
            });
            build.onLoad({ filter: /.*/, namespace: "stub-lucide" }, () => ({
              contents: "export default function Icon() { return null };",
              loader: "js",
            }));
          },
        },
      ],
    },
  },
}));

// No custom dev server middleware

function folderIndexRedirect(): Plugin {
  return {
    name: "mpa-folder-index-redirect",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        try {
          const original = req.url || "/";
          const [pathname, query] = original.split("?");
          // Only rewrite paths without extension and without trailing slash
          if (pathname && !pathname.endsWith("/") && !/\.[a-zA-Z0-9]+$/.test(pathname)) {
            const dirPath = path.join(server.config.root, pathname);
            const indexPath = path.join(dirPath, "index.html");
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory() && fs.existsSync(indexPath)) {
              req.url = pathname + "/" + (query ? `?${query}` : "");
            }
          }
        } catch {}
        next();
      });
    },
  };
}
