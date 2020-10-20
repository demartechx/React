import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Matthew', age: 30, belt: 'black', id: 1},
      { name: 'Damilare', age: 25, belt: 'brown', id: 2},
      { name: 'Thompson', age: 20, belt: 'blue', id: 3}
    ]
  }
  render(){
    return (
      <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
