import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./server/app.ts'],
  outDir: './static',
  target: 'es5',
  //   tsconfig: './tsconfig.json',
});
