import React from "react";
import style from "./style.module.css"
import Qr from "./components/qr/Qr";
import Contacts from "./components/contacts/Contacts";
import Bottom from "./components/bottom/Bottom";
import { Divider } from "antd";


function Footer() {
    return (
        <div className={style.main_container} >
            <div className={style.footer_container} >
                <Qr />
                <Contacts />
                <Divider />
                <Bottom />
            </div>
        </div>
    )
}

export default Footer