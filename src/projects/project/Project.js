import React from 'react'
import classes from './Project.module.css';

export function Project(props) {
    return (
        <div className={classes.project}>
            <div className={classes.background}>
                <div className={classes.link}>
                    <span>View</span>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}