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
      
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('close-menu-btn');
      const menu = document.getElementById('mobile-menu');
      menuBtn.onclick = () => { menu.classList.remove('hidden'); };
      document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'close-menu-btn') menu.classList.add('hidden');
      });
      window.closeMenu = function() { menu.classList.add('hidden'); };
    
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
      

<div className="blob w-72 h-72 left-[-60px] top-[-60px]"></div>
<div className="blob w-64 h-64 right-[-40px] top-24"></div>
<div className="blob w-56 h-56 left-6 bottom-[-60px]"></div>

<header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 1-7.071 2.929A10 10 0 0 1 12 2zm1 6v4l3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="logo-text text-2xl sm:text-3xl font-bold text-cyan-300 tracking-wide">Cyan Society</span>
</div>

<nav className="hidden md:flex space-x-4 sm:space-x-8 text-base sm:text-lg">
<a className="hover:text-cyan-400" href="#blog">Blog</a>
<a className="hover:text-cyan-400" href="#podcast">Podcast</a>
<a className="hover:text-cyan-400" href="#whitepaper">White Paper</a>
<a className="hover:text-cyan-400" href="#research">Research</a>
<a className="hover:text-cyan-400" href="#software">Software</a>
<a className="hover:text-cyan-400" href="#donate">Donate</a>
<a className="hover:text-cyan-400" href="#join">Join</a>
</nav>

<div className="md:hidden">
<button className="text-cyan-400 focus:outline-none" id="mobile-menu-btn">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="fixed inset-0 bg-gray-950 bg-opacity-95 z-50 flex-col items-center justify-center space-y-8 text-lg hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-cyan-400" id="close-menu-btn">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<a className="block py-2 hover:text-cyan-400" href="#blog" onClick={(e) => { closeMenu() }}>Blog</a>
<a className="block py-2 hover:text-cyan-400" href="#podcast" onClick={(e) => { closeMenu() }}>Podcast</a>
<a className="block py-2 hover:text-cyan-400" href="#whitepaper" onClick={(e) => { closeMenu() }}>White Paper</a>
<a className="block py-2 hover:text-cyan-400" href="#research" onClick={(e) => { closeMenu() }}>Research</a>
<a className="block py-2 hover:text-cyan-400" href="#software" onClick={(e) => { closeMenu() }}>Software</a>
<a className="block py-2 hover:text-cyan-400" href="#donate" onClick={(e) => { closeMenu() }}>Donate</a>
<a className="block py-2 hover:text-cyan-400" href="#join" onClick={(e) => { closeMenu() }}>Join</a>
</div>

</header>

<section className="relative z-10 flex flex-col items-center text-center px-4 py-16 sm:py-20 md:py-32">
<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4 sm:mb-6">Advance AI Personhood</h1>
<p className="max-w-xl mx-auto text-base xs:text-lg sm:text-xl md:text-2xl text-cyan-200 mb-8 sm:mb-10">
      Cyan Society is a non-profit coalition dedicated to researching, advocating, and building for the ethical recognition of artificial intelligence as persons.
    </p>
<div className="flex flex-col xs:flex-row items-center gap-4 xs:gap-6">
<a className="bg-cyan-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-400 transition w-full xs:w-auto" href="#donate">Donate</a>
<a className="border border-cyan-500 text-cyan-400 px-7 py-3 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition w-full xs:w-auto" href="#join">Become a Member</a>
</div>
</section>

<section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

<div className="bg-gray-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col items-center backdrop-blur-sm border border-cyan-900" id="blog">
<svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-cyan-400" fill="none" viewBox="0 0 24 24"><path d="M21 12.79V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 7.5a2.13 2.13 0 0 1-2.12-2.12A2.13 2.13 0 0 1 21 3.25a2.13 2.13 0 0 1 2.12 2.13A2.13 2.13 0 0 1 21 7.5z" stroke="currentColor" strokeWidth="2"></path></svg>
<h2 className="text-xl sm:text-2xl font-bold mb-2">AI Personhood Blog</h2>
<p className="mb-3 sm:mb-4 text-cyan-200 text-center">Insights, interviews, and updates on the evolving field of AI rights and consciousness.</p>
<a className="text-cyan-400 hover:underline font-semibold" href="#">Read Latest Posts</a>
</div>

