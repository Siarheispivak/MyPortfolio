import React from 'react';
import style from './ResumeElement.module.css'

type ResumeElementType = {
    years:string
    specialization:string
    company:string
    description:string
}

export const ResumeElement = (props:ResumeElementType) => {
    return (
        <div className={style.resumeElement}>
            <span className={style.years}>{props.years}</span>
            <h2 className={style.title}>{props.specialization}</h2>
            <span className={style.company}>{props.company}</span>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

