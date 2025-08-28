import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared", "./src"],
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
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
      // Workaround for antivirus false-positive on lucide chrome icon file
      "lucide-react/dist/esm/icons/chrome.js": path.resolve(
        __dirname,
        "./src/shims/lucide-chrome-stub.js",
      ),
    },
  },
}));

// No custom dev server middleware
