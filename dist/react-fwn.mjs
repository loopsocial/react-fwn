import React, { useState, useRef, useLayoutEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var ReactFWN = function ReactFWN(props) {
  var _ref = props || {},
      script_url = _ref.script_url,
      api_host = _ref.api_host,
      rest = _objectWithoutPropertiesLoose(_ref, ["script_url", "api_host"]);

  var _useState = useState(false),
      scriptLoaded = _useState[0],
      setScriptLoaded = _useState[1];

  var _useState2 = useState(false),
      scriptError = _useState2[0],
      setScriptError = _useState2[1];

  var containerRef = useRef(null);
  useLayoutEffect(function () {
    if (scriptLoaded && containerRef.current) {
      var options = _extends({}, rest, {
        target: containerRef.current
      });

      if (api_host) {
        options.api_host = api_host;
      }

      window._fwn && window._fwn.render && window._fwn.render(options);
    }
  }, [scriptLoaded, containerRef.current, props]);
  return React.createElement(Fragment, null, !scriptLoaded && React.createElement(Script, {
    url: script_url || 'https://asset.fwcdn1.com/js/fwn.js',
    attributes: {
      id: 'fwn_script'
    },
    onError: function onError() {
      return setScriptError(true);
    },
    onLoad: function onLoad() {
      return setScriptLoaded(true);
    }
  }), React.createElement("div", {
    className: "fwn_videos",
    style: {
      width: '100%'
    },
    ref: containerRef
  }), scriptError && React.createElement("div", null, "Firework Network script failed to load"));
};

ReactFWN.propTypes = {
  app_id: PropTypes.string,
  mode: PropTypes.string,
  open_in: PropTypes.string,
  autoplay: PropTypes.bool,
  placement: PropTypes.string,
  page_type: PropTypes.string,
  onLoad: PropTypes.func,
  onClick: PropTypes.func,
  onError: PropTypes.func
};
ReactFWN.defaultProps = {};

export default ReactFWN;
