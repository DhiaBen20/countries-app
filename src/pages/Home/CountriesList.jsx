import { memo } from "react";
import CountryCard from "./CountryCard";

function List({ countries }) {
    return (
        <div className="grid gap-[50px] px-5 md:grid-cols-2 md:gap-[75px] md:px-0 lg:grid-cols-3 xl:grid-cols-4">
            {countries.map((c) => (
                <CountryCard
                    key={c.name}
                    flag={c.flags.svg}
                    country={c.name}
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
