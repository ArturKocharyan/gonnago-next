import React from "react";
import style from "./style.module.css"
import qr from '../../../../assets/img/download1.png'
import Image from "next/image";

function Qr() {
    return (
        <div className={style.main_container} >
            <div>
                <Image src={qr} alt="quar" />
            </div>
            <div className={style.content_container} >
                <span className={style.content} >
                    Մենք միշտ ձգտում ենք լինել նորարար և ստեղծագործ մեր աշխատանքում, իսկ մեր ամենամեծ ճանաչումը ձեր գոհունակությունը, անվտանգությունը
                </span>
                <div  >
                    <span className={style.bottom_container}>
                        Հետևեք շաբաթվա գլխավոր իրադարձություններին
                    </span>
                    <div className={style.input_container} >
                        <input />
                        <span>
                            <button className={style.button} >Բաժանորդագրվել</button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Qr