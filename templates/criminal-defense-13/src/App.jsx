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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-slate-900 font-semibold tracking-tight text-lg">THE NIEVES LAW FIRM</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#results">Case Results</a>
<a className="hover:text-slate-900 transition-colors" href="#team">Our Team</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded transition-transform hover:scale-105" href="tel:5108797549">
                (510) 879-7549
            </a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">

<div className="absolute inset-0 bg-slate-900">
<video autoplay="" className="video-parallax opacity-40" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80">

<source src="https://assets.mixkit.co/videos/preview/mixkit-traffic-on-the-golden-gate-bridge-hyperlapse-41584-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
<div className="max-w-3xl">
<h1 className="text-slate-300 text-sm font-medium tracking-wide uppercase mb-4">Bay Area Criminal Defense Lawyers</h1>
<h2 className="text-white text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                    WE TAKE THE "CRIMINAL"<br/> 
                    OUT OF CRIMINAL DEFENSE.®
                </h2>
<p className="text-slate-300 text-lg md:text-xl font-light mb-8 max-w-xl">
                    For people who have too much to lose.
                </p>

<div className="flex flex-wrap gap-6 mb-10 text-white/90 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>100% Confidential</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Serving Bay Area &amp; Sacramento</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Se Habla Español</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="bg-white text-slate-900 px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-slate-100 transition-colors flex items-center gap-2 group" href="/contact/">
                        SCHEDULE FREE CONSULTATION
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded border border-white/10">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="text-white text-xs leading-tight">
<span className="font-semibold block">200+ Reviews</span>
<span className="opacity-80">Google Reviews</span>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-b border-slate-100 bg-white py-8 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mask-linear">
<div className="flex justify-between items-center gap-12 text-slate-400 font-medium text-lg tracking-tight uppercase whitespace-nowrap overflow-x-auto no-scrollbar">
<span>SuperLawyers</span>
<span>Avvo</span>
<span>ABC News</span>
<span>Dr. Phil</span>
<span>Court TV</span>
<span>Nancy Grace</span>
<span>YouTube 200K+</span>
</div>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">Bay Area Criminal Lawyers</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        TRUSTED BY NATIONAL MEDIA FOR LEGAL INSIGHT.
                    </h3>
<p className="text-slate-600 font-light leading-relaxed">
                        When networks like ABC News, Court TV, and The Dr. Phil Show need a criminal defense perspective, they call our founding attorney Jo-Anna Nieves. With over 200,000 YouTube subscribers, she's become one of the most recognized voices in criminal defense education.
                    </p>
</div>
<a className="text-slate-900 text-sm font-semibold border-b border-slate-300 pb-0.5 hover:border-slate-900 transition-colors inline-flex items-center gap-1" href="/media-appearances/">
                    SEE US IN THE NEWS <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative aspect-video bg-slate-200 rounded overflow-hidden">
<div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center text-slate-400">
<span className="text-xs">[Screenshot: Jo-Anna on ABC]</span>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
<p className="text-white text-xs font-medium">ABC News Appearance</p>
<p className="text-white/70 text-[10px]">Legal Analysis</p>
</div>
</div>
<div className="group relative aspect-video bg-slate-200 rounded overflow-hidden">
<div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center text-slate-400">
<span className="text-xs">[Screenshot: Dr. Phil]</span>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
<p className="text-white text-xs font-medium">Dr. Phil Show</p>
<p className="text-white/70 text-[10px]">Expert Commentary</p>
</div>
</div>
<div className="group relative aspect-video bg-slate-200 rounded overflow-hidden">
<div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center text-slate-400">
<span className="text-xs">[Screenshot: Court TV]</span>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
<p className="text-white text-xs font-medium">Court TV</p>
<p className="text-white/70 text-[10px]">Trial Coverage</p>
</div>
</div>
<div className="group relative aspect-video bg-red-600 rounded overflow-hidden">
<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
<iconify-icon className="mb-2" icon="solar:play-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
<span className="font-semibold text-sm">YouTube Channel</span>
<span className="text-xs opacity-80">200K+ Subscribers</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-12">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">Defense Against Serious Bay Area Charges</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    DISMISSED. REDUCED. RESOLVED.
                </h3>
