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



    document.getElementById('year').textContent = new Date().getFullYear();

    lucide.createIcons();

    const tabs = document.querySelectorAll('.clinical-tab');
    const panels = document.querySelectorAll('.clinical-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        tabs.forEach(t => {
          if (t === tab) {
            t.classList.add('bg-[#00d4ff1a]', 'text-[#00d4ff]');
            t.classList.remove('text-[#6b7280]');
          } else {
            t.classList.remove('bg-[#00d4ff1a]', 'text-[#00d4ff]');
            t.classList.add('text-[#6b7280]');
          }
        });

        panels.forEach(panel => {
          if (panel.getAttribute('data-panel') === target) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });
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
      
<div className="min-h-screen flex flex-col font-[Figtree]">

<header className="w-full border-b border-[#111827] bg-[#020617]/90 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#00d4ff] flex items-center justify-center shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
<span className="text-xs font-semibold tracking-tight text-[#020617]">IA</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight text-[#e5e7eb]" style={{fontFamily: '\'Financier Display\', serif'}}>Intellimed AI</span>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Clinical Automation</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-xs">
<a className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors tracking-[0.14em] uppercase" href="#platform">Platform</a>
<a className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors tracking-[0.14em] uppercase" href="#solutions">Solutions</a>
<a className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors tracking-[0.14em] uppercase" href="#agents">AI Agents</a>
<a className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors tracking-[0.14em] uppercase" href="#how-it-works">How it works</a>
<a className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors tracking-[0.14em] uppercase" href="#about">About</a>
<a className="text-[#9ca3af] hover:text-[#e5e7eb] transition-colors tracking-[0.14em] uppercase" href="#why">Why Intellimed</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#1f2937] bg-[#020617] px-4 py-1.5 text-xs font-medium text-[#e5e7eb] hover:border-[#00d4ff] hover:bg-[#020617] hover:text-[#f9fafb] transition-colors">
            Talk to sales
          </button>
<a className="inline-flex items-center justify-center rounded-full bg-[#00d4ff] px-4 sm:px-5 py-1.5 text-xs font-semibold tracking-tight text-[#020617] hover:bg-[#2dd4bf] transition-colors" href="#hero-form">
            Book a demo
          </a>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden" id="hero">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 sm:-top-40 -right-40 sm:-right-56 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-[#00d4ff33] blur-3xl"></div>
<div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#8b5cf633] blur-3xl"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 sm:pb-20 lg:pb-24">
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[#1f2937] bg-[#020617] px-2.5 py-1 text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
<span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]"></span>
<span>AI‑POWERED CLINICAL WORKFLOWS</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
                  An AI layer for every clinical workflow.
                </h1>
<p className="text-lg sm:text-xl text-[#e5e7eb]/80 max-w-xl">
                  Intellimed AI automates notes, chart summaries, and billing checks so clinicians can focus on patients, not paperwork.
                </p>
</div>

<div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
<div className="space-y-1.5">
<p className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">For</p>
<p className="text-base text-[#e5e7eb]">
                    Health systems, specialty clinics, ambulatory care, surgical centers.
                  </p>
</div>
<div className="space-y-1.5">
<p className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Connects to</p>
<p className="text-base text-[#e5e7eb]">
                    HL7 · FHIR APIs · Secure EMR/EHR integrations.
                  </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-3">
<a className="inline-flex items-center justify-center rounded-full bg-[#00d4ff] px-6 py-2 text-base font-semibold tracking-tight text-[#020617] hover:bg-[#2dd4bf] transition-colors" href="#hero-form">
                  See Intellimed in action
                </a>
<button className="inline-flex items-center justify-center rounded-full border border-[#1f2937] bg-[#020617] px-5 py-2 text-sm font-medium text-[#e5e7eb] hover:border-[#00d4ff] hover:text-[#f9fafb] transition-colors">
                  View platform overview
                </button>
</div>

<div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] border border-[#020617]"></div>
<div className="h-7 w-7 rounded-full bg-[#8b5cf6] border border-[#020617]"></div>
<div className="h-7 w-7 rounded-full bg-[#2dd4bf] border border-[#020617]"></div>
</div>
<p className="text-sm sm:text-base text-[#9ca3af]">
                  Built with clinical leaders to reduce documentation burden, not new clicks.
                </p>
</div>
</div>

<div className="space-y-5">

<div className="rounded-3xl border border-[#111827] bg-[#020617]/80 shadow-[_0_80px_rgba(15,23,42,0.8)] backdrop-blur">
<div className="border-b border-[#111827] px-4 sm:px-5 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-40"></span>
<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2dd4bf]"></span>
</span>
<span className="text-xs font-medium text-[#e5e7eb] tracking-tight">Real‑time assistant</span>
</div>
<span className="text-[0.625rem] text-[#9ca3af]">Securely inside your EMR</span>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="flex gap-1 rounded-full bg-[#020617] border border-[#111827] p-1">
<button className="clinical-tab flex-1 rounded-full bg-[#00d4ff1a] text-[0.625rem] font-medium text-[#00d4ff] py-1.5" data-tab="note" type="button">
                      AI Clinical Note
                    </button>
