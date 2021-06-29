import React from 'react'
import classes from './Main.module.css';
import containerStyle from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={classes.mainBlock}>
            <div className={containerStyle.container}>
                <div className={classes.greeting}>
                    <span>Hello there!</span>
                    <h1>I am Ivan Kishko</h1>
                    <p>I am React.js frontend developer</p>
                </div>
                <div className={classes.photo}>

                </div>
            </div>
        </div>
    );
}