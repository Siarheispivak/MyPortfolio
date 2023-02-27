import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Welcome} from "./components/welcome/Welcome";
import {WhatIDo} from "./components/whatIDo/WhatIDo";
import {Resume} from "./components/resume/Resume";
import {MyWork} from "./components/myWork/MyWork";
import {PersonalInfo} from "./components/personalInfo/personalInfo";
import {Footer} from "./components/footer/Footer";
import {useInView} from "react-intersection-observer";
import {BurgerMenu} from "./components/elements/burgerMenu/BurgerMenu";
import {Menu} from "./components/elements/menu/Menu";


function App() {
    const { ref:headerRef, inView:myElementIsVisible} = useInView({
        /* Optional options */
        initialInView:false,
    });

    return (
        <div className="App">
            <div ref={headerRef} className={''}>
                <Header inView={myElementIsVisible}/>
            </div>
            {!myElementIsVisible
            ?  <div className={`${!myElementIsVisible ? 'sticky' : ''}`}>
                    <Header inView={myElementIsVisible}/>
                </div>
                : ''
            }

            <Welcome/>
            <AboutMe/>
            {/*<WhatIDo/>*/}
            {/*<Resume/>*/}
            {/*<MyWork/>*/}
            {/*<PersonalInfo/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
