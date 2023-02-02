export default function Login() {
    return (
      <div className="container">
          <form action="http://localhost:<insert port of backend here>/" method="POST"className="loginForm">
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
  