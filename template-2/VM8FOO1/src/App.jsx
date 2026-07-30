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
      

<section className="relative min-h-screen flex items-center px-6 md:px-16 py-16">
<div className="flex flex-col md:flex-row w-full items-center md:items-end justify-between">
<div className="z-10 max-w-xl">
<h1 className="text-5xl md:text-[7rem] font-black leading-[1] tracking-tight uppercase mb-6 text-white">
          Expand <br /><span className="text-[#02FFE6]">Your Influence</span>
</h1>
<p className="text-lg md:text-2xl text-gray-300 font-light max-w-lg mb-6 md:mb-0">
          I empower UX designers & digital businesses through visionary design, AI, and storytelling.
        </p>
</div>
<div className="relative -mt-10 md:mt-0 md:ml-20">
<img alt="UX Designer Portrait" className="rounded-3xl shadow-2xl w-44 md:w-72 border-4 border-[#02FFE6] object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80" />
</div>
</div>
<span className="absolute right-0 top-10 w-40 h-40 bg-[#02FFE6]/10 blur-2xl rounded-full -z-10"></span>
</section>

<section className="px-6 md:px-16 py-16 border-t border-gray-800 bg-[#0A0A0A]">
<div className="max-w-3xl mx-auto">
<p className="text-xl md:text-3xl leading-relaxed text-gray-200 font-light">
        As a passionate UX Designer, I blend cutting-edge technology with human-centered design to create products that delight, engage, and empower. My journey spans digital transformation, AI empowerment, and immersive 3D effects—always with an eye for detail, empathy, and impact. Let’s shape the future of experiences together.
      </p>
</div>
</section>

