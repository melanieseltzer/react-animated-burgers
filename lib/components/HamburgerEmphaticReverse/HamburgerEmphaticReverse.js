'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../button/Button');

var _StyledBoxEmphatic = require('./StyledBoxEmphatic');

var _StyledLinesEmphaticReverse = require('./StyledLinesEmphaticReverse');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HamburgerEmphaticReverse = function HamburgerEmphaticReverse(props) {
  return _react2.default.createElement(_Button.Button, _extends({}, props, { Box: _StyledBoxEmphatic.StyledBoxEmphatic, Lines: _StyledLinesEmphaticReverse.StyledLinesEmphaticReverse }));
};

exports.default = HamburgerEmphaticReverse;