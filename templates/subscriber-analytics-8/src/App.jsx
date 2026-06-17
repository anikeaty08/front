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
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-neutral-800">
<div className="flex items-center gap-8">

<a aria-label="Home" className="flex items-center justify-center relative group md:mr-4" href="#">
<svg className="w-14 h-14 drop-shadow-xl group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="goldGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#FEF08A"></stop>
<stop offset="35%" stop-color="#EAB308"></stop>
<stop offset="100%" stop-color="#A16207"></stop>
</lineargradient>
</defs>
<path d="M12 2L3 5.5v5.5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5.5L12 2z" fill="url(#goldGradient)" stroke="#FEF9C3" strokeWidth="0.75"></path>
</svg>
<span className="absolute text-white font-semibold text-[15px] tracking-widest pb-1 pointer-events-none drop-shadow-md">ASI</span>
</a>
<a className="text-lg font-normal tracking-tight hidden md:block hover:text-orange-500 transition-colors" href="#features">Platform</a>
<a className="text-lg font-normal tracking-tight hidden md:block hover:text-orange-500 transition-colors" href="#process">How it Works</a>
<a className="text-lg font-normal tracking-tight hidden md:block hover:text-orange-500 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-6">
<button className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-transparent hover:shadow-md hover:text-orange-500 transition-all bg-white/50 backdrop-blur-sm text-xl">
<iconify-icon icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-lg font-normal tracking-tight bg-neutral-800 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors shadow-lg shadow-neutral-800/20" href="#demo">Book Demo</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] flex flex-col justify-between overflow-hidden rounded-b-[2.5rem] bg-yellow-400">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-300 via-yellow-400 to-yellow-500"></div>
<div className="relative z-10 pt-32 px-6 md:px-12 flex-1 flex flex-col justify-center items-center text-center">
<span className="text-xl font-normal text-neutral-800 mb-4 capitalize">Advanced Subscriber Intelligence</span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-none uppercase drop-shadow-sm">
                Clarity.
            </h1>
</div>
<div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row justify-between items-end gap-8 text-neutral-800">
<div className="flex items-center gap-4 max-w-sm bg-white/90 backdrop-blur-md rounded-full p-2 pr-6 shadow-xl shadow-yellow-600/10 border border-white">
<div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-orange-500 text-2xl">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xl font-normal tracking-tight">Stop guessing. Start growing.</p>
</div>
<div className="max-w-xl text-right md:text-left bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-lg shadow-yellow-600/5">
<p className="text-xl text-neutral-700 font-normal leading-relaxed tracking-tight">Transform raw newsletter data into predictive intelligence. Understand your subscribers, maximize lifetime value, and accelerate your publication's growth.</p>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="features">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-3 flex items-center gap-3">
<span className="text-2xl text-orange-500 flex items-center justify-center"><iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="text-lg font-normal italic text-orange-500 capitalize">Beyond Open Rates</span>
</div>
<div className="md:col-span-9">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-neutral-800">
                    We turn your ESP data into your biggest unfair advantage. Go beyond basic metrics to understand the true value and hidden behavior of every reader.
                </h2>
</div>
</div>
</section>

