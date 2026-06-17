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



      (function(){
        "use strict";
        const $=(s,c)=>(c||document).querySelector(s);
        const $$=(s,c)=>Array.from((c||document).querySelectorAll(s));
        const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        /* ---------- ROUTER ---------- */
        const pages=$$('.page');
        const header=$('#header');
        let revealObs=null, failsafeTimer=null;

        function revealAll(scope){ $$('.reveal,.clip',scope||document).forEach(e=>e.classList.add('in')); }
        setTimeout(function(){ revealAll(); }, 2400);

        function activateReveals(pageEl){
          if(revealObs) revealObs.disconnect();
          const els=$$('.reveal,.clip',pageEl);
          if(reduce || !('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
          revealObs=new IntersectionObserver((entries)=>{
            entries.forEach(en=>{ if(en.isIntersecting){en.target.classList.add('in'); revealObs.unobserve(en.target);} });
          },{rootMargin:'0px 0px -10% 0px',threshold:0.05});
          const vh=window.innerHeight||document.documentElement.clientHeight;
          els.forEach(e=>{
            e.classList.remove('in');
            const r=e.getBoundingClientRect();
            if(r.top < vh*0.95){ e.classList.add('in'); }
            else { revealObs.observe(e); }
          });
          clearTimeout(failsafeTimer);
          failsafeTimer=setTimeout(function(){ revealAll(pageEl); }, 1800);
        }

        function show(name,push){
          const target=pages.find(p=>p.dataset.page===name)||pages[0];
          pages.forEach(p=>p.classList.toggle('active',p===target));
          header.dataset.nav=target.dataset.nav||'dark';
          $$('video').forEach(v=>{if(!target.contains(v)){v.pause();}});
          window.scrollTo({top:0,behavior:'instant'});
          onScroll();
          $$('.nav a[data-link]').forEach(a=>a.classList.toggle('active',a.dataset.link===name));
          $$('.mobile nav a[data-link]').forEach(a=>a.classList.toggle('active',a.dataset.link===name));
          requestAnimationFrame(()=>activateReveals(target));
          if(push!==false) history.replaceState(null,'','#'+name);
          closeMenu();
        }

        /* ---------- NAV CLICK BINDING (delegated + bound) ---------- */
        function bindLink(el){
          let touchHandled=false;
          const go=function(e){
            if(e) e.preventDefault();
            const name=el.dataset.link;
            if(name) show(name);
          };
          // touchend ensures instant, reliable activation on mobile.
          // Mark as handled so the synthetic click that follows is ignored.
          el.addEventListener('touchend',function(e){
            e.preventDefault();
            touchHandled=true;
            go(e);
            setTimeout(function(){ touchHandled=false; }, 600);
          },{passive:false});
          el.addEventListener('click',function(e){
            if(touchHandled){ e.preventDefault(); return; }
            go(e);
          });
        }
        $$('[data-link]').forEach(bindLink);

        /* ---------- HEADER SCROLL ---------- */
        function onScroll(){ header.classList.toggle('scrolled',window.scrollY>40); }
        window.addEventListener('scroll',onScroll,{passive:true});

        /* ---------- HERO PARALLAX ---------- */
        const heroImg=$('#heroImg');
        if(heroImg && !reduce){
          window.addEventListener('scroll',()=>{
            if(!$('[data-page="home"]').classList.contains('active'))return;
            const y=window.scrollY;
            if(y<window.innerHeight) heroImg.style.transform='translateY('+(y*0.18)+'px) scale(1.04)';
          },{passive:true});
        }

        /* ---------- MOBILE MENU ---------- */
        const mobile=$('#mobile'),burger=$('#burger'),mClose=$('#mClose');
        function openMenu(){
          mobile.classList.add('open');
          burger.classList.add('is-open');
          burger.setAttribute('aria-expanded','true');
          header.classList.add('menu-open');
          document.body.style.overflow='hidden';
        }
        function closeMenu(){
          mobile.classList.remove('open');
          burger.classList.remove('is-open');
          burger.setAttribute('aria-expanded','false');
          header.classList.remove('menu-open');
          document.body.style.overflow='';
        }
        function toggleMenu(e){
          if(e) e.preventDefault();
          mobile.classList.contains('open') ? closeMenu() : openMenu();
        }
        burger.addEventListener('click',toggleMenu);
        burger.addEventListener('touchend',function(e){e.preventDefault();toggleMenu(e);},{passive:false});
        mClose.addEventListener('click',function(e){e.preventDefault();closeMenu();});
        mClose.addEventListener('touchend',function(e){e.preventDefault();closeMenu();},{passive:false});
        document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

        /* ---------- FILM PLAYERS ---------- */
        $$('.film-player').forEach(fp=>{
          const v=$('video',fp),play=$('.play',fp);
          play.addEventListener('click',()=>{v.play();play.classList.add('hide');});
          v.addEventListener('play',()=>play.classList.add('hide'));
          v.addEventListener('pause',()=>{if(!v.ended)play.classList.remove('hide');});
        });

        /* ---------- LIGHTBOX ---------- */
        const lb=$('#lightbox'),lbImg=$('#lbImg');
        $('#gallery')?.addEventListener('click',e=>{
          const img=e.target.closest('.g img'); if(!img)return;
          lbImg.src=img.src; lb.classList.add('open'); document.body.style.overflow='hidden';
        });
        function closeLb(){lb.classList.remove('open');document.body.style.overflow='';}
        lb.addEventListener('click',closeLb);
        document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb();});

        /* ---------- SUBMIT ---------- */
        $('#submitBtn')?.addEventListener('click',()=>{
          $('#formWrap').style.display='none';
          $('#formDone').classList.add('show');
          window.scrollTo({top:0,behavior:'smooth'});
        });

        /* ---------- CUSTOM CURSOR ---------- */
        const fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
        if(fine){
          const cur=$('#cursor'); let cx=innerWidth/2,cy=innerHeight/2,tx=cx,ty=cy;
          window.addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;cur.style.opacity='1';});
          (function loop(){cx+=(tx-cx)*0.18;cy+=(ty-cy)*0.18;cur.style.transform='translate('+cx+'px,'+cy+'px) translate(-50%,-50%)';requestAnimationFrame(loop);})();
          const hov='a,button,[data-cursor],.brand';
          document.addEventListener('mouseover',e=>{
            if(e.target.closest('.g,.world,.film-player')){cur.classList.add('hover','view');}
            else if(e.target.closest(hov)){cur.classList.add('hover');cur.classList.remove('view');}
          });
          document.addEventListener('mouseout',e=>{
            if(e.target.closest(hov+',.g,.world,.film-player')&&!e.relatedTarget?.closest(hov+',.g,.world,.film-player')){cur.classList.remove('hover','view');}
          });
        }

        /* ---------- IMAGE FALLBACK ---------- */
        $$('img').forEach(function(img){
          img.addEventListener('error',function(){ img.classList.add('img-fb'); });
          if(img.complete && img.naturalWidth===0) img.classList.add('img-fb');
        });

        /* ---------- INIT ---------- */
        const start=(location.hash||'#home').replace('#','');
        show(pages.some(p=>p.dataset.page===start)?start:'home',false);
        onScroll();
      })();
    
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
      
