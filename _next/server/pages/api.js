"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 8544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkAuthRoute": () => (/* binding */ api_checkAuthRoute),
  "default": () => (/* binding */ api_handler),
  "encodePath": () => (/* binding */ api_encodePath),
  "getAccessToken": () => (/* binding */ api_getAccessToken),
  "getAuthTokenPath": () => (/* binding */ getAuthTokenPath)
});

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./config/api.config.js
var api_config = __webpack_require__(5748);
var api_config_default = /*#__PURE__*/__webpack_require__.n(api_config);
// EXTERNAL MODULE: ./config/site.config.js
var site_config = __webpack_require__(5566);
var site_config_default = /*#__PURE__*/__webpack_require__.n(site_config);
// EXTERNAL MODULE: ./utils/oAuthHandler.ts
var oAuthHandler = __webpack_require__(4322);
// EXTERNAL MODULE: ./utils/protectedRouteHandler.ts
var protectedRouteHandler = __webpack_require__(8165);
;// CONCATENATED MODULE: external "ioredis"
const external_ioredis_namespaceObject = require("ioredis");
var external_ioredis_default = /*#__PURE__*/__webpack_require__.n(external_ioredis_namespaceObject);
;// CONCATENATED MODULE: ./utils/odAuthTokenStore.ts

// Persistent key-value store is provided by Redis, hosted on Upstash
// https://vercel.com/integrations/upstash
const kv = new (external_ioredis_default())(process.env.REDIS_URL);
async function getOdAuthTokens() {
    const accessToken = await kv.get('access_token');
    const refreshToken = await kv.get('refresh_token');
    return {
        accessToken,
        refreshToken
    };
}
async function storeOdAuthTokens({ accessToken , accessTokenExpiry , refreshToken  }) {
    await kv.set('access_token', accessToken, 'ex', accessTokenExpiry);
    await kv.set('refresh_token', refreshToken);
}

;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/raw.ts





// CORS middleware for raw links: https://nextjs.org/docs/api-routes/api-middlewares
function runCorsMiddleware(req, res) {
    const cors = external_cors_default()({
        methods: [
            'GET',
            'HEAD'
        ]
    });
    return new Promise((resolve, reject)=>{
        cors(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
async function handler(req, res) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        res.status(403).json({
            error: 'No access token.'
        });
        return;
    }
    const { path ='/' , odpt ='' , proxy =false  } = req.query;
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
    const cleanPath = pathPosix.resolve('/', pathPosix.normalize(path));
    // Handle protected routes authentication
    const odTokenHeader = req.headers['od-protected-token'] ?? odpt;
    const { code , message  } = await checkAuthRoute(cleanPath, accessToken, odTokenHeader);
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
    await runCorsMiddleware(req, res);
    try {
        // Handle response from OneDrive API
        const requestUrl = `${driveApi}/root${encodePath(cleanPath)}`;
        const { data  } = await axios.get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                // OneDrive international version fails when only selecting the downloadUrl (what a stupid bug)
                select: 'id,size,@microsoft.graph.downloadUrl'
            }
        });
        if ('@microsoft.graph.downloadUrl' in data) {
            // Only proxy raw file content response for files up to 4MB
            if (proxy && 'size' in data && data['size'] < 4194304) {
                const { headers , data: stream  } = await axios.get(data['@microsoft.graph.downloadUrl'], {
                    responseType: 'stream'
                });
                headers['Cache-Control'] = cacheControlHeader;
                // Send data stream as response
                res.writeHead(200, headers);
                stream.pipe(res);
            } else {
                res.redirect(data['@microsoft.graph.downloadUrl']);
            }
        } else {
            res.status(404).json({
                error: 'No download url found.'
            });
        }
        return;
    } catch (error) {
        var ref, ref1;
        res.status((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.status) ?? 500).json({
            error: (error === null || error === void 0 ? void 0 : (ref1 = error.response) === null || ref1 === void 0 ? void 0 : ref1.data) ?? 'Internal server error.'
        });
        return;
    }
};

;// CONCATENATED MODULE: ./pages/api/index.ts








