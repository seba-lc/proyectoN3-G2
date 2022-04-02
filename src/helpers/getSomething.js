import axios from "axios";

const getSomething = async(url,setData)=>{
  try {
    const response = await axios.get(url);
    const {data} = response;
    setData(data)
  } catch (error) {
    console.warn(error);
  }
}

export default getSomething