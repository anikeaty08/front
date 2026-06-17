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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
blue: '#557C93',
purple: '#7C3AED',
salmon: '#EF9C7D',
light: '#F8F9FB',
dark: '#1F2937',
surface: '#ffffff'
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(239, 156, 125, 0.3)'
}
}
}
}



        let historyStack = ['home'];
        
        const pages = {
            'home': { title: '', showNav: true, showBack: false, hideHeader: true },
            'courses': { title: 'Browse Courses', showNav: true, showBack: false, hideHeader: false },
            'cart': { title: 'Shopping Cart', showNav: true, showBack: false, hideHeader: false },
            'wallet': { title: 'My Wallet', showNav: true, showBack: false, hideHeader: false },
            'profile': { title: 'Profile', showNav: true, showBack: false, hideHeader: false },
            'course-details': { title: '', showNav: false, showBack: true, hideHeader: true },
        };

        function navTo(pageId) {
            if (historyStack[historyStack.length - 1] !== pageId) {
                historyStack.push(pageId);
            }
            updateView(pageId);
        }

        function goBack() {
            if (historyStack.length > 1) {
                historyStack.pop();
                const prevPage = historyStack[historyStack.length - 1];
                updateView(prevPage);
            }
        }

        function updateView(pageId) {
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('page-transition');
            });

            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('page-transition');
                document.getElementById('main-scroll').scrollTop = 0;
            }

            const config = pages[pageId];
            const header = document.getElementById('app-header');
            
            if (config && config.hideHeader) {
                header.classList.add('hidden');
            } else if (config) {
                header.classList.remove('hidden');
                document.getElementById('page-title').textContent = config.title;
                const backBtn = document.getElementById('back-btn');
                if (config.showBack) {
                    backBtn.classList.remove('hidden');
                    document.getElementById('header-left').classList.remove('ml-0');
                } else {
                    backBtn.classList.add('hidden');
                }
            }

            const nav = document.getElementById('bottom-nav');
            if (config && config.showNav) {
                nav.classList.remove('translate-y-full');
                document.querySelectorAll('.nav-item').forEach(btn => {
                    btn.classList.remove('text-brand-salmon', 'active');
                    btn.classList.add('text-gray-400');
                    btn.querySelector('span').classList.remove('font-semibold');
                    btn.querySelector('span').classList.add('font-medium');
                    if (btn.dataset.target === pageId) {
                        btn.classList.add('text-brand-salmon', 'active');
                        btn.classList.remove('text-gray-400');
                        btn.querySelector('span').classList.add('font-semibold');
                        btn.querySelector('span').classList.remove('font-medium');
                    }
                });
            } else {
                nav.classList.add('translate-y-full');
            }
        }

        updateView('home');
    
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
      

<div className="relative w-full h-full max-w-[400px] bg-brand-light shadow-2xl overflow-hidden flex flex-col md:rounded-[32px] md:h-[92vh] md:border-[8px] md:border-gray-900 ring-1 ring-black/5">

<div className="px-6 pt-12 pb-4 bg-white sticky top-0 z-30 transition-all duration-300 border-b border-gray-100 hidden" id="app-header">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3" id="header-left">
<button className="hidden p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-600" id="back-btn" onclick="goBack()">
<iconify-icon icon="lucide:arrow-left" width="24"></iconify-icon>
</button>
<div>
<h1 className="text-lg font-semibold tracking-tight text-gray-900" id="page-title">Page Title</h1>
</div>
</div>
<div className="flex items-center gap-2">
<button className="relative p-2 rounded-full hover:bg-gray-50 text-gray-500 transition" onclick="navTo('cart')">
<iconify-icon icon="lucide:shopping-cart" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-salmon rounded-full border border-white"></span>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-brand-light pb-24 relative" id="main-scroll">

<div className="page-section pb-6 space-y-0" id="page-home">

<div className="bg-brand-blue pt-14 pb-12 px-6 rounded-b-[40px] shadow-lg relative z-10">

