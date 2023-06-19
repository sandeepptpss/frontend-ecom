import {  Link, useNavigate } from "react-router-dom";
import React ,{useEffect} from "react";
const NavBar =()=>{
   const navigate= useNavigate();
  const auth =localStorage.getItem('user');
  const logout=()=>{
 localStorage.clear();
     navigate('/signup')
  } 
    return(
<div className="main-nav-menu">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/collections">Product</Link></li>
<li><Link to="/add">add Product</Link></li>

<li><Link to="/update">Update Product</Link></li>
<li><Link to="/profile">Profile</Link></li>

<li> {auth? <Link onClick={logout} to="/signup">Logout</Link>
:<>
<li><Link to="/signup">Signup</Link></li>
<li><Link to="/login">Login</Link></li>
</>

}</li>


</ul>
</div>
)
}
export default NavBar;