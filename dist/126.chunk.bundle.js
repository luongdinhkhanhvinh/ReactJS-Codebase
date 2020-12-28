(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./src/helpers/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Util\", function() { return Util; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"util\", function() { return util; });\nvar Util = /** @class */ (function () {\n    function Util() {\n    }\n    Util.prototype.isValidNumber = function (number) {\n        return !isNaN(number);\n    };\n    Util.prototype.isValidEmail = function (email) {\n        var reg = /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,})+$/;\n        return !reg.test(email);\n    };\n    /**\n     * Validate phone number\n     * @param {String} value\n     */\n    Util.prototype.isValidPhoneNumber = function (value) {\n        var reg = /^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/;\n        return !reg.test(value);\n    };\n    /**\n     * Validate password\n     * @param {String} value\n     */\n    Util.prototype.isValidPassword = function (value) {\n        return value.length >= 8;\n    };\n    Util.prototype.formatPhoneNumber = function (phoneNumberString) {\n        var cleaned = ('' + phoneNumberString).replace(/\\D/g, '');\n        var match = cleaned.match(/^(1|)?(\\d{3})(\\d{3})(\\d{4})$/);\n        if (match) {\n            var intlCode = match[1] ? '+1 ' : '';\n            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');\n        }\n        return null;\n    };\n    Util.prototype.formatString = function (value, variables) {\n        if (!value) {\n            return '';\n        }\n        return value.replace(/(\\{\\w+\\})|(:\\w+)/g, function (match) {\n            return variables[match.replace(/\\{|\\}|:/g, '')] || '';\n        });\n    };\n    Util.prototype.randomString = function (length) {\n        var text = '';\n        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n        for (var i = 0; i < length; i++) {\n            text += possible.charAt(Math.floor(Math.random() * possible.length));\n        }\n        return text;\n    };\n    Util.prototype.formatNumberWithComma = function (value, defaultValue) {\n        if (!value) {\n            return defaultValue !== undefined ? defaultValue : '0';\n        }\n        return value.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n    };\n    Util.prototype.convertBase64ToBlob = function (data) {\n        return fetch(data).then(function (res) { return res.blob(); });\n    };\n    Util.prototype.convertBlobToFile = function (blob, fileName) {\n        var b = blob;\n        b.lastModifiedDate = new Date();\n        b.name = fileName;\n        return blob;\n    };\n    return Util;\n}());\n\nvar util = new Util();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy91dGlscy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzP2JmNmIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFV0aWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXRpbCgpIHtcbiAgICB9XG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZE51bWJlciA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihudW1iZXIpO1xuICAgIH07XG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZEVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHZhciByZWcgPSAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKiguXFx3ezIsfSkrJC87XG4gICAgICAgIHJldHVybiAhcmVnLnRlc3QoZW1haWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGhvbmUgbnVtYmVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZFBob25lTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZWcgPSAvXlsrXT9bKF0/WzAtOV17M31bKV0/Wy1cXHMuXT9bMC05XXszfVstXFxzLl0/WzAtOV17NCw2fSQvO1xuICAgICAgICByZXR1cm4gIXJlZy50ZXN0KHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZFBhc3N3b3JkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPj0gODtcbiAgICB9O1xuICAgIFV0aWwucHJvdG90eXBlLmZvcm1hdFBob25lTnVtYmVyID0gZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgaW50bENvZGUgPSBtYXRjaFsxXSA/ICcrMSAnIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5mb3JtYXRTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHZhcmlhYmxlcykge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhcXHtcXHcrXFx9KXwoOlxcdyspL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1ttYXRjaC5yZXBsYWNlKC9cXHt8XFx9fDovZywgJycpXSB8fCAnJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5yYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH07XG4gICAgVXRpbC5wcm90b3R5cGUuZm9ybWF0TnVtYmVyV2l0aENvbW1hID0gZnVuY3Rpb24gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogJzAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5jb252ZXJ0QmFzZTY0VG9CbG9iID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmJsb2IoKTsgfSk7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5jb252ZXJ0QmxvYlRvRmlsZSA9IGZ1bmN0aW9uIChibG9iLCBmaWxlTmFtZSkge1xuICAgICAgICB2YXIgYiA9IGJsb2I7XG4gICAgICAgIGIubGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGIubmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICB9O1xuICAgIHJldHVybiBVdGlsO1xufSgpKTtcbmV4cG9ydCB7IFV0aWwgfTtcbmV4cG9ydCB2YXIgdXRpbCA9IG5ldyBVdGlsKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/utils.ts\n");

/***/ })

}]);