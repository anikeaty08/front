import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function(){
'use strict';
gsap.registerPlugin(ScrollTrigger);

function initPage(){

/* ===== HERO ENTRANCE ===== */
const hTl=gsap.timeline();
hTl
  .from('.hero-est',{y:20,opacity:0,duration:0.7,ease:'power3.out'})
  .from('.hero-title',{y:50,opacity:0,duration:1,ease:'power3.out'},'-=0.3')
  .from('.hero-sub',{y:30,opacity:0,duration:0.7},'-=0.4')
  .from('.hero-divider',{scaleX:0,opacity:0,duration:0.6},'-=0.3')
  .from('.hero-buttons',{y:25,opacity:0,duration:0.7},'-=0.2');

/* ===== HERO PARALLAX ===== */
gsap.to('#heroBgImg',{y:'20%',ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});

/* ===== NAV SCROLL ===== */
ScrollTrigger.create({
  trigger:'.hero',start:'bottom-=200 top',
  onEnter:()=>document.getElementById('nav').classList.add('scrolled'),
  onLeaveBack:()=>document.getElementById('nav').classList.remove('scrolled')
});

/* ===== FADE UP OBSERVER ===== */
const fades=document.querySelectorAll('.reveal-up');
const fadeObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');fadeObs.unobserve(e.target)}});
},{threshold:0.15,rootMargin:'0px 0px -40px 0px'});
fades.forEach(el=>fadeObs.observe(el));

/* ===== REVEAL OBSERVER (directional) ===== */
const clips=document.querySelectorAll('.reveal-right,.reveal-left,.reveal-center');
const clipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');clipObs.unobserve(e.target)}});
},{threshold:0.15,rootMargin:'0px 0px -40px 0px'});
clips.forEach(el=>clipObs.observe(el));

/* ===== HERITAGE PARALLAX ===== */
gsap.to('#heritageBgImg',{y:'15%',ease:'none',scrollTrigger:{trigger:'.heritage',start:'top bottom',end:'bottom top',scrub:true}});

/* ===== HERITAGE COUNTERS ===== */
document.querySelectorAll('.heritage-stat-val').forEach(el=>{
  const target=parseInt(el.dataset.count);
  ScrollTrigger.create({trigger:el,start:'top 85%',once:true,onEnter:()=>{
    gsap.to({v:0},{v:target,duration:2,ease:'power2.out',onUpdate:function(){el.textContent=Math.round(this.targets()[0].v)}});
  }});
});

/* ===== EXPERIENCE CARDS (handled by reveal-up CSS + IntersectionObserver) ===== */

/* ===== GALLERY (handled by reveal-right CSS + IntersectionObserver) ===== */

/* ===== CTA ENTRANCE (handled by reveal-up CSS + IntersectionObserver) ===== */

/* ===== FOOTER ===== */
gsap.from('.footer-top > *',{y:25,opacity:0,duration:0.6,stagger:0.08,immediateRender:false,scrollTrigger:{trigger:'.footer-top',start:'top 88%'}});

} // end initPage
initPage();