<section className="pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-yellow-400 rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square lg:aspect-auto text-neutral-900 border border-yellow-300 shadow-xl shadow-yellow-500/10">
<div className="flex justify-between items-start">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-orange-500 shadow-sm text-3xl">
<iconify-icon icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex -space-x-3">
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 border-yellow-400" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-4 border-yellow-400" src="https://i.pravatar.cc/100?img=2"/>
</div>
</div>
<div className="mt-12">
<h3 className="text-4xl font-normal tracking-tight mb-6 text-neutral-900">Identify your most valuable readers and predict churn before it impacts MRR.</h3>
<div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 mt-4 border border-white">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
<span className="text-lg font-normal tracking-tight text-neutral-800">Predictive Scoring</span>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden aspect-square lg:aspect-auto relative group shadow-xl shadow-neutral-200/50 border-8 border-white bg-white">
<img alt="Data Flow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-yellow-400/0 transition-colors duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white/90 backdrop-blur-md border border-white text-neutral-800 px-8 py-4 rounded-full text-xl font-normal tracking-tight shadow-lg shadow-black/5">Subscriber LTV</span>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square lg:aspect-auto border border-yellow-200 shadow-xl shadow-yellow-500/5">
<div className="flex justify-between items-start">
<div>
<span className="text-8xl font-normal tracking-tight text-neutral-800">100<span className="text-5xl">%</span></span>
<p className="text-xl text-neutral-500 mt-2 font-normal tracking-tight">Data Synchronization</p>
</div>
<div className="flex items-center gap-2 text-lg font-normal text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
<span className="text-xl flex items-center"><iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="tracking-tight">Real-time</span>
</div>
</div>

<div className="flex items-end gap-3 mt-12 h-32">
<div className="w-full bg-yellow-100 rounded-t-full h-1/4"></div>
<div className="w-full bg-yellow-200 rounded-t-full h-2/4"></div>
<div className="w-full bg-yellow-400 rounded-t-full h-3/4"></div>
<div className="w-full bg-orange-400 rounded-t-full h-full relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-orange-500"></div>
</div>
<div className="w-full bg-yellow-200 rounded-t-full h-1/2"></div>
</div>
<div className="flex justify-between text-lg text-neutral-400 mt-4 font-normal tracking-tight">
<span>Mon</span>
<span>Wed</span>
<span>Fri</span>
</div>
</div>
</div>
<div className="flex justify-between px-6 mt-8 text-lg text-neutral-500 font-normal tracking-tight">
<span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> Churn Risk Reduced</span>
<span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-orange-400"></div> Peak Engagement Found</span>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="process">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-lg font-normal text-orange-600 mb-6 inline-block border border-orange-200 bg-orange-50 rounded-full px-5 py-2 shadow-sm tracking-tight">The Process</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-800 leading-tight">
                From raw ESP data to refined growth strategy in minutes.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-yellow-200 -z-10 -translate-y-1/2"></div>

<div className="bg-white rounded-[2.5rem] p-10 border border-yellow-200 shadow-lg shadow-yellow-500/5 relative group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-yellow-400 text-neutral-900 rounded-full flex items-center justify-center text-2xl font-normal tracking-tight absolute -top-7 left-10 shadow-sm border-4 border-yellow-50">1</div>
<div className="text-3xl text-orange-500 mb-6 mt-4"><iconify-icon icon="solar:plug-circle-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-2xl font-normal tracking-tight text-neutral-800 mb-4">Connect Your ESP</h3>
<p className="text-lg text-neutral-600 font-normal tracking-tight leading-relaxed">Securely link your current newsletter platform. We instantly ingest historical and real-time subscriber activity without disrupting your workflow.</p>
</div>

<div className="bg-white rounded-[2.5rem] p-10 border border-yellow-200 shadow-lg shadow-yellow-500/5 relative group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-yellow-400 text-neutral-900 rounded-full flex items-center justify-center text-2xl font-normal tracking-tight absolute -top-7 left-10 shadow-sm border-4 border-yellow-50">2</div>
<div className="text-3xl text-orange-500 mb-6 mt-4"><iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-2xl font-normal tracking-tight text-neutral-800 mb-4">Analyze &amp; Score</h3>
<p className="text-lg text-neutral-600 font-normal tracking-tight leading-relaxed">Our engine normalizes the data, applies machine learning models, and automatically clusters your audience by behavior, LTV, and churn risk.</p>
</div>

