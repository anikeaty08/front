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
colors: {
brand: {
blue: '#00a5e3',
dark: '#0f172a',
light: '#f8fafc'
}
},
fontFamily: {
sans: ['Satoshi', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'ticker': 'ticker 30s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
reveal: {
'0%': { clipPath: 'inset(0 100% 0 0)' },
'100%': { clipPath: 'inset(0 0 0 0)' },
},
ticker: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('observer-hidden');
                    entry.target.classList.add('observer-show');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.observer-hidden').forEach((el) => {
            observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-4 mix-blend-difference text-white">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="waves"></i>
</div>
<span className="font-display font-medium text-lg tracking-tight uppercase">American<br/><span className="text-brand-blue">Mega</span>Laundromat</span>
</div>
<div className="hidden md:flex gap-8 items-center font-sans text-sm font-medium tracking-wide">
<a className="hover:text-brand-blue transition-colors" href="#services">Services</a>
<a className="hover:text-brand-blue transition-colors" href="#stories">Our Stories</a>
<a className="hover:text-brand-blue transition-colors" href="#reviews">Reviews</a>
<a className="px-5 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all" href="#contact">Get Quote</a>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col lg:flex-row group overflow-hidden">

<div className="hero-split flex-1 relative h-[50vh] lg:h-full border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020175-0510529bfa5f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"></div>
<div className="absolute inset-0 bg-slate-900/80 backdrop-grayscale-[50%]"></div>
<div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 text-white">
<div className="flex items-center gap-2 mb-6 text-brand-blue font-mono text-xs uppercase tracking-widest opacity-0 animate-fade-in-up" style={{animationDelay: '100ms'}}>
<i className="w-4 h-4" data-lucide="building-2"></i>
<span>Enterprise Solutions</span>
</div>
<h1 className="font-display text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                    Scale Your Business,<br/>Not Your <span className="text-brand-blue">Laundry.</span>
</h1>
<p className="font-sans text-lg text-slate-400 max-w-md mb-10 font-light opacity-0 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                    Industrial-grade logistics for hotels, hospitals, and federal agencies. Trusted by 50+ corporate partners.
                </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center opacity-0 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<a className="group/btn flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium transition-all hover:bg-brand-blue hover:text-white" href="#">
<span>Request B2B Quote</span>
<i className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-3 border-l border-white/20 pl-6">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-slate-500 border border-slate-900"></div>
</div>
<span className="text-xs font-mono text-slate-400">Processing 10T+ Monthly</span>
</div>
</div>
</div>
</div>

<div className="hero-split flex-1 relative h-[50vh] lg:h-full overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517677208171-0bc67998001f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105"></div>
<div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
<div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 text-slate-900">
<div className="flex items-center gap-2 mb-6 text-brand-blue font-mono text-xs uppercase tracking-widest opacity-0 animate-fade-in-up" style={{animationDelay: '500ms'}}>
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Personal Service</span>
</div>
<h1 className="font-display text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '600ms'}}>
                    Your Weekend,<br/><span className="text-brand-blue">Reclaimed.</span>
</h1>
<p className="font-sans text-lg text-slate-600 max-w-md mb-10 font-light opacity-0 animate-fade-in-up" style={{animationDelay: '700ms'}}>
                    Premium wash &amp; fold service with pickup and delivery. 4.9 Stars on Google (2,000+ Reviews).
                </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center opacity-0 animate-fade-in-up" style={{animationDelay: '800ms'}}>
<a className="group/btn flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-brand-blue" href="#">
<span>Schedule Pickup</span>
<i className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" data-lucide="calendar"></i>
</a>
<div className="flex items-center gap-2 border-l border-slate-300 pl-6">
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<span className="text-sm font-bold">4.9/5.0</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-black border-y border-white/10 overflow-hidden">
<p className="text-center font-mono text-xs text-slate-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
<div className="relative w-full flex overflow-hidden">
<div className="flex animate-ticker gap-24 whitespace-nowrap min-w-full">

<span className="text-2xl font-display font-bold text-white/40">MARRIOTT</span>
<span className="text-2xl font-display font-bold text-white/40">THE RITZ-CARLTON</span>
<span className="text-2xl font-display font-bold text-white/40">FEDERAL RESERVE</span>
<span className="text-2xl font-display font-bold text-white/40">US ARMY</span>
<span className="text-2xl font-display font-bold text-white/40">FOUR SEASONS</span>
<span className="text-2xl font-display font-bold text-white/40">HILTON</span>
<span className="text-2xl font-display font-bold text-white/40">JOHNS HOPKINS</span>

<span className="text-2xl font-display font-bold text-white/40">MARRIOTT</span>
<span className="text-2xl font-display font-bold text-white/40">THE RITZ-CARLTON</span>
<span className="text-2xl font-display font-bold text-white/40">FEDERAL RESERVE</span>
<span className="text-2xl font-display font-bold text-white/40">US ARMY</span>
</div>
</div>
</section>

<section className="relative py-32 px-6 bg-brand-dark overflow-hidden" id="stories">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 observer-hidden">
<div>
<h2 className="font-display text-4xl md:text-6xl text-white font-medium tracking-tight mb-4">
                        Legendary <span className="text-brand-blue">Cleans</span>.
                    </h2>
<p className="font-sans text-slate-400 max-w-lg text-lg">
                        We don't just wash clothes. We handle the fabric of critical operations. From currency durability to sterile medical linens.
                    </p>
</div>
<div className="mt-8 md:mt-0">
<span className="font-mono text-xs text-brand-blue border border-brand-blue/30 px-3 py-1 rounded-full">EST. 2005</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">

<div className="col-span-1 md:col-span-8 relative group rounded-2xl overflow-hidden border border-white/10 observer-hidden">
<img alt="Money" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<div className="flex justify-between items-end">
<div>
<span className="font-mono text-brand-blue text-sm mb-2 block">CASE 001 // FEDERAL RESERVE</span>
<h3 className="font-display text-3xl md:text-4xl text-white mb-4">Laundering Money<br/>(Legally).</h3>
<p className="text-slate-300 font-light max-w-md text-sm md:text-base hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    When the Central Bank needed to test the durability of the new $100 bill substrate against extreme washing conditions, they trusted our industrial machines to push the limits.
                                </p>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
<i className="text-white w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-4 relative group rounded-2xl overflow-hidden border border-white/10 observer-hidden" style={{transitionDelay: '100ms'}}>
<img alt="Sport" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="font-mono text-brand-blue text-xs mb-2 block">CASE 002 // SPORTS</span>
<h3 className="font-display text-2xl text-white">The G.O.A.T's Kit</h3>
<p className="text-slate-300 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Washing match-day kits for international soccer legends visiting DC.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-5 relative group rounded-2xl overflow-hidden border border-white/10 observer-hidden" style={{transitionDelay: '200ms'}}>
<img alt="Camo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="font-mono text-brand-blue text-xs mb-2 block">CASE 003 // DEFENSE</span>
<h3 className="font-display text-2xl text-white">Military Grade</h3>
<p className="text-slate-300 text-sm mt-3 font-light">
                            Providing sterile, high-volume laundry services for Army bases. 99.9% sanitation rate.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-7 bg-brand-blue rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden observer-hidden" style={{transitionDelay: '300ms'}}>
<div className="absolute right-0 top-0 opacity-10">
<i className="w-64 h-64 -mr-10 -mt-10" data-lucide="droplets"></i>
</div>
<div className="relative z-10">
<h4 className="font-display text-white text-lg">Capacity Tracker</h4>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-mono text-5xl md:text-7xl font-bold text-white tracking-tighter">1.2M</span>
<span className="text-white/80 font-sans">lbs / year</span>
</div>
</div>
<div className="relative z-10 flex items-center gap-4 mt-8">
<div className="h-px bg-white/30 flex-1"></div>
<span className="font-mono text-xs text-white uppercase">Live Metrics</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 observer-hidden">
<h2 className="font-display text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Two Worlds. <span className="text-brand-blue">One Standard.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="glass-panel-light p-10 rounded-xl relative hover:-translate-y-2 transition-transform duration-300 shadow-sm observer-hidden">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-display font-bold text-slate-600">TH</div>
<div>
<h4 className="font-sans font-bold text-slate-900">Tony H.</h4>
<p className="text-xs font-mono text-slate-500 uppercase">Corporate Housing Manager</p>
</div>
<i className="ml-auto w-5 h-5 text-slate-400" data-lucide="briefcase"></i>
</div>
<p className="font-sans text-lg text-slate-700 leading-relaxed">
                        "Excellent service that works well for our corporate apartment rentals. They are efficient, friendly, and the price is reasonable. A gem to work with for high-volume needs."
                    </p>
<div className="mt-6 flex gap-1">
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
</div>
</div>

<div className="glass-panel-light p-10 rounded-xl relative hover:-translate-y-2 transition-transform duration-300 shadow-sm observer-hidden" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-sans font-bold text-slate-900">Terinee B.</h4>
<p className="text-xs font-mono text-slate-500 uppercase">Busy Professional</p>
</div>
<i className="ml-auto w-5 h-5 text-slate-400" data-lucide="home"></i>
</div>
<p className="font-sans text-lg text-slate-700 leading-relaxed">
                        "FANTASTIC wash &amp; fold spot! Not only do they do a great job, but they are also the cheapest ($1 per pound) that I've found for this level of quality. Saved my weekend."
                    </p>
<div className="mt-6 flex gap-1">
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
<i className="w-4 h-4 fill-brand-blue text-brand-blue" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/10">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] opacity-10 bg-cover bg-fixed bg-center"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-display text-5xl md:text-7xl text-white font-medium tracking-tight mb-8">Ready to <span className="text-brand-blue italic">clean up</span>?</h2>
<p className="font-sans text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Whether you need to wash 10,000 hotel sheets or just your gym clothes, we have the machinery and the manpower.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-brand-blue text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-[0_0_30px_rgba(0,165,227,0.4)] hover:shadow-[0_0_50px_rgba(0,165,227,0.6)]">
                    Get Corporate Quote
                </button>
<button className="px-10 py-5 rounded-full font-medium text-lg text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                    Book Individual Pickup
                </button>
</div>
</div>
</section>

<footer className="bg-black text-slate-400 py-16 border-t border-white/5 font-sans text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="waves"></i>
</div>
<span className="font-display text-white font-medium tracking-tight uppercase text-xs">American<br/>MegaLaundromat</span>
</div>
<p className="mb-6">2781 Hamilton St, Suite B<br/>Hyattsville, MD 20782</p>
<p>301-559-0707</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="hover:text-brand-blue transition-colors" href="#">Commercial Laundry</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Wash &amp; Fold</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Pickup &amp; Delivery</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Self Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-brand-blue transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Newsletter</h4>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-4 py-2 w-full focus:outline-none focus:border-brand-blue transition-colors" placeholder="Email address" type="email"/>
<button className="bg-brand-blue text-white px-3 rounded hover:bg-brand-blue/80 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex gap-4 mt-6">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2025 American Mega Laundromat. All rights reserved.</p>
<p>Designed with <span className="text-brand-blue">Intensity</span>.</p>
</div>
</footer>


    </>
  );
}
