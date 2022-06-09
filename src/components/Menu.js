import React, { useState } from 'react';
import { getKey } from '../utils/utils.js';
import MenuItem from './MenuItem.js';
import Search from "./Search";
import useStorage from "../hook/orderStorage";

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
          o.quantity += order.quantity;
        }
        return o;
      });
      putOrders(changeOrders);
    }
  }

  const handleSearch = query =>{
    putQuery(query);
  };

  const [items, putItems] = useState([
    { key: getKey(), name: 'ミルクティー', price:  500, image_src: 'https://phuclong.com.vn/uploads/dish/8a92bb4b37c012-cafe5mon01.png'},
    { key: getKey(), name: 'アイスクリーム', price: 550, image_src: 'https://phuclong.com.vn/uploads/dish/8ebb07f0eeccc1-resize_damdadunggu07.png' },
    { key: getKey(), name: 'ウーロン茶', price: 600, image_src: 'https://phuclong.com.vn/uploads/dish/5318362664d05b-trlongdu.png' },
    { key: getKey(), name: '里芋ミルクティー', price: 620, image_src: 'https://phuclong.com.vn/uploads/dish/4a625d6564e694-sinhtdu.png' },
    { key: getKey(), name: '抹茶', price: 640, image_src: 'https://phuclong.com.vn/uploads/dish/d1cd8bafdefe9d-matchalattephclong.png' },
    { key: getKey(), name: 'リンゴジュース', price: 650, image_src: 'https://phuclong.com.vn/uploads/dish/1c28e98e3cf766-topphclong.png' },
    { key: getKey(), name: 'マンゴージュース', price: 700, image_src: 'https://phuclong.com.vn/uploads/dish/25a95ceca023f9-sinhtxoi.png' },
    { key: getKey(), name: 'チョコレート', price: 720, image_src: 'https://phuclong.com.vn/uploads/dish/c1043b2fa58b01-sclacphxay.png' },
    { key: getKey(), name: 'カプチーノ', price: 750, image_src: 'https://phuclong.com.vn/uploads/dish/d12b476cb8261d-cphcappuccinoxay.png' }
  ]);

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