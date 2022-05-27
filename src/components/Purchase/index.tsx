import React, {useState} from "react";
// @ts-ignore
import Saly15 from "../../static/img/Saly-15 (5).png"
import {PaperAirplaneIcon} from "@heroicons/react/outline";
import {ClipLoader} from "react-spinners";
import swal from "sweetalert";
import axios from "axios";

export default function Purchase() {
    const [name, setName] = useState("")
    const [organization, setOrganization] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const sendForm = () => {
        let data = {
            name,
            organization,
            phone,
            email,
        }
        setLoading(true)

        const headers = {
            'Content-Type': 'application/json'
        };

        console.log(data)
        axios.post("http://188.166.30.183:4000/api/form", data, {headers}).then(res=>{
            console.log(res.data)
            swal(
                'Done!',
                'Thanks, we will contact with you!',
                'success'
            )
        }).catch(()=>{
            setName("")
            setOrganization("")
            setPhone("")
            setEmail("")
            setLoading(false)
            swal(
                'Done!',
                'Thanks, we will contact with you!',
                'success'
            )
        })
    }

    return (
        <div className="purchase" id={"contact_us"}>
            <div className="img">
                <img src={Saly15} alt="saly person"/>
            </div>
            <div className="form">
                <p className="title">
                    Connect with us
                </p>

                <div className="inner_form">
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}
                           placeholder={"Name"}
                           className={"input"}/>
                    <input type="text" value={organization} onChange={(e)=>{setOrganization(e.target.value)}}
                           placeholder={"Organization"}
                           className={"input"}/>
                    <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}}
                           placeholder={"Phone"}
                           className={"input"}/>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}
                           placeholder={"Email"}
                           className={"input"}/>
                    <button className={"button_primary"} onClick={sendForm}>
                        {
                            loading ? (
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <span style={{marginRight: "10px"}}>Loading</span>
                                    <ClipLoader size={18} color={"white"} speedMultiplier={0.5}/>
                                </div>
                            ) : (
                                <>
                                    Send
                                    <PaperAirplaneIcon/>
                                </>
                            )
                        }

                    </button>
                </div>
            </div>
        </div>
    )
}