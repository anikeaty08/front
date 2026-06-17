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
      
<header className="border-b border-gray-100 py-4">
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center">
<div className="text-2xl font-bold text-[#635bff] mr-1">U</div>
<span className="font-medium">Unity Games</span>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#635bff]" href="#">Games</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#635bff]" href="#">Tournaments</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#635bff]" href="#">Leaderboard</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#635bff]" href="#">Community</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#635bff]" href="#">Support</a>
</nav>
<div className="flex space-x-3">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#635bff]">Sign in</button>
<button className="px-4 py-2 bg-[#635bff] rounded-full text-white text-sm font-medium hover:bg-[#8078ff] transition">Start gaming</button>
</div>
</div>
</header>
<main>
<section className="py-20 px-6">
<div className="container mx-auto max-w-6xl">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-5xl font-bold mb-6 leading-tight">Gaming infrastructure for the internet</h1>
<p className="text-xl text-gray-600 mb-8">Millions of players worldwide use Unity Games to play, compete, and win in their favorite games.</p>
<div className="flex flex-wrap gap-4">
<a className="px-6 py-3 bg-[#635bff] rounded-full text-white font-medium hover:bg-[#8078ff] transition" href="#">Start playing</a>
<a className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:border-gray-400 transition" href="#">Contact sales</a>
</div>
</div>
<div className="rounded-lg overflow-hidden shadow-xl">
<img alt="Gaming Platform" className="w-full h-auto" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>
</div>
</div>
</section>
<section className="py-16 px-6 bg-gray-50">
<div className="container mx-auto max-w-6xl">
<h2 className="text-3xl font-bold text-center mb-16">Designed for gamers of all levels</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-200">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-[#635bff]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Faster gaming</h3>
<p className="text-gray-600">Our optimized platform ensures low latency and smooth gameplay across all devices.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-200">
<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-[#635bff]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Secure platform</h3>
<p className="text-gray-600">Advanced security measures protect your account, game progress, and in-game purchases.</p>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm card-hover transition-all duration-200">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-[#635bff]" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Global community</h3>
<p className="text-gray-600">Connect with millions of players worldwide and participate in international tournaments.</p>
</div>
</div>
</div>
</section>
<section className="py-16 px-6">
<div className="container mx-auto max-w-6xl">
<h2 className="text-3xl font-bold mb-2 text-center">Featured Games</h2>
<p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover our curated selection of games across various genres</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-lg overflow-hidden shadow-sm card-hover transition-all duration-200">
<img alt="Cosmic Clash" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-semibold">Cosmic Clash</h3>
<span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Strategy</span>
</div>
<p className="text-gray-600 mb-4">Space strategy with real-time battles and resource management.</p>
<div className="flex justify-between items-center">
<span className="font-medium text-[#635bff]">Free</span>
<button className="px-4 py-2 border border-[#635bff] text-[#635bff] rounded-full text-sm font-medium hover:bg-[#635bff] hover:text-white transition">Play Now</button>
</div>
</div>
</div>
<div className="rounded-lg overflow-hidden shadow-sm card-hover transition-all duration-200">
<img alt="Neon Racers" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2071&amp;q=80"/>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-semibold">Neon Racers</h3>
<span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Racing</span>
</div>
<p className="text-gray-600 mb-4">High-speed futuristic racing game with customizable vehicles.</p>
<div className="flex justify-between items-center">
<span className="font-medium text-[#635bff]">$4.99</span>
<button className="px-4 py-2 border border-[#635bff] text-[#635bff] rounded-full text-sm font-medium hover:bg-[#635bff] hover:text-white transition">Buy Now</button>
</div>
</div>
</div>
<div className="rounded-lg overflow-hidden shadow-sm card-hover transition-all duration-200">
<img alt="Pixel Warriors" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-semibold">Pixel Warriors</h3>
<span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded-full">Fighting</span>
</div>
<p className="text-gray-600 mb-4">Retro fighting game with modern mechanics and pixel art style.</p>
<div className="flex justify-between items-center">
<span className="font-medium text-[#635bff]">Free</span>
<button className="px-4 py-2 border border-[#635bff] text-[#635bff] rounded-full text-sm font-medium hover:bg-[#635bff] hover:text-white transition">Play Now</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="gradient-bg py-16 px-6 text-white">
<div className="container mx-auto max-w-6xl text-center">
<h2 className="text-3xl font-bold mb-6">Ready to start your gaming journey?</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto">Join millions of players and experience the future of online gaming.</p>
<a className="px-6 py-3 bg-white text-[#635bff] rounded-full font-medium hover:bg-gray-100 transition inline-block" href="#">Create free account</a>
</div>
</section>
</main>
<footer className="bg-gray-50 py-12 px-6 border-t border-gray-100">
<div className="container mx-auto max-w-6xl">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center mb-4">
<div className="text-2xl font-bold text-[#635bff] mr-1">U</div>
<span className="font-medium">Unity Games</span>
</div>
<p className="text-gray-600 text-sm">The gaming platform for the internet</p>
</div>
<div>
<h4 className="font-medium mb-4">Products</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-[#635bff]" href="#">Games</a></li>
<li><a className="hover:text-[#635bff]" href="#">Tournaments</a></li>
<li><a className="hover:text-[#635bff]" href="#">Premium Access</a></li>
<li><a className="hover:text-[#635bff]" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-[#635bff]" href="#">Documentation</a></li>
<li><a className="hover:text-[#635bff]" href="#">Support Center</a></li>
<li><a className="hover:text-[#635bff]" href="#">Community</a></li>
<li><a className="hover:text-[#635bff]" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-[#635bff]" href="#">About</a></li>
<li><a className="hover:text-[#635bff]" href="#">Careers</a></li>
<li><a className="hover:text-[#635bff]" href="#">Partners</a></li>
<li><a className="hover:text-[#635bff]" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
<div className="text-sm text-gray-600 mb-4 md:mb-0">© 2023 Unity Games. All rights reserved.</div>
<div className="flex space-x-6">
<a className="text-gray-600 hover:text-[#635bff]" href="#">Terms</a>
<a className="text-gray-600 hover:text-[#635bff]" href="#">Privacy</a>
<a className="text-gray-600 hover:text-[#635bff]" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
