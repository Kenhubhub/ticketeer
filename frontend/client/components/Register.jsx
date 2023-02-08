"use client"

import Link from "next/link";
import {useRouter} from "next/navigation";


const Register = () => {
  const router = useRouter()
  // 1. Obtain user details from register form
  const Authenticate = async (e)=>{
   e.preventDefault()
   console.log(e.target.username.value);
   const user = {
    username: e.target.username.value,
    password: e.target.password.value,
    email: e.target.email.value,
    isSeller: e.target.isSeller.checked
   }
   // 2. 
   console.log(typeof e.target.password)
   const res = await fetch('http://localhost:4000/user/register', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(user)})
   if(res.status === 200){
      user.isSeller == true ? router.push("/seller") : router.push("/customer")
   }
  }

    return (  
        <div className="container">
        <div className="main-content"></div>
          <form onSubmit={e=> Authenticate(e)} className="RegisterForm">
            <div className="RegisterContent">
              <h3 className="RegisterTitle">Register</h3>
            <div className="form">
                <label>Username: </label>
                <input
                type="userName"
                className="usernameInput"
                placeholder="Enter Username"
                name="username"
                />
            </div>
            <div className="form">
                <label>Email Address: </label>
                <input
                type="email"
                className="emailInput"
                placeholder="Enter Email"
                name="email"
                />
            </div>
            <div className="form">
                <label>Password: </label>
                <input
                type="password"
                className="passwordInput"
                placeholder="Enter Password"
                name="password"
                />
            </div>
            <div className="sellerAccount">
             <input type="checkbox" id="checkbox" name="isSeller"  />
             <label htmlFor="">Seller</label>
            </div>
            <div className="RegisterButton">
              <button type="submit" className="RegisterBtn">Register</button>
            </div>
            </div>
        </form>
      </div>
    );
}
export default Register;