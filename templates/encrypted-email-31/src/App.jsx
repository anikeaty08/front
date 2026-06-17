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
      
<div className="noise-bg"></div>

<nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 text-lg tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<span className="w-2 h-2 bg-zinc-100 block"></span>
                BLANC.IS
            </a>
<div className="hidden md:flex items-center gap-8 text-xs tracking-tight">
<a className="hover:text-zinc-100 transition-colors" href="#manifesto">MANIFESTO</a>
<a className="hover:text-zinc-100 transition-colors" href="#transparency">TRANSPARENCY</a>
<a className="hover:text-zinc-100 transition-colors" href="#audit">AUDIT_LOGS</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs hover:text-zinc-100 transition-colors" href="#">LOGIN</a>
<a className="bg-zinc-100 text-zinc-950 px-4 py-2 text-xs font-medium hover:bg-zinc-300 transition-colors" href="#">
                    GET_ACCESS
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center pt-24 pb-20 px-6 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
<div className="relative z-10 max-w-4xl w-full text-center space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full text-xs text-zinc-500 mb-4 bg-zinc-900/50">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="tracking-tight">System Operational // Canary: Active</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-zinc-100 leading-tight">
                PRIVACY IS NOT<br/>
<span className="text-zinc-600">A CRIME.</span>
</h1>
<p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-zinc-500">
                We don't know who you are. We don't want to know. 
                Blanc provides end-to-end encrypted messaging with zero-knowledge architecture. 
                No trackers. No logs. Just data.
            </p>

<div className="max-w-md mx-auto w-full mt-12">
<form className="group relative flex items-center w-full border border-zinc-800 bg-zinc-900/30 focus-within:border-zinc-500 focus-within:bg-zinc-900/80 transition-all duration-300">
<div className="pl-4 pr-2 text-zinc-600">
<iconify-icon icon="lucide:terminal" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none py-4 px-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-0 font-mono" placeholder="enter_email_for_access..." type="email"/>
<button className="mr-2 px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs transition-colors border border-zinc-700" type="submit">
                        EXECUTE
                    </button>
</form>
<div className="flex justify-between mt-3 text-[10px] text-zinc-600 uppercase tracking-wider">
<span>RSA-4096</span>
<span>PGP COMPATIBLE</span>
</div>
</div>
</div>
</main>

<section className="border-y border-zinc-900 bg-zinc-950 relative z-10" id="manifesto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-900 max-w-7xl mx-auto">

<div className="p-8 md:p-12 hover:bg-zinc-900/30 transition-colors group">
<div className="mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="lucide:eye-off" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-100 font-medium tracking-tight mb-3">Zero Knowledge</h3>
<p className="text-xs leading-relaxed text-zinc-500">
                    We cannot read your emails. Even if forced by a court order, we can only hand over encrypted gibberish. You hold the keys.
                </p>
</div>

<div className="p-8 md:p-12 hover:bg-zinc-900/30 transition-colors group">
<div className="mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="lucide:globe-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-100 font-medium tracking-tight mb-3">Jurisdiction: Iceland</h3>
<p className="text-xs leading-relaxed text-zinc-500">
                    Operating outside the 14 Eyes alliance. Protected by modern media initiative laws ensuring freedom of information.
                </p>
</div>

<div className="p-8 md:p-12 hover:bg-zinc-900/30 transition-colors group">
<div className="mb-6 text-zinc-100 group-hover:scale-110 transition-transform duration-500 origin-left">
<iconify-icon icon="lucide:file-code-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-100 font-medium tracking-tight mb-3">Open Source</h3>
<p className="text-xs leading-relaxed text-zinc-500">
                    Trust requires transparency. Our client and server code is public, audited, and verifiable by anyone.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950 border-b border-zinc-900" id="transparency">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl text-zinc-100 tracking-tighter mb-4">TRANSPARENCY REPORT</h2>
<p className="text-sm text-zinc-500 max-w-lg">
                        We believe in absolute transparency. We publish a cryptographically signed warrant canary every 30 days.
                    </p>
</div>
<div className="text-right">
<span className="text-[10px] text-zinc-600 block uppercase tracking-wider mb-1">Last Updated</span>
<span className="text-sm text-zinc-200">2023-10-24 14:02:11 UTC</span>
</div>
</div>

<div className="border border-zinc-800 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-zinc-900/50 text-zinc-400 uppercase tracking-wider border-b border-zinc-800">
<tr>
<th className="px-6 py-4 font-medium">Metric</th>
<th className="px-6 py-4 font-medium">Count (All Time)</th>
<th className="px-6 py-4 font-medium">Count (Last 30 Days)</th>
<th className="px-6 py-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800 bg-zinc-950/50">
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-zinc-300">Warrants Received</td>
<td className="px-6 py-4 text-zinc-500">0</td>
<td className="px-6 py-4 text-zinc-500">0</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-950/30 text-green-500 border border-green-900/50 text-[10px]">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> NULL
                                    </span>
