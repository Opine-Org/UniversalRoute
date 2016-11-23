(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './component.js', './helper.js', './reducer.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./component.js'), require('./helper.js'), require('./reducer.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.component, global.helper, global.reducer);
        global.index = mod.exports;
    }
})(this, function (exports, _component, _helper, _reducer) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.reducer = exports.helper = exports.component = undefined;

    var _component2 = _interopRequireDefault(_component);

    var _helper2 = _interopRequireDefault(_helper);

    var _reducer2 = _interopRequireDefault(_reducer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.component = _component2.default;
    exports.helper = _helper2.default;
    exports.reducer = _reducer2.default;
});