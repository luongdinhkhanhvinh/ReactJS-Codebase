(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./src/hooks/useUserProfile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/tslib/tslib.js\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_helpers_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/helpers/toast.ts\");\n/* harmony import */ var src_redux_spinner_spinnerType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./src/redux/spinner/spinnerType.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./node_modules/react-redux/lib/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_redux_userProfile_userProfileType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./src/redux/userProfile/userProfileType.ts\");\n/* harmony import */ var src_services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./src/services/user/index.ts\");\n/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./src/hooks/useAuth.ts\");\n\n\n\n\n\n\n\n\nvar useUserProfile = function () {\n    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n    var userProfile = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) { return state.userProfileReducer; });\n    var provider = Object(_useAuth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])().provider;\n    var getData = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function () {\n        var data, error_1;\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    if (!provider.isSignedIn()) {\n                        return [2 /*return*/];\n                    }\n                    dispatch({ type: src_redux_spinner_spinnerType__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_SPINNER\"] });\n                    _a.label = 1;\n                case 1:\n                    _a.trys.push([1, 3, 4, 5]);\n                    return [4 /*yield*/, Object(src_services_user__WEBPACK_IMPORTED_MODULE_6__[\"getProfile\"])()];\n                case 2:\n                    data = _a.sent();\n                    dispatch({ type: src_redux_userProfile_userProfileType__WEBPACK_IMPORTED_MODULE_5__[\"SET_USER_PROFILE\"], payload: data });\n                    return [3 /*break*/, 5];\n                case 3:\n                    error_1 = _a.sent();\n                    src_helpers_toast__WEBPACK_IMPORTED_MODULE_1__[\"toast\"].error(error_1.message);\n                    return [3 /*break*/, 5];\n                case 4:\n                    dispatch({ type: src_redux_spinner_spinnerType__WEBPACK_IMPORTED_MODULE_2__[\"HIDE_SPINNER\"] });\n                    return [7 /*endfinally*/];\n                case 5: return [2 /*return*/];\n            }\n        });\n    }); }, [dispatch, provider]);\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n        getData();\n    }, [getData]);\n    return {\n        data: userProfile,\n        getData: getData,\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserProfile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVXNlclByb2ZpbGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlVXNlclByb2ZpbGUudHM/OTRmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3NyYy9oZWxwZXJzL3RvYXN0JztcbmltcG9ydCB7IEhJREVfU1BJTk5FUiwgU0hPV19TUElOTkVSIH0gZnJvbSAnc3JjL3JlZHV4L3NwaW5uZXIvc3Bpbm5lclR5cGUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNFVF9VU0VSX1BST0ZJTEUgfSBmcm9tICdzcmMvcmVkdXgvdXNlclByb2ZpbGUvdXNlclByb2ZpbGVUeXBlJztcbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tICdzcmMvc2VydmljZXMvdXNlcic7XG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuL3VzZUF1dGgnO1xudmFyIHVzZVVzZXJQcm9maWxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgdmFyIHVzZXJQcm9maWxlID0gdXNlU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS51c2VyUHJvZmlsZVJlZHVjZXI7IH0pO1xuICAgIHZhciBwcm92aWRlciA9IHVzZUF1dGgoKS5wcm92aWRlcjtcbiAgICB2YXIgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhLCBlcnJvcl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3ZpZGVyLmlzU2lnbmVkSW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0hPV19TUElOTkVSIH0pO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0UHJvZmlsZSgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1VTRVJfUFJPRklMRSwgcGF5bG9hZDogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvcl8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogSElERV9TUElOTkVSIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfSwgW2Rpc3BhdGNoLCBwcm92aWRlcl0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldERhdGEoKTtcbiAgICB9LCBbZ2V0RGF0YV0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHVzZXJQcm9maWxlLFxuICAgICAgICBnZXREYXRhOiBnZXREYXRhLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlVXNlclByb2ZpbGU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useUserProfile.ts\n");

/***/ }),

/***/ "./src/services/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/services/user/signin.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return _signin__WEBPACK_IMPORTED_MODULE_0__[\"signIn\"]; });\n\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/services/user/profile.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getProfile\", function() { return _profile__WEBPACK_IMPORTED_MODULE_1__[\"getProfile\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateUserSetting\", function() { return _profile__WEBPACK_IMPORTED_MODULE_1__[\"updateUserSetting\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy91c2VyL2luZGV4LnRzPzY0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zaWduaW4nO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9maWxlJztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/user/index.ts\n");

/***/ }),

/***/ "./src/services/user/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProfile\", function() { return getProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserSetting\", function() { return updateUserSetting; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/commons/apiEndpoint.ts\");\n/* harmony import */ var src_providers_authProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./src/providers/authProvider.ts\");\n\n\n\nfunction getProfile() {\n    return src_providers_authProvider__WEBPACK_IMPORTED_MODULE_2__[\"axiosClient\"].get(src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_1__[\"ApiEndpoint\"].USER_PROFILE);\n}\nfunction updateUserSetting(request) {\n    var body = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"pickBy\"])(request, lodash__WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n    return src_providers_authProvider__WEBPACK_IMPORTED_MODULE_2__[\"axiosClient\"].put(src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_1__[\"ApiEndpoint\"].UPDATE_USER_SETTING, body);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci9wcm9maWxlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIvcHJvZmlsZS50cz9hNjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlkZW50aXR5LCBwaWNrQnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQXBpRW5kcG9pbnQgfSBmcm9tICdzcmMvY29tbW9ucy9hcGlFbmRwb2ludCc7XG5pbXBvcnQgeyBheGlvc0NsaWVudCB9IGZyb20gJ3NyYy9wcm92aWRlcnMvYXV0aFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9maWxlKCkge1xuICAgIHJldHVybiBheGlvc0NsaWVudC5nZXQoQXBpRW5kcG9pbnQuVVNFUl9QUk9GSUxFKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVc2VyU2V0dGluZyhyZXF1ZXN0KSB7XG4gICAgdmFyIGJvZHkgPSBwaWNrQnkocmVxdWVzdCwgaWRlbnRpdHkpO1xuICAgIHJldHVybiBheGlvc0NsaWVudC5wdXQoQXBpRW5kcG9pbnQuVVBEQVRFX1VTRVJfU0VUVElORywgYm9keSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/user/profile.ts\n");

/***/ }),

/***/ "./src/services/user/signin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony import */ var src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/commons/apiEndpoint.ts\");\n/* harmony import */ var src_providers_authProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/providers/authProvider.ts\");\n\n\nfunction signIn(request) {\n    return src_providers_authProvider__WEBPACK_IMPORTED_MODULE_1__[\"axiosClient\"].post(src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_0__[\"ApiEndpoint\"].SIGN_IN, request);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci9zaWduaW4udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXNlci9zaWduaW4udHM/OTljMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlFbmRwb2ludCB9IGZyb20gJ3NyYy9jb21tb25zL2FwaUVuZHBvaW50JztcbmltcG9ydCB7IGF4aW9zQ2xpZW50IH0gZnJvbSAnc3JjL3Byb3ZpZGVycy9hdXRoUHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25JbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIGF4aW9zQ2xpZW50LnBvc3QoQXBpRW5kcG9pbnQuU0lHTl9JTiwgcmVxdWVzdCk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/user/signin.ts\n");

/***/ })

}]);