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



        // Update Slider UI
        const slider = document.getElementById('volume-slider');
        const output = document.getElementById('volume-display');
        
        slider.oninput = function() {
            let val = parseInt(this.value);
            let displayVal = val >= 10000 ? "10,000+" : val.toLocaleString();
            output.innerHTML = `Current: > ${displayVal} MT`;
        }

        // Handle Form Submission
        document.getElementById('vipForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            const btn = document.getElementById('submit-btn');
            const btnIcon = btn.querySelector('.btn-icon');
            const originalText = btn.querySelector('span').innerText;
            
            // Show Loading State
            btn.disabled = true;
            btn.querySelector('span').innerText = 'Processing Request...';
            if(btnIcon) btnIcon.style.display = 'none';
            btn.innerHTML += '<div class="loader ml-2"></div>';
            
            // Collect Form Data (Simulating backend prep)
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Simulate Server Delay (1.5 seconds)
            setTimeout(() => {
                // Log data to console to show "where it goes"
                console.log("-----------------------------------");
                console.log("🚀 VIP LEAD CAPTURED:");
                console.log("Name:", data.name);
                console.log("Email:", data.email);
                console.log("Industry:", data.industry);
                console.log("Volume:", data.volume + " MT");
                console.log("Challenge:", data.message);
                console.log("-----------------------------------");
                console.log("NOTE: Connect this form to an endpoint like Formspree, Zapier, or your own API.");

                // Show Success Message
                document.getElementById('form-container').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('success-message').classList.remove('hidden');
                    document.getElementById('success-message').classList.add('flex');
                }, 300);
                
            }, 1500);
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-slate-900 text-white flex items-center justify-center rounded-lg">
<span className="iconify" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900 group-hover:text-amber-600 transition-colors">INGRAIN</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#experience">VIP Experience</a>
<a className="hover:text-slate-900 transition-colors" href="#sustainability">Sustainability</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#apply">
<span>Partner Access</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-2/3 h-full bg-slate-800/50 skew-x-12 translate-x-1/4"></div>
<img alt="Industrial Lab" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-medium tracking-wide mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    EXECUTIVE INVITE ONLY
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                    Tailored Innovation.<br/>
<span className="text-slate-400">Exclusive Access.</span>
</h1>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-lg">
                    Request a bespoke VIP Technical Experience designed for procurement and R&amp;D leaders. Unlock the future of starch formulation.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-all shadow-lg shadow-amber-900/20" href="#apply">
                        Apply for VIP Access
                    </a>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-white border border-slate-700 hover:bg-slate-800 transition-all">
<span className="iconify" data-icon="lucide:play-circle" data-width="20"></span>
                        View Facility
                    </button>
</div>
</div>

<div className="hidden lg:block relative">
<div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-slate-600 rounded-2xl blur opacity-30"></div>
<div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-xl">
<div className="flex items-start justify-between mb-8">
<div>
<p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Supply Resilience</p>
<p className="text-2xl text-white font-medium tracking-tight">Uninterrupted Output</p>
</div>
<span className="iconify text-amber-500" data-icon="lucide:shield-check" data-width="32"></span>
</div>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-700">
<div>
<p className="text-3xl text-white font-semibold tracking-tight">100+</p>
<p className="text-slate-400 text-sm mt-1">Years of Excellence</p>
</div>
<div>
<p className="text-3xl text-white font-semibold tracking-tight">ISO</p>
<p className="text-slate-400 text-sm mt-1">Global Certification</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Trusted by Industry Leaders in Food &amp; Industrial Sectors</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-slate-800">Nestlé</span>
<span className="text-xl font-bold tracking-tight text-slate-800">Unilever</span>
<span className="text-xl font-bold tracking-tight text-slate-800">Mondelēz</span>
<span className="text-xl font-bold tracking-tight text-slate-800">Tiger Brands</span>
<span className="text-xl font-bold tracking-tight text-slate-800">Coca-Cola</span>
</div>
</div>
</div>

<section className="py-24 bg-white" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The Executive Experience</h2>
<p className="text-slate-500 text-lg font-light">Beyond a supplier relationship. We offer a strategic partnership deeply integrated into your supply chain and innovation pipeline.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span className="iconify text-slate-700 group-hover:text-amber-600" data-icon="lucide:factory" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Private Mill Tours</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        A deep dive into Africa’s largest starch production facility. Witness our rigorous quality control and scale capabilities firsthand.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span className="iconify text-slate-700 group-hover:text-amber-600" data-icon="lucide:flask-conical" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">R&amp;D Innovation Sessions</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Collaborative formulation workshops. Sit down with our lead food scientists to solve texture, stability, and cost-efficiency challenges.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span className="iconify text-slate-700 group-hover:text-amber-600" data-icon="lucide:armchair" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Executive Hospitality</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Direct access to Ingrain’s technical and leadership teams in a private setting. Discuss long-term contracts and strategic alignment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
<div className="flex items-center gap-3 text-slate-300">
<span className="iconify text-amber-500" data-icon="lucide:sprout" data-width="24"></span>
<span className="text-sm font-medium">Non-GMO Certified</span>
</div>
<div className="h-4 w-px bg-slate-700 hidden md:block"></div>
<div className="flex items-center gap-3 text-slate-300">
<span className="iconify text-amber-500" data-icon="lucide:award" data-width="24"></span>
<span className="text-sm font-medium">ISO 9001:2015</span>
</div>
<div className="h-4 w-px bg-slate-700 hidden md:block"></div>
<div className="flex items-center gap-3 text-slate-300">
<span className="iconify text-amber-500" data-icon="lucide:globe-2" data-width="24"></span>
<span className="text-sm font-medium">FSSC 22000 Approved</span>
</div>
<div className="h-4 w-px bg-slate-700 hidden md:block"></div>
<div className="flex items-center gap-3 text-slate-300">
<span className="iconify text-amber-500" data-icon="lucide:leaf" data-width="24"></span>
<span className="text-sm font-medium">Sustainable Sourcing</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="apply">
<div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-5 gap-12 items-start">

