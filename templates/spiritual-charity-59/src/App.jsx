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
      

<nav :className="{ 'border-zinc-200': scrolled }" @scroll.window="scrolled = (window.pageYOffset &gt; 20)" className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" x-data="{ open: false, scrolled: false }">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:leaf" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-zinc-900 font-medium tracking-tight text-lg uppercase">Summerland<span className="text-emerald-700">Trust</span></span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-zinc-600 hover:text-emerald-700 transition-colors" href="#mission">Our Mission</a>
<a className="text-sm font-medium text-zinc-600 hover:text-emerald-700 transition-colors" href="#events">Events &amp; Healing</a>
<a className="text-sm font-medium text-zinc-600 hover:text-emerald-700 transition-colors" href="#membership">Membership</a>
<a className="text-sm font-medium text-zinc-600 hover:text-emerald-700 transition-colors" href="#contact">Contact</a>
<a className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-zinc-200 hover:shadow-emerald-200 flex items-center gap-2" href="#donate">
<span>Donate</span>
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>

<div className="md:hidden flex items-center">
<button @click="open = !open" className="text-zinc-600 hover:text-emerald-700 focus:outline-none p-2">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" x-show="!open"></span>
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="24" x-show="open"></span>
</button>
</div>
</div>
</div>

<div className="md:hidden bg-white border-b border-zinc-100 absolute w-full shadow-lg" x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:leave="transition ease-in duration-150" x-transition:leave-end="opacity-0 -translate-y-2" x-transition:leave-start="opacity-100 translate-y-0">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50" href="#mission">Our Mission</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50" href="#events">Events</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-zinc-700 hover:text-emerald-700 hover:bg-zinc-50" href="#membership">Membership</a>
<a className="block mt-4 px-3 py-3 bg-emerald-50 text-emerald-800 rounded-md text-base font-medium text-center" href="#donate">Make a Donation</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-zinc-50 to-white"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Supporting spiritual growth since 1995</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                A Sanctuary for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">Healing &amp; Spirit</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                The Summerland Trust is a registered charity dedicated to the advancement of spiritualism, healing, and the comfort of the bereaved.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#donate">
                    Support Our Cause
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-700 border border-zinc-200 rounded-full font-medium text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2" href="#events">
<span className="iconify" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="16"></span>
                    Upcoming Events
                </a>
</div>

<div className="mt-16 pt-8 border-t border-zinc-200/60 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70">
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
<span className="text-emerald-600" data-icon="lucide:check-circle"></span> Registered Charity
                </div>
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
<span className="text-emerald-600" data-icon="lucide:check-circle"></span> Spiritual Healing
                </div>
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
<span className="text-emerald-600" data-icon="lucide:check-circle"></span> Community Support
                </div>
</div>
</div>
</section>

<section className="py-20 bg-white relative" id="donate">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Empower Our Work</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                        Your generosity helps us maintain our sanctuary, organize healing workshops, and support those in need. Every donation, large or small, helps us bring light to the community.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="bg-emerald-50 rounded-xl p-4 w-full">
<span className="iconify text-emerald-700 mb-2" data-icon="lucide:heart-handshake" data-width="24"></span>
<h3 className="font-medium text-zinc-900 text-sm">Community Care</h3>
<p className="text-xs text-zinc-500 mt-1">Funding support groups for the bereaved.</p>
</div>
<div className="bg-zinc-50 rounded-xl p-4 w-full">
<span className="iconify text-zinc-700 mb-2" data-icon="lucide:sparkles" data-width="24"></span>
<h3 className="font-medium text-zinc-900 text-sm">Spiritual Events</h3>
<p className="text-xs text-zinc-500 mt-1">Hosting mediums and healing circles.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2" x-data="{ type: 'once', amount: 20 }">
<div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 sm:p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-700"></div>

<div className="bg-zinc-100 p-1 rounded-lg flex mb-8">
<button :className="type === 'once' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'" @click="type = 'once'" className="flex-1 py-2 text-sm font-medium rounded-md transition-all">One-time</button>
<button :className="type === 'monthly' ? 'bg-white text-emerald-700 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'" @click="type = 'monthly'" className="flex-1 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-center gap-1">
                                Monthly
                                <span className="iconify" data-icon="lucide:repeat" data-width="12"></span>
</button>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">
<button :className="amount === 10 ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-zinc-200 hover:border-zinc-300 text-zinc-600'" @click="amount = 10" className="border rounded-lg py-3 text-sm font-medium transition-all">£10</button>
<button :className="amount === 20 ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-zinc-200 hover:border-zinc-300 text-zinc-600'" @click="amount = 20" className="border rounded-lg py-3 text-sm font-medium transition-all">£20</button>
<button :className="amount === 50 ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-zinc-200 hover:border-zinc-300 text-zinc-600'" @click="amount = 50" className="border rounded-lg py-3 text-sm font-medium transition-all">£50</button>
</div>

