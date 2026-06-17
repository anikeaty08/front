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
      

<aside className="w-[240px] shrink-0 bg-[var(--bg-surface)] border-r border-[var(--border)] flex flex-col h-full hidden md:flex z-10">
<div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
<span className="font-['Syne'] font-medium tracking-tighter text-lg uppercase text-[var(--text-primary)]">COLOSAL</span>
</div>
<div className="p-4 flex flex-col gap-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded-[var(--radius-sm)] transition-colors duration-150" href="#">
<iconify-icon className="text-lg" icon="solar:widget-2-linear"></iconify-icon> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded-[var(--radius-sm)] transition-colors duration-150" href="#">
<iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon> Leads
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-primary)] bg-[var(--bg-elevated)] border-l-2 border-[var(--accent)] rounded-r-[var(--radius-sm)] transition-colors duration-150" href="#">
<iconify-icon className="text-lg text-[var(--accent)]" icon="solar:scanner-linear"></iconify-icon> Scan &amp; BID
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] rounded-[var(--radius-sm)] transition-colors duration-150 mt-4" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Configuration
            </a>
</div>
<div className="mt-auto p-4 border-t border-[var(--border)]">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-6 h-6 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center text-xs font-medium font-['Syne']">JD</div>
<div className="flex flex-col">
<span className="text-xs text-[var(--text-primary)] font-medium">Operator 04</span>
<span className="text-xs text-[var(--text-muted)] font-['JetBrains_Mono']">ID: 88A2</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden">

<div className="flex-1 overflow-y-auto">
<div className="w-full max-w-[760px] mx-auto px-6 pt-10 pb-32">

<div className="mb-8">
<div className="flex items-center gap-2 text-[var(--text-muted)] text-xs font-medium mb-3 tracking-wide">
<span className="hover:text-[var(--text-primary)] transition-colors duration-150 cursor-pointer">Scan &amp; BID</span>
<span className="text-[0.6rem] opacity-50">/</span>
<span className="hover:text-[var(--text-primary)] transition-colors duration-150 cursor-pointer">React Projects</span>
<span className="text-[0.6rem] opacity-50">/</span>
<span className="text-[var(--text-secondary)]">Build React Dashboard</span>
</div>
<h1 className="font-['Syne'] text-2xl font-medium tracking-tight text-[var(--text-primary)]">Review &amp; send proposal</h1>
</div>

<div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 mb-8 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
<div className="flex flex-col gap-1.5 flex-1 py-4 md:py-0 md:px-6 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">From configuration</span>
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-150">React Projects</span>
<iconify-icon className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-150" icon="solar:link-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5 flex-1 py-4 md:py-0 md:px-6">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Job budget</span>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-medium text-[var(--text-primary)]">$2,500</span>
<span className="text-xs text-[var(--text-muted)]">fixed</span>
</div>
</div>
<div className="flex flex-col gap-1.5 flex-1 py-4 md:py-0 md:px-6">
<span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Confidence score</span>
<div className="flex items-center">
<span className="bg-[var(--success-subtle)] border border-[var(--success)]/20 text-[var(--success)] px-3 py-0.5 rounded-full text-xs font-medium font-['JetBrains_Mono'] tracking-tight">87%</span>
</div>
</div>
</div>

<section className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 mb-6">
<div className="flex items-center justify-between mb-5">
<h2 className="font-['Syne'] text-base font-medium tracking-tight text-[var(--text-primary)]">Cover letter</h2>
<span className="bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                            Editing
                        </span>
</div>
<div className="bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] px-4 py-3 text-sm text-[var(--text-primary)] leading-[1.8] outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-150 min-h-[220px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" contenteditable="true" spellcheck="false">Hi there,

I read your job description for the React Dashboard project and I'm confident I can build this to your exact specifications. I have extensive experience building data-dense internal tools using React, Tailwind CSS, and various modern charting libraries.

For this project, I'd propose starting with a lightweight architecture utilizing Vite and Zustand for state management, ensuring lightning-fast hot reloads and clean component structure. Based on the requirements provided, I estimate we can reach the first usable milestone within 2 weeks.

Let me know if you're open to a quick chat to align on the technical requirements and data models.

Best regards,
Colosal Auto-bidder</div>
</section>

