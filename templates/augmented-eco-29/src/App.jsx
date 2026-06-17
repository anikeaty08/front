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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
dark: '#05070A',
surface: '#0F1219',
border: '#1E2330',
cyan: '#00F0FF',
purple: '#7000FF',
text: '#E2E8F0',
muted: '#94A3B8'
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1E2330 1px, transparent 1px), linear-gradient(to bottom, #1E2330 1px, transparent 1px)",
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed w-full z-50 top-0 start-0 glass-panel border-b border-brand-border">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between mx-auto p-4">
<a className="flex items-center space-x-3 rtl:space-x-reverse group" href="#">
<div className="relative flex items-center justify-center w-10 h-10 rounded bg-gradient-to-br from-brand-purple to-brand-cyan">
<i className="text-white w-6 h-6" data-lucide="blocks"></i>
</div>
<span className="self-center text-2xl font-display font-bold whitespace-nowrap tracking-tight text-white group-hover:neon-text transition-all duration-300">TASE LEDGER</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
<button className="text-white bg-white/5 hover:bg-white/10 border border-white/10 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all flex items-center gap-2" type="button">
<i className="w-4 h-4" data-lucide="wallet"></i> Connect Wallet
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li><a className="block py-2 px-3 text-brand-cyan hover:text-white transition-colors" href="#hero">Home</a></li>
<li><a className="block py-2 px-3 text-brand-muted hover:text-white transition-colors" href="#dashboard">App Preview</a></li>
<li><a className="block py-2 px-3 text-brand-muted hover:text-white transition-colors" href="#ecosystem">Ecosystem</a></li>
<li><a className="block py-2 px-3 text-brand-muted hover:text-white transition-colors" href="#team">Team</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="hero">

<div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-20 z-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-radial from-brand-purple/10 via-transparent to-brand-dark z-0"></div>

<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">

<div className="map-dot top-1/3 left-1/2"></div>
<div className="map-dot top-1/3 left-[55%] animation-delay-500"></div>
<div className="map-dot top-[40%] left-[48%] animation-delay-1000"></div>
<div className="map-dot top-[45%] left-[52%] animation-delay-1500"></div>

<svg className="absolute top-0 left-0 w-full h-full stroke-brand-cyan/20" height="100%" width="100%">
<line strokeWidth="1" x1="50%" x2="55%" y1="33%" y2="33%"></line>
<line strokeWidth="1" x1="50%" x2="48%" y1="33%" y2="40%"></line>
<line strokeWidth="1" x1="48%" x2="52%" y1="40%" y2="45%"></line>
</svg>
</div>
<div className="container mx-auto px-4 z-10 relative text-center max-w-5xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-medium mb-8 animate-pulse-slow">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
</span>
                Live on Ethereum &amp; Polygon Mainnet
            </div>
<h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-cyan to-brand-purple pb-2">
                Trailer flows, <br/> secured on-chain.
            </h1>
<p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                TASE LEDGER is the blockchain-powered platform for European logistics. Track trailer exchanges, rentals, and breakdowns with full transparency and zero disputes.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-brand-dark font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]" href="#dashboard">
                    Explore Dashboard Demo <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-medium rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#solution">
                    How It Works
                </a>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-display font-bold text-xl"><i className="text-brand-purple" data-lucide="hexagon"></i> POLYGON</div>
<div className="flex items-center gap-2 font-display font-bold text-xl"><i className="text-blue-400" data-lucide="gem"></i> ETHEREUM</div>
<div className="flex items-center gap-2 font-display font-bold text-xl"><i className="text-green-400" data-lucide="database"></i> IPFS</div>
<div className="flex items-center gap-2 font-display font-bold text-xl"><i className="text-yellow-400" data-lucide="key"></i> WALLETCONNECT</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface relative" id="solution">
<div className="container mx-auto px-4">

<div className="mb-24">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Transport logistics is fragmented.</h2>
<p className="text-brand-muted">The current state of trailer management is chaotic.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-purple/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
<i className="text-red-500 w-6 h-6" data-lucide="file-spreadsheet"></i>
</div>
<h3 className="font-display font-bold text-lg mb-2">Scattered Data</h3>
<p className="text-sm text-brand-muted">Information lost across Excel sheets, emails, and phone calls.</p>
</div>

