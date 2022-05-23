import React from "react";
// @ts-ignore
import Logo from "../../static/img/logo.png";
import {LoginIcon} from "@heroicons/react/outline";

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <div>
                    <li><img src={Logo} alt="logo" width={150}/></li>
                </div>
                <div>
                    <li>About us</li>
                    <li>Product</li>
                    <li>Vacancies</li>
                    <li>Partners</li>
                    <li>Contact us</li>
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