// @ts-ignore
import Saly3D from "../../static/img/Saly-38.png"
import {ArrowRightIcon} from "@heroicons/react/outline";

export default function Header() {
    return (
        <div className="header">
            <div className={"title"}>
                <p style={{marginBottom: "20px"}}>
                    <span className="tag_primary">
                        #LEARN
                    </span>

                    <span className="tag_primary">
                        #PLAY
                    </span>

                    <span className="tag_primary">
                        #CODE
                    </span>
                </p>
                Learn how to code and make IoT projects on your smartphone!

                <p>
                    <button onClick={()=>{window.location.href="#start"}} className="button_primary">
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