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
      

<nav className="w-full border-b border-stone-200/60 sticky top-0 z-50 bg-[#FDFCF8]/90 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-stone-900 text-[#FDFCF8] flex items-center justify-center font-serif font-medium text-lg rounded-sm">M</div>
<span className="font-serif font-medium text-lg tracking-tight text-stone-900">Moravian Music Foundation</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Collections</a>
<a className="hover:text-stone-900 transition-colors" href="#">Research</a>
<a className="hover:text-stone-900 transition-colors" href="#">Events</a>
<a className="text-stone-900" href="#">About</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-stone-300 text-sm font-medium hover:bg-stone-50 transition-colors">
<span>Support</span>
</button>
</div>
</nav>

<main className="w-full">

<section className="relative pt-24 pb-20 md:pt-32 md:pb-28 max-w-7xl mx-auto px-6">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100/50 via-transparent to-transparent"></div>
<div className="max-w-4xl">
<h6 className="text-sm uppercase tracking-widest text-[#7F1D1D] font-medium mb-6">Established 1956</h6>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight font-medium text-stone-900 mb-8">
                    About the Moravian <br/> <span className="italic text-stone-700">Music Foundation</span>
</h1>
<p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light max-w-2xl">
                    Preserving, sharing, and celebrating the musical culture of Moravians to inspire joy and understanding in a modern world.
                </p>
</div>
</section>

<section className="py-16 md:py-24 border-t border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="space-y-6">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 font-medium">
                        A custodian of musical heritage
                    </h2>
<div className="space-y-6 text-lg text-stone-600 leading-relaxed">
<p>
                            Founded in 1956, the Moravian Music Foundation is the premier institution dedicated to the preservation and cultivation of the musical heritage of the Moravian Church in America. Our archives hold treasures that date back centuries—manuscripts that tell the story of a community where music was the heartbeat of daily life.
                        </p>
<p>
                            We are not merely an archive; we are a bridge connecting historical traditions with contemporary scholarship and performance. Through meticulous preservation and active education, we ensure that these voices from the past continue to resonate today.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-[#7F1D1D] font-medium hover:opacity-80 transition-opacity group" href="#">
                            Explore our history
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>
</div>

<div className="relative w-full aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border border-stone-200 group">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 19px, #000 20px)'}}></div>
<div className="z-10 flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7F1D1D]">
<span className="iconify" data-icon="lucide:play" data-inline="false" data-width="24" style={{marginLeft: '4px'}}></span>
</div>
<span className="text-stone-500 font-medium text-sm tracking-wide">Watch: Our Story</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-stone-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#FDFCF8] p-10 rounded-lg border border-stone-200 shadow-sm hover:border-stone-300 transition-colors">
<div className="w-10 h-10 mb-6 text-[#7F1D1D]">
<span className="iconify" data-icon="lucide:flag" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 font-medium mb-4 tracking-tight">Our Mission</h3>
<p className="text-stone-600 leading-relaxed text-lg">
                            To preserve, share, and celebrate the musical culture of Moravians. We strive to make this rich heritage accessible to scholars, musicians, and the general public worldwide.
                        </p>
</div>

<div className="bg-[#FDFCF8] p-10 rounded-lg border border-stone-200 shadow-sm hover:border-stone-300 transition-colors">
<div className="w-10 h-10 mb-6 text-[#7F1D1D]">
<span className="iconify" data-icon="lucide:telescope" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="font-serif text-2xl text-stone-900 font-medium mb-4 tracking-tight">Our Vision</h3>
<p className="text-stone-600 leading-relaxed text-lg">
                            To be the leading resource for Moravian music, fostering a world where this unique repertoire is studied, performed, and appreciated as a vital part of global music history.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 font-medium mb-4">Core Initiatives</h2>
<p className="text-stone-600 text-lg">A multifaceted approach to sustaining musical culture.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">

<div className="flex flex-col items-start group">
<div className="mb-5 p-3 rounded-md bg-stone-100 text-stone-900 group-hover:bg-[#7F1D1D] group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:archive" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-medium text-lg text-stone-900 mb-2">Preserve</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Safeguarding thousands of manuscripts and rare imprints in our climate-controlled vaults.
                        </p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-5 p-3 rounded-md bg-stone-100 text-stone-900 group-hover:bg-[#7F1D1D] group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:share-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-medium text-lg text-stone-900 mb-2">Share</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Distributing modern editions of historical works to choirs, orchestras, and libraries.
                        </p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-5 p-3 rounded-md bg-stone-100 text-stone-900 group-hover:bg-[#7F1D1D] group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:music-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-medium text-lg text-stone-900 mb-2">Celebrate</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Organizing festivals and concerts that bring the music to life for modern audiences.
                        </p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-5 p-3 rounded-md bg-stone-100 text-stone-900 group-hover:bg-[#7F1D1D] group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-medium text-lg text-stone-900 mb-2">Educate</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Providing lectures, workshops, and scholarly resources for students and researchers.
                        </p>
</div>

<div className="flex flex-col items-start group">
<div className="mb-5 p-3 rounded-md bg-stone-100 text-stone-900 group-hover:bg-[#7F1D1D] group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:library" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-medium text-lg text-stone-900 mb-2">Provide Access</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Digitizing collections to ensure global accessibility for all who wish to learn.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-stone-200/60 bg-stone-50/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="flex flex-col">
<span className="font-serif text-4xl md:text-5xl text-stone-900 font-medium mb-2 tracking-tight">10,000+</span>
<span className="text-stone-500 font-medium text-sm uppercase tracking-wide">Musical Scores</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-4xl md:text-5xl text-stone-900 font-medium mb-2 tracking-tight">1956</span>
<span className="text-stone-500 font-medium text-sm uppercase tracking-wide">Founded</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-4xl md:text-5xl text-stone-900 font-medium mb-2 tracking-tight">2M+</span>
<span className="text-stone-500 font-medium text-sm uppercase tracking-wide">Pages Preserved</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-4xl md:text-5xl text-stone-900 font-medium mb-2 tracking-tight">Global</span>
<span className="text-stone-500 font-medium text-sm uppercase tracking-wide">Research Network</span>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-[#FDFCF8] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div className="space-y-4">
<h4 className="font-serif text-2xl font-medium tracking-tight">Moravian Music Foundation</h4>
<p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                            Dedicated to the preservation, study, and publication of the music of the Moravians.
                        </p>
</div>
<div className="flex flex-col gap-3 text-sm text-stone-300">
<span className="font-medium text-white mb-2">Explore</span>
<a className="hover:text-white transition-colors" href="#">Our History</a>
<a className="hover:text-white transition-colors" href="#">Digital Archives</a>
<a className="hover:text-white transition-colors" href="#">Support the Mission</a>
</div>
<div className="flex flex-col gap-3 text-sm text-stone-300">
<span className="font-medium text-white mb-2">Contact</span>
<p>457 S. Church Street<br/>Winston-Salem, NC 27101</p>
<a className="hover:text-white transition-colors" href="mailto:info@moravianmusic.org">info@moravianmusic.org</a>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2023 Moravian Music Foundation. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-300" href="#">Privacy Policy</a>
<a className="hover:text-stone-300" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
