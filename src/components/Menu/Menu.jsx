"use client"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css"
import { getMenuStatus, getMenu } from "../../redux/slices/menuSlice";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import Link from 'next/link';
import Categories from "../Categories/Categories";
import { setSelectedMenu } from "@/redux/slices/citySlice";

function Menu() {

    const menuItems = useSelector((state) => state.menu)
    const [navChilds, setNavChilds] = useState()
    const dispatch = useDispatch()
    const menuStatus = useSelector(getMenuStatus)
    const elRef = useSmoothScroll();
    const selectedCity = useSelector((state) => state.city.selectedCityTitle)
    const selectedItemId = useSelector((state) => state.city.selectedMenu)

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    return (
        <div>
            <nav className={style.mainContainerNav}>
                <div className={style.navMenu} ref={elRef} >
                    {
                        menuItems.menu.data?.map((item) => {
                            return (
                                <div
                                    className={style.menuDivs}
                                    key={item.id}
                                    onClick={() => {
                                        setNavChilds(item.childs)
                                        dispatch(setSelectedMenu(item.alias))
                                    }}
                                >
                                    <Link className={style.link_style} href={`/${selectedCity}/${item.alias}`}>
                                        <div
                                            className={selectedItemId === item.alias ? style.selectItem : style.menuItems}
                                        >{item.title}
                                        </div  >
                                        <div className={style.containerSpan} >
                                            <div className={selectedItemId === item.alias ? style.selectMenuSpan : style.menuSpan} />
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </nav>
            <div className={style.navCategories} >
                <Categories childs={navChilds} />
            </div>
        </div>
    )
}

export default Menu