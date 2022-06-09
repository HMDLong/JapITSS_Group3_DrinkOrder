import React, { useState } from 'react';

import Menu from './Menu.js';
import Order from './Order.js';

function Main(){
  const [activeTab, setActive] = useState(1);

  const tabs = [
    {id: 1, title: 'Menu'},
    {id: 2, title: 'Order'}
  ];

  return (
    <div className="container">
      <section className="hero">
        <figure className="image">
          <img src="https://png.pngtree.com/background/20210711/original/pngtree-icy-summer-fruit-drink-poster-banner-picture-image_1090670.jpg" alt=''></img>
        </figure>
      </section>
      <div className="container is-fluid">
        <div className="tabs">
          <ul>
            {
              tabs.map(tab => (
                <li className={tab.id === activeTab? 'is-active' : ''} key={tab.id}>
                  <a onClick={() => setActive(tab.id)}>
                    {tab.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        {activeTab === 1? <Menu/> : <Order/>}
      </div>
    </div>
  );
}

export default Main;