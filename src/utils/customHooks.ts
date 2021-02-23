import { useEffect, useState } from "react";

interface ISize {
    height: number,
    width: number,
}

export function useWindowSize() {
    //Could look at setting a default size but with slow rendering this would 
    //have our component rendering with the default size briefly before being
    //updated which would have a lag/flicker effect where not being visible 
    //is probably better
    const [windowSize, setWindowSize] = useState<ISize>({
        height: 0,
        width: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        //Syntax for executing stuff in the cleanup phase
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}