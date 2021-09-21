import axi from "axios";
import { API_HOST } from "./Config";


const sendDataLogin = async (data) => {
    document.getElementById("error").innerText =""
   try {
   
     console.log("login_axios");
     console.log(data)
     const response = await axi.post(`${API_HOST}/auth/login`, {
       username: data.Username,
       password: data.Password,
     });
     console.log(response.data)
     return response.data;
   } 
   catch (error) {
     console.log(error);
   }
 };
 
 const sendDataRegister = async (data) => {
   document.getElementById("error").innerText = "";
   try {
     console.log("register_axios");
     console.log(data);
     const response = await axi.post(`${API_HOST}/auth/register`, {
       username: data.username,
       address:data.address,
       password: data.password,
       city: data.city,
       code: data.code
     });
     console.log(response.data);
     return response.data;
   } catch (error) {
     console.log(error);
   }
 };


 export {sendDataLogin,sendDataRegister}