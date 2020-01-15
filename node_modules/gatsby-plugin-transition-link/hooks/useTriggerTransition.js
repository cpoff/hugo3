"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useTriggerTransition = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _createTransitionContext = require("../context/createTransitionContext");

var _triggerTransition = require("../utils/triggerTransition");

var useTriggerTransition = function useTriggerTransition() {
  var context = (0, _react.useContext)(_createTransitionContext.Context);

  var progrTriggerTransition = function progrTriggerTransition(options) {
    (0, _triggerTransition.triggerTransition)((0, _extends2.default)({}, context, options));
  };

  return progrTriggerTransition;
};

exports.useTriggerTransition = useTriggerTransition;