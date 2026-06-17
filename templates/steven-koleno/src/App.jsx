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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
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
      
<div className="fixed w-full h-full left-0 top-0 -z-10" data-us-project="XKOypOfa1PB1AP8SFWUj"></div>


<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 hidden opacity-[0.25] bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 hidden opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">

<svg fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
<span className="font-geist font-semibold tracking-tight text-lg ml-2">OnAgent</span>
</div>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#accelerator">Accelerator</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#methodology">Methodology</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#about">Founder</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#faq">FAQ</a>
</nav>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-4 py-2 transition-all" href="#calendly">
<span className="font-geist">Book Your Discovery Call</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col lg:flex-row gap-8 items-start">
<div className="flex-1">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-white/10 rounded-full px-3 py-1.5">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
<span className="font-geist">OnAgent Growth Accelerator</span>
</div>

<h1 className="text-[9.5vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[6vw] leading-[0.95] font-medium text-neutral-100 tracking-tighter font-geist mt-4">
              Build a Real Estate Business That Outlasts the Commission Wars
            </h1>
<p className="sm:mt-6 sm:text-lg leading-relaxed text-base text-neutral-400 font-geist max-w-2xl mt-4">The consumer-first system behind 13,000+ closed listings now available to forward-thinking agents ready to build something that actually scales.</p>

<div className="mt-8">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 border-0 transition-all" href="#calendly">
<span className="font-geist">Book Your Discovery Call</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="w-full lg:w-[24rem] pt-6 lg:pt-16 flex-shrink-0">
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-neutral-300 font-geist">
<iconify-icon className="text-neutral-400" height="20" icon="solar:medal-star-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span className="">#3 Individual Agent in the USA RealTrends Verified (2022, 2023, 2024)</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300 font-geist">
<iconify-icon className="text-neutral-400" height="20" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span>13,000+ Listings Closed</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300 font-geist">
<iconify-icon className="text-neutral-400" height="20" icon="solar:history-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<span>Only Realtor in History: 1,200+ MLS Closings in a Single Year</span>
</div>
<div className="border-white/10 border-t pt-4">
<p className="leading-relaxed text-sm text-neutral-400 font-geist">Licensed in 11 States. Active in 34+ MLSs.<br/> Founder Open Access Real Estate Movement</p>
</div>
</div>
</div>
</div>

<div className="mt-10 relative rounded-2xl overflow-hidden border border-white/10">
<div className="bg-neutral-900" style={{paddingTop: '56.25%', position: 'relative', width: '100%'}}>

</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="accelerator">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">The Reality of the Market</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="bg-neutral-900/90 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-center">
<iconify-icon className="text-neutral-500 mb-5" height="32" icon="solar:restart-circle-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<p className="text-base leading-relaxed text-neutral-300 font-geist">
              You're closing deals but not building a business. Every 90 days feels like starting over. No system. No predictability.
            </p>
</article>

<article className="bg-neutral-900/90 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-center">
<iconify-icon className="text-neutral-500 mb-5" height="32" icon="solar:buildings-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<p className="text-base leading-relaxed text-neutral-300 font-geist">
              Your training is from 1995. Cold calls, door knocking, open houses. Built for a market that doesn't exist anymore.
            </p>
</article>

<article className="bg-neutral-900/90 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col justify-center">
<iconify-icon className="text-neutral-500 mb-5" height="32" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<p className="text-base leading-relaxed text-neutral-300 font-geist">
              The industry changed and nobody told you. The NAR settlement rewrote the rules. Most agents are still playing by the old ones.
            </p>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="methodology">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 p-6 flex flex-col items-center text-center">
<div className="max-w-4xl space-y-6">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-geist tracking-tight font-medium leading-snug">
            The agents who thrive after the NAR settlement won't be the ones who work hardest. They'll be the ones who repositioned first.
          </h2>
<div className="text-base sm:text-lg text-neutral-400 font-geist leading-relaxed space-y-6 text-left mt-8">
<p className="">Steven Koleno has been building consumer-first real estate systems since 2017 before the settlement, before the conversation, before the industry was forced to change. He's not a former agent who coaches. He's actively operating at the highest level in the country while teaching others to do the same.</p>
<p className="">
              The OnAgent Growth Accelerator was built around one question: what does a real estate business look like when it's designed for consumers, not commissions? The answer is a system that produces predictable volume, generates genuine referrals, and doesn't collapse when the market shifts.
            </p>
<p className="">
              This isn't about closing more deals faster. It's about building the infrastructure to close more deals consistently — and knowing exactly why every deal happened so you can replicate it.
            </p>
<p className="text-neutral-200 font-medium">
              If you're an agent who's serious about what comes next, this is the program built for that moment.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl sm:text-2xl text-neutral-100 font-geist tracking-tight font-medium">Verified Results</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="bg-neutral-900/90 border border-white/10 rounded-xl p-6">
