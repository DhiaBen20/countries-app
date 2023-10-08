import { debounce } from "lodash";
import { SearchIcon } from "../../components/icons";
import { Dispatch, SetStateAction } from "react";

export default function SearchInput({
    setQuery,
    isLoading,
}: {
    setQuery: Dispatch<SetStateAction<string>>;
    isLoading: Boolean;
}) {
    let debouncedSetQuery = debounce((query) => {
        setQuery(query);
    }, 500);

    return (
        <div className="relative flex h-[59px] overflow-hidden rounded bg-white shadow-lg focus-within:ring dark:bg-[#2B3743] md:w-[480px]">
            <span
                className="inline-flex w-[90px] items-center justify-center md:w-[74px]"
                onClick={(e) => {
                    const input = e.currentTarget.nextElementSibling;

                    if (input instanceof HTMLElement) {
                        input.focus();
                    }
                }}
            >
                <SearchIcon />
            </span>
            <input
                type="text"
                className="flex-1 bg-transparent pr-10 focus:outline-none"
                placeholder="Search for a country..."
                onChange={(e) => {
                    let value = e.target.value;
                    if (value) {
                        debouncedSetQuery(value);
                    } else {
                        setQuery(value);
                    }
                }}
            />

            {isLoading && (
                <span className="absolute right-2 top-1/2 h-5 w-5 animate-spin rounded-full border-[3px]  border-blue-400 border-t-transparent [translate:0_-50%]"></span>
            )}
        </div>
    );
}
