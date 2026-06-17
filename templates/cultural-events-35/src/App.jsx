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



        // Simple Interaction Script for the Demo
        // Toggle Checkout view
        document.querySelector('.btn-primary').addEventListener('click', function(e) {
            if(this.innerText.includes('Proceed')) {
                const checkoutForm = document.getElementById('checkout-form');
                checkoutForm.classList.remove('hidden');
                checkoutForm.scrollIntoView({ behavior: 'smooth' });
                this.style.display = 'none'; // Hide proceed button
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
      

<div className="ambient-light"></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-['Playfair_Display'] text-2xl tracking-tighter text-[#F5F1EC]">AL-MASRAH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-[#A8A5A2]">
<a className="hover:text-[#D6B98C] transition-colors" href="#events">Events</a>
<a className="hover:text-[#D6B98C] transition-colors" href="#about">Foundation</a>
<a className="hover:text-[#D6B98C] transition-colors" href="#tickets">My Tickets</a>
</div>
<div className="flex items-center gap-6">
<button className="text-xs font-medium tracking-widest text-[#A8A5A2] hover:text-[#F5F1EC] transition-colors flex items-center gap-1">
                    EN <span className="opacity-30">/</span> <span className="font-arabic">ع</span>
</button>
<button className="md:hidden text-[#F5F1EC]">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-20">

<section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1514306191717-452ec28c7f31?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-[#181514] via-transparent to-[#181514]"></div>
<div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-none bg-white/5 text-[#D6B98C] text-xs tracking-widest uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-[#D6B98C]"></span>
                    Season 2025
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#F5F1EC] leading-[1.1]">
                    Uniting Arab Voices <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B98C] to-[#F5F1EC]/60 italic font-light">in Performance</span>
</h1>
<p className="text-lg md:text-xl text-[#A8A5A2] font-light max-w-2xl mx-auto leading-relaxed">
                    A cultural platform celebrating Arab artistry through live performances, theatre, and immersive experiences.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="btn-primary px-8 py-4 rounded-sm text-sm font-medium tracking-wide min-w-[180px]" href="#events">
                        Explore Events
                    </a>
<button className="px-8 py-4 rounded-sm border border-[#A8A5A2]/30 text-[#F5F1EC] text-sm font-medium tracking-wide hover:bg-white/5 transition-colors min-w-[180px]">
                        Our Story
                    </button>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-lg group hover:bg-white/5 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-[#D6B98C]/10 flex items-center justify-center text-[#D6B98C] mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:mic-2" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl text-[#F5F1EC] mb-3 font-medium">Cultural Impact</h3>
<p className="text-[#A8A5A2] text-sm font-light leading-relaxed">
                            Supporting authentic Arab narratives through curated art and spoken word.
                        </p>
</div>

<div className="glass-card p-8 rounded-lg group hover:bg-white/5 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-[#D6B98C]/10 flex items-center justify-center text-[#D6B98C] mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:music" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl text-[#F5F1EC] mb-3 font-medium">Creative Performances</h3>
<p className="text-[#A8A5A2] text-sm font-light leading-relaxed">
                            Theatre, contemporary music, and immersive storytelling experiences.
                        </p>
</div>

<div className="glass-card p-8 rounded-lg group hover:bg-white/5 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-[#D6B98C]/10 flex items-center justify-center text-[#D6B98C] mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl text-[#F5F1EC] mb-3 font-medium">Community</h3>
<p className="text-[#A8A5A2] text-sm font-light leading-relaxed">
                            A sanctuary bringing artists and discerning audiences together.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#A8A5A2]/10 bg-[#181514]" id="events">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl text-[#F5F1EC] mb-2 font-medium tracking-tight">Upcoming Performances</h2>
<p className="text-[#A8A5A2] font-light">Curated experiences for the season.</p>
</div>

<div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="text-sm text-[#181514] bg-[#D6B98C] px-4 py-2 rounded-full font-medium whitespace-nowrap">All Events</button>
<button className="text-sm text-[#A8A5A2] hover:text-[#F5F1EC] px-4 py-2 rounded-full border border-[#A8A5A2]/20 whitespace-nowrap">Theatre</button>
<button className="text-sm text-[#A8A5A2] hover:text-[#F5F1EC] px-4 py-2 rounded-full border border-[#A8A5A2]/20 whitespace-nowrap">Music</button>
<button className="text-sm text-[#A8A5A2] hover:text-[#F5F1EC] px-4 py-2 rounded-full border border-[#A8A5A2]/20 whitespace-nowrap">Immersive</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-[#D6B98C]/40 transition-colors">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Beirut Nights" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181514] to-transparent opacity-90"></div>
<div className="absolute top-4 right-4 bg-[#D6B98C] text-[#181514] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Selling Fast
                            </div>
</div>
<div className="p-6 relative -mt-12">
<div className="flex items-center gap-2 text-[#D6B98C] text-xs font-medium tracking-widest uppercase mb-2">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
                                Dec 12, 2025
                            </div>
<h3 className="text-2xl text-[#F5F1EC] font-medium mb-2 group-hover:text-[#D6B98C] transition-colors">Beirut Nights</h3>
<p className="text-[#A8A5A2] text-sm font-light line-clamp-2 mb-6">
                                An immersive cultural evening featuring live oud performances, contemporary poetry readings, and musical storytelling.
                            </p>
<div className="flex items-center justify-between border-t border-[#A8A5A2]/10 pt-4">
<span className="text-[#A8A5A2] text-sm flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Beirut
                                </span>
<span className="text-[#F5F1EC] text-sm font-medium flex items-center gap-1">
                                    Book Now <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</div>
</div>
</article>

<article className="glass-card rounded-xl overflow-hidden group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="The Silk Road" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181514] to-transparent opacity-90"></div>
</div>
<div className="p-6 relative -mt-12">
<div className="flex items-center gap-2 text-[#A8A5A2] text-xs font-medium tracking-widest uppercase mb-2">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
                                Jan 08, 2026
                            </div>
<h3 className="text-xl text-[#F5F1EC] font-medium mb-2">The Silk Road</h3>
<p className="text-[#A8A5A2] text-sm font-light line-clamp-2 mb-6">
                                A theatrical journey through history with ensemble cast.
                            </p>
<div className="flex items-center justify-between border-t border-[#A8A5A2]/10 pt-4">
<span className="text-[#A8A5A2] text-sm">Dubai Opera</span>
<span className="text-[#A8A5A2] text-sm group-hover:text-[#F5F1EC] transition-colors">View Details</span>
</div>
</div>
</article>

<article className="glass-card rounded-xl overflow-hidden group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Desert Echoes" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181514] to-transparent opacity-90"></div>
</div>
<div className="p-6 relative -mt-12">
<div className="flex items-center gap-2 text-[#A8A5A2] text-xs font-medium tracking-widest uppercase mb-2">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
                                Feb 14, 2026
                            </div>
<h3 className="text-xl text-[#F5F1EC] font-medium mb-2">Desert Echoes</h3>
<p className="text-[#A8A5A2] text-sm font-light line-clamp-2 mb-6">
                                Modern classical fusion under the open stars.
                            </p>
<div className="flex items-center justify-between border-t border-[#A8A5A2]/10 pt-4">
<span className="text-[#A8A5A2] text-sm">AlUla</span>
<span className="text-[#A8A5A2] text-sm group-hover:text-[#F5F1EC] transition-colors">View Details</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2A1F1C]/30 relative overflow-hidden">

<div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D6B98C]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 space-y-10">

<div className="flex items-center gap-2 text-xs text-[#A8A5A2]">
<span>Events</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-[#D6B98C]">Beirut Nights</span>
</div>
<div>
<h1 className="text-4xl md:text-5xl text-[#F5F1EC] font-medium tracking-tight mb-6">Beirut Nights</h1>
<div className="flex flex-wrap gap-6 text-[#A8A5A2] text-sm font-light mb-8">
<span className="flex items-center gap-2"><span className="iconify text-[#D6B98C]" data-icon="lucide:calendar"></span> Dec 12, 2025</span>
<span className="flex items-center gap-2"><span className="iconify text-[#D6B98C]" data-icon="lucide:clock"></span> 20:00 - 23:00</span>
<span className="flex items-center gap-2"><span className="iconify text-[#D6B98C]" data-icon="lucide:map-pin"></span> Cultural Theater, Beirut</span>
</div>
<p className="text-[#F5F1EC] text-lg font-light leading-relaxed mb-8">
                                Join us for an unforgettable evening celebrating the soul of the city. Featuring performances by renowned oud master <span className="text-[#D6B98C]">Marwan K.</span> and poet <span className="text-[#D6B98C]">Layla S.</span>, "Beirut Nights" weaves together the threads of nostalgia and hope through sound and spoken word.
                            </p>
</div>

<div>
<h4 className="text-sm font-medium text-[#A8A5A2] uppercase tracking-widest mb-4">Featuring</h4>
<div className="flex gap-4">
<div className="glass-card px-4 py-3 rounded-md flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#A8A5A2]/20"></div>
<div>
<div className="text-[#F5F1EC] text-sm">Marwan K.</div>
<div className="text-[#A8A5A2] text-xs">Oud Master</div>
</div>
</div>
<div className="glass-card px-4 py-3 rounded-md flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#A8A5A2]/20"></div>
<div>
<div className="text-[#F5F1EC] text-sm">Layla S.</div>
<div className="text-[#A8A5A2] text-xs">Poet</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 sticky top-24">
<div className="glass-card rounded-xl border-t border-[#D6B98C]/20 p-8 shadow-2xl shadow-black/40">

<div id="ticket-selection">
<h3 className="text-xl text-[#F5F1EC] font-medium mb-6">Select Tickets</h3>
<div className="space-y-4 mb-8">

<div className="p-4 rounded-lg border border-[#A8A5A2]/10 bg-white/5 flex items-center justify-between group hover:border-[#D6B98C]/30 transition-colors">
<div>
<div className="text-[#F5F1EC] font-medium">Standard Entry</div>
<div className="text-[#A8A5A2] text-xs font-light mt-1">General Seating</div>
<div className="text-[#D6B98C] mt-2 font-medium">$30.00</div>
</div>
<div className="flex items-center gap-3 bg-[#181514] rounded-md p-1 border border-[#A8A5A2]/10">
<button className="w-6 h-6 flex items-center justify-center text-[#A8A5A2] hover:text-[#F5F1EC]">-</button>
<span className="text-sm w-4 text-center">2</span>
<button className="w-6 h-6 flex items-center justify-center text-[#A8A5A2] hover:text-[#F5F1EC]">+</button>
</div>
</div>

<div className="p-4 rounded-lg border border-[#A8A5A2]/10 bg-white/5 flex items-center justify-between group hover:border-[#D6B98C]/30 transition-colors">
<div>
<div className="text-[#F5F1EC] font-medium flex items-center gap-2">VIP Experience <span className="text-[10px] bg-[#D6B98C]/20 text-[#D6B98C] px-1.5 rounded">Exclusive</span></div>
<div className="text-[#A8A5A2] text-xs font-light mt-1">Front Row + Lounge Access</div>
<div className="text-[#D6B98C] mt-2 font-medium">$60.00</div>
</div>
<div className="flex items-center gap-3 bg-[#181514] rounded-md p-1 border border-[#A8A5A2]/10">
<button className="w-6 h-6 flex items-center justify-center text-[#A8A5A2] hover:text-[#F5F1EC]">-</button>
<span className="text-sm w-4 text-center">0</span>
<button className="w-6 h-6 flex items-center justify-center text-[#A8A5A2] hover:text-[#F5F1EC]">+</button>
</div>
</div>
</div>
<div className="border-t border-[#A8A5A2]/10 pt-4 mb-6">
<div className="flex justify-between text-sm mb-2">
<span className="text-[#A8A5A2]">Subtotal</span>
<span className="text-[#F5F1EC]">$60.00</span>
</div>
<div className="flex justify-between text-sm mb-4">
<span className="text-[#A8A5A2]">Service Fee</span>
<span className="text-[#F5F1EC]">$5.00</span>
</div>
<div className="flex justify-between text-lg font-medium">
<span className="text-[#F5F1EC]">Total</span>
<span className="text-[#D6B98C]">$65.00</span>
</div>
</div>
<button className="w-full btn-primary py-3 rounded-md font-medium text-sm">Proceed to Checkout</button>
</div>

<div className="hidden mt-6 pt-6 border-t border-[#A8A5A2]/10" id="checkout-form">
<h3 className="text-lg text-[#F5F1EC] font-medium mb-4">Guest Details</h3>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full p-2 bg-transparent border-b border-[#A8A5A2]/30 text-[#F5F1EC] text-sm focus:border-[#D6B98C] focus:outline-none placeholder-[#A8A5A2]/50" placeholder="First Name" type="text"/>
<input className="w-full p-2 bg-transparent border-b border-[#A8A5A2]/30 text-[#F5F1EC] text-sm focus:border-[#D6B98C] focus:outline-none placeholder-[#A8A5A2]/50" placeholder="Last Name" type="text"/>
</div>
<input className="w-full p-2 bg-transparent border-b border-[#A8A5A2]/30 text-[#F5F1EC] text-sm focus:border-[#D6B98C] focus:outline-none placeholder-[#A8A5A2]/50" placeholder="Email Address" type="email"/>
<div className="pt-4">
<h4 className="text-sm text-[#F5F1EC] mb-3">Payment Method</h4>
<div className="flex gap-2 mb-3">
<div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center border border-[#D6B98C]"><span className="iconify text-[#F5F1EC]" data-icon="lucide:credit-card"></span></div>
<div className="h-8 w-12 bg-white/5 rounded flex items-center justify-center border border-white/5"><span className="iconify text-[#A8A5A2]" data-icon="lucide:wallet"></span></div>
</div>
<input className="w-full p-2 bg-transparent border-b border-[#A8A5A2]/30 text-[#F5F1EC] text-sm focus:border-[#D6B98C] focus:outline-none placeholder-[#A8A5A2]/50" placeholder="Card Number" type="text"/>
</div>
<button className="w-full btn-primary py-3 rounded-md font-medium text-sm mt-4">Confirm &amp; Pay $65.00</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#181514] border-t border-[#A8A5A2]/10" id="tickets">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D6B98C]/10 text-[#D6B98C] mb-6">
<span className="iconify" data-icon="lucide:check" data-width="32" strokeWidth="2"></span>
</div>
<h2 className="text-3xl text-[#F5F1EC] font-medium tracking-tight mb-2">Booking Confirmed</h2>
<p className="text-[#A8A5A2] font-light">Your tickets have been sent to your email.</p>
</div>

<div className="relative glass-card rounded-2xl overflow-hidden border border-[#D6B98C]/20 max-w-md mx-auto">

<div className="absolute top-2/3 left-0 w-full h-px border-t border-dashed border-[#A8A5A2]/40 z-10"></div>
<div className="absolute top-2/3 -left-3 w-6 h-6 bg-[#181514] rounded-full z-20"></div>
<div className="absolute top-2/3 -right-3 w-6 h-6 bg-[#181514] rounded-full z-20"></div>

<div className="p-8 bg-[#2A1F1C]/80 backdrop-blur-md">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl text-[#F5F1EC] font-medium">Beirut Nights</h3>
<p className="text-[#D6B98C] text-sm mt-1">Cultural Theater</p>
</div>
<div className="text-right">
<div className="text-[#F5F1EC] font-medium text-lg">12</div>
<div className="text-[#A8A5A2] text-xs uppercase tracking-wider">DEC</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 text-sm">
<div>
<div className="text-[#A8A5A2] text-xs uppercase tracking-wider mb-1">Time</div>
<div className="text-[#F5F1EC]">8:00 PM</div>
</div>
<div>
<div className="text-[#A8A5A2] text-xs uppercase tracking-wider mb-1">Seats</div>
<div className="text-[#F5F1EC]">G-12, G-13</div>
</div>
</div>
</div>

<div className="p-6 bg-[#D6B98C] flex items-center justify-between">
<div className="text-[#2A1F1C]">
<div className="text-xs font-semibold uppercase tracking-wider mb-1">Ticket ID</div>
<div className="font-mono text-sm">#8X9-291-LM</div>
</div>

<div className="w-12 h-12 bg-[#2A1F1C] p-1 rounded-sm">
<div className="w-full h-full border-2 border-dashed border-[#D6B98C] opacity-50"></div>
</div>
</div>
</div>
<div className="mt-8 text-center space-x-4">
<button className="text-sm text-[#A8A5A2] hover:text-[#F5F1EC] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto mx-auto inline-flex">
<span className="iconify" data-icon="lucide:download" data-width="16"></span> Download PDF
                    </button>
</div>
</div>
</section>

<footer className="bg-[#2A1F1C] border-t border-[#A8A5A2]/10 py-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<h2 className="font-['Playfair_Display'] text-2xl text-[#F5F1EC] mb-6">AL-MASRAH</h2>
<p className="text-[#A8A5A2] text-sm font-light max-w-sm leading-relaxed mb-6">
                        Preserving heritage through the art of performance. A luxury cultural initiative connecting authentic Arab narratives with the world.
                    </p>
<div className="flex gap-4">
<a className="text-[#A8A5A2] hover:text-[#D6B98C] transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-[#A8A5A2] hover:text-[#D6B98C] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-[#A8A5A2] hover:text-[#D6B98C] transition-colors" href="#"><span className="iconify" data-icon="lucide:mail" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-[#F5F1EC] text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-[#A8A5A2] font-light">
<li><a className="hover:text-[#D6B98C] transition-colors" href="#">Events</a></li>
<li><a className="hover:text-[#D6B98C] transition-colors" href="#">Membership</a></li>
<li><a className="hover:text-[#D6B98C] transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-[#D6B98C] transition-colors" href="#">Artists</a></li>
</ul>
</div>
<div>
<h4 className="text-[#F5F1EC] text-sm font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-[#A8A5A2] font-light">
<li>support@al-masrah.com</li>
<li>+971 4 123 4567</li>
<li className="pt-2"><a className="text-[#D6B98C] hover:underline" href="#">Get Directions</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#A8A5A2]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#A8A5A2] font-light">
<p>© 2025 Al-Masrah Foundation. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#F5F1EC]" href="#">Privacy</a>
<a className="hover:text-[#F5F1EC]" href="#">Terms</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
