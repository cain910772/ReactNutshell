import React, { Component } from 'react';
import ApiCalls from "./ApiCalls";




export default class Events extends Component {

state ={
    events:[],
  
}
    
    
componentDidMount(){
ApiCalls.getAllEvents()
.then((eventInfo)=>{
    console.log("eventInfo",eventInfo);
    this.setState({
        eventName:eventInfo,
        eventDate:eventInfo,
        location:eventInfo


    })
    
})
}
render() {
       
    return(
<div>




</div>
     ) }
    
    }

