import React from 'react';
import style from './AboutMe.module.css'
import {Button} from "../elements/button/Button";
export const AboutMe = () => {
    return (
        <div className={style.aboutMe}>

            <div className={style.container}>
                    <h2>Know Me More</h2>
                <h2 className={style.absolute}>ABOUT ME</h2>
                <div className={style.innerContainer}>
                    <div className={style.description}>
                        <h3>I'm <span className={style.marker}>Siarhei Spivak,</span> a web developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aut deserunt dignissimos dolorum ducimus eos ex,
                            excepturi impedit iste laborum, maiores minima numquam obcaecati,
                            omnis placeat possimus provident repellat reprehenderit vitae. </p>
                    </div>
                    <div className={style.personalInfo}>
                        <div className={style.personalInfoInner}>
                            <ul className={style.ul}>
                                <li><span>Name: </span>Siarhei Spivak<hr className={style.hr}/></li>
                                <li><span>Email: </span><a href="mailto:Siarheispivak@gmail.ru" className={style.marker}>Siarheispivak@gmail.ru</a><hr className={style.hr}/></li>
                                <li><span>Age: </span>29<hr className={style.hr}/></li>
                                <li><span>From: </span><a href='http://surl.li/faivs' target="_blank">Belarus, Minsk</a><hr className={style.hr}/></li>
                            </ul>
                        </div>
                        <Button title={'Download CV'} callBack={()=>{}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

