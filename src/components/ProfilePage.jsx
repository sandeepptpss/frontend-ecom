import React ,{useState, useEffect} from "react";
const ProfilePage =()=>{
const [users,setUsers]=useState([]);
const getUserData =()=>{
    fetch("http://localhost:8000/registers").then(response=>{
        return response.json()
    })
 .then(data=>{
    setUsers(data)
 })
}
useEffect(()=>{
    getUserData();
},[]);
    return(
        <>
<div className="App">
<h1 style={{ color: "red" }}>User Profile</h1>
<table striped bordered hover variant="dark">
  <thead>
      <tr>
    <th>Id</th>
    <th>Name</th>
    <th>User Name</th>
    <th>Email</th>
   
  </tr>
  </thead>
  <tbody>
    { users.map((item )=>{
            return (
              <tr>
              <td> {item._id}</td>
              <td>{ item.name}</td>
              <td>{ item.usename}</td>
              <td>{ item.email}</td>
              </tr>
            );
          })
          }
          </tbody>
    </table>

  </div>
</>
    );
 }
export default ProfilePage;