<div className="flex justify-between items-start mb-6">
<div className="text-white">
<h1 className="text-2xl font-semibold tracking-tight mb-1">Welcome Back!</h1>
<p className="text-blue-100 text-xs font-medium">Continue your learning journey</p>
</div>
<div className="flex flex-col items-end gap-3">
<div className="flex items-center gap-1.5 text-blue-100 text-[10px] font-medium bg-white/10 px-2 py-1 rounded-full backdrop-blur-md">
<iconify-icon icon="lucide:globe" width="12"></iconify-icon>
<span>US English</span>
</div>
<button className="relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition text-white">
<iconify-icon icon="lucide:bell" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-salmon rounded-full border border-brand-blue flex items-center justify-center text-[8px] font-bold"></span>
</button>
</div>
</div>

<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 group-focus-within:text-brand-blue transition-colors" icon="lucide:search" width="20"></iconify-icon>
</div>
<input className="block w-full pl-11 pr-4 py-3.5 bg-white rounded-full text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none shadow-xl shadow-blue-900/10 transition-shadow" placeholder="Search..." type="text"/>
</div>
</div>

<div className="px-6 space-y-8 pt-6">

<div className="bg-brand-salmon rounded-[32px] p-6 text-white shadow-xl shadow-brand-salmon/20 relative overflow-hidden">

<div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -mb-10 -ml-10"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold mb-3">
<iconify-icon icon="lucide:tag" width="12"></iconify-icon> Limited Time Offers
                            </div>
<h2 className="text-lg font-bold mb-2 leading-tight">Full Stack Developer Bundle</h2>
<p className="text-white/90 text-xs mb-5 leading-relaxed max-w-[90%]">Complete web development courses with frontend and backend technologies.</p>
<div className="flex items-center gap-3 mb-5">
<span className="text-2xl font-bold tracking-tight">$199.99</span>
<span className="text-sm text-white/60 line-through font-medium">$399.99</span>
<span className="bg-white text-brand-salmon text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">Save 50%</span>
</div>
<button className="bg-white text-brand-salmon px-5 py-3 rounded-xl text-xs font-bold shadow-sm active:scale-95 transition hover:bg-gray-50">View Package Details</button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight">Featured Courses</h3>
<p className="text-xs text-gray-500 font-medium">Top picks for you</p>
</div>
<button className="text-xs font-medium text-brand-blue hover:text-brand-dark transition" onclick="navTo('courses')">See All</button>
</div>

<div className="bg-white rounded-[28px] p-3 shadow-sm border border-gray-100 flex flex-col group cursor-pointer hover:shadow-md transition duration-300" onclick="navTo('course-details')">
<div className="relative h-48 w-full rounded-[24px] overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<span className="absolute top-3 right-3 bg-brand-salmon/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">31% OFF</span>
</div>
<div className="px-2 pb-2">
<span className="bg-brand-light text-gray-500 text-[10px] font-bold px-2.5 py-1 rounded-lg mb-2 inline-block uppercase tracking-wider">Development</span>
<h4 className="text-base font-bold text-gray-900 mb-1 leading-tight">Complete Web Development</h4>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1 text-orange-400 text-xs">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="font-bold text-gray-700">4.8</span>
<span className="text-gray-400 font-medium">(1.2k)</span>
</div>
<span className="text-sm font-bold text-brand-blue">$49.99</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-gray-900 mb-3 ml-1">Categories</h3>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm min-w-[100px] flex flex-col items-center gap-2 hover:border-brand-blue transition">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">Coding</span>
</button>
<button className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm min-w-[100px] flex flex-col items-center gap-2 hover:border-brand-salmon transition">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
<iconify-icon icon="lucide:palette" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">Design</span>
</button>
<button className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm min-w-[100px] flex flex-col items-center gap-2 hover:border-purple-500 transition">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">Business</span>
</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden px-6 py-6 space-y-5" id="page-courses">

