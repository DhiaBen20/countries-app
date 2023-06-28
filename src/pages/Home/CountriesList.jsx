import { memo } from "react";
import CountryCard from "./CountryCard";

function List({ countries }) {
    return (
        <div className="px-5 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[50px] md:gap-[75px]">
            {countries.map((c) => (
                <CountryCard
                    key={c.name.common}
                    flag={c.flags.svg}
                    country={c.name.common}
                    population={c.population}
                    region={c.region}
                    capital={c.capital[0]}
                />
            ))}
        </div>
    );
}

let CountriesList = memo(List);

export default CountriesList;
