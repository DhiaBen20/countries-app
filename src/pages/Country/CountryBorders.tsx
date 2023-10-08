import { Country } from "../../queries.ts";
import BorderLink from "./BorderLink.tsx";

export default function CountryBorders({
    borders,
}: {
    borders: Country["borders"];
}) {
    if (borders) {
        return (
            <div className="mt-16 flex flex-wrap items-baseline gap-4">
                <span className="whitespace-nowrap text-lg font-[600]">
                    Border Countries:{" "}
                </span>
                <>
                    {borders.map((b) => (
                        <BorderLink key={b} code={b} />
                    ))}
                </>
            </div>
        );
    }
}
