import React, { useState } from 'react';

import Menu from './Menu.js';
import Order from './Order.js';

function Main(){
  const [activeTab, setActive] = useState(1);

  const tabs = [
    {id: 1, title: 'メニュー'},
    {id: 2, title: '注文'}
  ];

  return (
    <div className="container">
      <section className="hero is-primary">
          <div className="hero-body">
              <p className="title has-text-centered">
                  飲み物を注文するアプリ
              </p>
              <figure className="image is-fullwidth">
                  <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-summer-seaside-summer-drink-blue-cold-banner-image_161245.jpg" alt=''></img>
              </figure>
          </div>
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