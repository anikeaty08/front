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



        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="24" data-stroke-width="1.5"></span>';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24" data-stroke-width="1.5"></span>';
            }
        });

        function closeMenu() {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = 'auto';
            menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24" data-stroke-width="1.5"></span>';
        }
    
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
      

<header className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<a className="group flex items-center gap-2 z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 text-white flex items-center justify-center shadow-sm group-hover:shadow-purple-200 transition-all">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="16"></span>
</div>
<span className="font-medium text-lg tracking-tight text-slate-900">Summerland<span className="text-slate-400">Trust</span></span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-purple-700 transition-colors" href="#about">About</a>
<a className="hover:text-purple-700 transition-colors" href="#healing">Healing</a>
<a className="hover:text-purple-700 transition-colors" href="#events">Events</a>
<a className="hover:text-purple-700 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-sm hover:shadow-md" href="#donate">
                    Donate
                    <span className="iconify ml-2" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>

<button className="md:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-md z-50 relative" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center px-8" id="mobile-menu">
<nav className="flex flex-col gap-6 text-2xl font-medium tracking-tight text-slate-900">
<a className="hover:text-purple-600" href="#about" onclick="closeMenu()">Our Mission</a>
<a className="hover:text-purple-600" href="#healing" onclick="closeMenu()">Healing Services</a>
<a className="hover:text-purple-600" href="#events" onclick="closeMenu()">Upcoming Events</a>
<a className="hover:text-purple-600" href="#contact" onclick="closeMenu()">Get in Touch</a>
<a className="text-purple-600 mt-4 flex items-center gap-2" href="#donate" onclick="closeMenu()">
                    Support Us <span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</a>
</nav>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">

<div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
<div className="absolute top-20 right-10 w-[500px] h-[500px] bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
                    Registered Charity No. 1157975
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    A Sanctuary for <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-slate-800">Spiritual Growth</span>
</h1>
<p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
                    The Summerland Trust is dedicated to the advancement of spiritualism, providing healing, education, and a supportive community for those seeking connection and understanding.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg shadow-purple-900/10 flex items-center justify-center gap-2" href="#events">
                        View Gatherings
                        <span className="iconify" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center" href="#about">
                        Learn More
                    </a>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">20+</div>
<div className="text-sm text-slate-500 mt-1">Years of Service</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">Weekly</div>
<div className="text-sm text-slate-500 mt-1">Healing Sessions</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">100%</div>
<div className="text-sm text-slate-500 mt-1">Donation Funded</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">All</div>
<div className="text-sm text-slate-500 mt-1">Welcome</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Our Core Pillars</h2>
<p className="text-slate-500">We offer a variety of ways to explore your spirituality, from personal healing to group mediumship demonstrations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:hand-heart" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Spiritual Healing</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            A gentle, non-invasive process where healing energy is channeled to restore balance to the mind, body, and spirit.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Mediumship</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Regular demonstrations and private sittings providing evidence of survival and messages of love from the spirit world.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Education</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Workshops and circles designed to help you develop your own psychic awareness and spiritual understanding.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="events">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Upcoming Gatherings</h2>
<p className="text-slate-500">Join us for services, demonstrations, and workshops.</p>
</div>
<a className="text-sm font-medium text-purple-700 hover:text-purple-800 flex items-center gap-1" href="#">
                        View full calendar <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-20 bg-purple-50 text-purple-700 rounded-lg py-3 md:py-4">
<span className="text-xs font-semibold uppercase tracking-wider">OCT</span>
<span className="text-2xl font-semibold leading-none mt-1">15</span>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase tracking-wide">Service</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 6:30 PM - 8:00 PM
                                </span>
</div>
<h3 className="text-lg font-medium text-slate-900">Sunday Divine Service</h3>
<p className="text-slate-500 text-sm mt-1">An evening of philosophy, healing prayers, and clairvoyance with Guest Medium Sarah Jenkins.</p>
</div>
<div className="flex-shrink-0 mt-4 md:mt-0">
<button className="w-full md:w-auto px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                Details
                            </button>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-20 bg-purple-50 text-purple-700 rounded-lg py-3 md:py-4">
<span className="text-xs font-semibold uppercase tracking-wider">OCT</span>
<span className="text-2xl font-semibold leading-none mt-1">21</span>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-semibold uppercase tracking-wide">Workshop</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 10:00 AM - 4:00 PM
                                </span>
</div>
<h3 className="text-lg font-medium text-slate-900">Awakening Intuition</h3>
<p className="text-slate-500 text-sm mt-1">A comprehensive day workshop focusing on trusting your inner voice and spiritual signs.</p>
</div>
<div className="flex-shrink-0 mt-4 md:mt-0">
<button className="w-full md:w-auto px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                                Book (£25)
                            </button>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-shrink-0 flex md:flex-col items-center justify-center w-full md:w-20 bg-purple-50 text-purple-700 rounded-lg py-3 md:py-4">
<span className="text-xs font-semibold uppercase tracking-wider">OCT</span>
<span className="text-2xl font-semibold leading-none mt-1">24</span>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-semibold uppercase tracking-wide">Healing</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 7:00 PM - 9:00 PM
                                </span>
</div>
<h3 className="text-lg font-medium text-slate-900">Open Healing Circle</h3>
<p className="text-slate-500 text-sm mt-1">Drop-in session for those seeking healing. All registered healers are welcome to serve.</p>
</div>
<div className="flex-shrink-0 mt-4 md:mt-0">
<button className="w-full md:w-auto px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="iconify mx-auto text-purple-300 mb-6" data-icon="lucide:quote" data-width="40"></span>
<p className="serif-quote text-3xl md:text-4xl text-slate-800 italic leading-tight mb-8">
                    "The spirit world is not a far away place, but a dimension of life that intermingles with our own, separated only by the frequency of vibration."
                </p>
<div className="flex items-center justify-center gap-3">
<div className="h-px w-12 bg-slate-200"></div>
<span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Philosophy</span>
<div className="h-px w-12 bg-slate-200"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="donate">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-700 text-purple-200 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:heart" data-width="12"></span>
                            Support our Mission
                        </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Keep the Light Burning</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We rely entirely on the generosity of our community to maintain our sanctuary and continue our work. Your donation directly funds healing services, maintenance, and educational outreach.
                        </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-medium">Transparent Funding</h4>
<p className="text-sm text-slate-500 mt-1">100% of donations go to trust operations.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="font-medium">Secure Processing</h4>
<p className="text-sm text-slate-500 mt-1">Encrypted payments via Stripe &amp; PayPal.</p>
</div>
</div>
</div>
</div>

<div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/20">
<div className="flex gap-4 p-1 bg-slate-100 rounded-lg mb-6">
<button className="flex-1 py-2 text-sm font-medium rounded-md bg-white shadow-sm text-slate-900">One-time</button>
<button className="flex-1 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">Monthly</button>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Select Amount</label>
<div className="grid grid-cols-3 gap-3">
<button className="py-3 border border-slate-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium transition-all focus:ring-2 focus:ring-purple-600 focus:outline-none">£10</button>
<button className="py-3 border-2 border-purple-600 bg-purple-50 text-purple-700 rounded-lg font-medium transition-all relative">
                                    £25
                                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full">Popular</span>
</button>
<button className="py-3 border border-slate-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium transition-all focus:ring-2 focus:ring-purple-600 focus:outline-none">£50</button>
</div>
<div className="mt-3">
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">£</span>
<input className="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all placeholder-slate-400" placeholder="Custom Amount" type="number"/>
</div>
</div>
</div>
<button className="w-full py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 mb-4">
                            Donate Securely
                            <span className="iconify" data-icon="lucide:lock" data-width="16"></span>
</button>
<p className="text-center text-xs text-slate-400">
                            By donating, you agree to our Terms. Secure payment processing powered by Stripe.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-2xl mx-auto px-4 text-center">
<span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-6 text-slate-900">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Stay Connected</h2>
<p className="text-slate-500 mb-8">Receive updates on upcoming workshops, guest mediums, and trust news.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-grow px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-slate-900 transition-colors" placeholder="email@address.com" type="email"/>
<button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
</div>
<span className="font-medium text-slate-900 tracking-tight">Summerland Trust</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                        Promoting spiritualism, healing, and education in a modern world. A registered charity dedicated to the wellbeing of the spirit.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#events">Events Calendar</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#healing">Healing Requests</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#donate">Donations</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Charity Commission</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 The Summerland Trust. Registered Charity No. 1157975.</p>
<p>Designed with Care.</p>
</div>
</div>
</footer>


    </>
  );
}
