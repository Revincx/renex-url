import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@src": __dirname + "/src"
    }
  },
  // server: {
  //   proxy: {
  //     '/renexUrl': {
  //       target: "http://localhost:8081/",
  //       changeOrigin: true
  //     }
  //   }
  // }
})