<div className="flex gap-1 mb-4 text-neutral-300">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-neutral-300 font-geist italic mb-6">
              "Went from 22 closings to 67 in 14 months. The system finally allowed me to build actual infrastructure instead of just chasing the next deal."
            </p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4">
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100 font-geist">Sarah M.</div>
<div className="text-[11px] text-neutral-400 font-geist">Growth Accelerator Alum</div>
</div>
</div>
</article>

<article className="bg-neutral-900/90 border border-white/10 rounded-xl p-6">
<div className="flex gap-1 mb-4 text-neutral-300">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-neutral-300 font-geist italic mb-6">
              "I completely repositioned my brand post-NAR settlement. My listing presentation now converts at 85% because it's built around the consumer."
            </p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4">
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100 font-geist">David R.</div>
<div className="text-[11px] text-neutral-400 font-geist">Top Producer</div>
</div>
</div>
</article>

<article className="bg-neutral-900/90 border border-white/10 rounded-xl p-6">
<div className="flex gap-1 mb-4 text-neutral-300">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-neutral-300 font-geist italic mb-6">
              "Steven doesn't just teach theory. Having access to the exact operational playbook of an agent closing thousands of transactions is a cheat code."
            </p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4">
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-100 font-geist">Jessica T.</div>
<div className="text-[11px] text-neutral-400 font-geist">Multi-Market Agent</div>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 p-6">

<div className="mb-16">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-8">The Execution Process</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="border-l border-white/20 pl-5">
<div className="text-xs font-semibold text-neutral-500 font-geist mb-2">STEP 01</div>
<h3 className="text-base text-neutral-200 font-medium font-geist tracking-tight mb-2">Discovery Call</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">We assess where your business is and where the gaps are. No pitch, no fluff.</p>
</div>
<div className="border-l border-white/20 pl-5">
<div className="text-xs font-semibold text-neutral-500 font-geist mb-2">STEP 02</div>
<h3 className="text-base text-neutral-200 font-medium font-geist tracking-tight mb-2">Consumer-First Repositioning</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">We build your differentiation around what consumers actually want, not what agents traditionally sell.</p>
</div>
<div className="border-l border-white/20 pl-5">
<div className="text-xs font-semibold text-neutral-500 font-geist mb-2">STEP 03</div>
<h3 className="text-base text-neutral-200 font-medium font-geist tracking-tight mb-2">System Build</h3>
<p className="leading-relaxed text-sm text-neutral-400 font-geist">Intake process, automation, MLS playbooks, volume architecture all of it built for your market.</p>
</div>
<div className="border-l border-white/20 pl-5">
<div className="text-xs font-semibold text-neutral-500 font-geist mb-2">STEP 04</div>
<h3 className="text-base text-neutral-200 font-medium font-geist tracking-tight mb-2">Scale Without Chaos</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Expand into new markets and transaction types using the Agent Without Borders framework, on your timeline.</p>
</div>
</div>
</div>

<div className="pt-10 border-t border-white/10">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-8">What's Included</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5">
<h3 className="text-lg text-neutral-200 font-medium font-geist tracking-tight mb-3">For New Agents</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">
                Consumer-first positioning from day one. Avoid the habits that cause 87% failure rate. Build a system before you build a book of business.
              </p>
</div>
<div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5">
<h3 className="text-lg text-neutral-200 font-medium font-geist tracking-tight mb-3">For Producing Agents</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">
                (10–50 closings/year)<br/><br/>Identify the ceiling and break through it. Automate what's slowing you down. Reposition for the post-settlement market.
              </p>
</div>
<div className="bg-neutral-900/50 rounded-xl p-6 border border-white/5">
<h3 className="text-lg text-neutral-200 font-medium font-geist tracking-tight mb-3">For High-Volume Agents</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">
                (50+ closings/year)<br/><br/>Multi-market expansion framework. AI-powered tools for managing volume. Direct access to Steven's operational playbook.
              </p>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 border-0 transition-all" href="#calendly">
<span className="font-geist">Book Your Discovery Call</span>
<iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="about">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center w-full h-[260px] sm:h-[360px]">
<span className="text-neutral-500 font-geist text-sm">[Steven Koleno headshot — to be inserted]</span>
</div>
<div className="max-w-2xl">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-geist">The Founder</span>
</div>
<h2 className="mt-2 text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">Steven Koleno</h2>
<p className="sm:text-base leading-relaxed text-sm text-neutral-400 font-geist mt-4">
                Steven Koleno is the CEO and Co-Founder of OnAgent, Inc. and the founder of the Open Access Real Estate Movement. He is the only Realtor in history to close over 1,200 MLS listings in a single calendar year in both the rental and sales categories. Ranked #3 individually in the USA by RealTrends Verified for three consecutive years (2022–2024), Steven closed 2,088 transactions in 2024 alone.
              </p>
