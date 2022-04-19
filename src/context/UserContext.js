import { createContext, useState } from "react";
import axiosClient from "../config/axiosClient";

export const UserContext = createContext();

const UserProvider = ({children})=>{
  const [user,setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [dataError, setDataError] = useState(false);
  
  const login = async (values)=>{ //revisar como vienen los values
    let errors = {};
    try {
      const {data} = await axiosClient.post('/users', values);
      setToken(data.id);
      setAuth(true);
      localStorage.setItem('token', data.id);
      setUser({
        name: data.name,
        email: data.email,
        role: 'USER'
      });
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(null);
      if(localStorage.getItem('token')){
        localStorage.removeItem('token');
      }
      errors.data = 'Datos Incorrectos'
      return errors
    }
  }

  const adminLogin = async (values) => {
    let errors = {};
    try {
      const {data} = await axiosClient.post('adminUsers', values);
      setToken(data.id);
      axiosClient.defaults.headers.common['x-auth-token'] = data.id;
      setAuth(true);
      localStorage.setItem('adminToken', data.id);
      setUser({
        name: data.name,
        email: data.email,
        role: 'ADMIN'
      });
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(null);
      if(localStorage.getItem('adminToken')){
        localStorage.removeItem('adminToken');
      }
      delete axiosClient.defaults.headers.common['x-auth-token']
      errors.data = 'Datos Incorrectos'
      return errors
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
      const user = response.data;
      user.role = 'USER'
      setUser(user);
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

  const getAdminAuth = async () => {
    const token = localStorage.getItem('adminToken');
    if(token){
      axiosClient.defaults.headers.common['x-auth-token'] = token;
    }else{
      delete axiosClient.defaults.headers.common['x-auth-token']
    }
    try {
      const response = await axiosClient.get('/adminUsers');
      setAuth(true);
      const user = response.data;
      user.role = 'ADMIN'
      setUser(user);
    } catch (error) {
      console.log(error);
      setAuth(false);
      setUser(null);
      setToken(null);
      if(localStorage.getItem('adminToken')){
        localStorage.removeItem('adminToken');
      }
    }
  }

  const logout = () =>{
    setAuth(false);
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
  }

  return(
    <UserContext.Provider value={{
      user,
      setUser,
      login,
      auth,
      getAuth,
      getAdminAuth,
      logout,
      adminLogin
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

