import React from 'react';
import {ResumeElement} from "../elements/resumeElement/ResumeElement";
import style from './Resume.module.css'
import {Skill} from '../elements/skills/Skills';
import {Button} from "../elements/button/Button";

export const Resume = () => {
    return (
        <div className={style.resume}>
            <h2 className={style.mainTitle}>RESUME</h2>
            <h2 className={style.absolute}>SUMMARY</h2>
            <div className={style.container}>
                <div className={style.education}>
                    <h2 className={style.title}>My Education</h2>
                    <ResumeElement years={'2010-2014'} specialization={'Secretary-referent'} company={'Linguistic and Humanities College'} description={'Management Documentation'}/>
                    <ResumeElement years={'2014-2019'} specialization={'English Teacher'} company={'Minsk State Linguistic University'} description={'Faculty of English'}/>
                    <ResumeElement years={'15 September 2020'} specialization={'TEFL/TESOL'} company={'Global Language Training'} description={'MASTER TEFL/TESOL COURSE'}/>
                    <ResumeElement years={'2021'} specialization={'Front-end'} company={'BELHARD'} description={'Modern Front-End using JavaScript and HTML5'}/>
                    <ResumeElement years={'????'} specialization={'************'} company={'********'} description={'Coming Soon...'}/>


                </div>
                <div className={style.experience}>
                    <h2 className={style.title}>My Experience</h2>
                    <ResumeElement years={'2012-2014'} specialization={'Security'} company={'Kindergarten No570'} description={'Protection of the kindergarten territory'}/>
                    <ResumeElement years={'2014 – 01.11.2016'} specialization={'Inspector of Aviation Security '} company={'National Airport Minsk'} description={'Prevention of acts of unlawful interference in civil aviation. Verification of documents, baggage. Knowledge of using a detector of explosives and X-ray machine.\n' +
                        'As well as profiling.'}/>
                    <ResumeElement years={'08.11.2016/09.11.2017'} specialization={'Receptionist'} company={'Ar - Rayyan Hotel Doha - Curio a collection by Hilton'} description={'Modern Front-End using JavaScript and HTML5'}/>
                    <ResumeElement years={'01.02.2018/still working in this area'} specialization={'Cabin Attendant'} company={'Belavia - Belarusian Airlines'} description={'Ensuring safety on board the aircraft. Preventing acts of unlawful interference in civil aviation.\n' +
                        'I work with documents for loading the aircraft, such as cargo/mail manifests, weapons acts, dangerous goods acts, luggage statements, passenger information list, load sheet, airway bills, notification to Captain as well as food invoices etc.\n'}/>
                </div>
            </div>
            <h2 className={style.skills}>Skills</h2>
            <div className={`${style.container} ${style.secondContainer}`}>

                <div className={style.skillBox1}>
                    <Skill title={'HTML5'} percents={'75'}/>
                    <Skill title={'CSS/SCSS'} percents={'80'}/>
                    <Skill title={'JS'} percents={'60'}/>
                    <Skill title={'FIGMA'} percents={'60'}/>
                    <Skill title={'MATERIAL UI'} percents={'50'}/>

                </div>
                <div className={style.skillBox2}>
                    <Skill title={'REACT'} percents={'70'}/>
                    <Skill title={'TYPE SCRIPT'} percents={'80'}/>
                    <Skill title={'ENGLISH'} percents={'70'}/>
                    <Skill title={'GITHUB'} percents={'70'}/>

                </div>

            </div>
            <div className={style.container}>
                <Button title={'Download CV'} callBack={()=>{}} style={'grayButton'}/>
            </div>

        </div>
    );
};

