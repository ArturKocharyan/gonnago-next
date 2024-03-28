import React, {useState, useEffect} from "react";
import style from "./style.module.css"
import { RiCloseCircleFill } from "react-icons/ri";
import search from "../../../assets/img/Search2.svg";
import Image from "next/image";

function SearchInput() {

    const [inputValue, setInputValue] = useState("");
    const [inputIsEmpty, setInputIsEmpty] = useState(false);

    useEffect(() => {
        inputValue.length !== 0 ? setInputIsEmpty(true) : setInputIsEmpty(false);
      }, [inputValue]);


    return (
        <div className={style.searchContainer}>
            <span>
                <Image src={search} alt="search" />
            </span>
            <input
                placeholder="MOVE"
                value={inputValue}
                onChange={(e) => {
                    e.preventDefault();
                    setInputValue(e.target.value);
                }}
            />
            <span
                onClick={(e) => {
                    e.preventDefault();
                    setInputValue("");
                }}
                className={!inputIsEmpty ? style.closeSpanHied : style.closeSpan}
            >
                <RiCloseCircleFill />
            </span>
        </div>
    )
}

export default SearchInput