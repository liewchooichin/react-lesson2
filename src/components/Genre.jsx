import styles from  "./MyApp.module.css";
import PropTypes from "prop-types";
import { Movie } from "./Movie";


Genre.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    movieTitle1: PropTypes.string,
    movieTitle2: PropTypes.string
}

export function Genre(
    {name, description, movieTitle1, movieTitle2})
{

    return(
        <>
        <h2>{name}</h2>
        <p>{description}</p>
        <Movie title={movieTitle1} year="1970"></Movie>
        <Movie title={movieTitle2} year="1970"></Movie>
        </>
    )
}