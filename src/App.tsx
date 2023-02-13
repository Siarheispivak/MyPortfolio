import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/AboutMe/AboutMe";
import {Welcome} from "./components/welcome/Welcome";
import {WhatIDo} from "./components/services/WhatIDo";
import {Resume} from "./components/resume/Resume";


function App() {
    return (
        <div className="App">
            <Header/>
            <Welcome/>
            <AboutMe/>
            <WhatIDo/>
            <Resume/>
        </div>
    );
}

export default App;
