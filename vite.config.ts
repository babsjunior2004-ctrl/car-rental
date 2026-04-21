import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration Vite pour le développement
export default defineConfig({
  base: "/",
  plugins: [react()],
});
