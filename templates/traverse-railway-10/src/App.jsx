import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// ── Scroll progress bar ──
const scrollProgress = document.getElementById('scrollProgress');
function updateScroll() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const pct = (window.scrollY / h) * 100;
  scrollProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateScroll, { passive: true });

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});
function closeMobile() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

// ── IntersectionObserver for reveals ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .stagger-up');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children
      if (entry.target.classList.contains('stagger-up')) {
        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, i) => {
          child.style.transitionDelay = (i * 0.1) + 's';
          setTimeout(() => child.classList.add('visible'), 10);
        });
      }
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// Also observe tasting cards individually for flavor bars
const tastingCards = document.querySelectorAll('.tasting-card');
const tastingObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      tastingObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
tastingCards.forEach(c => tastingObs.observe(c));

// ── Counter animation ──
const counters = document.querySelectorAll('[data-count]');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      let current = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = current;
      }, 25);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

// ── Sticky process scroll ──
const processSteps = document.querySelectorAll('.process-step');
const processImages = document.querySelectorAll('.process-image-container img');

if (processSteps.length && processImages.length) {
  const processObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stepIndex = parseInt(entry.target.getAttribute('data-step'));
        // Activate step
        processSteps.forEach(s => s.classList.remove('active'));
        entry.target.classList.add('active');
        // Switch image
        processImages.forEach(img => img.classList.remove('active'));
        if (processImages[stepIndex]) {
          processImages[stepIndex].classList.add('active');
        }
      }
    });
  }, { threshold: 0.5, rootMargin: '-30% 0px -30% 0px' });
  processSteps.forEach(s => processObs.observe(s));
}

// ── Collection drag scroll ──
const track = document.getElementById('collectionTrack');
let isDown = false, startX, scrollLeft;
track.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});
track.addEventListener('mouseleave', () => isDown = false);
track.addEventListener('mouseup', () => isDown = false);
track.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  track.scrollLeft = scrollLeft - (x - startX) * 1.5;
});

// ── Parallax on hero image ──
const heroBg = document.querySelector('.hero-bg img');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = 'scale(1.08) translateY(' + (y * 0.15) + 'px)';
    }
  }, { passive: true });
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scroll-progress" id="scrollProgress" style={{width: '100.005%'}}></div>

<nav className="nav">
<a className="nav-logo" href="#">E<span className="">MBER</span></a>
<ul className="nav-links">
<li className=""><a className="" href="#heritage">Heritage</a></li>
<li><a href="#collection">Collection</a></li>
<li><a href="#process">Process</a></li>
<li><a href="#tasting">Tasting</a></li>
<li><a href="#estate">Estate</a></li>
<li className=""><a className="nav-cta inline-block" href="#visit"><span className="">Book a Visit</span></a></li>
</ul>
<button aria-label="Menu" className="hamburger" id="hamburger">
<span></span><span></span><span></span>
</button>
</nav>

<div className="mobile-menu" id="mobileMenu">
<a href="#heritage" onclick="closeMobile()">Heritage</a>
<a href="#collection" onclick="closeMobile()">Collection</a>
<a href="#process" onclick="closeMobile()">Process</a>
<a href="#tasting" onclick="closeMobile()">Tasting</a>
<a className="" href="#estate" onclick="closeMobile()">Estate</a>
<a className="" href="#visit" onclick="closeMobile()">Book a Visit</a>
</div>

<section className="hero">
<div className="hero-bg">
<img alt="Scottish Highlands landscape at dusk" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/bc09d3e6-d12a-4d30-9a8a-6ce7eebc8397/3840w.png"/>
</div>
<div className="hero-content reveal visible">
<div className="hero-eyebrow">Est. 1847 · Highland Single Malt</div>
<h1 className="">Crafted by Time,<br/>Defined by <em>Character</em></h1>
<p className="hero-sub">For nearly two centuries, Ember has drawn its spirit from the Highland landscape — patient maturation in seasoned oak, yielding whisky of rare depth and warmth.</p>
<button className="hero-cta" onclick="document.getElementById('collection').scrollIntoView({behavior:'smooth'})">
<span className="">Explore the Collection</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="hero-badge">
<div className="hero-badge-inner">
<div className="hero-badge-year">1847</div>
<div className="hero-badge-text">Founded</div>
</div>
</div>
</section>

