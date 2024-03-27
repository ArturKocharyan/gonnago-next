"use client"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css"
import { getMenuStatus, getMenu } from "../../redux/slices/menuSlice";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import Link from 'next/link';
import Categories from "../Categories/Categories";

function Menu() {

    const menuItems = useSelector((state) => state.menu)
    const [selectItemId, setSelectItemId] = useState(1)
    const [navChilds, setNavChilds] = useState()
    const dispatch = useDispatch()
    const menuStatus = useSelector(getMenuStatus)
    const elRef = useSmoothScroll();
    const selectedCity = useSelector((state) => state.city.selectedCityTitle)

    useEffect(() => {
        if (menuStatus === 'idle') {
            dispatch(getMenu());
        }
    }, [menuStatus, dispatch]);

    useEffect(() => {
        if (menuItems.menu && menuItems.menu.data && menuItems.menu.data[0] && menuItems.menu.data[0].childs) {
            setNavChilds(menuItems.menu.data[0].childs);
        } else {
            setNavChilds([]);
        }
    }, [menuItems]);

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
                                        setSelectItemId(item.id)
                                        setNavChilds(item.childs)
                                    }}

                                >
                                    <Link className={style.link_style} href={`/${selectedCity}/${item.alias}`}>
                                        <div
                                            className={selectItemId === item.id ? style.selectItem : style.menuItems}
                                        >{item.title}
                                        </div  >
                                        <div className={style.containerSpan} >
                                            <div className={selectItemId === item.id ? style.selectMenuSpan : style.menuSpan} />
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