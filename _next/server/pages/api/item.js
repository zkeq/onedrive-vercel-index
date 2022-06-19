"use strict";
(() => {
var exports = {};
exports.id = 682;
exports.ids = [682,750];
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

/***/ 4798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(228);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7167);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_api_config__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    // Get access token from storage
    const accessToken = await (0,___WEBPACK_IMPORTED_MODULE_1__/* .getAccessToken */ .hP)();
    // Get item details (specifically, its path) by its unique ID in OneDrive
    const { id =''  } = req.query;
    // Set edge function caching for faster load times, check docs:
    // https://vercel.com/docs/concepts/functions/edge-caching
    res.setHeader('Cache-Control', (_config_api_config__WEBPACK_IMPORTED_MODULE_2___default().cacheControlHeader));
    if (typeof id === 'string') {
        const itemApi = `${(_config_api_config__WEBPACK_IMPORTED_MODULE_2___default().driveApi)}/items/${id}`;
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(itemApi, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                params: {
                    select: 'id,name,parentReference'
                }
            });
            res.status(200).json(data);
        } catch (error) {
            var ref, ref1;
            res.status((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.status) ?? 500).json({
                error: (error === null || error === void 0 ? void 0 : (ref1 = error.response) === null || ref1 === void 0 ? void 0 : ref1.data) ?? 'Internal server error.'
            });
        }
    } else {
        res.status(400).json({
            error: 'Invalid driveItem ID.'
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
var __webpack_exports__ = __webpack_require__.X(0, [1], () => (__webpack_exec__(4798)));
module.exports = __webpack_exports__;

})();