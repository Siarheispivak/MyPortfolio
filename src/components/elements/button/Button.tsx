import React from 'react';
import style from './Button.module.css'

type ButtonType = {
    title:string
    callBack:()=>void
    style?:string
}

export const Button = (props:ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div className={style.buttonContainer}>

            {props.style
                ?<button className={`${style[props.style]}`} onClick={onClickHandler}>{props.title}</button>
                : <button className={`${style.button}`} onClick={onClickHandler}>{props.title}</button>
            }
        </div>
    );
};