<section className="heritage" id="heritage">
<div className="heritage-grid">
<div className="heritage-text">
<div className="section-label reveal">Our Heritage</div>
<h2 className="section-title reveal">A Legacy Written<br/>in <em>Oak &amp; Time</em></h2>
<p className="desc reveal">Nestled in the heart of the Scottish Highlands, the Ember distillery has stood since 1847. Founded by Alistair Drummond, a man of uncommon patience, our approach remains unchanged: source the purest water from the Cairngorm springs, select only the finest malted barley, and above all — never rush the whisky.</p>
<p className="desc reveal">Each cask rests in our stone-walled warehouses, breathing the Highland air, slowly developing the complex character that defines an Ember dram. What emerges is not merely whisky, but a conversation between craft and nature, time and place.</p>
<div className="heritage-stats stagger-up">
<div className="heritage-stat reveal-child" style={{transitionDelay: '0s'}}>
<div className="val" data-count="178">0</div>
<div className="label">Years of Craft</div>
</div>
<div className="heritage-stat reveal-child" style={{transitionDelay: '0.1s'}}>
<div className="val" data-count="12">0</div>
<div className="label">Expressions</div>
</div>
<div className="heritage-stat reveal-child" style={{transitionDelay: '0.2s'}}>
<div className="val" data-count="40">0</div>
<div className="label">Countries</div>
</div>
</div>
</div>
<div className="heritage-image reveal">
<img alt="Oak barrel aging warehouse with warm amber lighting" className="" loading="lazy" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&amp;q=80"/>
</div>
</div>
</section>

<section className="collection" id="collection">
<div className="collection-header">
<div>
<div className="section-label reveal">The Collection</div>
<h2 className="section-title reveal">Our <em>Expressions</em></h2>
</div>
<div className="collection-scroll-hint reveal">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:move-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 8l4 4l-4 4M2 12h20M6 8l-4 4l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
      Drag to explore
    </div>
