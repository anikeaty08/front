import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-[#1a3328]/95 backdrop-blur-md border-b border-[#254b3b]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-['Syne'] font-bold text-xs tracking-widest uppercase text-white flex items-center gap-2.5 hover:opacity-80 transition-opacity" href="#">
<span className="block w-2 h-2 bg-[#f0d44a] rounded-full"></span>
            Xplore Community
        </a>
<ul className="hidden md:flex gap-8 list-none">
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#members">For Members</a></li>
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#how">How It Works</a></li>
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#opencall">Open Call</a></li>
<li><a className="nav-link text-xs font-medium text-[#c5d8ce] hover:text-white tracking-wide transition-colors" href="#partners">Partners</a></li>
</ul>
<a className="bg-[#f0d44a] text-[#1a3328] font-['Syne'] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded hover:bg-[#f5dc60] hover:-translate-y-[0.0625rem] transition-all duration-200 shadow-[0_2px_8px_rgba(240,212,74,0.2)]" href="#opencall">
            Apply Now
        </a>
</div>
</nav>

<section className="relative bg-[#f5f1eb] pt-24 pb-20 px-6 overflow-hidden">
<div className="absolute inset-y-0 right-0 w-1/2 hero-gradient clip-path-[polygon(8%_0%,100%_0%,100%_100%,0%_100%)] hidden md:block"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="font-['Syne'] text-xs font-semibold tracking-widest uppercase bg-[#1a3328] text-[#f0d44a] px-3 py-1 rounded">Pilot 01</span>
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full">
                    Copenhagen, Denmark
                </span>
</div>
<h1 className="font-['Syne'] font-bold text-4xl md:text-5xl lg:text-6xl text-[#1a3328] tracking-tight leading-[1.05] mb-6">
                Flexible<br/>
<em className="not-italic text-[#3d6b57]">Urban Living</em>
</h1>
<p className="text-base text-[#4a4a4a] leading-relaxed mb-6 max-w-md">
                How can IKEA make small city living more flexible, circular and adaptable over time?
                Copenhagen is our starting point. Over 18 weeks, we explore one clear question with real people.
            </p>
<ul className="flex flex-col gap-3 mb-10">
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3 border-b border-[#d6dbd8]">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Copenhagen is our starting point
                </li>
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3 border-b border-[#d6dbd8]">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Real assets exchanged for real contribution
                </li>
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3 border-b border-[#d6dbd8]">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Go/no-go decisions within defined timelines
                </li>
<li className="flex items-center gap-3 text-sm text-[#4a4a4a] pb-3">
<span className="block w-1.5 h-1.5 bg-[#3d6b57] rounded-full shrink-0"></span>
                    Co-creators, not observers
                </li>
</ul>
<div className="flex flex-wrap gap-4 items-center">
<a className="inline-flex items-center gap-2 bg-[#1a3328] text-white font-['Syne'] text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded hover:bg-[#254b3b] hover:-translate-y-[0.0625rem] shadow-[0_4px_12px_rgba(26,51,40,0.15)] transition-all duration-200" href="#members">
                    Explore the community →
                </a>
<a className="inline-flex items-center gap-2 bg-transparent text-[#1a3328] font-['Syne'] text-xs font-medium tracking-widest uppercase px-6 py-3.5 rounded border border-[#1a3328] hover:bg-[#1a3328] hover:text-white transition-all duration-200" href="#how">
                    How it works
                </a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">01</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">AI Space Planning</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Intelligent support for optimising small home layouts.</p>
</div>
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300 mt-0 sm:mt-8">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">02</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Modular Furniture</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Adapts and reconfigures as your life changes over time.</p>
</div>
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">03</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Flexible Upgrades</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Subscription or upgrade options built into the model.</p>
</div>
<div className="bg-white border border-[#d6dbd8]/60 rounded-xl p-6 shadow-[0_2px_8px_rgba(26,51,40,0.04)] hover:shadow-[0_8px_24px_rgba(26,51,40,0.08)] hover:-translate-y-1 transition-all duration-300 mt-0 sm:mt-8">
<div className="font-['Syne'] text-xs font-bold tracking-widest text-[#3d6b57] uppercase mb-3">04</div>
<h3 className="font-['Syne'] text-sm font-semibold tracking-tight text-[#1a3328] mb-1.5">Circular Return</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Return and refurbishment model for a closed-loop system.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a3328] py-16 px-6">
<div className="max-w-6xl mx-auto flex flex-col gap-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-white tracking-tight">What IKEA puts on the table</h2>
<p className="text-sm text-[#c5d8ce] max-w-md md:text-right leading-relaxed">We are not networking. We exchange real assets for real contribution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.125rem] rounded-xl overflow-hidden bg-[#1a3328]">
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:chart-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Category Performance Data</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">Anonymised sales and consumer preference data — available before you design, not after.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:shop-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">The Store as a Live Testbed</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">Real foot traffic in Copenhagen for testing concepts, prototypes, and services in actual context.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Structured Consumer Cohorts</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">Pre-recruited, defined test panels — available for validation sessions without partner recruitment costs.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Portfolio Owner Access</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">Presentations go directly to decision-makers — not filtered through an events team or workshop room.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">DNS+ Pipeline Entry</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">The formal pathway for community contributions to enter exploration and business case processes.</p>
</div>
<div className="bg-[#254b3b] p-8 hover:bg-[#3d6b57] transition-colors duration-300 group">
<iconify-icon className="text-[#f0d44a] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" height="1.75rem" icon="solar:handshake-linear" style={{strokeWidth: '1.5'}} width="1.75rem"></iconify-icon>
<h4 className="font-['Syne'] text-sm font-semibold text-white mb-2">Supplier Pathway &amp; Go/No-Go</h4>
<p className="text-xs text-[#c5d8ce] leading-relaxed">A defined commercial route: Pilot → KPI evaluation → formal decision → contract. Time-bound.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="members">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-4">
                Who This Is For
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">Choose your role</h2>
<p className="text-base text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">The value exchange is different for each member type. Select yours to see what you bring — and what you get access to.</p>
</div>

<div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 mb-12 pb-2" role="tablist">
<button aria-selected="true" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-semibold tracking-wide uppercase px-5 py-3 rounded-full border border-[#1a3328] bg-[#1a3328] text-white shadow-sm transition-all duration-200" data-panel="designers" role="tab">
<iconify-icon height="1.1rem" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Designers</span>
</button>
<button aria-selected="false" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-medium tracking-wide uppercase px-5 py-3 rounded-full border border-[#d6dbd8] bg-white text-[#4a4a4a] hover:border-[#8caa98] hover:text-[#254b3b] hover:bg-[#e8f0ec] transition-all duration-200" data-panel="research" role="tab">
<iconify-icon height="1.1rem" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Research Centers</span>
</button>
<button aria-selected="false" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-medium tracking-wide uppercase px-5 py-3 rounded-full border border-[#d6dbd8] bg-white text-[#4a4a4a] hover:border-[#8caa98] hover:text-[#254b3b] hover:bg-[#e8f0ec] transition-all duration-200" data-panel="members" role="tab">
<iconify-icon height="1.1rem" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Members</span>
</button>
<button aria-selected="false" className="member-tab shrink-0 flex items-center gap-2.5 font-['Syne'] text-xs font-medium tracking-wide uppercase px-5 py-3 rounded-full border border-[#d6dbd8] bg-white text-[#4a4a4a] hover:border-[#8caa98] hover:text-[#254b3b] hover:bg-[#e8f0ec] transition-all duration-200" data-panel="partners" role="tab">
<iconify-icon height="1.1rem" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Innovation Partners</span>
</button>
</div>

<div className="relative min-h-[500px]">

<div className="member-panel block opacity-100 transition-opacity duration-300" id="panel-designers">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)]">

<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col gap-8">
<div>
<iconify-icon className="text-[#f0d44a] mb-4 block" height="2rem" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3">Designers &amp; Creatives</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Independent designers, architects, product designers and creative practitioners from Copenhagen's design scene.</p>
</div>
<div>
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#f0d44a] block mb-4">You bring</span>
<ul className="flex flex-col gap-2.5">
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Concrete product concepts and physical prototypes
                                </li>
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Cultural sensitivity and trend intelligence
                                </li>
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Making skills beyond IKEA's internal language
                                </li>
<li className="text-xs text-[#c5d8ce] flex items-start gap-2.5 leading-relaxed">
<span className="text-[#8caa98] shrink-0 mt-[0.125rem]">→</span> Connection to Copenhagen's design community
                                </li>
</ul>
</div>
<div className="w-full h-[1px] bg-[#254b3b] my-2"></div>
<div>
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#f0d44a] block mb-4">You get access to</span>
<ul className="flex flex-col gap-2.5">
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Category performance data before you design — not after
                                </li>
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Structured feedback from a real consumer test cohort
                                </li>
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Your name formally attached to any IKEA collaboration
                                </li>
<li className="text-xs text-white flex items-start gap-2.5 leading-relaxed">
<span className="text-[#f0d44a] shrink-0 mt-[0.125rem]">✓</span> Presentation to a portfolio owner — a decision-maker
                                </li>
</ul>
</div>
</div>

<div className="bg-white p-10 md:p-14 flex flex-col gap-6 panel-perks">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57]">Initiatives &amp; Access Points</div>

<div className="perk-card open border border-[#d6dbd8]/60 rounded-xl overflow-hidden cursor-pointer hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-shadow">
<div className="perk-header flex items-center justify-between p-4 bg-[#f5f1eb] hover:bg-[#e8f0ec] transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#3d6b57] shrink-0"></div>
<span className="font-['Syne'] text-sm font-semibold text-[#1a3328]">Briefed Design Sprint</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-block text-[0.625rem] font-medium text-[#3d6b57] bg-[#e8f0ec] border border-[#c5d8ce] px-2 py-0.5 rounded-full whitespace-nowrap">Data + Decision Access</span>
<div className="perk-toggle w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all text-[#1a3328] bg-transparent border border-[#d6dbd8]">+</div>
</div>
</div>
<div className="perk-body-wrapper">
<div className="perk-body-inner">
<div className="p-5 pt-4 bg-white">
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-4">IKEA publishes quarterly briefs for each active portfolio area. Designers receive a Category Intelligence Pack (anonymised sales and preference data) before starting. Submissions go directly to the portfolio owner for a formal decision.</p>
<span className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold text-[#254b3b] bg-[#e8f0ec] px-2.5 py-1 rounded-md mb-3">
<iconify-icon height="0.875rem" icon="solar:clock-circle-linear" width="0.875rem"></iconify-icon>
                                            Quarterly brief · 6-week sprint
                                        </span>
<div className="pt-3 border-t border-[#d6dbd8]/50 text-[0.625rem] text-[#8a8a8a] flex items-start gap-1.5">
<iconify-icon className="shrink-0 mt-[0.125rem]" height="0.875rem" icon="solar:map-point-linear" width="0.875rem"></iconify-icon>
                                            Danish Design Center and KADK as institutional entry points.
                                        </div>
</div>
</div>
</div>
</div>

<div className="perk-card border border-[#d6dbd8]/60 rounded-xl overflow-hidden cursor-pointer hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-shadow">
<div className="perk-header flex items-center justify-between p-4 bg-[#f5f1eb] hover:bg-[#e8f0ec] transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#3d6b57] shrink-0"></div>
<span className="font-['Syne'] text-sm font-semibold text-[#1a3328]">Customer Validation</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-block text-[0.625rem] font-medium text-[#3d6b57] bg-[#e8f0ec] border border-[#c5d8ce] px-2 py-0.5 rounded-full whitespace-nowrap">Consumer Cohort</span>
<div className="perk-toggle w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all text-[#1a3328] bg-transparent border border-[#d6dbd8]">+</div>
</div>
</div>
<div className="perk-body-wrapper">
<div className="perk-body-inner">
<div className="p-5 pt-4 bg-white">
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-4">For shortlisted designs, IKEA facilitates a 2-hour testing session with a pre-recruited consumer cohort in the Copenhagen store. The designer observes and receives the full structured feedback report.</p>
<span className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold text-[#254b3b] bg-[#e8f0ec] px-2.5 py-1 rounded-md mb-3">
<iconify-icon height="0.875rem" icon="solar:clock-circle-linear" width="0.875rem"></iconify-icon>
                                            1 session per shortlisted design
                                        </span>
</div>
</div>
</div>
</div>

<div className="perk-card border border-[#d6dbd8]/60 rounded-xl overflow-hidden cursor-pointer hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-shadow">
<div className="perk-header flex items-center justify-between p-4 bg-[#f5f1eb] hover:bg-[#e8f0ec] transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#3d6b57] shrink-0"></div>
<span className="font-['Syne'] text-sm font-semibold text-[#1a3328]">Studio Access</span>
</div>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-block text-[0.625rem] font-medium text-[#3d6b57] bg-[#e8f0ec] border border-[#c5d8ce] px-2 py-0.5 rounded-full whitespace-nowrap">Tools + Materials</span>
<div className="perk-toggle w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all text-[#1a3328] bg-transparent border border-[#d6dbd8]">+</div>
</div>
</div>
<div className="perk-body-wrapper">
<div className="perk-body-inner">
<div className="p-5 pt-4 bg-white">
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-4">15–20 active design members at any time. Includes 2 days/month of studio prototyping access, materials library, and IKEA's supplier sample archive. Conditional on submitting at least one active brief per quarter.</p>
<span className="inline-flex items-center gap-1.5 text-[0.625rem] font-semibold text-[#254b3b] bg-[#e8f0ec] px-2.5 py-1 rounded-md mb-3">
<iconify-icon height="0.875rem" icon="solar:clock-circle-linear" width="0.875rem"></iconify-icon>
                                            Rolling monthly access
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
<iconify-icon className="text-[#f0d44a] mx-auto mb-4 block" height="2.5rem" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="2.5rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">Research Centers</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Details tailored for universities bringing research rigour.</p>
</div>
<div className="bg-white p-10 flex items-center justify-center">
<p className="text-sm text-[#8a8a8a]">Research perks and initiatives map here.</p>
</div>
</div>
</div>
<div className="member-panel hidden opacity-0 transition-opacity duration-300 absolute inset-0" id="panel-members">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)] h-full">
<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col justify-center text-center">
<iconify-icon className="text-[#f0d44a] mx-auto mb-4 block" height="2.5rem" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="2.5rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">Members</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Details for everyday consumers and city residents.</p>
</div>
<div className="bg-white p-10 flex items-center justify-center">
<p className="text-sm text-[#8a8a8a]">Member perks and initiatives map here.</p>
</div>
</div>
</div>
<div className="member-panel hidden opacity-0 transition-opacity duration-300 absolute inset-0" id="panel-partners">
<div className="grid lg:grid-cols-2 rounded-2xl border border-[#d6dbd8]/80 overflow-hidden shadow-[0_8px_32px_rgba(26,51,40,0.06)] h-full">
<div className="bg-[#1a3328] p-10 md:p-14 flex flex-col justify-center text-center">
<iconify-icon className="text-[#f0d44a] mx-auto mb-4 block" height="2.5rem" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="2.5rem"></iconify-icon>
<h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">Innovation Partners</h3>
<p className="text-sm text-[#c5d8ce] leading-relaxed">Details for startups and scale-ups ready to pilot.</p>
</div>
<div className="bg-white p-10 flex items-center justify-center">
<p className="text-sm text-[#8a8a8a]">Partner perks and initiatives map here.</p>
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
                The 18-Week Timeline
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">The Pilot Roadmap</h2>
<p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">We build the community in phases. Each step produces a defined output. No ambiguity about what happens next.</p>
</div>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-[2.2rem] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-[#c5d8ce]"></div>
<div className="flex flex-col gap-10">

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Weeks 1–2</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Case Defined. Owners Assigned.</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Exploration brief finalised. Portfolio owner confirmed. Member cohorts identified. KPI contracts signed with all innovation partners.</p>
</div>
</div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-1 md:order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">1-2</div>
</div>
<div className="hidden md:block md:w-1/2 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="hidden md:block md:w-1/2 order-1"></div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">3-8</div>
</div>
<div className="md:w-1/2 order-3 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Weeks 3–8</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Community Sessions Active.</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Design sprints run. Research collaborations active. Home Panel sessions begin. Venture Client Sprints deployed in store.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Weeks 9–14</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Prototype Tested in Real Homes.</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Shortlisted concepts move to consumer cohort validation. Venture Client KPI review. Go/no-go issued to innovation partners.</p>
</div>
</div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-1 md:order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">9-14</div>
</div>
<div className="hidden md:block md:w-1/2 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
<div className="hidden md:block md:w-1/2 order-1"></div>
<div className="absolute left-[-2.25rem] md:static md:w-auto order-2 z-10">
<div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3328] rounded-full flex items-center justify-center shadow-[0_0_0_4px_#e8f0ec] font-['Syne'] text-xs font-bold text-white">15-18</div>
</div>
<div className="md:w-1/2 order-3 relative">
<div className="bg-white border border-[#d6dbd8]/60 p-6 rounded-xl shadow-[0_2px_8px_rgba(26,51,40,0.04)] inline-block w-full">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Weeks 15–18</div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-2 leading-snug">Evidence Reviewed &amp; Shared.</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Xplore Store Showcase for validated designs. Supplier fast-track initiated. All learnings packaged for global studios.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="opencall">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-4">
                Open Call
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight mb-4">Co-Creators Wanted</h2>
<p className="text-base text-[#4a4a4a] max-w-xl mx-auto leading-relaxed">We are not looking for observers. We are inviting participants who are ready to contribute and receive in equal measure.</p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:city-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Live small</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Apartments under 60m², young families, or people who move frequently across Copenhagen.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    Apply as a Member <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Build circular</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Startups working on circular, subscription, or modular home solutions — with a working prototype.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    Apply as Partner <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Design space</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">Local architects, product designers, and space planners with compact living expertise.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    Apply as a Designer <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<div className="group relative overflow-hidden bg-[#f5f1eb] border border-[#d6dbd8]/60 p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(26,51,40,0.06)] hover:-translate-y-1 hover:border-[#8caa98]/50 transition-all duration-300">
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#c5d8ce] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
<iconify-icon className="text-[#3d6b57] mb-5 block relative z-10" height="2rem" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
<h3 className="font-['Syne'] text-lg font-semibold text-[#1a3328] tracking-tight mb-2 relative z-10">Research deeply</h3>
<p className="text-xs text-[#4a4a4a] leading-relaxed mb-6 relative z-10 max-w-[90%]">University research groups with applied capacity and a relevant domain focus.</p>
<a className="inline-flex items-center gap-2 font-['Syne'] text-xs font-semibold tracking-widest uppercase text-[#1a3328] hover:text-[#3d6b57] pb-0.5 border-b border-[#1a3328]/30 hover:border-[#3d6b57] transition-all relative z-10" href="#">
                    Apply as Research <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
<p className="text-center text-xs text-[#8a8a8a] mt-10 max-w-2xl mx-auto leading-relaxed">
            Participants join framing sessions, co-shape concepts, test prototypes, give structured feedback, and see how decisions are made. <strong className="font-semibold text-[#4a4a4a]">Time is compensated where relevant.</strong>
</p>
</div>
</section>

<section className="bg-[#1a3328] py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-1.5 font-['Syne'] text-xs font-medium tracking-widest uppercase bg-[#254b3b] text-[#c5d8ce] border border-[#3d6b57] px-3 py-1 rounded-full mb-4">
                What Makes This Different
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">This is not a network</h2>
<p className="text-base text-[#c5d8ce] max-w-xl mx-auto leading-relaxed">Typical communities offer inspiration. This model offers access to IKEA's real assets in exchange for real contribution.</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-[#254b3b]/30 rounded-2xl overflow-hidden max-w-4xl mx-auto border border-[#254b3b]">
<div className="bg-white/5 p-8 md:p-12 backdrop-blur-sm">
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#8caa98] mb-6 block">Typical communities offer</span>
<ul className="flex flex-col gap-4">
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Inspiration and keynote talks
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Networking without structure
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> High-level knowledge sharing
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Visibility and logo placement
                    </li>
<li className="text-sm text-white/50 flex items-start gap-3 leading-relaxed">
<span className="text-white/30 shrink-0 mt-[0.125rem] text-xs">×</span> Open-ended collaboration with no output
                    </li>
</ul>
</div>
<div className="bg-[#254b3b] p-8 md:p-12">
<span className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#f0d44a] mb-6 block">IKEA Xplore offers</span>
<ul className="flex flex-col gap-4">
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Access to real category and behavioural data
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Real customer testing with a defined cohort
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Direct access to portfolio owners
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> A structured pathway to partnership
                    </li>
<li className="text-sm text-white flex items-start gap-3 leading-relaxed">
<span className="text-[#f0d44a] font-bold shrink-0 mt-[0.125rem] text-xs">✓</span> Clear decision timelines (go/no-go)
                    </li>
</ul>
</div>
</div>
<div className="text-center mt-12">
<p className="font-['Syne'] text-lg font-semibold text-white italic mb-1">"It is not about being part of something."</p>
<span className="text-xs text-[#c5d8ce]">It is about access to IKEA's real assets in exchange for real contribution.</span>
</div>
</div>
</section>

<section className="bg-[#f5f1eb] py-24 px-6" id="partners">
<div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
<div className="flex flex-col">
<span className="inline-flex self-start items-center gap-1.5 font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase bg-[#e8f0ec] text-[#254b3b] border border-[#c5d8ce] px-3 py-1 rounded-full mb-6">
                The Copenhagen Ecosystem
            </span>
<h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#1a3328] tracking-tight leading-tight mb-4">The people behind the pilot</h2>
<p className="text-sm text-[#8a8a8a] italic mb-2">We are not looking for observers.</p>
<p className="text-sm font-medium text-[#4a4a4a] mb-10 leading-relaxed">We are inviting participants who bring expertise relevant to how Copenhagen lives.</p>
<div className="flex flex-col gap-4">
<div className="flex gap-4 p-5 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-all">
<div className="w-10 h-10 shrink-0 bg-[#1a3328] text-[#c5d8ce] rounded-lg flex items-center justify-center">
<iconify-icon height="1.25rem" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
<div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-1.5">IKEA Core Team</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">Portfolio Owner · Product Developer · Senior Designer · Retail Logistics. These people define the case and own the decision.</p>
</div>
</div>
<div className="flex gap-4 p-5 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] hover:shadow-[0_4px_16px_rgba(26,51,40,0.04)] transition-all">
<div className="w-10 h-10 shrink-0 bg-[#1a3328] text-[#c5d8ce] rounded-lg flex items-center justify-center">
<iconify-icon height="1.25rem" icon="solar:sunset-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
<div>
<h4 className="font-['Syne'] text-sm font-semibold text-[#1a3328] mb-1.5">The Copenhagen Community</h4>
<p className="text-xs text-[#4a4a4a] leading-relaxed">100 urban residents · 5 local designers · 2 circular startups · 1 research group. A focused, diverse ecosystem.</p>
</div>
</div>
</div>
<div className="mt-8 text-[0.8125rem] text-[#4a4a4a] leading-relaxed p-4 bg-[#e8f0ec] border-l-2 border-[#3d6b57] rounded-r-lg">
                Participants join framing sessions, co-shape concepts, test prototypes, give structured feedback. <strong className="font-semibold text-[#1a3328]">Time is compensated where relevant.</strong>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="font-['Syne'] text-[0.625rem] font-bold tracking-widest uppercase text-[#3d6b57] mb-2">Copenhagen partner institutions</div>

<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">DTU</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Technical University</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Research</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:bank-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">KADK</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Royal Danish Academy</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Design</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">Ørsted</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Sustainable Energy</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Corporate</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:ship-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">Maersk</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Urban Logistics</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Corporate</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white border border-[#d6dbd8]/60 rounded-xl hover:border-[#8caa98] transition-all">
<div className="w-9 h-9 shrink-0 bg-[#e8f0ec] text-[#3d6b57] rounded-md flex items-center justify-center">
<iconify-icon height="1.1rem" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h5 className="font-['Syne'] text-xs font-semibold text-[#1a3328]">Reffen</h5>
<p className="text-[0.6875rem] text-[#8a8a8a]">Community Activation</p>
</div>
<span className="ml-auto text-[0.625rem] font-semibold tracking-widest uppercase text-[#3d6b57] bg-[#e8f0ec] px-2 py-0.5 rounded-full whitespace-nowrap">Community</span>
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
                    Xplore Community
                </div>
<p className="text-xs text-[#c5d8ce] leading-relaxed max-w-xs">Copenhagen is our starting point. Over 18 weeks, we explore one clear question with real people — and share everything we learn with other studios.</p>
</div>
<div>
<h5 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">About</h5>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">What is Xplore</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">The Copenhagen Pilot</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">Our Methodology</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">The IKEA Assets</a></li>
</ul>
</div>
<div>
<h5 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">Participate</h5>
<ul className="flex flex-col gap-2.5">
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">For Designers</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">For Research</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">For Members</a></li>
<li><a className="text-xs text-white/60 hover:text-white transition-colors" href="#">For Partners</a></li>
</ul>
</div>
<div>
<h5 className="font-['Syne'] text-[0.625rem] font-semibold tracking-widest uppercase text-[#8caa98] mb-4">Contact</h5>
<address className="not-italic text-xs text-white/60 leading-relaxed">
                    IKEA Xplore Studio<br/>
                    Copenhagen, Denmark<br/>
<a className="hover:text-white transition-colors mt-1 inline-block" href="mailto:xplore@ingka.com">xplore@ingka.com</a>
</address>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[0.6875rem] text-[#3d6b57]">© 2025 Ingka Holding B.V. — Xplore Community Copenhagen Pilot</p>
<div className="flex gap-2 langs-toggle">
<button className="active text-[0.6875rem] font-medium text-white border border-[#8caa98] bg-transparent px-2 py-0.5 rounded transition-colors">EN</button>
<button className="text-[0.6875rem] font-medium text-[#c5d8ce] border border-[#254b3b] bg-transparent px-2 py-0.5 rounded hover:border-[#8caa98] hover:text-white transition-colors">DA</button>
</div>
</div>
</div>
</footer>



    </>
  );
}
