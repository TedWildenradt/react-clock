import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: new Date()
    }
    this.timerId = null
    this.tick = this.tick.bind(this)
  }


  componentDidMount(){
    this.timerId = setInterval(this.tick, 1000);
  }

  tick(){
    this.setState({
      time: new Date()
    })
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  render(){
    return(
      <div>
        <h1>Clock Component</h1>
        <h2>Time: {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h2>
      </div>
    )
  }
}

export default Clock;