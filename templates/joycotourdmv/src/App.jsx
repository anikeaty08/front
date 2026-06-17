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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // ── Sticky nav
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('stuck', window.scrollY > 16);
    }, { passive: true });

    // ── Mobile burger
    const burger      = document.getElementById('burger');
    const mobileMenu  = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        burger.setAttribute('aria-expanded', open);
        const spans = burger.querySelectorAll('span');
        if (open) {
            spans[0].style.transform = 'translateY(7px) rotate(45deg)';
            spans[1].style.opacity   = '0';
            spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        } else {
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
    });

    // ── Scroll fade-up
    const fus = document.querySelectorAll('.fu');
    const io  = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    fus.forEach(el => io.observe(el));

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
      
<nav className="nav" id="nav">
<div className="wrap">
<div className="nav-inner">
<a className="nav-brand" href="#">
<img alt="JoyCo Tours" className="brand-logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da5081b8-15be-4ca0-b20a-6519736e54d0_320w.png"/>
</a>
<ul className="nav-links">
<li><a href="#">Israel Tours</a></li>
<li><a href="#">Destinations</a></li>
<li className=""><a href="#">Events</a></li>
<li><a href="#">Photo Gallery</a></li>
<li><a href="#">About</a></li>
</ul>
<div className="nav-right">
<a className="nav-phone" href="tel:+17033502799">
<i className="ph ph-phone-call"></i>
                    +1 703 350 2799
                </a>
<a className="btn btn-gold" href="#">
                    Book a Tour <i className="ph ph-arrow-right"></i>
</a>
<div aria-label="Open menu" className="nav-burger" id="burger" role="button">
<span></span><span></span><span></span>
</div>
</div>
</div>
</div>
</nav>
<div className="mobile-menu" id="mobileMenu">
<a href="#">Israel Tours</a>
<a href="#">Destinations</a>
<a href="#">Events</a>
<a href="#">Photo Gallery</a>
<a href="#">About JoyCo</a>
<a href="tel:+17033502799">📞 +1 703 350 2799</a>
<a className="btn btn-gold" href="#" style={{justifyContent: 'center', marginTop: '6px'}}>Book a Tour</a>
</div>
<main className="">
<section className="hero">
<div className="wrap">
<div className="hero-content fu in">
<h1 className="hero-title">
                Explore God's Creation,<br/>
                The World Over.
            </h1>
<p className="hero-sub">
                JoyCo Tours crafts meaningful journeys for churches, Christian groups, families, and individuals — from the Holy Land of Israel to the streets of Washington D.C. and beyond.
            </p>
<div className="searchbar">
<div className="sb-field">
<i className="ph ph-magnifying-glass"></i>
<input placeholder="Israel, Dubai, Ghana, New York…" type="text"/>
</div>
<div className="sb-div"></div>
<div className="sb-date">
<i className="ph ph-calendar-blank"></i>
<span>Add dates</span>
</div>
<button className="sb-btn">
<i className="ph ph-paper-plane-tilt"></i>
                    Explore
                </button>
</div>
</div>
<div className="hero-img fu d2 in">
<img alt="Washington D.C. — capital of the United States" loading="eager" src="https://images.unsplash.com/photo-1594581979864-36977b15d0dc?w=2560&amp;q=80"/>
<div className="hero-img-overlay"></div>
<div className="hero-img-tag">
<i className="ph-fill ph-map-pin"></i>
                Washington, D.C. · The Capital Region
            </div>
