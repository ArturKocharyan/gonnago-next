import React, { useEffect, useState } from "react";
import { Popover, Divider } from "antd";
import style from "./style.module.css";
import { CgClose } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import headerCities from "../../../assets/staticCities";
import useGroupByFirstLetter from "../../../hooks/useGroupByFirstLetter";

function CitesDropDown({ list }) {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState(headerCities[0].title);
  const [visible, setVisible] = useState(false);
  const citiesData = list.cities.data;
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
                      }}
                      className={item.title === title ? style.headerDivsCheck : style.headerDivs}
                      key={item.id}
                    >
                      <span><AiOutlineCheck /></span>{item.title}
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
          </div>
        }
        trigger="click"
        open={visible}
        onOpenChange={setVisible}
      >
        <div className={style.citiesBtn}>
          {title}
          <span>
            <BsChevronDown />
          </span>
        </div>
      </Popover>
    </div>
  );
}

export default CitesDropDown;
