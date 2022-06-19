"use strict";
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_site_config__WEBPACK_IMPORTED_MODULE_1__);


const createFooterMarkup = ()=>{
    return {
        __html: (_config_site_config__WEBPACK_IMPORTED_MODULE_1___default().footer)
    };
};
const Footer = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30",
        dangerouslySetInnerHTML: createFooterMarkup()
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ LoadingIcon),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loading = ({ loadingText  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-center space-x-1 rounded py-32 dark:text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingIcon, {
                className: "mr-3 -ml-1 h-5 w-5 animate-spin"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: loadingText
            })
        ]
    }));
};
// As there is no CSS-in-JS styling system, pass class list to override styles
const LoadingIcon = ({ className  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 8815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2784);
/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1176);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(632);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5566);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_site_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SearchModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5314);
/* harmony import */ var _utils_useDeviceOS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6851);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SearchModal__WEBPACK_IMPORTED_MODULE_11__]);
_SearchModal__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];













const Navbar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const os = (0,_utils_useDeviceOS__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const { 0: tokenPresent , 1: setTokenPresent  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: searchOpen , 1: setSearchOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const openSearchBox = ()=>setSearchOpen(true)
    ;
    (0,react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_4__.useHotkeys)(`${os === 'mac' ? 'cmd' : 'ctrl'}+k`, (e)=>{
        openSearchBox();
        e.preventDefault();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const storedToken = ()=>{
            for (const r of (_config_site_config__WEBPACK_IMPORTED_MODULE_10___default().protectedRoutes)){
                if (localStorage.hasOwnProperty(r)) {
                    return true;
                }
            }
            return false;
        };
        setTokenPresent(storedToken());
    }, []);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const clearTokens = ()=>{
        setIsOpen(false);
        _config_site_config__WEBPACK_IMPORTED_MODULE_10___default().protectedRoutes.forEach((r)=>{
            localStorage.removeItem(r);
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success(t('Cleared all tokens'));
        setTimeout(()=>{
            router.reload();
        }, 1000);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky top-0 z-[100] border-b border-gray-900/10 bg-white bg-opacity-80 backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                searchOpen: searchOpen,
                setSearchOpen: setSearchOpen
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex w-full items-center justify-between space-x-4 px-4 py-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "flex items-center space-x-2 py-2 hover:opacity-80 dark:text-white md:p-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    src: (_config_site_config__WEBPACK_IMPORTED_MODULE_10___default().icon),
                                    alt: "icon",
                                    width: "25",
                                    height: "25",
                                    priority: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden font-bold sm:block",
                                    children: (_config_site_config__WEBPACK_IMPORTED_MODULE_10___default().title)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 items-center space-x-4 text-gray-700 md:flex-initial",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex flex-1 items-center justify-between rounded-lg bg-gray-100 px-2.5 py-1.5 hover:opacity-80 dark:bg-gray-800 dark:text-white md:w-48",
                                onClick: openSearchBox,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                className: "h-4 w-4",
                                                icon: "search"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "truncate text-sm font-medium",
                                                children: t('Search ...')
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hidden items-center space-x-1 md:flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700",
                                                children: os === 'mac' ? '⌘' : 'Ctrl'
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700",
                                                children: "K"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (_config_site_config__WEBPACK_IMPORTED_MODULE_10___default().links.length) !== 0 && _config_site_config__WEBPACK_IMPORTED_MODULE_10___default().links.map((l)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: l.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center space-x-2 hover:opacity-80 dark:text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                            icon: [
                                                'fab',
                                                l.other.toLowerCase()
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "hidden text-sm font-medium md:inline-block",
                                            children: // Append link name comments here to add translations
                                            // t('Weibo')
                                            t(l.name)
                                        })
                                    ]
                                }, l.name)
                            ),
                            (_config_site_config__WEBPACK_IMPORTED_MODULE_10___default().email) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: (_config_site_config__WEBPACK_IMPORTED_MODULE_10___default().email),
                                className: "flex items-center space-x-2 hover:opacity-80 dark:text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                        icon: [
                                            'far',
                                            'envelope'
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden text-sm font-medium md:inline-block",
                                        children: t('Email')
                                    })
                                ]
                            }),
                            tokenPresent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center space-x-2 p-2 hover:opacity-80 dark:text-white",
                                onClick: ()=>setIsOpen(true)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden text-sm font-medium md:inline-block",
                                        children: t('Logout')
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                        icon: "sign-out-alt"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                appear: true,
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    as: "div",
                    className: "fixed inset-0 z-10 overflow-y-auto",
                    open: isOpen,
                    onClose: ()=>setIsOpen(false)
                    ,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-h-screen px-4 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                                enter: "ease-out duration-100",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-50",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
                                    className: "fixed inset-0 bg-gray-50 dark:bg-gray-800"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block h-screen align-middle",
                                "aria-hidden": "true",
                                children: "​"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                                enter: "ease-out duration-100",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-50",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "my-8 inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle transition-all dark:bg-gray-900",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                            className: "text-lg font-bold text-gray-900 dark:text-gray-100",
                                            children: t('Clear all tokens?')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: t('These tokens are used to authenticate yourself into password protected folders, ') + t('clearing them means that you will need to re-enter the passwords again.')
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 max-h-32 overflow-y-scroll font-mono text-sm dark:text-gray-100",
                                            children: _config_site_config__WEBPACK_IMPORTED_MODULE_10___default().protectedRoutes.map((r, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center space-x-1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                            icon: "key"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "truncate",
                                                            children: r
                                                        })
                                                    ]
                                                }, i)
                                            )
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-8 flex items-center justify-end",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "mr-3 inline-flex items-center justify-center space-x-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300",
                                                    onClick: ()=>setIsOpen(false)
                                                    ,
                                                    children: t('Cancel')
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "inline-flex items-center justify-center space-x-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300",
                                                    onClick: ()=>clearTokens()
                                                    ,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                            icon: [
                                                                'far',
                                                                'trash-alt'
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: t('Clear all')
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

});

