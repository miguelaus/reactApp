import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

const ItemDetailContainer = () => { 
    const [products, setProducts] = useState([])

    const {itemId} = useParams(); 

    useEffect(() => {
                if (itemId) {
                 
                    getProduct(itemId).then((products) => {
                        setProducts(products);
                    });
                  
                }
        else {
        
                  getProduct().then((products) => {
                    setProducts(products);
                  });
                }
              }, [itemId])

     console.log(products)

     


}  

export const getProduct = () => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(Product);
          
      }, 2000);
  });
};


export default ItemDetailContainer