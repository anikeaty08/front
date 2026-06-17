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



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
100: '#F4F4F5',
200: '#E4E4E7',
300: '#D4D4D8',
400: '#A1A1AA',
500: '#71717A',
800: '#27272A',
900: '#18181B',
950: '#09090B',
},
brand: {
purple: '#9945FF',
emerald: '#14F195',
blue: '#2563EB',
orange: '#FF8800',
}
},
fontFamily: {
display: ['"Inter Tight"', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
}
}
}
}



                        for(let i=0; i<100; i++) {
                            const rand = Math.random();
                            let className = 'bg-white/5';
                            if (rand > 0.95) className = 'pulse-cell'; // Purple
                            else if (rand > 0.90) className = 'pulse-cell-orange'; // Orange
                            
                            document.write(`<div class="iso-cell w-full h-full border border-zinc-200/50 ${className}"></div>`);
                        }
                    
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
      

<div className="fixed inset-0 pointer-events-none z-[999] bg-noise opacity-[0.03] mix-blend-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
<div className="glass hairline flex items-center justify-between p-3">

<div className="flex items-center pl-4 pr-6 hairline-r">
<span className="font-display font-semibold tracking-[-0.05em] text-lg">SolSeal</span>
</div>

<div className="hidden md:flex items-center gap-0 h-full">
<a className="group relative px-6 py-2 block font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors" href="#">
<span className="absolute inset-0 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 -z-10"></span>
                    Infrastructure
                </a>
<div className="w-px h-4 bg-zinc-200"></div>
<a className="group relative px-6 py-2 block font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors" href="#">
<span className="absolute inset-0 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 -z-10"></span>
                    Privacy Pools
                </a>
<div className="w-px h-4 bg-zinc-200"></div>
<a className="group relative px-6 py-2 block font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors" href="#">
<span className="absolute inset-0 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 -z-10"></span>
                    Compliance
                </a>
<div className="w-px h-4 bg-zinc-200"></div>
<a className="group relative px-6 py-2 block font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors" href="#">
<span className="absolute inset-0 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 -z-10"></span>
                    Docs
                </a>
</div>

<button className="bg-zinc-950 text-white px-5 py-2 text-xs font-mono uppercase tracking-wide hover:bg-brand-orange transition-colors duration-200">
                Launch App
            </button>
</div>
</nav>

<section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">

<div className="w-full md:w-3/5 z-10 flex flex-col gap-8">
<div className="font-mono text-xs text-brand-orange uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 bg-brand-orange animate-pulse"></span>
                // ENCRYPTED_VAULTS_LIVE
            </div>
<h1 className="text-hero font-display font-semibold leading-[0.9] tracking-[-0.04em] text-zinc-950">
                PRIVATE BALANCES<br/>
<span className="text-orange-400">ON A PUBLIC CHAIN.</span>
</h1>
<p className="font-body text-base md:text-lg text-zinc-500 max-w-xl leading-relaxed">
                SolSeal replaces visible wallet amounts with encrypted balance vaults. Hide your treasury, strategy, and alpha from the market while maintaining institutional compliance.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
<button className="group flex items-center gap-3 bg-zinc-950 text-white pl-6 pr-4 py-4 hover:bg-brand-purple transition-colors duration-300">
<span className="font-mono text-sm uppercase tracking-wide">Create Vault</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="font-mono text-sm text-zinc-500 border-b border-zinc-300 hover:text-brand-orange hover:border-brand-orange transition-all pb-1" href="#">
                    Read the Whitepaper
                </a>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[50%] h-[800px] opacity-30 md:opacity-100 pointer-events-none md:pointer-events-auto overflow-visible z-0">
<div className="w-full h-full flex items-center justify-center perspective-[1200px]">
<div className="iso-container w-[600px] h-[600px] grid grid-cols-10 gap-1 p-4 border border-zinc-200 bg-white/10 backdrop-blur-sm">

<div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell-orange"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell-orange"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell-orange"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 pulse-cell"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div><div className="iso-cell w-full h-full border border-zinc-200/50 bg-white/5"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white py-4 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 bg-white z-10 px-4 flex items-center border-r border-zinc-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">TARGET_INTEGRATIONS:</span>
</div>
<div className="marquee-container w-full">
<div className="marquee-content flex gap-16 items-center pl-48">