</div>
</div>
</section>
<section className="section section-warm">
<div className="wrap">
<div className="sh-row fu in">
<div>
<span className="label">Where We Go</span>
<h2 className="section-title">Sacred Places &amp;<br/>Spectacular Destinations</h2>
</div>
<a className="view-all" href="#">All destinations <i className="ph ph-arrow-right"></i></a>
</div>
<div className="dest-grid">
<div className="dest-card wide fu">
<img alt="Jerusalem and the Holy Land, Israel" src="https://images.unsplash.com/photo-1614517453351-6c1522fc7a56?w=1600&amp;q=80"/>
<div className="dest-overlay"></div>
<div className="dest-content">
<div className="dest-tag"><i className="ph-fill ph-star"></i> Flagship Tour</div>
<div className="dest-name">Israel &amp; The Holy Land</div>
<p className="dest-desc">8–9 day all-inclusive pilgrimages through Jerusalem, Bethlehem, the Sea of Galilee, the Jordan River, and the Dead Sea. Open to churches and individuals alike.</p>
<a className="dest-link" href="#">Explore Israel <i className="ph ph-arrow-right"></i></a>
</div>
</div>
<div className="dest-card fu d1">
<img alt="Dubai skyline, UAE" src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
<div className="dest-content">
<div className="dest-tag">UAE</div>
<div className="dest-name">Dubai</div>
<p className="dest-desc">World records, desert opulence, and unforgettable skyline views.</p>
<a className="dest-link" href="#">Explore <i className="ph ph-arrow-right"></i></a>
</div>
</div>
<div className="dest-card fu d1">
<img alt="Washington D.C. monuments" src="https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?w=800&amp;q=80"/>
<div className="dest-overlay"></div>
<div className="dest-content">
<div className="dest-tag">DMV Region</div>
<div className="dest-name">Washington D.C.</div>
<p className="dest-desc">Monuments, museums, and the heart of American history — guided your way.</p>
<a className="dest-link" href="#">Explore <i className="ph ph-arrow-right"></i></a>
</div>
</div>
<div className="dest-card fu d2">
<img alt="Ghana, West Africa" src="https://images.unsplash.com/photo-1630386226447-af0a955c1009?w=800&amp;q=80"/>
<div className="dest-overlay"></div>
<div className="dest-content">
<div className="dest-tag">West Africa</div>
<div className="dest-name">Ghana</div>
<p className="dest-desc">Coastal forts, vibrant culture, and natural wonders in West Africa.</p>
<a className="dest-link" href="#">Explore <i className="ph ph-arrow-right"></i></a>
</div>
</div>
<div className="dest-card fu d3">
<img alt="New York City" src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=800&amp;q=80"/>
<div className="dest-overlay"></div>
<div className="dest-content">
<div className="dest-tag">North America</div>
<div className="dest-name">New York &amp; Canada</div>
<p className="dest-desc">Niagara Falls, Thousand Islands, and the Big Apple in one journey.</p>
<a className="dest-link" href="#">Explore <i className="ph ph-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sh sh-center fu">
<span className="label">Why JoyCo</span>
<h2 className="section-title">Travel With Purpose,<br/>Comfort &amp; Care</h2>
<p className="section-desc">We go beyond logistics — every journey is crafted with intention, guided by faith, and designed to create memories that last a lifetime.</p>
</div>
<div className="feat-grid">
<div className="feat-card fu" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&amp'}}>
<div className="feat-overlay"></div>
<div className="feat-content">
<div className="feat-icon"><i className="ph ph-compass"></i></div>
<div className="feat-title">Custom Itineraries</div>
<p className="feat-desc">Tell us your vision. We design every route, stop, and moment around your group's interests, faith traditions, and travel style.</p>
</div>
</div>
<div className="feat-card fu d1" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&amp'}}>
<div className="feat-overlay"></div>
<div className="feat-content">
<div className="feat-icon"><i className="ph ph-bus"></i></div>
<div className="feat-title">Luxury Fleet</div>
<p className="feat-desc">Modern, climate-controlled vehicles for any group size — from intimate family trips to full church congregations traveling together.</p>
</div>
</div>
<div className="feat-card fu d2" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&amp'}}>
<div className="feat-overlay"></div>
<div className="feat-content">
<div className="feat-icon"><i className="ph ph-hand-heart"></i></div>
<div className="feat-title">Faith-Centered Journeys</div>
<p className="feat-desc">For over 9 years, JoyCo has helped churches and Christian communities connect with God's creation through meaningful, affordable travel.</p>
</div>
</div>
</div>
</div>
</section>
<section className="section section-warm">
<div className="wrap">
<div className="about-grid">
<div className="about-img-wrap fu">
<div className="about-img">
<img alt="JoyCo Tours group travel experience" src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1600&amp;q=80"/>
</div>
<div className="about-float">
<strong>9+</strong>
<span>Years of Service</span>
</div>
</div>
<div className="fu d1">
<span className="label">Our Mission</span>
<h2 className="about-title">Travel with Purpose.<br/><em>Experience God's Creation.</em></h2>
<p className="about-body">JoyCo Tours LLC is a Christian travel company that partners with global organizations to bring travelers life-changing experiences — through exploring the beauty of God's creation across the world's most extraordinary destinations.</p>
<p className="about-body">We provide quality group and individual tours at affordable prices to Israel, Dubai, Ghana, the Caribbean, Europe, and beyond. Whether it's a church pilgrimage, a family milestone, or a solo adventure, we make it unforgettable.</p>
<div className="about-stats">
<div className="about-stat">
<strong>9+</strong>
<span>Years of Service</span>
</div>
<div className="about-stat">
<strong>20+</strong>
<span>Destinations</span>
</div>
<div className="about-stat">
<strong>500+</strong>
<span>Happy Travelers</span>
</div>
</div>
<a className="btn btn-dark" href="#">
                    Our Full Story <i className="ph ph-arrow-right"></i>
