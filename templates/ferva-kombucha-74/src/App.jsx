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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<nav>
<a className="nav-logo tracking-tighter" href="#">FERVA</a>
<div className="nav-links">
<a href="#flavors">Flavors</a>
<a href="#process">Process</a>
<a href="#locations">Locations</a>
</div>
<a className="nav-cta tracking-tight text-xs md:text-sm" href="#order">SHOP NOW</a>
</nav>
<div className="hero">
<div className="blob blob1"></div>
<div className="blob blob2"></div>
<div className="blob blob3"></div>
<div className="fruit-float f1">🍍</div>
<div className="fruit-float f2">🍍</div>
<div className="fruit-float f3">🌿</div>
<div className="fruit-float f4">🍍</div>
<div className="fruit-float f5">🍋</div>
<div className="fruit-float f6">🍍</div>
<div className="hero-container">
<div className="hero-content">
<span className="hero-tag">Organic &amp; Raw</span>
<h1 className="tracking-tight font-semibold">Naturally Fermented.<br/><em>Beautifully Bottled.</em></h1>
<p className="hero-sub text-lg">Experience the effervescent magic of small-batch kombucha. Crafted with hand-picked tropical botanicals, wild cultures, and zero artificial additives.</p>
<div className="hero-actions">
<a className="btn-primary" href="#order">Order Delivery</a>
<a className="btn-ghost" href="#process">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Watch our process</span>
</a>
</div>
<div className="hero-badge">
<div className="badge-item">
<div className="badge-num tracking-tight">12+</div>
<div className="badge-label font-medium">Live Strains</div>
</div>
<div className="badge-item">
<div className="badge-num tracking-tight">100%</div>
<div className="badge-label font-medium">Organic</div>
</div>
<div className="badge-item">
<div className="badge-num tracking-tight">0%</div>
<div className="badge-label font-medium">Additives</div>
</div>
</div>
</div>
<div className="hero-visual">
<div className="glass-bottle">
<div className="bottle-cap"></div>
<div className="bottle-liquid">
<div className="bubble b1"></div>
<div className="bubble b2"></div>
<div className="bubble b3"></div>
<div className="bubble b4"></div>
<div className="bubble b5"></div>
</div>
<div className="bottle-label">
<div className="bottle-label-name">FERVA</div>
<div className="bottle-label-sub">Organic Pineapple</div>
</div>
<div className="bottle-highlight"></div>
</div>
</div>
</div>
<div className="hero-scroll">
<div className="scroll-line"></div>
      Scroll to discover
    </div>
</div>
<div className="marquee-strip">
<div className="marquee-inner">
<span>RAW &amp; ORGANIC</span> • <span>GUT FRIENDLY</span> • <span>SUSTAINABLY BREWED</span> • <span>NON-ALCOHOLIC</span> • 
      <span>RAW &amp; ORGANIC</span> • <span>GUT FRIENDLY</span> • <span>SUSTAINABLY BREWED</span> • <span>NON-ALCOHOLIC</span> • 
      <span>RAW &amp; ORGANIC</span> • <span>GUT FRIENDLY</span> • <span>SUSTAINABLY BREWED</span> • <span>NON-ALCOHOLIC</span> •
    </div>
</div>
<section className="flavors" id="flavors">
<div className="flavors-header">
<div className="section-tag">Our Brews</div>
<h2 className="section-title tracking-tight font-semibold">Explore the <em>Flavors</em></h2>
<p className="section-sub">We pair our ancient SCOBY with vibrant, locally sourced ingredients to create complex, lightly carbonated functional beverages.</p>
</div>
<div className="flavors-grid">
<div className="flavor-card">
<div className="flavor-price font-semibold">$48</div>
<span className="flavor-emoji">🍍</span>
<h3 className="flavor-name tracking-tight font-semibold">Pineapple Ginger</h3>
<p className="flavor-desc">Zesty, warming, and perfectly balanced. Pressed ginger root meets golden ripe pineapple for an invigorating spark.</p>
<span className="flavor-tag">Revitalize</span>
</div>
<div className="flavor-card">
<div className="flavor-price font-semibold">$52</div>
<span className="flavor-emoji">🥭</span>
<h3 className="flavor-name tracking-tight font-semibold">Tropical Mango</h3>
<p className="flavor-desc">A symphony of fresh alphonso mangoes, hibiscus, and a touch of wild honey. Deeply refreshing and naturally sweet.</p>
<span className="flavor-tag">Antioxidant</span>
</div>
<div className="flavor-card">
<div className="flavor-price font-semibold">$50</div>
<span className="flavor-emoji">🌿</span>
<h3 className="flavor-name tracking-tight font-semibold">Matcha Mint</h3>
<p className="flavor-desc">Earthy ceremonial grade matcha meets cooling peppermint. A smooth, sophisticated brew for calm energy.</p>
<span className="flavor-tag">Focus</span>
</div>
</div>
</section>
<section className="why" id="process">
<div className="why-visual">
<div className="bottle-circle">
        🍍
      </div>
