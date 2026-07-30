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
            'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
            'serif': ['Playfair Display', 'ui-serif', 'Georgia'],
          },
          animation: {
            'fade-in': 'fadeIn 0.8s ease-out forwards',
            'slide-up': 'slideUp 0.8s ease-out forwards',
            'slide-left': 'slideLeft 0.8s ease-out forwards',
            'scale-in': 'scaleIn 0.6s ease-out forwards',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideUp: {
              '0%': { opacity: '0', transform: 'translateY(40px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideLeft: {
              '0%': { opacity: '0', transform: 'translateX(40px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            scaleIn: {
              '0%': { opacity: '0', transform: 'scale(0.9)' },
              '100%': { opacity: '1', transform: 'scale(1)' }
            }
          }
        }
      }
    }
  


    // Initialize Lucide icons
    lucide.createIcons();
    
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
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
    
    // Smooth hover effects
    document.querySelectorAll('.group').forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-2px)';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
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
      

<nav className="fixed top-0 w-full z-50 glass-effect">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-leaf w-4 h-4 text-white" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="font-serif font-medium text-lg tracking-tight">Lumina Botanicals</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-gray-600 hover:text-emerald-600 transition-colors" href="#">Products</a>
<a className="text-gray-600 hover:text-emerald-600 transition-colors" href="#">Science</a>
<a className="text-gray-600 hover:text-emerald-600 transition-colors" href="#">Reviews</a>
<button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
            Shop Now
          </button>
</div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-16 opacity-0 animate-fade-in" style={{animationPlayState: `running`}}>
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
          Dermatologist Recommended
        </div>
<h1 className="sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] text-4xl font-medium tracking-tight font-serif">Radiant Skin<br /><span className="font-light italic text-emerald-700">Needs Great Care</span></h1>
<p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Discover the power of nature with our clinically-proven, sustainable skincare solutions crafted for every skin type.
        </p>
</div>

<div className="flex flex-col gap-6 lg:items-end opacity-0 animate-slide-left animate-delay-200" style={{animationPlayState: `running`}}>
<div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
<div className="flex space-x-1">
<svg className="lucide lucide-star w-5 h-5 fill-emerald-400 text-emerald-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-emerald-400 text-emerald-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-emerald-400 text-emerald-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-emerald-400 text-emerald-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-emerald-400 text-emerald-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="text-left">
<div className="font-semibold text-gray-900">4.9 out of 5</div>
<div className="text-sm text-gray-500">2,847 verified reviews</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-gray-600">Trusted by thousands</span>
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face" />
<img alt="Customer" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" />
<img alt="Customer" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" />
<img alt="Customer" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" />
<div className="w-10 h-10 bg-emerald-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
<span className="text-xs font-semibold text-emerald-700">2K+</span>
</div>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-[800px] lg:h-[600px]">


<div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 opacity-0 animate-scale-in animate-delay-400" style={{animationPlayState: `running`}}>
<div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full" style={{transform: `translateY(0px)`}}>
<img alt="Radiant woman with glowing skin" className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1564512480295-86e479d9b87c?w=1080&q=80" />

<div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-xs">
<div className="glass-effect p-4 lg:p-5 rounded-2xl shadow-xl">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
<svg className="lucide lucide-sparkles w-5 h-5 text-emerald-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<div className="">
<h3 className="font-serif text-lg font-medium leading-tight">
                    Clinically Proven
                    <span className="italic font-light text-emerald-700">Results</span>
</h3>
<p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    95% of users report visibly improved skin texture within 2 weeks.
                  </p>
<div className="flex items-center gap-4 mt-3">
<div className="text-center">
<div className="font-semibold text-emerald-600 text-sm">95%</div>
<div className="text-xs text-gray-500">Satisfaction</div>
</div>
<div className="text-center">
<div className="font-semibold text-emerald-600 text-sm">2 weeks</div>
<div className="text-xs text-gray-500">Results</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 opacity-0 animate-slide-up animate-delay-600" style={{animationPlayState: `running`}}>
<div className="h-full rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-900 text-white p-6 lg:p-8 relative overflow-hidden shadow-2xl group" style={{transform: `translateY(0px)`}}>

<div className="absolute inset-0 opacity-10">
<div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
<div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-leaf w-5 h-5 text-emerald-200" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                  100% Natural
                </div>
