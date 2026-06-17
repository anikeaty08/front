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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none z-0"></div>

<nav className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
<div className="flex h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tighter font-geist" href="#">eNATIVE</a>

<div className="hidden md:flex items-center gap-6">
</div>
</div>
<div className="flex items-center gap-4">
<a className="h-8 px-4 inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors font-geist" href="#join">
                    Secure Spot
                </a>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-24 relative">

<section className="flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-colors text-xs text-gray-300 font-geist bg-white/5 border-white/10 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3" href="#join">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                South Africa's first Permanent eNative ID
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<h1 className="md:text-7xl leading-tight bg-clip-text text-5xl font-semibold text-transparent tracking-tighter font-geist bg-gradient-to-b from-white to-white/60 max-w-4xl mb-6">
                One number. <br className="hidden md:block"/> Any device. Forever.
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-semibold text-gray-400 font-geist max-w-2xl mb-10">eNative is a device-agnostic, cloud-native identity. Your SIM belongs to your carrier. Your eNumber belongs to you. Yours forever.</p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="inline-flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 btn-magnetic h-12 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative w-full sm:w-auto font-geist" href="#join">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-colors hover:bg-slate-950/80 text-sm font-medium text-white bg-slate-950 w-full h-full rounded-full pt-1 pr-8 pb-1 pl-8 backdrop-blur-3xl">
                    Secure Your Spot
                  </span>
</a>
</div>

<div className="mt-20 w-full relative scroll-mt-24" id="problem">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="relative rounded-xl md:rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-white/5 text-left">
<div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="text-xs text-gray-500 font-mono font-geist">system_status: fragmented</div>
</div>
<div className="md:p-12 grid grid-cols-1 md:grid-cols-2 min-h-[400px] pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-center">
<div className="">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:sim-card-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl text-white tracking-tighter mb-2 font-geist font-semibold">147 SIMs</h2>
<h3 className="text-xl text-gray-400 mb-6 tracking-tight font-geist font-semibold">per 100 people.</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-4 font-geist">
                                With 147 SIMs per 100 people even your ouma's got three numbers. It's not a flexi, it's frustration! Work SIM. Personal SIM. Travel SIM. Backup SIM. Lost phone = lost identity. Four days to recover.
                            </p>
<p className="text-sm text-gray-400 leading-relaxed font-geist">
                                Missed calls, missed money, missed connections. Your SIM belongs to your carrier. Your eNumber belongs to you.
                            </p>
</div>
<div className="space-y-6">
<div className="border-white/5 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative">
<iconify-icon className="text-3xl text-gray-600 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg text-white font-medium italic leading-relaxed font-geist">
                                    "No more 'please call me.' No more 'I'm on my other number.' Just one line, always on, always yours."
                                </p>
</div>

<div className="flex flex-wrap gap-3">
<div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-2 font-geist">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon> Phone
                                </div>
<div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-2 font-geist">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon> Laptop
                                </div>
<div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center gap-2 font-geist">
<iconify-icon className="" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Anywhere
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 scroll-mt-24" id="solution">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-white font-geist font-semibold">Your number, your identity, your control.</h2>
<p className="text-gray-400 text-base max-w-2xl leading-relaxed mb-4 font-geist">
                    No SIM. No airtime. No excuses. A Permanent eNative ID that works on your phone, your laptop, your tablet. Wi-Fi first. Globally reachable. Not rented from a carrier. Not locked to a device. Yours. We're building this now. Become an eNative.
                </p>
