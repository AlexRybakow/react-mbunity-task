/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, useState } from "react";
import './Footer.scss';

export const Footer = memo(() => {
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="footer__logo__conatainer">
        <a href="#" className="footer__logo">
          Logo Here
        </a>
      </div>
      
      <div className="footer__onDesktop">
        <div className="footer__group__container">
          <div className="footer__group reach-us">
            <h2 className="footer__group__header">Reach us</h2>
            <ul className="footer__group">
              <li className="footer__list__item">
                <a
                  href="tel:+1012 3456 789"
                  className="footer__icon footer__icon-phone"
                ></a>
                <a href="tel:+1012 3456 789" className="footer__item">
                  +1012 3456 789
                </a>
              </li>
              <li className="footer__list__item">
                <a
                  href="mailto:demo@gmail.com"
                  className="footer__icon footer__icon-mail"
                ></a>
                <a href="mailto:demo@gmail.com" className="footer__item">
                  demo@gmail.com
                </a>
              </li>
              <li className="footer__list__item">
                <a
                  href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6"
                  className="footer__icon footer__icon-location"
                ></a>
                <a
                  href="https://goo.gl/maps/oD4H5WuzsGLrWrJo6"
                  className="footer__item"
                >
                  132 Dartmouth Street
                  <br />
                  Boston, Massachusetts
                  <br />
                  02156 United States
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__group company">
            <h2 className="footer__group__header">Company</h2>
            <ul className="footer__group">
              <li>
                <a href="#" className="footer__item">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer__item">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer__item">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__group__container">
          <div className="footer__group">
            <h2 className="footer__group__header">Legal</h2>
            <ul className="footer__group">
              <li>
                <a href="#" className="footer__item">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer__item">
                  Terms & Services
                </a>
              </li>
              <li>
                <a href="#" className="footer__item">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="footer__item">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__group">
            <h2 className="footer__group__header">Quick Links</h2>
            <ul className="footer__group">
              <li className="footer__item__wrapper">
                <a href="#" className="footer__item">
                  Techlabz Keybox
                </a>
              </li>
              <li className="footer__item__wrapper">
                <a href="#" className="footer__item">
                  Downloads
                </a>
              </li>
              <li className="footer__item__wrapper">
                <a href="#" className="footer__item">
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form action="" onSubmit={event => {event.preventDefault(); setEmail('')}} className="newsletterForm">
          <h2 className="newsletterForm__header">Join Our Newsletter</h2>

          <div className="newsletterForm__input__container">
            <input 
              type="email" 
              placeholder='Your email address' 
              className="newsletterForm__input"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <button type='submit' className="newsletterForm__btn" >
              Subscribe
            </button>
          </div>  

          <p className="newsletterForm__text">
            *Will send you weekly updates for your better tool management.
          </p>
        </form>
      </div>
    </footer>
  );
})