import React from "react";
import App from "./App"
import MovieListEntry from "./MovieListEntry";

class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        };
    }

    toggleWatched(){
    	this.setState({
    		toggle: !this.props.toggle
    	});
    }

    render(){
		return(
		<div className="movie-list">
			{this.props.movies.map(movie =>
				<MovieListEntry movie={movie} />
				<button class="toggle" onClick={() => this.toggleWatched.bind(this)}>
				{this.state.toggle ? 'Watched' : 'To Watched'}</button>
			)}
		</div>
		)
	}	
};

export default MovieList;