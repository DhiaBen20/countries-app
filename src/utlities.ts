import { Country } from "./queries";

export function resultsIntersection(
    searchResult: Country[] | false,
    regionFilter: Country[] | false
) {
    if (!searchResult || !regionFilter) {
        return searchResult || regionFilter || [];
    }

    return searchResult.filter((sr) =>
        regionFilter.some((rf) => sr.name == rf.name)
    );
}

export function formatPopulation(population: number) {
    return population.toLocaleString(undefined);
}
