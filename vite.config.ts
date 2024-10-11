import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import compression from 'vite-plugin-compression'
export default defineConfig({
    plugins: [
        react(),
        Inspect(),
        compression({ algorithm: 'brotliCompress' })
    ],

    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'esnext', // Zamonaviy brauzerlar uchun ishlab chiqarishni nishonlash
        minify: 'esbuild', // Fayllarni minimallashtirish uchun Terser'ni ishlatish
        sourcemap: false, // Ishlab chiqarish uchun sourcemap fayllarni o'chirish// bu default holatda minify qilish uchun esbuild ishlatiladi
        rollupOptions: {
            output: {
                // Katta fayllarni kichik paketlarga ajratish (Lazy-loading optimallashtirish)
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString()
                    }
                },
            },
        },
    },
})
