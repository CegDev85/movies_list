import React from 'react'

const Movie = ({title, key, url}) => {
    return(
        <div className="movie">
            {/* <h4>{title}</h4> */}
           <h3><a href={url}>{title}</a></h3>
        </div>
    )
}

export default Movie;