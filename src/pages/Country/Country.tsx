import { useParams } from "react-router-dom";
import { useCountry } from "../../queries";
import BackLink from "./BackLink";
import CountryFlag from "./CountryFlag";
import CountryDetails from "./CountryDetails";
import Skeleton from "./Skeleton";

export default function Country() {
    let country = useParams().country!;

    let countryQuery = useCountry(country);

    return (
        <div className="container mx-auto mb-20 mt-[30px] px-5 md:mt-[48px] md:px-0 lg:mb-0">
            <BackLink />
            {countryQuery.isLoading && <Skeleton />}
            {countryQuery.isSuccess && (
                <div className="mt-20 gap-24 md:grid md:grid-cols-2">
                    <CountryFlag countryFlags={countryQuery.data.flags} />
                    <CountryDetails country={countryQuery.data} />
                </div>
            )}
        </div>
    );
}
