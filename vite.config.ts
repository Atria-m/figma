import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        contact: "pricing.html",
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
