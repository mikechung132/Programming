import React, { Component } from 'react';

export default class Search extends Component {
  render(){
    const { pokemon, search } = this.props;

    const nameList = pokemon.map(name => {
      return console.log(name);
    });
    // const filteredList = "data".filter(pokemon => {
    //   return pokemon.name.toLowerCase().indexOf("filterText".toLowerCase()) >= 0
    // })
    // .map(pokemon => {
    //   return ( <li key={pokemon.name}>{pokemon.name}</li> )
    // });

    return(<div>{nameList}</div>);
  }
}
