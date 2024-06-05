import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: { babelrc: true },
    }),
    svgr({
      include: "**/*.svg?react",
      exclude: "",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
