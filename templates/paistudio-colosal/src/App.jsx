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
      

<aside className="w-[240px] flex-shrink-0 bg-[var(--bg-surface)] border-r border-[var(--border)] h-screen sticky top-0 flex flex-col hidden md:flex z-10">
<div className="h-16 flex items-center px-6 border-b border-[var(--border)]">
<span className="font-['Syne'] font-semibold text-lg tracking-tight text-[var(--text-primary)] uppercase">Colosal</span>
</div>
<nav className="flex-1 py-6 flex flex-col gap-1">
<a className="flex items-center gap-3 px-6 py-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all duration-150 group" href="#">
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:widget-linear"></iconify-icon>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-[var(--text-primary)] bg-[var(--bg-hover)] border-l-[3px] border-[var(--accent)] transition-all duration-150" href="#">
<div className="absolute left-0 w-[3px] h-full bg-[var(--accent)] rounded-r-full"></div>
<iconify-icon className="text-lg text-[var(--accent)]" icon="solar:scanner-linear"></iconify-icon>
<span className="font-medium text-sm">Scans</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all duration-150 group" href="#">
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:document-text-linear"></iconify-icon>
<span className="font-medium text-sm">Proposals</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all duration-150 group" href="#">
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:history-linear"></iconify-icon>
<span className="font-medium text-sm">History</span>
</a>
</nav>
<div className="p-6 border-t border-[var(--border)]">
<a className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-150 group" href="#">
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:settings-linear"></iconify-icon>
<span className="font-medium text-sm">Settings</span>
</a>
</div>
</aside>

<main className="flex-1 h-screen overflow-y-auto">
<div className="max-w-[720px] mx-auto p-6 md:p-10 pb-20">

<div className="flex items-baseline justify-between mb-8">
<h1 className="font-['Syne'] text-2xl tracking-tight font-medium text-[var(--text-primary)]">New scan configuration</h1>
<span className="text-sm font-medium text-[var(--text-muted)]">Step 2 of 5</span>
</div>

<div className="flex gap-2 mb-8">

<div className="flex-1 flex flex-col gap-2.5">
<div className="h-1.5 w-full bg-[var(--accent)] rounded-full"></div>
<span className="text-xs font-medium text-[var(--text-secondary)]">Filters</span>
</div>

<div className="flex-1 flex flex-col gap-2.5">
<div className="h-1.5 w-full bg-[var(--accent)] rounded-full shadow-[0_0_8px_var(--accent-subtle)]"></div>
<span className="text-xs font-medium text-[var(--accent)]">Cover Letter</span>
</div>

<div className="flex-1 flex flex-col gap-2.5">
<div className="h-1.5 w-full bg-[var(--border)] rounded-full"></div>
<span className="text-xs font-medium text-[var(--text-muted)]">Questions</span>
</div>

<div className="flex-1 flex flex-col gap-2.5">
<div className="h-1.5 w-full bg-[var(--border)] rounded-full"></div>
<span className="text-xs font-medium text-[var(--text-muted)]">Attachments</span>
</div>

<div className="flex-1 flex flex-col gap-2.5">
<div className="h-1.5 w-full bg-[var(--border)] rounded-full"></div>
<span className="text-xs font-medium text-[var(--text-muted)]">Notifications</span>
</div>
</div>

<div className="flex items-start gap-3 p-4 bg-[var(--warning-subtle)] border border-[var(--warning-subtle)] rounded-[var(--radius-md)] mb-6">
<iconify-icon className="text-lg text-[var(--warning)] shrink-0 mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<p className="text-sm font-medium text-[var(--warning)] leading-snug">No draft provided. The AI will generate using only your instructions.</p>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 flex flex-col gap-10">

<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<label className="text-sm font-medium text-[var(--text-primary)]">AI instructions</label>
<span className="text-[11px] font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] px-2 py-0.5 rounded-full border border-[var(--border)] uppercase tracking-wider">Optional</span>
</div>
<textarea className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-3.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none resize-y transition-all" placeholder="Add any extra instructions to guide the AI — tone, what to emphasize, what to avoid..." rows="6"></textarea>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-[var(--text-primary)]">Cover letter draft</label>
<span className="text-xs font-medium text-[var(--text-muted)]">Character count: <span className="text-[var(--text-secondary)]">1,240</span> / 2,000</span>
</div>

