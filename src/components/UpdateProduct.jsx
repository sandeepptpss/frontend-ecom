import React, { useState, useEffect } from "react";
import { useParams , useNavigate } from 'react-router-dom';
const UpdateProduct =()=>{

const [title, setTitle] =useState("");
const [brand, setBrand]= useState();
const [price, setPrice]= useState("");
const [camparePrice , setCamparePrice]=useState("");
const [description, setDescription]= useState("");
const [image, setImage]= useState("");
const [category,setCategory]=useState("")
const navigate =useNavigate();
 const params=useParams();
 useEffect(()=>{
    getProductData();
 },[])


const getProductData= async ()=>{
   let result = await fetch(`http://localhost:8000/products/${params.id}`);
 result =await result.json();
 setTitle(result.title);
 setDescription(result.description);
 setBrand(result.brand);
 setPrice(result.price);
 setCamparePrice(result.camparePrice);
 setImage(result.image);
 setCategory(result.category);

}

const UpdateProductData= async()=>{
    let result = await fetch(`http://localhost:8000/products/${params.id}`,{
        method:'Put',
        body:JSON.stringify({title,brand,price,camparePrice,description,image,category,category}),
        headers:{
            'Content-Type':'application/json'
            },
    })
    result = await result.json();
if(result){
    navigate('/collections')
}else{
    console.warn('not updated data')
}

}
    return(
        <div className="main-home-page">
            <h2>Ecommerce  Update page</h2>
            <div className="main-collection-input-page">
            <input className="inputBox" type="text"  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Product Title"/>
            <input className="inputBox" type="text"  value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Product Description"/>
            <input className="inputBox" type="text"  value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Product Brand"/>
            <input className="inputBox" type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price"/>
            <input className="inputBox" type="text"  value={camparePrice} onChange={(e)=>setCamparePrice(e.target.value)} placeholder="Product camparePrice"/>
            <input type="file"  onChange={(e) => setImage(e.target.files[0])}   name="image"   className="inputBox"/>
            <input className="inputBox" type="text"  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Product category"/>
          
            </div>
            <button type="submit" onClick={UpdateProductData} className="Sign-up-btn brn">Update Product</button>
        </div>
    )
}
export default UpdateProduct;