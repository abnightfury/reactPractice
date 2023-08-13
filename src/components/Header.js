import logofood2 from "../../img/logofood.png";
import { useState } from "react" ;
import { Link } from "react-router-dom";
 const Header =()=>{
    const [btnName, setBtnName]=useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logofood2}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to ="/"> Home</Link> </li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li><Link to ="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="btnlog" onClick={()=>btnName.toLowerCase()==="login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;