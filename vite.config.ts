import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'
import { resolve } from 'path'

function pathResolve(dir) {
    return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    server: {
        port: 8989,
    },
    plugins: [
        react(),
        createStyleImportPlugin({
            resolves: [AntdResolve()],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
        postcss: {},
    },
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: `${pathResolve('src')}/`,
            },
        ],
    },
})
