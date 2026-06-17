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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
neutral: {
900: '#171717',
925: '#0a0a0a',
950: '#050505',
},
brand: {
500: '#3b82f6', // Updated to Blue to match the new Logo
600: '#2563eb',
}
},
backgroundImage: {
'grid-white': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
'radial-glow': "radial-gradient(circle at center, var(--tw-gradient-stops))",
},
letterSpacing: {
tightest: '-0.06em',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'beam': 'beam 2s linear infinite',
},
keyframes: {
beam: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
}
}
}
}
}



        const cards = document.querySelectorAll(".spotlight-card");
        document.body.addEventListener("mousemove", (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex flex-col items-end group leading-none select-none" href="#">
<span className="block">
<img alt="RocketTools" className="h-8 w-auto object-contain" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/6688e358a3b05e364aa27cb7.png"/>
</span>
<span className="text-xs font-medium text-gray-500 tracking-wide -mt-0.5">tools.io</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-gray-400 hover:text-white transition-colors" href="#problem">Problem</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#solution">Solution</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#process">Process</a>
</div>
<div className="">
<a className="hidden sm:inline-flex items-center justify-center transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 text-xs font-medium text-white bg-white/5 h-9 border-white/10 border rounded-md pr-4 pl-4" href="https://calendly.com/docdano/30min">
                    Book Discovery
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">

<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                Agentic automation for real business
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tightest mb-6 max-w-4xl mx-auto leading-[0.95]">
                Hire the agent. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Promote the human.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                We build intelligent agents that make decisions, handle exceptions, and run complex processes autonomously.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="inline-flex transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white items-center justify-center text-sm font-medium text-neutral-950 bg-white h-12 rounded-lg pr-8 pl-8" href="https://calendly.com/docdano/30min">
    Book a Discovery Call
    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="hidden inline-flex transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 text-sm font-medium text-white bg-transparent h-12 border-white/10 border rounded-lg pr-8 pl-8 items-center justify-center">
    See how it works
</button>
</div>

<div className="mt-20 w-full max-w-4xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900/90 backdrop-blur shadow-2xl overflow-hidden">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="ml-2 text-[10px] text-gray-500 font-mono">agent_core_v2.tsx</div>
</div>
<div className="p-6 font-mono text-xs md:text-sm text-gray-400 leading-relaxed overflow-x-auto">
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">1</div>
<div><span className="text-purple-400">const</span> <span className="text-blue-400">revenueAuditAgent</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">Agent</span>({</div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">2</div>
<div className="pl-4">role: <span className="text-green-400">'Financial Analyst'</span>,</div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">3</div>
<div className="pl-4">capabilities: [<span className="text-green-400">'QuickBooks'</span>, <span className="text-green-400">'Stripe'</span>, <span className="text-green-400">'Gmail'</span>],</div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">4</div>
<div className="pl-4">goal: <span className="text-green-400">'Reconcile invoices and flag anomalies'</span>,</div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">5</div>
<div className="pl-4">autonomyLevel: <span className="text-blue-400">Level.HIGH</span></div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">6</div>
<div>});</div>
</div>
<div className="flex gap-4 mt-2">
<div className="text-gray-600 select-none text-right w-6">7</div>
<div><span className="text-gray-500">// Executing workflow...</span></div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">8</div>
<div className="text-white"><span className="text-green-500">✓</span> Found 142 discrepancies.</div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">9</div>
<div className="text-white"><span className="text-green-500">✓</span> 140 auto-resolved via invoice matching.</div>
</div>
<div className="flex gap-4">
<div className="text-gray-600 select-none text-right w-6">10</div>
<div className="text-white relative"><span className="text-yellow-500">⚠</span> 2 escalated to Human Controller. <span className="absolute inline-block w-2 h-4 bg-gray-500 ml-1 animate-pulse"></span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 py-10 bg-neutral-925">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-500 uppercase tracking-widest mb-8">We build in the modern stack</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<svg aria-hidden="true" className="iconify text-3xl md:text-4xl text-white iconify--simple-icons" data-icon="simple-icons:n8n" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.474 5.684a2.53 2.53 0 0 0-2.447 1.895H16.13a2.526 2.526 0 0 0-2.492 2.11l-.103.624a1.26 1.26 0 0 1-1.246 1.055h-1.001a2.527 2.527 0 0 0-4.893 0H4.973a2.527 2.527 0 1 0 0 1.264h1.422a2.527 2.527 0 0 0 4.894 0h1a1.26 1.26 0 0 1 1.247 1.055l.103.623a2.526 2.526 0 0 0 2.492 2.111h.37a2.527 2.527 0 1 0 0-1.263h-.37a1.26 1.26 0 0 1-1.246-1.056l-.103-.623A2.52 2.52 0 0 0 13.96 12a2.52 2.52 0 0 0 .82-1.48l.104-.622a1.26 1.26 0 0 1 1.246-1.056h2.896a2.527 2.527 0 1 0 2.447-3.158m0 1.263a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.264A1.263 1.263 0 0 1 20.21 8.21a1.263 1.263 0 0 1 1.264-1.263m-18.948 3.79A1.263 1.263 0 0 1 3.79 12a1.263 1.263 0 0 1-1.264 1.263A1.263 1.263 0 0 1 1.263 12a1.263 1.263 0 0 1 1.263-1.263m6.316 0A1.263 1.263 0 0 1 10.105 12a1.263 1.263 0 0 1-1.263 1.263A1.263 1.263 0 0 1 7.58 12a1.263 1.263 0 0 1 1.263-1.263m10.106 3.79a1.263 1.263 0 0 1 1.263 1.263a1.263 1.263 0 0 1-1.263 1.263a1.263 1.263 0 0 1-1.264-1.263a1.263 1.263 0 0 1 1.263-1.264" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-3xl md:text-4xl text-white iconify--simple-icons" data-icon="simple-icons:zapier" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.157 0A4.15 4.15 0 0 0 0 4.161v15.678A4.15 4.15 0 0 0 4.157 24h15.682A4.15 4.15 0 0 0 24 19.839V4.161A4.15 4.15 0 0 0 19.839 0zm10.61 8.761h.03a.6.6 0 0 1 .23.038a.6.6 0 0 1 .201.124a.63.63 0 0 1 .162.431a.6.6 0 0 1-.162.435a.6.6 0 0 1-.201.128a.6.6 0 0 1-.23.042a.5.5 0 0 1-.235-.042a.6.6 0 0 1-.332-.328a.6.6 0 0 1-.038-.235a.6.6 0 0 1 .17-.431a.6.6 0 0 1 .405-.162m2.853 1.572q.044.005.095.004c.325-.011.646.064.937.219c.238.144.431.355.552.609c.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265a.7.7 0 0 0 .484-.136a.64.64 0 0 0 .23-.318l.915.257a1.4 1.4 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.2 2.2 0 0 1-.836.136a1.9 1.9 0 0 1-1.001-.245a1.6 1.6 0 0 1-.665-.703a2.2 2.2 0 0 1-.227-1.036a1.95 1.95 0 0 1 .48-1.398a1.9 1.9 0 0 1 1.3-.488m-9.607.023c.162.004.325.026.48.079c.207.065.4.174.563.314c.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065q-.096.245-.272.439a1.1 1.1 0 0 1-.374.264a1 1 0 0 1-.453.083a1.33 1.33 0 0 1-.866-.264a.97.97 0 0 1-.329-.801a1 1 0 0 1 .076-.431a1 1 0 0 1 .242-.363a1.48 1.48 0 0 1 1.043-.303h.952v-.181a.7.7 0 0 0-.136-.454a.55.55 0 0 0-.438-.154a.7.7 0 0 0-.378.086a.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378c.261-.091.54-.136.82-.129q.078-.006.163-.007m4.384.007c.174 0 .347.038.506.114c.182.083.34.211.458.374c.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448a1.15 1.15 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.05 1.05 0 0 1-.48-.457a1.3 1.3 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.13 1.13 0 0 1 .843-.344h.076zm7.559.084h.903l.113.805h.053a1.4 1.4 0 0 1 .235-.484a.8.8 0 0 1 .313-.242a.8.8 0 0 1 .39-.076h.234v1.051h-.401a.66.66 0 0 0-.313.008a.6.6 0 0 0-.272.155a.66.66 0 0 0-.174.26a.7.7 0 0 0-.027.314v1.875h-1.054zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754l-.045-.117H2.441zm11.815 0h1.055v3.659h-1.055zm3.443.684l.019.016a.7.7 0 0 0-.351.045a.76.76 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787zm-5.718.163c-.026 0-.057 0-.083.004a.8.8 0 0 0-.31.053a.75.75 0 0 0-.257.189a1.02 1.02 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.63.63 0 0 0 .253.196a.64.64 0 0 0 .314.061a.64.64 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.2 1.2 0 0 0-.181-.711a.68.68 0 0 0-.503-.257m-4.509 1.266a.46.46 0 0 0-.268.102a.37.37 0 0 0-.114.276q0 .08.027.155a.4.4 0 0 0 .087.132a.58.58 0 0 0 .397.11v.004a.86.86 0 0 0 .563-.182a.57.57 0 0 0 .211-.457v-.14z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-3xl md:text-4xl text-white iconify--simple-icons" data-icon="simple-icons:openai" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-3xl md:text-4xl text-white iconify--simple-icons" data-icon="simple-icons:anthropic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-3xl md:text-4xl text-white iconify--simple-icons" data-icon="simple-icons:airtable" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.27 3.27 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.3 3.3 0 0 0-1.272-.257M23.4 8.056a.6.6 0 0 0-.222.045l-10.012 3.877a.61.61 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.58.58 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.64.64 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006l.307-.147l2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.6.6 0 0 0-.207-.044z" fill="currentColor"></path></svg>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Your best people are stuck doing the <span className="text-gray-500">worst work.</span>
</h2>
<p className="text-lg text-gray-400 leading-relaxed mb-8">
                        Data entry. Copy-paste. Chasing approvals. Updating spreadsheets. Manually moving information from one system to another.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-red-500 mt-1 iconify--lucide" data-icon="lucide:x-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span className="text-gray-300">Errors in manual data entry cost hours of rework.</span>
