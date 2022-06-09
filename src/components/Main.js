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
                  <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-cold-drink-poster-background-material-image_151003.jpg" alt='' height='50'></img>
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
                    <b>{tab.title}</b>
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