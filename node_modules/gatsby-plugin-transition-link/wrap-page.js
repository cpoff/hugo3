"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/wrap-page.js";

var React = require('react');

var TransitionHandler = require('./components/TransitionHandler').default;

var Layout = require('./components/Layout').LayoutComponent; // eslint-disable-next-line react/prop-types,react/display-name


module.exports = function (_ref, pluginOptions) {
  var element = _ref.element,
      props = _ref.props;
  return React.createElement(Layout, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), React.createElement(TransitionHandler, (0, _extends2.default)({}, props, pluginOptions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), element));
};