import React, { useState, useEffect } from "react";

const Product =() => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/products`);
      const result = await response.json();
      setData(result);
    };
  useEffect(() => {
    fetchData();
  }, []);
   return (
  <>
    <div className="App container">

      <div className="main-outer row">
      <h2 style={{ color: "red" }}>Shop Collections</h2>
        {data.map((item) => (
    <div style={{ width: "18rem" }} className="main-inner col-sm-3">
      <div className="main-product-container">
      <p>{item.category}</p>
      <img width="100%" height="200px" src={`http://localhost:8000/${item?.image}`} />
      <h4 className="product-title">{item?.title}</h4>
      </div>
      <div className="price-with-camparePrice">
      <span className="product-price">${item?.price}</span>
      <span className="product-camparePrice"><s>${item?.camparePrice}</s></span>
      </div>
      <p className="product-description">
      {item.description.slice(0, 70)}…
      </p>
      {/* <Link target={"_blank"} to={`/products/${item.id}`}>
      <button className="btn btn-primary">Add To Cart</button>
    </Link> */}
    </div>
        ))}
      </div>
    </div>
  </>
  );
};
export default Product;