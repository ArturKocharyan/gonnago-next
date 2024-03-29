"use client"

import React from "react";
import logo from "../../assets/img/image2.svg";
import style from "./style.module.css";
import DropDownLang from "./DropDownLang/DropDownLang";
import CitesDropDown from "./CitesDropDown/CitesDropDown";
import DrawerSearch from "./DrawerSearch/DrawerSearch";
import Image from "next/image";
import SearchInput from "./SearchInput/SerachInput";
import BurgerNavigation from "./BurgerNavigation";

function Navigation() {

  return (
    <header className={style.mainContainer}>
      <div className={style.iconContainer}>
        <div className={style.icon}>
          <Image src={logo} alt="Gonnago Logo" />
        </div>
        <div className={style.countriesContainer}>
          <CitesDropDown />
        </div>
      </div>
      <SearchInput />
      <div className={style.accountContainer}>
        <div className={style.lengContainer}>
          <DropDownLang />
        </div>
        <div className={style.singContainer}>
          <button>Sing In</button>
        </div>
      </div>

      <span className={style.alterSearch}>
        <DrawerSearch />
      </span>
      <div className={style.burgerMenu} ><BurgerNavigation /></div>
    </header>
  );
}

export default Navigation;
