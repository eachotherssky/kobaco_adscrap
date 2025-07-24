import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const repo = '/kobaco_adscrap/'; // GitHub Pages 하위 경로

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : repo,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': '/src' },     // 선택: 경로 별칭
  },
}));
