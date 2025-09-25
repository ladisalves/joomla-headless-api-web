// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';

const certDir = path.resolve('../certs');
const certPath = path.join(certDir, 'localhost.pem');
const keyPath = path.join(certDir, 'localhost-key.pem');

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      https: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      },
      host: 'localhost',
      port: 4000,
    },
  },
});