<div className="p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-purple/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
<i className="text-red-500 w-6 h-6" data-lucide="eye-off"></i>
</div>
<h3 className="font-display font-bold text-lg mb-2">Zero Visibility</h3>
<p className="text-sm text-brand-muted">Lost visibility over trailer location &amp; who is responsible.</p>
</div>

<div className="p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-purple/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
<i className="text-red-500 w-6 h-6" data-lucide="gavel"></i>
</div>
<h3 className="font-display font-bold text-lg mb-2">Frequent Disputes</h3>
<p className="text-sm text-brand-muted">Conflicts between carriers and traction companies over damage.</p>
</div>

<div className="p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-purple/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
<i className="text-red-500 w-6 h-6" data-lucide="history"></i>
</div>
<h3 className="font-display font-bold text-lg mb-2">No History</h3>
<p className="text-sm text-brand-muted">No unified event history for transfers or incidents.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 md:p-12 border border-brand-cyan/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] pointer-events-none"></div>
<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-5xl font-display font-bold mb-4">A single source of truth.</h2>
<p className="text-brand-muted max-w-xl mx-auto">We replace paper trails with immutable blockchain ledgers.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative z-10">

<div className="text-center group">
<div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-border to-brand-dark border border-brand-border flex items-center justify-center mb-6 shadow-lg group-hover:border-brand-cyan transition-colors">
<i className="text-brand-cyan w-8 h-8" data-lucide="link"></i>
</div>
<h3 className="text-xl font-bold mb-3">On-chain Events</h3>
<p className="text-brand-muted text-sm leading-relaxed">All exchanges, rentals, deliveries, and breakdowns are recorded immutably on the Ledger.</p>
</div>

<div className="text-center group">
<div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-border to-brand-dark border border-brand-border flex items-center justify-center mb-6 shadow-lg group-hover:border-brand-purple transition-colors">
<i className="text-brand-purple w-8 h-8" data-lucide="file-signature"></i>
</div>
<h3 className="text-xl font-bold mb-3">Smart Rental Contracts</h3>
<p className="text-brand-muted text-sm leading-relaxed">Auto-signed agreements with built-in SLA, restitution rules, and dates enforced by code.</p>
</div>

<div className="text-center group">
<div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-border to-brand-dark border border-brand-border flex items-center justify-center mb-6 shadow-lg group-hover:border-white transition-colors">
<i className="text-white w-8 h-8" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-bold mb-3">European Tracking</h3>
<p className="text-brand-muted text-sm leading-relaxed">Real-time status visibility: in-transit, at depot, rented, broken down, or in repair.</p>
</div>
</div>
</div>

<div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-brand-cyan text-brand-dark font-bold flex items-center justify-center">1</div>
<span className="font-medium">Create Contract</span>
</div>
<div className="hidden md:block w-24 h-px bg-brand-border"></div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-brand-purple text-white font-bold flex items-center justify-center">2</div>
<span className="font-medium">Scan Trailer</span>
</div>
<div className="hidden md:block w-24 h-px bg-brand-border"></div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white text-brand-dark font-bold flex items-center justify-center">3</div>
<span className="font-medium">Sign via Wallet</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative" id="dashboard">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="text-3xl md:text-5xl font-display font-bold mb-2">Live Ledger.</h2>
<p className="text-brand-muted">Real-time oversight of fleet operations.</p>
</div>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
<span className="text-sm font-mono text-green-400">Network Synced</span>
</div>
</div>

<div className="rounded-xl border border-brand-border bg-[#0B0F19] overflow-hidden shadow-2xl relative">

