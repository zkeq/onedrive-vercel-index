"use strict";
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 5748:
/***/ ((module) => {


/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */ module.exports = {
    // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
    // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
    clientId: "bd2a1ef5-f581-43e3-a065-0ebc44b1f021",
    obfuscatedClientSecret: "U2FsdGVkX1/Xnsrw7bfdztUb9o99beK4xWVdBrwUNXXrZ5xkZ2yVDGxYFyDAHxcHHHA5M3GAtPFVpuL4TF6UWw==",
    // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
    // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
    redirectUri: 'http://localhost',
    // The hideFileRegex is used to hide some files, and supports regular expressions. e.g. README.md
    hideFileRegex: 'README[.]md',
    // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
    // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
    authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
    // The scope we require are listed here, in most cases you would not need to change this as well.
    scope: 'user.read files.read.all offline_access',
    // The directLinkRegex is used to match the direct link of the file from the response of the API. We originally use this to prevent
    // unauthorised use of the proxied download feature - but that is disabled for now. So you can safely ignore this settings.
    directLinkRegex: 'public[.].*[.]files[.]1drv[.]com',
    cacheControlHeader: 'max-age=60, s-maxage=3600, stale-while-revalidate'
};


/***/ }),

/***/ 8165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hV": () => (/* binding */ getStoredToken),
/* harmony export */   "Uc": () => (/* binding */ compareHashedToken),
/* harmony export */   "ss": () => (/* binding */ matchProtectedRoute)
/* harmony export */ });
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9172);
/* harmony import */ var crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_site_config__WEBPACK_IMPORTED_MODULE_1__);


// Hash password token with SHA256
function encryptToken(token) {
    return crypto_js_sha256__WEBPACK_IMPORTED_MODULE_0___default()(token).toString();
}
// Fetch stored token from localStorage and encrypt with SHA256
function getStoredToken(path) {
    const storedToken =  false ? 0 : '';
    return storedToken ? encryptToken(storedToken) : null;
}
/**
 * Compares the hash of .password and od-protected-token header
 * @param odTokenHeader od-protected-token header (sha256 hashed token)
 * @param dotPassword non-hashed .password file
 * @returns whether the two hashes are the same
 */ function compareHashedToken({ odTokenHeader , dotPassword  }) {
    return encryptToken(dotPassword.trim()) === odTokenHeader;
}
/**
 * Match the specified route against a list of predefined routes
 * @param route directory path
 * @returns whether the directory is protected
 */ function matchProtectedRoute(route) {
    const protectedRoutes = (_config_site_config__WEBPACK_IMPORTED_MODULE_1___default().protectedRoutes);
    let authTokenPath = '';
    for (const r of protectedRoutes){
        // protected route array could be empty
        if (r) {
            if (route.startsWith(r.split('/').map((p)=>encodeURIComponent(p)
            ).join('/'))) {
                authTokenPath = r;
                break;
            }
        }
    }
    return authTokenPath;
}


/***/ })

};
;