const basePath = external_path_namespaceObject.posix.resolve('/', (site_config_default()).baseDirectory);
const clientSecret = (0,oAuthHandler/* revealObfuscatedToken */.Jj)((api_config_default()).obfuscatedClientSecret);
/**
 * Encode the path of the file relative to the base directory
 *
 * @param path Relative path of the file to the base directory
 * @returns Absolute path of the file inside OneDrive
 */ function api_encodePath(path) {
    let encodedPath = external_path_namespaceObject.posix.join(basePath, path);
    if (encodedPath === '/' || encodedPath === '') {
        return '';
    }
    encodedPath = encodedPath.replace(/\/$/, '');
    return `:${encodeURIComponent(encodedPath)}`;
}
/**
 * Fetch the access token from Redis storage and check if the token requires a renew
 *
 * @returns Access token for OneDrive API
 */ async function api_getAccessToken() {
    const { accessToken , refreshToken  } = await getOdAuthTokens();
    // Return in storage access token if it is still valid
    if (typeof accessToken === 'string') {
        console.log('Fetch access token from storage.');
        return accessToken;
    }
    // Return empty string if no refresh token is stored, which requires the application to be re-authenticated
    if (typeof refreshToken !== 'string') {
        console.log('No refresh token, return empty access token.');
        return '';
    }
    // Fetch new access token with in storage refresh token
    const body = new URLSearchParams();
    body.append('client_id', (api_config_default()).clientId);
    body.append('redirect_uri', (api_config_default()).redirectUri);
    body.append('client_secret', clientSecret);
    body.append('refresh_token', refreshToken);
    body.append('grant_type', 'refresh_token');
    const resp = await external_axios_default().post((api_config_default()).authApi, body, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    if ('access_token' in resp.data && 'refresh_token' in resp.data) {
        const { expires_in , access_token , refresh_token  } = resp.data;
        await storeOdAuthTokens({
            accessToken: access_token,
            accessTokenExpiry: parseInt(expires_in),
            refreshToken: refresh_token
        });
        console.log('Fetch new access token with stored refresh token.');
        return access_token;
    }
    return '';
}
/**
 * Match protected routes in site config to get path to required auth token
 * @param path Path cleaned in advance
 * @returns Path to required auth token. If not required, return empty string.
 */ function getAuthTokenPath(path) {
    const protectedRoutes = (site_config_default()).protectedRoutes;
    let authTokenPath = '';
    for (const r of protectedRoutes){
        if (path.startsWith(r)) {
            authTokenPath = `${r}/.password`;
            break;
        }
    }
    return authTokenPath;
}
/**
 * Handles protected route authentication:
 * - Match the cleanPath against an array of user defined protected routes
 * - If a match is found:
 * - 1. Download the .password file stored inside the protected route and parse its contents
 * - 2. Check if the od-protected-token header is present in the request
 * - The request is continued only if these two contents are exactly the same
 *
 * @param cleanPath Sanitised directory path, used for matching whether route is protected
 * @param accessToken OneDrive API access token
 * @param req Next.js request object
 * @param res Next.js response object
 */ async function api_checkAuthRoute(cleanPath, accessToken, odTokenHeader) {
    // Handle authentication through .password
    const authTokenPath = getAuthTokenPath(cleanPath);
    // Fetch password from remote file content
    if (authTokenPath === '') {
        return {
            code: 200,
            message: ''
        };
    }
    try {
        const token = await external_axios_default().get(`${(api_config_default()).driveApi}/root${api_encodePath(authTokenPath)}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                select: '@microsoft.graph.downloadUrl,file'
            }
        });
        // Handle request and check for header 'od-protected-token'
        const odProtectedToken = await external_axios_default().get(token.data['@microsoft.graph.downloadUrl']);
        // console.log(odTokenHeader, odProtectedToken.data.trim())
        if (!(0,protectedRouteHandler/* compareHashedToken */.Uc)({
            odTokenHeader: odTokenHeader,
            dotPassword: odProtectedToken.data
        })) {
            return {
                code: 401,
                message: 'Password required.'
            };
        }
    } catch (error) {
        var ref;
        // Password file not found, fallback to 404
        if ((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.status) === 404) {
            return {
                code: 404,
                message: "You didn't set a password."
            };
        } else {
            return {
                code: 500,
                message: 'Internal server error.'
            };
        }
    }
    return {
        code: 200,
        message: 'Authenticated.'
    };
}
async function api_handler(req, res) {
    // If method is POST, then the API is called by the client to store acquired tokens
    if (req.method === 'POST') {
        const { obfuscatedAccessToken , accessTokenExpiry , obfuscatedRefreshToken  } = req.body;
        const accessToken = (0,oAuthHandler/* revealObfuscatedToken */.Jj)(obfuscatedAccessToken);
        const refreshToken = (0,oAuthHandler/* revealObfuscatedToken */.Jj)(obfuscatedRefreshToken);
        if (typeof accessToken !== 'string' || typeof refreshToken !== 'string') {
            res.status(400).send('Invalid request body');
            return;
        }
        await storeOdAuthTokens({
            accessToken,
            accessTokenExpiry,
            refreshToken
        });
        res.status(200).send('OK');
        return;
    }
    // If method is GET, then the API is a normal request to the OneDrive API for files or folders
    const { path ='/' , raw =false , next =''  } = req.query;
    // Set edge function caching for faster load times, check docs:
    // https://vercel.com/docs/concepts/functions/edge-caching
    res.setHeader('Cache-Control', (api_config_default()).cacheControlHeader);
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
    const cleanPath = external_path_namespaceObject.posix.resolve('/', external_path_namespaceObject.posix.normalize(path));
    const accessToken = await api_getAccessToken();
    // Return error 403 if access_token is empty
    if (!accessToken) {
        res.status(403).json({
            error: 'No access token.'
        });
        return;
    }
    // Handle protected routes authentication
    const { code , message  } = await api_checkAuthRoute(cleanPath, accessToken, req.headers['od-protected-token']);
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
    const requestPath = api_encodePath(cleanPath);
    // Handle response from OneDrive API
    const requestUrl = `${(api_config_default()).driveApi}/root${requestPath}`;
    // Whether path is root, which requires some special treatment
    const isRoot = requestPath === '';
    // Go for file raw download link, add CORS headers, and redirect to @microsoft.graph.downloadUrl
    // (kept here for backwards compatibility, and cache headers will be reverted to no-cache)
    if (raw) {
        await runCorsMiddleware(req, res);
        res.setHeader('Cache-Control', 'no-cache');
        const { data  } = await external_axios_default().get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                // OneDrive international version fails when only selecting the downloadUrl (what a stupid bug)
                select: 'id,@microsoft.graph.downloadUrl'
            }
        });
        if ('@microsoft.graph.downloadUrl' in data) {
            res.redirect(data['@microsoft.graph.downloadUrl']);
        } else {
            res.status(404).json({
                error: 'No download url found.'
            });
        }
        return;
    }
    // Querying current path identity (file or folder) and follow up query childrens in folder
    try {
        const { data: identityData  } = await external_axios_default().get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                select: 'name,size,id,lastModifiedDateTime,folder,file,video,image'
            }
        });
        if ('folder' in identityData) {
            const { data: folderData  } = await external_axios_default().get(`${requestUrl}${isRoot ? '' : ':'}/children`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                params: next ? {
                    select: 'name,size,id,lastModifiedDateTime,folder,file,video,image',
                    top: (site_config_default()).maxItems,
                    $skipToken: next
                } : {
                    select: 'name,size,id,lastModifiedDateTime,folder,file,video,image',
                    top: (site_config_default()).maxItems
                }
            });
            // Extract next page token from full @odata.nextLink
            const nextPage = folderData['@odata.nextLink'] ? folderData['@odata.nextLink'].match(/&\$skiptoken=(.+)/i)[1] : null;
            // Return paging token if specified
            if (nextPage) {
                res.status(200).json({
                    folder: folderData,
                    next: nextPage
                });
            } else {
                res.status(200).json({
                    folder: folderData
                });
            }
            return;
        }
        res.status(200).json({
            file: identityData
        });
        return;
    } catch (error) {
        var ref, ref1;
        res.status((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.code) ?? 500).json({
            error: (error === null || error === void 0 ? void 0 : (ref1 = error.response) === null || ref1 === void 0 ? void 0 : ref1.data) ?? 'Internal server error.'
        });
        return;
    }
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5666:
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ 9172:
/***/ ((module) => {

module.exports = require("crypto-js/sha256");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [566,114,322], () => (__webpack_exec__(8544)));
module.exports = __webpack_exports__;

})();