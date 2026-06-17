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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        entry.target.style.opacity = '1';
                    }
                });
            }, { threshold: 0.1 });

            // Target elements that don't have fade-in-up initially for scroll effect
            document.querySelectorAll('section h2, section p, .grid > div').forEach((el) => {
                if(!el.classList.contains('fade-in-up')) {
                    el.style.opacity = '0';
                    observer.observe(el);
                }
            });
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center">
<span className="text-white text-xs font-medium">F</span>
</div>
                CoachFaizus.co
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#methodology">Methodology</a>
<a className="text-lg text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#about">About</a>
<a className="text-lg text-zinc-500 hover:text-zinc-900 transition-colors font-medium" href="#results">Results</a>
</div>
<a className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-6 text-lg font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2" href="#apply">
                Book Strategy Call
            </a>
<button className="md:hidden p-2 text-zinc-600">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Faizus at Sunset" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900/90 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center fade-in-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm font-medium text-zinc-200">Accepting 3 new coaches this month</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                The High-CashFlow <br/><span className="text-zinc-400">Blueprint.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-300 font-normal max-w-2xl mx-auto mb-12 leading-relaxed fade-in-up delay-100">
                I help service providers and coaches build authoritative personal brands and architect systems for predictable growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-200">
<a className="w-full sm:w-auto h-14 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 text-lg font-medium text-zinc-900 transition-all hover:bg-zinc-100 hover:scale-[1.02]" href="#apply">
                    Get the Blueprint
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto h-14 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 text-lg font-medium text-white transition-all hover:bg-white/5" href="#methodology">
                    See How It Works
                </a>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10"></div>
</section>

<section className="py-12 border-b border-zinc-200/50 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-lg text-zinc-500 font-medium mb-8">Trusted by founders and coaches who scale</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">

<div className="flex items-center gap-2"><div className="w-8 h-8 rounded bg-zinc-800"></div><span className="text-xl font-semibold tracking-tight">AcmeCorp</span></div>
<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-zinc-800"></div><span className="text-xl font-semibold tracking-tight">GlobalStart</span></div>
<div className="flex items-center gap-2"><div className="w-8 h-8 rotate-45 bg-zinc-800"></div><span className="text-xl font-semibold tracking-tight">ApexCoach</span></div>
<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-tr-xl rounded-bl-xl bg-zinc-800"></div><span className="text-xl font-semibold tracking-tight">Nexus</span></div>
</div>
</div>
</section>

<section className="py-32 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
                    Stop trading time for dollars. Start building equity.
                </h2>
<p className="text-xl text-zinc-600 font-normal leading-relaxed">
                    Most coaches fail because they lack a system. They rely on referrals and hustle. The High-CashFlow Blueprint shifts you from a freelancer mentality to a business owner reality.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white rounded-3xl p-8 border border-zinc-200 hover:border-zinc-300 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 text-zinc-700">
<i className="w-6 h-6" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Magnetic Brand Identity</h3>
<p className="text-lg text-zinc-500 font-normal leading-relaxed mb-6">
                        We extract your unique value and position you as an authority, not just another commodity in the feed.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-lg text-zinc-600 font-normal">
<i className="w-5 h-5 text-emerald-500" data-lucide="check" strokeWidth="1.5"></i> Niche clarification
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-600 font-normal">
<i className="w-5 h-5 text-emerald-500" data-lucide="check" strokeWidth="1.5"></i> Offer structuring
                        </li>
</ul>
</div>

<div className="group relative bg-white rounded-3xl p-8 border border-zinc-200 hover:border-zinc-300 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-500 text-zinc-700">
<i className="w-6 h-6" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Acquisition Engine</h3>
<p className="text-lg text-zinc-500 font-normal leading-relaxed mb-6">
                        Implement automated systems that bring qualified leads to your calendar while you focus on delivery.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-lg text-zinc-600 font-normal">
<i className="w-5 h-5 text-emerald-500" data-lucide="check" strokeWidth="1.5"></i> Funnel architecture
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-600 font-normal">
<i className="w-5 h-5 text-emerald-500" data-lucide="check" strokeWidth="1.5"></i> Organic &amp; Paid scaling
                        </li>
