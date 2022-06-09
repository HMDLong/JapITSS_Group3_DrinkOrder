import React, { useState } from 'react';


function MenuItem({ item, onAdd}){
  const [quantity, putQty] = useState(0);

  function addQty(){
    putQty(quantity+1);
  }

  function reduceQty(){
    putQty(quantity-1 < 0? 0 : quantity-1);
  }

  const handleClick = () => {
    onAdd(item, quantity);
  }

  return (
    <div className="block">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={item.image_src} max-width='128' max-height='128' alt={item.name}></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{item.name}</p>
              <p className="subtitle is-6">{item.price}</p>
            </div>
          </div>
          <div className="content">
            Giai nhiet mua he
          </div>
        </div>
        <footer className="card-footer">
          <input className="input is-outlined is-small is-responsive is-primary has-text-centered m-2" type="text" value={quantity}/>
          <button className="button is-outlined is-small is-responsive is-primary m-2" onClick={() => addQty()}>
             <span className="icon">
              <i className="fa-solid fa-plus"></i>
            </span>
          </button>
          <button className="button is-outlined is-small is-responsive is-primary m-2" onClick={() => reduceQty()}>
            <span className="icon">
              <i className="fa-solid fa-minus"></i>
            </span>
          </button>
          <button className="button is-outlined is-small is-responsive is-success"
                  onClick={handleClick}
          >
            <span className="icon">
              <i className="fas fa-cart-plus"></i>
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default MenuItem;