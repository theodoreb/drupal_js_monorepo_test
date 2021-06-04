import { terser } from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';
import pkg from './package.json';

const version = pkg.version ?? 'DEV';
const date = new Date().toJSON().split('T')[0];
const banner = `/*! ${pkg.name} - v${version} - ${date} */`;

export default [
  {
    input: 'src/once.js',
    output: { file: 'dist/once.js', banner },
  },
  {
    input: 'dist/once.js',
    output: {
      name: 'once',
      file: pkg.browser,
      format: 'iife',
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
    plugins: [
      // Transform down to ES5, do not error out on export/import lines.
      buble({ transforms: { modules: false } }),
      // Minify resulting ES5 code, add back banner.
      terser({ format: { comments: false, preamble: banner } }),
    ],
  },
];
