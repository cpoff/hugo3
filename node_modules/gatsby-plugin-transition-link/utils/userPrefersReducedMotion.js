"use strict";

exports.__esModule = true;
exports.default = void 0;

var _default = function _default() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

exports.default = _default;