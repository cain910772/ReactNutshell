import React, { Component } from 'react';
import ApiCalls from "./ApiCalls";




export default class Chat extends Component {

state ={
    messages:[],
  
}
    
    
componentDidMount(){
ApiCalls.getAllChat()
.then((chatInfo)=>{
    console.log("chatInfo",chatInfo);
    this.setState({
    messages:chatInfo,


    })
    
})
}
render() {
       
    return(
<div>




</div>
     ) }
    
    }