</div>
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-red-500 mt-1 iconify--lucide" data-icon="lucide:x-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span className="text-gray-300">Context switching destroys deep work focus.</span>
</div>
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-red-500 mt-1 iconify--lucide" data-icon="lucide:x-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span className="text-gray-300">That's not what you hired them for.</span>
</div>
</div>
</div>

<div className="relative h-96 w-full flex items-center justify-center">
<div className="absolute w-64 h-40 bg-neutral-900 border border-white/10 rounded-lg shadow-2xl p-4 rotate-[-6deg] z-10 translate-x-[-20px] translate-y-[-20px] flex flex-col gap-2">
<div className="h-2 w-12 bg-gray-800 rounded"></div>
<div className="h-2 w-full bg-gray-800 rounded"></div>
<div className="h-2 w-3/4 bg-gray-800 rounded"></div>
<div className="mt-auto flex justify-end">
<div className="h-6 w-16 bg-red-900/20 rounded border border-red-500/20 flex items-center justify-center text-[10px] text-red-400">Overdue</div>
</div>
</div>
<div className="absolute w-64 h-40 bg-neutral-900 border border-white/10 rounded-lg shadow-2xl p-4 rotate-[3deg] z-20 translate-x-[10px] flex flex-col gap-2">
<div className="h-2 w-16 bg-gray-800 rounded"></div>
<div className="h-2 w-full bg-gray-800 rounded"></div>
<div className="h-2 w-1/2 bg-gray-800 rounded"></div>
<div className="mt-auto flex justify-end">
<div className="h-6 w-16 bg-red-900/20 rounded border border-red-500/20 flex items-center justify-center text-[10px] text-red-400">Manual</div>
</div>
</div>
<div className="absolute w-64 h-40 bg-neutral-800 border border-white/10 rounded-lg shadow-2xl p-4 rotate-[-2deg] z-30 translate-y-[30px] flex flex-col gap-2 opacity-60 blur-[1px]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-925 border-y border-white/5 relative overflow-hidden" id="solution">
<div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Agents handle the grind. <br/>
<span className="text-gray-500">Humans do the thinking.</span>
</h2>
<p className="text-lg text-gray-400 max-w-2xl">
                We build AI agents that take over your most tedious workflows. Not simple automations that break when something unexpected happens — intelligent systems that adapt.
            </p>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 row-span-2 rounded-xl bg-neutral-900 border border-white/5 p-8 relative overflow-hidden group spotlight-card" style={{'--mouse-x': '985px', '--mouse-y': '-1836.75px'}}>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Autonomous AI Agents</h3>
