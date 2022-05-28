import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Products from "../../components/Products";
import ScrollToTop from "../../components/ScrollToTop";
import Start from "../../components/Start";
import WhatIs from "../../components/WhatIs";
import Footer from "../../components/Footer";
import Roadmap from "../../components/Roadmap";
import Purchase from "../../components/Purchase";
import Partners from "../../components/Partners";

export default function MainPage() {
    return (
        <div className={"mainPage"}>
            <Navbar/>

            <Header/>

            <Start/>

            <WhatIs/>

            <Products/>

            <Roadmap/>

            <Purchase/>

            <Partners/>

            <ScrollToTop/>

            <Footer/>
        </div>
    )
}