<div className="grain"></div>
<div className="cursor" id="cursor"><span>View</span></div>

<header data-nav="dark" id="header">
<div className="hd-inner">
<div className="brand" data-cursor="" data-link="home">
<span className="mark">FRESHJIVE</span>
<span className="sub">PHOTO · FILM · SOUND</span>
</div>
<nav className="nav">
<a data-link="home">Home</a>
<a data-link="photography">Photography</a>
<a data-link="films">Films</a>
<a data-link="experiences">Experiences</a>
<a data-link="studio">Studio</a>
<a className="btn" data-link="inquire">
            Inquire
            <span className="ar">→</span>
</a>
<button aria-controls="mobile" aria-expanded="false" aria-label="Open menu" className="burger" id="burger" type="button">
<span></span>
<span></span>
</button>
</nav>
</div>
</header>

<div className="mobile" data-menu="panel" id="mobile">
<button aria-label="Close menu" className="m-close" id="mClose" type="button">
        Close ✕
      </button>
<nav>
<a data-link="home">
<span className="n">01</span>
          Home
        </a>
<a data-link="photography">
<span className="n">02</span>
          Photography
        </a>
<a data-link="films">
<span className="n">03</span>
          Films
        </a>
<a data-link="experiences">
<span className="n">04</span>
          Experiences
        </a>
<a data-link="studio">
<span className="n">05</span>
          Studio
        </a>
<a data-link="inquire">
<span className="n">06</span>
          Inquire
        </a>
</nav>
<div className="m-contact">
        (951) 415-0807
        <br/>
        freshjiveentertainment@gmail.com
        <br/>
        Riverside · Southern California
      </div>
</div>
<main>

<section className="page active" data-nav="dark" data-page="home">
<div className="hero">
<div className="hero-bg">
<img alt="Wedding couple" id="heroImg" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A2848-scaled.jpg"/>
</div>
<div className="wrap">
<p className="eyebrow" style={{color: 'var(--brass-2)', marginBottom: '1.8rem'}}>
              Weddings — Southern California
            </p>
