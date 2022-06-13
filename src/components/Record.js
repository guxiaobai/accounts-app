import React, { Component } from "react";

class Record extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.date}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.amount}</td>
      </tr>
    )
  }
}

export default Record