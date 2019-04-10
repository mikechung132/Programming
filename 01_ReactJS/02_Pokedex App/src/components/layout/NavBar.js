import React, { Component } from "react";

export default class NavBar extends Component{
  render(){
    return(
      <div className="navbar navbar-expand-md fixed-top">
        <article className="navbar-brand col-sm-2 col-md-3">PokeDex</article>
        <form className="navbar col-md-2 ml-auto">
          <input
            name="search"
            type="search"
            placeholder="Search" />
        </form>

      </div>
    );
  }
}
