import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to avoid weird states
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <header id="js-header" className="l-header" data-page="top">
      <div className="l-header__inner">
        <div className="l-header__title">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="50">
              <text y="35" fontFamily="DM Serif Display,Georgia,serif" fontSize="18" fill="#1c2230" letterSpacing="2">TRAVERSE</text>
            </svg>
          </a>
        </div>
        <div className="l-header__items">
          <div className="l-header__link u-hide-max-tab">
            <a className="c-button__rotate--en" href="#" rel="noopener noreferrer" target="_blank">
              <span><span className="label" data-hover="Plan Your Journey">Plan Your Journey</span></span>
            </a>
            <a className="c-button__rotate--en" href="#" rel="noopener noreferrer" target="_blank">
              <span><span className="label" data-hover="Book Tickets">Book Tickets</span></span>
            </a>
          </div>
          <div className="l-header__english">
            <a className="c-button__en" href="#" target="_blank" rel="noopener noreferrer">TICKETS</a>
          </div>
          <button 
            className="l-header__open-button" 
            aria-label="Open menu" 
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <span className="l-header__open-line"></span>
            <span className="l-header__open-line"></span>
            <span className="l-header__open-line"></span>
          </button>
        </div>
      </div>
      <div className={`l-header__nav ${isOpen ? 'is-open' : 'is-close'}`} data-lenis-prevent="">
        <div className="l-header__nav-inner">
          <nav>
            <ul className="l-header__nav-list">
              <li><a href="/" onClick={() => setIsOpen(false)}><span className="en">HOME</span><span className="sub">Home</span></a></li>
              <li><a href="#story" onClick={() => setIsOpen(false)}><span className="en">OUR STORY</span><span className="sub">Our Story</span></a></li>
              <li><a href="#departures" onClick={() => setIsOpen(false)}><span className="en">DEPARTURES</span><span className="sub">Departures</span></a></li>
              <li><a href="#journeys" onClick={() => setIsOpen(false)}><span className="en">JOURNEYS</span><span className="sub">Journeys & Experiences</span></a></li>
              <li><a href="#stories" onClick={() => setIsOpen(false)}><span className="en">STORIES</span><span className="sub">Passenger Stories</span></a></li>
              <li><a href="#heritage" onClick={() => setIsOpen(false)}><span className="en">HERITAGE</span><span className="sub">Safety & Heritage</span></a></li>
            </ul>
          </nav>
          <div className="l-header__link u-hide-min-tab">
            <a className="c-button__rotate--en" href="#" rel="noopener noreferrer" target="_blank">
              <span><span className="label" data-hover="Plan Your Journey">Plan Your Journey</span></span>
            </a>
            <a className="c-button__rotate--en" href="#" rel="noopener noreferrer" target="_blank">
              <span><span className="label" data-hover="Book Tickets">Book Tickets</span></span>
            </a>
          </div>
        </div>
        <button 
          className="l-header__close-button" 
          aria-label="Close menu" 
          onClick={() => setIsOpen(false)}
        >
          <span className="l-header__close-line"></span>
          <span className="l-header__close-line"></span>
        </button>
      </div>
    </header>
  );
}