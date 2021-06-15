import Movie from "./Movie"
import React from 'react' 

const MoviesList = ({movies}) => {

    const movieNodes = movies.map((movie) => {
        return <Movie title={movie.title} key={movie.id} url={movie.url}></Movie>
    })

    return (
        <div className="movies-list">
            <h1>Movies List</h1>
            {movieNodes}

        </div>
    )

}

export default MoviesList

