import typescript from 'rollup-plugin-typescript2';
import glsl from 'rollup-plugin-glsl';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

export default [{
  input: './src/index.ts',
  output: {
    format: 'umd',
    name: 'lib',
    file: './dist/index.js',
  },
  plugins: [
    resolve(),
    commonjs(),
    glsl({
      include: './src/shaders/**/*.glsl',
      sourceMap: true,
      compress: production
    }),
    typescript({
      typescript: require('typescript'),
    }),
  ],
}];
