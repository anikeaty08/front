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
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
dark: '#0f172a',
light: '#1e293b',
accent: '#f59e0b', // High-vis amber/orange
accentHover: '#d97706'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Form Submission Simulation (PC ONBOARD Showcase)
        const form = document.getElementById('lead-form');
        const successMsg = document.getElementById('success-msg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate API call / CRM lead capture
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
            lucide.createIcons();
            
            setTimeout(() => {
                successMsg.classList.remove('hidden');
                btn.innerHTML = originalText;
                lucide.createIcons();
            }, 1200);
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
      

<div className="bg-brand-accent text-brand-dark py-2 px-4 text-xs font-bold uppercase tracking-wider hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex space-x-6">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="check-circle"></i> Licensed Mechanics</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="shield-check"></i> Logbook Warranties Protected</span>
</div>
<div className="flex items-center gap-4">
<span>23 Multan St, Riverstone NSW</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="clock"></i> Mon-Fri: 8am - 5pm</span>
</div>
</div>
</div>

<nav className="bg-brand-dark/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-10 h-10 bg-brand-accent rounded flex items-center justify-center">
<i className="text-brand-dark w-6 h-6" data-lucide="wrench"></i>
</div>
<div>
<span className="font-black text-2xl tracking-tighter text-white block leading-none">AUTO AID PLUS</span>
<span className="text-[10px] text-brand-accent uppercase tracking-[0.2em] font-bold">Mechanical Services</span>
</div>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-semibold hover:text-brand-accent transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold hover:text-brand-accent transition-colors" href="#about">About</a>
<a className="text-sm font-semibold hover:text-brand-accent transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-semibold hover:text-brand-accent transition-colors" href="#contact">Contact</a>
<a className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all" href="tel:0466643182">
<div className="bg-brand-accent p-1.5 rounded-full group-hover:animate-pulse">
<i className="w-4 h-4 text-brand-dark" data-lucide="phone"></i>
</div>
<span className="font-bold text-white tracking-wide">0466 643 182</span>
</a>
<a className="bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold px-6 py-3 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transform hover:-translate-y-0.5" href="#quote">
                        Get a Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-300 hover:text-white p-2" id="mobile-menu-btn">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden bg-brand-light border-b border-white/10 absolute w-full left-0" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
<a className="block px-3 py-3 text-base font-semibold hover:bg-white/5 rounded-lg" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-semibold hover:bg-white/5 rounded-lg" href="#about">About</a>
<a className="block px-3 py-3 text-base font-semibold hover:bg-white/5 rounded-lg" href="#contact">Contact</a>
<div className="pt-4 flex flex-col gap-3">
<a className="flex items-center justify-center gap-2 bg-white/10 py-3 rounded-lg font-bold text-white" href="tel:0466643182">
<i className="w-5 h-5 text-brand-accent" data-lucide="phone"></i> Call 0466 643 182
                    </a>
<a className="text-center bg-brand-accent text-brand-dark font-bold py-3 rounded-lg" href="#quote">
                        Request Quote
                    </a>
</div>
</div>
</div>
</nav>

<section className="hero-bg flex-grow flex items-center py-20 lg:py-32 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                        Accepting New Clients
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                        RIVERSTONE'S <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-300">TRUSTED</span> MECHANIC.
                    </h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                        Don't let car troubles slow you down. Expert diagnostics, transparent pricing, and rapid turnarounds right here in Western Sydney. We fix it right, the first time.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="text-center bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg transform hover:-translate-y-1" href="#quote">
                            Book a Service
                        </a>
<a className="text-center flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all" href="tel:0466643182">
<i className="w-5 h-5" data-lucide="phone-call"></i> Call Us Now
                        </a>
</div>
<div className="flex items-center gap-4 pt-4 text-sm text-slate-400 font-medium">
<div className="flex -space-x-2">
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-brand-dark" src="https://i.pravatar.cc/100?img=11"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-brand-dark" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Customer" className="w-8 h-8 rounded-full border-2 border-brand-dark" src="https://i.pravatar.cc/100?img=68"/>
</div>
<p>Trusted by <span className="text-white font-bold">500+</span> local drivers.</p>
</div>
</div>

<div className="bg-brand-light p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden" id="quote">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-yellow-300"></div>
<h3 className="text-2xl font-black text-white mb-2">Get an Instant Quote</h3>
<p className="text-slate-400 text-sm mb-6">Fill out the details below and our system will text you back within 5 minutes. No waiting around.</p>
<form className="space-y-4" id="lead-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="0400 000 000" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Rego (Optional)</label>
<input className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors uppercase" placeholder="ABC-123" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Service Needed</label>
<select className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
<option>Logbook Service</option>
<option>Brake/Clutch Repair</option>
<option>Diagnostics</option>
<option>General Repair</option>
<option>Unsure / Need Advice</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Describe the issue</label>
<textarea className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="E.g., Squeaking noise when braking..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-black text-lg py-4 rounded-lg transition-all flex items-center justify-center gap-2" type="submit">
                            Send Request <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>

<div className="hidden absolute inset-0 bg-brand-light flex flex-col items-center justify-center p-8 text-center" id="success-msg">
<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
<i className="w-10 h-10 text-green-500" data-lucide="check-circle-2"></i>
</div>
<h4 className="text-2xl font-black text-white mb-2">Quote Sent!</h4>
<p className="text-slate-400">We've received your details. Check your phone, you will receive an automated text from our team in just a moment.</p>
<button className="mt-6 text-brand-accent font-bold hover:underline" onclick="document.getElementById('success-msg').classList.add('hidden'); document.getElementById('lead-form').reset();">Send another request</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-dark" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">WHAT WE DO BEST.</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-colors group">
<div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-brand-accent" data-lucide="book-check"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Logbook Servicing</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Maintain your new car warranty without paying inflated dealership prices. Fully certified servicing.</p>
<a className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#quote">Book Now <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-colors group">
<div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-brand-accent" data-lucide="disc"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Brake &amp; Clutch</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Complete brake pad replacements, disc machining, and clutch system repairs for ultimate safety.</p>
<a className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#quote">Book Now <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-colors group">
<div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-brand-accent" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Advanced Diagnostics</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Got a check engine light? We use modern OBD2 scanning tools to pinpoint electrical and engine faults fast.</p>
<a className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#quote">Book Now <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>

<div className="bg-brand-light p-8 rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-colors group">
<div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7 text-brand-accent" data-lucide="tool"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">General Repairs</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">From suspension knocks to cooling system leaks, our workshop handles all major and minor mechanical repairs.</p>
<a className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#quote">Book Now <i className="w-4 h-4" data-lucide="chevron-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-light border-y border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-black text-white mb-2">LOCAL REPUTATION.</h2>
<p className="text-slate-400">See what Riverstone drivers are saying about us.</p>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-3">
<div className="text-right">
<div className="text-3xl font-black text-white">5.0</div>
<div className="flex text-brand-accent">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<img alt="Google" className="w-10 h-10 bg-white p-2 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"/>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-brand-dark p-6 rounded-xl border border-white/5">
<div className="flex text-brand-accent mb-3">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"Honestly the best mechanic experience I've had in the Blacktown area. Dropped my Hilux in for a major service and they communicated perfectly the whole way through. No hidden costs."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white">MR</div>
<span className="text-white font-bold text-sm">Mark R.</span>
</div>
</div>

<div className="bg-brand-dark p-6 rounded-xl border border-white/5">
<div className="flex text-brand-accent mb-3">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"Had a weird grinding noise on my brakes. Auto Aid Plus sorted it out the same day. Great guys, clean workshop, highly recommend if you're local to Riverstone."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">SJ</div>
<span className="text-white font-bold text-sm">Sarah J.</span>
</div>
</div>

<div className="bg-brand-dark p-6 rounded-xl border border-white/5">
<div className="flex text-brand-accent mb-3">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 text-sm mb-4 leading-relaxed">"Fast, reliable and well priced. They even texted me a quote before doing the work so I knew exactly what I was in for. Will be bringing my wife's car here too."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-xs font-bold text-white">DP</div>
<span className="text-white font-bold text-sm">Dave P.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-dark" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 bg-brand-light rounded-3xl overflow-hidden border border-white/5 shadow-2xl">

<div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-black text-white mb-8">VISIT THE WORKSHOP.</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-brand-dark p-3 rounded-lg text-brand-accent">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-bold text-lg">Address</h4>
<p className="text-slate-400">23 Multan St<br/>Riverstone, NSW 2765</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-dark p-3 rounded-lg text-brand-accent">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-white font-bold text-lg">Phone</h4>
<p className="text-slate-400"><a className="hover:text-brand-accent transition-colors" href="tel:0466643182">0466 643 182</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-dark p-3 rounded-lg text-brand-accent">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-white font-bold text-lg">Email</h4>
<p className="text-slate-400"><a className="hover:text-brand-accent transition-colors" href="mailto:bookings@autoaidplus.com.au">bookings@autoaidplus.com.au</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-brand-dark p-3 rounded-lg text-brand-accent">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-white font-bold text-lg">Trading Hours</h4>
<p className="text-slate-400">Monday - Friday: 8:00 AM - 5:00 PM<br/>Saturday &amp; Sunday: Closed</p>
</div>
</div>
</div>
</div>

<div className="relative h-64 lg:h-auto bg-brand-dark min-h-[400px]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-brand-dark/50"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
<i className="w-16 h-16 text-brand-accent mb-4 opacity-80" data-lucide="map"></i>
<h3 className="text-xl font-bold text-white mb-2">Located in Riverstone</h3>
<p className="text-slate-300 max-w-xs mb-6 text-sm">Conveniently located in the heart of the Blacktown catchment. Easy drop-off near Riverstone Station.</p>
<a className="bg-white text-brand-dark font-bold px-6 py-2 rounded-full text-sm hover:bg-brand-accent transition-colors" href="https://maps.google.com/?q=23+Multan+St+Riverstone+NSW" target="_blank">Get Directions</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020617] pt-16 pb-8 border-t border-white/5 text-center md:text-left">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<i className="text-brand-accent w-6 h-6" data-lucide="wrench"></i>
<span className="font-black text-2xl tracking-tighter text-white">AUTO AID PLUS</span>
</div>
<p className="text-slate-500 text-sm max-w-sm mx-auto md:mx-0">
                        Riverstone's premium automotive repair center. Delivering reliable, transparent, and high-quality mechanical servicing to Western Sydney.
                    </p>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
<ul className="space-y-2 text-slate-500 text-sm">
<li><a className="hover:text-brand-accent transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#quote">Book a Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
<ul className="space-y-2 text-slate-500 text-sm">
<li>Logbook Servicing</li>
<li>Brake &amp; Clutch</li>
<li>Engine Diagnostics</li>
<li>General Repairs</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs uppercase tracking-widest font-semibold">
                    © 2026 Auto Aid Plus. All Rights Reserved. ABN: 27 680 735 918 (NYALKARAN AUTO PTY LTD)
                </p>
<div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full">
                    Powered by <span className="text-purple-400 ml-1 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> PC ONBOARD</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
