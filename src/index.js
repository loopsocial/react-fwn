import React, { useEffect } from 'react'

const ReactFWN = (props) => {
  const { Fragment } = React // Only import defaults from modules, then decompose. This is due to CRA's webpack not working properly with esm modules.
  const { script_url, ...rest } = props || {}

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const src = script_url || 'https://asset.fwcdn2.com/js/fwn.js'

      if (!document.querySelectorAll(`script[src~="${src}"]`).length) {
        const script = document.createElement('script')
        script.async = true
        script.src = src
        script.type = 'text/javascript'
        document.head.appendChild(script)
      }
    }
  }, [])

  return (
    <Fragment>
      {rest.mode === 'story' ? (
        <fw-storyblock {...rest}></fw-storyblock>
      ) : (
        <fw-embed-feed {...rest}></fw-embed-feed>
      )}
    </Fragment>
  )
}

export default ReactFWN
