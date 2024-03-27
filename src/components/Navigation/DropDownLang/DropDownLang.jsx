import React, { useState } from 'react';
import { Menu, Popover } from 'antd';
import { BsChevronDown } from 'react-icons/bs';
import style from './style.module.css'; // Assuming you have a CSS module for styles

function DropDownLang() {
    const [lang, setLang] = useState("AM");

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
            <Popover
                content={menu}
                trigger="click"
                placement="bottom"
                overlayClassName={style.popover}
            >
                <div className={style.down_button}>
                    <div className={style.test}>{lang}</div>
                    <div className={style.icon}><BsChevronDown /></div>
                </div>
            </Popover>
        </div>
    );
}

export default DropDownLang;
