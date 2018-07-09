import React from "react";
import App from "./App"

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    searchList(e){ 
        this.setState({
            input: e.target.value
        });
    }    

    render() {
        return (
            <form>
                <div>
                    <input type="text" placeholder="Search List" onChange={this.searchList.bind(this)} />
                    <button class="button" onClick={() => this.props.clickSearchButton(this.state.input)}> Go! </button>
                </div>    
            </form>
        )
    }
};

export default Search;