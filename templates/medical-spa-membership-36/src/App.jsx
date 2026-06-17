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
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#8e24aa',
'primary-light': '#c158dc',
'primary-dark': '#5c007a',
dark: '#222222',
},
boxShadow: {
'soft': '0 20px 40px -10px rgba(142, 36, 170, 0.1)',
'glow': '0 0 20px rgba(142, 36, 170, 0.3)',
}
}
}
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
      

<nav className="bg-[#222222] text-white w-full sticky top-0 z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-medium tracking-tight flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-[#8e24aa] flex items-center justify-center">
<span className="text-white text-xs font-semibold">M</span>
</div>
<span>MEDSPA<span className="text-gray-400">SCULPT</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[#8e24aa] transition-colors duration-200" href="#">Services</a>
<a className="hover:text-[#8e24aa] transition-colors duration-200" href="#">About</a>
<a className="text-[#8e24aa]" href="#">Memberships</a>
<a className="hover:text-[#8e24aa] transition-colors duration-200" href="#locations">Locations</a>
</div>

<button className="md:hidden text-white hover:text-[#8e24aa]">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative w-full pt-20 pb-32 overflow-hidden bg-white">

<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-white to-white pointer-events-none"></div>
<div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-purple-300/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#8e24aa] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8e24aa]"></span>
</span>
                Exclusive Member Benefits
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Transform Your Body with <br/> <span className="text-[#8e24aa]">Exclusive Memberships</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Consistent care yields the best results. Join our membership program to unlock preferred pricing on body sculpting, facials, and medical treatments.
            </p>
<a className="group inline-flex items-center justify-center gap-2 bg-[#8e24aa] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#7b1fa2] transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1" href="#pricing">
                Explore Our Membership Plans Below
                <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Choose Your Transformation Plan</h2>
<p className="text-slate-500 max-w-xl mx-auto">Flexible options designed to maintain your results and treat yourself to monthly wellness.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="flex flex-col bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-soft hover:border-purple-200 transition-all duration-300 group h-full">
<div className="p-8 pb-0">
<h3 className="text-lg font-medium text-slate-900">Maintenance</h3>
<p className="text-sm text-slate-500 mt-2">Perfect for facial upkeep.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-slate-900 tracking-tight">$99</span>
<span className="text-slate-400">/month</span>
</div>
</div>
<div className="p-8 flex-grow">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>1 Signature Facial per month</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>10% Off Retail Products</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>Priority Booking Access</span>
</li>
</ul>
</div>
<div className="p-8 pt-0 mt-auto">
<button className="w-full py-3 px-4 rounded-xl border border-[#8e24aa] text-[#8e24aa] font-medium text-sm hover:bg-purple-50 transition-colors">
                            Claim Membership
                        </button>
</div>
</div>

<div className="flex flex-col bg-white rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-100 overflow-hidden relative transform md:-translate-y-4 z-10 h-full">
<div className="absolute top-0 inset-x-0 h-1.5 bg-[#8e24aa]"></div>
<div className="absolute top-4 right-4">
<span className="bg-purple-100 text-[#8e24aa] text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md">Most Popular</span>
</div>
<div className="p-8 pb-0 bg-purple-50/50">
<h3 className="text-lg font-medium text-[#8e24aa]">Body Sculpt</h3>
<p className="text-sm text-slate-500 mt-2">Accelerate your results.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-slate-900 tracking-tight">$199</span>
<span className="text-slate-400">/month</span>
</div>
</div>
<div className="p-8 flex-grow">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>1 Body Sculpting Session</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>Free Vitamin B12 Shot</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>15% Off Additional Services</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>Guest Pass (1 per quarter)</span>
</li>
</ul>
</div>
<div className="p-8 pt-0 mt-auto">
<button className="w-full py-3 px-4 rounded-xl bg-[#8e24aa] text-white font-medium text-sm hover:bg-[#7b1fa2] transition-all shadow-lg shadow-purple-500/20">
                            Claim Membership
                        </button>
</div>
</div>

<div className="flex flex-col bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-soft hover:border-purple-200 transition-all duration-300 group h-full">
<div className="p-8 pb-0">
<h3 className="text-lg font-medium text-slate-900">Ultimate VIP</h3>
<p className="text-sm text-slate-500 mt-2">Total body transformation.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-slate-900 tracking-tight">$349</span>
<span className="text-slate-400">/month</span>
</div>
</div>
<div className="p-8 flex-grow">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>2 Body Sculpting Sessions</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>Unlimited LED Therapy</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>20% Off All Retail &amp; Services</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#8e24aa] shrink-0 mt-0.5" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
<span>VIP Event Access</span>
</li>
</ul>
</div>
<div className="p-8 pt-0 mt-auto">
<button className="w-full py-3 px-4 rounded-xl border border-[#8e24aa] text-[#8e24aa] font-medium text-sm hover:bg-purple-50 transition-colors">
                            Claim Membership
                        </button>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">No Hidden Fees</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:calendar-heart" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Flexible Booking</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Certified Experts</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:smile" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Satisfaction Guaranteed</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#8e24aa] relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-purple-900/40">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    Ready to Transform Your Body?
                </h2>
<p className="text-slate-500 mb-8 max-w-lg mx-auto">
                    Join hundreds of happy members who have made self-care a lifestyle, not just a treat.
                </p>
<button className="inline-flex items-center gap-2 bg-[#8e24aa] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#7b1fa2] transition-all shadow-lg shadow-purple-500/30">
                    Start This Membership
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Visit Our Clinics</h2>
<p className="text-slate-500">Conveniently located to serve you better.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-[#8e24aa] text-sm font-medium hover:opacity-80 transition-opacity">
                    View all locations <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
<div className="w-full h-56 bg-slate-100 rounded-xl overflow-hidden mb-6 relative">

<iframe allowfullscreen="" className="map-frame" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126343564!2d-73.98565668459427!3d40.74844057932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629815487693!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md shadow-sm text-xs font-medium text-slate-600">
                            Downtown
                        </div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-slate-900">Downtown Sanctuary</h3>
<p className="text-sm text-slate-500 mb-6 mt-1">123 Wellness Blvd, Suite 100<br/>City Center, ST 12345</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:border-[#8e24aa] hover:text-[#8e24aa] transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
                            Get Directions
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300">
<div className="w-full h-56 bg-slate-100 rounded-xl overflow-hidden mb-6 relative">
<iframe allowfullscreen="" className="map-frame" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24166.75705646187!2d-74.01503759999999!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629815487693!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md shadow-sm text-xs font-medium text-slate-600">
                            West Side
                        </div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-slate-900">West Side Clinic</h3>
<p className="text-sm text-slate-500 mb-6 mt-1">456 Serenity Way, Floor 2<br/>West District, ST 67890</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:border-[#8e24aa] hover:text-[#8e24aa] transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
                            Get Directions
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-[#8e24aa] flex items-center justify-center">
<span className="text-white text-[10px] font-bold">M</span>
</div>
<span className="text-white text-lg font-medium tracking-tight">MEDSPA</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Premium medical aesthetic treatments designed to help you look and feel your absolute best.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Body Sculpting</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Laser Hair Removal</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">HydraFacial</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Injectables</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Membership Terms</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#8e24aa] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Stay Updated</h4>
<p className="text-sm mb-4 text-slate-500">Subscribe for exclusive offers and wellness tips.</p>
<form className="flex gap-2">
<input className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[#8e24aa] focus:ring-1 focus:ring-[#8e24aa] text-white placeholder-slate-600 transition-all" placeholder="Email address" type="email"/>
<button className="bg-[#8e24aa] text-white px-4 rounded-lg hover:bg-[#7b1fa2] transition-colors" type="button">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 MedSpa Sculpt. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
