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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">

<div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-400"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex shrink-0 items-center">
<span className="text-xl font-medium tracking-tighter text-slate-900">wwaave</span>
</div>

<div className="hidden md:block">
<div className="flex items-center gap-8">
<a className="text-sm font-normal text-slate-600 transition-colors hover:text-orange-500" href="#">About</a>
<a className="text-sm font-normal text-slate-600 transition-colors hover:text-orange-500" href="#">How it Works</a>
<a className="text-sm font-normal text-slate-600 transition-colors hover:text-orange-500" href="#">Become A Host</a>
<a className="text-sm font-normal text-slate-600 transition-colors hover:text-orange-500" href="#">FAQ</a>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden text-sm font-normal text-slate-600 transition-colors hover:text-orange-500 sm:block" href="#">Sign in</a>
<a className="inline-flex items-center justify-center rounded-sm bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600" href="#">
                        Create account
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-36 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
<div className="max-w-2xl">
<h1 className="text-5xl font-medium tracking-tighter text-slate-900 sm:text-6xl lg:text-7xl">
                        Hello to gigs.
                    </h1>
<p className="mt-6 text-lg font-light text-slate-600 leading-relaxed sm:text-xl">
                        Connecting travelling creatives with welcoming host venues on one seamless community hub. Discover stages, share spaces, and build authentic connections.
                    </p>
<div className="mt-10 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-sm bg-orange-500 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-orange-600" href="#">
                            Browse Venues
                            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white px-8 py-3.5 text-base font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50" href="#">
                            I'm an Artist
                        </a>
</div>
</div>
<div className="relative w-full max-w-lg mx-auto lg:max-w-none">
<div className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
<div className="aspect-square w-full overflow-hidden rounded-sm bg-slate-100">
<img alt="Musician at sunset" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mt-4 mb-1 px-1">
<div className="flex items-center justify-between text-xs text-slate-400 font-medium tracking-tight mb-2">
<span>0:00</span>
<span>Live</span>
</div>
<div className="flex items-end gap-0.5 h-10 w-full opacity-80">
<div className="w-full bg-slate-200 h-[20%]"></div>
<div className="w-full bg-slate-200 h-[40%]"></div>
<div className="w-full bg-slate-200 h-[60%]"></div>
<div className="w-full bg-orange-500 h-[80%]"></div>
<div className="w-full bg-orange-500 h-[100%]"></div>
<div className="w-full bg-orange-500 h-[70%]"></div>
<div className="w-full bg-orange-500 h-[50%]"></div>
<div className="w-full bg-slate-200 h-[90%]"></div>
<div className="w-full bg-slate-200 h-[60%]"></div>
<div className="w-full bg-slate-200 h-[40%]"></div>
<div className="w-full bg-slate-200 h-[80%]"></div>
<div className="w-full bg-slate-200 h-[30%]"></div>
<div className="w-full bg-slate-200 h-[50%]"></div>
<div className="w-full bg-slate-200 h-[70%]"></div>
<div className="w-full bg-slate-200 h-[40%]"></div>
<div className="w-full bg-slate-200 h-[20%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-medium tracking-tighter text-slate-900 sm:text-4xl">Worldwide Artist and Venue Exchange</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg font-light text-slate-600">A balanced ecosystem designed for mutual benefit.</p>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">

