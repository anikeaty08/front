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



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    document.getElementById('mobile-menu').addEventListener('click', function() {
      // Add mobile menu functionality here
      console.log('Mobile menu clicked');
    });

    // Add smooth scrolling and other interactions
    document.addEventListener('DOMContentLoaded', function() {
      // Add any additional JavaScript functionality here
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/clonercubes02-HzFmdLzAHD8H17hADAkzahxR" width="100%"></iframe></div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl opacity-20"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-white/10" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight" style={{}}>Nova</span>
</div>
<nav className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Features</a>
<a className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Templates</a>
<a className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Pricing</a>
<a className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Docs</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:block px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors font-sans" style={{}}>Sign in</button>
<button className="hover:shadow-lg hover:scale-105 transition-all text-sm font-medium text-white bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg pt-2 pr-4 pb-2 pl-4" style={{}}>
            Get Started
          </button>
<button className="md:hidden p-2 hover:bg-white/5 rounded-lg" id="mobile-menu">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full border border-white/10 mb-8" style={{animation: 'fade-in 0.6s ease-out 0.1s both'}}>
<svg className="lucide lucide-zap w-4 h-4 text-accent-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium font-sans" style={{}}>AI-Powered Writing Assistant</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-8 font-bricolage font-semibold" style={{animation: '0.6s ease-out 0.2s 1 normal both running fade-in'}}>
        Create <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-gray-400 font-bricolage font-semibold" style={{}}>Amazing Content</span><br/>
        in Seconds
      </h1>
<p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-sans" style={{animation: '0.6s ease-out 0.3s 1 normal both running fade-in'}}>
        Transform your ideas into compelling copy with our advanced AI. From blog posts to social media, we've got you covered.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" style={{animation: 'fade-in 0.6s ease-out 0.4s both'}}>
<button className="px-8 py-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-accent-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2 font-sans" style={{}}>
          Start Writing Free
          <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          Watch Demo
        </button>
</div>
</div>

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
<div className="relative" style={{animation: 'slide-up 0.8s ease-out 0.5s both'}}>
<div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-2xl blur-xl"></div>
<div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden" style={{}}>

<div className="flex items-center justify-between p-6 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<span className="font-semibold font-sans" style={{}}>CopyNova Dashboard</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<input className="w-64 bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent" placeholder="Search templates..." type="text"/>
<svg className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<img alt="User" className="w-10 h-10 rounded-full ring-2 ring-white/20" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
</div>
</div>

<div className="grid lg:grid-cols-4 gap-6 p-6">

<div className="lg:col-span-1 space-y-6">
<div className="">
<h3 className="text-sm font-semibold text-white/70 mb-3 font-sans" style={{}}>Quick Actions</h3>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-accent-500/20 to-primary-500/20 text-white rounded-lg hover:from-accent-500/30 hover:to-primary-500/30 transition-all">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-medium font-sans" style={{}}>New Project</span>
</button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-sans" style={{}}>Recent Docs</span>
</button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-sans" style={{}}>Favorites</span>
</button>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-white/70 mb-3 font-sans" style={{}}>Categories</h3>
<div className="space-y-1">
<a className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Social Media</a>
<a className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Blog Posts</a>
<a className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Email Marketing</a>
<a className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all font-sans" href="#" style={{}}>Ad Copy</a>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="mb-6">
<h2 className="text-xl font-semibold mb-4 font-sans" style={{}}>Popular Templates</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-500/50 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center" style={{}}>
<svg className="lucide lucide-facebook w-5 h-5 text-blue-400" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<div>
<h3 className="font-medium text-sm font-sans" style={{}}>Facebook Ad</h3>
<p className="text-xs text-white/50 font-sans" style={{}}>Social Media</p>
</div>
</div>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-sans" style={{}}>Create compelling Facebook ads that drive engagement and conversions.</p>
</div>
<div className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-500/50 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center" style={{}}>
<svg className="lucide lucide-mail w-5 h-5 text-green-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h3 className="font-medium text-sm font-sans" style={{}}>Email Subject</h3>
<p className="text-xs text-white/50 font-sans" style={{}}>Email Marketing</p>
</div>
</div>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-sans" style={{}}>Craft irresistible email subject lines that boost open rates.</p>
</div>
<div className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-500/50 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center" style={{}}>
<svg className="lucide lucide-edit-3 w-5 h-5 text-purple-400" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
</div>
<div>
<h3 className="font-medium text-sm font-sans" style={{}}>Blog Outline</h3>
<p className="text-xs text-white/50 font-sans" style={{}}>Content</p>
</div>
</div>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-sans" style={{}}>Generate structured blog outlines for any topic or industry.</p>
</div>
<div className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-500/50 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center" style={{}}>
<svg className="lucide lucide-shopping-bag w-5 h-5 text-orange-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div>
<h3 className="font-medium text-sm font-sans" style={{}}>Product Description</h3>
<p className="text-xs text-white/50 font-sans" style={{}}>E-commerce</p>
</div>
</div>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-sans" style={{}}>Write persuasive product descriptions that convert visitors to buyers.</p>
</div>
<div className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-500/50 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center" style={{}}>
<svg className="lucide lucide-youtube w-5 h-5 text-red-400" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
<div>
<h3 className="font-medium text-sm font-sans" style={{}}>YouTube Title</h3>
<p className="text-xs text-white/50 font-sans" style={{}}>Video Content</p>
</div>
</div>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-sans" style={{}}>Create catchy YouTube titles that increase views and engagement.</p>
</div>
<div className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-500/50 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-instagram w-5 h-5 text-pink-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="">
<h3 className="font-medium text-sm font-sans" style={{}}>Instagram Caption</h3>
<p className="text-xs text-white/50 font-sans" style={{}}>Social Media</p>
</div>
</div>
<p className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-sans" style={{}}>Generate engaging Instagram captions with hashtags and emojis.</p>
</div>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-4 font-sans" style={{}}>Recent Activity</h3>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
<div className="w-2 h-2 bg-purple-400 rounded-full" style={{}}></div>
<div className="flex-1">
<p className="text-sm font-medium font-sans" style={{}}>Email Campaign Subject Lines</p>
<p className="text-xs text-white/50 font-sans" style={{}}>Generated 5 variations • 2 hours ago</p>
</div>
<button className="text-white/50 hover:text-white">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
<div className="w-2 h-2 bg-blue-400 rounded-full" style={{}}></div>
<div className="flex-1">
<p className="text-sm font-medium font-sans" style={{}}>Blog Post: "Future of AI Writing"</p>
<p className="text-xs text-white/50 font-sans" style={{}}>Created outline and intro • 4 hours ago</p>
</div>
<button className="text-white/50 hover:text-white">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<div className="bg-clip-text text-3xl font-semibold text-transparent font-bricolage bg-gradient-to-r from-blue-400 to-cyan-400" style={{}}>50k+</div>
<div className="text-sm text-white/70 font-sans" style={{}}>Active Users</div>
</div>
<div className="space-y-2">
<div className="bg-clip-text text-3xl font-semibold text-transparent font-bricolage bg-gradient-to-tr from-teal-400 to-blue-500" style={{}}>2M+</div>
<div className="text-sm text-white/70 font-sans" style={{}}>Words Generated</div>
</div>
<div className="space-y-2">
<div className="bg-clip-text text-3xl font-semibold text-transparent font-bricolage bg-gradient-to-tr from-teal-400 to-blue-500" style={{}}>99%</div>
<div className="text-sm text-white/70" style={{}}>Satisfaction Rate</div>
</div>
<div className="space-y-2">
<div className="bg-clip-text text-3xl font-semibold text-transparent font-bricolage bg-gradient-to-tr from-teal-400 to-blue-500" style={{}}>24/7</div>
<div className="text-sm text-white/70 font-sans" style={{}}>Support</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<span className="text-lg font-semibold" style={{}}>Nova</span>
</div>
<p className="text-white/50 text-sm font-sans" style={{}}>© 2024 CopyNova. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
