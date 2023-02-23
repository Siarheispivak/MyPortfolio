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
                    <span className={style.link}><a href="https://github.com/Siarheispivak"></a></span>
                    <span className={style.link}><a href="https://www.linkedin.com/in/siarhei-spivak-810b221b1/"></a></span>
                    <span className={style.link}><a href="Siarheispivak@gmail.com"></a></span>
                    <span className={style.link}><a href="Siarheispivak@gmail.com"></a></span>
            </div>
        </div>
    );
};

