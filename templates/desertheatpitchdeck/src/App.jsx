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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// --- INITIALIZATION ---
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Update dot immediately
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;

  // HUD Coordinate updates
  document.getElementById('coord-x').innerText = `X: ${mouseX.toFixed(2)}`;
  document.getElementById('coord-y').innerText = `Y: ${mouseY.toFixed(2)}`;
});

// Smooth ring follow
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursorRing.style.left = `${cursorX}px`;
  cursorRing.style.top = `${cursorY}px`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Magnetic Targets
document.querySelectorAll('.magnetic-target, .magnetic-area').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.classList.remove('active');
  });
  
  // Magnetic Pull Effect
  if(el.classList.contains('magnetic-target')) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    });
  }
});

// --- LIVE 24H COUNTDOWN CLOCK ---
function startCountdown() {
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  const msEl = document.getElementById('millis');

  // Set target to 24 hours from load
  const now = new Date();
  const target = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  function update() {
    const current = new Date();
    const diff = target - current;

    if (diff <= 0) {
      // Reset logic or stop
      return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    const ms = Math.floor(diff % 1000);

    hoursEl.innerText = h.toString().padStart(2, '0');
    minsEl.innerText = m.toString().padStart(2, '0');
    secsEl.innerText = s.toString().padStart(2, '0');
    msEl.innerText = ms.toString().padStart(3, '0');

    requestAnimationFrame(update);
  }
  update();
}

// --- TEXT SCRAMBLE EFFECT ---
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
document.querySelectorAll('.scramble-hover').forEach(el => {
  const originalText = el.dataset.value || el.innerText;
  el.addEventListener('mouseenter', () => {
    cursorRing.classList.add('scramble-hover');
    let iterations = 0;
    const interval = setInterval(() => {
      el.innerText = originalText.split('')
        .map((char, index) => {
          if(index < iterations) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      if(iterations >= originalText.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.classList.remove('scramble-hover');
    el.innerText = originalText;
  });
});

// --- LOADER ---
window.addEventListener('load', () => {
  startCountdown();
  
  const loader = document.getElementById('loader');
  const timeline = gsap.timeline();
  
  timeline.to('.loader-text', {
    duration: 0.5,
    text: "ASSETS LOADED...",
    delay: 1
  })
  .to('#loader', {
    yPercent: -100,
    duration: 1,
    ease: 'power4.inOut',
    delay: 0.2
  })
  .from('h1', {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power4.out'
  }, '-=0.5');
});

// --- 3D TILT EFFECT ---
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
    const rotateY = ((x - centerX) / centerX) * 5;

    const inner = card.querySelector('.tilt-inner');
    const glare = card.querySelector('.glare');
    
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Move glare
    glare.style.opacity = '1';
    glare.style.transform = `translate(${x - rect.width/2}px, ${y - rect.height/2}px)`;
  });

  card.addEventListener('mouseleave', () => {
    const inner = card.querySelector('.tilt-inner');
    const glare = card.querySelector('.glare');
    inner.style.transform = `rotateX(0) rotateY(0)`;
    glare.style.opacity = '0';
  });
});

// --- SCROLL ANIMATIONS ---
// Parallax
gsap.utils.toArray('.parallax-img').forEach(img => {
  gsap.to(img, {
    y: '20%',
    ease: 'none',
    scrollTrigger: {
      trigger: img.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});

// Bar Charts
ScrollTrigger.create({
  trigger: "#market",
  start: "top 70%",
  onEnter: () => {
    gsap.to('#bar1', { width: '85%', duration: 1.5, ease: 'power3.out' });
    gsap.to('#bar2', { width: '30%', duration: 1.5, ease: 'power3.out', delay: 0.2 });
    gsap.to('#bar3', { width: '25%', duration: 1.5, ease: 'power3.out', delay: 0.4 });
  }
});

// Update HUD Scroll Percentage
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = Math.round((scrollTop / docHeight) * 100);
  document.getElementById('scroll-pct').innerText = `DEPTH: ${scrollPercent}%`;
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
      


<div className="" id="loader">
<div className="font-bebas text-4xl tracking-[0.3em] text-white loader-title">DESERT HEAT</div>
<div className="loader-bar-bg"><div className="loader-bar-fill"></div></div>
<div className="loader-text scramble-load">INITIALIZING...</div>
</div><div className="hud-layer">
<div className="hud-corner hud-tl"></div>
<div className="hud-corner hud-tr"></div>
<div className="hud-corner hud-bl"></div>
<div className="hud-corner hud-br"></div>
<div className="rec-indicator">
<div className="rec-dot"></div>
<span>REC • LIVE FEED</span>
</div>
<div className="hud-data hud-data-left">
<span id="coord-x">X: 545.00</span>
<span id="coord-y">Y: 249.00</span>
<span>ISO 800</span>
</div>
<div className="hud-data hud-data-right">
<span>SUB: PROJECT ALPHA</span>
<span id="scroll-pct">DEPTH: 16%</span>
</div>
</div>

<div className="noise-overlay"></div>
<div className="scanline-bar"></div>

<div className="cursor-dot" style={{left: '545px', top: '249px'}}></div>
<div className="cursor-ring" style={{left: '0px', top: '0px'}}></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
<div className="font-bebas text-lg tracking-[0.2em] text-white magnetic-target">DESERT HEAT</div>
<div className="flex gap-8 items-center hidden md:flex">
<a className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors magnetic-target" href="#story">Story</a>
<a className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors magnetic-target" href="#storyboard">Storyboard</a>
<a className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors magnetic-target" href="#monsters">Creatures</a>
<a className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors magnetic-target" href="#market">Market</a>
</div>
</nav>

<section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-bg">
<div className="absolute inset-0 opacity-20">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold blur-[150px] rounded-full animate-pulse"></div>
</div>
<div className="z-10 text-center relative mix-blend-screen">
<p className="font-mono text-xs text-gold/80 mb-6 reveal-type">DOUBLE DOWN PICTURES PRESENTS</p>
<h1 className="font-bebas text-[12vw] leading-[0.85] text-white tracking-tight text-shadow-glow magnetic-target scramble-hover" data-value="DESERT">DESERT</h1>
<h1 className="text-[12vw] leading-[0.85] text-gold text-shadow-glow magnetic-target scramble-hover tracking-tight font-bebas" data-value="HEAT">HEAT</h1>
<div className="mt-12 flex flex-col items-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
<div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-gold to-transparent"></div>
<p className="font-mono text-[10px] tracking-widest text-text-dim uppercase">Scroll to Initialize</p>
</div>
</div>
</section>

<section className="md:px-20 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative" id="story">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="h-[1px] w-8 bg-gold"></div>
<span className="font-bebas text-sm tracking-[0.3em] text-text-secondary">THE LOGLINE</span>
</div>
<p className="text-xl md:text-3xl font-light leading-relaxed text-text-primary mb-12 reveal-text">
        A bitten stuntman with <span className="text-blood font-medium blink-text">limited time</span> crosses the post-apocalyptic California desert with his dog — stealing fuel, burying friends, and fighting the infection — to reach the family he left behind.
      </p>
<div className="flex gap-4 items-center mb-6">
<iconify-icon className="text-blood text-2xl" icon="solar:bomb-minimalistic-linear"></iconify-icon>
<span className="font-mono text-xs text-blood tracking-widest">INFECTION PROTOCOL ACTIVE</span>
</div>
</div>

<div className="relative group magnetic-area p-8 border border-white/5 bg-black/40 backdrop-blur-sm rounded-lg tilt-card">
<div className="absolute inset-0 bg-blood/5 animate-pulse rounded-lg pointer-events-none"></div>
<div className="tilt-inner relative z-10 flex flex-col items-center justify-center text-center">
<div className="font-mono text-xs text-gold mb-6 tracking-widest flex items-center gap-2">
<span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
          TIME REMAINING
        </div>
<div className="countdown-grid" id="countdown">
<div className="countdown-item">
<span className="countdown-val" id="hours">24</span>
<span className="countdown-label">HRS</span>
</div>
<div className="countdown-item">
<span className="countdown-val" id="minutes">00</span>
<span className="countdown-label">MIN</span>
</div>
<div className="countdown-item">
<span className="countdown-val" id="seconds">00</span>
<span className="countdown-label">SEC</span>
</div>
<div className="countdown-item hidden md:flex">
<span className="countdown-val w-[80px]" id="millis">000</span>
<span className="countdown-label">MS</span>
</div>
</div>
<p className="mt-8 font-mono text-[10px] text-text-dim text-center max-w-xs mx-auto">
          SUBJECT: WILL MELDMAN. STATUS: INFECTED.
          <br/>PROGNOSIS: CRITICAL.
        </p>
</div>
<div className="glare"></div>
</div>
</div>
</section>

<section className="slide-bleed group">
<img alt="The Road" className="parallax-img group-hover:scale-105 transition-transform duration-[2s] bg-center object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c65e3fb3-b3f2-4a33-8462-30364a519dee_3840w.jpg?w=800&amp;q=80"/>
<div className="vignette-heavy"></div>
<div className="absolute bottom-12 left-6 md:left-20 z-20">
<h2 className="font-bebas text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 tracking-tight">THE ROAD</h2>
<p className="font-mono text-xs text-gold mt-2 tracking-[0.3em]">SECTOR 4 // JOSHUA TREE</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 bg-bg relative">
<div className="max-w-5xl mr-auto ml-auto">
<div className="text-center mb-20">
<h3 className="font-bebas text-4xl text-white tracking-widest mb-4">TONE &amp; GENRE</h3>
<div className="h-[1px] w-20 bg-gold mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 border border-white/10 bg-white/5 rounded-sm hover:border-gold transition-colors duration-500 group tilt-card">
<div className="tilt-inner">
<div className="font-bebas text-2xl text-gold mb-2">THE ROAD</div>
<p className="font-mono text-xs text-text-secondary leading-relaxed">
            Emotional devastation. Father/Son dynamic adapted to Man/Dog.
          </p>
<iconify-icon className="text-white/20 text-4xl absolute top-4 right-4 group-hover:text-gold/20 transition-colors" icon="solar:heart-broken-linear"></iconify-icon>
</div>
<div className="glare"></div>
</div>

<div className="hover:border-gold transition-colors duration-500 group tilt-card bg-white/5 border-white/10 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<div className="tilt-inner">
<div className="font-bebas text-2xl text-gold mb-2">MAD MAX</div>
<p className="font-mono text-xs text-text-secondary leading-relaxed">
            Practical stunts. High-octane kinetic energy. Visual storytelling.
          </p>
<iconify-icon className="text-white/20 text-4xl absolute top-4 right-4 group-hover:text-gold/20 transition-colors" icon="solar:wheel-angle-linear"></iconify-icon>
</div>
<div className="glare"></div>
</div>

<div className="p-8 border border-white/10 bg-white/5 rounded-sm hover:border-gold transition-colors duration-500 group tilt-card">
<div className="tilt-inner">
<div className="font-bebas text-2xl text-gold mb-2">28 DAYS LATER</div>
<p className="font-mono text-xs text-text-secondary leading-relaxed">
            Grounded horror. The infected are fast, brutal, and human.
          </p>
<iconify-icon className="text-white/20 text-4xl absolute top-4 right-4 group-hover:text-gold/20 transition-colors" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div className="glare"></div>
</div>
</div>
<div className="text-text-secondary leading-loose font-light text-center max-w-2xl mt-20 mr-auto ml-auto" style={{}}>"It's not about saving the world. It's about saving your family if you can survive yourself."</div>
</div>
</section>

<section className="py-32 bg-bg-surface border-t border-white/5 relative overflow-hidden" id="monsters">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-end mb-16">
<div>
<div className="flex items-center gap-4 mb-2">
<div className="h-[1px] w-8 bg-blood-bright"></div>
<span className="font-bebas text-sm tracking-[0.3em] text-blood-bright">THREAT HIERARCHY</span>
</div>
<h3 className="font-bebas text-5xl text-white">THE INFECTED</h3>
</div>
<div className="font-mono text-[10px] text-text-dim text-right hidden md:block">
        ANALYSIS MODE: ACTIVE<br/>
        DATASTREAM: ENCRYPTED
      </div>
</div>
<div className="space-y-4">

<div className="group border border-white/10 bg-black hover:bg-white/5 transition-all duration-300">
<div className="p-6 flex items-center justify-between cursor-pointer magnetic-area">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-gold/50">01</span>
<h4 className="font-bebas text-2xl text-white group-hover:text-gold transition-colors">SLEEPERS</h4>
</div>
<iconify-icon className="text-2xl text-text-dim group-hover:text-white transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="px-6 pb-6 pl-14 hidden group-hover:block animate-fade-in">
<p className="text-sm text-text-secondary max-w-2xl font-light mb-4">
            Dormant bodies that fuse with the environment. They sense vibration. One wrong step wakes the hive.
          </p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gold w-1/3"></div>
</div>
<div className="flex justify-between mt-1 font-mono text-[9px] text-text-dim">
<span>SPEED: LOW</span>
<span>DETECTION: HIGH</span>
</div>
</div>
</div>

<div className="group border border-white/10 bg-black hover:bg-white/5 transition-all duration-300">
<div className="p-6 flex items-center justify-between cursor-pointer magnetic-area">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-gold/50">02</span>
<h4 className="font-bebas text-2xl text-white group-hover:text-gold transition-colors">HUNTERS</h4>
</div>
<iconify-icon className="text-2xl text-text-dim group-hover:text-white transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="px-6 pb-6 pl-14 hidden group-hover:block animate-fade-in">
<p className="text-sm text-text-secondary max-w-2xl font-light mb-4">
            Active sprinters. Once they lock eyes, they don't stop. They hunt in packs and flank targets.
          </p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-2/3"></div>
</div>
<div className="flex justify-between mt-1 font-mono text-[9px] text-text-dim">
<span>SPEED: HIGH</span>
<span>LETHALITY: HIGH</span>
</div>
</div>
</div>

<div className="group border border-blood/30 bg-blood/5 hover:bg-blood/10 transition-all duration-300">
<div className="p-6 flex items-center justify-between cursor-pointer magnetic-area">
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-blood">03</span>
<h4 className="font-bebas text-2xl text-blood-bright group-hover:text-red-500 transition-colors">THE ALPHA</h4>
</div>
<iconify-icon className="text-2xl text-blood transition-colors" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="px-6 pb-6 pl-14 hidden group-hover:block animate-fade-in">
<p className="text-sm text-text-secondary max-w-2xl font-light mb-4">
            A seven-foot mutation. Intelligent. It doesn't just kill; it commands.
          </p>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blood-bright w-full animate-pulse"></div>
</div>
<div className="flex justify-between mt-1 font-mono text-[9px] text-text-dim">
<span>THREAT LEVEL: EXTREME</span>
<span>CHANCE OF SURVIVAL: 0%</span>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-32 border-t border-white/5 relative bg-[#050505] overflow-hidden group" id="footage">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<div className="flex items-center gap-4 mb-2">
<div className="h-[1px] w-8 bg-[#c4a265]"></div>
<span className="font-bebas text-sm tracking-[0.3em] text-[#c4a265]">CLASSIFIED FOOTAGE</span>
</div>
<h3 className="font-bebas text-5xl md:text-6xl text-white tracking-tight">CONCEPT TEASER</h3>
</div>

<div className="hidden md:flex flex-col items-end gap-1 font-mono text-[10px] text-[#4a4a4a]">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#c62828] animate-pulse"></div>
<span className="text-[#c62828] tracking-widest">LIVE CONNECTION ESTABLISHED</span>
</div>
<div>ID: DH_CAM_04_RAW.MOV // <span className="text-white">ENCRYPTED</span></div>
</div>
</div>

<div className="relative w-full border border-white/10 bg-[#0a0a0a] rounded-sm p-1 tilt-card group/player">
<div className="tilt-inner relative">

<div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[#c4a265]/50 z-20"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[#c4a265]/50 z-20"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#c4a265]/50 z-20"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[#c4a265]/50 z-20"></div>

<div className="relative aspect-video bg-black overflow-hidden">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full object-cover opacity-80 group-hover/player:opacity-100 transition-all duration-700 grayscale-[0.2] hover:grayscale-0" frameborder="0" src="https://www.youtube.com/embed/ScMzIvxBSi4?controls=0&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;disablekb=1" title="Desert Heat Teaser"></iframe>

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10 opacity-20 mix-blend-overlay"></div>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/80 z-10"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
<div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-white text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>

<div className="absolute top-6 right-8 z-20 font-mono text-[10px] text-white/70 tracking-widest flex items-center gap-2">
            REC <span className="text-[#c62828]">[00:04:12]</span>
</div>
</div>

<div className="h-12 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between px-6">
<div className="flex items-center gap-6 text-white/50 w-full max-w-md">
<button className="hover:text-[#c4a265] transition-colors"><iconify-icon className="text-lg" icon="solar:play-linear"></iconify-icon></button>

<div className="h-1 w-full bg-white/10 relative group/scrubber cursor-pointer">
<div className="absolute inset-y-0 left-0 bg-[#c4a265] w-[35%]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-3 h-3 bg-white rounded-full opacity-0 group-hover/scrubber:opacity-100 transition-opacity"></div>
</div>
<div className="text-[9px] font-mono tracking-widest whitespace-nowrap">00:34 / 01:45</div>
</div>
<div className="flex items-center gap-4 border-l border-white/5 pl-6">
<div className="flex gap-0.5 h-3 items-end opacity-50">
<div className="w-0.5 h-[40%] bg-[#c4a265]"></div>
<div className="w-0.5 h-[70%] bg-[#c4a265]"></div>
<div className="w-0.5 h-[100%] bg-[#c4a265]"></div>
<div className="w-0.5 h-[60%] bg-[#c4a265]"></div>
<div className="w-0.5 h-[30%] bg-[#c4a265]"></div>
</div>
<button className="text-white/50 hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:full-screen-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glare"></div>
</div>

<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
<div className="group/spec">
<div className="text-[9px] text-[#4a4a4a] font-mono mb-2 group-hover/spec:text-[#c4a265] transition-colors">CAMERA SYSTEM</div>
<div className="text-xs text-white tracking-widest font-medium">ARRI ALEXA 35</div>
</div>
<div className="group/spec">
<div className="text-[9px] text-[#4a4a4a] font-mono mb-2 group-hover/spec:text-[#c4a265] transition-colors">LENS PACKAGE</div>
<div className="text-xs text-white tracking-widest font-medium">COOKE ANAMORPHIC /i</div>
</div>
<div className="group/spec">
<div className="text-[9px] text-[#4a4a4a] font-mono mb-2 group-hover/spec:text-[#c4a265] transition-colors">RESOLUTION</div>
<div className="text-xs text-white tracking-widest font-medium">4.6K RAW OPEN GATE</div>
</div>
<div className="text-right flex items-end justify-end">
<a className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-[9px] font-mono text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-widest magnetic-target" href="#">
<iconify-icon icon="solar:download-linear"></iconify-icon>
           DOWNLOAD PROXY
         </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 bg-bg relative" id="market">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="border border-white/10 p-8 rounded bg-surface relative overflow-hidden tilt-card">
<div className="tilt-inner">
<div className="font-bebas text-3xl text-white mb-6">FINANCIALS</div>
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<div className="font-mono text-[10px] text-text-dim mb-1">BUDGET</div>
<div className="font-bebas text-3xl text-gold">$3M - $5M</div>
</div>
<div className="">
<div className="font-mono text-[10px] text-text-dim mb-1">PROJECTED ROI</div>
<div className="font-bebas text-3xl text-white">400%</div>
</div>
</div>
<div className="h-[1px] w-full bg-white/10 mb-6"></div>
<div className="space-y-3">
<div className="flex justify-between text-xs font-mono text-text-secondary">
<span>LOCATIONS</span>
<span className="text-white">JOSHUA TREE (HUB)</span>
</div>
<div className="flex justify-between text-xs font-mono text-text-secondary">
<span>SHOOT DAYS</span>
<span className="text-white">21 DAYS</span>
</div>
<div className="flex justify-between text-xs font-mono text-text-secondary">
<span>VFX SHOTS</span>
<span className="text-white">~140 (FOCUSED)</span>
</div>
</div>
</div>
<div className="glare"></div>
</div>

<div className="flex flex-col justify-center">
<h4 className="font-bebas text-2xl text-white mb-8">COMPARABLES</h4>
<div className="space-y-6">
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-white font-medium">A QUIET PLACE</span>
<span className="font-mono text-gold">$341M</span>
</div>
<div className="h-2 bg-white/10 w-full rounded-full overflow-hidden">
<div className="h-full bg-gold w-0 rounded-full" id="bar1" style={{width: '85%'}}></div>
</div>
</div>
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-white font-medium">JOHN WICK</span>
<span className="font-mono text-gold">$86M</span>
</div>
<div className="h-2 bg-white/10 w-full rounded-full overflow-hidden">
<div className="h-full bg-gold/80 w-0 rounded-full" id="bar2" style={{width: '30%'}}></div>
</div>
<p className="text-[10px] text-text-dim mt-1">Simple premise + Stylized Action</p>
</div>
<div className="relative">
<div className="flex justify-between text-sm mb-2">
<span className="text-white font-medium">THE LAST OF US (HBO)</span>
<span className="font-mono text-gold">32M Viewers</span>
</div>
<div className="h-2 bg-white/10 w-full rounded-full overflow-hidden">
<div className="h-full bg-gold/60 w-0 rounded-full" id="bar3" style={{width: '25%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-20 pb-20 relative" id="storyboard" style={{scrollMarginTop: '80px'}}>
<div className="md:px-6 max-w-[1100px] mr-auto ml-auto pr-4 pl-4">
<div className="flex items-center gap-4 mb-16">
<div className="h-[1px] w-8 bg-gold"></div>
<span className="font-bebas text-sm tracking-[0.3em] text-text-secondary">STORYBOARD</span>
</div>

<div className="space-y-5 gap-x-y-5 gap-y-5">

<div className="relative group overflow-hidden">
<img alt="The Road" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69196d41-9e57-4f18-a644-00ea012da046_1600w.jpg?w=800&amp;q=80"/>
</div>

<div className="relative group overflow-hidden">
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>DEAD HIGHWAY</div>
</div>

<div className="relative group overflow-hidden">
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>I'LL LIVE FOR YOU. I'LL DIE FOR YOU.</div>
</div>

<div className="pt-8 pb-2">
<span className="font-bebas text-sm tracking-[0.3em] text-text-dim">ACT ONE — THE WOUNDED HERO</span>
</div>

<div className="relative group overflow-hidden">
<img alt="The Crawl" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c65e3fb3-b3f2-4a33-8462-30364a519dee_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE CRAWL</div>
</div>

<div className="relative group overflow-hidden">
<img alt="The Injury" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a703ffc0-e540-4580-af3c-84674f9a1e11_1600w.jpg?w=800&amp;q=80"/>
<div className="text-gold text-xs tracking-[0.25em] font-bebas absolute bottom-3 left-4" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>24 HOURS EARLIER</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Trailer" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f78b0fc2-3e6a-4dfb-8947-65429509af3a_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>TRAILER — WILL AND PENNY</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Water" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00456697-3a59-46b8-8a25-e0f63cf6954d_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>WATER</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Sermon" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17ce79df-6ef4-4fb6-b3b5-b159f74ef45c_3840w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>PADRE — SACRED LIGHT IN A PROFANE WORLD</div>
</div>

<div className="bg-center pt-8 pb-2">
<span className="font-bebas text-sm tracking-[0.3em] text-text-dim">THE HEIST</span>
</div>

<div className="relative group overflow-hidden">
<img alt="Hank Drives" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18e5ca2e-d357-41ff-b716-ce26cad62a46_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>HANK DRIVES</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Sleepers" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0980d2ea-2b37-425b-b316-93dde378ca75_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE SLEEPERS</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Chase" className="block w-full rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aedff1bf-abb9-4aa4-8aa6-e37c2f3fc63c_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE CHASE</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Tanker Cab" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad74c583-3cdb-443c-8bd6-9f04d2762b6d_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE CAB</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Biker Ambush" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0673abc-c47e-4b33-866f-de83797db31c_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>BIKER AMBUSH</div>
</div>

<div className="relative group overflow-hidden">
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>NOT A ZOMBIE. A PREDATOR.</div>
</div>

<div className="pt-8 pb-2">
<span className="font-bebas text-sm tracking-[0.3em] text-text-dim">THE MONSTERS</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="relative overflow-hidden">
<img alt="Sleepers" className="w-full block rounded-sm" decoding="async" loading="lazy" src="storyboard_monsters/monsters_sleepers_scouts_v3.jpg"/>
<div className="absolute bottom-2 left-2 font-bebas text-[9px] tracking-[0.2em] text-gold" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>SLEEPERS</div>
</div>
<div className="relative overflow-hidden">
<img alt="Hunters" className="w-full block rounded-sm" decoding="async" loading="lazy" src="storyboard_monsters/monsters_hunters_v4.jpg"/>
<div className="absolute bottom-2 left-2 font-bebas text-[9px] tracking-[0.2em] text-gold" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>HUNTERS</div>
</div>
<div className="relative overflow-hidden">
<img alt="Alpha" className="w-full block rounded-sm" decoding="async" loading="lazy" src="storyboard_monsters/monsters_alpha_var2.jpg"/>
<div className="absolute bottom-2 left-2 font-bebas text-[9px] tracking-[0.2em] text-gold" style={{textShadow: '0 2px 8px rgba(0,0,0,0.9)'}}>ALPHA</div>
</div>
</div>

<div className="relative group overflow-hidden">
<img alt="The Gun" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a84dab5-b783-4584-b565-b5663a6f683d_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE HARDEST CHOICE</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Burial" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3089f6e-1cf8-4470-ad0c-8345f6cb36fa_3840w.jpg?w=800&amp;q=80"/>
</div>

<div className="pt-8 pb-2">
<span className="font-bebas text-sm tracking-[0.3em] text-text-dim">ACT TWO — VICTORY &amp; FALL</span>
</div>

<div className="relative group overflow-hidden">
<img alt="Goodbye" className="w-full block rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/146681ba-a827-4820-90c0-c7283ef619b0_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>GOODBYE</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Sand Rises" className="block w-full rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/046e1a4f-5ba6-4d8a-a5a6-342a9540c7d9_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE SHIMMER</div>
</div>

<div className="relative group overflow-hidden">
<img alt="The Raid" className="w-full block rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e135773b-bb71-4846-8fce-3a221d825658_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE RAID</div>
</div>

<div className="relative group overflow-hidden">
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>GEARS UP</div>
</div>

<div className="pt-8 pb-2">
<span className="font-bebas text-sm tracking-[0.3em] text-text-dim">ACT THREE — CHOICE &amp; ASCENSION</span>
</div><div className="relative group overflow-hidden">
<img alt="You Came Back" className="block bg-center w-full object-cover rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eafc7fe7-9189-4218-b3f4-2db1ade2d713_1600w.png?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>"YOU CAME BACK."</div>
</div>


<div className="relative group overflow-hidden">
<img alt="Unleashed" className="block w-full rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2c6dca2-6a08-4826-bcd2-d02c95931d3e_1600w.png"/><div className="relative group overflow-hidden mt-5 rounded-sm shadow-2xl">
<img alt="The Extraction" className="block w-full rounded-sm object-cover contrast-125 brightness-[0.85] saturate-[0.8] group-hover:scale-105 transition-transform duration-[2s]" decoding="async" loading="lazy" src="alpha_will_leap_helicopter.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 opacity-80 pointer-events-none mix-blend-multiply"></div>
<div className="absolute inset-0 ring-1 ring-white/10 rounded-sm pointer-events-none"></div>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold z-10" style={{textShadow: '0 2px 12px rgba(0,0,0,1)'}}>CONTACT</div>
</div>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>UNLEASHED</div>
</div>

<div className="relative group overflow-hidden">
<img alt="The Leap" className="block w-full rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32eeff8b-5ec6-48f7-86ac-6bf89df329c2_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THREE FINGERS</div>
</div>

<div className="relative group overflow-hidden">
<img alt="The Cost" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5db77aa3-035e-41ed-af1c-fbdb2996d351_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE COST</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Parting the Sleepers" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7fe26a1-4aba-4622-a7e5-72f120059c90_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>PARTING THE RED SEA</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Incognito" className="block w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b6b93fb-fc85-4f00-bd5b-15f164dac6f6_3840w.jpg"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>INCOGNITO</div>
</div>

<div className="relative group overflow-hidden">
<img alt="Tidal Wave" className="block w-full rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cedd383-2747-42b2-ac18-001d272cd26c_1600w.png"/>
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>THE WAVE</div>
</div>

<div className="relative group overflow-hidden">
<div className="absolute bottom-3 left-4 font-bebas text-xs tracking-[0.25em] text-gold" style={{textShadow: '0 2px 12px rgba(0,0,0,0.9)'}}>JOSHUA TREE. WHERE WE SHOOT.</div>
</div>

<div className="relative group overflow-hidden rounded-sm" style={{background: '#050505'}}>
<img alt="Alpha Will" className="w-full block" decoding="async" loading="lazy" src="storyboard_monsters/monsters_alpha_will_var6.jpg" style={{mixBlendMode: 'multiply', filter: 'contrast(1.08) brightness(1.06) saturate(0.92)'}}/>
<div className="absolute bottom-4 left-0 right-0 text-center">
<p className="md:text-4xl text-gold text-2xl tracking-[0.18em] font-bebas" style={{textShadow: '0 0 40px rgba(196,162,101,0.35), 0 3px 0 #050505'}}>"IT'S ALWAYS FOR THEM."</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden" style={{minHeight: '100vh'}}>
<img alt="Alpha Will — It's Always For Them" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5e91442-4db3-4ab1-adc9-532e5c0abef8_1600w.png"/>
</section>

<section className="h-[60vh] relative flex items-center justify-center bg-black overflow-hidden">
<img alt="Joshua Tree" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" src="pitch_tone/tone_01_joshua_tree_wide.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
<div className="z-10 text-center">
<h2 className="font-bebas text-5xl md:text-7xl text-white mb-8 scramble-hover magnetic-target" data-value="CONTACT">CONTACT</h2>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<a className="px-8 py-3 border border-gold text-gold font-mono text-xs tracking-widest hover:bg-gold hover:text-black transition-all duration-300 magnetic-target" href="mailto:contact@doubledown.com">
        EMAIL PRODUCER
      </a>
<a className="px-8 py-3 border border-white/20 text-white font-mono text-xs tracking-widest hover:border-white transition-all duration-300 magnetic-target" href="#">
        REQUEST SCRIPT
      </a>
</div>
<div className="mt-12 font-mono text-[9px] text-text-dim uppercase tracking-[0.2em]">
      © 2024 Double Down Pictures • Confidential
    </div>
</div>
</section>


    </>
  );
}
