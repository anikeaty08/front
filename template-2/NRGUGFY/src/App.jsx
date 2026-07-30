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



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      /* PLAY & MUTE TOGGLES */
      const playToggle  = document.getElementById('playToggle');
      const muteToggle  = document.getElementById('muteToggle');
      const volumeLabel = document.getElementById('volumeLabel');
      let playing = true;
      let muted   = false;
      const setIcon = (el, name, size='w-5 h-5') => { el.innerHTML = lucide.icons[name].toSvg({class:size}); };

      playToggle.addEventListener('click', () => {
        playing = !playing;
        setIcon(playToggle, playing ? 'pause' : 'play', 'w-6 h-6');
        playToggle.setAttribute('aria-label', playing ? 'Pause' : 'Play');
      });

      muteToggle.addEventListener('click', () => {
        muted = !muted;
        setIcon(muteToggle, muted ? 'volume-x' : 'volume-2');
        muteToggle.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
        volumeLabel.textContent = muted ? '0%' : '72%';
      });

      /* STAGGERED FADE / SLIDE IN */
      const animateEls = [...document.querySelectorAll('[data-animate]')];
      const shells = [document.getElementById('playerShell'), document.getElementById('playlistCard')];
      shells.forEach((sh, sIdx) => setTimeout(() => sh.classList.remove('opacity-0','translate-y-6'), 80 + sIdx * 80));
      animateEls.forEach((el, idx) =>
        setTimeout(() => el.classList.remove('opacity-0','translate-y-4'), 260 + idx * 90)
      );
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
      <div className="video-background-container fixed top-0 w-full h-screen -z-10"><video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://cdn.midjourney.com/video/4b8627e3-f2e2-44a5-aa3c-557cf281e638/1.mp4"></video></div>

<header className="sticky top-0 z-30 backdrop-blur-lg bg-[#171717]/70 border-b border-white/5">
<nav aria-label="Primary" className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<i className="w-6 h-6 text-blue-400 group-hover:animate-pulse" data-lucide="waveform"></i>
<span className="text-base tracking-tight font-sans" style={{}}>Sonic Pulse</span>
</a>
<ul className="hidden lg:flex items-center gap-8">
<li><a className="text-sm hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition font-sans" href="#features" style={{}}>Features</a></li>
<li className=""><a className="text-sm hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition font-sans" href="#pricing" style={{}}>Pricing</a></li>
<li><a className="text-sm hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition font-sans" href="#docs" style={{}}>Docs</a></li>
</ul>
<div className="flex items-center gap-4">
<a className="hidden lg:inline-block text-sm hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition font-sans" href="#" style={{}}>Sign in</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-400 transition text-sm font-semibold px-4 py-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40" href="#">
<span className="font-sans" style={{}}>Get started</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>
</header>

<main className="flex-1 flex flex-col sm:pt-32 text-center pt-24 pr-6 pl-6 items-center">
<div className="max-w-2xl mx-auto">
<h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-bricolage font-light tracking-tighter" style={{}}>Feel the Rhythm. <br className="hidden sm:block" />Control the Pulse.</h1>
<p className="text-lg text-white/70 mb-8 font-sans" style={{}}>Stream, organize, and fine-tune your music with precision. Your sonic journey starts here.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 hover:bg-blue-400 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 text-sm font-semibold bg-gradient-to-b from-gray-900 to-black rounded-lg pt-3 pr-6 pb-3 pl-6" href="#">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="font-sans" style={{}}>Start Listening</span>
</a>
<a className="inline-flex items-center gap-2 hover:border-blue-400/40 hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 text-sm font-semibold bg-slate-950/60 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#">
<svg className="lucide lucide-info w-[16px] h-[16px]" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg><span className="" style={{}}>Learn More</span>
</a>
</div>
</div>

<div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 mt-16 sm:mt-24" id="cardsContainer">

<div className="w-full max-w-sm ring-1 ring-transparent hover:ring-blue-500/30 focus-within:ring-blue-500/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,.8)] overflow-hidden transition-all duration-700 bg-cyan-50/5 border-white/10 border rounded-3xl backdrop-blur-md">

