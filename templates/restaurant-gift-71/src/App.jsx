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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="absolute top-0 w-full z-50 border-b border-white/5 bg-neutral-950/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex flex-col items-center justify-center group" href="#">

<svg className="text-[#C65A1E] transition-opacity group-hover:opacity-80" fill="none" height="65" viewbox="0 0 400 130" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M195 10L145 60L165 65L185 45L205 70L235 40L265 75L295 60L210 10H195Z" fill="currentColor"></path>
<text fill="currentColor" fontFamily="'Forum', serif" fontSize="52" font-weight="600" letter-spacing="4" text-anchor="middle" x="50%" y="100">THE LOST YETI</text>
<text fill="currentColor" fontFamily="'Open Sans', sans-serif" fontSize="16" font-weight="500" letter-spacing="8" text-anchor="middle" x="50%" y="125">KITCHEN &amp; BAR</text>
</svg>
</a>
<a className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#C65A1E]/50 text-[#C65A1E] text-sm font-medium hover:bg-[#C65A1E] hover:text-white transition-colors" href="#purchase">
                Buy Voucher
            </a>
</div>
</nav>

<header className="relative pt-40 pb-24 md:pt-56 md:pb-32 flex items-center justify-center min-h-[65vh] overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950"></div>
<div className="relative z-10 text-center max-w-3xl mx-auto px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm mb-8 backdrop-blur-sm">
<i className="w-4 h-4 text-[#C65A1E]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Digital delivery available instantly</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6" style={{fontFamily: '\'Forum\', serif'}}>
                Gift Vouchers
            </h1>
<p className="text-xl md:text-2xl text-neutral-300 font-medium mb-4" style={{fontFamily: '\'Forum\', serif'}}>
                Give the Gift of Good Food &amp; Good Nights
            </p>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Perfect for birthdays, celebrations, and special occasions at The Lost Yeti. Share an unforgettable dining experience.
            </p>
</div>
</header>

<section className="py-24 bg-neutral-950 relative" id="options">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{fontFamily: '\'Forum\', serif'}}>
                    Choose Your Voucher
                </h2>
<p className="text-lg text-neutral-400">Select an amount or enter a custom value.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-8 flex flex-col transition-all duration-300 hover:border-[#C65A1E]/40 hover:-translate-y-1 hover:bg-neutral-900 cursor-pointer">
<h3 className="text-4xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Forum\', serif'}}>£25</h3>
<p className="text-lg text-neutral-400 mb-8 flex-grow">Perfect for casual dining or drinks.</p>
<button className="w-full py-3 rounded-lg bg-neutral-800 text-white font-medium border border-neutral-700 transition-colors group-hover:border-[#C65A1E] group-hover:text-[#C65A1E]">
                        Select
                    </button>
</div>

<div className="group relative bg-neutral-900 rounded-xl border border-[#C65A1E] p-8 flex flex-col transition-all duration-300 shadow-[0_0_30px_rgba(198,90,30,0.1)] hover:shadow-[0_0_40px_rgba(198,90,30,0.2)] hover:-translate-y-1 cursor-pointer">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C65A1E] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                        Most Popular
                    </div>
<h3 className="text-4xl font-semibold tracking-tight text-white mb-2 mt-2" style={{fontFamily: '\'Forum\', serif'}}>£50</h3>
<p className="text-lg text-neutral-300 mb-8 flex-grow">Ideal for a dinner for two and drinks.</p>
<button className="w-full py-3 rounded-lg bg-[#C65A1E] text-white font-medium shadow-lg shadow-[#C65A1E]/20 transition-all hover:bg-[#b04f18]">
                        Selected
                    </button>
</div>

<div className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-8 flex flex-col transition-all duration-300 hover:border-[#C65A1E]/40 hover:-translate-y-1 hover:bg-neutral-900 cursor-pointer">
<h3 className="text-4xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Forum\', serif'}}>£100</h3>
<p className="text-lg text-neutral-400 mb-8 flex-grow">A premium and complete dining experience.</p>
<button className="w-full py-3 rounded-lg bg-neutral-800 text-white font-medium border border-neutral-700 transition-colors group-hover:border-[#C65A1E] group-hover:text-[#C65A1E]">
                        Select
                    </button>
</div>

<div className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-8 flex flex-col transition-all duration-300 hover:border-[#C65A1E]/40 hover:bg-neutral-900">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2" style={{fontFamily: '\'Forum\', serif'}}>Custom</h3>
<p className="text-lg text-neutral-400 mb-6 flex-grow">Choose your own value.</p>
<div className="relative w-full mb-6 mt-auto">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">£</span>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-8 pr-4 py-3 text-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-colors" placeholder="0.00" type="number"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-t border-neutral-900" id="purchase">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8 md:p-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8" style={{fontFamily: '\'Forum\', serif'}}>
                    Send a Digital Gift Voucher
                </h2>
<form className="space-y-8">

<div>
<h3 className="text-lg font-medium text-white border-b border-neutral-800 pb-2 mb-6">Your Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-400">Your Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-400">Your Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-colors" placeholder="john@example.com" type="email"/>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-medium text-white border-b border-neutral-800 pb-2 mb-6">Recipient Details</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-400">Recipient Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-colors" placeholder="Jane Smith" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-neutral-400">Recipient Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-colors" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="mt-6 space-y-2">
<label className="block text-sm font-medium text-neutral-400">Personal Message (Optional)</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#C65A1E] focus:ring-1 focus:ring-[#C65A1E] transition-colors resize-none" placeholder="Wishing you a wonderful evening..." rows="4"></textarea>
</div>
</div>

<div className="bg-neutral-950 rounded-xl p-6 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<p className="text-sm text-neutral-400 mb-1">Total Amount</p>
<p className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Forum\', serif'}}>£50.00</p>
</div>
<button className="w-full md:w-auto px-8 py-4 rounded-lg bg-[#C65A1E] text-white text-lg font-medium shadow-lg shadow-[#C65A1E]/20 hover:bg-[#b04f18] transition-all flex items-center justify-center gap-2" type="button">
                            Complete Purchase
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<p className="text-center text-sm text-neutral-500 mt-4 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="mail-check" strokeWidth="1.5"></i>
                        Voucher is delivered instantly via email upon successful payment.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{fontFamily: '\'Forum\', serif'}}>
                    How It Works
                </h2>
