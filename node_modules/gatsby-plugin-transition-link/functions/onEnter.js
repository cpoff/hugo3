"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onEnter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _requestanimationframeTimer = require("requestanimationframe-timer");

var onEnter = function onEnter(_ref) {
  var node = _ref.node,
      inTransition = _ref.inTransition,
      entryTrigger = _ref.entryTrigger,
      entryProps = _ref.entryProps,
      exitProps = _ref.exitProps,
      triggerResolve = _ref.triggerResolve,
      pathname = _ref.pathname,
      preventScrollJump = _ref.preventScrollJump,
      hash = _ref.hash,
      _ref$entryProps$delay = _ref.entryProps.delay,
      delay = _ref$entryProps$delay === void 0 ? 0 : _ref$entryProps$delay,
      _ref$appearAfter = _ref.appearAfter,
      appearAfter = _ref$appearAfter === void 0 ? 0 : _ref$appearAfter,
      e = _ref.e;

  if (inTransition && !preventScrollJump) {
    (0, _requestanimationframeTimer.setTimeout)(function () {
      var _window;

      var scrollTo = [0, 0]; // handle hashes that link to ID's
      // for ex /page-2#heading-section

      if (hash) {
        var hashElement = document.getElementById(hash);

        if (hashElement) {
          var clientRect = hashElement.getBoundingClientRect();
          scrollTo = [0, clientRect.top];
        }
      }

      (_window = window).scrollTo.apply(_window, scrollTo);
    }, appearAfter);
  } else if (!inTransition) {
    // If session storage fails due to cookies being disabled,
    // scroll to the top after every navigation
    var position = [0, 0];

    try {
      var storageKey = "@@scroll|" + pathname;
      position = JSON.parse(sessionStorage.getItem(storageKey));
    } catch (e) {
      console.warn("[gatsby-plugin-transition-link] Unable to save state in sessionStorage; sessionStorage is not available.");
    } finally {
      var _window2;

      (_window2 = window).scrollTo.apply(_window2, position);
    }
  }

  if (!inTransition) return;
  var removed = entryProps.trigger,
      entryPropsTrimmed = (0, _objectWithoutPropertiesLoose2.default)(entryProps, ["trigger"]);
  var timeout = appearAfter + delay;
  var visiblePromise = new Promise(function (resolve) {
    (0, _requestanimationframeTimer.setTimeout)(function () {
      return resolve();
    }, timeout);
  });
  triggerResolve.entry((0, _extends2.default)({}, entryPropsTrimmed, {
    visible: visiblePromise,
    node: node
  }));
  entryTrigger && typeof entryTrigger === 'function' && entryTrigger({
    entry: entryProps,
    exit: exitProps,
    node: node,
    e: e
  });
};

exports.onEnter = onEnter;