<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-xs font-medium whitespace-nowrap shadow-md">All</button>
<button className="bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full text-xs font-medium whitespace-nowrap hover:bg-gray-50">Design</button>
<button className="bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full text-xs font-medium whitespace-nowrap hover:bg-gray-50">Development</button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-3 rounded-[24px] shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition" onclick="navTo('course-details')">
<img className="w-full aspect-square rounded-[18px] object-cover mb-3 bg-gray-100" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&amp;q=80"/>
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wider">Design</span>
<div className="flex items-center gap-0.5 text-orange-400">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-[10px] font-bold text-gray-700">4.9</span>
</div>
</div>
<h4 className="text-sm font-semibold text-gray-900 leading-tight mb-2">UI/UX Design</h4>
<div className="flex justify-between items-center mt-auto">
<span className="text-[10px] text-gray-400">12h</span>
<span className="text-sm font-bold text-gray-900">$49</span>
</div>
</div>
<div className="bg-white p-3 rounded-[24px] shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition" onclick="navTo('course-details')">
<img className="w-full aspect-square rounded-[18px] object-cover mb-3 bg-gray-100" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&amp;q=80"/>
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-semibold text-brand-blue uppercase tracking-wider">Coding</span>
<div className="flex items-center gap-0.5 text-orange-400">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-[10px] font-bold text-gray-700">4.7</span>
</div>
</div>
<h4 className="text-sm font-semibold text-gray-900 leading-tight mb-2">Python AI</h4>
<div className="flex justify-between items-center mt-auto">
<span className="text-[10px] text-gray-400">8h</span>
<span className="text-sm font-bold text-gray-900">$64</span>
</div>
</div>
</div>
</div>

<div className="page-section hidden px-6 py-6 h-full flex flex-col" id="page-cart">
<div className="flex-1 space-y-4">
<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
<img className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&amp;q=80"/>
<div className="flex-1">
<h4 className="text-sm font-semibold text-gray-900">Complete Web Dev</h4>
<p className="text-xs text-gray-400 mb-2">Frontend &amp; Backend</p>
<div className="flex justify-between items-center">
<span className="text-sm font-bold text-brand-salmon">$49.99</span>
<button className="text-gray-400 hover:text-red-500 transition"><iconify-icon icon="lucide:trash-2" width="18"></iconify-icon></button>
</div>
</div>
</div>
</div>
<div className="mt-auto bg-white p-6 rounded-[24px] shadow-lg border border-gray-100">
<div className="flex justify-between mb-2">
<span className="text-xs text-gray-500">Subtotal</span>
<span className="text-sm font-semibold">$49.99</span>
</div>
<div className="flex justify-between mb-4">
<span className="text-xs text-gray-500">Tax</span>
<span className="text-sm font-semibold">$5.00</span>
</div>
<div className="h-px bg-gray-100 mb-4"></div>
<div className="flex justify-between mb-6">
<span className="text-sm font-bold text-gray-900">Total</span>
<span className="text-xl font-bold text-gray-900">$54.99</span>
</div>
<button className="w-full bg-gray-900 text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg hover:bg-gray-800 transition transform active:scale-[0.98]">Proceed to Checkout</button>
</div>
</div>

<div className="page-section hidden px-6 py-6 space-y-6" id="page-wallet">
<div className="bg-gradient-to-br from-brand-blue to-slate-700 p-6 rounded-[28px] text-white shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="relative z-10">
<p className="text-xs text-white/70 font-medium mb-1">Total Balance</p>
<h2 className="text-3xl font-bold tracking-tight mb-6">$1,240.50</h2>
<div className="flex gap-3">
<button className="flex-1 bg-white/20 backdrop-blur-md py-2.5 rounded-xl text-xs font-semibold hover:bg-white/30 transition flex items-center justify-center gap-2">
<iconify-icon icon="lucide:wallet" width="16"></iconify-icon> Top Up
                            </button>
<button className="flex-1 bg-white/20 backdrop-blur-md py-2.5 rounded-xl text-xs font-semibold hover:bg-white/30 transition flex items-center justify-center gap-2">
<iconify-icon icon="lucide:arrow-right-left" width="16"></iconify-icon> Transfer
                            </button>
</div>
</div>
</div>
</div>

