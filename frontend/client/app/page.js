"use client"
import { React } from "react";

import Login from "@/components/Login";
import Register from "@/components/Register"; 
import Tiles from "@/components/Tiles";

import login from "./login.css"
import register from "./register.css";
import tiles from "./tiles.css"

//STATES 
//1. import useState
import { useState } from "react";

const Auth = () => {
  
  const [isLogin,setLogin] = useState(true);
  return ( 
  <div>
    <Tiles isLogin={setLogin} styles={tiles}></Tiles>
    {
      isLogin ? 
          <Login styles={login}></Login>
      :
         <Register styles={register}></Register>
    }
  </div>
   );
}
 
// let x = 2  =>  x == 2 ? console.log("hello") : console.log("not hello")
// is the state true ? display login : display register
export default Auth;