<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">KAMINO</span>
<span className="font-mono text-[10px] text-brand-emerald bg-brand-emerald/10 px-1 py-0.5">[Lending]</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">JUPITER</span>
<span className="font-mono text-[10px] text-brand-orange bg-brand-orange/10 px-1 py-0.5">[Aggregator]</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">MARINADE</span>
<span className="font-mono text-[10px] text-zinc-500 bg-zinc-100 px-1 py-0.5">[Staking]</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">JITO</span>
<span className="font-mono text-[10px] text-brand-emerald bg-brand-emerald/10 px-1 py-0.5">[MEV]</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">PHANTOM</span>
<span className="font-mono text-[10px] text-zinc-500 bg-zinc-100 px-1 py-0.5">[Wallet]</span>
</div>

<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">KAMINO</span>
<span className="font-mono text-[10px] text-brand-emerald bg-brand-emerald/10 px-1 py-0.5">[Lending]</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<span className="font-display font-semibold text-lg tracking-tight">JUPITER</span>
<span className="font-mono text-[10px] text-brand-orange bg-brand-orange/10 px-1 py-0.5">[Aggregator]</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="mb-12 flex items-baseline justify-between border-b border-zinc-200 pb-4">
<h2 className="text-section font-display font-medium tracking-tight text-zinc-950">CORE INFRASTRUCTURE</h2>
<span className="font-mono text-xs text-zinc-400 hidden sm:block">VERSION_1.0_MAINNET</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">

<div className="md:col-span-2 md:row-span-2 bg-white p-8 md:p-12 group relative overflow-hidden h-full min-h-[400px]">
<div className="absolute inset-x-0 top-0 h-[2px] bg-brand-purple translate-y-[-100%] group-hover:translate-y-[600px] transition-transform duration-[1.5s] ease-in-out z-10"></div>
<div className="flex flex-col justify-between h-full relative z-0">
<div>
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-zinc-300 group-hover:text-brand-purple transition-colors duration-300" icon="solar:shield-keyhole-linear" width="32"></iconify-icon>
<span className="font-mono text-[10px] text-zinc-400">01</span>
</div>
<h3 className="font-mono text-sm uppercase tracking-wider mb-4 group-hover:text-brand-purple transition-colors">Encrypted Balance Vaults</h3>
<p className="font-body text-2xl text-zinc-800 leading-tight">SolSeal stores your assets in a ciphertext vault. Only your private key can decrypt the balance. To the network, you hold 0 SOL.</p>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 flex gap-4 font-mono text-[10px] text-zinc-400">
<span>CIPHER: AES-GCM</span>
<span>ZK_PROOF: GROTH16</span>
</div>
</div>
</div>

<div className="bg-white p-8 group relative overflow-hidden h-64">
<div className="absolute inset-x-0 top-0 h-[2px] bg-brand-orange translate-y-[-100%] group-hover:translate-y-[400px] transition-transform duration-[1s] ease-in-out delay-100 z-10"></div>
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-zinc-300 group-hover:text-brand-orange transition-colors" icon="solar:bolt-linear" width="24"></iconify-icon>
<span className="font-mono text-[10px] text-zinc-400">02</span>
</div>
<h3 className="font-mono text-sm uppercase tracking-wider mb-2 group-hover:text-brand-orange transition-colors">Instant Sync</h3>
<p className="font-body text-sm text-zinc-500">Unlike Z-cash style scanning, SolSeal uses encrypted hints for 50ms balance discovery.</p>
</div>

<div className="bg-white p-8 group relative overflow-hidden h-64">
<div className="absolute inset-x-0 top-0 h-[2px] bg-brand-purple translate-y-[-100%] group-hover:translate-y-[400px] transition-transform duration-[1s] ease-in-out delay-200 z-10"></div>
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-zinc-300 group-hover:text-brand-purple transition-colors" icon="solar:document-add-linear" width="24"></iconify-icon>
<span className="font-mono text-[10px] text-zinc-400">03</span>
</div>
<h3 className="font-mono text-sm uppercase tracking-wider mb-2 group-hover:text-brand-purple transition-colors">Compliance Ready</h3>
<p className="font-body text-sm text-zinc-500">Optional viewing keys for auditors and read-only regulatory access.</p>
</div>