<p className="text-gray-300 text-base max-w-2xl font-medium font-geist">What Is a Permanent eNative ID?</p>
<p className="text-gray-500 text-sm max-w-xl mt-2 font-geist">A Permanent eNative ID is your personal cloud number, device-agnostic, portable, and built to last. It is not tied to a SIM card. It does not expire when you change phones. It travels with you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-6" icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl tracking-tight text-white mb-2 font-geist font-semibold">Permanent for Life</h3>
<p className="text-sm text-gray-400 font-geist">Your eNumber stays with you. Always. Never worry about expiry or losing your contacts again.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-6" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl tracking-tight text-white mb-2 font-geist font-semibold">Cloud Native</h3>
<p className="text-sm text-gray-400 font-geist">Login from any device. Anywhere. Your identity lives securely in the cloud, completely device independent.</p>
</div>

<div className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-3xl text-gray-300 mb-6" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl tracking-tight text-white mb-2 font-geist font-semibold">Borderless</h3>
<p className="text-sm text-gray-400 font-geist">Built for a connected South Africa and beyond. Global reach with local roots. No roaming fees, just Wi-Fi.</p>
</div>

<div className="md:col-span-3 rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row gap-8 items-center justify-between">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-geist">
                            Coming Soon
                        </div>
<h3 className="text-xl tracking-tight text-white mb-2 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-2xl text-gray-300" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            External Calling
                        </h3>
<p className="text-sm text-gray-400 max-w-md font-geist">Seamlessly route calls to traditional external numbers worldwide directly from your eNative app interface.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 scroll-mt-24" id="status">

<div className="">
<h2 className="text-2xl md:text-3xl tracking-tight mb-8 text-white font-geist font-semibold">The Old vs The New</h2>
<div className="rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden">
<div className="grid grid-cols-3 border-b border-white/5 p-4 bg-white/[0.02]">
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider font-geist">Feature</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-wider font-geist">Traditional SIM</div>
<div className="text-xs font-medium text-blue-400 uppercase tracking-wider font-geist">Permanent ID</div>
</div>
<div className="grid grid-cols-3 border-b border-white/5 p-4 items-center transition-colors hover:bg-white/[0.02]">
<div className="text-sm text-white font-medium font-geist">Control</div>
<div className="text-sm text-gray-500 font-geist">Carrier controlled</div>
<div className="text-sm text-green-400 flex items-center gap-2 font-geist">User controlled</div>
</div>
<div className="grid grid-cols-3 border-b border-white/5 p-4 items-center transition-colors hover:bg-white/[0.02]">
<div className="text-sm text-white font-medium font-geist">Device</div>
<div className="text-sm text-gray-500 font-geist">Device dependent</div>
<div className="text-sm text-green-400 font-geist">Device independent</div>
</div>
<div className="grid grid-cols-3 border-b border-white/5 p-4 items-center transition-colors hover:bg-white/[0.02]">
<div className="text-sm text-white font-medium font-geist">Duration</div>
<div className="text-sm text-gray-500 font-geist">Temporary</div>
<div className="text-sm text-green-400 font-geist">Permanent</div>
</div>
<div className="grid grid-cols-3 p-4 items-center transition-colors hover:bg-white/[0.02]">
<div className="text-sm text-white font-medium font-geist">Identity</div>
<div className="text-sm text-gray-500 font-geist">Fragmented</div>
<div className="text-sm text-green-400 font-geist">Unified</div>
</div>
</div>
</div>

<div className="">
<h2 className="text-2xl md:text-3xl tracking-tight mb-4 text-white font-geist font-semibold">Status You Earn. Identity You Own.</h2>
<p className="text-sm text-gray-400 mb-8 font-geist">Each eNative holds a visible status within the network. Membership isn't automatic. It's recognized.</p>
<div className="space-y-4">

