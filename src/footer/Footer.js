import React from 'react'
import classes from './Footer.module.css';
import containerStyle from '../common/styles/Container.module.css'

export function Footer() {
    return (
        <div className={classes.footerBlock}>
            <div className={`${containerStyle.container} ${classes.footerContainer}`}>
                <h2>Ivan Kishko</h2>
                <div className={classes.socials}>
                    <div className={classes.socialLink}></div>
                    <div className={classes.socialLink}></div>
                    <div className={classes.socialLink}></div>
                    <div className={classes.socialLink}></div>
                </div>
                <span className={classes.rights}>&#169; All rights reserved</span>
            </div>
        </div>
    );
}