<button className="clinical-tab flex-1 rounded-full text-[0.625rem] font-medium text-[#6b7280] py-1.5" data-tab="summary" type="button">
                      Summary
                    </button>
<button className="clinical-tab flex-1 rounded-full text-[0.625rem] font-medium text-[#6b7280] py-1.5" data-tab="billing" type="button">
                      Billing
                    </button>
</div>

<div className="space-y-3 rounded-2xl border border-[#111827] bg-[#020617] p-3.5">

<div className="clinical-panel space-y-3" data-panel="note">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-[#00d4ff] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-medium text-[#e5e7eb]">SOAP note draft · PENNY</p>
<p className="text-[0.625rem] text-[#9ca3af]">From visit transcript + EMR context</p>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-[#2dd4bf1a] px-2 py-0.5 text-[0.625rem] font-medium text-[#2dd4bf]">
                          ~70% less charting time
                        </span>
</div>
<div className="space-y-1.5 text-xs text-[#e5e7eb]">
<p><span className="font-medium text-[#e5e7eb]">S:</span> Breathing improved over 48 hours, no chest pain or fever.</p>
<p><span className="font-medium text-[#e5e7eb]">O:</span> Vitals stable, lungs clear, O2 97% RA, CT: no acute PE.</p>
<p><span className="font-medium text-[#e5e7eb]">A:</span> Improving asthma exacerbation; low concern for infection.</p>
<p><span className="font-medium text-[#e5e7eb]">P:</span> Continue inhalers, follow‑up in 2 weeks, return precautions.</p>
</div>
<div className="flex items-center justify-between pt-1">
<button className="text-[0.625rem] font-medium text-[#00d4ff] hover:text-[#2dd4bf]">
                          Insert into EMR
                        </button>
<p className="flex items-center gap-1.5 text-[0.625rem] text-[#9ca3af]">
<span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]"></span>
                          Clinician is always the final author.
                        </p>
</div>
</div>

<div className="clinical-panel hidden space-y-3" data-panel="summary">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-[#8b5cf6] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="list-checks" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-medium text-[#e5e7eb]">Visit summary · SUMMER</p>
<p className="text-[0.625rem] text-[#9ca3af]">Condensed chart + latest encounter</p>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-[#00d4ff1a] px-2 py-0.5 text-[0.625rem] font-medium text-[#00d4ff]">
                          Ready in under 5 seconds
                        </span>
</div>
<div className="space-y-2 text-xs text-[#e5e7eb]">
<div>
<p className="font-medium text-[#e5e7eb]">Key problems</p>
<ul className="mt-1 space-y-0.5">
<li>• Moderate persistent asthma with recent exacerbation, improving.</li>
<li>• Allergic rhinitis, seasonal.</li>
<li>• Mild GERD, stable on current therapy.</li>
</ul>
</div>
<div>
<p className="font-medium text-[#e5e7eb]">Recent events</p>
<ul className="mt-1 space-y-0.5">
<li>• ED visit 3 days ago for shortness of breath; discharged home.</li>
<li>• Completed oral steroid burst; reports better sleep and less wheeze.</li>
</ul>
</div>
<div>
<p className="font-medium text-[#e5e7eb]">Care gaps &amp; reminders</p>
<ul className="mt-1 space-y-0.5">
<li>• No documented asthma action plan in past 12 months.</li>
<li>• Next spirometry due in 6 months.</li>
<li>• Influenza vaccine: completed; pneumococcal still due.</li>
</ul>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<button className="text-[0.625rem] font-medium text-[#00d4ff] hover:text-[#2dd4bf]">
                          Open full chart summary
                        </button>
<p className="flex items-center gap-1.5 text-[0.625rem] text-[#9ca3af]">
<span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]"></span>
                          Tuned to your specialty and role.
                        </p>
</div>
</div>

<div className="clinical-panel hidden space-y-3" data-panel="billing">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-[#2dd4bf] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="receipt" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-medium text-[#e5e7eb]">Billing quality check · BILL</p>
<p className="text-[0.625rem] text-[#9ca3af]">Codes mapped from documentation + EMR</p>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-[#f973161a] px-2 py-0.5 text-[0.625rem] font-medium text-[#fb923c]">
                          0 critical issues
                        </span>
</div>
<div className="space-y-2 text-xs text-[#e5e7eb]">
<div>
<p className="font-medium text-[#e5e7eb]">Suggested visit level</p>
<p className="mt-1">
<span className="inline-flex items-center rounded-full bg-[#111827] px-2 py-0.5 mr-1 text-[0.625rem] font-medium text-[#e5e7eb]">CPT 99214</span>
                            Based on documented complexity and time.
                          </p>
</div>
<div>
<p className="font-medium text-[#e5e7eb]">Primary diagnosis (ICD‑10)</p>
<ul className="mt-1 space-y-0.5">
<li>• J45.41 – Moderate persistent asthma with acute exacerbation.</li>
<li>• J30.2 – Other seasonal allergic rhinitis.</li>
</ul>
</div>
<div>
<p className="font-medium text-[#e5e7eb]">Compliance checks</p>
<ul className="mt-1 space-y-0.5">
<li className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]"></span>
<li className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]"></span>
                              Time statement present and consistent.
                            </li>
<li className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-[#eab308]"></span>
                              Consider documenting asthma action plan discussion to support quality measures.
                            </li>
</li></ul>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<button className="text-[0.625rem] font-medium text-[#00d4ff] hover:text-[#2dd4bf]">
                          Apply codes to encounter
                        </button>
<p className="flex items-center gap-1.5 text-[0.625rem] text-[#9ca3af]">
<span className="h-1.5 w-1.5 rounded-full bg-[#f97316]"></span>
                          Designed to lower denials, not upcode.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-3">
<p className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Chart review time</p>
<p className="text-lg font-semibold text-[#f9fafb] tracking-tight">↓ 50–70%</p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-3">
<p className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Claim denials</p>
<p className="text-lg font-semibold text-[#f9fafb] tracking-tight">↓ 20–30%</p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-[#111827] bg-[#020617] p-4 sm:p-5 space-y-3" id="hero-form">
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-xs font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Text\', serif'}}>See if Intellimed fits your workflows</p>
<p className="text-[0.6875rem] text-[#9ca3af]">
                      Tell us your role and EMR. We’ll tailor a live walkthrough.
                    </p>
</div>
<span className="hidden sm:inline-flex items-center rounded-full bg-[#020617] px-2 py-0.5 text-[0.625rem] text-[#9ca3af] border border-[#1f2937]">
                    ~30 seconds
                  </span>
</div>
<form className="space-y-2.5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<div className="space-y-1">
<label className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.12em] uppercase">Work email</label>
<input className="w-full rounded-xl border border-[#1f2937] bg-[#020617] px-3 py-1.5 text-xs text-[#e5e7eb] placeholder:text-[#6b7280] focus:outline-none focus:ring-1 focus:ring-[#00d4ff] focus:border-[#00d4ff]" placeholder="you@healthsystem.org" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.12em] uppercase">Role</label>
<select className="w-full rounded-xl border border-[#1f2937] bg-[#020617] px-3 py-1.5 text-xs text-[#e5e7eb] focus:outline-none focus:ring-1 focus:ring-[#00d4ff] focus:border-[#00d4ff]">
<option className="bg-[#020617]">Select your role</option>
<option className="bg-[#020617]">Physician / APP</option>
<option className="bg-[#020617]">CMIO / Clinical leader</option>
<option className="bg-[#020617]">Operations / Admin</option>
<option className="bg-[#020617]">Revenue cycle / Coding</option>
<option className="bg-[#020617]">IT / Digital / Innovation</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.12em] uppercase">Primary EMR / EHR</label>
<input className="w-full rounded-xl border border-[#1f2937] bg-[#020617] px-3 py-1.5 text-xs text-[#e5e7eb] placeholder:text-[#6b7280] focus:outline-none focus:ring-1 focus:ring-[#00d4ff] focus:border-[#00d4ff]" placeholder="Epic, Cerner, Meditech, etc." type="text"/>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full bg-[#00d4ff] px-4 py-1.5 text-xs font-semibold tracking-tight text-[#020617] hover:bg-[#2dd4bf] transition-colors mt-1" type="submit">
                    Request a demo
                  </button>
<p className="text-[0.625rem] text-[#9ca3af]">
                    HIPAA‑ready and built to align with existing security and compliance programs.
                  </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#111827] bg-[#020617]" id="solutions">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Measured outcomes</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
                Designed to move real metrics, not just pilots.
              </h2>
</div>
<p className="text-sm text-[#9ca3af] max-w-xs">
              Start with a small cohort, track outcomes, then scale across clinics and service lines.
            </p>
</div>
<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-1.5">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Time back</p>
<p className="text-2xl font-semibold tracking-tight text-[#f9fafb]">2–3 hrs</p>
<p className="text-sm text-[#e5e7eb]/80">Per clinician per day in supported workflows.</p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-1.5">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Denials &amp; rework</p>
<p className="text-2xl font-semibold tracking-tight text-[#f9fafb]">↓ 20–30%</p>
<p className="text-sm text-[#e5e7eb]/80">By catching gaps before claims are sent.</p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-1.5">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Clinician sentiment</p>
<p className="text-2xl font-semibold tracking-tight text-[#f9fafb]">↑ 80%+</p>
<p className="text-sm text-[#e5e7eb]/80">Report a meaningful reduction in documentation burden.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-[#111827] bg-[#020617]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start">

<div className="space-y-4">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">The burden</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
                Clinicians are drowning in clicks, not care.
              </h2>
<p className="text-lg text-[#e5e7eb]/80">
                Hours of notes, chart review, and coding steal time from patients and drive burnout across teams.
              </p>
<div className="grid sm:grid-cols-2 gap-4 pt-1">
<div className="space-y-2 rounded-2xl border border-[#111827] bg-[#020617] p-3.5">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Today</p>
<ul className="space-y-1 text-base text-[#e5e7eb]">
<li>• Heavy documentation load</li>
<li>• Slow chart reviews</li>
<li>• Manual coding &amp; billing</li>
</ul>
</div>
<div className="space-y-2 rounded-2xl border border-[#111827] bg-[#020617] p-3.5">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Impact</p>
<ul className="space-y-1 text-base text-[#e5e7eb]">
<li>• Less patient time</li>
<li>• Inconsistent notes</li>
<li>• Denials and rework</li>
</ul>
</div>
</div>
</div>

<div className="space-y-4">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">The Intellimed layer</p>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Text\', serif'}}>
                One AI platform from encounter to claim.
              </h3>
<p className="text-lg text-[#e5e7eb]/80">
                Intellimed automates summaries, notes, and billing checks in the background, right inside your EMR.
              </p>
<div className="grid sm:grid-cols-2 gap-4 pt-1">
<div className="space-y-1.5">
<p className="text-lg font-semibold tracking-tight text-[#f9fafb]">↓ 50–70%</p>
<p className="text-sm text-[#9ca3af]">Less documentation time in supported specialties.</p>
</div>
<div className="space-y-1.5">
<p className="text-lg font-semibold tracking-tight text-[#f9fafb]">↑ Note quality</p>
<p className="text-sm text-[#9ca3af]">More complete, consistent documentation by default.</p>
</div>
</div>
<div className="pt-2">
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00d4ff] hover:text-[#2dd4bf]">
                  See where we plug into your EMR
                  <span className="text-[0.625rem]">→</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#111827] bg-[#020617]" id="platform">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-2">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Platform</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
                Intellimed AI at a glance.
              </h2>
<p className="text-lg text-[#e5e7eb]/80 max-w-xl">
                One AI layer for documentation, summaries, billing checks, and document automation.
              </p>
</div>
<p className="text-sm text-[#9ca3af] max-w-sm">
              Not just a scribe. A clinical automation platform that spans care and revenue.
            </p>
</div>

<div className="grid md:grid-cols-3 gap-4 sm:gap-5">

<div className="space-y-4">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<p className="text-base font-semibold text-[#f9fafb] tracking-tight">AI Clinical Documentation</p>
</div>
<p className="text-base text-[#e5e7eb]/80">
                  Drafts structured notes from encounters and EMR data for quick review and sign‑off.
                </p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[#8b5cf6] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="square-stack" strokeWidth="1.5"></i>
</div>
<p className="text-base font-semibold text-[#f9fafb] tracking-tight">Patient Summaries</p>
</div>
<p className="text-base text-[#e5e7eb]/80">
                  Compresses the chart into focused, role‑specific views in seconds.
                </p>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[#2dd4bf] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<p className="text-base font-semibold text-[#f9fafb] tracking-tight">Assessment Support</p>
</div>
<p className="text-base text-[#e5e7eb]/80">
                  Organizes data around problems and supports assessment &amp; plan, clinician‑in‑the‑loop.
                </p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[#8b5cf6] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<p className="text-base font-semibold text-[#f9fafb] tracking-tight">Billing &amp; Coding Checks</p>
</div>
<p className="text-base text-[#e5e7eb]/80">
                  Flags gaps and inconsistencies before claims go out.
                </p>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2.5">
<div="flex gap-2"="" items-center="">
<div className="h-7 w-7 rounded-full bg-[#2dd4bf] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="inbox" strokeWidth="1.5"></i>
</div>
<p className="text-base font-semibold text-[#f9fafb] tracking-tight">Fax &amp; Document Automation</p>
</div="flex></div>
<p className="text-base text-[#e5e7eb]/80">
                  Classifies faxes and routes them to the right patient and workflow.
                </p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2.5">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#020617]" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<p className="text-base font-semibold text-[#f9fafb] tracking-tight">Deep EMR Integration</p>
</div>
<p className="text-base text-[#e5e7eb]/80">
                  HL7, FHIR, and system‑to‑system connections, with auditability and controls.
                </p>
</div>
</div>
</div>

<div className="pt-3 border-t border-[#111827] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<p className="text-base text-[#e5e7eb]">
<span className="font-semibold text-[#f9fafb]">In one line:</span>
               AI‑driven documentation and workflows that live where your clinicians already work.
            </p>
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00d4ff] hover:text-[#2dd4bf]">
              Download platform brief
              <span className="text-[0.625rem]">↘</span>
</button>
</div>
</section></main></div>


<section className="border-t border-[#02071b] bg-[#050816] relative overflow-hidden" id="agents">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#00d4ff1a] blur-3xl"></div>
<div className="absolute bottom-0 -right-32 h-72 w-72 rounded-full bg-[#8b5cf61a] blur-3xl"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">

<div className="text-center space-y-3">
<p className="text-[0.625rem] font-medium tracking-[0.16em] uppercase text-[#60a5fa]">
              Meet your AI team
            </p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
              Eight agents. Complete coverage.
            </h2>
<p className="max-w-2xl mx-auto text-base sm:text-lg text-[#e5e7eb]/80">
              Specialized AI that supports the entire patient workflow — from the first phone call to a paid claim.
            </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#0b1220] to-[#020617] p-4 sm:p-5 shadow-[0_18px_45px_rgba(15,23,42,0.65)] hover:border-[#22c1c3] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#f9731655] text-[#020617]">
                    RITA
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Rita
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Phone agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                Answers calls, schedules appointments, and triages urgency — 24/7.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c1c3]"></span>
                  Intelligent call handling
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c1c3]"></span>
                  Appointment scheduling
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c1c3]"></span>
                  Urgency triage
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#111827] to-[#020617] p-4 sm:p-5 hover:border-[#a855f7] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#a855f766] text-[#f9fafb]">
                    LEXI
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Lexi
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Fax agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                OCR, classification, data extraction, routing, and task creation from faxes.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#a855f7]"></span>
                  Intelligent OCR
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#a855f7]"></span>
                  Auto‑classification
                </li>
<li className="items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#a855f7]"></span>
                  Task assignment
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#0b1220] to-[#020617] p-4 sm:p-5 hover:border-[#22c55e] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#22c55e55] text-[#022c22]">
                    MIRA
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Mira
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Check‑in agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                Digital check‑in, insurance verification, and copay collection.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c55e]"></span>
                  Digital check‑in
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c55e]"></span>
                  Insurance verification
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c55e]"></span>
                  Copay collection
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#0f172a] to-[#020617] p-4 sm:p-5 hover:border-[#06b6d4] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#06b6d466] text-[#022c22]">
                    AI MA
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    AI MA
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Intake agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                Vitals, medications, allergies, and review of systems — before the visit.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#06b6d4]"></span>
                  Vital signs collection
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1.5 w-3 rounded-full bg-[#06b6d4]"></span>
                  Medication reconciliation
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#06b6d4]"></span>
                  Review of systems
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#0b1220] to-[#020617] p-4 sm:p-5 hover:border-[#facc15] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#facc1566] text-[#422006]">
                    SUM
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Summer
                  </p>
</div>
               span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase"&gt;
                  Chart prep agent
                
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                Chart summarization with key findings and visit‑specific highlights.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#facc15]"></span>
                  Chart summarization
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#facc15]"></span>
                  Key findings extraction
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#facc15]"></span>
                  Care gap identification
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#111827] to-[#020617] p-4 sm:p-5 hover:border-[#22c1c3] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#22c1c355] text-[#022c22]">
                    PENNY
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Penny
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Scribe agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                Real‑time SOAP note generation from encounter conversations.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c1c3]"></span>
                  Ambient AI listening
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c1c3]"></span>
                  SOAP note generation
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#22c1c3]"></span>
                  Style adaptation
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#0b1220] to-[#020617] p-4 sm:p-5 hover:border-[#3b82f6] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#3b82f666] text-[#eff6ff]">
                    CLARA
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Clara
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Guidelines agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                Evidence‑based recommendations and drug interaction alerts.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#3b82f6]"></span>
                  Clinical guidelines
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#3b82f6]"></span>
                  Drug interactions
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#3b82f6]"></span>
                  Preventive care alerts
                </li>
