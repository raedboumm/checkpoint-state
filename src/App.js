import React, { Component } from "react";
import Show from "./Show";
import "./style.css"


export default class App extends Component {
  state = {
    fullName: "John Doe",
    bio: "A passionate developer from the planet Earth.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsJslYSjSZTlGcjqMDmw_CcnLh35_8EDNxg&usqp=CAU",
    profession: "Software Developer",
    fama: false,
    
  };

  render() {
    return (
      <>
      <div className="body">
        <button className="btn" onClick={() => this.setState({ fama: !this.state.fama })}>
          SHOW
        </button>
        {this.state.fama == true ? (
          <div className="crata">
            <Show hi={this.state} />
          </div>
        ) : (
          ""
        )}
        </div>
      </>
    );
  }
}
