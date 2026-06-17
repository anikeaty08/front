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
      

<aside className="hidden md:flex flex-col w-[240px] bg-[var(--bg-surface)] border-r border-[var(--border)] shrink-0 z-10">
<div className="p-6 pb-2">
<h1 className="font-display text-sm font-semibold text-[var(--text-primary)] tracking-[0.25em] uppercase">Colosal</h1>
</div>
<nav className="flex flex-col gap-1 p-4 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors duration-150" href="#">
<iconify-icon className="text-base" icon="solar:widget-linear"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-primary)] bg-[var(--bg-elevated)] relative transition-colors duration-150" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[var(--accent)] rounded-r-full"></div>
<iconify-icon className="text-base text-[var(--accent)]" icon="solar:document-text-linear"></iconify-icon>
<span className="font-medium">Proposals</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors duration-150" href="#">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="font-medium">Clients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors duration-150" href="#">
<iconify-icon className="text-base" icon="solar:tuning-linear"></iconify-icon>
<span className="font-medium">Automations</span>
</a>
</nav>
<div className="mt-auto p-4 border-t border-[var(--border)]">
<a className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors duration-150" href="#">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon>
<span className="font-medium">Settings</span>
</a>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative p-6 md:p-10 flex flex-col gap-8 custom-scrollbar">

<header className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
<h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text-primary)]">Proposals</h2>
<div className="flex items-center justify-between gap-4 px-4 py-3 bg-[var(--accent-subtle)] rounded-[var(--radius-sm)] border border-[rgba(79,127,255,0.2)]">
<div className="flex items-center gap-3 text-[var(--accent)]">
<iconify-icon className="text-base shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<span className="font-medium text-sm">Showing proposals submitted via Colosal only.</span>
</div>
<button className="text-[var(--accent)] opacity-70 hover:opacity-100 transition-opacity outline-none p-1 rounded-full hover:bg-[rgba(79,127,255,0.1)]">
<iconify-icon className="text-lg block" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</header>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">

<div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 flex flex-col justify-between gap-2 shadow-sm">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Total sent</span>
<span className="font-display text-3xl font-semibold text-[var(--text-primary)] tracking-tight">47</span>
</div>

<div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 flex flex-col justify-between gap-2 shadow-sm">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Response rate</span>
<span className="font-display text-3xl font-semibold text-[var(--success)] tracking-tight">34%</span>
</div>

<div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 flex flex-col justify-between gap-2 shadow-sm">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Interview rate</span>
<span className="font-display text-3xl font-semibold text-[var(--accent)] tracking-tight">19%</span>
</div>

<div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 flex flex-col justify-between gap-2 shadow-sm">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Hire rate</span>
<span className="font-display text-3xl font-semibold text-[var(--warning)] tracking-tight">8%</span>
</div>
</section>

<section className="flex flex-col gap-4 max-w-7xl mx-auto w-full">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">

<div className="relative w-full md:w-80">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-[var(--text-muted)]" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] transition-all duration-150 shadow-sm" placeholder="Search by job title or client..." type="text"/>
</div>

<div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
<button className="flex items-center gap-2 px-3.5 py-2.5 bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-hover)] transition-colors duration-150 shadow-sm">
                        Configuration
                        <iconify-icon className="text-sm opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3.5 py-2.5 bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-hover)] transition-colors duration-150 shadow-sm">
                        Date range
                        <iconify-icon className="text-sm opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-3.5 py-2.5 bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-hover)] transition-colors duration-150 shadow-sm">
                        Status
                        <iconify-icon className="text-sm opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto custom-scrollbar pb-2">
<table className="w-full text-left border-collapse min-w-[900px]">
<thead>
<tr className="border-b border-[var(--border-strong)]">
<th className="py-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-display">Job title</th>
<th className="py-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-display">Client</th>
<th className="py-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-display">Configuration</th>
<th className="py-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-display">Submitted</th>
<th className="py-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-display">Status</th>
<th className="py-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider font-display text-right">Connects</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors duration-150 cursor-pointer group">
<td className="py-4 px-4 font-medium text-[var(--text-primary)]">Build React Dashboard</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">ClientA</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">React Projects</td>
<td className="py-4 px-4 text-[var(--text-secondary)] font-mono text-xs">Mar 20</td>
<td className="py-4 px-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--success-subtle)] text-[var(--success)] border border-[rgba(46,204,138,0.2)]">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></div>
                                    Shortlisted
                                </div>
</td>
<td className="py-4 px-4 text-right font-mono text-xs text-[var(--text-secondary)]">6</td>
</tr>

<tr className="border-b border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors duration-150 cursor-pointer group">
<td className="py-4 px-4 font-medium text-[var(--text-primary)]">Next.js Storefront</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">ClientB</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">React Projects</td>
<td className="py-4 px-4 text-[var(--text-secondary)] font-mono text-xs">Mar 18</td>
<td className="py-4 px-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--accent-subtle)] text-[var(--accent)] border border-[rgba(79,127,255,0.2)]">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                                    Viewed
                                </div>
</td>
<td className="py-4 px-4 text-right font-mono text-xs text-[var(--text-secondary)]">8</td>
</tr>

<tr className="border-b border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors duration-150 cursor-pointer group">
<td className="py-4 px-4 font-medium text-[var(--text-primary)]">TypeScript Refactor</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">ClientC</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">Node Backend</td>
<td className="py-4 px-4 text-[var(--text-secondary)] font-mono text-xs">Mar 15</td>
<td className="py-4 px-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-strong)]">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]"></div>
                                    Submitted
                                </div>
</td>
<td className="py-4 px-4 text-right font-mono text-xs text-[var(--text-secondary)]">4</td>
</tr>

<tr className="border-b border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors duration-150 cursor-pointer group">
<td className="py-4 px-4 font-medium text-[var(--text-primary)]">Fix API Bugs</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">ClientD</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">Node Backend</td>
<td className="py-4 px-4 text-[var(--text-secondary)] font-mono text-xs">Mar 12</td>
<td className="py-4 px-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--danger-subtle)] text-[var(--danger)] border border-[rgba(229,72,77,0.2)]">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--danger)]"></div>
                                    Declined
                                </div>
</td>
<td className="py-4 px-4 text-right font-mono text-xs text-[var(--text-secondary)]">6</td>
</tr>

<tr className="border-b border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors duration-150 cursor-pointer group">
<td className="py-4 px-4 font-medium text-[var(--text-primary)]">Dashboard UI</td>
<td className="py-4 px-4 text-[var(--text-secondary)]">ClientE</td>
<td className="py-4 px-4 text-[var(--text-muted)] line-through decoration-[var(--border-strong)]">UI/UX Work [deleted]</td>
<td className="py-4 px-4 text-[var(--text-secondary)] font-mono text-xs">Mar 10</td>
<td className="py-4 px-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--success-subtle)] text-[var(--success)] border border-[rgba(46,204,138,0.3)] shadow-sm">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
                                    Hired
                                </div>
</td>
<td className="py-4 px-4 text-right font-mono text-xs text-[var(--text-secondary)]">10</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between pt-4 pb-8 border-t border-[var(--border)] w-full">
<span className="text-xs text-[var(--text-muted)] font-medium">Showing <span className="text-[var(--text-primary)] font-mono">1-5</span> of <span className="text-[var(--text-primary)] font-mono">47</span> proposals</span>
<div className="flex items-center gap-2">
<button className="flex items-center justify-center p-2 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150" disabled="">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center p-2 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors duration-150">
<iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

    </>
  );
}
