import React from 'react';
import style from './WhatIDo.module.css'
import {WhatIDoElement} from "../elements/whatIDoElement/WhatIDoElement";

export const WhatIDo = () => {
    return (
        <div className={style.whatIDo}>
            <h2>What I Do?</h2>
            <div className={style.container}>
                <WhatIDoElement title={'sdfsdf'} description={'sdfsdfQWSJH'}/>
                <WhatIDoElement title={'sdfsdf'} description={'sdfsdfQWSJH'}/>
                <WhatIDoElement title={'sdfsdf'} description={'sdfsdfQWSJH'}/>
                <WhatIDoElement title={'sdfsdf'} description={'sdfsdfQWSJH'}/>
                <WhatIDoElement title={'sdfsdf'} description={'sdfsdfQWSJH'}/>
                <WhatIDoElement title={'sdfsdf'} description={'sdfsdfQWSJH'}/>
            </div>
        </div>
    );
};

