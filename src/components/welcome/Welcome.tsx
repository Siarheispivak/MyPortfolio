import React from 'react';
import style from './Welcome.module.css'
import {Button} from "../button/Button";

export const Welcome = () => {
    return (
        <div className={style.welcomeSection}>
            <div className={style.container}>
                <div className={style.mainInfo}>
                    <span>Welcome</span>
                    <h1>Main Text</h1>
                    <span>Based in Belarus,Minsk.</span>
                    <Button callBack={()=>{
                        console.log('hire Me')}} title={'Hire Me'}/>
                </div>
            </div>
        </div>
    );
};

