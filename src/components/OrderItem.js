import React, { useState } from 'react';

function OrderItem({ item }){
  const [quantity, putQty] = useState(0);

  function addQty(){
    putQty(quantity+1);
  }

  function reduceQty(){
    putQty(quantity-1 < 0? 0 : quantity-1);
  }

  return (
    <div className="block">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={item.image_src} max-width="128" max-height="128"></img>
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
        <footer class="card-footer">
          <input class="input" type="text" value={quantity}/>
          <button class="button is-outlined is-small is-responsive is-primary" onClick={() => addQty()}>{'+'}</button>
          <button class="button is-outlined is-small is-responsive is-primary" onClick={() => reduceQty()}>{'-'}</button>
          <button class="button is-outlined is-small is-responsive is-success">Add to order</button>  
        </footer>
      </div>
    </div>
  )
}

export default OrderItem;