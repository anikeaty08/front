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
darkMode: 'media',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Manrope', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
blue: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6', // Accent
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'scroll': 'scroll 40s linear infinite',
'beam': 'beam 3s linear infinite',
'rotate-cards': 'rotateCards 12s infinite ease-in-out',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)', filter: 'blur(10px)' },
'100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
beam: {
'0%': { transform: 'translateY(-100%)', opacity: '0' },
'50%': { opacity: '1' },
'100%': { transform: 'translateY(100%)', opacity: '0' },
},
rotateCards: {
'0%, 30%': { transform: 'translateY(0) scale(1) translateZ(0)', zIndex: '30', opacity: '1' },
'33%, 63%': { transform: 'translateY(1rem) scale(0.95) translateZ(-40px)', zIndex: '20', opacity: '0.6' },
'66%, 96%': { transform: 'translateY(2rem) scale(0.9) translateZ(-80px)', zIndex: '10', opacity: '0.3' },
'100%': { transform: 'translateY(0) scale(1) translateZ(0)', zIndex: '30', opacity: '1' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
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
      

<nav className="hidden md:flex flex-col w-64 border-r border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md h-full shrink-0 z-50">

<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-heading font-semibold tracking-tighter text-lg">Middleman</span>
</div>

<div className="flex-1 px-4 space-y-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 group transition-colors" href="#">
<iconify-icon className="text-stone-500 group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-stone-100" icon="solar:home-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Home
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#how-it-works">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
                How it works
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#features">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Features
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#use-cases">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Use Cases
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#security">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Security &amp; Trust
            </a>
</div>

<div className="p-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Sign In
            </button>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-sm transition-all transform hover:scale-[1.02]">
                Create Agreement
                <iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 h-full overflow-y-auto relative scroll-smooth">

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#dbeafe,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#1e3a8a30,transparent)] opacity-60"></div>
<div className="absolute bottom-0 right-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_bottom_right,#f5f5f4,transparent)] dark:bg-[radial-gradient(ellipse_at_bottom_right,#1c1917,transparent)]"></div>
</div>

<header className="md:hidden flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur sticky top-0 z-40">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-heading font-semibold tracking-tighter">Middleman</span>
</div>
<button className="p-2 text-stone-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 lg:py-32 max-w-7xl mx-auto reveal-on-scroll is-visible">
<div className="text-center max-w-4xl mx-auto z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 mb-8 animate-fade-in" style={{animationDelay: '100ms'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 dark:text-stone-300 tracking-wide uppercase">MVP Early Access</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold font-heading text-stone-900 dark:text-stone-50 tracking-tight leading-[1.1] mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
                    Turn informal agreements into <span className="text-blue-500">clear, shared records.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{animationDelay: '300ms'}}>
                    Middleman helps two people clearly agree, approve, and keep records — without lawyers, jargon, or complexity.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '400ms'}}>
<button className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                        Create an Agreement
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        See How It Works
                    </button>
</div>
</div>

<div className="mt-20 relative w-full max-w-3xl perspective-container h-64 md:h-96 flex items-center justify-center animate-fade-in" style={{animationDelay: '600ms'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-1 bg-stone-200 dark:bg-stone-800 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full z-10 flex items-center justify-center text-white shadow-lg animate-pulse">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>

<div className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 bg-white dark:bg-stone-900 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 w-48 flex items-center gap-3 animate-float" style={{animationDelay: '0s'}}>
<img alt="User 1" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://i.pravatar.cc/150?u=a"/>
<div>
<div className="h-2 w-20 bg-stone-200 dark:bg-stone-800 rounded mb-2"></div>
<div className="h-2 w-12 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
</div>
</div>

<div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 bg-white dark:bg-stone-900 p-4 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800 w-48 flex flex-row-reverse items-center gap-3 text-right animate-float" style={{animationDelay: '1.5s'}}>
<img alt="User 2" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://i.pravatar.cc/150?u=b"/>
<div>
<div className="h-2 w-20 bg-stone-200 dark:bg-stone-800 rounded mb-2 ml-auto"></div>
<div className="h-2 w-12 bg-stone-100 dark:bg-stone-800 rounded ml-auto"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl rounded-xl p-6 w-64 transform rotate-x-12 rotate-y-6 transition-transform hover:rotate-0 duration-700">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-8 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center">
<iconify-icon className="text-stone-400" icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-xs rounded-md font-medium border border-green-100 dark:border-green-900/30">Active</div>
</div>
<div className="space-y-2">
<div className="h-2 bg-stone-200 dark:bg-stone-800 rounded w-3/4"></div>
<div className="h-2 bg-stone-100 dark:bg-stone-800 rounded w-full"></div>
<div className="h-2 bg-stone-100 dark:bg-stone-800 rounded w-5/6"></div>
</div>
<div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-stone-900 flex items-center justify-center text-white text-[10px]"><iconify-icon icon="solar:check-linear"></iconify-icon></div>
<div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-stone-900 flex items-center justify-center text-white text-[10px]"><iconify-icon icon="solar:check-linear"></iconify-icon></div>
</div>
<span className="text-xs text-stone-400">Signed</span>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 border-y border-stone-100 dark:border-stone-900 bg-stone-50/50 dark:bg-stone-950/50 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-50 dark:from-stone-950 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-50 dark:from-stone-950 to-transparent z-10"></div>
<div className="flex w-[200%] animate-scroll hover:pause">

<div className="flex w-1/2 justify-around items-center gap-12 px-6 opacity-40 grayscale transition-opacity hover:opacity-100">
<iconify-icon icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="32"></iconify-icon>
</div>

<div className="flex w-1/2 justify-around items-center gap-12 px-6 opacity-40 grayscale transition-opacity hover:opacity-100">
<iconify-icon icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:uber" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="32"></iconify-icon>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-5xl font-semibold font-heading text-stone-900 dark:text-stone-50 tracking-tight mb-6">
                        Why verbal agreements <br/><span className="text-stone-400">don't work.</span>
</h2>
<p className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed mb-8">
                        Handshakes are forgotten. WhatsApp messages get lost in the scroll. Misunderstandings create conflict between friends, families, and partners.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-stone-700 dark:text-stone-300">Verbal agreements fade from memory</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-stone-700 dark:text-stone-300">Chat apps are messy and unverifiable</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-400 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-stone-700 dark:text-stone-300">Disputes happen because terms aren't clear</span>
</li>
</ul>
</div>
<div className="grid grid-cols-1 gap-6">
<div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-blue-500 mb-4" icon="solar:eye-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 font-heading">Digital Witness</h3>
<p className="text-stone-500 text-sm">A neutral third-party record that creates immediate clarity for both sides.</p>
</div>
<div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-blue-500 mb-4" icon="solar:check-circle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-2 font-heading">Mutual Consent</h3>
<p className="text-stone-500 text-sm">Nothing is active until both parties click "Approve". No ambiguity.</p>
</div>
<div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-900/50 text-center border border-dashed border-stone-300 dark:border-stone-800">
<p className="text-xs font-mono text-stone-500 uppercase tracking-wider">Disclaimer</p>
<p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Not a lawyer. Not enforcement. Just clarity and proof.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-stone-900/50 border-y border-stone-200 dark:border-stone-800" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold font-heading tracking-tight mb-4">Agreement in minutes</h2>
<p className="text-stone-500 dark:text-stone-400">Simple, structured, and secure.</p>
</div>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-200 dark:bg-stone-800 z-0"></div>

<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-blue-500 transition-colors" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center mb-2">1. Describe</h3>
<p className="text-sm text-center text-stone-500">Draft terms in plain text or voice. Keep it simple.</p>
</div>
<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-blue-500 transition-colors" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center mb-2">2. Review</h3>
<p className="text-sm text-center text-stone-500">Invite the other party. Edit together until agreed.</p>
</div>
<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-blue-500 transition-colors" icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center mb-2">3. Approve</h3>
<p className="text-sm text-center text-stone-500">Both parties digitally sign. The record is locked.</p>
</div>
<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '400ms'}}>
<div className="w-24 h-24 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-blue-500 transition-colors" icon="solar:safe-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center mb-2">4. Store</h3>
<p className="text-sm text-center text-stone-500">Accessible anytime. Immutable history.</p>
</div>
</div>
<div className="text-center mt-12">
<button className="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center gap-2">
                        Try the flow now
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold font-heading tracking-tight mb-4">Built for neutrality</h2>
<p className="text-stone-500 dark:text-stone-400">Everything you need to agree, nothing you don't.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 reveal-on-scroll group">
<div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">AI-Assisted Drafting</h3>
<p className="text-stone-500 text-sm leading-relaxed">Stuck on words? Let our AI suggest clear, neutral language for your specific situation.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 reveal-on-scroll group" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" icon="solar:user-check-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Bilateral Approval</h3>
<p className="text-stone-500 text-sm leading-relaxed">No "I didn't agree to that". Changes require re-approval from both sides.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 reveal-on-scroll group" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" icon="solar:history-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Lifecycle Tracking</h3>
<p className="text-stone-500 text-sm leading-relaxed">See the exact status: Draft, Pending Review, Active, or Completed.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 reveal-on-scroll group" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" icon="solar:shield-keyhole-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
<p className="text-stone-500 text-sm leading-relaxed">Encrypted at rest. Your agreements are private and retrievable only by the parties involved.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 reveal-on-scroll group" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" icon="solar:bell-bing-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Smart Reminders</h3>
<p className="text-stone-500 text-sm leading-relaxed">Set dates for deliverables or expiration. We'll nudge both parties automatically.</p>
</div>

<div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 reveal-on-scroll group" style={{transitionDelay: '500ms'}}>
<div className="w-12 h-12 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-500" icon="solar:microphone-3-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Voice Support</h3>
<p className="text-stone-500 text-sm leading-relaxed">Record your verbal agreement, we transcribe it and format it into a record.</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden" id="use-cases">

<div className="absolute inset-0 flex justify-center pointer-events-none opacity-20">
<div className="w-px h-full bg-stone-800 relative overflow-hidden">
<div className="absolute top-0 w-full h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-beam"></div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold font-heading tracking-tight mb-4">Who needs a Middleman?</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-6 rounded-xl border border-stone-800 bg-stone-950/50 hover:bg-stone-800 transition-colors cursor-pointer reveal-on-scroll">
<span className="text-xs font-mono text-blue-400 mb-2 block">01</span>
<h3 className="text-xl font-semibold mb-2">Freelancers</h3>
<p className="text-stone-400 text-sm">Scope of work, revisions, and payment terms defined clearly.</p>
</div>
<div className="p-6 rounded-xl border border-stone-800 bg-stone-950/50 hover:bg-stone-800 transition-colors cursor-pointer reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<span className="text-xs font-mono text-blue-400 mb-2 block">02</span>
<h3 className="text-xl font-semibold mb-2">Landlords</h3>
<p className="text-stone-400 text-sm">Simple lease terms, damage deposits, and move-out conditions.</p>
</div>
<div className="p-6 rounded-xl border border-stone-800 bg-stone-950/50 hover:bg-stone-800 transition-colors cursor-pointer reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<span className="text-xs font-mono text-blue-400 mb-2 block">03</span>
<h3 className="text-xl font-semibold mb-2">Small Teams</h3>
<p className="text-stone-400 text-sm">Founder agreements, equity splits, and role responsibilities.</p>
</div>
<div className="p-6 rounded-xl border border-stone-800 bg-stone-950/50 hover:bg-stone-800 transition-colors cursor-pointer reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<span className="text-xs font-mono text-blue-400 mb-2 block">04</span>
<h3 className="text-xl font-semibold mb-2">Friends</h3>
<p className="text-stone-400 text-sm">Lending money, borrowing items, or shared trip expenses.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold font-heading tracking-tight mb-6">Trusted by early adopters.</h2>
<p className="text-lg text-stone-500 dark:text-stone-400 mb-8">
                        People are using Middleman to bring peace of mind to their daily transactions and relationships.
                    </p>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="h-80 relative flex items-center justify-center perspective-container card-stack-wrapper reveal-on-scroll">

<div className="card absolute w-full max-w-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-2xl shadow-lg animate-rotate-cards preserve-3d">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
<div>
<h4 className="font-semibold text-stone-900 dark:text-stone-100">Sarah Jenkins</h4>
<p className="text-xs text-stone-500">Freelance Designer</p>
</div>
</div>
<p className="text-stone-600 dark:text-stone-300 italic">"I used to feel awkward asking clients to sign big contracts. Middleman feels like a friendly handshake, but safer."</p>
<div className="mt-4 flex gap-1 text-blue-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>

<div className="card absolute w-full max-w-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-2xl shadow-lg animate-rotate-cards preserve-3d">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=2"/>
<div>
<h4 className="font-semibold text-stone-900 dark:text-stone-100">David Chen</h4>
<p className="text-xs text-stone-500">Property Owner</p>
</div>
</div>
<p className="text-stone-600 dark:text-stone-300 italic">"Renting out my spare room to a friend was tricky. This let us agree on house rules without making it weird."</p>
<div className="mt-4 flex gap-1 text-blue-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>

<div className="card absolute w-full max-w-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 rounded-2xl shadow-lg animate-rotate-cards preserve-3d">
<div className="flex items-center gap-4 mb-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=3"/>
<div>
<h4 className="font-semibold text-stone-900 dark:text-stone-100">Elena Rodriguez</h4>
<p className="text-xs text-stone-500">Small Business Owner</p>
</div>
</div>
<p className="text-stone-600 dark:text-stone-300 italic">"The AI drafting feature saved me hours. It turned my bullet points into a proper agreement instantly."</p>
<div className="mt-4 flex gap-1 text-blue-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto bg-blue-600 dark:bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden reveal-on-scroll shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-4xl md:text-5xl font-semibold font-heading tracking-tight mb-4 relative z-10">Start with clarity.</h2>
<p className="text-blue-100 text-lg mb-8 relative z-10">Takes less than 5 minutes to create your first agreement.</p>
<button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg relative z-10 inline-flex items-center gap-2">
                    Create Your First Agreement
                    <iconify-icon icon="solar:pen-new-square-bold" width="20"></iconify-icon>
</button>
</div>
</section>

<footer className="bg-stone-100 dark:bg-stone-950/80 border-t border-stone-200 dark:border-stone-800 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-stone-300 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-400">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="font-heading font-semibold tracking-tighter">Middleman</span>
</div>
<p className="text-sm text-stone-500">Neutral third-party digital agreement platform.</p>
</div>
<div>
<h4 className="font-semibold mb-4 text-stone-900 dark:text-stone-100">Product</h4>
<ul className="space-y-2 text-sm text-stone-500 hover:text-stone-600">
<li><a className="hover:text-blue-500 transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Use Cases</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-stone-900 dark:text-stone-100">Company</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-stone-900 dark:text-stone-100">Support</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-blue-500 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-200 dark:border-stone-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Middleman. All rights reserved.</p>
<p className="text-xs text-stone-400 max-w-md text-center md:text-right">Legal Disclaimer: Middleman is a record-keeping platform, not a law firm. We do not provide legal advice.</p>
</div>
</div>
</footer>
</main>



    </>
  );
}
