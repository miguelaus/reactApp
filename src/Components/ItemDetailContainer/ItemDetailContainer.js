import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProduct } from "../ItemDetail/ItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";

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

    return ( 
       <div>

            <div className="">
                  
                <ItemDetail products={products} />

            </div>
    

       </div>
    )
}  

export default ItemDetailContainer