<section className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 mb-6">
<div className="flex items-center justify-between mb-5">
<h2 className="font-['Syne'] text-base font-medium tracking-tight text-[var(--text-primary)]">Screening question answers</h2>
</div>
<div className="flex flex-col gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs text-[var(--text-muted)] font-medium">How many years of React experience do you have?</label>
<div className="bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] leading-[1.8] outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-150 min-h-[60px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" contenteditable="true" spellcheck="false">I have been working with React extensively for over 5 years, primarily focused on building complex, large-scale SaaS applications.</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-[var(--text-muted)] font-medium">Can you share examples of similar projects?</label>
<div className="bg-[var(--bg-base)] border border-[var(--border)] rounded-[var(--radius-md)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] leading-[1.8] outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all duration-150 min-h-[60px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" contenteditable="true" spellcheck="false">Yes, please refer to the attached case studies. I recently built a highly similar analytical dashboard for a fintech client handling real-time data feeds.</div>
</div>
</div>
</section>

<section className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6">
<h2 className="font-['Syne'] text-base font-medium tracking-tight text-[var(--text-primary)] mb-4">Attachments</h2>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 bg-[var(--bg-base)] border border-[var(--border)] hover:border-[var(--border-strong)] rounded-[var(--radius-md)] pl-3 pr-2 py-1.5 transition-colors duration-150 group cursor-default">
<iconify-icon className="text-[var(--text-secondary)] text-base" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-medium text-[var(--text-primary)]">Portfolio_2024.pdf</span>
<button className="text-[var(--text-muted)] hover:text-[var(--danger)] hover:bg-[var(--danger-subtle)] rounded w-6 h-6 flex items-center justify-center transition-colors duration-150 ml-1 outline-none">
<iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2 bg-[var(--bg-base)] border border-[var(--border)] hover:border-[var(--border-strong)] rounded-[var(--radius-md)] pl-3 pr-2 py-1.5 transition-colors duration-150 group cursor-default">
<iconify-icon className="text-[var(--text-secondary)] text-base" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-medium text-[var(--text-primary)]">Case_Study_Ecommerce.pdf</span>
<button className="text-[var(--text-muted)] hover:text-[var(--danger)] hover:bg-[var(--danger-subtle)] rounded w-6 h-6 flex items-center justify-center transition-colors duration-150 ml-1 outline-none">
<iconify-icon className="text-sm" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[var(--bg-surface)]/90 backdrop-blur-md border-t border-[var(--border-strong)] z-20">
<div className="w-full max-w-[760px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<button className="w-full sm:w-auto text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 px-2 py-2 text-center sm:text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-strong)] rounded">
                    Cancel
                </button>
<span className="text-xs text-[var(--text-muted)] font-medium text-center hidden md:block select-none">
                    Sending is irreversible — you'll confirm next.
                </span>
<button className="w-full sm:w-auto bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium px-6 py-2.5 rounded-[var(--radius-md)] transition-colors duration-150 flex items-center justify-center gap-2 shadow-[0_0_20px_var(--accent-subtle)] outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]">
                    Send proposal
                    <iconify-icon className="text-base" icon="solar:plain-3-linear"></iconify-icon>
</button>
</div>
</div>
</main>

<div className="fixed inset-0 bg-[#000000]/70 backdrop-blur-[2px] z-50 flex items-center justify-center p-4 display-none" style={{display: 'none'}}>
<div className="bg-[var(--bg-surface)] border border-[var(--border-strong)] rounded-[var(--radius-lg)] p-8 max-w-[360px] w-full shadow-2xl flex flex-col items-center text-center transform scale-100 transition-all duration-150">
<div className="w-14 h-14 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/20 flex items-center justify-center mb-5 ring-4 ring-[var(--bg-base)]">
<iconify-icon className="text-2xl text-[var(--accent)]" icon="solar:plain-3-linear"></iconify-icon>
</div>
<h3 className="font-['Syne'] text-xl font-medium tracking-tight text-[var(--text-primary)] mb-2">Send this proposal?</h3>
<p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">This will submit to Upwork and cannot be undone.</p>
<div className="flex w-full gap-3">
<button className="flex-1 py-2.5 px-4 rounded-[var(--radius-md)] text-sm font-medium text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-strong)] transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-strong)]">
                    Cancel
                </button>
<button className="flex-1 py-2.5 px-4 rounded-[var(--radius-md)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium shadow-[0_0_15px_var(--accent-subtle)] transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]">
                    Confirm &amp; send
                </button>
</div>
</div>
</div>

    </>
  );
}
