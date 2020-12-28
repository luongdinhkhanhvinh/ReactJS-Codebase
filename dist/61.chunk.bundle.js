(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./src/helpers/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Util\", function() { return Util; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"util\", function() { return util; });\nvar Util = /** @class */ (function () {\n    function Util() {\n    }\n    Util.prototype.isValidNumber = function (number) {\n        return !isNaN(number);\n    };\n    Util.prototype.isValidEmail = function (email) {\n        var reg = /^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,})+$/;\n        return !reg.test(email);\n    };\n    /**\n     * Validate phone number\n     * @param {String} value\n     */\n    Util.prototype.isValidPhoneNumber = function (value) {\n        var reg = /^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/;\n        return !reg.test(value);\n    };\n    /**\n     * Validate password\n     * @param {String} value\n     */\n    Util.prototype.isValidPassword = function (value) {\n        return value.length >= 8;\n    };\n    Util.prototype.formatPhoneNumber = function (phoneNumberString) {\n        var cleaned = ('' + phoneNumberString).replace(/\\D/g, '');\n        var match = cleaned.match(/^(1|)?(\\d{3})(\\d{3})(\\d{4})$/);\n        if (match) {\n            var intlCode = match[1] ? '+1 ' : '';\n            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');\n        }\n        return null;\n    };\n    Util.prototype.formatString = function (value, variables) {\n        if (!value) {\n            return '';\n        }\n        return value.replace(/(\\{\\w+\\})|(:\\w+)/g, function (match) {\n            return variables[match.replace(/\\{|\\}|:/g, '')] || '';\n        });\n    };\n    Util.prototype.randomString = function (length) {\n        var text = '';\n        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n        for (var i = 0; i < length; i++) {\n            text += possible.charAt(Math.floor(Math.random() * possible.length));\n        }\n        return text;\n    };\n    Util.prototype.formatNumberWithComma = function (value, defaultValue) {\n        if (!value) {\n            return defaultValue !== undefined ? defaultValue : '0';\n        }\n        return value.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');\n    };\n    Util.prototype.convertBase64ToBlob = function (data) {\n        return fetch(data).then(function (res) { return res.blob(); });\n    };\n    Util.prototype.convertBlobToFile = function (blob, fileName) {\n        var b = blob;\n        b.lastModifiedDate = new Date();\n        b.name = fileName;\n        return blob;\n    };\n    return Util;\n}());\n\nvar util = new Util();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy91dGlscy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzP2JmNmIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFV0aWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXRpbCgpIHtcbiAgICB9XG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZE51bWJlciA9IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihudW1iZXIpO1xuICAgIH07XG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZEVtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHZhciByZWcgPSAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKiguXFx3ezIsfSkrJC87XG4gICAgICAgIHJldHVybiAhcmVnLnRlc3QoZW1haWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGhvbmUgbnVtYmVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZFBob25lTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZWcgPSAvXlsrXT9bKF0/WzAtOV17M31bKV0/Wy1cXHMuXT9bMC05XXszfVstXFxzLl0/WzAtOV17NCw2fSQvO1xuICAgICAgICByZXR1cm4gIXJlZy50ZXN0KHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgVXRpbC5wcm90b3R5cGUuaXNWYWxpZFBhc3N3b3JkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPj0gODtcbiAgICB9O1xuICAgIFV0aWwucHJvdG90eXBlLmZvcm1hdFBob25lTnVtYmVyID0gZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICB2YXIgaW50bENvZGUgPSBtYXRjaFsxXSA/ICcrMSAnIDogJyc7XG4gICAgICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5mb3JtYXRTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHZhcmlhYmxlcykge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhcXHtcXHcrXFx9KXwoOlxcdyspL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1ttYXRjaC5yZXBsYWNlKC9cXHt8XFx9fDovZywgJycpXSB8fCAnJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5yYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH07XG4gICAgVXRpbC5wcm90b3R5cGUuZm9ybWF0TnVtYmVyV2l0aENvbW1hID0gZnVuY3Rpb24gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogJzAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5jb252ZXJ0QmFzZTY0VG9CbG9iID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmJsb2IoKTsgfSk7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5jb252ZXJ0QmxvYlRvRmlsZSA9IGZ1bmN0aW9uIChibG9iLCBmaWxlTmFtZSkge1xuICAgICAgICB2YXIgYiA9IGJsb2I7XG4gICAgICAgIGIubGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGIubmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICByZXR1cm4gYmxvYjtcbiAgICB9O1xuICAgIHJldHVybiBVdGlsO1xufSgpKTtcbmV4cG9ydCB7IFV0aWwgfTtcbmV4cG9ydCB2YXIgdXRpbCA9IG5ldyBVdGlsKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/utils.ts\n");

