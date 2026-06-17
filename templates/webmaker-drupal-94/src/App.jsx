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
      
<div className="min-h-screen flex flex-col">

<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/5 to-transparent"></div>

<header className="w-full">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 sm:py-6 px-4 sm:px-6 lg:px-0">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-[#0094CC] flex items-center justify-center text-xs font-semibold tracking-tight text-white">
              WM
            </div>
<div className="flex flex-col leading-tight">
<span className="text-base sm:text-lg font-semibold tracking-tight text-[#111111]">
                Webmaker+
              </span>
<span className="text-[0.7rem] sm:text-xs font-normal text-[#757575]">
                Drupal templates &amp; sites
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-sm font-medium text-[#404040] hover:text-black transition-colors" href="#templates">
              Templates
            </a>
<a className="text-sm font-medium text-[#404040] hover:text-black transition-colors" href="#how-it-works">
              How it works
            </a>
<a className="text-sm font-medium text-[#404040] hover:text-black transition-colors" href="#services">
              Services
            </a>
<a className="text-sm font-medium text-[#404040] hover:text-black transition-colors" href="#pricing">
              Pricing
            </a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-black/5 bg-white text-xs sm:text-sm font-medium text-[#404040] hover:bg-black/5 transition-colors px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm">
              Sign in
            </button>
<a className="inline-flex items-center justify-center rounded-full bg-[#0094CC] text-xs sm:text-sm font-medium text-white hover:bg-[#0082B3] transition-colors px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm" href="#cta">
              Get started
            </a>
</div>
</div>
</header>

<main className="flex-1">
<section className="w-full border-y border-black/5 bg-gradient-to-b from-white to-[#f6f7f8]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 backdrop-blur px-3 py-1 text-[0.7rem] sm:text-xs font-medium text-[#404040] shadow-sm">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#0094CC]"></span>
<span>Over 10 interchangeable Drupal templates in one product</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111]">
                  Launch a polished Drupal site in a weekend.
                </h1>
<p className="text-base sm:text-lg leading-relaxed text-[#404040]">
                  Webmaker+ gives you a library of premium Drupal templates and a streamlined site builder.
                  Use it anywhere or host with us. Add expert services only when you need them.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4" id="cta">
<a className="inline-flex items-center justify-center rounded-full bg-[#0094CC] text-sm font-medium text-white hover:bg-[#0082B3] transition-colors px-5 py-2.5 shadow-sm" href="#templates">
                  Browse templates
                  <span className="iconify ml-2" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white text-sm font-medium text-[#404040] hover:bg-black/5 transition-colors px-5 py-2.5 shadow-sm" href="#services">
                  Hire us for Drupal work
                </a>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#757575]">
<div className="flex items-center gap-2">
<span className="iconify text-[#0094CC]" data-height="16" data-icon="lucide:sparkles" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>10+ interchangeable layouts in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#0094CC]" data-height="16" data-icon="lucide:shield-check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Drupal specialists since 2012</span>
</div>
</div>
</div>

<div className="relative">

<div className="relative rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/5 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs font-medium text-[#0094CC] uppercase tracking-tight">
                      Webmaker+
                    </p>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#111111]">
                      Templates + builder in one toolkit
                    </h2>
<p className="text-sm leading-relaxed text-[#404040] mt-1.5">
                      Start from any template, swap layouts later, and stay on Drupal the whole way.
                    </p>
</div>
<div className="hidden sm:flex items-center justify-center rounded-xl bg-[#f6f7f8] border border-black/5 h-20 w-24">
<span className="iconify text-[#0094CC]" data-height="40" data-icon="lucide:layout-dashboard" data-width="40" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-[0.7rem] sm:text-xs">
<div className="rounded-xl border border-black/5 bg-[#f6f7f8] p-3">
<div className="flex items-center justify-between">
<span className="font-medium text-[#111111]">Standalone</span>
<span className="inline-flex items-center rounded-full bg-white border border-black/5 px-2 py-0.5 text-[0.65rem] font-medium text-[#404040]">
                        Self-host
                      </span>
</div>
<p className="mt-1.5 text-[#404040]">
                      Install on your own Drupal hosting. Own everything, move any time.
                    </p>
</div>
<div className="rounded-xl border border-black/5 bg-[#0094CC]/5 p-3">
<div className="flex items-center justify-between">
<span className="font-medium text-[#111111]">Hosted</span>
<span className="inline-flex items-center rounded-full bg-[#0094CC] text-white px-2 py-0.5 text-[0.65rem] font-medium">
                        SaaS
                      </span>
</div>
<p className="mt-1.5 text-[#404040]">
                      We host, secure, back up, and update your Drupal site for you.
                    </p>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-3 mt-1">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-[#0094CC]/10 border border-white flex items-center justify-center text-[0.65rem] font-medium text-[#0094CC]">
                      D
                    </div>
<div className="h-6 w-6 rounded-full bg-black/5 border border-white flex items-center justify-center text-[0.65rem] font-medium text-[#404040]">
                      A
                    </div>
<div className="h-6 w-6 rounded-full bg-black/10 border border-white flex items-center justify-center text-[0.65rem] font-medium text-[#404040]">
                      H
                    </div>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#fbbf24]" data-height="14" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Trusted by small teams &amp; agencies</span>
</div>
</div>
</div>

<div className="hidden sm:block absolute -bottom-10 -left-4 sm:-left-10 lg:-left-16 rounded-2xl bg-white border border-black/5 shadow-md shadow-black/5 p-3 w-52">
<div className="flex items-center justify-between gap-2">
<span className="text-xs font-medium text-[#111111] tracking-tight">
                    Services add-on
                  </span>
<span className="inline-flex items-center rounded-full bg-[#0094CC]/10 text-[0.65rem] font-medium text-[#0094CC] px-2 py-0.5">
                    Optional
                  </span>
</div>
<ul className="mt-2 space-y-1.5 text-[0.7rem] text-[#404040]">
<li className="flex items-center gap-1.5">
<span className="iconify text-[#0094CC]" data-height="13" data-icon="lucide:shield" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>Security updates</span>
</li>
<li className="flex items-center gap-1.5">
<span className="iconify text-[#0094CC]" data-height="13" data-icon="lucide:wrench" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>Custom features</span>
</li>
<li className="flex items-center gap-1.5">
<span className="iconify text-[#0094CC]" data-height="13" data-icon="lucide:server" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>Managed hosting</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full py-10 sm:py-14 lg:py-16" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                  Two ways to use Webmaker+
                </h2>
<p className="mt-1 text-base leading-relaxed text-[#404040]">
                  Choose the workflow that fits your team today. Switch later without rebuilding.
                </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5 lg:gap-6">

<div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                      Buy templates &amp; host anywhere
                    </h3>
<p className="text-sm leading-relaxed text-[#404040] mt-1">
                      Perfect if you already have Drupal hosting or an in-house team.
                    </p>
</div>
<span className="iconify text-[#0094CC]" data-height="22" data-icon="lucide:download" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<ul className="space-y-2 text-sm text-[#404040]">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Purchase Webmaker+ or individual templates.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Install on your existing Drupal hosting or infrastructure.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="16" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Add our services only when you need extra help.</span>
</li>
</ul>
<div className="mt-1 flex flex-wrap gap-2 text-[0.7rem]">
<span className="inline-flex items-center rounded-full bg-[#f6f7f8] text-[#404040] px-2.5 py-1 border border-black/5">
                    For agencies
                  </span>
<span className="inline-flex items-center rounded-full bg-[#f6f7f8] text-[#404040] px-2.5 py-1 border border-black/5">
                    For in-house teams
                  </span>
</div>
</div>

<div className="rounded-2xl border border-[#0094CC]/30 bg-[#0094CC]/5 p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#111111]">
                      Hosted Webmaker+ (SaaS)
                    </h3>
<p className="text-sm leading-relaxed text-[#404040] mt-1">
                      We run Drupal for you—hosting, updates, backups, and monitoring included.
                    </p>
</div>
<span className="iconify text-[#0094CC]" data-height="22" data-icon="lucide:cloud" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<ul className="space-y-2 text-sm text-[#404040]">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Choose a template, connect your domain, and launch fast.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Automatic security patches and performance tuning.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Scale to more traffic or templates without downtime.</span>
</li>
</ul>
<div className="mt-1 flex flex-wrap gap-2 text-[0.7rem]">
<span className="inline-flex items-center rounded-full bg-white text-[#404040] px-2.5 py-1 border border-black/5">
                    For founders
                  </span>
<span className="inline-flex items-center rounded-full bg-white text-[#404040] px-2.5 py-1 border border-black/5">
                    For marketers
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-10 sm:py-14 lg:py-16 border-t border-black/5 bg-white" id="templates">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                  Webmaker+ template library
                </h2>
<p className="mt-1 text-base leading-relaxed text-[#404040]">
                  Start with any template and change layouts later without rebuilding your content.
                </p>
</div>
<div className="flex flex-wrap gap-2 text-[0.7rem] sm:text-xs">
<span className="inline-flex items-center rounded-full border border-black/5 bg-[#f6f7f8] text-[#404040] px-2.5 py-1">
                  Designed for Drupal 9+
                </span>
<span className="inline-flex items-center rounded-full border border-black/5 bg-[#f6f7f8] text-[#404040] px-2.5 py-1">
                  Accessibility-first
                </span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
<div className="flex items-center gap-2 text-[#757575]">
<span>Included in Webmaker+:</span>
<span className="inline-flex items-center rounded-full bg-[#0094CC]/10 text-[#0094CC] px-2 py-0.5 text-[0.7rem] font-medium">
                  10+ interchangeable templates
                </span>
</div>
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center rounded-full border border-black/5 bg-black/5 text-[0.7rem] sm:text-xs font-medium text-[#404040] px-2.5 py-1">
                  All
                </button>
<button className="inline-flex items-center rounded-full border border-black/5 bg-white text-[0.7rem] sm:text-xs font-medium text-[#404040] px-2.5 py-1">
                  Marketing
                </button>
<button className="inline-flex items-center rounded-full border border-black/5 bg-white text-[0.7rem] sm:text-xs font-medium text-[#404040] px-2.5 py-1">
                  Product
                </button>
<button className="inline-flex items-center rounded-full border border-black/5 bg-white text-[0.7rem] sm:text-xs font-medium text-[#404040] px-2.5 py-1">
                  Content
                </button>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

<article className="group rounded-2xl border border-black/5 bg-[#f6f7f8] hover:bg-white transition-colors overflow-hidden flex flex-col">

<div className="relative aspect-video bg-gradient-to-br from-black/10 via-black/5 to-white border-b border-black/5 flex items-center justify-center">
<div className="absolute inset-3 rounded-xl border border-white/60 bg-white/40 backdrop-blur"></div>
<div className="relative flex flex-col items-center gap-1">
<div className="flex items-center gap-1.5 text-[0.65rem] font-medium text-[#404040] bg-white/80 rounded-full px-2 py-1 border border-black/5">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:layout-template" data-width="14" style={{strokeWidth: '1.5'}}></span>
                      Layout overview
                    </div>
<div className="mt-1 h-10 w-24 rounded-md bg-[#0094CC]/70"></div>
<div className="mt-1 flex gap-1">
<div className="h-2 w-10 rounded-full bg-black/20"></div>
<div className="h-2 w-10 rounded-full bg-black/10"></div>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between p-4 sm:p-4.5 space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                        Nova Launch
                      </h3>
<span className="text-[0.65rem] font-medium text-[#757575]">
                        Marketing
                      </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                      A focused one-page launch template for SaaS and productized services.
                    </p>
</div>
<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:rows" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>6 sections • Hero, Features, Pricing</span>
</div>
</div>
<div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
<div className="flex flex-col text-[0.7rem]">
<span className="text-[#404040] font-medium">From $89</span>
<span className="text-[#757575]">Included in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-[0.7rem] font-medium text-[#404040] hover:bg-black/5 transition-colors px-2.5 py-1">
                        View details
                      </button>
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-[0.7rem] font-medium text-white hover:bg-[#0082B3] transition-colors px-2.5 py-1" href="#">
                        Live demo
                        <span className="iconify ml-1" data-height="13" data-icon="lucide:external-link" data-width="13" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-black/5 bg-[#f6f7f8] hover:bg-white transition-colors overflow-hidden flex flex-col">
<div className="relative aspect-video bg-gradient-to-br from-black/10 via-black/5 to-white border-b border-black/5 flex items-center justify-center">
<div className="absolute inset-3 rounded-xl border border-white/70 bg-white/50 backdrop-blur"></div>
<div className="relative flex flex-col items-center gap-1">
<div className="flex gap-1">
<div className="h-9 w-16 rounded-md bg-[#0094CC]/80"></div>
<div className="h-9 w-16 rounded-md bg-black/10"></div>
</div>
<div className="mt-2 h-2 w-24 rounded-full bg-black/20"></div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between p-4 sm:p-4.5 space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                        Atlas Docs
                      </h3>
<span className="text-[0.65rem] font-medium text-[#757575]">
                        Documentation
                      </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                      A documentation-first Drupal template for wikis, APIs, and product guides.
                    </p>
</div>
<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:list-tree" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Sidebar nav • Search • Versioning-ready</span>
</div>
</div>
<div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
<div className="flex flex-col text-[0.7rem]">
<span className="text-[#404040] font-medium">From $99</span>
<span className="text-[#757575]">Included in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-[0.7rem] font-medium text-[#404040] hover:bg-black/5 transition-colors px-2.5 py-1">
                        View details
                      </button>
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-[0.7rem] font-medium text-white hover:bg-[#0082B3] transition-colors px-2.5 py-1" href="#">
                        Live demo
                        <span className="iconify ml-1" data-height="13" data-icon="lucide:external-link" data-width="13" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-black/5 bg-[#f6f7f8] hover:bg-white transition-colors overflow-hidden flex flex-col">
<div className="relative aspect-video bg-gradient-to-br from-black/10 via-black/5 to-white border-b border-black/5 flex items-center justify-center">
<div className="absolute inset-3 rounded-xl border border-white/50 bg-white/50 backdrop-blur"></div>
<div className="relative flex flex-col items-center gap-1">
<div className="flex flex-col gap-1.5 w-28">
<div className="h-3 rounded-full bg-[#0094CC]/80"></div>
<div className="h-3 rounded-full bg-black/15 w-3/4"></div>
<div className="grid grid-cols-3 gap-1 mt-1">
<div className="h-6 rounded bg-black/10"></div>
<div className="h-6 rounded bg-black/10"></div>
<div className="h-6 rounded bg-black/10"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between p-4 sm:p-4.5 space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                        Studio Grid
                      </h3>
<span className="text-[0.65rem] font-medium text-[#757575]">
                        Portfolio
                      </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                      A gallery-driven template for studios, agencies, and freelancers on Drupal.
                    </p>
</div>
<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:images" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Masonry grid • Case studies • Blog</span>
</div>
</div>
<div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
<div className="flex flex-col text-[0.7rem]">
<span className="text-[#404040] font-medium">From $89</span>
<span className="text-[#757575]">Included in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-[0.7rem] font-medium text-[#404040] hover:bg-black/5 transition-colors px-2.5 py-1">
                        View details
                      </button>
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-[0.7rem] font-medium text-white hover:bg-[#0082B3] transition-colors px-2.5 py-1" href="#">
                        Live demo
                        <span className="iconify ml-1" data-height="13" data-icon="lucide:external-link" data-width="13" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-black/5 bg-[#f6f7f8] hover:bg-white transition-colors overflow-hidden flex flex-col">
<div className="relative aspect-video bg-gradient-to-br from-black/10 via-black/5 to-white border-b border-black/5 flex items-center justify-center">
<div className="absolute inset-3 rounded-xl border border-white/60 bg-white/40 backdrop-blur"></div>
<div className="relative flex flex-col items-center gap-1 w-32">
<div className="h-4 rounded-full bg-[#0094CC]/80 w-full"></div>
<div className="grid grid-cols-[2fr,1fr] gap-1 w-full mt-1">
<div className="space-y-1">
<div className="h-2 rounded-full bg-black/20 w-5/6"></div>
<div className="h-2 rounded-full bg-black/10 w-2/3"></div>
<div className="h-6 rounded bg-black/10 w-full"></div>
</div>
<div className="h-10 rounded bg-black/10"></div>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between p-4 sm:p-4.5 space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                        Insight Press
                      </h3>
<span className="text-[0.65rem] font-medium text-[#757575]">
                        Blog / Magazine
                      </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                      A content-forward layout for blogs, magazines, and thought leadership hubs.
                    </p>
</div>
<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:newspaper" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Categories • Authors • Newsletter</span>
</div>
</div>
<div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
<div className="flex flex-col text-[0.7rem]">
<span className="text-[#404040] font-medium">From $79</span>
<span className="text-[#757575]">Included in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-[0.7rem] font-medium text-[#404040] hover:bg-black/5 transition-colors px-2.5 py-1">
                        View details
                      </button>
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-[0.7rem] font-medium text-white hover:bg-[#0082B3] transition-colors px-2.5 py-1" href="#">
                        Live demo
                        <span className="iconify ml-1" data-height="13" data-icon="lucide:external-link" data-width="13" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-black/5 bg-[#f6f7f8] hover:bg-white transition-colors overflow-hidden flex flex-col">
<div className="relative aspect-video bg-gradient-to-br from-black/10 via-black/5 to-white border-b border-black/5 flex items-center justify-center">
<div className="absolute inset-3 rounded-xl border border-white/60 bg-white/40 backdrop-blur"></div>
<div className="relative flex flex-col gap-1 w-32">
<div className="flex gap-1">
<div className="h-5 flex-1 rounded bg-[#0094CC]/80"></div>
<div className="h-5 w-6 rounded bg-black/10"></div>
</div>
<div className="grid grid-cols-2 gap-1 mt-1">
<div className="h-10 rounded bg-black/10"></div>
<div className="space-y-1">
<div className="h-2 rounded-full bg-black/20 w-full"></div>
<div className="h-2 rounded-full bg-black/10 w-3/4"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between p-4 sm:p-4.5 space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                        Beacon Nonprofit
                      </h3>
<span className="text-[0.65rem] font-medium text-[#757575]">
                        Nonprofit
                      </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                      Built for organizations that need clear storytelling, events, and donations.
                    </p>
</div>
<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:heart-handshake" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Events • Donations • Impact stories</span>
</div>
</div>
<div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
<div className="flex flex-col text-[0.7rem]">
<span className="text-[#404040] font-medium">From $69</span>
<span className="text-[#757575]">Included in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-[0.7rem] font-medium text-[#404040] hover:bg-black/5 transition-colors px-2.5 py-1">
                        View details
                      </button>
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-[0.7rem] font-medium text-white hover:bg-[#0082B3] transition-colors px-2.5 py-1" href="#">
                        Live demo
                        <span className="iconify ml-1" data-height="13" data-icon="lucide:external-link" data-width="13" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-black/5 bg-[#f6f7f8] hover:bg-white transition-colors overflow-hidden flex flex-col">
<div className="relative aspect-video bg-gradient-to-br from-black/10 via-black/5 to-white border-b border-black/5 flex items-center justify-center">
<div className="absolute inset-3 rounded-xl border border-white/60 bg-white/40 backdrop-blur"></div>
<div className="relative flex flex-col items-center gap-1 w-32">
<div className="flex items-center justify-between w-full">
<div className="h-3 rounded-full bg-[#0094CC]/80 w-16"></div>
<div className="h-3 rounded-full bg-black/20 w-10"></div>
</div>
<div className="mt-2 grid grid-cols-3 gap-1 w-full">
<div className="h-6 rounded bg-black/10"></div>
<div className="h-6 rounded bg-black/10"></div>
<div className="h-6 rounded bg-black/10"></div>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between p-4 sm:p-4.5 space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                        Orbit Commerce
                      </h3>
<span className="text-[0.65rem] font-medium text-[#757575]">
                        Commerce
                      </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                      A conversion-focused commerce template for Drupal Commerce stores.
                    </p>
</div>
<div className="flex items-center justify-between gap-2 pt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:shopping-bag" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Product grid • Cart • Checkout</span>
</div>
</div>
<div className="flex items-center justify-between gap-2 pt-2 border-t border-black/5">
<div className="flex flex-col text-[0.7rem]">
<span className="text-[#404040] font-medium">From $119</span>
<span className="text-[#757575]">Included in Webmaker+</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-[0.7rem] font-medium text-[#404040] hover:bg-black/5 transition-colors px-2.5 py-1">
                        View details
                      </button>
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-[0.7rem] font-medium text-white hover:bg-[#0082B3] transition-colors px-2.5 py-1" href="#">
                        Live demo
                        <span className="iconify ml-1" data-height="13" data-icon="lucide:external-link" data-width="13" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</article>
</div>

<div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-4 rounded-2xl border border-black/5 bg-[#f6f7f8] p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[#0094CC]/10 flex items-center justify-center">
<span className="iconify text-[#0094CC]" data-height="18" data-icon="lucide:layers" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm sm:text-base font-semibold tracking-tight text-[#111111]">
                    Want just one template?
                  </p>
<p className="text-xs sm:text-sm text-[#404040]">
                    All templates are available standalone, or bundled into Webmaker+ for the best value.
                  </p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-xs sm:text-sm font-medium text-white hover:bg-[#0082B3] transition-colors px-4 py-2" href="#pricing">
                  Compare pricing
                </a>
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-xs sm:text-sm font-medium text-[#404040] hover:bg-black/5 transition-colors px-4 py-2">
                  Talk about a custom bundle
                </button>
</div>
</div>
</div>
</section>

<section className="w-full py-10 sm:py-14 lg:py-16" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                  Drupal services when you need experts
                </h2>
<p className="mt-1 text-base leading-relaxed text-[#404040]">
                  Hire us to keep your Drupal site secure, fast, and tailored to your business—
                  whether or not you use Webmaker+.
                </p>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-[#757575]">
<span className="iconify text-[#0094CC]" data-height="16" data-icon="lucide:clock-3" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Response in under 1 business day</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 lg:gap-6">

<div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#0094CC]/10 flex items-center justify-center">
<span className="iconify text-[#0094CC]" data-height="18" data-icon="lucide:shield-alert" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111111]">
                      Drupal security care
                    </h3>
</div>
<span className="inline-flex items-center rounded-full bg-[#f6f7f8] text-[0.65rem] font-medium text-[#757575] px-2 py-0.5">
                    Essential
                  </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                  We apply core and module security releases, monitor advisories, and keep your site hardened.
                </p>
<ul className="space-y-1.5 text-sm text-[#404040]">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:shield-check" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Monthly or quarterly security patching.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:bell-ring" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Alerts and remediation for critical advisories.</span>
</li>
</ul>
<div className="mt-auto pt-3 border-t border-black/5 flex items-center justify-between gap-2 text-[0.7rem]">
<span className="text-[#404040] font-medium">From $149 / month</span>
<button className="inline-flex items-center rounded-full bg-[#0094CC] text-white font-medium hover:bg-[#0082B3] transition-colors px-3 py-1.5 text-[0.7rem]">
                    Request a security plan
                  </button>
</div>
</div>

<div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#0094CC]/10 flex items-center justify-center">
<span className="iconify text-[#0094CC]" data-height="18" data-icon="lucide:wrench" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111111]">
                      Custom Drupal work
                    </h3>
</div>
<span className="inline-flex items-center rounded-full bg-[#f6f7f8] text-[0.65rem] font-medium text-[#757575] px-2 py-0.5">
                    Flexible
                  </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                  New features, integrations, migrations, and design tweaks—delivered by Drupal specialists.
                </p>
<ul className="space-y-1.5 text-sm text-[#404040]">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:git-branch" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Feature development and module selection.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:paintbrush" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Design alignment with your existing brand.</span>
</li>
</ul>
<div className="mt-auto pt-3 border-t border-black/5 flex items-center justify-between gap-2 text-[0.7rem]">
<span className="text-[#404040] font-medium">From $120 / hour</span>
<button className="inline-flex items-center rounded-full bg-[#0094CC] text-white font-medium hover:bg-[#0082B3] transition-colors px-3 py-1.5 text-[0.7rem]">
                    Book a consultation
                  </button>
</div>
</div>

<div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#0094CC]/10 flex items-center justify-center">
<span className="iconify text-[#0094CC]" data-height="18" data-icon="lucide:server" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-[#111111]">
                      Managed Drupal hosting
                    </h3>
</div>
<span className="inline-flex items-center rounded-full bg-[#f6f7f8] text-[0.65rem] font-medium text-[#757575] px-2 py-0.5">
                    Fully managed
                  </span>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                  Optimized infrastructure, monitoring, backups, and a team that actually knows Drupal.
                </p>
<ul className="space-y-1.5 text-sm text-[#404040]">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:activity" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Performance tuning and uptime monitoring.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:database-backup" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Automated backups and tested restores.</span>
</li>
</ul>
<div className="mt-auto pt-3 border-t border-black/5 flex items-center justify-between gap-2 text-[0.7rem]">
<span className="text-[#404040] font-medium">From $79 / month</span>
<button className="inline-flex items-center rounded-full bg-[#0094CC] text-white font-medium hover:bg-[#0082B3] transition-colors px-3 py-1.5 text-[0.7rem]">
                    Share your requirements
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-10 sm:py-14 lg:py-16 border-t border-black/5 bg-white" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
                  Choose how you start
                </h2>
<p className="mt-1 text-base leading-relaxed text-[#404040]">
                  Own the code with standalone templates, or let us host everything for you with Webmaker+ SaaS.
                </p>
</div>
</div>
<div className="grid md:grid-cols-[1.1fr,1fr] gap-5 lg:gap-6">

<div className="relative rounded-2xl border border-[#0094CC]/40 bg-[#0094CC]/5 p-4 sm:p-5 flex flex-col gap-5 overflow-hidden">
<div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#0094CC]/10"></div>
<div className="relative flex items-center justify-between gap-3">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#111111]">
                      Webmaker+ (all templates)
                    </h3>
<p className="mt-1 text-sm leading-relaxed text-[#404040]">
                      Get every current and future template, plus the Webmaker+ site builder core.
                    </p>
</div>
<span className="inline-flex items-center rounded-full bg-[#0094CC] text-white text-[0.65rem] font-medium px-2.5 py-0.5">
                    Most popular
                  </span>
</div>
<div className="relative rounded-xl border border-black/5 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-[#111111]">
                        $249
                      </span>
<span className="text-xs text-[#757575]">one-time, self-hosted</span>
</div>
<p className="mt-1 text-xs sm:text-sm text-[#404040]">
                      Use on one Drupal site. Upgrade options for additional sites.
                    </p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-[#0094CC] text-xs sm:text-sm font-medium text-white hover:bg-[#0082B3] transition-colors px-4 py-2">
                    Buy Webmaker+ standalone
                  </button>
</div>
<div className="relative rounded-xl border border-black/5 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-[#111111]">
                        $59
                      </span>
<span className="text-xs text-[#757575]">/ month, hosted</span>
</div>
<p className="mt-1 text-xs sm:text-sm text-[#404040]">
                      Hosting, security updates, and Webmaker+ builder all included.
                    </p>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-[#0094CC] bg-white text-xs sm:text-sm font-medium text-[#0094CC] hover:bg-[#0094CC]/5 transition-colors px-4 py-2">
                    Start hosted trial
                  </button>
</div>
<ul className="text-sm text-[#404040] space-y-1.5">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:check" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Access to every template, with more added regularly.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:check" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Swap templates without losing your Drupal content.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:check" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Optional add-ons: security care, customisation, managed hosting.</span>
</li>
</ul>
</div>

<div className="rounded-2xl border border-black/5 bg-[#f6f7f8] p-4 sm:p-5 flex flex-col gap-4">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#111111]">
                  Single Drupal template
                </h3>
<p className="text-sm leading-relaxed text-[#404040]">
                  Need just one layout for a single project? Purchase any template individually.
                </p>
<div className="rounded-xl border border-black/5 bg-white p-4 space-y-2">
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-[#111111]">
                      From $69
                    </span>
<span className="text-xs text-[#757575]">one-time per site</span>
</div>
<p className="text-xs sm:text-sm text-[#404040]">
                    Choose a template above, then select “Standalone license” during checkout.
                  </p>
</div>
<ul className="text-sm text-[#404040] space-y-1.5">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:dot" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Perfect for one-off marketing sites and campaigns.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-[#0094CC]" data-height="15" data-icon="lucide:dot" data-width="15" style={{strokeWidth: '1.5'}}></span>
<span>Upgrade to full Webmaker+ later at a discount.</span>
</li>
</ul>
<div className="mt-auto flex flex-col gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white text-xs sm:text-sm font-medium text-[#404040] hover:bg-black/5 transition-colors px-4 py-2">
                    See templates &amp; pricing
                  </button>
<button className="inline-flex items-center justify-center rounded-full bg-black text-xs sm:text-sm font-medium text-white hover:bg-black/80 transition-colors px-4 py-2">
                    Talk to sales about a plan
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-10 sm:py-14 lg:py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
<div className="rounded-2xl border border-black/5 bg-[#f6f7f8] p-5 sm:p-6 lg:p-7 grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="flex flex-col gap-3 border-b md:border-b-0 md:border-r border-black/5 pb-4 md:pb-0 md:pr-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-[#0094CC]/10 flex items-center justify-center">
<span className="iconify text-[#0094CC]" data-height="18" data-icon="lucide:layout-dashboard" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#111111]">
                    Ready to pick a template?
                  </h3>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                  Explore live demos, compare layouts, and purchase either a standalone template or Webmaker+.
                </p>
<div className="flex flex-wrap gap-2 mt-1">
<a className="inline-flex items-center rounded-full bg-[#0094CC] text-xs sm:text-sm font-medium text-white hover:bg-[#0082B3] transition-colors px-4 py-2" href="#templates">
                    Browse all templates
                    <span className="iconify ml-1.5" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="inline-flex items-center rounded-full border border-black/10 bg-white text-xs sm:text-sm font-medium text-[#404040] hover:bg-black/5 transition-colors px-4 py-2">
                    Ask which template fits best
                  </button>
</div>
</div>

<div className="flex flex-col gap-3 md:pl-2 lg:pl-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center">
<span className="iconify text-[#0094CC]" data-height="18" data-icon="lucide:headset" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#111111]">
                    Need Drupal help first?
                  </h3>
</div>
<p className="text-sm leading-relaxed text-[#404040]">
                  Share your current Drupal setup and goals. We’ll recommend templates, services, or both.
                </p>

<form className="mt-1 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-[#757575] mb-1">
                        Work email
                      </label>
<input className="w-full rounded-lg border border-black/10 bg-white text-sm text-[#404040] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#0094CC] focus:border-[#0094CC] px-3 py-2" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#757575] mb-1">
                        Website URL (optional)
                      </label>
<input className="w-full rounded-lg border border-black/10 bg-white text-sm text-[#404040] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#0094CC] focus:border-[#0094CC] px-3 py-2" placeholder="https://your-site.com" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#757575] mb-1">
                      What do you need help with?
                    </label>
<textarea className="w-full rounded-lg border border-black/10 bg-white text-sm text-[#404040] placeholder:text-[#B0B0B0] focus:outline-none focus:ring-2 focus:ring-[#0094CC] focus:border-[#0094CC] px-3 py-2" placeholder="Tell us about your Drupal site, timeline, and budget..." rows="3"></textarea>
</div>
<div className="flex flex-wrap items-center justify-between gap-3">
<button className="inline-flex items-center rounded-full bg-black text-xs sm:text-sm font-medium text-white hover:bg-black/80 transition-colors px-4 py-2" type="submit">
                      Request a Drupal proposal
                    </button>
<p className="text-[0.65rem] sm:text-xs text-[#757575]">
                      No obligation. We typically reply in under 1 business day.
                    </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-black/5 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-6 sm:py-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-[#0094CC] flex items-center justify-center text-[0.65rem] font-semibold tracking-tight text-white">
              WM
            </div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-[#111111]">
                Webmaker+
              </span>
<span className="text-[0.65rem] text-[#757575]">
                Drupal-first templates &amp; services
              </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-[0.65rem] sm:text-xs text-[#757575]">
<div className="flex items-center gap-2">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Security-focused by design</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#0094CC]" data-height="14" data-icon="lucide:mail" data-width="14" style={{strokeWidth: '1.5'}}></span>
<a className="hover:text-[#404040] transition-colors" href="mailto:hello@webmakerplus.com">
                hello@webmakerplus.com
              </a>
</div>
<span className="hidden sm:inline text-[#B0B0B0]">•</span>
<span>© <span id="year"></span> Webmaker+. All rights reserved.</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
