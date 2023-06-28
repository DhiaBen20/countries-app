export default function CountryCardSkeleton() {
    return (
        <div className="flex flex-col gap-4 overflow-hidden rounded bg-white pb-10 shadow-lg dark:bg-[#2B3743]">
            <div className=" mb-6 md:h-[180px] h-[198px] bg-neutral-200 px-[30px] dark:bg-[#39434e]"></div>

            <div className="mx-[15px] h-5 bg-neutral-200 dark:bg-[#39434e]"></div>
            <div className="mx-[15px] h-5 bg-neutral-200 dark:bg-[#39434e]"></div>
            <div className="mx-[15px] h-5 bg-neutral-200 dark:bg-[#39434e]"></div>
            <div className="mx-[15px] h-5 bg-neutral-200 dark:bg-[#39434e]"></div>
        </div>
    );
}
