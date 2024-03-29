import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCity, setSelectedCityTitle } from "@/redux/slices/citySlice";
import { Popover, Divider } from "antd";
import style from "./style.module.css";
import { CgClose } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import headerCities from "../../../assets/staticCities";
import useGroupByFirstLetter from "../../../hooks/useGroupByFirstLetter";
import Link from "next/link";
import useFilteredCities from "@/hooks/useFilteredCities";
import useCities from "@/hooks/useCities";

function CitesDropDown() {
  const { citiesList } = useCities();
  const citiesData = citiesList.cities.data;
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState(headerCities[0].title);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const groupedCities = useGroupByFirstLetter(citiesData);
  const cityTitle = useSelector((state) => state.city.selectedCity)
  const selectedMenu = useSelector((state) => state.city.selectedMenu)
  const filteredCities = useFilteredCities(groupedCities, inputValue)

  useEffect(() => {
    inputValue.length !== 0 ? setIsActive(true) : setIsActive (false)
  }, [inputValue]);

  return (
    <div className={style.mainContainer} >
      <Popover
        content={
          <div className={style.citiesContainer}>
            <div className={style.titleContainer}>
              <span>
                <p>City</p>
              </span>
              <span onClick={() => setVisible(false)}>
                <CgClose />
              </span>
            </div>
            <div className={style.headerContainer}>
              <div className={style.searchContainer}>
                <span className={style.loopSpan}>
                  <BsSearch />
                </span>
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  className={style.input_style}
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
                        setVisible(false);
                        dispatch(setSelectedCityTitle(item.alias))
                        dispatch(setSelectedCity(item.title)) 
                      }}
                      className={item.title === title ? style.headerDivsCheck : style.headerDivs}
                      key={item.id}
                    >
                      <span><AiOutlineCheck /></span><Link href={`/${item.alias}/${selectedMenu}`} className={style.link_style} >{item.title}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <Divider />
            <div className={style.listContainer}>
              {Object.entries(filteredCities)?.map(([letter, cities]) => (
                <ul key={letter} className={style.ul_class} >
                  <li className={style.upperLetter}>{letter}</li>
                  {cities?.map((city) => (
                    <li
                      onClick={() => {
                        setTitle(city.title);
                        setVisible(false);
                        dispatch(setSelectedCityTitle(city.alias))
                        dispatch(setSelectedCity(city.title)) 
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
          </div>
        }
        trigger="click"
        open={visible}
        onOpenChange={setVisible}
      >
        <div className={style.citiesBtn}>
          {cityTitle}
          <span>
            <BsChevronDown />
          </span>
        </div>
      </Popover>
    </div>
  );
}

export default CitesDropDown;