/* ===== TESTIMONIAL CAROUSEL ===== */
const tData=[
  {quote:'"The Cuvee Eternelle is not simply champagne -- it is <strong>liquid memory</strong>. Each sip returns you to the golden autumn afternoon when those grapes surrendered themselves to destiny. I have tasted thousands of wines. This one made me weep."',name:'Isabelle Moreau',role:'Head Sommelier, Le Cinq, Paris',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80&auto=format'},
  {quote:'"Aurelia\'s Blanc de Blancs possesses a precision and mineral tension that is <strong>almost architectural</strong>. It builds on the palate like a cathedral -- layer upon layer of chalk, citrus, and brioche, culminating in a finish that seems to last for minutes."',name:'Henri Belmont',role:'Wine Director, The Dorchester, London',img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format'},
  {quote:'"In thirty years of covering Champagne, I have never encountered a house so <strong>quietly radical</strong>. Their biodynamic practices and minimal intervention produce wines of startling purity. Aurelia is the future of tradition."',name:'Clara Fontaine',role:'Editor, Revue du Vin de France',img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format'}
];
let tIdx=0;
document.querySelectorAll('.testimonial-dots button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const i=parseInt(btn.dataset.i);if(i===tIdx)return;tIdx=i;
    const t=tData[tIdx];
    gsap.to(['#tQuote','#tName','#tRole','#tAvatar'],{opacity:0,y:15,duration:0.3,stagger:0.04,onComplete:()=>{
      document.getElementById('tQuote').innerHTML=t.quote;
      document.getElementById('tName').textContent=t.name;
      document.getElementById('tRole').textContent=t.role;
      document.getElementById('tAvatar').src=t.img;
      gsap.to(['#tQuote','#tName','#tRole','#tAvatar'],{opacity:1,y:0,duration:0.5,stagger:0.04,ease:'power3.out'});
    }});
    document.querySelectorAll('.testimonial-dots button').forEach((b,j)=>b.classList.toggle('active',j===tIdx));
  });
});

/* ===== MOBILE NAV ===== */
const hamburger=document.getElementById('navHamburger'),mobileNav=document.getElementById('mobileNav');
let mobOpen=false;
hamburger.addEventListener('click',()=>{mobOpen=!mobOpen;mobileNav.classList.toggle('open',mobOpen);document.body.style.overflow=mobOpen?'hidden':''});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobOpen=false;mobileNav.classList.remove('open');document.body.style.overflow=''}));

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();const y=t.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:y,behavior:'smooth'})}
  });
});

})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="nav" id="nav">
<div className="container nav-inner">
<a className="nav-logo" href="#">Maison Aurelia</a>
<div className="nav-links">
<a className="nav-link" href="#intro">La Maison</a>
<a className="nav-link" href="#collection">Collection</a>
<a className="nav-link" href="#heritage">Heritage</a>
<a className="nav-link" href="#experience">Experiences</a>
<a className="nav-link" href="#gallery">Gallery</a>
<a className="nav-cta" href="#cta">Visit Us</a>
</div>
<div className="nav-hamburger" id="navHamburger"><span></span><span></span><span></span></div>
</div>
</nav>
<div className="mobile-nav" id="mobileNav">
<a href="#intro">La Maison</a>
<a href="#collection">Collection</a>
<a href="#heritage">Heritage</a>
<a href="#experience">Experiences</a>
<a href="#gallery">Gallery</a>
<a href="#cta">Visit Us</a>
</div>

<section className="hero">
<div className="hero-bg">
<img alt="Golden sunrise over the Champagne vineyards of Maison Aurelia" id="heroBgImg" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&amp;q=85&amp;auto=format"/>
<div className="hero-bg-bottom"></div>
</div>
<div className="hero-content">
<div className="hero-est">Epernay, France -- Since 1842</div>
<h1 className="hero-title"><strong>Aurelia</strong><br/>L'art du Champagne</h1>
<p className="hero-sub">Six generations of meticulous craftsmanship, devoted to creating champagne that transcends the ordinary and becomes the extraordinary.</p>
<div className="hero-divider ornament">
<span className="ornament-line"></span>
<span className="ornament-diamond"></span>
<span className="ornament-line"></span>
</div>
<div className="hero-buttons">
<a className="btn-wine" href="#collection"><span>Discover Collection</span><span className="iconify" data-icon="solar:arrow-right-linear"></span></a>
<a className="btn-cream" href="#experience"><span className="iconify" data-icon="solar:play-bold"></span><span>Our Story</span></a>
</div>
</div>
</section>