/***/ }),

/***/ "./src/hooks/useLogin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useLogin\", function() { return useLogin; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/tslib/tslib.js\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/react-redux/lib/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./node_modules/react-toastify/dist/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./src/helpers/utils.ts\");\n/* harmony import */ var src_routers_routeName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./src/routers/routeName.ts\");\n/* harmony import */ var src_types_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./src/types/user.ts\");\n/* harmony import */ var _redux_spinner_spinnerType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(\"./src/redux/spinner/spinnerType.ts\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(\"./src/hooks/useAuth.ts\");\n\n\n\n\n\n\n\n\n\n\nvar useLogin = function () {\n    var provider = Object(_useAuth__WEBPACK_IMPORTED_MODULE_9__[\"default\"])().provider;\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"useHistory\"])();\n    var onLoginSuccess = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function () {\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n            history.replace(src_routers_routeName__WEBPACK_IMPORTED_MODULE_6__[\"RouteName\"].HOME);\n            return [2 /*return*/];\n        });\n    }); }, [history]);\n    var onLoginFailure = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (response) {\n        if (response.userStatus === src_types_user__WEBPACK_IMPORTED_MODULE_7__[\"UserStatus\"].UNVERIFIED) {\n            var url = src_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[\"util\"].formatString(src_routers_routeName__WEBPACK_IMPORTED_MODULE_6__[\"RouteName\"].SEND_VERIFICATION_EMAIL, { id: response.id });\n            history.push(url);\n            return;\n        }\n        react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(response.message);\n    }, [history]);\n    var login = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (email, password) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function () {\n        var request, response, error_1;\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    dispatch({ type: _redux_spinner_spinnerType__WEBPACK_IMPORTED_MODULE_8__[\"SHOW_SPINNER\"] });\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 3, 4, 5]);\n                    request = { email: email, password: password };\n                    return [4 /*yield*/, provider.signIn(request)];\n                case 2:\n                    response = _a.sent();\n                    if (response.token) {\n                        return [2 /*return*/, onLoginSuccess()];\n                    }\n                    return [2 /*return*/, onLoginFailure(response)];\n                case 3:\n                    error_1 = _a.sent();\n                    react_toastify__WEBPACK_IMPORTED_MODULE_4__[\"toast\"].error(error_1.message);\n                    return [3 /*break*/, 5];\n                case 4:\n                    dispatch({ type: _redux_spinner_spinnerType__WEBPACK_IMPORTED_MODULE_8__[\"HIDE_SPINNER\"] });\n                    return [7 /*endfinally*/];\n                case 5: return [2 /*return*/];\n            }\n        });\n    }); }, [provider, dispatch, onLoginFailure, onLoginSuccess]);\n    return { login: login };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTG9naW4udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlTG9naW4udHM/MDU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXRpbCB9IGZyb20gJ3NyYy9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IFJvdXRlTmFtZSB9IGZyb20gJ3NyYy9yb3V0ZXJzL3JvdXRlTmFtZSc7XG5pbXBvcnQgeyBVc2VyU3RhdHVzIH0gZnJvbSAnc3JjL3R5cGVzL3VzZXInO1xuaW1wb3J0IHsgSElERV9TUElOTkVSLCBTSE9XX1NQSU5ORVIgfSBmcm9tICcuLi9yZWR1eC9zcGlubmVyL3NwaW5uZXJUeXBlJztcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4vdXNlQXV0aCc7XG5leHBvcnQgdmFyIHVzZUxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm92aWRlciA9IHVzZUF1dGgoKS5wcm92aWRlcjtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIHZhciBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICAgIHZhciBvbkxvZ2luU3VjY2VzcyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShSb3V0ZU5hbWUuSE9NRSk7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH0pO1xuICAgIH0pOyB9LCBbaGlzdG9yeV0pO1xuICAgIHZhciBvbkxvZ2luRmFpbHVyZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UudXNlclN0YXR1cyA9PT0gVXNlclN0YXR1cy5VTlZFUklGSUVEKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gdXRpbC5mb3JtYXRTdHJpbmcoUm91dGVOYW1lLlNFTkRfVkVSSUZJQ0FUSU9OX0VNQUlMLCB7IGlkOiByZXNwb25zZS5pZCB9KTtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCh1cmwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgIH0sIFtoaXN0b3J5XSk7XG4gICAgdmFyIGxvZ2luID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QsIHJlc3BvbnNlLCBlcnJvcl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNIT1dfU1BJTk5FUiB9KTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCA0LCA1XSk7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHByb3ZpZGVyLnNpZ25JbihyZXF1ZXN0KV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgb25Mb2dpblN1Y2Nlc3MoKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG9uTG9naW5GYWlsdXJlKHJlc3BvbnNlKV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvcl8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogSElERV9TUElOTkVSIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgW3Byb3ZpZGVyLCBkaXNwYXRjaCwgb25Mb2dpbkZhaWx1cmUsIG9uTG9naW5TdWNjZXNzXSk7XG4gICAgcmV0dXJuIHsgbG9naW46IGxvZ2luIH07XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useLogin.ts\n");

