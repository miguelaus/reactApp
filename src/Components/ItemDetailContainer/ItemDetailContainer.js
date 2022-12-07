import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProducts } from "../../Data/Products";
import { getProductsByCategory } from "../../Data/Products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => { 
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
                  
                <ItemDetail products={products} />

            </div>
    

       </div>
    )
}  

export default ItemDetailContainer