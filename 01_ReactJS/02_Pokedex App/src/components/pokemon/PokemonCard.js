import React, { Component } from "react";
import styled from 'styled-components';
import loadingBar from '../pokemon/load/loading.gif';

const Sprite = styled.img`
    max-width: 40%;
    height: auto;
    display: none;
`;

const Card = styled.div`
  box-shadow: 0 1px 5px rgb(0, 0, 0, 0.10),  0 1px 3px rgb(0, 0, 0, 0.20);
  transition: all 0.3s cubic-bezier(.1, .7, .3, 1);
  &:hover {
      box-shadow: 0 15px 20px rgb(0, 0, 0, 0.20),  0 10px 30px rgb(0, 0, 0, 0.40);
  }
  width: 19rem;
`;

export default class PokemonCard extends Component {
  state = {
    pokemonIndex: '',
    name: '',
    imageUrl: '',
    imageLoading: true,
    tooManyRequests: false
  };

  componentDidMount(){
      const { name, url } = this.props;
      const pokemonIndex = url.split('/')[url.split('/').length - 2];
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

      this.setState({
        pokemonIndex,
        name,
        imageUrl
      });
  }

  render(){
    return (
        <div className="col-md-2 mt-2">
          <Card>
            <h6 className="card-header">{this.state.pokemonIndex}</h6>

            {this.state.imageLoading ? (
              <img
                className="card-img-top rounded mx-auto mt-3 d-flex justify-content-center"
                src={loadingBar}
                style={{width: '5em', height: '4em'}}>
              </img>
            ) : null}

            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ tooManyRequests: true })}
              src={this.state.imageUrl}
              style={
                  this.state.tooManyRequests ? { display: "none" } :
                  this.state.imageLoading ? null : { display: "block"}
              }
            />

            {this.state.tooManyRequests ? (
              <h6 className="d-flex justify-content-center mt-1">
                <span className="badge badge-danger">Too Many Requests</span>
              </h6>
            ) : null}

              <div className="card-body mx-auto">
                <h5 className="card-title text-center">
                  {this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(
                      letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                    )
                    .join(' ')}
                </h5>
              </div>
          </Card>
        </div>
    );
  }
}
