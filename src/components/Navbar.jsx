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

<div>

{auth?<ul className="main-nav-menu">
<li><Link to="/">Home</Link></li>
<li><Link to="/collections">Product</Link></li>
<li><Link to="/add">add Product</Link></li>
<li><Link to="/profile">Profile</Link></li>
<Link onClick={logout} to="/signup">Logout</Link>
</ul>
:
<ul className="main-nav-menu">
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<span  className="main-nav-right">
<li><Link to="/signup">Signup</Link></li>
<li><Link to="/login">Login</Link></li>
</span>
</ul>



}

</div>
)
}
export default NavBar;