import React from 'react'
import { mount } from 'enzyme'
import Script from 'react-load-script'
import ReactFWN from './index'

test('ReactFWN renders just fine', () => {
  const wrapper = mount(<ReactFWN />)
  const scriptTag = wrapper.find(Script)

  expect(scriptTag.props().url).toEqual('https://asset.fwcdn1.com/js/fwn.js')
})