</a>
</div>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sh-row fu">
<div>
<span className="label">Don't Miss Out</span>
<h2 className="section-title">Upcoming Journeys</h2>
<p className="section-desc">Spots fill fast. Reserve your place on our next group departures.</p>
</div>
<a className="view-all" href="#">All events <i className="ph ph-arrow-right"></i></a>
</div>
<div className="events-grid">
<div className="ev-card fu">
<div className="ev-date">
<span className="ev-date-mon">Jun</span>
<span className="ev-date-day">01</span>
</div>
<div>
<div className="ev-tag">Eastern Canada</div>
<div className="ev-title">3–4 Day Eastern Canada Adventure</div>
<p className="ev-desc">Escape the ordinary — explore Niagara Falls, Thousand Islands, and the wonders of Eastern Canada on this exciting group bus tour.</p>
<div className="ev-meta">
<div className="ev-meta-item"><i className="ph ph-clock"></i>3–4 Days</div>
<div className="ev-meta-item"><i className="ph ph-users-three"></i>Group Tour</div>
<div className="ev-meta-item"><i className="ph ph-map-pin"></i>Canada</div>
</div>
</div>
</div>
<div className="ev-card fu d1">
<div className="ev-date">
<span className="ev-date-mon">Jan</span>
<span className="ev-date-day">03</span>
</div>
<div>
<div className="ev-tag">Ghana, West Africa</div>
<div className="ev-title">5–7 Day Ghana Tour 2026–2027</div>
<p className="ev-desc">Arrive in Accra and immerse yourself in Ghana's history, coastal culture, and natural beauty. Package from $3,500 (excl. international airfare).</p>
<div className="ev-meta">
<div className="ev-meta-item"><i className="ph ph-clock"></i>5–7 Days</div>
<div className="ev-meta-item"><i className="ph ph-currency-dollar"></i>From $3,500</div>
<div className="ev-meta-item"><i className="ph ph-map-pin"></i>Accra</div>
</div>
</div>
</div>
<div className="ev-card fu d2">
<div className="ev-date">
<span className="ev-date-mon">TBD</span>
<span className="ev-date-day" style={{fontSize: '1.75rem'}}>2026</span>
</div>
<div>
<div className="ev-tag">Israel, The Holy Land</div>
<div className="ev-title">8–9 Day Israel Pilgrimage</div>
<p className="ev-desc">Walk where Jesus walked. Visit Jerusalem, Bethlehem, the Sea of Galilee, and the Western Wall on this all-inclusive Holy Land pilgrimage.</p>
<div className="ev-meta">
<div className="ev-meta-item"><i className="ph ph-clock"></i>8–9 Days</div>
<div className="ev-meta-item"><i className="ph ph-church"></i>Churches Welcome</div>
<div className="ev-meta-item"><i className="ph ph-airplane-tilt"></i>Incl. Flights</div>
</div>
</div>
</div>
<div className="ev-card fu d3">
<div className="ev-date">
<span className="ev-date-mon">Mar</span>
<span className="ev-date-day">27</span>
</div>
<div>
<div className="ev-tag">East Coast, USA</div>
<div className="ev-title">2-Day East Coast Bus Tour</div>
<p className="ev-desc">A weekend escape from Washington D.C. — explore the best of the East Coast with history, culture, and scenic drives all included.</p>
<div className="ev-meta">
<div className="ev-meta-item"><i className="ph ph-clock"></i>2 Days</div>
<div className="ev-meta-item"><i className="ph ph-bus"></i>Bus Tour</div>
<div className="ev-meta-item"><i className="ph ph-map-pin"></i>East Coast</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section section-warm">
<div className="wrap">
<div className="sh-row fu">
<div>
<span className="label">Curated Experiences</span>
<h2 className="section-title">Most Loved Tours</h2>
</div>
<a className="view-all" href="#">View all tours <i className="ph ph-arrow-right"></i></a>
</div>
<div className="tours-grid">
<div className="tour-card fu">
<div className="tc-img">
<img alt="D.C. Monuments at Night" src="https://images.unsplash.com/photo-1581097543550-b3cbe2e6ea6e?w=800&amp;q=80"/>
<div className="tc-badge"><i className="ph ph-clock"></i>4 Hours</div>
</div>
<div className="tc-body">
<div className="tc-top">
<div className="tc-title">D.C. Monuments at Night</div>
<div className="tc-price">From $120</div>
</div>
<p className="tc-desc">Experience the majesty of the capital's monuments illuminated against the night sky on this private guided tour.</p>
<div className="tc-foot">
<div className="tc-info"><i className="ph ph-users"></i>Private groups</div>
<a className="tc-link" href="#">View details <i className="ph ph-arrow-right"></i></a>
</div>
</div>
</div>
<div className="tour-card fu d1">
<div className="tc-img">
<img alt="Holy Land of Israel" className="" src="https://images.unsplash.com/photo-1542743409-158c1d9b2c61?w=800&amp;q=80"/>
<div className="tc-badge"><i className="ph ph-clock"></i>8–9 Days</div>
</div>
<div className="tc-body">
<div className="tc-top">
<div className="tc-title">Holy Land of Israel</div>
<div className="tc-price">All-Inclusive</div>
</div>
<p className="tc-desc">Walk ancient streets, be baptized in the Jordan River, and stand at the Western Wall on this life-changing pilgrimage.</p>
<div className="tc-foot">
<div className="tc-info"><i className="ph ph-church"></i>Churches welcome</div>
<a className="tc-link" href="#">View details <i className="ph ph-arrow-right"></i></a>
</div>
</div>
</div>
<div className="tour-card fu d2">
<div className="tc-img">
<img alt="Niagara Falls" className="" src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800&amp;q=80"/>
<div className="tc-badge"><i className="ph ph-clock"></i>3 Days</div>
</div>
<div className="tc-body">
<div className="tc-top">
<div className="tc-title">Niagara Falls &amp; Canada</div>
<div className="tc-price">Group Rates</div>
</div>
<p className="tc-desc">Feel the thunderous power of Niagara Falls and explore the Thousand Islands on a 3-day bus tour from Washington D.C.</p>
<div className="tc-foot">
<div className="tc-info"><i className="ph ph-bus"></i>Bus included</div>
<a className="tc-link" href="#">View details <i className="ph ph-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="sh sh-center fu">
<span className="label">Travel Support</span>
<h2 className="section-title">We've Got You Covered</h2>
<p className="section-desc">From protecting your investment to making payment flexible, JoyCo handles every detail so you can focus on the journey.</p>
</div>
<div className="support-grid">
<div className="sup-card fu">
<div className="sup-icon"><i className="ph ph-shield-check"></i></div>
<h3 className="sup-title">Travel Insurance Service</h3>
<p className="sup-desc">Designed with family travelers in mind, our travel insurance options protect your investment, health, and peace of mind — so you focus on the journey, not the what-ifs.</p>
<a className="sup-link" href="#">Learn more <i className="ph ph-arrow-right"></i></a>
</div>
<div className="sup-card fu d1">
<div className="sup-icon"><i className="ph ph-credit-card"></i></div>
<h3 className="sup-title">Installment Payment Plans</h3>
<p className="sup-desc">JoyCo offers exclusive discount packages with flexible installment options — making international travel accessible and truly affordable for every budget and group size.</p>
<a className="sup-link" href="#">View payment plans <i className="ph ph-arrow-right"></i></a>
</div>
</div>
</div>
</section>
<section className="section section-warm">
<div className="wrap">
<div className="sh sh-center fu">
<span className="label">Traveler Stories</span>
<h2 className="section-title">What Our Travelers Say</h2>
</div>
<div className="testi-grid">
<div className="testi-card fu">
<i className="ph-fill ph-quotes testi-q"></i>
<div className="testi-stars">
<i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
</div>
<p className="testi-text">"The Israel tour with JoyCo was the most spiritually profound experience of my life. Every detail was handled perfectly, and our guide made the history of the Holy Land come alive."</p>
<div className="testi-author">
<div className="testi-avatar">M</div>
<div>
<div className="testi-name">Margaret O.</div>
<div className="testi-role">Church group participant · Israel Tour</div>
</div>
</div>
</div>
<div className="testi-card fu d1">
<i className="ph-fill ph-quotes testi-q"></i>
<div className="testi-stars">
<i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
</div>
<p className="testi-text">"JoyCo made our church group trip to Niagara Falls and Canada absolutely seamless. The bus was comfortable, the price was right, and the memories will last forever."</p>
<div className="testi-author">
<div className="testi-avatar">P</div>
<div className="">
<div className="testi-name">Pastor David A.</div>
<div className="testi-role">Group leader · Canada Tour</div>
</div>
</div>
</div>
<div className="testi-card fu d2">
<i className="ph-fill ph-quotes testi-q"></i>
<div className="testi-stars">
<i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
</div>
<p className="testi-text">"I joined the Ghana tour solo and it exceeded every expectation. JoyCo's team was warm, professional, and clearly passionate about showing us the very best of West Africa."</p>
<div className="testi-author">
<div className="testi-avatar">S</div>
<div className="">
<div className="testi-name">Sharon K.</div>
<div className="testi-role">Solo traveler · Ghana Tour</div>
</div>
</div>
</div>
<div className="testi-card fu d3">
<i className="ph-fill ph-quotes testi-q"></i>
<div className="testi-stars">
<i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
</div>
<p className="testi-text">"The D.C. monuments night tour was perfect for our family. The guide was genuinely knowledgeable, the vehicle was clean and spacious, and booking couldn't have been simpler."</p>
<div className="testi-author">
<div className="testi-avatar">J</div>
<div className="">
<div className="testi-name">James &amp; Linda T.</div>
<div className="testi-role">Family travelers · D.C. Night Tour</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="" style={{padding: '0'}}>
<div className="wrap">
<div className="partners-bar fu">
<div className="partners-label">Our Travel Partners &amp; Affiliates</div>
<div className="partners-row">
<div className="partner">
<img alt="BOWEB Digital" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18d37dc1-2d01-4f12-aba6-6ec30cc115d5_800w.png"/>
</div>
<div className="partner">
<img alt="Travel Guard" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2efea423-8633-476c-939a-7ddaddc105eb_800w.png"/>
</div>
<div className="partner">
<img alt="Global Tours" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27b25098-d24a-4ae0-88b2-4387656bc07c_800w.png"/>
</div>
</div>
</div>
</div>
</section>
<section className="section">
<div className="wrap">
<div className="contact-strip fu">
<div className="contact-items">
<div className="ci">
<i className="ph ph-phone-call"></i>
<div className="">
<div className="ci-lbl">Call Us</div>
<div className="ci-val">+1 703 350 2799</div>
</div>
</div>
<div className="ci">
<i className="ph ph-envelope-simple"></i>
<div className="">
<div className="ci-lbl">Email Us</div>
<div className="ci-val">joycosightseeing@gmail.com</div>
</div>
</div>
<div className="ci">
<i className="ph ph-map-pin"></i>
<div>
<div className="ci-lbl">Based In</div>
<div className="ci-val">Washington, D.C.</div>
</div>
</div>
</div>
<a className="btn btn-dark" href="tel:+17033502799">
                Call Now <i className="ph ph-phone-call"></i>
