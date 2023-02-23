import React from 'react';
import style from './Skills.module.css'

type SkillType = {
    title:string
    percents:string
}

export const Skill = (props:SkillType) => {
    return (
<div className={style.skill}>
    <div className={style.skillInfo}>
        <h2 className={style.title}>{props.title}</h2>
        <span className={style.percents}>{`${props.percents} %`}</span>
    </div>

    <div className={style.progressBox}>
        <progress max="100" value={props.percents}></progress>
    </div>
</div>

    );
};
