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



        // Initialize Lucide icons
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
      

<nav className="fixed w-full z-50 top-0 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-orange-500" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-white">PaceExchange</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#events">Find a Race</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#safety">Safety &amp; Fees</a>
</div>
<div className="flex items-center gap-4">
<a className="text-base font-medium text-white hover:text-zinc-300 transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white text-zinc-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors" href="#onboarding">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden hero-glow">

<div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen">
<img alt="Runners blurred in motion" className="w-full h-full object-cover blur-[2px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-base font-medium mb-8">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
<span>Instant Transfers Now Live</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Your run doesn't end <br className="hidden md:block"/>
                at <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">sold out.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The secure marketplace for athletes to buy and sell race bibs. Verified identities, buyer protection, and instant digital transfers when you're ready to run.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#events">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
                    Find a Bib
                </a>
<a className="w-full sm:w-auto border border-zinc-700 bg-zinc-900/50 backdrop-blur px-8 py-4 rounded-full text-lg font-medium text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#onboarding">
<i className="w-5 h-5" data-lucide="tag" strokeWidth="1.5"></i>
                    List a Bib to Sell
                </a>
</div>
</div>
</section>

<section className="border-y border-zinc-800/50 bg-zinc-900/20" id="safety">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-orange-400 border border-zinc-700/50">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Buyer Protection</h3>
<p className="text-base text-zinc-400 font-light">We prevent scams. Funds are held securely and backed by Stripe compliance until the transfer is officially confirmed by the race organizer.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-orange-400 border border-zinc-700/50">
<i className="w-6 h-6" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Verified Athletes</h3>
<p className="text-base text-zinc-400 font-light">Both buyers and sellers pass ID verification. We ensure the runner profile matches the bib requirements to prevent race-day rejections.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-orange-400 border border-zinc-700/50">
<i className="w-6 h-6" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Instant Matching</h3>
<p className="text-base text-zinc-400 font-light">Once fully registered and validated, get notified instantly when a bib that matches your pace and category becomes available.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="events">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-white mb-3">Trending Races Near You</h2>
<p className="text-lg text-zinc-400 font-light flex items-center gap-2">
<i className="w-5 h-5 text-zinc-500" data-lucide="map-pin" strokeWidth="1.5"></i>
                    Showing events within 500 miles of your location
                </p>
</div>
<a className="text-base font-medium text-orange-400 hover:text-orange-300 flex items-center gap-1 group" href="#">
                View all races 
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-600 transition-colors">
<div className="h-48 w-full relative">
<img alt="Chicago Marathon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full border border-zinc-700/50">
                        Oct 13, 2024
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-white">Chicago Marathon</h3>
<span className="bg-orange-500/10 text-orange-400 text-sm font-medium px-2.5 py-1 rounded-md border border-orange-500/20">42 Listed</span>
</div>
<div className="flex items-center gap-4 text-base text-zinc-400 font-light mb-6">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Chicago, IL</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="route" strokeWidth="1.5"></i> 26.2 mi</span>
</div>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors border border-zinc-700/50">
                        View Available Bibs
                    </button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-600 transition-colors">
<div className="h-48 w-full relative">
<img alt="NYC Half" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full border border-zinc-700/50">
                        Mar 17, 2024
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-white">NYC Half Marathon</h3>
<span className="bg-orange-500/10 text-orange-400 text-sm font-medium px-2.5 py-1 rounded-md border border-orange-500/20">18 Listed</span>
</div>
<div className="flex items-center gap-4 text-base text-zinc-400 font-light mb-6">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> New York, NY</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="route" strokeWidth="1.5"></i> 13.1 mi</span>
</div>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors border border-zinc-700/50">
                        View Available Bibs
                    </button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-600 transition-colors">
<div className="h-48 w-full relative">
<img alt="Boston Qualifier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur text-white text-sm font-medium px-3 py-1 rounded-full border border-zinc-700/50">
                        May 05, 2024
                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold tracking-tight text-white">Mountains to Beach</h3>
