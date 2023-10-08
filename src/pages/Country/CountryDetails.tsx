import { Country } from "../../queries";
import { formatPopulation } from "../../utlities";
import CountryBorders from "./CountryBorders";
import ListItem from "./ListItem";

export default function CountryDetails({ country }: { country: Country }) {
    let name = country.name;
    let nativeName = country.nativeName;
    let population = formatPopulation(country.population);
    let region = country.region;
    let capital = country.capital;
    let tld = country.topLevelDomain.join(', ');
    let currencies = country.currencies.map((c) => c.name).join(", ");
    let languages = country.languages.map((l) => l.name).join(", ");

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

            <CountryBorders borders={country.borders} />
        </div>
    );
}
