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



      (function(){
          const btn = document.querySelector('nav button');
          const sidebar = document.getElementById('mobile-sidebar');
          const close = document.getElementById('close-sidebar-btn');
          const overlay = document.getElementById('sidebar-overlay');
          function toggle() {
              const closed = sidebar.classList.contains('translate-x-full');
              if (closed) {
                  sidebar.classList.remove('translate-x-full');
                  overlay.classList.remove('opacity-0', 'pointer-events-none');
                  overlay.classList.add('opacity-100', 'pointer-events-auto');
              } else {
                  sidebar.classList.add('translate-x-full');
                  overlay.classList.add('opacity-0', 'pointer-events-none');
                  overlay.classList.remove('opacity-100', 'pointer-events-auto');
              }
          }
          if(btn) btn.onclick = toggle;
          if(close) close.onclick = toggle;
          if(overlay) overlay.onclick = toggle;
      })();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-zinc-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="flex -space-x-2 overflow-hidden p-1 bg-purple-50 rounded-full border border-purple-100">
<img alt="Senior user" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="Senior user" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="Senior user" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-purple-600 transition-colors">
                SeniorsStuck
                <span className="text-purple-600">.com</span>
</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Classes
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Resources
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Community
            </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-sm shadow-purple-200" href="#">
              Get Unstuck
            </a>
</div>

<div className="md:hidden">
<button className="text-zinc-500 hover:text-zinc-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">

<div className="absolute inset-0 -z-10 hero-pattern opacity-50"></div>
<div className="absolute top-20 right-0 -z-10 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-5 text-center lg:text-left mb-12 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
              Over 2,000 seniors joined this week
            </div>
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
              Unstuck your
              <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                digital life.
              </span>
</h1>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Stop struggling with technology. We help you video chat with
              grandkids, secure your finances, and browse the web with
              confidence. Simple, human help.
            </p>

<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm placeholder:text-zinc-400" placeholder="Enter your email address" type="email"/>
</div>
<button className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-lg transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group">
                Start Learning
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
<div className="flex -space-x-3">
<img alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Member" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs font-semibold text-zinc-600">
                  +2k
                </div>
</div>
<div className="text-sm text-zinc-500">
<div className="flex items-center text-amber-400 mb-0.5">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-700">5.0/5</span>
                from happy families
              </div>
</div>
</div>

<div className="lg:col-span-7 relative">

<div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px] w-full p-4 bg-white rounded-3xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 relative z-10">

<div className="col-span-8 row-span-4 rounded-2xl overflow-hidden relative group">
<img alt="Senior lady smiling at laptop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-sm flex items-center gap-3">
<div className="bg-green-100 text-green-600 p-2 rounded-lg">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900">
                      Zoom Call Success
                    </p>
<p className="text-[10px] text-zinc-500">
                      Just connected with grandson!
                    </p>
</div>
</div>
</div>

<div className="col-span-4 row-span-3 rounded-2xl overflow-hidden relative group">
<img alt="Senior man reading on desktop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-lg shadow-sm">
<iconify-icon className="text-purple-600" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
</div>

<div className="col-span-5 row-span-3 rounded-2xl overflow-hidden relative group">
<img alt="Senior couple laughing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="col-span-7 row-span-2 bg-zinc-900 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:laptop-minimalistic-linear" width="100"></iconify-icon>
</div>
<p className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">
                  Weekly Challenge
                </p>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold text-white tracking-tight">
                    Email Mastery
                  </span>
</div>
<div className="w-full bg-zinc-800 h-1.5 mt-4 rounded-full overflow-hidden">
<div className="bg-purple-500 w-3/4 h-full rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-zinc-200/60 rounded-3xl -z-10"></div>
</div>
</div>
</div>
</main>

<section className="py-16 border-t border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
              Computer Basics
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Master the mouse, keyboard, and desktop. No jargon, just plain
              English instructions.
            </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
              Safe Browsing
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Learn to spot scams, secure your passwords, and shop online
              without worry.
            </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
              Family Connection
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Easy guides for Zoom, FaceTime, and social media to keep you in
              the loop.
            </p>
</div>
</div>
</div>
</section>
<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 border border-purple-200">
<iconify-icon icon="solar:accessibility-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">
                SeniorsStuck
              </span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Simplifying technology for the golden generation. One click at a
              time.
            </p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Start Here
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Video Guides
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Safety Tips
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Glossary
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Terms
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4">Weekly Tips</h4>
<form className="flex flex-col gap-2">
<input className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-purple-500 placeholder:text-zinc-400" placeholder="Email address" type="email"/>
<button className="px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-sm">
                Subscribe
              </button>
</form>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-400">
            © 2024 SeniorsStuck. All rights reserved.
          </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
<div className="fixed inset-0 z-[55] bg-zinc-900/20 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="sidebar-overlay"></div>
<aside className="fixed inset-y-0 right-0 z-[60] w-72 bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col" id="mobile-sidebar">
<div className="p-5 border-b border-zinc-100 flex justify-between items-center">
<span className="text-lg font-semibold tracking-tight text-zinc-900">
          Menu
        </span>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors" id="close-sidebar-btn">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-1">
<a className="block px-4 py-3 rounded-lg bg-purple-50 text-purple-900 font-medium border border-purple-100" href="#">
          Classes
        </a>
<a className="block px-4 py-3 rounded-lg text-zinc-600 font-medium hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
          Resources
        </a>
<a className="block px-4 py-3 rounded-lg text-zinc-600 font-medium hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
          Community
        </a>
</div>
<div className="p-5 border-t border-zinc-100">
<a className="flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-200" href="#">
          Get Unstuck
        </a>
</div>
</aside>


    </>
  );
}
