"use strict";
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 7167:
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

/***/ 8988:
/***/ ((module) => {


/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */ module.exports = {
    // This is what we use to identify who you are when you are initialising the website for the first time.
    // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
    // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
    // your email being exposed in public.
    userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || "tuostudy@zkeq.onmicrosoft.com",
    // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
    // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
    icon: "/favicon.ico",
    // The name of your website. Present alongside your icon.
    title: "图欧学习资源库",
    // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
    baseDirectory: '/',
    // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
    // Do note that this is limited up to 200 items by the upstream OneDrive API.
    maxItems: 100,
    // [OPTIONAL] We use Google Fonts natively for font customisations.
    // You can check and generate the required links and names at https://fonts.google.com.
    // googleFontSans - the sans serif font used in onedrive-vercel-index.
    googleFontSans: 'Inter',
    // googleFontMono - the monospace font used in onedrive-vercel-index.
    googleFontMono: 'Fira Mono',
    // googleFontLinks -  an array of links for referencing the google font assets.
    googleFontLinks: [
        'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'
    ],
    // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
    // quotes - changing " to ". You can write anything here, and if you like badges, generate some with https://shields.io
    footer: '<a style="color: rgb(254,17,130)" href="https://icp.gov.moe/?keyword=20220313" target="_blank">萌ICP备20220313号</a> <center>Construct ❤ by <a href="https://github.com/zkeq" target="_blank">Zkeq</a>.<br><center><iframe frameborder=0  height=20px marginwidth=0 scrolling=no src="https://api.icodeq.com/TuoStudy-Counter/yiyan.html"></iframe></center><center><iframe frameborder=0  height=25px marginwidth=0 scrolling=no src="https://api.icodeq.com/TuoStudy-Counter/"></iframe></center><center><iframe frameborder=0  height=50px marginwidth=0 scrolling=no src="https://tuo.live.icodeq.com"></iframe></center>Powered by: <a href="https://replit.com/" target="_blank" rel="noopener noreferrer"><img style="display: inline-block" src="https://img.shields.io/badge/Replit-black?style=flat&logo=Replit&logoColor=white" alt="vercel" /> </a> <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer"><img style="display: inline-block" src="https://img.shields.io/badge/onedrive--vercel--index-2C68C3?style=flat&logo=microsoft-onedrive&logoColor=white" alt="github" /> </a> <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><img style="display: inline-block" src="https://img.shields.io/badge/Vercel-black?style=flat&logo=Vercel&logoColor=white" alt="vercel" /> </a></center><script defer data-domain="tuostudy.com" src="https://vercel.site.icodeq.com/js/script.js"></script><script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script><script>LA.init({id: "JixAJtBtKcNUbZwF",ck: "JixAJtBtKcNUbZwF"})</script>',
    // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
    // the directories in which you have .password set. Check the documentation for details.
    protectedRoutes: [
        '/🌞 Private folder/u-need-a-password',
        '/🥟 Some test files/Protected route'
    ],
    // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
    email: "",
    // [OPTIONAL] This is an array of names and links for setting your social information and links.
    // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
    // you provide. See the documentation for details.
    links: [
        {
            "name": "ZkeqのCoding日志",
            "link": "https://coding.maylove.pub/",
            "other": "dev"
        },
        {
            "name": "Bilibili",
            "link": "https://space.bilibili.com/36184593",
            "other": "youtube"
        }
    ],
    datetimeFormat: 'YYYY-MM-DD HH:mm:ss'
};


/***/ }),

/***/ 228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GY": () => (/* binding */ checkAuthRoute),
  "Ec": () => (/* binding */ encodePath),
  "hP": () => (/* binding */ getAccessToken)
});

// UNUSED EXPORTS: default, getAuthTokenPath

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./config/api.config.js
var api_config = __webpack_require__(7167);
var api_config_default = /*#__PURE__*/__webpack_require__.n(api_config);
// EXTERNAL MODULE: ./config/site.config.js
var site_config = __webpack_require__(8988);
var site_config_default = /*#__PURE__*/__webpack_require__.n(site_config);
// EXTERNAL MODULE: external "crypto-js"
var external_crypto_js_ = __webpack_require__(5666);
var external_crypto_js_default = /*#__PURE__*/__webpack_require__.n(external_crypto_js_);
;// CONCATENATED MODULE: ./utils/oAuthHandler.ts



