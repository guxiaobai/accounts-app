import axios from "axios"

const domain = process.env.REACT_APP_RECORDS_API_URL

export const getAll = () => 
  axios.get(`${domain}/api/v1/records`)