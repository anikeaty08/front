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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
lucide.createIcons();
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="lg:px-10 flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col group z-50" href="/">
<span className="group-hover:text-[#D4C4A8] transition-colors uppercase text-xl font-light text-white tracking-tighter">D.Concierg</span>
<span className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-0.5">Air • Land • Sea • Concierge</span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-[10px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#about">About</a>
<a className="text-[10px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-[10px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#events">Calendar</a>
<a className="text-[10px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors" href="#membership">Membership</a>
<a className="px-5 py-2 border border-white/10 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#D4C4A8] hover:bg-[#D4C4A8] hover:text-black transition-all" href="#contact">Inquire</a>
</nav>
</div>
</header>

<section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pb-24">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[#050505]/30 z-10"></div>

<img alt="Luxury Atmosphere" className="w-full h-full object-cover object-center grayscale-[20%]" src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" style={{animationDuration: 'auto', animationTimingFunction: 'linear', animationDelay: '0s', animationIterationCount: '1', animationDirection: 'normal', animationFillMode: 'both', animationPlayState: 'running', animationName: 'scrollBlur', animationTimeline: 'view()', animationRange: 'entry 100% entry 150%'}}/>
</div>
<div className="lg:px-10 w-full max-w-[1400px] z-20 mr-auto ml-auto pt-32 pr-6 pl-6 relative">
<div className="flex flex-col gap-10">
<div className="animate-on-scroll is-visible">
<div className="inline-flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
<svg className="lucide lucide-crown w-3 h-3 text-[#D4C4A8]" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4C4A8]">Redefining Luxury</span>
</div>
<h1 className="sm:text-7xl lg:text-[7.5rem] leading-[0.9] text-6xl font-thin text-white tracking-tighter">THE<br/> <span className="text-white/30">IMPOSSIBLE</span></h1>
</div>
<div className="max-w-xl animate-on-scroll delay-100 is-visible">
<p className="text-lg text-white/70 font-light leading-relaxed border-l border-[#D4C4A8] pl-6">
                        True luxury isn’t just about indulgence; it’s about magic, intrigue, and creating once-in-a-lifetime experiences. It’s time to challenge everything you thought you knew about bespoke travel.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505]">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="animate-on-scroll">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-4">Our Philosophy</span>
<h2 className="md:text-5xl text-4xl font-light text-white tracking-tight mb-8">Don't Just Travel <span className="text-[#D4C4A8] italic font-normal">– Dream.</span></h2>
<p className="leading-relaxed font-light text-white/60 mb-6">Travel agents make bookings. At D.Concierge  we create magic. We are not just a luxury travel agency or a concierge - we are travel alchemists. By blending six essential elements, we handcraft ultra-luxury vacations designed for the most discerning individuals.</p>
<p className="text-white/60 font-light leading-relaxed">
                        Imagine standing mere inches from the brushstrokes of a legendary artist, staying in the room where royalty once slept, or savoring dinner within a historic monument. Whether cultural, artistic, or adventurous, our immersive creations allow your dreams to become reality.
                    </p>
</div>
<div className="animate-on-scroll delay-100">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-4">The Lifestyle</span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-8">The Life of <span className="text-[#D4C4A8] italic font-normal">Luxury.</span></h2>
<p className="text-white/60 font-light leading-relaxed mb-6">
                        Experience a life where luxury knows no bounds. The Life of Luxury is not just about indulgence - it’s about living every moment to its fullest potential. From lavish travel and private estates to once-in-a-lifetime events, we offer you a lifestyle beyond compare.
                    </p>
<p className="leading-relaxed font-light text-white/60">At D.Concierge, we hold ourselves to a singular standard: perfection. We invite you to live a life where dreams take form, and every journey is a story.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080808] border-y border-white/5" id="about">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 animate-on-scroll">
<div className="relative aspect-[3/4] w-full bg-white/5 overflow-hidden border border-white/10">

