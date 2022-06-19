"use strict";
(() => {
var exports = {};
exports.id = 198;
exports.ids = [198,750];
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

/***/ 6359:
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
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8988);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_site_config__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Sanitize the search query
 *
 * @param query User search query, which may contain special characters
 * @returns Sanitised query string, which:
 * - encodes the '<' and '>' characters,
 * - replaces '?' and '/' characters with ' ',
 * - replaces ''' with ''''
 * Reference: https://stackoverflow.com/questions/41491222/single-quote-escaping-in-microsoft-graph.
 */ function sanitiseQuery(query) {
    const sanitisedQuery = query.replace(/'/g, "''").replace('<', ' &lt; ').replace('>', ' &gt; ').replace('?', ' ').replace('/', ' ');
    return encodeURIComponent(sanitisedQuery);
}
async function handler(req, res) {
    // Get access token from storage
    const accessToken = await (0,___WEBPACK_IMPORTED_MODULE_1__/* .getAccessToken */ .hP)();
    // Query parameter from request
    const { q: searchQuery = ''  } = req.query;
    // Set edge function caching for faster load times, check docs:
    // https://vercel.com/docs/concepts/functions/edge-caching
    res.setHeader('Cache-Control', (_config_api_config__WEBPACK_IMPORTED_MODULE_2___default().cacheControlHeader));
    if (typeof searchQuery === 'string') {
        // Construct Microsoft Graph Search API URL, and perform search only under the base directory
        const searchRootPath = (0,___WEBPACK_IMPORTED_MODULE_1__/* .encodePath */ .Ec)('/');
        const encodedPath = searchRootPath === '' ? searchRootPath : searchRootPath + ':';
        const searchApi = `${(_config_api_config__WEBPACK_IMPORTED_MODULE_2___default().driveApi)}/root${encodedPath}/search(q='${sanitiseQuery(searchQuery)}')`;
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(searchApi, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                params: {
                    select: 'id,name,file,folder,parentReference',
                    top: (_config_site_config__WEBPACK_IMPORTED_MODULE_3___default().maxItems)
                }
            });
            res.status(200).json(data.value);
        } catch (error) {
            var ref, ref1;
            res.status((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.status) ?? 500).json({
                error: (error === null || error === void 0 ? void 0 : (ref1 = error.response) === null || ref1 === void 0 ? void 0 : ref1.data) ?? 'Internal server error.'
            });
        }
    } else {
        res.status(200).json([]);
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
var __webpack_exports__ = __webpack_require__.X(0, [1], () => (__webpack_exec__(6359)));
module.exports = __webpack_exports__;

})();