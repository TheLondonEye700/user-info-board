import React from "react";
import {Link } from "react-router-dom";
import styles from './Button.module.css'

const Button = ({ id }) => {
    return (
            <Link to={`/users/${id}`}>
                <button className={styles.btn} type="button">MORE DETAILS</button>
            </Link>
    )
}

export default Button; 