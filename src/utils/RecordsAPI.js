import axios from "axios"

const domain = process.env.REACT_APP_RECORDS_API_URL

export const getAll = () =>
  axios.get(`${domain}/api/v1/records`)

export const create = (body) =>
  axios.post(`${domain}/api/v1/records`, body)

export const update = (id, body) =>
  axios.put(`${domain}/api/v1/records`, body)
