import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar (){
    return (
        <div className={styles.navbar}>
            <Link to="/home" >
                <button className={styles.button}>HOME</button>
            </Link>
            <Link to="/create">
                <button className={styles.button}>CREATE</button>
            </Link>
        </div>
    )
}