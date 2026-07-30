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
      
        // Initialize Lucide icons
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileCloseBtn = document.getElementById('mobile-close-btn');
        const mobileOverlay = document.getElementById('mobile-overlay');

        function openMobileMenu() {
            mobileOverlay.style.transform = 'translateX(0)';
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileOverlay.style.transform = 'translateX(100%)';
            document.body.style.overflow = 'auto';
        }

        mobileMenuBtn.addEventListener('click', openMobileMenu);
        mobileCloseBtn.addEventListener('click', closeMobileMenu);

        // Close overlay when clicking on overlay links
        const overlayLinks = mobileOverlay.querySelectorAll('a');
        overlayLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
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
      

<nav className="sticky top-0 backdrop-blur-sm border-b z-50 bg-white/95 border-neutral-100" style={{animation: `slideDown 0.6s ease-out`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0" style={{animation: `fadeIn 0.8s ease-out 0.2s both`}}>
<div className="text-xl font-semibold tracking-tight text-neutral-900">NFTForge</div>
</div>

<div className="hidden md:flex items-center space-x-8" style={{animation: `fadeIn 0.8s ease-out 0.4s both`}}>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Features</a>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Pricing</a>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Customer Voice</a>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">FAQs</a>
</div>

<div className="hidden md:flex items-center space-x-4" style={{animation: `fadeIn 0.8s ease-out 0.6s both`}}>
<div className="relative">
<select className="appearance-none bg-transparent text-sm pr-6 focus:outline-none cursor-pointer transition-colors duration-200 text-neutral-600 hover:text-neutral-900">
<option>English</option>
<option>日本語</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a className="transition-colors duration-200 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Login</a>
<a className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-800" href="#">Sign up</a>
</div>

<div className="md:hidden" style={{animation: `fadeIn 0.8s ease-out 0.6s both`}}>
<button className="transition-colors duration-200 text-neutral-600 hover:text-neutral-900" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden" id="mobile-overlay">
<div className="flex flex-col h-full">

<div className="flex justify-between items-center p-6 border-b border-neutral-100">
<div className="text-xl font-semibold tracking-tight text-neutral-900">NFTForge</div>
<button className="transition-colors duration-200 text-neutral-600 hover:text-neutral-900" id="mobile-close-btn">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 px-6 py-8 flex flex-col justify-between">

<div className="space-y-8">
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">Features</a>
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">Pricing</a>
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">Customer Voice</a>
<a className="block text-2xl font-medium transition-colors duration-200 text-neutral-900 hover:text-neutral-600" href="#">FAQs</a>
</div>

<div className="space-y-6">

<div className="flex items-center justify-between py-4 border-t border-neutral-100">
<span className="text-lg font-medium text-neutral-900">Language</span>
<select className="text-lg font-medium focus:outline-none text-neutral-600 bg-transparent">
<option>English</option>
<option>日本語</option>
</select>
</div>

<div className="space-y-4">
<a className="block text-center py-3 text-lg font-medium transition-colors duration-200 text-neutral-600 hover:text-neutral-900" href="#">Login</a>
<a className="block text-center py-3 rounded-lg text-lg font-medium transition-colors duration-200 bg-neutral-900 text-white hover:bg-neutral-800" href="#">Sign up</a>
</div>
</div>
</div>
</div>
</div>

<section className="pt-16 pb-20 lg:pt-24 lg:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-7">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-neutral-900" style={{animation: `slideUp 0.8s ease-out 0.2s both`}}>
                        NFTs made easy for <span className="text-transparent bg-gradient-to-r bg-clip-text from-neutral-900 to-neutral-600">everyone</span>
</h1>
<p className="mt-6 text-lg leading-relaxed max-w-2xl text-neutral-600" style={{animation: `slideUp 0.8s ease-out 0.4s both`}}>
                        A no-code platform to create, sell, and manage NFTs — complete with payments, CRM, and multilingual support.
                    </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4" style={{animation: `slideUp 0.8s ease-out 0.6s both`}}>
<button className="px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl bg-neutral-900 text-white hover:bg-neutral-800">
                            Try for free
                        </button>
<button className="border px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400">
                            Request a demo
                        </button>
</div>
<div className="mt-12 flex items-center space-x-8" style={{animation: `fadeIn 0.8s ease-out 0.8s both`}}>
<div className="text-center">
<div className="text-2xl font-semibold text-neutral-900">10K+</div>
<div className="text-sm text-neutral-600">NFTs Created</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-neutral-900">500+</div>
<div className="text-sm text-neutral-600">Active Users</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-neutral-900">50+</div>
<div className="text-sm text-neutral-600">Countries</div>
</div>
</div>
</div>

<div className="lg:col-span-5 mt-12 lg:mt-0" style={{animation: `slideIn 0.8s ease-out 0.4s both`}}>
<div className="relative">

<div className="relative z-10 transform rotate-3 hover:rotate-6 transition-transform duration-300">
<div className="rounded-2xl shadow-2xl p-4 border bg-white border-neutral-100">
<img alt="NFT" className="w-full h-48 object-cover rounded-xl" src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=300&h=300&fit=crop&crop=center" />
<div className="mt-4">
<h3 className="font-semibold text-neutral-900">Cosmic Dreams #1</h3>
<p className="text-sm mt-1 text-neutral-600">0.5 ETH</p>
</div>
</div>
</div>
<div className="absolute top-8 -left-4 transform -rotate-6 hover:-rotate-12 transition-transform duration-300 z-20">
<div className="rounded-2xl shadow-xl p-4 border w-48 bg-white border-neutral-100">
<img alt="NFT" className="w-full h-32 object-cover rounded-xl" src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=200&h=200&fit=crop&crop=center" />
<div className="mt-3">
<h3 className="font-semibold text-sm text-neutral-900">Digital Art #42</h3>
<p className="text-xs mt-1 text-neutral-600">1.2 ETH</p>
</div>
</div>
</div>
<div className="absolute -top-4 right-8 transform rotate-12 hover:rotate-18 transition-transform duration-300 z-30">
<div className="rounded-2xl shadow-xl p-4 border w-40 bg-white border-neutral-100">
<img alt="NFT" className="w-full h-24 object-cover rounded-xl" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=160&h=160&fit=crop&crop=center" />
<div className="mt-2">
<h3 className="font-semibold text-xs text-neutral-900">Neon Wave</h3>
<p className="text-xs text-neutral-600">0.8 ETH</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t bg-neutral-50 border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

<div className="lg:col-span-2">
<div className="text-xl font-semibold tracking-tight text-neutral-900 mb-4">NFTForge</div>
<p className="text-neutral-600 leading-relaxed mb-6 max-w-md">
                        Empowering creators worldwide with the simplest platform to create, sell, and manage NFTs without any technical knowledge.
                    </p>
<div className="flex space-x-4">
<a className="transition-colors duration-200 text-neutral-400 hover:text-neutral-600" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="transition-colors duration-200 text-neutral-400 hover:text-neutral-600" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
<a className="transition-colors duration-200 text-neutral-400 hover:text-neutral-600" href="#">
<svg className="lucide lucide-sticky-note w-5 h-5" data-lucide="sticky-note" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</a>
<a className="transition-colors duration-200 text-neutral-400 hover:text-neutral-600" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="transition-colors duration-200 text-neutral-400 hover:text-neutral-600" href="#">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M3.57 1.328c-.75 0-1.37.62-1.37 1.375 0 .755.62 1.375 1.37 1.375h.56c.75 0 1.37-.62 1.37-1.375 0-.755-.62-1.375-1.37-1.375H3.57zm17.87 0c.75 0 1.37.62 1.37 1.375 0 .755-.62 1.375-1.37 1.375h-.56c-.75 0-1.37-.62-1.37-1.375 0-.755.62-1.375 1.37-1.375h.56zM2.2 22.672c-.75 0-1.37-.62-1.37-1.375V5.453c0-.755.62-1.375 1.37-1.375h19.6c.75 0 1.37.62 1.37 1.375v15.844c0 .755-.62 1.375-1.37 1.375H2.2z"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="font-semibold text-neutral-900 mb-4">Product</h3>
<ul className="space-y-3">
<li className=""><a className="transition-colors duration-200 hover:text-neutral-900 text-sm text-neutral-600" href="#">Features</a></li>
<li className=""><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Pricing</a></li>
<li className=""><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">API</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Integrations</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Changelog</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-neutral-900 mb-4">Resources</h3>
<ul className="space-y-3">
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Documentation</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Tutorials</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Blog</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Community</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Status</a></li>
</ul>
</div>

<div>
<h3 className="font-semibold text-neutral-900 mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">About</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Press</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Contact</a></li>
<li><a className="transition-colors duration-200 text-sm text-neutral-600 hover:text-neutral-900" href="#">Partners</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 mt-12 flex flex-col md:flex-row justify-between items-center border-neutral-200">
<div className="text-sm text-neutral-500">
                    © 2024 NFTForge. All rights reserved.
                </div>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="transition-colors duration-200 text-sm text-neutral-500 hover:text-neutral-700" href="#">Privacy Policy</a>
<a className="transition-colors duration-200 text-sm text-neutral-500 hover:text-neutral-700" href="#">Terms of Service</a>
<a className="transition-colors duration-200 text-sm text-neutral-500 hover:text-neutral-700" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
