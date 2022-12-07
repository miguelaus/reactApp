import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProducts } from "../../Data/Products";
import { getProductsByCategory } from "../../Data/Products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => { 
    const [products, setProducts] = useState([])

    const {categoriaId} = useParams(); 

    useEffect(() => {
                if (categoriaId) {
                 
                    getProductsByCategory(categoriaId).then((products) => {
                        setProducts(products);
                    });
                  
                }
        else {
        
                  getProducts().then((products) => {
                    setProducts(products);
                  });
                }
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