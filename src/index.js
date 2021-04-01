import React from 'react'
import PropTypes from 'prop-types'
import Script from 'react-load-script'

const ReactFWN = (props) => {
  const { Fragment, useState } = React // Only import defaults from modules, then decompose. This is due to CRA's webpack not working properly with esm modules.
  const { script_url, ...rest } = props || {}
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [scriptError, setScriptError] = useState(false)

  return (
    <Fragment>
      {!scriptLoaded && (
        <Script
          url={script_url || 'https://asset.fwcdn2.com/js/fwn.js'}
          onError={() => setScriptError(true)}
          onLoad={() => setScriptLoaded(true)}
        />
      )}
      {scriptError && <div>Firework Network script failed to load</div>}
      {rest.mode === 'story' ? (
        <fw-storyblock {...rest}></fw-storyblock>
      ) : (
        <fw-embed-feed {...rest}></fw-embed-feed>
      )}
    </Fragment>
  )
}

ReactFWN.propTypes = {
  app_id: PropTypes.string,
  channel: PropTypes.string,
  hashtag: PropTypes.string,
  playlist: PropTypes.string,
  video: PropTypes.string,
  mode: PropTypes.string,
  open_in: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  autoplay: PropTypes.bool,
  placement: PropTypes.string,
  page_type: PropTypes.string,
  onLoad: PropTypes.func,
  onClick: PropTypes.func,
  onError: PropTypes.func,
}

ReactFWN.defaultProps = {}

export default ReactFWN
