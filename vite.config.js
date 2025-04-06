import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Optimize asset size
    minify: 'terser',
    // Ensure base path is properly set (useful for deployments)
    base: './',
    outDir: 'dist',
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-icons', 'react-slick']
  }
})
