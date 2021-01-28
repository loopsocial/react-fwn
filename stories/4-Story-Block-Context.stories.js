import React from 'react'
import useScript from 'react-script-hook'
import { withKnobs } from '@storybook/addon-knobs'
import ReactFWN from '../src/index'
import ArticleWrapper from './wrappers/article'

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
      'https://zeffo-git-feat-storyblock.firework.vercel.app/js/embed-feed.js',
  })

  return (
    <ArticleWrapper
      storyblockMobile={
        <div className="stretchy-wrapper d-block d-md-none">
          <div>
            <fw-storyblock app_id="H7fPnQM8qqOjD0WLNi6w4llBgznI9eBF" screen="mobile"></fw-storyblock>
          </div>
        </div>
      }
      storyblockDesktop={
        <div className="stretchy-wrapper">
          <div>
            <fw-storyblock app_id="H7fPnQM8qqOjD0WLNi6w4llBgznI9eBF" screen="tablet,desktop"></fw-storyblock>
          </div>
        </div>
      }
      row={
        <fw-embed-feed
          app_id="H7fPnQM8qqOjD0WLNi6w4llBgznI9eBF"
          mode="row"
        ></fw-embed-feed>
      }
    />
  )
}

