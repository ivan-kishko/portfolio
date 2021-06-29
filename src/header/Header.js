import React from 'react'
import classes from './Header.module.css';
import containerStyle from '../common/styles/Container.module.css'
import {Navigation} from "../navigation/Navigation";


export function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.headerContainer}>
                <Navigation/>
            </div>
        </div>
    );
}