<p className="text-lg text-neutral-400">A seamless gifting experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

<div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 z-10 shadow-lg">
<i className="w-8 h-8 text-[#C65A1E]" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: '\'Forum\', serif'}}>1. Choose Voucher</h3>
<p className="text-lg text-neutral-400">Select a predefined value or enter a custom amount.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 z-10 shadow-lg">
<i className="w-8 h-8 text-[#C65A1E]" data-lucide="user-round" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: '\'Forum\', serif'}}>2. Recipient Details</h3>
<p className="text-lg text-neutral-400">Tell us who the lucky recipient is and where to send it.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 z-10 shadow-lg">
<i className="w-8 h-8 text-[#C65A1E]" data-lucide="pen-line" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: '\'Forum\', serif'}}>3. Personalize</h3>
<p className="text-lg text-neutral-400">Add a heartfelt message to make it extra special.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-2xl bg-neutral-900 border border-[#C65A1E]/30 bg-[#C65A1E]/5 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(198,90,30,0.1)]">
<i className="w-8 h-8 text-[#C65A1E]" data-lucide="send" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: '\'Forum\', serif'}}>4. Instant Delivery</h3>
<p className="text-lg text-neutral-400">The beautiful digital voucher arrives immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4" style={{fontFamily: '\'Forum\', serif'}}>
                        Perfect For Any Occasion
                    </h2>
<p className="text-lg text-neutral-400">A dining experience at The Lost Yeti is a gift they will truly remember.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 flex flex-col items-start hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-300 mb-4" data-lucide="cake" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white">Birthdays</h3>
</div>
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 flex flex-col items-start hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-300 mb-4" data-lucide="heart" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white">Anniversaries</h3>
</div>
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 flex flex-col items-start hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-300 mb-4" data-lucide="briefcase" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white">Corporate Gifts</h3>
</div>
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 flex flex-col items-start hover:bg-neutral-900 transition-colors">
<i className="w-6 h-6 text-neutral-300 mb-4" data-lucide="glass-water" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white">Celebrations</h3>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-neutral-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C65A1E]/15 via-neutral-950/0 to-neutral-950/0"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6" style={{fontFamily: '\'Forum\', serif'}}>
                Make someone's day unforgettable
            </h2>
<p className="text-lg text-neutral-400 mb-10">Give a gift that brings people together over exceptional food and drinks.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#C65A1E] text-white text-lg font-medium shadow-lg shadow-[#C65A1E]/20 hover:bg-[#b04f18] transition-all" href="#purchase">
                    Buy Gift Voucher
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-neutral-700 text-white text-lg font-medium hover:bg-neutral-800 transition-colors" href="#">
                    Book a Table
                </a>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<svg className="text-[#C65A1E] mb-6" fill="none" height="50" viewbox="0 0 400 130" width="150" xmlns="http://www.w3.org/2000/svg">
<path d="M195 10L145 60L165 65L185 45L205 70L235 40L265 75L295 60L210 10H195Z" fill="currentColor"></path>
<text fill="currentColor" fontFamily="'Forum', serif" fontSize="52" font-weight="600" letter-spacing="4" text-anchor="middle" x="50%" y="100">THE LOST YETI</text>
<text fill="currentColor" fontFamily="'Open Sans', sans-serif" fontSize="16" font-weight="500" letter-spacing="8" text-anchor="middle" x="50%" y="125">KITCHEN &amp; BAR</text>
</svg>
<p className="text-lg text-neutral-500 max-w-sm mb-6 font-medium" style={{fontFamily: '\'Forum\', serif'}}>Good Food. Good Nights.</p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-[#C65A1E] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-[#C65A1E] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Explore</h4>
<ul className="space-y-4 text-lg text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#">Reservations</a></li>
<li><a className="hover:text-[#C65A1E] transition-colors" href="#">Gift Vouchers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-lg text-neutral-400">
<li>Guernsey, Channel Islands</li>
<li>info@thelostyeti.com</li>
<li>+44 1481 123456</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600">
<p>© 2023 The Lost Yeti. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
