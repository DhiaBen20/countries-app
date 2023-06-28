import { useEffect, useState } from "react";
import { MoonIcon, MoonIconsSolid } from "./icons";

export default function ModeSwticher() {
    let [mode, setMode] = useState(() => {
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
        let nextMode = mode === "light" ? "dark" : "light";
        localStorage.mode = nextMode;
        setMode(nextMode);
    }

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-3 font-[600] focus:ring focus:outline-none"
        >
            {mode == "light" && <MoonIcon />}
            {mode == "dark" && <MoonIconsSolid />}
            Dark Mode
        </button>
    );
}
