module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ]
}
