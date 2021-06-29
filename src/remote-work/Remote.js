import React from 'react'
import classes from './Remote.module.css';
import containerStyle from '../common/styles/Container.module.css'

export function Remote() {
    return (
        <div className={classes.remoteBlock}>
            <div className={`${containerStyle.container} ${classes.remoteContainer}`}>
                <h2>Considering options for remote work</h2>
                <div className={classes.hire}>Hire me</div>
            </div>
        </div>
    );
}