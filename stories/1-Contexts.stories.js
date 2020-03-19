import React, { Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  radios
} from '@storybook/addon-knobs'
import AlbumWrapper from './wrap/album'
import BlogWrapper from './wrap/blog'
import CarouselWrapper from './wrap/carousel'
import ReactFWN from '../src/index'

export default {
  title: 'Embed/In context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { page: null } },
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

export const Ablum = () => (
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