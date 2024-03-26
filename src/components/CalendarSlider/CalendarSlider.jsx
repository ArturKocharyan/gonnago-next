import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import style from "./style.module.css"
import useSmoothScroll from "../../hooks/useSmoothScroll";
import generateCalendar from "../../hooks/useGetData";

function CalendarSlider () {
    const elRef = useSmoothScroll()
    const calendarData = generateCalendar()
    console.log(calendarData)


    return(
        <div className={style.main_container} >
            <div className={style.calendar_container}  >
            <div className={style.slider_buttons} > <button> <IoIosArrowBack /></button> </div>
            <div className={style.days_container} ref={elRef} >
            {
                [].map((item) => {
                    return(
                        <div className={style.days_boxes} key={Math.random()} > {item}  </div>
                    )
                })
            }
            </div>
            <div className={style.slider_buttons} > <button><IoIosArrowForward /></button></div>
            </div>
        </div>
    )
}

export default CalendarSlider