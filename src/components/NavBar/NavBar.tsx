import React from 'react';
import style from './NavBar.module.scss'
import logo from './img/react-logo.svg';
import containers from '../../styles/containers.module.scss';
import Tab from "./Tab";

const NavBar = () => {
    return (
        <header className={style.headerSection}>
            <div className={containers.container}>
                <div className={style.header}>
                    <img src={logo} className={style.header__logo} alt="logo"/>
                    <nav className={style.header__nav}>
                        <Tab className={style.header__link} classActive={style.active} tabIndex={0}>СТАС 1</Tab>
                        <Tab className={style.header__link} classActive={style.active} tabIndex={1}>СТАС 2</Tab>
                        <Tab className={style.header__link} classActive={style.active} tabIndex={2}>СТАС 3</Tab>
                        <Tab className={style.header__link} classActive={style.active} tabIndex={3}>Поиск по всем</Tab>
                        <Tab className={style.header__link} classActive={style.active} tabIndex={4}>Админ</Tab>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;