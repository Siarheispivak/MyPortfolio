import React from 'react';
import style from './WhatIDo.module.css'
import {WhatIDoElement} from "../elements/whatIDoElement/WhatIDoElement";


export const WhatIDo = () => {
    return (
        <div className={style.whatIDo}>
                <h2>What I Do? </h2>
            <h2 className={style.absolute}>SERVICES</h2>
            <div className={style.container}>
                <WhatIDoElement title={'Landing Page'} description={'Website layout with HTML/CSS/SCSS/JS.'} src={'https://www.pngitem.com/pimgs/m/519-5191896_pofolio-website-html-css-javascript-logo-png-transparent.png'}/>
                <WhatIDoElement title={'SPA'} description={'Сreate single page applications using REACT.'} src={'https://image.pngaaa.com/896/2507896-middle.png'}/>
                <WhatIDoElement title={'Coming soon...'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'} src='https://surl.li/faore'/>
                <WhatIDoElement title={'Coming soon...'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'} src='https://surl.li/faore'/>
                <WhatIDoElement title={'Coming soon...'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'} src='https://surl.li/faore'/>
                <WhatIDoElement title={'Coming soon...'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'} src='https://surl.li/faore'/>


            </div>
        </div>
    );
};