<div className="bg-white rounded-[2.5rem] p-10 border border-yellow-200 shadow-lg shadow-yellow-500/5 relative group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-yellow-400 text-neutral-900 rounded-full flex items-center justify-center text-2xl font-normal tracking-tight absolute -top-7 left-10 shadow-sm border-4 border-yellow-50">3</div>
<div className="text-3xl text-orange-500 mb-6 mt-4"><iconify-icon icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon></div>
<h3 className="text-2xl font-normal tracking-tight text-neutral-800 mb-4">Grow &amp; Retain</h3>
<p className="text-lg text-neutral-600 font-normal tracking-tight leading-relaxed">Export hyper-targeted segments to run re-engagement campaigns, dynamic content insertions, and churn-prevention workflows.</p>
</div>
</div>
</section>

<section className="py-24 bg-white rounded-[3rem] mx-2 md:mx-6 mb-24 px-6 md:px-12 flex flex-col items-center shadow-xl shadow-yellow-500/5 border border-yellow-100">
<div className="inline-block border border-orange-200 bg-orange-50 rounded-full px-6 py-2 text-lg font-normal text-orange-600 mb-12 tracking-tight">
            Publisher Success
        </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-center max-w-5xl leading-tight mb-20 text-neutral-800">
            "Advanced Subscriber Intelligence gives us the exact data we need to double down on what works and cut what doesn't. It's the ultimate growth lever."
        </h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border-[6px] border-white shadow-md group bg-yellow-50">
<img alt="Working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-neutral-900 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-normal tracking-tight">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div> Rescue Churners
                </div>
</div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border-[6px] border-white shadow-md group bg-yellow-50">
<img alt="Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 flex items-center gap-2 text-neutral-900 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-normal tracking-tight">
<div className="w-2 h-2 rounded-full bg-neutral-900"></div> Boost Engagement
                </div>
</div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-yellow-50 flex items-center justify-center border-[6px] border-white shadow-sm">
<div className="bg-white border border-yellow-200 px-8 py-4 rounded-full text-lg font-normal tracking-tight shadow-sm text-orange-600 flex items-center">
<div className="w-2.5 h-2.5 inline-block rounded-full bg-yellow-400 mr-3 animate-pulse"></div> Calculating LTV
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="teams">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

<div className="lg:col-span-5 flex flex-col">
<span className="text-lg font-normal text-orange-600 mb-6 border border-orange-200 bg-orange-50 rounded-full px-5 py-2 w-fit shadow-sm tracking-tight">Intelligence Modules</span>
<h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-8 text-neutral-800 leading-tight">
                    Core<br/>Platform
                </h2>
<p className="text-xl tracking-tight text-neutral-600 mb-12 max-w-md leading-relaxed">
                    Built to scale with your publication. Our system ensures your subscriber analytics are processed efficiently, giving you real-time insights to drive sponsorship and subscription revenue.
                </p>
<div className="space-y-8 flex-1">
<div className="flex items-center gap-6 group bg-white p-4 rounded-3xl border border-transparent hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all cursor-pointer">
<div className="w-20 h-20 rounded-2xl bg-yellow-50 border-4 border-yellow-100 group-hover:border-yellow-300 transition-colors flex items-center justify-center text-3xl text-orange-500">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-2xl font-normal tracking-tight text-neutral-800">Engagement Scoring</h4>
<p className="text-lg text-orange-500 font-normal mt-1 tracking-tight">Identify superfans</p>
</div>
</div>
<div className="flex items-center gap-6 group bg-white p-4 rounded-3xl border border-transparent hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all cursor-pointer">
<div className="w-20 h-20 rounded-2xl bg-yellow-50 border-4 border-yellow-100 group-hover:border-yellow-300 transition-colors flex items-center justify-center text-3xl text-neutral-400 group-hover:text-orange-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-2xl font-normal tracking-tight text-neutral-800">Churn Prediction</h4>
<p className="text-lg text-neutral-500 font-normal mt-1 tracking-tight">Save at-risk readers</p>
</div>
</div>
<div className="flex items-center gap-6 group bg-white p-4 rounded-3xl border border-transparent hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-500/5 transition-all cursor-pointer">
<div className="w-20 h-20 rounded-2xl bg-yellow-50 border-4 border-yellow-100 group-hover:border-yellow-300 transition-colors flex items-center justify-center text-3xl text-neutral-400 group-hover:text-orange-400">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-2xl font-normal tracking-tight text-neutral-800">LTV Analytics</h4>
<p className="text-lg text-neutral-500 font-normal mt-1 tracking-tight">Revenue per subscriber</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-6">
<div className="bg-neutral-800 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-2xl shadow-neutral-900/10">
<div>
<h3 className="text-4xl md:text-5xl font-normal tracking-tight mb-3">Data Science Engine</h3>
<p className="text-xl text-neutral-300 tracking-tight">Powering predictive models for newsletters.</p>
</div>
<button className="bg-yellow-400 text-neutral-900 hover:bg-yellow-500 transition-colors rounded-full px-8 py-4 text-lg font-normal tracking-tight whitespace-nowrap shadow-md">
                        View Specs
                    </button>
