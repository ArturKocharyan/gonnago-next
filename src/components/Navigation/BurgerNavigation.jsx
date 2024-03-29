
import React, {useState} from "react";
import style from "./style.module.css";
const DrawerCitiesLazy = React.lazy(() => import("./DrawerCities/DrawerCtits"));
import DrawerLang from "./DrawerLang/DrawerLang";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function BurgerNavigation() {
    const [mobailMenu, setMobailMenu] = useState(false);
    return (
        <>
            <div
                onClick={() => setMobailMenu(!mobailMenu)}
                className={style.burgerMenu}
            >
                <span>{!mobailMenu ? <RxHamburgerMenu /> : <HiOutlineMenuAlt3 />}</span>
            </div>
            {mobailMenu === true && (
                <div className={style.menuBody}>
                    <div className={style.citiesMenu}>
                        <DrawerCitiesLazy />
                    </div>
                    <div className={style.langMenu}>
                        <DrawerLang />
                    </div>

                    <div className={style.singContainer}>
                        <button>Sing In</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default BurgerNavigation