<section className="intro section" id="intro">
<div className="container">
<div className="intro-grid">
<div className="intro-text">
<div className="section-label reveal-up">La Maison</div>
<h2 className="section-title reveal-up fd1">A legacy written in <strong>bubbles</strong></h2>
<p className="intro-quote reveal-up fd2">"Champagne is not merely a drink -- it is a <strong>philosophy of living</strong>, a celebration of the patience required to turn sunlight and soil into something eternal."</p>
<p className="intro-body reveal-up fd3">Founded in 1842 by Auguste Aurelia in the chalky cellars beneath Epernay, Maison Aurelia has remained a family affair for six generations. We tend 62 hectares of Grand Cru vineyards across the Cote des Blancs and Montagne de Reims, practicing biodynamic viticulture and hand-harvesting every cluster.</p>
<div className="ornament reveal-up fd4" style={{justifyContent: 'flex-start', margin: '2rem 0 0'}}>
<span className="ornament-line"></span>
<span className="ornament-diamond"></span>
<span className="ornament-line"></span>
</div>
</div>
<div className="intro-visual">
<div className="intro-img reveal-right">
<img alt="Wine being poured in the tasting room of Maison Aurelia" loading="lazy" src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&amp;q=80&amp;auto=format"/>
</div>
<div className="intro-frame"></div>
<div className="intro-badge reveal-up">
<div className="intro-badge-icon"><span className="iconify" data-icon="solar:medal-ribbons-star-bold"></span></div>
<div className="intro-badge-text">
<span>Robert Parker</span>
<strong>98 Points -- Exceptional</strong>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="collection" id="collection">
<div className="container">
<div className="collection-header">
<div className="section-label reveal-up">The Collection</div>
<h2 className="section-title reveal-up fd1">Our finest <strong>cuvees</strong></h2>
<div className="ornament reveal-up fd2" style={{marginTop: '1.5rem'}}><span className="ornament-line"></span><span className="ornament-diamond"></span><span className="ornament-line"></span></div>
</div>
<div className="collection-grid">
<div className="collection-item reveal-up">
<div className="collection-item-img reveal-center">
<img alt="Aurelia Grand Cru Blanc de Blancs bottle" loading="lazy" src="https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?w=700&amp;q=80&amp;auto=format"/>
</div>
<div className="collection-item-info">
<div className="collection-item-name">Grand Cru Blanc de Blancs</div>
<div className="collection-item-detail">100% Chardonnay -- Cote des Blancs</div>
<div className="collection-item-price">EUR 185</div>
</div>
<div className="collection-item-arrow"><span className="iconify" data-icon="solar:arrow-right-up-linear"></span></div>
</div>
<div className="collection-item reveal-up fd1">
<div className="collection-item-img reveal-center">
<img alt="Aurelia Rose Prestige champagne" loading="lazy" src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=700&amp;q=80&amp;auto=format"/>
</div>
<div className="collection-item-info">
<div className="collection-item-name">Rose Prestige</div>
<div className="collection-item-detail">Pinot Noir -- Montagne de Reims</div>
<div className="collection-item-price">EUR 220</div>
</div>
<div className="collection-item-arrow"><span className="iconify" data-icon="solar:arrow-right-up-linear"></span></div>
</div>
<div className="collection-item reveal-up fd2">
<div className="collection-item-img reveal-center">
<img alt="Aurelia Cuvee Eternelle vintage champagne" loading="lazy" src="https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?w=700&amp;q=80&amp;auto=format"/>
</div>
<div className="collection-item-info">
<div className="collection-item-name">Cuvee Eternelle 2012</div>
<div className="collection-item-detail">Grand Cru Vintage -- Limited Release</div>
<div className="collection-item-price">EUR 450</div>
</div>
<div className="collection-item-arrow"><span className="iconify" data-icon="solar:arrow-right-up-linear"></span></div>
</div>
</div>
</div>
</section>

