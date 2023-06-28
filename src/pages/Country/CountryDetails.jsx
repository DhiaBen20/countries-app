import { useCountry } from "../../queries";
import { formatPopulation } from "../../utlities";
import CountryBorders from "./CountryBorders";
import CountryBoundries from "./CountryBorders";
import ListItem from "./ListItem";

export default function CountryDetails({ country }) {
    let countryQuery = useCountry(country);

    let name = countryQuery.data.name;
    let nativeName = countryQuery.data.nativeName;
    let population = formatPopulation(countryQuery.data.population);
    let region = countryQuery.data.region;
    let capital = countryQuery.data.capital;
    let tld = countryQuery.data.topLevelDomain;
    let currencies = countryQuery.data.currencies
        .map((c) => c.name)
        .join(", ");
    let languages = countryQuery.data.languages
        .map((l) => l.name)
        .join(", ");

    return (
        <div>
            <h1 className="mb-9 mt-12 text-3xl font-bold">{name}</h1>

            <div className="grid gap-8 lg:grid-cols-2">
                <ul className="space-y-2">
                    <ListItem label="Native Name" value={nativeName} />
                    <ListItem label="Population" value={population} />
                    <ListItem label="Region" value={region} />
                    <ListItem label="Capital" value={capital} />
                </ul>
                <ul className="space-y-2">
                    <ListItem label="Top Level Domain" value={tld} />
                    <ListItem label="Currencies" value={currencies} />
                    <ListItem label="Languages" value={languages} />
                </ul>
            </div>

            <CountryBorders country={country} />
        </div>
    );
}
