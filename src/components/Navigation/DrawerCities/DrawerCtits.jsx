import React, { useState, useEffect } from "react";
import { Drawer } from 'antd';
import style from "./style.module.css"
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import headerCities from "../../../assets/staticCities";
import useGroupByFirstLetter from "../../../hooks/useGroupByFirstLetter";
import { useDispatch } from "react-redux";
import { setSelectedCityTitle } from "@/redux/slices/citySlice";

function DrawerCities({ list }) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [title, setTitle] = useState(headerCities[0].title);
    const citiesData = list.cities.data;
    const dispatch = useDispatch()
    const groupedCities = useGroupByFirstLetter(citiesData);

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
                                <span><AiOutlineCheck /></span>{item.title}
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
                                    {city.title}
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