// Just a disguise to obfuscate required tokens (including but not limited to client secret,
// access tokens, and refresh tokens), used along with the following two functions
const AES_SECRET_KEY = 'onedrive-vercel-index';
function obfuscateToken(token) {
    // Encrypt token with AES
    const encrypted = CryptoJS.AES.encrypt(token, AES_SECRET_KEY);
    return encrypted.toString();
}
function oAuthHandler_revealObfuscatedToken(obfuscated) {
    // Decrypt SHA256 obfuscated token
    const decrypted = external_crypto_js_default().AES.decrypt(obfuscated, AES_SECRET_KEY);
    return decrypted.toString((external_crypto_js_default()).enc.Utf8);
}
// Generate the Microsoft OAuth 2.0 authorization URL, used for requesting the authorisation code
function generateAuthorisationUrl() {
    const { clientId , redirectUri , authApi , scope  } = apiConfig;
    const authUrl = authApi.replace('/token', '/authorize');
    // Construct URL parameters for OAuth2
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('redirect_uri', redirectUri);
    params.append('response_type', 'code');
    params.append('scope', scope);
    params.append('response_mode', 'query');
    return `${authUrl}?${params.toString()}`;
}
// The code returned from the Microsoft OAuth 2.0 authorization URL is a request URL with hostname
// http://localhost and URL parameter code. This function extracts the code from the request URL
function extractAuthCodeFromRedirected(url) {
    // Return empty string if the url is not the defined redirect uri
    if (!url.startsWith(apiConfig.redirectUri)) {
        return '';
    }
    // New URL search parameter
    const params = new URLSearchParams(url.split('?')[1]);
    return params.get('code') ?? '';
}
// After a successful authorisation, the code returned from the Microsoft OAuth 2.0 authorization URL
// will be used to request an access token. This function requests the access token with the authorisation code
// and returns the access token and refresh token on success.
async function requestTokenWithAuthCode(code) {
    const { clientId , redirectUri , authApi  } = apiConfig;
    const clientSecret = oAuthHandler_revealObfuscatedToken(apiConfig.obfuscatedClientSecret);
    // Construct URL parameters for OAuth2
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('redirect_uri', redirectUri);
    params.append('client_secret', clientSecret);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    // Request access token
    return axios.post(authApi, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((resp)=>{
        const { expires_in , access_token , refresh_token  } = resp.data;
        return {
            expiryTime: expires_in,
            accessToken: access_token,
            refreshToken: refresh_token
        };
    }).catch((err)=>{
        const { error , error_description , error_uri  } = err.response.data;
        return {
            error,
            errorDescription: error_description,
            errorUri: error_uri
        };
    });
}
// Verify the identity of the user with the access token and compare it with the userPrincipalName
// in the Microsoft Graph API. If the userPrincipalName matches, proceed with token storing.
async function getAuthPersonInfo(accessToken) {
    const profileApi = apiConfig.driveApi.replace('/drive', '');
    return axios.get(profileApi, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
async function sendTokenToServer(accessToken, refreshToken, expiryTime) {
    return await axios.post('/api', {
        obfuscatedAccessToken: obfuscateToken(accessToken),
        accessTokenExpiry: parseInt(expiryTime),
        obfuscatedRefreshToken: obfuscateToken(refreshToken)
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// EXTERNAL MODULE: external "crypto-js/sha256"
var sha256_ = __webpack_require__(9172);
var sha256_default = /*#__PURE__*/__webpack_require__.n(sha256_);
;// CONCATENATED MODULE: ./utils/protectedRouteHandler.ts


// Hash password token with SHA256
function encryptToken(token) {
    return sha256_default()(token).toString();
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
    const protectedRoutes = siteConfig.protectedRoutes;
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

// EXTERNAL MODULE: external "ioredis"
var external_ioredis_ = __webpack_require__(1495);
var external_ioredis_default = /*#__PURE__*/__webpack_require__.n(external_ioredis_);
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
async function odAuthTokenStore_storeOdAuthTokens({ accessToken , accessTokenExpiry , refreshToken  }) {
    await kv.set('access_token', accessToken, 'ex', accessTokenExpiry);
    await kv.set('refresh_token', refreshToken);
}

// EXTERNAL MODULE: ./pages/api/raw.ts
var raw = __webpack_require__(7259);
;// CONCATENATED MODULE: ./pages/api/index.ts








const basePath = external_path_.posix.resolve('/', (site_config_default()).baseDirectory);
const clientSecret = oAuthHandler_revealObfuscatedToken((api_config_default()).obfuscatedClientSecret);
/**
 * Encode the path of the file relative to the base directory
 *
 * @param path Relative path of the file to the base directory
 * @returns Absolute path of the file inside OneDrive
 */ function encodePath(path) {
    let encodedPath = external_path_.posix.join(basePath, path);
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
 */ async function getAccessToken() {
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
        await odAuthTokenStore_storeOdAuthTokens({
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
 */ async function checkAuthRoute(cleanPath, accessToken, odTokenHeader) {
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
        const token = await external_axios_default().get(`${(api_config_default()).driveApi}/root${encodePath(authTokenPath)}`, {
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
        if (!compareHashedToken({
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
async function handler(req, res) {
    // If method is POST, then the API is called by the client to store acquired tokens
    if (req.method === 'POST') {
        const { obfuscatedAccessToken , accessTokenExpiry , obfuscatedRefreshToken  } = req.body;
        const accessToken = revealObfuscatedToken(obfuscatedAccessToken);
        const refreshToken = revealObfuscatedToken(obfuscatedRefreshToken);
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
    res.setHeader('Cache-Control', apiConfig.cacheControlHeader);
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
    const accessToken = await getAccessToken();
    // Return error 403 if access_token is empty
    if (!accessToken) {
        res.status(403).json({
            error: 'No access token.'
        });
        return;
    }
    // Handle protected routes authentication
    const { code , message  } = await checkAuthRoute(cleanPath, accessToken, req.headers['od-protected-token']);
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
    const requestPath = encodePath(cleanPath);
    // Handle response from OneDrive API
    const requestUrl = `${apiConfig.driveApi}/root${requestPath}`;
    // Whether path is root, which requires some special treatment
    const isRoot = requestPath === '';
    // Go for file raw download link, add CORS headers, and redirect to @microsoft.graph.downloadUrl
    // (kept here for backwards compatibility, and cache headers will be reverted to no-cache)
    if (raw) {
        await runCorsMiddleware(req, res);
        res.setHeader('Cache-Control', 'no-cache');
        const { data  } = await axios.get(requestUrl, {
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
        const { data: identityData  } = await axios.get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                select: 'name,size,id,lastModifiedDateTime,folder,file,video,image'
            }
        });
        if ('folder' in identityData) {
            const { data: folderData  } = await axios.get(`${requestUrl}${isRoot ? '' : ':'}/children`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                params: next ? {
                    select: 'name,size,id,lastModifiedDateTime,folder,file,video,image',
                    top: siteConfig.maxItems,
                    $skipToken: next
                } : {
                    select: 'name,size,id,lastModifiedDateTime,folder,file,video,image',
                    top: siteConfig.maxItems
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

/***/ 7259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runCorsMiddleware": () => (/* binding */ runCorsMiddleware),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7167);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_api_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(228);





// CORS middleware for raw links: https://nextjs.org/docs/api-routes/api-middlewares
function runCorsMiddleware(req, res) {
    const cors = cors__WEBPACK_IMPORTED_MODULE_2___default()({
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
    const accessToken = await (0,___WEBPACK_IMPORTED_MODULE_4__/* .getAccessToken */ .hP)();
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
    const cleanPath = path__WEBPACK_IMPORTED_MODULE_0__.posix.resolve('/', path__WEBPACK_IMPORTED_MODULE_0__.posix.normalize(path));
    // Handle protected routes authentication
    const odTokenHeader = req.headers['od-protected-token'] ?? odpt;
    const { code , message  } = await (0,___WEBPACK_IMPORTED_MODULE_4__/* .checkAuthRoute */ .GY)(cleanPath, accessToken, odTokenHeader);
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
        const requestUrl = `${_config_api_config__WEBPACK_IMPORTED_MODULE_3__.driveApi}/root${(0,___WEBPACK_IMPORTED_MODULE_4__/* .encodePath */ .Ec)(cleanPath)}`;
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(requestUrl, {
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
                const { headers , data: stream  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(data['@microsoft.graph.downloadUrl'], {
                    responseType: 'stream'
                });
                headers['Cache-Control'] = _config_api_config__WEBPACK_IMPORTED_MODULE_3__.cacheControlHeader;
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


/***/ })

};
;