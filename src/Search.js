import React from "react";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        };
    }

    handleChange (input) {
        
    }

    render (){
        return (
            <form>
                <div>
                    <input type="text" placeholder="Search List" onChange={this.change} />
                    <button onClick={this.complicate}> Go! </button>
                </div>    
            </form>
        )
    }
};

export default Search;