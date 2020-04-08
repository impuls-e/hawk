import { Link } from 'gatsby';
import React, { useState } from 'react';
import Hero from '../Hero/';
import './styles.css';

export default function Header({ headerLogo, profileIcon, cartIcon, searchIcon }) {
  const [ classOn, setClassOn ] = useState('');
  const [ show, setShow ] = useState(false);
  const menu = {
    links: [
      {
        id: 1,
        path: '/camisetas',
        text: 'camisetas'
      },
      {
        id: 2,
        path: '/shorts',
        text: 'shorts'
      },
      {
        id: 3,
        path: '/calças',
        text: 'calças'
      },
      {
        id: 4,
        path: '/acessorios',
        text: 'acessórios'
      }
    ]
  };

  function handleMenu() {
    document.body.style.overflow = show ? 'initial' : 'hidden';
    show ? setClassOn('') : setClassOn('on');
    setShow(!show);
  }

  return (
    <React.Fragment>
      <header>
        <div className="header-menu">
          <div className={`menu-section ${classOn}`}>
            <div onClick={handleMenu} className="menu-toggle">
              <div className="one" />
              <div className="two" />
              <div className="three" />
            </div>
          </div>

          <img src={headerLogo} alt="Hawk logo" />

          <nav>
            <ul>
              {menu.links.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="user-session">
            <img className="searchIcon" src={searchIcon} alt="Hawk search" />
            <img src={profileIcon} alt="Hawk profile" />
            <img src={cartIcon} alt="Hawk cart" />
          </div>
        </div>
        <div className="search-area">
          <p>O que você procura ?</p>
          <img src={searchIcon} alt="Hawk search" />
        </div>
      </header>
      <div />

      <Hero />
    </React.Fragment>
  );
}
