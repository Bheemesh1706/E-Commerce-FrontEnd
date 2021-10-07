import React,{useEffect,useState}from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "./Schema";
import  {Redirect} from  "react-router-dom";
import { sendDataLogin } from "../Backend/Services";
import { useAuth } from "../Context/AuthContext";

export function Login()
{       

   const [redirect,setRedirect] = useState(null)
   const [Token, setToken] = useAuth();
   const  {register,handleSubmit,reset,formState: { errors } } = useForm({
       resolver: yupResolver(loginSchema)
   })
   
   useEffect(()=>{console.log('reset')
       reset()},[])
    
   

   const handleLogin  = (e) =>{
       console.log(e)
       console.log('Login') 
       sendDataLogin(e).then((e)=>
       {
           if(e?.jwt)
           {    console.log(e)
               setToken(e.jwt)
           }
           else
           {
    document.getElementById("error").innerText =e?.error_message;
           }
       })
    }
    if(Token) return <Redirect to="/dashboard"/>
     return(
         <div className="container-login">
                <section className ="login-form">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <label>Login</label>
                            <input type="text" id="uname" placeholder="UserName" name='Username' {...register('Username')}/>
                            {errors.Username && <p className = "error2"> {errors.Username.message}</p>}  
                            <input type="password" id="password" placeholder="Password" name='Password' {...register('Password')}/>
                            {errors.Password && <p className = "error3"> {errors.Password.message}</p>} 
                            <p id = "error"></p>
                            <button type='submit'>Login</button>
                            <p>New here? <a href="/">Register</a></p>
                        </form>

                </section>
         </div>
     );
}
