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
fontFamily: {
display: ['"Archivo Narrow"', 'sans-serif'],
mono: ['"IBM Plex Mono"', 'monospace'],
body: ['"IBM Plex Serif"', 'serif'],
},
colors: {
base: '#050505',
panel: '#0a0a0a',
surface: '#121212',
line: '#262626',
txt: {
primary: '#e5e5e5',
secondary: '#a3a3a3',
muted: '#525252',
},
accent: {
DEFAULT: '#d97706', // Industrial Amber
dim: 'rgba(217, 119, 6, 0.1)',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scanline': 'scanline 8s linear infinite',
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
}
}
}
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
      

<div className="fixed top-0 w-full h-screen bg-cover -z-20 bg-right" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c84ac563-6d6e-4272-842f-fe28ee39ec66_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 bg-base/80 -z-10 backdrop-blur-[1px]"></div>

<div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay"></div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 opacity-20">
<div className="w-px h-full bg-line"></div>
<div className="w-px h-full bg-line hidden md:block"></div>
<div className="w-px h-full bg-line hidden md:block"></div>
<div className="w-px h-full bg-line"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-line bg-base/90 backdrop-blur-sm h-14 flex items-center justify-between px-4 md:px-12">
<div className="flex items-center gap-4">
<span className="font-display font-bold tracking-tighter text-lg md:text-xl uppercase text-white">
          HAMZAWY.SYS
        </span>
<div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-txt-muted border border-line px-2 py-0.5 rounded-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          SYSTEM STATUS: ONLINE
        </div>
</div>
<div className="flex items-center gap-6 md:gap-12 font-mono text-xs tracking-widest uppercase">
<a className="text-txt-secondary hover:text-white transition-colors" href="#audit">
          Audit
        </a>
<a className="text-txt-secondary hover:text-white transition-colors" href="#protocols">
          Protocols
        </a>
<a className="text-txt-primary hover:text-accent border-b border-accent pb-0.5 transition-colors" href="#initiate">
          Initiate
        </a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 md:px-12 border-line border-b pt-32 pr-4 pb-20 pl-4 relative">

<div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-transparent -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8 relative">

<div className="md:col-span-3 font-mono text-xs text-txt-secondary flex flex-col justify-between h-full py-2">
<div className="space-y-2">
<p className="font-semibold text-accent/80">OPERATOR: MOHAMMED HAMZA</p>
<p className="">SECTOR: AG-TECH / INDUSTRIAL</p>
<p className="">ID: 884-SYS-ARCH</p>
</div>
<div className="mt-8 md:mt-0">
<svg aria-hidden="true" className="iconify text-2xl text-accent opacity-100 iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</g>
</svg>
</div>
</div>

<div className="md:col-span-9">
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white mb-8 uppercase drop-shadow-md">
            Agriculture
            <br/>
<span className="text-txt-secondary">Systems</span>
<br/>
            Architecture
          </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-line pt-8">
<div className="">
<p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-md font-light">
                We deploy operational infrastructure for high-stakes agriculture
                enterprises. This is not web design. This is system control.
              </p>
</div>
<div className="flex flex-col justify-end">
<div className="font-mono text-xs text-accent flex items-center gap-2 font-bold tracking-wider">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle-alert" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>CRITICAL INFRASTRUCTURE ONLY</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-4 md:px-12 border-b border-line bg-panel relative" id="audit">
<div className="absolute top-0 left-0 bg-accent w-1 h-24"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              [01] SYSTEM FAILURE REPORT
            </h2>
<h3 className="font-display text-3xl md:text-4xl uppercase leading-none tracking-tight text-white">
              Why Agriculture
              <br/>
              Websites Fail
              <br/>
              At Scale
            </h3>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-line p-6 hover:border-txt-muted transition-colors duration-500 bg-base/50">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-xs text-txt-muted">ERR_01</span>
<svg aria-hidden="true" className="iconify text-txt-muted iconify--lucide" data-icon="lucide:activity" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="font-display text-xl uppercase mb-2 text-white">
                Operational Drag
              </h4>
<p className="text-sm text-txt-secondary leading-relaxed">
                Standard agency sites are static billboards. They fail to handle
                live inventory data, dealer integration, or multi-location
                logistics, creating a bottleneck in operations.
              </p>
</div>

