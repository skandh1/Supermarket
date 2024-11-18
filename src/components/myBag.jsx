import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeProduct } from "./store/Slice";


function MyBag(){


   
const items = useSelector(state=>state.products)
const dispatch = useDispatch() 


    
     const cards = items.map(product=>(
                     
        <div className="columns-md-3 px-72 " key={product.id}>
    <Card className=" border-8  mr-auto" key={product.id} style={{ width: '18rem' }}>
      <div className="text-center size-25 mr-10  border-4 ">
    <Card.Img  variant="top" src={product.image} /> 
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text className="font-medium">
       $.{product.price}
      </Card.Text>
      <Button onClick={()=>dispatch(removeProduct(product.id))} className=" bg-red-600 rounded-lg p-2 font-semibold hover:opacity-50" variant="primary">Remove from Bag</Button>
    </Card.Body>
    </Card>
    </div> ))
    
   if(items.length==0){
    return(
      <>
        <p className="mt-20">Bag is empty...</p>
      </>
    )
   }
   else{
    return(
      <>
  <div> 
   {cards}
   </div>
      </>
    )
   }
  }




export default MyBag