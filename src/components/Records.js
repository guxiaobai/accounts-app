import React, { Component } from "react";
import Record from './Record';

import axios  from "axios";


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
    axios.get("https://5b1bde186e0fd400146aaf8b.mockapi.io/records/1").then(
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