</ul>
</article>

<article className="group h-full rounded-2xl border border-[#111827] bg-gradient-to-b from-[#111827] to-[#020617] p-4 sm:p-5 hover:border-[#f97316] transition-colors">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="inline-flex items-center gap-2">
<div className="rounded-full px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] uppercase bg-[#f9731666] text-[#7c2d12]">
                    BILL
                  </div>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                    Bill
                  </p>
</div>
<span className="text-[0.625rem] font-medium text-[#9ca3af] tracking-[0.16em] uppercase">
                  Billing agent
                </span>
</div>
<p className="text-base text-[#e5e7eb]/85 mb-3">
                ICD‑10, CPT, and MIPS code extraction and validation from documentation.
              </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#f97316]"></span>
                  Auto code suggestion
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#f97316]"></span>
                  Charge capture
                </li>
<li className="flex items-center gap-1.5">
<span className="h-1 w-3 rounded-full bg-[#f97316]"></span>
                  Claim pre‑screening
                </li>
</ul>
</article>
</div>

<div className="pt-4 border-t border-[#111827] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<p className="text-base text-[#e5e7eb]/80 max-w-xl">
              From first contact through documentation and billing, these eight agents coordinate behind one simple experience for clinicians.
            </p>
<div className="flex flex-wrap items-center gap-2 text-[0.6875rem] text-[#9ca3af]">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-[#f97316]"></span> Front office
              </span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-[#22c1c3]"></span> In‑visit
              </span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]"></span> Clinical quality
              </span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]"></span> Back office
              </span>
</div>
</div>
</div>
</section>

<section className="border-t border-[#111827] bg-[#020617]" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-2">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">How it works</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
                Built for real clinic days.
              </h2>
<p className="text-lg text-[#e5e7eb]/80 max-w-xl">
                Intellimed plugs into your EMR and quietly supports each step of the visit.
              </p>
</div>
<p className="text-sm text-[#9ca3af] max-w-xs">
              Start in one clinic or service line, expand as outcomes are proven.
            </p>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-6 lg:gap-10 items-start">
<div className="space-y-4">
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] flex items-center justify-center">
<span className="text-[0.6875rem] font-semibold tracking-tight text-[#020617]">1</span>
</div>
<div className="flex-1 w-px bg-[#111827]"></div>
</div>
<div className="pb-4 space-y-1">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Before &amp; during</p>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">Chart prep &amp; assessment</p>
<p className="text-base text-[#e5e7eb]/80">
                    SUMMAR preps the chart; CLARA organizes data while the visit happens.
                  </p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] flex items-center justify-center">
