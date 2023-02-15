import React from 'react';
import style from './Skills.module.css'
export const Skills = () => {
    return (
<div className={style.skills}>
    <h2 className={style.title}>PROPS.TITLE</h2>
    <div className={style.progressBox}>
        <progress max="100" value="80"></progress>
    </div>
</div>

    );
};
