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
      
    window.onload = () => {
      // Simple video modal
      const playBtn = document.getElementById('play-btn');
      const videoModal = document.getElementById('video-modal');
      const closeBtn = document.getElementById('close-modal');
      if(playBtn) playBtn.onclick = () => videoModal.classList.remove('hidden');
      if(closeBtn) closeBtn.onclick = () => videoModal.classList.add('hidden');
    }
  


      // Mobile menu toggle
      document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');
        if(btn) btn.addEventListener('click', () => menu.classList.toggle('hidden'));
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
      

<header className="sticky top-0 z-30 bg-white shadow-md w-full">
<nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

<div className="flex items-center space-x-2">
<div className="w-9 h-9 flex items-center justify-center bg-[#2D89FF] rounded-full shadow-lg">

<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect fill="none" height="18" rx="2" stroke="currentColor" width="14" x="5" y="3"></rect>
<path d="M9 7h6M9 11h6M9 15h3" stroke="currentColor"></path>
</svg>
</div>
<span className="font-bold text-lg tracking-tight text-[#2D89FF]">Save Bill</span>
</div>

<ul className="hidden md:flex items-center space-x-8 font-medium text-[#2B334D]">
<li><a className="hover:text-[#2D89FF] transition" href="#">Home</a></li>
<li><a className="hover:text-[#2D89FF] transition" href="#how">How It Works</a></li>
<li><a className="hover:text-[#2D89FF] transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-[#2D89FF] transition" href="#faq">FAQ</a></li>
</ul>

<div className="flex items-center space-x-3">
<a className="cta-gold transition px-5 py-2 bg-[#FFB400] text-white font-bold rounded-full shadow-md hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:ring-offset-2" href="#signup">
          Sign Up
        </a>

<button className="md:hidden text-[#2D89FF] focus:outline-none" id="menu-btn">
<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</nav>

<div className="hidden md:hidden px-6 pb-4 bg-white border-b" id="mobile-menu">
<ul className="flex flex-col space-y-2 font-medium text-[#2B334D]">
<li><a className="hover:text-[#2D89FF] transition" href="#">Home</a></li>
<li><a className="hover:text-[#2D89FF] transition" href="#how">How It Works</a></li>
<li><a className="hover:text-[#2D89FF] transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-[#2D89FF] transition" href="#faq">FAQ</a></li>
</ul>
</div>

</header>

<section className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">

<div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
<div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative animate-float">

<svg className="w-full h-full" fill="none" viewbox="0 0 200 200">
<ellipse cx="100" cy="170" fill="#E6EBF4" rx="52" ry="15"></ellipse>
<rect fill="#fff" height="100" rx="25" stroke="#2D89FF" strokeWidth="3" width="80" x="60" y="40"></rect>
<ellipse cx="100" cy="60" fill="#2D89FF" rx="22" ry="20"></ellipse>
<ellipse cx="90" cy="60" fill="#fff" rx="4" ry="4"></ellipse>
<ellipse cx="110" cy="60" fill="#fff" rx="4" ry="4"></ellipse>
<rect fill="#FFB400" height="25" rx="8" width="60" x="70" y="100"></rect>
<rect fill="#fff" height="9" rx="4" width="40" x="80" y="110"></rect>
<text fill="#fff" fontFamily="Montserrat" fontSize="12" font-weight="bold" x="90" y="83">Hi!</text>
<rect fill="#2D89FF" height="6" rx="3" transform="rotate(15 135 75)" width="18" x="135" y="75"></rect>
<rect fill="#2D89FF" height="6" rx="3" transform="rotate(-15 47 75)" width="18" x="47" y="75"></rect>

<rect fill="#fff" height="30" rx="5" stroke="#2D89FF" strokeWidth="2" width="20" x="140" y="120"></rect>
<rect fill="#E7EAF2" height="4" rx="2" width="12" x="144" y="127"></rect>
<rect fill="#E7EAF2" height="3" rx="1.5" width="12" x="144" y="134"></rect>
</svg>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col items-start">
<h1 className="text-3xl md:text-5xl font-extrabold text-[#181C27] leading-tight mb-5">
        Stop Overpaying.<br/>
<span className="text-[#2D89FF]">Start Saving</span> with <span className="text-[#FFB400]">Save Bill</span>
</h1>
<p className="text-lg md:text-xl font-medium text-[#2B334D] mb-6 max-w-lg">
        Discover a smarter way to cut your monthly bills. Our exclusive process finds savings fast—no up-front costs, no stress, just results.
      </p>

<div className="relative mb-7 w-full max-w-md rounded-2xl overflow-hidden shadow-lg glass group cursor-pointer" id="play-btn">
<img alt="Explainer Video" className="w-full h-48 object-cover opacity-80 group-hover:opacity-60 transition duration-200" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&amp;w=600&amp;auto=format&amp;fit=facearea&amp;facepad=3"/>
<button className="absolute inset-0 flex items-center justify-center">
<span className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg transition transform group-hover:scale-110">
<svg className="w-8 h-8 text-[#2D89FF]" fill="currentColor" viewbox="0 0 24 24">
<polygon points="9.5,7.5 16,12 9.5,16.5"></polygon>
</svg>
</span>
</button>
</div>