<div className="flex items-center gap-2 mb-6">
<div className="flex text-amber-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-wide">200+ Reviews</span>
</div>
<p className="text-slate-600 font-light leading-relaxed">
                    Our attorneys have achieved dismissals, reductions, and favorable outcomes in courthouses across the Bay Area and Sacramento. Every case is different, but our commitment never changes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-slate-200 rounded p-6 hover:shadow-lg transition-shadow bg-slate-50/50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Domestic Violence</span>
<span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Case Dismissed</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Client faced serious felony domestic violence charges that threatened their professional license. Through aggressive pre-trial motions, we exposed inconsistencies in the accuser's statement.
                    </p>
<a className="text-slate-900 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Domestic Violence Defense <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-slate-200 rounded p-6 hover:shadow-lg transition-shadow bg-slate-50/50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">DUI</span>
<span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Charges Reduced</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Client was pulled over with a high BAC. We challenged the calibration of the breathalyzer device and negotiated a reduction to a "wet reckless," saving the client's driver's license.
                    </p>
<a className="text-slate-900 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        DUI Defense <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-slate-200 rounded p-6 hover:shadow-lg transition-shadow bg-slate-50/50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Restraining Order</span>
<span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Request Denied</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Represented a respondent in a permanent restraining order hearing. We demonstrated that the allegations were unfounded, resulting in the judge denying the order completely.
                    </p>
<a className="text-slate-900 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Restraining Order Lawyer <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-slate-200 rounded p-6 hover:shadow-lg transition-shadow bg-slate-50/50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Motion to Vacate</span>
<span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Conviction Vacated</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Client faced deportation due to an old conviction. Using PC 1473.7, we successfully vacated the plea based on ineffective assistance of prior counsel, protecting their immigration status.
                    </p>
<a className="text-slate-900 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Post-Conviction Relief <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-slate-200 rounded p-6 hover:shadow-lg transition-shadow bg-slate-50/50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Assault</span>
<span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Dismissed</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Client was involved in a bar fight and acted in self-defense. We presented video evidence to the DA before charges were filed, preventing the case from ever going to court.
                    </p>
<a className="text-slate-900 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Assault Defense <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-slate-200 rounded p-6 hover:shadow-lg transition-shadow bg-slate-50/50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Fraud/Theft</span>
<span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Diversion Granted</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Employee charged with grand theft. We negotiated a civil compromise and diversion program, allowing the client to maintain a clean record upon completion.
                    </p>
<a className="text-slate-900 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">
                        Theft Defense <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<p className="text-[10px] text-slate-400 mt-6 text-center">Past results do not guarantee future outcomes.</p>
<div className="mt-10 text-center">
<a className="inline-block bg-slate-900 text-white px-6 py-3 rounded text-xs font-semibold tracking-wide hover:bg-slate-800 transition-colors" href="/case-results/">
                    SEE MORE RESULTS →
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-slate-400 text-xs font-semibold tracking-wide uppercase mb-4">Bay Area Criminal Defense Attorneys</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                YOU'RE NOT DEFINED BY YOUR CHARGES.
            </h3>
<p className="text-slate-300 text-lg font-light leading-relaxed mb-10">
                A criminal charge can feel like the end of everything — your career, your reputation, your family's trust. But being charged doesn't mean being convicted. And even when mistakes were made, you deserve a defense that treats you like a person, not a case number.
                <br/><br/>
                Our job is simple: fight aggressively for the best possible outcome while helping you protect what matters most. You're not alone in this.
            </p>
<a className="bg-white text-slate-900 px-8 py-3 rounded font-semibold text-sm tracking-wide hover:bg-slate-200 transition-colors" href="/contact/">
                TAKE BACK YOUR LIFE →
            </a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">Criminal Defense Lawyers in the Bay Area</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    WHATEVER YOU'RE FACING, WE'VE HANDLED IT BEFORE.
                </h3>
<p className="text-slate-600 font-light">
                    From first-time DUI charges to complex felony defense, from restraining order hearings to clearing your record — our team has the experience to fight for you. Select your location to find a lawyer near you.
                </p>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-slate-200 pb-1">
