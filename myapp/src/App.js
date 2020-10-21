import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import  './Ninjas.css';



class App extends Component {
  state = {
    ninjas : [
      { name: 'Matthew', age: 30, belt: 'black', id: 1},
      { name: 'Damilare', age: 25, belt: 'brown', id: 2},
      { name: 'Thompson', age: 20, belt: 'blue', id: 3}
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render(){
    return (
      <div className="App">
      <h1>My first React App!</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
