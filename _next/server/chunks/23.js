"use strict";
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(632);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8165);
/* harmony import */ var _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9038);








const Auth = ({ redirect  })=>{
    const authTokenPath = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_6__/* .matchProtectedRoute */ .ss)(redirect);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const [_, setPersistedToken] = (0,_utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(authTokenPath, '');
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto flex max-w-sm flex-col space-y-4 md:my-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto w-3/4 md:w-5/6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    src: '/images/fabulous-wapmire-weekdays.png',
                    alt: "authenticate",
                    width: 912,
                    height: 912,
                    priority: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-lg font-bold text-gray-900 dark:text-gray-100",
                children: t('Enter Password')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm font-medium text-gray-500",
                children: t('This route (the folder itself and the files inside) is password protected. ') + t('If you know the password, please enter it below.')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "flex-1 rounded border border-gray-600/10 p-2 font-mono focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:focus:ring-blue-700",
                        autoFocus: true,
                        type: "password",
                        placeholder: "************",
                        value: token,
                        onChange: (e)=>{
                            setToken(e.target.value);
                        },
                        onKeyPress: (e)=>{
                            if (e.key === 'Enter' || e.key === 'NumpadEnter') {
                                setPersistedToken(token);
                                router.reload();
                            }
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400",
                        onClick: ()=>{
                            setPersistedToken(token);
                            router.reload();
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                            icon: "arrow-right"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);


/***/ }),

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1176);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




