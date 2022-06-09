import React from 'react';
import useStorage from '../hook/orderStorage'
import OrderItems from "./OrderItems";

function Order({}){
  const [orders, putOrders, clearOrders] = useStorage();

  // const addItem = (newItem) => {
  //   putOrder([...orderItems, newItem])
  // }
  //
  const removeItem = (item) => {
    const index = orders.indexOf(item);
    if (index > -1) {
      putOrders([...orders.splice(index+1, 1)]);
    }
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">Your Order</div>
      {orders.map(item => (
          item.key &&
          <OrderItems
          key={item.key}
          item={item}
          handleRemove={()=>removeItem(item)}
          />
      ))}
      <div className="panel-block">Items: {orders.length}</div>
    </div>
  );
}

export default Order;