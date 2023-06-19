import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
const SignUp =()=>{
    const [name, setName] =useState("");
    const [username, setUserName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");



    const navigate=useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
const SignCollectData = async()=>{
    console.warn(name,email,password);
        let result = await fetch("http://localhost:8000/registers", {
         method: "POST",
         body: JSON.stringify({name,username,email,password}),
         headers:{
         'Content-Type':'application/json'
         },
       });
       result = await result.json()
  

     localStorage.setItem('user', JSON.stringify(result));

     if(result){
      navigate('/collections')
     }
   }
    return(
       <div className="custom-sign-up">
        <h2>Sign Up</h2>
        <div className="main-input-box">
        <input className="inputBox" type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
        <input className="inputBox" type="text" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter User name" />
        <input className="inputBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
        <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>
        <button type="submit" onClick={SignCollectData} className="Sign-up-btn brn">Sign Up</button>
       </div>
       </div>
    )
}
export default SignUp;