<div className="bg-white p-8 group relative overflow-hidden h-64">
<div className="absolute inset-x-0 top-0 h-[2px] bg-brand-purple translate-y-[-100%] group-hover:translate-y-[400px] transition-transform duration-[1s] ease-in-out delay-300 z-10"></div>
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-zinc-300 group-hover:text-brand-purple transition-colors" icon="solar:lock-password-linear" width="24"></iconify-icon>
<span className="font-mono text-[10px] text-zinc-400">04</span>
</div>
<h3 className="font-mono text-sm uppercase tracking-wider mb-2 group-hover:text-brand-purple transition-colors">Two-Factor Security</h3>
<p className="font-body text-sm text-zinc-500">Requires both wallet signature and secret key. Theft-proof by design.</p>
</div>
</div>
</section>

<section className="relative bg-zinc-50 border-zinc-200 border-t py-28 overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="blob-cont absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl blob"></div>
<div className="blob-cont absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-emerald/5 rounded-full blur-3xl blob" style={{animationDelay: '-2s'}}></div>
<div className="blob-cont absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl blob" style={{animationDelay: '-5s'}}></div>
</div>
<div className="relative z-10 px-6 md:px-12 max-w-[1600px] mx-auto">

<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 border border-zinc-200 bg-white/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
</span>
<span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">Shielded Pools Live</span>
</div>
<h2 className="text-section font-display font-medium tracking-tight text-zinc-950 mb-4">
                    PRIVACY YIELD
                </h2>
<p className="font-body text-zinc-500 max-w-lg text-lg">
                    Institutional-grade DeFi strategies wrapped in privacy. Earn yield without revealing your position size or history.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="yield-card group relative glass-heavy rounded-[2rem] p-1 flex flex-col h-[480px]">
<div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative h-full bg-white/40 rounded-[1.8rem] p-8 flex flex-col justify-between overflow-hidden">

<div className="flex justify-between items-start z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-white border border-orange-100 flex items-center justify-center shadow-sm">
<iconify-icon className="text-brand-orange text-xl" icon="solar:leaf-bold"></iconify-icon>
</div>
<div>
<div className="font-display font-semibold text-zinc-900">Liquid SOL</div>
<div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Marinade</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-full px-3 py-1 font-mono text-[10px] uppercase text-zinc-500">
                                Low Risk
                            </div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] radial-gradient opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
<svg className="w-full h-full animate-[spin_20s_linear_infinite] opacity-30" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32C59.6,42.5,48.3,50.6,37.1,57.8C25.9,65,14.8,71.3,2.4,67.1C-10,62.9,-23.6,48.2,-36.8,36.5C-50,24.8,-62.8,16.1,-68.6,3.6C-74.4,-8.9,-73.2,-25.2,-64.3,-38.7C-55.4,-52.2,-38.8,-62.9,-23.4,-69.3C-8,-75.7,6.2,-77.8,20.5,-83.6L30.5,-83.6Z" fill="#FF8800" transform="translate(100 100)"></path>
</svg>
</div>

<div className="relative z-10 mt-auto">
<div className="mb-6">
<div className="font-mono text-xs text-zinc-500 mb-1">Target APY</div>
<div className="font-display font-semibold text-6xl tracking-tighter text-zinc-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-900 group-hover:to-zinc-600 transition-all">
                                    7.4<span className="text-3xl text-zinc-400">%</span>
</div>
</div>

<button className="w-full bg-zinc-900 text-white rounded-xl py-4 font-mono text-xs uppercase tracking-widest hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-orange/20">
<span>Shield &amp; Stake</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="yield-card group relative glass-heavy rounded-[2rem] p-1 flex flex-col h-[480px] translate-y-4 md:translate-y-0">
<div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative h-full bg-white/40 rounded-[1.8rem] p-8 flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-white border border-emerald-100 flex items-center justify-center shadow-sm">
<iconify-icon className="text-brand-emerald text-xl" icon="solar:dollar-linear"></iconify-icon>
</div>
<div>
<div className="font-display font-semibold text-zinc-900">USDC Vault</div>
<div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Kamino</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-full px-3 py-1 font-mono text-[10px] uppercase text-zinc-500">
                                Stable
                            </div>
</div>

<div className="absolute top-[40%] left-0 w-full h-32 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-full h-1 bg-zinc-200 overflow-hidden relative">
<div className="absolute inset-0 bg-brand-emerald w-1/2 animate-[scroll_2s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="mb-6">
<div className="font-mono text-xs text-zinc-500 mb-1">Target APY</div>
<div className="font-display font-semibold text-6xl tracking-tighter text-zinc-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-900 group-hover:to-zinc-600 transition-all">
                                    12.8<span className="text-3xl text-zinc-400">%</span>