<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
<iconify-icon className="text-green-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white mb-1 font-geist">Verified eNative</div>
<div className="text-xs text-gray-500 font-geist">Identity confirmed. Recognized within the network.</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
<iconify-icon className="text-blue-400 text-xl" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white mb-1 font-geist">Business eNative</div>
<div className="text-xs text-gray-500 font-geist">For entrepreneurs and operators building in the digital economy.</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
<iconify-icon className="text-purple-400 text-xl" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white mb-1 font-geist">Founder eNative</div>
<div className="text-xs text-gray-500 font-geist">Early believers shaping the future of identity ownership.</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white mb-1 font-geist">Community Verified eNative</div>
<div className="text-xs text-gray-500 font-geist">Endorsed by trusted community members.</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mt-32 border-t border-white/5 pt-20 scroll-mt-24" id="join">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl md:text-5xl tracking-tighter text-white mb-6 font-geist font-semibold">Secure Your Spot</h2>
<p className="text-base text-gray-400 mb-8 max-w-sm font-geist">Founding eNatives: 100 spots available. Claim your permanent cloud identity today.</p>
<div className="space-y-4 mb-10 border border-white/5 bg-[#0a0a0a] rounded-xl p-6">
<h4 className="text-sm font-medium text-white mb-4 font-geist">Founding eNatives Receive:</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-400 font-geist">
<iconify-icon className="text-purple-400 text-lg shrink-0" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
                                Founder eNative Badge
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400 font-geist">
<iconify-icon className="text-white text-lg shrink-0" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
                                Early Permanent Native ID allocation
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400 font-geist">
<iconify-icon className="text-white text-lg shrink-0" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
                                Priority access to future releases
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400 font-geist">
<iconify-icon className="text-white text-lg shrink-0" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                                Lifetime identity reservation
                            </li>
</ul>
</div>

<div>
<div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
<span className="text-white font-geist">4 eNatives secured</span>
<span className="font-geist">of 100</span>
</div>
<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{width: '4%'}}></div>
</div>
</div>
</div>

<div className="border border-white/10 rounded-2xl bg-[#0a0a0a] p-6 md:p-8 shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="mb-6 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white font-geist">Become an eNative</h3>
<span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 font-geist">Step 1 of 3</span>
</div>
<form className="space-y-5 relative z-10">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 block font-geist">Full Name <span className="text-red-400 font-geist">*</span></label>
<input className="w-full h-11 bg-black/50 border border-white/10 rounded-lg px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 block font-geist">WhatsApp Number <span className="text-red-400 font-geist">*</span></label>
<input className="w-full h-11 bg-black/50 border border-white/10 rounded-lg px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="0812345678" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 block font-geist">Email <span className="text-red-400 font-geist">*</span></label>
<input className="w-full h-11 bg-black/50 border border-white/10 rounded-lg px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-400 block font-geist">City / Location <span className="text-red-400 font-geist">*</span></label>
<input className="w-full h-11 bg-black/50 border border-white/10 rounded-lg px-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="e.g. Johannesburg, Cape Town" type="text"/>
</div>
<div className="pt-4 flex items-center gap-3">
<button className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto font-geist" type="button">
                                Save
                            </button>
<button className="inline-flex hover:bg-gray-200 transition-colors sm:w-auto flex-1 text-sm font-medium text-black font-geist bg-white w-full h-11 rounded-lg pr-8 pl-8 gap-x-2 gap-y-2 items-center justify-center" type="submit">
                                Next
                                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] border-white/5 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div className="">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tighter font-geist mb-4" href="#">eNATIVE</a>
<p className="text-sm text-gray-500 font-geist max-w-sm mb-2">Issuing Permanent Native IDs to Founding eNatives first.</p>
<p className="text-sm text-white font-medium max-w-sm mt-6 mb-1 font-geist">Own Your Number. Own Your Identity.</p>
<p className="text-xs text-gray-500 max-w-sm font-geist">Your SIM belongs to your carrier. Your eNumber belongs to you.</p>
</div>
<div className="flex flex-col md:items-end justify-center">
<p className="text-sm text-gray-400 font-geist mb-1">eNative</p>
<p className="text-sm text-gray-500 font-geist">Made in Mzansi. For eNatives everywhere.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-600 font-geist">MzansiNative Rights Reserved 2026</p>
<div className="flex items-center gap-4 text-gray-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