</div>
<div className="collection-track" id="collectionTrack">
<div className="collection-card reveal-child">
<div className="collection-card-img">
<img alt="Ember 12 Year Old Highland Single Malt" loading="lazy" src="https://images.unsplash.com/photo-1674469296044-26e5b312cf5c?w=800&amp;q=80"/>
</div>
<div className="collection-card-body">
<div className="collection-card-age">12 Year Old</div>
<h3 className="collection-card-name">The Foundation</h3>
<p className="collection-card-notes">Honey, vanilla, and gentle oak. Our signature expression — the purest articulation of the Ember house style.</p>
<div className="collection-card-meta">
<span className="collection-card-abv">ABV <strong>43%</strong></span>
<span className="collection-card-price">£65</span>
</div>
</div>
</div>
<div className="collection-card reveal-child">
<div className="collection-card-img">
<img alt="Ember 18 Year Old Highland Single Malt" loading="lazy" src="https://images.unsplash.com/photo-1514361526511-a1ecd83f89d1?w=800&amp;q=80"/>
</div>
<div className="collection-card-body">
<div className="collection-card-age">18 Year Old</div>
<h3 className="collection-card-name">The Meridian</h3>
<p className="collection-card-notes">Rich dried fruit, dark chocolate, and smoked almond. Extended sherry cask maturation brings extraordinary depth.</p>
<div className="collection-card-meta">
<span className="collection-card-abv">ABV <strong>46%</strong></span>
<span className="collection-card-price">£145</span>
</div>
</div>
</div>
<div className="collection-card reveal-child">
<div className="collection-card-img">
<img alt="Ember 25 Year Old Highland Single Malt" className="" loading="lazy" src="https://images.unsplash.com/photo-1622657550916-ad48a22427d9?w=800&amp;q=80"/>
</div>
<div className="collection-card-body">
<div className="collection-card-age">25 Year Old</div>
<h3 className="collection-card-name">The Antiquary</h3>
<p className="collection-card-notes">Burnished leather, aged mahogany, and winter spice. A quarter-century of patience rewarded in every sip.</p>
<div className="collection-card-meta">
<span className="collection-card-abv">ABV <strong>48%</strong></span>
<span className="collection-card-price">£340</span>
</div>
</div>
</div>
<div className="collection-card reveal-child">
<div className="collection-card-img">
<img alt="Ember Cask Strength Highland Single Malt" loading="lazy" src="https://images.unsplash.com/photo-1537567563737-dc995720616f?w=800&amp;q=80"/>
</div>
<div className="collection-card-body">
<div className="collection-card-age">Cask Strength</div>
<h3 className="collection-card-name">The Crucible</h3>
<p className="collection-card-notes">Unbridled intensity — raw honeycomb, charred oak, and campfire smoke. Bottled directly from the cask, unfiltered.</p>
<div className="collection-card-meta">
<span className="collection-card-abv">ABV <strong>58.4%</strong></span>
<span className="collection-card-price">£95</span>
</div>
</div>
</div>
<div className="collection-card reveal-child">
<div className="collection-card-img">
<img alt="Ember Limited Edition Highland Single Malt" loading="lazy" src="https://images.unsplash.com/photo-1633836899617-8a3afd5fe931?w=800&amp;q=80"/>
</div>
<div className="collection-card-body">
<div className="collection-card-age">Limited Release</div>
<h3 className="collection-card-name">The Solstice</h3>
<p className="collection-card-notes">Finished in port wine pipes. Candied orange, fig jam, and clove. Only 2,400 bottles released annually.</p>
<div className="collection-card-meta">
<span className="collection-card-abv">ABV <strong>50%</strong></span>
<span className="collection-card-price">£210</span>
</div>
</div>
</div>
</div>
</section>

<section className="process" id="process">
<div className="process-container">
<div className="process-sticky">
<div className="section-label">Our Process</div>
<h2 className="section-title">From Grain<br/>to <em>Glass</em></h2>
<div className="process-image-container">
<img alt="Malting floor" className="" data-step="0" src="https://images.unsplash.com/photo-1677503543803-0b82584b304a?w=1600&amp;q=80"/>
<img alt="Copper stills" data-step="1" src="https://images.unsplash.com/photo-1686723342906-22961ce61fa5?w=1600&amp;q=80"/>
<img alt="Fermentation" data-step="2" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&amp;q=80"/>
<img alt="Barrel aging" data-step="3" src="https://images.unsplash.com/photo-1543479679-2ad5736490b6?w=1600&amp;q=80"/>
<img alt="Bottling" data-step="4" src="https://images.unsplash.com/photo-1557765086-a73d2dc3059e?w=1600&amp;q=80"/>
</div>
</div>
<div className="process-steps">
<div className="process-step" data-step="0">
<div className="process-step-num">01</div>
<h3 className="">Malting</h3>
<p className="">Our barley is sourced exclusively from Highland farms within forty miles of the distillery. Floor-malted by hand over five days, the grain develops its full starch potential before kiln-drying over peat and beechwood smoke.</p>
<div className="process-step-detail">
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wheat" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"></path><path d="M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0"></path></g></svg> Scottish Barley</span>
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:timer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 2h4m-2 12l3-3"></path><circle cx="12" cy="14" r="8"></circle></g></svg> 5 Day Malt</span>
</div>
</div>
<div className="process-step" data-step="1">
<div className="process-step-num">02</div>
<h3>Distillation</h3>
<p className="">Double-distilled in our original copper pot stills — the same vessels that have shaped Ember's character since the 1920s. The tall, narrow necks force only the lightest, purest vapors through, giving our spirit its hallmark elegance.</p>
<div className="process-step-detail">
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flame" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Copper Pot Stills</span>
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:repeat" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg> Double Distilled</span>
</div>
</div>
<div className="process-step" data-step="2">
<div className="process-step-num">03</div>
<h3 className="">Fermentation</h3>
<p className="">Extended fermentation of 72 hours in Oregon pine washbacks develops a complexity that shorter ferments cannot achieve. This patient approach yields a wash rich in fruity esters — the precursors to Ember's signature stone-fruit character.</p>
<div className="process-step-detail">
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></g></svg> 72 Hour Ferment</span>
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trees" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></g></svg> Oregon Pine</span>
</div>
</div>
<div className="process-step" data-step="3">
<div className="process-step-num">04</div>
<h3 className="">Maturation</h3>
<p className="">Our whisky sleeps in a carefully curated selection of ex-bourbon, ex-sherry, and virgin oak casks. The stone warehouses, built into the hillside, maintain a constant temperature and humidity — nature's own climate control.</p>
<div className="process-step-detail">
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg> Oak Casks</span>
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mountain" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Stone Warehouses</span>
</div>
</div>
<div className="process-step" data-step="4">
<div className="process-step-num">05</div>
<h3>Bottling</h3>
<p className="">When our master distiller determines a cask has reached its peak, it is bottled at the distillery — non-chill-filtered and at natural colour. Nothing is added, nothing taken away. What you taste is the unvarnished truth of time and oak.</p>
<div className="process-step-detail">
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:droplets" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg> Non-Chill Filtered</span>
<span className="chip"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:palette" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg> Natural Colour</span>
</div>
</div>
</div>
</div>
</section>

