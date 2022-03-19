"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-icons"
var external_react_icons_ = __webpack_require__(698);
;// CONCATENATED MODULE: external "react-icons/io5"
const io5_namespaceObject = require("react-icons/io5");
;// CONCATENATED MODULE: ./components/Header.tsx



function Header({ darkTheme , toggleTheme  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_icons_.IconContext.Provider, {
        value: {
            className: "header__btn__icon"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Countries info"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "header__btn",
                    onClick: ()=>toggleTheme((prevStatus)=>!prevStatus
                        )
                    ,
                    "aria-pressed": darkTheme,
                    children: [
                        !darkTheme ? /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoMoonOutline, {
                            "aria-hidden": "true"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(io5_namespaceObject.IoMoonSharp, {
                            "aria-hidden": "true"
                        }),
                        "Dark mode"
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./services/themeService.ts
const getThemeStatus = (themeKey)=>{
    if (false) {}
};
const setThemeStatus = (themeKey, status)=>{
    if (false) {}
};

;// CONCATENATED MODULE: ./hooks/useTheme.tsx


const useTheme = (themeKey, themeClass)=>{
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)(getThemeStatus(themeKey) == "true" ? true : false);
    (0,external_react_.useEffect)(()=>{
        if (theme) {
            document.documentElement.classList.add(themeClass);
        } else {
            document.documentElement.classList.remove(themeClass);
        }
        setThemeStatus(themeKey, theme);
    }, [
        theme,
        themeClass,
        themeKey
    ]);
    return [
        theme,
        setTheme
    ];
};
/* harmony default export */ const hooks_useTheme = (useTheme);

;// CONCATENATED MODULE: ./pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    const [darkTheme, setDarkTheme] = hooks_useTheme("dark-theme", "dark-theme");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                darkTheme: darkTheme,
                toggleTheme: setDarkTheme
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 698:
/***/ ((module) => {

module.exports = require("react-icons");

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
var __webpack_exports__ = (__webpack_exec__(412));
module.exports = __webpack_exports__;

})();