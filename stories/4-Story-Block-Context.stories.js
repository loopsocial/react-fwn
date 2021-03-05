import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import ReactFWN from '../src/index'
import ArticleWrapper from './wrappers/article'
import ArticleFixedSidebarWrapper from './wrappers/article-fixed-sidebar'

export default {
  title: 'Story Block within context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

const Storyblock = ({ channel, video }) => {
  const channelKnob = text('Channel', channel || 'modernculture')
  const videoKnob = text('Video', video || '')
  return (
    <fw-storyblock
      channel={channelKnob}
      video={videoKnob}
      player="v3"
    ></fw-storyblock>
  )
}

const Article = (props) => {
  return (
    <ArticleWrapper>
      <Storyblock {...props} />
    </ArticleWrapper>
  )
}

export const ArticleAfter = () => {
  return <Article />
}

export const ArticleWithFireworkChannel = () => <Article channel="firework" />

export const ArticleStoryblockV2 = () => {
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
