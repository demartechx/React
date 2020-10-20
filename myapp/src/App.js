import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render(){
    return (
      <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome :)</p>
      <Ninjas name="Rya" age="25" belt="black"/>
      <Ninjas name="Matthew" age="10" belt="Brown"/>
      </div>
    );
  }
}

export default App;