<div className="border-b border-brand-border p-4 flex justify-between items-center bg-[#0F1219]">
<div className="flex gap-6 text-sm font-medium">
<div className="flex items-center gap-2 text-brand-cyan cursor-pointer"><i className="w-4 h-4" data-lucide="layout-grid"></i> Fleet</div>
<div className="flex items-center gap-2 text-brand-muted hover:text-white cursor-pointer"><i className="w-4 h-4" data-lucide="scroll-text"></i> Ledger</div>
<div className="flex items-center gap-2 text-brand-muted hover:text-white cursor-pointer"><i className="w-4 h-4" data-lucide="alert-triangle"></i> Incidents <span className="bg-red-500/20 text-red-500 px-1.5 rounded text-xs">2</span></div>
<div className="flex items-center gap-2 text-brand-muted hover:text-white cursor-pointer"><i className="w-4 h-4" data-lucide="file-key"></i> Contracts</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-brand-purple to-brand-cyan"></div>
<span className="text-sm font-mono text-brand-muted">0x71C...39A2</span>
</div>
</div>
<div className="p-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-brand-surface border border-brand-border p-4 rounded-lg">
<p className="text-xs text-brand-muted uppercase">Active Trailers</p>
<p className="text-2xl font-display font-bold mt-1 text-white">214</p>
<div className="h-1 w-full bg-brand-dark mt-2 overflow-hidden rounded"><div className="h-full bg-brand-cyan w-[80%]"></div></div>
</div>
<div className="bg-brand-surface border border-brand-border p-4 rounded-lg">
<p className="text-xs text-brand-muted uppercase">Utilization</p>
<p className="text-2xl font-display font-bold mt-1 text-brand-purple">87%</p>
<div className="h-1 w-full bg-brand-dark mt-2 overflow-hidden rounded"><div className="h-full bg-brand-purple w-[87%]"></div></div>
</div>
<div className="bg-brand-surface border border-brand-border p-4 rounded-lg">
<p className="text-xs text-brand-muted uppercase">Avg Downtime</p>
<p className="text-2xl font-display font-bold mt-1 text-white">1.2 Days</p>
<div className="h-1 w-full bg-brand-dark mt-2 overflow-hidden rounded"><div className="h-full bg-green-500 w-[20%]"></div></div>
</div>
<div className="bg-brand-surface border border-brand-border p-4 rounded-lg">
<p className="text-xs text-brand-muted uppercase">Open Incidents</p>
<p className="text-2xl font-display font-bold mt-1 text-red-500">2</p>
<div className="h-1 w-full bg-brand-dark mt-2 overflow-hidden rounded"><div className="h-full bg-red-500 w-[10%]"></div></div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-brand-surface border border-brand-border rounded-lg overflow-hidden">
<div className="p-4 border-b border-brand-border flex justify-between items-center">
<h3 className="font-bold">Active Fleet</h3>
<div className="flex gap-2">
<span className="text-xs bg-brand-dark border border-brand-border px-2 py-1 rounded text-brand-muted cursor-pointer hover:text-white">Filter</span>
</div>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-brand-dark text-brand-muted font-mono uppercase text-xs">
<tr>
<th className="p-4">ID (NFT)</th>
<th className="p-4">Status</th>
<th className="p-4">Location</th>
<th className="p-4">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-brand-border">
<tr className="hover:bg-brand-dark/50 cursor-pointer group">
<td className="p-4 font-mono text-brand-cyan">#TASE-042</td>
<td className="p-4"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded-full text-xs border border-green-500/20">In Transit</span></td>
<td className="p-4 text-brand-muted">Lyon, FR</td>
<td className="p-4"><i className="w-4 h-4 text-brand-muted group-hover:text-white" data-lucide="chevron-right"></i></td>
</tr>
<tr className="hover:bg-brand-dark/50 cursor-pointer bg-brand-dark/30">
<td className="p-4 font-mono text-brand-cyan">#TASE-109</td>
<td className="p-4"><span className="bg-brand-purple/10 text-brand-purple px-2 py-1 rounded-full text-xs border border-brand-purple/20">Rented</span></td>
<td className="p-4 text-brand-muted">Berlin, DE</td>
<td className="p-4"><i className="w-4 h-4 text-brand-muted" data-lucide="chevron-right"></i></td>
</tr>
<tr className="hover:bg-brand-dark/50 cursor-pointer">
<td className="p-4 font-mono text-brand-cyan">#TASE-015</td>
<td className="p-4"><span className="bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs border border-red-500/20">Broken Down</span></td>
<td className="p-4 text-brand-muted">A6 Highway</td>
<td className="p-4"><i className="w-4 h-4 text-brand-muted" data-lucide="chevron-right"></i></td>
</tr>
<tr className="hover:bg-brand-dark/50 cursor-pointer">
<td className="p-4 font-mono text-brand-cyan">#TASE-221</td>
<td className="p-4"><span className="bg-gray-500/10 text-gray-400 px-2 py-1 rounded-full text-xs border border-gray-500/20">At Depot</span></td>
<td className="p-4 text-brand-muted">Milan, IT</td>
<td className="p-4"><i className="w-4 h-4 text-brand-muted" data-lucide="chevron-right"></i></td>
</tr>
</tbody>
</table>
</div>

