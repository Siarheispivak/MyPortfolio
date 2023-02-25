import React, { useState} from 'react';
import style from './Burger.module.css'

export const Burger = () => {

    // const [collapsed, setCollapsed] = useState(true)
    const [active, setActive] = useState('notActive')
    const [disappear, setDisappear] = useState('appear')
    // const openClose = () => {
    //     setCollapsed(!collapsed)
    //     // console.log(collapsed)
    // }
    console.log(active)
const activate = () => {
    setActive('active')
    setDisappear('disappear')

}
const disActivate = () => {
    setActive('notActive')
    setDisappear('appear')

}
    return (
        <div className={style.burgerMenu}>

                 <span className={`${style.menuSpan} ${style[disappear]}`} onClick={activate}>MENU</span>
                 <div className={`${style.nav} ${style[active]}`} onClick={disActivate}>
                    <ul className={style.menu}>
                        <li className={style.item}><a href="">Main</a></li>
                        <li className={style.item}><a href="">Skills</a></li>
                        <li className={style.item}><a href="">Projects</a></li>
                        <li className={style.item}><a href="">Contacts</a></li>
                    </ul>
                </div>
        </div>
    );

};


// const [collapsed, setCollapsed] = useState(true)
// const openClose = () => {
//     setCollapsed(!collapsed)
//     console.log(collapsed)
// }
//
// return (
//     <div className={style.nav} onClick={openClose}>
//         {collapsed ? <span className={style.menu}>MENU</span> : <Nav/>}
//     </div>
// );