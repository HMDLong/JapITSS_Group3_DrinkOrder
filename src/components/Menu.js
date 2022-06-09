import React, { useState } from 'react';
import { getKey } from '../utils/utils.js';
import MenuItem from './MenuItem.js';
import Search from "./Search";

function Menu(){
  const col_nums = 4;

  const [query, putQuery] = useState('');

  const handleSearch = query =>{
    putQuery(query);
  };

  const [items, putItems] = useState([
    { key: getKey(), name: 'ice-tea', price: 10_000 , image_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/180px-Iced_Tea_from_flickr.jpg'},
    { key: getKey(), name: 'milk-tea', price: 12_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'oolong-tea', price: 13_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'milk-tea', price: 14_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'milk-tea', price: 15_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'milk-tea', price: 16_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'milk-tea', price: 17_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'milk-tea', price: 18_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' },
    { key: getKey(), name: 'milk-tea', price: 19_000, image_src: 'https://waoteacoffee.vn/storage/app/uploads/public/607/070/73c/thumb_409_600_0_0_0_auto.jpeg' }
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