</ul>
</div>

<div className="group relative bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 text-white">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">High-Ticket Sales</h3>
<p className="text-lg text-zinc-400 font-normal leading-relaxed mb-6">
                        Learn the psychological frameworks to close deals naturally, without feeling salesy or pushy.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-lg text-zinc-300 font-normal">
<i className="w-5 h-5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i> Objection handling
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-300 font-normal">
<i className="w-5 h-5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i> Pricing strategy
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-zinc-200 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>

<div className="relative aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200">
<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 gap-4">
<i className="w-12 h-12" data-lucide="camera" strokeWidth="1.5"></i>
<p className="text-lg font-medium">Add Portrait Image Here</p>
</div>


</div>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-sm font-medium mb-6">
                        Meet Your Coach
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8 leading-tight">
                        I've been exactly where you are right now.
                    </h2>
<div className="space-y-6 text-xl text-zinc-600 font-normal leading-relaxed">
<p>
                            Building a coaching business shouldn't mean sacrificing your freedom. I spent years grinding, figuring out the hard way what actually moves the needle in the creator economy.
                        </p>
<p>
                            Now, I dedicate my time to helping dedicated service providers bypass the guesswork. We build the infrastructure, you deliver the transformation.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-zinc-100">
<div>
<p className="text-4xl font-semibold tracking-tight text-zinc-900 mb-2">100+</p>
<p className="text-lg text-zinc-500 font-normal">Coaches Scaled</p>
</div>
<div>
<p className="text-4xl font-semibold tracking-tight text-zinc-900 mb-2">$5M+</p>
<p className="text-lg text-zinc-500 font-normal">Client Revenue Generated</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-zinc-900 mb-20">
                Don't just take my word for it.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-700 font-normal leading-relaxed mb-8">
                            "Faizus completely restructured my offer. I went from struggling to book $1k packages to consistently closing $5k retainers. The system works."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200"></div>
<div>
<p className="text-lg font-medium text-zinc-900">Sarah Jenkins</p>
<p className="text-base text-zinc-500 font-normal">Executive Coach</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-700 font-normal leading-relaxed mb-8">
                            "The personal branding module alone was worth the investment. I have a clear voice now and inbound leads are reaching out weekly."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200"></div>
<div>
<p className="text-lg font-medium text-zinc-900">Marcus T.</p>
<p className="text-base text-zinc-500 font-normal">Fitness Consultant</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-700 font-normal leading-relaxed mb-8">
                            "No fluff, just actionable blueprints. Faizus doesn't just motivate you, he gives you the exact technical steps to build the infrastructure."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-200"></div>
<div>
<p className="text-lg font-medium text-zinc-900">Elena R.</p>
<p className="text-base text-zinc-500 font-normal">Agency Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-zinc-900" id="apply">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8">
                Ready to scale your impact?
            </h2>
<p className="text-xl md:text-2xl text-zinc-400 font-normal mb-12 max-w-2xl mx-auto">
                Book a free strategy session to see if the High-CashFlow Blueprint is the right fit for your business.
            </p>
<a className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-white px-10 text-xl font-medium text-zinc-900 transition-all hover:bg-zinc-100 hover:scale-105" href="#">
                Book Your Call Now
                <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<p className="mt-6 text-sm text-zinc-500 font-normal">No pressure, just actionable strategy.</p>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center">
<span className="text-white text-xs font-medium">F</span>
</div>
<span className="text-lg font-semibold tracking-tight">CoachFaizus.co</span>
</div>
<div className="flex gap-8">
<a className="text-base text-zinc-500 hover:text-zinc-900 font-normal transition-colors" href="#">Twitter</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 font-normal transition-colors" href="#">LinkedIn</a>
<a className="text-base text-zinc-500 hover:text-zinc-900 font-normal transition-colors" href="#">Instagram</a>
</div>
<p className="text-sm text-zinc-400 font-normal">
                © 2024 Faizus Coaching. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
