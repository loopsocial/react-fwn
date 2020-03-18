const isRollup = process.env.ROLLUP === 'true'
const isTestRunner = false

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: isRollup ? false : 'commonjs',
        targets: isTestRunner ? { node: 'current' } : {},
        forceAllTransforms: isRollup
      }
    ],
    '@babel/preset-react'
  ]
}
