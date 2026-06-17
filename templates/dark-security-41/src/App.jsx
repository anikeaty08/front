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


document.write(new Date().toISOString().slice(11, 16))


        lucide.createIcons({
            attrs: {
                class: "", 
                strokeWidth: 1.5 
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black"></div>

<div className="relative z-50 bg-black border-b border-white/5 py-1.5 px-4 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-mono tracking-wide text-neutral-500">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-emerald-500"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> SYSTEMS OPERATIONAL</span>
<span>BLOCK: 832,104</span>
<span>XMR: $154.20</span>
</div>
<div className="flex items-center gap-4">
<span>SERVER TIME: UTC </span>
<span className="text-red-500">PGP VERIFIED</span>
</div>
</div>
</div>

<nav className="relative z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-900/40">N</div>
<span className="text-xl font-semibold tracking-tight text-white">NEXUS<span className="text-neutral-500">MARKET</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="text-white hover:text-red-500 transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Mirrors</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-5 py-2 text-sm font-medium text-neutral-300 border border-white/10 rounded-lg hover:bg-white/5 transition-all">Login</button>
<button className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow-lg shadow-red-900/30 hover:bg-red-500 transition-all">Register</button>
</div>
</div>
</div>
</nav>

<div className="relative z-30 bg-red-950/20 border-y border-red-900/30 overflow-hidden">
<div className="max-w-7xl mx-auto py-2.5 px-4 flex items-center justify-center gap-2 text-red-400 text-sm font-medium tracking-wide">
<i className="w-4 h-4 text-red-500" data-lucide="alert-triangle"></i>
<span className="uppercase">Warning: Always verify onion links with PGP signature. Phishing sites are active.</span>
</div>
</div>

<main className="relative z-10 flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
                Nexus Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Verified Mirrors</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Access Nexus Market securely via the official Tor Network gateways. Below is the real-time status of our PGP-signed V3 onion mirrors. <span className="text-red-400/90">Never trust links from Telegram or unverified forums.</span>
</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-1 relative overflow-hidden group shadow-2xl shadow-red-900/10 mb-12">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<div className="absolute -right-12 -top-12 w-48 h-48 bg-red-600/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="bg-[#0A0A0A] rounded-xl p-8 border border-white/5 relative">
<div className="absolute top-4 right-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase px-2 py-1 rounded">Main Mirror</div>
<h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    Primary V3 Onion Address
                </h2>
<div className="bg-neutral-950 border border-white/10 rounded-lg p-5 mb-6 font-mono text-red-400 text-lg md:text-xl break-all select-all">
                    rmnvwgxnat4m4o6whqvh6dy7fhnasxa6cndufyrztgahtxwdhgr7thid.onion
                </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-red-900/20 group-hover:shadow-red-500/20">
<i className="w-5 h-5" data-lucide="copy"></i>
                        Copy Address
                    </button>
<button className="flex items-center justify-center gap-2 bg-transparent border border-white/10 text-neutral-300 hover:bg-white/5 py-3.5 rounded-lg font-medium transition-all">
<i className="w-5 h-5" data-lucide="shield-check"></i>
                        Access Marketplace
                    </button>
</div>
</div>
</div>

<div className="mb-20">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-white tracking-tight">Backup Mirrors</h3>
<span className="text-xs font-mono text-emerald-500">UPDATED: 1 MIN AGO</span>
</div>
<div className="space-y-3">

<div className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-4 w-full md:w-auto overflow-hidden">
<div className="flex flex-col items-center">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-emerald-500/80 font-mono mt-1">99%</span>
</div>
<span className="font-mono text-neutral-400 text-sm truncate w-full md:w-auto">6lqc5wdbkw7h4x4vkofxsgqfrb3ynnjj7zlezc7hvymmlnsizzfzwrid.onion</span>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono tracking-wider">ONLINE</span>
<button className="ml-auto md:ml-0 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs rounded border border-white/10 transition-colors">COPY</button>
</div>
</div>

<div className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-4 w-full md:w-auto overflow-hidden">
<div className="flex flex-col items-center">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-emerald-500/80 font-mono mt-1">98%</span>
</div>
<span className="font-mono text-neutral-400 text-sm truncate w-full md:w-auto">lzllowcajmfcmaxrgpvvtxtb34iskvnr7qfbpafuvgdwntizod5gqd.onion</span>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono tracking-wider">ONLINE</span>
<button className="ml-auto md:ml-0 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs rounded border border-white/10 transition-colors">COPY</button>
</div>
</div>

<div className="group bg-neutral-900/30 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-4 w-full md:w-auto overflow-hidden">
<div className="flex flex-col items-center">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-emerald-500/80 font-mono mt-1">95%</span>
</div>
<span className="font-mono text-neutral-400 text-sm truncate w-full md:w-auto">yqgzwm47zxr7fhw7253x6ibyukdcnqho4egywml33p4ya5aamsg7ikyd.onion</span>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono tracking-wider">ONLINE</span>
<button className="ml-auto md:ml-0 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs rounded border border-white/10 transition-colors">COPY</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-8 flex items-center gap-2">
<i className="text-red-500 w-5 h-5" data-lucide="shield"></i> Verification Protocol
                </h3>
<div className="space-y-8 text-lg">
<div className="flex gap-4">
<span className="text-red-500 font-mono text-sm pt-1">01.</span>
<div>
<h4 className="text-neutral-200 font-medium mb-1">Import Public Key</h4>
<p className="text-neutral-500 text-base">Download the official Nexus Market PGP key and import it into your GPG keychain (Kleopatra/GPG4Win).</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-red-500 font-mono text-sm pt-1">02.</span>
<div>
<h4 className="text-neutral-200 font-medium mb-1">Retrieve Signed Message</h4>
<p className="text-neutral-500 text-base">Navigate to <span className="font-mono text-neutral-300 bg-white/5 px-1 rounded">/mirrors.txt</span> on any mirror to view the PGP signed list of URLs.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-red-500 font-mono text-sm pt-1">03.</span>
<div>
<h4 className="text-neutral-200 font-medium mb-1">Verify Signature</h4>
<p className="text-neutral-500 text-base">Verify the message signature against the official key. The output MUST say "Good signature".</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-red-500 font-mono text-sm pt-1">04.</span>
<div>
<h4 className="text-neutral-200 font-medium mb-1">Compare Checksums</h4>
<p className="text-neutral-500 text-base">Ensure the onion address you are visiting matches one of the signed URLs exactly.</p>
</div>
</div>
</div>
</div>

<div className="bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs leading-relaxed text-emerald-500/90 selection:bg-emerald-500/20">
-----BEGIN PGP PUBLIC KEY BLOCK-----
mQINBGluX7ABEAC1... (Full key truncated)
RX7JqM9L+3N4j5K... 8yT
q9l+3W4j5K2s1... Pz9
...
(Official Key ID: 0x4A2B1C3D)
-----END PGP PUBLIC KEY BLOCK-----
                    </pre>
<div className="mt-4 pt-4 border-t border-dashed border-white/10 flex items-center gap-2 text-red-400 hover:text-red-300 cursor-pointer transition-colors text-xs font-mono font-bold uppercase tracking-wide">
<i className="w-3 h-3" data-lucide="download"></i> Download Full Public Key
                    </div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto text-center border border-red-900/30 bg-gradient-to-b from-red-950/10 to-transparent rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjM5LCA2OCwgNjgsIDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6 text-red-500">
<span className="text-3xl font-mono">!</span>
</div>
<h2 className="text-2xl font-medium text-white mb-4 tracking-tight">Security Critical Warning</h2>
<p className="text-lg text-neutral-400 mb-8">
                Nexus Market staff will <span className="text-white font-semibold">NEVER</span> ask for your private keys, mnemonic seed, or password via PM or email. We do not operate a Telegram channel, Discord server, or clearweb support desk. Any external communication claiming to be "Nexus Support" is a phishing attempt.
            </p>
<div className="flex items-center justify-center gap-6 text-xs font-mono tracking-wider text-red-400">
<a className="border-b border-red-500/50 hover:text-white hover:border-white pb-0.5 transition-all" href="#">READ SECURITY GUIDE</a>
<span className="text-neutral-700">|</span>
<a className="border-b border-red-500/50 hover:text-white hover:border-white pb-0.5 transition-all" href="#">REPORT PHISHING</a>
</div>
</div>
</main>

<footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">N</div>
<span className="text-base font-semibold text-white tracking-tight">NEXUS MARKET</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-6">
                        The premier darknet marketplace for secure, anonymous commerce. Built for the community, by the community.
                    </p>
<div className="text-xs font-mono text-neutral-600 space-y-1">
<p>PGP KEY ID: <span className="text-neutral-400">0x4A2B1C3D</span></p>
<p>FINGERPRINT: <span className="text-neutral-400">8821 ... 4A2B</span></p>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-wide uppercase">Navigation</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Home</a></li>
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> About Us</a></li>
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Mirrors</a></li>
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> FAQ/Help</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 tracking-wide uppercase">Legal &amp; Support</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Contact Support</a></li>
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Canaries</a></li>
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> PGP Keys</a></li>
<li><a className="hover:text-red-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3" data-lucide="chevron-right"></i> Report Abuse</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-mono">
<p>© 2024 NEXUS MARKET LINK. ALL RIGHTS RESERVED.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-900 border border-emerald-500"></div>
                    ENCRYPTED CONNECTION ESTABLISHED
                </div>
</div>
</div>
</footer>


    </>
  );
}
