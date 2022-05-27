import React from "react";
// @ts-ignore
import AstanaHubLogo from "../../static/img/partners/astana_hub.png"
// @ts-ignore
import NurisLogo from "../../static/img/partners/Logo_NURIS.png"
// @ts-ignore
import PavlLogo from "../../static/img/partners/pavl.png"
// @ts-ignore
import Pavl2Logo from "../../static/img/partners/pavld.png"
// @ts-ignore
import QazLogo from "../../static/img/partners/qaz_ino.png"
// @ts-ignore
import SdfLogo from "../../static/img/partners/sdf-logo.png"

export default function Partners() {
    return (
        <div className="partners" id={"partners"}>
            <p className="title">
                Our partners
            </p>

            <div className="inner">
                <div><img src={AstanaHubLogo} alt=""/></div>
                <div><img src={NurisLogo} alt=""/></div>
                <div><img src={SdfLogo} alt=""/></div>
                <div><img src={QazLogo} alt=""/></div>
                <div><img src={PavlLogo} alt=""/></div>
                <div><img src={Pavl2Logo} alt=""/></div>
            </div>
        </div>
    )
}