</div>
<div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-yellow-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-lg shadow-yellow-500/5">
<div>
<h3 className="text-3xl font-normal tracking-tight mb-2 text-neutral-800">Audience Processing</h3>
<div className="flex items-center gap-8 mt-6">
<div className="flex flex-col">
<span className="text-lg text-orange-500 font-normal mb-1 tracking-tight">Accuracy</span>
<span className="text-xl font-normal tracking-tight text-neutral-800">99.9%</span>
</div>
<div className="flex flex-col">
<span className="text-lg text-orange-500 font-normal mb-1 tracking-tight">Speed</span>
<span className="text-xl font-normal tracking-tight text-neutral-800">Real-time</span>
</div>
</div>
</div>
<button className="bg-neutral-800 text-white hover:bg-neutral-700 transition-colors rounded-full px-8 py-4 text-lg font-normal tracking-tight whitespace-nowrap shadow-md">
                        Read Whitepaper
                    </button>
</div>
<div className="bg-yellow-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border border-yellow-200 shadow-sm">
<div>
<h3 className="text-3xl font-normal tracking-tight mb-3 text-neutral-800">Secure Infrastructure</h3>
<p className="text-xl text-neutral-500 tracking-tight">Your audience data is heavily protected.</p>
</div>
<div className="flex -space-x-4">
<div className="w-16 h-16 rounded-full border-4 border-yellow-50 bg-white flex items-center justify-center text-xl text-neutral-400 shadow-sm"><iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-16 h-16 rounded-full border-4 border-yellow-50 bg-white flex items-center justify-center text-xl text-neutral-400 shadow-sm"><iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="w-16 h-16 rounded-full border-4 border-yellow-50 bg-yellow-400 flex items-center justify-center text-lg font-normal tracking-tight text-neutral-900 z-10 shadow-sm">SOC2</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white rounded-[3rem] mx-2 md:mx-6 mb-24 px-6 md:px-12 flex flex-col items-center shadow-2xl shadow-neutral-900/20 overflow-hidden relative border border-neutral-800">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-6">Plays nicely with your ESP.</h2>
<p className="text-xl text-neutral-400 font-normal tracking-tight">One-click integrations with the platforms you already rely on to publish and monetize.</p>
</div>
<div className="relative z-10 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
<div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-full px-6 py-4 flex items-center gap-3 hover:bg-neutral-800 hover:border-yellow-500/50 transition-all cursor-pointer group">
<span className="text-2xl text-neutral-400 group-hover:text-yellow-400 transition-colors flex items-center"><iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="text-lg font-normal tracking-tight">ConvertKit</span>
</div>
<div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-full px-6 py-4 flex items-center gap-3 hover:bg-neutral-800 hover:border-yellow-500/50 transition-all cursor-pointer group">
<span className="text-2xl text-neutral-400 group-hover:text-yellow-400 transition-colors flex items-center"><iconify-icon icon="solar:mailbox-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="text-lg font-normal tracking-tight">Mailchimp</span>
</div>
<div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-full px-6 py-4 flex items-center gap-3 hover:bg-neutral-800 hover:border-yellow-500/50 transition-all cursor-pointer group">
<span className="text-2xl text-neutral-400 group-hover:text-yellow-400 transition-colors flex items-center"><iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="text-lg font-normal tracking-tight">Beehiiv</span>
</div>
<div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-full px-6 py-4 flex items-center gap-3 hover:bg-neutral-800 hover:border-yellow-500/50 transition-all cursor-pointer group">
<span className="text-2xl text-neutral-400 group-hover:text-yellow-400 transition-colors flex items-center"><iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="text-lg font-normal tracking-tight">Substack</span>
</div>
<div className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-full px-6 py-4 flex items-center gap-3 hover:bg-neutral-800 hover:border-yellow-500/50 transition-all cursor-pointer group">
<span className="text-2xl text-neutral-400 group-hover:text-yellow-400 transition-colors flex items-center"><iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon></span>
<span className="text-lg font-normal tracking-tight">Custom APIs</span>
</div>
</div>
</section>

