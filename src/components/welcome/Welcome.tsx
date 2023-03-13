import React from 'react';
import style from './Welcome.module.css'
import {Button} from "../elements/button/Button";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import BackgroundVideo from "../backgroundVideo/BackgroundVideo";

export const Welcome = () => {
    const [text] = useTypewriter({
        words: [' Siarhei Spivak', ' a Front-End Developer.'],
        loop: 0,
        // typeSpeed:80,
        // deleteSpeed:50,
        // delaySpeed:1500
    })
    return (
        <div className={style.welcomeSection}>
            <div className={style.overlay}> </div>
            <BackgroundVideo/>
            <div className={style.container}>
                <div className={style.mainInfo}>

                    <div className={style.info}>
                        <span className={style.greeting}>Welcome</span>
                        <div className={style.text}>{`I\'m${text}`}<Cursor cursorColor={'#20c997'} cursorBlinking/>
                        </div>
                        <span className={style.address}>Based in Belarus,Minsk.</span>
                    </div>
                    <Button callBack={() => {
                        console.log('hire Me')
                    }} title={'Hire Me'}/>
                </div>
            </div>
        </div>
    );
};
