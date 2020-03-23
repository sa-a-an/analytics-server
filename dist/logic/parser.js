"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function parser(file) {
  var fs = require('fs');

  var FileData = fs.readFileSync(file, 'utf-8');
  console.log(FileData);
}

var _default = parser;
exports["default"] = _default;