const HomeCrumb = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    className: "h-3 w-3",
                    icon: [
                        'far',
                        'flag'
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-2 font-medium",
                    children: t('Home')
                })
            ]
        })
    }));
};
const Breadcrumb = ({ query  })=>{
    if (query) {
        const { path  } = query;
        if (Array.isArray(path)) {
            // We are rendering the path in reverse, so that the browser automatically scrolls to the end of the breadcrumb
            // https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up/18614561
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                className: "no-scrollbar inline-flex flex-row-reverse items-center gap-1 overflow-x-scroll text-sm text-gray-600 dark:text-gray-300 md:gap-3",
                children: [
                    path.slice(0).reverse().map((p1, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "flex flex-shrink-0 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                    className: "h-3 w-3",
                                    icon: "angle-right"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: `/${path.slice(0, path.length - i).map((p)=>encodeURIComponent(p)
                                    ).join('/')}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: `ml-1 transition-all duration-75 hover:opacity-70 md:ml-3 ${i == 0 && 'pointer-events-none opacity-80'}`,
                                        children: p1
                                    })
                                })
                            ]
                        }, i)
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "flex-shrink-0 transition-all duration-75 hover:opacity-80",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeCrumb, {})
                    })
                ]
            }));
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-sm text-gray-600 transition-all duration-75 hover:opacity-80 dark:text-gray-300",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeCrumb, {})
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 5968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomEmbedLinkMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2216);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_clipboard_copy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5119);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8165);
/* harmony import */ var _utils_getReadablePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9770);









function LinkContainer({ title , value  }) {
    const clipboard = (0,use_clipboard_copy__WEBPACK_IMPORTED_MODULE_5__.useClipboard)({
        copiedTimeout: 1000
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "py-2 text-xs font-medium uppercase tracking-wider",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group relative mb-2 max-h-24 overflow-y-scroll break-all rounded border border-gray-400/20 bg-gray-50 p-2.5 font-mono dark:bg-gray-800",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "opacity-80",
                        children: value
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>clipboard.copy(value)
                        ,
                        className: "absolute top-[0.2rem] right-[0.2rem] w-8 rounded border border-gray-400/40 bg-gray-100 py-1.5 opacity-0 transition-all duration-100 hover:bg-gray-200 group-hover:opacity-100 dark:bg-gray-850 dark:hover:bg-gray-700",
                        children: clipboard.copied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: "check"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: "copy"
                        })
                    })
                ]
            })
        ]
    }));
}
function CustomEmbedLinkMenu({ path , menuOpen , setMenuOpen  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_6__/* .getStoredToken */ .hV)(path);
    // Focus on input automatically when menu modal opens
    const focusInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const closeMenu = ()=>setMenuOpen(false)
    ;
    const readablePath = (0,_utils_getReadablePath__WEBPACK_IMPORTED_MODULE_7__/* .getReadablePath */ .I)(path);
    const filename = readablePath.substring(readablePath.lastIndexOf('/') + 1);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filename);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
        appear: true,
        show: menuOpen,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
            as: "div",
            className: "fixed inset-0 z-10 overflow-y-auto",
            onClose: closeMenu,
            initialFocus: focusInputRef,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen px-4 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-100",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Overlay, {
                            className: "fixed inset-0 bg-white/60 dark:bg-gray-800/60"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block h-screen align-middle",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-100",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-100",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-block max-h-[80vh] w-full max-w-3xl transform overflow-hidden overflow-y-scroll rounded border border-gray-400/30 bg-white p-4 text-left align-middle text-sm shadow-xl transition-all dark:bg-gray-900 dark:text-white",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
                                    as: "h3",
                                    className: "py-2 text-xl font-bold",
                                    children: t('Customise direct link')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Description, {
                                    as: "p",
                                    className: "py-2 opacity-80",
                                    children: [
                                        t('Change the raw file direct link to a URL ending with the extension of the file.'),
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://ovi.swo.moe/docs/features/customise-direct-link",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-blue-400 underline",
                                            children: t('What is this?')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "py-2 text-xs font-medium uppercase tracking-wider",
                                            children: t('Filename')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: "mb-2 w-full rounded border border-gray-600/10 p-2.5 font-mono focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:focus:ring-blue-700",
                                            ref: focusInputRef,
                                            value: name,
                                            onChange: (e)=>setName(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkContainer, {
                                            title: t('Default'),
                                            value: `${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_8__/* .getBaseUrl */ .S)()}/api/raw/?path=${readablePath}${hashedToken ? `&odpt=${hashedToken}` : ''}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkContainer, {
                                            title: t('URL encoded'),
                                            value: `${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_8__/* .getBaseUrl */ .S)()}/api/raw/?path=${path}${hashedToken ? `&odpt=${hashedToken}` : ''}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkContainer, {
                                            title: t('Customised'),
                                            value: `${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_8__/* .getBaseUrl */ .S)()}/api/name/${name}/?path=${readablePath}${hashedToken ? `&odpt=${hashedToken}` : ''}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkContainer, {
                                            title: t('Customised and encoded'),
                                            value: `${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_8__/* .getBaseUrl */ .S)()}/api/name/${name}/?path=${path}${hashedToken ? `&odpt=${hashedToken}` : ''}`
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ DownloadButton),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2216);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(632);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5119);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8165);
/* harmony import */ var _CustomEmbedLinkMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5968);











const btnStyleMap = (btnColor)=>{
    const colorMap = {
        gray: 'hover:text-gray-600 dark:hover:text-white focus:ring-gray-200 focus:text-gray-600 dark:focus:text-white border-gray-300 dark:border-gray-500 dark:focus:ring-gray-500',
        blue: 'hover:text-blue-600 focus:ring-blue-200 focus:text-blue-600 border-blue-300 dark:border-blue-700 dark:focus:ring-blue-500',
        teal: 'hover:text-teal-600 focus:ring-teal-200 focus:text-teal-600 border-teal-300 dark:border-teal-700 dark:focus:ring-teal-500',
        red: 'hover:text-red-600 focus:ring-red-200 focus:text-red-600 border-red-300 dark:border-red-700 dark:focus:ring-red-500',
        green: 'hover:text-green-600 focus:ring-green-200 focus:text-green-600 border-green-300 dark:border-green-700 dark:focus:ring-green-500',
        pink: 'hover:text-pink-600 focus:ring-pink-200 focus:text-pink-600 border-pink-300 dark:border-pink-700 dark:focus:ring-pink-500',
        yellow: 'hover:text-yellow-400 focus:ring-yellow-100 focus:text-yellow-400 border-yellow-300 dark:border-yellow-400 dark:focus:ring-yellow-300'
    };
    if (btnColor) {
        return colorMap[btnColor];
    }
    return colorMap.gray;
};
const DownloadButton = ({ onClickCallback , btnColor , btnText , btnIcon , btnImage , btnTitle  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `flex items-center space-x-2 rounded-lg border bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100/10 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 ${btnStyleMap(btnColor)}`,
        title: btnTitle,
        onClick: onClickCallback,
        children: [
            btnIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: btnIcon
            }),
            btnImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                src: btnImage,
                alt: btnImage,
                width: 20,
                height: 20,
                priority: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: btnText
            })
        ]
    }));
};
const DownloadButtonGroup = ()=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__/* .getStoredToken */ .hV)(asPath);
    const clipboard = (0,use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4__.useClipboard)();
    const { 0: menuOpen , 1: setMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomEmbedLinkMenu__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                menuOpen: menuOpen,
                setMenuOpen: setMenuOpen,
                path: asPath
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownloadButton, {
                        onClickCallback: ()=>window.open(`/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`)
                        ,
                        btnColor: "blue",
                        btnText: t('Download'),
                        btnIcon: "file-download",
                        btnTitle: t('Download the file directly through OneDrive')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownloadButton, {
                        onClickCallback: ()=>{
                            clipboard.copy(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_10__/* .getBaseUrl */ .S)()}/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`);
                            react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success(t('Copied direct link to clipboard.'));
                        },
                        btnColor: "pink",
                        btnText: t('Copy direct link'),
                        btnIcon: "copy",
                        btnTitle: t('Copy the permalink to the file to the clipboard')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownloadButton, {
                        onClickCallback: ()=>setMenuOpen(true)
                        ,
                        btnColor: "teal",
                        btnText: t('Customise link'),
                        btnIcon: "pen"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadButtonGroup);


/***/ }),

/***/ 9563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fh": () => (/* binding */ ChildName),
/* harmony export */   "Yi": () => (/* binding */ ChildIcon),
/* harmony export */   "ys": () => (/* binding */ Downloading),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emoji_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(893);
/* harmony import */ var emoji_regex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emoji_regex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5526);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9038);
/* harmony import */ var _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7766);
/* harmony import */ var _utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(289);
/* harmony import */ var _utils_getFileIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2063);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8165);
/* harmony import */ var _MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9842);
/* harmony import */ var _SwitchLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9889);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6886);
/* harmony import */ var _FourOhFour__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(982);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(998);
/* harmony import */ var _previews_TextPreview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6157);
/* harmony import */ var _previews_MarkdownPreview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3517);
/* harmony import */ var _previews_CodePreview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1667);
/* harmony import */ var _previews_OfficePreview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3931);
/* harmony import */ var _previews_AudioPreview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1059);
/* harmony import */ var _previews_VideoPreview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1688);
/* harmony import */ var _previews_PDFPreview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6398);
/* harmony import */ var _previews_URLPreview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9058);
/* harmony import */ var _previews_ImagePreview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3225);
/* harmony import */ var _previews_DefaultPreview__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5523);
/* harmony import */ var _previews_Containers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(6810);
/* harmony import */ var _FolderListLayout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(4701);
/* harmony import */ var _FolderGridLayout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(8216);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_previews_MarkdownPreview__WEBPACK_IMPORTED_MODULE_19__, _FolderListLayout__WEBPACK_IMPORTED_MODULE_29__, _FolderGridLayout__WEBPACK_IMPORTED_MODULE_30__, _MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__, _utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_10__]);
([_previews_MarkdownPreview__WEBPACK_IMPORTED_MODULE_19__, _FolderListLayout__WEBPACK_IMPORTED_MODULE_29__, _FolderGridLayout__WEBPACK_IMPORTED_MODULE_30__, _MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__, _utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);































// Disabling SSR for some previews
const EPUBPreview = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/FileListing.tsx -> " + "./previews/EPUBPreview"
        ]
    },
    ssr: false
});
/**
 * Convert url query into path string
 *
 * @param query Url query property
 * @returns Path string
 */ const queryToPath = (query)=>{
    if (query) {
        const { path  } = query;
        if (!path) return '/';
        if (typeof path === 'string') return `/${encodeURIComponent(path)}`;
        return `/${path.map((p)=>encodeURIComponent(p)
        ).join('/')}`;
    }
    return '/';
};
// Render the icon of a folder child (may be a file or a folder), use emoji if the name of the child contains emoji
const renderEmoji = (name)=>{
    const emoji = emoji_regex__WEBPACK_IMPORTED_MODULE_4___default()().exec(name);
    return {
        render: emoji && !emoji.index,
        emoji
    };
};
const formatChildName = (name)=>{
    const { render , emoji  } = renderEmoji(name);
    return render ? name.replace(/[0-9][0-9][0-9]?#/, '').replace(emoji ? emoji[0] : '', '').trim() : name;
};
const ChildName = ({ name , folder  })=>{
    const original = formatChildName(name);
    const extension = folder ? '' : (0,_utils_getFileIcon__WEBPACK_IMPORTED_MODULE_11__/* .getRawExtension */ .VT)(original);
    const prename = folder ? original : original.substring(0, original.length - extension.length);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "truncate before:float-right before:content-[attr(data-tail)]",
        "data-tail": extension,
        children: prename
    }));
};
const ChildIcon = ({ child  })=>{
    const { render , emoji  } = renderEmoji(child.name);
    return render ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: emoji ? emoji[0] : '📁'
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        icon: child.file ? (0,_utils_getFileIcon__WEBPACK_IMPORTED_MODULE_11__/* .getFileIcon */ .LP)(child.name, {
            video: Boolean(child.video)
        }) : [
            'far',
            'folder'
        ]
    });
};
// export const Checkbox: FC<{
//   checked: 0 | 1 | 2
//   onChange: () => void
//   title: string
//   indeterminate?: boolean
// }> = ({ checked, onChange, title, indeterminate }) => {
//   const ref = useRef<HTMLInputElement>(null)
//   useEffect(() => {
//     if (ref.current) {
//       ref.current.checked = Boolean(checked)
//       if (indeterminate) {
//         ref.current.indeterminate = checked == 1
//       }
//     }
//   }, [ref, checked, indeterminate])
//   const handleClick: MouseEventHandler = e => {
//     if (ref.current) {
//       if (e.target === ref.current) {
//         e.stopPropagation()
//       } else {
//         ref.current.click()
//       }
//     }
//   }
//   return (
//     <span
//       title={title}
//       className="inline-flex cursor-pointer items-center rounded p-1.5 hover:bg-gray-300 dark:hover:bg-gray-600"
//       onClick={handleClick}
//     >
//       <input
//         className="form-check-input cursor-pointer"
//         type="checkbox"
//         value={checked ? '1' : ''}
//         ref={ref}
//         aria-label={title}
//         onChange={onChange}
//       />
//     </span>
//   )
// }
const Downloading = ({ title , style  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        title: title,
        className: `${style} rounded`,
        role: "status",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_15__/* .LoadingIcon */ .H, {
            // Use fontawesome far theme via class `svg-inline--fa` to get style `vertical-align` only
            // for consistent icon alignment, as class `align-*` cannot satisfy it
            className: "svg-inline--fa inline-block h-4 w-4 animate-spin"
        })
    }));
};
const FileListing = ({ query  })=>{
    var ref, ref1;
    const { 0: selected1 , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: totalSelected , 1: setTotalSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: totalGenerating , 1: setTotalGenerating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: folderGenerating , 1: setFolderGenerating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_12__/* .getStoredToken */ .hV)(router.asPath);
    const [layout, _] = (0,_utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)('preferredLayout', _SwitchLayout__WEBPACK_IMPORTED_MODULE_14__/* .layouts[0] */ .$[0]);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const path1 = queryToPath(query);
    const { data , error: error1 , size , setSize  } = (0,_utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_10__/* .useProtectedSWRInfinite */ .E)(path1);
    if (error1) {
        // If error includes 403 which means the user has not completed initial setup, redirect to OAuth page
        if (error1.status === 403) {
            router.push('/onedrive-vercel-index-oauth/step-1');
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        }
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_Containers__WEBPACK_IMPORTED_MODULE_28__/* .PreviewContainer */ .p, {
            children: error1.status === 401 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                redirect: path1
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                errorMsg: JSON.stringify(error1.message)
            })
        }));
    }
    if (!data) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_Containers__WEBPACK_IMPORTED_MODULE_28__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                loadingText: t('Loading ...')
            })
        }));
    }
    const responses = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error1;
    const isLoadingMore = isLoadingInitialData || size > 0 && data && typeof data[size - 1] === 'undefined';
    const isEmpty = (data === null || data === void 0 ? void 0 : (ref = data[0]) === null || ref === void 0 ? void 0 : ref.length) === 0;
    const isReachingEnd = isEmpty || data && typeof ((ref1 = data[data.length - 1]) === null || ref1 === void 0 ? void 0 : ref1.next) === 'undefined';
    const onlyOnePage = data && typeof data[0].next === 'undefined';
    if ('folder' in responses[0]) {
        // Expand list of API returns into flattened file data
        const folderChildren = [].concat(...responses.map((r)=>r.folder.value
        ));
        // Find README.md file to render
        const readmeFile = folderChildren.find((c)=>c.name.toLowerCase() === 'readme.md'
        );
        // Filtered file list helper
        const getFiles = ()=>folderChildren.filter((c)=>!c.folder && c.name !== '.password'
            )
        ;
        // File selection
        const genTotalSelected = (selected)=>{
            const selectInfo = getFiles().map((c)=>Boolean(selected[c.id])
            );
            const [hasT, hasF] = [
                selectInfo.some((i)=>i
                ),
                selectInfo.some((i)=>!i
                )
            ];
            return hasT && hasF ? 1 : !hasF ? 2 : 0;
        };
        const toggleItemSelected = (id)=>{
            let val;
            if (selected1[id]) {
                val = {
                    ...selected1
                };
                delete val[id];
            } else {
                val = {
                    ...selected1,
                    [id]: true
                };
            }
            setSelected(val);
            setTotalSelected(genTotalSelected(val));
        };
        const toggleTotalSelected = ()=>{
            if (genTotalSelected(selected1) == 2) {
                setSelected({});
                setTotalSelected(0);
            } else {
                setSelected(Object.fromEntries(getFiles().map((c)=>[
                        c.id,
                        true
                    ]
                )));
                setTotalSelected(2);
            }
        };
        // Selected file download
        const handleSelectedDownload = ()=>{
            const folderName = path1.substring(path1.lastIndexOf('/') + 1);
            const folder = folderName ? decodeURIComponent(folderName) : undefined;
            const files = getFiles().filter((c)=>selected1[c.id]
            ).map((c)=>({
                    name: c.name,
                    url: `/api/raw/?path=${path1}/${c.name}${hashedToken ? `&odpt=${hashedToken}` : ''}`
                })
            );
            if (files.length == 1) {
                const el = document.createElement('a');
                el.style.display = 'none';
                document.body.appendChild(el);
                el.href = files[0].url;
                el.click();
                el.remove();
            } else if (files.length > 1) {
                setTotalGenerating(true);
                const toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().loading(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__/* .DownloadingToast */ .Nv, {
                    router: router
                }));
                (0,_MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__/* .downloadMultipleFiles */ .tg)({
                    toastId,
                    router,
                    files,
                    folder
                }).then(()=>{
                    setTotalGenerating(false);
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success(t('Finished downloading selected files.'), {
                        id: toastId
                    });
                }).catch(()=>{
                    setTotalGenerating(false);
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().error(t('Failed to download selected files.'), {
                        id: toastId
                    });
                });
            }
        };
        // Folder recursive download
        const handleFolderDownload = (path, id, name)=>{
            return ()=>{
                const files = async function*() {
                    for await (const { meta: c , isFolder , error  } of (0,_MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__/* .traverseFolder */ .fW)(path)){
                        if (error) {
                            react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().error(t('Failed to download folder {{path}}: {{status}} {{message}} Skipped it to continue.', {
                                status: error.status,
                                message: error.message
                            }));
                            continue;
                        }
                        yield {
                            name: c === null || c === void 0 ? void 0 : c.name,
                            // url: `/api/raw/?path=${p}${hashedTokenForPath ? `&odpt=${hashedTokenForPath}` : ''}`,
                            isFolder
                        };
                    }
                }();
                setFolderGenerating({
                    ...folderGenerating,
                    [id]: true
                });
                const toastId = react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().loading(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MultiFileDownloader__WEBPACK_IMPORTED_MODULE_13__/* .DownloadingToast */ .Nv, {
                    router: router
                }));
            };
        };
        // Folder layout component props
        const folderProps = {
            toast: (react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default()),
            path: path1,
            folderChildren,
            selected: selected1,
            toggleItemSelected,
            totalSelected,
            toggleTotalSelected,
            totalGenerating,
            handleSelectedDownload,
            folderGenerating,
            handleFolderDownload
        };
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}),
                layout.name === 'Grid' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FolderGridLayout__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                    ...folderProps
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FolderListLayout__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    ...folderProps
                }),
                !onlyOnePage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-b bg-white dark:bg-gray-900 dark:text-gray-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-b border-gray-200 p-3 text-center font-mono text-sm text-gray-400 dark:border-gray-700",
                            children: t('- showing {{count}} page(s) ', {
                                count: size,
                                totalFileNum: isLoadingMore ? '...' : folderChildren.length
                            }) + (isLoadingMore ? t('of {{count}} file(s) -', {
                                count: folderChildren.length,
                                context: 'loading'
                            }) : t('of {{count}} file(s) -', {
                                count: folderChildren.length,
                                context: 'loaded'
                            }))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `flex w-full items-center justify-center space-x-2 p-3 disabled:cursor-not-allowed ${isLoadingMore || isReachingEnd ? 'opacity-60' : 'hover:bg-gray-100 dark:hover:bg-gray-850'}`,
                            onClick: ()=>setSize(size + 1)
                            ,
                            disabled: isLoadingMore || isReachingEnd,
                            children: isLoadingMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_15__/* .LoadingIcon */ .H, {
                                        className: "inline-block h-4 w-4 animate-spin"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: t('Loading ...')
                                    }),
                                    ' '
                                ]
                            }) : isReachingEnd ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t('No more files')
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: t('Load more')
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: "chevron-circle-down"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                readmeFile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_MarkdownPreview__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        file: readmeFile,
                        path: path1,
                        standalone: false,
                        proxy: true
                    })
                })
            ]
        }));
    }
    if ('file' in responses[0] && responses.length === 1) {
        const file = responses[0].file;
        const previewType = (0,_utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .getPreviewType */ .bv)((0,_utils_getFileIcon__WEBPACK_IMPORTED_MODULE_11__/* .getExtension */ .RT)(file.name), {
            video: Boolean(file.video)
        });
        if (previewType) {
            switch(previewType){
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.image */ .RN.image:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_ImagePreview__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.text */ .RN.text:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_TextPreview__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.code */ .RN.code:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_CodePreview__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.markdown */ .RN.markdown:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_MarkdownPreview__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        file: file,
                        path: path1
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.video */ .RN.video:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_VideoPreview__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.audio */ .RN.audio:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_AudioPreview__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.pdf */ .RN.pdf:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_PDFPreview__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.office */ .RN.office:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_OfficePreview__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.epub */ .RN.epub:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EPUBPreview, {
                        file: file
                    }));
                case _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_9__/* .preview.url */ .RN.url:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_URLPreview__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                        file: file
                    }));
                default:
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_DefaultPreview__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                        file: file
                    }));
            }
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_DefaultPreview__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                file: file
            }));
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_previews_Containers__WEBPACK_IMPORTED_MODULE_28__/* .PreviewContainer */ .p, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            errorMsg: t('Cannot preview {{path}}', {
                path: path1
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileListing);

});

/***/ }),

/***/ 8216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1176);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2216);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5119);
/* harmony import */ var _utils_fileDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8031);
/* harmony import */ var _FileListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9563);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8165);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5748);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_config_api_config__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FileListing__WEBPACK_IMPORTED_MODULE_7__]);
_FileListing__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const GridItem = ({ c , path  })=>{
    var ref;
    // We use the generated medium thumbnail for rendering preview images (excluding folders)
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__/* .getStoredToken */ .hV)(path);
    const thumbnailUrl = 'folder' in c ? null : `/api/thumbnail/?path=${path}&size=medium${hashedToken ? `&odpt=${hashedToken}` : ''}`;
    // Some thumbnails are broken, so we check for onerror event in the image component
    const { 0: brokenThumbnail , 1: setBrokenThumbnail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-32 overflow-hidden rounded border border-gray-900/10 dark:border-gray-500/30",
                children: thumbnailUrl && !brokenThumbnail ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "h-full w-full object-cover object-top",
                    src: thumbnailUrl,
                    alt: c.name,
                    onError: ()=>setBrokenThumbnail(true)
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex h-full w-full items-center justify-center rounded-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_7__/* .ChildIcon */ .Yi, {
                            child: c
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute bottom-0 right-0 m-1 font-medium text-gray-700 dark:text-gray-500",
                            children: (ref = c.folder) === null || ref === void 0 ? void 0 : ref.childCount
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-start justify-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "w-5 flex-shrink-0 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_7__/* .ChildIcon */ .Yi, {
                            child: c
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_7__/* .ChildName */ .fh, {
                        name: c.name,
                        folder: Boolean(c.folder)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "truncate text-center font-mono text-xs text-gray-700 dark:text-gray-500",
                children: (0,_utils_fileDetails__WEBPACK_IMPORTED_MODULE_6__/* .formatModifiedDateTime */ .E)(c.lastModifiedDateTime)
            })
        ]
    }));
};
const FolderGridLayout = ({ path , folderChildren , selected , toggleItemSelected , totalSelected , toggleTotalSelected , totalGenerating , handleSelectedDownload , folderGenerating , handleFolderDownload , toast ,  })=>{
    const clipboard = (0,use_clipboard_copy__WEBPACK_IMPORTED_MODULE_4__.useClipboard)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__/* .getStoredToken */ .hV)(path);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    // Get item path from item name
    const getItemPath = (name)=>`${path === '/' ? '' : path}/${encodeURIComponent(name)}`
    ;
    folderChildren = folderChildren.filter((c)=>c.name.match(new RegExp(_config_api_config__WEBPACK_IMPORTED_MODULE_9__.hideFileRegex, 'i')) === null
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded bg-white dark:bg-gray-900 dark:text-gray-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center border-b border-gray-900/10 px-3 text-xs font-bold uppercase tracking-widest text-gray-600 dark:border-gray-500/30 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1",
                        children: t('{{count}} item(s)', {
                            count: folderChildren.length
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex p-1.5 text-gray-700 dark:text-gray-400",
                        children: totalGenerating ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_7__/* .Downloading */ .ys, {
                            title: t('Downloading selected files, refresh page to cancel'),
                            style: "p-1.5"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            title: t('Download selected files'),
                            className: "cursor-pointer rounded p-1.5 hover:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white dark:hover:bg-gray-600 disabled:dark:text-gray-600 disabled:hover:dark:bg-gray-900",
                            disabled: totalSelected === 0,
                            onClick: handleSelectedDownload,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                icon: [
                                    'far',
                                    'arrow-alt-circle-down'
                                ],
                                size: "lg"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-2 gap-3 p-3 md:grid-cols-4",
                children: folderChildren.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "group relative overflow-hidden rounded transition-all duration-100 hover:bg-gray-100 dark:hover:bg-gray-850",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute top-0 right-0 z-10 m-1 rounded bg-white/50 py-0.5 opacity-0 transition-all duration-100 group-hover:opacity-100 dark:bg-gray-900/50",
                                children: c.folder ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            title: t('Copy folder permalink'),
                                            className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                            onClick: ()=>{
                                                clipboard.copy(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_10__/* .getBaseUrl */ .S)()}${getItemPath(c.name)}`);
                                                toast(t('Copied folder permalink.'), {
                                                    icon: '👌'
                                                });
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: [
                                                    'far',
                                                    'copy'
                                                ]
                                            })
                                        }),
                                        folderGenerating[c.id] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_7__/* .Downloading */ .ys, {
                                            title: t('Downloading folder, refresh page to cancel'),
                                            style: "px-1.5 py-1"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            title: t('Download folder'),
                                            className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                            onClick: handleFolderDownload(getItemPath(c.name), c.id, c.name),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: [
                                                    'far',
                                                    'arrow-alt-circle-down'
                                                ]
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            title: t('Copy raw file permalink'),
                                            className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                            onClick: ()=>{
                                                clipboard.copy(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_10__/* .getBaseUrl */ .S)()}/api/raw/?path=${getItemPath(c.name)}${hashedToken ? `&odpt=${hashedToken}` : ''}`);
                                                toast.success(t('Copied raw file permalink.'));
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: [
                                                    'far',
                                                    'copy'
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            title: t('Download file'),
                                            className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                            href: `${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_10__/* .getBaseUrl */ .S)()}/api/raw/?path=${getItemPath(c.name)}${hashedToken ? `&odpt=${hashedToken}` : ''}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: [
                                                    'far',
                                                    'arrow-alt-circle-down'
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${selected[c.id] ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 z-10 m-1 rounded bg-white/50 py-0.5 group-hover:opacity-100 dark:bg-gray-900/50`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                href: getItemPath(c.name),
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GridItem, {
                                        c: c,
                                        path: getItemPath(c.name)
                                    })
                                })
                            })
                        ]
                    }, c.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderGridLayout);

});

/***/ }),

/***/ 4701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1176);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2216);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5119);
/* harmony import */ var _utils_fileDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8031);
/* harmony import */ var _utils_getReadablePath__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9770);
/* harmony import */ var _FileListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9563);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5748);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_api_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8165);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FileListing__WEBPACK_IMPORTED_MODULE_6__]);
_FileListing__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const FileListItem = ({ fileContent: c  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid cursor-pointer grid-cols-10 items-center space-x-2 px-3 py-2.5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-span-10 flex items-center space-x-2 truncate md:col-span-6",
                title: c.name,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-5 flex-shrink-0 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_6__/* .ChildIcon */ .Yi, {
                            child: c
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_6__/* .ChildName */ .fh, {
                        name: c.name,
                        folder: Boolean(c.folder)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-span-3 hidden flex-shrink-0 font-mono text-sm text-gray-700 dark:text-gray-500 md:block",
                children: (0,_utils_fileDetails__WEBPACK_IMPORTED_MODULE_5__/* .formatModifiedDateTime */ .E)(c.lastModifiedDateTime)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-span-1 hidden flex-shrink-0 truncate font-mono text-sm text-gray-700 dark:text-gray-500 md:block",
                children: (0,_utils_fileDetails__WEBPACK_IMPORTED_MODULE_5__/* .humanFileSize */ .g)(c.size)
            })
        ]
    }));
};
const FolderListLayout = ({ path , folderChildren , selected , toggleItemSelected , totalSelected , toggleTotalSelected , totalGenerating , handleSelectedDownload , folderGenerating , handleFolderDownload , toast ,  })=>{
    const clipboard = (0,use_clipboard_copy__WEBPACK_IMPORTED_MODULE_2__.useClipboard)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_8__/* .getStoredToken */ .hV)(path);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    // Get item path from item name
    const getItemPath = (name)=>`${path === '/' ? '' : path}/${encodeURIComponent(name)}`
    ;
    folderChildren = folderChildren.filter((c)=>c.name.match(new RegExp(_config_api_config__WEBPACK_IMPORTED_MODULE_7__.hideFileRegex, 'i')) === null
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded bg-white dark:bg-gray-900 dark:text-gray-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-11 items-center space-x-2 border-b border-gray-900/10 px-3 dark:border-gray-500/30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-12 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:col-span-6",
                        children: t('Name')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-3 hidden text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:block",
                        children: t('Last Modified')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:block",
                        children: t('Size')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 md:block",
                        children: t('Actions')
                    })
                ]
            }),
            folderChildren.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-11 transition-all duration-100 hover:bg-gray-100 dark:hover:bg-gray-850",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: `${path === '/' ? '' : path}/${encodeURIComponent(c.name)}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "col-span-12 md:col-span-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FileListItem, {
                                    fileContent: c
                                })
                            })
                        }),
                        c.folder ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden p-1.5 text-gray-700 dark:text-gray-400 md:flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    title: t('Copy folder permalink'),
                                    className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                    onClick: ()=>{
                                        clipboard.copy(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_9__/* .getBaseUrl */ .S)()}${(0,_utils_getReadablePath__WEBPACK_IMPORTED_MODULE_10__/* .getReadablePath */ .I)(`${path === '/' ? '' : path}/${encodeURIComponent(c.name)}`)}`);
                                        toast(t('Copied folder permalink.'), {
                                            icon: '👌'
                                        });
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: [
                                            'far',
                                            'copy'
                                        ]
                                    })
                                }),
                                folderGenerating[c.id] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FileListing__WEBPACK_IMPORTED_MODULE_6__/* .Downloading */ .ys, {
                                    title: t('Downloading folder, refresh page to cancel'),
                                    style: "px-1.5 py-1"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    title: t('Download folder'),
                                    className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                    onClick: ()=>{
                                        const p = `${path === '/' ? '' : path}/${encodeURIComponent(c.name)}`;
                                        handleFolderDownload(p, c.id, c.name)();
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: [
                                            'far',
                                            'arrow-alt-circle-down'
                                        ]
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden p-1.5 text-gray-700 dark:text-gray-400 md:flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    title: t('Copy raw file permalink'),
                                    className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                    onClick: ()=>{
                                        clipboard.copy(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_9__/* .getBaseUrl */ .S)()}/api/raw/?path=${(0,_utils_getReadablePath__WEBPACK_IMPORTED_MODULE_10__/* .getReadablePath */ .I)(getItemPath(c.name))}${hashedToken ? `&odpt=${hashedToken}` : ''}`);
                                        toast.success(t('Copied raw file permalink.'));
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: [
                                            'far',
                                            'copy'
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    title: t('Download file'),
                                    className: "cursor-pointer rounded px-1.5 py-1 hover:bg-gray-300 dark:hover:bg-gray-600",
                                    href: `/api/raw/?path=${getItemPath(c.name)}${hashedToken ? `&odpt=${hashedToken}` : ''}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: [
                                            'far',
                                            'arrow-alt-circle-down'
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }, c.id)
            )
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderListLayout);

});

/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);


const FourOhFour = ({ errorMsg  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/js.js"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FourOhFour);


/***/ }),

/***/ 9842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nv": () => (/* binding */ DownloadingToast),
/* harmony export */   "tg": () => (/* binding */ downloadMultipleFiles),
/* harmony export */   "fW": () => (/* binding */ traverseFolder)
/* harmony export */ });
/* unused harmony exports downloadBlob, downloadTreelikeMultipleFiles */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9227);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(289);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8165);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_4__]);
_utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






/**
 * A loading toast component with file download progress support
 * @param props
 * @param props.router Next router instance, used for reloading the page
 * @param props.progress Current downloading and compression progress (returned by jszip metadata)
 */ function DownloadingToast({ router , progress  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-56",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: progress ? t('Downloading {{progress}}%', {
                            progress
                        }) : t('Downloading selected files...')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative mt-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex h-1 overflow-hidden rounded bg-gray-100",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: `${progress}%`
                                },
                                className: "bg-gray-500 text-white transition-all duration-100"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "rounded bg-red-500 p-2 text-white hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300",
                onClick: ()=>router.reload()
                ,
                children: t('Cancel')
            })
        ]
    }));
}
// Blob download helper
function downloadBlob({ blob , name  }) {
    // Prepare for download
    const el = document.createElement('a');
    el.style.display = 'none';
    document.body.appendChild(el);
    // Download zip file
    const bUrl = window.URL.createObjectURL(blob);
    el.href = bUrl;
    el.download = name;
    el.click();
    window.URL.revokeObjectURL(bUrl);
    el.remove();
}
/**
 * Download multiple files after compressing them into a zip
 * @param toastId Toast ID to be used for toast notification
 * @param files Files to be downloaded
 * @param folder Optional folder name to hold files, otherwise flatten files in the zip
 */ async function downloadMultipleFiles({ toastId , router , files , folder  }) {
    const zip = new (jszip__WEBPACK_IMPORTED_MODULE_2___default())();
    const dir = folder ? zip.folder(folder) : zip;
    // Add selected file blobs to zip
    files.forEach(({ name , url  })=>{
        dir.file(name, fetch(url).then((r)=>{
            return r.blob();
        }));
    });
    // Create zip file and download it
    const b = await zip.generateAsync({
        type: 'blob'
    }, (metadata)=>{
        react_hot_toast__WEBPACK_IMPORTED_MODULE_1___default().loading(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DownloadingToast, {
            router: router,
            progress: metadata.percent.toFixed(0)
        }), {
            id: toastId
        });
    });
    downloadBlob({
        blob: b,
        name: folder ? folder + '.zip' : 'download.zip'
    });
}
/**
 * Download hierarchical tree-like files after compressing them into a zip
 * @param toastId Toast ID to be used for toast notification
 * @param files Files to be downloaded. Array of file and folder items excluding root folder.
 * Folder items MUST be in front of its children items in the array.
 * Use async generator because generation of the array may be slow.
 * When waiting for its generation, we can meanwhile download bodies of already got items.
 * Only folder items can have url undefined.
 * @param basePath Root dir path of files to be downloaded
 * @param folder Optional folder name to hold files, otherwise flatten files in the zip
 */ async function downloadTreelikeMultipleFiles({ toastId , router , files , basePath , folder  }) {
    const zip = new JSZip();
    const root = folder ? zip.folder(folder) : zip;
    const map = [
        {
            path: basePath,
            dir: root
        }
    ];
    // Add selected file blobs to zip according to its path
    for await (const { name , url , path , isFolder  } of files){
        // Search parent dir in map
        const i = map.slice().reverse().findIndex(({ path: parent  })=>path.substring(0, parent.length) === parent && path.substring(parent.length + 1).indexOf('/') === -1
        );
        if (i === -1) {
            throw new Error('File array does not satisfy requirement');
        }
        // Add file or folder to zip
        const dir = map[map.length - 1 - i].dir;
        if (isFolder) {
            map.push({
                path,
                dir: dir.folder(name)
            });
        } else {
            dir.file(name, fetch(url).then((r)=>r.blob()
            ));
        }
    }
    // Create zip file and download it
    const b = await zip.generateAsync({
        type: 'blob'
    }, (metadata)=>{
        toast.loading(/*#__PURE__*/ _jsx(DownloadingToast, {
            router: router,
            progress: metadata.percent.toFixed(0)
        }), {
            id: toastId
        });
    });
    downloadBlob({
        blob: b,
        name: folder ? folder + '.zip' : 'download.zip'
    });
}
/**
 * One-shot concurrent top-down file traversing for the folder.
 * Due to react hook limit, we cannot reuse SWR utils for recursive actions.
 * We will directly fetch API and arrange responses instead.
 * In folder tree, we visit folders top-down as concurrently as possible.
 * Every time we visit a folder, we fetch and return meta of all its children.
 * If folders have pagination, partically retrieved items are not returned immediately,
 * but after all children of the folder have been successfully retrieved.
 * If an error occurred in paginated fetching, all children will be dropped.
 * @param path Folder to be traversed. The path should be cleaned in advance.
 * @returns Array of items representing folders and files of traversed folder top-down and excluding root folder.
 * Due to top-down, Folder items are ALWAYS in front of its children items.
 * Error key in the item will contain the error when there is a handleable error.
 */ async function* traverseFolder(path1) {
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_5__/* .getStoredToken */ .hV)(path1);
    // Generate the task passed to Promise.race to request a folder
    const genTask = async (i, path, next)=>{
        return {
            i,
            path,
            data: await (0,_utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_4__/* .fetcher */ ._)(next ? `/api/?path=${path}&next=${next}` : `/api?path=${path}`, hashedToken ?? undefined).catch((error)=>({
                    i,
                    path,
                    error
                })
            )
        };
    };
    // Pool containing Promises of folder requests
    let pool = [
        genTask(0, path1)
    ];
    // Map as item buffer for folders with pagination
    const buf = {};
    // filter(() => true) removes gaps in the array
    while(pool.filter(()=>true
    ).length > 0){
        let info;
        try {
            info = await Promise.race(pool.filter(()=>true
            ));
        } catch (error) {
            const { i , path , error: innerError  } = error;
            // 4xx errors are identified as handleable errors
            if (Math.floor(innerError.status / 100) === 4) {
                delete pool[i];
                yield {
                    path,
                    meta: {},
                    isFolder: true,
                    error: {
                        status: innerError.status,
                        message: innerError.message.error
                    }
                };
                continue;
            } else {
                throw error;
            }
        }
        const { i: i1 , path , data  } = info;
        if (!data || !data.folder) {
            throw new Error('Path is not folder');
        }
        delete pool[i1];
        const items = data.folder.value.map((c)=>{
            const p = `${path === '/' ? '' : path}/${encodeURIComponent(c.name)}`;
            return {
                path: p,
                meta: c,
                isFolder: Boolean(c.folder)
            };
        });
        if (data.next) {
            buf[path] = (buf[path] ?? []).concat(items);
            // Append next page task to the pool at the end
            const i = pool.length;
            pool[i] = genTask(i, path, data.next);
        } else {
            const allItems = (buf[path] ?? []).concat(items);
            if (buf[path]) {
                delete buf[path];
            }
            allItems.filter((item)=>item.isFolder
            ).forEach((item)=>{
                // Append new folder tasks to the pool at the end
                const i = pool.length;
                pool[i] = genTask(i, item.path);
            });
            yield* allItems;
        }
    }
}

});

/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ layouts),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9038);






const layouts = [
    {
        id: 1,
        name: 'List',
        icon: 'th-list'
    },
    {
        id: 2,
        name: 'Grid',
        icon: 'th'
    }, 
];
const SwitchLayout = ()=>{
    const [preferredLayout, setPreferredLayout] = (0,_utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('preferredLayout', layouts[0]);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-24 flex-shrink-0 text-sm text-gray-600 dark:text-gray-300 md:w-28",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox, {
            value: preferredLayout,
            onChange: setPreferredLayout,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Button, {
                    className: "relative w-full cursor-pointer rounded pl-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "pointer-events-none flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                    className: "mr-2 h-3 w-3",
                                    icon: preferredLayout.icon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: // t('Grid')
                                    // t('List')
                                    t(preferredLayout.name)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                className: "h-3 w-3",
                                icon: "chevron-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "transition duration-100 ease-out",
                    enterFrom: "transform scale-95 opacity-0",
                    enterTo: "transform scale-100 opacity-100",
                    leave: "transition duration-75 ease-out",
                    leaveFrom: "transform scale-100 opacity-100",
                    leaveTo: "transform scale-95 opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Options, {
                        className: "absolute right-0 z-20 mt-1 w-32 overflow-auto rounded border border-gray-900/10 bg-white py-1 shadow-lg focus:outline-none dark:border-gray-500/30 dark:bg-gray-800",
                        children: layouts.map((layout)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Listbox.Option, {
                                className: `${layout.name === preferredLayout.name && 'bg-blue-50 text-blue-700 dark:bg-blue-600/10 dark:text-blue-400'} relative flex cursor-pointer select-none items-center py-1.5 pl-3 text-gray-600 hover:opacity-80 dark:text-gray-300`,
                                value: layout,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        className: "mr-2 h-3 w-3",
                                        icon: layout.icon
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: layout.name === preferredLayout.name ? 'font-medium' : 'font-normal',
                                        children: // t('Grid')
                                        // t('List')
                                        t(layout.name)
                                    }),
                                    layout.name === preferredLayout.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "absolute inset-y-0 right-3 flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                            className: "h-3 w-3",
                                            icon: "check"
                                        })
                                    })
                                ]
                            }, layout.id)
                        )
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchLayout);


/***/ }),

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9389);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6810);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6886);
/* harmony import */ var _utils_fileDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8031);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8165);











var PlayerState;
(function(PlayerState) {
    PlayerState[PlayerState["Loading"] = 0] = "Loading";
    PlayerState[PlayerState["Ready"] = 1] = "Ready";
    PlayerState[PlayerState["Playing"] = 2] = "Playing";
    PlayerState[PlayerState["Paused"] = 3] = "Paused";
})(PlayerState || (PlayerState = {}));
const AudioPreview = ({ file  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_10__/* .getStoredToken */ .hV)(asPath);
    const rapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: playerStatus , 1: setPlayerStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(PlayerState.Loading);
    // Render audio thumbnail, and also check for broken thumbnails
    const thumbnail = `/api/thumbnail/?path=${asPath}&size=medium${hashedToken ? `&odpt=${hashedToken}` : ''}`;
    const { 0: brokenThumbnail , 1: setBrokenThumbnail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Manually get the HTML audio element and set onplaying event.
        // - As the default event callbacks provided by the React component does not guarantee playing state to be set
        // - properly when the user seeks through the timeline or the audio is buffered.
        const rap = rapRef.current.audioEl.current;
        if (rap) {
            rap.oncanplay = ()=>setPlayerStatus(PlayerState.Ready)
            ;
            rap.onended = ()=>setPlayerStatus(PlayerState.Paused)
            ;
            rap.onpause = ()=>setPlayerStatus(PlayerState.Paused)
            ;
            rap.onplay = ()=>setPlayerStatus(PlayerState.Playing)
            ;
            rap.onplaying = ()=>setPlayerStatus(PlayerState.Playing)
            ;
            rap.onseeking = ()=>setPlayerStatus(PlayerState.Loading)
            ;
            rap.onwaiting = ()=>setPlayerStatus(PlayerState.Loading)
            ;
            rap.onerror = ()=>setPlayerStatus(PlayerState.Paused)
            ;
        }
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col space-y-4 md:flex-row md:space-x-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative flex aspect-square w-full items-center justify-center rounded bg-gray-100 transition-all duration-75 dark:bg-gray-700 md:w-48",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `absolute z-20 flex h-full w-full items-center justify-center transition-all duration-300 ${playerStatus === PlayerState.Loading ? 'bg-white opacity-80 dark:bg-gray-800' : 'bg-transparent opacity-0'}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_8__/* .LoadingIcon */ .H, {
                                        className: "z-10 inline-block h-5 w-5 animate-spin"
                                    })
                                }),
                                !brokenThumbnail ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute m-4 rounded-full shadow-lg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: `h-full w-full rounded-full object-cover object-top ${playerStatus === PlayerState.Playing ? 'animate-spin-slow' : ''}`,
                                        src: thumbnail,
                                        alt: file.name,
                                        onError: ()=>setBrokenThumbnail(true)
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                    className: `z-10 h-5 w-5 ${playerStatus === PlayerState.Playing ? 'animate-spin' : ''}`,
                                    icon: "music",
                                    size: "2x"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-2 font-medium",
                                            children: file.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-4 text-sm text-gray-500",
                                            children: t('Last modified:') + ' ' + (0,_utils_fileDetails__WEBPACK_IMPORTED_MODULE_9__/* .formatModifiedDateTime */ .E)(file.lastModifiedDateTime)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_audio_player__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "h-11 w-full",
                                    src: `/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`,
                                    ref: rapRef,
                                    controls: true,
                                    preload: "auto"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioPreview);


