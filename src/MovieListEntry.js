import React from "react";

var MovieListEntry = (props) => {
	return (
		<div className = "movie-list-entry">{props.movie.title}</div>
	)
};

export default MovieListEntry;