<div className="why-orbit wo1">🦠</div>
<div className="why-orbit wo2">🌿</div>
<div className="why-orbit wo3">🍋</div>
<div className="why-orbit wo4">🥭</div>
<div className="why-orbit wo5">✨</div>
</div>
<div className="why-content">
<div className="section-tag">The Process</div>
<h2 className="section-title tracking-tight font-semibold">The Art of <em>Fermentation</em></h2>
<p className="section-sub">We don't take shortcuts. Our traditional slow-brewing method honors the living cultures, resulting in a cleaner, richer, and more beneficial brew.</p>
<div className="why-points">
<div className="why-point">
<div className="why-icon text-[--green-mid]">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="why-text">
<h4 className="tracking-tight font-semibold">Live Probiotics</h4>
<p>Our slow 21-day fermentation ensures maximum probiotic density to support your gut microbiome.</p>
</div>
</div>
<div className="why-point">
<div className="why-icon text-[--green-mid]">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="why-text">
<h4 className="tracking-tight font-semibold">100% Organic</h4>
<p>We strictly use cold-pressed juices from regenerative local farms. Nothing artificial, ever.</p>
</div>
</div>
<div className="why-point">
<div className="why-icon text-[--green-mid]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="why-text">
<h4 className="tracking-tight font-semibold">Zero Refined Sugar</h4>
<p>Fermented dry so only the naturally occurring residual fruit sugars remain. Light and crisp.</p>
</div>
</div>
</div>
</div>
</section>
<section className="location-section" id="locations">
<div>
<div className="section-tag">Visit Us</div>
<h2 className="section-title tracking-tight font-semibold">Fresh from the <em>Source</em></h2>
<p className="section-sub">Come experience our living lab. Taste seasonal exclusive flavors straight from our ceramic fermentation vessels.</p>
<div className="loc-details">
<div className="loc-item">
<div className="loc-icon text-[--lime]">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="loc-text-label font-semibold">Location</div>
<div className="loc-text-val">124 Ferment Alley, Portland, OR</div>
</div>
</div>
<div className="loc-item">
<div className="loc-icon text-[--lime]">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="loc-text-label font-semibold">Hours</div>
<div className="loc-text-val">Wed – Sun: 11:00 AM – 8:00 PM</div>
</div>
</div>
</div>
</div>
<div className="loc-map-box">
<div className="loc-map-emoji">📍</div>
<div className="loc-map-name tracking-tight font-semibold">FERVA TAPROOM</div>
<div className="loc-map-text font-semibold">Open Now</div>
</div>
</section>
<section className="pricing" id="order">
<div className="section-tag">Shop Online</div>
<h2 className="section-title tracking-tight font-semibold">Stock Your <em>Fridge</em></h2>
<p className="section-sub">Get our small-batch kombucha delivered cold right to your doorstep. Choose a one-time order or subscribe for regular deliveries.</p>
<div className="price-cards">
<div className="price-card">
<span className="price-emoji">📦</span>
<div className="price-label font-semibold">Taster Box</div>
<div className="price-amount tracking-tight"><span>$</span>36</div>
<div className="price-size">6 Bottles (16oz)</div>
<div className="price-divider"></div>
<div className="price-benefit">Perfect for first timers. Pick up to two distinct flavors to try.</div>
</div>
<div className="price-card featured">
<div className="price-badge">Popular</div>
<span className="price-emoji">🌟</span>
<div className="price-label font-semibold">Wellness Pack</div>
<div className="price-amount tracking-tight"><span>$</span>65</div>
<div className="price-size">12 Bottles (16oz)</div>
<div className="price-divider"></div>
<div className="price-benefit">A two-week supply for your daily gut health ritual. Mix and match.</div>
</div>
<div className="price-card">
<span className="price-emoji">🗓️</span>
<div className="price-label font-semibold">Monthly Ritual</div>
<div className="price-amount tracking-tight"><span>$</span>115</div>
<div className="price-size">24 Bottles (16oz)</div>
<div className="price-divider"></div>
<div className="price-benefit">Best value. Automatically delivered on your schedule, cancel anytime.</div>
</div>
</div>
</section>
<section className="legal">
<div>
<h2 className="section-title tracking-tight font-semibold" style={{fontSize: '2.2rem', marginBottom: '0.5rem'}}>Purity <em>Guarantee</em></h2>
<p className="section-sub" style={{marginBottom: '2rem'}}>We hold ourselves to the highest standards. Unpasteurized, unfiltered, and totally uncompromised.</p>
<div className="legal-grid">
<div className="legal-item">
<div className="legal-icon text-[--green]">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="legal-label">Never from concentrate</div>
<div className="legal-val">Only whole, fresh ingredients pressed in-house.</div>
</div>
</div>
<div className="legal-item">
<div className="legal-icon text-[--green]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="legal-label">Cold Chain Integrity</div>
<div className="legal-val">Stored and shipped cold to preserve living cultures.</div>
</div>
</div>
<div className="legal-item">
<div className="legal-icon text-[--green]">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="legal-label">Sustainable Packaging</div>
<div className="legal-val">Bottled in easily recyclable, reusable amber glass.</div>
</div>
</div>
</div>
</div>
<div className="legal-cta-box">
<span className="legal-cta-emoji">🛒</span>
<h3 className="legal-cta-title tracking-tight font-semibold">Ready to brew?</h3>
<p className="legal-cta-text">Build your custom box today and start your journey towards better gut health and natural energy.</p>
<a className="legal-cta-btn" href="#order">Start Building Box</a>
<div className="legal-steps">
<div className="legal-step">
<div className="legal-step-num">1</div> Select your flavors
        </div>