<section className="py-16 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-yellow-200">
<div className="flex items-center justify-between mb-16">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-800">Trusted by Top Newsletter Operators</h2>
<a className="text-lg font-normal tracking-tight text-orange-500 hover:text-orange-600 flex items-center gap-2 transition-colors bg-orange-50 px-5 py-2 rounded-full" href="#">
                View Case Studies <span className="flex items-center text-base"><iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-white shadow-sm mb-4 flex items-center justify-center border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg text-3xl text-neutral-400 group-hover:text-orange-500">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Daily News</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-white shadow-sm mb-4 flex items-center justify-center border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg text-3xl text-neutral-400 group-hover:text-orange-500">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Tech Digest</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-white shadow-sm mb-4 flex items-center justify-center border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg text-3xl text-neutral-400 group-hover:text-orange-500">
<iconify-icon icon="solar:podcast-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Media Co.</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-white shadow-sm mb-4 flex items-center justify-center border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg text-3xl text-neutral-400 group-hover:text-orange-500">
<iconify-icon icon="solar:ticker-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Finance Weekly</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full bg-white shadow-sm mb-4 flex items-center justify-center border-4 border-transparent group-hover:border-yellow-400 transition-all group-hover:shadow-lg text-3xl text-neutral-400 group-hover:text-orange-500">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tight text-neutral-700">Creator Hub</span>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-24 h-24 rounded-full mb-4 overflow-hidden flex items-center justify-center bg-yellow-200 text-orange-600 font-normal border-4 border-transparent group-hover:border-yellow-400 transition-all text-xl group-hover:shadow-lg tracking-tight">
                    +150
                </div>
<span className="text-xl font-normal tracking-tight text-neutral-500">More</span>
</div>
</div>
</section>

<section className="py-16 w-full overflow-hidden">
<div className="flex gap-6 px-6 md:px-12 w-[150%] md:w-[120%] lg:w-full">
<div className="h-72 md:h-[28rem] flex-1 rounded-[2.5rem] overflow-hidden shadow-xl shadow-yellow-500/10 border-[6px] border-white relative bg-white">
<img alt="Data Flow" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-yellow-400/20 mix-blend-multiply"></div>
</div>
<div className="h-72 md:h-[28rem] flex-1 rounded-[2.5rem] overflow-hidden hidden md:block shadow-xl shadow-yellow-500/10 border-[6px] border-white relative bg-white">
<img alt="Analytics View" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-orange-400/20 mix-blend-multiply"></div>
</div>
<div className="h-72 md:h-[28rem] flex-1 rounded-[2.5rem] overflow-hidden bg-yellow-400 flex items-center justify-center p-12 text-center shadow-xl shadow-yellow-500/10 border-[6px] border-white">
<h3 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">Sustainable revenue built on data.</h3>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-800 mb-8">Transparent pricing for growing newsletters.</h2>