<p className="sm:text-base leading-relaxed text-sm text-neutral-400 font-geist mt-3">His career spans institutional real estate at the highest level including VP of American Homes 4 Rent and managing broker of Blackstone's Invitation Homes division ($820M+ portfolio) to building one of the most productive individual agent operations in the country.</p>
<p className="sm:text-base leading-relaxed text-sm text-neutral-400 font-geist mt-3">He built OnAgent with his son to answer one question: what does a real estate industry built around consumers not commissions actually look like? This platform is the answer.</p>
</div>
</div>

<div className="lg:col-span-1">
<ul className="space-y-6 sm:space-y-8">
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">13,000+</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Listings Closed</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">2,088</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Transactions in 2024 Alone</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">#3</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Indiv. Agent USA (3 Yrs)</p>
</li>
<li className="">
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">11</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">States Licensed. 34+ MLSs Served.</p>
</li>
<li className="">
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">87%</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-1 font-geist">Agent Failure Rate — We Fix This</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="faq">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 p-6">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-8 text-center">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto space-y-4">
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl p-5 cursor-pointer">
<summary className="font-medium font-geist text-neutral-200 list-none flex justify-between items-center outline-none">
              Do I need to switch brokerages to work with OnAgent?
              <iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 font-geist leading-relaxed pt-4 border-t border-white/5">
              No. OnAgent is broker-agnostic. Work with us regardless of where you're licensed or currently affiliated.
            </p>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl p-5 cursor-pointer">
<summary className="font-medium font-geist text-neutral-200 list-none flex justify-between items-center outline-none">
              Is this only for agents doing high volume?
              <iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 font-geist leading-relaxed pt-4 border-t border-white/5">
              No. The system applies at any production level. What matters is whether you're willing to operate differently than you were trained to.
            </p>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl p-5 cursor-pointer">
<summary className="font-medium font-geist text-neutral-200 list-none flex justify-between items-center outline-none">
              How is this different from traditional real estate coaching?
              <iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 font-geist leading-relaxed pt-4 border-t border-white/5">
              Steven is not a former agent who now coaches. He closed 2,088 transactions last year. He is running the system he's teaching. That's a fundamentally different category.
            </p>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl p-5 cursor-pointer">
<summary className="font-medium font-geist text-neutral-200 list-none flex justify-between items-center outline-none">
              What does the discovery call look like?
              <iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 font-geist leading-relaxed pt-4 border-t border-white/5">
              It's a direct conversation about where your business is, where the gaps are, and whether OnAgent is the right fit. If it's not, we'll tell you.
            </p>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-xl p-5 cursor-pointer">
<summary className="font-medium font-geist text-neutral-200 list-none flex justify-between items-center outline-none">
              Is there a community component?
              <iconify-icon className="text-neutral-500 transition-transform group-open:rotate-180" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-neutral-400 font-geist leading-relaxed pt-4 border-t border-white/5">
              Yes. Momentum Monday weekly calls, the Rethink.RealEstate community, and direct access to other agents inside the accelerator.
            </p>
</details>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-16 px-4" id="calendly">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 p-6">
<div className="text-center mb-8">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">Ready to Reposition?</h2>
<p className="mt-2 text-sm text-neutral-400 font-geist">Book your discovery call below.</p>
</div>

<div className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-white/5" data-processed="true" data-url="https://calendly.com/stevenkoleno?hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=ffffff" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/stevenkoleno?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=ffffff" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</section>

<footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid lg:grid-cols-4 gap-10">

<div className="space-y-4 lg:col-span-2">
<div className="flex items-center gap-2">
<svg fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
<span className="font-geist font-semibold tracking-tight text-lg ml-2">OnAgent</span>
</div>
<p className="text-sm leading-relaxed text-neutral-400 font-geist max-w-sm">
              The consumer-first framework for agents who are ready to build a business that outlasts the commission wars.
            </p>
</div>

<div>
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Platform</h4>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-neutral-400 hover:text-white font-geist" href="#accelerator">Accelerator</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white font-geist" href="#methodology">Methodology</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white font-geist" href="#about">About Steven</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white font-geist" href="#faq">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Connect</h4>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-neutral-400 hover:text-white font-geist" href="#calendly">Book Discovery Call</a></li>
</ul>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-geist">
<a className="hover:text-neutral-200" href="#">Privacy Policy</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Terms of Use</a>
</nav>
<div className="text-[11px] text-neutral-500 font-geist">© 2024 OnAgent, Inc. All rights reserved.</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
