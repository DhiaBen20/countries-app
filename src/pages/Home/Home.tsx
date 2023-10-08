import { useState } from "react";
import {
    useCountries,
    useCountriesSearch,
    useRegionCounties,
} from "../../queries";
import { resultsIntersection } from "../../utlities";
import CardSkeletonsList from "./CardSkeletonsList";
import CountriesList from "./CountriesList";
import RegionSelect from "./RegionSelect";
import SearchInput from "./SearchInput";

export default function Home() {
    let [query, setQuery] = useState("");
    let [region, setRegion] = useState("");

    let countriesQuery = useCountries();
    let searchQuery = useCountriesSearch(query);
    let regionQuery = useRegionCounties(region);

    return (
        <div className="container mx-auto mt-[30px] space-y-4 text-[14px] md:mt-[48px]">
            {countriesQuery.isLoading ? (
                <CardSkeletonsList />
            ) : (
                <>
                    <div className="mb-[40px] flex flex-col gap-[50px] px-5 md:flex-row md:justify-between md:px-0">
                        <SearchInput
                            setQuery={setQuery}
                            isLoading={searchQuery.isFetching}
                        />
                        <RegionSelect region={region} setRegion={setRegion} />
                    </div>

                    <CountriesList
                        countries={
                            !query && !region
                                ? countriesQuery.data!
                                : searchQuery.isSuccess || regionQuery.isSuccess
                                ? resultsIntersection(
                                      searchQuery.isSuccess && searchQuery.data,
                                      regionQuery.isSuccess && regionQuery.data
                                  )
                                : []
                        }
                    />
                </>
            )}
        </div>
    );
}
