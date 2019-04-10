import React, { Component } from "react";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false
         }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({ isLogged: !prevState.isLogged }));
    }

    render(){
        return (
            <div>
              <h3>You are logged {this.state.isLogged ? 'ON' : 'OFF'}</h3>
                <button onClick={this.handleClick}>{this.state.isLogged ? 'Log Out' : 'Log In'}</button>
            </div>
        )
    }
}

export default Login;
