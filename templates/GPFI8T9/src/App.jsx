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



            // Typing animation variables
            let animationsStarted = false;
            
            function typeWriter(element, text, speed = 80, callback = null) {
                element.textContent = '';
                element.style.borderRight = '2px solid rgba(79, 70, 229, 0.8)';
                element.style.minHeight = '1.2em';
                let i = 0;
                
                const timer = setInterval(() => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(timer);
                        setTimeout(() => {
                            element.style.borderRight = 'none';
                            if (callback) callback();
                        }, 500);
                    }
                }, speed);
            }
            
            function isElementVisible(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            function startTypingAnimations() {
                if (animationsStarted) return;
                
                const container = document.getElementById('aura-emfl19lf9');
                if (!container || !isElementVisible(container)) return;
                
                animationsStarted = true;
                
                const titleElement = document.getElementById('typing-title');
                const subtitleElement = document.getElementById('typing-subtitle');
                const descElement = document.getElementById('typing-description');
                
                // Start with title
                if (titleElement) {
                    setTimeout(() => {
                        typeWriter(titleElement, 'Pattern Recognition', 60, () => {
                            // After title completes, start subtitle
                            if (subtitleElement) {
                                setTimeout(() => {
                                    typeWriter(subtitleElement, 'Advanced • 15 min', 50, () => {
                                        // After subtitle completes, start description
                                        if (descElement) {
                                            setTimeout(() => {
                                                typeWriter(descElement, 'How do computers learn to recognize faces? Let\'s explore the fascinating world of artificial intelligence and machine learning...', 25);
                                            }, 300);
                                        }
                                    });
                                }, 200);
                            }
                        });
                    }, 500);
                }
            }
            
            // Start animations when page loads or when scrolled into view
            document.addEventListener('DOMContentLoaded', startTypingAnimations);
            window.addEventListener('scroll', startTypingAnimations);
            
            // Also start immediately in case DOM is already loaded
            startTypingAnimations();
        


        lucide.createIcons();

        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.fade-in, .slide-up, .blur-in, .scale-in').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
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
      

<header className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

<nav className="relative z-50 mx-auto max-w-7xl px-6 lg:px-8 fade-in" style={{animationPlayState: 'running'}}>
<div className="flex pt-6 pb-4 items-center justify-between">
<div className="flex items-center gap-3">
<h1 className="text-lg font-semibold text-gray-900">MindSpark</h1>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:transform after:scale-x-100 after:transition-transform" href="#">Overview</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Subjects</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Progress</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Family</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Support</a>
</div>
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="mt-4 rounded-2xl bg-white/80 glass border border-gray-200/50 shadow-xl p-4">
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-900 bg-gray-100" href="#">Overview</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors" href="#">Subjects</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors" href="#">Progress</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors" href="#">Family</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors" href="#">Support</a>
</div>
</div>
</nav>

<section className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-32">
<div className="grid gap-16 lg:grid-cols-12 items-center">
<div className="lg:col-span-6 space-y-8">
<div className="space-y-6">
<h1 className="sm:text-6xl lg:text-7xl leading-none slide-up text-5xl font-bold text-gray-900 tracking-tight" style={{animationPlayState: 'running'}}>
                            Think different.<br/>
<span className="slide-up delay-200 text-neutral-950/70" style={{animationPlayState: 'running'}}>Learn different.</span>
</h1>
<p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed max-w-xl slide-up delay-300" style={{animationPlayState: 'running'}}>
                            Revolutionary learning experiences that adapt to every child's unique way of thinking.
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start slide-up delay-400" style={{animationPlayState: 'running'}}>
<button className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
<svg className="lucide lucide-play h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                            Start Learning
                        </button>
<button className="relative inline-flex items-center gap-3 font-medium border-none rounded-full cursor-pointer transition-all duration-200 uppercase text-black bg-white px-10 py-4 text-lg hover:-translate-y-1 hover:shadow-lg active:-translate-y-0.5 active:shadow-md" onmousedown="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.2)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 0 0 0 rgba(0, 0, 0, 0)'" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.2)'" onmouseup="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.2)'" style={{boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px', transition: '0.2s', fontFamily: 'inherit', fontWeight: '500', transform: 'translateY(0px)'}}>
<svg className="lucide lucide-video h-5 w-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
    Watch Demo
    <span className="absolute inset-0 -z-10 bg-white rounded-full transition-all duration-400 hover:scale-x-140 hover:scale-y-160 hover:opacity-0" style={{content: '\'\'', display: 'inline-block', height: '100%', width: '100%', borderRadius: '100px', position: 'absolute', top: '0', left: '0', zIndex: '-1', transition: 'all 0.4s', backgroundColor: '#fff', opacity: '1', transform: 'scaleX(1) scaleY(1)'}}></span>
