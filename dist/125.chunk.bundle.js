(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./src/helpers/dateUtil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateUtil\", function() { return DateUtil; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateUtil\", function() { return dateUtil; });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/date-fns/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);\n\nvar DateUtil = /** @class */ (function () {\n    function DateUtil() {\n    }\n    DateUtil.prototype.formatDiffFromNow = function (value) {\n        if (!value) {\n            return '';\n        }\n        var date = new Date(value);\n        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__[\"differenceInDays\"])(new Date(), date) > 1) {\n            return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__[\"format\"])(date, 'dd/MM/y hh:mm a');\n        }\n        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__[\"formatDistanceToNow\"])(date);\n    };\n    return DateUtil;\n}());\n\nvar dateUtil = new DateUtil();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9kYXRlVXRpbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2RhdGVVdGlsLnRzP2EwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdywgZGlmZmVyZW5jZUluRGF5cywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xudmFyIERhdGVVdGlsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGVVdGlsKCkge1xuICAgIH1cbiAgICBEYXRlVXRpbC5wcm90b3R5cGUuZm9ybWF0RGlmZkZyb21Ob3cgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZUluRGF5cyhuZXcgRGF0ZSgpLCBkYXRlKSA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ2RkL01NL3kgaGg6bW0gYScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KGRhdGUpO1xuICAgIH07XG4gICAgcmV0dXJuIERhdGVVdGlsO1xufSgpKTtcbmV4cG9ydCB7IERhdGVVdGlsIH07XG5leHBvcnQgdmFyIGRhdGVVdGlsID0gbmV3IERhdGVVdGlsKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/helpers/dateUtil.ts\n");

/***/ })

}]);