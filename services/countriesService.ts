import http from "./httpService";
import config from "../config.json";
import { Country } from "countries.types";

const baseApiUrl = config.baseApiUrl;
const fields = ["name", "flags", "region", "subregion", "capital", "currencies", "languages", "tld", "borders", "cca3"]
const fieldsString = fields.join(",");

export const getCountries = () => {
  return http.get(`${baseApiUrl}/all?fields=${fieldsString}`);
};

export const getRegions = (countries: Country[]) => {
  const regionsSet = new Set<string>();

  countries.forEach((country) => {
    regionsSet.add(country.region);
  });

  const regionsArray = Array.from(regionsSet);
  regionsArray.unshift("All");
  return regionsArray;
};

