import React from "react";

class MemeGenerator extends React.Component {
  constructor(){
    super();
    this.state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit(e){
    e.preventDefault();
    // get a random int (index in the array)
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    // get the meme from that index
    // set 'randomImg' to the '.url' of the random item retrieved
    this.setState({ randomImg: randMemeImg})

  }

  render(){
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="topText"
              placeholder="Top Text"
              value={this.state.topText}
              onChange={this.handleChange}
            /><br />

            <input
              type="text"
              name="bottomText"
              placeholder="Bottom Text"
              value={this.state.bottomText}
              onChange={this.handleChange}
            /><br />
            <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
