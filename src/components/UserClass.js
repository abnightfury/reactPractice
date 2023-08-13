import React, { Component } from 'react'

export default class UserClass extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={
        //count:0,
        //count2:1
        userInfo :{
            name:"Dummy",
            location:"Default"
             
        }
    }
   // console.log("child Constructor")
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/abhishek")
    const json = await data.json()
    this.setState({userInfo:json})
    console.log(json)
  }
    render() {
        //const {name} = this.props
        const {name, location} = this.state.userInfo
        //console.log("child  render")
        //const {count, count2} = this.state
    return (
        <div className="user-card">
        <h2>Name: {name}</h2>
        {/* <h3>count : {count} , count2 : {count2}</h3> */}
        <h3>Location: {location}</h3>
        <h4>Address:Agartala</h4>
      </div>
    )
  }
}
