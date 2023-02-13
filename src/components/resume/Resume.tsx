import React from 'react';
import {ResumeElement} from "../elements/resumeElement/ResumeElement";
import style from './Resume.module.css'
export const Resume = () => {
    return (
        <div className={style.resume}>
            <div className={style.container}>
                <ResumeElement/>
            </div>
        </div>
    );
};