<div className="w-full min-h-[16rem] bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-3.5 text-sm text-[var(--text-secondary)] focus-within:border-[var(--accent)] focus-within:ring-1 focus-within:ring-[var(--accent)] outline-none transition-all cursor-text overflow-y-auto leading-relaxed" contenteditable="true">
                        Hi there,<br/><br/>
                        I'm a senior frontend developer with a strong focus on building responsive and performant web applications. I saw your job posting and it perfectly matches my skill set.<br/><br/>
<span className="bg-[var(--accent-subtle)] text-[var(--accent)] px-1.5 py-0.5 rounded-[var(--radius-sm)] font-['JetBrains_Mono'] text-[13px] inline-block my-1 border border-[var(--accent-subtle)]" contenteditable="false">[prompt]Emphasize my 4 years of specific experience building highly interactive React dashboards and integrating complex REST APIs[/prompt]</span><br/><br/>
                        I prioritize clean, maintainable code and clear communication. Let me know if you'd like to schedule a quick chat to discuss the project further.<br/><br/>
                        Best regards,<br/>
                        Alex
                    </div>
</div>
<div className="h-px w-full bg-[var(--border)]"></div>

<div className="flex flex-col gap-4">
<label className="text-sm font-medium text-[var(--text-primary)]">Select a job to test generation</label>
<div className="flex flex-col sm:flex-row gap-3">

<div className="relative flex-1 group">
<button className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-3.5 flex justify-between items-center text-sm group-hover:border-[var(--border-strong)] transition-colors focus:outline-none focus:border-[var(--accent)] text-left">
<div className="flex items-center gap-3 truncate">
<span className="text-[var(--text-primary)] font-medium truncate">Build React Dashboard for SaaS</span>
<span className="shrink-0 w-11 h-5 flex items-center justify-center rounded-full text-[11px] font-semibold bg-[var(--success-subtle)] text-[var(--success)] border border-[var(--success-subtle)]">87%</span>
</div>
<iconify-icon className="text-[var(--text-secondary)] shrink-0 ml-2" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<button className="bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] px-5 py-3.5 sm:py-0 rounded-[var(--radius-md)] text-sm font-medium transition-all shadow-[0_0_12px_var(--accent-subtle)] shrink-0 flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear"></iconify-icon>
                            Run test
                        </button>
</div>
</div>

<div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-[var(--radius-md)] p-5 flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-sm font-medium text-[var(--text-primary)]">Generated cover letter</h3>
</div>
<button className="flex items-center justify-center w-8 h-8 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-all" title="Copy text">
<iconify-icon className="text-base" icon="solar:copy-linear"></iconify-icon>
</button>
</div>
<div className="text-sm text-[var(--text-secondary)] leading-relaxed flex flex-col gap-3 font-medium">
<p>Hi there,</p>
<p>I'm a senior frontend developer with a strong focus on building responsive and performant web applications. I saw your job posting for a SaaS dashboard and it perfectly matches my skill set.</p>
<p>Over the past 4 years, I've specialized in building highly interactive React dashboards from scratch. I have extensive experience managing complex state architecture and integrating robust REST APIs to handle real-time data seamlessly, which directly aligns with your project requirements.</p>
<p>I prioritize clean, maintainable code and clear communication. Let me know if you'd like to schedule a quick chat to discuss the project further.</p>
<p>Best regards,<br/>Alex</p>
</div>
<div className="mt-2 flex justify-start">
<button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium flex items-center gap-1.5 transition-colors">
<iconify-icon icon="solar:refresh-linear"></iconify-icon> Re-run test
                        </button>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between border-t border-[var(--border)] pt-6">
<button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium px-4 py-2.5 rounded-[var(--radius-md)] hover:bg-[var(--bg-surface)] transition-all flex items-center gap-2">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                </button>
<div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface)] px-3 py-1.5 rounded-full border border-[var(--border)]">
<iconify-icon className="text-[var(--success)] text-sm" icon="solar:check-circle-linear"></iconify-icon>
                    Auto-saved as draft
                </div>
<button className="bg-[var(--text-primary)] text-[var(--bg-base)] hover:bg-white px-6 py-2.5 rounded-[var(--radius-md)] text-sm font-medium transition-all flex items-center gap-2">
                    Continue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