<section className="px-6 md:px-16 py-20 bg-black border-t border-gray-800">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-8 items-start">
<div className="flex-1">
<h2 className="text-2xl md:text-5xl font-black uppercase mb-6 tracking-tight text-[#02FFE6]">Skills</h2>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
<div className="flex flex-col items-start">
<span className="text-3xl md:text-5xl font-extrabold text-white mb-2">UX</span>
<span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">User Experience</span>
</div>
<div className="flex flex-col items-start">
<span className="text-3xl md:text-5xl font-extrabold text-[#02FFE6] mb-2">AI</span>
<span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">AI Empowerment</span>
</div>
<div className="flex flex-col items-start">
<span className="text-3xl md:text-5xl font-extrabold text-white mb-2">3D</span>
<span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">3D East Effect</span>
</div>
<div className="flex flex-col items-start">
<span className="text-3xl md:text-5xl font-extrabold text-[#02FFE6] mb-2">UI</span>
<span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">UI Design</span>
</div>
<div className="flex flex-col items-start">
<span className="text-3xl md:text-5xl font-extrabold text-white mb-2">Brand</span>
<span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">Brand Strategy</span>
</div>
<div className="flex flex-col items-start">
<span className="text-3xl md:text-5xl font-extrabold text-[#02FFE6] mb-2">Data</span>
<span className="text-sm md:text-base text-gray-400 uppercase tracking-wide">Data Vis</span>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-16 py-20 bg-[#0A0A0A] border-t border-gray-800">
<h2 className="text-2xl md:text-5xl font-black uppercase mb-12 tracking-tight text-white">Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="bg-black border border-[#02FFE6] rounded-2xl p-8 flex flex-col items-start shadow-xl min-h-[210px]">
<div className="mb-4 flex items-center">
<svg className="w-8 h-8 text-[#02FFE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 18v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M7 6a4 4 0 1 1 10 0v4a4 4 0 1 1-10 0V6Z"></path></svg>
<span className="ml-3 text-xl font-bold">App Design</span>
</div>
<p className="text-gray-400 text-sm">Mobile & cross-platform experiences that users love.</p>
</div>
<div className="bg-black border border-[#02FFE6] rounded-2xl p-8 flex flex-col items-start shadow-xl min-h-[210px]">
<div className="mb-4 flex items-center">
<svg className="w-8 h-8 text-[#02FFE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7h16"></path></svg>
<span className="ml-3 text-xl font-bold">Web Design</span>
</div>
<p className="text-gray-400 text-sm">Seamless, high-conversion digital interfaces for the web.</p>
</div>
<div className="bg-black border border-[#02FFE6] rounded-2xl p-8 flex flex-col items-start shadow-xl min-h-[210px]">
<div className="mb-4 flex items-center">
<svg className="w-8 h-8 text-[#02FFE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10h18M9 21V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14"></path></svg>
<span className="ml-3 text-xl font-bold">Back-end Design</span>
</div>
<p className="text-gray-400 text-sm">Robust, scalable systems with intuitive admin tools.</p>
</div>
<div className="bg-black border border-[#02FFE6] rounded-2xl p-8 flex flex-col items-start shadow-xl min-h-[210px]">
<div className="mb-4 flex items-center">
<svg className="w-8 h-8 text-[#02FFE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path></svg>
<span className="ml-3 text-xl font-bold">Data Visualization</span>
</div>
<p className="text-gray-400 text-sm">Transforming data into compelling, actionable stories.</p>
</div>
<div className="bg-black border border-[#02FFE6] rounded-2xl p-8 flex flex-col items-start shadow-xl min-h-[210px]">
<div className="mb-4 flex items-center">
<svg className="w-8 h-8 text-[#02FFE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="7"></rect><path d="M16 3v4M8 3v4"></path></svg>
<span className="ml-3 text-xl font-bold">Large Screen Design</span>
</div>
<p className="text-gray-400 text-sm">Immersive dashboards & command centers for enterprises.</p>
</div>
<div className="bg-black border border-[#02FFE6] rounded-2xl p-8 flex flex-col items-start shadow-xl min-h-[210px]">
<div className="mb-4 flex items-center">
<svg className="w-8 h-8 text-[#02FFE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"></path></svg>
<span className="ml-3 text-xl font-bold">Brand Design</span>
</div>
<p className="text-gray-400 text-sm">Distinctive identities for lasting digital impact.</p>
</div>
</div>
</section>

<section className="px-6 md:px-16 py-20 bg-black border-t border-gray-800">
<h2 className="text-2xl md:text-5xl font-black uppercase mb-12 tracking-tight text-[#02FFE6]">Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

<div className="rounded-3xl overflow-hidden shadow-2xl bg-[#121212] flex flex-col">
<img alt="Case Study 1" className="object-cover h-80 w-full" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" />
<div className="p-8">
<h3 className="text-2xl font-bold mb-3 text-white">AI-powered Banking App</h3>
<p className="text-gray-400 text-base">Designing seamless, secure, and delightful mobile banking experiences with real-time AI insights.</p>
</div>
</div>

<div className="rounded-3xl overflow-hidden shadow-2xl bg-[#18181B] flex flex-col mt-10 md:mt-0">
<img alt="Case Study 2" className="object-cover h-80 w-full" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" />
<div className="p-8">
<h3 className="text-2xl font-bold mb-3 text-white">3D Data Visualization Platform</h3>
<p className="text-gray-400 text-base">Transforming complex data into immersive stories for global enterprises.</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-16 py-16 bg-[#0A0A0A] border-t border-gray-800">
<h2 className="text-2xl md:text-5xl font-black uppercase mb-12 tracking-tight text-white">Partners</h2>
<div className="flex flex-wrap justify-center gap-10 items-center max-w-5xl mx-auto">
<img alt="Microsoft" className="h-10 grayscale opacity-70 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />
<img alt="Google" className="h-10 grayscale opacity-70 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
<img alt="IBM" className="h-10 grayscale opacity-70 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" />
<img alt="Apple" className="h-10 grayscale opacity-70 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" />
<img alt="Spotify" className="h-10 grayscale opacity-70 hover:opacity-100 transition" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_horizontal_black.jpg" />
</div>
</section>

<section className="px-6 md:px-16 py-20 bg-black border-t border-gray-800">
<h2 className="text-2xl md:text-5xl font-black uppercase mb-12 tracking-tight text-[#02FFE6]">Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<div className="bg-[#18181B] rounded-2xl p-8 flex flex-col items-start shadow-lg relative">
<div className="flex items-center mb-6">
<img alt="Client Avatar" className="w-14 h-14 rounded-full border-2 border-[#02FFE6] object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" />
<span className="ml-4 text-lg font-bold text-white">Alexei S.</span>
</div>
<div className="mb-4">
<svg className="w-7 h-7 text-[#02FFE6]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 17A5 5 0 0 1 2 12V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H7.17zm7 0A5 5 0 0 1 9 12V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5h-2.83z"></path></svg>
</div>
<p className="text-gray-300 text-lg">“Brilliant! The data visualization dashboard made our analytics actionable and beautiful. The attention to detail is world-class.”</p>
</div>

<div className="bg-[#121212] rounded-2xl p-8 flex flex-col items-start shadow-lg relative md:-mt-14">
<div className="flex items-center mb-6">
<img alt="Client Avatar" className="w-14 h-14 rounded-full border-2 border-[#02FFE6] object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" />
<span className="ml-4 text-lg font-bold text-white">Dana L.</span>
</div>
<div className="mb-4">
<svg className="w-7 h-7 text-[#02FFE6]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 17A5 5 0 0 1 2 12V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H7.17zm7 0A5 5 0 0 1 9 12V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5h-2.83z"></path></svg>
</div>
<p className="text-gray-300 text-lg">“Working together was inspiring. Each prototype felt like a leap in innovation, and communication was always superb.”</p>
</div>

<div className="bg-[#18181B] rounded-2xl p-8 flex flex-col items-start shadow-lg relative">
<div className="flex items-center mb-6">
<img alt="Client Avatar" className="w-14 h-14 rounded-full border-2 border-[#02FFE6] object-cover" src="https://randomuser.me/api/portraits/men/65.jpg" />
<span className="ml-4 text-lg font-bold text-white">Zhang Wei</span>
</div>
<div className="mb-4">
<svg className="w-7 h-7 text-[#02FFE6]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 17A5 5 0 0 1 2 12V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H7.17zm7 0A5 5 0 0 1 9 12V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5h-2.83z"></path></svg>
</div>
<p className="text-gray-300 text-lg">“The brand identity captured our vision perfectly. We now stand out in a crowded market. Highly recommended.”</p>
</div>
</div>
</section>

<section className="px-6 md:px-16 py-24 border-t border-gray-800 bg-[#02FFE6]">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<h2 className="text-black text-4xl md:text-[6rem] font-black leading-[1] mb-10 uppercase tracking-tight text-center">
        Let’s <span className="text-white bg-black px-4 py-1 rounded-lg rotate-2 inline-block">Collaborate!</span>
</h2>
<p className="text-black text-lg md:text-2xl text-center font-light mb-6">
        Open for new projects, speaking, and creative partnerships. <br />
<span className="inline-block bg-black text-[#02FFE6] px-3 py-1 rounded-full mt-3 text-base md:text-xl font-bold">hello@uxinfluence.dev</span>
</p>
<div className="flex gap-6 mt-8">
<a className="text-black hover:text-white hover:bg-black transition px-4 py-2 rounded-full border border-black text-lg font-bold" href="https://www.linkedin.com/">LinkedIn</a>
<a className="text-black hover:text-white hover:bg-black transition px-4 py-2 rounded-full border border-black text-lg font-bold" href="https://twitter.com/">Twitter</a>
<a className="text-black hover:text-white hover:bg-black transition px-4 py-2 rounded-full border border-black text-lg font-bold" href="https://dribbble.com/">Dribbble</a>
</div>
</div>
</section>

    </>
  );
}
