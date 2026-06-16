import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef(null);
  const wave2Ref = useRef(null);
  const wave1Ref = useRef(null);
  const buildingRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const o = {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      };

      gsap.fromTo(wave2Ref.current, { yPercent: -10 }, { yPercent: 35, ease: "none", scrollTrigger: o });
      gsap.fromTo(wave1Ref.current, { yPercent: -5 }, { yPercent: 20, ease: "none", scrollTrigger: o });
      gsap.fromTo(buildingRef.current, { yPercent: -2 }, { yPercent: 6, ease: "none", scrollTrigger: o });
      gsap.fromTo(circleRef.current, { yPercent: 0 }, { yPercent: 5, ease: "none", scrollTrigger: o });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <section className="top-intro">
        <div className="top-intro__mask">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      
      <section className="top-mv js-top-mv" ref={containerRef}>
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80" media="(min-width: 768px)" width="3200" height="2000" />
          <img className="base wave2 js-wave2" ref={wave2Ref} src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80" width="1125" height="1820" alt="" />
        </picture>
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80" media="(min-width: 768px)" width="3200" height="2000" />
          <img className="land js-land" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" width="1125" height="1820" alt="" />
        </picture>
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" media="(min-width: 768px)" width="3200" height="2000" />
          <img className="wave1 js-wave1" ref={wave1Ref} src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80" width="1125" height="1820" alt="" />
        </picture>
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80" media="(min-width: 768px)" width="3200" height="2000" />
          <img className="circle js-circle" ref={circleRef} src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80" width="1125" height="1820" alt="" />
        </picture>
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80" media="(min-width: 768px)" width="3200" height="2000" />
          <img className="building js-building" ref={buildingRef} src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80" width="1125" height="1820" alt="" />
        </picture>
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80" media="(min-width: 768px)" width="3200" height="2000" />
          <img className="people js-people" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80" width="1125" height="1820" alt="" />
        </picture>

        <div className="hero-content">
          <div className="hero-gradient-mask"></div>
          <div className="hero-panel">
            <span className="hero-eyebrow">Est. 1924 — Cascade Mountains</span>
            <p className="hero-headline">Journey<br />Through<br />the Cascades</p>
            <p className="hero-sub">Slow trains through wild country.<br />Scenic routes across timeless peaks.</p>
            <div className="hero-rule"></div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>342</strong><span>Miles of Track</span></div>
              <div className="hero-stat"><strong>18</strong><span>Scenic Stations</span></div>
              <div className="hero-stat"><strong>1924</strong><span>Est.</span></div>
            </div>
            <div className="hero-actions">
              <a href="#journeys" className="hero-btn-primary">Book Your Journey</a>
              <a href="#routes" className="hero-btn-ghost">View Routes</a>
            </div>
            <div className="hero-departure">
              <div className="departure-dot"></div>
              <div>
                <span className="departure-tag">Next Departure</span>
                <span className="departure-name">Cascade Summit Express</span>
              </div>
              <span className="departure-time">09:15</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}