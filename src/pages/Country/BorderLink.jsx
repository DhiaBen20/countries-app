import { Link } from "react-router-dom";
import { useCountryByCode } from "../../queries";

export default function BorderLink({ code }) {
    let countryQuery = useCountryByCode(code);

    if (countryQuery.isSuccess) {
        return (
            <Link
                to={`/countries/${countryQuery.data.name}`}
                className="xpx-8 inline-flex min-w-[120px] items-center justify-center gap-4 rounded bg-white px-2 py-1.5 shadow-lg dark:bg-[#2B3743]"
            >
                {countryQuery.data.name}
            </Link>
        );
    }
}
