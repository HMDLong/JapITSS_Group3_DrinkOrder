import React, { useState } from 'react';
import { getKey } from '../utils/utils.js';
import MenuItem from './MenuItem.js';

function Menu(){
  const col_nums = 4;
  
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
  
  return (
    <section className="section">
      <div className="container">
        <div className="block">
          <h3 className="title has-text-centered is-size-4">Our drink</h3>
        </div>
        <div className="columns mt-5 is-8 is-variable is-active">
          <div className="column is-4-tablet is-3-desktop">
            {
              items.filter(( _ , i) => i % col_nums === 0).map(item => (
                <MenuItem
                  item={item}
                />
              ))
            }
          </div>
          <div className="column is-4-tablet is-3-desktop">
            {
              items.filter(( _ , i) => i % col_nums === 1).map(item => (
                <MenuItem
                  item={item}
                />
              ))
            }
          </div>
          <div className="column is-4-tablet is-3-desktop">
            {
              items.filter(( _ , i) => i % col_nums === 2).map((item) => (
                <MẹnuItem
                  item={item}
                />
              ))
            }
          </div>
          <div className="column is-4-tablet is-3-desktop">
            {
              items.filter(( _ , i) => i % col_nums === 3).map((item) => (
                <MenuItem
                  item={item}
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