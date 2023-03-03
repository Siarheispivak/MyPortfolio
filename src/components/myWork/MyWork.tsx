import React from 'react';
import style from './MyWork.module.css';
export const MyWork = () => {
    return (
        <div className={style.myWork}>
            <h2 className={style.title}>My Work</h2>

            <div className={style.container}>
                <div className={`${style.box1} ${style.box}`}>1</div>
                <div className={`${style.box2} ${style.box}`}>2</div>
                <div className={`${style.box3} ${style.box}`}>3</div>

            </div>
        </div>
    );
};

