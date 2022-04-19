import axios from 'axios';

const axiosClient = axios.create({
  baseURL:'https://encuestas21i-back.herokuapp.com/api/encuestas'
})

export default axiosClient;

//'http://localhost:4000/api/encuestas'