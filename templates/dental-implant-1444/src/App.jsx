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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100 px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="block" href="#">
<img alt="ARCHPOINT Logo" className="h-10 md:h-12 w-auto object-contain" src="https://www.archpointid.com/wp-content/uploads/2024/09/logo-arch.png"/>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-navy transition-colors" href="#">About</a>
<a className="text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-navy transition-colors" href="#">Locations</a>
<a className="text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:text-navy transition-colors" href="#">Smile Gallery</a>
<button className="bg-navy text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
                    Free Consultation
                </button>
</div>
<button className="lg:hidden text-navy">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative py-20 lg:py-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="mb-8 flex justify-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
<iconify-icon className="text-gold" icon="solar:verified-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Trusted by 1,000+ DFW Patients
                </span>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-950 mb-6">
                Still Hiding Your Smile?
            </h1>
<p className="text-xl md:text-2xl font-semibold text-navy mb-8">
                DFW's Integrated Implant Team Has Transformed Smiles — In a Single Day.
            </p>
<div className="max-w-2xl mx-auto mb-10 text-zinc-600 space-y-2">
<p className="text-lg font-medium">ARCHPOINT Implant Dentistry — Dallas–Fort Worth, TX</p>
<p className="text-base">Same Doctors. One Location. New Smile in One Day. Guaranteed for Life.</p>
</div>
<a className="inline-block bg-navy text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-xl mb-12" href="#quiz">
                Take the Free 60-Second Eligibility Quiz →
            </a>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
<div className="flex items-center gap-2 text-zinc-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">No Hidden Fees — Ever</span>
</div>
<div className="flex items-center gap-2 text-zinc-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">New Smile in One Day</span>
</div>
<div className="flex items-center gap-2 text-zinc-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Lifetime Warranty Included</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-16 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="space-y-1">
<div className="text-4xl font-bold text-navy tracking-tight">1,000+</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Five-Star Smiles</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-bold text-navy tracking-tight">25+</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Years Serving DFW</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-bold text-navy tracking-tight">1 Day</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">New Smile Timeline</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-bold text-navy tracking-tight">100%</div>
<div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Transparent Pricing</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
                    This Is Not Your Average Implant Center.
                </h2>
<p className="text-lg text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                    At ARCHPOINT, oral surgeons, prosthodontists, and implant specialists work together under one roof. No referrals. No traveling between offices. No waiting months for your final smile. We use Digital Precision and Platelet Rich Fibrin technology for faster healing and a better fit.
                </p>
</div>
<div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm bg-white">
<table className="hidden md:table w-full text-left">
<thead>
<tr className="bg-navy text-white">
<th className="p-6 text-sm font-bold uppercase tracking-widest">Feature</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest bg-navy/90 border-x border-white/10">ARCHPOINT</th>
<th className="p-6 text-sm font-bold uppercase tracking-widest">Other Providers</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="p-5 text-sm font-medium text-zinc-500">Team Consistency</td>
<td className="p-5 text-sm font-semibold text-navy bg-blue-50/30 border-x border-zinc-100">Same experienced team every visit</td>
<td className="p-5 text-sm text-zinc-400">Rotating doctors</td>
</tr>
<tr>
<td className="p-5 text-sm font-medium text-zinc-500">Location Convenience</td>
<td className="p-5 text-sm font-semibold text-navy bg-blue-50/30 border-x border-zinc-100">One DFW location — no referrals</td>
<td className="p-5 text-sm text-zinc-400">Multiple offices</td>
</tr>
<tr>
<td className="p-5 text-sm font-medium text-zinc-500">Final Results</td>
<td className="p-5 text-sm font-semibold text-navy bg-blue-50/30 border-x border-zinc-100">New smile in one day</td>
<td className="p-5 text-sm text-zinc-400">Up to 2 years</td>
</tr>
</tbody>
</table>
<div className="md:hidden p-6 space-y-4">
<div className="inline-block px-3 py-1 bg-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-full">The ARCHPOINT Standard</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm font-medium"><iconify-icon className="text-emerald-500 shrink-0" icon="solar:check-circle-bold" strokeWidth="1.5" width="18"></iconify-icon> Same experienced team every visit</li>
<li className="flex gap-3 text-sm font-medium"><iconify-icon className="text-emerald-500 shrink-0" icon="solar:check-circle-bold" strokeWidth="1.5" width="18"></iconify-icon> One DFW location — no referrals</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Real Patients. Real Results.</h2>
<p className="text-lg text-navy font-medium">See what ARCHPOINT patients say after their procedure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="aspect-video bg-zinc-100 rounded-2xl shadow-lg overflow-hidden border border-zinc-200">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/nwfhKV6DLJc" title="Patient Story 1"></iframe>
</div>
<div className="aspect-video bg-zinc-100 rounded-2xl shadow-lg overflow-hidden border border-zinc-200">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/_fkc_7rgdvI" title="Patient Story 2"></iframe>
</div>
</div>
</div>
</section>

<section className="bg-navy py-20 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold">
<iconify-icon icon="solar:medal-ribbons-star-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<span className="text-sm font-bold uppercase tracking-widest text-white">Lifetime Warranty</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<span className="text-sm font-bold uppercase tracking-widest text-white">5-Star Rated</span>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<span className="text-sm font-bold uppercase tracking-widest text-white">25+ Years Experience</span>
</div>
</div>
</section>

<section className="bg-white py-24 px-6" id="quiz">
<div className="max-w-4xl mx-auto text-center">
<div className="flex justify-center mb-8">
<img alt="ARCHPOINT Logo" className="h-16 w-auto object-contain" src="https://www.archpointid.com/wp-content/uploads/2024/09/logo-arch.png"/>
</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Find Out If You're a Candidate</h2>
<p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                Take our 60-second quiz to see if you qualify for life-changing dental implants at ARCHPOINT.
            </p>
<button className="bg-navy text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl mb-8">
                Take the Free 60-Second Quiz →
            </button>
<p className="text-zinc-500 font-medium">Or call us: <a className="text-navy font-bold hover:underline" href="tel:8442816446">(844) 281-6446</a></p>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="space-y-6">
<img alt="ARCHPOINT Logo" className="h-12 w-auto object-contain" src="https://www.archpointid.com/wp-content/uploads/2024/09/logo-arch.png"/>
<p className="text-sm text-zinc-500 max-w-xs">
                        Premier implant dentistry serving the Dallas–Fort Worth metroplex with integrated surgical care and life-changing results.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div className="space-y-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-navy">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-navy" href="#">All-on-4</a></li>
<li><a className="text-sm text-zinc-500 hover:text-navy" href="#">Full Arch</a></li>
<li><a className="text-sm text-zinc-500 hover:text-navy" href="#">Consultation</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold uppercase tracking-widest text-navy">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-zinc-500 hover:text-navy" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-navy" href="#">Locations</a></li>
<li><a className="text-sm text-zinc-500 hover:text-navy" href="#">Reviews</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    © 2024 ARCHPOINT Implant Dentistry. All Rights Reserved.
                </p>
<div className="flex gap-6">
<iconify-icon className="text-zinc-400 hover:text-navy cursor-pointer" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-navy cursor-pointer" icon="solar:videocamera-record-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
