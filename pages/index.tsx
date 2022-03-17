import {
  ChangeEventHandler,
  MouseEventHandler,
  useState,
  useEffect,
} from "react";
import { IconContext } from "react-icons";
import { getCountries, getRegions } from "services/countriesService";
import SearchBox from "components/common/SearchBox";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Country } from "countries.types";
import Listbox from "components/common/Listbox";
import CardGrid from "components/CardGrid";
import CountryCard from "components/CountryCard";

export const getStaticProps: GetStaticProps<{
  countries: Country[];
  regions: string[];
}> = async () => {
  const countries = await getCountries();
  const regions = getRegions(countries);

  return {
    props: {
      countries,
      regions,
    },
  };
};

export default function Homepage({
  countries,
  regions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [countriesToDisplay, setCountriesToDisplay] = useState<Country[]>([]);

  const handleQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedRegion("All");
    setQuery(e.target.value);
  };

  const handleRegionSelection = (region: string) => {
    setQuery("");
    setSelectedRegion(region);
  };

  //Effect for filtering
  useEffect(() => {
    let filteredCountries = [...countries];

    if (query) {
      filteredCountries = countries.filter((country) => {
        const regex = new RegExp(query, "i");
        return regex.test(country.name.common);
      });
    }

    if (selectedRegion !== "All") {
      filteredCountries = countries.filter((country) => {
        return country.region === selectedRegion;
      });
    }

    setCountriesToDisplay(filteredCountries);
  }, [countries, query, selectedRegion]);

  return (
    <main>
      <section className="filters-section">
        <IconContext.Provider value={{ className: "search-box__icon" }}>
          <SearchBox
            query={query}
            handleQuery={handleQuery}
            placeholder="Search for a country..."
          />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "filter__dropdown__icon" }}>
          <Listbox
            items={regions}
            selectedItem={selectedRegion}
            handleSelection={handleRegionSelection}
            criterion="region"
          />
        </IconContext.Provider>
      </section>
      <CardGrid
        items={countriesToDisplay}
        onNoItem={
          <h2 className="card-grid__no-item-message">
            Sorry, your search did not match any country :(
          </h2>
        }
      >
        {countriesToDisplay.map((item) => (
          <CountryCard key={item.cca3} country={item} />
        ))}
      </CardGrid>
    </main>
  );
}
