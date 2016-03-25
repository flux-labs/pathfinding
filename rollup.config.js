import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  // tell rollup our main entry point
  entry: 'flux-pathfinding.js',
  dest: 'dist/flux-pathfinding-bundle.js',
  format: 'cjs',
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