/***/ }),

/***/ 5314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1129);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3188);
/* harmony import */ var react_async_hook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_async_hook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7597);
/* harmony import */ var use_constant__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_constant__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1176);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6886);
/* harmony import */ var _utils_getFileIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2063);
/* harmony import */ var _utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(289);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5566);
/* harmony import */ var _config_site_config__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_config_site_config__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_13__, swr__WEBPACK_IMPORTED_MODULE_2__]);
([_utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_13__, swr__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















/**
 * Extract the searched item's path in field 'parentReference' and convert it to the
 * absolute path represented in onedrive-vercel-index
 *
 * @param path Path returned from the parentReference field of the driveItem
 * @returns The absolute path of the driveItem in the search result
 */ function mapAbsolutePath(path) {
    // path is in the format of '/drive/root:/path/to/file', if baseDirectory is '/' then we split on 'root:',
    // otherwise we split on the user defined 'baseDirectory'
    const absolutePath = path.split((_config_site_config__WEBPACK_IMPORTED_MODULE_14___default().baseDirectory) === '/' ? 'root:' : (_config_site_config__WEBPACK_IMPORTED_MODULE_14___default().baseDirectory));
    // path returned by the API may contain #, by doing a decodeURIComponent and then encodeURIComponent we can
    // replace URL sensitive characters such as the # with %23
    return absolutePath.length > 1 // solve https://github.com/spencerwooo/onedrive-vercel-index/issues/539
     ? absolutePath[1].split('/').map((p)=>encodeURIComponent(decodeURIComponent(p))
    ).join('/') : '';
}
/**
 * Implements a debounced search function that returns a promise that resolves to an array of
 * search results.
 *
 * @returns A react hook for a debounced async search of the drive
 */ function useDriveItemSearch() {
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
    const searchDriveItem = async (q)=>{
        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/search/?q=${q}`);
        // Map parentReference to the absolute path of the search result
        data.map((item)=>{
            item['path'] = 'path' in item.parentReference ? `${mapAbsolutePath(item.parentReference.path)}/${encodeURIComponent(item.name)}` : '';
        });
        return data;
    };
    const debouncedDriveItemSearch = use_constant__WEBPACK_IMPORTED_MODULE_6___default()(()=>awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4___default()(searchDriveItem, 1000)
    );
    const results = (0,react_async_hook__WEBPACK_IMPORTED_MODULE_5__.useAsync)(async ()=>{
        if (query.length === 0) {
            return [];
        } else {
            return debouncedDriveItemSearch(query);
        }
    }, [
        query
    ]);
    return {
        query,
        setQuery,
        results
    };
}
function SearchResultItemTemplate({ driveItem , driveItemPath , itemDescription , disabled  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: driveItemPath,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: `flex items-center space-x-4 border-b border-gray-400/30 px-4 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-850 ${disabled ? 'pointer-events-none cursor-not-allowed' : 'cursor-pointer'}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                    icon: driveItem.file ? (0,_utils_getFileIcon__WEBPACK_IMPORTED_MODULE_12__/* .getFileIcon */ .LP)(driveItem.name) : [
                        'far',
                        'folder'
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-sm font-medium leading-8",
                            children: driveItem.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `overflow-hidden truncate font-mono text-xs opacity-60 ${itemDescription === 'Loading ...' && 'animate-pulse'}`,
                            children: itemDescription
                        })
                    ]
                })
            ]
        })
    }));
}
function SearchResultItemLoadRemote({ result  }) {
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(`/api/item/?id=${result.id}`, _utils_fetchWithSWR__WEBPACK_IMPORTED_MODULE_13__/* .fetcher */ ._);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    if (error) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultItemTemplate, {
            driveItem: result,
            driveItemPath: '',
            itemDescription: error,
            disabled: true
        }));
    }
    if (!data) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultItemTemplate, {
            driveItem: result,
            driveItemPath: '',
            itemDescription: t('Loading ...'),
            disabled: true
        }));
    }
    const driveItemPath = `${mapAbsolutePath(data.parentReference.path)}/${encodeURIComponent(data.name)}`;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultItemTemplate, {
        driveItem: result,
        driveItemPath: driveItemPath,
        itemDescription: decodeURIComponent(driveItemPath),
        disabled: false
    }));
}
function SearchResultItem({ result  }) {
    if (result.path === '') {
        // path is empty, which means we need to fetch the parentReference to get the path
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultItemLoadRemote, {
            result: result
        }));
    } else {
        // path is not an empty string in the search result, such that we can directly render the component as is
        const driveItemPath = decodeURIComponent(result.path);
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultItemTemplate, {
            driveItem: result,
            driveItemPath: result.path,
            itemDescription: driveItemPath,
            disabled: false
        }));
    }
}
function SearchModal({ searchOpen , setSearchOpen  }) {
    const { query , setQuery , results  } = useDriveItemSearch();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const closeSearchBox = ()=>{
        setSearchOpen(false);
        setQuery('');
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Transition, {
        appear: true,
        show: searchOpen,
        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog, {
            as: "div",
            className: "fixed inset-0 z-[200] overflow-y-auto",
            onClose: closeSearchBox,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen px-4 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                        enter: "ease-out duration-100",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Overlay, {
                            className: "fixed inset-0 bg-white/80 dark:bg-gray-800/80"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                        enter: "ease-out duration-100",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-100",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "my-12 inline-block w-full max-w-3xl transform overflow-hidden rounded border border-gray-400/30 text-left shadow-xl transition-all",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Title, {
                                    as: "h3",
                                    className: "flex items-center space-x-4 border-b border-gray-400/30 bg-gray-50 p-4 dark:bg-gray-800 dark:text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                                            icon: "search",
                                            className: "h-4 w-4"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            id: "search-box",
                                            className: "w-full bg-transparent focus:outline-none focus-visible:outline-none",
                                            placeholder: t('Search ...'),
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700",
                                            children: "ESC"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-h-[80vh] overflow-x-hidden overflow-y-scroll bg-white dark:bg-gray-900 dark:text-white",
                                    onClick: closeSearchBox,
                                    children: [
                                        results.loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "px-4 py-12 text-center text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_11__/* .LoadingIcon */ .H, {
                                                    className: "svg-inline--fa mr-2 inline-block h-4 w-4 animate-spin"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: t('Loading ...')
                                                })
                                            ]
                                        }),
                                        results.error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "px-4 py-12 text-center text-sm font-medium",
                                            children: t('Error: {{message}}', {
                                                message: results.error.message
                                            })
                                        }),
                                        results.result && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: results.result.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-4 py-12 text-center text-sm font-medium",
                                                children: t('Nothing here.')
                                            }) : results.result.map((result)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResultItem, {
                                                    result: result
                                                }, result.id)
                                            )
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

});

