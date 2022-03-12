export type Country = {
    flags: string[]
    name: {
        common: string,
        official: string,
        nativeName: []
    }
    tld: string[]
    cca3: string
    currencies: Record<string, []>
    capital: string[]
    region: string[]
    subrerion: string[]
    languages: Record<string, string>
    borders: string[]
}