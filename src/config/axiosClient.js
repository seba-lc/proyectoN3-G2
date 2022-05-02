import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/api/encuestas'
})

export default axiosClient;

//'http://localhost:4000/api/encuestas'
//'https://encuestas21i-back.herokuapp.com/api/encuestas'