import React, { useState } from "react";
import { Menu, Dropdown } from 'antd';
import { BsChevronDown } from "react-icons/bs";
import style from './style.module.css'



function DropDownLang() {

    const [lang, setLang] = useState("AM")

    const onClick = ({ key }) => {
        setLang(key);
    };

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="AM">AM</Menu.Item>
            <Menu.Item key="EN">EN</Menu.Item>
            <Menu.Item key="RU">RU</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown overlay={menu} trigger={['click']}>
                <div className={style.down_button} onClick={e => e.preventDefault()}>
                    <div className={style.test} >{lang}</div>
                    <div className={style.icon} ><BsChevronDown /></div>
                </div>
            </Dropdown>
        </div>
    )
}

export default DropDownLang