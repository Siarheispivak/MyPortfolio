import React from 'react';
import style from './PersonalInfo.module.css'
import {Button} from "../elements/button/Button";
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
                            <span className={style.github}></span>
                            <span className={style.google}></span>
                            <span className={style.linkedIn}></span>
                            <span className={style.VK}></span>
                        </div>
                    </div>
                </div>


                <div className={style.note}>
                    <h2 className={style.noteTitle}>SEND US A NOTE</h2>
                    <form className={style.gridContainer}>
                        <input type="text" className={`${style.name} ${style.gridInner}`}/>
                        <input type="email" className={`${style.email} ${style.gridInner}`}/>
                        <input type="text" className={`${style.description} ${style.gridInner}`}/>
                    </form>
                    <Button title={'Send Message'} callBack={()=>{}}/>
                </div>
            </div>
        </div>
    );
};

