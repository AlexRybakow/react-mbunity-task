/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react';
import './ContactsBar.scss';

export const ContactsBar = () => {
  return (
    <div className="contacts-container">
      <div>
        <h2 className="contacts-container__header">Contact Information</h2>
        <p className="contacts-container__text">
          Say something to start a live chat!
        </p>
      </div>
      <ul className="contacts-container__list">
        <li className="contacts-container__list__item">
          <a
            href="#"
            className="
            contacts-container__icon__item 
            contacts-container__icon__item-phone
          "
          ></a>
          <a href="#" className="contacts-container__item">+1012 3456 789</a>
        </li>
        <li className="contacts-container__list__item">
          <a
            href="#"
            className="
            contacts-container__icon__item 
            contacts-container__icon__item-mail
          "
          ></a>
          <a href="#" className="contacts-container__item">demo@gmail.com</a>
        </li>
        <li className="contacts-container__list__item">
          <a
            href="#"
            className="
            contacts-container__icon__item 
            contacts-container__icon__item-location"
          ></a>
          <a href="#" className="contacts-container__item">
            132 Dartmouth Street Boston,
            <br />
            Massachusetts 02156 United States
          </a>
        </li>
      </ul>
      <div className="contacts-container__icons__container">
        <a href="#" className="contacts-container__icon">
          <div className="contacts-container__icon__twitter" />
        </a>
        <a href="#" className="contacts-container__icon">
          <div className="contacts-container__icon__instagram" />
        </a>
        <a href="#" className="contacts-container__icon">
          <div className="contacts-container__icon__discord" />
        </a>
      </div>
    </div>
  )
}