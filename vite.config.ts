import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import path from "path";

const config: UserConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./modules"),
    },
  },
  plugins: [react(), ssr()],
};

export default config;
