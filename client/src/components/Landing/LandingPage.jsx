import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage(){
    return (
        <div className={styles.container}>
            <Link to='/home'>
                <div>
                <button className={styles.button}></button>
                </div>
            </Link>
        </div>
    )
}