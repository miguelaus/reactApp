import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => { 
    const [products, setProducts] = useState([])

    const {itemId} = useParams(); 

    useEffect(() => {
                               
                    getProduct().then((products) => {
                        setProducts(products.find(product => product.type === itemId));  
                    });

                    
                  
                });


   return  (
     <ItemDetail products={products} />
   );

}  

export const getProduct = () => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(products);
          
      }, 2000);
      rej("error");
  }, []);
};


export default ItemDetailContainer




