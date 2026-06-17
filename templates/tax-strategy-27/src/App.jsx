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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
<div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
<div className="text-sm font-medium tracking-widest uppercase text-white/90">
                Momentax
            </div>
<a className="px-5 py-2 text-xs font-medium text-white transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md" href="#vsl">
                Apply for Strategy Session
            </a>
</div>
</nav>

<section className="relative px-6 pt-32 pb-24 mx-auto text-center max-w-7xl lg:pt-40 lg:pb-32 bg-grid">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-zinc-300 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-white/60" icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon> 
            Proven Legal Frameworks
        </div>
<h1 className="max-w-4xl mx-auto mb-6 text-4xl font-medium tracking-tighter sm:text-5xl lg:text-7xl text-balance bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent">
            Stop overpaying the government. <br className="hidden sm:block"/> Keep more of your hard-earned wealth.
        </h1>
<p className="max-w-2xl mx-auto mb-14 text-lg font-normal text-zinc-400 text-balance leading-relaxed">
            Discover the exact tax planning strategies high-net-worth entrepreneurs use to legally reduce their tax liability by up to 40% every single year.
        </p>

<div className="relative max-w-5xl mx-auto group cursor-pointer" id="vsl">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative p-2 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-video bg-zinc-950 ring-1 ring-white/5">
<div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-zinc-950"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex items-center justify-center w-24 h-24 transition-all duration-500 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white group-hover:scale-105 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
<div className="flex items-center justify-between text-white/70">
<div className="text-xs font-medium tracking-widest uppercase">The Wealth Preservation Masterclass</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
<div className="text-xs font-medium tracking-widest">12:45</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 relative inline-block">
<div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full pointer-events-none"></div>
<button className="relative px-8 py-4 text-sm font-medium text-black transition-all duration-300 bg-white rounded-full hover:bg-zinc-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Book Your Free Tax Analysis
            </button>
<p className="mt-5 text-xs text-zinc-500 tracking-wide uppercase">Strictly for business owners and high-income professionals.</p>
</div>
</section>

<div className="w-full h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<section className="relative py-32 overflow-hidden">
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="px-6 mx-auto max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 ring-1 ring-white/10">
<img alt="Tax Strategist" className="object-cover w-full h-full grayscale opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90 mix-blend-luminosity" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
</div>
<div className="relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-white rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="16"></iconify-icon> Lead Strategist
                    </div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-8 sm:text-4xl lg:text-5xl text-balance">
                        Expertise that pays for itself. <span className="text-zinc-500">Literally.</span>
</h2>
<div className="space-y-6 text-base font-normal text-zinc-400 leading-relaxed mb-10">
<p>
                            Most CPAs are historians. They look at the past year and tell you what you owe. As a proactive Tax Strategist, I look at your current situation and design a blueprint to minimize your future liability.
                        </p>
<p>
                            Over the past decade, my team and I have utilized the tax code exactly as it was intended—to incentivize specific behaviors. By aligning your business and personal finances with these incentives, we routinely help clients reclaim tens, sometimes hundreds of thousands of dollars annually.
                        </p>
</div>
<ul className="space-y-5 mb-10">
<li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/[0.04]">
<div className="flex items-center justify-center mt-0.5 text-white shrink-0">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-normal text-zinc-300">Certified strategy across multiple tax jurisdictions.</span>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/[0.04]">
<div className="flex items-center justify-center mt-0.5 text-white shrink-0">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-normal text-zinc-300">Over $50M in verified tax savings for clients.</span>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/[0.04]">
<div className="flex items-center justify-center mt-0.5 text-white shrink-0">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-normal text-zinc-300">100% legal, IRS-compliant proactive planning.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative pt-32 pb-12 px-6 mx-auto w-full max-w-[1400px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-emerald-400 rounded-full bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-sm">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="16"></iconify-icon> Real Client Results
            </div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6 sm:text-5xl text-balance">
                Don't take our word for it. <br/> Take theirs.
            </h2>
<p className="text-lg font-normal text-zinc-400 text-balance leading-relaxed">
                We have generated over $50M in verified tax savings. Take as much time as you need scrolling through our wall of client results, case studies, and video interviews.
            </p>
</div>

<div className="relative">
<div className="masonry-grid pb-40">

<div className="break-inside-avoid mb-6 group relative flex flex-col p-2 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative overflow-hidden rounded-xl aspect-video bg-zinc-900 ring-1 ring-white/10 mb-5 group-hover:ring-white/20 transition-all">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center mix-blend-luminosity">

<div className="w-full h-full bg-gradient-to-tr from-zinc-900 to-zinc-800 opacity-50"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-transform group-hover:scale-110 shadow-xl">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-white font-medium tracking-wider">
                            04:12
                        </div>
</div>
<div className="px-4 pb-4 relative z-10">
<blockquote className="text-sm font-normal text-zinc-300 leading-relaxed mb-5">
                            "Before working with them, we were purely reactive. They came in, restructured our entire operational model, and instantly freed up six figures in cash flow that we reinvested into growth."
                        </blockquote>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 text-xs font-medium">SM</div>
<div>
<div className="text-sm font-medium text-zinc-200">Sarah M.</div>
<div className="text-xs text-zinc-500 tracking-wide uppercase mt-0.5">E-commerce Founder</div>
</div>
</div>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative flex flex-col p-8 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="flex gap-1 mb-6 text-emerald-400/80">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<blockquote className="text-sm font-normal text-zinc-400 leading-relaxed mb-6 relative z-10">
                        "The depth of knowledge here is staggering. They found depreciation opportunities on my real estate portfolio that my previous firm completely missed. The ROI on their fee was realized within the first month."
                    </blockquote>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 text-xs font-medium">DR</div>
