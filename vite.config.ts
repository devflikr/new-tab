import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import manifest from "./manifest.json"
import { crx } from "@crxjs/vite-plugin"
import svgr from 'vite-plugin-svgr'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        crx({ manifest }),
        Unfonts({
            custom: {
                families: [
                    {
                        name: "SL Titans",
                        local: "SL Titans",
                        src: "./src/assets/fonts/titans.ttf",
                    }
                ],
            }
        })
    ],
})
