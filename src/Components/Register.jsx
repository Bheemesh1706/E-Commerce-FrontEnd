import React, { useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./Schema";
import { Redirect } from "react-router-dom";
import { sendDataRegister } from "../Backend/Services";
import { useAuth} from "../Context/AuthContext";


export function Register() {

  const [redirect, setRedirect] = useState(null);
  const [Token,setToken] = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    console.log("reset");
    reset();
  }, []);

  const handleRegister = (e) => {
    console.log(e);
    console.log("register");
    sendDataRegister(e).then((e)=>{
      if (e.jwt) {
        console.log(e);
        setToken(e.jwt);
      } else {
        document.getElementById("error").innerText = e.error_message;
      }
    });

  };

  const InputValues = [
    { name: "username", placeholder: "username" },
    { name: "password", placeholder: "Password" },
    { name: "confirmpassword", placeholder: "Confirm Password" },
    { name: "address", placeholder: "Address" },
    { name: "city", placeholder: "City" },
    { name: "code", placeholder: "Code" },
  ];

  if (Token) return <Redirect to="/dashboard" />;
  return (
    <div className="container-login">
      <section className="login-form">
        <form onSubmit={handleSubmit(handleRegister)}>
          <label>Register</label>
          {InputValues.map(({ name, placeholder }) => (
            <>
              <input
                type={
                  (name === "password") | (name === "confirmpassword")
                    ? "password"
                    : "text"
                }
                id={name}
                placeholder={placeholder}
                name={name}
                {...register(name)}
              />
              {errors[name] && (
                <p className="error2"> {errors[name].message}</p>
              )}
            </>
          ))}
          <button type="submit">Register</button>
          <p>
            Have an Account? <a href="/login">Sign In</a>
          </p>
        </form>
      </section>
    </div>
  );
}
