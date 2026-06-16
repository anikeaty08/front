import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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


window.__MIMG={"aerial":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbc45d24-68dd-4afc-a185-a9cd27ebd80e_original.jpg","coast":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd52c5b2-98d6-4b50-ae83-410751803891_original.jpg","dunes":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/182bf631-7989-42d6-af11-db0c28c5e78b_original.jpg","hero":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e43ce459-2d34-4c70-9cbf-28bee8ce4136_original.jpg","night":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eedbc5aa-da5b-4a56-a93d-7f1293f986e4_original.jpg","peaks":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cd81936-fb20-478f-a409-86725064eaea_original.jpg","stay":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffcda4c1-50d3-4145-a7fb-97b2489884ab_original.jpg","traveler":"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7061e592-83e9-4e96-9da7-73d8df82b88d_original.jpg"};
document.addEventListener('DOMContentLoaded',function(){var M=window.__MIMG;document.querySelectorAll('img[data-mimg]').forEach(function(i){var u=M[i.getAttribute('data-mimg')];if(u)i.src=u;});});


(function(){
  "use strict";
  var REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FINE = matchMedia("(hover:hover) and (pointer:fine)").matches;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Lenis smooth-scroll substrate ---------- */
  var lenis;
  if(!REDUCE){
    lenis = new Lenis({duration:1.15, smoothWheel:true, wheelMultiplier:1});
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function(t){ lenis.raf(t*1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- Veil entrance + hero reveal (single chained timeline) ---------- */
  if(REDUCE){
    var v=document.getElementById("veil"); if(v) v.style.display="none";
    gsap.set(".hero .ln",{yPercent:0});
    gsap.set(".reveal",{opacity:1,y:0});
  } else {
    gsap.set(".hero .ln",{yPercent:125});
    gsap.set(".hero .reveal",{opacity:0,y:28});
    gsap.timeline()
      .to("#vbar",{scaleX:1,duration:.8,ease:"power2.inOut"})
      .to("#veil",{yPercent:-100,duration:.9,ease:"power3.inOut"},"+=.10")
      .set("#veil",{display:"none"})
      .to(".hero .ln",{yPercent:0,duration:1.1,stagger:.12,ease:"expo.out"},"-=.35")
      .to(".hero .reveal",{opacity:1,y:0,duration:.9,stagger:.14,ease:"expo.out"},"-=.55");
  }

  /* ---------- Nav state ---------- */
  var nav=document.getElementById("nav");
  ScrollTrigger.create({start:"top -80",onUpdate:function(self){ nav.classList.toggle("solid", self.scroll()>80); }});

  /* ---------- Progress bar ---------- */
  gsap.to("#progress",{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.3}});

  /* ---------- Generic reveals ---------- */
  gsap.utils.toArray(".reveal").forEach(function(el){
    if(el.closest(".hero")) return; // hero handled by veil timeline
    gsap.to(el,{opacity:1,y:0,duration:.9,ease:"expo.out",
      scrollTrigger:{trigger:el,start:"top 86%"}});
  });

  /* ---------- Manifesto statement: line reveal ---------- */
  if(!REDUCE && window.SplitType){
    var st=new SplitType(".statement",{types:"lines"});
    document.querySelectorAll(".statement .line").forEach(function(l){
      var w=document.createElement("span"); w.className="line-wrap"; w.style.display="block";
      l.parentNode.insertBefore(w,l); w.appendChild(l);
    });
    gsap.set(".statement .line",{yPercent:125});
    gsap.to(".statement .line",{yPercent:0,duration:1.1,stagger:.09,ease:"expo.out",
      scrollTrigger:{trigger:".statement",start:"top 82%"}});
  }

  /* ---------- Hero ken-burns + parallax ---------- */
  if(!REDUCE){
    gsap.to(".hero-media img",{scale:1.16,ease:"none",
      scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    gsap.to(".hero-media",{yPercent:14,ease:"none",
      scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    // generic data-speed parallax for backgrounds
    gsap.utils.toArray("[data-speed]").forEach(function(el){
      if(el.closest(".hero")) return;
      var s=parseFloat(el.getAttribute("data-speed"));
      gsap.fromTo(el,{yPercent:(1-s)*-14},{yPercent:(1-s)*14,ease:"none",
        scrollTrigger:{trigger:el.closest("section"),start:"top bottom",end:"bottom top",scrub:true}});
    });
    // inner-frame parallax for stay + cards
    gsap.to(".stay-media img",{yPercent:-8,ease:"none",
      scrollTrigger:{trigger:".stay-media",start:"top bottom",end:"bottom top",scrub:true}});
  }

  /* ---------- Journeys horizontal (desktop) / native scroll (mobile) ---------- */
  var mm = gsap.matchMedia();
  mm.add("(min-width: 861px)", function(){
    if(REDUCE) return;
    var track=document.getElementById("jtrack");
    var section=document.querySelector(".journeys");
    function dist(){ return Math.max(0, track.scrollWidth - window.innerWidth); }
    var move=gsap.to(track,{x:function(){return -dist();},ease:"none",
      scrollTrigger:{trigger:section,start:"top top",end:function(){return "+="+dist();},
        pin:".jpin",scrub:1,invalidateOnRefresh:true,
        onUpdate:function(self){ gsap.set("#jbar",{scaleX:self.progress}); }}});
    gsap.utils.toArray(".jcard").forEach(function(card){
      gsap.from(card,{autoAlpha:0,y:40,duration:.7,ease:"expo.out",
        scrollTrigger:{trigger:card,containerAnimation:move,start:"left 88%"}});
      var img=card.querySelector(".frame img");
      gsap.fromTo(img,{xPercent:-4},{xPercent:4,ease:"none",
        scrollTrigger:{trigger:card,containerAnimation:move,start:"left right",end:"right left",scrub:true}});
    });
  });
  mm.add("(max-width: 860px)", function(){
    document.querySelector(".journeys").classList.add("mobile");
  });

  /* ---------- Experience sticky scrollytelling (image swaps per step) ---------- */
  (function(){
    var steps=gsap.utils.toArray(".estep");
    var media=document.getElementById("expMedia");
    var cap=document.getElementById("expCap");
    var imgs=media?Array.prototype.slice.call(media.querySelectorAll(".em-img")):[];
    function activate(i){
      steps.forEach(function(s,k){s.classList.toggle("active",k===i);});
      imgs.forEach(function(im,k){im.classList.toggle("on",k===i);});
      if(cap){cap.textContent=steps[i].getAttribute("data-cap");cap.style.opacity=1;}
    }
    steps.forEach(function(step,i){
      ScrollTrigger.create({trigger:step,start:"top center",end:"bottom center",
        onToggle:function(self){ if(self.isActive) activate(i); }});
    });
    activate(0);
  })();

  /* ---------- Number count-up ---------- */
  gsap.utils.toArray(".nstat .v").forEach(function(el){
    var end=parseFloat(el.getAttribute("data-count"));
    var suf=el.getAttribute("data-suffix")||"";
    var obj={n:0};
    ScrollTrigger.create({trigger:el,start:"top 88%",once:true,onEnter:function(){
      if(REDUCE){el.textContent=end+suf;return;}
      gsap.to(obj,{n:end,duration:1.4,ease:"power2.out",onUpdate:function(){
        el.textContent=Math.round(obj.n)+suf;
      }});
    }});
  });

  /* ---------- Marquee ribbons ---------- */
  if(!REDUCE){
    gsap.to("#mrow1",{xPercent:-50,repeat:-1,duration:34,ease:"none"});
    gsap.set("#mrow2",{xPercent:-50});
    gsap.to("#mrow2",{xPercent:0,repeat:-1,duration:40,ease:"none"});
  }

  /* ---------- Magnetic CTAs ---------- */
  if(FINE && !REDUCE){
    document.querySelectorAll(".magnetic").forEach(function(el){
      el.addEventListener("mousemove",function(e){
        var r=el.getBoundingClientRect();
        gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.5,ease:"power3.out"});
      });
      el.addEventListener("mouseleave",function(){gsap.to(el,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"});});
    });
  }

  /* ---------- Custom cursor ---------- */
  if(FINE && !REDUCE){
    var cur=document.getElementById("cursor"); var lbl=cur.querySelector(".label");
    var cx=0,cy=0,tx=0,ty=0,shown=false;
    addEventListener("mousemove",function(e){tx=e.clientX;ty=e.clientY;
      if(!shown){shown=true;cur.classList.add("show");}});
    gsap.ticker.add(function(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;gsap.set(cur,{x:cx,y:cy});});
    document.querySelectorAll("[data-cursor]").forEach(function(el){
      el.addEventListener("mouseenter",function(){lbl.textContent=el.getAttribute("data-cursor");cur.classList.add("show");});
    });
    addEventListener("mouseleave",function(){cur.classList.remove("show");});
  }

  /* ---------- Cartographic route rail ---------- */
  (function(){
    var rail=document.getElementById("rail"); if(!rail) return;
    var dot=document.getElementById("railDot"), rcap=document.getElementById("railCap");
    if(!REDUCE){
      gsap.to(dot,{top:143,ease:"none",
        scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.4}});
    } else { gsap.set(dot,{top:70}); }
    function setTheme(t){ rail.style.setProperty("--rail-fg", t==="dark" ? "#F3ECE0" : "#17130E"); }
    setTheme("dark");
    gsap.utils.toArray("section[data-geo]").forEach(function(s){
      var parts=(s.getAttribute("data-geo")||"|dark").split("|");
      ScrollTrigger.create({trigger:s,start:"top 45%",end:"bottom 45%",
        onToggle:function(self){ if(self.isActive){ rcap.textContent=parts[0]; setTheme(parts[1]||"dark"); } }});
    });
  })();

  /* ---------- Anchor links via Lenis ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener("click",function(e){
      var id=a.getAttribute("href"); if(id==="#"||id.length<2) return;
      var t=document.querySelector(id); if(!t) return;
      e.preventDefault();
      if(lenis){lenis.scrollTo(t,{offset:-10,duration:1.3});}
      else{t.scrollIntoView({behavior:"smooth"});}
    });
  });

  window.addEventListener("load",function(){ ScrollTrigger.refresh(); });
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="progress" id="progress"></div>
<div className="cursor" id="cursor"><span className="label">Explore</span></div>
<div aria-hidden="true" className="rail" id="rail">
<span className="rcap" id="railCap">The road out</span>
<span className="rtrack"><span className="rdot" id="railDot"></span></span>
<span className="rlabel">MERIDIAN</span>
</div>
<div className="veil" id="veil">
<div className="vmark"><span>MERIDIAN</span></div>
<div className="vbar"><i id="vbar"></i></div>
</div>
<header className="nav" id="nav">
<a className="brand" href="#">MERIDIAN<span>.</span></a>
<nav className="nav-links">
<a data-cursor="See the routes" href="#journeys">Journeys</a>
<a data-cursor="How it works" href="#experience">The Experience</a>
<a data-cursor="Where you rest" href="#stay">The Stay</a>
<a className="nav-cta" data-cursor="Hold a seat" href="#begin">Begin</a>
</nav>
</header>
<main id="smooth">

<section className="hero" data-geo="The road out|dark" id="hero">
<div className="hero-media" data-speed="0.82"><img alt="A lone road winding through immense mountains at sunrise" data-mimg="hero"/></div>
<div className="hero-inner">
<p className="eyebrow">Meridian · Curated Escapes</p>
<h1>
<span className="line-wrap"><span className="ln">Travel the</span></span>
<span className="line-wrap"><span className="ln">long way</span></span>
<span className="line-wrap"><span className="ln thin">to somewhere that means something.</span></span>
</h1>
<div className="hero-sub">
<p className="lead reveal">Small, unhurried journeys to the edges of the map — designed by hand, never by itinerary.</p>
<div className="cta-split reveal">
<a className="pill magnetic" data-cursor="Hold a seat" href="#begin">Plan your escape</a>
<a aria-label="See the journeys" className="disc magnetic" data-cursor="See the routes" href="#journeys">
<svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</a>
</div>
</div>
</div>
<div className="scrollcue"><span>Scroll</span><span className="ln"></span></div>
</section>

<section className="manifesto" data-geo="The idea|light" id="about">
<div className="ghost" data-speed="1.15">meridian</div>
<div className="wrap">
<p className="eyebrow muted reveal">/ The idea</p>
<h2 className="statement" style={{marginTop: '26px'}}>We don't sell destinations. We design the <em>distance</em> between you and the ordinary.</h2>
<div className="body">
<p className="reveal">A Meridian journey is built backwards — from the feeling you want at the end, not the boxes you tick along the way. No groups of forty. No 6 a.m. coach. No "optional" upsells.</p>
<p className="reveal">Just a handful of travellers, a place most people fly over, and enough room in the schedule to actually be somewhere.</p>
</div>
</div>
</section>

<section className="journeys" data-geo="Twelve routes|dark" id="journeys">
<div className="jpin">
<div className="jtrack" id="jtrack">
<div className="jpanel jintro">
<p className="eyebrow">/ The Journeys</p>
<h2>Three ways<br/>to lose the map.</h2>
<p className="lead">Each route runs a handful of times a year, eight seats at a time. Drag, or just keep scrolling.</p>
</div>
<article className="jcard">
<div className="frame"><img alt="Jagged alpine peaks above a cloud sea at first light" data-mimg="peaks"/></div>
<span className="idx">01 / 03</span>
<div className="meta">
<p className="coord">47°N · 11°E · Dolomiti</p>
<h3>The high silence</h3>
<p className="note">Seven slow days above the cloud line.</p>
</div>
</article>
<article className="jcard">
<div className="frame"><img alt="Rolling desert dunes at golden hour with a single trail of footprints" data-mimg="dunes"/></div>
<span className="idx">02 / 03</span>
<div className="meta">
<p className="coord">24°S · 15°E · Namib</p>
<h3>The oldest light</h3>
<p className="note">Dune dawns and nothing on the schedule.</p>
</div>
</article>
<article className="jcard">
<div className="frame"><img alt="Dramatic coastal cliffs and a fjord at dusk" data-mimg="coast"/></div>
<span className="idx">03 / 03</span>
<div className="meta">
<p className="coord">61°N · 6°E · Vestland</p>
<h3>The long coast</h3>
<p className="note">Fjords, fog, and the road that runs out.</p>
</div>
</article>
<div className="jpanel joutro">
<p className="eyebrow">/ And nine more</p>
<h2>Can't choose?<br/>Neither could we.</h2>
<a className="pill magnetic" data-cursor="Open the atlas" href="#begin">See all 12 routes
            <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</a>
</div>
</div>
<div className="jhint"><span>Scroll to travel</span><span className="bar"><i id="jbar"></i></span></div>
</div>
</section>

<section className="exp" data-geo="The method|light" id="experience">
<div className="wrap">
<div className="head">
<p className="eyebrow muted reveal">/ The Experience</p>
<h2 className="h2 reveal">Four moves. That's<br/>the whole itinerary.</h2>
</div>
<div className="exp-grid">
<div className="exp-media" id="expMedia">
<img alt="Arriving by mountain road" className="em-img on" data-mimg="hero"/>
<img alt="Wandering the coast" className="em-img" data-mimg="coast"/>
<img alt="Resting at the lodge" className="em-img" data-mimg="stay"/>
<img alt="The view on the way home" className="em-img" data-mimg="traveler"/>
<span className="cap" id="expCap">01 — Arrive</span>
</div>
<div className="exp-steps">
<div className="estep" data-cap="01 — Arrive"><div className="num">01</div><h3>Arrive</h3><p>You land, we handle the rest. No transfers to puzzle out, no group of forty already on the bus.</p></div>
<div className="estep" data-cap="02 — Wander"><div className="num">02</div><h3>Wander</h3><p>A local who actually knows the place — not a flag on a stick. The good light, the empty trail, the table without a sign.</p></div>
<div className="estep" data-cap="03 — Rest"><div className="num">03</div><h3>Rest</h3><p>We only book lodging we'd return to ourselves. Few rooms, real beds, windows that earn their view.</p></div>
<div className="estep" data-cap="04 — Return"><div className="num">04</div><h3>Return</h3><p>You come back with fewer photos and more of whatever you went looking for. That's the metric we keep.</p></div>
</div>
</div>
</div>
</section>

<section className="stay" data-geo="Basecamp|light" id="stay">
<div className="wrap">
<div className="stay-grid">
<div className="stay-media"><img alt="Warm minimalist lodge interior at dusk" data-mimg="stay"/></div>
<div className="stay-copy">
<p className="eyebrow muted reveal">/ The Stay</p>
<h2 className="h2 reveal">Where you land matters<br/>as much as where you go.</h2>
<p className="lead reveal">Every bed on a Meridian route is one we've slept in. No 400-room towers, no lobby muzak — small houses run by people who remember your name by day two.</p>
<div className="ledger reveal">
<div><span>Rooms per stay</span><span>Under 12</span></div>
<div><span>Chosen by</span><span>The people who travel it</span></div>
<div><span>Chain hotels</span><span>None, ever</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="interlude" data-geo="2,400 metres|dark" id="interlude">
<div className="bg" data-speed="0.8"><img alt="The Milky Way over a lit tent on a high plateau" data-mimg="night"/></div>
<div className="wrap">
<p className="eyebrow reveal">/ Field note no.07</p>
<p className="big reveal">The best part of going far is the <em>quiet</em> when you finally get there.</p>
<p className="fieldnote reveal">— written at 2,400m, somewhere with no signal</p>
</div>
</section>

<section className="numbers" data-geo="Small on purpose|dark" id="numbers">
<div className="bg" data-speed="0.78"><img alt="Aerial view of a river winding through autumn wilderness" data-mimg="aerial"/></div>
<div className="wrap">
<div className="head">
<p className="eyebrow reveal">/ By the numbers</p>
<h2 className="h2 reveal">Small on purpose.</h2>
</div>
<div className="nledger">
<div className="nstat lead-stat"><div className="v" data-count="8" data-suffix="">8</div><div className="k">travellers per journey — never more</div></div>
<div className="nstat"><div className="v" data-count="12" data-suffix="">12</div><div className="k">routes a year, each run a few times</div></div>
<div className="nstat"><div className="v" data-count="0" data-suffix="">0</div><div className="k">fixed-itinerary forced marches</div></div>
<div className="nstat"><div className="v" data-count="94" data-suffix="%">94%</div><div className="k">of travellers book a second route</div></div>
</div>
</div>
</section>

<section className="quote">
<div className="wrap">
<q>I booked a trip. I came home with a year's worth of quiet.</q>
<p className="who">— Lena R., Oslo · after the Vestland coast</p>
</div>
</section>

<section aria-hidden="true" className="marquee">
<div className="mrow" id="mrow1">
<span>Dolomiti</span><span>Namib</span><span>Vestland</span><span>Atacama</span><span>Hokkaido</span><span>Patagonia</span><span>Faroes</span>
<span>Dolomiti</span><span>Namib</span><span>Vestland</span><span>Atacama</span><span>Hokkaido</span><span>Patagonia</span><span>Faroes</span>
</div>
<div className="mrow dim" id="mrow2">
<span>47°N 11°E</span><span>24°S 15°E</span><span>61°N 6°E</span><span>23°S 67°W</span><span>43°N 142°E</span><span>50°S 73°W</span>
<span>47°N 11°E</span><span>24°S 15°E</span><span>61°N 6°E</span><span>23°S 67°W</span><span>43°N 142°E</span><span>50°S 73°W</span>
</div>
</section>

<section className="final" data-geo="Your turn|dark" id="begin">
<div className="bg" data-speed="0.85"><img alt="A lone traveller at a clifftop viewpoint at sunrise" data-mimg="traveler"/></div>
<div className="wrap">
<p className="eyebrow">/ Your turn</p>
<h2>
<span className="line-wrap"><span className="ln">Begin your</span></span>
<span className="line-wrap"><span className="ln thin">Meridian.</span></span>
</h2>
<p className="lead">Twelve journeys. Eight seats each. One of them could be yours — leave an address and we'll send the atlas.</p>
<form className="signup" onsubmit="return false">
<input aria-label="Email address" placeholder="you@somewhere.com" type="email"/>
<button className="pill magnetic" data-cursor="Send the atlas" type="submit">Hold my seat
          <svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
</button>
</form>
</div>
</section>

<footer className="foot">
<div className="wrap">
<div className="foot-top">
<div>
<a className="brand" href="#">MERIDIAN<span style={{color: 'var(--accent)'}}>.</span></a>
<p>Curated escapes to the edges of the map. Small, unhurried, and built by hand.</p>
</div>
<div className="foot-col"><h4>Journeys</h4><a href="#journeys">The Dolomiti</a><a href="#journeys">The Namib</a><a href="#journeys">The Vestland</a><a href="#journeys">All 12 routes</a></div>
<div className="foot-col"><h4>Field notes</h4><a href="#interlude">The journal</a><a href="#about">Our idea</a><a href="#numbers">Why so small</a></div>
<div className="foot-col"><h4>The studio</h4><a href="#begin">Hold a seat</a><a href="#begin">Gift a journey</a><a href="#begin">Talk to us</a></div>
</div>
<div className="foot-bottom">
<span>© 2026 Meridian Escapes — an imagined brand, built as a motion study.</span>
<span>Crafted with light, type &amp; scroll.</span>
</div>
</div>
</footer>
</main>






    </>
  );
}
