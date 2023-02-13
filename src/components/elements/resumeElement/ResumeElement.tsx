import React from 'react';
import style from './ResumeElement.module.css'
export const ResumeElement = () => {
    return (
        <div className={style.resumeElement}>
            <span className={style.years}>2014 - 2017</span>
            <h2 className={style.title}>Computer Science</h2>
            <span className={style.company}>International University</span>
            <p className={style.description}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
        </div>
    );
};

