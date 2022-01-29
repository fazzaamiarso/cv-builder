import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import shimReactPdf from 'vite-plugin-shim-react-pdf';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
    'process.env': process.env,
    Buffer: {},
  },
  plugins: [react(), shimReactPdf()],
});