<div className="legal-step">
<div className="legal-step-num">2</div> Choose frequency
        </div>
<div className="legal-step">
<div className="legal-step-num">3</div> Delivered cold to you
        </div>
</div>
</div>
</section>
<div className="order-strip">
<h2 className="tracking-tight font-semibold">Elevate your daily ritual.</h2>
<p>Join over 10,000 happy customers enjoying the purest kombucha available.</p>
<a className="order-btn" href="#order">
      Shop All Flavors
      <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<footer>
<div>
<div className="footer-brand-name tracking-tighter font-semibold">FERVA</div>
<p className="footer-tagline">Small-batch kombucha brewed with wild cultures and organic botanicals. A restorative elixir for your mind and gut.</p>
<div className="footer-fruits">🍍🥭🌿</div>
</div>
<div>
<div className="footer-col-title">Explore</div>
<div className="footer-links">
<a href="#flavors">Our Flavors</a>
<a href="#process">Brewing Process</a>
<a href="#locations">Taproom</a>
<a href="#order">Shop Online</a>
<a href="#">Wholesale</a>
</div>
</div>
<div>
<div className="footer-col-title">Contact</div>
<div className="footer-contact-item">
<span><iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></span>
<span>hello@fervabrewing.com</span>
</div>
<div className="footer-contact-item">
<span><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon></span>
<span>124 Ferment Alley<br/>Portland, OR 97204</span>
</div>
<div className="footer-contact-item">
<span><iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon></span>
<span>(503) 555-BREW</span>
</div>
</div>
</footer>
<div className="footer-bottom">
<p>© 2024 Ferva Brewing Co. All rights reserved.</p>
<p>Hand-crafted with intention in Portland, Oregon.</p>
</div>

    </>
  );
}
