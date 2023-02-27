import React, {useState} from 'react';
import style from './BurgerMenu.module.css'
import {Menu} from "../menu/Menu";
export const BurgerMenu = () => {
    const [menuActive,setMenuActive]=useState(false)
    const burgerItems = [
        {value:'Main',href:'/main'},
        {value:'Skills',href:'/resume'},
        {value:'Projects',href:'/projects'},
        {value:'Contacts',href:'/personalInfo'}
    ]
    return (
        <div className={style.burgerMenu}>
                <div className={style.burgerBtn} onClick={()=>setMenuActive(!menuActive)}>
                    <span/>
                </div>
            <Menu active={menuActive} setActive={setMenuActive} header={'Menu'} items={burgerItems}/>
        </div>
    );
};