<div className="bg-center bg-gradient-to-tr from-[#D4C4A8]/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd694ba2-7ab4-48a6-8c97-5ec2bda41432_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-light text-white">George Sardelis</h3>
<p className="text-xs uppercase tracking-widest text-[#D4C4A8] mt-1">CEO &amp; Founder</p>
</div>
</div>
</div>
<div className="lg:w-2/3 animate-on-scroll delay-100">
<div className="leading-relaxed font-light text-white/60 space-y-6">
<div className="border-l-2 border-[#D4C4A8] pl-6 py-2 my-8">
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
<div className="">
<h4 className="text-[#D4C4A8] text-xs uppercase tracking-widest mb-2">Global Reach</h4>
<p className="text-sm text-white/50">Access to the most exclusive destinations worldwide.</p>
</div>
<div className="">
<h4 className="text-[#D4C4A8] text-xs uppercase tracking-widest mb-2">24/7/365 Support</h4>
<p className="text-sm text-white/50">Immediate assistance whenever and wherever.</p>
</div>
<div className="">
<h4 className="text-[#D4C4A8] text-xs uppercase tracking-widest mb-2">Discretion</h4>
<p className="text-sm text-white/50">Privacy protected with the highest professionalism.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505]" id="services">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="mb-20 animate-on-scroll">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-4">Our Core</span>
<h2 className="text-4xl font-light tracking-tight text-white">Bespoke Travel Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">

<div className="bg-[#080808] p-12 group hover:bg-[#0f0f0f] transition-all duration-300 animate-on-scroll">
<div className="flex justify-between items-start mb-10">
<svg className="lucide lucide-plane w-8 h-8 text-[#D4C4A8] font-thin" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="text-xs font-semibold uppercase tracking-widest text-white/30">Air</span>
</div>
<h3 className="text-2xl font-light text-white mb-4">Fly Anywhere, Anytime.</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8 min-h-[80px]">
                        Private Jets, Executive Airliners, and Helicopters. We offer Charter, Sales, Management, New Build Consultation, and Crew Services. Your journey, your way.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Charter</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Management</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Interiors</span>
</div>
</div>

<div className="bg-[#080808] p-12 group hover:bg-[#0f0f0f] transition-all duration-300 animate-on-scroll delay-100">
<div className="flex justify-between items-start mb-10">
<svg className="lucide lucide-anchor w-8 h-8 text-[#D4C4A8] font-thin" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
<span className="text-xs font-semibold uppercase tracking-widest text-white/30">Sea</span>
</div>
<h3 className="text-2xl font-light text-white mb-4">Superyacht Supremacy.</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8 min-h-[80px]">
                        Mastering the extraordinary. Whether purchasing, chartering, or managing your yacht, our team delivers a seamless experience on the open water.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Charter</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Sales</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">New Build</span>
</div>
</div>

<div className="bg-[#080808] p-12 group hover:bg-[#0f0f0f] transition-all duration-300 animate-on-scroll">
<div className="flex justify-between items-start mb-10">
<svg className="lucide lucide-car w-8 h-8 text-[#D4C4A8] font-thin" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
<span className="text-xs font-semibold uppercase tracking-widest text-white/30">Land</span>
</div>
<h3 className="text-2xl font-light text-white mb-4">Transportation Services.</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8 min-h-[80px]">
                        A world-class fleet of Limousines, Hyper-Cars, and Luxury Buses supported by professional Chauffeurs. Wherever you need to go, we take you there.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Chauffeur</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Rentals</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Sales</span>
</div>
</div>

