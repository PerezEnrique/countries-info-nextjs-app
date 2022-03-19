"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CardGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CardGrid({ items , onNoItem , children  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "card-grid",
        children: [
            !items || !items.length && onNoItem,
            (items === null || items === void 0 ? void 0 : items.length) && children
        ]
    }));
};


/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);


function CountryCard({ country: { flags , name , region , subregion , capital , cca3: alpha3code  }  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "card",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "card__head",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: {
                        pathname: "/country/[alpha3code]",
                        query: {
                            alpha3code
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            className: "card__head__img",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                loading: "lazy",
                                src: flags[0],
                                alt: `${name.common}'s flag`
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "card__body",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card__body__text",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                href: {
                                    pathname: "/country/[alpha3code]",
                                    query: {
                                        alpha3code
                                    }
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "heading-link",
                                    children: name.common
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                            className: "desc-list",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "desc-list__item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                            className: "desc-list__item__term",
                                            children: "Region:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                            className: "desc-list__item__detail",
                                            children: region
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "desc-list__item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                            className: "desc-list__item__term",
                                            children: "Sub region:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                            className: "desc-list__item__detail",
                                            children: subregion
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "desc-list__item",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                            className: "desc-list__item__term",
                                            children: "Capital:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                            className: "desc-list__item__detail",
                                            children: capital
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryCard);


/***/ }),

/***/ 384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Filter({ items , selectedItem , handleSelection , criterion  }) {
    const { 0: showOptions , 1: setShowOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const filter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const filterDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const itemToFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClick = (e)=>{
        handleSelection(e.target.id);
        setShowOptions(false);
    };
    const handleKeyDown = (e)=>{
        const eventTarget = e.target;
        const buttonHasFocus = eventTarget.tagName === "BUTTON";
        const optionHasFocus = eventTarget.getAttribute("role") === "option";
        if (buttonHasFocus) {
            //When focus is on button
            switch(e.code){
                case "ArrowDown":
                case "ArrowUp":
                    //if user press arrow down or arrow up, it opens the listbox
                    setShowOptions(true);
                    break;
                default:
                    break;
            }
        } else if (optionHasFocus) {
            //When focus is on an item
            switch(e.code){
                case "ArrowDown":
                    // if user press arrow down, it moves focus to and selects the next option.
                    if (!eventTarget.nextElementSibling) return;
                    e.preventDefault(); //to prevent scrolling
                    eventTarget.nextElementSibling.focus();
                    break;
                case "ArrowUp":
                    // if user press arrow up, it moves focus to and selects the previous option.
                    if (!eventTarget.previousElementSibling) return;
                    e.preventDefault();
                    eventTarget.previousElementSibling.focus();
                    break;
                case "Enter":
                    //If user press enter, it collapses the listbox and keeps the currently selected option as the button label.
                    setShowOptions(false);
                    handleSelection(eventTarget.id);
                    break;
                case "Escape":
                    var ref;
                    //If user press esc, it collapses the listbox and moves focus to the button.
                    setShowOptions(false);
                    (ref = filterDropdown.current) === null || ref === void 0 ? void 0 : ref.focus();
                    break;
                default:
                    break;
            }
        }
    };
    //Clicking outside the listbox when it is expanded should collapse it.
    //Nevetherless, we need to verify first if the clicks event happened inside the filter component,
    //those clicks shouldn't collapse our listbox
    const handleClickOutside = (e)=>{
        var ref;
        const eventTarget = e.target;
        //JavaScript doesn't consider that the dropwdown button icon is nested inside the filter.
        //So before everything else we'll check if the click ocurred on the icon
        //If so we'll prevent that click from collapsing the listbox
        const clickOcurredOnDropdownIcon = eventTarget.closest(".filter__dropdown__icon");
        if (clickOcurredOnDropdownIcon) return;
        if (!((ref = filter.current) === null || ref === void 0 ? void 0 : ref.contains(eventTarget))) setShowOptions(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var // when listbox expands focus should be placed on the currently selected option in the list.
        ref;
        if (!showOptions) return;
        (ref = itemToFocus.current) === null || ref === void 0 ? void 0 : ref.focus();
    }, [
        showOptions,
        itemToFocus
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "filter",
        ref: filter,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "filter__dropdown",
                id: "filter-dropdown",
                ref: filterDropdown,
                onClick: ()=>setShowOptions(!showOptions)
                ,
                onKeyDown: handleKeyDown,
                "aria-haspopup": "listbox",
                "aria-expanded": !showOptions ? undefined : "true",
                children: [
                    selectedItem === "All" ? `Filter by ${criterion}` : selectedItem,
                    !showOptions ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropDownLine, {
                        "aria-hidden": "true"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowDropUpLine, {
                        "aria-hidden": "true"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: !showOptions ? "filter__dropdown__box" : "filter__dropdown__box filter__dropdown__box--active",
                "aria-labelledby": "filter-dropdown",
                role: "listbox",
                "aria-activedescendant": selectedItem,
                children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        ref: item !== selectedItem ? undefined : itemToFocus,
                        id: item,
                        className: "filter__dropdown__box__option",
                        onClick: handleClick,
                        onKeyDown: handleKeyDown,
                        role: "option",
                        tabIndex: -1,
                        "aria-selected": item !== selectedItem ? "false" : "true",
                        children: item
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)())
                )
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);


function SearchBox({ query , handleQuery , placeholder  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "search-box",
        role: "search",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoMdSearch, {
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "search-box__input",
                type: "search",
                value: query,
                onChange: handleQuery,
                placeholder: placeholder
            })
        ]
    }));
};


