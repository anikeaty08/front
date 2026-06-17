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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
manrope: ['Manrope', 'sans-serif'],
},
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
blue: {
500: '#3b82f6',
600: '#2563eb',
}
},
animation: {
'beam': 'beam 3s linear infinite',
'marquee': 'marquee 25s linear infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
beam: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
        });

        // Intersection Observer for Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.blur-in, .clip-in').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.parallax-bg').forEach(el => {
                const speed = el.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                el.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });

        // Card Rotation Logic
        const cards = Array.from(document.querySelectorAll('.card'));
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        let activeIndex = 0;

        function updateCards() {
            cards.forEach((card, index) => {
                // Determine relative position
                let status = '';
                if (index === activeIndex) status = 'active';
                else if (index === (activeIndex + 1) % cards.length) status = 'next';
                else status = 'prev';

                card.setAttribute('data-status', status);
            });
        }

        function nextCard() {
            activeIndex = (activeIndex + 1) % cards.length;
            updateCards();
        }

        function prevCard() {
            activeIndex = (activeIndex - 1 + cards.length) % cards.length;
            updateCards();
        }

        nextBtn.addEventListener('click', nextCard);
        prevBtn.addEventListener('click', prevCard);

        // Auto loop
        let autoLoop = setInterval(nextCard, 4000);
        
        // Pause on hover
        const cardStack = document.querySelector('.card-stack');
        cardStack.addEventListener('mouseenter', () => clearInterval(autoLoop));
        cardStack.addEventListener('mouseleave', () => autoLoop = setInterval(nextCard, 4000));

    
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
      

<nav className="fixed left-0 top-0 h-screen w-16 md:w-20 border-r border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md z-50 flex flex-col items-center py-8 justify-between">

<a className="group relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" href="#">
<iconify-icon className="text-blue-500 group-hover:scale-110 transition-transform" icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="absolute left-14 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Middleman</span>
</a>

<div className="flex flex-col gap-6">
<a className="nav-item group relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" href="#hero">
<iconify-icon className="text-stone-500 group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-100" icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="absolute left-14 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Home</span>
</a>
<a className="nav-item group relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" href="#features">
<iconify-icon className="text-stone-500 group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-100" icon="solar:layers-linear" width="24"></iconify-icon>
<span className="absolute left-14 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Features</span>
</a>
<a className="nav-item group relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" href="#how-it-works">
<iconify-icon className="text-stone-500 group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-100" icon="solar:sort-by-time-linear" width="24"></iconify-icon>
<span className="absolute left-14 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Process</span>
</a>
<a className="nav-item group relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" href="#pricing">
<iconify-icon className="text-stone-500 group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-100" icon="solar:tag-price-linear" width="24"></iconify-icon>
<span className="absolute left-14 bg-stone-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Pricing</span>
</a>
</div>

<div className="flex flex-col gap-4 items-center">
<button className="group relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" id="theme-toggle">
<iconify-icon className="block dark:hidden text-stone-500" icon="solar:sun-2-linear" width="24"></iconify-icon>
<iconify-icon className="hidden dark:block text-stone-400" icon="solar:moon-stars-linear" width="24"></iconify-icon>
</button>
<a className="group relative" href="#contact">
<img alt="User" className="w-8 h-8 rounded-full border border-stone-300 dark:border-stone-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-stone-50 dark:border-stone-900 rounded-full"></div>
</a>
</div>
</nav>

<main className="pl-16 md:pl-20 relative">

