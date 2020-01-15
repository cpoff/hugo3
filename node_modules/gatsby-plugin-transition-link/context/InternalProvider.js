"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createTransitionContext = require("./createTransitionContext");

var _getPagesPromises = _interopRequireDefault(require("../utils/getPagesPromises"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/context/InternalProvider.js";

var InternalProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(InternalProvider, _Component);

  function InternalProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var prefersReducedMotion = typeof window !== "undefined" && window.matchMedia('(prefers-reduced-motion: reduce)');
    _this.state = {
      inTransition: false,
      disableAnimation: prefersReducedMotion.matches,
      // event
      e: false,
      // exit
      exitDelay: 0,
      exitLength: 0,
      exitState: {},
      exitProps: {},
      exitTrigger: false,
      // entry
      entryDelay: 0,
      entryLength: 0,
      entryState: {},
      entryProps: {},
      entryTrigger: false,
      // state updates
      updateContext: function updateContext(obj) {
        return _this.setState(obj);
      }
    };

    if (prefersReducedMotion && typeof prefersReducedMotion.addEventListener === "function") {
      prefersReducedMotion.addEventListener('change', function () {
        _this.setState({
          disableAnimation: prefersReducedMotion.matches
        });
      });
    } else if (prefersReducedMotion && typeof prefersReducedMotion.addListener === "function") {
      prefersReducedMotion.addListener(function () {
        _this.setState({
          disableAnimation: prefersReducedMotion.matches
        });
      });
    }

    return _this;
  }

  var _proto = InternalProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.state.updateContext((0, _getPagesPromises.default)());
  };

  _proto.render = function render() {
    return _react.default.createElement(_createTransitionContext.Provider, {
      value: this.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, this.props.children);
  };

  return InternalProvider;
}(_react.Component);

InternalProvider.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = InternalProvider;
exports.default = _default;