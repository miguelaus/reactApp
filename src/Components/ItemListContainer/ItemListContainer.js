import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProducts } from "../../Data/Products";
import { getProductsByCategory } from "../../Data/Products";
import ItemList from "../ItemList/ItemList";
import { database } from "../../Firebase/config";
import { doc, getDoc } from "../../Firebase/firestore"

const ItemListContainer = () => { 
    const [products, setProducts] = useState([])

    const {categoriaId} = useParams(); 

    useEffect(() => {
                    
                    
              // creamos una función que va a obtener los datos de firebase
                    const getData = async () => {
              // con una condicional, si no tiene categorías, 
                        const queryRef = !categoriaId
              // va a traer todos los productos
                            ? collection(database, "items")
              // si tiene categorías, firevase va a filtrarlas
                            : query(
                                collection(database, "items"),
                                where("type", "==", categoriaId)
                            );
              // recibimos los datos
                        const response = await getDocs(queryRef);
              // y hacemos un map para crear objetos con esos datos.
                        const productos = response.docs.map((doc) => {
                            const newProduct = {
                                ...doc.data(),
                                id: doc.id,
                            };
              // lo retornamos
                            return newProduct;
                        });
                        setTimeout(() => {
              // simulamos una demora de 2' y actualizamos los 2 estados.
                            setProducts(productos);
                    
                        }, 2000)
                    };
              // llamamos a la función
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