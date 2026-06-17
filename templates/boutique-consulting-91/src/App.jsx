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



      // Initialize Lucide Icons with 1.5 stroke width
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      const modal = document.getElementById('early-access-modal');
      const backdrop = document.getElementById('modal-backdrop');
      const panel = document.getElementById('modal-panel');

      function openModal() {
          modal.classList.remove('hidden');
          setTimeout(() => {
              backdrop.classList.remove('opacity-0');
              panel.classList.remove('modal-enter');
              panel.classList.add('modal-enter-active');
          }, 10);
      }

      function closeModal() {
          backdrop.classList.add('opacity-0');
          panel.classList.remove('modal-enter-active');
          panel.classList.add('modal-exit-active');

          setTimeout(() => {
              modal.classList.add('hidden');
              panel.classList.remove('modal-exit-active');
              panel.classList.add('modal-enter');
          }, 300);
      }

      function submitForm(form) {
          const btn = form.querySelector('button[type="submit"]');
          const originalHTML = btn.innerHTML;

          // Replace button content with success state using Lucide icon structure
          btn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i> <span>Added to Waitlist</span>';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); // Re-init icons for dynamic content

          btn.classList.remove('bg-slate-900', 'hover:bg-slate-800');
          btn.classList.add('bg-green-600', 'hover:bg-green-700');

          setTimeout(() => {
              closeModal();
              setTimeout(() => {
                  form.reset();
                  btn.innerHTML = originalHTML;
                  lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); // Re-init icons
                  btn.classList.add('bg-slate-900', 'hover:bg-slate-800');
                  btn.classList.remove('bg-green-600', 'hover:bg-green-700');
              }, 500);
          }, 1500);
      }

      // Close on Escape key
      document.addEventListener('keydown', function(event) {
          if (event.key === "Escape" && !modal.classList.contains('hidden')) {
              closeModal();
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
      

<nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2.5" href="#">
<img alt="Cognitive Alpha Logo" className="h-6 md:h-8 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12668ec5-9d4e-4f3e-80a0-79add4586f8a_800w.png"/>
</a>
<button className="text-xs font-medium text-slate-900 border border-slate-200 px-4 py-2 hover:bg-slate-50 transition-colors duration-200" onclick="openModal()">
          Early Access
        </button>
</div>
</nav>

<section className="md:pt-32 md:pb-28 bg-white w-full border-slate-200 border-b pt-24 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">

<div className="space-y-8 reveal" style={{animationDelay: '0.1s'}}>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-medium tracking-tight leading-[1.1]">
            Reduce the financial risk of proposal creation in boutique
            consulting.
          </h1>
<p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-lg">
            Turn consulting expertise into structured, client-ready proposals —
            without burning senior time on deals that may never close.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
<button className="bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-800 transition-all duration-200 shadow-sm" onclick="openModal()">
              Request early access
            </button>
<button className="text-slate-900 text-sm font-medium px-6 py-3 border border-slate-200 hover:border-slate-400 transition-all duration-200 bg-white">
              See how it works
            </button>
</div>
<p className="text-xs text-slate-400 pt-4">
            Built for boutique consulting agencies and high-value professional
            services.
          </p>
</div>

<div className="w-full h-full min-h-[300px] flex items-center justify-center reveal" style={{animationDelay: '0.3s'}}>
<div className="relative w-full max-w-md p-8 border border-slate-100 bg-slate-50/50">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -z-10"></div>
<div className="flex flex-col gap-12">

<div className="w-full bg-white border border-slate-200 p-4 flex items-center justify-between shadow-sm">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                  Input
                </span>
<svg className="lucide lucide-file-plus-2 text-slate-400 w-5 h-5" data-lucide="file-plus-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M14 19h6"></path>
<path d="M17 16v6"></path>
</svg>
</div>

<div className="w-full bg-white border border-slate-900 p-4 flex items-center justify-between shadow-md relative z-10">
<span className="text-xs font-medium text-slate-900 uppercase tracking-widest">
                  Structure
                </span>
<svg className="lucide lucide-layers text-slate-900 w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>

<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-slate-900"></div>
</div>

<div className="w-full bg-white border border-slate-200 p-4 flex items-center justify-between shadow-sm">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                  Proposal
                </span>
<svg className="lucide lucide-file-check-2 text-slate-400 w-5 h-5" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="m14 20 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-3xl">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-8">
            Every proposal is an upfront investment.
          </h2>
<div className="space-y-6 text-base text-slate-600 leading-relaxed">
<p className="">
              In boutique consulting, proposals require senior-level thinking,
              time, and attention — long before a deal is won.
            </p>
<p className="">With win-rates often below 30%, this creates:</p>
<ul className="space-y-3 pl-4 border-l border-slate-300 my-6">
<li className="pl-4">Direct financial loss on unsuccessful deals</li>
<li className="pl-4">Hidden margin erosion</li>
<li className="pl-4">
                A hard ceiling on scale driven by partner availability
              </li>
</ul>
<p className="font-medium text-slate-900">
              This is not an efficiency issue. It is a structural business risk.
            </p>
</div>
</div>

<div className="mt-16 border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-slate-500 uppercase tracking-widest">
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-12 h-12 border border-slate-300 flex items-center justify-center bg-white">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<span>Senior Time</span>
</div>
<div className="h-px w-12 bg-slate-300 hidden md:block"></div>
<div className="h-8 w-px bg-slate-300 md:hidden"></div>
<div className="flex items-center gap-4 w-full md:w-auto">
<div className="w-12 h-12 border border-slate-300 flex items-center justify-center bg-white">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<span>Proposal</span>
</div>
<div className="h-px w-full md:w-flex-1 bg-gradient-to-r from-slate-300 to-transparent border-t border-dashed border-slate-300 hidden md:block"></div>
<div className="h-8 w-px bg-slate-300 md:hidden"></div>
<div className="flex items-center gap-4 opacity-50 w-full md:w-auto">
<div className="w-12 h-12 border border-slate-200 flex items-center justify-center bg-slate-50">
<svg className="lucide lucide-x-circle w-6 h-6" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
</div>
<span>No Deal (Sunk Cost)</span>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-white border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-12">
          Speed and visuals don’t reduce risk.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-slate-200 p-8 hover:border-slate-400 transition-colors duration-300">
<div className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors">
<svg className="lucide lucide-copy w-8 h-8" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Templates</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Generic structure, low differentiation, no client context.
            </p>
</div>

<div className="group border border-slate-200 p-8 hover:border-slate-400 transition-colors duration-300">
<div className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors">
<svg className="lucide lucide-palette w-8 h-8" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Designers</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Higher cost, same uncertainty, more iterations.
            </p>
</div>

<div className="group border border-slate-200 p-8 hover:border-slate-400 transition-colors duration-300">
<div className="mb-6 text-slate-400 group-hover:text-slate-900 transition-colors">
<svg className="lucide lucide-message-square w-8 h-8" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">
              LLM chat tools
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Unstructured output, no repeatability, no ownership of logic.
            </p>
</div>
</div>
<p className="mt-12 text-sm text-slate-500 border-t border-slate-100 pt-6">
          None of these turn proposal creation into a controlled, repeatable
          investment.
        </p>
</div>
</section>

<section className="w-full py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-6">
            Structure before generation. Control before speed.
          </h2>
<div className="space-y-6 text-base text-slate-600 leading-relaxed">
<p>
              Cognitive Alpha is a structured proposal workflow designed
              specifically for boutique consulting.
            </p>
<p>
              It captures firm-level expertise once, contextualizes each
              opportunity, and enforces consulting-grade structure — producing
              proposals that are client-ready, controllable, and repeatable.
            </p>
<div className="pt-4 space-y-2 font-medium text-slate-900">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-slate-300"></div>
                Not a chat.
              </div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-slate-300"></div>
                Not a slide editor.
              </div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-slate-900"></div>
                A system for reducing proposal risk.
              </div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 w-full flex justify-center">
<div className="relative w-full max-w-sm">

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="border border-slate-300 bg-white p-4 text-center">
<svg className="lucide lucide-database text-slate-400 mb-2 w-5 h-5 mx-auto" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
<div className="text-[10px] uppercase tracking-widest text-slate-500">
                  Firm Knowledge
                </div>
</div>
<div className="border border-slate-300 bg-white p-4 text-center">
<svg className="lucide lucide-globe text-slate-400 mb-2 w-5 h-5 mx-auto" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
<div className="text-[10px] uppercase tracking-widest text-slate-500">
                  Client Context
                </div>
</div>
</div>

<div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-px h-8 bg-slate-300"></div>
<div className="absolute top-[4.5rem] left-[25%] right-[25%] h-px bg-slate-300"></div>
<div className="absolute top-[4.5rem] left-[25%] h-4 w-px bg-slate-300"></div>
<div className="absolute top-[4.5rem] right-[25%] h-4 w-px bg-slate-300"></div>

<div className="border border-slate-900 bg-white p-6 mb-8 shadow-sm relative z-10">
<div className="flex justify-between items-center mb-2">
<div className="text-xs font-semibold text-slate-900 tracking-wide">
                  STRUCTURED LOGIC
                </div>
<svg className="lucide lucide-cpu text-slate-900 w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
<div className="space-y-2">
<div className="h-1 w-3/4 bg-slate-100"></div>
<div className="h-1 w-full bg-slate-100"></div>
<div className="h-1 w-1/2 bg-slate-100"></div>
</div>
</div>

<div className="flex justify-center mb-2">
<svg className="lucide lucide-arrow-down text-slate-300 w-5 h-5" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>

<div className="border border-slate-300 bg-slate-50 p-4 text-center">
<div className="text-[10px] uppercase tracking-widest text-slate-900">
                Client-Ready Proposal
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-white border-b border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-16 text-center">
          From expertise to proposal — without the blank page.
        </h2>
<div className="relative border-l border-slate-200 ml-4 md:ml-0 space-y-16">

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-white border border-slate-400 rounded-full"></div>
<div className="md:flex md:justify-between gap-12">
<div className="mb-4 md:mb-0 md:w-1/3">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  01. Setup
                </span>
<h3 className="text-lg font-medium text-slate-900 mt-1">
                  Firm Profile
                </h3>
</div>
<div className="md:w-2/3">
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Upload capabilities, past proposals, and successful cases.
                  Your expertise becomes a reusable asset.
                </p>

<div className="w-full h-2 bg-slate-100 overflow-hidden flex gap-1">
<div className="h-full w-8 bg-slate-300"></div>
<div className="h-full w-12 bg-slate-200"></div>
<div className="h-full w-4 bg-slate-200"></div>
</div>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-white border border-slate-400 rounded-full"></div>
<div className="md:flex md:justify-between gap-12">
<div className="mb-4 md:mb-0 md:w-1/3">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  02. Input
                </span>
<h3 className="text-lg font-medium text-slate-900 mt-1">
                  Client Context
                </h3>
</div>
<div className="md:w-2/3">
<p className="text-sm text-slate-600 leading-relaxed">
                  Provide the target company website. Brand and baseline context
                  are captured automatically.
                </p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-white border border-slate-400 rounded-full"></div>
<div className="md:flex md:justify-between gap-12">
<div className="mb-4 md:mb-0 md:w-1/3">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  03. Intelligence
                </span>
<h3 className="text-lg font-medium text-slate-900 mt-1">
                  Optional Deep Research
                </h3>
</div>
<div className="md:w-2/3">
<p className="text-sm text-slate-600 leading-relaxed">
                  Focused research across 50+ sources. Use it fully, partially,
                  or not at all.
                </p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-white border border-slate-400 rounded-full"></div>
<div className="md:flex md:justify-between gap-12">
<div className="mb-4 md:mb-0 md:w-1/3">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  04. Definition
                </span>
<h3 className="text-lg font-medium text-slate-900 mt-1">
                  Proposal Profile
                </h3>
</div>
<div className="md:w-2/3">
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Define logic: situation, approach, scope, risks, pricing, next
                  steps. Edit everything.
                </p>

<div className="flex gap-2">
<div className="w-8 h-10 border border-slate-200"></div>
<div className="w-8 h-10 border border-slate-200"></div>
<div className="w-8 h-10 border border-slate-200"></div>
<div className="w-8 h-10 border border-slate-900 bg-slate-50"></div>
</div>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-24">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-slate-900 border border-slate-900 rounded-full"></div>
<div className="md:flex md:justify-between gap-12">
<div className="mb-4 md:mb-0 md:w-1/3">
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
                  05. Output
                </span>
<h3 className="text-lg font-medium text-slate-900 mt-1">
                  Proposal Generation
                </h3>
</div>
<div className="md:w-2/3">
<p className="text-sm text-slate-600 leading-relaxed">
                  Generate a structured 10–15 slide deck, ready for PowerPoint
                  export.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-8">
            Designed for economic impact, not feature count.
          </h2>
<div className="grid grid-cols-2 gap-4">

<div className="p-6 border border-dashed border-slate-300 opacity-70">
<div className="text-xs font-medium text-slate-500 uppercase mb-4 tracking-widest">
                Current State
              </div>
<div className="h-px w-full bg-slate-300 mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-200"></div>
<div className="h-2 w-1/2 bg-slate-200"></div>
</div>
</div>

<div className="p-6 border border-slate-400 bg-white shadow-sm">
<div className="text-xs font-medium text-slate-900 uppercase mb-4 tracking-widest">
                Cognitive Alpha
              </div>
<div className="h-px w-full bg-slate-900 mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-slate-800"></div>
<div className="h-2 w-full bg-slate-800"></div>
<div className="h-2 w-1/2 bg-slate-800"></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<svg className="lucide lucide-check-square text-slate-900 mt-1 w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-base text-slate-700">
                Lower cost of lost deals
              </span>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-check-square text-slate-900 mt-1 w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-base text-slate-700">
                Reduced dependency on senior partners
              </span>
</li>
<li className="flex items-start gap-4">
<svg className="lucide lucide-check-square text-slate-900 mt-1 w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-base text-slate-700">
                Consistent proposal quality
              </span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full py-20 bg-white border-b border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-12">
          Deliberately focused.
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
<div className="flex items-center gap-4 p-4 border border-slate-100 bg-slate-50/50">
<div className="w-1 h-1 bg-slate-400 rounded-full"></div>
<span className="text-sm text-slate-600">
              Not a universal AI assistant
            </span>
</div>
<div className="flex items-center gap-4 p-4 border border-slate-100 bg-slate-50/50">
<div className="w-1 h-1 bg-slate-400 rounded-full"></div>
<span className="text-sm text-slate-600">
              Not a design or presentation tool
            </span>
</div>
<div className="flex items-center gap-4 p-4 border border-slate-100 bg-slate-50/50">
<div className="w-1 h-1 bg-slate-400 rounded-full"></div>
<span className="text-sm text-slate-600">
              Not a CRM or sales automation system
            </span>
</div>
<div className="flex items-center gap-4 p-4 border border-slate-100 bg-slate-50/50">
<div className="w-1 h-1 bg-slate-400 rounded-full"></div>
<span className="text-sm text-slate-600">
              Not “generate slides in seconds” software
            </span>
</div>
</div>
<p className="mt-12 text-sm font-medium text-slate-900">
          Built for one thing: making proposal creation a lower-risk investment.
        </p>
</div>
</section>

<section className="w-full py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 flex justify-center">

<div className="w-full max-w-xs border border-slate-200 bg-white p-6">
<div className="flex items-center justify-between mb-8">
<div className="h-2 w-2 bg-slate-300 rounded-full"></div>
<div className="h-px bg-slate-200 flex-1 mx-2"></div>
<div className="h-2 w-2 bg-slate-300 rounded-full"></div>
<div className="h-px bg-slate-200 flex-1 mx-2"></div>
<div className="h-2 w-2 bg-slate-900 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="bg-slate-50 border border-slate-100 p-3">
<div className="h-1.5 w-1/3 bg-slate-300 mb-2"></div>
<div className="h-1 w-2/3 bg-slate-200"></div>
</div>
<div className="bg-slate-50 border border-slate-100 p-3">
<div className="h-1.5 w-1/3 bg-slate-300 mb-2"></div>
<div className="h-1 w-2/3 bg-slate-200"></div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-6">
            Built for expert-driven businesses.
          </h2>
<div className="space-y-6 text-base text-slate-600 leading-relaxed">
<p>
              Designed for boutique consulting agencies, solo consultants, and
              small teams working on high-value, high-stakes proposals.
            </p>
<p className="text-slate-500 italic">
              If proposals are rare, purely formal, or already close at a 90%
              rate — this product is likely not for you.
            </p>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-white border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl text-slate-900 font-medium tracking-tight mb-12 text-center">
          You stay in control. Always.
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center p-6 border border-transparent hover:border-slate-100 transition-colors">
<svg className="lucide lucide-pen-square text-slate-400 mb-4 w-8 h-8 mx-auto" data-lucide="pen-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
</svg>
<p className="text-sm font-medium text-slate-900">
              All content is editable
            </p>
</div>
<div className="text-center p-6 border border-transparent hover:border-slate-100 transition-colors">
<svg className="lucide lucide-sliders text-slate-400 mb-4 w-8 h-8 mx-auto" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8h4"></path>
<path d="M12 21v-9"></path>
<path d="M12 8V3"></path>
<path d="M17 16h4"></path>
<path d="M19 12V3"></path>
<path d="M19 21v-5"></path>
<path d="M3 14h4"></path>
<path d="M5 10V3"></path>
<path d="M5 21v-7"></path>
</svg>
<p className="text-sm font-medium text-slate-900">
              Deep research is optional
            </p>
</div>
<div className="text-center p-6 border border-transparent hover:border-slate-100 transition-colors">
<svg className="lucide lucide-eye-off text-slate-400 mb-4 w-8 h-8 mx-auto" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
<path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
<path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
<path d="m2 2 20 20"></path>
</svg>
<p className="text-sm font-medium text-slate-900">
              No black-box decisions
            </p>
</div>
<div className="text-center p-6 border border-transparent hover:border-slate-100 transition-colors">
<svg className="lucide lucide-shield-check text-slate-400 mb-4 w-8 h-8 mx-auto" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<p className="text-sm font-medium text-slate-900">
              Firm data stays isolated
            </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 bg-slate-50" id="access">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-4xl text-slate-900 font-medium tracking-tight mb-6">
          Reduce proposal risk before you try to scale.
        </h2>
<p className="text-lg text-slate-600 font-light mb-10">
          Cognitive Alpha is currently in early access with boutique consulting
          partners.
        </p>
<div className="flex flex-col items-center gap-6">
<button className="bg-slate-900 text-white text-sm font-medium px-8 py-4 hover:bg-slate-800 transition-all duration-200 shadow-sm w-full sm:w-auto" onclick="openModal()">
            Request early access
          </button>
<p className="text-xs text-slate-400">
            Looking for advisors and pilot agencies.
          </p>
</div>
</div>
</section>

<footer className="w-full py-12 bg-white border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

<a className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity" href="#">
<img alt="Cognitive Alpha Logo" className="h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff771183-d9e7-4a94-a277-7e2a0cc1b1cf_800w.png" style={{}}/>
</a>
<p className="text-xs text-slate-400 text-center md:text-right">
          Cognitive Alpha is an internal tool for firms that treat proposals as
          investments, not documents.
        </p>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 z-[100] hidden" id="early-access-modal" role="dialog">

<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="closeModal()"></div>

<div className="flex items-center justify-center min-h-screen p-4">
<div className="relative bg-white w-full max-w-md border border-slate-200 shadow-xl modal-enter" id="modal-panel">

<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors" onclick="closeModal()">
<svg className="lucide lucide-x-circle w-6 h-6" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
</button>
<div className="p-8">
<div className="mb-6">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                Private Beta
              </span>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">
                Request Access
              </h3>
<p className="text-sm text-slate-500 mt-2 font-light">
                Join the waitlist for the Cognitive Alpha pilot program. We are
                onboarding 5 agencies per month.
              </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); submitForm(this);">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">
                  Full Name
                </label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm p-2.5 outline-none focus:border-slate-400 focus:bg-white transition-all placeholder:text-slate-300" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">
                  Work Email
                </label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm p-2.5 outline-none focus:border-slate-400 focus:bg-white transition-all placeholder:text-slate-300" id="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="website">
                  Company Website
                </label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm p-2.5 outline-none focus:border-slate-400 focus:bg-white transition-all placeholder:text-slate-300" id="website" placeholder="https://" required="" type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="challenge">
                  Primary Challenge (Optional)
                </label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm p-2.5 outline-none focus:border-slate-400 focus:bg-white transition-all resize-none placeholder:text-slate-300" id="challenge" placeholder="e.g. Too much time spent on research..." rows="2"></textarea>
</div>
<button className="w-full bg-slate-900 text-white text-sm font-medium px-4 py-3 hover:bg-slate-800 transition-all duration-200 shadow-sm mt-2 flex items-center justify-center gap-2 group" type="submit">
<span>Join Waitlist</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
<div className="mt-6 pt-6 border-t border-slate-100 text-center">
<p className="text-[10px] text-slate-400">
                By requesting access, you agree to receive updates about our
                product launch. No spam.
              </p>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
