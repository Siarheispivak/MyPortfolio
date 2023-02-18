import React from 'react';
import style from './Button.module.css'

type ButtonType = {
    title:string
    callBack:()=>void
}

export const Button = (props:ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div className={style.buttonContainer}>
            <button className={style.button} onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

