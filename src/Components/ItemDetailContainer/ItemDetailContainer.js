import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, doc, getDoc } from 'firebase/firestore'
import { database } from "../../Firebase/config";
const ItemDetailContainer = () => { 
    const [product, setProduct] = useState({})

    const {itemId} = useParams(); 

    useEffect(()=>{

      const coleccionProd = collection(database, "items")
 
      const referenciaDoc = doc(coleccionProd, itemId)
     
      getDoc(referenciaDoc)
      .then((result)=>{
        setProduct({
          id:result.id,
          ...result.data()
        })
      })
      .catch((error)=> console.log(error))
    }, [itemId])
   return  (
     <ItemDetail product={product} />
   );

}  




export default ItemDetailContainer