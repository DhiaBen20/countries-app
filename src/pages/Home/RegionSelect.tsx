import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { useCloseOnClickOutside, useCloseOnEscPress } from "../../hooks";
import { ChevronDownIcon } from "../../components/icons";

let transitionClasses = {
    entering: "opacity-100 translate-y-0",
    entered: "opacity-100 translate-y-0",
    exiting: "opacity-0 -translate-y-10",
    exited: "opacity-0 -translate-y-10",
    unmounted: "",
};

export default function RegionSelect({
    region,
    setRegion,
}: {
    region: string;
    setRegion: Dispatch<SetStateAction<string>>;
}) {
    let [isOpen, setIsOpen] = useState(false);
    let nodeRef = useRef<HTMLDivElement>(null);

    let close = useCallback(() => setIsOpen(false), []);

    let ref = useCloseOnClickOutside<HTMLDivElement>(isOpen, close);
    useCloseOnEscPress(isOpen, close);

    return (
        <div className="relative flex h-[59px] w-60 font-[600]" ref={ref}>
            <button
                className="flex flex-1 items-center justify-between rounded bg-white pl-[31px] pr-[25px] shadow-lg focus:outline-none focus:ring dark:bg-[#2B3743]"
                onClick={() => setIsOpen((io) => !io)}
            >
                {region ? region : "Filter by Region"} <ChevronDownIcon />
            </button>
            <Transition
                in={isOpen}
                timeout={100}
                nodeRef={nodeRef}
                unmountOnExit
            >
                {(state) => (
                    <div
                        className={`xitems-start absolute top-full mt-1 flex w-full flex-col gap-5 rounded bg-white py-6 pl-[31px] pr-[25px] shadow-lg transition-all duration-100 dark:bg-[#2B3743] ${transitionClasses[state]}`}
                        ref={nodeRef}
                    >
                        {[
                            "Africa",
                            "Americas",
                            "Asia",
                            "Europe",
                            "Oceania",
                        ].map((region) => (
                            <button
                                key={region}
                                className="text-left"
                                onClick={() => handleSelect(region)}
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                )}
            </Transition>
        </div>
    );

    function handleSelect(value: string) {
        setRegion(value == region ? "" : value);
        setIsOpen(false);
    }
}
