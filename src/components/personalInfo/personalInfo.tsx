import React from 'react';
import style from './PersonalInfo.module.css'
import {Button} from "../button/Button";
export const PersonalInfo = () => {
    return (
        <div className={style.personalInfo}>
             <div className={style.title}>Get in Touch</div>
            <div className={style.container}>
                <div className={style.info}>
                    <div className={style.contacts}>
                        <h2 className={style.address}>ADDRESS</h2>
                        <p>4th Floor, Plot No.22,
                            145 Murphy Canyon Rd.
                            San Diego CA 2028</p>
                    </div>

                    <div className={style.phoneAndEmail}>
                        <span className={style.phone}>+375(29)5648538</span>
                        <span className={style.email}>Siarheispivak@gmail.com</span>
                    </div>

                    <div className={style.followMe}>
                        <h2 className={style.followTitle}>FOLLOW ME</h2>
                        <div className={style.networks}>
                            <span className={'github'}></span>
                            <span className={'google'}></span>
                            <span className={'linkedIn'}></span>
                            <span className={'VK'}></span>
                        </div>
                    </div>
                </div>


                <div className={style.note}>
                    <h2 className={style.noteTitle}>SEND US A NOTE</h2>
                    <div className={style.gridContainer}>
                        <div className={style.name}>Name</div>
                        <div className={style.email}>email</div>
                        <div className={style.description}>description</div>
                    </div>
                    <Button title={'Send Message'} callBack={()=>{}}/>
                </div>


            </div>
        </div>
    );
};

