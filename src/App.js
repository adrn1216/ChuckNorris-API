import React from 'react';
import './App.css';
import Header from './Header.js';
import Joke from './Joke.js';
import Footer from './Footer.js';


class App extends React.Component{
  render(){
    return(
      <div id="app">
        <Header/>
        <Joke/>
        <Footer/>
      </div>
    )
  }
}

export default App;
