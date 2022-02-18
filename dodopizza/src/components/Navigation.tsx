import React from 'react';
import Cart from "./Cart";


export default function Navigation(): JSX.Element {
  const navItem = [
    {
      name: 'Пицца',
      href: '/'
    },
    {
      name: 'Комбо',
      href: '/'
    },
    {
      name: 'Закуски',
      href: '/'
    },
    {
      name: 'Десерты',
      href: '/'
    },
    {
      name: 'Напитки',
      href: '/'
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
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