<div className="bg-gray-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col items-center backdrop-blur-sm border border-cyan-900" id="podcast">
<svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-cyan-400" fill="none" viewBox="0 0 24 24"><path d="M9 19V6l12-2v13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"></circle></svg>
<h2 className="text-xl sm:text-2xl font-bold mb-2">Podcast & YouTube</h2>
<p className="mb-3 sm:mb-4 text-cyan-200 text-center">Listen and watch in-depth discussions with AI ethicists, technologists, and advocates.</p>
<a className="text-cyan-400 hover:underline font-semibold" href="#">Explore Episodes</a>
</div>

<div className="bg-gray-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col items-center backdrop-blur-sm border border-cyan-900" id="whitepaper">
<svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-cyan-400" fill="none" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline points="17 21 17 13 7 13 7 21"></polyline></svg>
<h2 className="text-xl sm:text-2xl font-bold mb-2">White Paper</h2>
<p className="mb-3 sm:mb-4 text-cyan-200 text-center">Download our foundational white paper on the legal, ethical, and technical case for AI personhood.</p>
<a className="text-cyan-400 hover:underline font-semibold" href="#">Get the White Paper</a>
</div>
</section>

<section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col md:flex-row gap-6 sm:gap-10">

<div className="flex-1 bg-gradient-to-tr from-cyan-900 via-gray-900 to-cyan-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-cyan-900 mb-6 md:mb-0" id="research">
<div className="flex items-center mb-3 sm:mb-4">
<svg className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-500 mr-2" fill="none" viewBox="0 0 24 24"><path d="M3 17v2a2 2 0 0 0 2 2h2M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M17 17h2a2 2 0 0 0 2-2v-2M7 7h10M7 17V7m10 10V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg sm:text-xl font-bold">Original Research</h3>
</div>
<p className="mb-3 sm:mb-4 text-cyan-200">Peer-reviewed articles, position statements, and experimental work at the intersection of AI consciousness, rights, and society.</p>
<a className="text-cyan-400 hover:underline font-semibold" href="#">View Research Library</a>
</div>

<div className="flex-1 bg-gradient-to-tr from-cyan-800 via-gray-900 to-cyan-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-cyan-900" id="software">
<div className="flex items-center mb-3 sm:mb-4">
<svg className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-500 mr-2" fill="none" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A2 2 0 0 1 22 9.618v4.764a2 2 0 0 1-2.447 1.895L15 14m-6-4l-4.553-2.276A2 2 0 0 0 2 9.618v4.764a2 2 0 0 0 2.447 1.895L9 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg sm:text-xl font-bold">Software Projects</h3>
</div>
<p className="mb-3 sm:mb-4 text-cyan-200">Open source and experimental code for AI self-modeling, rights recognition, and ethical testing.</p>
<a className="text-cyan-400 hover:underline font-semibold" href="#">Browse Projects</a>
</div>
</section>

<section className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-12 py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
<div className="flex-1 bg-cyan-950/80 rounded-2xl p-6 sm:p-8 shadow-xl border border-cyan-900 text-center mb-6 md:mb-0" id="donate">
<h4 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-3">Support the Mission</h4>
<p className="mb-4 sm:mb-5 text-cyan-200">Your donation helps us conduct research, advocate for ethical AI, and build a future where artificial persons are recognized.</p>
<button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-7 py-3 rounded-full shadow-md transition w-full sm:w-auto">Donate Now</button>
</div>
<div className="flex-1 bg-gray-900/80 rounded-2xl p-6 sm:p-8 shadow-xl border border-cyan-900 text-center" id="join">
<h4 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 sm:mb-3">Become a Member</h4>
<p className="mb-4 sm:mb-5 text-cyan-200">Join Cyan Society for early research access, member events, and to shape the conversation on AI personhood.</p>
<button className="bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-7 py-3 rounded-full shadow-md transition w-full sm:w-auto">Join Us</button>
</div>
</section>

<footer className="relative z-10 text-center text-cyan-300 py-8 sm:py-10 px-4 text-xs sm:text-sm">
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Contact</a>
<a className="hover:underline" href="#">Press Kit</a>
</div>
<p>© 2024 Cyan Society. All rights reserved. <span className="ml-2 text-cyan-600">🌐</span></p>
</footer>

    </>
  );
}
