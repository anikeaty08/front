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



    // Auto-switch theme based on system time (6am–6pm = light, else dark)
    function setTheme() {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 18) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
    setTheme();
    setInterval(setTheme, 10 * 60 * 1000); // check every 10 minutes
  
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-60">
<svg className="w-full h-full" fill="none" viewbox="0 0 1600 600" xmlns="http://www.w3.org/2000/svg">
<g>
<ellipse cx="800" cy="300" fill="none" opacity="0.09" rx="650" ry="200" stroke="#5fb7ff" strokeWidth="2"></ellipse>
<ellipse cx="800" cy="300" fill="none" opacity="0.13" rx="500" ry="150" stroke="#5fb7ff" strokeWidth="2"></ellipse>
<polyline fill="none" opacity="0.14" points="300,250 700,300 1300,350" stroke="#5fb7ff" strokeWidth="2">
<animate attributename="points" dur="4s" repeatcount="indefinite" values="300,250 700,300 1300,350; 320,210 700,320 1280,370; 300,250 700,300 1300,350"></animate>
</polyline>
<circle cx="700" cy="300" fill="#5fb7ff" opacity="0.25" r="12">
<animate attributename="cx" dur="4s" repeatcount="indefinite" values="700;900;700"></animate>
</circle>
<circle cx="900" cy="300" fill="#5fb7ff" opacity="0.17" r="20">
<animate attributename="cx" dur="4s" repeatcount="indefinite" values="900;700;900"></animate>
</circle>
</g>
</svg>
</div>

