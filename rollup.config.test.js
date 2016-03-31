import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  // tell rollup our main entry point
  entry: 'src/flux-pathfinding.test.js',
  dest: 'dist/flux-pathfinding-bundle.test.js',
  format: 'cjs',
  external: ['stream', 'util', 'events', 'path', 'fs'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    }),
    commonjs(),
    nodeResolve({
      jsnext: true,
      main: true
    })
  ]
}
