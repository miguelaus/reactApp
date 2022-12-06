
function Item({products}) {
    
    return (
      <div className="Card__container">
      <div className="card">
        <div className="card-img">
          <img src={products.img} />
        </div>
     <div className="card-detail">
          <h3>{products.name}</h3>
          <span>{products.type}</span>
          <p>$ {products.price}</p>
        </div>
      </div>
      </div>
    );
  }
  
  export default Item;

