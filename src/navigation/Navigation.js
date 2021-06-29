import React from 'react'
import classes from './Navigation.module.css';

export function Navigation() {
    return (
        <div className={classes.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact me</a>
        </div>
    );
}