<section className="tasting" id="tasting">
<div className="tasting-header">
<div className="section-label reveal">Tasting Notes</div>
<h2 className="section-title reveal">The Character<br/>of <em>Ember</em></h2>
</div>
<div className="tasting-grid stagger-up !grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-6">

<div className="tasting-card featured reveal-child !col-span-1 md:!col-span-2 lg:!col-span-4 lg:!row-span-2" style={{transitionDelay: '0s'}}>
<div className="tasting-card-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wine" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="">The Signature Dram</h3>
<p className="">Our 12-year expression is the gateway to the Ember world. Best enjoyed neat or with a few drops of water to open the bouquet. The warmth builds slowly — honey, toasted grain, and a whisper of Highland heather on the finish.</p>
<div className="tasting-card-image">
<img alt="Whisky being poured into crystal glass" className="" loading="lazy" src="https://images.unsplash.com/photo-1694643665936-dedebb90b8f8?w=1600&amp;q=80"/>
</div>
</div>

<div className="tasting-card reveal-child !col-span-1 lg:!col-span-2" style={{transitionDelay: '0.1s'}}>
<div className="tasting-card-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flower-2" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
<h3 className="">Nose</h3>
<p className="">Heather honey, baked apple, and gentle woodsmoke. A current of vanilla cream beneath.</p>
<div className="tasting-flavor-bar">
<div className="bar-label"><span className="">Intensity</span><span>Rich</span></div>
<div className="bar-track"><div className="bar-fill" style={{-Fill: '72%'}}></div></div>
</div>
</div>
<div className="tasting-card reveal-child !col-span-1 lg:!col-span-2" style={{transitionDelay: '0.2s'}}>
<div className="tasting-card-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:droplet" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="">Palate</h3>
<p className="">Silky mouthfeel. Toffee, dried apricot, and toasted almond, balanced by a gentle spice.</p>
<div className="tasting-flavor-bar">
<div className="bar-label"><span>Sweetness</span><span>Balanced</span></div>
<div className="bar-track"><div className="bar-fill" style={{-Fill: '65%'}}></div></div>
</div>
</div>
<div className="tasting-card reveal-child !col-span-1 lg:!col-span-3" style={{transitionDelay: '0.3s'}}>
<div className="tasting-card-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flame" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3>Finish</h3>
<p>Long and warming. Cinnamon bark, dark honey, and a final note of toasted oak.</p>
<div className="tasting-flavor-bar">
<div className="bar-label"><span>Length</span><span>Lingering</span></div>
<div className="bar-track"><div className="bar-fill" style={{-Fill: '82%'}}></div></div>
</div>
</div>
<div className="tasting-card reveal-child !col-span-1 lg:!col-span-3" style={{transitionDelay: '0.4s'}}>
<div className="tasting-card-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mountain-snow" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m8 3l4 8l5-5l5 15H2z"></path><path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"></path></g></svg>
</div>
<h3 className="">Character</h3>
<p className="">Highland terroir — clean spring water, peat-kissed barley, and the breath of the Cairngorms running through every sip.</p>
<div className="tasting-flavor-bar">
<div className="bar-label"><span>Smokiness</span><span>Subtle</span></div>
<div className="bar-track"><div className="bar-fill" style={{-Fill: '38%'}}></div></div>
</div>
</div>
</div>
</section>

