import { useEffect, useState } from "react";
import { MoonIcon, MoonIconsSolid } from "./icons";

export default function ModeSwticher() {
    let [mode, setMode] = useState<"dark" | "light">(() => {
        if (
            ("mode" in localStorage && localStorage.mode == "dark") ||
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark";
        }

        return "light";
    });

    useEffect(() => {
        if (mode == "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    function handleClick() {
        let nextMode =
            mode === "light" ? ("dark" as const) : ("light" as const);
        localStorage.mode = nextMode;
        setMode(nextMode);
    }

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-3 font-[600] focus:outline-none focus:ring"
        >
            {mode == "light" && <MoonIcon />}
            {mode == "dark" && <MoonIconsSolid />}
            Dark Mode
        </button>
    );
}
