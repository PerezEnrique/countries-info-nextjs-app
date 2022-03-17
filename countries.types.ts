export type Country = {
  flags: string[];
  name: {
    common: string;
    official: string;
    nativeName: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  tld: string[];
  cca3: string;
  currencies: Record<string, []>;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders?: string[];
};
