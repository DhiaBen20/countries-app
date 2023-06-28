import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useCountries() {
    return useQuery(["countries"], () =>
        fetch(
            "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        ).then((res) => res.json())
    );
}

export function useCountriesSearch(query) {
    return useQuery(
        ["countries", { query }],
        () =>
            fetch(
                `https://restcountries.com/v3.1/name/${query}?fields=name,capital,population,region,flags`
            )
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    if (data.message) {
                        throw new Error(data);
                    }

                    return data;
                }),
        {
            enabled: !!query,
        }
    );
}

export function useRegionCounties(region) {
    return useQuery(
        ["countries", region],
        () =>
            fetch(
                `https://restcountries.com/v3.1/region/${region}?fields=name,capital,population,region,flags`
            ).then((res) => res.json()),
        {
            enabled: !!region,
        }
    );
}

export function useCountry(country) {
    return useQuery(["country", country], () =>
        fetch(
            `https://restcountries.com/v2/name/${country}?fullText=true&fields=name,flags,nativeName,population,region,capital,topLevelDomain,currencies,languages,borders`
        )
            .then((res) => res.json())
            .then((data) => data[0])
    );
}

export function useCountryByCode(code) {
    let queryClient = useQueryClient();

    return useQuery(["country", code], () =>
        fetch(
            `https://restcountries.com/v2/alpha/${code}?fields=name,flags,nativeName,population,region,capital,topLevelDomain,currencies,languages,borders`
        )
            .then((res) => res.json())
            .then((data) => {
                queryClient.setQueryData(["country", data.name], data);
                return data;
            })
    );
}
