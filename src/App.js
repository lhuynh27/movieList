import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import MovieList from "./MovieList";
import MovieListEntry from "./MovieListEntry";
import sampledata from "./sampledata";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: sampledata.movies,
            currentList: [],
            input: ''
        };
    }

    clickHandler(input) {
        this.setState({
            input: input
        });

        this.setState({
            currentList: this.state.movies.filter(movie => movie.title.includes(input))
        });
    }

    render(){
        return (
          <div>
            <h1 id='movies'>Movie List</h1>
              <Search clickHandler={ this.clickHandler.bind(this) } />
              <br></br>
              <MovieList movies={this.state.movies} />
              <MovieList movies={this.state.currentList} />
          </div>
        )  
    }
};

export default App;


ReactDOM.render(<App />, document.getElementById('app'));