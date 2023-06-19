import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

   const loginUser = async()=> {
        let result = await fetch('http://localhost:8000/login', {
            method: 'POST',
            body:JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)
       if(result.name){
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/')
     }else{
        console.warn('please enter correct details')
     }
}
    return (
         <>
            <div className="main-register-page  login-page center container">
                <div className="register-page col-ms-1  col-ms-1 ">
                    <h2>Login</h2>
                    <br></br>
                    <div className="main-login-input-page">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control inputBox" placeholder="Enter email or User name"/>
         
                    <br></br>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control inputBox" placeholder="Enter Password"/>
           
                    <br></br>
                    </div>
                    <button type="submit" onClick={loginUser} className="btn btn-primary">Login</button>
                    <br></br>
                    <Link to="/signup">Sign Up</Link>
                    
                </div>
            </div>
        </>
    )
}
export default Login;