<span className="text-[0.6875rem] font-semibold tracking-tight text-[#020617]">2</span>
</div>
<div className="flex-1 w-px bg-[#111827]"></div>
</div>
<div className="pb-4 space-y-1">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">After</p>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">Note drafting</p>
<p className="text-base text-[#e5e7eb]/80">
                    PENNY drafts a structured note that clinicians quickly review and sign.
                  </p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] flex items-center justify-center">
<span className="text-[0.6875rem] font-semibold tracking-tight text-[#020617]">3</span>
</div>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Billing &amp; admin</p>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">Claims &amp; documents</p>
<p className="text-base text-[#e5e7eb]/80">
                    BILL checks documentation for coding; LAXI routes external docs and faxes.
                  </p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 sm:p-5 space-y-3">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Integration &amp; data</p>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Text\', serif'}}>Lives inside your existing stack.</p>
<p className="text-base text-[#e5e7eb]/80">
                  HL7 and FHIR‑based integrations, role‑based access, and full audit trails.
                </p>
<ul className="space-y-1 text-xs text-[#9ca3af]">
<li>• Read/write where appropriate in the EMR</li>
<li>• Designed to align with HIPAA and security programs</li>
</ul>
</div>
<div className="rounded-2xl border border-[#111827] bg-gradient-to-br from-[#020617] to-[#020617] p-4 sm:p-5 space-y-2">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Where it fits</p>
<div className="grid sm:grid-cols-3 gap-3 text-xs text-[#e5e7eb]">
<div className="space-y-1">
<p className="font-semibold tracking-tight text-[#f9fafb]">Patient care</p>
<p className="text-[#9ca3af]">Primary, specialty, inpatient, ambulatory.</p>
</div>
<div className="space-y-1">
<p className="font-semibold tracking-tight text-[#f9fafb]">Surgical &amp; imaging</p>
<p className="text-[#9ca3af]">Pre‑op, post‑op, diagnostics.</p>
</div>
<div className="space-y-1">
<p className="font-semibold tracking-tight text-[#f9fafb]">Billing</p>
<p className="text-[#9ca3af]">Physician notes, coding, revenue cycle.</p>
</div>
</div>
<p className="text-[0.625rem] text-[#9ca3af]">
                  Prove impact in one area, then scale.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[#111827] bg-[#020617]" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-2">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Why Intellimed AI</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Display\', serif'}}>
                More than a scribe. A clinical automation layer.
              </h2>
<p className="text-lg text-[#e5e7eb]/80 max-w-xl">
                Reduce admin time, improve documentation, and protect revenue with one integrated AI platform.
              </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-5">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2">
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">Clinical‑grade notes</p>
<p className="text-base text-[#e5e7eb]/80">
                Structured, consistent documentation that supports care and coding.
              </p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2">
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">End‑to‑end workflows</p>
<p className="text-base text-[#e5e7eb]/80">
                From prep to claim, AI agents work together—not in silos.
              </p>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 space-y-2">
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">Clinician‑first</p>
<p className="text-base text-[#e5e7eb]/80">
                Transparent drafts and controls; AI as a safety net, not a replacement.
              </p>
</div>
</div>

<div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] gap-4 sm:gap-6">

