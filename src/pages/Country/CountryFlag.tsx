import { Country } from "../../queries";

export default function CountryFlag({
    countryFlags,
}: {
    countryFlags: Country["flags"];
}) {
    return (
        <div className="md:h-[400px]">
            <img
                src={countryFlags.svg}
                className="h-full w-full object-cover"
                alt=""
            />
        </div>
    );
}
