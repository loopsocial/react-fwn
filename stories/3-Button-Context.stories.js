import React from 'react'
import { withKnobs, text, radios } from '@storybook/addon-knobs'
import ReactFWN from '../src/index'
import AlbumWrapper from './wrappers/album'
import BlogWrapper from './wrappers/blog'
import CarouselWrapper from './wrappers/carousel'

export default {
  title: 'Button within context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

const ChannelButton = () => {
  const optionsOpenIn = () =>
    radios(
      'Open in',
      {
        _self: '_self',
        _blank: '_blank',
      },
      ''
    )

  const optionsPlacement = (selected) =>
    radios(
      'Placement',
      {
        'top-right': 'top-right',
        'top-left': 'top-left',
        'bottom-right': 'bottom-right',
        'bottom-left': 'bottom-left',
      },
      selected
    )

  const buttonOpts = {
    target: optionsOpenIn('_blank'),
    placement: optionsPlacement('top-right'),
    channel: text('Channel', 'firework'),
    title: text('Title', 'Firework Stories'),
  }

  return (
    <fw-channel-button
      placement={buttonOpts.placement}
      target={buttonOpts.target}
      channel={buttonOpts.channel}
      text={buttonOpts.title}
      player="v3"
    >
      <a href={`https://fireworktv.com/ch/${buttonOpts.channel}`}>
        {buttonOpts.title}
      </a>
    </fw-channel-button>
  )
}

export const Blog = () => (
  <BlogWrapper>
    <ChannelButton />
  </BlogWrapper>
)

export const Homepage = () => (
  <CarouselWrapper>
    <ChannelButton />
  </CarouselWrapper>
)

export const Album = () => (
  <AlbumWrapper>
    <ChannelButton />
  </AlbumWrapper>
)
