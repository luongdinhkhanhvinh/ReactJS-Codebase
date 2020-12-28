(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ "./src/services/user/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProfile\", function() { return getProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateUserSetting\", function() { return updateUserSetting; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/commons/apiEndpoint.ts\");\n/* harmony import */ var src_providers_authProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./src/providers/authProvider.ts\");\n\n\n\nfunction getProfile() {\n    return src_providers_authProvider__WEBPACK_IMPORTED_MODULE_2__[\"axiosClient\"].get(src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_1__[\"ApiEndpoint\"].USER_PROFILE);\n}\nfunction updateUserSetting(request) {\n    var body = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"pickBy\"])(request, lodash__WEBPACK_IMPORTED_MODULE_0__[\"identity\"]);\n    return src_providers_authProvider__WEBPACK_IMPORTED_MODULE_2__[\"axiosClient\"].put(src_commons_apiEndpoint__WEBPACK_IMPORTED_MODULE_1__[\"ApiEndpoint\"].UPDATE_USER_SETTING, body);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvdXNlci9wcm9maWxlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3VzZXIvcHJvZmlsZS50cz9hNjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlkZW50aXR5LCBwaWNrQnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQXBpRW5kcG9pbnQgfSBmcm9tICdzcmMvY29tbW9ucy9hcGlFbmRwb2ludCc7XG5pbXBvcnQgeyBheGlvc0NsaWVudCB9IGZyb20gJ3NyYy9wcm92aWRlcnMvYXV0aFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9maWxlKCkge1xuICAgIHJldHVybiBheGlvc0NsaWVudC5nZXQoQXBpRW5kcG9pbnQuVVNFUl9QUk9GSUxFKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVc2VyU2V0dGluZyhyZXF1ZXN0KSB7XG4gICAgdmFyIGJvZHkgPSBwaWNrQnkocmVxdWVzdCwgaWRlbnRpdHkpO1xuICAgIHJldHVybiBheGlvc0NsaWVudC5wdXQoQXBpRW5kcG9pbnQuVVBEQVRFX1VTRVJfU0VUVElORywgYm9keSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/user/profile.ts\n");

/***/ })

}]);