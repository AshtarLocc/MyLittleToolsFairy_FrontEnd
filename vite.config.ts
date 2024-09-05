import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	server: {
		open: true,
		proxy: {
			// 代理所有以 `/api` 開頭的請求
			'/api': {
				// 指定代理的位址，這裡是後端伺服器的 API 位址
				target: 'http://localhost:20300/api',
				// 更改代理請求的來源，用來避免 CORS 錯誤
				changeOrigin: true,
				// 將前端請求的 `/api` 路徑覆寫，意思是不要將 `/api` 部分發送到後端，否則出現重複字串就會錯誤
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
