import http from "./httpService";
import config from "../config.json";

const baseApiUrl = config.baseApiUrl;
const fields = ["name", "flags", "region", "subregion", "capital", "currencies", "languages", "tld", "borders", "cca3"]
const fieldsString = fields.join(",");

export const getCountries = () => {
  return http.get(`${baseApiUrl}/all?fields=${fieldsString}`);
}
