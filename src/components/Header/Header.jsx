/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.scss';
import dropdownIcon from '../../assets/caret-down-solid.svg'


export const Header = ({ openMenu }) => {
  return (
    <header>
      <div className="header__container">
        <a href="#" className="header__logo">Logo Here</a>
        <button type="button" onClick={openMenu} className="header__icon-link" aria-label="Menu"></button>
        <nav className="header__nav">
          <div className="header__nav__list">
              <a href="#" className="header__item">Home</a>
            <div className="dropdown">
              <a href="#" className="header__item">Features</a>
              <img src={dropdownIcon} alt="dropdown" className="image"/>
              <div class="dropdown-content">
                <a href="#">Feature 1</a>
                <a href="#">Feature 2</a>
                <a href="#">Feature 3</a>
              </div>
            </div> 
              <a href="#" className="header__item">Blog</a>
              <a href="#" className="header__item">Shop</a>
              <a href="#" className="header__item">About</a>
              <a href="#" className="header__item">Contact</a> 
          </div>
          <div className="header__icon__items__container">
            <a href="#" className="header__icon__container">
              <div className="header__icon__item header__icon__profile"></div>
            </a>
            <a href="#" className="header__icon__container">
              <div className="header__icon__item header__icon__cart"></div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};