/***/ }),

/***/ 1667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_system_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5193);
/* harmony import */ var react_use_system_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_system_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7079);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3876);
/* harmony import */ var _utils_getPreviewType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7766);
/* harmony import */ var _FourOhFour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(982);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6886);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6810);












const CodePreview = ({ file  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { response: content , error , validating  } = (0,_utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(`/api/raw/?path=${asPath}`, asPath);
    const theme = react_use_system_theme__WEBPACK_IMPORTED_MODULE_2___default()('dark');
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    if (error) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_11__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                errorMsg: error
            })
        }));
    }
    if (validating) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_11__/* .PreviewContainer */ .p, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        loadingText: t('Loading file content...')
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_11__/* .DownloadBtnContainer */ .W, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_11__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.LightAsync, {
                    language: (0,_utils_getPreviewType__WEBPACK_IMPORTED_MODULE_7__/* .getLanguageByFileName */ .kL)(file.name),
                    style: theme === 'dark' ? react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__.tomorrowNightEighties : react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__.tomorrow,
                    children: content
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_11__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodePreview);


/***/ }),

/***/ 6810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PreviewContainer),
/* harmony export */   "W": () => (/* binding */ DownloadBtnContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PreviewContainer({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rounded bg-white p-3 dark:bg-gray-900 dark:text-white",
        children: children
    }));
}
function DownloadBtnContainer({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky bottom-0 left-0 right-0 z-10 rounded border-t border-gray-900/10 bg-white bg-opacity-80 p-2 backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900",
        children: children
    }));
}


