const Tiles = ({isLogin}) => {
    return ( 
    <div className="tileContainer">
        <div className="tabs">
            <button onClick = {()=>{isLogin(true)}} className = "tab-links" id="login-btn">Login</button>
            <button onClick = {()=>{isLogin(false)}}className = "tab-links" id="Register-btn">Register</button>
        </div>
    </div>
     );
}
export default Tiles;