import BorderLink from "./BorderLink";

export default function CountryBorders({ borders }) {
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