<span className="bg-orange-500/10 text-orange-400 text-sm font-medium px-2.5 py-1 rounded-md border border-orange-500/20">5 Listed</span>
</div>
<div className="flex items-center gap-4 text-base text-zinc-400 font-light mb-6">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Ventura, CA</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="route" strokeWidth="1.5"></i> 26.2 mi</span>
</div>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors border border-zinc-700/50">
                        View Available Bibs
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 relative overflow-hidden" id="how-it-works">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">One platform. Both sides of the race.</h2>
<p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">Whether you're injured and need to sell, or training hard and missed the cutoff—we make the exchange secure and compliant.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-8 flex items-center gap-3">
<i className="text-blue-400" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                        Buying a Bib
                    </h3>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-white font-medium z-10 shrink-0">1</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Register &amp; Verify</h4>
<p className="text-base text-zinc-400 font-light">Create your athlete profile and verify your ID. We need this to ensure the race organizer accepts the transfer.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-white font-medium z-10 shrink-0">2</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Set Your Pace</h4>
<p className="text-base text-zinc-400 font-light">Tell us what race you want and your expected pace group. Once fully registered, you're in the matching pool.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center text-white font-medium z-10 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]">3</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Instant Purchase</h4>
<p className="text-base text-zinc-400 font-light">When a matching bib drops, claim it instantly. Your payment is held securely in buyer protection until the official transfer clears.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-8 flex items-center gap-3">
<i className="text-orange-400" data-lucide="tag" strokeWidth="1.5"></i>
                        Selling a Bib
                    </h3>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-white font-medium z-10 shrink-0">1</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">List Your Entry</h4>
<p className="text-base text-zinc-400 font-light">Upload your race confirmation. We'll automatically verify it with the organizer's database to prevent fraudulent listings.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-white font-medium z-10 shrink-0">2</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">We Find a Buyer</h4>
<p className="text-base text-zinc-400 font-light">We match your bib with a verified runner looking for your specific pace and corral requirements.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-orange-500 border border-orange-400 flex items-center justify-center text-white font-medium z-10 shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.5)]">3</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Get Paid Securely</h4>
<p className="text-base text-zinc-400 font-light">Once the transfer is approved by the race, funds are released directly to your bank account via Stripe.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-zinc-800/50 bg-zinc-950">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Transparent Pricing. No hidden fees.</h2>
<p className="text-lg text-zinc-400 font-light mb-10">We believe in keeping the sport accessible. Our fees only cover the cost of secure payment processing and identity verification.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full sm:w-64 flex flex-col items-center">
<span className="text-base text-zinc-400 font-medium mb-2">To List a Bib</span>
<span className="text-4xl font-semibold text-white mb-1">Free</span>
<span className="text-sm text-zinc-500 font-light">Always $0 to list</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full sm:w-64 flex flex-col items-center relative overflow-hidden">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
<span className="text-base text-zinc-400 font-medium mb-2">Upon Sale</span>
<span className="text-4xl font-semibold text-white mb-1">10%</span>
<span className="text-sm text-zinc-500 font-light">Commission to cover <br/> Stripe &amp; Verification</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="onboarding">
<div className="absolute inset-0 -z-10 opacity-20">
<img alt="Dark running track" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/90"></div>
</div>
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to cross the start line?</h2>
<p className="text-lg text-zinc-400 font-light mb-10">Create your athlete profile today. Validate your identity once, and be ready to buy or sell bibs instantly.</p>
<form className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl text-left">
<div className="mb-6">
<label className="block text-sm font-medium text-zinc-300 mb-2">Email address</label>
<input className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all" placeholder="runner@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<button className="flex flex-col items-center justify-center gap-2 p-4 border border-zinc-700 rounded-xl bg-zinc-950 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group" type="button">
<i className="w-6 h-6 text-zinc-500 group-hover:text-orange-400 transition-colors" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">I want to Buy</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-4 border border-zinc-700 rounded-xl bg-zinc-950 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group" type="button">
<i className="w-6 h-6 text-zinc-500 group-hover:text-orange-400 transition-colors" data-lucide="tag" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">I want to Sell</span>
</button>
</div>
<button className="w-full bg-white text-zinc-950 font-medium text-lg rounded-xl px-4 py-4 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="submit">
                    Create Athlete Profile
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="mt-6 text-center text-xs text-zinc-500 font-light flex items-center justify-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="lock" strokeWidth="1.5"></i>
                    Secure verification. Never share your password.
                </p>
</form>
</div>
</section>

<footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<i className="text-zinc-500" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight text-zinc-400">PaceExchange</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500 font-light">
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Stripe Connected Accounts</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<p className="text-sm text-zinc-600 font-light">© 2024 PaceExchange. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
