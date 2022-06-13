import React, { Component } from "react";

import {create} from '../utils/RecordsAPI.js'

class RecordForm extends Component{
  constructor(props){
    super(props);
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

  handleSubmit(event) {
    event.preventDefault();
    create(this.state).then(
      response => {
        this.props.handleNewRecord(response.data)
        this.setState({
          date: '',
          title: '',
          amount: ''
      })
    }
    ).catch(
      error => console.log(error.message)
    )
  }

  render(){
    return(
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
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