<div className="lg:col-span-1 bg-brand-dark border border-brand-border rounded-lg p-4">
<h3 className="font-bold mb-4 flex items-center gap-2"><i className="w-4 h-4 text-brand-purple" data-lucide="history"></i> Ledger: #TASE-042</h3>
<div className="relative border-l border-brand-border ml-2 space-y-6">

<div className="ml-4 relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-brand-cyan ring-4 ring-brand-dark"></div>
<div className="text-xs text-brand-muted font-mono mb-1">Oct 24, 14:30 • Lyon Depot</div>
<p className="font-medium text-sm">Departure Scan</p>
<p className="text-xs text-brand-muted mt-1 truncate">Tx: 0x8a...42b1 <i className="inline w-3 h-3" data-lucide="external-link"></i></p>
</div>

<div className="ml-4 relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-brand-purple ring-4 ring-brand-dark"></div>
<div className="text-xs text-brand-muted font-mono mb-1">Oct 24, 09:00 • Smart Contract</div>
<p className="font-medium text-sm">Rental Start Signed</p>
<div className="mt-2 p-2 bg-brand-surface rounded border border-brand-border text-xs flex items-center gap-2">
<i className="w-3 h-3 text-green-400" data-lucide="file-check"></i> Signed by Carrier
                                    </div>
</div>

<div className="ml-4 relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-brand-border ring-4 ring-brand-dark"></div>
<div className="text-xs text-brand-muted font-mono mb-1">Oct 23, 18:00 • Paris Hub</div>
<p className="font-medium text-sm">Transfer Check-in</p>
</div>
</div>

<div className="mt-6 pt-4 border-t border-brand-border">
<button className="w-full py-2 bg-brand-purple/20 text-brand-purple border border-brand-purple/50 rounded hover:bg-brand-purple/30 transition text-sm font-medium flex items-center justify-center gap-2">
                                    View Smart Contract
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface border-y border-brand-border" id="ecosystem">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-display font-bold mb-4">European Ecosystem</h2>
<p className="text-brand-muted max-w-2xl mx-auto">Built with and for the European transport industry. TASE LEDGER connects traction companies, carriers, and workshops into a shared ledger.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-4">
<h3 className="font-display font-bold text-lg border-b border-brand-border pb-2 text-brand-cyan">Transport &amp; Logistics</h3>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-brand-cyan transition-colors">DHL</div>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-brand-cyan transition-colors">DSV</div>
<p className="text-xs text-brand-muted">Live fleet integration &amp; smart rentals.</p>
</div>

<div className="space-y-4">
<h3 className="font-display font-bold text-lg border-b border-brand-border pb-2 text-brand-purple">Depots &amp; Hubs</h3>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-brand-purple transition-colors">TIP</div>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-brand-purple transition-colors">EUROGATE</div>
<p className="text-xs text-brand-muted">Automated check-in/out events.</p>
</div>

<div className="space-y-4">
<h3 className="font-display font-bold text-lg border-b border-brand-border pb-2 text-white">Assistance</h3>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-white transition-colors">AD TRUCK</div>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-white transition-colors">SERVICE24</div>
<p className="text-xs text-brand-muted">Incident reporting &amp; repair lifecycle.</p>
</div>

<div className="space-y-4">
<h3 className="font-display font-bold text-lg border-b border-brand-border pb-2 text-brand-muted">Blockchain</h3>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-gray-500 transition-colors">CHAINLINK</div>
<div className="h-20 bg-brand-dark border border-brand-border rounded flex items-center justify-center text-brand-muted font-bold text-xl hover:border-gray-500 transition-colors">THE GRAPH</div>
<p className="text-xs text-brand-muted">Secure infrastructure data.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-brand-cyan hover:text-white font-medium transition-colors border-b border-brand-cyan hover:border-white pb-1" href="#">
                    Join the Partner Network <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="team">

