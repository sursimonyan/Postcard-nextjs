import { useEffect } from "react";

const useOutsideClick = (ref, state, setState) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && state) {
                setState(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, state]);
};

export default useOutsideClick;