/***/ }),

/***/ 5523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getFileIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2063);
/* harmony import */ var _utils_fileDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8031);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6810);







const DefaultPreview = ({ file  })=>{
    var ref, ref1, ref2, ref3;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_6__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "items-center px-5 py-4 md:flex md:space-x-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded-lg border border-gray-900/10 px-8 py-20 text-center dark:border-gray-500/30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    icon: (0,_utils_getFileIcon__WEBPACK_IMPORTED_MODULE_3__/* .getFileIcon */ .LP)(file.name, {
                                        video: Boolean(file.video)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-6 text-sm font-medium line-clamp-3 md:w-28",
                                    children: file.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col space-y-2 py-4 md:flex-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "py-2 text-xs font-medium uppercase opacity-80",
                                            children: t('Last modified')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: (0,_utils_fileDetails__WEBPACK_IMPORTED_MODULE_4__/* .formatModifiedDateTime */ .E)(file.lastModifiedDateTime)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "py-2 text-xs font-medium uppercase opacity-80",
                                            children: t('File size')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: (0,_utils_fileDetails__WEBPACK_IMPORTED_MODULE_4__/* .humanFileSize */ .g)(file.size)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "py-2 text-xs font-medium uppercase opacity-80",
                                            children: t('MIME type')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: ((ref = file.file) === null || ref === void 0 ? void 0 : ref.mimeType) ?? t('Unavailable')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "py-2 text-xs font-medium uppercase opacity-80",
                                            children: t('Hashes')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                            className: "block w-full overflow-scroll whitespace-nowrap text-sm md:table",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border-y bg-white dark:border-gray-700 dark:bg-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "bg-gray-50 py-1 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-800 dark:text-gray-400",
                                                                children: "Quick XOR"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "whitespace-nowrap py-1 px-3 font-mono text-gray-500 dark:text-gray-400",
                                                                children: ((ref1 = file.file.hashes) === null || ref1 === void 0 ? void 0 : ref1.quickXorHash) ?? t('Unavailable')
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border-y bg-white dark:border-gray-700 dark:bg-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "bg-gray-50 py-1 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-800 dark:text-gray-400",
                                                                children: "SHA1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "whitespace-nowrap py-1 px-3 font-mono text-gray-500 dark:text-gray-400",
                                                                children: ((ref2 = file.file.hashes) === null || ref2 === void 0 ? void 0 : ref2.sha1Hash) ?? t('Unavailable')
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "border-y bg-white dark:border-gray-700 dark:bg-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "bg-gray-50 py-1 px-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:bg-gray-800 dark:text-gray-400",
                                                                children: "SHA256"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "whitespace-nowrap py-1 px-3 font-mono text-gray-500 dark:text-gray-400",
                                                                children: ((ref3 = file.file.hashes) === null || ref3 === void 0 ? void 0 : ref3.sha256Hash) ?? t('Unavailable')
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_6__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultPreview);