<h1>
<span className="word">
<i style={{animationDelay: '.05s'}}>Married</i>
</span>
<span className="word">
<i style={{animationDelay: '.15s'}}>once.</i>
</span>
<br/>
<span className="word">
<i style={{animationDelay: '.28s'}}>Remembered</i>
</span>
<br/>
<span className="word">
<i style={{animationDelay: '.42s'}}><em>always.</em></i>
</span>
</h1>
<p className="h-sub">
              Photography, films, and atmosphere for couples who want the day
              kept exactly the way it felt — for the rest of their lives.
            </p>
<div className="h-cta">
<a className="btn" data-link="inquire">
                Begin your inquiry
                <span className="ar">→</span>
</a>
<a className="btn btn-ghost" data-link="photography">See the work</a>
</div>
</div>
<div className="scrollcue">Scroll</div>
</div>

<div className="marquee">
<div className="track">
<span>Wedding Films</span>
<span>Photography</span>
<span>Sound &amp; Light</span>
<span>Photo Booth</span>
<span>Wedding Films</span>
<span>Photography</span>
<span>Sound &amp; Light</span>
<span>Photo Booth</span>
</div>
</div>

<div className="section wrap intro">
<div>
<span className="col-num reveal">The Studio</span>
<h2 className="reveal" style={{'--i': '1'}}>
              One pair of hands.
              <br/>
              Your whole day.
            </h2>
<p className="reveal" style={{'--i': '2'}}>
              Freshjive is a Riverside studio for couples across Southern
              California who don't want their wedding handed off to a rotating
              crew. The same eye that meets you at the engagement shoot is the
              one behind the camera when you say your vows.
            </p>
<p className="reveal" style={{'--i': '3'}}>
              We work like documentarians with an editorial eye — present enough
              to catch the unrepeatable moments, invisible enough that the day
              still belongs to you.
            </p>
<a className="link-u reveal" data-link="studio" style={{'--i': '4'}}>
              Meet the studio
              <span>→</span>
</a>
</div>
<div className="ph reveal clip">
<img alt="Wedding portrait" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A2770-min-683x1024.jpg"/>
</div>
</div>

<div className="section wrap">
<div className="worlds-head">
<div>
<p className="eyebrow reveal">What we do</p>
<h2 className="serif reveal" style={{'--i': '1'}}>
                Four crafts. One studio. Each one obsessed over on its own.
              </h2>
</div>
<p className="reveal" style={{'--i': '2', maxWidth: '30ch', color: '#5a5040'}}>
              Most studios blur it all together. We give photography, film,
              sound, and the booth their own room to breathe — so you actually
              know what you're getting.
            </p>
</div>
<div className="worlds">
<a className="world reveal" data-cursor="" data-link="photography" style={{'--i': '0'}}>
<div className="wimg">
<img alt="Photography" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1624-min-683x1024.jpg"/>
</div>
<div className="wbody">
<span className="wn">01</span>
<h3>Photography</h3>
<p>The story, told in stills you'll hang on the wall.</p>
<span className="wmore">Explore →</span>
</div>
</a>
<a className="world reveal" data-cursor="" data-link="films" style={{'--i': '1'}}>
<div className="wimg">
<img alt="Films" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8178-min-1024x683.jpg"/>
</div>
<div className="wbody">
<span className="wn">02</span>
<h3>Films</h3>
<p>A film you'll actually rewatch — not just archive.</p>
<span className="wmore">Explore →</span>
</div>
</a>
<a className="world reveal" data-cursor="" data-link="experiences" style={{'--i': '2'}}>
<div className="wimg">
<img alt="Sound and light" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A9760-min-1024x683.jpg"/>
</div>
<div className="wbody">
<span className="wn">03</span>
<h3>Sound &amp; Light</h3>
<p>The room set alight, the floor never empty.</p>
<span className="wmore">Explore →</span>
</div>
</a>
<a className="world reveal" data-cursor="" data-link="experiences" style={{'--i': '3'}}>
<div className="wimg">
<img alt="Photo booth" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1964-2-min-683x1024.jpg"/>
</div>
<div className="wbody">
<span className="wn">04</span>
<h3>Photo Booth</h3>
<p>The moment your guests take home in their pocket.</p>
<span className="wmore">Explore →</span>
</div>
</a>
</div>
</div>

<div className="section wrap jt">
<div className="jt-imgs">
<img alt="Engagement" className="a reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/00015AE-2019-min-1024x683.jpg"/>
<img alt="Wedding day" className="b reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A2826-min-683x1024.jpg" style={{'--i': '1'}}/>
</div>
<div>
<p className="eyebrow reveal">The approach</p>
<h2 className="reveal" style={{'--i': '1'}}>
              We photograph the whole arc — not just the eight hours.
            </h2>