/***/ }),

/***/ "./src/types/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserStatus\", function() { return UserStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gender\", function() { return Gender; });\nvar UserStatus;\n(function (UserStatus) {\n    UserStatus[\"UNVERIFIED\"] = \"unverified\";\n    UserStatus[\"ACTIVE\"] = \"active\";\n    UserStatus[\"INACTIVE\"] = \"inactive\";\n    UserStatus[\"PASSWORD_RESET\"] = \"password_reset\";\n})(UserStatus || (UserStatus = {}));\nvar Gender;\n(function (Gender) {\n    Gender[\"NO_PREFERENCE\"] = \"\";\n    Gender[\"MALE\"] = \"male\";\n    Gender[\"FEMALE\"] = \"female\";\n    Gender[\"TRANSGENDER\"] = \"transgender\";\n    Gender[\"GENDER_NEUTRAL\"] = \"gender neutral\";\n})(Gender || (Gender = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHlwZXMvdXNlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90eXBlcy91c2VyLnRzPzQyNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBVc2VyU3RhdHVzO1xuKGZ1bmN0aW9uIChVc2VyU3RhdHVzKSB7XG4gICAgVXNlclN0YXR1c1tcIlVOVkVSSUZJRURcIl0gPSBcInVudmVyaWZpZWRcIjtcbiAgICBVc2VyU3RhdHVzW1wiQUNUSVZFXCJdID0gXCJhY3RpdmVcIjtcbiAgICBVc2VyU3RhdHVzW1wiSU5BQ1RJVkVcIl0gPSBcImluYWN0aXZlXCI7XG4gICAgVXNlclN0YXR1c1tcIlBBU1NXT1JEX1JFU0VUXCJdID0gXCJwYXNzd29yZF9yZXNldFwiO1xufSkoVXNlclN0YXR1cyB8fCAoVXNlclN0YXR1cyA9IHt9KSk7XG5leHBvcnQgdmFyIEdlbmRlcjtcbihmdW5jdGlvbiAoR2VuZGVyKSB7XG4gICAgR2VuZGVyW1wiTk9fUFJFRkVSRU5DRVwiXSA9IFwiXCI7XG4gICAgR2VuZGVyW1wiTUFMRVwiXSA9IFwibWFsZVwiO1xuICAgIEdlbmRlcltcIkZFTUFMRVwiXSA9IFwiZmVtYWxlXCI7XG4gICAgR2VuZGVyW1wiVFJBTlNHRU5ERVJcIl0gPSBcInRyYW5zZ2VuZGVyXCI7XG4gICAgR2VuZGVyW1wiR0VOREVSX05FVVRSQUxcIl0gPSBcImdlbmRlciBuZXV0cmFsXCI7XG59KShHZW5kZXIgfHwgKEdlbmRlciA9IHt9KSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/types/user.ts\n");

/***/ })

}]);