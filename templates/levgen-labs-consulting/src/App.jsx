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
      

<div className="bg-noise"></div>
<div className="blob-cont">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all">
<div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

<a className="text-white font-medium tracking-tight text-xl flex items-center gap-2" href="#">
                LevGen Labs <span className="text-neutral-500 font-normal">Consulting</span>
</a>
<div className="flex items-center gap-8">
<a className="hidden md:block text-sm text-neutral-400 hover:text-white transition-colors" href="#process">The Process</a>
<a className="hidden md:block text-sm text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded hover:bg-neutral-200 transition-colors" href="#book-call">Book Consultation</a>
</div>
</div>
</nav>

<header className="relative pt-36 pb-24 px-6">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid -z-10"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting 6 new clients in 2026
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-8">
                Turn organic content into a <br className="hidden md:block"/>
<span className="text-gradient">reliable revenue system.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                We install a 90-day growth operation for consultants and service businesses. Watch how we turn attention into inquiries with organic content.
            </p>

<div className="relative w-full max-w-4xl mx-auto mb-10">

<div className="relative aspect-video w-full bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/80 group cursor-pointer ring-1 ring-white/5 hover:ring-white/10 transition-all">
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<i className="w-10 h-10 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 bg-gradient-to-b from-black/80 to-transparent">
<span className="text-xs font-mono text-white/70 tracking-widest">LEVGEN_LABS_VSL_2026.mp4</span>
</div>

<div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center text-neutral-600">
<div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-transparent to-black/40"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
</div>
</div>
<div className="mt-8 flex flex-col items-center gap-4">
<p className="text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
<span className="text-white font-medium">The Compounding Effect:</span> unlike ads that stop when you stop paying, organic assets last forever.
                    </p>
</div>
</div>
</div>

<div className="mt-24 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div>
<p className="text-3xl font-medium text-white tracking-tight">1.2B+</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider font-medium">Views Generated</p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">20M+</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider font-medium">Monthly Reach</p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">Organic</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider font-medium">Lead Source</p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">90 Days</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider font-medium">To Implementation</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 bg-black/20 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">
                        Stop buying "content ideas." <br/>
<span className="text-neutral-600">Start building an asset.</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light text-lg">
<p>
                            Most service businesses are stuck on the "content hamster wheel." You post randomly, hope for a viral hit, and get vague engagement that doesn't pay the bills.
                        </p>
<p>
                            We work exclusively with businesses that already have a real service and some traction. We take your existing momentum and install a system to monetize it.
                        </p>
</div>
<div className="mt-10 pt-6 border-t border-white/5 flex flex-col items-start gap-6">
<div className="flex flex-wrap gap-3">
<div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300">
<i className="inline w-3.5 h-3.5 mr-2 text-white" data-lucide="check"></i> Service Biz
                            </div>
<div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300">
<i className="inline w-3.5 h-3.5 mr-2 text-white" data-lucide="check"></i> Consultants
                            </div>
<div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300">
<i className="inline w-3.5 h-3.5 mr-2 text-white" data-lucide="check"></i> Personal Brands
                            </div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors w-full md:w-auto" href="#book-call">
                            Book Strategy Session <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="grid gap-6">

<div className="glass-card p-8 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-4 mb-4">
<div className="w-8 h-8 bg-red-500/10 rounded flex items-center justify-center text-red-500">
<i className="w-4 h-4" data-lucide="x"></i>
</div>
<h3 className="text-white font-medium">The Old Way</h3>
</div>
<p className="text-sm text-neutral-500 leading-relaxed">Random posting, vanity metrics, confusing offers, manual DM prospecting, unpredictable revenue.</p>
</div>
<div className="glass-card p-8 rounded-xl border-white/20 bg-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 blur-2xl rounded-full"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center text-green-500">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<h3 className="text-white font-medium">Our System</h3>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">Inbound operational flow, automated lead capture, content-to-conversion framework, compounding assets.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">The Ecosystem</h2>
<p className="text-neutral-400 max-w-lg">We don't just advise. We execute. Our team handles the entire production pipeline so you can focus on running your business.</p>
</div>
<a className="text-sm text-white border-b border-white/30 hover:border-white transition-colors pb-1" href="#book-call">Start your asset build</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-3 glass-card p-10 rounded-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider mb-6">
                                100% Done-For-You
                            </div>
<h3 className="text-3xl font-medium text-white mb-4">You just film. We handle the rest.</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                                Qualified businesses get a complete content team. We take the heavy lifting off your plate entirely. Scripting, editing, uploading, captioning, and thumbnail design—it's all handled by us.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> We write the scripts based on your expertise
                                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> We edit high-retention assets
                                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div> We manage the upload &amp; optimization
                                </li>
</ul>
</div>
<div className="bg-black/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm">