<p className="reveal" style={{'--i': '2'}}>
              A wedding isn't a single day. It's a season. The nervous
              engagement shoot, the morning everything changes, the night the
              room lets go, the quiet that comes after. We build your
              photography around that journey, not around a stopwatch.
            </p>
<div className="steps reveal" style={{'--i': '3'}}>
<div>
                Chapter 01
                <span>Engagement</span>
</div>
<div>
                Chapter 02
                <span>The Day</span>
</div>
<div>
                Chapter 03
                <span>Celebration</span>
</div>
<div>
                Chapter 04
                <span>After</span>
</div>
</div>
<a className="btn reveal" data-link="photography" style={{'--i': '4'}}>
              Walk the journey
              <span className="ar">→</span>
</a>
</div>
</div>

<div className="band section">
<div className="band-bg">
<img alt="Film still" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8302-min-1024x777.jpg"/>
</div>
<div className="wrap">
<p className="eyebrow reveal">Wedding Films</p>
<h2 className="reveal" style={{'--i': '1'}}>
              The day, edited into something you'll press play on for years.
            </h2>
<p className="reveal" style={{'--i': '2'}}>
              Cinematic films shot right alongside the photography —
              full-length, highlight trailer, aerial coverage, scored to feel
              like the night actually felt.
            </p>
<a className="btn reveal" data-link="films" style={{'--i': '3'}}>
              Watch the films
              <span className="ar">→</span>
</a>
</div>
</div>

<div className="section wrap">
<div className="quote">
<div className="stars reveal">✦ ✦ ✦ ✦ ✦</div>
<p className="q reveal" style={{'--i': '1'}}>
              "We've watched our film more times than I can count. Freshjive
              didn't just cover our wedding — they handed us the feeling back."
            </p>
<p className="qby reveal" style={{'--i': '2'}}>
              Marisol &amp; David · Married in Riverside
            </p>
</div>
</div>

<div className="cta section">
<div className="glow"></div>
<div className="wrap">
<h2 className="reveal">
              Let's talk
              <br/>
              about your day.
            </h2>
<p className="reveal" style={{'--i': '1'}}>
              Tell us your date and your story. We only take a limited number of
              weddings each season.
            </p>
<a className="btn reveal" data-link="inquire" style={{'--i': '2'}}>
              Start your inquiry
              <span className="ar">→</span>
</a>
</div>
</div>
</section>

<section className="page" data-nav="light" data-page="photography">
<div className="phero wrap">
<p className="eyebrow">01 — The Craft</p>
<h1 className="serif">Photography</h1>
<div className="pintro">
<p className="lede serif" style={{fontStyle: 'italic'}}>
              Stills that hold the temperature of the day — not just proof that
              it happened.
            </p>
<p>
              Every wedding is photographed by the same hands, edited in-house,
              and built as a story with a beginning, a middle, and an after.
              Below is the arc we shoot, the way it unfolds.
            </p>
</div>
</div>
<div className="wrap">

<div className="chapter">
<div className="ch-text reveal">
<div className="ch-num">01</div>
<h3>The Engagement</h3>
<p>
                Before the dress, before the nerves, before the guest list runs
                your life. The engagement session is where we learn how you two
                actually are together — and where you learn to forget the camera
                is there.
              </p>
<p>
                It's also the warm-up that makes the wedding day feel easy. By
                then, we're not strangers.
              </p>
</div>
<div className="ch-imgs">
<img alt="Engagement" className="big reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/V3A9361-min-1024x683.jpg"/>
<img alt="Engagement portrait" className="small reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A0454-copy-min-683x1024.jpg" style={{'--i': '1'}}/>
</div>
</div>

<div className="chapter">
<div className="ch-text reveal">
<div className="ch-num">02</div>
<h3>The Wedding Day</h3>
<p>
                The hours you can't get back. The first look, the shaking hands,
                the vow that breaks halfway through. We work quietly through all
                of it, catching the things you'll be too present to notice
                yourself.
              </p>
<p>
                Documentary at heart, editorial in the details — portraits that
                belong in a frame and candids that belong in your chest.
              </p>
</div>
<div className="ch-imgs">
<img alt="Wedding day" className="big reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1704-min-1024x683.jpg"/>
<img alt="Wedding portrait" className="small reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1624-min-683x1024.jpg" style={{'--i': '1'}}/>
</div>
</div>

<div className="chapter">
<div className="ch-text reveal">
<div className="ch-num">03</div>
<h3>The Celebration</h3>
<p>
                When the formalities are done and the room finally lets go. The
                toasts, the floor filling up, the grandparents dancing, the
                sparklers. This is where the energy lives — and where our photo
                and sound teams are working the same room in sync.
              </p>
