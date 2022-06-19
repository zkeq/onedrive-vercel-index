"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
;// CONCATENATED MODULE: external "@fortawesome/free-regular-svg-icons"
const free_regular_svg_icons_namespaceObject = require("@fortawesome/free-regular-svg-icons");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./pages/_app.tsx









// import all brand icons with tree-shaking so all icons can be referenced in the app
const iconList = Object.keys(free_brands_svg_icons_namespaceObject).filter((k)=>k !== 'fab' && k !== 'prefix'
).map((icon)=>free_brands_svg_icons_namespaceObject[icon]
);
fontawesome_svg_core_namespaceObject.library.add(free_regular_svg_icons_namespaceObject.faFileImage, free_regular_svg_icons_namespaceObject.faFilePdf, free_regular_svg_icons_namespaceObject.faFileWord, free_regular_svg_icons_namespaceObject.faFilePowerpoint, free_regular_svg_icons_namespaceObject.faFileExcel, free_regular_svg_icons_namespaceObject.faFileAudio, free_regular_svg_icons_namespaceObject.faFileVideo, free_regular_svg_icons_namespaceObject.faFileArchive, free_regular_svg_icons_namespaceObject.faFileCode, free_regular_svg_icons_namespaceObject.faFileAlt, free_regular_svg_icons_namespaceObject.faFile, free_regular_svg_icons_namespaceObject.faFlag, free_regular_svg_icons_namespaceObject.faFolder, free_solid_svg_icons_namespaceObject.faMusic, free_solid_svg_icons_namespaceObject.faArrowLeft, free_solid_svg_icons_namespaceObject.faArrowRight, free_solid_svg_icons_namespaceObject.faAngleRight, free_solid_svg_icons_namespaceObject.faFileDownload, free_regular_svg_icons_namespaceObject.faCopy, free_solid_svg_icons_namespaceObject.faCopy, free_solid_svg_icons_namespaceObject.faPlus, free_solid_svg_icons_namespaceObject.faMinus, free_solid_svg_icons_namespaceObject.faDownload, free_solid_svg_icons_namespaceObject.faLink, free_solid_svg_icons_namespaceObject.faUndo, free_solid_svg_icons_namespaceObject.faBook, free_regular_svg_icons_namespaceObject.faArrowAltCircleDown, free_solid_svg_icons_namespaceObject.faKey, free_regular_svg_icons_namespaceObject.faTrashAlt, free_solid_svg_icons_namespaceObject.faSignOutAlt, free_regular_svg_icons_namespaceObject.faEnvelope, free_solid_svg_icons_namespaceObject.faCloud, free_solid_svg_icons_namespaceObject.faChevronCircleDown, free_solid_svg_icons_namespaceObject.faExternalLinkAlt, free_solid_svg_icons_namespaceObject.faExclamationCircle, free_solid_svg_icons_namespaceObject.faExclamationTriangle, free_solid_svg_icons_namespaceObject.faHome, free_solid_svg_icons_namespaceObject.faCheck, free_regular_svg_icons_namespaceObject.faCheckCircle, free_solid_svg_icons_namespaceObject.faSearch, free_solid_svg_icons_namespaceObject.faChevronDown, free_solid_svg_icons_namespaceObject.faTh, free_solid_svg_icons_namespaceObject.faThLarge, free_solid_svg_icons_namespaceObject.faThList, free_solid_svg_icons_namespaceObject.faLanguage, free_solid_svg_icons_namespaceObject.faPen, ...iconList);
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                height: 1,
                color: "rgb(156, 163, 175, 0.9)",
                options: {
                    showSpinner: false
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));


/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6249));
module.exports = __webpack_exports__;

})();