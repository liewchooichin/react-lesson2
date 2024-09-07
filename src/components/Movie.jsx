import styles from  "./MyApp.module.css";
import PropTypes from "prop-types";


export function Movie({title, year}){

    return(
        <div className={styles.card}>
            {title}
            <hr/>
            {year}
        </div>
    )
}