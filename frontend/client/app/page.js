import { React } from "react";

import Login from "@/components/Login";
import Register from "@/components/Register"; 
import Tiles from "@/components/Tiles";

import login from "./login.css"
import register from "./register.css";
import tiles from "./tiles.css"

const Auth = () => {
  return ( 
  <div>
    <Tiles styles={tiles}></Tiles>
    <Login styles={login}></Login>
    <Register styles={register}></Register>
  </div>
   );
}
 
export default Auth;