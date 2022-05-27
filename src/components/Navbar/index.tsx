import React from "react";
// @ts-ignore
import Logo from "../../static/img/logo2.png";
import {LoginIcon} from "@heroicons/react/outline";

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <div>
                    <li><img src={Logo} alt="logo" width={150}/></li>
                </div>
                <div>
                    <li>
                        <a href={"#what_is"}>About us</a>
                    </li>
                    <li>
                        <a href={"#products"}>Products</a>
                    </li>
                    <li>
                        <a href={"#roadmap"}>Purchase</a>
                    </li>
                    <li>
                        <a href={"#contact_us"}>Contact us</a>
                    </li>
                    <li>
                        <a href={"#partners"}>Partners</a>
                    </li>
                    <li>
                        <button className="button_primary">
                            Login to platform
                            <LoginIcon />
                        </button>
                    </li>
                </div>
            </ul>
        </div>
    )
}