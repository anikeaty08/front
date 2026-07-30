import React, { useEffect } from 'react';

export default function App() {
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

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'dark': '#000000',
                        'accent': '#dc2626',
                        'light': '#efeeec'
                    },
                    fontFamily: {
                        'mono': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
                        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
                    }
                }
            }
        }
    


        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add staggered animation delays to buttons
        document.querySelectorAll('.button').forEach(button => {
            const letters = button.querySelectorAll('.single-letter');
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.05}s`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="nav-bar">
<div className="nav-inner">
<div className="logo">Neural</div>
<div className="nav-links">
<a className="nav-link" href="#hero">Home</a>
<a className="nav-link" href="#features">Features</a>
<a className="nav-link" href="#solutions">Solutions</a>
<a className="nav-link" href="#contact">Contact</a>
<a className="button" href="#">
<span className="single-letter">G</span><span className="single-letter">e</span><span className="single-letter">t</span>
<span className="single-letter"> </span>
<span className="single-letter">S</span><span className="single-letter">t</span><span className="single-letter">a</span><span className="single-letter">r</span><span className="single-letter">t</span><span className="single-letter">e</span><span className="single-letter">d</span>
</a>
</div>
</div>
</nav>

<section id="hero">
<div className="home-hero__inner">
<div>
<div className="eyebrow mask">
<div className="single-line">Next-Gen Logistics</div>
</div>
<h1 className="h-display mask">
<div className="single-line">AI-Powered</div>
<div className="single-line">Supply</div>
<div className="single-line">Revolution</div>
</h1>
<div style={{marginTop: `2rem`, marginBottom: `3rem`}}>
<p className="p-reg">
                        Transform your supply chain with intelligent automation, predictive analytics, and real-time optimization that adapts to market changes instantly.
                    </p>
</div>
<div style={{display: `flex`, gap: `1rem`, flexWrap: `wrap`}}>
<a className="button" href="#">
<span className="single-letter">S</span><span className="single-letter">t</span><span className="single-letter">a</span><span className="single-letter">r</span><span className="single-letter">t</span>
<span className="single-letter"> </span>
<span className="single-letter">F</span><span className="single-letter">r</span><span className="single-letter">e</span><span className="single-letter">e</span>
<span className="single-letter"> </span>
<span className="single-letter">T</span><span className="single-letter">r</span><span className="single-letter">i</span><span className="single-letter">a</span><span className="single-letter">l</span>
</a>
<a className="button is--secondary" href="#">
<span className="single-letter">W</span><span className="single-letter">a</span><span className="single-letter">t</span><span className="single-letter">c</span><span className="single-letter">h</span>
<span className="single-letter"> </span>
<span className="single-letter">D</span><span className="single-letter">e</span><span className="single-letter">m</span><span className="single-letter">o</span>
</a>
</div>
<div className="metric-display">
<div className="metric">
<div className="metric-value">99.9%</div>
<div className="metric-label">Accuracy</div>
</div>
<div className="metric">
<div className="metric-value">-40%</div>
<div className="metric-label">Costs</div>
</div>
<div className="metric">
<div className="metric-value">24/7</div>
<div className="metric-label">Monitoring</div>
</div>
</div>
</div>
<div className="hero-visual">
<div className="grid-pattern"></div>
</div>
</div>
</section>

<div className="section-divider"></div>

<section id="features" style={{paddingTop: `8rem`}}>
<div style={{maxWidth: `1400px`, margin: `0 auto`, padding: `0 2rem`}}>
<div style={{textAlign: `center`, marginBottom: `4rem`}}>
<div className="eyebrow">Intelligent Features</div>
<h2 className="h-display" style={{fontSize: `clamp(2rem, 5vw, 4rem)`, marginTop: `1rem`}}>
                    Cutting-edge Technology
                </h2>
</div>
<div className="feature-grid">
<div className="feature-card">
<div className="icon-container">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" style={{color: `var(--color-primary)`}} viewBox="0 0 24 24" width="24">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<h3 style={{fontSize: `1.5rem`, fontWeight: `600`, marginBottom: `1rem`, color: `var(--color-primary)`}}>Predictive Analytics</h3>
<p className="p-reg">Advanced AI algorithms predict demand patterns and optimize inventory levels automatically.</p>
</div>
<div className="feature-card">
<div className="icon-container">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" style={{color: `var(--color-primary)`}} viewBox="0 0 24 24" width="24">
<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
</svg>
</div>
<h3 style={{fontSize: `1.5rem`, fontWeight: `600`, marginBottom: `1rem`, color: `var(--color-primary)`}}>Real-time Tracking</h3>
<p className="p-reg">Monitor your entire supply chain in real-time with instant alerts and updates.</p>
</div>
<div className="feature-card">
<div className="icon-container">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="2" style={{color: `var(--color-primary)`}} viewBox="0 0 24 24" width="24">
<path d="M17 6.1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V8.1a2 2 0 0 0-2-2z"></path>
<path d="M22 4v5l-7-3 7-2z"></path>
</svg>
</div>
<h3 style={{fontSize: `1.5rem`, fontWeight: `600`, marginBottom: `1rem`, color: `var(--color-primary)`}}>Smart Integration</h3>
<p className="p-reg">Seamlessly connect with existing systems and automate workflow processes.</p>
</div>
</div>
</div>
</section>

<div className="divider"></div>

<section id="solutions" style={{padding: `4rem 0`}}>
<div style={{maxWidth: `1400px`, margin: `0 auto`, padding: `0 2rem`}}>
<div className="home-hero__inner" style={{minHeight: `auto`, padding: `0`}}>
<div>
<div className="eyebrow">Enterprise Solutions</div>
<h2 className="h-display" style={{fontSize: `clamp(2rem, 5vw, 4rem)`, marginTop: `1rem`, marginBottom: `2rem`}}>
                        Global Network Optimization
                    </h2>
<p className="p-reg" style={{marginBottom: `2rem`}}>
                        Leverage machine learning to optimize routes, reduce costs, and improve delivery times across your global network.
                    </p>
<ul style={{listStyle: `none`, padding: `0`, marginBottom: `3rem`}}>
<li style={{display: `flex`, alignItems: `center`, marginBottom: `1rem`}}>
<span style={{width: `8px`, height: `8px`, background: `var(--color-primary)`, marginRight: `1rem`}}></span>
                            Dynamic route optimization
                        </li>
<li style={{display: `flex`, alignItems: `center`, marginBottom: `1rem`}}>
<span style={{width: `8px`, height: `8px`, background: `var(--color-primary)`, marginRight: `1rem`}}></span>
                            Demand forecasting
                        </li>
<li style={{display: `flex`, alignItems: `center`}}>
<span style={{width: `8px`, height: `8px`, background: `var(--color-primary)`, marginRight: `1rem`}}></span>
                            Risk assessment
                        </li>
</ul>
</div>
<div className="center-visual">
<div className="grid-pattern"></div>
<div className="visual-content">
<div style={{fontSize: `1.5rem`, fontWeight: `600`, marginBottom: `0.5rem`}}>24/7 Global Monitoring</div>
<div className="p-reg">Real-time visibility across continents</div>
</div>
</div>
</div>
</div>
</section>

<div className="divider"></div>

<section id="contact" style={{padding: `4rem 2rem`, textAlign: `center`}}>
<div style={{maxWidth: `800px`, margin: `0 auto`}}>
<div className="eyebrow">Get Started</div>
<h2 className="h-display" style={{fontSize: `clamp(2rem, 5vw, 4rem)`, margin: `1rem 0 2rem`}}>
                Ready to Transform Your Supply Chain?
            </h2>
<p className="p-reg" style={{marginBottom: `3rem`}}>
                Join thousands of companies already using Neural to optimize their operations
            </p>
<div style={{display: `flex`, gap: `1rem`, justifyContent: `center`, flexWrap: `wrap`}}>
<a className="button" href="#">
<span className="single-letter">S</span><span className="single-letter">t</span><span className="single-letter">a</span><span className="single-letter">r</span><span className="single-letter">t</span>
<span className="single-letter"> </span>
<span className="single-letter">F</span><span className="single-letter">r</span><span className="single-letter">e</span><span className="single-letter">e</span>
<span className="single-letter"> </span>
<span className="single-letter">T</span><span className="single-letter">r</span><span className="single-letter">i</span><span className="single-letter">a</span><span className="single-letter">l</span>
</a>
<a className="button is--secondary" href="#">
<span className="single-letter">S</span><span className="single-letter">c</span><span className="single-letter">h</span><span className="single-letter">e</span><span className="single-letter">d</span><span className="single-letter">u</span><span className="single-letter">l</span><span className="single-letter">e</span>
<span className="single-letter"> </span>
<span className="single-letter">D</span><span className="single-letter">e</span><span className="single-letter">m</span><span className="single-letter">o</span>
</a>
</div>
</div>
</section>


    </>
  );
}
