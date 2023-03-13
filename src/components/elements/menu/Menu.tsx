import React from 'react';
import style from './Menu.module.css'

type ItemsType = {
    value:string
    href:string
    id:number
}
type MenuType = {
    active:boolean
    setActive:(isActive:boolean)=>void
    header: string
    items: ItemsType[]
}

export  const Menu = (props: MenuType) => {

    return (
        <div className={props.active ? `${style.menu} ${style.active}`: style.menu} onClick={()=>props.setActive(false)}>
            <div className={style.blur}>
                <div className={style.menuContent} onClick={e=>e.stopPropagation()}>
                    <div className={style.menuHeader}>{props.header}</div>
                    <ul>
                        {props.items.map(el=>
                            <li key={el.id}>
                                <a href={el.href}>{el.value}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </div>
    );
};

