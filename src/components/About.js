import User from "./User"
import UserClass from "./UserClass"
import React, { Component } from 'react'

export default class About extends Component {
    constructor(props){
        super(props);
        //console.log("Parent Constructor")
    }
    componentDidMount(){
        //console.log("parent componentdidmount")
      }
  render() {
    //console.log("Parent render")
    return (
      <div>
        <h1>About class</h1>
        <UserClass />
      </div>
    )
  }
}

// const About =()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             {/* <User name="Abhishek (Function)"/> */}
//             <UserClass name="Abhishek (class)"/>
//         </div>
//     )
// }

//export default About;