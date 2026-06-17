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



        document.addEventListener('DOMContentLoaded', function() {
            const heroPanel = document.getElementById('hero-panel');
            const header = document.querySelector('.main-header');
            const heroWrapper = document.querySelector('.hero-section-wrapper');
            
            if (!heroPanel) return;

            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            
            window.addEventListener('mousemove', function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            const parallaxLayers = heroPanel.querySelectorAll('.parallax-layer');

            function parallaxUpdate() {
                if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    requestAnimationFrame(parallaxUpdate);
                    return;
                }

                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const moveX = mouseX - centerX;
                const moveY = mouseY - centerY;
                
                parallaxLayers.forEach(function(layer) {
                    const depth = layer.dataset.depth || 0;
                    const offsetX = moveX * depth * -1;
                    const offsetY = moveY * depth * -1;
                    layer.style.transform = 'translate3d(' + (offsetX/10) + 'px, ' + (offsetY/10) + 'px, 0)';
                });
                
                requestAnimationFrame(parallaxUpdate);
            }

            requestAnimationFrame(parallaxUpdate);

            const scrollObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                        heroPanel.classList.add('scrolled-past');
                    } else {
                        heroPanel.classList.remove('scrolled-past');
                    }
                });
            }, { threshold: 0 });

            if (heroWrapper) {
                scrollObserver.observe(heroWrapper);
            }
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
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
      
<div className="hero-section-wrapper" id="hero-wrapper">
<header className="main-header">
<div className="container">
<a className="logo" href="#">S</a>
<nav className="main-nav">
<a href="#">Showcase</a>
<a href="#">Features</a>
<a href="#">Community</a>
<a href="#">Pricing</a>
</nav>
<div className="header-actions">
<a className="cta-button" href="#">Start Creating</a>
</div>
</div>
</header>
<div className="hero-panel" id="hero-panel">
<div className="hero-panel-inner">
<div className="parallax-layer hero-aurora" data-depth="0.1"></div>
<div className="parallax-layer" data-depth="0.2">
<svg className="svg-lines" preserveaspectratio="xMidYMid meet" viewbox="0 0 1360 600">
<path d="M246,98 C350,150 450,280 680,300"></path>
<path d="M1154,128 C1050,180 900,280 680,300"></path>
<path d="M140,450 C300,380 450,320 680,300"></path>
<path d="M1250,480 C1100,400 900,320 680,300"></path>
</svg>
</div>
<div className="parallax-layer" data-depth="0.6">
<div className="data-points-layer">
<div className="data-point" id="dp1"><span className="label">Render Core</span><br/>v4.2</div>
<div className="data-point" id="dp2"><span className="label">Audio Engine</span><br/>v2.8</div>
<div className="data-point" id="dp3"><span className="label">Physics Sim</span><br/>Enabled</div>
<div className="data-point" id="dp4"><span className="label">Textural AI</span><br/>Online</div>
</div>
</div>
<div className="parallax-layer hero-content" data-depth="0.15">
<h1>Sculpt Reality from Pure Imagination</h1>
<p>Synapse is a next-generation creative suite that translates abstract concepts into breathtaking visuals, soundscapes, and interactive worlds.</p>
<div className="hero-buttons">
<a className="btn btn-secondary" href="#">Launch Studio</a>
<a className="btn btn-primary" href="#">View Showcase</a>
</div>
</div>
<div className="parallax-layer" data-depth="0.1">
<div className="hero-panel-footer">
<span>Powered by Synapse AI</span>
</div>
</div>
</div>
</div>
</div>
<div className="page-content-wrapper">
<section className="partners-section">
<div className="container">
<div className="partners-grid">
<div className="partner-logo">Behance</div>
<div className="partner-logo">ArtStation</div>
<div className="partner-logo">Adobe</div>
<div className="partner-logo">Figma</div>
<div className="partner-logo">Unreal Engine</div>
<div className="partner-logo">Pixar</div>
</div>
</div>
</section>
</div>


    </>
  );
}
