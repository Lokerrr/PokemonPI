import React from "react";
import styles from "./Card.module.css"
import {Link} from "react-router-dom"
export default function Card ({name, img, types, id, attack}){
    return (
        <div className={styles.card}>
            <div className={styles.cd}>
                <h3>{name}</h3>
                <Link to={`/pokemon/${id}`}>
                <img className={styles.cardImg} src={img} alt={name} />
                </Link>
                <label>Attack: {attack}</label>
                <div className={styles.tipes}>
                    {types?.map(t => <h3>{t}</h3>)}
                </div>
            </div>
        </div>
    )
}