<header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 pointer-events-none">
<div className="flex items-center gap-2 pointer-events-auto blur-in">
<iconify-icon className="text-blue-500 text-2xl md:text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-manrope font-semibold text-xl tracking-tighter text-stone-900 dark:text-stone-100">Middleman</span>
</div>
<div className="pointer-events-auto blur-in delay-100">
<a className="text-sm font-medium text-stone-500 hover:text-blue-500 transition-colors" href="#">Sign In</a>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10" id="hero">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[100px] parallax-bg" data-speed="0.05"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-stone-200/40 dark:bg-stone-800/20 rounded-full blur-[120px] parallax-bg" data-speed="0.03"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-medium tracking-wide clip-in" style={{transitionDelay: '100ms'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Introducing Middleman v1.0
                    </div>
<h1 className="font-manrope font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tighter text-stone-900 dark:text-white leading-[1.1] clip-in" style={{transitionDelay: '200ms'}}>
                        The neutral layer for <br/>
<span className="text-stone-400">digital agreements.</span>
</h1>
<p className="font-inter text-lg md:text-xl text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg clip-in" style={{transitionDelay: '300ms'}}>
                        Create, approve, and verify agreements with a neutral third-party platform. Structured security for modern partnerships.
                    </p>
<div className="flex flex-wrap items-center gap-4 clip-in" style={{transitionDelay: '400ms'}}>
<a className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium text-sm transition-all shadow-sm shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5" href="#">
                            Get Started
                        </a>
<a className="px-8 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-lg font-medium text-sm hover:bg-stone-50 dark:hover:bg-stone-800 transition-all flex items-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                            View Demo
                        </a>
</div>
<div className="flex items-center gap-4 text-xs text-stone-400 font-medium clip-in" style={{transitionDelay: '500ms'}}>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-stone-100 dark:border-stone-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-stone-100 dark:border-stone-950" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-stone-100 dark:border-stone-950" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
</div>
<span>Trusted by 2,000+ teams</span>
</div>
</div>

<div className="relative w-full h-[500px] flex items-center justify-center lg:justify-end blur-in" style={{transitionDelay: '400ms'}}>

<div className="absolute bottom-0 right-0 lg:right-10 flex gap-2 z-20">
<button className="w-10 h-10 rounded-full border border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-stone-800 flex items-center justify-center transition-colors" id="prevBtn">
<iconify-icon className="text-stone-600 dark:text-stone-300" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-200 dark:border-stone-700 bg-white/50 dark:bg-black/50 backdrop-blur hover:bg-white dark:hover:bg-stone-800 flex items-center justify-center transition-colors" id="nextBtn">
<iconify-icon className="text-stone-600 dark:text-stone-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="card-stack w-full max-w-sm">

<div className="card border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between" data-index="0" data-status="active">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<iconify-icon className="text-xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-stone-900 dark:text-white">Service Agreement</div>
<div className="text-xs text-stone-500">ID: #MD-8291</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wider">Pending</span>
</div>
<div className="space-y-3 mt-6">
<div className="h-2 w-3/4 bg-stone-100 dark:bg-stone-800 rounded"></div>
<div className="h-2 w-full bg-stone-100 dark:bg-stone-800 rounded"></div>
<div className="h-2 w-5/6 bg-stone-100 dark:bg-stone-800 rounded"></div>
</div>
<div className="mt-6 flex justify-between items-center border-t border-stone-100 dark:border-stone-800 pt-4">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border border-white dark:border-stone-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
<div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-700 border border-white dark:border-stone-900 flex items-center justify-center text-[8px] text-stone-500">?</div>
</div>
<div className="text-xs text-stone-400">Awaiting Signature</div>
</div>
</div>

<div className="card border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between bg-stone-50 dark:bg-stone-900" data-index="1" data-status="next">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
<iconify-icon className="text-xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-stone-900 dark:text-white">NDA Contract</div>
<div className="text-xs text-stone-500">ID: #MD-1102</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">Active</span>
</div>
<div className="space-y-3 mt-6">
<div className="h-2 w-full bg-stone-200 dark:bg-stone-800 rounded"></div>
<div className="h-2 w-2/3 bg-stone-200 dark:bg-stone-800 rounded"></div>
</div>
<div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800">
<div className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Verified on Blockchain
                                </div>
</div>
</div>

<div className="card border border-stone-200 dark:border-stone-800 p-6 flex flex-col justify-between" data-index="2" data-status="prev">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-stone-900 dark:text-white">Partnership Deed</div>
<div className="text-xs text-stone-500">ID: #MD-5543</div>
</div>
</div>
<span className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider">Draft</span>
</div>
<div className="space-y-3 mt-6">
<div className="h-2 w-1/2 bg-stone-100 dark:bg-stone-800 rounded"></div>
</div>
<div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
<div className="text-xs text-stone-400">Created 2m ago</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-stone-200 dark:border-stone-800 overflow-hidden bg-white dark:bg-stone-900/50">
<div className="relative w-full max-w-7xl mx-auto">
<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-stone-950 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-stone-950 to-transparent z-10"></div>
<div className="flex whitespace-nowrap overflow-hidden">
<div className="animate-marquee flex gap-16 items-center pr-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:spacex" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:nasa" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:visa" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="40"></iconify-icon>

<iconify-icon icon="simple-icons:spacex" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:nasa" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:visa" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="40"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative" id="features">
<div className="container mx-auto">
<div className="mb-16 max-w-xl blur-in">
<h2 className="font-manrope font-semibold text-3xl md:text-4xl tracking-tight text-stone-900 dark:text-white mb-4">Core Capabilities</h2>
<p className="font-inter text-stone-500 dark:text-stone-400 text-lg">Essential tools for the modern agreement lifecycle. Everything you need, nothing you don't.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 blur-in" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:pen-new-square-duotone"></iconify-icon>
</div>
<h3 className="font-manrope font-semibold text-xl text-stone-900 dark:text-white mb-3">Draft &amp; Create</h3>
<p className="font-inter text-stone-500 text-sm leading-relaxed">Instantly generate agreements from pre-vetted templates or start from scratch with our structured editor.</p>
</div>

<div className="group p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 blur-in" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:user-check-duotone"></iconify-icon>
</div>
<h3 className="font-manrope font-semibold text-xl text-stone-900 dark:text-white mb-3">Party Verification</h3>
<p className="font-inter text-stone-500 text-sm leading-relaxed">Ensure you are dealing with the right person. Built-in KYC and identity verification for all parties.</p>
</div>

<div className="group p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 blur-in" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:safe-square-duotone"></iconify-icon>
</div>
<h3 className="font-manrope font-semibold text-xl text-stone-900 dark:text-white mb-3">Secure Storage</h3>
<p className="font-inter text-stone-500 text-sm leading-relaxed">Agreements are encrypted and stored with redundancy. Retrieve verifiable copies instantly.</p>
</div>

<div className="group p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 blur-in" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:history-duotone"></iconify-icon>
</div>
<h3 className="font-manrope font-semibold text-xl text-stone-900 dark:text-white mb-3">Version Control</h3>
<p className="font-inter text-stone-500 text-sm leading-relaxed">Track every change, comment, and approval. Maintain a perfect audit trail of negotiations.</p>
</div>

<div className="group p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 blur-in" style={{transitionDelay: '500ms'}}>
<div className="w-12 h-12 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:bell-bing-duotone"></iconify-icon>
</div>
<h3 className="font-manrope font-semibold text-xl text-stone-900 dark:text-white mb-3">Smart Notifications</h3>
<p className="font-inter text-stone-500 text-sm leading-relaxed">Never miss a deadline. Automated reminders for renewals, expiries, and pending signatures.</p>
</div>

<div className="group p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 blur-in" style={{transitionDelay: '600ms'}}>
<div className="w-12 h-12 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:chart-square-duotone"></iconify-icon>
</div>
<h3 className="font-manrope font-semibold text-xl text-stone-900 dark:text-white mb-3">Analytics</h3>
<p className="font-inter text-stone-500 text-sm leading-relaxed">Gain insights into deal velocity, common bottlenecks, and agreement volume over time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white dark:bg-stone-950 border-y border-stone-200 dark:border-stone-800" id="how-it-works">
<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="sticky top-24 self-start">
<h2 className="font-manrope font-semibold text-3xl md:text-4xl tracking-tight text-stone-900 dark:text-white mb-6 clip-in">How Middleman Works</h2>
<p className="font-inter text-stone-500 text-lg mb-8 clip-in" style={{transitionDelay: '100ms'}}>From initiation to final signature, we provide the rails for a smooth transaction.</p>
<div className="space-y-6">
<div className="flex gap-4 items-start clip-in" style={{transitionDelay: '200ms'}}>
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">1</div>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white">Initiate</h4>
<p className="text-stone-500 text-sm mt-1">Select a template and invite the counter-party.</p>
</div>
</div>
<div className="flex gap-4 items-start clip-in" style={{transitionDelay: '300ms'}}>
<div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-sm shrink-0">2</div>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white">Negotiate</h4>
<p className="text-stone-500 text-sm mt-1">Discuss terms in real-time within the secure viewer.</p>
</div>
</div>
<div className="flex gap-4 items-start clip-in" style={{transitionDelay: '400ms'}}>
<div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-sm shrink-0">3</div>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white">Execute</h4>
<p className="text-stone-500 text-sm mt-1">Sign digitally. We mint a verifiable proof of agreement.</p>
</div>
</div>
</div>
</div>

<div className="relative border-l border-stone-200 dark:border-stone-800 pl-8 md:pl-12 py-4">

<div className="absolute left-[-1px] top-0 bottom-0 w-[1px] overflow-hidden">
<div className="h-40 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent absolute top-0 animate-beam"></div>
</div>

<div className="space-y-12">

<div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 rounded-xl shadow-sm blur-in" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between mb-4">
<span className="text-xs font-semibold uppercase text-stone-400">Step 01</span>
<iconify-icon className="text-stone-400" icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm border border-stone-300"></div>
<div className="h-2 w-24 bg-stone-200 dark:bg-stone-700 rounded"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm border border-stone-300"></div>
<div className="h-2 w-32 bg-stone-200 dark:bg-stone-700 rounded"></div>
</div>
</div>
</div>

<div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 rounded-xl shadow-sm blur-in" style={{transitionDelay: '400ms'}}>
<div className="flex justify-between mb-4">
<span className="text-xs font-semibold uppercase text-stone-400">Step 02</span>
<iconify-icon className="text-stone-400" icon="solar:chat-line-linear"></iconify-icon>
</div>
<div className="flex gap-3">
<img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
<div className="bg-white dark:bg-stone-800 p-3 rounded-tr-xl rounded-b-xl border border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-300">
                                    Can we change clause 4.2 regarding the termination period?
                                </div>
</div>
</div>

<div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg shadow-blue-500/20 blur-in" style={{transitionDelay: '600ms'}}>
<div className="flex justify-between mb-4">
<span className="text-xs font-semibold uppercase text-blue-200">Step 03</span>
<iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="text-center py-4">
<div className="text-2xl font-manrope font-bold mb-1">Signed</div>
<div className="text-blue-100 text-xs">Hash: 0x8f...2a9c</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-stone-100 dark:bg-stone-950">
<div className="container mx-auto">
<div className="bg-stone-900 dark:bg-stone-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden clip-in">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
<div className="relative z-10 max-w-3xl">
<div className="flex items-center gap-2 text-blue-400 mb-6">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-bold"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Security First</span>
</div>
<h2 className="font-manrope font-semibold text-3xl md:text-5xl tracking-tight mb-6">Enterprise-grade security built into the core.</h2>
<p className="text-stone-400 text-lg md:text-xl leading-relaxed mb-12">We utilize AES-256 encryption at rest and TLS 1.3 in transit. Every agreement is hashed and time-stamped on an immutable ledger.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 className="font-semibold text-white mb-2">SOC2 Type II</h4>
<p className="text-stone-500 text-sm">Certified compliant with industry standards.</p>
</div>
<div>
<h4 className="font-semibold text-white mb-2">End-to-End Encryption</h4>
<p className="text-stone-500 text-sm">Only you and your counter-party hold the keys.</p>
</div>
<div>
<h4 className="font-semibold text-white mb-2">99.99% Uptime</h4>
<p className="text-stone-500 text-sm">Reliable access whenever you need it.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="container mx-auto">
<div className="text-center mb-16 blur-in">
<h2 className="font-manrope font-semibold text-3xl md:text-4xl tracking-tight text-stone-900 dark:text-white">Trusted by Industry Leaders</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl hover:shadow-md transition-shadow blur-in" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-4 mb-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<div className="font-semibold text-stone-900 dark:text-white text-sm">Alex Chen</div>
<div className="text-stone-500 text-xs">CTO at TechFlow</div>
</div>
</div>
<p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">"Middleman dramatically reduced our contract turnaround time. The neutral platform approach makes external parties much more comfortable."</p>
</div>

<div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl hover:shadow-md transition-shadow blur-in" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-4 mb-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<div className="font-semibold text-stone-900 dark:text-white text-sm">Sarah Jenkins</div>
<div className="text-stone-500 text-xs">Legal Counsel, Stripe Inc</div>
</div>
</div>
<p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">"Finally, a tool that respects the workflow of legal teams while providing a modern UI. The version control is a lifesaver."</p>
</div>

<div className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl hover:shadow-md transition-shadow blur-in" style={{transitionDelay: '300ms'}}>
<div className="flex items-center gap-4 mb-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<div className="font-semibold text-stone-900 dark:text-white text-sm">Marcus Ray</div>
<div className="text-stone-500 text-xs">Founder, StartUp</div>
</div>
</div>
<p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">"We use Middleman for all our freelance agreements and partnership deeds. It's simple, fast, and legally robust."</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="container mx-auto">
<div className="bg-blue-600 rounded-3xl p-12 text-center relative overflow-hidden clip-in">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<h2 className="font-manrope font-semibold text-3xl md:text-5xl tracking-tight text-white mb-6">Ready to streamline your agreements?</h2>
<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of companies using Middleman to create trust and move faster.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition-all shadow-lg">Start for free</button>
<button className="px-8 py-4 bg-blue-700 border border-blue-500 text-white rounded-lg font-medium text-sm hover:bg-blue-800 transition-all">Contact Sales</button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 md:px-12 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
<div className="container mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-blue-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-manrope font-bold text-lg tracking-tighter dark:text-white">Middleman</span>
</div>
<p className="text-stone-500 text-sm">The neutral layer for digital trust.</p>
</div>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
<li><a className="hover:text-blue-500" href="#">Features</a></li>
<li><a className="hover:text-blue-500" href="#">Pricing</a></li>
<li><a className="hover:text-blue-500" href="#">Security</a></li>
<li><a className="hover:text-blue-500" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
<li><a className="hover:text-blue-500" href="#">About</a></li>
<li><a className="hover:text-blue-500" href="#">Careers</a></li>
<li><a className="hover:text-blue-500" href="#">Blog</a></li>
<li><a className="hover:text-blue-500" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 dark:text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
<li><a className="hover:text-blue-500" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-500" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-500" href="#">DPA</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 dark:border-stone-900 text-xs text-stone-400">
<div>© 2023 Middleman Inc. All rights reserved.</div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-stone-600 dark:hover:text-stone-200" href="#"><iconify-icon icon="simple-icons:twitter"></iconify-icon></a>
<a className="hover:text-stone-600 dark:hover:text-stone-200" href="#"><iconify-icon icon="simple-icons:github"></iconify-icon></a>
<a className="hover:text-stone-600 dark:hover:text-stone-200" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
