"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

const AspectRatioBox = (_ref) => {
  let {
    aspectRatio,
    children,
    className,
    style
  } = _ref,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["aspectRatio", "children", "className", "style"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: className,
    style: Object.assign({
      width: '100%'
    }, style)
  }, props), _react.default.createElement("div", {
    style: {
      height: 0,
      overflow: 'hidden',
      paddingTop: `${100 / aspectRatio}%`,
      position: 'relative'
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }, children)));
};

var _default = AspectRatioBox;
exports.default = _default;