/***/ }),

/***/ 289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fetcher),
/* harmony export */   "E": () => (/* binding */ useProtectedSWRInfinite)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1448);
/* harmony import */ var _protectedRouteHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8165);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_infinite__WEBPACK_IMPORTED_MODULE_1__]);
swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



// Common axios fetch function for use with useSWR
async function fetcher(url, token) {
    try {
        return (await (token ? axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
            headers: {
                'od-protected-token': token
            }
        }) : axios__WEBPACK_IMPORTED_MODULE_0___default().get(url))).data;
    } catch (err) {
        throw {
            status: err.response.status,
            message: err.response.data
        };
    }
}
/**
 * Paging with useSWRInfinite + protected token support
 * @param path Current query directory path
 * @returns useSWRInfinite API
 */ function useProtectedSWRInfinite(path = '') {
    const hashedToken = (0,_protectedRouteHandler__WEBPACK_IMPORTED_MODULE_2__/* .getStoredToken */ .hV)(path);
    /**
   * Next page infinite loading for useSWR
   * @param pageIdx The index of this paging collection
   * @param prevPageData Previous page information
   * @param path Directory path
   * @returns API to the next page
   */ function getNextKey(pageIndex, previousPageData) {
        // Reached the end of the collection
        if (previousPageData && !previousPageData.folder) return null;
        // First page with no prevPageData
        if (pageIndex === 0) return [
            `/api/?path=${path}`,
            hashedToken
        ];
        // Add nextPage token to API endpoint
        return [
            `/api/?path=${path}&next=${previousPageData.next}`,
            hashedToken
        ];
    }
    // Disable auto-revalidate, these options are equivalent to useSWRImmutable
    // https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
    const revalidationOptions = {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: true
    };
    return (0,swr_infinite__WEBPACK_IMPORTED_MODULE_1__["default"])(getNextKey, fetcher, revalidationOptions);
}

});

