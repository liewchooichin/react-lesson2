import styles from  "./MyApp.module.css";
// {`${styles}` or lib clxs
import { Genre } from "./Genre"

const descriptionRomance = "Romance films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the effectionate romantic involvement of the main characters.";

const descriptionComedy = "Comedy film is a film genre that emphasizes humor. These films are designed to amuse audiences and make them laugh.[1] Films in this genre typically have a happy ending, with dark comedy being an exception to this rule. ";

export function MyComponent(){
    return(
        <>
        <h1 className={`${styles.logo}`}>Movies</h1>
        <h2 className={styles.myItalic}>Now Showing</h2>
        <Genre 
            name="Romance"
            description={descriptionRomance}
            movieTitle1="Love Story"
            movieTitle2="Ryan's Daughter"
        ></Genre>
        <Genre 
            name="Comedy"
            description={descriptionComedy}
            movieTitle1="Dollars"
            movieTitle2="Doctor's Trouble"
        ></Genre>
        </>
    )
}

