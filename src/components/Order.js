import React from 'react';
import useStorage from '../hook/orderStorage'
import OrderItems from "./OrderItems";
import Sale from "./Sale";

function Order({}){
  const [orders, putOrders, clearOrders] = useStorage();

  const addQty = (order) => {
      const changeOrders = orders.map(o => {
          if (o.key === order.key) {
              o.quantity += 1;
          }
          return o;
      });
      putOrders(changeOrders);
  }

    const reduceQty = (order) => {
        const changeOrders = orders.map(o => {
            if (o.key === order.key) {
                o.quantity -= (o.quantity === 0) ? 0: 1;
            }
            return o;
        });
        putOrders(changeOrders.filter(o => o.quantity !== 0));
    }

  const removeItem = (item) => {
    // const index = orders.indexOf(item);
    // if (index > -1) {
    //   putOrders([...orders.splice(index+1, 1)]);
    // }

    const newOrders = orders.filter(currentItem => currentItem.key !== item.key);
    putOrders(newOrders);
  }

  const handleSum = () => {
      let total = 0;
      let number = 0;
      orders.map( o => {
          total += (o.price * o.quantity);
          number += o.quantity;
      });
      return {total, number};
  }
  const {total, number} = handleSum();
  
  return (
    <div className="panel">
      <div className="panel-heading">私の注文</div>
        {(orders.length !== 0) &&
            <div className='panel-block'>
                <table className='table is-hoverable is-fullwidth'>
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
                            onAdd={() => addQty(item)}
                            onReduce={() => reduceQty(item)}
                        />
                    ))}
                    <tr>
                        <th colSpan='3'>合計</th>
                        <th>{number}</th>
                        <th>{total}</th>
                        <th></th>
                    </tr>
                    </tbody>
                    <Sale total={total}/>
                </table>
            </div>

        }

      <div className="panel-block">
          {(orders.length !== 0) &&
              <button className="button is-danger is-fullwidth"
                   onClick={clearOrders}>
                  全てのドリンクを削除
              </button>}
      </div>
        <div className="panel-block">
            {(orders.length === 0) && <p>オーダーがありません。</p>}
        </div>
    </div>
  );
}

export default Order;