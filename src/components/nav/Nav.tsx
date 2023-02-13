import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.menu}>
                <li className={style.item}><a href="">Main</a></li>
                <li className={style.item}><a href="">Skills</a></li>
                <li className={style.item}><a href="">Projects</a></li>
                <li className={style.item}><a href="">Contacts</a></li>
            </ul>
        </div>
    );
};
