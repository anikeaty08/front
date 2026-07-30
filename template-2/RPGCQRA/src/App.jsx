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
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
      colors: { brand:'#a855f7' },
      borderRadius: { xl2:'1.25rem' }
    }
  }
}



  lucide.createIcons();

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
      
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-8 lg:gap-12">

<div className="">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-trophy w-4 h-4 text-brand" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
<p className="uppercase text-sm text-slate-400">Achievements</p>
</div>
<h1 className="sm:text-4xl text-3xl font-medium text-white tracking-tight mb-6">Excellence & Innovation</h1>
<p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-12">
      Celebrating breakthrough innovations and industry leadership. Our commitment to excellence 
      has earned recognition from top organizations worldwide.
    </p>

<div className="border-t border-slate-700 text-sm overflow-hidden mb-10">
<div className="grid grid-cols-[1fr_auto] sm:py-5 sm:px-0 border-slate-700 border-b pt-4 pr-4 pb-4 pl-4">
<div className="font-medium flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
          Recognition
        </div>
<div className="text-slate-400">Year</div>
</div>
<div className="grid grid-cols-[1fr_auto] py-4 border-b border-slate-700 px-4 sm:px-0">
<div className=""><span className="text-xs text-slate-400">Best AI Platform – NeuralFlow Suite</span></div>
<div className="text-slate-400 font-medium">2025</div>
</div>
<div className="grid grid-cols-[1fr_auto] py-4 border-b border-slate-700 px-4 sm:px-0">
<div className=""><span className="text-xs text-slate-400">Outstanding UX Design – FinanceHub App</span></div>
<div className="text-slate-400 font-medium">2025</div>
</div>
<div className="grid grid-cols-[1fr_auto] py-4 border-b border-slate-700 px-4 sm:px-0">
<div className=""><span className="text-xs text-slate-400">Best Mobile Experience – HealthTracker Pro</span></div>
<div className="text-slate-400 font-medium">2024</div>
</div>
<div className="grid grid-cols-[1fr_auto] sm:px-0 border-slate-700 border-b pt-4 pr-4 pb-4 pl-4">
<div className=""><span className="text-xs text-slate-400">Platinum – E-commerce Innovation</span></div>
<div className="text-slate-400 font-medium">2024</div>
</div>
<div className="grid grid-cols-[1fr_auto] sm:px-0 pt-4 pr-4 pb-4 pl-4">
<div className=""><span className="text-xs text-slate-400">Best Enterprise Solution – CloudSync Platform</span></div>
<div className="text-slate-400 font-medium">2024</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-slate-800/50 rounded-xl2 p-6">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-globe w-5 h-5 text-brand" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h3 className="text-lg font-medium text-white">Global Impact</h3>
</div>
<p className="text-sm text-slate-300 mb-4">Our innovations have transformed operations across 45+ countries, serving over 2.3 million active users globally.</p>
<div className="grid grid-cols-2 gap-4">
<div className="text-center p-3 bg-slate-700/30 rounded-lg">
<div className="text-2xl font-light text-brand mb-1">45+</div>
<div className="text-xs text-slate-400">Countries</div>
</div>
<div className="text-center p-3 bg-slate-700/30 rounded-lg">
<div className="text-2xl font-light text-brand mb-1">2.3M</div>
<div className="text-xs text-slate-400">Active Users</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl2 p-6">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-handshake w-5 h-5 text-brand" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<h3 className="text-lg font-medium text-white">Strategic Partnerships</h3>
</div>
<p className="text-sm text-slate-300 mb-4">Trusted by industry leaders and recognized by major technology organizations worldwide.</p>
<div className="space-y-2">
<div className="flex items-center justify-between py-2 px-3 bg-slate-700/20 rounded-lg">
<span className="text-sm text-slate-300">Forbes Tech Council</span>
<span className="text-xs text-brand">Member</span>
</div>
<div className="flex items-center justify-between py-2 px-3 bg-slate-700/20 rounded-lg">
<span className="text-sm text-slate-300">MIT Technology Review</span>
<span className="text-xs text-brand">Featured</span>
</div>
<div className="flex items-center justify-between py-2 px-3 bg-slate-700/20 rounded-lg">
<span className="text-sm text-slate-300">Google Cloud Partner</span>
<span className="text-xs text-brand">Platinum</span>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl2 p-6">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-brand" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-lg font-medium text-white">Key Metrics</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-sm text-slate-300">Customer Retention Rate</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
<div className="w-[94%] h-full bg-brand rounded-full"></div>
</div>
<span className="text-sm font-medium text-brand">94%</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-300">Performance Uptime</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
<div className="w-[99.9%] h-full bg-brand rounded-full"></div>
</div>
<span className="text-sm font-medium text-brand">99.9%</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-300">Revenue Growth YoY</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
<div className="w-[87%] h-full bg-brand rounded-full"></div>
</div>
<span className="text-sm font-medium text-brand">187%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 sm:space-y-8">

<div className="relative rounded-xl2 overflow-hidden">
<img alt="Smart Home Device" className="w-full h-48 sm:h-64 object-cover" src="https://images.unsplash.com/photo-1654793182455-83e2a50f3494?w=2160&q=80" />
<div className="absolute bottom-6 left-6 text-white">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-sm opacity-90">Featured Product</span>
</div>
<h3 className="sm:text-2xl text-xl font-normal tracking-tight">SmartHome Hub Pro</h3>
</div>
</div>

<div className="sm:p-8 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl2 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-brand flex items-center justify-center rounded-lg">
<svg className="lucide lucide-star w-5 h-5 text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h2 className="sm:text-2xl text-xl font-light text-white tracking-tight">Innovation Excellence 2024</h2>
</div>
<p className="sm:mb-8 text-sm text-slate-300 mb-6">
        Our SmartHome Hub Pro launch exceeded all expectations, setting new industry standards 
        for connected home technology and user engagement.
      </p>
<div className="divide-y divide-slate-600">
<div className="flex items-center justify-between py-4 sm:py-6">
<div className="flex items-start gap-3">
<svg className="lucide lucide-users w-5 h-5 text-brand mt-1" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="">
<p className="font-medium text-slate-200">Customer Satisfaction</p>
<p className="text-xs text-slate-400">Average rating from verified users</p>
</div>
</div>
<div className="text-right">
<span className="sm:text-4xl text-brand text-3xl font-light text-slate-50">4.9</span>
<p className="text-xs text-slate-400">/5.0</p>
</div>
</div>
<div className="flex items-center justify-between py-4 sm:py-6">
<div className="flex items-start gap-3">
<svg className="lucide lucide-trending-up w-5 h-5 text-brand mt-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div className="">
<p className="font-medium text-slate-200">Market Penetration</p>
<p className="text-xs text-slate-400">Units sold in first quarter</p>
</div>
</div>
<div className="text-right">
<span className="sm:text-4xl text-brand text-3xl font-light text-gray-50">750K</span>
<p className="text-xs text-slate-400">units</p>
</div>
</div>
<div className="flex items-center justify-between py-4 sm:py-6">
<div className="flex items-start gap-3">
<svg className="lucide lucide-target w-5 h-5 text-brand mt-1" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div className="">
<p className="font-medium text-slate-200">Revenue Growth</p>
<p className="text-xs text-slate-400">Exceeded quarterly projections</p>
</div>
</div>
<div className="text-right">
<span className="sm:text-4xl text-brand text-3xl font-light text-gray-50">240%</span>
<p className="text-xs text-slate-400">growth</p>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
