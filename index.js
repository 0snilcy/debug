"use strict";
exports.__esModule = true;
var debug_1 = require("debug");
var wrap = function (icon) { return debug_1["default"](icon + " --> "); };
exports["default"] = {
    log: wrap(''),
    info: wrap('🌀'),
    warn: wrap('🔅'),
    err: wrap('❌')
};
