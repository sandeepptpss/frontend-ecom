import React, { useState } from "react";
const AddProduct =()=>{
const [title, setTitle] =useState("");
const [brand, setBrand]= useState();
const [price, setPrice]= useState("");
const [camparePrice , setCamparePrice]=useState("");
const [description, setDescription]= useState("");
const [image, setImage]= useState("");
const [category,setCategory]=useState("")
const getProductData= async ()=>{
    let formData = new FormData();
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("camparePrice", camparePrice);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", category);
    let result = await fetch("http://localhost:8000/products", {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    console.log(result);
}
    return(
        <div className="main-home-page">
            <h2>Ecommerce  addProduct page</h2>
            <div className="main-collection-input-page">
            <input className="inputBox" type="text"  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Product Title"/>
            <input className="inputBox" type="text"  value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Product Description"/>
            <input className="inputBox" type="text"  value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Product Brand"/>
            <input className="inputBox" type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price"/>
            <input className="inputBox" type="text"  value={camparePrice} onChange={(e)=>setCamparePrice(e.target.value)} placeholder="Product camparePrice"/>
            <input type="file"  onChange={(e) => setImage(e.target.files[0])}   name="image"   className="inputBox"/>
            <input className="inputBox" type="text"  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Product category"/>
          
            </div>
            <button type="submit" onClick={getProductData} className="Sign-up-btn brn">Save Product Details</button>
        </div>
    )
}
export default AddProduct;