import './ItemList.css';
import Item from '../Item/Item'

export default function ItemList({products}) {
    
    return (
      <div className="product-list__container d-flex clase1 ">
        <div className="text-black card mt-3 bg-black clase2" >
          
          {products.map((product) => (
            <Item key={product.id} product={product}/>
          ))}
        </div>
      </div>
    );
  }