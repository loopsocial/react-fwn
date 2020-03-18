import React from 'react'
import { shallow } from 'enzyme'
import ReactFWN from './index'

test('ReactFWN renders just fine', () => {
  const component = shallow(<ReactFWN />)
  expect(component.text()).toEqual('<Script />')
})
