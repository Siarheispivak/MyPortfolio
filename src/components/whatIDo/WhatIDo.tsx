import React from 'react';
import style from './WhatIDo.module.css'
import {WhatIDoElement} from "../elements/whatIDoElement/WhatIDoElement";

export const WhatIDo = () => {
    return (
        <div className={style.whatIDo}>
                <h2>What I Do? </h2>
            <h2 className={style.absolute}>SERVICES</h2>
            <div className={style.container}>
                <WhatIDoElement title={'Graphic Design'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}/>
                <WhatIDoElement title={'Graphic Design'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}/>
                <WhatIDoElement title={'Graphic Design'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}/>
                <WhatIDoElement title={'Graphic Design'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}/>
                <WhatIDoElement title={'Graphic Design'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}/>
                <WhatIDoElement title={'Graphic Design'} description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}/>

            </div>
        </div>
    );
};

