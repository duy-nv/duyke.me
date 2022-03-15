const path = require('path')
const builtinModules = require('builtin-modules')
const { bundle } = require('@surmon-china/libundler')
const packageJSON = require('../package.json')

exports.bundleBFFServer = (paths) => {
  console.log('\nBFF server bundling...\n')
  return bundle({
    libName: 'bff',
    entry: 'src/bff.ts',
    outDir: paths.dist,
    outFileName: 'bff',
    targets: ['cjs'],
    parser: false,
    sourcemap: true,
    minimize: false,
    alias: {
      entries: {
        '@': path.resolve(__dirname, '..', 'src')
      }
    },
    external: [
      ...builtinModules,
      ...Object.keys(packageJSON.dependencies),
      ...Object.keys(packageJSON.devDependencies)
    ],
    typescript: {
      tsconfig: path.resolve(__dirname, '..', 'tsconfig.json')
    }
  })
}