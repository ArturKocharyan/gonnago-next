"use client"

import React, {useState } from "react";
import logo from "../../assets/img/image2.svg";
import style from "./style.module.css";
import DropDownLang from "./DropDownLang/DropDownLang";
import CitesDropDown from "./CitesDropDown/CitesDropDown";
import { RxHamburgerMenu } from "react-icons/rx";
import DrawerLang from "./DrawerLang/DrawerLang";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import DrawerSearch from "./DrawerSearch/DrawerSearch";
const DrawerCitiesLazy = React.lazy(() => import("./DrawerCities/DrawerCtits"));
import Image from "next/image";
import SearchInput from "./SearchInput/SerachInput";


function Navigation() {
  const [mobailMenu, setMobailMenu] = useState(false);

  return (
    <header className={style.mainContainer}>
      <div className={style.iconContainer}>
        <div className={style.icon}>
          <Image src={logo} alt="Logo" />
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
      <div
        onClick={() => setMobailMenu(!mobailMenu)}
        className={style.burgerMenu}
      >
        <span>{!mobailMenu ? <RxHamburgerMenu /> : <HiOutlineMenuAlt3 />}</span>
      </div>
      {mobailMenu === true && (
        <div className={style.menuBody}>
          <div className={style.citiesMenu}>
            <DrawerCitiesLazy  />
          </div>
          <div className={style.langMenu}>
            <DrawerLang />
          </div>

          <div className={style.singContainer}>
            <button>Sing In</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navigation;
