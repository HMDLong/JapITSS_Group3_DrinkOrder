import React from 'react';
import useStorage from '../hook/orderStorage'
import OrderItems from "./OrderItems";

function Order({}){
  const [orders, putOrders, clearOrders] = useStorage();
  let total = 0;

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

  const handleSum = (item) => {
      total += item.price * item.quantity;
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">Your Order</div>
        {(orders.length !== 0) &&
            <div className='panel-block'>
                <table className='table is-hoverable'>
                    <thead>
                    <th></th>
                    <th>ドリンク</th>
                    <th>単価</th>
                    <th>数量</th>
                    <th>価額</th>
                    <th></th>
                    </thead>
                    <tbody>
                    {orders.map(item => (
                        item.key &&
                        <OrderItems
                            key={item.key}
                            item={item}
                            handleRemove={()=>removeItem(item)}
                            onSum={()=>handleSum(item)}
                        />
                    ))}
                    <tr></tr>
                    <th colSpan='4'>合計</th>
                    <th>{total}</th>
                    <th></th>
                    </tbody>
                </table>
            </div>

        }
      <div className="panel-block">Items: {orders.length}</div>
    </div>
  );
}

export default Order;