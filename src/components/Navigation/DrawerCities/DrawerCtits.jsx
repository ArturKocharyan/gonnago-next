import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from 'antd';
import style from "./style.module.css"
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import headerCities from "../../../assets/staticCities";
import useGroupByFirstLetter from "../../../hooks/useGroupByFirstLetter";
import { setSelectedCityTitle } from "@/redux/slices/citySlice";
import Link from "next/link";


function DrawerCities({ list }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [title, setTitle] = useState(headerCities[0].title);
    const citiesData = list.cities.data;
    const dispatch = useDispatch()
    const groupedCities = useGroupByFirstLetter(citiesData);
    const cityTitle = useSelector((state) => state.city.selectedCity)
    const selectedMenu = useSelector((state) => state.city.selectedMenu)

    const filteredCities = Object.entries(groupedCities).reduce(
        (acc, [letter, cities]) => {
            const filtered = cities.filter((city) =>
                city.alias.toLowerCase().includes(inputValue.toLowerCase())
            );
            if (filtered.length > 0) {
                acc[letter] = filtered;
            }
            return acc;
        },
        {}
    );

    useEffect(() => {
        inputValue.length !== 0 ? setIsActive(true) : setIsActive (false)
      }, [inputValue]);

    return (
        <div className={style.mainContainer}>
            <div className={style.btn} type="primary" onClick={() => setOpen(!open)}>
                <span>{title}</span><span><BsChevronDown /></span>
            </div>
            <Drawer
                title="Քաղաք"
                placement={"bottom"}
                closable={false}
                onClose={() => setOpen(!open)}
                open={open}
                key={"bottom"}
                height={"90%"}
                width={"100%"}
                className={style.drawerCitiesStyle}
            >
                <div className={style.searchContainer}>
                    <span className={style.loopSpan}>
                        <BsSearch />
                    </span>
                    <input
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <span
                        onClick={(e) => {
                            e.preventDefault();
                            setInputValue("");
                        }}
                        className={isActive ? style.closeSpanHied : style.closeSpan}
                    >
                        <AiFillCloseCircle />
                    </span>
                </div>
                <div className={style.bottomContainer}>
                    {headerCities.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    setTitle(item.title);
                                    setOpen(!open);
                                    dispatch(setSelectedCityTitle(item.alias))
                                }}
                                className={item.title === title ? style.headerDivsCheck : style.headerDivs}
                                key={item.id}
                            >
                                <span><AiOutlineCheck /></span><Link href={`/${item.alias}/${selectedMenu}`} className={style.link_style} >{item.title}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className={style.listContainer}>
                    {Object.entries(filteredCities)?.map(([letter, cities]) => (
                        <ul key={letter} className={style.ul_class}>
                            <li className={style.upperLetter}>{letter}</li>
                            {cities?.map((city) => (
                                <li
                                    onClick={() => {
                                        setTitle(city.title);
                                        setOpen(!open);
                                        dispatch(setSelectedCityTitle(city.alias))
                                    }}
                                    style={{ cursor: "pointer", marginTop: "2px" }}
                                    key={city.id}
                                >
                                    <Link href={`/${city.alias}/${selectedMenu}`} className={style.link_style}  >{city.title}</Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </Drawer>

        </div>
    )
}

export default DrawerCities