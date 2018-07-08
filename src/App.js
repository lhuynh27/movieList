import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: window.sampledata,
        };
    }

    // click(input) {
    //     this.setState({
    //         input:input
    //     });
    // }

    render(){
        return (
          <div>
            <h2 id='list'>Movie List</h2>
              <ul>
              <Search/>
              <br></br>
                <li className='even'>Nom Nom Nom</li>
                <li className='odd'>Hungry Hungry Leanne</li>
                <li className='even'>Send Noods</li>
                <li className='odd'>Little Miss Foodie</li>
                <li className='even'>Food Wars</li>
              </ul>
          </div>
        )  
    }
};

export default App;


ReactDOM.render(<App data={window.sampledata} />, document.getElementById('app'));