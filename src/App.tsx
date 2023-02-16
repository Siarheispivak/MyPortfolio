import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Welcome} from "./components/welcome/Welcome";
import {WhatIDo} from "./components/whatIDo/WhatIDo";
import {Resume} from "./components/resume/Resume";
import {MyWork} from "./components/myWork/MyWork";
import {PersonalInfo} from "./components/personalInfo/personalInfo";


function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <AboutMe/>
            <WhatIDo/>
            <Resume/>
            <MyWork/>
            <PersonalInfo/>
        </div>
    );
}

export default App;
