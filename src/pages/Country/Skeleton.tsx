export default function Skeleton() {
    return (
        <div className="mt-20 gap-24 md:grid md:grid-cols-2">
            <FlagSkeleton />

            <DetailsSkeleton />
        </div>
    );
}

function FlagSkeleton() {
    return <div className="h-[200px] bg-neutral-200 dark:bg-[#39434e] md:h-[400px]"></div>;
}

function DetailsSkeleton() {
    return (
        <div>
            <div className="mb-9 mt-12 h-7 w-40 bg-neutral-200 dark:bg-[#39434e]"></div>

            <div className="grid gap-8 lg:grid-cols-2">
                <ul className="space-y-2">
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                </ul>

                {/* <ul className="space-y-2">
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                    <li className="h-5 w-52 bg-neutral-200 dark:bg-[#39434e]"></li>
                </ul> */}
            </div>

            <div className="mt-16 flex gap-4">
                <span className="h-5 w-24 bg-neutral-200 dark:bg-[#39434e]"></span>
                <span className="h-5 w-24 bg-neutral-200 dark:bg-[#39434e]"></span>
                <span className="h-5 w-24 bg-neutral-200 dark:bg-[#39434e]"></span>
            </div>
        </div>
    );
}