<p className="text-sm text-gray-400 max-w-md mb-8">Workflows that think, not just execute. Our agents read documents, reason about data, and make decisions within set parameters.</p>
<div className="mt-auto w-full h-48 bg-neutral-950 border border-white/5 rounded-lg overflow-hidden relative">

<div className="absolute inset-0 flex flex-col p-4 gap-2">
<div className="flex gap-2 items-center text-xs text-gray-500 font-mono">
<span className="text-green-500">➜</span> INPUT: Received Unstructured PDF
                            </div>
<div className="flex gap-2 items-center text-xs text-gray-500 font-mono">
<span className="text-blue-500">●</span> PROCESSING: Extracting Entities
                            </div>
<div className="flex gap-2 items-center text-xs text-gray-500 font-mono pl-4 border-l border-white/5">
<span className="text-gray-600">Found:</span> Invoice #9921
                            </div>
<div className="flex gap-2 items-center text-xs text-gray-500 font-mono pl-4 border-l border-white/5">
<span className="text-gray-600">Found:</span> Vendor: Acme Corp
                            </div>
<div className="flex gap-2 items-center text-xs text-gray-500 font-mono">
<span className="text-brand-500">★</span> ACTION: Drafted Payment in Stripe
                            </div>
</div>
</div>
</div>
</div>

