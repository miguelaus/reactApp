function Item({product}) {
    
    return (
      <div className="Card__container">
            <div className="card">
                <div className="card-img">
                    <img src={product.img} />
                </div>
            <div className="card-detail">
                <h3>{product.name}</h3>
                 <span>{product.type}</span>
                 <p>$ {product.price}</p>
                </div>
            </div>
      </div>
    );
  }
  
  export default Item;