<div className="relative mb-8">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">£</span>
<input className="w-full pl-8 pr-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-zinc-900 font-medium transition-all" placeholder="Custom amount" type="number" x-model="amount"/>
</div>

<button className="w-full bg-zinc-900 hover:bg-emerald-700 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-zinc-200 hover:shadow-emerald-200 hover:-translate-y-0.5 flex justify-center items-center gap-2 group">
<span>Donate £<span x-text="amount"></span></span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
                            Secure SSL Encrypted Transaction
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="mission">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Our Core Pillars</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 text-emerald-700">
<span className="iconify" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">Spiritual Healing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We offer a sanctuary for holistic healing, balancing the mind, body, and spirit through dedicated sessions and qualified healers.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 text-emerald-700">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">Community</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        A welcoming space for like-minded individuals to connect, share experiences, and support one another on their journey.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 text-emerald-700">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">Education</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Workshops, lectures, and circles designed to expand your understanding of spiritualism and personal development.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="events">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-emerald-700 font-medium text-sm tracking-wide uppercase mb-2 block">Calendar</span>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Upcoming Gatherings</h2>
</div>
<a className="text-sm font-medium text-zinc-600 hover:text-emerald-700 flex items-center gap-1 group" href="#">
                    View Full Calendar 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="group border border-zinc-200 rounded-2xl p-1 hover:border-emerald-200 transition-colors">
<div className="aspect-[4/3] bg-zinc-100 rounded-xl overflow-hidden relative mb-4">

<div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300">
<span className="iconify" data-icon="lucide:image" data-width="48"></span>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-900 shadow-sm">
                            OCT 24
                        </div>
</div>
<div className="px-3 pb-4">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Evening of Mediumship</h3>
<div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> 7:30 PM</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Main Hall</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Join us for a demonstration of mediumship proving the continuity of life.</p>
<button className="w-full py-2 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all">Book Seat (£5)</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl p-1 hover:border-emerald-200 transition-colors">
<div className="aspect-[4/3] bg-zinc-100 rounded-xl overflow-hidden relative mb-4">
<div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300">
<span className="iconify" data-icon="lucide:image" data-width="48"></span>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-900 shadow-sm">
                            OCT 28
                        </div>
</div>
<div className="px-3 pb-4">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Healing Circle</h3>
<div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> 2:00 PM</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Sanctuary</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Open healing session for those seeking physical or emotional balance.</p>
<button className="w-full py-2 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all">Free / Donation</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl p-1 hover:border-emerald-200 transition-colors">
<div className="aspect-[4/3] bg-zinc-100 rounded-xl overflow-hidden relative mb-4">
<div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-zinc-300">
<span className="iconify" data-icon="lucide:image" data-width="48"></span>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-900 shadow-sm">
                            NOV 02
                        </div>
</div>
<div className="px-3 pb-4">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Meditation Workshop</h3>
<div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="14"></span> 10:00 AM</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> Library</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Learn techniques to quiet the mind and connect with your inner self.</p>
<button className="w-full py-2 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all">Book Seat (£10)</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="membership">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<span className="iconify mx-auto mb-6 text-emerald-500" data-icon="lucide:gem" data-strokeWidth="1.5" data-width="32"></span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Become a Member of the Trust</h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Join our growing community. Membership supports the ongoing maintenance of our premises and gives you priority booking for special events and workshops.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-zinc-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-emerald-50 transition-colors">
                    Join Today
                </button>
<button className="bg-transparent border border-zinc-700 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors">
                    Learn More
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-emerald-700 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:leaf" data-width="14"></span>
</div>
<span className="text-zinc-900 font-medium tracking-tight uppercase text-sm">Summerland<span className="text-emerald-700">Trust</span></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">
                        Registered Charity No. XXXXXXX.<br/>
                        Dedicated to spiritual upliftment.
                    </p>
<div className="flex space-x-4">
<a className="text-zinc-400 hover:text-emerald-700 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-emerald-700 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-emerald-700 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Explore</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Our History</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Healers</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Committee</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Visit Us</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Upcoming Events</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Location &amp; Map</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Accessibility</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Newsletter</h4>
<p className="text-xs text-zinc-500 mb-4">Stay updated with our latest news and events.</p>
<form className="flex gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500" placeholder="Email address" type="email"/>
<button className="bg-emerald-700 text-white rounded-md px-3 py-2 hover:bg-emerald-800 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 Summerland Trust. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