<div className="border border-line p-6 hover:border-txt-muted transition-colors duration-500 bg-base/50">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-xs text-txt-muted">ERR_02</span>
<svg aria-hidden="true" className="iconify text-txt-muted iconify--lucide" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
</div>
<h4 className="font-display text-xl uppercase mb-2 text-white">
                Data Silos
              </h4>
<p className="text-sm text-txt-secondary leading-relaxed">
                Critical harvest and livestock data is trapped in spreadsheets.
                The frontend does not communicate with the backend ERP, forcing
                manual entry and expensive errors.
              </p>
</div>

<div className="border border-line p-6 hover:border-txt-muted transition-colors duration-500 bg-base/50">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-xs text-txt-muted">ERR_03</span>
<svg aria-hidden="true" className="iconify text-txt-muted iconify--lucide" data-icon="lucide:scale" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
</g>
</svg>
</div>
<h4 className="font-display text-xl uppercase mb-2 text-white">
                Inability to Scale
              </h4>
<p className="text-sm text-txt-secondary leading-relaxed">
                Visual themes break under complex navigation requirements. When
                you acquire a new farm or product line, the "pretty" site
                requires a total rebuild.
              </p>
</div>

<div className="border border-line p-6 bg-surface">
<div className="h-full flex flex-col justify-center items-center text-center space-y-4">
<svg aria-hidden="true" className="iconify text-3xl text-accent iconify--lucide" data-icon="lucide:arrow-down-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m7 7l10 10m0-10v10H7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="font-display text-lg uppercase tracking-tight text-white">
                  Result: Revenue Leakage
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 border-b border-line" id="protocols">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-line pb-6">
<h2 className="font-mono text-xs text-accent tracking-widest uppercase mb-4 md:mb-0">
            [02] INTERVENTION PROTOCOLS
          </h2>
<p className="font-mono text-xs text-txt-muted">SELECT_MODULE</p>
</div>
<div className="space-y-0">

<div className="group border-b border-line py-8 transition-all hover:bg-surface cursor-default">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 font-mono text-xs text-txt-muted group-hover:text-accent">
                01
              </div>
<div className="md:col-span-5">
<h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-txt-primary group-hover:text-white">
                  Custom Ag-Systems
                </h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-txt-secondary font-light">
                  Bespoke architecture for livestock tracking, grain trading,
                  and equipment dealer networks.
                </p>
</div>
<div className="md:col-span-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify inline text-xl text-accent iconify--lucide" data-icon="lucide:settings-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 17H5M19 7h-9"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</g>
</svg>
</div>
</div>
</div>

<div className="group border-b border-line py-8 transition-all hover:bg-surface cursor-default">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 font-mono text-xs text-txt-muted group-hover:text-accent">
                02
              </div>
<div className="md:col-span-5">
<h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-txt-primary group-hover:text-white">
                  Audit &amp; Re-Engineering
                </h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-txt-secondary font-light">
                  Forensic analysis of failing codebases. We strip the bloat and
                  rebuild for speed and reliability.
                </p>
</div>
<div className="md:col-span-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify inline text-xl text-accent iconify--lucide" data-icon="lucide:search-code" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m13 13.5l2-2.5l-2-2.5M21 21l-4.3-4.3M9 8.5L7 11l2 2.5"></path>
<circle cx="11" cy="11" r="8"></circle>
</g>
</svg>
</div>
</div>
</div>

<div className="group border-b border-line py-8 transition-all hover:bg-surface cursor-default">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 font-mono text-xs text-txt-muted group-hover:text-accent">
                03
              </div>
<div className="md:col-span-5">
<h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-txt-primary group-hover:text-white">
                  Internal Dashboards
                </h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-txt-secondary font-light">
                  Operator-facing tools. Visualization of sensor data, workforce
                  management, and logistics.
                </p>
</div>
<div className="md:col-span-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify inline text-xl text-accent iconify--lucide" data-icon="lucide:layout-dashboard" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</g>
</svg>
</div>
</div>
</div>

<div className="group border-b border-line py-8 transition-all hover:bg-surface cursor-default">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="md:col-span-1 font-mono text-xs text-txt-muted group-hover:text-accent">
                04
              </div>
<div className="md:col-span-5">
<h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-txt-primary group-hover:text-white">
                  AI System Enhancement
                </h3>
</div>
<div className="md:col-span-4">
<p className="text-sm text-txt-secondary font-light">
                  Integration of predictive models for yield forecasting and
                  automated resource allocation.
                </p>
