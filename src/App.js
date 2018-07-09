import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import MovieList from "./MovieList";
import MovieListEntry from "./MovieListEntry";
import sampledata from "./sampledata";
import AddMovies from "./AddMovies";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: sampledata.movies,
            input: ''
        };
    }

    clickSearchButton(input) {
      this.setState({
        input: input
      });

      this.setState({
        movies: this.state.movies.filter(movie => movie.title.includes(input))
      });
    }

    clickAddButton(input) {
      this.setState({
        movies: this.state.movies.concat({title: input})
      });
    }

    render(){
        return (
          <div>
            <h1 id='movies'>Movie List</h1>
              <AddMovies clickAddButton={ this.clickAddButton.bind(this) } />
              <br></br>
              <Search clickSearchButton={ this.clickSearchButton.bind(this) } />
              <br></br>
              <MovieList movies={this.state.movies} />
          </div>
        )  
    }
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));