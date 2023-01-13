import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, doc, getDoc } from 'firebase/firestore'
import { database } from "../../Firebase/config";
const ItemDetailContainer = () => { 
    const [product, setProduct] = useState({})

    const {itemId} = useParams(); 

    useEffect(()=>{
      //le decimos nuestra base de datos y en que collecion tiene que ir
      const coleccionProd = collection(database, "items")
      // hacer una referencia que me traiga el ID del useParams
      const referenciaDoc = doc(coleccionProd, itemId)
      //traemos el documento
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