import React, {useState} from 'react';
import style from './Welcome.module.css'
import {Button} from "../elements/button/Button";

export const Welcome = () => {

    return (
        <div className={style.welcomeSection}>
{/*<BackgroundVideo/>*/}
            <div className={style.container}>
                <div className={style.mainInfo}>

                    <div className={style.info}>
                        <span className={style.greeting}>Welcome</span>
                        <div className={style.text}>I'm Siarhei Spivak.</div>
                        <span className={style.address}>Based in Belarus,Minsk.</span>
                    </div>
                    <Button callBack={()=>{
                        console.log('hire Me')}} title={'Hire Me'}/>
                </div>
            </div>
        </div>
    );
};




//
// <div className={style.typewriter}>
//     <span>Welcome</span>
//     <h1>I'm Siarhei Spivak.</h1>
//     <span>Based in Belarus,Minsk.</span>
// </div>
//

// export const BackgroundVideo = () => {
//     // const videoSource = 'http://www.w3schools.com/tags/movie.mp4';
//     const videoSource = '../../assets/matrix.mp4';
//
//     return(
//         <div>
//                 <div className={style.Container}>
//                     <video autoPlay loop muted className={style.Video}>
//                     <source src={videoSource} type="video/mp4"/>
//                     </video>
//
//                 </div>
//         </div>
//     )
// }
