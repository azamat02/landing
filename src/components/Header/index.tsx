// @ts-ignore
import Saly3D from "../../static/img/Saly-38.png"
import {ArrowRightIcon} from "@heroicons/react/outline";

export default function Header() {
    return (
        <div className="header">
            <div className={"title"}>
                Learn how to code and make IoT projects on your <span>smartphone!</span>

                <p>
                    <button className="button_primary">
                        Start now
                        <ArrowRightIcon/>
                    </button>
                </p>
            </div>

            <div>
                <img src={Saly3D} alt="saly-3d" style={{width: "100%"}}/>
            </div>

        </div>
    )
}