(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./src/components/layoutPublic/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layoutPublic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/components/layoutPublic/layoutPublic.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _layoutPublic__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRQdWJsaWMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRQdWJsaWMvaW5kZXgudHM/ZWUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9sYXlvdXRQdWJsaWMnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layoutPublic/index.ts\n");

/***/ }),

/***/ "./src/components/layoutPublic/layoutPublic.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/clsx/dist/clsx.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/react-i18next/dist/commonjs/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./src/components/layoutPublic/style.ts\");\n\n\n\n\n\nfunction LayoutPublic(props) {\n    var _a = props.title, title = _a === void 0 ? 'Welcome!' : _a, classCT = props.classCT, children = props.children;\n    var classes = Object(_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var t = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])().t;\n    return (react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"section\", { className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, classCT) },\n        react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"CssBaseline\"], null),\n        react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], { className: classes.box },\n            react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], { className: classes.boxInner },\n                title && (react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], { textAlign: 'center', className: classes.titlePaperWrapper },\n                    react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], { variant: 'h2', className: classes.titlePaper }, t(title)))),\n                react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Paper\"], { elevation: 1, className: classes.boxInfo, classes: { root: classes.paperRoot } }, children)))));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutPublic);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRQdWJsaWMvbGF5b3V0UHVibGljLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dFB1YmxpYy9sYXlvdXRQdWJsaWMudHN4PzZlZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDc3NCYXNlbGluZSwgUGFwZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vc3R5bGUnO1xuZnVuY3Rpb24gTGF5b3V0UHVibGljKHByb3BzKSB7XG4gICAgdmFyIF9hID0gcHJvcHMudGl0bGUsIHRpdGxlID0gX2EgPT09IHZvaWQgMCA/ICdXZWxjb21lIScgOiBfYSwgY2xhc3NDVCA9IHByb3BzLmNsYXNzQ1QsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICB2YXIgdCA9IHVzZVRyYW5zbGF0aW9uKCkudDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NDVCkgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDc3NCYXNlbGluZSwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5ib3ggfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGNsYXNzTmFtZTogY2xhc3Nlcy5ib3hJbm5lciB9LFxuICAgICAgICAgICAgICAgIHRpdGxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjbGFzc05hbWU6IGNsYXNzZXMudGl0bGVQYXBlcldyYXBwZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7IHZhcmlhbnQ6ICdoMicsIGNsYXNzTmFtZTogY2xhc3Nlcy50aXRsZVBhcGVyIH0sIHQodGl0bGUpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXIsIHsgZWxldmF0aW9uOiAxLCBjbGFzc05hbWU6IGNsYXNzZXMuYm94SW5mbywgY2xhc3NlczogeyByb290OiBjbGFzc2VzLnBhcGVyUm9vdCB9IH0sIGNoaWxkcmVuKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXRQdWJsaWM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layoutPublic/layoutPublic.tsx\n");

/***/ }),

/***/ "./src/components/layoutPublic/style.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\nvar bgGradientPrimary = 'linear-gradient(227.14deg, #005CC7 0%, #1F81F3 100%)';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])(function (theme) {\n    return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"createStyles\"])({\n        root: {\n            display: 'flex',\n            flexDirection: 'column',\n            flex: 1,\n            justifyContent: 'center',\n            height: '100%',\n            overflow: 'hidden',\n        },\n        box: {\n            position: 'relative',\n            width: '100%',\n            display: 'flex',\n            alignItems: 'center',\n            flexDirection: 'column',\n            maxHeight: \"calc(100% - \" + theme.spacing(6) + \"px)\",\n            marginTop: theme.spacing(3),\n            marginBottom: theme.spacing(3),\n            maxWidth: 370,\n            marginLeft: 'auto',\n            marginRight: 'auto',\n        },\n        boxInner: {\n            position: 'relative',\n            display: 'flex',\n            flexDirection: 'column',\n            width: '100%',\n            overflow: 'hidden',\n            maxHeight: 'none',\n            padding: 10,\n        },\n        paperRoot: {\n            width: '100%',\n        },\n        boxInfo: {\n            position: 'relative',\n            flex: '1 1 auto',\n            overflowY: 'auto',\n            padding: theme.spacing(4),\n            paddingTop: theme.spacing(7),\n        },\n        titlePaperWrapper: {\n            position: 'relative',\n            marginLeft: theme.spacing(2),\n            marginRight: theme.spacing(2),\n            paddingTop: 28,\n            paddingBottom: 28,\n            background: bgGradientPrimary,\n            boxShadow: theme.variables.boxShadownPrimary,\n            color: theme.palette.common.white,\n            borderRadius: theme.variables.borderRadiusSm,\n            marginBottom: -38,\n            zIndex: 2,\n        },\n        titlePaper: {\n            fontWeight: theme.variables.fontWeightMedium,\n        },\n    });\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRQdWJsaWMvc3R5bGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRQdWJsaWMvc3R5bGUudHM/M2M3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG52YXIgYmdHcmFkaWVudFByaW1hcnkgPSAnbGluZWFyLWdyYWRpZW50KDIyNy4xNGRlZywgIzAwNUNDNyAwJSwgIzFGODFGMyAxMDAlKSc7XG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHJldHVybiBjcmVhdGVTdHlsZXMoe1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm94OiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBcImNhbGMoMTAwJSAtIFwiICsgdGhlbWUuc3BhY2luZyg2KSArIFwicHgpXCIsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgICAgICBtYXhXaWR0aDogMzcwLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm94SW5uZXI6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgcGFwZXJSb290OiB7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICB9LFxuICAgICAgICBib3hJbmZvOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIGZsZXg6ICcxIDEgYXV0bycsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZVBhcGVyV3JhcHBlcjoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAyOCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDI4LFxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmdHcmFkaWVudFByaW1hcnksXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnZhcmlhYmxlcy5ib3hTaGFkb3duUHJpbWFyeSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUudmFyaWFibGVzLmJvcmRlclJhZGl1c1NtLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAtMzgsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlUGFwZXI6IHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnZhcmlhYmxlcy5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layoutPublic/style.ts\n");

/***/ })

}]);