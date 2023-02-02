import Navbar from "./Navbar";
const Tiles = ({isLogin}) => {
    return ( 
    <div>
        <Navbar isSeller={true}></Navbar>
    <div className="tileContainer">
        <div className="tabs">
            <button onClick = {()=>{isLogin(true)}} className = "tab-links" id="login-btn">Login</button>
            <button onClick = {()=>{isLogin(false)}}className = "tab-links" id="Register-btn">Register</button>
        </div>
    </div>
    </div>
     );
}
export default Tiles;