<button className="px-4 py-2 text-sm font-semibold text-slate-900 border-b-2 border-slate-900">OAKLAND</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800">FREMONT</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800">SAN JOSE</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800">STOCKTON</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800">FAIRFIELD</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800">SACRAMENTO</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">DUI</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">DOMESTIC VIOLENCE</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">DRUG CRIMES</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">SEX CRIMES</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">VIOLENT CRIMES</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">FELONY</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">MISDEMEANOR</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">WEAPONS</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">THEFT</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">JUVENILE CRIMES</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">RESTRAINING ORDERS</span>
</div>
<div className="p-6 border border-slate-100 rounded bg-slate-50 text-center hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<span className="text-sm font-semibold text-slate-800">EXPUNGEMENT</span>
</div>
</div>

<div className="bg-slate-900 rounded-lg p-8 flex flex-col md:flex-row items-center gap-6">
<div className="p-4 bg-white/10 rounded-full text-amber-400 shrink-0">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-white font-semibold text-lg mb-2">CRIMINAL RECORD THREATENING YOUR IMMIGRATION STATUS?</h4>
<p className="text-slate-300 text-sm font-light mb-4">
                        If you're an immigrant facing criminal charges — or dealing with a past conviction affecting your status — we can help. Jo-Anna Nieves is known throughout California for Motion to Vacate work under PC 1473.7.
                    </p>
<a className="text-white font-semibold text-xs border-b border-white pb-0.5 hover:opacity-80 transition-opacity" href="/contact/">PROTECT YOUR STATUS →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">What to Expect After an Arrest</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    THE PROCESS — AND WHERE WE COME IN.
                </h3>
<p className="text-slate-600 font-light mb-8">
                    If you've been arrested or are under investigation, here's what happens next. Understanding the steps can reduce anxiety, but having an attorney guide you through them changes the outcome.
                </p>
<a className="bg-slate-900 text-white px-6 py-3 rounded font-semibold text-xs tracking-wide hover:bg-slate-800 transition-colors inline-block" href="tel:5108797549">
                    GET HELP NOW — CALL 24/7
                </a>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="text-slate-300 font-bold text-xl">01</div>
<div>
<h4 className="text-slate-900 font-semibold mb-2">ARREST &amp; BOOKING</h4>
<p className="text-slate-600 text-sm leading-relaxed">You're taken into custody. Exercise your right to remain silent and call an attorney immediately. What you say here matters.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-slate-300 font-bold text-xl">02</div>
<div>
<h4 className="text-slate-900 font-semibold mb-2">ARRAIGNMENT</h4>
<p className="text-slate-600 text-sm leading-relaxed">Your first court appearance within 48 hours. Charges are read and bail is set. An attorney is critical here to set the tone.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-slate-300 font-bold text-xl">03</div>
<div>
<h4 className="text-slate-900 font-semibold mb-2">DISCOVERY &amp; INVESTIGATION</h4>
<p className="text-slate-600 text-sm leading-relaxed">We review all evidence, identify weaknesses in the prosecution's case, and build your defense foundation.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-slate-300 font-bold text-xl">04</div>
<div>
<h4 className="text-slate-900 font-semibold mb-2">PRE-TRIAL MOTIONS</h4>
<p className="text-slate-600 text-sm leading-relaxed">We file motions to suppress illegal evidence or challenge procedures, often narrowing the case before trial.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-slate-300 font-bold text-xl">05</div>
<div>
<h4 className="text-slate-900 font-semibold mb-2">NEGOTIATION</h4>
<p className="text-slate-600 text-sm leading-relaxed">We negotiate from strength. Most cases resolve here, but best deals come when prosecutors know you'll fight.</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-slate-300 font-bold text-xl">06</div>
<div>
<h4 className="text-slate-900 font-semibold mb-2">TRIAL</h4>
<p className="text-slate-600 text-sm leading-relaxed">If necessary, we take the case to a jury. Our team has deep trial experience to go the distance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">Bay Area Criminal Defense Law Firm</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">
                WHEN YOU CALL, WE ANSWER. WHEN YOU NEED US, WE'RE THERE.
            </h3>
<div className="grid md:grid-cols-3 gap-10">
<div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold mb-3">40+ PEOPLE WORKING FOR YOU</h4>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                        The Nieves Law Firm isn't a solo practice. We have 8 attorneys, a dedicated intake team, and operations staff. When your case needs attention, someone is available. Criminal cases don't wait for convenient hours.
                    </p>
