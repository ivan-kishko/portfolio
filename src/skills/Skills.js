import React from 'react'
import classes from './Skills.module.css';
import containerStyle from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${containerStyle.container} ${classes.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={classes.skills}>
                    <Skill title={'React.js'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd'}/>
                    <Skill title={'Redux'} description={'asd asd asdasdas asdasdas dsadasd'}/>
                    <Skill title={'HTML/CSS/JS/TS'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd asd asdasda sdsd asd'}/>
                    <Skill title={'HTML/CSS/JS/TS'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd asd asdasda sdsd asd'}/>
                    <Skill title={'HTML/CSS/JS/TS'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd asd asdasda sdsd asd'}/>
                    <Skill title={'HTML/CSS/JS/TS'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd asd asdasda sdsd asd'}/>
                    <Skill title={'HTML/CSS/JS/TS'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd asd asdasda sdsd asd'}/>
                    <Skill title={'HTML/CSS/JS/TS'} description={'asd asd asdasdas asdasdas dsadasd asdasdsdasd sasdasda sadsdasdasdasdasd asd asdasda sdsd asd'}/>
                </div>
            </div>
        </div>
    );
}