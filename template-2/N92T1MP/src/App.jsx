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



  lucide.createIcons();

  // mobile nav
  document.getElementById('mobileToggle').addEventListener('click',()=>{
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  // fade-in observer
  const io=new IntersectionObserver(entries=>{
    entries.forEach(el=>{if(el.isIntersecting){el.target.classList.add('reveal');io.unobserve(el.target);}});
  },{threshold:.15});
  document.querySelectorAll('[data-fade]').forEach(el=>io.observe(el));

  // chart
  new Chart(document.getElementById('savingsChart'),{
    type:'line',
    data:{labels:['Year 1','Year 2','Year 3','Year 4','Year 5'],datasets:[{data:[1200,1140,1083,1028,975],fill:true,backgroundColor:'rgba(244,63,94,.15)',borderColor:'#f43f5e',tension:.4}]},
    options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:false}}}
  });

  // year
  document.getElementById('year').textContent=new Date().getFullYear();

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
      

<header className="fixed inset-x-0 top-0 z-30">
<div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between rounded-b-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-lg">
<a className="flex items-center gap-2 group" href="#">
<svg className="w-5 h-5 text-rose-500 group-hover:text-amber-500 transition-colors" strokeWidth="1.5"><use href="#wind"></use></svg>
<span className="font-medium text-base text-slate-900">Hurricon HVAC</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="hover:text-rose-500" href="#home">Home</a>
<a className="hover:text-rose-500" href="#services">Services</a>
<a className="hover:text-rose-500" href="#contact">Contact</a>
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gradient-to-r from-amber-400 to-rose-400 text-white shadow-md hover:brightness-95" href="#schedule">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> Schedule
      </a>
</nav>
<button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-white/40" id="mobileToggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="md:hidden hidden px-6 pb-6 pt-3 space-y-3 backdrop-blur bg-white/50 rounded-b-xl shadow-lg" id="mobileMenu">
<a className="block font-medium hover:text-rose-500" href="#home">Home</a>
<a className="block font-medium hover:text-rose-500" href="#services">Services</a>
<a className="block font-medium hover:text-rose-500" href="#contact">Contact</a>
<a className="inline-flex items-center w-full justify-center gap-1.5 py-2 rounded-md bg-gradient-to-r from-amber-400 to-rose-400 text-white shadow-md hover:brightness-95" href="#schedule">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> Schedule
    </a>
</div>
</header>

<section className="relative h-[88vh] flex items-center justify-center overflow-hidden" id="home">
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center scale-110" src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1920" />
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/60 via-amber-400/50 to-yellow-300/40 mix-blend-multiply"></div>
<div className="relative z-10 text-center px-6 max-w-3xl" data-fade="">
<h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white mb-6 tracking-tight">Year-Round Comfort, Warm Vibes</h1>
<p className="text-lg md:text-xl text-white/90 mb-8">Certified experts bringing euphoric temperatures to homes & businesses.</p>
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-white text-base shadow-lg hover:brightness-95" href="#schedule">
<i className="w-5 h-5" data-lucide="phone-call"></i> Book a Service Call
    </a>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3" data-fade="">Our Expertise</h2>
<p className="text-slate-600 mb-12 max-w-xl" data-fade="">Installations, repairs & maintenance wrapped in transparent pricing.</p>
<div className="grid gap-8 md:grid-cols-3">

