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
import config from './config'

export default {
  title: 'Component',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

const optionsAppId = ({ group }) => text('App ID', config.app_id, group)

const optionsAppId_add = ({ group }) =>
  text('App ID additional', config.app_id_additional, group)

const optionsMode = ({ value, group }) =>
  radios(
    'Mode',
    {
      row: 'row',
      grid: 'grid',
      pinned: 'pinned'
    },
    value,
    group
  )

const optionsOpenIn = ({ value, group }) =>
  radios(
    'Open in',
    {
      auto: 'auto',
      _self: '_self',
      _blank: '_blank',
      _modal: '_iframe'
    },
    value,
    group
  )

const optionsAutoplay = ({ value, group }) => boolean('Autoplay', value, group)

const options = {
  script_url: config.script_url,
  api_host: config.api_host,
  placement: 'middle',
  page_type: 'feed',
  onload: action('Feed loaded'),
  onclick: action('Feed clicked'),
  onerror: action('Feed failed')
}

export const Row = () => (
  <ReactFWN
    {...options}
    app_id={optionsAppId({})}
    mode={optionsMode({ value: 'row' })}
    open_in={optionsOpenIn({})}
    autoplay={optionsAutoplay({ value: true })}
  />
)

export const Grid = () => (
  <ReactFWN
    {...options}
    app_id={optionsAppId({})}
    mode={optionsMode({ value: 'grid' })}
    title={text('Title (Grid only)', 'Stories and Short Videos')}
    max_videos={number('Max. videos (Grid only)', 30)}
    open_in={optionsOpenIn({})}
    autoplay={optionsAutoplay({ value: true })}
  />
)

export const Pinned = () => (
  <ReactFWN
    {...options}
    app_id={optionsAppId({})}
    mode={optionsMode({ value: 'pinned' })}
    open_in={optionsOpenIn({})}
    autoplay={optionsAutoplay({ value: true })}
  />
)

export const Multiple = () => (
  <Fragment>
    <ReactFWN
      {...options}
      app_id={optionsAppId({ group: 'Embed #1' })}
      mode={optionsMode({ value: 'row', group: 'Embed #1' })}
      open_in={optionsOpenIn({ group: 'Embed #1' })}
      autoplay={optionsAutoplay({ value: true, group: 'Embed #1' })}
    />
    <ReactFWN
      {...options}
      app_id={optionsAppId_add({ group: 'Embed #2' })}
      mode={optionsMode({ value: 'pinned', group: 'Embed #2' })}
      open_in={optionsOpenIn({ group: 'Embed #2' })}
      autoplay={optionsAutoplay({ value: true, group: 'Embed #2' })}
    />
  </Fragment>
)
