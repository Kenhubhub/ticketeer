import { React } from "react";
import "./login.css"

export default function login(props) {
  return (
    <div className="container">
      {/* <div id="tabs">
            <button className = "tab-links active" id="login-btn">Login</button>
            <button className = "tab-links" id="signup-btn">Sign Up</button>
      </div>  */}
      <div className="main-content"></div>
        <form className="loginForm">
          <div className="loginContent">
            <h3 className="loginTitle">Login</h3>
          <div className="form">
              <label>Username: </label>
              <input
              type="userName"
              className="usernameInput"
              placeholder="Enter Username"
              />
          </div>
          <div className="form">
              <label>Email Address: </label>
              <input
              type="email"
              className="emailInput"
              placeholder="Enter Email"
              />
          </div>
          <div className="form">
              <label>Password: </label>
              <input
              type="password"
              className="passwordInput"
              placeholder="Enter Password"
              />
          </div>
          <div className="LogInBtn">
            <button type="submit" className="LoginBtn">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}
