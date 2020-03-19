import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  radios
} from '@storybook/addon-knobs'
import ReactFWN from '../src/index'

export default {
  title: 'Embed',
  component: ReactFWN,
  decorators: [withKnobs]
}

const optionsAppId = () => text('App ID', 'xPWXeLTvXo-1A-_D8YmbAQbE6dt-y78x') // prod

const optionsMode = selected =>
  radios(
    'Mode',
    {
      row: 'row',
      grid: 'grid',
      pinned: 'pinned'
    },
    selected
  )

const optionsOpenIn = () =>
  radios(
    'Open in',
    {
      auto: '',
      _self: '_self',
      _blank: '_blank',
      _modal: '_iframe'
    },
    ''
  )

const options = {
  mode: 'row',
  open_in: '',
  placement: 'middle',
  page_type: 'feed'
}

export const Row = () => (
  <ReactFWN
    {...options}
    app_id={optionsAppId()}
    mode={optionsMode('row')}
    open_in={optionsOpenIn()}
    autoplay={boolean('Autoplay', true)}
  />
)

export const Grid = () => (
  <ReactFWN
    {...options}
    app_id={optionsAppId()}
    mode={optionsMode('grid')}
    max_videos={number('Max. videos', 30)}
    open_in={optionsOpenIn()}
    autoplay={boolean('Autoplay', true)}
  />
)

export const Pinned = () => (
  <ReactFWN
    {...options}
    app_id={optionsAppId()}
    mode={optionsMode('pinned')}
    open_in={optionsOpenIn()}
    autoplay={boolean('Autoplay', true)}
  />
)

export const Multiple = () => (
  <Fragment>
    <ReactFWN
      {...options}
      app_id={optionsAppId()}
      mode={optionsMode('row')}
      open_in={optionsOpenIn()}
      autoplay={boolean('Autoplay', true)}
    />
    <ReactFWN
      {...options}
      app_id={optionsAppId()}
      mode={optionsMode('row')}
      open_in={optionsOpenIn()}
      autoplay={boolean('Autoplay', true)}
    />
  </Fragment>
)
