import React from 'react'
import useScript from 'react-script-hook'
import { withKnobs, text } from '@storybook/addon-knobs'
import ReactFWN from '../src/index'
import ArticleWrapper from './wrappers/article'
import ArticleFixedSidebarWrapper from './wrappers/article-fixed-sidebar'
import config from './config'

export default {
  title: 'Story Block within context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

const Article = ({ channel, video }) => {
  useScript({
    src: `${config.script_host}/js/storyblock.js`,
  })

  const channelKnob = text('Channel', channel || 'modernculture')
  const videoKnob = text('Video', video || '')

  return (
    <ArticleWrapper>
      <fw-storyblock channel={channelKnob} video={videoKnob}></fw-storyblock>
    </ArticleWrapper>
  )
}

export const ArticleAfter = () => {
  return <Article />
}

export const ArticleWithFireworkChannel = () => <Article channel="firework" />

export const ArticleStoryblockV2 = () => {
  useScript({
    src: `${config.script_host}/js/storyblock.js`,
  })
  useScript({
    src: `${config.script_host}/js/embed-feed.js`,
  })

  return (
    <ArticleWrapper
      storyblockMobile={
        <div className="stretchy-wrapper d-block d-md-none">
          <div>
            <fw-storyblock
              channel="demoads"
              autoplay="false"
              screen="mobile"
            ></fw-storyblock>
          </div>
        </div>
      }
      storyblockDesktop={
        <div className="stretchy-wrapper">
          <div>
            <fw-storyblock
              channel="demoads"
              screen="tablet,desktop"
            ></fw-storyblock>
          </div>
        </div>
      }
      row={
        <fw-embed-feed
          app_id="q9o_hqTL4w8E3lyFFR9UPV-21CJN1QUK"
          open_in="_iframe"
          mode="row"
        ></fw-embed-feed>
      }
    />
  )
}

export const ArticleStoryblockV2FixedSidebar = () => {
  useScript({
    src: `${config.script_host}/js/storyblock.js`,
  })
  useScript({
    src: `${config.script_host}/js/embed-feed.js`,
  })

  return (
    <ArticleFixedSidebarWrapper
      storyblockMobile={
        <div className="stretchy-wrapper d-block d-md-none">
          <div>
            <fw-storyblock
              channel="demoads"
              autoplay="false"
              screen="mobile"
            ></fw-storyblock>
          </div>
        </div>
      }
      storyblockDesktop={
        <div className="stretchy-wrapper">
          <div>
            <fw-storyblock
              channel="demoads"
              screen="tablet,desktop"
            ></fw-storyblock>
          </div>
        </div>
      }
      row={
        <fw-embed-feed
          app_id="q9o_hqTL4w8E3lyFFR9UPV-21CJN1QUK"
          open_in="_iframe"
          mode="row"
        ></fw-embed-feed>
      }
    />
  )
}