</div>
<div className="ch-imgs">
<img alt="Celebration" className="big reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A2728-min-1024x683.jpg"/>
<img alt="Reception" className="small reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A2938-min-683x1024.jpg" style={{'--i': '1'}}/>
</div>
</div>

<div className="chapter">
<div className="ch-text reveal">
<div className="ch-num">04</div>
<h3>After</h3>
<p>
                The quiet that comes next. Optional morning-after and family
                reflection sessions — the calm, unhurried frames you'll be
                grateful for once the whirlwind settles. The story doesn't have
                to end when the music does.
              </p>
</div>
<div className="ch-imgs">
<img alt="After" className="big reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A9845-min-1024x683.jpg"/>
<img alt="Family" className="small reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A3453-min-683x1024.jpg" style={{'--i': '1'}}/>
</div>
</div>
</div>

<div className="marquee" style={{margin: 'clamp(2rem,5vh,4rem) 0'}}>
<div className="track">
<span>The Archive</span>
<span>Real Weddings</span>
<span>Southern California</span>
<span>The Archive</span>
<span>Real Weddings</span>
<span>Southern California</span>
</div>
</div>

<div className="wrap section" style={{paddingTop: 'clamp(2rem,4vh,3rem)'}}>
<p className="eyebrow reveal" style={{marginBottom: '2.5rem'}}>
            The Archive — tap any frame
          </p>
<div className="gallery" id="gallery">
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V3A9515-2-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A3248-1-min-1024x683.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8135-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1866-min-1024x722.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A3085-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8332-min-1024x683.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A2677-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8235-2-min-1-1024x683.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A0468-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8321-min-1024x603.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A9499-2-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8341-min-1024x683.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/00066AE-2019-copy-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A3730-min-1024x683.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8470-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/00096AE-2019-min-1024x683.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A3120-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8698-min-683x1024.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1906-min-1024x724.jpg"/>
</div>
<div className="g" data-cursor="">
<img alt="" loading="lazy" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8478-min-1024x683.jpg"/>
</div>
</div>
</div>

<div className="wrap section" style={{paddingTop: '0'}}>
<div className="worlds-head">
<div>
<p className="eyebrow reveal">Photography Collections</p>
<h2 className="serif reveal" style={{'--i': '1'}}>
                Chosen by the story you want kept.
              </h2>
</div>
</div>
<div className="cols">
<div className="col-card feat reveal" data-cursor="">
<span className="tag">The Full Story · Platinum</span>
<h3>From the first look to the heirloom on your shelf.</h3>
<p className="desc">
                The complete arc — pre-wedding session through a finished album
                you'll pass down.
              </p>
<ul>
<li>Complimentary engagement session</li>
<li>300 hand-edited images</li>
<li>25-page hardcover heirloom album</li>
<li>Private online gallery</li>
<li>Full printing rights</li>
</ul>
<p className="invest">Investment by inquiry</p>
<a className="btn" data-link="inquire">
                Inquire on this collection
                <span className="ar">→</span>
</a>
</div>
<div className="col-card reveal" data-cursor="" style={{'--i': '1'}}>
<span className="tag">The Day · Gold</span>
<h3>Everything that mattered, beautifully kept.</h3>
<p className="desc">
                Full wedding-day coverage and a gallery ready to share the
                moment you get home.
              </p>
<ul>
<li>Full wedding-day coverage</li>
<li>200–300 hand-edited images</li>
<li>Private online gallery</li>
<li>Full printing rights</li>
<li>Add an album or film anytime</li>
</ul>
<p className="invest">Investment by inquiry</p>
<a className="btn btn-ghost" data-link="inquire" style={{color: 'var(--ink)'}}>
                Inquire on this collection
              </a>
</div>
</div>
</div>
</section>

<section className="page" data-nav="dark" data-page="films">
<div className="phero dark wrap">
<p className="eyebrow">02 — Motion</p>
<h1 className="serif">Films</h1>
<div className="pintro">
<p className="lede serif" style={{fontStyle: 'italic', color: 'var(--paper)'}}>
              A wedding film you'll actually press play on — long after the
              gallery's been seen.
            </p>
<p>
              Shot in step with the photography, edited in-house, and scored to
              feel the way the night felt. Full-length film, a one-to-two minute
              highlight trailer, and aerial coverage on every wedding film
              collection.
            </p>
</div>
</div>
<div className="wrap section" style={{background: 'var(--ink)', color: 'var(--paper)'}}>
<div className="films-grid">
<div className="film">
<div className="film-meta reveal">
<span className="fn">Film No. 01</span>
<h3>Daniel &amp; Ingrid</h3>
<p>
                  A full-length wedding film — vows, first dance, and the golden
                  hour in between.
                </p>
