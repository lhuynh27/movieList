import React from "react";
import App from "./App"

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange(e){ 
        this.setState({
            input: e.target.value
        });
    }    

    render() {
        return (
            <form>
                <div>
                    <input type="text" placeholder="Search List..." onChange={this.handleChange.bind(this)} />
                    <button onClick={() => this.props.clickHandler(this.state.input)}> Go! </button>
                </div>    
            </form>
        )
    }
};

export default Search;