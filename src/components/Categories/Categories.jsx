import React from "react";
import style from './style.module.css'
import useSmoothScroll from "../../hooks/useSmoothScroll";

function Categories ({childs}) {

    const elRef = useSmoothScroll();

    return(
        <div className={style.categoriesContainer} ref={elRef} >
            {
                childs?.map((item) => {
                    return(
                        <div key={item.id} className={style.itemsDiv} > {item.title} </div>
                    )
                })
            }
        </div>
    )
}

export default Categories