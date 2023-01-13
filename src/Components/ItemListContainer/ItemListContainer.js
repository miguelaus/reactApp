import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { database } from "../../Firebase/config";
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => { 
    const [products, setProducts] = useState([])

    const {categoriaId} = useParams(); 

    useEffect(() => {
                    
                    
             
                    const getData = async () => {
           
                        const queryRef = !categoriaId
          
                            ? collection(database, "items")
            
                            : query(
                                collection(database, "items"),
                                where("type", "==", categoriaId)
                            );
             
                        const response = await getDocs(queryRef);
            
                        const productos = response.docs.map((doc) => {
                            const newProduct = {
                                ...doc.data(),
                                id: doc.id,
                            };
             
                            return newProduct;
                        });
                        setTimeout(() => {
             
                            setProducts(productos);
                    
                        }, 2000)
                    };
           
                    getData();

                }, [categoriaId])
     console.log(products)

    return ( 
       <div>

            <div className="">
                  
                <ItemList products={products} />

            </div>
    

       </div>
    )
}  

export default ItemListContainer