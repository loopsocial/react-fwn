import { addDecorator, addParameters } from '@storybook/react'
import { setConsoleOptions, withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addParameters({
  options: {
    showRoots: false
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})

setConsoleOptions({
  panelExclude: []
})
