import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 300);
    


      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-zinc-900 text-zinc-100 px-4 py-2 text-center text-xs font-medium tracking-wide">
      Free shipping on all subscriptions. 60-day money-back guarantee.
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-900 font-medium tracking-widest text-lg" href="#">
            AURA
          </a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#science">
              The Science
            </a>
<a className="hover:text-zinc-900 transition-colors" href="#ingredients">
              Ingredients
            </a>
<a className="hover:text-zinc-900 transition-colors" href="#reviews">
              Reviews
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-zinc-900 hover:text-zinc-600 transition-colors" href="#pricing">
            Log in
          </a>
<a className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-normal hover:bg-zinc-800 transition-colors shadow-sm" href="#pricing">
            Shop Now
          </a>
</div>
</div>
</nav>
<main className="flex-1">

<section className="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="max-w-xl z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 text-xs font-normal text-zinc-600 mb-8 shadow-sm reveal">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Clinically proven formula
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-zinc-900 tracking-tight leading-[1.05] mb-6 reveal reveal-delay-1">
              Recalibrate your
              <br/>
              metabolism.
            </h1>
<p className="text-base md:text-lg text-zinc-500 mb-10 leading-relaxed font-light reveal reveal-delay-2">
              Aura is a precision-engineered daily supplement designed to
              optimize cellular energy, manage cravings, and support sustainable
              weight management naturally.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10 reveal reveal-delay-3">
<a className="group flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-md hover:shadow-xl active:scale-[0.98]" href="#pricing">
                Start your journey
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 transition-colors" href="#science">
                Read the research
              </a>
</div>

<div className="flex items-center gap-4 text-sm text-zinc-500 reveal reveal-delay-4">
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white bg-zinc-300 object-cover" src="https://i.pravatar.cc/100?img=2"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-white bg-zinc-400 object-cover" src="https://i.pravatar.cc/100?img=3"/>
</div>
<div className="flex flex-col">
<div className="flex items-center text-amber-400 gap-0.5">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs mt-1 font-light">
                  Trusted by 10,000+ customers
                </span>
</div>
</div>
</div>

<div className="relative flex justify-center md:justify-end z-10 reveal reveal-delay-2">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-emerald-200/30 via-zinc-100/40 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="relative w-[280px] h-[420px] bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-[2rem] shadow-2xl border border-zinc-700/50 flex flex-col items-center justify-center p-6 animate-float">
<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
<div className="absolute -top-7 w-56 h-14 bg-zinc-900 rounded-t-3xl border-t border-x border-zinc-700/50 flex items-center justify-center shadow-inner">
<div className="w-48 h-1.5 bg-zinc-800 rounded-full"></div>
</div>
<div className="w-full h-3/4 glass-panel rounded-2xl p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
<span className="text-zinc-400 text-[10px] tracking-widest uppercase mb-auto z-10">
                  Daily Supplement
                </span>
<div className="my-auto z-10">
<h2 className="text-white text-4xl font-medium tracking-widest mb-2">
                    AURA
                  </h2>
<p className="text-zinc-400 text-xs font-light leading-relaxed">
                    Metabolic Support
                    <br/>
                    60 Capsules
                  </p>
</div>
<div className="mt-auto flex justify-between items-end border-t border-white/10 pt-4 z-10">
<span className="text-zinc-500 text-[10px] font-medium">
                    100% Natural
                  </span>
<i className="text-zinc-400 w-4 h-4" data-lucide="leaf"></i>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-zinc-100 bg-zinc-50/50 py-12">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8 reveal">
            Pioneering research featured in
          </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 reveal reveal-delay-1">
<span className="text-xl font-medium tracking-tight text-zinc-800">
              Nature
            </span>
<span className="text-xl font-medium tracking-tight text-zinc-800">
              The Lancet
            </span>
<span className="text-xl font-medium tracking-tight text-zinc-800">
              Cell Metabolism
            </span>
<span className="text-xl font-medium tracking-tight text-zinc-800">
              Science
            </span>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="science">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<span className="text-emerald-500 font-medium tracking-widest text-xs uppercase mb-4 block">
              The Science
            </span>
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-6">
              A multi-pathway approach.
            </h2>
<p className="text-lg text-zinc-500 font-light leading-relaxed">
              Weight management isn't just about eating less. Aura addresses the
              three core biological pillars of a healthy metabolism using
              clinical-grade compounds.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-10 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-1">
<div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-emerald-600" data-lucide="flame"></i>
</div>
<h3 className="text-2xl font-medium text-zinc-900 mb-4 tracking-tight">
                Thermogenesis
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Activates brown adipose tissue to increase resting metabolic
                rate, helping your body burn more calories naturally without
                stimulants.
              </p>
</div>
<div className="group p-10 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-2">
<div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-emerald-600" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium text-zinc-900 mb-4 tracking-tight">
                Cellular Energy
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Optimizes mitochondrial function to convert stored fat into
                usable energy, reducing fatigue during deficits and enhancing
                endurance.
              </p>
</div>
<div className="group p-10 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-3">
<div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-8 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-emerald-600" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-medium text-zinc-900 mb-4 tracking-tight">
                Cravings Control
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Stabilizes blood glucose levels to prevent the spikes and
                crashes that lead to sugar cravings, brain fog, and overeating.
              </p>
</div>
</div>
</div>
</section>
<section className="py-32 bg-zinc-950 text-white relative overflow-hidden" id="ingredients">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
<div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-900/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-emerald-400 font-medium tracking-widest text-xs uppercase mb-4 block reveal">
                Pure Potency
              </span>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-tight reveal reveal-delay-1">
                Nature's intelligence,
                <br/>
                clinically dosed.
              </h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-12 reveal reveal-delay-2">
                We source only the most bioavailable forms of each compound,
                ensuring maximum cellular uptake. No proprietary blends, no
                fillers.
              </p>
<div className="space-y-8">
<div className="flex gap-5 items-start reveal reveal-delay-3">
<div className="mt-1 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-400" data-lucide="leaf"></i>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2 text-zinc-100">
                      Berberine HCL (500mg)
                    </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                      The metabolic master-switch. Activates AMPK to improve
                      insulin sensitivity and glucose metabolism.
                    </p>
</div>
</div>
<div className="flex gap-5 items-start reveal reveal-delay-4">
<div className="mt-1 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-400" data-lucide="test-tube"></i>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2 text-zinc-100">
                      L-Carnitine Tartrate (1000mg)
                    </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                      Transports fatty acids into the mitochondria to be burned
                      for energy, reducing visceral fat storage.
                    </p>
</div>
</div>
<div className="flex gap-5 items-start reveal reveal-delay-5">
<div className="mt-1 w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-400" data-lucide="activity"></i>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2 text-zinc-100">
                      Alpha Lipoic Acid (300mg)
                    </h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                      A powerful antioxidant that protects mitochondrial
                      function and further stabilizes blood sugar.
                    </p>
</div>
</div>
</div>
</div>
<div className="relative flex justify-center items-center h-[600px]">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
<div className="relative w-80 h-80 rounded-full border border-zinc-800 flex items-center justify-center animate-[spin_60s_linear_infinite]">
<div className="absolute w-full h-full rounded-full border border-dashed border-zinc-700 scale-110"></div>
<div className="absolute w-full h-full rounded-full border border-zinc-800 scale-125"></div>
<div className="w-56 h-56 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center relative shadow-[0_0_80px_rgba(16,185,129,0.1)]">
<div className="w-36 h-36 rounded-full bg-emerald-900/20 backdrop-blur-md flex items-center justify-center border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] animate-[spin_30s_linear_infinite_reverse]">
<div className="w-20 h-20 rounded-full bg-emerald-500/40 animate-pulse blur-md"></div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
<div className="absolute bottom-1/4 -right-2 w-3 h-3 rounded-full bg-zinc-400"></div>
<div className="absolute bottom-1/4 -left-2 w-2 h-2 rounded-full bg-zinc-500"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-b border-zinc-200" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-6">
              Real results.
            </h2>
<p className="text-lg text-zinc-500 font-light">
              Join thousands of others who have successfully recalibrated their
              metabolism.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow reveal reveal-delay-1">
<div className="flex items-center text-amber-400 gap-1 mb-8">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-700 leading-relaxed font-light mb-10 text-lg">
                "I've struggled with afternoon crashes and sugar cravings for
                years. Within two weeks of taking Aura, my energy levels
                stabilized completely. I've naturally started eating less
                without feeling restricted."
              </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium">
                  SJ
                </div>
<div>
<h5 className="text-base font-medium text-zinc-900 tracking-tight">
                    Sarah J.
                  </h5>
<span className="text-xs text-emerald-600 flex items-center gap-1.5 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                    Verified Buyer
                  </span>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow reveal reveal-delay-2">
<div className="flex items-center text-amber-400 gap-1 mb-8">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-700 leading-relaxed font-light mb-10 text-lg">
                "This is the first metabolic supplement where I actually feel
                the difference in my body temperature and energy output during
                workouts. It feels clean, with no jittery side effects at all."
              </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium">
                  MR
                </div>
<div>
<h5 className="text-base font-medium text-zinc-900 tracking-tight">
                    Marcus R.
                  </h5>
<span className="text-xs text-emerald-600 flex items-center gap-1.5 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                    Verified Buyer
                  </span>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow reveal reveal-delay-3">
<div className="flex items-center text-amber-400 gap-1 mb-8">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-zinc-700 leading-relaxed font-light mb-10 text-lg">
                "Down 12 lbs in two months, but more importantly, my blood work
                came back better than it has in a decade. My doctor asked what I
                changed. Aura is now a non-negotiable part of my daily routine."
              </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-medium">
                  EL
                </div>
<div>
<h5 className="text-base font-medium text-zinc-900 tracking-tight">
                    Elena L.
                  </h5>
<span className="text-xs text-emerald-600 flex items-center gap-1.5 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                    Verified Buyer
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-white" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-6">
              Commit to your health.
            </h2>
<p className="text-lg text-zinc-500 font-light">
              Subscribers unlock maximum savings and exclusive resources. Cancel
              or pause anytime.
            </p>
<div className="mt-10 inline-flex items-center p-1.5 bg-zinc-50 border border-zinc-200 rounded-2xl shadow-inner">
<button className="px-8 py-3 text-sm font-medium text-white bg-zinc-900 rounded-xl shadow-sm transition-all">
                Subscribe &amp; Save 20%
              </button>
<button className="px-8 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all">
                One-time purchase
              </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
<div className="flex flex-col p-10 bg-white border border-zinc-200 rounded-[2rem] hover:border-zinc-300 hover:shadow-xl transition-all duration-300 reveal reveal-delay-1">
<h3 className="text-2xl font-medium text-zinc-900 tracking-tight">
                1 Month Supply
              </h3>
<p className="text-sm text-zinc-500 mt-2 font-light">Try it out</p>
<div className="my-10">
<span className="text-5xl md:text-6xl font-medium text-zinc-900 tracking-tight">
                  $49
                </span>
<span className="text-base text-zinc-500">/bottle</span>
</div>
<ul className="space-y-4 mb-10 flex-1 text-base text-zinc-600 font-light">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check"></i>
                  60 capsules
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check"></i>
                  Standard shipping
                </li>
</ul>
<button className="w-full py-4 px-6 bg-white border border-zinc-200 text-zinc-900 rounded-xl text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all">
                Select Plan
              </button>
</div>
<div className="flex flex-col p-10 bg-zinc-900 text-white border border-zinc-900 rounded-[2rem] relative shadow-2xl scale-105 z-10 ring-1 ring-white/10 reveal reveal-delay-2">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-500 text-zinc-900 px-5 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-lg">
                Most Popular
              </div>
<h3 className="text-2xl font-medium text-white tracking-tight">
                3 Month Supply
              </h3>
<p className="text-sm text-zinc-400 mt-2 font-light">
                See real results
              </p>
<div className="my-10">
<span className="text-5xl md:text-6xl font-medium text-white tracking-tight">
                  $39
                </span>
<span className="text-base text-zinc-400">/bottle</span>
<div className="text-sm text-emerald-400 mt-3 font-medium">
                  Save $30 total
                </div>
</div>
<ul className="space-y-4 mb-10 flex-1 text-base text-zinc-300 font-light">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="check"></i>
                  180 capsules
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="check"></i>
                  Free expedited shipping
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="check"></i>
                  Digital nutrition guide
                </li>
</ul>
<button className="w-full py-4 px-6 bg-white text-zinc-900 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Select Plan
              </button>
</div>
<div className="flex flex-col p-10 bg-white border border-zinc-200 rounded-[2rem] hover:border-zinc-300 hover:shadow-xl transition-all duration-300 reveal reveal-delay-3">
<h3 className="text-2xl font-medium text-zinc-900 tracking-tight">
                6 Month Supply
              </h3>
<p className="text-sm text-zinc-500 mt-2 font-light">
                Maximum commitment
              </p>
<div className="my-10">
<span className="text-5xl md:text-6xl font-medium text-zinc-900 tracking-tight">
                  $34
                </span>
<span className="text-base text-zinc-500">/bottle</span>
<div className="text-sm text-emerald-600 mt-3 font-medium">
                  Save $90 total
                </div>
</div>
<ul className="space-y-4 mb-10 flex-1 text-base text-zinc-600 font-light">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check"></i>
                  360 capsules
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check"></i>
                  Free expedited shipping
                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="check"></i>
                  Dedicated coaching
                </li>
</ul>
<button className="w-full py-4 px-6 bg-white border border-zinc-200 text-zinc-900 rounded-xl text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all">
                Select Plan
              </button>
</div>
</div>
<div className="mt-16 text-center text-sm text-zinc-400 font-light flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="lock"></i>
            Secure 256-bit SSL Checkout
          </div>
</div>
</section>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-zinc-900 font-medium tracking-widest text-lg block mb-6">
              AURA
            </span>
<p className="text-sm text-zinc-500 leading-relaxed font-light pr-4">
              Formulated with precision to support your metabolic health
              naturally.
            </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-6 uppercase tracking-wider">
              Product
            </h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Ingredients
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Clinical Trials
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  FAQ
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-6 uppercase tracking-wider">
              Company
            </h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Wholesale
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-6 uppercase tracking-wider">
              Legal
            </h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-zinc-900 transition-colors" href="#">
                  Refund Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-[10px] text-zinc-400 max-w-3xl leading-relaxed text-center md:text-left">
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. Results may vary from person to
            person. Always consult your physician before starting any new
            dietary supplement.
          </p>
<div className="flex items-center gap-4 shrink-0">
<p className="text-xs text-zinc-400 font-light">© 2024 Aura Health.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
