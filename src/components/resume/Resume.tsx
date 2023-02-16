import React from 'react';
import {ResumeElement} from "../elements/resumeElement/ResumeElement";
import style from './Resume.module.css'
import {Skills} from '../elements/skills/Skills';
import {Button} from "../button/Button";

export const Resume = () => {
    return (
        <div className={style.resume}>
            <div className={style.container}>
                <div className={style.education}>
                    <h2 className={style.title}>My Education</h2>
                    <ResumeElement/>
                    <ResumeElement/>
                    <ResumeElement/>
                </div>
                <div className={style.experience}>
                    <h2 className={style.title}>My Experience</h2>
                    <ResumeElement/>
                    <ResumeElement/>
                    <ResumeElement/>
                </div>
            </div>
            <h2 className={style.skills}>Skills</h2>
            <div className={`${style.container} ${style.secondContainer}`}>

                <div className={style.skillBox1}>
                    <Skills/>
                </div>
                <div className={style.skillBox2}>
                    <Skills/>
                </div>

            </div>
            <div className={style.container}>
                <Button title={'Download CV'} callBack={()=>{}}/>
            </div>

        </div>
    );
};

