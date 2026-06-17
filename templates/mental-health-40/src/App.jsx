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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
lavender: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
800: '#5b21b6',
900: '#4c1d95',
}
},
animation: {
'float-slow': 'float 8s ease-in-out infinite',
'float-medium': 'float 6s ease-in-out infinite',
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        // Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-element').forEach(el => {
                observer.observe(el);
            });
        });

        // Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const bg = document.getElementById('parallax-bg');
            if (bg) {
                bg.style.transform = `translateY(${scrolled * 0.2}px)`;
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" id="parallax-bg">
<div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-lavender-200/40 rounded-full blur-[100px] blob mix-blend-multiply filter"></div>
<div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-100/40 rounded-full blur-[100px] blob animation-delay-2000 mix-blend-multiply filter" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[10%] left-[20%] w-[45vw] h-[45vw] bg-pink-100/40 rounded-full blur-[100px] blob animation-delay-4000 mix-blend-multiply filter" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/60 shadow-sm rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-lavender-500 to-indigo-600 rounded-full"></div>
<span className="font-medium text-lg tracking-tight text-slate-900">Serene</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Philosophy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">Method</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Plans</a>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-slate-900/10" href="#">
                Get Started
            </a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-[1600px] mx-auto px-6 flex flex-col items-center text-center">
<div className="reveal-element">
<h1 className="font-serif text-6xl md:text-8xl tracking-tight leading-[1.1] text-slate-900 mb-6">
                    Find clarity in <br/>
<span className="italic text-lavender-600/90">conversation.</span>
</h1>
</div>
<div className="reveal-element delay-100">
<p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Your intelligent companion for mental clarity. Available 24/7 to listen, reflect, and help you navigate your inner world with empathy.
                </p>
</div>
<div className="reveal-element delay-200 flex flex-col sm:flex-row gap-4 mb-24">
<button className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-base font-medium shadow-xl shadow-slate-900/20 hover:scale-105 transition-transform">
                    Start Your Journey
                </button>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full text-base font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    Watch Demo
                </button>
</div>

<div className="relative w-full h-[600px] md:h-[700px] mt-4 perspective-[2000px] mx-auto overflow-visible flex flex-col md:block items-center gap-8 md:gap-0">

<div className="md:absolute md:left-1/2 md:-ml-[160px] md:top-8 md:-translate-x-[380px] lg:-translate-x-[440px] w-[320px] h-[640px] md:-rotate-[6deg] z-20 origin-bottom-right transition-transform duration-500 hover:-translate-y-2 hover:z-40">

<div className="reveal-element delay-300 w-full h-full bg-white rounded-[3rem] border-[8px] border-white shadow-2xl shadow-indigo-900/10 overflow-hidden relative flex flex-col">
<div className="h-full w-full bg-gradient-to-br from-lavender-50/50 to-white rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>

<div className="pt-16 px-6">
<div className="inline-flex items-center gap-1 bg-white/80 backdrop-blur border border-slate-100 px-3 py-1.5 rounded-full mb-8 shadow-sm">
<i className="w-3 h-3 text-indigo-500" data-lucide="zap"></i>
<span className="text-xs font-semibold text-slate-700">Get Pro 15%</span>
</div>
<div className="mt-12 space-y-2">
<h2 className="font-serif text-4xl text-slate-900 leading-tight">Hi, I'm Aria<br/>I can help you today</h2>
<p className="text-slate-500 text-sm mt-4 leading-relaxed font-medium">I'm ready when you are.<br/>Choose what you'd like to work on.</p>
</div>
<div className="mt-12 flex gap-3 overflow-hidden">
<div className="bg-white p-4 rounded-2xl w-32 flex-shrink-0 border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2">
<i className="w-4 h-4" data-lucide="cloud"></i>
</div>
<span className="text-sm font-medium text-slate-800">Stress</span>
</div>
<div className="bg-white p-4 rounded-2xl w-32 flex-shrink-0 border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<span className="text-sm font-medium text-slate-800">Clarity</span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
</div>
</div>
</div>

<div className="md:absolute md:left-1/2 md:-ml-[170px] md:top-0 w-[320px] md:w-[340px] h-[620px] md:h-[680px] z-30 transition-transform duration-500 hover:scale-[1.02]">

<div className="reveal-element delay-200 w-full h-full bg-white rounded-[3.5rem] border-[8px] border-white shadow-2xl shadow-indigo-900/20 overflow-hidden relative flex flex-col">
<div className="h-full w-full bg-slate-50 rounded-[3rem] overflow-hidden relative flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-40"></div>

<div className="pt-16 px-6 h-full flex flex-col items-center">

<div className="bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-slate-100 mb-8 z-10">
<span className="text-xs font-semibold text-slate-800 tracking-wide">Select Your AI Listener</span>
</div>

<div className="relative w-full flex-1 mb-8 group cursor-pointer">
<div className="absolute inset-4 bg-gradient-to-t from-lavender-200 to-indigo-100 rounded-[2.5rem] rotate-3 opacity-60 group-hover:rotate-6 transition-transform duration-500"></div>
<div className="absolute inset-4 bg-gradient-to-t from-indigo-200 to-purple-100 rounded-[2.5rem] -rotate-3 opacity-60 group-hover:-rotate-6 transition-transform duration-500"></div>
<div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-lg">
<img alt="Aria AI" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
</div>
</div>
</div>

<div className="text-center pb-10">
<h2 className="font-serif text-4xl text-slate-900 mb-2">Meet Aria</h2>
<p className="text-slate-400 text-sm font-medium">Empathetic • Calm • Patient</p>
</div>
</div>
</div>
</div>
</div>

<div className="md:absolute md:left-1/2 md:-ml-[160px] md:top-8 md:translate-x-[380px] lg:translate-x-[440px] w-[320px] h-[640px] md:rotate-[6deg] z-20 origin-bottom-left transition-transform duration-500 hover:-translate-y-2 hover:z-40">

<div className="reveal-element delay-300 w-full h-full bg-white rounded-[3rem] border-[8px] border-white shadow-2xl shadow-indigo-900/10 overflow-hidden relative flex flex-col">
<div className="h-full w-full bg-gradient-to-bl from-lavender-50/50 to-white rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>

<div className="pt-16 px-6 flex flex-col h-full">
<div className="flex justify-center mb-12">
<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-slate-100">
<i className="w-3 h-3 text-slate-400" data-lucide="x"></i>
<span className="text-xs font-semibold text-slate-600">Close Entry</span>
</div>
</div>
<div className="flex-1 flex flex-col justify-center pb-20">
<span className="text-sm font-medium text-slate-400 mb-4 block text-center">Question 1</span>
<h2 className="font-serif text-4xl text-slate-900 text-center leading-tight">What made<br/>you sad?</h2>
<div className="mt-12 relative">
<div className="absolute inset-0 bg-gradient-to-r from-lavender-100 to-indigo-50 blur-2xl opacity-50 rounded-full"></div>
<div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm">
<p className="text-slate-600 text-lg leading-relaxed font-light">
                                                "I've been feeling overwhelmed lately. There is just too much going on at work..."
                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight">Why Serene?</h2>
<p className="text-lg text-slate-500">Intelligent emotional support designed for real human needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 reveal-element delay-100 hover:shadow-md transition-shadow">
<div className="mb-8">
<div className="flex items-start gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-lavender-100 flex-shrink-0 flex items-center justify-center">
<i className="w-4 h-4 text-lavender-600" data-lucide="sparkles"></i>
</div>
<div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none text-slate-600 text-lg leading-relaxed font-light">
                                I've been feeling overwhelmed lately, like I can't keep up with everything.
                            </div>
</div>
<div className="flex items-start gap-4 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none shadow-lg shadow-indigo-200 text-lg leading-relaxed font-light">
                                It's completely normal to feel that way. Let's break down what's causing the most pressure right now.
                            </div>
</div>
</div>
<h3 className="font-serif text-2xl text-slate-900 mb-2 tracking-tight">Empathetic Conversations</h3>
<p className="text-lg text-slate-500 font-light">Trained on psychological principles to offer genuine support, not just generic answers.</p>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-between reveal-element delay-200 hover:shadow-md transition-shadow">
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-slate-50 p-6 rounded-2xl text-center">
<div className="w-10 h-10 bg-white rounded-full shadow-sm mx-auto mb-3 flex items-center justify-center text-indigo-600">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<span className="font-medium text-slate-900 block mb-1">24/7 Access</span>
<span className="text-sm text-slate-500 block">No waiting rooms</span>
</div>
<div className="bg-slate-50 p-6 rounded-2xl text-center">
<div className="w-10 h-10 bg-white rounded-full shadow-sm mx-auto mb-3 flex items-center justify-center text-indigo-600">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<span className="font-medium text-slate-900 block mb-1">Private</span>
<span className="text-sm text-slate-500 block">Fully encrypted</span>
</div>
<div className="col-span-2 bg-slate-50 p-4 rounded-2xl flex items-center justify-between px-6">
<span className="font-medium text-slate-900">Personalized Insights</span>
<i className="w-5 h-5 text-indigo-500" data-lucide="bar-chart-3"></i>
</div>
<div className="col-span-2 flex gap-2">
<div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium">CBT</div>
<div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium">Mindfulness</div>
<div className="bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-medium">Journaling</div>
</div>
</div>
<div>
<h3 className="font-serif text-2xl text-slate-900 mb-2 tracking-tight">Always Available</h3>
<p className="text-lg text-slate-500 font-light">Support whenever you need it, tailored to your personal journey and history.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20" id="how-it-works">
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight">How it Works</h2>
<p className="text-lg text-slate-500">Three simple steps to a calmer mind.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-element delay-100 group">
<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full hover:-translate-y-1 transition-transform duration-300">
<span className="text-6xl font-serif text-lavender-200 block mb-6 group-hover:text-lavender-300 transition-colors">1</span>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Select Your Guide</h3>
<p className="text-slate-500 leading-relaxed font-light text-lg">Browse through empathetic AI personalities, each with their own tone and specialty.</p>
<div className="mt-8 flex justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-indigo-500 shadow-sm overflow-hidden scale-110 z-10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="reveal-element delay-200 group">
<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full hover:-translate-y-1 transition-transform duration-300">
<span className="text-6xl font-serif text-lavender-200 block mb-6 group-hover:text-lavender-300 transition-colors">2</span>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Share Your Mind</h3>
<p className="text-slate-500 leading-relaxed font-light text-lg">Speak naturally or type. Express your thoughts freely without fear of judgment.</p>
<div className="mt-8 bg-slate-50 rounded-xl p-3 flex items-center gap-2 justify-center">
<div className="flex gap-1 items-end h-4">
<div className="w-1 bg-slate-300 h-2 animate-pulse"></div>
<div className="w-1 bg-indigo-500 h-4 animate-pulse"></div>
<div className="w-1 bg-indigo-500 h-3 animate-pulse delay-75"></div>
<div className="w-1 bg-slate-300 h-2 animate-pulse delay-100"></div>
</div>
<span className="text-xs text-slate-400 font-medium">Listening...</span>
</div>
</div>
</div>

<div className="reveal-element delay-300 group">
<div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full hover:-translate-y-1 transition-transform duration-300">
<span className="text-6xl font-serif text-lavender-200 block mb-6 group-hover:text-lavender-300 transition-colors">3</span>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Receive Clarity</h3>
<p className="text-slate-500 leading-relaxed font-light text-lg">Get thoughtful, actionable responses crafted to help you feel grounded.</p>
<div className="mt-8 bg-indigo-50 rounded-xl p-4">
<div className="h-2 w-3/4 bg-indigo-200 rounded-full mb-2"></div>
<div className="h-2 w-1/2 bg-indigo-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="pricing">
<div className="text-center mb-10 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4 tracking-tight">Start for free.<br/>Upgrade for depth.</h2>
<p className="text-lg text-slate-500">Simple plans designed for your mental wellbeing.</p>
<div className="mt-8 inline-flex bg-slate-100 p-1 rounded-full relative">
<div className="w-1/2 h-full absolute left-0 bg-white rounded-full shadow-sm transition-all"></div>
<button className="px-6 py-2 text-sm font-medium text-slate-900 rounded-full relative z-10">Monthly</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 rounded-full relative z-10">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-12">

<div className="bg-white rounded-3xl p-8 border border-slate-100 reveal-element delay-100">
<h3 className="text-2xl font-serif text-slate-900 tracking-tight">Free</h3>
<p className="text-slate-500 mt-2 mb-6 font-light">Perfect for trying things out.</p>
<div className="text-slate-900 font-medium text-lg mb-8">Free forever</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-indigo-500" data-lucide="check"></i>
                            3 AI conversations per week
                        </li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-indigo-500" data-lucide="check"></i>
                            Basic emotional check-ins
                        </li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-indigo-500" data-lucide="check"></i>
                            Guided journaling
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors">Choose Plan</button>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-100 reveal-element delay-200 relative">
<h3 className="text-2xl font-serif text-slate-900 tracking-tight">Reflect</h3>
<p className="text-slate-500 mt-2 mb-6 font-light">For those ready to build a regular habit.</p>
<div className="flex items-baseline mb-8">
<span className="text-3xl font-serif text-slate-900">$9.99</span>
<span className="text-slate-500 text-sm ml-1">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-indigo-500" data-lucide="check"></i>
                            Unlimited AI conversations
                        </li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-indigo-500" data-lucide="check"></i>
                            Daily mental wellness prompts
                        </li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-indigo-500" data-lucide="check"></i>
                            Weekly progress reports
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200">Choose Plan</button>
</div>

<div className="bg-gradient-to-b from-indigo-50 to-white rounded-3xl p-8 border border-indigo-100 reveal-element delay-300 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
<h3 className="text-2xl font-serif text-slate-900 tracking-tight">Deep Support</h3>
<p className="text-slate-500 mt-2 mb-6 font-light">Your mental health companion, fully unlocked.</p>
<div className="flex items-baseline mb-8">
<span className="text-3xl font-serif text-slate-900">$24.99</span>
<span className="text-slate-500 text-sm ml-1">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-slate-800 text-sm font-medium">
<i className="w-5 h-5 text-indigo-600" data-lucide="check"></i>
                            Everything in Reflect
                        </li>
<li className="flex gap-3 text-slate-800 text-sm">
<i className="w-5 h-5 text-indigo-600" data-lucide="check"></i>
                            In-depth emotional analysis
                        </li>
<li className="flex gap-3 text-slate-800 text-sm">
<i className="w-5 h-5 text-indigo-600" data-lucide="check"></i>
                            Themed therapy exercises
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">Choose Plan</button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 text-center">
<div className="reveal-element">
<h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
                    Everyone deserves a safe space to be heard—even at 2am.
                </h2>
<div className="flex justify-center gap-4 mt-8">
<button className="bg-slate-900 text-white px-8 py-3 rounded-full text-base font-medium shadow-xl shadow-slate-900/10 hover:scale-105 transition-transform">
                        Get Started
                    </button>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-full text-base font-medium hover:bg-slate-50 transition-colors">
                        View Demo
                    </button>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-lavender-500 to-indigo-600 rounded-full"></div>
<span className="font-medium text-slate-900">Serene</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Why Serene?</a>
<a className="hover:text-slate-900" href="#">How It Works</a>
<a className="hover:text-slate-900" href="#">Pricing</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>Copyright © 2025. Serene AI. All Rights Reserved.</p>
<p>Privacy Policy</p>
</div>
</footer>



    </>
  );
}
