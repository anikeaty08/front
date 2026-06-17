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
gtag('config', 'G-XXXXXXXXXX');



      // Simple rebate estimate logic for on-page calculator
      function calculateRebate() {
        const heating = document.getElementById('calc-heating').value;
        const dwelling = document.getElementById('calc-dwelling').value;
        const income = document.getElementById('calc-income').value;

        let base = 0;

        if (heating === 'gas') base = 3000;
        if (heating === 'electric') base = 4000;
        if (heating === 'oil') base = 5000;

        if (dwelling === 'townhome') base += 500;
        if (dwelling === 'condo') base -= 250;
        if (dwelling === 'detached') base += 750;

        if (income === 'incomeQualified') base *= 1.4;

        base = Math.max(0, Math.round(base / 10) * 10);

        const amountEl = document.getElementById('rebate-amount');
        const resultEl = document.getElementById('rebate-result');
        if (amountEl && resultEl) {
          amountEl.textContent = '$' + base.toLocaleString('en-CA');
          resultEl.classList.remove('hidden');
        }

        // Build a short human-readable summary and push it into the hidden contact-field
        const summary = [
          'On-page rebate calculator estimate:',
          '- Current heating: ' + heating,
          '- Dwelling: ' + dwelling,
          '- Income level: ' + income,
          '- Estimated total rebate: $' + base.toLocaleString('en-CA') + ' CAD'
        ].join('\n');

        const hiddenSummaryField = document.getElementById('ai_rebate_summary');
        if (hiddenSummaryField) hiddenSummaryField.value = summary;
      }

      // Footer year
      document.getElementById('footer-year').textContent = new Date().getFullYear();

      // Floating assistant open/close
      const aiToggle = document.getElementById('ai-assistant-toggle');
      const aiPanel = document.getElementById('ai-assistant-panel');
      const aiClose = document.getElementById('ai-assistant-close');

      function openAssistant() {
        aiPanel.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-6');
        aiPanel.classList.add('opacity-100', 'translate-y-0');
        aiToggle.setAttribute('aria-expanded', 'true');
      }

      function closeAssistant() {
        aiPanel.classList.add('pointer-events-none', 'opacity-0', 'translate-y-6');
        aiPanel.classList.remove('opacity-100', 'translate-y-0');
        aiToggle.setAttribute('aria-expanded', 'false');
      }

      aiToggle.addEventListener('click', () => {
        const expanded = aiToggle.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          closeAssistant();
        } else {
          openAssistant();
        }
      });

      aiClose.addEventListener('click', closeAssistant);

      // Generate concise summary before submit
      const aiForm = document.getElementById('ai-assistant-form');
      const aiStatus = document.getElementById('-assistant-status');

      if (aiForm) {
        aiForm.addEventListener('submit', function () {
          const location = document.getElementById('ai-home-location').value || 'Not provided';
          const homeType = document.getElementById('ai-home-type').value || 'Not provided';
          const homeSize = document.getElementById('ai-home-size').value || 'Not provided';
          const system = document.getElementById('ai-current-system').value || 'Not provided';
          const systemNotes = document.getElementById('ai-current-system-notes').value || 'Not provided';
          const income = document.getElementById('ai-income-level').value || 'Not provided';
          const goals = document.getElementById('ai-comfort-goals').value || 'Not provided';

          const summaryLines = [
            'AI Rebate Helper Assessment:',
            '',
            'Home location: ' + location,
            'Home type: ' + homeType,
            'Approx. size: ' + homeSize + ' sq ft',
            '',
            'Current heating system: ' + system,
            'System notes: ' + systemNotes,
            '',
            'Income level for rebate programs: ' + income,
            '',
            'Comfort / energy goals:',
            goals
          ];

          const summaryField = document.getElementById('ai-summary');
          if (summaryField) summaryField.value = summaryLines.join('\n');

          if (aiStatus) {
            aiStatus.textContent = 'Sending your summary securely...';
          }
        });
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
      
<div className="top-0 w-full h-screen -z-10 bg-cover bg-center fixed" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68484aa5-c9c9-4086-b768-8ba5fb085ca7_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-34 items-center justify-between">

<a aria-label="Apex Heating Home" className="flex flex-col items-center justify-center relative group cursor-pointer" href="#contact-form">
<div className="-top-1 absolute">
<div className="flex shadow-slate-900/10 bg-amber-50/5 border-0 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_4px_6px_rgba(0,_0,_0,_0.098),_0_9.6px_7.6px_rgba(0,_0,_0,_0.138),_0_18px_14.3px_rgba(0,_0,_0,_0.172),_0_32px_25.6px_rgba(0,_0,_0,_0.206),_0_60px_47.8px_rgba(0,_0,_0,_0.246),_0_143px_114.3px_rgba(0,_0,_0,_0.344)] items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-crown w-[80px] h-[17px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="crown" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.75" style={{width: '80px', height: '17px', color: 'rgb(250, 204, 21)'}} viewbox="0 0 24 24" width="76" xmlns="http://www.w3.org/2000/svg">
<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
<path d="M5 21h14"></path>
</svg>
</div>
</div>
<div className="flex flex-col mt-4 items-center">
<span className="text-3xl font-semibold tracking-[0.2em] text-slate-900 leading-none font-sans">
                APEX
              </span>
<span className="text-[0.6rem] font-medium tracking-widest text-slate-400 mt-1 uppercase">
                Heating &amp; Cooling Ltd.
              </span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">

<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-500" href="#contact-form">
              Home
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">
              About
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">
              Services
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#rebate-calculator">
              Rebates
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#blog">
              Blog
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#warranty">
              Warranty
            </a>

<a className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors" href="#contact-form">
              Contact
            </a>
</div>
<div className="flex items-center gap-6">
<a className="hidden lg:flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors group" href="tel:6044426711">
<div className="p-2 bg-slate-100 rounded-full group-hover:bg-amber-100 transition-colors">
<svg className="lucide lucide-phone w-5 h-5 text-slate-900 group-hover:text-amber-600 transition-transform stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  24/7 Support
                </span>
<span className="font-semibold text-lg leading-none text-slate-900">
                  604-442-6711
                </span>
</div>
</a>
</div>
</div>
</div>
</nav>
<div className="bg-slate-900 pt-40 pb-32 relative overflow-hidden">
<div className="bg-black/20 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
<h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
          Contact Our
          <span className="text-amber-400">Team</span>
</h1>
<p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          Licensed HVAC technicians on call for Metro Vancouver homes and
          businesses. We're ready to help with new installations, upgrades, and
          emergency repairs.
        </p>
</div>
</div>
<main className="-mt-24 z-30 pr-4 pb-20 pl-4 relative">
<div className="max-w-6xl mx-auto">
<section className="mb-16" id="about">
<div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden">
<div className="grid md:grid-cols-5 gap-0">
<div className="md:col-span-2 bg-slate-900 px-6 py-8 md:px-8 md:py-10 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
<svg className="lucide lucide-badge-check w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7 9 17"></path>
<path d="m9 7 6 10"></path>
</svg>
<span className="">CleanBC Registered · HPCN Certified</span>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  About Our Team
                </h2>
<p className="mt-4 text-sm md:text-base text-slate-300">
                  APEX Heating &amp; Cooling Ltd. is a locally owned HVAC
                  contractor specializing in high-efficiency heat pump
                  installations, gas furnace retrofits, and year-round
                  maintenance. Our mission is to deliver reliable comfort, lower
                  utility costs, and quieter homes for families throughout Metro
                  Vancouver.
                </p>
</div>
<div className="md:col-span-3 px-6 py-8 md:px-10 md:py-10">
<div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
<p className="">
                    From the first site visit to post-installation support, you
                    work directly with technicians who are licensed, insured,
                    and CleanBC Home Performance Contractor Network (HPCN)
                    certified. We design custom solutions for condos, townhomes,
                    and single-family homes, ensuring your system qualifies for
                    the maximum rebates available.
                  </p>
<p className="">
                    Every project includes careful load calculations, premium
                    workmanship, and transparent pricing. We partner with
                    leading manufacturers to provide ultra-efficient,
                    cold-climate heat pumps that stand up to Pacific Northwest
                    weather.
                  </p>
</div>
<div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs md:text-sm text-slate-600">
<div className="flex items-start gap-2">
<div className="mt-0.5 text-amber-500">
<svg className="lucide lucide-users w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="font-semibold text-slate-900">
                        Homeowners First
                      </p>
<p className="text-slate-500">
                        Clear recommendations tailored to your home, budget, and
                        comfort goals.
                      </p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="mt-0.5 text-amber-500">
<svg className="lucide lucide-ruler w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="font-semibold text-slate-900">
                        Right-Sized Systems
                      </p>
<p className="text-slate-500">
                        Detailed load calculations so your equipment runs
                        efficiently year-round.
                      </p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="mt-0.5 text-amber-500">
<svg className="lucide lucide-badge-dollar-sign w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="">
<p className="font-semibold text-slate-900">
                        Rebate Maximization
                      </p>
<p className="text-slate-500">
                        We align your project with current CleanBC and federal
                        programs.
                      </p>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-5">
<div className="flex items-center gap-3 mb-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">
<svg className="lucide lucide-headset w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        Connect With Us
                      </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
<div>
<p className="text-slate-500">
                        Phone:
                        <a className="font-semibold text-slate-900 hover:text-amber-600" href="tel:6044426711">
                          604-442-6711
                        </a>
</p>
<p className="text-slate-500 mt-1">
                        Email:
                        <a className="font-semibold text-slate-900 hover:text-amber-600" href="mailto:info@apexheatpumps.ca">
                          info@apexheatpumps.ca
                        </a>
</p>
</div>
<div className="text-slate-500">
<p>
                        Ready for a personalized proposal? Reach out today and
                        we'll schedule a free consultation at your home.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16" id="contact-form">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-slate-100 h-full flex flex-col">
<div className="mb-8">
<h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Get in Touch
                  </h2>
<p className="text-slate-500 text-sm leading-relaxed">
                    Reach us anytime. We respond within one business day for
                    general inquiries.
                  </p>
</div>
<div className="flex-grow space-y-6">
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-phone w-5 h-5 text-amber-600 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Phone
                      </p>
<a className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors" href="tel:6044426711">
                        604-442-6711
                      </a>
<p className="text-xs text-slate-500 mt-1">
                        24/7 Emergency Support
                      </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-mail w-5 h-5 text-slate-600 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Email
                      </p>
<a className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors" href="mailto:info@apexheatpumps.ca">
                        info@apexheatpumps.ca
                      </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-clock w-5 h-5 text-slate-600 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Hours
                      </p>
<p className="text-sm text-slate-600 font-medium">
                        Monday to Saturday
                      </p>
<p className="text-xs text-slate-500 mt-1">
                        Standard Appointments
                      </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5 text-slate-600 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        Service Area
                      </p>
<p className="text-sm text-slate-600 leading-relaxed">
                        Vancouver, Burnaby, Richmond, Surrey, Coquitlam, North
                        Vancouver, Fraser Valley.
                      </p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100">
<div className="flex gap-3">
<svg className="lucide lucide-info w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<p className="text-xs text-slate-500 leading-relaxed">
                      Prefer to meet in person? We can schedule an on-site
                      assessment at your home to review equipment options and
                      rebate eligibility.
                    </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden h-full">
<form action="https://api.web3forms.com/submit" className="p-8 md:p-12 h-full flex flex-col justify-between" method="post">
<input name="access_key" type="hidden" value="a4c3f5af-0f1b-4ca7-9dfd-90c5a7931022"/>
<input name="from_name" type="hidden" value="APEX Heat Pumps Website"/>
<input name="subject" type="hidden" value="New contact request"/>
<input autocomplete="off" className="hp-field" name="website" tabindex="-1" type="text"/>
<input id="ai_rebate_summary" name="ai_rebate_summary" type="hidden"/>
<div className="mb-8">
<h2 className="text-2xl font-semibold text-slate-900 mb-2">
                      Send a Message
                    </h2>
<p className="text-slate-500 text-sm">
                      Fill out the form below and we'll get back to you shortly.
                    </p>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Name
                        </label>
<div className="relative">
<input autocomplete="name" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" name="name" placeholder="John Doe" required="" type="text"/>
<svg className="lucide lucide-user absolute left-3 top-3.5 w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="group">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
<div className="relative">
<input autocomplete="tel" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" inputmode="tel" name="phone" pattern="[0-9\s\-()+]+" placeholder="604-555-0123" type="tel"/>
<svg className="lucide lucide-phone absolute left-3 top-3.5 w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</div>
</div>
</div>
<div className="group">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
<div className="relative">
<input autocomplete="email" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900" name="email" placeholder="john@example.com" required="" type="email"/>
<svg className="lucide lucide-mail absolute left-3 top-3.5 w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</div>
</div>
<div className="group">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        How can we help?
                      </label>
<div className="relative">
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-900 resize-none" name="message" placeholder="Share your project details, service request, or questions..." required="" rows="4"></textarea>
</div>
</div>
<button className="w-full group bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                      Send Message
                      <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
                      For urgent issues, please call us directly at
                      <a className="text-slate-600 font-semibold hover:underline" href="tel:6044426711">
                        604-442-6711
                      </a>
                      .
                    </p>
</div>
</form>
</div>
</div>
</div>
</section>
<div className="md:p-12 shadow-slate-900/5 overflow-hidden bg-white border-slate-100 border rounded-3xl mt-12 pt-8 pr-8 pb-8 pl-8 relative shadow-xl" id="rebate-calculator">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-100">
<svg className="lucide lucide-calculator w-4 h-4 stroke-[1.5]" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="8" x2="16" y1="6" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<path d="M16 10h.01"></path>
<path d="M12 10h.01"></path>
<path d="M8 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M8 14h.01"></path>
<path d="M12 18h.01"></path>
<path d="M8 18h.01"></path>
</svg>
<span>Estimate Your Savings</span>
</div>
<h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Rebate Calculator
              </h2>
<p className="leading-relaxed text-slate-500 mb-8">
                Considering a heat pump upgrade? Answer a few questions to
                estimate your potential savings through provincial and federal
                rebate programs.
              </p>
<div className="hidden" id="rebate-result">
<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">
                    Estimated Rebate Amount
                  </p>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold text-amber-600 tracking-tight" id="rebate-amount">
                      $0
                    </span>
<span className="text-sm text-slate-500 font-medium">CAD</span>
</div>
<p className="text-xs text-slate-400 mt-2">
                    *Estimate only. Final eligibility determined by on-site
                    assessment.
                  </p>
</div>
</div>
</div>
<div className="space-y-5">
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Current Heating System
                </label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all" id="calc-heating">
<option value="gas">Natural Gas / Propane</option>
<option value="electric">Electric Baseboards</option>
<option value="oil">Oil</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Home Type
                </label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all" id="calc-dwelling">
<option value="detached">Detached / Duplex</option>
<option value="townhome">Townhome</option>
<option value="condo">Condo / Apartment</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Income Level
                </label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all" id="calc-income">
<option value="standard">Standard</option>
<option value="incomeQualified">Income Qualified</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300" onclick="calculateRebate()" type="button">
                Calculate Estimate
              </button>
</div>
</div>
</div>

<section className="mt-16 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900" id="services">
<div className="py-12 md:py-16 px-6 md:px-10">
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 mb-4">
<svg className="lucide lucide-wrench w-5 h-5" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Heat Pump Services in Metro Vancouver
              </h2>
<p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
                Full-service HVAC support for homeowners and strata buildings
                across Metro Vancouver, including home comfort upgrades, gas
                furnace retrofits, seasonal maintenance, and 24/7 emergency
                repairs.
              </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="bg-black/40 p-6 md:p-7 rounded-2xl border border-slate-800 hover:border-amber-500 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900" href="#home-comfort-upgrades">
<div className="mb-5 text-slate-400 group-hover:text-amber-400 transition-colors">
<svg className="lucide lucide-wind w-7 h-7" data-lucide="wind" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">
                  Home Comfort Upgrades
                </h3>
<p className="text-slate-400 text-sm">
                  Ductless and ducted heat pump installations tailored to your
                  floor plan and insulation needs.
                </p>
</a>

<a className="bg-black/40 p-6 md:p-7 rounded-2xl border border-slate-800 hover:border-amber-500 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900" href="#gas-furnace-retrofit">
<div className="mb-5 text-slate-400 group-hover:text-amber-400 transition-colors">
<svg className="lucide lucide-flame w-7 h-7" data-lucide="flame" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">
                  Gas Furnace Retrofits
                </h3>
<p className="text-slate-400 text-sm">
                  Remove aging gas furnaces and transition to efficient electric
                  heat pump systems while using existing ductwork.
                </p>
</a>

<a className="bg-black/40 p-6 md:p-7 rounded-2xl border border-slate-800 hover:border-amber-500 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900" href="#emergency-repairs">
<div className="mb-5 text-slate-400 group-hover:text-amber-400 transition-colors">
<svg className="lucide lucide-alert-triangle w-7 h-7" data-lucide="alert-triangle" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">
                  Emergency Repairs
                </h3>
<p className="text-slate-400 text-sm">
                  24/7 heat pump and furnace repair service throughout Metro
                  Vancouver.
                </p>
</a>

<a className="bg-black/40 p-6 md:p-7 rounded-2xl border border-slate-800 hover:border-amber-500 transition-colors group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900" href="#seasonal-maintenance">
<div className="mb-5 text-slate-400 group-hover:text-amber-400 transition-colors">
<svg className="lucide lucide-refresh-ccw w-7 h-7" data-lucide="refresh-ccw" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h3 className="text-base font-semibold text-white mb-2">
                  Seasonal Maintenance
                </h3>
<p className="text-slate-400 text-sm">
                  Tune-ups, coil cleaning, and performance checks to extend the
                  life of your system.
                </p>
</a>
</div>
<div className="mt-10 text-center text-sm text-slate-400 max-w-3xl mx-auto">
<p className="">
                We partner with leading manufacturers to deliver quiet, reliable
                comfort. Our in-house team handles permitting, rebate paperwork,
                and electrical coordination so your upgrade is seamless from
                start to finish.
              </p>
<a className="inline-flex items-center justify-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-amber-500 text-sm font-semibold text-amber-300 hover:bg-amber-500/10 transition-colors" href="quote.html">
                Request a free quote
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</section>

<section className="mt-16" id="home-comfort-upgrades">
<div className="md:px-10 md:py-10 bg-white max-w-5xl border-slate-200 border rounded-3xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 shadow-sm">
<div className="flex items-center justify-between gap-3 mb-6">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-amber-600">
<svg className="lucide lucide-wind w-5 h-5" data-lucide="wind" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Heat Pump Installations · Metro Vancouver
                  </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Home Comfort Upgrades with High-Efficiency Heat Pumps
                  </h2>
</div>
</div>
</div>
<div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed">
<p>
                Upgrade your home comfort with professionally designed and
                installed
                <strong>high‑efficiency heat pumps in Metro Vancouver</strong>
                . APEX Heating &amp; Cooling Ltd. specializes in ducted and
                ductless systems that deliver quiet heating and cooling,
                consistent temperatures, and lower monthly utility bills.
              </p>
<p>
                Our team performs detailed heat‑loss and heat‑gain calculations
                to ensure your new system is properly sized for your home,
                whether you live in a condo, townhome, or detached house. We
                focus on energy efficiency, comfort, and long-term reliability
                rather than simply installing the largest system available.
              </p>
<h3 className="text-sm font-semibold text-slate-900">
                Why homeowners choose our home comfort upgrades
              </h3>
<ul className="list-disc list-inside space-y-1">
<li>
                  Custom ducted and ductless heat pump designs for Metro
                  Vancouver homes
                </li>
<li>
                  Improved comfort with even temperatures and better humidity
                  control
                </li>
<li>
                  Lower heating and cooling costs compared to baseboard or
                  electric furnaces
                </li>
<li>
                  Cleaner indoor air with modern filtration and quieter
                  operation
                </li>
<li>
                  Systems selected to qualify for available CleanBC and federal
                  rebates
                </li>
</ul>
<h3 className="text-sm font-semibold text-slate-900">
                Ideal homes for comfort upgrades
              </h3>
<p>Our comfort upgrade packages are a strong fit for:</p>
<ul className="list-disc list-inside space-y-1">
<li>Older homes that are drafty or unevenly heated</li>
<li className="">
                  Homes currently relying on electric baseboard heaters
                </li>
<li className="">
                  Houses where some rooms are too hot in summer and too cold in
                  winter
                </li>
<li className="">
                  Families wanting to reduce greenhouse gas emissions and energy
                  waste
                </li>
</ul>
<p className="">
                From the first on-site visit, we walk you through equipment
                options, expected energy savings, and rebate opportunities so
                you can make a confident decision about upgrading your home’s
                comfort.
              </p>
</div>

<div className="mt-8 pt-6 border-t border-slate-200">
<h3 className="text-sm font-semibold text-slate-900 mb-3">
                Get a Home Comfort Upgrade Quote
              </h3>
<form action="https://api.web3forms.com/submit" className="grid gap-4 md:grid-cols-2" method="post">
<input name="access_key" type="hidden" value="a4c3f5af-0f1b-4ca7-9dfd-90c5a7931022"/>
<input name="from_name" type="hidden" value="APEX Heat Pumps Website"/>
<input name="subject" type="hidden" value="Home Comfort Upgrade Request"/>
<div className="md:col-span-1">
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="name" placeholder="Your name" required=""/>
</div>
<div className="md:col-span-1">
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="email" placeholder="Email address" required="" type="email"/>
</div>
<div className="md:col-span-1">
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="phone" placeholder="Phone number (optional)"/>
</div>
<div className="md:col-span-1">
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="city" placeholder="City / Neighbourhood"/>
</div>
<div className="md:col-span-2">
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none resize-none" name="message" placeholder="Tell us about your home (size, current heating system, comfort issues)..." rows="3"></textarea>
</div>
<div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex justify-center items-center px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 shadow-md hover:shadow-lg transition-all" type="submit">
                    Request My Comfort Upgrade Plan
                  </button>
<p className="text-xs text-slate-500">
                    Or call us at
                    <a className="font-semibold text-slate-700 hover:text-amber-600" href="tel:604‑442‑6711">
                      604‑442‑6711
                    </a>
                    for a quick phone consultation.
                  </p>
</div>
</form>
</div>
</div>
</section>

<section className="mt-16" id="gas-furnace-retrofit">
<div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm px-6 py-8 md:px-10 md:py-10">
<div className="flex items-center justify-between gap-3 mb-6">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-amber-600">
<svg className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Gas Furnace to Heat Pump · Retrofit Services
                  </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Gas Furnace Retrofit to High-Efficiency Heat Pumps
                  </h2>
</div>
</div>
</div>
<div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed">
<p>
                If you currently heat with a natural gas or propane furnace, a
                <strong>
                  gas furnace retrofit to a high‑efficiency heat pump
                </strong>
                can significantly reduce your energy costs and emissions. Our
                technicians design retrofit solutions that connect to your
                existing ductwork so you can enjoy year‑round comfort with
                minimal disruption to your home.
              </p>
<p>
                We assess the condition and sizing of your current ducts,
                electrical panel capacity, and vent locations to determine the
                best approach. Where needed, we coordinate with licensed
                electricians and make targeted duct modifications to keep air
                flowing quietly and efficiently to every room.
              </p>
<h3 className="text-sm font-semibold text-slate-900">
                Benefits of converting from gas to a heat pump
              </h3>
<ul className="list-disc list-inside space-y-1">
<li>
                  Lower utility bills and reduced exposure to volatile gas
                  prices
                </li>
<li>
                  Heating and cooling from a single high‑efficiency system
                </li>
<li>Cleaner indoor air without combustion by-products</li>
<li>
                  Reduced carbon footprint and alignment with CleanBC goals
                </li>
<li>Access to stacked rebates for eligible retrofits</li>
</ul>
<h3 className="text-sm font-semibold text-slate-900">
                What’s included in a typical retrofit project
              </h3>
<ul className="list-disc list-inside space-y-1">
<li>
                  On-site assessment of your furnace, ductwork, and electrical
                  system
                </li>
<li>
                  Selection of a cold‑climate heat pump sized for your home
                </li>
<li>
                  Safe decommissioning of the gas furnace and related components
                </li>
<li>
                  Installation, start‑up, and fine‑tuning of the new system
                </li>
<li>
                  Guidance on warranty registration and rebate documentation
                </li>
</ul>
<p>
                We provide clear, upfront pricing and explain your options in
                plain language. Whether you want to fully remove your gas line
                or keep it as backup, we’ll help you choose the path that makes
                the most sense for your home.
              </p>
</div>

<div className="mt-8 pt-6 border-t border-slate-200">
<h3 className="text-sm font-semibold text-slate-900 mb-3">
                Request a Gas Furnace Retrofit Assessment
              </h3>
<form action="https://api.web3forms.com/submit" className="grid gap-4 md:grid-cols-2" method="post">
<input name="access_key" type="hidden" value="a4c3f5af-0f1b-4ca7-9dfd-90c5a7931022"/>
<input name="from_name" type="hidden" value="APEX Heat Pumps Website"/>
<input name="subject" type="hidden" value="Gas Furnace Retrofit Request"/>
<div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="name" placeholder="Your name" required=""/>
</div>
<div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="email" placeholder="Email address" required="" type="email"/>
</div>
<div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="phone" placeholder="Phone number (optional)"/>
</div>
<div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" name="current_system" placeholder="Current furnace age / model (if known)"/>
</div>
<div className="md:col-span-2">
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none resize-none" name="message" placeholder="Tell us about your home (square footage, number of floors, comfort issues)..." rows="3"></textarea>
</div>
<div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex justify-center items-center px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 shadow-md hover:shadow-lg transition-all" type="submit">
                    Schedule My Retrofit Consultation
                  </button>
<p className="text-xs text-slate-500">
                    You can also call us at
                    <a className="font-semibold text-slate-700 hover:text-amber-600" href="tel:604‑442‑6711">
                      604‑442‑6711
                    </a>
                    to speak with a technician.
                  </p>
</div>
</form>
</div>
</div>
</section>

<section className="mt-16" id="emergency-repairs">
<div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm px-6 py-8 md:px-10 md:py-10">
<div className="flex items-center justify-between gap-3 mb-6">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-100 text-red-600">
<svg className="lucide lucide-alert-triangle w-5 h-5" data-lucide="alert-triangle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    24/7 Emergency HVAC Service · Metro Vancouver
                  </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Emergency Heat Pump &amp; Furnace Repairs
                  </h2>
</div>
</div>
</div>
<div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed">
<p>
                Heating or cooling failure rarely happens at a convenient time.
                Our team provides
                <strong>
                  24/7 emergency repairs for heat pumps and furnaces in Metro
                  Vancouver
                </strong>
                , so you’re not left without comfort when you need it most.
              </p>
<p>
                When you call, you speak directly with an experienced technician
                who can triage the issue, offer safety guidance, and dispatch
                service to your home as quickly as possible. We carry common
                parts on our vehicles to complete most repairs in a single
                visit.
              </p>
<h3 className="text-sm font-semibold text-slate-900">
                Common emergency issues we handle
              </h3>
<ul className="list-disc list-inside space-y-1">
<li>No heat or no cooling from your system</li>
<li>
                  Breaker tripping or electrical smells from HVAC equipment
                </li>
<li>Unusual noises, vibrations, or burning odours</li>
<li>Frozen outdoor units or leaking indoor coils</li>
<li className="">
                  Thermostat failures or error codes on your system
                </li>
</ul>
<p>
                For your safety, we’ll always let you know if it’s better to
                shut down equipment and wait for service rather than continue
                operating a failing system.
              </p>
</div>
<div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<p className="text-sm font-semibold text-slate-900">
                  For fastest service, call our emergency line:
                </p>
<a className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-amber-600" href="tel:6044426711">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
                  604‑442‑6711
                </a>
<p className="text-xs text-slate-500 mt-1">
                  Available 24 hours a day, 7 days a week for urgent heating and
                  cooling issues.
                </p>
</div>
<div className="text-xs text-slate-500 max-w-sm">
                For non‑urgent issues, you can use the main
                <a className="font-semibold text-slate-700 hover:text-amber-600" href="#contact-form">
                  contact form
                </a>
                above and we’ll respond within one business day.
              </div>
</div>
</div>
</section>

<section className="mt-16" id="seasonal-maintenance">
<div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm px-6 py-8 md:px-10 md:py-10">
<div className="flex items-center justify-between gap-3 mb-6">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-600">
<svg className="lucide lucide-refresh-ccw w-5 h-5" data-lucide="refresh-ccw" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Preventative Maintenance · Heat Pumps &amp; Furnaces
                  </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Seasonal Maintenance &amp; Performance Tuning
                  </h2>
</div>
</div>
</div>
<div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed">
<p>
                Regular maintenance keeps your equipment running efficiently and
                helps prevent unexpected breakdowns. We offer
                <strong>
                  seasonal maintenance for heat pumps and furnaces
                </strong>
                across Metro Vancouver, tailored to your system and manufacturer
                requirements.
              </p>
<p>
                Our technicians complete a detailed multi‑point inspection,
                clean critical components, and verify that your system is
                performing within specifications. We also note any developing
                issues so you can plan repairs before they become emergencies.
              </p>
<h3 className="text-sm font-semibold text-slate-900">
                What’s included in a typical maintenance visit
              </h3>
<ul className="list-disc list-inside space-y-1">
<li>
                  Check filters, indoor and outdoor coils, and blower assemblies
                </li>
<li>Verify refrigerant levels and inspect for visible leaks</li>
<li>
                  Inspect electrical connections, sensors, and safety controls
                </li>
<li>
                  Test heating and cooling performance and thermostat operation
                </li>
<li>
                  Provide a written report with recommendations, if needed
                </li>
</ul>
<p>
                For many manufacturers, proof of regular maintenance is required
                to keep warranties valid. We document each visit so you have a
                clear history of professional service on your system.
              </p>
</div>

<div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<p className="text-sm font-semibold text-slate-900">
                  Set up your seasonal maintenance visit
                </p>
<p className="text-xs text-slate-500 mt-1">
                  Book spring and fall tune‑ups to keep your system running at
                  peak efficiency.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 shadow-md hover:shadow-lg transition-all" href="#contact-form">
                  Request a Maintenance Appointment
                </a>
</div>
</div>
</div>
</section>

<section className="mt-20" id="blog">
<div className="max-w-6xl mx-auto">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Resources &amp; Guides
                </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Learn More About Heat Pumps &amp; Rebates
                </h2>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">
<article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<p className="text-[11px] font-semibold uppercase tracking-wide text-amber-600 mb-2">
                  Rebates
                </p>
<h3 className="text-sm font-semibold text-slate-900 mb-2">
                  How CleanBC Heat Pump Rebates Work for Metro Vancouver Homes
                </h3>
<p className="text-xs text-slate-500 mb-3">
                  A step‑by‑step overview of eligibility, documentation, and
                  timelines when applying for provincial and federal rebates.
                </p>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700" href="#rebate-calculator">
                  Estimate your rebate
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</article>
<article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-2">
                  System Design
                </p>
<h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Ductless vs. Ducted Heat Pumps: Which Is Right for Your Home?
                </h3>
<p className="text-xs text-slate-500 mb-3">
                  Compare the pros and cons of ductless and ducted systems, from
                  installation requirements to comfort and aesthetics.
                </p>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700" href="#home-comfort-upgrades">
                  Explore comfort upgrades
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</article>
<article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-2">
                  Maintenance
                </p>
<h3 className="text-sm font-semibold text-slate-900 mb-2">
                  Simple Maintenance Tips to Extend Your Heat Pump’s Life
                </h3>
<p className="text-xs text-slate-500 mb-3">
                  Learn easy, homeowner‑friendly steps to keep your system
                  clean, efficient, and running smoothly between professional
                  visits.
                </p>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700" href="#seasonal-maintenance">
                  See maintenance services
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</article>
</div>
</div>
</section>

<section className="mt-20" id="warranty">
<div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-sm px-6 py-8 md:px-10 md:py-10">
<div className="flex items-center gap-3 mb-6">
<div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-amber-400">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Protection &amp; Peace of Mind
                </p>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Heat Pump &amp; Installation Warranty Coverage
                </h2>
</div>
</div>
<div className="grid gap-8 md:grid-cols-2 text-sm md:text-base text-slate-600 leading-relaxed">
<div className="space-y-4">
<p>
                  Every installation includes manufacturer equipment warranties
                  plus our labour guarantee. We register eligible systems on
                  your behalf so your coverage is properly activated and
                  documented.
                </p>
<h3 className="text-sm font-semibold text-slate-900">
                  Typical coverage on qualifying systems
                </h3>
<ul className="list-disc list-inside space-y-1">
<li>
                    10–12 year limited parts warranty
                    (manufacturer‑dependent)
                  </li>
<li>
                    Up to 10 years compressor coverage on select heat pumps
                  </li>
<li>APEX labour warranty on installation workmanship</li>
<li>
                    Optional extended protection plans for parts &amp; labour
                  </li>
</ul>
</div>
<div className="space-y-4">
<p>
                  We’ll walk you through your specific warranty terms at the end
                  of every project, including what’s required to keep coverage
                  valid—typically regular maintenance and proper operation.
                </p>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
<p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    Questions About Coverage?
                  </p>
<p className="text-sm text-slate-600 mb-3">
                    If you’re unsure about the warranty on an existing system,
                    we can help you review paperwork and advise on next steps.
                  </p>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 hover:text-amber-700" href="#contact-form">
                    Ask about my warranty
                    <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<button aria-controls="ai-assistant-panel" aria-expanded="false" aria-label="Open rebate helper" className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 text-amber-300 shadow-xl shadow-slate-900/40 border border-slate-800 hover:bg-slate-800 hover:scale-105 transition-transform transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900" id="ai-assistant-toggle" type="button">
<svg className="lucide lucide-sparkles w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" style={{color: 'rgb(252, 211, 77)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v4"></path>
<path d="M12 17v4"></path>
<path d="M3 12h4"></path>
<path d="M17 12h4"></path>
<path className="" d="m18.364 5.636-2.828 2.828"></path>
<path d="m8.464 15.536-2.828 2.828"></path>
<path d="m5.636 5.636 2.828 2.828"></path>
<path d="m15.536 15.536 2.828 2.828"></path>
</svg>
</button>
<div className="fixed bottom-24 right-6 z-40 w-full max-w-md bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl shadow-slate-900/30 transform translate-y-6 opacity-0 pointer-events-none transition-all duration-300" id="ai-assistant-panel">
<form action="https://api.web3forms.com/submit" className="flex flex-col h-full" id="ai-assistant-form" method="post">
<input name="access_key" type="hidden" value="a4c3f5af-0f1b-4ca7-9dfd-90c5a7931022"/>
<input name="from_name" type="hidden" value="APEX Heat Pumps Website"/>
<input name="subject" type="hidden" value="AI Rebate Helper Assessment"/>
<input autocomplete="off" className="hp-field" name="website" tabindex="-1" type="text"/>
<div className="px-5 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-amber-300">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Smart Rebate Helper
              </p>
<p className="text-[11px] text-slate-400">
                Answer 4 quick questions — we’ll email the summary.
              </p>
</div>
</div>
<button aria-label="Close rebate helper" className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white" id="ai-assistant-close" type="button">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="px-5 py-4 space-y-4 text-xs text-slate-600 max-h-[60vh] overflow-y-auto">
<div>
<label className="block font-semibold uppercase tracking-wide text-[11px] text-slate-500 mb-1">
              1. Home Location
            </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" id="ai-home-location" name="home_location" placeholder="City / neighbourhood (e.g., North Vancouver)" type="text"/>
</div>
<div>
<label className="block font-semibold uppercase tracking-wide text-[11px] text-slate-500 mb-1">
              2. Home Type &amp; Size
            </label>
<div className="grid grid-cols-2 gap-2 mb-2">
<select className="col-span-2 sm:col-span-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" id="ai-home-type" name="home_type">
<option value="">Select home type</option>
<option value="Detached / duplex">Detached / duplex</option>
<option value="Townhome">Townhome</option>
<option value="Condo / apartment">Condo / apartment</option>
</select>
<input className="col-span-2 sm:col-span-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" id="ai-home-size" name="home_size" placeholder="Approx. sqft (e.g., 2200)" type="text"/>
</div>
</div>
<div>
<label className="block font-semibold uppercase tracking-wide text-[11px] text-slate-500 mb-1">
              3. Current Heating System
            </label>
<select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none mb-2" id="ai-current-system" name="current_system">
<option value="">Select current system</option>
<option value="Gas furnace">Gas furnace</option>
<option value="Electric baseboards">Electric baseboards</option>
<option value="Oil furnace / boiler">Oil furnace / boiler</option>
<option value="Existing heat pump">Existing heat pump</option>
<option value="Other / not sure">Other / not sure</option>
</select>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" id="ai-current-system-notes" name="current_system_notes" placeholder="Optional: age, brand, or notes" type="text"/>
</div>
<div>
<label className="block font-semibold uppercase tracking-wide text-[11px] text-slate-500 mb-1">
              4. Income Level &amp; Comfort Goals
            </label>
<select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none mb-2" id="ai-income-level" name="income_level">
<option value="">Income level for rebates</option>
<option value="Standard">Standard</option>
<option value="Income-qualified (lower income)">
                Income-qualified (lower income)
              </option>
<option value="Not sure">Not sure</option>
</select>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none resize-none" id="ai-comfort-goals" name="comfort_goals" placeholder="Drafty rooms, high gas bills, noise, air quality, etc." rows="2"></textarea>
</div>
<div>
<label className="block font-semibold uppercase tracking-wide text-[11px] text-slate-500 mb-1">
              Where should we email your summary?
            </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none" id="ai-email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<textarea aria-hidden="true" className="hp-field" id="ai-summary" name="ai_rebate_summary" tabindex="-1"></textarea>
</div>
<div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
<p className="text-[11px] text-slate-400" id="ai-assistant-status">
            Fill in the details and we’ll email a tailored rebate summary.
          </p>
<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-xs font-semibold px-4 py-2 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all" type="submit">
            Send Summary
            <svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</form>
</div>
<footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<p>
          ©
          <span id="footer-year">2025</span>
          APEX Heating &amp; Cooling Ltd. All rights reserved.
        </p>
<div className="flex items-center gap-4">
<a className="hover:text-amber-600" href="#contact-form">Contact</a>
<a className="hover:text-amber-600" href="#services">Services</a>
<a className="hover:text-amber-600" href="#warranty">Warranty</a>
</div>
</div>
</footer>


    </>
  );
}
