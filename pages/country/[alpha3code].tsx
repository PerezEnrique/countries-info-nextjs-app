import Link from "next/link";
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import {
  getBorders,
  getCountries,
  getSingleCountry,
} from "services/countriesService";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import type { Country } from "countries.types";

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await getCountries();

  const paths = countries.map((country: Country) => {
    return { params: { alpha3code: country.cca3 } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  country: Country;
  borders: string[];
}> = async ({ params }) => {
  const country = await getSingleCountry(params?.alpha3code as string);

  let borders = [];

  if (country[0].borders) {
    borders = borders = await getBorders(country[0].borders);
  }

  return {
    props: {
      country: country[0],
      borders,
    },
  };
};

export default function Country({
  country,
  borders,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    flags,
    name,
    region,
    subregion,
    capital,
    currencies,
    languages,
    tld,
  } = country;

  let currenciesArray;
  let languagesArray;

  if (currencies) {
    currenciesArray = Object.keys(currencies);
  }

  if (languages) {
    languagesArray = Object.keys(languages);
  }

  return (
    <div className="country-page">
      <Link href="/">
        <a className="btn-link go-back-link">
          <IconContext.Provider value={{ className: "go-back-icon" }}>
            <IoIosArrowRoundBack />
          </IconContext.Provider>
          Back
        </a>
      </Link>
      <main>
        <article className="country-article">
          <section className="country-article__media">
            <picture>
              <img src={flags[0]} alt={`${name.common}'s flag`} />
            </picture>
          </section>
          <section className="country-article__text">
            <h2 className="main-heading">{name.common}</h2>
            <section className="country-article__text__desc-lists">
              <dl className="desc-list">
                <div className="desc-list__item">
                  <dt className="desc-list__item__term">Official Name:</dt>
                  <dd className="desc-list__item__detail">{name.official}</dd>
                </div>
                <div className="desc-list__item">
                  <dt className="desc-list__item__term">Region:</dt>
                  <dd className="desc-list__item__detail">{region}</dd>
                </div>
                {subregion && (
                  <div className="desc-list__item">
                    <dt className="desc-list__item__term">Sub Region:</dt>
                    <dd className="desc-list__item__detail">{subregion}</dd>
                  </div>
                )}
                {capital && (
                  <div className="desc-list__item">
                    <dt className="desc-list__item__term">Capital:</dt>
                    <dd className="desc-list__item__detail">{capital}</dd>
                  </div>
                )}
              </dl>
              <dl className="desc-list">
                {tld && (
                  <div className="desc-list__item">
                    <dt className="desc-list__item__term">Top Level Domain:</dt>
                    <dd className="desc-list__item__detail">{tld.join(" ")}</dd>
                  </div>
                )}
                {currencies && currenciesArray && (
                  <div className="desc-list__item">
                    <dt className="desc-list__item__term">Currencies:</dt>
                    <dd className="desc-list__item__detail">
                      {currenciesArray.map((item, index) =>
                        index !== currenciesArray.length - 1
                          ? `${currencies[item].name}, `
                          : currencies[item].name
                      )}
                    </dd>
                  </div>
                )}
                {languages && languagesArray && (
                  <div className="desc-list__item">
                    <dt className="desc-list__item__term">Languages:</dt>
                    <dd className="desc-list__item__detail">
                      {languagesArray.map((item, index) =>
                        index !== languagesArray.length - 1
                          ? `${languages[item]}, `
                          : languages[item]
                      )}
                    </dd>
                  </div>
                )}
              </dl>
            </section>
            <section className="country-article__text__border-countries">
              <h3>Border Countries:</h3>
              {!borders || borders.length < 1 ? (
                <span>No border countries</span>
              ) : (
                borders.map((border) => (
                  <Link
                    key={uuidv4()}
                    href={{
                      pathname: "/country/[alpha3code]",
                      query: { alpha3code: border },
                    }}
                  >
                    <a className="btn-link">{border}</a>
                  </Link>
                ))
              )}
            </section>
          </section>
        </article>
      </main>
    </div>
  );
}