</a>
</div>
<div className="cta-box fu d1">
<div className="cta-bg-overlay"></div>
<div className="cta-glow cta-glow-1"></div>
<div className="cta-glow cta-glow-2"></div>
<div className="cta-inner">
<div>
<h2 className="cta-title">Ready to Plan<br/><em>Your Next Pilgrimage?</em></h2>
<p className="cta-desc">Contact our concierge team to build a custom itinerary for your church, corporate group, family vacation, or solo adventure.</p>
</div>
<div className="cta-btns">
<a className="btn btn-gold" href="#">
                        Request a Quote <i className="ph ph-paper-plane-tilt"></i>
</a>
<a className="btn btn-ghost" href="#">Contact Us</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="footer">
<div className="wrap">
<div className="footer-grid">
<div className="">
<div className="f-brand">
<img alt="JoyCo Tours" className="brand-logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c9376ff-a512-4ceb-b6e6-68c440040586_320w.png?w=800&amp;q=80"/>
</div>
<p className="f-tagline">Purposeful travel and pilgrimage experiences for churches, families, and individuals. Based in Washington, D.C. — serving travelers across the world since 2015.</p>
<div className="f-socials">
<a aria-label="Facebook" className="f-social" href="https://www.facebook.com/JoycoTours"><i className="ph ph-facebook-logo"></i></a>
<a aria-label="Instagram" className="f-social" href="https://www.instagram.com/joycotours"><i className="ph ph-instagram-logo"></i></a>
<a aria-label="YouTube" className="f-social" href="#"><i className="ph ph-youtube-logo"></i></a>
<a aria-label="X / Twitter" className="f-social" href="#"><i className="ph ph-x-logo"></i></a>
</div>
</div>
<div className="">
<div className="f-col-title">Tours</div>
<ul className="f-links">
<li><a href="#">Israel / Holy Land</a></li>
<li><a href="#">Dubai Tours</a></li>
<li className=""><a href="#">Ghana Tours</a></li>
<li><a href="#">New York &amp; Canada</a></li>
<li><a href="#">Washington D.C.</a></li>
<li><a href="#">Niagara Falls</a></li>
</ul>
</div>
<div className="">
<div className="f-col-title">Company</div>
<ul className="f-links">
<li><a href="#">About JoyCo</a></li>
<li className=""><a className="" href="#">Our Fleet</a></li>
<li className=""><a className="" href="#">Photo Gallery</a></li>
<li><a href="#">Videos</a></li>
<li><a href="#">Reviews</a></li>
<li><a href="#">Events</a></li>
</ul>
</div>
<div className="">
<div className="f-col-title">Support</div>
<ul className="f-links">
<li><a href="#">Travel Insurance</a></li>
<li><a href="#">Installment Payment</a></li>
<li><a href="#">Registration</a></li>
<li className=""><a className="" href="#">Terms &amp; Conditions</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="f-bottom">
<div className="f-copy">© 2015–2026 JoyCo Tours LLC. All Rights Reserved.</div>
<div className="f-legal">
<a href="#">Terms of Service</a>
<a href="#">Privacy Policy</a>
<a href="#">Cancellation Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
