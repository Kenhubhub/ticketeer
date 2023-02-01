const Tiles = ({isLogin}) => {
    return ( 
    <div className="tabs">
        <button onClick = {()=>{isLogin(true)}}className = "tab-links active" id="login-btn">Login</button>
        <button onClick = {()=>{isLogin(false)}}className = "tab-links" id="Register-btn">Register</button>
    </div>
     );
}
export default Tiles;