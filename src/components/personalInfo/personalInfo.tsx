import React from 'react';
import style from './PersonalInfo.module.css'
import {Button} from "../elements/button/Button";
import {useForm} from "react-hook-form";

export const PersonalInfo = () => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
        reset();
    }
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
                            <span className={style.pic}><a href="http://surl.li/fapga" target="_blank"><img
                                src="https://surl.li/faozg"></img></a></span>
                            <span className={style.pic}><a href="http://surl.li/fapco" target="_blank"><img
                                src="http://surl.li/fapbv"></img></a></span>
                            <span className={style.pic}><a href="http://surl.li/faphc" target="_blank"><img
                                src="http://surl.li/fapby"></img></a></span>
                        </div>
                    </div>
                </div>


                <div className={style.note}>
                    <h2 className={style.noteTitle}>SEND ME A NOTE</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.flexContainer}>
                        <div className={style.firstRow}>
                            <label>
                                FirstName:
                                <input className={`${style.name} ${style.flexInner}`}
                                       {...register('firstName', {
                                           // required:'The field is mandatory!',
                                           required: true,
                                           minLength: {
                                               value: 5,
                                               message: 'At least should be 5 letters.'
                                           }
                                       })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.firstName && <p>Fill this form correct</p>}
                                {/*{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}*/}
                            </div>

                            <label>
                                LastName:
                                <input className={`${style.email} ${style.flexInner}`}
                                       {...register('lastName', {
                                           // required:'The field is mandatory!',
                                           required: true,
                                           minLength: {
                                               value: 3,
                                               message: 'At least should be 3 letters.'
                                           }
                                       })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.lastName && <p>Fill this form correct</p>}
                                {/*{errors?.firstName && <p>{errors?.lastName?.message || 'Error!'}</p>}*/}
                            </div>
                        </div>


                        <label>
                            Message:
                            <input className={`${style.description} ${style.flexInner}`}
                                   {...register('yourMessage', {
                                       // required:'The field is mandatory!',
                                       required: true,
                                       minLength: {
                                           value: 3,
                                           message: 'At least should be 3 letters.'
                                       }
                                   })}
                            />
                        </label>
                        <div style={{height: 40}}>
                            {errors?.yourMessage && <p>Fill this form correct</p>}
                            {/*{errors?.yourMessage && <p>{errors?.yourMessage?.message || 'Error!'}</p>}*/}
                        </div>


                    </form>
                    <Button title={'Send Message'} callBack={() => {
                    }} style={'fullButton'}/>
                </div>
            </div>
        </div>
    );
};

