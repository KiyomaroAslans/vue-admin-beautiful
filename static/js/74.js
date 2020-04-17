/*!
 * byui前端敏捷开发平台 : vue-admin-beautiful
 *  copyright:1204505056@qq.com 
 *  author: chuzhixin <1204505056@qq.com> 
 *  participants: 
 *  time: "2020-4-17 9:59:23"
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./src/api/changeLog.js":
/*!******************************!*\
  !*** ./src/api/changeLog.js ***!
  \******************************/
/*! exports provided: getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function getList(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/changeLog/getList",
    method: "post",
    data: data
  });
}

/***/ })

}]);
//# sourceMappingURL=74.js.map