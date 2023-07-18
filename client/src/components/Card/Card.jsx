import React from "react";
import styles from "./Card.module.css"

export default function Card ({name, img, types, id}){
    return (
        <div key={id} className={styles.card}>
            <div className={styles.cd}>
                <h3>{name}</h3>
                <img className={styles.cardImg} src={img} alt={name} />
                <div className={styles.tipes}>
                    {types?.map(t => <h1>{t}</h1>)}
                </div>
            </div>
        </div>
    )
}