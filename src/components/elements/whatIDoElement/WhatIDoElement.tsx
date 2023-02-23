import React from 'react';
import style from './WhatIDoElement.module.css'

type WhatIDoElementType = {
    title:string
    description:string
    src:string
}

export const WhatIDoElement = (props:WhatIDoElementType) => {
    return (
        <div className={style.WhatIDoElement}>
            <div className={style.imageContainer}>
                <div className={style.image}><img src={props.src} className={style.pallete} alt="pic"/></div>

            </div>
            <div className={style.description}>
                <span className={style.title}>{props.title}</span>
                <p className={style.about}>{props.description}</p>
            </div>
        </div>
    );
};
<div className="featured-box-icon text-primary  shadow-sm rounded bg-dark-1"><i className="fas fa-palette"></i></div>
