import React from 'react';
import {APP_NAME} from "../constants/Config";


export default function Header(): JSX.Element {
  return (
    <header>
      <div className="d-flex align-items-center my-3">
        <img className="logo me-3" src={'/logo.png'} alt={APP_NAME} onClick={() => window.location.href = '/'}/>
        <div className="d-flex flex-column me-5">
          <span className="title">{APP_NAME}</span>
          <span className="sub-title">Сеть пиццерий №1 в России</span>
        </div>
        <div className="d-flex flex-column">
          <div>
            <span>Доставка пиццы</span>
            <span className="city">&nbsp;Белгород</span>
          </div>
          <div>
            <span>35 мин &middot; 4.77</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
      </div>
    </header>
  );
};