</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-zinc-300">Gag Orders</td>
<td className="px-6 py-4 text-zinc-500">0</td>
<td className="px-6 py-4 text-zinc-500">0</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-950/30 text-green-500 border border-green-900/50 text-[10px]">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> NULL
                                    </span>
</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-zinc-300">Data Disclosed</td>
<td className="px-6 py-4 text-zinc-500">0 bytes</td>
<td className="px-6 py-4 text-zinc-500">0 bytes</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-950/30 text-green-500 border border-green-900/50 text-[10px]">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> SECURE
                                    </span>
</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-zinc-300">Uptime</td>
<td className="px-6 py-4 text-zinc-500">99.99%</td>
<td className="px-6 py-4 text-zinc-500">100%</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700 text-[10px]">
<iconify-icon icon="lucide:activity" width="10"></iconify-icon> MONITORING
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-6 flex items-center gap-4">
<a className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 decoration-zinc-700" href="#">Download PGP Key</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 decoration-zinc-700" href="#">View Canary.txt</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-900">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl text-zinc-100 tracking-tighter mb-12">FAIR PRICING. NO ADS.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-zinc-800 p-8 flex flex-col items-start bg-zinc-900/20 hover:border-zinc-700 transition-colors relative opacity-60 grayscale">
<div className="absolute top-4 right-4 text-xs bg-zinc-800 px-2 py-1 text-zinc-400">UNAVAILABLE</div>
<h3 className="text-lg text-zinc-100 font-medium mb-2">Free</h3>
<p className="text-3xl text-zinc-100 tracking-tight mb-6">€0<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
<ul className="text-xs text-left space-y-3 mb-8 text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="lucide:x"></iconify-icon> If it's free, you are the product.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="lucide:x"></iconify-icon> We do not offer free accounts.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="lucide:x"></iconify-icon> No data mining.</li>
</ul>
<button className="mt-auto w-full py-2 border border-zinc-800 text-zinc-600 text-xs cursor-not-allowed" disabled="">
                        NOT AN OPTION
                    </button>
</div>

<div className="border border-zinc-100 p-8 flex flex-col items-start bg-zinc-950 relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-100 text-zinc-950 px-3 py-0.5 text-[10px] tracking-wide font-semibold uppercase">
                        Recommended
                    </div>
<h3 className="text-lg text-zinc-100 font-medium mb-2">Standard</h3>
<p className="text-3xl text-zinc-100 tracking-tight mb-6">€5<span className="text-sm text-zinc-500 font-normal">/mo</span></p>
<ul className="text-xs text-left space-y-3 mb-8 text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-100" icon="lucide:check"></iconify-icon> 
                            5GB Encrypted Storage
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-100" icon="lucide:check"></iconify-icon> 
                            5 Aliases (@blanc.is)
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-100" icon="lucide:check"></iconify-icon> 
                            Custom Domains
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-100" icon="lucide:check"></iconify-icon> 
                            Priority Support
                        </li>
</ul>

<div className="w-full mb-6 flex items-center justify-center gap-3 py-3 border border-dashed border-zinc-800 bg-zinc-900/30">
<label className="flex items-center cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-zinc-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-100"></div>
<span className="ml-3 text-xs text-zinc-400">Annual Billing (-20%)</span>
</label>
</div>
<button className="mt-auto w-full py-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-300 text-xs font-medium transition-colors">
                        CREATE ACCOUNT
                    </button>
<p className="text-[10px] text-center w-full mt-3 text-zinc-600">Pay with Card, Bitcoin, or Monero.</p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 px-6 border-t border-zinc-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
<div className="space-y-4">
<a className="text-zinc-100 text-sm tracking-tighter flex items-center gap-2" href="#">
<span className="w-1.5 h-1.5 bg-zinc-100 block"></span>
                    BLANC.IS
                </a>
<p className="text-[10px] text-zinc-600 leading-relaxed">
                    Designed for the paranoid.<br/>
                    Built in Iceland.<br/>
                    No cookies. No analytics.
                </p>
</div>
<div>
<h4 className="text-xs text-zinc-100 font-medium mb-4">RESOURCES</h4>
<ul className="space-y-2 text-[10px] text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Source Code (GitHub)</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Threat Model</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">PGP Public Key</a></li>
</ul>
</div>
<div>
<h4 className="text-xs text-zinc-100 font-medium mb-4">LEGAL</h4>
<ul className="space-y-2 text-[10px] text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Warrant Canary</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Imprint</a></li>
</ul>
</div>
<div>
<h4 className="text-xs text-zinc-100 font-medium mb-4">CONNECT</h4>
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</a>
</div>
<div className="mt-4 p-2 border border-zinc-800 bg-zinc-900/50 inline-block">
<p className="text-[10px] text-zinc-500 font-mono">
<span className="text-green-500">root@blanc:~$</span> <span className="cursor-blink">_</span>
</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 flex flex-col md:flex-row justify-between items-center">
<p>© 2023 BLANC TECHNOLOGIES EHF.</p>
<p className="mt-2 md:mt-0 font-mono">74.12ms</p>
</div>
</footer>

    </>
  );
}
