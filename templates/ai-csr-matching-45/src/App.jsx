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



    // Tab Switching Logic
    const tabs = document.querySelectorAll('.member-tab');
    const panels = document.querySelectorAll('.member-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.panel;

            // Reset Tabs
            tabs.forEach(t => {
                t.setAttribute('aria-selected', 'false');
                t.classList.remove('bg-[#1a3328]', 'text-white', 'border-[#1a3328]', 'font-semibold');
                t.classList.add('bg-white', 'text-[#4a4a4a]', 'border-[#d6dbd8]', 'font-medium');
            });

            // Set Active Tab
            tab.setAttribute('aria-selected', 'true');
            tab.classList.remove('bg-white', 'text-[#4a4a4a]', 'border-[#d6dbd8]', 'font-medium');
            tab.classList.add('bg-[#1a3328]', 'text-white', 'border-[#1a3328]', 'font-semibold');

            // Toggle Panels (using transition classes)
            panels.forEach(p => {
                p.classList.remove('opacity-100', 'z-10');
                p.classList.add('opacity-0', 'hidden');
                setTimeout(() => { if(!p.classList.contains('opacity-100')) p.classList.add('hidden'); }, 300);
            });

            const activePanel = document.getElementById(`panel-${target}`);
            if (activePanel) {
                activePanel.classList.remove('hidden');
                // slight delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    activePanel.classList.remove('opacity-0');
                    activePanel.classList.add('opacity-100', 'z-10');
                }, 10);
            }
        });
    });

    // Accordion Logic
    const perkHeaders = document.querySelectorAll('.perk-header');
    perkHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.perk-card');
            const toggle = header.querySelector('.perk-toggle');
            const isOpen = card.classList.contains('open');
            
            // Close siblings in same panel
            const siblings = card.closest('.panel-perks').querySelectorAll('.perk-card');
            siblings.forEach(s => {
                s.classList.remove('open');
                const t = s.querySelector('.perk-toggle');
                t.innerHTML = '+';
                t.classList.remove('rotate-45', 'bg-[#e8f0ec]');
            });

            // Open clicked if it was closed
            if (!isOpen) {
                card.classList.add('open');
                toggle.innerHTML = '&times;';
                toggle.classList.add('rotate-45', 'bg-[#e8f0ec]');
            }
        });
    });

    // Setup initial accordion toggle styles
    document.querySelectorAll('.perk-card.open').forEach(card => {
        const toggle = card.querySelector('.perk-toggle');
        toggle.innerHTML = '&times;';
        toggle.classList.add('rotate-45', 'bg-[#e8f0ec]');
    });

    // Language Toggle
    const langBtns = document.querySelectorAll('.langs-toggle button');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => {
                b.classList.remove('active', 'text-white', 'border-[#8caa98]');
                b.classList.add('text-[#c5d8ce]', 'border-[#254b3b]');
            });
            btn.classList.add('active', 'text-white', 'border-[#8caa98]');
            btn.classList.remove('text-[#c5d8ce]', 'border-[#254b3b]');
        });
    });

    // Active State Nav Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.4 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-[#c5d8ce]');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.remove('text-[#c5d8ce]');
                        link.classList.add('text-white');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(sec => observer.observe(sec));

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
      

<nav className="sticky top-0 z-50 bg-[#1a3328]/95 backdrop-blur-md border-b border-[#254b3b]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-['Syne'] font-bold text-xs tracking-widest uppercase text-white flex items-center gap-2.5 hover:opacity-80 transition-opacity" href="#">
<span className="block w-2 h-2 bg-[#f0d44a] rounded-full"></span>
            CSR Connect
        </a>
<ul className="hidden md:flex gap-8 list-none">
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#features">Platform Features</a></li>
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#usecases">Use Cases</a></li>
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#how">How It Works</a></li>
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#aimatching">AI Matching</a></li>
</ul>
<a className="bg-[#f0d44a] text-[#1a3328] font-['Syne'] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded hover:bg-[#f5dc60] hover:-translate-y-[0.0625rem] transition-all duration-200 shadow-[0_2px_8px_rgba(240,212,74,0.2)]" href="#cta">
            Post Opportunity
        </a>
</div>
</nav>