</button>
</div>
<div className="flex items-center gap-8 text-sm text-gray-500 slide-up delay-500" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>2M+ learners</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.9 rating</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>COPPA compliant</span>
</div>
</div>
</div>
<div className="lg:col-span-6 blur-in delay-600" style={{animationPlayState: 'running'}}>
<div className="relative">

<div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">

<div className="flex items-center justify-between p-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<span className="font-semibold text-gray-900">Neural Networks</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
</div>

<div className="pt-8 pr-8 pb-8 pl-8 space-y-6" id="aura-emfl19lf9">

<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-700">Today's Challenge</span>
<span className="text-sm text-gray-500">8/10 complete</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center animate-bounce" style={{animationDuration: '2s', animationIterationCount: 'infinite'}}>
<svg className="lucide lucide-lightbulb w-5 h-5 text-indigo-600" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-gray-900" id="typing-title"></h3>
<p className="text-sm text-gray-600" id="typing-subtitle"></p>
</div>
</div>
<p className="text-gray-700 leading-relaxed" id="typing-description"></p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<button className="text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors">Continue →</button>
</div>

</div>

<div className="grid grid-cols-3 gap-4">
<div className="text-center space-y-2">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
<svg className="lucide lucide-trophy w-6 h-6 text-white" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="">
<p className="text-2xl font-bold text-gray-900">47</p>
<p className="text-xs text-gray-500">Achievements</p>
</div>
</div>
<div className="text-center space-y-2">
<div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto">
<svg className="lucide lucide-flame w-6 h-6 text-white" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
<div className="">
<p className="text-2xl font-bold text-gray-900">23</p>
<p className="text-xs text-gray-500">Day Streak</p>
</div>
</div>
<div className="text-center space-y-2">
<div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<p className="text-2xl font-bold text-gray-900">1,247</p>
<p className="text-xs text-gray-500">XP Points</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 flex delay-800 bg-[#e4ebfb]/25 w-16 h-16 rounded-2xl shadow-2xl backdrop-blur-3xl scale-in items-center justify-center" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-sparkles w-[32px] h-[32px] text-neutral-950" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="absolute -bottom-4 -left-4 flex delay-700 bg-neutral-950/60 w-12 h-12 rounded-xl shadow-lg backdrop-blur-3xl scale-in items-center justify-center" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-book-open w-6 h-6 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
</div>
</div>
</div>
</section>
</header>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16 fade-in" style={{animationPlayState: 'paused'}}>
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                    Designed for curious minds
                </h2>
<p className="text-xl text-gray-600 leading-relaxed">
                    Every feature crafted with intention. Every interaction designed to spark wonder.
                </p>
</div>
<div className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg className="lucide lucide-brain w-8 h-8 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Adaptive Intelligence</h3>
<p className="leading-relaxed text-gray-600">
                            AI-powered lessons that evolve with each child's learning style and pace.
                        </p>
</div>
</div>
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg className="lucide lucide-gamepad-2 w-8 h-8 text-white" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Immersive Experiences</h3>
<p className="text-gray-600 leading-relaxed">
                            Interactive simulations that make complex concepts tangible and fun.
                        </p>
</div>
</div>
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg className="lucide lucide-target w-8 h-8 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Precision Tracking</h3>
<p className="text-gray-600 leading-relaxed">
                            Real-time insights into learning progress with detailed analytics.
                        </p>
</div>
</div>
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg className="lucide lucide-users w-8 h-8 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Family Connected</h3>
<p className="text-gray-600 leading-relaxed">
                            Seamless collaboration between children, parents, and educators.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-24 pb-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16 fade-in" style={{animationPlayState: 'paused'}}>
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                    Subjects reimagined
                </h2>
<p className="text-xl text-gray-600 leading-relaxed">
                    Traditional subjects enhanced with cutting-edge technology and innovative teaching methods.
                </p>
</div>
<div className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
<article className="group bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden card-hover slide-up delay-100" style={{animationPlayState: 'paused'}}>
<div className="aspect-video w-full overflow-hidden">
<img alt="Mathematics visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a451e501-3e59-49a9-89c0-52acdbaae49a_800w.jpg"/>
</div>
<div className="p-8 space-y-6">
<div className="flex items-center justify-between">
<div className="flex bg-slate-800 w-14 h-14 rounded-2xl items-center justify-center">
<svg className="lucide lucide-calculator w-7 h-7 text-white" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">STEM</span>
</div>
<div className="space-y-3">
<h3 className="text-2xl font-bold text-gray-900">Quantum Mathematics</h3>
<p className="text-gray-600 leading-relaxed">
                    Explore mathematical concepts through interactive visualizations and real-world applications.
                </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-play-circle w-4 h-4 text-gray-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-500">24 lessons</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-500">6h 30m</span>
</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
<article className="group bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden card-hover slide-up delay-200" style={{animationPlayState: 'paused'}}>
<div className="aspect-video w-full overflow-hidden">
<img alt="Literature and books" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6cc48f7d-8d7c-4a78-b915-6d0d4c0b7b18_800w.jpg"/>
</div>
<div className="p-8 space-y-6">
<div className="flex items-center justify-between">
<div className="flex bg-slate-800 w-14 h-14 rounded-2xl items-center justify-center">
<svg className="lucide lucide-book-open w-7 h-7 text-white" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">LANGUAGE</span>
</div>
<div className="space-y-3">
<h3 className="text-2xl font-bold text-gray-900">Literary Odyssey</h3>
<p className="text-gray-600 leading-relaxed">
                    Journey through literature with AI-powered story analysis and creative writing tools.
                </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-play-circle w-4 h-4 text-gray-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-500">18 stories</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-500">4h 15m</span>
</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
<article className="group bg-white rounded-3xl shadow-lg border border-gray-200/50 overflow-hidden card-hover slide-up delay-300" style={{animationPlayState: 'paused'}}>
<div className="aspect-video w-full overflow-hidden">
<img alt="Laboratory and science" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f02f2d97-2f6e-4565-af29-5029e146b6ad_800w.jpg"/>
</div>
<div className="p-8 space-y-6">
<div className="flex items-center justify-between">
<div className="flex bg-slate-800 w-14 h-14 rounded-2xl items-center justify-center">
<svg className="lucide lucide-flask-conical w-7 h-7 text-white" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">SCIENCE</span>
</div>
<div className="space-y-3">
<h3 className="text-2xl font-bold text-gray-900">Molecular Discovery</h3>
<p className="text-gray-600 leading-relaxed">
                    Dive into chemistry and physics with 3D molecular models and virtual experiments.
                </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-play-circle w-4 h-4 text-gray-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-500">16 experiments</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-4 h-4 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-500">5h 45m</span>
</div>
</div>
<svg className="lucide lucide-arrow-right w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-4xl text-center fade-in" style={{animationPlayState: 'paused'}}>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                    The future of learning
                    <span className="bg-clip-text font-medium text-transparent font-playfair bg-neutral-50/60">starts today</span>
</h2>
<p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Join millions of families discovering a new way to learn. Experience education that adapts, inspires, and grows with every child.
                </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 slide-up delay-200" style={{animationPlayState: 'paused'}}>
<button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
<svg className="lucide lucide-rocket h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                        Start Free Trial
                    </button>
<button className="inline-flex items-center gap-3 text-white font-medium px-8 py-4 border border-gray-600 rounded-full hover:bg-gray-900 transition-all duration-300">
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        Schedule Demo
                    </button>
</div>

<div className="grid sm:grid-cols-3 gap-8 text-center border-t border-gray-800 pt-16 slide-up delay-400" style={{animationPlayState: 'paused'}}>
<div>
<p className="text-4xl font-bold text-white mb-2">2M+</p>
<p className="text-gray-400">Active learners</p>
</div>
<div>
<p className="text-4xl font-bold text-white mb-2">98%</p>
<p className="text-gray-400">Parent satisfaction</p>
</div>
<div className="">
<p className="text-4xl font-bold text-white mb-2">150+</p>
<p className="text-gray-400">Countries worldwide</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-6 gap-8 mb-16">
<div className="md:col-span-2 fade-in" style={{animationPlayState: 'paused'}}>
<div className="flex items-center gap-3 mb-6">
<h3 className="text-xl font-semibold text-gray-900">MindSpark</h3>
</div>
<p className="text-gray-600 max-w-md leading-relaxed mb-6">
                        Revolutionizing education through intelligent, adaptive learning experiences designed for the next generation of thinkers.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4 text-gray-600" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-facebook w-4 h-4 text-gray-600" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4 text-gray-600" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div className="fade-in delay-100" style={{animationPlayState: 'paused'}}>
<h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
<ul className="space-y-3">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Overview</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Features</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Updates</a></li>
</ul>
</div>
<div className="fade-in delay-200" style={{animationPlayState: 'paused'}}>
<h4 className="font-semibold text-gray-900 mb-4">Learning</h4>
<ul className="space-y-3">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Mathematics</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Science</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Literature</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Technology</a></li>
</ul>
</div>
<div className="fade-in delay-300" style={{animationPlayState: 'paused'}}>
<h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Help Center</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Parent Guide</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Community</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div className="fade-in delay-400" style={{animationPlayState: 'paused'}}>
<h4 className="font-semibold text-gray-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Security</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 fade-in delay-500" style={{animationPlayState: 'paused'}}>
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-gray-500">© 2024 MindSpark. Crafted with precision for curious minds.</p>
<div className="flex items-center gap-6 text-sm">
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="text-gray-500 hover:text-gray-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