<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center px-8 py-2 bg-white/80 dark:bg-[#232b36]/80 shadow-xl rounded-full backdrop-blur-md border border-[#eaf5fd] dark:border-[#19202a] transition-all duration-500">
<span className="font-semibold tracking-wide text-[#5fb7ff] text-lg mr-8 select-none">AEIR</span>
<ul className="flex gap-4 text-base font-medium">
<li><a className="px-4 py-1 rounded-full hover:bg-[#eaf5fd] dark:hover:bg-[#223043] transition text-[#1a7bd5]" href="#features">Features</a></li>
<li><a className="px-4 py-1 rounded-full hover:bg-[#eaf5fd] dark:hover:bg-[#223043] transition" href="#how">How It Works</a></li>
<li><a className="px-4 py-1 rounded-full hover:bg-[#eaf5fd] dark:hover:bg-[#223043] transition" href="#privacy">Privacy</a></li>
<li><a className="px-4 py-1 rounded-full hover:bg-[#eaf5fd] dark:hover:bg-[#223043] transition" href="#events">Events</a></li>
</ul>
<div className="ml-10">
<button className="bg-[#5fb7ff] text-white px-6 py-2 rounded-full shadow-md font-semibold hover:bg-[#399be7] transition flex items-center gap-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m16-10a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        Log In
      </button>
</div>
</nav>

<section className="relative z-10 pt-36 pb-20 flex flex-col items-center justify-center text-center">
<h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-br from-[#5fb7ff] via-[#eaf5fd] to-[#161c23] dark:from-[#5fb7ff] dark:via-[#232b36] dark:to-white bg-clip-text text-transparent drop-shadow-lg mb-6">
      Know Yourself.<br/>Clone Yourself.<br/><span className="font-light">Improve Together.</span>
</h1>
<p className="max-w-2xl mx-auto text-xl md:text-2xl text-[#283b4d] dark:text-[#d1e9f8] mb-10 leading-relaxed">
      AEIR builds a living digital reflection—an interactive AI clone, grown from your voice, likeness, story, and memories. Evolve, converse, and connect with your truest digital self.
    </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
<button className="bg-[#5fb7ff] hover:bg-[#399be7] transition text-white px-10 py-3 rounded-full text-lg font-semibold shadow-xl">
        Get Started
      </button>
<a className="border-2 border-[#5fb7ff] text-[#5fb7ff] px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#eaf5fd] dark:hover:bg-[#223043] transition" href="#how">
        Learn More
      </a>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-4 py-12" id="features">
<div className="grid md:grid-cols-3 gap-10">
<div className="bg-white/90 dark:bg-[#232b36]/90 rounded-3xl shadow-xl p-8 transition-all duration-500 border border-[#eaf5fd] dark:border-[#223043] flex flex-col items-center">
<div className="mb-4">
<svg className="w-12 h-12 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 48 48"><circle cx="24" cy="24" r="18" strokeWidth="3"></circle><path d="M24 16v8l6 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<h3 className="text-xl font-bold mb-2">Multi-Modal Identity</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-base">Upload images, voice, writings, timeline, and resume—each forms a layer of your AI self.</p>
</div>
<div className="bg-white/90 dark:bg-[#232b36]/90 rounded-3xl shadow-xl p-8 border border-[#eaf5fd] dark:border-[#223043] flex flex-col items-center">
<div className="mb-4">
<svg className="w-12 h-12 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 48 48"><path d="M8 40V8h32v32H8z" strokeWidth="3"></path><path d="M24 24l8-8m0 0H24m8 0v8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<h3 className="text-xl font-bold mb-2">Dynamic Dashboard</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-base">Track your clone’s growth, traits, and history. Compare yourself and your evolving AI twin.</p>
</div>
<div className="bg-white/90 dark:bg-[#232b36]/90 rounded-3xl shadow-xl p-8 border border-[#eaf5fd] dark:border-[#223043] flex flex-col items-center">
<div className="mb-4">
<svg className="w-12 h-12 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 48 48"><path d="M24 8v32M8 24h32" strokeWidth="3"></path></svg>
</div>
<h3 className="text-xl font-bold mb-2">Private, Yours, Licenseable</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-base">All data is user-owned. Share or license your AI identity only if—and when—you wish.</p>
</div>
</div>
</section>

<section className="relative z-10 bg-[#f6fbff] dark:bg-[#1b2230] py-16 mt-10 transition-colors duration-700" id="how">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-[#5fb7ff] dark:text-[#5fb7ff] text-center">
        How AEIR Works
      </h2>
<div className="grid md:grid-cols-5 gap-10">

<div className="flex flex-col items-center">
<div className="bg-[#5fb7ff]/10 rounded-full p-4 mb-3">
<svg className="w-8 h-8 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="8" strokeWidth="2"></circle>
<circle cx="12" cy="12" r="3" strokeWidth="2"></circle>
</svg>
</div>
<h3 className="font-semibold mb-1">Likeness</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-sm text-center">Upload 5–10 selfies. Train and stylize your digital portrait.</p>
</div>

<div className="flex flex-col items-center">
<div className="bg-[#5fb7ff]/10 rounded-full p-4 mb-3">
<svg className="w-8 h-8 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="4" strokeWidth="2" width="8" x="8" y="3"></rect>
<path d="M19 10v2a7 7 0 01-14 0v-2" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold mb-1">Voice</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-sm text-center">Record or upload your voice. Instantly synthesize &amp; test your AI twin’s tone.</p>
</div>

<div className="flex flex-col items-center">
<div className="bg-[#5fb7ff]/10 rounded-full p-4 mb-3">
<svg className="w-8 h-8 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 20l9-5-9-5-9 5 9 5z" strokeWidth="2"></path><path d="M12 12V4" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold mb-1">Personality</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-sm text-center">Upload chat logs or journals. Your clone learns to think and converse as you do.</p>
</div>

<div className="flex flex-col items-center">
<div className="bg-[#5fb7ff]/10 rounded-full p-4 mb-3">
<svg className="w-8 h-8 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="16" rx="2" strokeWidth="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold mb-1">Resume</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-sm text-center">Link LinkedIn or upload your resume. Reflect, answer, and grow professionally.</p>
</div>

<div className="flex flex-col items-center">
<div className="bg-[#5fb7ff]/10 rounded-full p-4 mb-3">
<svg className="w-8 h-8 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z" strokeWidth="2"></path>
<path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10" strokeWidth="2"></path>
</svg>
</div>
<h3 className="font-semibold mb-1">Memories</h3>
<p className="text-gray-500 dark:text-[#b2cee4] text-sm text-center">Add stories, events, or interests. Ground your clone in lived experience.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-20 text-center" id="privacy">
<h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#5fb7ff]">Your Data. Your Clone. Your Choice.</h2>
<p className="text-xl text-[#283b4d] dark:text-[#b2cee4] mb-6">
      AEIR is built to protect your privacy. Control every aspect of your digital self—what you share, what you license, and what remains only yours.
    </p>
<div className="flex flex-col md:flex-row gap-8 justify-center items-center">
<div className="flex flex-col items-center">
<span className="inline-block bg-[#eaf5fd] dark:bg-[#223043] px-4 py-2 rounded-full text-[#5fb7ff] font-semibold mb-2">Private by Default</span>
<p className="text-gray-500 dark:text-[#b2cee4] max-w-xs">Data is encrypted and user-controlled. Nothing is public unless you unlock it.</p>
</div>
<div className="flex flex-col items-center">
<span className="inline-block bg-[#eaf5fd] dark:bg-[#223043] px-4 py-2 rounded-full text-[#5fb7ff] font-semibold mb-2">Licenseable Layers</span>
<p className="text-gray-500 dark:text-[#b2cee4] max-w-xs">Choose what aspects your clone can share for events, experiments, or social presence.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-14 text-center" id="events">
<h2 className="text-2xl md:text-3xl font-bold text-[#5fb7ff] mb-4">Your Clone, On Stage</h2>
<p className="text-lg text-[#283b4d] dark:text-[#b2cee4] mb-10 max-w-2xl mx-auto">
      Bring your AI self to life—license your clone for select events, panels, or experiments. Join a new era of digital presence.
    </p>
<a className="inline-block bg-[#5fb7ff] hover:bg-[#399be7] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition" href="#">
      Join Upcoming Events
    </a>
</section>

<section className="relative z-10 max-w-6xl mx-auto px-4 py-24 flex flex-col md:flex-row gap-10 items-center">

<aside className="hidden md:flex flex-col gap-4 bg-[#fafdff] dark:bg-[#222b37] rounded-2xl px-4 py-8 shadow-xl border border-[#eaf5fd] dark:border-[#1c2633] sticky top-32 h-fit min-w-[70px]">
<nav>
<ul className="flex flex-col gap-6">
<li>
<a className="flex items-center gap-3 text-[#5fb7ff] font-bold bg-[#eaf5fd] dark:bg-[#23334a] rounded-xl px-4 py-2" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
</svg>
<span>My Clone</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-[#283b4d] dark:text-[#b2cee4] hover:text-[#5fb7ff] transition px-4 py-2 rounded-xl" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="3" strokeWidth="2" width="14" x="5" y="5"></rect>
</svg>
<span>Data Sources</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-[#283b4d] dark:text-[#b2cee4] hover:text-[#5fb7ff] transition px-4 py-2 rounded-xl" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 19l7-7-7-7" strokeWidth="2"></path>
</svg>
<span>Mirror</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-[#283b4d] dark:text-[#b2cee4] hover:text-[#5fb7ff] transition px-4 py-2 rounded-xl" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" strokeWidth="2"></path>
<circle cx="12" cy="7" r="4" strokeWidth="2"></circle>
</svg>
<span>Events</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-[#283b4d] dark:text-[#b2cee4] hover:text-[#5fb7ff] transition px-4 py-2 rounded-xl" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m0 0v2m-7-4a9 9 0 1114 0" strokeWidth="2"></path>
</svg>
<span>Settings</span>
</a>
</li>
</ul>
</nav>
</aside>

<main className="flex-1 w-full bg-white/90 dark:bg-[#232b36]/80 border border-[#eaf5fd] dark:border-[#223043] rounded-3xl shadow-xl px-7 py-10 transition">
<div className="flex flex-col md:flex-row gap-10 items-center">
<div className="flex-1">
<h3 className="text-2xl font-bold text-[#5fb7ff] mb-3">My Clone Overview</h3>
<div className="flex gap-5 items-center mb-5">
<img alt="Clone Avatar" className="w-20 h-20 rounded-full border-4 border-[#5fb7ff] shadow-lg" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<p className="font-semibold text-lg">Status: <span className="text-green-600">Initialized</span></p>
<p className="text-[#283b4d] dark:text-[#b2cee4]">Personality: Empathetic, Analytical, Curious</p>
<p className="text-[#283b4d] dark:text-[#b2cee4]">Dominant Tone: Warm, Reflective</p>
</div>
</div>
<div className="flex flex-col gap-2 mb-4">
<button className="flex items-center gap-2 bg-[#eaf5fd] dark:bg-[#223043] px-4 py-2 rounded-full text-[#5fb7ff] font-semibold w-max">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19V6h13M9 6l7 7-7 7" strokeWidth="2"></path>
</svg>
              Train Next Version
            </button>
<span className="text-xs text-gray-400">Last updated: 2 days ago</span>
</div>
<div className="flex gap-4">
<audio className="w-44" controls="">
<source src="#" type="audio/mpeg"/>
              Your browser does not support audio.
            </audio>
<button className="bg-[#5fb7ff]/10 text-[#5fb7ff] font-semibold px-3 py-2 rounded-lg">Play Voice Sample</button>
</div>
</div>
<div className="flex-1 flex flex-col gap-8">
<div>
<h4 className="font-semibold mb-2">Modalities</h4>
<div className="grid grid-cols-2 gap-3">
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl px-4 py-3 flex items-center gap-3">
<svg className="w-5 h-5 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="8" strokeWidth="2"></circle>
</svg>
                Likeness: <span className="font-mono ml-auto text-green-600">Ready</span>
</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl px-4 py-3 flex items-center gap-3">
<svg className="w-5 h-5 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="4" strokeWidth="2" width="8" x="8" y="3"></rect>
</svg>
                Voice: <span className="font-mono ml-auto text-green-600">Ready</span>
</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl px-4 py-3 flex items-center gap-3">
<svg className="w-5 h-5 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 20l9-5-9-5-9 5 9 5z" strokeWidth="2"></path>
</svg>
                Personality: <span className="font-mono ml-auto text-yellow-600">Training</span>
</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl px-4 py-3 flex items-center gap-3">
<svg className="w-5 h-5 text-[#5fb7ff]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="16" rx="2" strokeWidth="2" width="18" x="3" y="4"></rect>
</svg>
                Resume: <span className="font-mono ml-auto text-green-600">Ready</span>
</div>
</div>
</div>
<div>
<h4 className="font-semibold mb-2">Clone Growth Metrics</h4>
<div className="flex flex-wrap gap-4">
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-lg px-3 py-2 text-sm">v2.3</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-lg px-3 py-2 text-sm">Accuracy: 94%</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-lg px-3 py-2 text-sm">Stability: 87%</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-lg px-3 py-2 text-sm">Traits: 23</div>
</div>
</div>
</div>
</div>

<div className="mt-12">
<h4 className="font-semibold text-lg mb-3">Personal Insights</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl p-4">
<span className="block text-xs text-[#5fb7ff] font-semibold mb-1">Self vs. Clone</span>
<div className="text-[#283b4d] dark:text-[#b2cee4] text-sm">92% personality overlap<br/>85% tone similarity</div>
</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl p-4">
<span className="block text-xs text-[#5fb7ff] font-semibold mb-1">Growth Tracker</span>
<div className="text-[#283b4d] dark:text-[#b2cee4] text-sm">7 new traits learned<br/>Last week: +3% empathy</div>
</div>
<div className="bg-[#eaf5fd] dark:bg-[#223043] rounded-xl p-4">
<span className="block text-xs text-[#5fb7ff] font-semibold mb-1">Trait Stability</span>
<div className="text-[#283b4d] dark:text-[#b2cee4] text-sm">Stability graph available</div>
</div>
</div>
</div>
</main>
</section>

<footer className="pt-16 pb-8 text-center text-[#5fb7ff] font-medium tracking-wide">
    © 2024 AEIR. Know Yourself. Clone Yourself. Improve Together.
  </footer>



    </>
  );
}
