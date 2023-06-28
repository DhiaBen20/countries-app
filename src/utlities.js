export function resultsIntersection(searchResult, regionFilter) {
    if (!searchResult || !regionFilter) {
        return searchResult || regionFilter || [];
    }

    return searchResult.filter((sr) =>
        regionFilter.some((rf) => sr.name.common == rf.name.common)
    );
}

export function formatPopulation(population) {
    return population.toLocaleString(undefined);
}
