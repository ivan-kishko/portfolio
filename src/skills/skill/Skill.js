import React from 'react'
import classes from './Skill.module.css';

export function Skill(props) {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}