</div>
</div>
<button className="w-full bg-zinc-900 text-white rounded-xl py-4 font-mono text-xs uppercase tracking-widest hover:bg-brand-emerald transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-emerald/20">
<span>Lend Private</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="yield-card group relative glass-heavy rounded-[2rem] p-1 flex flex-col h-[480px]">
<div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative h-full bg-white/40 rounded-[1.8rem] p-8 flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-white border border-purple-100 flex items-center justify-center shadow-sm">
<iconify-icon className="text-brand-purple text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<div className="font-display font-semibold text-zinc-900">MEV Boost</div>
<div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Jito</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-full px-3 py-1 font-mono text-[10px] uppercase text-zinc-500">
                                Dynamic
                            </div>
</div>

<div className="absolute top-[45%] left-0 w-full flex justify-center gap-1 opacity-20 group-hover:opacity-50 transition-opacity">
<div className="w-2 h-12 bg-brand-purple rounded-full animate-pulse"></div>
<div className="w-2 h-16 bg-brand-purple rounded-full animate-pulse delay-75"></div>
<div className="w-2 h-8 bg-brand-purple rounded-full animate-pulse delay-150"></div>
<div className="w-2 h-14 bg-brand-purple rounded-full animate-pulse delay-100"></div>
<div className="w-2 h-10 bg-brand-purple rounded-full animate-pulse delay-200"></div>
</div>
<div className="relative z-10 mt-auto">
<div className="mb-6">
<div className="font-mono text-xs text-zinc-500 mb-1">Target APY</div>
<div className="font-display font-semibold text-6xl tracking-tighter text-zinc-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-zinc-900 group-hover:to-zinc-600 transition-all">
                                    9.2<span className="text-3xl text-zinc-400">%</span>
</div>
</div>
<button className="w-full bg-zinc-900 text-white rounded-xl py-4 font-mono text-xs uppercase tracking-widest hover:bg-brand-purple transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-purple/20">
<span>Boost Yield</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase hover:text-zinc-900 transition-colors" href="#">
                    View all 12 Strategies <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="md:px-12 max-w-[1600px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex justify-center mb-16">
<h2 className="font-display font-medium text-2xl tracking-tight">WHO IT'S FOR</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">

<div className="bg-white border border-zinc-200 p-8 flex flex-col gap-6">
<div>
<h3 className="font-mono text-sm uppercase text-zinc-500 mb-2">FUNDS &amp; MMS</h3>
<div className="font-display text-4xl font-semibold">Institutions</div>
</div>
<ul className="space-y-3 font-mono text-xs text-zinc-600">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> Prevent strategy leakage</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> Hide position sizing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon> Audit viewing keys</li>
</ul>
<button className="w-full py-3 border border-zinc-200 font-mono text-xs uppercase hover:bg-zinc-50 transition-colors">Contact Sales</button>
</div>

<div className="bg-zinc-50/50 border border-brand-purple p-8 flex flex-col gap-6 relative min-h-[480px] justify-center shadow-[0_0_30px_rgba(153,69,255,0.05)]">
<div className="absolute top-0 right-0 bg-brand-purple text-white text-[10px] font-mono px-2 py-1 uppercase tracking-widest">Growth</div>
<div>
<h3 className="font-mono text-sm uppercase text-brand-purple mb-2">DAOS &amp; TREASURIES</h3>
<div className="font-display text-4xl font-semibold">Organizations</div>
</div>
<ul className="space-y-4 font-mono text-xs text-zinc-800">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-purple" icon="solar:check-circle-bold"></iconify-icon> Payroll privacy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-purple" icon="solar:check-circle-bold"></iconify-icon> Vendor payment confidentiality</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-purple" icon="solar:check-circle-bold"></iconify-icon> Selective disclosure</li>
</ul>
<button className="w-full py-3 bg-brand-purple text-white font-mono text-xs uppercase hover:bg-violet-600 transition-colors mt-4">Integrate</button>
</div>

