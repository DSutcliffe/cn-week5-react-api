//********************************************
//*
//* Turn device wifi on/off to test spinner...
//*
//********************************************

import React, { Component } from 'react'
// Import Axios
import axios from 'axios';
import './css/App.css';

import Users from "./componenets/Users.js";

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // React Component!!! like Swift DidAppear?
  // This function runs after everything has loaded
  // If you want to hgrab data from an API use this... (AXIOS needs installing in dir 'npm i axios' and needs importing at top)
  // Use async and await. (await for data to datat to come back no matter how long it takes)
  componentDidMount = async () => {
    console.log("Inside of componentDidMount");

    this.setState({
      loading: true
    })

    // Grab data from API
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    this.setState({
      loading: false
    })

    // console.log(response)
    // grab the data element we require
    console.log(response.data)

    console.log("Before Updating State")
    this.setState({
      users: response.data
    })
    console.log("After Updating State")

  }

  // render runs first!
  // When 'state' is updated, render runs again - ie. triggered
  render() {
    console.log("Inside of render");

    // .map will loop through array
    const allUsers = this.state.users.map( myChosenKeyword => {
    //   return <h1>Hi my name is {myChosenKeyword.name} and i live in {myChosenKeyword.address.city}</h1>
    // });
      
      // Dont need but gets rid of red warning in comsole
      return <h1 key={myChosenKeyword.id} >Hi my name is {myChosenKeyword.name} and i live in {myChosenKeyword.address.city}</h1>
    });

    let user2 = "";

    if (this.state.users.length > 0) {
      user2 = this.state.users[1].name;
    } 

    return (
      <div>
        {/* {allUsers} */}
        {/* <h1>User 2's Name is {user2}</h1> */}
        
        <Users loading={this.state.loading} data={allUsers} />
      </div>
    )
  }
}

export default App;