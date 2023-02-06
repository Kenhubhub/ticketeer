"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Login() {
  const router  = useRouter()
  const Authenticate = async (e)=>{
    e.preventDefault()
    console.log(e.target.username.value);
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
    const res = await fetch('http://localhost:4000/login', {method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(user)})
    const data = await res.json();
    if(data.status === true){
      if(data.message.isSeller === true){
        router.push("/seller")
      }
      else{
        router.push("/customer")
      }
    }
  }
    return (
      <div className="container">
          <form onSubmit={e=>Authenticate(e)} className="loginForm">
            <div className="loginContent">
              <h3 className="loginTitle">Login</h3>
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
            <div className="LogInButton">
              <button type="submit" className="LoginBtn">Login</button>
            </div>
          </div>
        </form>
      </div>
      
      






    )
  }
  