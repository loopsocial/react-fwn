'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Script = _interopDefault(require('react-load-script'));

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

  var _useState = React.useState(false),
      scriptLoaded = _useState[0],
      setScriptLoaded = _useState[1];

  var _useState2 = React.useState(false),
      scriptError = _useState2[0],
      setScriptError = _useState2[1];

  var containerRef = React.useRef(null);
  React.useLayoutEffect(function () {
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
  return React__default.createElement(React.Fragment, null, !scriptLoaded && React__default.createElement(Script, {
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
  }), React__default.createElement("div", {
    className: "fwn_videos",
    style: {
      width: '100%'
    },
    ref: containerRef
  }), scriptError && React__default.createElement("div", null, "Firework Network script failed to load"));
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

exports.default = ReactFWN;
