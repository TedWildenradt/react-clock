import React from 'react';

class Clock extends React.Component {
  constructor(){
    this.state = {
      time: new Date()
    }
  }
  render(){
    return(
      <div>
        <h1>Clock Component</h1>
      </div>
    )
  }
}

export default Clock;