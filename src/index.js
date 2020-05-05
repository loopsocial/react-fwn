import React from 'react'
import PropTypes from 'prop-types'
import Script from 'react-load-script'

const ReactFWN = (props) => {
  const { Fragment, useLayoutEffect, useRef, useState } = React // Only import defaults from modules, then decompose. This is due to CRA's webpack not working properly with esm modules.
  const { script_url, api_host, ...rest } = props || {}
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [scriptError, setScriptError] = useState(false)
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (scriptLoaded && containerRef.current) {
      const options = {
        ...rest,
        target: containerRef.current,
      }
      if (api_host) {
        options.api_host = api_host
      }
      window._fwn && window._fwn.render && window._fwn.render(options)
    }
  }, [scriptLoaded, containerRef.current, props])

  return (
    <Fragment>
      {!scriptLoaded && (
        <Script
          url={script_url || 'https://asset.fwcdn1.com/js/fwn.js'}
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
  title: PropTypes.string,
  autoplay: PropTypes.bool,
  placement: PropTypes.string,
  page_type: PropTypes.string,
  disable_tracking: PropTypes.bool,
  onLoad: PropTypes.func,
  onClick: PropTypes.func,
  onError: PropTypes.func,
}

ReactFWN.defaultProps = {}

export default ReactFWN