/***/ }),

/***/ 3225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6810);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8165);





const ImagePreview = ({ file  })=>{
    var ref, ref1;
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_4__/* .getStoredToken */ .hV)(asPath);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_2__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "mx-auto",
                    src: `/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`,
                    alt: file.name,
                    width: (ref = file.image) === null || ref === void 0 ? void 0 : ref.width,
                    height: (ref1 = file.image) === null || ref1 === void 0 ? void 0 : ref1.height
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_2__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePreview);


/***/ }),

/***/ 3517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9832);
/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9521);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1871);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7079);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3876);
/* harmony import */ var _FourOhFour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(982);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6886);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_raw__WEBPACK_IMPORTED_MODULE_5__, rehype_katex__WEBPACK_IMPORTED_MODULE_4__, remark_math__WEBPACK_IMPORTED_MODULE_3__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
([rehype_raw__WEBPACK_IMPORTED_MODULE_5__, rehype_katex__WEBPACK_IMPORTED_MODULE_4__, remark_math__WEBPACK_IMPORTED_MODULE_3__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, react_markdown__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















const MarkdownPreview = ({ file , path , standalone =true , proxy =false  })=>{
    // The parent folder of the markdown file, which is also the relative image folder
    const parentPath = standalone ? path.substring(0, path.lastIndexOf('/')) : path;
    const { response: content , error , validating ,  } = (0,_utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(`/api/raw/?path=${parentPath}/${file.name}${proxy ? `&proxy=true` : ''}`, path);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    // Check if the image is relative path instead of a absolute url
    const isUrlAbsolute = (url)=>url.indexOf('://') > 0 || url.indexOf('//') === 0
    ;
    // Custom renderer:
    const customRenderer = {
        // img: to render images in markdown with relative file paths
        img: ({ alt , src , title , width , height , style  })=>{
            return(// eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: alt,
                src: isUrlAbsolute(src) ? src : `/api/?path=${parentPath}/${src}&raw=true`,
                title: title,
                width: width,
                height: height,
                style: style
            }));
        },
        // code: to render code blocks with react-syntax-highlighter
        code ({ className , children , inline , ...props }) {
            if (inline) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                    className: className,
                    ...props,
                    children: children
                }));
            }
            const match = /language-(\w+)/.exec(className || '');
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_7__.LightAsync, {
                language: match ? match[1] : 'language-text',
                style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_8__.tomorrowNight,
                PreTag: "div",
                ...props,
                children: String(children).replace(/\n$/, '')
            }));
        }
    };
    if (error) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_13__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                errorMsg: error
            })
        }));
    }
    if (validating) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_13__/* .PreviewContainer */ .p, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        loadingText: t('Loading file content...')
                    })
                }),
                standalone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_13__/* .DownloadBtnContainer */ .W, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_13__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "markdown-body",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        remarkPlugins: [
                            remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"],
                            remark_math__WEBPACK_IMPORTED_MODULE_3__["default"]
                        ],
                        rehypePlugins: [
                            rehype_katex__WEBPACK_IMPORTED_MODULE_4__["default"],
                            rehype_raw__WEBPACK_IMPORTED_MODULE_5__["default"]
                        ],
                        components: customRenderer,
                        children: content
                    })
                })
            }),
            standalone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_13__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownPreview);

});

