import React from 'react';
import style from './AboutMe.module.css'
import {Button} from "../button/Button";
export const AboutMe = () => {
    return (
        <div className={style.aboutMe}>
            <div className={style.container}>
                <h2>Know Me More</h2>
                <div className={style.innerContainer}>
                    <div className={style.description}>
                        <h3>I'm Siarhei Spivak, a web developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aut deserunt dignissimos dolorum ducimus eos ex,
                            excepturi impedit iste laborum, maiores minima numquam obcaecati,
                            omnis placeat possimus provident repellat reprehenderit vitae. </p>
                    </div>
                    <div className={style.personalInfo}>
                        <div className={style.personalInfoInner}>
                            <ul className={style.info}>
                                <li><span>Name:</span>Siarhei Spivak</li>
                                <li><span>Email:</span>Siarheispivak@gmail.com</li>
                                <li><span>Age:</span>29</li>
                                <li><span>From:</span>Republic of Belarus,Minsk</li>
                            </ul>
                        </div>
                        <Button title={'Download CV'} callBack={()=>{}}/>
                    </div>

                </div>

            </div>
        </div>
    );
};