<section className="estate" id="estate">
<div className="estate-image">
<img alt="Ember Distillery estate at golden hour" className="" loading="lazy" src="https://images.unsplash.com/photo-1760627317288-8cc2b44efb2d?w=2560&amp;q=80"/>
</div>
<div className="estate-content">
<div className="estate-grid">
<div className="estate-text">
<div className="section-label reveal">The Estate</div>
<h2 className="section-title reveal">Where Land<br/>Becomes <em>Spirit</em></h2>
<p className="desc reveal">Set on 240 acres of Highland moorland, the Ember estate encompasses the original 1847 distillery buildings, our barrel-ageing warehouses carved into the hillside, and the Drummond House — a restored Georgian manor now home to our visitor experience.</p>
<p className="desc reveal">The estate's natural spring, fed by snowmelt from the Cairngorm plateau, has never ceased flowing. This water — remarkably soft and mineral-rich — is the foundation of every Ember expression.</p>
</div>
<div className="estate-features stagger-up">
<div className="estate-feature reveal-child" style={{transitionDelay: '0s'}}>
<div className="estate-feature-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<div className="">
<h4 className="">Drummond House</h4>
<p className="">Our Georgian visitor centre offers guided tastings, private cask experiences, and a whisky library spanning 150 years of Ember history.</p>
</div>
</div>
<div className="estate-feature reveal-child" style={{transitionDelay: '0.1s'}}>
<div className="estate-feature-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mountain" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="">The Warehouses</h4>
<p className="">Five stone-walled warehouses hold over 18,000 casks in various stages of maturation, from 3 to 40 years old.</p>
</div>
</div>
<div className="estate-feature reveal-child" style={{transitionDelay: '0.2s'}}>
<div className="estate-feature-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="">The Hearth Restaurant</h4>
<p className="">Seasonal Highland cuisine paired with Ember expressions. Open Thursday through Sunday, reservations recommended.</p>
</div>
</div>
<div className="estate-feature reveal-child" style={{transitionDelay: '0.3s'}}>
<div className="estate-feature-icon">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bed" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="">Estate Lodges</h4>
<p className="">Four luxury lodges on the estate grounds for overnight stays. Wake to Highland mist and the scent of peat smoke.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="awards">
<hr className="awards-sep"/>
<div className="awards-track" id="awardsTrack">
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trophy" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg></div>
<div className="awards-item-name">World Whiskies Awards</div>
<div className="awards-item-year">Gold · 2025</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg></div>
<div className="awards-item-name">International Spirits Challenge</div>
<div className="awards-item-year">Master · 2024</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="awards-item-name">San Francisco Spirits Competition</div>
<div className="awards-item-year">Double Gold · 2025</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:medal" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.21 15L2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12L5.12 2.2M13 12l5.88-9.8M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></g></svg></div>
<div className="awards-item-name">Scotch Whisky Masters</div>
<div className="awards-item-year">Best Highland · 2024</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crown" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="awards-item-name">Icons of Whisky</div>
<div className="awards-item-year">Distillery of the Year · 2023</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg></div>
<div className="awards-item-name">The Whisky Exchange</div>
<div className="awards-item-year">Top 50 · 2025</div>
</div>

