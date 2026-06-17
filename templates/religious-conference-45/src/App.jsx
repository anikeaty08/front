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
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 2, 5, 10, 15];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { '--tw-rotate-x': `${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (value !== 0) rotateXUtilities[`.-rotate-x-${value}`] = { '--tw-rotate-x': `-${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
rotateYUtilities[`.rotate-y-${value}`] = { '--tw-rotate-y': `${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (value !== 0) rotateYUtilities[`.-rotate-y-${value}`] = { '--tw-rotate-y': `-${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
});
const perspectiveUtilities = {
".perspective-1000": { perspective: "1000px" },
".perspective-normal": { perspective: "500px" },
};
addUtilities({...rotateXUtilities, ...rotateYUtilities, ...perspectiveUtilities});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Intersection Observer for Scroll Reveals
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            // Scroll Progress Bar
            const progressBar = document.getElementById('scroll-progress');
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height);
                if(progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
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
      

<div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-0 left-0 h-1 bg-[#4ba3e3] z-[110] origin-left transition-transform duration-150 ease-out" id="scroll-progress" style={{transform: 'scaleX(0)'}}></div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6 reveal in-view">
<header className="bg-[#ebedea]/80 backdrop-blur-xl border border-[#2d322f]/10 rounded-full h-16 flex items-center px-6 md:px-8 justify-between shadow-[0_8px_32px_rgba(45,50,47,0.05)] pointer-events-auto w-full max-w-[1000px] transition-all duration-300 hover:border-[#2d322f]/20">

<a className="flex items-center text-xl font-playfair tracking-tight uppercase text-[#2d322f]" href="#">
                CHARIS <span className="text-[#4ba3e3] ml-1">'26</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest" href="#">Home</a>
<a className="group text-sm font-normal text-[#4ba3e3] transition-colors uppercase tracking-widest relative" href="#">About <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#4ba3e3] rounded-full"></span></a>
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest" href="#">Schedule</a>
<a className="group text-sm font-normal text-[#2d322f]/70 hover:text-[#4ba3e3] transition-colors uppercase tracking-widest" href="#">Buy Books</a>
</nav>

<div className="flex items-center gap-4">
<button className="lg:hidden text-[#2d322f]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<button className="uppercase hover:bg-[#4ba3e3] hover:shadow-[0_8px_32px_rgba(75,163,227,0.3)] transition-all duration-300 hidden sm:flex text-xs md:text-sm font-normal text-white tracking-widest bg-[#2d322f] rounded-full px-6 py-2.5 gap-2 items-center">
                    Register
                    <iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
</button>
</div>
</header>
</div>
<main>

<section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
<div className="flex flex-col text-center max-w-[1200px] z-10 mx-auto px-6 relative items-center">

<div className="reveal delay-100 mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#4ba3e3]/20 bg-white/50 backdrop-blur-md text-xs tracking-[0.2em] uppercase text-[#2d322f]/80 shadow-sm">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ba3e3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ba3e3]"></span>
</span>
                    April 02 — 06, 2026
                </div>

<h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase text-[#2d322f] font-playfair font-normal leading-[0.85] max-w-5xl mb-6">
<span className="block reveal delay-200">CHARIS '26</span>
<span className="block reveal delay-300 bg-clip-text text-transparent bg-gradient-to-r from-[#2d322f] to-[#4ba3e3]">Camp Meeting</span>
</h1>

<p className="reveal delay-400 mt-6 text-xl md:text-3xl text-[#2d322f]/70 font-playfair font-normal max-w-3xl leading-relaxed">
                    Reinforcing Salvation Through Faith<br/>by The Word and The Spirit.
                </p>
<div className="reveal delay-500 mt-6 text-sm tracking-widest uppercase text-[#2d322f]/50 font-medium">
                    Foursquare Gospel Church Camp Ground, Ogun State
                </div>

<div className="reveal delay-500 mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#2d322f] text-white rounded-full px-10 py-4 text-sm font-normal uppercase tracking-widest hover:bg-[#4ba3e3] hover:shadow-[0_8px_32px_rgba(75,163,227,0.3)] transition-all duration-300 flex items-center justify-center gap-2">
                        Register Now
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-transparent border border-[#2d322f]/20 text-[#2d322f] rounded-full px-10 py-4 text-sm font-normal uppercase tracking-widest hover:border-[#4ba3e3]/50 hover:text-[#4ba3e3] transition-all duration-300 flex items-center justify-center gap-2 group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Trailer
                    </button>
</div>
</div>
</section>

<section className="relative w-full bg-[#1e2420] py-32 overflow-hidden rounded-t-[3rem] -mt-10 z-20">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-30"></div>
<div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
<div className="reveal flex items-center justify-center gap-4 mb-10">
<span className="h-px w-12 bg-[#4ba3e3]"></span>
<span className="text-xs uppercase tracking-[0.3em] text-[#4ba3e3]">The Vision</span>
<span className="h-px w-12 bg-[#4ba3e3]"></span>
</div>
<h2 className="reveal delay-100 text-5xl md:text-6xl tracking-tight uppercase text-white font-playfair font-normal leading-[0.9]">
                    What Is Charis <br/><span className="text-[#4ba3e3]">Camp Meeting?</span>
</h2>
<p className="reveal delay-200 mt-10 text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-playfair font-normal">
                    It's an old word for "Tent Meetings" held in the 19th and 20th Centuries. The practice was for believers to gather under a Tent or "Camp" and hold all-day meetings. Usually very strong teaching meetings in the mornings and afternoons, and in the evenings, they gather for Holy Ghost/Believers meetings. Charis Camp Meeting is typical of this.
                </p>
</div>
</section>

<section className="w-full bg-[#1e2420] px-6 pb-32 border-b border-white/5 relative z-20">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 relative group overflow-hidden h-[400px] lg:h-[500px] rounded-3xl bg-[#2d322f] border border-white/5 hover:border-[#4ba3e3]/30 transition-colors duration-500 p-10 flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#4ba3e3]/10 flex items-center justify-center mb-8 border border-[#4ba3e3]/30 text-[#4ba3e3]">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-white uppercase tracking-tight font-playfair font-normal mb-4">The Pattern</h3>
<p className="text-white/60 text-lg leading-relaxed font-playfair">
                        Patterned after Kenneth E. Hagin Camp meetings. We hold teaching meetings during the day with strong emphasis on Who we are in Christ and the Finished Work of redemption. In the evenings we demonstrate the things of the Spirit in Gifts, with needs met and participants full of joy.
                    </p>
</div>

<div className="reveal delay-200 relative group overflow-hidden h-[400px] lg:h-[500px] rounded-3xl bg-[#2d322f] border border-white/5 hover:border-[#4ba3e3]/30 transition-colors duration-500 p-10 flex flex-col">
<div className="w-12 h-12 rounded-full bg-[#4ba3e3]/10 flex items-center justify-center mb-8 border border-[#4ba3e3]/30 text-[#4ba3e3]">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-3xl text-white uppercase tracking-tight font-playfair font-normal mb-4">Past Meetings</h3>
<p className="text-white/60 text-lg leading-relaxed font-playfair">
                        All Past meetings have had numerous testimonies of many receiving the new birth, filled with the Spirit and diverse and special miracles. Very poignant is the receiving, development and enhancement of many believers in the work of ministry. That's why we invite all.
                    </p>
</div>

<div className="reveal delay-300 relative lg:col-span-1 h-[400px] lg:h-[500px] perspective-normal group">
<div className="absolute inset-0 bg-gradient-to-b from-[#4ba3e3]/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative w-full h-full bg-[#2d322f]/80 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between transform transition-transform duration-700 hover:-translate-y-2 hover:rotate-y-2">
<div className="flex items-center justify-between border-b border-white/10 pb-6">
<span className="text-white uppercase tracking-widest text-xs font-medium">Conference Countdown</span>
<span className="text-[#4ba3e3] flex items-center gap-2 text-xs uppercase tracking-widest animate-pulse">
<span className="w-2 h-2 rounded-full bg-[#4ba3e3]"></span> Live
                            </span>
</div>
<div className="flex flex-col items-center justify-center flex-1 space-y-8 py-8">
<h3 className="text-4xl text-white uppercase tracking-tight font-playfair text-center">6 Days Left</h3>
<div className="flex gap-6 md:gap-8 justify-center w-full">
<div className="flex flex-col items-center">
<div className="text-5xl md:text-6xl text-white font-playfair mb-2">20</div>
<div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Hours</div>
</div>
<div className="text-5xl md:text-6xl text-white/20 font-playfair">:</div>
<div className="flex flex-col items-center">
<div className="text-5xl md:text-6xl text-white font-playfair mb-2">10</div>
<div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Mins</div>
</div>
<div className="text-5xl md:text-6xl text-white/20 font-playfair hidden sm:block">:</div>
<div className="flex flex-col items-center hidden sm:flex">
<div className="text-5xl md:text-6xl text-white font-playfair mb-2">10</div>
<div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Secs</div>
</div>
</div>
</div>
<button className="w-full bg-[#4ba3e3] text-white rounded-full py-4 text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-colors flex justify-center items-center gap-2">
                            Set Reminder
                            <iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1e2420] clip-path-slant z-30 group cursor-pointer">
<div className="absolute inset-0 z-0 scale-110 transform-gpu bg-fixed transition-transform duration-1000 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>
<div className="absolute inset-0 bg-[#1e2420]/80 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420] via-[#4ba3e3]/20 to-[#1e2420] z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
<div className="relative z-20 text-center px-6 reveal flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 text-white group-hover:bg-[#4ba3e3] group-hover:border-[#4ba3e3] group-hover:scale-110 transition-all duration-500 shadow-2xl">
<iconify-icon className="text-4xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase text-white font-playfair font-normal drop-shadow-2xl leading-[0.9]">
                    Watch The <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#4ba3e3] to-white/60 mt-2">Official Trailer</span>
</h2>
<div className="mt-8 text-sm uppercase tracking-widest text-white/50 flex items-center gap-2">
<iconify-icon icon="solar:videocamera-linear"></iconify-icon> Saints Community Church
                </div>
</div>
</section>

<section className="bg-[#ebedea] py-32 px-6 lg:px-12 rounded-t-[3rem] -mt-10 relative z-40">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 relative">

<div className="lg:w-1/3">
<div className="sticky top-32 reveal">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4ba3e3]/30 bg-[#4ba3e3]/10 text-xs tracking-widest uppercase text-[#4ba3e3] mb-6 font-medium">
                            Itinerary
                        </div>
<h2 className="text-5xl md:text-6xl tracking-tight uppercase text-[#2d322f] mb-6 font-playfair font-normal leading-[0.9]">
                            Programme <span className="text-[#4ba3e3] block mt-2">Schedule</span>
</h2>
<p className="text-[#2d322f]/70 text-lg md:text-xl leading-relaxed mb-10 font-playfair">
                            Five days of intense teaching, Holy Ghost meetings, and supernatural encounters. Plan your itinerary.
                        </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#2d322f]/20 bg-transparent text-xs uppercase tracking-widest text-[#2d322f] hover:bg-[#4ba3e3] hover:text-white hover:border-[#4ba3e3] transition-all duration-300" href="#">
                            Download PDF <iconify-icon className="text-base" icon="solar:download-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:w-2/3 flex flex-col gap-6">

<div className="reveal reveal-up bg-white rounded-3xl p-8 border border-[#2d322f]/5 shadow-[0_8px_30px_rgba(45,50,47,0.04)] hover:shadow-[0_20px_40px_rgba(75,163,227,0.08)] hover:border-[#4ba3e3]/20 transition-all duration-500 group">
<div className="flex justify-between items-end mb-8 border-b border-[#2d322f]/5 pb-6">
<div>
<div className="text-[#4ba3e3] text-xs uppercase tracking-[0.2em] font-medium mb-2">Day 01</div>
<h3 className="text-3xl md:text-4xl tracking-tight uppercase text-[#2d322f] font-playfair">Thursday, April 02</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#ebedea]/50 p-6 rounded-2xl group-hover:bg-[#4ba3e3]/5 transition-colors">
<div className="text-xs text-[#2d322f]/50 uppercase tracking-widest mb-3 flex items-center gap-2"><iconify-icon icon="solar:sunrise-linear"></iconify-icon> Morning</div>
<div className="text-2xl font-playfair text-[#2d322f]">6:30 <span className="text-sm tracking-widest uppercase">am</span></div>
</div>
<div className="bg-[#ebedea]/50 p-6 rounded-2xl group-hover:bg-[#4ba3e3]/5 transition-colors">
<div className="text-xs text-[#2d322f]/50 uppercase tracking-widest mb-3 flex items-center gap-2"><iconify-icon icon="solar:sun-linear"></iconify-icon> Afternoon</div>
<div className="text-2xl font-playfair text-[#2d322f]">1:00 <span className="text-sm tracking-widest uppercase">pm</span></div>
</div>
<div className="bg-[#ebedea]/50 p-6 rounded-2xl group-hover:bg-[#4ba3e3]/5 transition-colors">
<div className="text-xs text-[#2d322f]/50 uppercase tracking-widest mb-3 flex items-center gap-2"><iconify-icon icon="solar:moon-linear"></iconify-icon> Evening</div>
<div className="text-2xl font-playfair text-[#2d322f]">6:30 <span className="text-sm tracking-widest uppercase">pm</span></div>
</div>
</div>
</div>

<div className="reveal reveal-up bg-[#2d322f] rounded-3xl p-8 border border-[#2d322f]/5 shadow-xl transform scale-[1.02] -ml-2 lg:-ml-6 relative z-10">
<div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[#4ba3e3] animate-pulse"></div>
<div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
<div>
<div className="text-[#4ba3e3] text-xs uppercase tracking-[0.2em] font-medium mb-2">Day 02</div>
<h3 className="text-3xl md:text-4xl tracking-tight uppercase text-white font-playfair">Friday, April 03</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
<div className="text-xs text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2"><iconify-icon icon="solar:sunrise-linear"></iconify-icon> Morning</div>
<div className="text-2xl font-playfair text-white">6:30 <span className="text-sm tracking-widest uppercase text-white/50">am</span></div>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
<div className="text-xs text-white/50 uppercase tracking-widest mb-3 flex items-center gap-2"><iconify-icon icon="solar:sun-linear"></iconify-icon> Afternoon</div>
<div className="text-2xl font-playfair text-white">1:00 <span className="text-sm tracking-widest uppercase text-white/50">pm</span></div>
</div>
<div className="bg-[#4ba3e3]/20 border border-[#4ba3e3]/30 p-6 rounded-2xl">
<div className="text-xs text-[#4ba3e3] uppercase tracking-widest mb-3 flex items-center gap-2"><iconify-icon icon="solar:stars-linear"></iconify-icon> Special Evening</div>
<div className="text-2xl font-playfair text-white">6:30 <span className="text-sm tracking-widest uppercase text-white/50">pm</span></div>
</div>
</div>
</div>

<div className="reveal reveal-up bg-white rounded-3xl p-8 border border-[#2d322f]/5 shadow-[0_8px_30px_rgba(45,50,47,0.04)] hover:shadow-[0_20px_40px_rgba(75,163,227,0.08)] hover:border-[#4ba3e3]/20 transition-all duration-500 group opacity-70 hover:opacity-100">
<div className="flex justify-between items-center">
<div>
<div className="text-[#4ba3e3] text-xs uppercase tracking-[0.2em] font-medium mb-1">Day 03 &amp; 04</div>
<h3 className="text-2xl md:text-3xl tracking-tight uppercase text-[#2d322f] font-playfair">Sat &amp; Sun, April 04-05</h3>
</div>
<div className="text-right">
<div className="text-sm font-playfair text-[#2d322f]/60">Standard Schedule</div>
<div className="text-xs uppercase tracking-widest text-[#2d322f]/40">6:30AM • 1:00PM • 6:30PM</div>
</div>
</div>
</div>

<div className="reveal reveal-up bg-white rounded-3xl p-8 border border-[#2d322f]/5 shadow-[0_8px_30px_rgba(45,50,47,0.04)] hover:shadow-[0_20px_40px_rgba(75,163,227,0.08)] hover:border-[#4ba3e3]/20 transition-all duration-500 group opacity-70 hover:opacity-100">
<div className="flex justify-between items-center">
<div>
<div className="text-[#4ba3e3] text-xs uppercase tracking-[0.2em] font-medium mb-1">Day 05</div>
<h3 className="text-2xl md:text-3xl tracking-tight uppercase text-[#2d322f] font-playfair">Monday, April 06</h3>
</div>
<div className="text-right">
<div className="text-sm font-playfair text-[#2d322f]/60">Closing Schedule</div>
<div className="text-xs uppercase tracking-widest text-[#2d322f]/40">Morning Session Only</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1e2420] py-32 px-6 relative overflow-hidden z-30">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20"></div>
<div className="max-w-[1000px] mx-auto text-center relative z-10">
<iconify-icon className="text-6xl text-[#4ba3e3]/30 mb-8 mx-auto block" icon="solar:quote-right-linear"></iconify-icon>
<h2 className="reveal text-4xl md:text-5xl lg:text-7xl tracking-tight text-white font-playfair font-normal leading-tight mb-12">
                    "One of the best decisions you will ever make is to be at the <span className="text-[#4ba3e3] italic">right kind of meetings.</span>"
                </h2>
<div className="reveal delay-200 inline-flex items-center gap-4">
<div className="w-12 h-px bg-white/20"></div>
<span className="text-sm tracking-[0.3em] uppercase text-white/70">Pastor Chris Segun Onayinka</span>
<div className="w-12 h-px bg-white/20"></div>
</div>
</div>
</section>

<section className="bg-[#1e2420] border-t border-white/5 relative z-20">
<div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2 reveal">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-white/70 mb-6 font-medium">
                        Location &amp; Contact
                    </div>
<h2 className="text-5xl md:text-6xl text-white tracking-tight uppercase font-playfair font-normal mb-8 leading-[0.9]">
                        Get In <span className="text-[#4ba3e3] block mt-2">Touch</span>
</h2>
<p className="text-xl text-white/60 mb-10 leading-relaxed font-playfair max-w-lg">
                        We will be glad to hear from you. Please, leave us a message or find us at the camp ground.
                    </p>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-20 grayscale mix-blend-luminosity group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700"></div>
<div className="relative z-10">
<h3 className="text-2xl text-white font-playfair mb-2">Saints Community Church</h3>
<p className="text-sm text-white/50 uppercase tracking-widest mb-6 leading-relaxed">6 Oweh St, Somolu, Lagos<br/>101245, Lagos, Nigeria</p>
<a className="inline-flex items-center gap-2 text-[#4ba3e3] uppercase tracking-widest text-xs hover:text-white transition-colors" href="#">
                                View on Google Maps <iconify-icon icon="solar:map-arrow-square-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full reveal delay-200 perspective-normal">
<div className="bg-[#2d322f]/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transform transition-transform duration-700 hover:-translate-y-2 hover:rotate-y-2">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<span className="text-white uppercase tracking-widest text-sm font-medium">Direct Message</span>
<iconify-icon className="text-white/40 text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<form className="space-y-6">
<div>
<span className="text-white text-xs uppercase tracking-widest block mb-2">Full Name</span>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#4ba3e3] focus:bg-white/10 transition-colors placeholder:text-white/30" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<span className="text-white text-xs uppercase tracking-widest block mb-2">Email</span>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#4ba3e3] focus:bg-white/10 transition-colors placeholder:text-white/30" placeholder="john@example.com" type="email"/>
</div>
<div>
<span className="text-white text-xs uppercase tracking-widest block mb-2">Phone (Optional)</span>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#4ba3e3] focus:bg-white/10 transition-colors placeholder:text-white/30" placeholder="+123..." type="text"/>
</div>
</div>
<div>
<span className="text-white text-xs uppercase tracking-widest block mb-2">Message</span>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#4ba3e3] focus:bg-white/10 transition-colors placeholder:text-white/30 resize-none" placeholder="Your question or inquiry..." rows="4"></textarea>
</div>
<button className="w-full bg-[#4ba3e3] text-white rounded-full py-4 text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-colors mt-4 flex justify-center items-center gap-2" type="button">
                                Send Message <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="relative bg-[#2d322f] py-32 overflow-hidden text-center rounded-t-[3rem] -mt-10 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-10"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 reveal">
<div className="w-12 h-px bg-[#4ba3e3] mx-auto mb-8"></div>
<p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4ba3e3]/80 mb-6">
                    Digital Access
                </p>
<h2 className="text-5xl md:text-7xl leading-[0.9] mb-8 uppercase tracking-tight text-white font-playfair font-normal">
                    Download The <br/>
<span className="text-[#4ba3e3]">Saints Community App.</span>
</h2>
<p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto font-playfair">
                    Get access to all our audio teachings, ebooks, updates, events, and church information on the go.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-[#1e2420] rounded-full px-10 py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#4ba3e3] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon className="text-xl" icon="solar:apple-outline"></iconify-icon> iOS App
                    </button>
<button className="bg-transparent border border-white/20 text-white rounded-full px-10 py-4 text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-all duration-300 flex items-center justify-center gap-3">
<iconify-icon className="text-xl" icon="solar:smartphone-linear"></iconify-icon> Android App
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#1e2420] text-white pt-20 pb-10 border-t border-white/5 relative z-40">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2">
<h3 className="text-3xl tracking-tight uppercase text-white mb-4 font-playfair font-normal">
                        CHARIS <span className="text-[#4ba3e3] text-xl">'26</span>
</h3>
<p className="text-sm text-white/50 mb-8 max-w-sm leading-relaxed font-playfair">
                        Reinforcing Salvation Through Faith by The Word and The Spirit.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4ba3e3] hover:border-[#4ba3e3]/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4ba3e3] hover:border-[#4ba3e3]/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:tv-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#4ba3e3] hover:border-[#4ba3e3]/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#4ba3e3] mb-6">Event</h4>
<ul className="space-y-4">
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Home</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">About</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Schedule</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Speakers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#4ba3e3] mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Buy Books</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Audio Teachings</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Camp Guidelines</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#4ba3e3] mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Contact Us</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Registration Help</a></li>
<li><a className="text-xs uppercase tracking-widest text-white/50 hover:text-[#4ba3e3] transition-colors" href="#">Directions</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
                    © 2026 Saints Community Church. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-[10px] text-white/30 uppercase tracking-[0.2em] hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-[10px] text-white/30 uppercase tracking-[0.2em] hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
