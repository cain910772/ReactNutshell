import React, { Component } from 'react';
import ApiCalls from "./ApiCalls";




export default class News extends Component {

state ={
    headline:[],
    story:[]
}
    
    
componentDidMount(){
ApiCalls.getAllNews()
.then((newsInfo)=>{
    console.log("newsInfo",newsInfo);
    this.setState({
    headline:newsInfo,
    story:newsInfo

    })
    
})
     }
    

    

  
    

    render() {
       
        return(
<div>




</div>
         ) }
        
        }
   