</div>
<div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold mb-3">YOU WON'T GET LOST IN THE SHUFFLE</h4>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                        With some firms, you sign up and can't reach anyone. Here, we have a Client Engagement Attorney and intake team dedicated to keeping you informed. You'll never be left wondering what's happening.
                    </p>
</div>
<div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold mb-3">12 COUNTIES. 6 OFFICES. ONE TEAM.</h4>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                        We appear in courthouses from Alameda to Yolo. Wherever your case is filed, we know the courts, the procedures, and the local landscape.
                    </p>
</div>
</div>
<div className="mt-10 border-t border-slate-100 pt-8">
<a className="text-slate-900 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="tel:5108797549">
                    CALL US NOW — SOMEONE WILL ANSWER <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-slate-400 text-xs font-semibold tracking-wide uppercase mb-3">How Our Team Works</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        THE WAY CRIMINAL DEFENSE SHOULD WORK.
                    </h3>
<p className="text-slate-300 font-light leading-relaxed mb-8">
                        Our founding principle is simple: you deserve to be treated like a person, not a case number. We start before charges are filed, we keep you informed, and we prepare every case as if it's going to trial.
                    </p>
<a className="bg-white text-slate-900 px-6 py-3 rounded font-semibold text-xs tracking-wide hover:bg-slate-200 transition-colors" href="/contact/">
                        GET YOUR FREE CASE EVALUATION
                    </a>
</div>
<div className="space-y-6">
<div className="bg-white/5 p-6 rounded border border-white/10">
<h4 className="font-semibold mb-2 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:clock-circle-linear"></iconify-icon> WE START BEFORE YOU'RE CHARGED
                        </h4>
<p className="text-slate-400 text-xs leading-relaxed">The window to influence the outcome is right now. We engage early to prevent charges when possible.</p>
</div>
<div className="bg-white/5 p-6 rounded border border-white/10">
<h4 className="font-semibold mb-2 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:chat-round-dots-linear"></iconify-icon> WE ACTUALLY KEEP YOU INFORMED
                        </h4>
<p className="text-slate-400 text-xs leading-relaxed">No disappearing acts. You'll hear from us regularly, and when you reach out, you get a response.</p>
</div>
<div className="bg-white/5 p-6 rounded border border-white/10">
<h4 className="font-semibold mb-2 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:shield-up-linear"></iconify-icon> WE PROTECT MORE THAN YOUR FREEDOM
                        </h4>
<p className="text-slate-400 text-xs leading-relaxed">We fight for outcomes that protect your career, license, and reputation.</p>
</div>
<div className="bg-white/5 p-6 rounded border border-white/10">
<h4 className="font-semibold mb-2 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:gavel-linear"></iconify-icon> WE PREPARE EVERY CASE FOR TRIAL
                        </h4>
<p className="text-slate-400 text-xs leading-relaxed">Prosecutors negotiate differently when they know your attorney is ready to fight in court.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">Bay Area Criminal Defense Lawyers</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-12">
                8 ATTORNEYS. 40+ STAFF. ONE MISSION.
            </h3>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="bg-slate-100 aspect-[4/5] rounded mb-4 overflow-hidden relative">
<img alt="Jo-Anna Nieves" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h4 className="text-slate-900 font-semibold text-lg">JO-ANNA NIEVES, ESQ.</h4>
<p className="text-slate-500 text-xs uppercase tracking-wide mb-3">Founding Attorney</p>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Former prosecutor turned defense attorney. Trusted legal analyst for ABC News &amp; Dr. Phil. Known for Motion to Vacate work protecting immigrants.
                    </p>
<a className="text-xs font-semibold text-slate-900 border-b border-slate-300 pb-0.5" href="/our-firm/jo-anna-nieves-esq/">View Full Bio</a>
</div>

<div className="group">
<div className="bg-slate-100 aspect-[4/5] rounded mb-4 overflow-hidden relative">
<img alt="Darryl Stallworth" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h4 className="text-slate-900 font-semibold text-lg">DARRYL STALLWORTH, ESQ.</h4>
<p className="text-slate-500 text-xs uppercase tracking-wide mb-3">Managing Attorney</p>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        32+ years experience. 60+ jury trials. Former Alameda County prosecutor using that experience to defend the accused.
                    </p>
