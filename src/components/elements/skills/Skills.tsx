import React from 'react';
import style from './Skills.module.css'
export const Skill = () => {
    return (
<div className={style.skill}>
    <div className={style.skillInfo}>
        <h2 className={style.title}>PROPS.TITLE</h2>
        <span className={style.percents}>%</span>
    </div>

    <div className={style.progressBox}>
        <progress max="100" value="80"></progress>
    </div>
</div>

    );
};
