"use strict";
exports.__esModule = true;
var debug_1 = require("debug");
var _a = process.env.USER_NAME, USER_NAME = _a === void 0 ? 'Meow' : _a;
exports["default"] = (function (serviceName) {
    var string = function (icon) { return debug_1["default"](USER_NAME + "." + serviceName + " " + icon + " "); };
    return {
        log: string('  '),
        info: string('🐟'),
        warn: string('🦁'),
        err: string('🦀')
    };
});