<section className="relative bg-[#f5f1eb] pt-24 pb-20 px-6 overflow-hidden">
<div className="absolute inset-y-0 right-0 w-1/2 hero-gradient clip-path-[polygon(8%_0%,100%_0%,100%_100%,0%_100%)] hidden md:block"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="font-['Syne'] text-xs font-semibold tracking-widest uppercase bg-[#1a3328] text-[#f0d44a] px-3 py-1 rounded">AI Matchmaking</span>
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full">
                    Verified NGOs
                </span>
</div>
<h1 className="font-['Syne'] font-bold text-4xl md:text-5xl lg:text-6xl text-[#1a3328] tracking-tight leading-[1.05] mb-6">
                Connect CSR Leaders<br/>
<em className="not-italic text-[#3d6b57]">with High-Impact NGOs</em>
</h1>
<p className="text-base text-[#4a4a4a] leading-relaxed mb-6 max-w-md">
                A discovery platform that helps companies allocate CSR funds efficiently by matching them with verified NGO projects using AI-powered recommendations.
            </p>
<ul className="flex flex-col gap-3 mb-10">
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3 border-b border-[#d6dbd8]">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    AI-powered semantic matching
                </li>
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3 border-b border-[#d6dbd8]">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Verified NGO data (NGO-DARPAN integrated)
                </li>
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3 border-b border-[#d6dbd8]">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Impact-driven funding discoverability
                </li>
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Transparent similarity scoring
                </li>
</ul>
<div className="flex flex-wrap gap-4 items-center">
<a className="inline-flex items-center gap-2 bg-[#1a3328] text-white font-['Syne'] text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded hover:bg-[#254b3b] hover:-translate-y-[0.0625rem] shadow-[0_4px_12px_rgba(26,51,40,0.15)] transition-all duration-200" href="#aimatching">
                    Explore NGO Projects →
                </a>
<a className="inline-flex items-center gap-2 bg-transparent text-[#1a3328] font-['Syne'] text-xs font-medium tracking-widest uppercase px-6 py-3.5 rounded border border-[#1a3328] hover:bg-[#1a3328] hover:text-white transition-all duration-200" href="#cta">
                    Post a CSR Opportunity
                </a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">01</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Smart Matchmaking</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">AI embeddings ensure deep semantic alignment, not just keyword matches.</p>
</div>
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300 mt-0 sm:mt-8">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">02</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Verified Trust</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">NGOs are authenticated using official government registries and databases.</p>
</div>
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">03</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Centralized Hub</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">A single marketplace for evaluating causes, budgets, and geographic impact.</p>
</div>
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300 mt-0 sm:mt-8">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">04</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Transparent Scoring</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Every recommendation comes with an explanation of why it’s a strong fit.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a3328] py-16 px-6" id="features">
<div className="max-w-6xl mx-auto flex flex-col gap-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-white tracking-tight">Platform Features</h2>
<p className="text-sm text-[#c5d8ce] max-w-md md:text-right leading-relaxed">Everything you need to discover, evaluate, and fund high-impact social initiatives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.125rem] rounded-xl overflow-hidden bg-[#1a3328]">
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">AI Match Engine</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">Automatically recommends the best NGO projects or CSR opportunities using semantic embeddings and similarity scoring.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:case-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">CSR Opportunity Marketplace</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">CSR heads can post funding opportunities and discover NGO projects aligned with their social impact goals.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">NGO Project Hub</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">NGOs can showcase projects and connect directly with companies actively seeking impactful CSR partnerships.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:earth-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Impact-Based Discovery</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">Browse and filter projects by cause area, geographic location, required funding size, and estimated impact potential.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Transparent Matching Scores</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">AI-generated match scores show exactly why a particular project and funding opportunity are a strong fit.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Verified NGO Listings</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">All NGO data is sourced from and cross-referenced with government registries such as NGO-DARPAN for complete trust.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="usecases">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-4">
                Who This Is For
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">Choose your role</h2>
<p className="text-base text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">The platform adapts to your goals. Select your role to see how AI matchmaking bridges the gap between capital and impact.</p>
</div>

<div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 mb-12 pb-2" role="tablist">
<button aria-selected="true" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-semibold tracking-wide uppercase px-5 py-3 rounded-full border border-[#1a3328] bg-[#1a3328] text-white shadow-sm transition-all duration-200" data-panel="designers" role="tab">
<iconify-icon height="1.1rem" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>CSR Teams</span>
</button>
<button aria-selected="false" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-medium tracking-wide uppercase px-5 py-3 rounded-full border border-[#d6dbd8] bg-white text-[#4a4a4a] hover:border-[#8caa98] hover:text-[#254b3b] hover:bg-[#e8f0ec] transition-all duration-200" data-panel="research" role="tab">
<iconify-icon height="1.1rem" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>NGOs</span>
</button>
<button aria-selected="false" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-medium tracking-wide uppercase px-5 py-3 rounded-full border border-[#d6dbd8] bg-white text-[#4a4a4a] hover:border-[#8caa98] hover:text-[#254b3b] hover:bg-[#e8f0ec] transition-all duration-200" data-panel="members" role="tab">
<iconify-icon height="1.1rem" icon="solar:bank-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Foundations</span>
</button>
<button aria-selected="false" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-medium tracking-wide uppercase px-5 py-3 rounded-full border border-[#d6dbd8] bg-white text-[#4a4a4a] hover:border-[#8caa98] hover:text-[#254b3b] hover:bg-[#e8f0ec] transition-all duration-200" data-panel="partners" role="tab">
<iconify-icon height="1.1rem" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Impact Auditors</span>
</button>
</div>

<div className="relative min-h-[500px]">

<div className="member-panel block opacity-100 transition-opacity duration-300" id="panel-designers">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)]">

<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col gap-8">
<div>
<iconify-icon className="text-[#f0d44a] mb-4 block" height="2rem" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3">Corporate CSR Teams</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Discover credible NGO projects aligned with your CSR strategy and allocate funds more effectively to maximize social ROI.</p>
</div>
<div>
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#f0d44a] block mb-4">Your Challenges</span>
<ul className="flex flex-col gap-2.5">
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Difficulty discovering grassroots organizations
                                </li>
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Manual vetting takes too much internal time
                                </li>
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Ensuring strict compliance and authenticity
                                </li>
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Finding initiatives that truly align with core values
                                </li>
</ul>
</div>
<div className="w-full h-[1px] bg-[#254b3b] my-2"></div>
<div>
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#f0d44a] block mb-4">Platform Solutions</span>
<ul className="flex flex-col gap-2.5">
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> AI recommendations based on your unique brief
                                </li>
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Access to pre-verified government data (NGO-DARPAN)
                                </li>
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Centralized dashboard to track project proposals
                                </li>
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Direct communication with NGO founders
                                </li>
</ul>
</div>
</div>

<div className="bg-white p-10 md:p-14 flex flex-col gap-6 panel-perks">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57]">Workflow Overview</div>

<div className="perk-card open border border-[#d6dbd8]/60 rounded-xl overflow-hidden cursor-pointer hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-shadow">
<div className="perk-header flex items-center justify-between p-4 bg-[#f5f1eb] hover:bg-[#e8f0ec] transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#3d6b57] shrink-0"></div>
<span className="font-['Syne'] text-sm font-semibold text-[#1a3328]">Post Funding Opportunities</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-block text-[0.625rem] font-medium text-[#3d6b57] bg-[#e8f0ec] border border-[#c5d8ce] px-2 py-0.5 rounded-full whitespace-nowrap">Marketplace</span>
<div className="perk-toggle w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all text-[#1a3328] bg-transparent border border-[#d6dbd8]">+</div>
</div>
</div>
<div className="perk-body-wrapper">
<div className="perk-body-inner">
<div className="p-5 pt-4 bg-white">
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-4">Create a detailed CSR brief specifying the cause area, budget, desired impact metrics, and target demographics. The platform uses this data to map against thousands of NGO projects.</p>
<span className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold text-[#254b3b] bg-[#e8f0ec] px-2.5 py-1 rounded-md mb-3">
<iconify-icon height="0.875rem" icon="solar:pen-linear" width="0.875rem"></iconify-icon>
                                            Easy brief builder
                                        </span>
</div>
</div>
</div>
</div>

<div className="perk-card border border-[#d6dbd8]/60 rounded-xl overflow-hidden cursor-pointer hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-shadow">
<div className="perk-header flex items-center justify-between p-4 bg-[#f5f1eb] hover:bg-[#e8f0ec] transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#3d6b57] shrink-0"></div>
<span className="font-['Syne'] text-sm font-semibold text-[#1a3328]">Review AI Matches</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-block text-[0.625rem] font-medium text-[#3d6b57] bg-[#e8f0ec] border border-[#c5d8ce] px-2 py-0.5 rounded-full whitespace-nowrap">Cosine Similarity</span>
<div className="perk-toggle w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all text-[#1a3328] bg-transparent border border-[#d6dbd8]">+</div>
</div>
</div>
<div className="perk-body-wrapper">
<div className="perk-body-inner">
<div className="p-5 pt-4 bg-white">
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-4">Receive a ranked list of matched NGO projects instantly. View a percentage score and a clear explanation of exactly why the AI determined it aligns with your strategy.</p>
<span className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold text-[#254b3b] bg-[#e8f0ec] px-2.5 py-1 rounded-md mb-3">
<iconify-icon height="0.875rem" icon="solar:sort-from-top-to-bottom-linear" width="0.875rem"></iconify-icon>
                                            Ranked intelligently
                                        </span>
</div>
</div>
</div>
</div>

<div className="perk-card border border-[#d6dbd8]/60 rounded-xl overflow-hidden cursor-pointer hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-shadow">
<div className="perk-header flex items-center justify-between p-4 bg-[#f5f1eb] hover:bg-[#e8f0ec] transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#3d6b57] shrink-0"></div>
<span className="font-['Syne'] text-sm font-semibold text-[#1a3328]">Initiate Partnership</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-block text-[0.625rem] font-medium text-[#3d6b57] bg-[#e8f0ec] border border-[#c5d8ce] px-2 py-0.5 rounded-full whitespace-nowrap">Connection</span>
<div className="perk-toggle w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all text-[#1a3328] bg-transparent border border-[#d6dbd8]">+</div>
</div>
</div>
<div className="perk-body-wrapper">
<div className="perk-body-inner">
<div className="p-5 pt-4 bg-white">
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-4">Once you find the perfect match, open a direct communication channel with the NGO. Request additional documents, schedule meetings, and move forward with funding.</p>
<span className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold text-[#254b3b] bg-[#e8f0ec] px-2.5 py-1 rounded-md mb-3">
<iconify-icon height="0.875rem" icon="solar:handshake-linear" width="0.875rem"></iconify-icon>
                                            Direct collaboration
                                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="member-panel hidden opacity-0 transition-opacity duration-300 absolute inset-0" id="panel-research">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)] h-full">
<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col justify-center text-center">
<iconify-icon className="text-[#f0d44a] mx-auto mb-4 block" height="2.5rem" icon="solar:hand-heart-linear" style={{strokeWidth: '1.5'}} width="2.5rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">NGOs &amp; Nonprofits</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Gain visibility and connect with companies actively looking for impactful CSR partnerships, regardless of your marketing budget.</p>
</div>
<div className="bg-white p-10 flex items-center justify-center text-center">
<p className="text-sm text-[#4a4a4a] max-w-sm leading-relaxed">Showcase your projects to a network of corporate funders. Our AI ensures that if your project aligns with a company's goals, you get matched—leveling the playing field for organizations of all sizes.</p>
</div>
</div>
</div>
<div className="member-panel hidden opacity-0 transition-opacity duration-300 absolute inset-0" id="panel-members">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)] h-full">
<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col justify-center text-center">
<iconify-icon className="text-[#f0d44a] mx-auto mb-4 block" height="2.5rem" icon="solar:bank-linear" style={{strokeWidth: '1.5'}} width="2.5rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">Philanthropic Foundations</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Scale your grantmaking with data-driven insights and AI matching.</p>
</div>
<div className="bg-white p-10 flex items-center justify-center">
<p className="text-sm text-[#8a8a8a]">Foundation features mapping here.</p>
</div>
</div>
</div>
<div className="member-panel hidden opacity-0 transition-opacity duration-300 absolute inset-0" id="panel-partners">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)] h-full">
<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col justify-center text-center">
<iconify-icon className="text-[#f0d44a] mx-auto mb-4 block" height="2.5rem" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}} width="2.5rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">Impact Auditors</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Connect with NGOs and corporates to provide third-party validation.</p>
</div>
<div className="bg-white p-10 flex items-center justify-center">
<p className="text-sm text-[#8a8a8a]">Auditor features mapping here.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#e8f0ec] py-24 px-6" id="how">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-white text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-4">
                The Connection Process
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">How It Works</h2>
<p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">A seamless 5-step process to bridge the CSR funding gap. We replace manual searching with intelligent AI matching.</p>
</div>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-[2.2rem] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-[#c5d8ce]"></div>
<div className="flex flex-col gap-10">

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Step 1</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Create Profiles</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">CSR Heads and NGOs create accounts. NGOs authenticate using official credentials like NGO-DARPAN to establish immediate platform trust.</p>
</div>
</div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-1 md:order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">1</div>
</div>
<div className="hidden md:block md:w-1/2 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="hidden md:block md:w-1/2 order-1"></div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">2</div>
</div>
<div className="md:w-1/2 order-3 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Step 2</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Post Needs &amp; Projects</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">NGOs post detailed community projects. CSR heads post funding opportunities outlining their social objectives, budgets, and cause areas.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Step 3</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">AI Embeddings Analysis</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">The platform's AI analyzes both project descriptions and corporate opportunities using advanced semantic embeddings to understand true intent.</p>
</div>
</div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-1 md:order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">3</div>
</div>
<div className="hidden md:block md:w-1/2 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="hidden md:block md:w-1/2 order-1"></div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">4</div>
</div>
<div className="md:w-1/2 order-3 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Step 4</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Ranked AI Generation</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">The platform generates ranked matches using cosine similarity, providing a percentage score and a clear explanation of the alignment reasoning.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Step 5</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Connect &amp; Collaborate</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Users browse recommendations, review the AI’s logic, and seamlessly connect to begin their CSR partnership and fund impact.</p>
</div>
</div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-1 md:order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">5</div>
</div>
<div className="hidden md:block md:w-1/2 order-3"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="aimatching">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-4">
                Core Technology
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">AI-Powered CSR Matching</h2>
<p className="text-base text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">Our AI engine analyzes project descriptions and CSR funding opportunities using embeddings and cosine similarity to identify the best matches beyond mere keywords.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Match Score Percentage</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Instantly see how well an NGO project aligns with your CSR goals with a clear 0-100% quantitative similarity score.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    See How It Works <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Clear Explanations</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Understand exactly why a project and opportunity are a strong fit with plain-English AI-generated reasoning.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    Read Sample Report <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:sort-from-top-to-bottom-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Ranked Recommendations</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Get a prioritized list of the most relevant matches directly in your dashboard, saving hours of manual discovery.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    View Match Engine <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Semantic Embeddings</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Advanced NLP ensures matches are based on deep context and impact goals, not just superficial keywords.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    Explore Technology <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
<p className="text-center text-xs text-[#8a8a8a] mt-10 max-w-2xl mx-auto leading-relaxed">
            Each recommendation includes the match score percentage, explanation of why the project aligns, and ranked alternatives. <strong className="font-semibold text-[#4a4a4a]">Never miss a high-impact opportunity.</strong>
</p>
</div>
</section>

<section className="bg-[#1a3328] py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#254b3b] text-[#c5d8ce] border border-[#3d6b57] px-3 py-1 rounded-full mb-4">
                Why We Built This
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">The CSR Funding Gap</h2>
<p className="text-base text-[#c5d8ce] max-w-xl mx-auto leading-relaxed">Many CSR teams struggle to discover impactful NGO projects. At the same time, thousands of credible NGOs lack access to corporate opportunities.</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-[#254b3b]/30 rounded-2xl overflow-hidden max-w-4xl mx-auto border border-[#254b3b]">
<div className="bg-white/5 p-8 md:p-12 backdrop-blur-sm">
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#8caa98] mb-6 block">The Status Quo</span>
<ul className="flex flex-col gap-4">
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Manual searching for reliable NGO projects
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Limited visibility for grassroots organizations
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Basic keyword matching that misses intent
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Opaque or unverified background checks
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> High friction in establishing connections
                    </li>
</ul>
</div>
<div className="bg-[#254b3b] p-8 md:p-12">
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#f0d44a] mb-6 block">Our Platform Solution</span>
<ul className="flex flex-col gap-4">
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Centralized marketplace for instant discovery
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> AI semantic matching for deep alignment
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> NGO data verified through government registries
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Transparent scoring with clear reasoning
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Direct communication tools built-in
                    </li>
</ul>
</div>
</div>
<div className="text-center mt-12">
<p className="font-['Syne'] text-lg font-semibold text-white italic mb-1">"Stop searching. Start matching."</p>
<span className="text-xs text-[#c5d8ce]">Our platform solves this by creating an intelligent marketplace for collaboration.</span>
</div>
</div>
</section>

<section className="bg-[#f5f1eb] py-24 px-6" id="cta">
<div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
<div className="flex flex-col">
<span className="inline-flex self-start items-center gap-1.5 font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-6">
                Take Action
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight leading-tight mb-4">Start Building Meaningful CSR Partnerships</h2>
<p className="text-sm text-[#4a4a4a] mb-8 leading-relaxed">Join a platform designed to connect companies and NGOs through intelligent discovery and AI-powered matching.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#1a3328] text-white font-['Syne'] text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded hover:bg-[#254b3b] hover:-translate-y-[0.0625rem] shadow-[0_4px_12px_rgba(26,51,40,0.15)] transition-all duration-200" href="#">
                    Get Started as NGO
                </a>
<a className="inline-flex justify-center items-center gap-2 bg-transparent text-[#1a3328] font-['Syne'] text-xs font-medium tracking-widest uppercase px-6 py-3.5 rounded border border-[#1a3328] hover:bg-[#1a3328] hover:text-white transition-all duration-200" href="#">
                    Post CSR Opportunity
                </a>
</div>
<div className="mt-10 text-[0.8125rem] text-[#4a4a4a] leading-relaxed p-4 bg-[#e8f0ec] border-l-2 border-[#3d6b57] rounded-r-lg">
                Registration is free for verified non-profits. <strong className="font-semibold text-[#1a3328]">NGO-DARPAN ID required for onboarding.</strong>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Data &amp; Trust Partners</div>

<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">NGO-DARPAN</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Govt. Verification Registry</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Verified</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">MCA Database</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Corporate CSR Filings</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Data</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:chart-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">Impact Auditor Network</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Independent Assessment</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Partners</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#1a3328] pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#254b3b] mb-8">
<div className="lg:col-span-2">
<div className="font-['Syne'] font-bold text-xs tracking-widest uppercase text-white flex items-center gap-2.5 mb-4">
<span className="block w-2 h-2 bg-[#f0d44a] rounded-full"></span>
                    CSR Connect
                </div>
<p className="text-xs text-[#c5d8ce] leading-relaxed max-w-xs">Democratizing CSR funding through intelligent matching. Discover verified NGOs, leverage AI for alignment, and allocate funds securely.</p>
</div>
<div>
<h5 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">Platform</h5>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">Platform Overview</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#aimatching">AI Matching</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#how">How It Works</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#features">Features</a></li>
</ul>
</div>
<div>
<h5 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">Discover</h5>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">NGO Projects</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">CSR Opportunities</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">For CSR Teams</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">For NGOs</a></li>
</ul>
</div>
<div>
<h5 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">Support</h5>
<address className="not-italic text-xs text-white/60 leading-relaxed">
                    CSR Connect HQ<br/>
                    Global Support Team<br/>
<a className="hover:text-white transition-colors mt-1 inline-block" href="mailto:hello@csrconnect.ai">hello@csrconnect.ai</a>
</address>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[0.6875rem] text-[#3d6b57]">© 2025 CSR Connect Platform. All rights reserved.</p>
<div className="flex gap-2 langs-toggle">
<button className="active text-[0.6875rem] font-medium text-white border border-[#8caa98] bg-transparent px-2 py-0.5 rounded transition-colors">EN</button>
</div>
</div>
</div>
</footer>



    </>
  );
}
