"use strict";
exports.id = 876;
exports.ids = [876];
exports.modules = {

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W0": () => (/* binding */ getBorders),
  "ox": () => (/* binding */ getCountries),
  "JL": () => (/* binding */ getRegions),
  "UK": () => (/* binding */ getSingleCountry)
});

;// CONCATENATED MODULE: ./services/httpService.ts
/* harmony default export */ const httpService = ({
    get: async (url)=>{
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        return response.json();
    }
});

;// CONCATENATED MODULE: ./config.json
const config_namespaceObject = JSON.parse('{"t":"https://restcountries.com/v3"}');
;// CONCATENATED MODULE: ./services/countriesService.ts


const baseApiUrl = config_namespaceObject.t;
const fields = [
    "name",
    "flags",
    "region",
    "subregion",
    "capital",
    "currencies",
    "languages",
    "tld",
    "borders",
    "cca3", 
];
const fieldsString = fields.join(",");
const getCountries = ()=>{
    return httpService.get(`${baseApiUrl}/all?fields=${fieldsString}`);
};
const getSingleCountry = (code)=>{
    return httpService.get(`${baseApiUrl}/alpha/${code}`);
};
const getRegions = (countries)=>{
    const regionsSet = new Set();
    countries.forEach((country)=>{
        regionsSet.add(country.region);
    });
    const regionsArray = Array.from(regionsSet);
    regionsArray.unshift("All");
    return regionsArray;
};
const getBorders = async (codes)=>{
    const countries = await getCountries();
    return codes.map((code)=>{
        return countries.find((country)=>{
            return country.cca3 === code;
        }).name.common;
    });
};


/***/ })

};
;