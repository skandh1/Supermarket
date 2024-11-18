import React, { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addProduct } from "./store/Slice";


 function Home(){

   const [products,setProducts] = useState([]);
   const [error,setError] = useState(null);

   const dispatch = useDispatch()
    
     function handler(product){
      dispatch(addProduct(product))
     }

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(result=>setProducts(result))
      .catch(error=>setError(error.message))
     
    },[])

     const cards = products.map(product=>(
                     
        <div className="columns-md-3 px-80" key={product.id}>
    <Card className=" border-8  mr-auto" key={product.id} style={{ width: '18rem' }}>
      <div className="text-center size-25 mr-10  border-4 ">
    <Card.Img  variant="top" src={product.image} /> 
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text className="font-medium">
       $.{product.price}
      </Card.Text>
      <Button onClick={()=>handler(product)} className="bg-blue-500 rounded-lg p-2 font-semibold w-full hover:opacity-50" variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  </div> ))

  
   return(
    <>
      <div className="row"> 
       {cards}
       </div>
    </>
   )
}

export default Home