<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trophy" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg></div>
<div className="awards-item-name">World Whiskies Awards</div>
<div className="awards-item-year">Gold · 2025</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg></div>
<div className="awards-item-name">International Spirits Challenge</div>
<div className="awards-item-year">Master · 2024</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="awards-item-name">San Francisco Spirits Competition</div>
<div className="awards-item-year">Double Gold · 2025</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:medal" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7.21 15L2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12L5.12 2.2M13 12l5.88-9.8M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></g></svg></div>
<div className="awards-item-name">Scotch Whisky Masters</div>
<div className="awards-item-year">Best Highland · 2024</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crown" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="awards-item-name">Icons of Whisky</div>
<div className="awards-item-year">Distillery of the Year · 2023</div>
</div>
<div className="awards-item">
<div className="awards-item-icon"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg></div>
<div className="awards-item-name">The Whisky Exchange</div>
<div className="awards-item-year">Top 50 · 2025</div>
</div>
</div>
</section>

<section className="visit" id="visit">
<div className="visit-inner">
<div className="section-label reveal">Visit Us</div>
<h2 className="section-title reveal">Experience Ember<br/><em>In Person</em></h2>
<p className="desc reveal">Join us at the distillery for a guided tour, private tasting, or simply to walk the Highland grounds. Every visit begins with a dram and ends with a deeper understanding of what makes Ember singular.</p>
<button className="visit-cta reveal" onclick="document.getElementById('heritage').scrollIntoView({behavior:'smooth'})">
<span>Reserve Your Experience</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="visit-details stagger-up">
<div className="visit-detail reveal-child" style={{transitionDelay: '0s'}}>
<div className="label">Open</div>
<div className="val">Thursday – Sunday</div>
</div>
<div className="visit-detail reveal-child" style={{transitionDelay: '0.1s'}}>
<div className="label">Tastings</div>
<div className="val">10am, 2pm, 5pm</div>
</div>
<div className="visit-detail reveal-child" style={{transitionDelay: '0.2s'}}>
<div className="label">Location</div>
<div className="val">Speyside, Scotland</div>
</div>
</div>
</div>
</section>

<footer className="footer">
<div className="footer-inner">
<div className="footer-brand">
<div className="footer-logo">E<span>MBER</span></div>
<p>Highland single malt whisky, crafted with patience since 1847. Distilled, matured, and bottled at the Ember Estate, Speyside.</p>
<div className="footer-age">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle className="" cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
        Please drink responsibly. 18+
      </div>
</div>
<div className="footer-col">
<h4 className="">Whisky</h4>
<ul className="">
<li><a href="#">The Foundation</a></li>
<li><a href="#">The Meridian</a></li>
<li><a href="#">The Antiquary</a></li>
<li className=""><a href="#">The Crucible</a></li>
<li className=""><a className="" href="#">The Solstice</a></li>
</ul>
</div>
<div className="footer-col">
<h4 className="">Visit</h4>
<ul className="">
<li className=""><a className="" href="#">Distillery Tours</a></li>
<li className=""><a className="" href="#">Private Tastings</a></li>
<li className=""><a className="" href="#">The Hearth Restaurant</a></li>
<li className=""><a href="#">Estate Lodges</a></li>
<li><a href="#">Gift Shop</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Connect</h4>
<ul>
<li><a href="#">Our Story</a></li>
<li><a href="#">Press &amp; Media</a></li>
<li><a href="#">Trade Enquiries</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p className="">© 2026 Ember Distillery. All rights reserved.</p>
<div className="footer-legal">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
<a href="#">Cookie Settings</a>
</div>
</div>
</footer>


    </>
  );
}