<div className="flex gap-2 bg-white/5 border-white/5 border-b pt-3 pr-5 pb-3 pl-5 items-center" data-animate="">
<span className="text-xl tracking-tight font-sans" style={{}}>Now Playing</span>
<span className="text-xs text-white/60 ml-auto font-sans" style={{}}>Playlist · 7 Tracks</span>
</div>

<div className="flex items-center px-5 py-4 bg-gradient-to-b from-white/10 to-transparent">

<div className="flex items-center gap-6">
<button aria-label="Shuffle" className="hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition" data-animate=""><svg className="lucide lucide-shuffle w-5 h-5" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg></button>
<button aria-label="Repeat" className="hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition" data-animate=""><svg className="lucide lucide-repeat w-5 h-5" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg></button>
<button aria-label="Previous Track" className="opacity-40 cursor-not-allowed" data-animate="" disabled><svg className="lucide lucide-skip-back w-5 h-5" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg></button>
<button aria-label="Pause" className="p-2 rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 transition" data-animate="" id="playToggle">
<svg className="lucide lucide-pause w-[24px] h-[24px]" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `24px`, height: `24px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="1" width="4" x="14" y="4"></rect><rect height="16" rx="1" width="4" x="6" y="4"></rect></svg>
</button>
<button aria-label="Next Track" className="hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition" data-animate=""><svg className="lucide lucide-skip-forward w-5 h-5" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg></button>
</div>

<div className="flex items-center gap-2 ml-auto" data-animate="">
<span className="text-sm font-sans" id="volumeLabel" style={{}}>72%</span>
<button aria-label="Mute" className="hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition" id="muteToggle">
<svg className="lucide lucide-volume-2 w-5 h-5" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</button>
</div>
</div>

<ul className="divide-y divide-white/5" id="trackList" role="list">

<li className="group flex items-start gap-4 p-5 relative bg-white/5/20 backdrop-blur-sm" data-animate="" role="listitem">
<div className="relative">
<img alt="Album art for Starlight Echo" className="w-16 h-16 rounded-lg object-cover transition-transform duration-300 group-hover:rotate-3" src="https://images.unsplash.com/photo-1710319586590-89a5652c4c94?w=800&q=80" style={{}} />
<span className="absolute -inset-1 rounded-lg border border-blue-400/0 group-hover:border-blue-400/30 group-hover:shadow-[0_0_15px_4px_rgba(99,102,241,.3)] transition"></span>
</div>
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans" style={{}}>Starlight Echo</h3>
<p className="text-sm text-white/60 leading-tight font-sans" style={{}}>Nova Lane – Midnight Blueprints</p>

<div className="flex items-center gap-2 mt-3">
<span className="text-xs font-sans" style={{}}>2:07</span>
<input aria-label="Seek through track" className="w-full h-1 accent-blue-500/90 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60" max="207" min="0" type="range" value="94" />
<span className="text-xs text-white/60 font-sans" style={{}}>-1:13</span>
</div>
</div>
<button aria-label="Save to Library" className="hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition">
<svg className="lucide lucide-bookmark-plus w-6 h-6" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
</button>
</li>

<li className="group flex items-center gap-4 p-5 hover:bg-white/5 focus-within:bg-white/5 transition-colors" data-animate="" role="listitem">
<img alt="Album art for Neon Skies" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?w=320&q=80" />
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans" style={{}}>Neon Skies</h3>
<p className="text-sm text-white/60 leading-tight font-sans" style={{}}>Atlas Waves – Chromatic Flux</p>
</div>
<span className="text-sm font-sans" style={{}}>3:18</span>
<button aria-label="Options for Neon Skies" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
<li className="group flex items-center gap-4 p-5 hover:bg-white/5 focus-within:bg-white/5 transition-colors" data-animate="" role="listitem">
<img alt="Album art for Crystal Voyage" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f?w=320&q=80" />
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans" style={{}}>Crystal Voyage</h3>
<p className="text-sm text-white/60 leading-tight font-sans" style={{}}>Gemini Pulse – Single</p>
</div>
<span className="text-sm font-sans" style={{}}>4:02</span>
<button aria-label="Options for Crystal Voyage" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
<li className="group flex items-center gap-4 p-5 hover:bg-white/5 focus-within:bg-white/5 transition-colors" data-animate="" role="listitem">
<img alt="Album art for Gravity Bloom" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1722269160081-5bce2d5fdde2?w=320&q=80" />
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans" style={{}}>Gravity Bloom</h3>
<p className="text-sm text-white/60 leading-tight font-sans" style={{}}>Echo Signal – Event Horizons</p>
</div>
<span className="text-sm font-sans" style={{}}>3:56</span>
<button aria-label="Options for Gravity Bloom" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
<li className="group flex items-center gap-4 p-5 hover:bg-white/5 focus-within:bg-white/5 transition-colors" data-animate="" role="listitem">
<img alt="Album art for Lunar Heartbeat" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?w=320&q=80" style={{}} />
<div className="flex-1">
<h3 className="leading-tight tracking-tight font-sans" style={{}}>Lunar Heartbeat</h3>
<p className="text-sm text-white/60 leading-tight font-sans" style={{}}>Orbit Lights – Far Side EP</p>
</div>
<span className="text-sm font-sans" style={{}}>4:27</span>
<button aria-label="Options for Lunar Heartbeat" className="ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded transition">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</li>
</ul>
</div>

<div className="w-full max-w-sm ring-1 ring-transparent hover:ring-blue-500/30 focus-within:ring-blue-500/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,.8)] overflow-hidden transition-all duration-700 bg-cyan-50/5 border-white/10 border rounded-3xl shadow-inner backdrop-blur-lg">

<div className="flex gap-2 bg-white/10 border-white/5 border-b pt-3 pr-5 pb-3 pl-5 items-center" data-animate="">
<span className="text-xl tracking-tight font-sans" style={{}}>Curated Mix</span>
<span className="text-xs text-white/60 ml-auto font-sans" style={{}}>24 Tracks</span>
</div>

<div className="relative" data-animate="">
<img alt="Outrun Synthwave playlist cover" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1619472376731-3ca648a34b69?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent"></div>
<button aria-label="Play Playlist" className="absolute bottom-4 right-4 p-3 rounded-full bg-blue-500 hover:bg-blue-400 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>

<div className="pt-5 pr-5 pb-5 pl-5 space-y-6">
<div className="">
<h3 className="text-lg leading-tight tracking-tight font-sans" style={{}}>Outrun Synthwave</h3>
<p className="text-sm text-white/60 font-sans" style={{}}>A neon-drenched ride through pulsating retro beats.</p>
</div>

<ol className="space-y-3" data-animate="">
<li className="flex items-center gap-2">
<span className="text-xs text-white/60 font-sans" style={{}}>01</span>
<div className="flex-1 truncate">
<span className="tracking-tight font-sans" style={{}}>Midnight City Lights</span>
<span className="text-white/50 font-sans" style={{}}> · Pulse Engine</span>
</div>
<span className="text-xs text-white/50 font-sans" style={{}}>3:45</span>
</li>
<li className="flex items-center gap-2">
<span className="text-xs text-white/60 font-sans" style={{}}>02</span>
<div className="flex-1 truncate">
<span className="tracking-tight font-sans" style={{}}>Chrome Horizon</span>
<span className="text-white/50 font-sans" style={{}}> · Neon Run</span>
</div>
<span className="text-xs text-white/50 font-sans" style={{}}>4:01</span>
</li>
<li className="flex items-center gap-2">
<span className="text-xs text-white/60 font-sans" style={{}}>03</span>
<div className="flex-1 truncate">
<span className="tracking-tight font-sans" style={{}}>Radiant Rush</span>
<span className="text-white/50 font-sans" style={{}}> · Solar Nights</span>
</div>
<span className="text-xs text-white/50 font-sans" style={{}}>3:28</span>
</li>
</ol>

<div className="flex items-center gap-3 pt-2 border-t border-white/5" data-animate="">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-400 transition text-sm font-semibold px-4 py-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="font-sans" style={{}}>Like</span>
</button>
<button aria-label="More options for playlist" className="p-2 rounded-lg hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
