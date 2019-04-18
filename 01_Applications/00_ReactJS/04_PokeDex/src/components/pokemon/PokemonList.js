import React, { Component } from "react";
import PokemonCard from "../pokemon/PokemonCard";
import NavBar from "../layout/NavBar";
//import Search from "../layout/Search";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null,
    search: ''
  }

  async componentDidMount(){
    const response = await axios.get(this.state.url);
    this.setState({ pokemon: response.data['results'] });
  }

  updateSearch(e){
    this.setState({ search: e.target.value });
  }

  render(){
     const { pokemon } = this.state;

    // let filteredPokemon = this.state.pokemon.filter(pokemon => {
    //     return pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    // });

    return (
      <React.Fragment>

        {this.state.pokemon ? (
          <div className="row">
            {pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon...</h1>
        )}
      </React.Fragment>
    );
  }
}
