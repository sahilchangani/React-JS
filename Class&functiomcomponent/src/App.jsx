import React, { Component } from 'react'
import Function from './Componenet/Function';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { count:0};
  }
  increment=()=>{
    this.setState({count:this.state.count+1});
  }

  render() {
    return (
      <div>
            <h1>Class Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Click</button>

        <Function/>
      </div>
    )
  }
}
