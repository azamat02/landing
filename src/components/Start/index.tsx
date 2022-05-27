import React from "react";
// @ts-ignore
import Rocket from "../../static/img/Saly-43.png"
import {PlayIcon} from "@heroicons/react/solid";

export default function Start() {
    return (
        <div className={"start"} id={"start"}>
            <div>
                <img src={Rocket} alt="rocket"/>
            </div>
            <div>
                <p className="title">
                    Start your journey to the programming world with <span>CodiPlay</span>
                </p>
                <button onClick={()=>{window.location.href = "#what_is"}} className="button_primary">
                    Let's GO

                    <PlayIcon/>
                </button>
            </div>
        </div>
    )
}