<div className="rounded-2xl border border-[#111827] bg-gradient-to-br from-[#020617] to-[#020617] p-4 sm:p-5 space-y-3">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">What clinicians are saying</p>
<p className="text-base text-[#e5e7eb]" style={{fontFamily: '\'Financier Text\', serif'}}>
                “With Intellimed, my notes are ready before I sit down at the end of clinic. It feels like getting hours of my day back without sacrificing quality or control.”
              </p>
<div className="flex items-center justify-between gap-2">
<div>
<p className="text-xs font-semibold tracking-tight text-[#f9fafb]">Chief of Medicine, Large Health System</p>
<p className="text-[0.625rem] text-[#9ca3af]">Early Intellimed AI partner</p>
</div>
<div className="hidden sm:flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] border border-[#020617]"></div>
<div className="h-7 w-7 rounded-full bg-[#2dd4bf] border border-[#020617]"></div>
</div>
</div>
</div>

<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 sm:p-5 space-y-3">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Security &amp; compliance</p>
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">Built to meet healthcare standards.</p>
<ul className="space-y-1.5 text-xs text-[#e5e7eb]/80">
<li>• HIPAA‑ready architecture and BAAs where required.</li>
<li>• Role‑based access, audit logs, and data minimization.</li>
<li>• No use of PHI to train shared foundation models.</li>
</ul>
<button className="inline-flex items-center gap-1 text-[0.6875rem] font-medium text-[#00d4ff] hover:text-[#2dd4bf]">
                Request security overview
                <span className="text-[0.625rem]">↗</span>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4 sm:gap-6 pt-2">
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 sm:p-5 space-y-3">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">For clinicians</p>
<ul className="space-y-1.5 text-base text-[#e5e7eb]/80">
<li>• Less time documenting</li>
<li>• Fewer clicks and tabs</li>
<li>• Clear summaries for complex charts</li>
</ul>
</div>
<div className="rounded-2xl border border-[#111827] bg-[#020617] p-4 sm:p-5 space-y-3">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">For leaders</p>
<ul className="space-y-1.5 text-base text-[#e5e7eb]/80">
<li>• Better documentation quality</li>
<li>• Fewer denials and rework</li>
<li>• A scalable AI foundation</li>
</ul>
</div>
</div>