<section className="heritage" id="heritage">
<div className="heritage-bg">
<img alt="The ancient chalk cellars of Maison Aurelia" id="heritageBgImg" loading="lazy" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&amp;q=80&amp;auto=format"/>
</div>
<div className="heritage-mask-top"></div>
<div className="heritage-mask-bottom"></div>
<div className="container heritage-content">
<div className="section-label reveal-up" style={{color: 'var(--gold-light)'}}>Our Heritage</div>
<h2 className="heritage-title reveal-up fd1"><strong>180 years</strong> beneath the chalk</h2>
<p className="heritage-body reveal-up fd2">Our cellars extend two kilometers beneath the hills of Epernay, carved into Cretaceous chalk 30 meters below the surface. Here, at a constant 12 degrees Celsius, millions of bottles undergo the slow, sacred transformation from wine to champagne.</p>
<div className="heritage-stats reveal-up fd3">
<div className="heritage-stat">
<div className="heritage-stat-val" data-count="182">0</div>
<div className="heritage-stat-label">Years of Heritage</div>
</div>
<div className="heritage-stat">
<div className="heritage-stat-val" data-count="62">0</div>
<div className="heritage-stat-label">Hectares Grand Cru</div>
</div>
<div className="heritage-stat">
<div className="heritage-stat-val" data-count="6">0</div>
<div className="heritage-stat-label">Generations</div>
</div>
</div>
</div>
</section>

<section className="experience section" id="experience">
<div className="container">
<div className="experience-header">
<div className="section-label reveal-up">Experiences</div>
<h2 className="section-title reveal-up fd1">Immerse yourself in <strong>Aurelia</strong></h2>
</div>
<div className="experience-grid">
<div className="experience-card reveal-up">
<div className="experience-card-icon"><span className="iconify" data-icon="mdi:wine"></span></div>
<h3>Private Tasting</h3>
<p>A guided journey through our complete collection, paired with artisanal canapes, in our 19th-century salon prive.</p>
</div>
<div className="experience-card reveal-up fd1">
<div className="experience-card-icon"><span className="iconify" data-icon="solar:map-point-bold"></span></div>
<h3>Vineyard Walk</h3>
<p>Stroll through our Grand Cru vineyards with our chef de cave, learning the secrets of terroir and biodynamic viticulture.</p>
</div>
<div className="experience-card reveal-up fd2">
<div className="experience-card-icon"><span className="iconify" data-icon="solar:star-bold"></span></div>
<h3>Cellar Descent</h3>
<p>Descend 30 meters into our chalk cellars, where millions of bottles age in silence. A sensory experience unlike any other.</p>
</div>
<div className="experience-card reveal-up fd3">
<div className="experience-card-icon"><span className="iconify" data-icon="solar:chef-hat-bold"></span></div>
<h3>Gastronomic Dinner</h3>
<p>A seven-course dinner by our Michelin-starred chef, each dish designed to illuminate a different facet of champagne.</p>
</div>
</div>
</div>
</section>

<section className="gallery" id="gallery">
<div className="container">
<div className="gallery-header">
<div className="section-label reveal-up">Moments</div>
<h2 className="section-title reveal-up fd1">The world of <strong>Aurelia</strong></h2>
</div>
<div className="gallery-grid">
<div className="gallery-item reveal-right"><img alt="Champagne glasses in golden hour light" loading="lazy" src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&amp;q=80&amp;auto=format"/></div>
<div className="gallery-item reveal-left"><img alt="Vine rows at sunrise in Champagne region" loading="lazy" src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600&amp;q=80&amp;auto=format"/></div>
<div className="gallery-item reveal-right"><img alt="Fine dining table set with champagne" loading="lazy" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&amp;q=80&amp;auto=format"/></div>
<div className="gallery-item reveal-left"><img alt="Harvest time in the vineyards" loading="lazy" src="https://images.unsplash.com/photo-1598306442928-4d90f32c6866?w=600&amp;q=80&amp;auto=format"/></div>
<div className="gallery-item reveal-right"><img alt="Champagne bottles aging in chalk cellars" loading="lazy" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&amp;q=80&amp;auto=format"/></div>
<div className="gallery-item reveal-left"><img alt="Riddling racks in the cellar" loading="lazy" src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=600&amp;q=80&amp;auto=format"/></div>
</div>
</div>
</section>

