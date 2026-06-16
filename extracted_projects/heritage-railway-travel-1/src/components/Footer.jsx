import React from 'react';

export default function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-footer__inner">
        <div>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="50">
              <text y="35" fontFamily="DM Serif Display,Georgia,serif" fontSize="18" fill="#ffffff" letterSpacing="2">TRAVERSE</text>
            </svg>
          </a>
          <ul className="l-footer__nav-list">
            <li><a href="#story">Our Story</a></li>
            <li><a href="#journeys">Journeys</a></li>
            <li><a href="#fleet">Our Fleet</a></li>
            <li><a href="#dining">Dining Car</a></li>
            <li><a href="#charters">Private Charters</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="l-footer__contact">
          <a className="c-button__rotate--en" href="#contact">
            <span><span className="label" data-hover="Contact Us">Contact Us</span></span>
          </a>
        </div>
      </div>
      <div className="l-footer__info">
        <ul className="l-footer__link-list">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
        </ul>
        <p className="l-footer__copy">© {new Date().getFullYear()} Traverse Railway Co. All rights reserved.</p>
      </div>
    </footer>
  );
}