<div className="bg-[#080808] p-12 group hover:bg-[#0f0f0f] transition-all duration-300 animate-on-scroll delay-100">
<div className="flex justify-between items-start mb-10">
<svg className="lucide lucide-castle w-8 h-8 text-[#D4C4A8] font-thin" data-lucide="castle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5V3"></path><path d="M14 5V3"></path><path d="M15 21v-3a3 3 0 0 0-6 0v3"></path><path d="M18 3v8"></path><path d="M18 5H6"></path><path d="M22 11H2"></path><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"></path><path d="M6 3v8"></path></svg>
<span className="text-xs font-semibold uppercase tracking-widest text-white/30">Stay</span>
</div>
<h3 className="text-2xl font-light text-white mb-4">Dream Destinations.</h3>
<p className="text-sm text-white/50 font-light leading-relaxed mb-8 min-h-[80px]">
                        Exceptional investments and stays. Luxury Villa Rentals, Private Islands, Winter Chalets, and Luxury Real Estate brokerage for discerning travelers.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Villas</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Private Islands</span>
<span className="text-[10px] border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-wider">Real Estate</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505] border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
<div className="">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-4">Concierge</span>
<h2 className="text-4xl font-light tracking-tight text-white mb-4">The Ultimate Experience</h2>
<p className="text-sm font-light text-white/50 max-w-xl">Embark on once in a lifetime adventures. A D.Concierge VIP Services creation is more than just a journey - it is a masterpiece.</p>
</div>
<div className="hidden md:block">
<a className="text-xs uppercase tracking-widest text-[#D4C4A8] border-b border-[#D4C4A8]/30 pb-1 hover:text-white transition-colors" href="#contact">Start your journey</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-8 animate-on-scroll delay-100">
<svg className="lucide lucide-palette w-6 h-6 text-[#D4C4A8] mb-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="text-lg font-medium text-white mb-3">Cultural Masterpieces</h3>
<p className="text-xs font-light text-white/60 leading-relaxed">
                        Access to masterpieces and renowned artists. From painting and sculpture to theatre, unveil the world's treasures.
                    </p>
</div>

<div className="glass-card p-8 animate-on-scroll delay-200">
<svg className="lucide lucide-hourglass w-6 h-6 text-[#D4C4A8] mb-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
<h3 className="text-lg font-medium text-white mb-3">Historical Journeys</h3>
<p className="text-xs font-light text-white/60 leading-relaxed">
                        Uncover legends and relive history. Step into the past or explore your own personal and family heritage.
                    </p>
</div>

<div className="glass-card p-8 animate-on-scroll delay-300">
<svg className="lucide lucide-mountain w-6 h-6 text-[#D4C4A8] mb-6" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<h3 className="text-lg font-medium text-white mb-3">Natural Encounters</h3>
<p className="text-xs font-light text-white/60 leading-relaxed">
                        Discover breathtaking landscapes and venture into untouched wilderness. See the planet through new eyes.
                    </p>
</div>

<div className="glass-card p-8 animate-on-scroll delay-100">
<svg className="lucide lucide-compass w-6 h-6 text-[#D4C4A8] mb-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="text-lg font-medium text-white mb-3">Impossible Expeditions</h3>
<p className="text-xs font-light text-white/60 leading-relaxed">
                        To the Edge of the World. Engage with scientific research, navigate the Arctic, or journey to space.
                    </p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start text-[10px] text-white/40 uppercase tracking-widest animate-on-scroll">
<span>Personal Shopper</span>
<span>Art</span>
<span>Wellness</span>
<span>Bespoke Jewellery</span>
<span>Gastronomy</span>
<span>Proposal Services</span>
</div>
</div>
</section>

<section className="relative py-32 bg-[#080808]" id="events">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="mb-20 animate-on-scroll">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-4">The Calendar</span>
<h2 className="text-4xl font-light tracking-tight text-white mb-4">Access the Impossible</h2>
<p className="text-white/50 font-light max-w-2xl">Unlock unforgettable moments at the most prestigious events. Awards, Galas, Fashion Weeks, and Premieres.</p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 space-y-6 gap-x-6 gap-y-6">