<section className="testimonial">
<div className="container">
<div className="testimonial-inner">
<div className="testimonial-mark reveal-up">"</div>
<p className="testimonial-quote reveal-up fd1" id="tQuote">"The Cuvee Eternelle is not simply champagne -- it is <strong>liquid memory</strong>. Each sip returns you to the golden autumn afternoon when those grapes surrendered themselves to destiny. I have tasted thousands of wines. This one made me weep."</p>
<div className="testimonial-author reveal-up fd2" id="tAuthor">
<div className="testimonial-avatar"><img alt="Wine critic portrait" id="tAvatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;q=80&amp;auto=format"/></div>
<div className="testimonial-info">
<h5 id="tName">Isabelle Moreau</h5>
<p id="tRole">Head Sommelier, Le Cinq, Paris</p>
</div>
</div>
<div className="testimonial-dots">
<button className="active" data-i="0"></button>
<button data-i="1"></button>
<button data-i="2"></button>
</div>
</div>
</div>
</section>

<section className="cta" id="cta">
<div className="cta-grid">
<div className="cta-image reveal-up">
<img alt="The elegant tasting salon of Maison Aurelia" loading="lazy" src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=900&amp;q=80&amp;auto=format"/>
</div>
<div className="cta-content">
<div className="cta-inner">
<div className="section-label reveal-up">Visit Us</div>
<h2 className="cta-title reveal-up fd1">Begin your <strong>Aurelia</strong> journey</h2>
<p className="cta-body reveal-up fd2">Join us in Epernay for a private tasting, or receive our collection at your door. Subscribe to our cellar letter for first access to new releases and exclusive invitations.</p>
<div className="cta-form reveal-up fd3">
<input aria-label="Email address" className="cta-input" placeholder="Your email address" type="email"/>
<button className="cta-submit" type="button">Subscribe</button>
</div>
<p className="cta-note reveal-up fd4"><span className="iconify" data-icon="solar:lock-bold" style={{color: 'var(--gold)', fontSize: '0.8rem', verticalAlign: 'middle', marginRight: '0.25rem'}}></span> We respect your privacy. Unsubscribe anytime.</p>
</div>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-top">
<div className="footer-brand">
<div className="footer-brand-logo">Maison Aurelia</div>
<p>Crafting Grand Cru champagne in Epernay since 1842. Six generations of devotion to the art of effervescence.</p>
<div className="footer-social">
<a aria-label="Instagram" href="#"><span className="iconify" data-icon="solar:gallery-bold"></span></a>
<a aria-label="Pinterest" href="#"><span className="iconify" data-icon="solar:pin-bold"></span></a>
<a aria-label="YouTube" href="#"><span className="iconify" data-icon="solar:play-bold"></span></a>
</div>
</div>
<div className="footer-col">
<h4>La Maison</h4>
<ul>
<li><a href="#">Our History</a></li>
<li><a href="#">The Vineyards</a></li>
<li><a href="#">Winemaking</a></li>
<li><a href="#">Sustainability</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Collection</h4>
<ul>
<li><a href="#">Blanc de Blancs</a></li>
<li><a href="#">Rose Prestige</a></li>
<li><a href="#">Cuvee Eternelle</a></li>
<li><a href="#">Gift Sets</a></li>
</ul>
</div>
<div className="footer-col">
<h4>Experience</h4>
<ul>
<li><a href="#">Book a Visit</a></li>
<li><a href="#">Private Tasting</a></li>
<li><a href="#">Corporate Events</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p>2024 Maison Aurelia. Epernay, France.</p>
<div className="footer-bottom-links">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Legal</a>
</div>
</div>
<p className="footer-age">Please drink responsibly. You must be of legal drinking age in your country to access this site.</p>
</div>
</footer>


    </>
  );
}
