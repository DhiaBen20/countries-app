import { memo } from "react";
import CountryCard from "./CountryCard";
import { Country } from "../../queries";

function List({ countries }: { countries: Country[] }) {
    return (
        <div className="grid gap-[50px] px-5 md:grid-cols-2 md:gap-[75px] md:px-0 lg:grid-cols-3 xl:grid-cols-4">
            {countries.map((c) => (
                <CountryCard
                    key={c.name}
                    flags={c.flags}
                    name={c.name}
                    population={c.population}
                    region={c.region}
                    capital={c.capital}
                />
            ))}
        </div>
    );
}

let CountriesList = memo(List);

export default CountriesList;
