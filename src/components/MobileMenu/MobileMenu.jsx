/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MobileMenu.scss';


export const MobileMenu = ({ isMenuOpened, closeMenu }) => {
  return (
    <nav className={`hamburger-menu ${isMenuOpened ? 'hamburger-menu--open' : ''}`} id="menu">
      <div className="hamburger-menu__header__container">
        <a href="#" className="hamburger-menu__logo">Logo Here</a>
        <button type="button" onClick={closeMenu} className="hamburger-menu__icon-link" aria-label="Close menu"> </button>
      </div>
      <ul className="list">
        <li>
          <a className="list__item" href="/home">Home</a>
        </li>
        <li>
          <a className="list__item" href="/features">Features</a>
        </li>
        <li>
          <a className="list__item" href="/blog">Blog</a>
        </li>
        <li>
          <a className="list__item" href="/shop">Shop</a>
        </li>
        <li>
          <a className="list__item" href="/about">About</a>
        </li>
        <li>
          <a className="list__item" href="/contact">Contact</a>
        </li>
      </ul>
      <div className="hamburger-menu__footer__container">
        <a href="#" className="hamburger-menu__item">
          <div className="hamburger-menu__profile"></div>
        </a>
        <a href="#" className="hamburger-menu__item">
          <div className="hamburger-menu__cart"></div>
        </a>
      </div>
    </nav>
  );
};