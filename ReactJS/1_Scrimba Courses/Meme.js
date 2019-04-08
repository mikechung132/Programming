import React from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class Meme extends React.Component {
  
  render(){
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>

    );
  }
}

export default Meme;