<div className="p-6 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md hover:ring-rose-400 transition-all" data-fade="" style={{transitionDelay: `.05s`}}>
<i className="w-7 h-7 text-rose-500 mb-4" data-lucide="snowflake"></i>
<h3 className="font-semibold text-lg mb-1">Cooling Installation</h3>
<p className="text-slate-700 text-sm">High-SEER systems for chilled serenity.</p>
</div>
<div className="p-6 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md hover:ring-rose-400 transition-all" data-fade="" style={{transitionDelay: `.10s`}}>
<i className="w-7 h-7 text-amber-500 mb-4" data-lucide="flame"></i>
<h3 className="font-semibold text-lg mb-1">Heating Repair</h3>
<p className="text-slate-700 text-sm">Rapid diagnostics to keep the warmth flowing.</p>
</div>
<div className="p-6 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md hover:ring-rose-400 transition-all" data-fade="" style={{transitionDelay: `.15s`}}>
<i className="w-7 h-7 text-lime-500 mb-4" data-lucide="wind"></i>
<h3 className="font-semibold text-lg mb-1">Indoor Air Quality</h3>
<p className="text-slate-700 text-sm">Purification & humidity control for blissful breathing.</p>
</div>
<div className="p-6 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md hover:ring-rose-400 transition-all" data-fade="" style={{transitionDelay: `.20s`}}>
<i className="w-7 h-7 text-purple-600 mb-4" data-lucide="repeat"></i>
<h3 className="font-semibold text-lg mb-1">Preventive Maintenance</h3>
<p className="text-slate-700 text-sm">Quarterly tune-ups that save money long term.</p>
</div>
<div className="p-6 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md hover:ring-rose-400 transition-all" data-fade="" style={{transitionDelay: `.25s`}}>
<i className="w-7 h-7 text-indigo-600 mb-4" data-lucide="cpu"></i>
<h3 className="font-semibold text-lg mb-1">Smart Thermostats</h3>
<p className="text-slate-700 text-sm">Nest, Ecobee & more—set once, forget forever.</p>
</div>
<div className="p-6 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md hover:ring-rose-400 transition-all" data-fade="" style={{transitionDelay: `.30s`}}>
<i className="w-7 h-7 text-red-500 mb-4" data-lucide="alarm-clock"></i>
<h3 className="font-semibold text-lg mb-1">24/7 Emergency</h3>
<p className="text-slate-700 text-sm">Technicians on-call so comfort never sleeps.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/60 backdrop-blur">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr,360px] gap-14 items-center">
<div data-fade="">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Efficiency You Can Feel & See</h2>
<p className="text-slate-700 mb-6 max-w-lg">Jumping from a 10-SEER to a 16-SEER unit can trim cooling costs by <span className="font-semibold text-rose-600">up to 40%</span>.</p>
<div className="rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 p-6 shadow-md">
<canvas height="200" id="savingsChart"></canvas>
</div>
</div>
<img alt="Thermostat" className="w-full h-72 object-cover rounded-xl shadow-md" data-fade="" src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1080" />
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
<div data-fade="">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Connect With Us</h2>
<p className="text-slate-700 mb-8">Quotes, questions or commercial contracts—we're here.</p>
<div className="space-y-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-rose-500" data-lucide="phone"></i>
<span className="text-slate-800">+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-rose-500" data-lucide="mail"></i>
<span className="text-slate-800">support@hurriconhvac.com</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-rose-500" data-lucide="map-pin"></i>
<span className="text-slate-800">328 Breeze Pkwy, Orlando, FL</span>
</div>
</div>
</div>
<iframe allowfullscreen="" className="w-full h-72 md:h-full rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md" data-fade="" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8947.512563127008!2d-81.37983654751584!3d28.539229610615955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ab40cbcb443%3A0xa0c0c0c0c0c0c0c0!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1686184031202!5m2!1sen!2sus" style={{transitionDelay: `.1s`}}></iframe>
</div>
</section>

<section className="py-24 bg-white/60 backdrop-blur" id="schedule">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center mb-3" data-fade="">Schedule A Visit</h2>
<p className="text-slate-700 text-center mb-12" data-fade="">Your comfort starts with a click.</p>
<form className="space-y-8 p-8 rounded-xl bg-white/30 backdrop-blur ring-1 ring-white/40 shadow-md" data-fade="">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Full Name</label>
<input className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" placeholder="Jane Doe" required type="text" />
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Phone</label>
<input className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" placeholder="(555) 987-6543" required type="tel" />
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Email</label>
<input className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" placeholder="you@example.com" type="email" />
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Service Type</label>
<select className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" required>
<option disabled selected value="">Choose…</option>
<option>Cooling Installation</option>
<option>Heating Repair</option>
<option>Maintenance</option>
<option>Indoor Air Quality</option>
<option>Smart Thermostat</option>
<option>Emergency Repair</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Preferred Date</label>
<input className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" required type="date" />
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Preferred Time</label>
<input className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" required type="time" />
</div>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-800">Additional Details</label>
<textarea className="w-full rounded-md bg-white/70 backdrop-blur px-3 py-2 ring-1 ring-white/40 focus:ring-rose-400 focus:outline-none" placeholder="Tell us more…" rows="4"></textarea>
</div>
<button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-white mx-auto shadow-lg hover:brightness-95" type="submit">
<i className="w-4 h-4" data-lucide="send"></i> Submit
      </button>
</form>
</div>
</section>

<footer className="py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-rose-500" strokeWidth="1.5"><use href="#wind"></use></svg>
<span className="font-medium">Hurricon HVAC © <span id="year"></span></span>
</div>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:text-rose-500" href="#home">Home</a>
<a className="hover:text-rose-500" href="#services">Services</a>
<a className="hover:text-rose-500" href="#contact">Contact</a>
<a className="hover:text-rose-500" href="#schedule">Schedule</a>
</div>
</div>
</footer>

<svg style={{display: `none`}} xmlns="http://www.w3.org/2000/svg">
<symbol fill="none" id="wind" stroke="currentColor" viewBox="0 0 24 24">
<path d="M18 8a3 3 0 0 0-3-3"></path><path d="M10 16a3 3 0 0 0 2 3"></path>
<path d="M3 12h18" strokeLinecap="round"></path><path d="M4 8h12" strokeLinecap="round"></path><path d="M12 16h8" strokeLinecap="round"></path>
</symbol>
</svg>


    </>
  );
}
