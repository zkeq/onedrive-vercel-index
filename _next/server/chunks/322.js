"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 4322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jj": () => (/* binding */ revealObfuscatedToken),
/* harmony export */   "mD": () => (/* binding */ generateAuthorisationUrl),
/* harmony export */   "Ux": () => (/* binding */ extractAuthCodeFromRedirected),
/* harmony export */   "Re": () => (/* binding */ requestTokenWithAuthCode),
/* harmony export */   "h9": () => (/* binding */ getAuthPersonInfo),
/* harmony export */   "o8": () => (/* binding */ sendTokenToServer)
/* harmony export */ });
/* unused harmony export obfuscateToken */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5666);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5748);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_api_config__WEBPACK_IMPORTED_MODULE_2__);



// Just a disguise to obfuscate required tokens (including but not limited to client secret,
// access tokens, and refresh tokens), used along with the following two functions
const AES_SECRET_KEY = 'onedrive-vercel-index';
function obfuscateToken(token) {
    // Encrypt token with AES
    const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(token, AES_SECRET_KEY);
    return encrypted.toString();
}
function revealObfuscatedToken(obfuscated) {
    // Decrypt SHA256 obfuscated token
    const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt(obfuscated, AES_SECRET_KEY);
    return decrypted.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8));
}
// Generate the Microsoft OAuth 2.0 authorization URL, used for requesting the authorisation code
function generateAuthorisationUrl() {
    const { clientId , redirectUri , authApi , scope  } = (_config_api_config__WEBPACK_IMPORTED_MODULE_2___default());
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
    if (!url.startsWith((_config_api_config__WEBPACK_IMPORTED_MODULE_2___default().redirectUri))) {
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
    const { clientId , redirectUri , authApi  } = (_config_api_config__WEBPACK_IMPORTED_MODULE_2___default());
    const clientSecret = revealObfuscatedToken((_config_api_config__WEBPACK_IMPORTED_MODULE_2___default().obfuscatedClientSecret));
    // Construct URL parameters for OAuth2
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('redirect_uri', redirectUri);
    params.append('client_secret', clientSecret);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    // Request access token
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(authApi, params, {
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
    const profileApi = _config_api_config__WEBPACK_IMPORTED_MODULE_2___default().driveApi.replace('/drive', '');
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(profileApi, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
async function sendTokenToServer(accessToken, refreshToken, expiryTime) {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api', {
        obfuscatedAccessToken: obfuscateToken(accessToken),
        accessTokenExpiry: parseInt(expiryTime),
        obfuscatedRefreshToken: obfuscateToken(refreshToken)
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


/***/ })

};
;