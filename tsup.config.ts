import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./server/app.ts'],
  outDir: './static',
  target: 'es6',
  //   tsconfig: './tsconfig.json',
});
