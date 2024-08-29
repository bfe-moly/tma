import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
let key = ''
let cert = ''

try {
  key = fs.readFileSync(path.resolve(__dirname, 'local.tg.bybit.com-key.pem')),
      cert= fs.readFileSync(path.resolve(__dirname, 'local.tg.bybit.com.pem')),
} catch (error) {
  console.error('key 和 cert 不存在')
}

export default defineConfig({
  base: '/tma/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    https: {
      key,
      cert,
    },
  },
  plugins: [
    {
      name: 'custom-server-start-message',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          next();
        });

        server.httpServer?.on('listening', () => {
          const address = server.httpServer?.address();
          const host = typeof address === 'string' ? address : address?.address;
          const port = typeof address === 'string' ? '' : address?.port;
          console.log(`Server is running at https://${host}:${port}/tma/`);
          console.log(
            `Server is running at https://local.tg.bybit.com:${port}/tma/`,
          );
        });
      },
    },
  ],
});
