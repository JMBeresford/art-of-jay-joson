"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _AspectRatioBox = _interopRequireDefault(require("./../AspectRatioBox"));

var _react = _interopRequireDefault(require("react"));

const transparentPixelSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const Video = _react.default.forwardRef((_ref, ref) => {
  let {
    poster,
    className,
    sources
  } = _ref,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["poster", "className", "sources"]);
  // Grab the aspect ratio out of the first source
  const aspectRatio = sources[0].aspectRatio;
  return _react.default.createElement(_AspectRatioBox.default, {
    aspectRatio: aspectRatio
  }, _react.default.createElement("div", {
    style: Object.assign({
      width: '100%',
      height: '100%'
    }, poster ? {
      background: `url(${poster}) center / contain no-repeat`
    } : {})
  }, _react.default.createElement("video", (0, _extends2.default)({
    className: className,
    preload: "true",
    style: {
      width: '100%',
      height: '100%'
    }
  }, props, {
    ref: ref
  }), sources.map(s => _react.default.createElement("source", {
    key: s.src,
    src: s.src,
    type: `video/${s.fileExtension}`
  })))));
});

var _default = Video;
exports.default = _default;