<div className="pt-4 border-t border-[#111827] grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6 items-start">
<div className="space-y-2">
<p className="text-xs font-medium text-[#9ca3af] tracking-[0.16em] uppercase">Questions</p>
<h3 className="text-xl font-semibold tracking-tight text-[#f9fafb]" style={{fontFamily: '\'Financier Text\', serif'}}>
                What teams usually ask first.
              </h3>
<p className="text-base text-[#e5e7eb]/80">
                A short call can go deeper into your specific workflows, EMR, and security needs.
              </p>
</div>
<div className="space-y-3">
<details className="group rounded-xl border border-[#111827] bg-[#020617] p-3">
<summary className="flex items-center justify-between gap-2 cursor-pointer list-none">
<span className="text-xs font-medium text-[#f9fafb]">How long does it take to go live?</span>
<span className="text-[0.625rem] text-[#9ca3af] group-open:rotate-90 transition-transform">›</span>
</summary>
<p className="mt-2 text-[0.75rem] text-[#e5e7eb]/80">
                  Many clinics see Intellimed in production in weeks, starting with a focused workflow and cohort before wider rollout.
                </p>
</details>
<details className="group rounded-xl border border-[#111827] bg-[#020617] p-3">
<summary className="flex items-center justify-between gap-2 cursor-pointer list-none">
<span className="text-xs font-medium text-[#f9fafb]">Does it change how clinicians chart?</span>
<span className="text-[0.625rem] text-[#9ca3af] group-open:rotate-90 transition-transform">›</span>
</summary>
<p className="mt-2 text-[0.75rem] text-[#e5e7eb]/80">
                  Intellimed works inside your EMR and existing note templates. Clinicians keep their workflows; the AI reduces the manual steps.
                </p>
