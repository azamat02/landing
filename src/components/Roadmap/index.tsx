import React from "react";
import {ArrowDownIcon, CheckIcon} from "@heroicons/react/outline";

export default function Roadmap() {
    return (
        <div className="roadmap" id={"roadmap"}>
            <p className="title">
                Get started
            </p>
            <div className="inner">
                <div className="for_parents">
                    <p className="title">
                        For parents
                    </p>

                    <div className="action">
                        <section>1</section> Fill out the application form
                    </div>
                    <div className="action">
                        <section>2</section> Sign up in CodiPlay mobile application
                    </div>
                    <div className="action">
                        <section>3</section> Choose plan
                    </div>
                    <div className="action">
                        <section>4</section> Make a purchase
                    </div>
                    <div className="action">
                        <section><CheckIcon/></section> Done!
                    </div>
                </div>
                <div className="for_schools">
                    <p className="title">
                        For schools
                    </p>

                    <div className="action">
                        <section>1</section> Fill out the application form
                    </div>
                    <div className="action">
                        <section>2</section> Sign the contract with us
                    </div>
                    <div className="action">
                        <section>3</section> Accept access to the license of product
                    </div>
                    <div className="action">
                        <section><CheckIcon/></section> Done!
                    </div>
                </div>
            </div>

            <p className={"arrow_down"}>
                <ArrowDownIcon/>
            </p>
        </div>
    )
}