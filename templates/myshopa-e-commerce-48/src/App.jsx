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



        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                // Open Menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.classList.add('mobile-menu-open');
                menuIcon.setAttribute('data-icon', 'lucide:x');
                
                // Animate links
                mobileLinks.forEach(link => {
                    link.classList.remove('opacity-0', 'translate-y-4');
                });
            } else {
                // Close Menu
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.classList.remove('mobile-menu-open');
                menuIcon.setAttribute('data-icon', 'lucide:menu');
                
                // Reset links
                mobileLinks.forEach(link => {
                    link.classList.add('opacity-0', 'translate-y-4');
                });
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 transform translate-y-[-100%] animate-[slideDown_0.8s_forwards]">
<style>
            @keyframes slideDown { to { transform: translate(0); } }
        </style>
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">

<a className="flex items-center gap-2.5 group cursor-pointer" href="#">
<div className="relative w-7 h-7 flex items-center justify-center">
<svg className="w-full h-full text-white transform group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logoGrad" x1="0" x2="24" y1="0" y2="24">
<stop stop-color="#FFFFFF"></stop>
<stop offset="1" stop-color="#A3A3A3"></stop>
</lineargradient>
</defs>
<path clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5 8H8.5V11.5H15.5V8ZM8.5 13H11.5V16H8.5V13ZM13 13H15.5V16H13V13Z" fill="url(#logoGrad)" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-white font-medium tracking-tighter text-lg transition-opacity">MyShopa</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition-colors relative group" href="#">
                    How it works
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors relative group" href="#">
                    Pricing
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300" href="https://colourbeerugs.com/">Start Your Store</a>
</div>

<button className="md:hidden flex items-center justify-center w-10 h-10 text-neutral-400 hover:text-white transition-colors focus:outline-none z-50" id="menu-toggle">
<span className="iconify w-6 h-6 transition-transform duration-300" data-icon="lucide:menu" id="menu-icon"></span>
</button>
</div>

<div className="fixed inset-0 bg-neutral-950 z-40 flex flex-col pt-28 px-6 opacity-0 pointer-events-none transition-all duration-300 md:hidden" id="mobile-menu">
<div className="flex flex-col gap-6 text-2xl font-medium text-white">
<a className="mobile-link opacity-0 translate-y-4 transition-all duration-500 delay-100 hover:text-neutral-400" href="#">How it works</a>
<a className="mobile-link opacity-0 translate-y-4 transition-all duration-500 delay-200 hover:text-neutral-400" href="#">Pricing</a>
<a className="mobile-link opacity-0 translate-y-4 transition-all duration-500 delay-300 hover:text-neutral-400" href="#">Login</a>
</div>
<div className="mt-12 w-full h-[1px] bg-white/10 mobile-link opacity-0 translate-y-4 transition-all duration-500 delay-[400ms]"></div>
<div className="mt-8 mobile-link opacity-0 translate-y-4 transition-all duration-500 delay-[500ms]">
<a className="flex w-full items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-lg font-medium hover:bg-neutral-200 active:scale-95 transition-all duration-300" href="https://colourbeerugs.com/">
                    Start Your Store
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
</div>

<div className="mt-auto mb-10 text-sm text-neutral-500 mobile-link opacity-0 translate-y-4 transition-all duration-500 delay-[600ms]">
<p>© 2023 MyShopa Inc.</p>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 blur-[80px] md:blur-[100px] rounded-full animate-blob"></div>
<div className="absolute top-20 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/5 blur-[60px] md:blur-[80px] rounded-full animate-blob" style={{animationDelay: '-5s'}}></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">

<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Global Seller Platform
            </div>

<h1 className="reveal active delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Your Store. Your Link.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-200 text-gradient-anim">Your Customers.</span>
</h1>

<p className="reveal active delay-200 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Launch a private online shop and share it anywhere. Not a marketplace, but a dedicated home for your brand.
            </p>

<div className="reveal active delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95" href="https://colourbeerugs.com/">
                    Start Your Store
                    <span className="iconify group-hover:translate-x-1 transition-transform duration-300" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<button className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white rounded-full font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300 active:scale-95">
                    Login to Dashboard
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto mt-20 px-6 relative reveal active delay-300">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>

<div className="animate-float glass-panel rounded-t-2xl border-b-0 p-1 md:p-2 shadow-2xl shadow-indigo-500/10 group">
<div className="bg-neutral-900 rounded-t-xl aspect-[16/9] md:aspect-[21/9] border border-white/5 overflow-hidden relative flex flex-col items-center justify-center group-hover:border-white/10 transition-colors duration-500">

<video autoplay="" className="w-full h-full object-cover opacity-80 mix-blend-screen scale-105" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-waves-of-purple-light-1186-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-neutral-900/10 z-10"></div>

<div className="absolute z-20 flex flex-col items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300 group/btn">
<span className="iconify text-white ml-1 group-hover/btn:text-white transition-colors" data-fill="white" data-icon="lucide:play" data-width="24"></span>
</div>
<div className="text-xs font-mono text-neutral-400 bg-black/40 px-3 py-1 rounded-full border border-white/5 backdrop-blur-md">
                            myshopa.store/preview
                        </div>
</div>

<div className="absolute inset-0 rounded-t-xl border border-white/5 pointer-events-none z-30"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950/50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Go from idea to sales in minutes</h2>
<p className="text-neutral-400">No coding required. Just sign up and start selling.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group reveal delay-100">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 shadow-lg group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
<span className="iconify text-white group-hover:scale-110 transition-transform duration-300" data-icon="lucide:user-plus" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Subscribe &amp; Create</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs group-hover:text-neutral-300 transition-colors">Claim your unique URL and set up your private vendor account instantly.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group reveal delay-200">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 shadow-lg group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
<span className="iconify text-white group-hover:scale-110 transition-transform duration-300" data-icon="lucide:package-plus" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. Add Your Products</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs group-hover:text-neutral-300 transition-colors">Upload images, set prices, and manage inventory from your dashboard.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group reveal delay-300">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-6 shadow-lg group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500">
<span className="iconify text-white group-hover:scale-110 transition-transform duration-300" data-icon="lucide:send" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Share &amp; Sell</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs group-hover:text-neutral-300 transition-colors">Send your link via WhatsApp, Instagram, or TikTok. Customers buy directly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Stop competing.<br/>Start owning.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Public marketplaces drown you in competition and fees. MyShopa gives you a private space where your brand is the only focus.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors cursor-default">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="20"></span>
                            You own the customer data
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors cursor-default">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="20"></span>
                            No competitor ads on your page
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors cursor-default">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="20"></span>
                            Direct relationship with buyers
                        </div>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 reveal delay-200 hover:scale-[1.02] transition-transform duration-500">
<div className="bg-neutral-950 rounded-xl overflow-hidden">
<div className="grid grid-cols-2 border-b border-white/5">
<div className="p-6 text-center border-r border-white/5 bg-neutral-900/50">
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Marketplaces</span>
</div>
<div className="p-6 text-center bg-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-[shimmer_2s_infinite]"></div>
<span className="text-xs font-semibold text-white uppercase tracking-widest relative z-10">MyShopa</span>
</div>
</div>
<div className="divide-y divide-white/5">
<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-4 text-center text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">Public Listings</div>
<div className="p-4 text-center text-sm text-white font-medium bg-white/[0.02]">Private Store</div>
</div>
<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-4 text-center text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">High Commission</div>
<div className="p-4 text-center text-sm text-white font-medium bg-white/[0.02]">Flat Subscription</div>
</div>
<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-4 text-center text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">Shared Traffic</div>
<div className="p-4 text-center text-sm text-white font-medium bg-white/[0.02]">Your Direct Link</div>
</div>
<div className="grid grid-cols-2 group hover:bg-white/[0.01] transition-colors">
<div className="p-4 text-center text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">Price Wars</div>
<div className="p-4 text-center text-sm text-white font-medium bg-white/[0.02]">Brand Loyalty</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal p-6 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 group cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:bg-neutral-700 transition-all duration-300">
<span className="iconify" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2 group-hover:text-white/90">Private &amp; Secure</h4>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Your store is only accessible to people you share the link with.</p>
</div>

<div className="reveal delay-100 p-6 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 group cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:bg-neutral-700 transition-all duration-300">
<span className="iconify" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2 group-hover:text-white/90">Seller Dashboard</h4>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Manage orders, customers, and products from one simple interface.</p>
</div>

<div className="reveal delay-200 p-6 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 group cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:bg-neutral-700 transition-all duration-300">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2 group-hover:text-white/90">Mobile Optimized</h4>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Your store looks perfect on phones, ideal for social media sharing.</p>
</div>

<div className="reveal delay-300 p-6 rounded-2xl border border-white/5 bg-neutral-900/20 hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-300 group cursor-default">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:bg-neutral-700 transition-all duration-300">
<span className="iconify" data-icon="lucide:credit-card" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-white font-medium mb-2 group-hover:text-white/90">Simple Checkout</h4>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">A frictionless buying experience designed to convert visitors.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900/20"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<span className="iconify text-neutral-600 mx-auto mb-6 hover:text-white transition-colors duration-500" data-icon="lucide:server" data-strokeWidth="1" data-width="48"></span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Built for scale. Built for you.</h2>
<p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                We provide the industrial-grade infrastructure. You provide the products. You own your store and your customer relationships entirely.
            </p>
</div>
</section>

<section className="py-24">
<div className="max-w-md mx-auto px-6 reveal">
<div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
<h3 className="text-xl font-medium text-white mb-2">Seller Subscription</h3>
<p className="text-neutral-400 mb-6 text-sm">Everything you need to run your private store.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tight">$19</span>
<span className="text-neutral-500">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="16"></span>
                        Unlimited products
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="16"></span>
                        Custom store link
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="16"></span>
                        0% transaction fees
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="16"></span>
                        Analytics dashboard
                    </li>
</ul>
<a className="block w-full py-3 bg-white text-black text-center rounded-lg font-medium hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300" href="https://colourbeerugs.com/">
                    Start Your Store
                </a>
</div>
</div>
</section>

<section className="py-32 text-center px-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-neutral-900/50 to-transparent -z-10"></div>
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Ready to launch?</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 active:scale-95" href="https://colourbeerugs.com/">
                    Launch Your Store Today
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center gap-2.5 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity" href="#">
<div className="relative w-6 h-6 flex items-center justify-center">
<svg className="w-full h-full text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5 8H8.5V11.5H15.5V8ZM8.5 13H11.5V16H8.5V13ZM13 13H15.5V16H13V13Z" fill="white" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-neutral-400 font-medium tracking-tighter text-lg group-hover:text-white transition-colors">MyShopa</span>
</a>
<div className="text-sm text-neutral-500">
                © 2023 MyShopa Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors hover:scale-110 transform duration-200" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors hover:scale-110 transform duration-200" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
</div>
</div>
</footer>


    </>
  );
}
