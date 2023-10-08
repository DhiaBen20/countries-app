import { useQuery, useQueryClient } from "@tanstack/react-query";

export interface Country {
    name: string;
    topLevelDomain: string[];
    capital: string;
    region: string;
    population: number;
    borders?: string[];
    nativeName: string;
    flags: {
        svg: string;
        png: string;
    };
    currencies: [
        {
            code: string;
            name: string;
            symbol: string;
        }
    ];
    languages: [
        {
            name: string;
        }
    ];
}

const url = "https://restcountries.com/v2/";

function fetchJson(path: string) {
    return fetch(`${url}${path}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                throw new Error(data);
            }

            return data;
        });
}

function fetchCountries(): Promise<Country[]> {
    return fetchJson("all?fields=name,capital,population,region,flags");
}

export function useCountries() {
    return useQuery(["countries"], fetchCountries);
}

function fetchCountriesBySearch(query: string): Promise<Country[]> {
    return fetchJson(
        `name/${query}?fields=name,capital,population,region,flags`
    );
}

export function useCountriesSearch(query: string) {
    return useQuery(
        ["countries", { query }],
        () => fetchCountriesBySearch(query),
        {
            enabled: !!query,
        }
    );
}

function fetchCountriesByRegion(region: string): Promise<Country[]> {
    return fetchJson(
        `region/${region}?fields=name,capital,population,region,flags`
    );
}

export function useRegionCounties(region: string) {
    return useQuery(
        ["countries", region],
        () => fetchCountriesByRegion(region),
        {
            enabled: !!region,
        }
    );
}

function fetchCountry(country: string): Promise<Country[]> {
    return fetchJson(
        `name/${country}?fullText=true&fields=name,flags,nativeName,population,region,capital,topLevelDomain,currencies,languages,borders`
    );
}

export function useCountry(country: string) {
    return useQuery(["country", country], () =>
        fetchCountry(country).then((c) => c[0])
    );
}

function fetchCountryByCode(code: string): Promise<Country> {
    return fetchJson(
        `alpha/${code}?fields=name,flags,nativeName,population,region,capital,topLevelDomain,currencies,languages,borders`
    );
}

export function useCountryByCode(code: string) {
    let queryClient = useQueryClient();

    return useQuery(["country", code], () =>
        fetchCountryByCode(code).then((data) => {
            queryClient.setQueryData(["country", data.name], data);
            return data;
        })
    );
}
