import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProducts } from "../../Data/Products";
import { getProductsByCategory } from "../../Data/Products";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => { 

    const {} = props;

    const [products, setProducts] = useState([])

    const {id} = useParams(); 

    useEffect(() => {
                if (id) {
                  setTimeout(() => {
                    getProductsByCategory(id).then((products) => {
                        setProducts(products);
                    });
                  }, 2000);
                }
        else {
        
                  getProducts().then((products) => {
                    setProducts(products);
                  });
                }
              }, [id])

     console.log(products)

    return ( 
       <div>

            <div className="products__Container">
                  
                <ItemList data={products} />

            </div>
    

       </div>
    )
}  

export default ItemListContainer