<div className="col-span-1 rounded-xl bg-neutral-900 border border-white/5 p-6 relative overflow-hidden group spotlight-card" style={{'--mouse-x': '233.671875px', '--mouse-y': '-1836.75px'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Process Automation</h3>
<p className="text-sm text-gray-400">Eliminate manual handoffs and repetitive decisions. Streamline the path from A to B.</p>
</div>
</div>

<div className="col-span-1 rounded-xl bg-neutral-900 border border-white/5 p-6 relative overflow-hidden group spotlight-card" style={{'--mouse-x': '233.671875px', '--mouse-y': '-2057.75px'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plug-zap" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6l-2.3 2.3a2.4 2.4 0 0 0 0 3.4ZM2 22l3-3m2.5-5.5L10 11m.5 5.5L13 14m5-11l-4 4h6l-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">System Integration</h3>
<p className="text-sm text-gray-400">Connect the tools you already use. CRM, ERP, Email, Slack — acting as one unified brain.</p>
</div>
</div>

<div className="col-span-1 md:col-span-3 rounded-xl bg-neutral-900 border border-white/5 p-8 relative overflow-hidden group spotlight-card flex flex-col md:flex-row items-center gap-8" style={{'--mouse-x': '985px', '--mouse-y': '-2298.75px'}}>
<div className="relative z-10 md:w-1/2">
<h3 className="text-xl font-semibold text-white mb-2">Custom Builds</h3>
<p className="text-sm text-gray-400 mb-4">If it's slowing you down, we can automate it. From bespoke internal tools to complex data pipelines.</p>
<a className="text-brand-500 hover:text-brand-400 flex items-center gap-1 text-sm font-medium" href="https://calendly.com/docdano/30min">
                        Discuss your build <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="relative z-10 md:w-1/2 flex gap-4 opacity-70">
<div className="px-4 py-2 rounded border border-white/10 bg-white/5 text-xs text-gray-300 font-mono">Custom Python</div>
<div className="text-xs text-gray-300 font-mono bg-white/5 border-white/10 border rounded pt-2 pr-4 pb-2 pl-4">Low Code
</div>
<div className="px-4 py-2 rounded border border-white/10 bg-white/5 text-xs text-gray-300 font-mono">Vector DB</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/2">
<div className="sticky top-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                            We find the real problem first.
                        </h2>
<div className="h-1 w-20 bg-brand-500 rounded mb-8"></div>
<p className="text-lg text-gray-400 mb-6">We are storytelling consultants. Most automation projects fail because they automate the wrong thing. The bottleneck wasn't where you thought it was.</p>
<p className="text-lg text-gray-400 mb-8">We dig in and understand your story before we build. That's why our agents actually work.</p>
<div className="bg-neutral-900 rounded-lg p-6 border border-white/5">
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:hammer" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
                                Operators who build
                            </h4>
<p className="text-sm text-gray-500">We've spent decades inside complex organizations — healthcare systems, Fortune 500s, and startups. We know what breaks.</p>
</div>
</div>
</div>
<div className="md:w-1/2 flex flex-col gap-6">

<div className="p-6 rounded-xl border border-white/10 bg-neutral-900/50">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-500">Typical Developer Approach</span>
<svg aria-hidden="true" className="iconify text-gray-600 iconify--lucide" data-icon="lucide:code-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-3 text-sm text-gray-400 opacity-50">
<div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">1</div>
<span>Write code immediately</span>
</div>
<div className="w-0.5 h-4 bg-gray-800 ml-4 my-1"></div>
<div className="flex items-center gap-3 text-sm text-gray-400 opacity-50">
<div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">2</div>
<span>Guess logic</span>
</div>
<div className="w-0.5 h-4 bg-gray-800 ml-4 my-1"></div>
<div className="flex items-center gap-3 text-sm text-red-400 opacity-50">
<div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center">3</div>
<span>Breaks on edge case</span>
</div>
</div>
<div className="p-6 rounded-xl border border-brand-500/20 bg-brand-500/5 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-brand-500">The Rocket Approach</span>
<svg aria-hidden="true" className="iconify text-brand-500 iconify--lucide" data-icon="lucide:rocket" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<div className="flex items-center gap-3 text-sm text-white">
<div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">1</div>
<span>Map the real workflow</span>
</div>
<div className="w-0.5 h-4 bg-brand-500 ml-4 my-1"></div>
<div className="flex items-center gap-3 text-sm text-white">
<div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">2</div>
<span>Isolate exceptions</span>
</div>
<div className="w-0.5 h-4 bg-brand-500 ml-4 my-1"></div>
<div className="flex items-center gap-3 text-sm text-white">
<div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">3</div>
<span>Build robust agent</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">How it works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<span className="text-2xl font-display font-bold text-gray-700">01</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
<p className="text-sm text-gray-400 px-4">You tell us what's painful. We figure out what's actually broken.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-brand-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
<span className="text-2xl font-display font-bold text-brand-500">02</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Architecture</h3>
<p className="text-sm text-gray-400 px-4">We design the agentic architecture that fixes the root cause.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
<span className="text-2xl font-display font-bold text-gray-700">03</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Build &amp; Deploy</h3>
<p className="text-sm text-gray-400 px-4">We build it, test it, and deploy it. Running autonomously.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="bg-neutral-900/50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6">Ready?</h2>
<p className="text-xl md:text-2xl text-gray-400 mb-10 font-light">Let's find the problem worth solving.</p>
<button className="group relative inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">
                Book a Discovery Call
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute -inset-3 rounded-full bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer" onclick="window.location.href='https://calendly.com/docdano/30min'"></div>
</button>
</div>
</section>

<footer className="bg-neutral-950 border-white/5 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">

<a className="flex flex-col items-end group leading-none select-none w-fit mb-6" href="#">
<span className="block">
<img alt="RocketTools" className="h-8 w-auto object-contain" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/6688e358a3b05e364aa27cb7.png"/>
</span>
<span className="text-xs font-medium text-gray-500 tracking-wide -mt-0.5">tools.io</span>
</a>
<p className="text-sm text-gray-500">
                        Operators who build. <br/>
                        Automating real business.
                    </p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li className=""><a className="hover:text-white transition-colors" href="https://www.linkedin.com/company/rockettools-io/">About</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Solutions</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li className=""><a className="hover:text-white transition-colors" href="#">AI Agents</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Process Automation</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Content Automation</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Social</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2" href="https://www.linkedin.com/company/rockettools-io/"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg> LinkedIn</a></li>
<li className=""><a className="hover:text-white transition-colors flex items-center gap-2" href="https://x.com/docdano"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Twitter</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2024 RocketTools.io. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-gray-600 hover:text-white" href="#">Privacy Policy</a>
<a className="text-xs text-gray-600 hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
