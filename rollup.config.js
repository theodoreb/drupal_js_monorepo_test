import { terser } from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';
import pkg from './package.json';

/**
 * Configuration for non minified files to keep documentation for IDE auto
 * completion.
 */
const banner = `/*! @drupal/once - v${pkg.version} - ${
  new Date().toJSON().split('T')[0]
} */`;

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