<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-neutral-500">WORKFLOW_STATUS</span>
<span className="text-xs text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> ACTIVE</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 bg-white/5 rounded border border-white/5">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="video"></i></div>
<div className="flex-1">
<div className="text-sm text-white">Client Records</div>
<div className="text-xs text-neutral-500">Time: 30 mins / week</div>
</div>
<i className="w-4 h-4 text-neutral-600" data-lucide="check-circle"></i>
</div>
<div className="flex justify-center"><i className="w-4 h-4 text-neutral-600" data-lucide="arrow-down"></i></div>
<div className="flex items-center gap-4 p-3 bg-white/10 rounded border border-white/10 shadow-lg shadow-white/5">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center"><i className="w-4 h-4" data-lucide="zap"></i></div>
<div className="flex-1">
<div className="text-sm text-white font-medium">LevGen Handling</div>
<div className="text-xs text-neutral-400">Editing, SEO, Upload, Mgmt</div>
</div>
<i className="w-4 h-4 text-white" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 glass-card p-8 rounded-2xl relative overflow-hidden group">
<i className="w-8 h-8 text-white mb-6" data-lucide="bar-chart-3"></i>
<h3 className="text-xl font-medium text-white mb-3">Revenue Tracking</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">Clear dashboards. We track the numbers that actually matter: inquiries, leads, and closed deals. No vanity metric fluff.</p>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 flex items-end gap-2 h-20 opacity-50">
<div className="w-1/4 bg-white/10 h-1/3 rounded-t"></div>
<div className="w-1/4 bg-white/20 h-1/2 rounded-t"></div>
<div className="w-1/4 bg-white/10 h-2/3 rounded-t"></div>
<div className="w-1/4 bg-white h-full rounded-t"></div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
<i className="w-8 h-8 text-white mb-4" data-lucide="users"></i>
<h3 className="text-lg font-medium text-white mb-2">Lead Capture</h3>
<p className="text-neutral-400 text-sm">Automated systems to collect and nurture data 24/7.</p>
</div>
<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors">
<i className="w-8 h-8 text-white mb-4" data-lucide="search"></i>
<h3 className="text-lg font-medium text-white mb-2">Searchable Assets</h3>
<p className="text-neutral-400 text-sm">Your content library becomes a sales tool to handle objections.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-black/40" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">The 90-Day Installation</h2>
<p className="text-neutral-400">We don't just give you a PDF. We implement the infrastructure directly into your business over three distinct phases.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="glass-card p-8 rounded-xl relative z-10 bg-[#0A0A0A]">
<div className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center mb-6 text-white font-medium text-sm shadow-lg shadow-white/5">
                        01
                    </div>
<div className="mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest">Days 1-30</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Foundation &amp; Clarity</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Positioning &amp; messaging framework</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Hook &amp; angle development</span>
</li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl relative z-10 bg-[#0A0A0A]">
<div className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center mb-6 text-white font-medium text-sm shadow-lg shadow-white/5">
                        02
                    </div>
<div className="mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest">Days 31-60</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Conversion Infrastructure</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Content-to-CTA mapping</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Lead capture &amp; follow-up setup</span>
</li>
</ul>
</div>

<div className="glass-card p-8 rounded-xl relative z-10 bg-[#0A0A0A]">
<div className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center mb-6 text-white font-medium text-sm shadow-lg shadow-white/5">
                        03
                    </div>
<div className="mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-widest">Days 61-90</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Scale &amp; Automation</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Retention &amp; monetization systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-white shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>Organic system hand-off</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]" id="book-call">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Book Your Strategy Session</h2>
<p className="text-neutral-400 mb-10 max-w-xl mx-auto">See if your business qualifies for the 90-day sprint. We keep our client list small to ensure results.</p>
<div className="glass-card rounded-xl p-2 border border-white/10 overflow-hidden min-h-[700px] relative">

<div className="calendly-inline-widget w-full h-full min-h-[700px]" data-url="https://calendly.com/faim/30min" style={{minWidth: '320px', height: '700px'}}></div>


<div className="absolute inset-0 flex items-center justify-center -z-10 text-neutral-600">
<p className="text-sm">Loading Calendar...</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-10 text-center">Questions &amp; Suitability</h2>
<div className="space-y-4">
<details className="group glass-card rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-white font-medium">Who is this exactly for?</span>
<i className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                    This is for service-based businesses, coaches, and consultants who already have some traction. You should have a validated offer and a desire for predictable inbound leads.
                </div>
</details>
<details className="group glass-card rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-white font-medium">Do I need to edit the videos?</span>
<i className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                    No. Our "Done-For-You" service means you only need to record. We handle scripting, editing, captions, thumbnails, and uploading.
                </div>
</details>
<details className="group glass-card rounded-lg overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-white font-medium">What happens after the 90 days?</span>
<i className="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                    You own the system. It will run without us. However, many clients choose to stay on for our optimisation partner program.
                </div>
</details>
</div>
</section>

<footer className="relative py-12 px-6 border-t border-white/10 overflow-hidden bg-black z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<div>
<span className="text-white font-medium tracking-tight text-lg block mb-2">LevGen Labs <span className="text-neutral-500 font-normal">Consulting</span></span>
<p className="text-xs text-neutral-600">
                    © 2026 LevGen Labs. All rights reserved. <br/>
                    Based in London, operating globally.
                </p>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs font-medium text-white border px-3 py-1.5 rounded hover:bg-white hover:text-black transition-colors" href="#book-call">Book Call</a>
</div>
</div>
</footer>


    </>
  );
}
