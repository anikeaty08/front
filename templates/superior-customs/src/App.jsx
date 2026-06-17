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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="uppercase flex items-center gap-2 text-xl font-medium text-white tracking-tighter" href="#">
<iconify-icon className="text-2xl" icon="solar:shield-star-linear"></iconify-icon>
                Superior Customs
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#testimonials">Testimonials</a>
<a className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors duration-200" href="#contact">Contact Us</a>
</div>

<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.03] rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex text-xs font-medium text-zinc-400 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Now accepting new clients for 2026</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8">
                Elevate your <br className="hidden md:block"/>
<span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">vehicle aesthetics.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Premier automotive styling in Wichita. Specializing in high-performance window tint, paint protection film, precision vinyl wraps, and mobile detailing.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2" href="#pricing">
                    View Pricing
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 bg-white/5 hover:bg-white/10 font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2" href="#contact">
                    Book Appointment
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Precision in every detail.</h2>
<div className="space-y-6 text-zinc-400 leading-relaxed">
<p className="">
                        At Superior Customs, we treat every vehicle as if it were our own. Founded with a passion for automotive perfection, we utilize state-of-the-art technology and premium materials to protect and enhance your investment.
                    </p>
<p>
                        Whether you are looking for heat rejection through ceramic tints, rock chip protection with PPF, or a complete color change, our certified installers ensure a flawless finish that stands the test of time.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="glass p-4 rounded-xl">
<iconify-icon className="text-3xl text-white mb-2" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">Certified Pros</h4>
<p className="text-sm text-zinc-500">Expert installers</p>
</div>
<div className="glass p-4 rounded-xl">
<iconify-icon className="text-3xl text-white mb-2" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-white font-medium mb-1">Warranty</h4>
<p className="text-sm text-zinc-500">Lifetime guarantee</p>
</div>
</div>
</div>

<div className="relative h-96 w-full rounded-2xl overflow-hidden glass flex items-center justify-center bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-9xl text-white/5" icon="solar:wheel-angle-linear"></iconify-icon>
</div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 relative bg-zinc-900/30" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Transparent Pricing</h2>
<p className="text-zinc-400">Choose the package that fits your needs.</p>
</div>
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors duration-300">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Window Tint</h3>
<p className="text-sm text-zinc-500 mb-6 min-h-[40px]">Heat rejection and privacy with lifetime warranty films.</p>
<div className="space-y-4">
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Carbon</span>
<span className="text-sm text-zinc-400">Starts at $200</span>
</div>
<p className="text-xs text-zinc-500">Standard heat rejection, color stable.</p>
</div>
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-full -mr-2 -mt-2"></div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Ceramic IR</span>
<span className="text-sm text-zinc-400">Starts at $400</span>
</div>
<p className="text-xs text-zinc-500">98% heat rejection, ultimate clarity.</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors duration-300">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon className="text-2xl" icon="solar:shield-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Paint Protection</h3>
<p className="text-sm text-zinc-500 mb-6 min-h-[40px]">Self-healing film to stop rock chips and scratches.</p>
<div className="space-y-4">
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Partial Front</span>
<span className="text-sm text-zinc-400">$900+</span>
</div>
<p className="text-xs text-zinc-500">Bumper, 1/3 hood, mirrors.</p>
</div>
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Full Front</span>
<span className="text-sm text-zinc-400">$1,800+</span>
</div>
<p className="text-xs text-zinc-500">Full hood, bumper, fenders, mirrors.</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors duration-300">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Vinyl Wraps</h3>
<p className="text-sm text-zinc-500 mb-6 min-h-[40px]">Complete color change or custom accents.</p>
<div className="space-y-4">
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Chrome Delete</span>
<span className="text-sm text-zinc-400">$300+</span>
</div>
<p className="text-xs text-zinc-500">Black out window trim &amp; emblems.</p>
</div>
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Full Wrap</span>
<span className="text-sm text-zinc-400">$3,000+</span>
</div>
<p className="text-xs text-zinc-500">Premium 3M or Avery Dennison films.</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors duration-300">
<div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon className="text-2xl" icon="solar:water-drop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Mobile Detailing</h3>
<p className="text-sm text-zinc-500 mb-6 min-h-[40px]">Professional cleaning at your home or office.</p>
<div className="space-y-4">
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Interior Detail</span>
<span className="text-sm text-zinc-400">$150+</span>
</div>
<p className="text-xs text-zinc-500">Deep clean, steam, leather condition.</p>
</div>
<div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-white">Full Detail</span>
<span className="text-sm text-zinc-400">$300+</span>
</div>
<p className="text-xs text-zinc-500">Interior plus exterior wash &amp; wax.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight text-center mb-12">Client Reviews</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900/30 border border-white/5 p-8 rounded-2xl">
<div className="flex text-white mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        "The ceramic tint on my Tesla made a huge difference in the Kansas heat. The installation is flawless, not a single bubble. Highly recommend Superior Customs."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
<span className="text-sm font-medium text-zinc-300">James D.</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 p-8 rounded-2xl">
<div className="flex text-white mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        "Got a full front PPF for my new truck. You can't even tell it's there, but it saved my paint from a rock on the highway the very next day. Worth every penny."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">AL</div>
<span className="text-sm font-medium text-zinc-300">Amanda L.</span>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 p-8 rounded-2xl">
<div className="flex text-white mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        "Mobile detailing service is a lifesaver. They came to my office and made my 5-year-old SUV look showroom new. The convenience is unmatched."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">MR</div>
<span className="text-sm font-medium text-zinc-300">Marcus R.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Ready to transform your vehicle?</h2>
<p className="text-zinc-400 mb-10">Reach out today for a quote or to schedule your appointment.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-zinc-900 border border-white/5 text-white">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Phone</h4>
<a className="text-zinc-400 hover:text-white transition-colors" href="tel:5555558724">(555)-555-8724</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-zinc-900 border border-white/5 text-white">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Email</h4>
<a className="text-zinc-400 hover:text-white transition-colors" href="mailto:mrschlaht@wichita.edu">mrschlaht@wichita.edu</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-zinc-900 border border-white/5 text-white">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Hours</h4>
<p className="text-zinc-400">Mon - Fri: 8am - 6pmSat: By Appointment</p>
</div>
</div>
</div>
</div>

<div className="glass p-8 rounded-3xl border border-white/10">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">First Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all placeholder-zinc-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Last Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all placeholder-zinc-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Service Interested In</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all appearance-none cursor-pointer">
<option>Window Tint</option>
<option>Paint Protection Film</option>
<option>Vinyl Wrap</option>
<option>Car Detailing</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 ml-1">Message</label>
<textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all placeholder-zinc-700" placeholder="Tell us about your vehicle..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors mt-2" type="button">Send Message</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<a className="text-lg font-medium tracking-tighter text-white uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-xl" icon="solar:shield-star-linear"></iconify-icon>
                Superior Customs
            </a>
<p className="text-xs text-zinc-600 max-w-lg mb-8">
                This is not a real commercial website, but a part of MIS 395 class requirements at Wichita State University.
            </p>
<div className="flex gap-6 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:video-frame-linear"></iconify-icon></a>
</div>
<div className="mt-8 text-[10px] text-zinc-800 uppercase tracking-widest">
                © 2024 Superior Customs. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
