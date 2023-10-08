import { Link, useNavigate } from "react-router-dom";
import { Country } from "../../queries";

export default function CountryCard({
    flags,
    name,
    population,
    region,
    capital,
}: Pick<Country, "flags" | "name" | "population" | "region" | "capital">) {
    let redirect = useNavigate();
    return (
        <div
            className="flex cursor-pointer flex-col overflow-hidden rounded bg-white shadow-lg dark:bg-[#2B3743]"
            onClick={() => redirect(`/countries/${name}`)}
        >
            <div className="h-[198px] md:h-[160px]">
                <img
                    src={flags.svg}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="px-[30px] pb-[45px] pt-[30px]">
                <h2 className="mb-[22px] text-lg font-bold">
                    <Link to={`/countries/${name}`}>{name}</Link>
                </h2>
                <ul className="space-y-[10px]">
                    <li>
                        <span className="font-semibold">Population</span>:
                        {population}
                    </li>
                    <li>
                        <span className="font-semibold">Region</span>: {region}
                    </li>
                    <li>
                        <span className="font-semibold">Capital</span>:{" "}
                        {capital}
                    </li>
                </ul>
            </div>
        </div>
    );
}
