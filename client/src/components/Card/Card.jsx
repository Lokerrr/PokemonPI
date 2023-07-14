import React from "react";
import styles from "./Card.module.css"

export default function Card ({name, img, type, id}){
    return (
        <div key={id} className={styles.card}>
            <div className={styles.div}>
                <h3>{name}</h3>
                <img className={styles.cardImg} src={img} alt={name} />
                <div className={styles.type}>
                    {type?.map(t => <h5>{t.name}</h5>)}
                </div>
            </div>
        </div>
    )
}