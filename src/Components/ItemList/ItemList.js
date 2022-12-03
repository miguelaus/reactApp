import './ItemList.css';
import Images from "../Images/Images"


export default function ProductList() {
    const products = [
      {
        id: 1,
        name: "Pizza Caprese",
        price: 300,
        img: Images.caprese,
        
      },
      {
        id: 2,
        name: "Pizza Margarita",
        price: 450,
        img: Images.margarita,
      },
      {
        id: 3,
        name: "Pizza Primavera",
        price: 350,
        img: Images.primavera,
      },
      {
        id: 4,
        name: "Pizza Cancha",
        price: 350,
        img: Images.cancha,
        
      },
      {
        id: 5,
        name: "Cerveza pinta",
        price: 350,
        img: Images.pinta,
        
      },
      {
        id: 6,
        name: "Cerveza Botella",
        price: 350,
        img: Images.botellaC,
        
      },
      {
        id: 7,
        name: "Vino Copa",
        price: 350,
        img: Images.copa,
        
      },
      {
        id: 8,
        name: "Vino Botella",
        price: 350,
        img: Images.botellaV,
        
      },
      {
        id: 9,
        name: "Flan",
        price: 350,
        img: Images.flan,
        
      },
      {
        id: 10,
        name: "Fruta",
        price: 350,
        img: Images.fruta,
        
      },
      {
        id: 11,
        name: "Helado",
        price: 350,
        img: Images.Helado,
        
      },
      {
        id: 12,
        name: "Tiramisu",
        price: 350,
        img: Images.tiramisu,
        
      },


    ];

    


  
    return (
      <div className="product-list__container d-flex mt-5 height">
        <div className="text-black card mt-3 " >
          
          {products.map((product) => (
            <div className="card body">
              <div className ="my-3" key={product.id}>
              <h5 className="card-title">{product.name} </h5>  Price: {product.price}
              <button id="agregarBtn${prod.id}" className="btn btn-primary">Agregar al Carrito</button>
              <img src={product.img} alt="Producto"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }