import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Product from "../../Data/products"

const ItemDetailContainer = () => { 
    const [product, setProduct] = useState([])

    const {itemId} = useParams(); 

    useEffect(() => {
                               
                    getProduct().then((product) => {
                        setProduct(product.find(product => product.id === itemId));  
                    });

                    
                  
                });


   return  (
     <ItemDetail product={product} />
   );

}  

export const getProduct = () => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(product);
          
      }, 2000);
      rej("error");
  }, []);
};


export default ItemDetailContainer




