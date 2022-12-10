
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../Data/Products";

const ItemDetailContainer = () => { 
    const [product, setProduct] = useState({})

    const {itemId} = useParams(); 

    useEffect(() => {
                               
                    getProduct(itemId)
                    .then((product) => setProduct(product) )
                },[itemId]);


   return  (
     <ItemDetail product={product} />
   );

}  




export default ItemDetailContainer