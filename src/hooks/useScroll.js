import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const useScroll = () =>{
    const [hideOnScroll, setHideOnScroll] = useState(true);
    useScrollPosition(
        ({ prevPos, currPos }) => {
        console.log(prevPos.y, currPos.y);
        // 위로 가면 보인다
        const isShow = currPos.y > prevPos.y;
        console.log(isShow);
        if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        false,
        false,
        300
    );
    return [hideOnScroll];
}

export default useScroll;