<div className="absolute -right-20 top-40 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The Governance.</h2>
<p className="text-brand-muted text-lg">Experts in European logistics and Web3 engineering.</p>
</div>
<div className="mt-6 md:mt-0 flex gap-4">
<div className="px-4 py-2 rounded-full border border-brand-border bg-brand-surface text-sm text-brand-muted">Transparency</div>
<div className="px-4 py-2 rounded-full border border-brand-border bg-brand-surface text-sm text-brand-muted">Accountability</div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="bg-brand-surface p-6 rounded-xl border border-brand-border hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-gray-700 mb-4 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xl font-bold">JD</div>
</div>
<h3 className="font-bold text-lg">Jean Dupont</h3>
<p className="text-brand-cyan text-sm mb-3">CEO &amp; Co-Founder</p>
<p className="text-sm text-brand-muted leading-relaxed">20 years in freight logistics. Former Ops Director at Major Euro Carrier.</p>
</div>

<div className="bg-brand-surface p-6 rounded-xl border border-brand-border hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-gray-700 mb-4 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xl font-bold">AS</div>
</div>
<h3 className="font-bold text-lg">Alina S.</h3>
<p className="text-brand-purple text-sm mb-3">CTO</p>
<p className="text-sm text-brand-muted leading-relaxed">Ethereum Core Contributor. Expert in Solidity and ZK-Rollups.</p>
</div>

<div className="bg-brand-surface p-6 rounded-xl border border-brand-border hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-gray-700 mb-4 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xl font-bold">MK</div>
</div>
<h3 className="font-bold text-lg">Marcus K.</h3>
<p className="text-brand-muted text-sm mb-3">Head of Operations</p>
<p className="text-sm text-brand-muted leading-relaxed">Managed fleet of 500+ trailers across DACH region.</p>
</div>

<div className="bg-brand-surface p-6 rounded-xl border border-brand-border hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-gray-700 mb-4 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-xl font-bold">EL</div>
</div>
<h3 className="font-bold text-lg">Elena L.</h3>
<p className="text-brand-muted text-sm mb-3">Product Design</p>
<p className="text-sm text-brand-muted leading-relaxed">Specialist in complex B2B interfaces and dApp usability.</p>
</div>
</div>

<div className="glass-panel p-10 rounded-2xl text-center border border-brand-border">
<h3 className="text-2xl font-bold mb-4">Want to build the future of logistics?</h3>
<div className="flex justify-center gap-4">
<button className="px-6 py-3 bg-brand-surface border border-brand-border rounded-lg hover:border-brand-text transition-colors text-sm">See Open Positions</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020305] border-t border-brand-border pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center space-x-2 mb-4">
<i className="text-brand-cyan w-6 h-6" data-lucide="blocks"></i>
<span className="text-xl font-display font-bold text-white">TASE LEDGER</span>
</div>
<p className="text-brand-muted text-sm max-w-xs">
                        The unified blockchain standard for European trailer assistance and tracking.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
<div>
<h4 className="font-bold mb-4 text-white">Product</h4>
<ul className="space-y-2 text-sm text-brand-muted">
<li><a className="hover:text-brand-cyan" href="#">Dashboard</a></li>
<li><a className="hover:text-brand-cyan" href="#">Smart Contracts</a></li>
<li><a className="hover:text-brand-cyan" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-white">Company</h4>
<ul className="space-y-2 text-sm text-brand-muted">
<li><a className="hover:text-brand-cyan" href="#">About</a></li>
<li><a className="hover:text-brand-cyan" href="#">Partners</a></li>
<li><a className="hover:text-brand-cyan" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-white">Resources</h4>
<ul className="space-y-2 text-sm text-brand-muted">
<li><a className="hover:text-brand-cyan" href="#">Documentation</a></li>
<li><a className="hover:text-brand-cyan" href="#">Whitepaper</a></li>
<li><a className="hover:text-brand-cyan" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-white">Contact</h4>
<ul className="space-y-2 text-sm text-brand-muted">
<li><a className="hover:text-brand-cyan" href="#">Twitter</a></li>
<li><a className="hover:text-brand-cyan" href="#">Discord</a></li>
<li><a className="hover:text-brand-cyan" href="#">Email Us</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-brand-border pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted">
<p>TASE Trailer Assistance Services Europe © All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