</div>
<div className="film-player reveal clip" data-cursor="">
<video controls="" playsinline="" poster="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8302-min-1024x777.jpg" preload="none">
<source src="https://freshjiveent.com/wp-content/uploads/2021/03/Daniel-Ingrid-1-Min.mp4" type="video/mp4"/>
</video>
<div className="play"><div className="ring"></div></div>
</div>
</div>
<div className="film">
<div className="film-meta reveal">
<span className="fn">Film No. 02</span>
<h3>Amber &amp; Joseph</h3>
<p>
                  The highlight trailer — the whole day distilled to its
                  loudest, quietest moments.
                </p>
</div>
<div className="film-player reveal clip" data-cursor="">
<video controls="" playsinline="" poster="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8178-min-1024x683.jpg" preload="none">
<source src="https://freshjiveent.com/wp-content/uploads/2021/03/Amber-Joseph-.MP4.mp4" type="video/mp4"/>
</video>
<div className="play"><div className="ring"></div></div>
</div>
</div>
<div className="film">
<div className="film-meta reveal">
<span className="fn">Film No. 03</span>
<h3>Ariana &amp; Chris</h3>
<p>
                  Cinematic coverage with aerial drone work and a score built to
                  match the energy.
                </p>
</div>
<div className="film-player reveal clip" data-cursor="">
<video controls="" playsinline="" poster="https://freshjiveent.com/wp-content/uploads/2021/03/V6A2728-min-1024x683.jpg" preload="none">
<source src="https://freshjiveent.com/wp-content/uploads/2021/03/Ariana-Chris-1-Min-1.mp4" type="video/mp4"/>
</video>
<div className="play"><div className="ring"></div></div>
</div>
</div>
</div>
</div>
<div className="cta section">
<div className="glow"></div>
<div className="wrap">
<p className="eyebrow center reveal" style={{justifyContent: 'center'}}>
              Film Collections
            </p>
<h2 className="reveal" style={{'--i': '1'}}>
              10-minute film.
              <br/>
              2-minute trailer.
              <br/>
              Aerial coverage.
            </h2>
<p className="reveal" style={{'--i': '2'}}>
              Available on its own, or paired with photography so one team
              captures both — in sync, all day.
            </p>
<a className="btn reveal" data-link="inquire" style={{'--i': '3'}}>
              Inquire about films
              <span className="ar">→</span>
</a>
</div>
</div>
</section>

<section className="page" data-nav="dark" data-page="experiences">
<div className="phero dark wrap">
<p className="eyebrow">03 — Atmosphere</p>
<h1 className="serif">Experiences</h1>
<div className="pintro">
<p className="lede serif" style={{fontStyle: 'italic', color: 'var(--paper)'}}>
              The parts of the night your guests feel before they can name them.
            </p>
<p>
              Sound, light, and the booth in the corner — the production layer
              that turns a venue into your night. Run by the same studio that's
              already documenting it.
            </p>
</div>
</div>

<div style={{background: 'var(--ink)', color: 'var(--paper)'}}>
<div className="wrap exp">
<div className="exp-text reveal">
<p className="eyebrow">Sound &amp; Light</p>
<h2>The room, set alight.</h2>
<p style={{color: 'rgba(240,232,217,.72)'}}>
                A professional DJ and emcee who reads the floor, club-grade
                sound, and intelligent lighting that turns four walls into an
                atmosphere. From a clean ceremony PA to a reception nobody wants
                to leave.
              </p>
<div className="feats">
<div>Pro DJ &amp; emcee</div>
<div>15" speakers + 18" sub</div>
<div>Up to 15 LED uplights</div>
<div>Custom monogram</div>
<div>Cold sparklers</div>
<div>Dancing on clouds</div>
<div>Ceremony PA system</div>
<div>Wireless mics</div>
</div>
<a className="btn" data-link="inquire">
                Inquire
                <span className="ar">→</span>
</a>
</div>
<div className="exp-img reveal clip">
<img alt="Lighting" className="a" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A9760-min-1024x683.jpg"/>
<img alt="Dance floor" className="b" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A8341-min-1024x683.jpg"/>
</div>
</div>
</div>

<div className="wrap exp flip section">
<div className="exp-text reveal">
<p className="eyebrow">Photo Booth</p>
<h2>The keepsake in everyone's pocket.</h2>
<p style={{color: '#5a5040'}}>
              An open-air booth with a custom backdrop, unlimited takes, and a
              pile of props that loosen everyone up. Custom-designed prints in
              hand before the night's over — and a staffed attendant so it just
              runs.
            </p>
