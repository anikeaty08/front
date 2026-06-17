import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useReveal } from './hooks/useReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import LeadSection from './components/LeadSection';
import Departures from './components/Departures';
import JourneyReports from './components/JourneyReports';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="l-main-container">
      <Header />
      <main>
        <Hero />
        <LeadSection 
          id={1}
          bgImage="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80"
          titleLine1="The Story"
          titleLine2="of the Line"
          text="For nearly a century, Traverse Railway Co. has connected the coastal lowlands to the high mountain passes.<br/><br/>Built by dreamers and maintained by generations of engineers, our tracks wind through some of the most pristine and inaccessible wilderness in the Pacific Northwest."
          buttonLabel="OUR HERITAGE"
          buttonLink="#heritage"
          images={[
            { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80", className: "people-01", width: 400, height: 500 },
            { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80", className: "people-05", width: 400, height: 500 },
            { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80", className: "people-02", width: 400, height: 500 }
          ]}
        />
        <LeadSection 
          id={2}
          bgClass="top-lead-2__bg"
          bgImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80"
          titleLine1="Restored"
          titleLine2="Elegance"
          text="Step aboard our meticulously restored 1920s Pullman cars.<br/><br/>From the polished mahogany panelling to the original brass fixtures, every detail transports you to the golden age of rail travel while providing modern comfort."
          buttonLabel="OUR FLEET"
          buttonLink="#fleet"
          images={[
            { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", className: "lead2-a", width: 400, height: 500 },
            { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", className: "lead2-b", width: 400, height: 500 },
            { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80", className: "lead2-c", width: 400, height: 500 }
          ]}
        />
        <Departures />
        <JourneyReports />
        <section className="top-bottom-contents__wrap">
          <div className="l-inner-padding">
            <ul className="c-induction__list">
              <li className="c-induction__list-item">
                <a href="#charters">
                  <div className="c-induction__title">
                    <span className="en">CHARTERS</span>
                    <span className="sub">Private Events & Charters</span>
                  </div>
                  <div className="c-induction__bk">
                    <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80" alt="Train carriage" />
                  </div>
                  <div className="c-button__rotate--en--white">
                    <span><span className="label" data-hover="Inquire Now">Inquire Now</span></span>
                  </div>
                </a>
              </li>
              <li className="c-induction__list-item">
                <a href="#dining">
                  <div className="c-induction__title">
                    <span className="en">DINING</span>
                    <span className="sub">Culinary Journeys</span>
                  </div>
                  <div className="c-induction__bk">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80" alt="Dining experience" />
                  </div>
                  <div className="c-button__rotate--en--white">
                    <span><span className="label" data-hover="View Menus">View Menus</span></span>
                  </div>
                </a>
              </li>
              <li className="c-induction__list-item">
                <a href="#fleet">
                  <div className="c-induction__title">
                    <span className="en">FLEET</span>
                    <span className="sub">Our Historic Trains</span>
                  </div>
                  <div className="c-induction__bk">
                    <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80" alt="Historic train fleet" />
                  </div>
                  <div className="c-button__rotate--en--white">
                    <span><span className="label" data-hover="Explore Fleet">Explore Fleet</span></span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}