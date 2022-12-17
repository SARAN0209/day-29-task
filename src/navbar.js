import React from "react"
import { Link } from "react-router-dom"
 
function Navbar(){
    return(
        <>
        <nav className="nav-bar">
            
            <Link to="/" className="student">HOME</Link>
                <Link to={"/student"} className="student">
                    STUDENT</Link>
                <Link to={"/teacher"} className="student">TEACHER</Link>
          
               
         
        </nav>
        </>
    )
}
export default Navbar