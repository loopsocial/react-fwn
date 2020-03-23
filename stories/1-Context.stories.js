import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  radios,
} from '@storybook/addon-knobs'
import ReactFWN from '../src/index'
import AlbumWrapper from './wrappers/album'
import BlogWrapper from './wrappers/blog'
import CarouselWrapper from './wrappers/carousel'
import config from './config'

export default {
  title: 'Within context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

const optionsAppId = () => text('App ID', config.app_id)

const optionsMode = (selected) =>
  radios(
    'Mode',
    {
      row: 'row',
      grid: 'grid',
      pinned: 'pinned',
    },
    selected
  )

const optionsOpenIn = () =>
  radios(
    'Open in',
    {
      auto: 'auto',
      _self: '_self',
      _blank: '_blank',
      _modal: '_iframe',
    },
    ''
  )

const options = {
  script_url: config.script_url,
  api_host: config.api_host,
  placement: 'middle',
  page_type: 'feed',
  onload: action('Feed loaded'),
  onclick: action('Feed clicked'),
  onerror: action('Feed failed'),
}

export const Blog = () => (
  <BlogWrapper>
    <ReactFWN
      {...options}
      app_id={optionsAppId()}
      mode={optionsMode('row')}
      open_in={optionsOpenIn()}
      autoplay={boolean('Autoplay', true)}
    />
  </BlogWrapper>
)

export const Homepage = () => (
  <CarouselWrapper>
    <ReactFWN
      {...options}
      app_id={optionsAppId()}
      mode={optionsMode('row')}
      open_in={optionsOpenIn()}
      autoplay={boolean('Autoplay', true)}
    />
  </CarouselWrapper>
)

export const Album = () => (
  <AlbumWrapper>
    <ReactFWN
      {...options}
      app_id={optionsAppId()}
      mode={optionsMode('grid')}
      open_in={optionsOpenIn()}
      autoplay={boolean('Autoplay', true)}
    />
  </AlbumWrapper>
)