<div className="bg-white border border-zinc-200 p-8 flex flex-col gap-6">
<div className="">
<h3 className="font-mono text-sm uppercase text-brand-orange mb-2">INDIVIDUALS</h3>
<div className="font-display text-4xl font-semibold">Traders</div>
</div>
<ul className="space-y-3 font-mono text-xs text-zinc-600">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-orange" icon="solar:check-circle-linear"></iconify-icon> Prevent wallet tracking</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-orange" icon="solar:check-circle-linear"></iconify-icon> Avoid copy-trading</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-orange" icon="solar:check-circle-linear"></iconify-icon> MEV protection</li>
</ul>
<button className="w-full py-3 border border-zinc-200 font-mono text-xs uppercase hover:border-brand-orange hover:text-brand-orange transition-colors">Launch App</button>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[800px] mx-auto">
<div className="mb-12 border-b border-zinc-200 pb-4">
<h2 className="text-2xl font-display font-medium tracking-tight text-zinc-950">TECHNICAL SPECIFICATIONS</h2>
</div>
<div className="space-y-0">

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none hover:bg-white transition-colors px-2">
<span className="font-mono text-sm text-zinc-800">Is this a mixer?</span>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-zinc-400 group-hover:text-brand-orange transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 px-2 text-zinc-500 font-body text-sm leading-relaxed">
                    No. SolSeal provides permanently encrypted balances. Mixers only obfuscate the link between sender and receiver temporarily. SolSeal keeps the amount itself hidden even while you hold it or stake it.
                </div>
</details>

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none hover:bg-white transition-colors px-2">
<span className="font-mono text-sm text-zinc-800">How fast are transactions?</span>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-zinc-400 group-hover:text-brand-orange transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 px-2 text-zinc-500 font-body text-sm leading-relaxed">
                    Deposits take ~1 second. Encrypted transfers take 3-5 seconds. Withdrawals require proof generation, taking roughly 5-15 seconds.
                </div>
</details>

<details className="group border-b border-zinc-200">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none hover:bg-white transition-colors px-2">
<span className="font-mono text-sm text-zinc-800">Can regulators view my funds?</span>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-zinc-400 group-hover:text-brand-orange transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 px-2 text-zinc-500 font-body text-sm leading-relaxed">
                    Only if you share your viewing key. The protocol is designed for selective disclosure, allowing you to prove solvency or compliance to specific parties without making data public.
                </div>
</details>
</div>
</section>

<footer className="bg-zinc-100 border-t border-zinc-200 pt-20 pb-0 relative overflow-hidden">
<div className="px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-32 z-10 relative">

<div className="flex flex-col gap-4">
<h4 className="font-mono text-xs uppercase text-zinc-400 mb-2">[Protocol]</h4>
<a className="text-sm text-zinc-600 hover:text-brand-orange transition-colors" href="#">Vaults</a>
<a className="text-sm text-zinc-600 hover:text-brand-orange transition-colors" href="#">Privacy Pools</a>
<a className="text-sm text-zinc-600 hover:text-brand-orange transition-colors" href="#">Developers</a>
<a className="text-sm text-zinc-600 hover:text-brand-orange transition-colors" href="#">Audits</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-xs uppercase text-zinc-400 mb-2">[Resources]</h4>
<a className="text-sm text-zinc-600 hover:text-zinc-950" href="#">Whitepaper</a>
<a className="text-sm text-zinc-600 hover:text-zinc-950" href="#">Documentation</a>
<a className="text-sm text-zinc-600 hover:text-zinc-950" href="#">Github</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-xs uppercase text-zinc-400 mb-2">[Compliance]</h4>
<a className="text-sm text-zinc-600 hover:text-zinc-950" href="#">Terms of Service</a>
<a className="text-sm text-zinc-600 hover:text-zinc-950" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-600 hover:text-zinc-950" href="#">Regulatory</a>
</div>

<div className="hidden md:block"></div>

<div className="col-span-2 md:col-span-1">
<h4 className="font-mono text-xs uppercase text-zinc-400 mb-4">Encryption is a human right.</h4>
<form className="flex flex-col gap-2">
<input className="bg-white border border-zinc-200 p-2 text-sm font-mono focus:outline-none focus:border-brand-orange placeholder:text-zinc-300" placeholder="Email Address" type="email"/>
<button className="bg-zinc-950 text-white py-2 px-4 text-xs font-mono uppercase hover:bg-brand-orange transition-colors" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="px-6 md:px-12 max-w-[1600px] mx-auto border-t border-zinc-200 py-6 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
<p className="font-mono text-[10px] text-zinc-400 uppercase">© 2025 SolSeal Protocol. Built on Solana.</p>
<p className="font-mono text-[10px] text-zinc-400 uppercase">System Status: <span className="text-brand-emerald">Operational</span></p>
</div>

<div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
<h1 className="font-display font-bold text-[20vw] leading-none tracking-tighter text-zinc-950 opacity-[0.03]">SOLSEAL</h1>
</div>
</footer>

    </>
  );
}
