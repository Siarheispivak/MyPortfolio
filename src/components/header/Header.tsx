import React from 'react';
import style from './Header.module.css'
import {Nav} from "../elements/nav/Nav";

type HeaderType = {
    inView:boolean
}

export const Header = (props:HeaderType) => {
    console.log(props.inView)
    return (
        <div  className={`${style.header} ${props.inView ? '' : style.headerBg}`}>
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

