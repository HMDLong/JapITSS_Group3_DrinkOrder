import React from 'react';
import useStorage from '../hook/orderStorage'
import OrderItems from "./OrderItems";

function Order({}){
  const [orders, putOrders, clearOrders] = useStorage();
  let total=0, number=0;
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

  const handleSum = () => {
      orders.map( o => {
          total += o.price * o.quantity;
          number += o.quantity;
      });
      return {total, number};
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
                        />
                    ))}
                    <tr>
                        <th colSpan='3'>合計</th>
                        <th>{handleSum().number}</th>
                        <th>{handleSum().total}</th>
                        <th></th>
                    </tr>

                    </tbody>
                </table>
            </div>

        }
      <div className="panel-block">Items: {orders.length}</div>
    </div>
  );
}

export default Order;