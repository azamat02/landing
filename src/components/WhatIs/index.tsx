import React from "react";
// @ts-ignore
import Phone from "../../static/img/phone.png"
import {ChipIcon, CodeIcon, LightBulbIcon, TerminalIcon, ViewGridIcon} from "@heroicons/react/outline";

export default function WhatIs() {
    return (
        <div className="what_is" id={"what_is"}>
            <p className="title">
                What is <span>CodiPlay?</span>
            </p>

            <div className="inner_what_is">
                <div>
                    <p className="description">
                        <p className="subtitle">
                            CodiPlay
                        </p>

                        <p className={"inner_desc"}>
                            Mobile application for comprehensive and integrated training of IT skills based on <b>Maker Education</b> and <b>STEAM</b>
                        </p>
                    </p>
                </div>
                <div>
                    <img src={Phone} alt="phone" />
                </div>
            </div>

            <p className="subtitle_">
                What do students learn?
            </p>

            <div className="cards">
                <div className="card">
                    <div className="img">
                        <CodeIcon/>
                    </div>
                    <div className="desc">
                        Algorithms and conditional expressions
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <ViewGridIcon/>
                    </div>
                    <div className="desc">
                        Block coding basics on Scratch base
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <ChipIcon/>
                    </div>
                    <div className="desc">
                        Circuit engineering
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <LightBulbIcon/>
                    </div>
                    <div className="desc">
                        Design <b>IoT</b> gadgets
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <TerminalIcon/>
                    </div>
                    <div className="desc">
                        C++ language basics
                    </div>
                </div>
            </div>
        </div>
    )
}