import React, { useState } from 'react';
import MenuItem from './MenuItem.js';
import Search from "./Search";
import useStorage from "../hook/orderStorage";
import {drinks} from "../utils/drinkList";

function Menu(){
  const col_nums = 4;

  const [query, putQuery] = useState('');
  const [orders, putOrders] = useStorage();

  const handleAdd = (item, quantity) => {
    if (quantity === 0) return;
    let order = {...item, quantity};
    if (!orders.find(o => o.key === order.key))
    {
      let newOrders = [...orders]
      newOrders.push(order);
      putOrders(newOrders);
    }
    else
    {
      const changeOrders = orders.map(o => {
        if (o.key === order.key) {
          o.quantity = order.quantity;
        }
        return o;
      });
      putOrders(changeOrders);
    }
  }

  const handleSearch = query =>{
    putQuery(query);
  };

  const [items, putItems] = useState(drinks);

  const getData = () => {
    let drinkList = items;
    if (query)
      drinkList = items.filter(
          item => item.name.toLowerCase().match(query.toLowerCase())
      );
    return {displayList: drinkList}
  }

  const {displayList} = getData();

  return (
    <section className="section">
      <div className="container">
        <Search
            value={query}
            onchange={handleSearch}
        />

        <div className="block">
          <h3 className="title has-text-centered is-size-4">ドリンク</h3>
        </div>
        <div className="columns mt-5 is-8 is-variable is-active　pt-6">
          <div className="column is-4-tablet is-3-desktop">
            {
              displayList.filter(( _ , i) => i % col_nums === 0).map(item => (
                <MenuItem
                    key={item.key}
                    item={item}
                    onAdd={handleAdd}
                />
              ))
            }
          </div>
          <div className="column is-4-tablet is-3-desktop">
            {
              displayList.filter(( _ , i) => i % col_nums === 1).map(item => (
                <MenuItem
                  item={item}
                  key={item.key}
                  onAdd={handleAdd}
                />
              ))
            }
          </div>
          <div className="column is-4-tablet is-3-desktop">
            {
              displayList.filter(( _ , i) => i % col_nums === 2).map((item) => (
                <MenuItem
                  item={item}
                  key={item.key}
                  onAdd={handleAdd}
                />
              ))
            }
          </div>
          <div className="column is-4-tablet is-3-desktop">
            {
              displayList.filter(( _ , i) => i % col_nums === 3).map((item) => (
                <MenuItem
                  item={item}
                  key={item.key}
                  onAdd={handleAdd}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>

  )
}

export default Menu;