<a className="text-xs font-semibold text-slate-900 border-b border-slate-300 pb-0.5" href="/our-firm/darryl-stallworth/">View Full Bio</a>
</div>

<div className="group bg-slate-50 border border-slate-100 rounded p-8 flex flex-col justify-center">
<h4 className="text-slate-900 font-semibold text-lg mb-2">THE FULL TEAM</h4>
<p className="text-slate-500 text-xs uppercase tracking-wide mb-6">8 Attorneys + 30+ Support Staff</p>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        Michael Levinsohn, Grace Goodman, Mariah Massa, Christie Fram, Andrew Nugent, Alejandra Camacho — plus paralegals and intake staff across six offices.
                    </p>
<a className="bg-slate-900 text-white px-6 py-3 rounded font-semibold text-xs text-center hover:bg-slate-800 transition-colors" href="/our-firm/">
                        MEET EVERYONE →
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center mb-12">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3">Top-Rated Bay Area Criminal Lawyer</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-6">DON'T JUST TAKE OUR WORD FOR IT.</h3>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar px-6 mask-linear">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded border border-slate-200 shadow-sm">
<div className="flex text-amber-500 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm italic mb-6">"They saved my career. I was terrified, but the team at Nieves Law Firm explained everything and got my charges dismissed. I can't thank them enough."</p>
<div className="flex items-center gap-2 opacity-50">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Google Review</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded border border-slate-200 shadow-sm">
<div className="flex text-amber-500 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm italic mb-6">"Jo-Anna and her team are incredible. Communication was excellent throughout the whole process. I never felt left in the dark."</p>
<div className="flex items-center gap-2 opacity-50">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Google Review</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded border border-slate-200 shadow-sm">
<div className="flex text-amber-500 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm italic mb-6">"Professional, aggressive, and compassionate. They handled my DUI case with expertise and got a much better outcome than I expected."</p>
<div className="flex items-center gap-2 opacity-50">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Google Review</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded border border-slate-200 shadow-sm">
<div className="flex text-amber-500 mb-4">★★★★★</div>
<p className="text-slate-600 text-sm italic mb-6">"Worth every penny. The peace of mind knowing I had a team of 40 people behind me was invaluable. Highly recommend."</p>
<div className="flex items-center gap-2 opacity-50">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs font-medium">Google Review</span>
</div>
</div>
</div>
<div className="text-center mt-8">
<a className="text-slate-900 text-sm font-semibold border-b border-slate-900 pb-0.5" href="/testimonial/">READ MORE REVIEWS</a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-slate-500 text-xs font-semibold tracking-wide uppercase mb-3 text-center">Experienced Criminal Defense</h2>
<h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">QUESTIONS? WE HAVE ANSWERS.</h3>
<div className="space-y-4">
<details className="group bg-slate-50 rounded border border-slate-100">
<summary className="flex justify-between items-center p-5 font-medium text-slate-900 cursor-pointer">
                        What should I do immediately after being arrested?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        Stay calm. Exercise your right to remain silent. Do not consent to searches. Contact a criminal defense attorney immediately. What you say in the first 24 hours is critical.
                    </div>
</details>
<details className="group bg-slate-50 rounded border border-slate-100">
<summary className="flex justify-between items-center p-5 font-medium text-slate-900 cursor-pointer">
                        How much does a criminal defense attorney cost?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        Fees vary based on complexity and charges. We offer free consultations to evaluate your case and payment plans for flexibility. The cost of a conviction is almost always higher than proper representation.
                    </div>
</details>
<details className="group bg-slate-50 rounded border border-slate-100">
<summary className="flex justify-between items-center p-5 font-medium text-slate-900 cursor-pointer">
                        Can charges be dropped or dismissed?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        Yes. Charges can be dropped before filing, dismissed after filing, or result in acquittal. We strive for dismissals by attacking evidence and procedure.
                    </div>
</details>
<details className="group bg-slate-50 rounded border border-slate-100">
<summary className="flex justify-between items-center p-5 font-medium text-slate-900 cursor-pointer">
                        Can a conviction affect my immigration status?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        Yes, severely. Certain convictions trigger deportation. If you aren't a citizen, you need an attorney who understands the intersection of criminal and immigration law. This is our specialty.
                    </div>
