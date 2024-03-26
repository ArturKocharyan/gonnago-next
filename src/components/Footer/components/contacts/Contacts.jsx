import React from "react";
import style from "./style.module.css"
import Instagram from "../../../../assets/logos/Instagram";
import Twitter from "../../../../assets/logos/Twitter";
import FaceBook from "../../../../assets/logos/FaceBook";

function Contacts() {
    return (
        <div className={style.main_container} >
                <ul className={style.ul_style} >
                    <li>GonnaGo </li>
                    <li>Մեր մասին</li>
                    <li>ՀՏՀ</li>
                    <li>Գաղտնիության քաղաքականություն</li>
                    <li>Օգտվելու կանոններ</li>
                    <li>Տոմսերի վերադարձ </li>
                </ul>
                <ul>
                    <li>Գործընկերներ և Կազմակերպիչներ</li>
                    <li>Միջոցառումների կազմակերպիչների համար</li>
                    <li>Կորպորատիվ հաճախորդների համար</li>
                </ul>
                <ul>
                    <li>հեռ. և էլ. հասցե</li>
                    <li>+374 99 15 16 17</li>
                    <li>Կորպորատիվ հաճախորդների համար</li>
                </ul>
                <ul>
                    <li>Հետադարձ կապ</li>
                    <div className={style.social} >
                    <Instagram />
                    <Twitter />
                    <FaceBook />
                    </div>
                </ul>
        </div>
    )
}

export default Contacts