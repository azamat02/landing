import React, {useState} from "react";
// @ts-ignore
import Logo from "../../static/img/logo2.png";
import {ClockIcon, LoginIcon, MenuAlt3Icon, MenuIcon, PlusCircleIcon, XIcon} from "@heroicons/react/outline";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="nav">
            <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="nav-title">
                        <img src={Logo} alt="logo"/>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <MenuIcon className={"show"}/>
                        <XIcon className={"hide"}/>
                    </label>
                </div>

                <div className="nav-links">
                    <a href={"#what_is"}>About us</a>
                    <a href={"#products"}>Products</a>
                    <a href={"#roadmap"}>Purchase</a>
                    <a href={"#contact_us"}>Contact us</a>
                    <a href={"#partners"}>Partners</a>

                    <button className="button_primary">
                        Login to platform
                        <LoginIcon />
                    </button>
                </div>
        </div>
    )
}