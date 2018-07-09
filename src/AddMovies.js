import React from "react";
import App from "./App"

class AddMovies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    addMovie(e){
    	this.setState({
    		input: e.target.value
    	});
    }

    render() {
        return (
            <form>
                <div>
                    <input type="text" placeholder="Add A Movie" onChange={this.addMovie.bind(this)}/>
                    <button class="button" onClick={() => this.props.clickAddButton(this.state.input)}> Add! </button>
                </div>    
            </form>
        )
    }
};     

export default AddMovies;