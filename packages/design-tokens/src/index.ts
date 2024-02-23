import { join } from 'node:path';
import { copyFileSync } from 'node:fs'
import StyleDict from 'style-dictionary';

const defaultPath = join(__dirname, '../dist/');

// copyFileSync(join(__dirname, '../package.json'),join(defaultPath, 'package.json'))


const dictionary = StyleDict.extend({
  source: [join(__dirname,'./tokens/**/*.js')],
  platforms:{
    css: {
      transformGroup: 'css',
      buildPath: defaultPath,
      files: [{
        destination: `variables.css`,
        format: `css/variables`,
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: defaultPath,
      files: [{
        destination: `_variables.scss`,
        format: `scss/variables`,
      }]
    },
    js: {
      buildPath: defaultPath,
      transformGroup: "js",
      files: [{
        destination: "tokens.js",
        format: "javascript/es6"
      }]
    },
    ts: {
      buildPath: defaultPath,
      transformGroup: "js",
      files:[{
        destination: 'types.d.ts',
        format: 'typescript/es6-declarations'
      }]
    },
    json: {
      buildPath: defaultPath,
      transformGroup: 'js',
      files:[{
        destination: 'tokens.json',
        format: 'json'
      }]
    }
  }
})

dictionary.buildAllPlatforms();