<div>
<div className="text-sm font-medium text-zinc-200">David R.</div>
<div className="text-xs text-zinc-500 tracking-wide uppercase mt-0.5">Real Estate Investor</div>
</div>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative p-2 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative overflow-hidden rounded-xl bg-zinc-900/50 ring-1 ring-white/10 aspect-square flex flex-col items-center justify-center p-8 group-hover:bg-zinc-900 transition-colors">
<div className="w-16 h-16 mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-300 mb-2">Screenshot Evidence</div>
<div className="text-xs text-zinc-500 text-center text-balance">Stripe Dashboard showing $240k recovered, or a client email celebrating their new tax return.</div>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative flex flex-col p-2 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative overflow-hidden rounded-xl aspect-[9/16] bg-zinc-900 ring-1 ring-white/10 mb-5">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center mix-blend-luminosity">
<div className="w-full h-full bg-gradient-to-b from-zinc-800 to-zinc-950 opacity-80"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-transform group-hover:scale-110 shadow-xl">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 text-center">
<div className="text-xs text-white/80 font-medium tracking-wide bg-black/50 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 inline-block">
                                "They saved me $82,000."
                            </div>
</div>
</div>
<div className="px-4 pb-4 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 text-xs font-medium">MT</div>
<div>
<div className="text-sm font-medium text-zinc-200">Michael T.</div>
<div className="text-xs text-zinc-500 tracking-wide uppercase mt-0.5">Agency Owner</div>
</div>
</div>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative p-8 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="text-emerald-400 mb-4">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-4xl font-medium tracking-tighter text-white mb-2">$142,500</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed mb-6 relative z-10">
                        Total tax liability eliminated in a single fiscal year for a marketing agency by leveraging R&amp;D credits and entity restructuring.
                    </p>
<div className="inline-flex items-center gap-2 text-xs font-medium text-white transition-colors hover:text-emerald-400 cursor-pointer">
                        Read Case Study <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative p-2 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="relative overflow-hidden rounded-xl bg-zinc-900/50 ring-1 ring-white/10 aspect-video flex flex-col items-center justify-center p-8 group-hover:bg-zinc-900 transition-colors">
<div className="w-16 h-16 mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-300 mb-2">Email Proof</div>
<div className="text-xs text-zinc-500 text-center text-balance max-w-xs">Client's shocked reaction to their newly projected Q3 estimated tax payments.</div>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative flex flex-col p-8 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="flex gap-1 mb-6 text-emerald-400/80">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<blockquote className="text-sm font-normal text-zinc-400 leading-relaxed mb-6 relative z-10">
                        "Professional, incredibly thorough, and genuinely interested in preserving my wealth. I finally have peace of mind knowing my tax strategy is airtight and optimized. I highly recommend them to any high-income earner."
                    </blockquote>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 text-xs font-medium">JL</div>
<div>
<div className="text-sm font-medium text-zinc-200">James L.</div>
<div className="text-xs text-zinc-500 tracking-wide uppercase mt-0.5">SaaS Founder</div>
</div>
</div>
</div>

<div className="break-inside-avoid mb-6 group relative flex flex-col p-2 bg-zinc-950/50 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-500">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-zinc-900 ring-1 ring-white/10 mb-5 group-hover:ring-white/20 transition-all">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center mix-blend-luminosity">
<div className="w-full h-full bg-gradient-to-bl from-zinc-800 to-zinc-950 opacity-60"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-transform group-hover:scale-110 shadow-xl">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="px-4 pb-4 relative z-10">
<blockquote className="text-sm font-normal text-zinc-300 leading-relaxed mb-5">
                            "I thought my previous CPA was doing a good job until I saw the blueprint. It's an entirely different level of wealth management."
                        </blockquote>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10 text-xs font-medium">PW</div>
<div>
<div className="text-sm font-medium text-zinc-200">Patrick W.</div>
<div className="text-xs text-zinc-500 tracking-wide uppercase mt-0.5">Crypto Investor</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black/90 to-transparent flex items-end justify-center pb-12 pointer-events-none">
<button className="pointer-events-auto flex items-center gap-3 px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-zinc-900 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:scale-[1.02]">
<iconify-icon className="text-zinc-400" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Load 142 More Results
                </button>
</div>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden mt-auto">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-white/10 blur-[150px] rounded-[100%] pointer-events-none -z-10"></div>
<div className="relative max-w-3xl mx-auto text-center p-12 rounded-[2.5rem] bg-zinc-950/40 backdrop-blur-xl border border-white/10 shadow-2xl">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6 text-balance">Ready to stop leaving money on the table?</h2>
<p className="text-zinc-400 text-lg mb-10 font-normal">Schedule a free discovery call to see if our tax frameworks are a fit for your specific financial situation.</p>
<div className="relative inline-block">
<div className="absolute inset-0 bg-white blur-lg opacity-20 rounded-full pointer-events-none"></div>
<button className="relative px-10 py-4 text-sm font-medium text-black transition-all duration-300 bg-white rounded-full hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Book Your Strategy Session Now
                </button>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-transparent relative z-10">
<div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl sm:flex-row gap-6">
<div className="text-xs font-medium tracking-widest uppercase text-white/80">
                Momentax
            </div>
<p className="text-xs text-zinc-600 font-normal">
                © 2023 Momentax Services. All rights reserved.
            </p>
<div className="flex gap-8 text-xs font-normal text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
