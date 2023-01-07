
import { useState } from "react";
// import { CartWidget } from "../CartWidget/CartWidget";
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(0);


  const decrease = () => {
    if (count > initial) {
      setCount(count-1)
      onAdd(count)
    }
  }

  const increase = () => {
    if (count < stock) {
      setCount(count + 1)  
      onAdd(count)
    }
  };
  


  return (
    <div className="counter">
      <button key={count} onClick={decrease}>
         -
      </button>
      <span>{count}</span>
      <button key={count >= 1} onClick={increase}>
         +
      </button>
      <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
      
    </div>
  );
};


export default ItemCount;