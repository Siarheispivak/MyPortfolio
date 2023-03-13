import React, {useState} from 'react';
import style from './BurgerMenu.module.css'
import {Menu} from "../menu/Menu";
export const BurgerMenu = () => {
    const [menuActive,setMenuActive]=useState(false)
    const burgerItems = [
        {id:1,value:'Main',href:'/main'},
        {id:2,value:'Skills',href:'/resume'},
        {id:3,value:'Projects',href:'/projects'},
        {id:4,value:'Contacts',href:'/personalInfo'}
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

