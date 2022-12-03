import './ItemList.css';





export default function ProductList() {
    const products = [
      {
        id: 1,
        name: "Pizza Caprese",
        price: 300,
      },
      {
        id: 2,
        name: "Pizza Margarita",
        price: 450,
      },
      {
        id: 3,
        name: "Pizza Primavera",
        price: 350,
      },
      {
        id: 4,
        name: "Pizza Cancha",
        price: 350,
      },

    ];

    


  
    return (
      <div className="product-list__container d-flex">
        <div className="text-black card" >
          
          {products.map((product) => (
            <div className="card body">
              <div className ="my-2 " key={product.id}>
              <h5 className="card-title">{product.name} </h5>  Price: {product.price}
              <button id="agregarBtn${prod.id}" className="btn btn-primary">Agregar al Carrito</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }