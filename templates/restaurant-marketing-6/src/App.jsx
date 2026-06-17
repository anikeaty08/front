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



    // Initialize animations on page load
    document.addEventListener('DOMContentLoaded', function() {
      // Animate elements on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all animated elements
      document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up, .blur-in, .fade-in, .scale-in').forEach(el => {
        observer.observe(el);
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
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
      

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-black/80 border-gray-900 slide-in-up animate-in">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-black">
<iconify-icon height="20" icon="solar:chef-hat-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight font-jakarta">DineDigital</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors font-manrope text-gray-300 hover:text-orange-400" href="#home">Home</a>
<a className="text-sm font-medium transition-colors font-manrope text-gray-300 hover:text-orange-400" href="#services">Services</a>
<a className="text-sm font-medium transition-colors font-manrope text-gray-300 hover:text-orange-400" href="#results">Results</a>
<a className="text-sm font-medium transition-colors font-manrope text-gray-300 hover:text-orange-400" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 font-manrope bg-white text-black hover:bg-gray-200 tracking-tight" href="#contact">
            Book Strategy Call
            <iconify-icon height="16" icon="solar:calendar-add-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 text-gray-300" id="mobile-menu">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/30 border border-orange-900/50 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6 slide-in-left animate-in">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Restaurant Marketing Experts
            </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight font-jakarta text-white slide-in-left delay-100 animate-in">
              Fill Tables, <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-red-400">Not Just Feeds.</span>
</h1>
<p className="mt-6 text-lg max-w-xl font-manrope text-gray-400 slide-in-left delay-200 animate-in leading-relaxed">
              We help restaurants get found, get chosen, and get busy — through digital strategies built exclusively for the food industry.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 slide-in-left delay-300 animate-in">
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 font-manrope text-black bg-orange-400 hover:bg-orange-300 tracking-tight" href="#services">
              View Our Services 
              <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-200 font-manrope bg-gray-900 text-white border border-gray-800 hover:bg-gray-800 tracking-tight" href="#contact">
              Let's Talk
            </a>
</div>
<div className="flex items-center gap-6 slide-in-left delay-400 animate-in pt-4">
<div className="flex -space-x-3">
<img alt="Chef" className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&amp;q=80"/>
<img alt="Owner" className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=100&amp;q=80"/>
<img alt="Manager" className="w-10 h-10 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
</div>
<div>
<div className="flex items-center gap-1">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-gray-400 font-manrope mt-1">Trusted by 50+ venues</p>
</div>
</div>
</div>
<div className="relative blur-in delay-500 animate-in">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<img alt="Fine Dining Atmosphere" className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&amp;q=80"/>

<div className="absolute top-8 right-8 z-20 backdrop-blur-md rounded-xl p-4 shadow-xl bg-black/80 border border-gray-800 slide-in-right delay-700 animate-in">
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex bg-orange-500/20 text-orange-400 rounded-full items-center justify-center">
<iconify-icon height="24" icon="solar:calendar-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium font-manrope text-gray-400 uppercase tracking-wide">Reservations</p>
<p className="text-xl font-bold text-white font-jakarta">+124%</p>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 z-20 backdrop-blur-md rounded-xl p-4 shadow-xl bg-black/80 border border-gray-800 slide-in-left delay-800 animate-in w-64">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-400 font-manrope">Table Occupancy</span>
<span className="text-xs font-bold text-green-400 font-manrope">Peak Hours</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2 mb-2">
<div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{width: '92%'}}></div>
</div>
<p className="text-xs text-gray-500 font-manrope">Friday &amp; Saturday fully booked</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-950/50 border-y border-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="slide-in-up delay-100 animate-in">
<h2 className="text-3xl font-semibold tracking-tight font-jakarta text-white mb-4">
            Built for Restaurants. <br/>Backed by Results.
          </h2>
<p className="text-lg text-gray-400 font-manrope leading-relaxed">
            From neighbourhood cafés to multi-location chains, we've helped restaurants increase online reservations, boost foot traffic, and build brands that diners remember.
          </p>
</div>
<div className="grid grid-cols-3 gap-8 items-center opacity-70">

<div className="flex items-center gap-2 text-gray-400 font-jakarta font-semibold text-lg hover:text-white transition-colors">
<iconify-icon icon="solar:wineglass-linear" width="24"></iconify-icon> ESTRO
           </div>
<div className="flex items-center gap-2 text-gray-400 font-jakarta font-semibold text-lg hover:text-white transition-colors">
<iconify-icon icon="solar:cup-linear" width="24"></iconify-icon> The Bean
           </div>
<div className="flex items-center gap-2 text-gray-400 font-jakarta font-semibold text-lg hover:text-white transition-colors">
<iconify-icon icon="solar:chef-hat-heart-linear" width="24"></iconify-icon> Roots
           </div>
<div className="flex items-center gap-2 text-gray-400 font-jakarta font-semibold text-lg hover:text-white transition-colors">
<iconify-icon icon="solar:donuts-linear" width="24"></iconify-icon> Glaze
           </div>
<div className="flex items-center gap-2 text-gray-400 font-jakarta font-semibold text-lg hover:text-white transition-colors">
<iconify-icon icon="solar:bottle-linear" width="24"></iconify-icon> VINO
           </div>
<div className="flex items-center gap-2 text-gray-400 font-jakarta font-semibold text-lg hover:text-white transition-colors">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon> EMBER
           </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<p className="text-sm font-semibold uppercase tracking-wider font-manrope slide-in-up animate-in text-orange-500">Our Services</p>
<h2 className="mt-4 text-3xl lg:text-4xl tracking-tight font-jakarta font-semibold text-white slide-in-up delay-200 animate-in">
          Everything Your Restaurant Needs <br/>to Thrive Online
        </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-gray-900 bg-[#0A0A0A] hover:border-orange-900/50 hover:bg-gray-900/50 transition-all duration-300 slide-in-up delay-300 animate-in">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900 text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-colors">
<iconify-icon height="24" icon="solar:laptop-minimal-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-jakarta text-white">Website Creation</h3>
<p className="text-gray-400 font-manrope leading-relaxed text-sm">Stunning, mobile-first websites that turn browsers into diners. Menus that load fast, look great, and drive reservations.</p>
</div>

<div className="group p-8 rounded-2xl border border-gray-900 bg-[#0A0A0A] hover:border-orange-900/50 hover:bg-gray-900/50 transition-all duration-300 slide-in-up delay-400 animate-in">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900 text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-colors">
<iconify-icon height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-jakarta text-white">SEO Optimisation</h3>
<p className="text-gray-400 font-manrope leading-relaxed text-sm">Show up when hungry customers search. We put your restaurant at the top of local results — right where it matters.</p>
</div>

<div className="group p-8 rounded-2xl border border-gray-900 bg-[#0A0A0A] hover:border-orange-900/50 hover:bg-gray-900/50 transition-all duration-300 slide-in-up delay-500 animate-in">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900 text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-colors">
<iconify-icon height="24" icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-jakarta text-white">Digital Marketing</h3>
<p className="text-gray-400 font-manrope leading-relaxed text-sm">Targeted campaigns across Google and social that bring the right crowd through your doors, not just likes on a screen.</p>
</div>

<div className="group p-8 rounded-2xl border border-gray-900 bg-[#0A0A0A] hover:border-orange-900/50 hover:bg-gray-900/50 transition-all duration-300 slide-in-up delay-600 animate-in lg:col-start-1 lg:col-end-2 lg:translate-x-1/2">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900 text-rose-400 group-hover:bg-rose-500 group-hover:text-black transition-colors">
<iconify-icon height="24" icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-jakarta text-white">Creatives</h3>
<p className="text-gray-400 font-manrope leading-relaxed text-sm">Scroll-stopping visuals, video, and design that make your food impossible to ignore.</p>
</div>

<div className="group p-8 rounded-2xl border border-gray-900 bg-[#0A0A0A] hover:border-orange-900/50 hover:bg-gray-900/50 transition-all duration-300 slide-in-up delay-700 animate-in lg:col-start-2 lg:col-end-4 lg:-translate-x-1/4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
<iconify-icon height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-jakarta text-white">Email Marketing</h3>
<p className="text-gray-400 font-manrope leading-relaxed text-sm">Keep your guests coming back with personalised campaigns — from weekly specials to event invites that actually get opened.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight font-jakarta text-white mb-6 slide-in-up animate-in">
        Your Food Deserves to Be Found.
      </h2>
<p className="text-xl text-gray-400 font-manrope mb-10 max-w-2xl mx-auto slide-in-up delay-200 animate-in">
        Book a free 15-minute strategy call. No jargon, no fluff — just a clear plan to grow your restaurant's online presence.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-in-up delay-300 animate-in">
<a className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 font-manrope text-black bg-orange-500 hover:bg-orange-400 shadow-lg shadow-orange-900/20 tracking-tight" href="#">
          Let's Talk 
          <iconify-icon className="group-hover:translate-x-1 transition-transform" height="24" icon="solar:arrow-right-linear" strokeWidth="2" width="24"></iconify-icon>
</a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-60 slide-in-up delay-400 animate-in">
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Free Audit
        </div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> No Commitment
        </div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Immediate Value
        </div>
</div>
</div>
</section>

<footer className="bg-black border-t border-gray-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1 fade-in">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-black">
<iconify-icon icon="solar:chef-hat-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold font-jakarta text-white">DineDigital</span>
</div>
<p className="text-sm text-gray-500 font-manrope leading-relaxed">
            Specialized digital marketing for the hospitality industry. We fill seats and build brands.
          </p>
</div>
<div className="fade-in delay-200">
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 font-manrope text-white">Services</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">Web Design</a></li>
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">SEO &amp; Local Search</a></li>
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">Social Media</a></li>
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">Content Production</a></li>
</ul>
</div>
<div className="fade-in delay-400">
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 font-manrope text-white">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">About Us</a></li>
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">Case Studies</a></li>
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">Blog</a></li>
<li><a className="transition-colors font-manrope hover:text-orange-400" href="#">Contact</a></li>
</ul>
</div>
<div className="fade-in delay-600">
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 font-manrope text-white">Socials</h4>
<div className="flex space-x-4">
<a className="text-gray-500 transition-colors hover:text-orange-400" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-500 transition-colors hover:text-orange-400" href="#">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-500 transition-colors hover:text-orange-400" href="#">
<iconify-icon height="20" icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-600">
<p className="font-manrope">© 2024 DineDigital. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
