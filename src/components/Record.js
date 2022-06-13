import React, { Component } from "react";

import {update} from '../utils/RecordsAPI.js'

class Record extends Component{

  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      console.log('success');
      this.textInput = element;
      console.log(this.textInput.value)
    };

    this.state = {
      edit: false
    };
  }

  handleToggle() {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleEdit(event) {
    event.preventDefault();
    console.log(this.dateInput.value);
    // const record = {
    //   date: this.refs.date.value,
    //   title: this.refs.title.value,
    //   amount: Number.parseInt(this.refs.amount.value, 0)
    // }
    // update(this.props.record.id, record).then(
    //   response => {
    //     console.log(response.data)
    //     this.props.handleEditRecord(this.props.data, response.data);
    //   }
    // ).catch(
    //   error => console.log(error.message)
    // )
  }

  recordRow(){
    return(
      <tr>
        <td>{this.props.data.date}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.amount}</td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)}>Edit</button>
          <button className="btn btn-danger">Delete</button>
          </td>
      </tr>
    )
  }

  recordForm(){
    return (
      <tr>
        <td><input type="text" className="form-control" defaultValue={this.props.data.date} ref={this.setTextInputRef} /></td>
        <td><input type="text" className="form-control" defaultValue={this.props.data.title} ref="title" /></td>
        <td><input type="text" className="form-control" defaultValue={this.props.data.amount} ref="amount" /></td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleEdit.bind(this)}>Update</button>
          <button className="btn btn-danger" onClick={this.handleToggle.bind(this)}>Cancel</button>
        </td>
      </tr>
    );

      
  }

  render() {
    if (this.state.edit) {
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  }
}

export default Record