import React from "react";
import {ArrowUpIcon} from "@heroicons/react/outline";

export default function ScrollToTop() {

    return (
        <>
            <button className={"scrollToTopButton"} onClick={()=>{window.scrollTo(0, 0)}}>
                <ArrowUpIcon/>
            </button>
        </>
    )
}