import React, { Component } from "react";
import Record from './Record';

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


  componentDidMount(){
    getAll().then(
      response => this.setState({records: response.data, isLoaded: true})
    ).catch(
      error => this.setState({isLoaded: true, error})
    )
  }


  render(){
    const { error, isLoaded, records} = this.state

    if(error){
      return <div>Error: {error.message}</div>
    }else if(!isLoaded){
      return <div>Loading ....</div>
    } else {
      return (
        <div>
          <h2>Records</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record)=> <Record key={record.id} data={record}/>)}
            </tbody>
          </table>
        </div>
      )
    }
    
  }
}

export default Records