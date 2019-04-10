import React from "react";
import NavBar from "./components/layout/NavBar";
import PokemonList from "./components/pokemon/PokemonList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/pokedex.css';

class Pokedex extends React.Component{

  render(){
    return(
        <div className="App">
          <NavBar />
          <PokemonList />
        </div>
    );
  }
}

export default Pokedex;
