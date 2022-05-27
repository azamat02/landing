// @ts-ignore
import ApplicationImage from "../../static/img/app.png"
// @ts-ignore
import MacbookMockup from "../../static/img/MacBook Pro 16.png"
// @ts-ignore
import Book from "../../static/img/book.png"
// @ts-ignore
import Box from "../../static/img/box.png"

export default function Product() {
    return (
        <div className={"products"} id={"products"}>
            <p className="title">
                Our products
            </p>

            <div className="inner" style={{marginTop: "150px"}}>
                <div>
                    <p className="title">
                        Mobile application CodiPlay
                    </p>
                    <p className={"description"}>
                        It will help you understand how <b>programming</b> works with the help of games
                    </p>
                </div>
                <div className={"img"}>
                    <img src={ApplicationImage} alt="mobile application"/>
                </div>
            </div>

            <div className="inner" style={{gridTemplateColumns: "60% 35%", gridGap: "5%"}}>
                <div className={"img"}>
                    <img src={MacbookMockup} alt="educational platform"/>
                </div>

                <div>
                    <p className="title">
                        Educational platform CodiTeach
                    </p>
                    <p className={"description"}>
                        Lessons on a ready-made or your <b>own curriculum</b>, homework, tests, projects, complete student statistics are all <b>available</b> on the platform in an <b>online format</b>
                    </p>
                </div>
            </div>

            <div className="inner" style={{gridTemplateColumns: "45% 50%", gridGap: "5%"}}>
                <div>
                    <p className="title">
                        Methodological guide book
                    </p>
                    <p className={"description"}>
                        Study and start creating your own <b>Internet of Things projects</b> with the help of a methodical book
                    </p>
                </div>
                <div className={"img"}>
                    <img src={Book} alt="methodological guide"/>
                </div>
            </div>

            <div className="inner" style={{gridTemplateColumns: "55% 45%", gridGap: "5%", marginBottom: "100px"}}>
                <div className={"img"}>
                    <img src={Box} alt="methodological guide"/>
                </div>
                <div>
                    <p className="title">
                        CodiKit
                    </p>
                    <p className={"description"}>
                        Starter kit for building <b>IoT gadgets</b> based on Arduino Uno
                    </p>
                </div>
            </div>
        </div>
    )
}