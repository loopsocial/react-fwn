import React from 'react'
import useScript from 'react-script-hook'
import { withKnobs } from '@storybook/addon-knobs'
import ReactFWN from '../src/index'
import ArticleWrapper from './wrappers/article'
import ArticleFixedSidebarWrapper from './wrappers/article-fixed-sidebar'

export default {
  title: 'Story Block within context',
  component: ReactFWN,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } },
}

export const ArticleBefore = () => {
  useScript({
    src: 'https://fw.tv/js/fwn.js',
  })

  return (
    <ArticleWrapper>
      <div className="article-before-image" />
    </ArticleWrapper>
  )
}

const Article = ({ channel, video }) => {
  useScript({
    src: 'https://fw.tv/js/fwn.js',
  })

  return (
    <ArticleWrapper>
      <div
        className="fw-embed"
        data-widget="hero"
        data-channel={channel}
        data-video={video}
        style={{ height: '75vh', background: 'black' }}
      >
        <section>
          <a href="https://fw.tv/firework" style={{ color: 'black' }}>
            Firework
          </a>
        </section>
      </div>
    </ArticleWrapper>
  )
}

export const ArticleAfter = () => (
  <Article channel="talesfromtgiff" video="vJZkyn" />
)

export const ArticleWithFireworkChannel = () => (
  <Article channel="firework" />
)

export const ArticleStoryblockV2 = () => {
  useScript({
    src:
      'https://zeffo-git-feat-storyblock.firework.vercel.app/js/storyblock.js',
  })
  useScript({
    src:
      'https://asset.fwcdn1.com/js/embed-feed.js',
  })

  return (
    <ArticleWrapper
      storyblockMobile={
        <div className="stretchy-wrapper d-block d-md-none">
          <div>
            <fw-storyblock channel="demoads" autoplay="false" screen="mobile"></fw-storyblock>
          </div>
        </div>
      }
      storyblockDesktop={
        <div className="stretchy-wrapper">
          <div>
            <fw-storyblock channel="demoads" screen="tablet,desktop"></fw-storyblock>
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
    src:
      'https://zeffo-git-feat-storyblock.firework.vercel.app/js/storyblock.js',
  })
  useScript({
    src:
      'https://asset.fwcdn1.com/js/embed-feed.js',
  })

  return (
    <ArticleFixedSidebarWrapper
      storyblockMobile={
        <div className="stretchy-wrapper d-block d-md-none">
          <div>
            <fw-storyblock channel="demoads" autoplay="false" screen="mobile"></fw-storyblock>
          </div>
        </div>
      }
      storyblockDesktop={
        <div className="stretchy-wrapper">
          <div>
            <fw-storyblock channel="demoads" screen="tablet,desktop"></fw-storyblock>
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