<div className="lg:col-span-2 pt-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Secure Your Access</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                    Our VIP program is reserved for partners with significant annual volume requirements seeking technical competitive advantages.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify text-amber-700" data-icon="lucide:check" data-width="14"></span>
</div>
<p className="text-sm text-slate-600">Priority scheduling for formulation labs.</p>
</div>
<div className="flex items-start gap-4">
<div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify text-amber-700" data-icon="lucide:check" data-width="14"></span>
</div>
<p className="text-sm text-slate-600">Dedicated account manager &amp; technical lead.</p>
</div>
<div className="flex items-start gap-4">
<div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
<span className="iconify text-amber-700" data-icon="lucide:check" data-width="14"></span>
</div>
<p className="text-sm text-slate-600">Early access to new starch derivatives.</p>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10 relative overflow-hidden">

<div id="form-container">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
<h3 className="text-xl font-medium text-slate-900">VIP Application</h3>
<div className="flex items-center gap-2 text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                                Accepting New Partners
                            </div>
</div>
<form className="space-y-6" id="vipForm">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder:text-slate-400" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Business Email</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder:text-slate-400" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Industry Sector</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="industry" type="radio" value="Food"/>
<div className="rounded-lg border border-slate-200 bg-white p-3 text-center transition-all peer-checked:border-amber-500 peer-checked:bg-amber-50 peer-checked:text-amber-900 hover:bg-slate-50">
<span className="text-sm font-medium">Food</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="industry" type="radio" value="Pharma"/>
<div className="rounded-lg border border-slate-200 bg-white p-3 text-center transition-all peer-checked:border-amber-500 peer-checked:bg-amber-50 peer-checked:text-amber-900 hover:bg-slate-50">
<span className="text-sm font-medium">Pharma</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="industry" type="radio" value="Industrial"/>
<div className="rounded-lg border border-slate-200 bg-white p-3 text-center transition-all peer-checked:border-amber-500 peer-checked:bg-amber-50 peer-checked:text-amber-900 hover:bg-slate-50">
<span className="text-sm font-medium">Industrial</span>
</div>
</label>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Annual Volume (MT)</label>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded" id="volume-display">Current: &gt; 500 MT</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="volume-slider" max="10000" min="100" name="volume" step="100" type="range" value="500"/>
<div className="flex justify-between text-xs text-slate-400 font-medium">
<span>100 MT</span>
<span>10,000+ MT</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Current Formulation Challenge</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 block w-full p-3 outline-none transition-all placeholder:text-slate-400 resize-none" name="message" placeholder="Describe your viscosity, stability, or sourcing challenge..." required="" rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2 transition-all flex items-center justify-center gap-2" id="submit-btn" type="submit">
<span>Request VIP Access</span>
<span className="iconify btn-icon" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<p className="text-center text-xs text-slate-400 mt-4">By applying, you agree to our NDA &amp; Privacy Policy.</p>
</div>
</form>
</div>

<div className="hidden absolute inset-0 bg-white flex-col items-center justify-center text-center p-10 z-20" id="success-message">
<div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out_1]">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="32"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Request Received</h3>
<p className="text-slate-500 mb-8 max-w-sm">We have received your VIP application. Our technical director will review your requirements and contact you within 24 hours.</p>
<button className="text-sm font-medium text-slate-900 border border-slate-200 px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-all" onclick="location.reload()">
                            Back to Site
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="h-6 w-6 bg-slate-900 text-white flex items-center justify-center rounded-md">
<span className="iconify" data-icon="lucide:hexagon" data-width="14"></span>
</div>
<span className="text-base font-semibold tracking-tighter text-slate-900">INGRAIN</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Africa’s leading producer of starch, glucose, and unmodified starches for the industrial, food, and pharmaceutical sectors.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-amber-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">History</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-4">Products</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-amber-600 transition-colors" href="#">Native Starches</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Modified Starches</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Sweeteners</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Co-Products</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-4">Contact Sales</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            sales@ingrainsa.com
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                            +27 11 000 0000
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            Johannesburg, South Africa
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Ingrain SA. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
