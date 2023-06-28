import { useCountry } from "../../queries";

export default function CountryFlag({ country }) {
    let countryQuery = useCountry(country);

    return (
        <div className="md:h-[400px]">
            <img src={countryQuery.data.flags.svg} className="w-full h-full object-cover" alt="" />
        </div>
    );
}
