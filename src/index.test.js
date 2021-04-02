import React from 'react'
import { render } from '@testing-library/react'
import ReactFWN from './index'

const headAppendChildMock = jest.spyOn(document.head, 'appendChild')

describe('ReactFWN component', () => {
  it("should inject component's script", () => {
    const { rerender, unmount } = render(<ReactFWN />)

    unmount()
    rerender(<ReactFWN />)

    unmount()
    rerender(<ReactFWN />)

    expect(headAppendChildMock.mock.calls).toMatchSnapshot()
  })

  it('should render default <fw-embed-feed /> custom component', () => {
    const { container, getByText } = render(
      <ReactFWN arg1="value1" arg2="value2" />
    )

    getByText((_, element) => element.tagName.toLowerCase() === 'fw-embed-feed')
    expect(container).toMatchSnapshot()
  })

  test('should render <fw-storyblock /> custom component for mode=story', () => {
    const { container, getByText } = render(
      <ReactFWN mode="story" arg1="value1" arg2="value2" />
    )

    getByText((_, element) => element.tagName.toLowerCase() === 'fw-storyblock')
    expect(container).toMatchSnapshot()
  })
})
