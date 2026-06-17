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
      

<header className="nav-header">
<div className="container flex justify-between items-center">
<a className="logo" href="#">
<div className="logo-mark"></div>
<span>Hello Emberly</span>
</a>
<nav style={{display: 'flex', gap: '1.5rem'}}>
<a className="text-small" href="#about" style={{color: 'var(--text-muted)'}}>About</a>
<a className="text-small" href="#login" style={{color: 'var(--text-main)'}}>Sign In</a>
</nav>
</div>
</header>

<main style={{flex: '1'}}>
<section className="container" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
<div className="grid grid-hero">

<div>
<div className="badge">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M2 12h20"></path><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
<span>Dignity-First Design</span>
</div>
<h1>You are never alone in a village.</h1>
<p style={{maxWidth: '50ch'}}>
            A gentle companion for connection, memory, and purpose. Designed to be calm, private, and non-clinical. We move at your pace.
          </p>
<div className="flex" style={{gap: '1rem', flexWrap: 'wrap'}}>
<a className="btn btn-primary" href="#">
              Begin Journey
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="btn btn-secondary" href="#learn">
              How it works
            </a>
</div>
<div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: 'var(--text-xs)'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span>Private &amp; Encrypted • No Ads • Family Owned</span>
</div>
</div>

<div aria-hidden="true" className="constellation">

<div className="star star-lg" style={{top: '30%', left: '20%'}}></div>
<div className="star" style={{top: '25%', left: '50%'}}></div>
<div className="star" style={{top: '45%', left: '70%'}}></div>
<div className="star star-lg" style={{top: '65%', left: '40%'}}></div>
<div className="star" style={{top: '75%', left: '80%'}}></div>

<div className="line" style={{top: '32%', left: '22%', width: '100px', transform: 'rotate(-10deg)'}}></div>
<div className="line" style={{top: '28%', left: '52%', width: '80px', transform: 'rotate(35deg)'}}></div>
<div className="line" style={{top: '48%', left: '42%', width: '90px', transform: 'rotate(-25deg)'}}></div>
</div>
</div>
</section>

<section className="container" style={{paddingBottom: '5rem'}}>
<div style={{marginBottom: '2rem'}}>
<span className="text-xs text-ember">Our Approach</span>
<h2 style={{marginTop: '0.5rem'}}>Restoring Connection</h2>
</div>
<div className="grid grid-3">

<div className="card">
<div style={{width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--ember-primary)'}}>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>
</div>
<h3>Your Life Story</h3>
<p style={{marginBottom: '0'}}>Preserve memories in a living book. Share voice notes or photos, and let us organize them into a legacy.</p>
</div>

<div className="card">
<div style={{width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--ember-primary)'}}>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<h3>Daily Purpose</h3>
<p style={{marginBottom: '0'}}>Small, meaningful prompts to start your day. Engage with a community that values your wisdom.</p>
</div>

<div className="card">
<div style={{width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--ember-primary)'}}>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<h3>Gentle Presence</h3>
<p style={{marginBottom: '0'}}>No alarms. No clinical scoring. Just a steady, calming presence to check in on how you feel.</p>
</div>
</div>
</section>

<section className="container" style={{paddingBottom: '5rem'}}>
<div className="card" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'}}>
<div className="grid grid-2" style={{alignItems: 'center'}}>
<div>
<h2>Built for Trust</h2>
<p>We believe technology for seniors should be respectful, not infantalizing. Emberly is designed with ethical boundaries.</p>
<a href="#" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ember-primary)', fontWeight: '500', fontSize: 'var(--text-sm)'}}>
              Read our Privacy Pledge <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div>
<ul className="check-list">
<li className="check-item">
<div className="check-icon"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Zero advertisements or data selling.</span>
</li>
<li className="check-item">
<div className="check-icon"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Voice-first interface for ease of use.</span>
</li>
<li className="check-item">
<div className="check-icon"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Invites family members only when you choose.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
</main>
<footer>
<div className="container footer-content">
<div className="flex flex-col gap-4">
<div className="logo" style={{color: 'var(--text-muted)'}}>
<div className="logo-mark" style={{width: '16px', height: '16px', boxShadow: 'none', opacity: '0.8'}}></div>
<span>Hello Emberly</span>
</div>
<p className="text-small" style={{margin: '0', maxWidth: '30ch'}}>Restoring dignity to the digital experience for our elders.</p>
</div>
<div className="flex" style={{gap: '3rem'}}>
<div className="flex flex-col gap-4">
<span className="text-xs">Product</span>
<a href="#">Stories</a>
<a href="#">Pricing</a>
<a href="#">Gifting</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs">Company</span>
<a href="#">Manifesto</a>
<a href="#">Careers</a>
<a href="#">Contact</a>
</div>
</div>
</div>
<div className="container" style={{marginTop: '3rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: 'var(--text-xs)'}}>
      © 2024 Hello Emberly Inc. All rights reserved.
    </div>
</footer>

    </>
  );
}