<div className="glass-card p-8 break-inside-avoid animate-on-scroll">
<span className="text-4xl font-thin text-[#D4C4A8]/20 block mb-6">Q1</span>
<div className="space-y-6">
<div className="">
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">January</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li className="">• Golden Globe Awards</li>
<li className="">• Critics’ Choice Awards</li>
<li>• Australian Open (Tennis)</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">February</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• Grammy Music Awards</li>
<li>• BAFTA Awards</li>
<li>• SAG Awards</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">March</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• The Oscars (Academy Awards)</li>
<li>• Elton John AIDS Party</li>
<li>• Le Bal de la Rose</li>
</ul>
</div>
</div>
</div>

<div className="glass-card p-8 break-inside-avoid animate-on-scroll">
<span className="text-4xl font-thin text-[#D4C4A8]/20 block mb-6">Q2</span>
<div className="space-y-6">
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">April</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• Laurence Olivier Awards</li>
<li>• White House Correspondents Dinner</li>
<li>• The Masters (Golf)</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">May</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• Cannes Film Festival</li>
<li>• Met Gala</li>
<li>• Laureus Sports Awards</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">June</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• The Tony Awards</li>
<li>• BET Awards</li>
<li>• Wimbledon (London)</li>
</ul>
</div>
</div>
</div>

<div className="glass-card p-8 break-inside-avoid animate-on-scroll">
<span className="text-4xl font-thin text-[#D4C4A8]/20 block mb-6">Q3</span>
<div className="space-y-6">
<div className="">
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">July</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• Monaco Red Cross Ball</li>
<li className="">• The British Open (Golf)</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">August</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• Venice Film Festival</li>
<li>• US Open (Tennis - NY)</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">September</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• MTV Video Music Awards</li>
<li>• Primetime Emmy Awards</li>
<li>• Toronto Film Festival</li>
</ul>
</div>
</div>
</div>

<div className="glass-card p-8 break-inside-avoid animate-on-scroll">
<span className="text-4xl font-thin text-[#D4C4A8]/20 block mb-6">Q4</span>
<div className="space-y-6">
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">October</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• CFDA Fashion Awards</li>
<li>• BFI London Film Festival</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">November</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• GQ Men of the Year</li>
<li>• Latin Grammy Awards</li>
<li>• Europe Music Awards</li>
</ul>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">December</span>
<ul className="space-y-1.5 text-sm font-light text-white/80">
<li>• British Fashion Awards</li>
<li>• The Nobel Prize Ceremony</li>
<li>• Gotham Independent Film Awards</li>
</ul>
</div>
</div>
</div>

<div className="glass-card p-8 break-inside-avoid animate-on-scroll">
<span className="text-4xl font-thin text-[#D4C4A8]/20 block mb-6">ALL YEAR</span>
<div className="space-y-6">
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">Fashion Weeks</span>
<p className="text-sm font-light text-white/80">London - Milan - Paris - New York</p>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">Galas</span>
<p className="text-sm font-light text-white/80">Global Gift Gala, Knights of Charity, AmfAR</p>
</div>
<div>
<span className="text-[10px] text-[#D4C4A8] uppercase tracking-widest block mb-2">Music</span>
<p className="text-sm font-light text-white/80">Worldwide Concerts, Classical Music, Festivals</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#050505] border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="flex flex-col lg:flex-row gap-16 items-start mb-16 animate-on-scroll">
<div className="lg:w-1/3">
<h2 className="text-3xl font-light tracking-tight text-white mb-4">World Class Sports</h2>
<p className="text-white/50 text-sm font-light">
                        We personalize every sports and travel experience to your unique vision. From the most sought-after VIP tickets to immersive adventures.
                    </p>
