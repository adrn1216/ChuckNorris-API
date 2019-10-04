import React from 'react';
import axios from 'axios';


class Joke extends React.Component{
  constructor(props){
      super(props)
      this.state = {joke: ""}
      this.getRandomJoke = this.getRandomJoke.bind(this)
  }
  getRandomJoke(){
    this.setState({joke: ""})
    axios.get(`https://api.chucknorris.io/jokes/random`)
      .then(res => {
        const joke = res.data.value;
        this.setState({joke});
      })
  }
  componentDidMount(){
    this.getRandomJoke()
  }
  render(){
    return(
        <div id="main">
            {this.state.joke ? (<div id="joke" className="swing-in-bottom-fwd">
                <p>{this.state.joke}</p>      
            </div>) : 
            (<div>
                <img alt="loading" src={require("./images/chuck_norris_dancing.gif")}></img>
            </div>)}
            <button type="button" onClick={this.getRandomJoke} autoFocus>REFRESH</button> 
        </div>
    )
  }
}

export default Joke;
