"use strict";
(() => {
var exports = {};
exports.id = 416;
exports.ids = [416,750];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 5666:
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ 9172:
/***/ ((module) => {

module.exports = require("crypto-js/sha256");

/***/ }),

/***/ 1495:
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 8219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(228);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7167);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_api_config__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    const accessToken = await (0,___WEBPACK_IMPORTED_MODULE_2__/* .getAccessToken */ .hP)();
    if (!accessToken) {
        res.status(403).json({
            error: 'No access token.'
        });
        return;
    }
    // Get item thumbnails by its path since we will later check if it is protected
    const { path ='' , size ='medium' , odpt =''  } = req.query;
    // Set edge function caching for faster load times, if route is not protected, check docs:
    // https://vercel.com/docs/concepts/functions/edge-caching
    if (odpt === '') res.setHeader('Cache-Control', (_config_api_config__WEBPACK_IMPORTED_MODULE_3___default().cacheControlHeader));
    // Check whether the size is valid - must be one of 'large', 'medium', or 'small'
    if (size !== 'large' && size !== 'medium' && size !== 'small') {
        res.status(400).json({
            error: 'Invalid size'
        });
        return;
    }
    // Sometimes the path parameter is defaulted to '[...path]' which we need to handle
    if (path === '[...path]') {
        res.status(400).json({
            error: 'No path specified.'
        });
        return;
    }
    // If the path is not a valid path, return 400
    if (typeof path !== 'string') {
        res.status(400).json({
            error: 'Path query invalid.'
        });
        return;
    }
    const cleanPath = path__WEBPACK_IMPORTED_MODULE_0__.posix.resolve('/', path__WEBPACK_IMPORTED_MODULE_0__.posix.normalize(path));
    const { code , message  } = await (0,___WEBPACK_IMPORTED_MODULE_2__/* .checkAuthRoute */ .GY)(cleanPath, accessToken, odpt);
    // Status code other than 200 means user has not authenticated yet
    if (code !== 200) {
        res.status(code).json({
            error: message
        });
        return;
    }
    // If message is empty, then the path is not protected.
    // Conversely, protected routes are not allowed to serve from cache.
    if (message !== '') {
        res.setHeader('Cache-Control', 'no-cache');
    }
    const requestPath = (0,___WEBPACK_IMPORTED_MODULE_2__/* .encodePath */ .Ec)(cleanPath);
    // Handle response from OneDrive API
    const requestUrl = `${(_config_api_config__WEBPACK_IMPORTED_MODULE_3___default().driveApi)}/root${requestPath}`;
    // Whether path is root, which requires some special treatment
    const isRoot = requestPath === '';
    try {
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${requestUrl}${isRoot ? '' : ':'}/thumbnails`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const thumbnailUrl = data.value && data.value.length > 0 ? data.value[0][size].url : null;
        if (thumbnailUrl) {
            res.redirect(thumbnailUrl);
        } else {
            res.status(400).json({
                error: "The item doesn't have a valid thumbnail."
            });
        }
    } catch (error) {
        var ref, ref1;
        res.status(error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.status).json({
            error: (error === null || error === void 0 ? void 0 : (ref1 = error.response) === null || ref1 === void 0 ? void 0 : ref1.data) ?? 'Internal server error.'
        });
    }
    return;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1], () => (__webpack_exec__(8219)));
module.exports = __webpack_exports__;

})();