import React from 'react';
import style from './Header.module.css'
import {Nav} from "../elements/nav/Nav";

type HeaderType = {
    inView:boolean
}

export const Header = (props:HeaderType) => {

    return (
        <div  className={`${style.header} ${props.inView ? '' : style.headerBg}`}>
            <span className={style.myName}>Siarhei</span>
            <div className={style.container}>
                <Nav/>
            </div>
            <div className={style.networks}>
                <span className={style.pic}><a href="http://surl.li/fapco" target="_blank"><img src="http://surl.li/faspi"></img></a></span>
                <span className={style.pic}><a href="http://surl.li/fapga" target="_blank"><img src="http://surl.li/fasoz"></img></a></span>
                <span className={style.pic}><a href="http://surl.li/faphc" target="_blank"><img src="http://surl.li/faspd"></img></a></span>
            </div>
        </div>
    );
};

