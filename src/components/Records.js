import React, { Component } from "react";
import Record from './Record';

import RecordForm from './RecordForm'

import { getAll } from '../utils/RecordsAPI.js'


class Records extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }

  addRecord(data){
    this.setState({
      error: null,
      isLoaded: true,
      records: [
        ...this.state.records,
        data
      ]
    })
  }

  updateRecord(record,data){

  }


  componentDidMount(){
    getAll().then(
      response => this.setState({records: response.data, isLoaded: true})
    ).catch(
      error => this.setState({isLoaded: true, error})
    )
  }


  render(){
    const { error, isLoaded, records} = this.state
    let recordsComponent;

    if(error){
      recordsComponent =  <div>Error: {error.message}</div>
    }else if(!isLoaded){
      recordsComponent =<div>Loading ....</div>
    } else {
      recordsComponent =  (
        
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record)=> <Record key={record.id} data={record} handleEditRecord={this.updateRecord.bind(this)}/>)}
            </tbody>
          </table>
      )
    }

    return (
      <div>
         <h2>Records</h2>
         <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
         {recordsComponent}
      </div>
    )
    
  }
}

export default Records