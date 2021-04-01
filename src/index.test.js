import React from 'react'
import { mount } from 'enzyme'
import Script from 'react-load-script'
import ReactFWN from './index'

describe('ReactFWN component', () => {
  test("should inject component's script", () => {
    const wrapper = mount(<ReactFWN />)

    expect(wrapper.find(Script).props().url).toEqual(
      'https://asset.fwcdn2.com/js/fwn.js'
    )
  })

  test('should render default <fw-embed-feed /> custom component', () => {
    const wrapper = mount(<ReactFWN arg1="value1" arg2="value2" />)

    expect(wrapper.find('fw-embed-feed')).toMatchSnapshot()
    expect(wrapper.find(Script).props().url).toEqual(
      'https://asset.fwcdn2.com/js/fwn.js'
    )
  })

  test('should render <fw-storyblock /> custom component for mode=story', () => {
    const wrapper = mount(<ReactFWN mode="story" arg1="value1" arg2="value2" />)

    expect(wrapper.find('fw-storyblock')).toMatchSnapshot()
  })
})
