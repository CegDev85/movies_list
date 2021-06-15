import React, { useState } from 'react'
import MoviesList from "../components/MoviesList"

const MoviesBox = () => {

    const [movies, setMovies] = useState(
        [{
            id:1,
            title:"Spider-man",
            url:"https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id:2,
            title:"Life Itself",
            url:"https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id:3,
            title:"The Lego Movie",
            url:"https://www.imdb.com/title/tt3513498/?ref_=rlm"
        }
    ]
    )

    return (
        <div className="movies-list">
            <MoviesList movies={movies}/>
            
        </div>
    )

}

export default MoviesBox