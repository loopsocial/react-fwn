import React, { Fragment, useEffect, useState, useRef } from 'react'
import useScript from 'react-script-hook'
import hash from 'object-hash'
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
  title: 'Button within context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

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

const useButtonScript = (buttonOpts) => {
  const previousScriptUrl = useRef()
  const [scriptUrl, setScriptUrl] = useState()

  useEffect(() => {
    if (previousScriptUrl.current) {
      document
        .querySelectorAll(`script[src="${previousScriptUrl.current}"]`)
        .forEach((node) => node.remove())

      document.querySelectorAll('.cy-fcb').forEach((node) => node.remove())
    }
  }, [scriptUrl])

  useEffect(() => {
    previousScriptUrl.current = scriptUrl
    setScriptUrl(
      (`${config.script_host}/js/fwn.js` ||
        'https://asset.fwcdn1.com/js/fwn.js') + `?hash=${hash(buttonOpts)}`
    )
  }, [buttonOpts])

  useScript({
    src: scriptUrl,
  })
}

export const Blog = () => {
  const buttonOpts = {
    target: optionsOpenIn('_blank'),
    placement: optionsPlacement('top-right'),
    channel: text('Channel', 'firework'),
    title: text('Title', 'Firework Stories'),
  }

  useButtonScript(buttonOpts)

  return (
    <BlogWrapper>
      <a
        className="fw-channel"
        href="https://fireworktv.com/ch/fireworktv"
        data-placement={buttonOpts.placement}
        data-target={buttonOpts.target}
        data-channel={buttonOpts.channel}
        data-text={buttonOpts.title}
        data-v2="yes"
      >
        {buttonOpts.title}
      </a>
    </BlogWrapper>
  )
}

export const Homepage = () => {
  const buttonOpts = {
    target: optionsOpenIn('_blank'),
    placement: optionsPlacement('top-right'),
    channel: text('Channel', 'firework'),
    title: text('Title', 'Firework Stories'),
  }

  useButtonScript(buttonOpts)

  return (
    <CarouselWrapper>
      <a
        className="fw-channel"
        href="https://fireworktv.com/ch/fireworktv"
        data-placement={buttonOpts.placement}
        data-target={buttonOpts.target}
        data-channel={buttonOpts.channel}
        data-text={buttonOpts.title}
        data-v2="yes"
      >
        {buttonOpts.title}
      </a>
    </CarouselWrapper>
  )
}

export const Album = () => {
  const buttonOpts = {
    target: optionsOpenIn('_blank'),
    placement: optionsPlacement('top-right'),
    channel: text('Channel', 'firework'),
    title: text('Title', 'Firework Stories'),
  }

  useButtonScript(buttonOpts)

  return (
    <AlbumWrapper>
      <a
        className="fw-channel"
        href="https://fireworktv.com/ch/fireworktv"
        data-placement={buttonOpts.placement}
        data-target={buttonOpts.target}
        data-channel={buttonOpts.channel}
        data-text={buttonOpts.title}
        data-v2="yes"
      >
        {buttonOpts.title}
      </a>
    </AlbumWrapper>
  )
}
