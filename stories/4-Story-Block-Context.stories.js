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
  <Article video="vJZkyn" />
)

export const ArticleWithFireworkChannel = () => (
  <Article channel="firework" />
)