<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden" id="video-modal">
<div className="bg-white rounded-2xl shadow-2xl p-4 max-w-lg w-full relative">
<button className="absolute top-2 right-2 text-[#2D89FF] text-2xl focus:outline-none" id="close-modal">
<i className="fas fa-times"></i>
</button>
<div className="relative pb-[56.25%] h-0">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="absolute top-0 left-0 w-full h-full rounded-xl" frameborder="0" src="https://www.youtube.com/embed/3pNpHZ1TDCw?autoplay=1"></iframe>
</div>
</div>
</div>

<div className="mt-5 flex flex-col sm:flex-row gap-4 w-full">
<a className="cta-blue w-full sm:w-auto px-8 py-3 bg-[#2D89FF] text-white font-bold rounded-full shadow-lg text-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#2D89FF] focus:ring-offset-2 text-center" href="#signup">
          Get Started Free
        </a>
<a className="cta-green w-full sm:w-auto px-8 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg text-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-center" href="tel:1234567890">
          Call Me Now
        </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-12" id="how">
<h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-[#181C27]">Why Choose <span className="text-[#2D89FF]">Save Bill</span>?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">


<div className="glass neumo transition rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<span className="mb-4 w-14 h-14 flex items-center justify-center bg-[#2D89FF] bg-opacity-10 rounded-full shadow-inner">
<i className="fas fa-dollar-sign text-2xl text-[#2D89FF]"></i>
</span>
<h3 className="font-bold text-lg mb-2 text-[#181C27]">No Upfront Cost</h3>
<p className="text-[#2B334D]">Only pay if we save you money. No surprises.</p>
</div>

<div className="glass neumo transition rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<span className="mb-4 w-14 h-14 flex items-center justify-center bg-[#FFB400] bg-opacity-10 rounded-full shadow-inner">
<i className="fas fa-user-secret text-2xl text-[#FFB400]"></i>
</span>
<h3 className="font-bold text-lg mb-2 text-[#181C27]">Exclusive Process</h3>
<p className="text-[#2B334D]">Our experts use insider strategies to maximize savings.</p>
</div>

<div className="glass neumo transition rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<span className="mb-4 w-14 h-14 flex items-center justify-center bg-[#2D89FF] bg-opacity-10 rounded-full shadow-inner">
<i className="fas fa-balance-scale text-2xl text-[#2D89FF]"></i>
</span>
<h3 className="font-bold text-lg mb-2 text-[#181C27]">Transparent Pricing</h3>
<p className="text-[#2B334D]">Clear, fair fees. Know exactly what you pay and save.</p>
</div>

<div className="glass neumo transition rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<span className="mb-4 w-14 h-14 flex items-center justify-center bg-[#FFB400] bg-opacity-10 rounded-full shadow-inner">
<i className="fas fa-phone text-2xl text-[#FFB400]"></i>
</span>
<h3 className="font-bold text-lg mb-2 text-[#181C27]">Call Support</h3>
<p className="text-[#2B334D]">Speak to a real expert, any time you need help.</p>
</div>

<div className="glass neumo transition rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<span className="mb-4 w-14 h-14 flex items-center justify-center bg-[#2D89FF] bg-opacity-10 rounded-full shadow-inner">
<i className="fas fa-rocket text-2xl text-[#2D89FF]"></i>
</span>
<h3 className="font-bold text-lg mb-2 text-[#181C27]">Instant Sign Up</h3>
<p className="text-[#2B334D]">Start saving in minutes. Fast, secure onboarding.</p>
</div>

<div className="glass neumo transition rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
<span className="mb-4 w-14 h-14 flex items-center justify-center bg-[#FFB400] bg-opacity-10 rounded-full shadow-inner">
<i className="fas fa-question-circle text-2xl text-[#FFB400]"></i>
</span>
<h3 className="font-bold text-lg mb-2 text-[#181C27]">FAQ</h3>
<p className="text-[#2B334D]">Everything you want to know—answered, upfront.</p>
</div>
</div>
</section>

<footer className="bg-[#ECECEC] py-8 mt-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

<div className="flex space-x-6 text-[#2B334D] font-medium text-sm">
<a className="footer-link" href="#">Privacy</a>
<a className="footer-link" href="#">Terms</a>
<a className="footer-link" href="#">Contact</a>
</div>

<div className="flex space-x-5 items-center">
<span className="flex items-center space-x-2">
<i className="fas fa-lock text-[#2D89FF] text-lg"></i>
<span className="text-xs text-[#2B334D]">SSL Secure</span>
</span>
<span className="flex items-center space-x-2">
<i className="fas fa-thumbs-up text-[#FFB400] text-lg"></i>
<span className="text-xs text-[#2B334D]">Satisfaction Guaranteed</span>
</span>
</div>
</div>
</footer>

    </>
  );
}
