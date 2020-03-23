import { addons } from '@storybook/addons'
import theme from './theme'

addons.setConfig({
  theme,
  isFullscreen: false,
  panelPosition: 'bottom',
  showNav: true,
  showPanel: true,
  sidebarAnimations: false
})
