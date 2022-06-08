import React, { useState } from 'react';

function Order(){
  const [orderItems, putOrder] = useState([]);

  const addItem = (newItem) => {
    putOrder([...orderItems, newItem])
  }

  const removeItem = (item) => {
    const index = orderItems.indexOf(item);
    if (index > -1) {
      putOrder([...orderItems.splice(index, 1)]);
    }
  }

  const clearOrder = () => {
    putOrder([])
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">Your Order</div>
      {orderItems.map(item => (
        <div className="panel-block">
          <div className="panel">
            <div className="panel-block">{item.name}</div>
            <div className="panel-block">{item.quantity}</div>
            <button class="button is-link is-outlined is-fullwidth" onClick={() => removeItem(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="panel-block">Items: {orderItems.length}</div>
    </div>
  );
}

export default Order;