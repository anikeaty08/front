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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-400" data-lucide="crown"></i>
<span className="text-sm font-semibold tracking-widest text-white uppercase">The Bully Kompound</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-slate-400">
<a className="hover:text-white transition-colors" href="#program">Program</a>
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors" href="#dogs">Dogs</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
</div>
<a className="hidden md:block text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded transition-all" href="#contact">
                Inquire
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="American Bullies" className="w-full h-full object-cover opacity-40 grayscale contrast-125" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs font-medium text-amber-400 tracking-wide uppercase">Elite Breeding Program</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Precision. Purpose. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Pedigree.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Over 10+ years of breeding experience producing elite American Bullies with structure, temperament, and presence. We don’t chase trends — we set the standard.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-medium rounded transition-colors duration-200">
                    View Our Dogs
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:border-white text-white text-sm font-medium rounded transition-colors duration-200 backdrop-blur-sm">
                    Inquire Now
                </button>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-b border-white/5" id="program">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">About The Program</h2>
<div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-slate-400">
<p>
                    The Bully Kompound is an established American Bully kennel dedicated to producing <span className="text-white">high-quality American Bullies</span> through intentional breeding, ethical practices, and proven bloodlines.
                </p>
<p>
                    With over a decade of hands-on breeding experience, our program is built on integrity, transparency, and long-term vision — not volume or shortcuts. Every dog represents years of knowledge, planning, and strategic selection.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="sticky top-24">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Our Breeding Philosophy</h2>
<p className="text-xl text-amber-400 mb-6 font-light">Quality is the standard. Precision is the process.</p>
<p className="text-lg text-slate-400 leading-relaxed font-light mb-8">
                        We breed American Bullies with intention — never hype. Our program prioritizes correct structure, movement, and breed type while maintaining stable temperaments.
                    </p>
<div className="h-px w-24 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
</div>
<div className="grid gap-6">

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<i className="w-6 h-6 text-amber-500 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="activity"></i>
<h3 className="text-lg font-medium text-white mb-2">Structure &amp; Movement</h3>
<p className="text-base text-slate-400 font-light">Correct conformation ensuring functional athleticism and adherence to breed standards.</p>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<i className="w-6 h-6 text-amber-500 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="dumbbell"></i>
<h3 className="text-lg font-medium text-white mb-2">Bone &amp; Muscle Density</h3>
<p className="text-base text-slate-400 font-light">Strong bone structure and overall balance without compromising mobility.</p>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<i className="w-6 h-6 text-amber-500 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="shield-check"></i>
<h3 className="text-lg font-medium text-white mb-2">Temperament</h3>
<p className="text-base text-slate-400 font-light">Stable, confident dogs suitable for family homes and professional breeding programs.</p>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<i className="w-6 h-6 text-amber-500 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="file-check"></i>
<h3 className="text-lg font-medium text-white mb-2">Ethical Practices</h3>
<p className="text-base text-slate-400 font-light">Transparent, contract-based breeding practices focused on the welfare of the animal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-y border-white/5" id="dogs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 items-center">

<div className="w-full lg:w-3/5">
<div className="relative rounded-2xl overflow-hidden border border-white/10 gold-glow">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
<img alt="Drama - Featured Dog" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563729909778-d4469d7c2a71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full lg:w-2/5">
<div className="inline-block px-3 py-1 mb-6 border border-amber-500/30 rounded text-xs font-medium text-amber-400 uppercase tracking-widest">
                        Standard Representation
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Proven Producers</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                        Our dogs are carefully selected and developed to represent the highest standard of the American Bully breed. From upcoming prospects to proven producers, each dog in our program is evaluated for:
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-slate-300 font-light text-lg">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check"></i>
                            Genetic consistency and pedigree strength
                        </li>
<li className="flex items-start gap-3 text-slate-300 font-light text-lg">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check"></i>
                            Market demand and breeding value
                        </li>
<li className="flex items-start gap-3 text-slate-300 font-light text-lg">
<i className="w-5 h-5 text-amber-500 mt-1 shrink-0" data-lucide="check"></i>
                            Longevity within elite programs
                        </li>
</ul>
<button className="px-8 py-3 bg-white text-black hover:bg-slate-200 text-sm font-medium rounded transition-colors duration-200">
                        View All Dogs
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Services &amp; Opportunities</h2>
<p className="text-lg text-slate-400 font-light">The Bully Kompound offers opportunities to serious clients only. All services are professionally managed and protected by written contracts.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="paw-print"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Puppy Placements</h3>
<p className="text-base text-slate-400 font-light leading-relaxed">Select American Bully puppy placements for companion and show homes.</p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="dna"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Stud Services</h3>
<p className="text-base text-slate-400 font-light leading-relaxed">Stud services to approved females with proven genetic compatibility.</p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-black rounded-lg border border-white/10 flex items-center justify-center mb-6 text-amber-400">
<i className="w-6 h-6" data-lucide="handshake"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Partnerships</h3>
<p className="text-base text-slate-400 font-light leading-relaxed">Strategic co-ownerships and breeding partnerships for long-term growth.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 text-white text-sm font-medium rounded transition-colors">
                    Inquire About Breedings <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Global Availability</h2>
<p className="text-lg text-slate-400 font-light mb-8">
                        Based in Canada and the United States, The Bully Kompound proudly works with clients worldwide. Our reach is global — our standards remain uncompromised.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-amber-400" data-lucide="plane"></i>
</div>
<span className="text-slate-300 font-light">Domestic &amp; International Logistics</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-amber-400" data-lucide="snowflake"></i>
</div>
<span className="text-slate-300 font-light">Frozen &amp; Chilled Semen Shipment</span>
</div>
</div>
</div>
<div className="relative h-64 md:h-full min-h-[300px] border border-white/10 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="text-center space-y-2">
<i className="w-16 h-16 text-amber-500 mx-auto opacity-80" data-lucide="globe"></i>
<p className="text-sm font-medium text-white uppercase tracking-widest">Serving Clients Worldwide</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Contact The Bully Kompound</h2>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Serious inquiries only. Whether you’re looking to add a foundation American Bully to your program or secure a premium breeding, we welcome conversations with like-minded individuals.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold rounded transition-all transform hover:-translate-y-1" href="mailto:info@bullykompound.com">
                    Contact Us
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-2">The Bully Kompound</h3>
<p className="text-sm text-slate-500">Elite American Bully Breeding Program.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div className="border-t border-white/5 pt-8 grid gap-4 text-xs text-slate-600 font-light">
<p>
                    Disclaimer: The Bully Kompound reserves the right to refuse service to anyone. All dogs, breedings, and services are offered under written contract only. No guarantees are made outside of signed agreements.
                </p>
<div className="flex justify-between items-center">
<p>© 2023 The Bully Kompound. All rights reserved.</p>
<p>Designed with precision.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
