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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-white" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
                SUPERIOR CUSTOMS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#services">Services &amp; Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#testimonials">Testimonials</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full text-xs font-medium transition-all border border-white/5" href="#contact">
                Book Now
                <iconify-icon className="" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neutral-800/20 to-transparent blur-[120px] -z-10 opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex text-xs text-neutral-300 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Now booking for Spring &amp; Summer 2026</div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Redefine <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Your Ride.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed">
                    Premium window tinting, paint protection, and vinyl wraps. We bring showroom quality directly to your driveway with our mobile detailing service.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors" href="#services">
                        View Pricing
                    </a>
<a className="px-6 py-3 rounded-lg text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-2xl blur-2xl -z-10"></div>

<img alt="Luxury Car Detail" className="rounded-xl border border-white/10 shadow-2xl w-full object-cover h-[400px] lg:h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center gap-12 opacity-40 grayscale">

<span className="text-xl font-semibold tracking-tighter">3M</span>
<span className="text-xl font-semibold tracking-tighter">XPEL</span>
<span className="text-xl font-semibold tracking-tighter">AVERY DENNISON</span>
<span className="text-xl font-semibold tracking-tighter">SUNTEK</span>
<span className="text-xl font-semibold tracking-tighter">MEGUIAR'S</span>
</div>
</div>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<img alt="Applying Tint" className="relative rounded-xl w-full object-cover h-[400px] border border-white/10" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl font-medium text-white tracking-tight">Perfection is our standard, <br/>not an upgrade.</h2>
<p className="leading-relaxed">
                        At Superior Customs, we treat every vehicle as if it were our own. Specializing in aesthetic enhancement and protection, we utilize only the highest grade materials from industry leaders.
                    </p>
<p className="leading-relaxed">
                        Whether you need heat rejection from our ceramic tints, rock chip protection with PPF, or a complete color change, our certified technicians deliver flawless results. Plus, our fully equipped mobile detailing unit brings the service to you.
                    </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Certified Installers
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Mobile Service Available
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Lifetime Warranty on Films
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Our Services</h2>
<p className="max-w-md">Transparent pricing for premium automotive care. Prices may vary based on vehicle size and condition.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:sun-fog-linear" width="60"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:glasses-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Window Tint</h3>
<p className="text-sm text-neutral-500 mb-6 h-12">Heat rejection and privacy using top-tier Carbon &amp; Ceramic films.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-xs text-neutral-500">Starting at</span>
<span className="text-2xl font-medium text-white">$149</span>
</div>
<ul className="space-y-2 mb-6 text-xs text-neutral-400">
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> 2 Front Windows</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Full Sedan</li>
<li className="flex gap-2"><iconify-icon className="" icon="solar:check-read-linear"></iconify-icon> Ceramic Upgrade (+$$)</li>
</ul>
<a className="block w-full py-2 text-center rounded bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/5 transition-colors" href="#contact">Inquire</a>
</div>

<div className="group p-6 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:shield-check-linear" width="60"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:shield-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Paint Protection</h3>
<p className="text-sm text-neutral-500 mb-6 h-12">Self-healing invisible film to protect against rock chips and scratches.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-xs text-neutral-500">Starting at</span>
<span className="text-2xl font-medium text-white">$899</span>
</div>
<ul className="space-y-2 mb-6 text-xs text-neutral-400">
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Partial Front End</li>
<li className="flex gap-2"><iconify-icon className="" icon="solar:check-read-linear"></iconify-icon> Full Front End</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> High Impact Areas</li>
</ul>
<a className="block w-full py-2 text-center rounded bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/5 transition-colors" href="#contact">Inquire</a>
</div>

<div className="group p-6 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:palette-linear" width="60"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Vinyl Wraps</h3>
<p className="text-sm text-neutral-500 mb-6 h-12">Complete color changes, chrome deletes, and custom graphics.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-xs text-neutral-500">Starting at</span>
<span className="text-2xl font-medium text-white">$499</span>
</div>
<ul className="space-y-2 mb-6 text-xs text-neutral-400">
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Chrome Delete</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Roof Wrap</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Full Vehicle Color Change</li>
</ul>
<a className="block w-full py-2 text-center rounded bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/5 transition-colors" href="#contact">Inquire</a>
</div>

