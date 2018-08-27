import React, { Component } from 'react';
import ApiCalls from "./ApiCalls";




export default class Login extends Component {

state ={
    email:[],
    userName:[]
}
    
    
componentDidMount(){
ApiCalls.getUserData()
.then((userInfo)=>{
    console.log("userInfo",userInfo);
    this.setState({
    email:userInfo,
    userName:userInfo

    })
    
})
     }
    

    

  
    

    render() {
       
        return(
<div>




</div>
         ) }
        
        }
   