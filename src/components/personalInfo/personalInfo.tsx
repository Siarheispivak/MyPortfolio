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
                        <span className={style.city}>
                            <a href='http://surl.li/faivs' target="_blank">Belarus, Minsk</a>
                            <hr/>
                        </span>

                    </div>

                    <div className={style.phoneAndEmail}>
                        <span className={style.phone}>
                            <a href="tel:+375295648538">+375295648538</a>
                            <hr/>
                        </span>
                        <span className={style.email}>
                            <a href="mailto:Siarheispivak@gmail.ru">siarheispivak@gmail.ru</a>
                             <hr/>
                        </span>

                    </div>

                    <div className={style.followMe}>
                        <h3 className={style.followTitle}>FOLLOW ME</h3>
                        <div className={style.networks}>
                            <span className={style.pic}><a href="http://surl.li/fapga" target="_blank"><img src="https://surl.li/faozg"></img></a></span>
                            <span className={style.pic}><a href="http://surl.li/fapco" target="_blank"><img src="http://surl.li/fapbv"></img></a></span>
                            <span className={style.pic}><a href="http://surl.li/faphc" target="_blank"><img src="http://surl.li/fapby"></img></a></span>
                        </div>
                    </div>
                </div>


                <div className={style.note}>
                    <h2 className={style.noteTitle}>SEND ME A NOTE</h2>
                    <form className={style.gridContainer}>
                        <input type="text" className={`${style.name} ${style.gridInner}`}/>
                        <input type="email" className={`${style.email} ${style.gridInner}`}/>
                        <input type="text" className={`${style.description} ${style.gridInner}`}/>
                    </form>
                    <Button title={'Send Message'} callBack={()=>{}} style={'fullButton'}/>
                </div>
            </div>
        </div>
    );
};

