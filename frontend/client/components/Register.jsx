const Register = () => {
    return (  
        <div className="container">
        <div className="main-content"></div>
          <form className="RegisterForm">
            <div className="RegisterContent">
              <h3 className="RegisterTitle">Register</h3>
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
            <div className="sellerAccount">
             <input type="checkbox" id="checkbox" name="checkbox" value="seller Account" />Seller Account
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