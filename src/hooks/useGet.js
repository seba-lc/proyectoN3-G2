import { useEffect, useState } from "react";
import getSomething from "../helpers/getSomething";

const useGet = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
       getSomething(url, setData);
    },[])
    return data
}
 
export default useGet;