</div>
<div className="md:col-span-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify inline text-xl text-accent iconify--lucide" data-icon="lucide:bot" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 bg-panel">
<div className="max-w-7xl mx-auto">
<h2 className="font-mono text-xs text-accent tracking-widest uppercase mb-12">
          [03] DEPLOYED SYSTEMS
        </h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="border-b border-line text-xs font-mono text-txt-muted uppercase tracking-wider">
<th className="py-4 pl-2 font-normal">System_ID</th>
<th className="py-4 font-normal">Classification</th>
<th className="py-4 font-normal">Intervention</th>
<th className="py-4 pr-2 font-normal text-right">Outcome</th>
</tr>
</thead>
<tbody className="text-sm font-light text-txt-secondary">
<tr className="border-b border-line hover:bg-surface hover:text-white transition-colors group">
<td className="py-6 pl-2 font-mono text-xs text-txt-muted group-hover:text-accent">
                  AG_POULTRY_V2
                </td>
<td className="py-6 uppercase">Integrated Poultry Complex</td>
<td className="py-6">Full Stack Rebuild + IoT Dashboard</td>
<td className="py-6 pr-2 text-right font-mono text-xs">
                  ERR_RATE_REDUCED_90%
                </td>
</tr>
<tr className="border-b border-line hover:bg-surface hover:text-white transition-colors group">
<td className="py-6 pl-2 font-mono text-xs text-txt-muted group-hover:text-accent">
                  CROP_LOGIC_SYS
                </td>
<td className="py-6 uppercase">Large Scale Grain Farm</td>
<td className="py-6">Harvest Data Consolidation</td>
<td className="py-6 pr-2 text-right font-mono text-xs">
                  DATA_VISIBILITY_100%
                </td>
</tr>
<tr className="border-b border-line hover:bg-surface hover:text-white transition-colors group">
<td className="py-6 pl-2 font-mono text-xs text-txt-muted group-hover:text-accent">
                  EQUIP_NET_04
                </td>
<td className="py-6 uppercase">Regional Equipment Dealer</td>
<td className="py-6">Inventory Sync &amp; Dealer Portal</td>
<td className="py-6 pr-2 text-right font-mono text-xs">
                  SALES_CYCLE_SHORTENED
                </td>
</tr>
<tr className="border-b border-line hover:bg-surface hover:text-white transition-colors group">
<td className="py-6 pl-2 font-mono text-xs text-txt-muted group-hover:text-accent">
                  HYDROPONIC_CTRL
                </td>
<td className="py-6 uppercase">Vertical Farming Startup</td>
<td className="py-6">Environment Control Interface</td>
<td className="py-6 pr-2 text-right font-mono text-xs">
                  AUTO_REGULATION_ACTIVE
                </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<footer className="py-32 px-4 md:px-12 border-t border-line bg-base relative overflow-hidden" id="initiate">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
<div className="inline-flex items-center gap-3 border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-sm mb-8">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
<span className="font-mono text-xs text-accent tracking-widest uppercase">
            Decision Threshold
          </span>
</div>
<h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-6">
          This requires a
          <br/>
          structural commitment.
        </h2>
<p className="text-base md:text-lg text-txt-secondary max-w-2xl mb-12 font-light leading-relaxed">
          We do not sell packages. We do not do "quick fixes." Engaging
          Hamza.sys initiates a full operational audit and systems restructure.
          This is irreversible infrastructure development.
        </p>
<div className="flex flex-col md:flex-row gap-6 items-center">
<a className="group relative px-8 py-4 bg-white text-base font-mono text-sm uppercase tracking-wider overflow-hidden" href="mailto:sys@hamzawy.ag">
<span className="relative z-10 group-hover:text-white transition-colors duration-300 font-bold">
              Request Systems Review
            </span>
<div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</a>
<span className="font-mono text-xs text-txt-muted">
            NO CASUAL INQUIRIES
          </span>
</div>
</div>
<div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center font-mono text-[10px] text-txt-muted uppercase tracking-widest">
<div>© 2024 HAMZAWY SYSTEMS ARCHITECTURE</div>
<div className="mt-4 md:mt-0 flex gap-8">
<span>LAT: 30.0444 N</span>
<span>LON: 31.2357 E</span>
<span>STATUS: NOMINAL</span>
</div>
</div>
</footer>

    </>
  );
}
