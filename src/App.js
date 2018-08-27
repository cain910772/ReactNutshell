import React, { Component } from 'react';
import getData from "./ApiCalls";
import './App.css';
import Login from "./Login"
import Chat from "./Chat"
import Events from "./Events"
import News from "./News"

class App extends Component {
  render() {
    return (
    <div>hello
  <Login />
   <Chat />
   <Events />
   <News />
    </div>
    )       
   
  
}
}
export default App;
