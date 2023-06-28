import CountryCardSkeleton from "./CountryCardSkeleton";

export default function CardSkeletonsList() {
    return (
        <div className="px-5 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[50px] md:gap-[75px]">
            <CountryCardSkeleton />
            <CountryCardSkeleton />
            <CountryCardSkeleton />
            <CountryCardSkeleton />
        </div>
    );
}
