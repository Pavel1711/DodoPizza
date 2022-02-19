import React from 'react';
import Cart from "./Cart";


export default function Navigation(): JSX.Element {
  const navItem = [
    {
      name: 'Пицца',
      href: '#pizza'
    },
    {
      name: 'Комбо',
      href: '#combo'
    },
    {
      name: 'Закуски',
      href: '#snacks'
    },
    {
      name: 'Десерты',
      href: '#desserts'
    },
    {
      name: 'Напитки',
      href: '#drinks'
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {navItem.map((nav, key) => (
            <li className="nav-item" key={key}>
              <a className="nav-link" href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <Cart/>
    </nav>
  )
};