/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preview_office_docs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5259);
/* harmony import */ var preview_office_docs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preview_office_docs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6810);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5119);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8165);








const OfficePreview = ({ file  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_6__/* .getStoredToken */ .hV)(asPath);
    const docContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: docContainerWidth , 1: setDocContainerWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(600);
    const docUrl = encodeURIComponent(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_7__/* .getBaseUrl */ .S)()}/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDocContainerWidth(docContainer.current ? docContainer.current.offsetWidth : 600);
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overflow-scroll",
                ref: docContainer,
                style: {
                    maxHeight: '90vh'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((preview_office_docs__WEBPACK_IMPORTED_MODULE_3___default()), {
                    url: docUrl,
                    width: docContainerWidth.toString(),
                    height: "600"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_5__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfficePreview);


/***/ }),

/***/ 6398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5119);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8165);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6810);






const PDFEmbedPreview = ({ file  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_2__/* .getStoredToken */ .hV)(asPath);
    // const url = `/api/proxy?url=${encodeURIComponent(...)}&inline=true`
    const pdfPath = encodeURIComponent(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_5__/* .getBaseUrl */ .S)()}/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`);
    const url = `https://pdf.zkeq.xyz/?file=${pdfPath}`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full overflow-hidden rounded",
                style: {
                    height: '90vh'
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: url,
                    frameBorder: "0",
                    width: "100%",
                    height: "100%"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_4__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PDFEmbedPreview);


