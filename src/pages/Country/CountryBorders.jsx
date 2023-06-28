import { useCountry } from "../../queries";
import BorderLink from "./BorderLink";

export default function CountryBorders({ country }) {
    let countryQuery = useCountry(country);

    return (
        <div className="mt-16 flex flex-wrap items-baseline gap-4">
            <span className="whitespace-nowrap text-lg font-[600]">
                Border Countries:{" "}
            </span>
            <>
                {countryQuery.data.borders.map((b) => (
                    <BorderLink key={b} code={b} />
                ))}
            </>
        </div>
    );
}