<div className="page-section hidden px-6 py-6 space-y-6" id="page-profile">
<div className="flex flex-col items-center pt-4">
<div className="w-24 h-24 rounded-full p-1 border-2 border-brand-salmon/30 mb-3">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&amp;q=80"/>
</div>
<h2 className="text-lg font-bold text-gray-900">Alex Morgan</h2>
<p className="text-xs text-gray-500">Student • Web Development</p>
</div>
<div className="space-y-2">
<button className="w-full flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-blue/30 transition group">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><iconify-icon icon="lucide:user" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-gray-700">Account</span>
</div>
<iconify-icon className="text-gray-300 group-hover:text-brand-blue" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-blue/30 transition group">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-50 text-purple-500 rounded-lg"><iconify-icon icon="lucide:settings" width="18"></iconify-icon></div>
<span className="text-sm font-medium text-gray-700">Settings</span>
</div>
<iconify-icon className="text-gray-300 group-hover:text-brand-blue" icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>

<div className="page-section hidden bg-white min-h-full" id="page-course-details">
<div className="relative h-64 bg-gray-900">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
<button className="absolute top-6 left-6 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition" onclick="goBack()">
<iconify-icon icon="lucide:arrow-left" width="24"></iconify-icon>
</button>
</div>
<div className="px-6 py-6 -mt-8 relative bg-white rounded-t-[32px] min-h-[50vh]">
<div className="flex justify-between items-start mb-4">
<span className="bg-blue-50 text-brand-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">DEVELOPMENT</span>
<div className="flex items-center gap-1 text-orange-400 text-xs font-bold"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon> 4.8</div>
</div>
<h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Complete Web Development</h1>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Master modern web development from scratch. Learn React, Node.js, and database design in this comprehensive course.</p>
<h3 className="text-sm font-bold text-gray-900 mb-3">Curriculum</h3>
<div className="space-y-3 mb-24">
<div className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white transition">
<div className="w-10 h-10 rounded-full bg-brand-salmon/10 text-brand-salmon flex items-center justify-center font-bold text-sm">01</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-gray-800">Introduction to Web</h4>
<p className="text-xs text-gray-400">15 mins</p>
</div>
<iconify-icon className="text-brand-blue" icon="lucide:play-circle" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white transition">
<div className="w-10 h-10 rounded-full bg-brand-salmon/10 text-brand-salmon flex items-center justify-center font-bold text-sm">02</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-gray-800">HTML &amp; CSS</h4>
<p className="text-xs text-gray-400">2h 30 mins</p>
</div>
<iconify-icon className="text-gray-300" icon="lucide:lock" width="20"></iconify-icon>
</div>
</div>
<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex items-center justify-between md:absolute md:rounded-b-[32px] z-20">
<div>
<span className="text-xs text-gray-400 block font-medium">Total Price</span>
<span className="text-2xl font-bold text-gray-900">$49.99</span>
</div>
<button className="bg-brand-salmon text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-salmon/20 hover:bg-[#E08C6D] transition transform active:scale-95" onclick="navTo('cart')">Enroll Now</button>
</div>
</div>
</div>
</div>

<div className="glass-nav absolute bottom-0 w-full px-6 py-3 pb-6 flex justify-between items-center z-30 transition-transform duration-300" id="bottom-nav">
<button className="nav-item active flex flex-col items-center gap-1.5 text-brand-salmon group" data-target="home" onclick="navTo('home')">
<iconify-icon className="group-active:scale-90 transition-transform" icon="lucide:home" width="24"></iconify-icon>
<span className="text-[10px] font-semibold">Home</span>
</button>
<button className="nav-item flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition group" data-target="courses" onclick="navTo('courses')">
<iconify-icon className="group-active:scale-90 transition-transform" icon="lucide:book-open" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Courses</span>
</button>
<button className="nav-item flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition group" data-target="cart" onclick="navTo('cart')">
<iconify-icon className="group-active:scale-90 transition-transform" icon="lucide:shopping-cart" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Cart</span>
</button>
<button className="nav-item flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition group" data-target="wallet" onclick="navTo('wallet')">
<iconify-icon className="group-active:scale-90 transition-transform" icon="lucide:wallet" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Wallet</span>
</button>
<button className="nav-item flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition group" data-target="profile" onclick="navTo('profile')">
<iconify-icon className="group-active:scale-90 transition-transform" icon="lucide:user" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</div>


    </>
  );
}
