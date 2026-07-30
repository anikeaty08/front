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



  lucide.createIcons();
  const trendingBtn=document.getElementById('trending')
  const tooltip=document.getElementById('tooltip')
  trendingBtn.addEventListener('click',()=>{tooltip.classList.toggle('hidden')})

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
      <iframe className="fixed w-full h-screen" frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-jipMLzxI5liMrspqcm4GRWTh" width="100%"></iframe>
<header className="text-center mt-16 px-4 fade-in">
<h1 className="md:text-5xl bg-clip-text text-3xl text-transparent tracking-tight font-playfair bg-gradient-to-r from-blue-300 via-cyan-400 to-fuchsia-500" style={{}}>Explore Your Unique Sound</h1>
<p className="text-lg text-indigo-300 font-geist mt-4" style={{}}>Curating Sounds That Define You</p>
</header>
<main className="w-full max-w-6xl px-4 md:px-0 mt-20 relative">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<section className="relative border border-neutral-400/20 rounded-3xl p-6 md:p-10 overflow-hidden fade-in fade-in-delay-1 hover:border-neutral-400/40 transition-colors duration-300">
<h2 className="text-lg font-medium mb-6 font-geist" style={{}}>Explore</h2>
<div className="flex flex-wrap gap-6">

<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=1080&q=80)]"></div>

<button className="relative diamond w-20 h-20 bg-center ring-1 ring-neutral-300/60 hover:animate-glow focus:outline-none bg-[url(https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=1080&q=80)] bg-cover rounded-xl">
<span className="absolute -left-1/2 -top-6 -rotate-45 origin-bottom-left bg-blue-500 text-white text-xs px-2 py-0.5 rounded-md font-geist" style={{}}>Hot</span>
</button>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1635693206507-1d749cb30ecb?w=1080&q=80)]"></div>
</div>

<div className="md:flex flex-col gap-3 absolute top-1/2 left-full ml-12 -translate-y-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 w-80" id="tooltip">
<h3 className="font-semibold text-white font-geist" style={{}}>Hot Picks</h3>
<p className="text-sm text-indigo-300 leading-relaxed font-geist" style={{}}>Dive into the most popular tracks on SoundFlow right now. These carefully curated beats are dominating playlists and inspiring creators across all platforms.</p>
</div>

<div className="hidden md:block absolute left-full top-[55%] w-12 h-px bg-neutral-400"></div>
</section>

<section className="border border-neutral-400/20 rounded-3xl p-6 md:p-10 overflow-hidden fade-in fade-in-delay-2 hover:border-neutral-400/40 transition-colors duration-300">
<h2 className="text-lg font-medium mb-6 font-geist" style={{}}>Vibe</h2>
<div className="flex flex-wrap gap-6">
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=1080&q=80)]"></div>
</div>
</section>

<section className="border border-neutral-400/20 rounded-3xl p-6 md:p-10 overflow-hidden fade-in fade-in-delay-3 hover:border-neutral-400/40 transition-colors duration-300">
<h2 className="text-lg font-medium mb-6 font-geist" style={{}}>Genre</h2>
<div className="flex flex-wrap gap-6">
<div className="diamond w-20 h-20 bg-center ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-cover rounded-xl bg-[url(https://images.unsplash.com/photo-1635492491273-455af7728453?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-cover rounded-xl bg-[url(https://images.unsplash.com/photo-1676022763096-a1ad12b2e370?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1627037558426-c2d07beda3af?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1651488829517-95af02975dd5?w=1080&q=80)]"></div>
</div>
</section>

<section className="border border-neutral-400/20 rounded-3xl p-6 md:p-10 overflow-hidden fade-in fade-in-delay-4 hover:border-neutral-400/40 transition-colors duration-300">
<h2 className="text-lg font-medium mb-6 font-geist" style={{}}>Your Personal Mix</h2>
<div className="flex flex-wrap gap-6">
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1678565555430-f8640bf41628?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=1080&q=80)]"></div>
<div className="diamond w-20 h-20 bg-center bg-cover rounded-xl ring-1 ring-neutral-400/30 hover:ring-neutral-400/60 transition-all duration-300 cursor-pointer bg-[url(https://images.unsplash.com/photo-1677644334825-0eb411012ac0?w=1080&q=80)]"></div>
</div>
</section>
</div>
</main>
<footer className="mt-24 mb-12 text-indigo-500 text-sm fade-in fade-in-delay-4 font-geist" style={{}}>
  © 2024 SoundFlow. All rights reserved.
</footer>



    </>
  );
}