/***/ }),

/***/ 6157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FourOhFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(982);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6886);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var _utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3876);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6810);








const TextPreview = ({ file  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { response: content , error , validating  } = (0,_utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(`/api/raw/?path=${asPath}`, asPath);
    if (error) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                errorMsg: error
            })
        }));
    }
    if (validating) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        loadingText: t('Loading file content...')
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .DownloadBtnContainer */ .W, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                })
            ]
        }));
    }
    if (!content) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        errorMsg: t('File is empty.')
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .DownloadBtnContainer */ .W, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    className: "overflow-x-scroll p-0 text-sm md:p-3",
                    children: content
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextPreview);


/***/ }),

/***/ 9058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FourOhFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(982);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6886);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(203);
/* harmony import */ var _utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3876);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6810);








const parseDotUrl = (content)=>{
    var ref;
    return (ref = content.split('\n').find((line)=>line.startsWith('URL=')
    )) === null || ref === void 0 ? void 0 : ref.split('=')[1];
};
const TextPreview = ({ file  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { response: content , error , validating  } = (0,_utils_fetchOnMount__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(`/api/raw/?path=${asPath}`, asPath);
    if (error) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                errorMsg: error
            })
        }));
    }
    if (validating) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                loadingText: t('Loading file content...')
            })
        }));
    }
    if (!content) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                errorMsg: t('File is empty.')
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .PreviewContainer */ .p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                    className: "overflow-x-scroll p-0 text-sm md:p-3",
                    children: content
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_7__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_5__/* .DownloadButton */ .o, {
                        onClickCallback: ()=>window.open(parseDotUrl(content) ?? '')
                        ,
                        btnColor: "blue",
                        btnText: t('Open URL'),
                        btnIcon: "external-link-alt",
                        btnTitle: t('Open URL{{url}}', {
                            url: (' ' + parseDotUrl(content)) ?? ''
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextPreview);


/***/ }),

/***/ 1688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var plyr_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1469);
/* harmony import */ var plyr_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(plyr_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2216);
/* harmony import */ var use_clipboard_copy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(use_clipboard_copy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5119);
/* harmony import */ var _utils_getFileIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2063);
/* harmony import */ var _utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8165);
/* harmony import */ var _DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(203);
/* harmony import */ var _Containers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6810);
/* harmony import */ var _FourOhFour__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(982);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6886);
/* harmony import */ var _CustomEmbedLinkMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5968);


















const VideoPlayer = ({ videoName , videoUrl , width , height , thumbnail , subtitle , isFlv , mpegts  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Really really hacky way to inject subtitles as file blobs into the video element
        axios__WEBPACK_IMPORTED_MODULE_4___default().get(subtitle, {
            responseType: 'blob'
        }).then((resp)=>{
            const track = document.querySelector('track');
            track === null || track === void 0 ? void 0 : track.setAttribute('src', URL.createObjectURL(resp.data));
        }).catch(()=>{
            console.log('Could not load subtitle.');
        });
        if (isFlv) {
            const loadFlv = ()=>{
                // Really hacky way to get the exposed video element from Plyr
                const video = document.getElementById('plyr');
                const flv = mpegts.createPlayer({
                    url: videoUrl,
                    type: 'flv'
                });
                flv.attachMediaElement(video);
                flv.load();
            };
            loadFlv();
        }
    }, [
        videoUrl,
        isFlv,
        mpegts,
        subtitle
    ]);
    // Common plyr configs, including the video source and plyr options
    const plyrSource = {
        type: 'video',
        title: videoName,
        poster: thumbnail,
        tracks: [
            {
                kind: 'captions',
                label: videoName,
                src: '',
                default: true
            }
        ]
    };
    const plyrOptions = {
        ratio: `${width ?? 16}:${height ?? 9}`
    };
    if (!isFlv) {
        // If the video is not in flv format, we can use the native plyr and add sources directly with the video URL
        plyrSource['sources'] = [
            {
                src: videoUrl
            }
        ];
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((plyr_react__WEBPACK_IMPORTED_MODULE_6___default()), {
        id: "plyr",
        source: plyrSource,
        options: plyrOptions
    }));
};
const VideoPreview = ({ file  })=>{
    var ref, ref1;
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const hashedToken = (0,_utils_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_10__/* .getStoredToken */ .hV)(asPath);
    const clipboard = (0,use_clipboard_copy__WEBPACK_IMPORTED_MODULE_8__.useClipboard)();
    const { 0: menuOpen , 1: setMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    // OneDrive generates thumbnails for its video files, we pick the thumbnail with the highest resolution
    const thumbnail = `/api/thumbnail/?path=${asPath}&size=large${hashedToken ? `&odpt=${hashedToken}` : ''}`;
    // We assume subtitle files are beside the video with the same name, only webvtt '.vtt' files are supported
    const vtt = `${asPath.substring(0, asPath.lastIndexOf('.'))}.vtt`;
    const subtitle = `/api/raw/?path=${vtt}${hashedToken ? `&odpt=${hashedToken}` : ''}`;
    // We also format the raw video file for the in-browser player as well as all other players
    const videoUrl = `/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`;
    const isFlv = (0,_utils_getFileIcon__WEBPACK_IMPORTED_MODULE_9__/* .getExtension */ .RT)(file.name) === 'flv';
    const { loading , error , result: mpegts ,  } = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_7__.useAsync)(async ()=>{
        if (isFlv) {
            return (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9088, 23))).default;
        }
    }, [
        isFlv
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomEmbedLinkMenu__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                path: asPath,
                menuOpen: menuOpen,
                setMenuOpen: setMenuOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_12__/* .PreviewContainer */ .p, {
                children: error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FourOhFour__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    errorMsg: error.message
                }) : loading && isFlv ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    loadingText: t('Loading FLV extension...')
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoPlayer, {
                    videoName: file.name,
                    videoUrl: videoUrl,
                    width: (ref = file.video) === null || ref === void 0 ? void 0 : ref.width,
                    height: (ref1 = file.video) === null || ref1 === void 0 ? void 0 : ref1.height,
                    thumbnail: thumbnail,
                    subtitle: subtitle,
                    isFlv: isFlv,
                    mpegts: mpegts
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Containers__WEBPACK_IMPORTED_MODULE_12__/* .DownloadBtnContainer */ .W, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap justify-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__/* .DownloadButton */ .o, {
                            onClickCallback: ()=>window.open(videoUrl)
                            ,
                            btnColor: "blue",
                            btnText: t('Download'),
                            btnIcon: "file-download"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__/* .DownloadButton */ .o, {
                            onClickCallback: ()=>{
                                clipboard.copy(`${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_16__/* .getBaseUrl */ .S)()}/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`);
                                react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().success(t('Copied direct link to clipboard.'));
                            },
                            btnColor: "pink",
                            btnText: t('Copy direct link'),
                            btnIcon: "copy"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__/* .DownloadButton */ .o, {
                            onClickCallback: ()=>setMenuOpen(true)
                            ,
                            btnColor: "teal",
                            btnText: t('Customise link'),
                            btnIcon: "pen"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__/* .DownloadButton */ .o, {
                            onClickCallback: ()=>window.open(`iina://weblink?url=${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_16__/* .getBaseUrl */ .S)()}${videoUrl}`)
                            ,
                            btnText: "IINA",
                            btnImage: "/players/iina.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__/* .DownloadButton */ .o, {
                            onClickCallback: ()=>window.open(`vlc://${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_16__/* .getBaseUrl */ .S)()}${videoUrl}`)
                            ,
                            btnText: "VLC",
                            btnImage: "/players/vlc.png"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DownloadBtnGtoup__WEBPACK_IMPORTED_MODULE_11__/* .DownloadButton */ .o, {
                            onClickCallback: ()=>window.open(`potplayer://${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_16__/* .getBaseUrl */ .S)()}/${videoUrl}`)
                            ,
                            btnText: "PotPlayer",
                            btnImage: "/players/potplayer.png"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPreview);


/***/ }),

/***/ 3876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useFileContent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _protectedRouteHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8165);



/**
 * Custom hook for axios to fetch raw file content on component mount
 * @param fetchUrl The URL pointing to the raw file content
 * @param path The path of the file, used for determining whether path is protected
 */ function useFileContent(fetchUrl, path) {
    const { 0: response , 1: setResponse  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: validating , 1: setValidating  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const hashedToken = (0,_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_2__/* .getStoredToken */ .hV)(path);
        const url = fetchUrl + (hashedToken ? `&odpt=${hashedToken}` : '');
        axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
            responseType: 'blob'
        }).then(async (res)=>setResponse(await res.data.text())
        ).catch((e)=>setError(e.message)
        ).finally(()=>setValidating(false)
        );
    }, [
        fetchUrl,
        path
    ]);
    return {
        response,
        error,
        validating
    };
};


