import React, { Component } from "react";

class RecordForm extends Component{
  constructor(){
    super();
    this.state = {
      date: '',
      title: '',
      amount: ''
    }
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  render(){
    return(
      <form className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange = {this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange = {this.handleChange.bind(this)} />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange = {this.handleChange.bind(this)} />
        </div>

        <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Record</button>
      </form>
    )
  }
}

export default RecordForm