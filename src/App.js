import Users from "./Home";
import "./Style.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  render() {
    return (
      <>
        <nav className="NavBar">
          <header className="navitems">
            <div className="Element">
            <h1>Data Retriever</h1>
            <img src="https://i.ibb.co/xF3sYCX/nav-Logo-removebg-preview.png" alt="nav-Logo-removebg-preview" border="0" id="Logo"/>
            </div>
           
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </header>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}
export default App;