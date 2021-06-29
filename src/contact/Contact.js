import React from 'react'
import classes from './Contact.module.css';
import containerStyle from '../common/styles/Container.module.css'

export function Contact() {
    return (
        <div className={classes.contactBlock}>
            <div className={`${containerStyle.container} ${classes.contactContainer}`}>
                <h2>Contact me</h2>
                <form className={classes.contactForm} action="#">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={classes.textarea} rows="5"></textarea>
                </form>
                <div className={classes.send}>Send</div>
            </div>
        </div>
    );
}