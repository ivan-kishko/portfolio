import React from 'react'
import classes from './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Remote} from "./remote-work/Remote";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className={classes.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
