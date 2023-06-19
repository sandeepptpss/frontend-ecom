import React, {createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {

const [details, setDetails] = useState([]);
const [data, setData] = useState([]);

const {id}=useParams()
  return (
    <>
<h2>Coming soon this page</h2>
    </>
  );
};
export default ProductDetail;