/***/ }),

/***/ 8031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ humanFileSize),
/* harmony export */   "E": () => (/* binding */ formatModifiedDateTime)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_site_config__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Convert raw bits file/folder size into a human readable string
 *
 * @param size File or folder size, in raw bits
 * @returns Human readable form of the file or folder size
 */ const humanFileSize = (size)=>{
    if (size < 1024) return size + ' B';
    const i = Math.floor(Math.log(size) / Math.log(1024));
    const num = size / Math.pow(1024, i);
    const round = Math.round(num);
    const formatted = round < 10 ? num.toFixed(2) : round < 100 ? num.toFixed(1) : round;
    return `${formatted} ${'KMGTPEZY'[i - 1]}B`;
};
/**
 * Convert the last modified date time into locale friendly string
 *
 * @param lastModifedDateTime DateTime string in ISO format
 * @returns Human readable form of the file or folder last modified date
 */ const formatModifiedDateTime = (lastModifedDateTime)=>{
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(lastModifedDateTime).format((_config_site_config__WEBPACK_IMPORTED_MODULE_1___default().datetimeFormat));
};


/***/ }),

/***/ 5119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getBaseUrl)
/* harmony export */ });
/**
 * Extract the current web page's base url
 * @returns base url of the page
 */ function getBaseUrl() {
    if (false) {}
    return '';
}


/***/ }),

/***/ 7766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RN": () => (/* binding */ preview),
/* harmony export */   "bv": () => (/* binding */ getPreviewType),
/* harmony export */   "kL": () => (/* binding */ getLanguageByFileName)
/* harmony export */ });
/* unused harmony export extensions */
/* harmony import */ var _getFileIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2063);

const preview = {
    markdown: 'markdown',
    image: 'image',
    text: 'text',
    pdf: 'pdf',
    code: 'code',
    video: 'video',
    audio: 'audio',
    office: 'ms-office',
    epub: 'epub',
    url: 'url'
};
const extensions = {
    gif: preview.image,
    jpeg: preview.image,
    jpg: preview.image,
    png: preview.image,
    webp: preview.image,
    md: preview.markdown,
    markdown: preview.markdown,
    mdown: preview.markdown,
    pdf: preview.pdf,
    doc: preview.office,
    docx: preview.office,
    ppt: preview.office,
    pptx: preview.office,
    xls: preview.office,
    xlsx: preview.office,
    c: preview.code,
    cpp: preview.code,
    js: preview.code,
    jsx: preview.code,
    java: preview.code,
    sh: preview.code,
    cs: preview.code,
    py: preview.code,
    css: preview.code,
    html: preview.code,
    // typescript or video file, determined below
    ts: preview.code,
    tsx: preview.code,
    rs: preview.code,
    vue: preview.code,
    json: preview.code,
    yml: preview.code,
    yaml: preview.code,
    toml: preview.code,
    txt: preview.text,
    vtt: preview.text,
    srt: preview.text,
    log: preview.text,
    diff: preview.text,
    mp4: preview.video,
    flv: preview.video,
    webm: preview.video,
    m3u8: preview.video,
    mkv: preview.video,
    mov: preview.video,
    avi: preview.video,
    mp3: preview.audio,
    m4a: preview.audio,
    aac: preview.audio,
    wav: preview.audio,
    ogg: preview.audio,
    oga: preview.audio,
    opus: preview.audio,
    flac: preview.audio,
    epub: preview.epub,
    url: preview.url
};
function getPreviewType(extension, flags) {
    let previewType = extensions[extension];
    if (!previewType) {
        return previewType;
    }
    // Files with '.ts' extensions may be TypeScript files or TS Video files, we check for the flag 'video'
    // to determine what preview renderer to use for '.ts' files.
    if (extension === 'ts') {
        if (flags === null || flags === void 0 ? void 0 : flags.video) {
            previewType = preview.video;
        }
    }
    return previewType;
}
function getLanguageByFileName(filename) {
    const extension = (0,_getFileIcon__WEBPACK_IMPORTED_MODULE_0__/* .getExtension */ .RT)(filename);
    switch(extension){
        case 'ts':
        case 'tsx':
            return 'typescript';
        case 'rs':
            return 'rust';
        case 'js':
        case 'jsx':
            return 'javascript';
        case 'sh':
            return 'shell';
        case 'cs':
            return 'csharp';
        case 'py':
            return 'python';
        case 'yml':
            return 'yaml';
        default:
            return extension;
    }
}


/***/ }),

/***/ 9770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ getReadablePath)
/* harmony export */ });
/**
 * Make path readable but still valid in URL (means the whole URL is still recognized as a URL)
 * @param path Path. May be used as URL path or query value.
 * @returns Readable but still valid path
 */ function getReadablePath(path) {
    path = path.split('/').map((s)=>decodeURIComponent(s)
    ).map((s)=>Array.from(s).map((c)=>isSafeChar(c) ? c : encodeURIComponent(c)
        ).join('')
    ).join('/');
    return path;
}
// Check if the character is safe (means no need of percent-encoding)
function isSafeChar(c) {
    if (c.charCodeAt(0) < 128) {
        // ASCII
        if (/^[a-zA-Z0-9\-._~]$/.test(c)) {
            // RFC3986 unreserved chars
            return true;
        } else if (/^[*:@,!]$/.test(c)) {
            // Some extra pretty safe chars for URL path or query
            // Ref: https://stackoverflow.com/a/42287988/11691878
            return true;
        }
    } else {
        if (!/\s|\u180e/.test(c)) {
            // Non-whitespace char. \u180e is missed in \s.
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ 9038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, initialValue) {
    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = ()=>{
        // Prevent build error "window is undefined" but keep keep working
        if (true) {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    };
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const { 0: storedValue , 1: setStoredValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(readValue);
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value)=>{
        // Prevent build error "window is undefined" but keeps working
        if (true) {
            console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
        }
        try {
            // Allow value to be a function so we have the same API as useState
            const newValue = value instanceof Function ? value(storedValue) : value;
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(newValue));
            // Save state
            setStoredValue(newValue);
            // We dispatch a custom event so every useLocalStorage hook are notified
            window.dispatchEvent(new Event('local-storage'));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleStorageChange = ()=>{
            setStoredValue(readValue());
        };
        // this only works for other documents, not the current one
        window.addEventListener('storage', handleStorageChange);
        // this is a custom event, triggered in writeValueToLocalStorage
        window.addEventListener('local-storage', handleStorageChange);
        return ()=>{
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('local-storage', handleStorageChange);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [
        storedValue,
        setValue
    ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);


/***/ })

};
;