<div className="feats" style={{color: '#5a5040'}}>
<div style={{borderColor: 'var(--line-l)'}}>Open-air booth</div>
<div style={{borderColor: 'var(--line-l)'}}>Custom backdrop</div>
<div style={{borderColor: 'var(--line-l)'}}>Unlimited takes</div>
<div style={{borderColor: 'var(--line-l)'}}>2x6 / 4x6 prints</div>
<div style={{borderColor: 'var(--line-l)'}}>Themed props</div>
<div style={{borderColor: 'var(--line-l)'}}>On-site attendant</div>
</div>
<a className="btn" data-link="inquire">
              Inquire
              <span className="ar">→</span>
</a>
</div>
<div className="exp-img reveal clip">
<img alt="Photo booth" className="a" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1964-2-min-683x1024.jpg"/>
<img alt="Guests" className="b" src="https://freshjiveent.com/wp-content/uploads/2021/03/00066AE-2019-copy-min-683x1024.jpg"/>
</div>
</div>

<div className="band section">
<div className="band-bg">
<img alt="" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A3730-min-1024x683.jpg"/>
</div>
<div className="wrap">
<p className="eyebrow reveal">One team, one point of contact</p>
<h2 className="reveal" style={{'--i': '1'}}>
              Want it all handled under one roof?
            </h2>
<p className="reveal" style={{'--i': '2'}}>
              Our all-inclusive collections bring photo, film, sound, and booth
              together — so your day runs through a single team that's already
              in sync, not five vendors who've never met. Specialists in each
              craft, coordinated as one.
            </p>
<a className="btn reveal" data-link="inquire" style={{'--i': '3'}}>
              Ask about all-inclusive
              <span className="ar">→</span>
</a>
</div>
</div>
</section>

<section className="page" data-nav="dark" data-page="studio">
<div className="studio-hero">
<img alt="Studio" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A1906-min-1024x724.jpg"/>
<div className="wrap" style={{paddingBottom: 'clamp(2.5rem,6vh,5rem)'}}>
<p className="eyebrow" style={{color: 'var(--brass-2)', marginBottom: '1.4rem'}}>
              The Studio
            </p>
<h1 className="serif">This is me now.</h1>
</div>
</div>
<div className="wrap section studio-body">
<div className="sb-port reveal clip">
<img alt="Behind the lens" src="https://freshjiveent.com/wp-content/uploads/2021/03/5U8A0468-min-683x1024.jpg"/>
</div>
<div>
<p className="eyebrow reveal">Behind the lens</p>
<h2 className="reveal" style={{'--i': '1'}}>
              I'd rather be the person you remember than the logo on the
              invoice.
            </h2>
<p className="reveal" style={{'--i': '2'}}>
              Freshjive started as a full-service entertainment company, and we
              still do all of it well. But the longer I shoot weddings, the more
              I've leaned into the part that matters most to me — being the one
              actually there, behind the camera, on the most important day of
              your life.
            </p>
<p className="reveal" style={{'--i': '3'}}>
              Couples don't want their day farmed out to whoever's free that
              weekend. They want to know who's showing up. So I keep things
              personal on purpose: I meet you, I shoot your engagement, I learn
              how you move — and by the time the day comes, the camera's just a
              friend in the room.
            </p>
<p className="reveal" style={{'--i': '4'}}>
              I work out of Riverside and shoot across all of Southern
              California — Los Angeles, Orange County, Temecula, San Diego, and
              everywhere the drive is worth it. I keep my calendar small for a
              reason. Fewer weddings, fully present at each one.
            </p>
<p className="sig serif reveal" style={{'--i': '5'}}>Freshjive</p>
<p className="signote reveal" style={{'--i': '5'}}>
              Founder &amp; Photographer · Freshjive
            </p>
<div className="reveal" style={{'--i': '6', marginTop: '2.4rem'}}>
<a className="btn" data-link="inquire">
                Let's work together
                <span className="ar">→</span>
</a>
</div>
</div>
</div>
</section>

<section className="page" data-nav="light" data-page="inquire">
<div className="phero wrap" style={{paddingBottom: 'clamp(2rem,4vh,3rem)'}}>
<p className="eyebrow">Inquire</p>
<h1 className="serif">
            Let's talk about
            <br/>
            your day.
          </h1>
</div>
<div className="wrap section" style={{paddingTop: 'clamp(1.5rem,3vh,2.5rem)'}}>
<div className="inq">

<div>
<div id="formWrap">
<p style={{color: '#5a5040', maxWidth: '46ch', marginBottom: '2.6rem'}}>
                  Tell us a little about your celebration. We reply to every
                  inquiry personally — usually within two business days.
                </p>
