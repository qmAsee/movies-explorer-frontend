import React from "react";

export function useDebounce(func, delay = 200) {
    const ref = React.useRef(null);

    return (...args) => {
        clearTimeout(ref.current);

        ref.current = setTimeout(() => func(...args), delay)
    }
}