<div className="rounded-lg border border-slate-200 bg-white p-8 transition-shadow hover:shadow-sm">
<div className="mb-8 flex items-center gap-4 border-b border-slate-100 pb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-inner">
<iconify-icon className="text-2xl" icon="solar:mic-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tighter text-slate-900">Artists</h3>
</div>
<div className="grid gap-8 sm:grid-cols-2">
<div>
<iconify-icon className="mb-3 text-2xl text-orange-500" icon="solar:plane-linear"></iconify-icon>
<h4 className="text-base font-medium tracking-tight text-slate-900">Get Gigs &amp; Travel</h4>
<p className="mt-2 text-sm font-light text-slate-600">Find opportunities to perform while exploring new destinations.</p>
</div>
<div>
<iconify-icon className="mb-3 text-2xl text-orange-500" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-base font-medium tracking-tight text-slate-900">Trust &amp; Safety</h4>
<p className="mt-2 text-sm font-light text-slate-600">Plan with confidence through our verified community network.</p>
</div>
<div className="sm:col-span-2 border-t border-slate-100 pt-6">
<iconify-icon className="mb-3 text-2xl text-orange-500" icon="solar:ticket-linear"></iconify-icon>
<h4 className="text-base font-medium tracking-tight text-slate-900">Free Membership</h4>
<p className="mt-2 text-sm font-light text-slate-600">Join the platform at no cost and start connecting immediately.</p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-8 transition-shadow hover:shadow-sm">
<div className="mb-8 flex items-center gap-4 border-b border-slate-100 pb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-sm bg-slate-800 text-white shadow-inner">
<iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tighter text-slate-900">Venues</h3>
</div>
<div className="grid gap-8 sm:grid-cols-2">
<div>
<iconify-icon className="mb-3 text-2xl text-slate-700" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-base font-medium tracking-tight text-slate-900">Connect with Creatives</h4>
<p className="mt-2 text-sm font-light text-slate-600">Bring fresh talent and vibrant energy to your space.</p>
</div>
<div>
<iconify-icon className="mb-3 text-2xl text-slate-700" icon="solar:calendar-linear"></iconify-icon>
<h4 className="text-base font-medium tracking-tight text-slate-900">Flexible Hosting</h4>
<p className="mt-2 text-sm font-light text-slate-600">Control your schedule and set terms that work for you.</p>
</div>
<div className="sm:col-span-2 border-t border-slate-100 pt-6">
<iconify-icon className="mb-3 text-2xl text-slate-700" icon="solar:handshake-linear"></iconify-icon>
<h4 className="text-base font-medium tracking-tight text-slate-900">Join a Community</h4>
<p className="mt-2 text-sm font-light text-slate-600">Become part of a network supporting live arts and culture.</p>
</div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="group cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:border-orange-500 hover:shadow-sm">
<div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
<img alt="Venue front" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-orange-500 transition-colors">Explore Host Venues</h4>
<p className="mt-1.5 text-sm font-light text-slate-600">Browse by location, dates, vibe and rating to find your perfect stage.</p>
</div>
</div>
<div className="group cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:border-orange-500 hover:shadow-sm">
<div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
<img alt="Live performance" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<h4 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-orange-500 transition-colors">Star Rating System</h4>
<p className="mt-1.5 text-sm font-light text-slate-600">Artists and Venues rate their experiences to maintain quality.</p>
</div>
</div>
<div className="group cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:border-orange-500 hover:shadow-sm">
<div className="aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-200">
<img alt="Cozy room" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-lg font-medium tracking-tight text-slate-900 group-hover:text-orange-500 transition-colors">Mutual Exchange</h4>
<p className="mt-1.5 text-sm font-light text-slate-600">Accommodation, drinks, meals and local pickup are covered.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white py-20 sm:py-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-medium tracking-tighter text-slate-900 sm:text-4xl">How It Works</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg font-light text-slate-600">Three simple steps to connect with venues.</p>
</div>
<div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
<div className="relative text-center">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-900 transition-colors hover:border-orange-500 hover:text-orange-500">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium tracking-tight text-slate-900">1. Explore Host Venues</h3>
<p className="mt-3 text-sm font-light text-slate-600 leading-relaxed px-4">Search by location, accommodation type, vibe, and star rating to find your match.</p>
</div>
<div className="relative text-center">
<div className="absolute left-0 top-8 hidden w-full -translate-x-1/2 border-t border-slate-200 md:block z-0"></div>
<div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-900 transition-colors hover:border-orange-500 hover:text-orange-500">
<iconify-icon className="text-2xl" icon="solar:forward-linear"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium tracking-tight text-slate-900">2. Lock in a Gig</h3>
<p className="mt-3 text-sm font-light text-slate-600 leading-relaxed px-4">Share your profile, start a conversation, and send a request to perform.</p>
</div>
<div className="relative text-center">
<div className="absolute left-0 top-8 hidden w-full -translate-x-1/2 border-t border-slate-200 md:block z-0"></div>
<div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-500 bg-orange-500 text-white shadow-sm">
<iconify-icon className="text-2xl" icon="solar:music-notes-linear"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium tracking-tight text-slate-900">3. Play and Stay</h3>
<p className="mt-3 text-sm font-light text-slate-600 leading-relaxed px-4">Take to the stage, share a meal, and get some rest in your hosted accommodation.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-900 py-20 sm:py-28 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl">Safety &amp; Standards</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg font-light text-slate-400">We prioritize trust, safety, and authentic connections in our community.</p>
</div>
<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="flex flex-col items-start rounded-sm border border-slate-800 bg-slate-800/50 p-8">
<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-700 text-orange-500">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium tracking-tight text-white">Verification Process</h3>
<p className="mt-3 text-sm font-light text-slate-400">Comprehensive verification system for all venues and artists to ensure identity.</p>
</div>
<div className="flex flex-col items-start rounded-sm border border-slate-800 bg-slate-800/50 p-8">
<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-700 text-orange-500">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium tracking-tight text-white">Pre-Confirmation Chat</h3>
<p className="mt-3 text-sm font-light text-slate-400">Connect and communicate before booking to ensure a perfect match for both parties.</p>
</div>
<div className="flex flex-col items-start rounded-sm border border-slate-800 bg-slate-800/50 p-8">
<div className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-700 text-orange-500">
<iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon>
</div>
<h3 className="mt-6 text-lg font-medium tracking-tight text-white">Star Rating System</h3>
<p className="mt-3 text-sm font-light text-slate-400">Trusted star averages that highlight consistent, positive community hosting experiences.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 sm:py-28">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-medium tracking-tighter text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
</div>
<div className="mt-12 divide-y divide-slate-200 border-t border-slate-200">
<div className="py-6">
<h3 className="text-base font-medium tracking-tight text-slate-900">Do artists pay to join?</h3>
<p className="mt-2 text-sm font-light text-slate-600 leading-relaxed">No, artists join for free. We believe in supporting traveling musicians and making authentic cultural exchange accessible to all.</p>
</div>
<div className="py-6">
<h3 className="text-base font-medium tracking-tight text-slate-900">How much do venues pay?</h3>
<p className="mt-2 text-sm font-light text-slate-600 leading-relaxed">Venues can join with flexible subscription options starting at just $15/month, with no booking fees or hidden costs.</p>
</div>
<div className="py-6">
<h3 className="text-base font-medium tracking-tight text-slate-900">What types of gigs are available?</h3>
<p className="mt-2 text-sm font-light text-slate-600 leading-relaxed">From intimate house concerts to café performances, our platform features diverse venues seeking authentic musical experiences.</p>
</div>
<div className="py-6">
<h3 className="text-base font-medium tracking-tight text-slate-900">How do I know if a venue is legitimate?</h3>
<p className="mt-2 text-sm font-light text-slate-600 leading-relaxed">All venues undergo verification, and we encourage pre-booking conversations to ensure mutual comfort and authenticity.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50 py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

<div className="lg:col-span-1">
<div className="flex items-center">
<span className="text-xl font-medium tracking-tighter text-slate-900">wwaave</span>
</div>
<p className="mt-4 text-sm font-light text-slate-500">Worldwide Artist and Venue Exchange.</p>
</div>

<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3 lg:gap-12">
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-slate-900">Platform</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Benefits</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">How It Works</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Safety</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-slate-900">Community</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">For Artists</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">For Venues</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Explore Venues</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-slate-900">Support</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Terms</a></li>
<li><a className="text-sm font-light text-slate-600 hover:text-orange-500 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between border-t border-slate-200 pt-8 sm:flex-row">
<p className="text-xs font-light text-slate-400">© 2025 WWAAVE PTY LTD. All rights reserved.</p>
<div className="mt-4 flex gap-5 sm:mt-0">
<a className="text-slate-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-orange-500 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
