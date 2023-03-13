import React from 'react';
import style from './BackgroundVideo.module.css'
import videoBg from '../../assets/videoBgSpace.mp4';


console.log(typeof videoBg)

const BackgroundVideo = () => {

    return (
        <div className={style.videoBgContainer}>
            <video className={style.videoBg} src={videoBg} autoPlay muted loop></video>
        </div>
    );
};

export default BackgroundVideo;