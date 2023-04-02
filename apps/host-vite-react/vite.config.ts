import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const remoteViteReactUrl =
  process.env.REMOTE_VITE_REACT_URL || `http://localhost:3021`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_vite_react",
      filename: "remoteEntry.js",
      // Modules to expose
      remotes: {
        remote_vite_react: `${remoteViteReactUrl}/assets/remoteEntry.js`,
      },
      shared: [],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