</details>
<details className="group rounded-xl border border-[#111827] bg-[#020617] p-3">
<summary className="flex items-center justify-between gap-2 cursor-pointer list-none">
<span className="text-xs font-medium text-[#f9fafb]">Can we start without a full system rollout?</span>
<span className="text-[0.625rem] text-[#9ca3af] group-open:rotate-90 transition-transform">›</span>
</summary>
<p className="mt-2 text-[0.75rem] text-[#e5e7eb]/80">
                  Yes. Most partners begin with one specialty, clinic, or workflow, measure outcomes, then expand step‑by‑step.
                </p>
</details>
</div>
</div>

<div className="pt-4 border-t border-[#111827] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-base font-semibold tracking-tight text-[#f9fafb]">
                Ready to explore Intellimed for your organization?
              </p>
<p className="text-base text-[#e5e7eb]/80">
                Share your priorities and EMR; we’ll propose a rollout in weeks, not years.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-[#00d4ff] px-6 py-2 text-base font-semibold tracking-tight text-[#020617] hover:bg-[#2dd4bf] transition-colors" href="#hero-form">
                Book a strategy session
              </a>
<button className="inline-flex items-center justify-center rounded-full border border-[#1f2937] bg-[#020617] px-5 py-2 text-sm font-medium text-[#e5e7eb] hover:border-[#00d4ff] hover:text-[#f9fafb] transition-colors">
                Talk to our clinical team
              </button>
</div>
</div>
</div>
</section>


<footer className="border-t border-[#111827] bg-[#020617]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[#00d4ff] flex items-center justify-center">
<span className="text-[0.6875rem] font-semibold tracking-tight text-[#020617]">IA</span>
</div>
<span className="text-xs font-semibold tracking-tight text-[#e5e7eb]" style={{fontFamily: '\'Financier Text\', serif'}}>Intellimed AI</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-[0.6875rem] text-[#9ca3af]">
<span>© <span id="year"></span> Intellimed AI. All rights reserved.</span>
<span className="hidden sm:inline-block h-3 w-px bg-[#111827]"></span>
<a className="hover:text-[#e5e7eb]" href="#">Privacy</a>
<a className="hover:text-[#e5e7eb]" href="#">Security</a>
<a className="hover:text-[#e5e7eb]" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
