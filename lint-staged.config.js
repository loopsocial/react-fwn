module.exports = {
  'src/**/*.js': filenames => {
    return [
      'npm run build',
      'git add ./dist',
      'npm run build-storybook',
      'git add ./docs',
      `eslint --fix ${filenames.join(' ')}`,
      `prettier --write ${filenames.join(' ')}`
    ]
  }
}
