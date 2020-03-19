import React, { Fragment, useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Script from 'react-load-script'

const ReactFWN = props => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [scriptError, setScriptError] = useState(false)
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (scriptLoaded && containerRef.current) {
      window._fwn &&
        window._fwn.render &&
        window._fwn.render({
          ...props,
          target: containerRef.current
        })
    }
  }, [scriptLoaded, containerRef.current, props])

  return (
    <Fragment>
      {!scriptLoaded && (
        <Script
          url="//asset.fwcdn1.com/js/fwn.js"
          attributes={{ id: 'fwn_script' }}
          onError={() => setScriptError(true)}
          onLoad={() => setScriptLoaded(true)}
        />
      )}
      <div
        className="fwn_videos"
        style={{ width: '100%' }}
        ref={containerRef}
      />
      {scriptError && <div>Firework Network script failed to load</div>}
    </Fragment>
  )
}

ReactFWN.propTypes = {
  app_id: PropTypes.string,
  mode: PropTypes.string,
  open_in: PropTypes.string,
  placement: PropTypes.string,
  page_type: PropTypes.string
}

ReactFWN.defaultProps = {}

export default ReactFWN
