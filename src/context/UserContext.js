import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";

export const UserContext = createContext();

const UserProvider = ({children})=>{
  const [user,setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  
  const login = async (values)=>{ //revisar como vienen los values
    try {
      const {data} = await axiosClient.post('/users', values);
      setToken(data.id);
      setAuth(true);
      localStorage.setItem('token', data.id);
      setUser({
        name: data.name,
        email: data.email
      });
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(null);
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
      }
    }
  }

  const getAuth = async () => {
    const token = localStorage.getItem('token');
    if(token){
      axiosClient.defaults.headers.common['x-auth-token'] = token;
    }else{
      delete axiosClient.defaults.headers.common['x-auth-token']
    }
    try {
      const response = await axiosClient.get('/users');
      setAuth(true);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(null);
      setToken(null);
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
      }
    }
  }

  const logout = () =>{
    setAuth(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  }

  return(
    <UserContext.Provider value={{
      user,
      setUser,
      login,
      auth,
      getAuth,
      logout
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