</div>
<div className="lg:w-2/3 flex flex-wrap gap-4">
<div className="px-6 py-4 border border-white/10 rounded-sm">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-2">Football</span>
<p className="text-xs text-white/70">FIFA World Cup, Champions League, Premier League</p>
</div>
<div className="px-6 py-4 border border-white/10 rounded-sm">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-2">Motorsport</span>
<p className="text-xs text-white/70">F1 (Monaco, Singapore, Abu Dhabi), MotoGP</p>
</div>
<div className="px-6 py-4 border border-white/10 rounded-sm">
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest block mb-2">Tennis</span>
<p className="text-xs text-white/70">Grand Slams, ATP Finals, Davis Cup</p>
</div>
</div>
</div>
<div className="bg-[#080808] border border-white/10 p-8 md:p-12 animate-on-scroll">
<h3 className="text-lg font-medium text-white mb-6">The Player Experience</h3>
<p className="text-sm text-white/60 font-light leading-relaxed max-w-3xl">
                    Imagine stepping onto the court to play with a legend, or enjoying a private dinner with a sports icon. We create moments of true connection—meet &amp; greets, photo ops, and private matches—arranged with absolute discretion.
                </p>
</div>
</div>
</section>

<section className="relative py-24 bg-[#030303] border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 animate-on-scroll">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#D4C4A8]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[#D4C4A8] text-xs font-semibold uppercase tracking-widest">Private Protection</span>
</div>
<h2 className="text-3xl md:text-4xl font-light text-white mb-8 max-w-2xl">Protecting your world with discretion and precision.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/10">
<div>
<h4 className="text-white text-sm font-medium mb-3">Close Protection</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">
                        Diplomatic, polite, and adaptable officers who seamlessly integrate with your lifestyle while ensuring safety.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-3">Global Reach</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">
                        Resources covering 95% of global cities. We provide seamless protection wherever your travels take you.
                    </p>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-3">Asset &amp; Cyber</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">
                        From armored vehicles and maritime security to risk analysis and vehicle tracking.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#D4C4A8]" id="membership">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 justify-between items-center animate-on-scroll">
<div className="lg:w-1/2">
<span className="text-black/60 text-xs font-bold uppercase tracking-widest block mb-4">Limited Access</span>
<h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">Tailored to Perfection.</h2>
<p className="leading-relaxed font-light text-black/70 mb-8">D.Concierge VIP Services Membership is more than luxury - it’s about creating tailor-made experiences designed uniquely for you. Exclusivity begins where visibility ends.</p>
<a className="inline-block px-8 py-3 bg-black text-[#D4C4A8] text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors" href="#contact">Apply for Membership</a>
</div>
<div className="lg:w-1/3">
<ul className="space-y-4 border-l border-black/20 pl-8">
<li className="flex flex-col">
<span className="text-xs font-bold text-black uppercase tracking-wider">Health &amp; Wellness</span>
<span className="text-xs text-black/60 mt-1">Private consultations &amp; retreats.</span>
</li>
<li className="flex flex-col">
<span className="text-xs font-bold text-black uppercase tracking-wider">Elite Access</span>
<span className="text-xs text-black/60 mt-1">Galas, premieres &amp; private shopping.</span>
</li>
<li className="flex flex-col">
<span className="text-xs font-bold text-black uppercase tracking-wider">Wealth Management</span>
<span className="text-xs text-black/60 mt-1">Exclusive investment opportunities.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12" id="contact">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 animate-on-scroll">
<div className="col-span-1 lg:col-span-2">
<span className="uppercase text-2xl font-light text-white tracking-tight"> Defensor VIP Services</span>
<p className="mt-6 text-white/50 font-light max-w-sm text-sm leading-relaxed">
                        Expression of a dream, passion, and the essence of quality. Don't just travel - dream.
                    </p>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4C4A8] mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light text-white/70">
<li className=""><a className="hover:text-white transition-colors" href="#">office@D.Concierge.com</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">www.D.Concierge.com</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4C4A8] mb-6">Locations</h4>
<ul className="space-y-3 text-sm font-light text-white/70">
<li>London</li>
<li>Paris</li>
<li>New York</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-[10px] uppercase text-white/30 tracking-widest">© 2026 Defensor Concierge Services. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