<div className="group p-6 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:waterdrops-linear" width="60"></iconify-icon>
</div>
<div className="h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:car-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mobile Detailing</h3>
<p className="text-sm text-neutral-500 mb-6 h-12">Interior and exterior detailing at the comfort of your home or office.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-xs text-neutral-500">Starting at</span>
<span className="text-2xl font-medium text-white">$199</span>
</div>
<ul className="space-y-2 mb-6 text-xs text-neutral-400">
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Exterior Wash &amp; Wax</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Interior Deep Clean</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Paint Correction</li>
</ul>
<a className="block w-full py-2 text-center rounded bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/5 transition-colors" href="#contact">Inquire</a>
</div>
</div>
</div>
</section>

<section className="py-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight text-center mb-12">Client Reviews</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10">
<img alt="Customer Car" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-2">
<div className="flex gap-1 text-white mb-2">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic text-neutral-300 mb-4">"The mobile detailing saved me so much time. My Model S looks better than the day I bought it. Highly recommend the ceramic coating."</p>
<p className="text-xs font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">Tesla Model S</p>
</div>
</div>

<div className="space-y-4">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10">
<img alt="Customer Car" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<div className="flex gap-1 text-white mb-2">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic text-neutral-300 mb-4">"Superior Customs wrapped my Mercedes in Nordic gray. The edges are seamless; you literally can't tell it's a wrap. Incredible precision."</p>
<p className="text-xs font-medium text-white">David Anderson</p>
<p className="text-xs text-neutral-500">Mercedes AMG GT</p>
</div>
</div>

<div className="space-y-4">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10">
<img alt="Customer Car" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<div className="flex gap-1 text-white mb-2">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic text-neutral-300 mb-4">"Got the full front PPF package. A week later a rock hit my hood on the highway—film took the hit, paint is perfect."</p>
<p className="text-xs font-medium text-white">Marcus Johnson</p>
<p className="text-xs text-neutral-500">BMW M3</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to upgrade?</h2>
<p className="text-neutral-400 mb-12">Get in touch to schedule your appointment or request a quote.</p>
<div className="grid md:grid-cols-2 gap-4 mb-12">
<a className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 hover:bg-neutral-900 transition-all group" href="mailto:mrschlaht@wichita.edu">
<div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Email Us</span>
<span className="text-sm text-neutral-500 mt-1">mrschlaht@wichita.edu</span>
</a>
<a className="flex flex-col items-center justify-center p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 hover:bg-neutral-900 transition-all group" href="tel:5555558724">
<div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Call Us</span>
<span className="text-sm text-neutral-500 mt-1">(555)-555-8724</span>
</a>
</div>

<form className="text-left space-y-4 max-w-md mx-auto">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300">First Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 text-white placeholder-neutral-700" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300">Last Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 text-white placeholder-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300">Service Interest</label>
<div className="relative">
<select className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 text-white appearance-none">
<option>Window Tinting</option>
<option>Paint Protection Film</option>
<option>Vinyl Wrap</option>
<option>Mobile Detailing</option>
</select>
<div className="absolute right-3 top-2.5 text-neutral-500 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-white hover:bg-neutral-200 text-black font-medium py-2 rounded-lg text-sm transition-colors mt-2" type="button">Send Message</button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tighter">
<iconify-icon icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
                SUPERIOR CUSTOMS
            </div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
<div className="text-center pt-8 border-t border-white/5 w-full">
<p className="text-[10px] md:text-xs font-medium text-neutral-600">
                    This is not a real commercial website, but a part of MIS 395 class requirements at Wichita State University.
                </p>
<p className="text-[10px] text-neutral-700 mt-2">© 2026 Superior Customs. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
