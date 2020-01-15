"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.TransitionLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _shouldNavigate = require("../utils/shouldNavigate");

var _triggerTransition = require("../utils/triggerTransition");

var _createTransitionContext = require("../context/createTransitionContext");

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionLink.js";

if (typeof _react.forwardRef === 'undefined') {
  _react.forwardRef = (function forwardRef(C) {
    return C;
  }, function () {
    throw new Error('"' + "forwardRef" + '" is read-only.');
  }());
}

var TransitionLink = (0, _react.forwardRef)(function (_ref, ref) {
  var to = _ref.to,
      children = _ref.children,
      exit = _ref.exit,
      entry = _ref.entry,
      activeStyle = _ref.activeStyle,
      partiallyActive = _ref.partiallyActive,
      style = _ref.style,
      className = _ref.className,
      activeClassName = _ref.activeClassName,
      state = _ref.state,
      _onClick = _ref.onClick,
      trigger = _ref.trigger,
      replace = _ref.replace,
      innerRef = _ref.innerRef,
      preventScrollJump = _ref.preventScrollJump,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["to", "children", "exit", "entry", "activeStyle", "partiallyActive", "style", "className", "activeClassName", "state", "onClick", "trigger", "replace", "innerRef", "preventScrollJump"]);
  return _react.default.createElement(_createTransitionContext.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, function (_ref2) {
    var disableAnimation = _ref2.disableAnimation,
        context = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["disableAnimation"]);
    return _react.default.createElement(_gatsby.Link, (0, _extends2.default)({
      style: style,
      activeStyle: activeStyle,
      className: className,
      activeClassName: activeClassName,
      partiallyActive: partiallyActive,
      onClick: function onClick(event) {
        // If the user has set their browser or OS to prefers-reduced-motion
        // we should respect that.
        if (disableAnimation) {
          return;
        }

        var weShouldNavigate = (0, _shouldNavigate.shouldNavigate)(event);

        if (weShouldNavigate) {
          (0, _triggerTransition.triggerTransition)((0, _extends2.default)({
            event: event,
            to: to,
            exit: exit,
            entry: entry,
            trigger: trigger,
            replace: replace,
            preventScrollJump: preventScrollJump,
            linkState: state
          }, context));
        }

        if (typeof _onClick === 'function') {
          _onClick(event, weShouldNavigate);
        }
      },
      to: to // use gatsby link so prefetching still happens. this is prevent defaulted in triggertransition
      ,
      ref: ref || innerRef
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), children);
  });
});
exports.TransitionLink = TransitionLink;
TransitionLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  exitLength: _propTypes.default.number,
  entryDelay: _propTypes.default.number,
  exitFn: _propTypes.default.func,
  entryState: _propTypes.default.object
};