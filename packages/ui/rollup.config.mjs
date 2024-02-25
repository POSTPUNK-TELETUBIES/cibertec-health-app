import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript';
import { dirname, join } from 'node:path'
import { copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url';
import external from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import postcssRp from 'rollup-plugin-postcss';
import { readFileSync, writeFileSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig([{
  external:[
    'react',
    "@emotion/react",
    "@emotion/styled",
    "@mui/icons-material",
    "@mui/material",
    "design-tokens"
  ],
  preserveModules: true,
  input:['./src/index.ts'],
  plugins:[
    external(),
    postcssRp({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true,
      use: ['sass']
  }),
    {
      name: 'closeBundle',
      async closeBundle(){
        const baseDir = join(__dirname,'/dist/index.esm.js')
        const lib = readFileSync(baseDir, {
          encoding: 'utf-8'
        })
        writeFileSync(baseDir, '"use client";' + lib)
        await copyFile(join(__dirname,'package.json'), join(__dirname,'/dist/package.json'))
      }
    },
    
    typescript({exclude: ["src/**/**test.*"]}), 
  ],
  output:[{
    format: 'umd',
    file: './dist/index.umd.js',
    name: 'comparisonMatrix',
  }, {
    format: 'esm',
    file: './dist/index.esm.js',
  }]
}])
