import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Show extends Component {
    state = {wa9t:1}
    componentDidMount = () => {
      setInterval(() => { this.setState ({ wa9t :this.state.wa9t+1} ) }, 1000);
    }
    
  render(props) {
    return (
      <div style={{justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:'15px'}}>
        <Card className='kbir' style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.hi.imgSrc} />
            <Card.Body style={{justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center' , textAlign:'center'}}>
              <Card.Title>{this.props.hi.fullName}</Card.Title>
              <Card.Text>
                {this.props.hi.bio} <br />
                {this.props.hi.profession}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <h1 className='hh'>The component has been rendered for {this.state.wa9t} seconds</h1>

      </div>
    )
  }
}