/***/ }),

/***/ 2063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VT": () => (/* binding */ getRawExtension),
/* harmony export */   "RT": () => (/* binding */ getExtension),
/* harmony export */   "LP": () => (/* binding */ getFileIcon)
/* harmony export */ });
/* unused harmony export hasKey */
const icons = {
    image: [
        'far',
        'file-image'
    ],
    pdf: [
        'far',
        'file-pdf'
    ],
    word: [
        'far',
        'file-word'
    ],
    powerpoint: [
        'far',
        'file-powerpoint'
    ],
    excel: [
        'far',
        'file-excel'
    ],
    audio: [
        'far',
        'file-audio'
    ],
    video: [
        'far',
        'file-video'
    ],
    archive: [
        'far',
        'file-archive'
    ],
    code: [
        'far',
        'file-code'
    ],
    text: [
        'far',
        'file-alt'
    ],
    file: [
        'far',
        'file'
    ],
    markdown: [
        'fab',
        'markdown'
    ],
    book: [
        'fas',
        'book'
    ],
    link: [
        'fas',
        'link'
    ]
};
const extensions = {
    gif: icons.image,
    jpeg: icons.image,
    jpg: icons.image,
    png: icons.image,
    heic: icons.image,
    webp: icons.image,
    pdf: icons.pdf,
    doc: icons.word,
    docx: icons.word,
    ppt: icons.powerpoint,
    pptx: icons.powerpoint,
    xls: icons.excel,
    xlsx: icons.excel,
    aac: icons.audio,
    mp3: icons.audio,
    ogg: icons.audio,
    flac: icons.audio,
    oga: icons.audio,
    opus: icons.audio,
    m4a: icons.audio,
    avi: icons.video,
    flv: icons.video,
    mkv: icons.video,
    mp4: icons.video,
    '7z': icons.archive,
    bz2: icons.archive,
    xz: icons.archive,
    wim: icons.archive,
    gz: icons.archive,
    rar: icons.archive,
    tar: icons.archive,
    zip: icons.archive,
    c: icons.code,
    cpp: icons.code,
    js: icons.code,
    jsx: icons.code,
    java: icons.code,
    sh: icons.code,
    cs: icons.code,
    py: icons.code,
    css: icons.code,
    html: icons.code,
    ts: icons.code,
    tsx: icons.code,
    rs: icons.code,
    vue: icons.code,
    json: icons.code,
    yml: icons.code,
    yaml: icons.code,
    toml: icons.code,
    txt: icons.text,
    rtf: icons.text,
    vtt: icons.text,
    srt: icons.text,
    log: icons.text,
    diff: icons.text,
    md: icons.markdown,
    epub: icons.book,
    mobi: icons.book,
    azw3: icons.book,
    url: icons.link
};
/**
 * To stop TypeScript complaining about indexing the object with a non-existent key
 * https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
 *
 * @param obj Object with keys to index
 * @param key The index key
 * @returns Whether or not the key exists inside the object
 */ function hasKey(obj, key) {
    return key in obj;
}
function getRawExtension(fileName) {
    return fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2);
}
function getExtension(fileName) {
    return getRawExtension(fileName).toLowerCase();
}
function getFileIcon(fileName, flags) {
    const extension = getExtension(fileName);
    let icon = hasKey(extensions, extension) ? extensions[extension] : icons.file;
    // Files with '.ts' extensions may be TypeScript files or TS Video files, we check for the flag 'video'
    // to determine which icon to render for '.ts' files.
    if (extension === 'ts') {
        if (flags === null || flags === void 0 ? void 0 : flags.video) {
            icon = icons.video;
        }
    }
    return icon;
}


/***/ }),

/***/ 6851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDeviceOS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDeviceOS() {
    const { 0: os , 1: setOS  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const userAgent = window.navigator.userAgent;
        if (userAgent.indexOf('Windows') > -1) {
            setOS('windows');
        } else if (userAgent.indexOf('Mac OS') > -1) {
            setOS('mac');
        } else if (userAgent.indexOf('Linux') > -1) {
            setOS('linux');
        } else {
            setOS('other');
        }
    }, []);
    return os;
};


/***/ })

};
;