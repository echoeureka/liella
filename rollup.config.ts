import { defineConfig } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  input: './lib/index.ts',
  output: {
    file: './liella.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node'
  },
  plugins: [resolve({ preferBuiltins: false }), typescript(), commonjs()]
});
