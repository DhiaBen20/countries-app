import { useEffect, useRef } from "react";

export function useCloseOnEscPress(isOpen: boolean, close: () => void) {
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
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

export function useCloseOnClickOutside<T extends HTMLElement>(
    isOpen: boolean,
    close: () => void
) {
    let ref = useRef<T>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                ref.current &&
                e.target instanceof Node &&
                !ref.current.contains(e.target)
            ) {
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
