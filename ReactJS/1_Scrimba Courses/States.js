import React from 'react';

class States extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "Nimbus",
      age: 100,
      loggedIn: false
    }
  }
  render(){
    let log;
    if(this.state.loggedIn === true){
      log = 'in';
    }else{
      log = 'out';
    }
    return(
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>You are currently logged {log}</p>
      </div>
    );
  }
}

export default States;
