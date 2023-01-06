
import { useState } from "react";
// import { CartWidget } from "../CartWidget/CartWidget";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count -1 );
  };

  const increase = () => {
    setCount(count + 1);
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