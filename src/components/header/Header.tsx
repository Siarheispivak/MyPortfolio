import React from 'react';
import style from './Header.module.css'
import {Nav} from "../elements/nav/Nav";

export const Header = () => {
    return (
        <div className={style.header}>
            <span className={style.myName}>Siarhei</span>
            <div className={style.container}>
                <Nav/>
            </div>
            <div className={style.socialNetworks}>
                <span>linkedIn</span>
                <span>GitHub</span>
                <span>else</span>
            </div>
        </div>
    );
};

