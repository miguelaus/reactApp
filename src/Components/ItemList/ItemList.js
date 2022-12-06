import './ItemList.css';


export default function ItemList({products}) {
    
    return (
      <div className="product-list__container d-flex">
        <div className="text-black card mt-3 bg-black" >
          
          {products.map((product) => (
            <div className="card body mt-3 bg-black border border-primary">
              <div className ="my-3" key={product.id}>
              <h2 className="card-title text-white">{product.name} </h2> <p className="text-white"> Precio: {product.price} </p>
              <button id="agregarBtn${prod.id}" className="btn btn-primary">Agregar al Carrito</button>
              <img src={product.img} className="card-img-top mb-2 mt-2" alt="Producto"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }