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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200 bg-[#fafaf9]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-bold tracking-tighter text-emerald-950">
            KO
            <span className="text-emerald-700">RA</span>
</span>
</a>
<div className="flex items-center md:order-2 space-x-4 md:space-x-6">

<button className="text-stone-500 hover:text-emerald-900 transition-colors hidden sm:block">
<iconify-icon height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
<li>
<a aria-current="page" className="block py-2 px-3 text-emerald-950 bg-stone-200 md:bg-transparent md:text-emerald-800 md:p-0 rounded" href="#how-it-works">
                How it Works
              </a>
</li>
<li>
<a className="block py-2 px-3 text-stone-600 hover:text-emerald-900 md:p-0 transition-colors" href="#methodology">
                Methodology
              </a>
</li>
<li>
<a className="block py-2 px-3 text-stone-600 hover:text-emerald-900 md:p-0 transition-colors" href="#protocols">
                Wellness Protocols
              </a>
</li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative bg-[#fafaf9]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-emerald-950 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-900"></span>
</span>
              AI Health Assessment Beta 2.0
            </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-extrabold text-emerald-950 tracking-tighter">
              Optimize your pet's
              <br/>
<span className="text-emerald-800/80">daily wellness.</span>
</h1>
<p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              An intelligent agent that analyzes your pet's bio-profile to
              generate scientific nutritional strategies and care protocols.
            </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-stone-50 bg-emerald-950 rounded-lg hover:bg-emerald-900 focus:ring-4 focus:ring-emerald-200 transition-all shadow-lg shadow-emerald-950/20" href="#start">
                Start Assessment
                <iconify-icon className="ml-2" height="16" icon="lucide:sparkles" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 hover:border-stone-300 focus:ring-4 focus:ring-stone-100 transition-all" href="#sample-report">
                View Sample Plan
              </a>
</div>
<p className="text-xs text-stone-400">
              Data-driven insights • No medical advice
            </p>
</div>
<div className="relative lg:h-[600px] w-full bg-stone-200 rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/50">
<img alt="Healthy Dog" className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&amp;w=1548&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg">
<div className="flex items-center gap-4">
<div className="flex-1">
<div className="flex justify-between text-xs font-semibold text-emerald-950 mb-1">
<span>Wellness Score</span>
<span>Good</span>
</div>
<div className="w-full bg-stone-200 rounded-full h-1.5">
<div className="bg-emerald-950 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div className="text-right">
<span className="block text-[10px] text-stone-500 uppercase tracking-wide">
                    Analysis
                  </span>
<span className="block text-sm font-bold text-emerald-950">
                    3 Protocols Ready
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-stone-100" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-stone-50">
            Why KORA Matters
          </h2>
<p className="text-emerald-200/60 max-w-2xl mx-auto text-sm">
            Supplementing correctly is science, not guessing. We prioritize
            safety and efficacy.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-900 border border-emerald-800 text-stone-100">
<iconify-icon height="28" icon="lucide:heart-pulse" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 text-stone-50">
                Longevity &amp; Quality of Life
              </h3>
<p className="text-emerald-200/50 text-sm leading-relaxed max-w-sm">
                The right protocols do more than treat symptoms—they extend your
                pet's lifespan and significantly improve their daily vitality
                and energy levels.
              </p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-900 border border-emerald-800 text-stone-100">
<iconify-icon height="28" icon="lucide:shield-alert" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 text-stone-50">
                Kidney Function Safety
              </h3>
<p className="text-emerald-200/50 text-sm leading-relaxed max-w-sm">
                More isn't always better. Excessive supplementation can severely
                damage kidney function. We calculate precise limits to prevent
                toxicity.
              </p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-900 border border-emerald-800 text-stone-100">
<iconify-icon height="28" icon="lucide:calendar-clock" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 text-stone-50">
                Age-Specific Customization
              </h3>
<p className="text-emerald-200/50 text-sm leading-relaxed max-w-sm">
                A puppy has vastly different needs than a senior. We tailor
                every recommendation to your pet's specific life stage to ensure
                maximum safety.
              </p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-900 border border-emerald-800 text-stone-100">
<iconify-icon height="28" icon="lucide:flask-conical" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium mb-2 text-stone-50">
                Purity &amp; Potency
              </h3>
<p className="text-emerald-200/50 text-sm leading-relaxed max-w-sm">
                Many composite products are packed with flour and flavorings. We
                filter specifically for high-purity options with verified active
                ingredient dosages.
              </p>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-emerald-950 bg-stone-50 rounded-lg hover:bg-white focus:ring-4 focus:ring-emerald-900 transition-all shadow-lg shadow-emerald-900/50" href="#start">
            Start Your Wellness Check
            <iconify-icon className="ml-2" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-3">
              How We Design Your Protocol
            </h2>
<p className="text-stone-500 text-sm max-w-md">
              Our algorithm analyzes your pet's profile against clinical data to
              generate a custom regimen.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group block bg-[#fafaf9] rounded-xl p-6 border border-stone-200 transition-all hover:border-emerald-200">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-white rounded-lg text-emerald-950 border border-stone-100 shadow-sm">
<iconify-icon height="24" icon="lucide:scan-face" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-950 bg-stone-200/50 px-2 py-1 rounded">
                Step 1
              </span>
</div>
<h3 className="text-base font-medium text-emerald-950 mb-1">
              Create Profile
            </h3>
<p className="text-xs text-stone-500 line-clamp-3">
              Enter basic details like breed, age, and activity level to set a
              baseline for caloric and nutrient needs.
            </p>
</div>

<div className="group block bg-[#fafaf9] rounded-xl p-6 border border-stone-200 transition-all hover:border-emerald-200">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-white rounded-lg text-emerald-950 border border-stone-100 shadow-sm">
<iconify-icon height="24" icon="lucide:list-checks" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-950 bg-stone-200/50 px-2 py-1 rounded">
                Step 2
              </span>
</div>
<h3 className="text-base font-medium text-emerald-950 mb-1">
              Select Goals
            </h3>
<p className="text-xs text-stone-500 line-clamp-3">
              Identify key focus areas, from joint longevity and mobility to
              skin elasticity and digestion.
            </p>
</div>

<div className="group block bg-[#fafaf9] rounded-xl p-6 border border-stone-200 transition-all hover:border-emerald-200">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-white rounded-lg text-emerald-950 border border-stone-100 shadow-sm">
<iconify-icon height="24" icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-950 bg-stone-200/50 px-2 py-1 rounded">
                Step 3
              </span>
</div>
<h3 className="text-base font-medium text-emerald-950 mb-1">
              AI Analysis
            </h3>
<p className="text-xs text-stone-500 line-clamp-3">
              We cross-reference thousands of clinical studies to match
              ingredients to your pet's biological requirements.
            </p>
</div>

<div className="group block bg-[#fafaf9] rounded-xl p-6 border border-stone-200 transition-all hover:border-emerald-200">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-white rounded-lg text-emerald-950 border border-stone-100 shadow-sm">
<iconify-icon height="24" icon="lucide:clipboard-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-950 bg-stone-200/50 px-2 py-1 rounded">
                Step 4
              </span>
</div>
<h3 className="text-base font-medium text-emerald-950 mb-1">
              Get Protocol
            </h3>
<p className="text-xs text-stone-500 line-clamp-3">
              Receive a comprehensive, science-backed wellness plan tailored
              specifically for your pet.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#fafaf9] border-t border-stone-200" id="protocols">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-3">
              Holistic Wellness Areas
            </h2>
<p className="text-stone-500 text-sm max-w-md">
              Comprehensive care protocols addressing specific biological
              systems.
            </p>
</div>
<a className="group inline-flex items-center text-sm font-medium text-emerald-800 hover:text-emerald-950" href="#">
            View all protocols
            <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-100 rounded-t-2xl overflow-hidden p-6 flex items-center justify-center">
<img alt="Joint Analysis" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1623328229864-7729f28bfd2a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-stone-50/90 border border-stone-200 backdrop-blur text-emerald-900 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider">
                Clinical Focus
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-emerald-950">
                Joint Mobility
              </h3>
<p className="text-xs text-stone-500 mb-4 mt-1">
                Glucosamine &amp; structural support
              </p>
<div className="mt-auto flex items-center gap-2 text-stone-600 text-xs font-medium w-fit px-0 py-1 rounded">
<iconify-icon height="14" icon="lucide:file-text" width="14"></iconify-icon>
                Protocol Available
              </div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-100 rounded-t-2xl overflow-hidden p-6 flex items-center justify-center">
<img alt="Behavior Analysis" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1631541909061-70e6275ad446?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-emerald-950">
                Calming &amp; Mood
              </h3>
<p className="text-xs text-stone-500 mb-4 mt-1">
                Neurotransmitter support &amp; anxiety
              </p>
<div className="mt-auto flex items-center gap-2 text-stone-600 text-xs font-medium w-fit px-0 py-1 rounded">
<iconify-icon height="14" icon="lucide:file-text" width="14"></iconify-icon>
                Protocol Available
              </div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-100 rounded-t-2xl overflow-hidden p-6 flex items-center justify-center">
<img alt="Skin Analysis" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1557864192-152d6da4534f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-emerald-950">
                Dermal Health
              </h3>
<p className="text-xs text-stone-500 mb-4 mt-1">
                Lipid barrier &amp; coat integrity
              </p>
<div className="mt-auto flex items-center gap-2 text-stone-600 text-xs font-medium w-fit px-0 py-1 rounded">
<iconify-icon height="14" icon="lucide:file-text" width="14"></iconify-icon>
                Protocol Available
              </div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-100 rounded-t-2xl overflow-hidden p-6 flex items-center justify-center">
<img alt="Diet Analysis" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 opacity-80" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-emerald-950">
                Systemic Immunity
              </h3>
<p className="text-xs text-stone-500 mb-4 mt-1">
                Daily micronutrient balance
              </p>
<div className="mt-auto flex items-center gap-2 text-stone-600 text-xs font-medium w-fit px-0 py-1 rounded">
<iconify-icon height="14" icon="lucide:file-text" width="14"></iconify-icon>
                Protocol Available
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-bold tracking-tight text-emerald-950">
              KORA
            </span>
<p className="mt-4 text-xs text-stone-500 leading-relaxed">
              Your personal AI agent for pet supplements and wellness protocols.
            </p>
</div>
<div>
<h4 className="font-medium text-emerald-950 mb-4 text-sm">Agent</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  Start New Assessment
                </a>
</li>
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  Browse Protocols
                </a>
</li>
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  Methodology
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-emerald-950 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  Clinical Partners
                </a>
</li>
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-emerald-900 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-emerald-950 mb-4 text-sm">
              Weekly Science
            </h4>
<p className="text-xs text-stone-500 mb-3">
              Get clinical nutrition insights.
            </p>
<form className="flex gap-2">
<input className="w-full bg-[#fafaf9] border border-stone-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900" placeholder="Email address" type="email"/>
<button className="bg-emerald-950 text-stone-50 px-4 py-2 rounded-md text-xs font-medium hover:bg-emerald-900 transition-colors">
                Join
              </button>
</form>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">
            © 2024 KORA. Not a medical service. Consult a vet for medical
            issues.
          </p>
<div className="flex gap-6 text-stone-400">
<iconify-icon className="hover:text-emerald-900 cursor-pointer transition-colors" height="18" icon="lucide:instagram" width="18"></iconify-icon>
<iconify-icon className="hover:text-emerald-900 cursor-pointer transition-colors" height="18" icon="lucide:twitter" width="18"></iconify-icon>
<iconify-icon className="hover:text-emerald-900 cursor-pointer transition-colors" height="18" icon="lucide:linkedin" width="18"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