/***/ }),

/***/ 75:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Homepage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(698);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_countriesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(876);
/* harmony import */ var components_common_SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(195);
/* harmony import */ var components_common_Listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(384);
/* harmony import */ var components_CardGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(645);
/* harmony import */ var components_CountryCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(816);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_Listbox__WEBPACK_IMPORTED_MODULE_5__]);
components_common_Listbox__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const getStaticProps = async ()=>{
    const countries = await (0,services_countriesService__WEBPACK_IMPORTED_MODULE_3__/* .getCountries */ .ox)();
    const regions = (0,services_countriesService__WEBPACK_IMPORTED_MODULE_3__/* .getRegions */ .JL)(countries);
    return {
        props: {
            countries,
            regions
        }
    };
};
function Homepage({ countries , regions  }) {
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: selectedRegion , 1: setSelectedRegion  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All");
    const { 0: countriesToDisplay , 1: setCountriesToDisplay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleQuery = (e)=>{
        setSelectedRegion("All");
        setQuery(e.target.value);
    };
    const handleRegionSelection = (region)=>{
        setQuery("");
        setSelectedRegion(region);
    };
    //Effect for filtering
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let filteredCountries = [
            ...countries
        ];
        if (query) {
            filteredCountries = countries.filter((country)=>{
                const regex = new RegExp(query, "i");
                return regex.test(country.name.common);
            });
        }
        if (selectedRegion !== "All") {
            filteredCountries = countries.filter((country)=>{
                return country.region === selectedRegion;
            });
        }
        setCountriesToDisplay(filteredCountries);
    }, [
        countries,
        query,
        selectedRegion
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "filters-section",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, {
                        value: {
                            className: "search-box__icon"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_SearchBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            query: query,
                            handleQuery: handleQuery,
                            placeholder: "Search for a country..."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, {
                        value: {
                            className: "filter__dropdown__icon"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_Listbox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            items: regions,
                            selectedItem: selectedRegion,
                            handleSelection: handleRegionSelection,
                            criterion: "region"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CardGrid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                items: countriesToDisplay,
                onNoItem: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "card-grid__no-item-message",
                    children: "Sorry, your search did not match any country :("
                }),
                children: countriesToDisplay.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CountryCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        country: item
                    }, item.cca3)
                )
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 698:
/***/ ((module) => {

module.exports = require("react-icons");

/***/ }),

/***/ 751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 98:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,876], () => (__webpack_exec__(75)));
module.exports = __webpack_exports__;

})();