<div className="inline-flex items-center p-1.5 bg-yellow-100 rounded-full border border-yellow-200">
<button className="px-8 py-3 rounded-full bg-white text-neutral-800 font-normal tracking-tight text-lg shadow-sm border border-yellow-50">Monthly</button>
<button className="px-8 py-3 rounded-full text-neutral-500 hover:text-neutral-800 transition-colors font-normal tracking-tight text-lg">Annually <span className="text-xs text-orange-500 ml-1 font-medium bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-yellow-200 shadow-sm flex flex-col">
<h3 className="text-2xl font-normal tracking-tight text-neutral-800 mb-2">Pro</h3>
<p className="text-lg text-neutral-500 tracking-tight mb-8">For serious operators and growing publications.</p>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-5xl font-normal tracking-tight text-neutral-800">$49</span>
<span className="text-lg text-neutral-500 tracking-tight">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-700">
<span className="text-orange-500 text-xl flex items-center"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></span> Up to 25,000 subscribers
                    </li>
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-700">
<span className="text-orange-500 text-xl flex items-center"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></span> Deep Engagement Scoring
                    </li>
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-700">
<span className="text-orange-500 text-xl flex items-center"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></span> Churn Risk Analytics
                    </li>
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-700">
<span className="text-orange-500 text-xl flex items-center"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></span> Standard ESP Integrations
                    </li>
</ul>
<button className="w-full py-4 rounded-full border border-yellow-300 text-neutral-800 text-lg font-normal tracking-tight hover:bg-yellow-50 transition-colors">Start 14-Day Free Trial</button>
</div>

<div className="bg-yellow-400 rounded-[2.5rem] p-10 md:p-12 border border-yellow-300 shadow-xl shadow-yellow-500/20 flex flex-col relative overflow-hidden">

<div className="absolute top-0 right-0 p-4">
<div className="bg-white text-orange-600 text-xs tracking-wider uppercase font-medium px-4 py-1.5 rounded-full shadow-sm">Popular</div>
</div>
<h3 className="text-2xl font-normal tracking-tight text-neutral-900 mb-2">Scale</h3>
<p className="text-lg text-neutral-700 tracking-tight mb-8">Advanced tools for established media brands.</p>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-5xl font-normal tracking-tight text-neutral-900">$149</span>
<span className="text-lg text-neutral-700 tracking-tight">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-800">
<span className="text-white text-xl flex items-center"><iconify-icon icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon></span> Up to 100,000 subscribers
                    </li>
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-800">
<span className="text-white text-xl flex items-center"><iconify-icon icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon></span> Subscriber LTV Modeling
                    </li>
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-800">
<span className="text-white text-xl flex items-center"><iconify-icon icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon></span> Custom API Access &amp; Webhooks
                    </li>
<li className="flex items-center gap-3 text-lg font-normal tracking-tight text-neutral-800">
<span className="text-white text-xl flex items-center"><iconify-icon icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon></span> Dedicated Success Manager
                    </li>
</ul>
<button className="w-full py-4 rounded-full bg-neutral-900 text-white text-lg font-normal tracking-tight hover:bg-neutral-800 transition-colors shadow-md shadow-neutral-900/10">Upgrade to Scale</button>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-3xl mx-auto border-t border-yellow-200">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-800 mb-12 text-center">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-[2rem] border border-yellow-200 p-6 md:p-8 cursor-pointer shadow-sm hover:border-yellow-300 transition-colors">
<summary className="text-xl md:text-2xl tracking-tight font-normal text-neutral-800 flex justify-between items-center outline-none">
                    How long does setup take?
                    <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180 flex items-center text-2xl">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pt-6 mt-4 border-t border-yellow-100">
<p className="text-lg text-neutral-600 font-normal tracking-tight leading-relaxed">Most publishers are fully integrated in under 10 minutes. Simply authorize your newsletter platform via our secure portal, and our system immediately begins syncing your historical data.</p>
</div>
</details>

