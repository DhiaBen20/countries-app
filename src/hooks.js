import { useEffect, useRef } from "react";

export function useCloseOnEscPress(isOpen, close) {
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.code == "Escape") {
                close();
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown, true);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
        };
    }, [close, isOpen]);
}

export function useCloseOnClickOutside(isOpen, close) {
    let ref = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (!ref.current.contains(e.target)) {
                close();
            }
        }

        if (isOpen) {
            document.addEventListener("click", handleClick, true);
        }

        return () => document.removeEventListener("click", handleClick, true);
    }, [close, isOpen]);

    return ref;
}