</details>
<details className="group bg-slate-50 rounded border border-slate-100">
<summary className="flex justify-between items-center p-5 font-medium text-slate-900 cursor-pointer">
                        What is a Motion to Vacate (PC 1473.7)?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        It allows you to vacate a conviction if your prior attorney failed to advise you on immigration consequences. This can clear the path for citizenship or prevent deportation.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-slate-400 text-xs font-semibold tracking-wide uppercase mb-3">Bay Area Criminal Lawyer Near Me</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        12 COUNTIES. 6 OFFICES.<br/>READY TO FIGHT.
                    </h3>
<p className="text-slate-300 font-light mb-8">
                        From Oakland to Sacramento, San Francisco to Stockton. We appear in courthouses across the region every day.
                    </p>
<a className="bg-white text-slate-900 px-6 py-3 rounded font-semibold text-xs tracking-wide hover:bg-slate-200 transition-colors" href="/courts/">
                        FIND YOUR COURTHOUSE
                    </a>
</div>
<div className="grid grid-cols-2 gap-8 text-sm">
<div>
<h4 className="text-amber-500 font-semibold mb-4 text-xs uppercase tracking-wider">Bay Area</h4>
<ul className="space-y-2 text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">Alameda County</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contra Costa County</a></li>
<li><a className="hover:text-white transition-colors" href="#">San Francisco County</a></li>
<li><a className="hover:text-white transition-colors" href="#">Marin County</a></li>
<li><a className="hover:text-white transition-colors" href="#">Santa Clara County</a></li>
<li><a className="hover:text-white transition-colors" href="#">San Mateo County</a></li>
</ul>
</div>
<div>
<h4 className="text-amber-500 font-semibold mb-4 text-xs uppercase tracking-wider">Central Valley</h4>
<ul className="space-y-2 text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">Sacramento County</a></li>
<li><a className="hover:text-white transition-colors" href="#">Solano County</a></li>
<li><a className="hover:text-white transition-colors" href="#">San Joaquin County</a></li>
<li><a className="hover:text-white transition-colors" href="#">Yolo County</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs text-slate-400 pt-8 border-t border-white/10">
<div><strong className="text-white block mb-1">OAKLAND (HQ)</strong>160 Franklin St.<br/>Oakland, CA</div>
<div><strong className="text-white block mb-1">FREMONT</strong>41111 Mission Blvd.<br/>Fremont, CA</div>
<div><strong className="text-white block mb-1">SAN JOSE</strong>6840 Vía del Oro<br/>San Jose, CA</div>
<div><strong className="text-white block mb-1">STOCKTON</strong>11 S San Joaquin St.<br/>Stockton, CA</div>
<div><strong className="text-white block mb-1">FAIRFIELD</strong>490 Chadbourne Rd.<br/>Fairfield, CA</div>
<div><strong className="text-white block mb-1">SACRAMENTO</strong>1100 11th St.<br/>Sacramento, CA</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 text-center px-6">
<h3 className="text-slate-900 text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            YOUR FUTURE IS WORTH FIGHTING FOR.
        </h3>
<p className="text-slate-600 text-lg font-light mb-10 max-w-xl mx-auto">
            If you or someone you care about is facing criminal charges, the next decision matters. Call us for a free, confidential consultation.
        </p>
<div className="flex flex-col items-center gap-6">
<a className="bg-slate-900 text-white text-xl px-10 py-5 rounded-lg font-semibold tracking-wide hover:bg-slate-800 transition-transform hover:-translate-y-1 shadow-lg shadow-slate-900/10" href="tel:5108797549">
                CALL (510) 879-7549
            </a>
<div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                Available 24/7 · 100% Confidential · Se Habla Español
            </div>
<a className="text-slate-900 text-sm font-semibold border-b border-slate-300 pb-0.5 hover:border-slate-900" href="/contact/">
                Or schedule online →
            </a>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200 text-center">
<div className="max-w-7xl mx-auto px-6">
<p className="text-slate-400 text-xs">
                © The Nieves Law Firm, APC. All rights reserved. Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
            </p>
</div>
</footer>

    </>
  );
}