<details className="group bg-white rounded-[2rem] border border-yellow-200 p-6 md:p-8 cursor-pointer shadow-sm hover:border-yellow-300 transition-colors">
<summary className="text-xl md:text-2xl tracking-tight font-normal text-neutral-800 flex justify-between items-center outline-none">
                    Is my subscriber data secure?
                    <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180 flex items-center text-2xl">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pt-6 mt-4 border-t border-yellow-100">
<p className="text-lg text-neutral-600 font-normal tracking-tight leading-relaxed">Yes. We are SOC2 compliant and utilize enterprise-grade encryption for data both at rest and in transit. We never sell or share your audience data with third parties.</p>
</div>
</details>

<details className="group bg-white rounded-[2rem] border border-yellow-200 p-6 md:p-8 cursor-pointer shadow-sm hover:border-yellow-300 transition-colors">
<summary className="text-xl md:text-2xl tracking-tight font-normal text-neutral-800 flex justify-between items-center outline-none">
                    Can I export the insights back to my ESP?
                    <span className="text-orange-500 transition-transform duration-300 group-open:rotate-180 flex items-center text-2xl">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="pt-6 mt-4 border-t border-yellow-100">
<p className="text-lg text-neutral-600 font-normal tracking-tight leading-relaxed">Absolutely. All custom segments, engagement scores, and predictive models can be automatically synced back to your ESP (like Beehiiv or Mailchimp) to trigger your automated flows.</p>
</div>
</details>
</div>
</section>

<footer className="bg-yellow-100 text-neutral-800 rounded-t-[3rem] mt-12 px-6 py-16 md:py-24 border-t border-yellow-200" id="demo">
<div className="max-w-screen-2xl mx-auto md:px-6">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 border-b border-yellow-200 pb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight max-w-2xl leading-tight text-neutral-900">
                    Unlock your audience potential or schedule a demo with an expert to learn more.
                </h2>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
<span className="text-lg text-neutral-500 font-normal tracking-tight whitespace-nowrap hidden sm:block">Connect with us</span>
<div className="flex gap-3 w-full sm:w-auto">
<a className="flex-1 sm:flex-none border border-yellow-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 rounded-full px-8 py-4 text-lg font-normal tracking-tight text-center transition-all shadow-sm" href="#">LinkedIn</a>
<a className="flex-1 sm:flex-none border border-yellow-300 bg-white hover:bg-yellow-400 hover:border-yellow-400 rounded-full px-8 py-4 text-lg font-normal tracking-tight text-center transition-all shadow-sm" href="#">X</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
<div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-medium mb-2 uppercase tracking-wider">Product</span>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Platform</a>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Integrations</a>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Pricing</a>
</div>
<div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-medium mb-2 uppercase tracking-wider">Company</span>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">About Us</a>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Careers</a>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Contact</a>
</div>
<div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-medium mb-2 uppercase tracking-wider">Resources</span>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Blog</a>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">Case Studies</a>
<a className="text-xl font-normal tracking-tight text-neutral-600 hover:text-orange-500 transition-colors" href="#">API Reference</a>
</div>

<div className="col-span-2 lg:col-span-2 flex flex-col gap-5">
<span className="text-lg text-orange-600 font-medium mb-2 uppercase tracking-wider">Get Started</span>
<div className="flex items-center gap-2 bg-white border border-yellow-300 rounded-full p-2 focus-within:border-orange-400 transition-colors shadow-sm">
<input className="bg-transparent border-none outline-none text-xl font-normal tracking-tight text-neutral-800 px-6 w-full placeholder:text-neutral-400" placeholder="Work email" type="email"/>
<button className="bg-neutral-800 text-white hover:bg-neutral-700 rounded-full px-8 py-4 text-lg font-normal tracking-tight transition-colors shadow-md">
                            Try for Free
                        </button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-yellow-200 text-lg text-neutral-500 font-normal tracking-tight gap-4">
<p>© 2024 Advanced Subscriber Intelligence.</p>
<div className="flex gap-8">
<a className="hover:text-neutral-800 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-800 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