<div className="two">
<div className="field">
<label>Name *</label>
<input placeholder="Your full name" type="text"/>
</div>
<div className="field">
<label>Phone *</label>
<input placeholder="(000) 000-0000" type="tel"/>
</div>
</div>
<div className="two">
<div className="field">
<label>Email *</label>
<input placeholder="you@email.com" type="email"/>
</div>
<div className="field">
<label>Event Date *</label>
<input type="date"/>
</div>
</div>
<div className="two">
<div className="field">
<label>Event Type *</label>
<select>
<option>Select your event</option>
<option>Wedding</option>
<option>Elopement</option>
<option>Quinceañera</option>
<option>Sweet 16</option>
<option>Birthday</option>
<option>Corporate Event</option>
<option>Engagement</option>
<option>Special Event</option>
</select>
</div>
<div className="field">
<label>Service Requested *</label>
<select>
<option>Select a collection</option>
<option>All-Inclusive</option>
<option>Photography</option>
<option>Videography / Film</option>
<option>Photography &amp; Film</option>
<option>DJ / Sound &amp; Light</option>
<option>Photo Booth</option>
</select>
</div>
</div>
<div className="field">
<label>Tell us about your day</label>
<textarea placeholder="Venue, vision, how you found us, anything you want us to know..."></textarea>
</div>
<div className="consent">
<input id="consent" type="checkbox"/>
<label htmlFor="consent" style={{margin: '0', letterSpacing: '0', textTransform: 'none', fontSize: '.8rem', color: 'var(--muted)'}}>
                    I agree to receive text messages from Freshjive
                    Entertainment about my inquiry.
                  </label>
</div>
<button className="btn" id="submitBtn" type="button">
                  Send your inquiry
                  <span className="ar">→</span>
</button>
</div>
<div className="form-done" id="formDone">
<p className="serif">Thank you — your inquiry's in.</p>
<p style={{color: '#5a5040', maxWidth: '40ch'}}>
                  We'll be in touch personally within two business days. In the
                  meantime, your day already has our full attention.
                </p>
</div>
</div>

<div className="inq-aside">
<img alt="" className="ia-img reveal clip" src="https://freshjiveent.com/wp-content/uploads/2021/03/V6A2826-min-683x1024.jpg"/>
<p className="eyebrow reveal" style={{marginBottom: '1.5rem'}}>
                What happens next
              </p>
<ul className="steps-list reveal" style={{'--i': '1'}}>
<li>
<div>
<b>We reply, personally</b>
<span>
                      A real response from the studio within two business days —
                      never an autoresponder.
                    </span>
</div>
</li>
<li>
<div>
<b>A relaxed call</b>
<span>
                      We hear your story, your date, and what matters most to
                      you two.
                    </span>
</div>
</li>
<li>
<div>
<b>A tailored proposal</b>
<span>
                      The right collection for your day — photo, film, sound,
                      booth, or all of it.
                    </span>
</div>
</li>
</ul>
<div className="contact-rows reveal" style={{'--i': '2'}}>
<a href="tel:+19514150807">
<span className="lbl">Call</span>
                  (951) 415-0807
                </a>
<a href="mailto:freshjiveentertainment@gmail.com">
<span className="lbl">Email</span>
                  freshjiveentertainment@gmail.com
                </a>
<a href="https://www.instagram.com/freshjiveent/" rel="noopener" target="_blank">
<span className="lbl">Social</span>
                  @freshjiveent
                </a>
<div>
<span className="lbl">Studio</span>
                  Riverside, CA · Southern California
                </div>
<div>
<span className="lbl">Hours</span>
                  Mon–Fri, 11am – 7pm
                </div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer>
<div className="wrap">
<div className="f-top">
<div className="f-brand">
<span className="mark">FRESHJIVE</span>
<p>
              Wedding photography, films, and atmosphere for couples across
              Southern California. One studio, fully present, for the day you'll
              relive forever.
            </p>
</div>
<div className="f-col">
<h4>Explore</h4>
<a data-link="photography">Photography</a>
<a data-link="films">Films</a>
<a data-link="experiences">Experiences</a>
<a data-link="studio">Studio</a>
<a data-link="inquire">Inquire</a>
</div>
<div className="f-col">
<h4>Studio</h4>
<a href="tel:+19514150807">(951) 415-0807</a>
<a href="mailto:freshjiveentertainment@gmail.com">
              freshjiveentertainment@gmail.com
            </a>
<a href="https://www.instagram.com/freshjiveent/" rel="noopener" target="_blank">
              Instagram — @freshjiveent
            </a>
<p>Riverside, CA · Southern California</p>
<p>Mon–Fri, 11am – 7pm</p>
</div>
</div>
<div className="f-bottom">
<span>© 2026 Fresh Jive Entertainment</span>
<span>Concept redesign — by appointment</span>
</div>
</div>
</footer>

<div className="lightbox" id="lightbox">
<span className="lb-close">Close ✕</span>
<img alt="" id="lbImg" src=""/>
</div>


    </>
  );
}
