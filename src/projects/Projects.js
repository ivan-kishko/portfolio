import React from 'react'
import classes from './Projects.module.css';
import containerStyle from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


export function Projects() {
    return (
        <div className={classes.projectsBlock}>
            <div className={`${containerStyle.container} ${classes.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={classes.projects}>
                    <Project title={'social network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project title={'todo-list'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium ad deleniti explicabo fugiat\n' +
                    '    fugit impedit inventore itaque.'}/>
                    <Project title={'counter'}
                             description={'Lorem ipsum dolor sit amet.'}/>
                    <Project title={'homework-tasks'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium ad deleniti explicabo fugiat\n' +
                    '    fugit impedit inventore itaque, mollitia odit officia pariatur placeat porro tenetur vel voluptatibus! Atque,\n' +
                    '    recusandae?'}/>
                </div>
            </div>
        </div>
    );
}