</div>
<h3 className="font-serif text-xl lg:text-2xl font-medium leading-tight mb-4">
                Pure Botanical
                <span className="italic font-light">Extracts</span>
</h3>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-3">
<svg className="lucide lucide-flower w-4 h-4 text-emerald-300 shrink-0" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
<span>Organic Rose Hip Oil</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-droplets w-4 h-4 text-emerald-300 shrink-0" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span>Hyaluronic Acid Complex</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-sun w-4 h-4 text-emerald-300 shrink-0" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span>Vitamin C & E Blend</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-sprout w-4 h-4 text-emerald-300 shrink-0" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
<span className="">Green Tea Extract</span>
</li>
</ul>
</div>
<div className="flex items-center justify-between mt-6">
<div className="text-xs text-emerald-200">
                Cruelty-free • Vegan
              </div>
<button className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-2 rounded-full text-sm font-medium transition-colors">
                Learn More
              </button>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 opacity-0 animate-slide-left animate-delay-800" style={{animationPlayState: `running`}}>
<div className="h-full rounded-3xl bg-white p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group" style={{transform: `translateY(0px)`}}>
<div className="">
<div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-message-circle w-5 h-5 text-amber-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<div className="flex space-x-1 mb-3">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
              "My skin has never looked better! The glow is real."
            </p>
</div>
<div className="flex items-center gap-3">
<img alt="Sarah M." className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face" />
<div>
<div className="font-medium text-sm">Sarah M.</div>
<div className="text-xs text-gray-500">Verified buyer</div>
</div>
</div>
</div>
</div>


<div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 opacity-0 animate-slide-up animate-delay-1000" style={{animationPlayState: `running`}}>
<div className="h-full rounded-3xl bg-gradient-to-br from-stone-100 to-stone-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group" style={{transform: `translateY(0px)`}}>
<div className="">
<div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-recycle w-5 h-5 text-white" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<h3 className="font-serif text-lg lg:text-xl font-medium leading-tight mb-3">
              Sustainable
              <span className="italic font-light text-emerald-700">Packaging</span>
</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
              100% recycled materials with carbon-neutral shipping.
            </p>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Eco-certified
            </div>
</div>
<div className="flex justify-end mt-4">
<div className="w-16 h-16 opacity-60 group-hover:opacity-100 transition-opacity">
<img alt="Sustainable packaging" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1080&q=80" />
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 opacity-0 animate-scale-in animate-delay-1200" style={{animationPlayState: `running`}}>
<div className="h-full rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group" style={{transform: `translateY(0px)`}}>
<div className="">
<div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-flask-conical w-5 h-5 text-blue-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<h3 className="font-serif text-lg lg:text-xl font-medium leading-tight mb-3">
              Advanced
              <span className="italic font-light text-blue-700">Science</span>
</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
              Backed by dermatological research and clinical trials.
            </p>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Hydration boost</span>
<span className="font-semibold text-blue-600">+87%</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Fine line reduction</span>
<span className="font-semibold text-blue-600">+73%</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 opacity-0 animate-slide-left animate-delay-600" style={{animationPlayState: `running`}}>
<div className="relative rounded-3xl overflow-hidden shadow-xl group h-full" style={{transform: `translateY(0px)`}}>
<img alt="Premium skincare products" className="w-full h-full transition-transform duration-700 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1599817878414-43ef36677cf0?w=1080&q=80" />


<div className="absolute bottom-6 left-6 right-6 text-white">
<h3 className="font-serif text-xl font-medium mb-2">
              Premium Collection
            </h3>
<p className="text-sm text-white/90 mb-4">
              Discover our bestselling skincare essentials
            </p>
<button className="bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Shop Collection
            </button>
</div>
</div>
</div>
</section>

<div className="opacity-0 animate-fade-in animate-delay-1000 text-center mt-64" style={{animationPlayState: `paused`}}>
<div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        30-day money-back guarantee
      </div>
<h2 className="font-serif text-3xl font-medium mb-4">Ready to Transform Your Skin?</h2>
<p className="text-gray-600 mb-8 max-w-md mx-auto">Join thousands of satisfied customers who've discovered the power of natural skincare.</p>
<button className="gradient-border px-8 py-4 rounded-full font-semibold text-emerald-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
        Start Your Journey Today
      </button>
</div>
</main>


    </>
  );
}
