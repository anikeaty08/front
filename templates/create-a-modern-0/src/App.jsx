import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Scroll Reveal Animation
            const revealElements = document.querySelectorAll('.reveal-up');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => revealObserver.observe(el));

            // FAQ Accordion Logic
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const button = item.querySelector('.faq-button');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');
                const title = item.querySelector('span');

                button.addEventListener('click', () => {
                    const isOpen = !content.classList.contains('hidden');
                    
                    // Close all others
                    faqItems.forEach(otherItem => {
                        otherItem.querySelector('.faq-content').classList.add('hidden');
                        otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                        otherItem.querySelector('span').classList.remove('text-[#F5A623]');
                        otherItem.classList.remove('border-[#F5A623]', 'shadow-sm');
                    });

                    // Toggle current
                    if (!isOpen) {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(180deg)';
                        title.classList.add('text-[#F5A623]');
                        item.classList.add('border-[#F5A623]', 'shadow-sm');
                    }
                });
            });

            // Stat Counter Animation
            const counters = document.querySelectorAll('.stat-counter');
            let hasCounted = false;

            const animateCounters = () => {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
            };

            const statsContainer = document.getElementById('stats-container');
            if(statsContainer) {
                const statsObserver = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting && !hasCounted) {
                        animateCounters();
                        hasCounted = true;
                    }
                }, { threshold: 0.5 });
                statsObserver.observe(statsContainer);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-card border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0057FF] to-[#00A3FF] flex items-center justify-center text-white font-display font-semibold text-lg shadow-md shadow-[#0057FF]/20">A</div>
<span className="font-display font-semibold tracking-tighter text-slate-900 text-lg">AGENTFORCE<span className="text-[#0057FF]">.</span></span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#0057FF] transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-[#0057FF] transition-colors" href="#process">Process</a>
<a className="hover:text-[#0057FF] transition-colors" href="#services">Services</a>
<a className="hover:text-[#0057FF] transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0057FF] rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-[#0057FF]/30 transition-all duration-300" href="#contact">
                    Get Started
                </a>
<button className="md:hidden text-slate-900 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F5A623]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0057FF]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-dot-pattern opacity-40 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col items-start reveal-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
</span>
<span className="text-xs font-medium text-slate-700 tracking-tight">Salesforce Agentforce Experts</span>
</div>
<h1 className="text-5xl lg:text-6xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Power Your Business with <span className="text-gradient">Agentforce</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-light">
                        Unlock the full potential of AI-driven automation. We specialize in implementing, optimizing, and scaling Agentforce to align perfectly with your business goals.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-[#F5A623] rounded-full hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" href="#contact">
                            Get Started
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#0057FF] bg-transparent border border-[#0057FF]/30 rounded-full hover:bg-blue-50 hover:border-[#0057FF] transition-all duration-300" href="#process">
                            See How It Works
                            <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-[500px] flex items-center justify-center reveal-up" style={{transitionDelay: '200ms'}}>

<div className="relative w-full max-w-md h-[400px] glass-card rounded-2xl border border-white/50 shadow-2xl shadow-[#0057FF]/10 overflow-hidden bg-white/40">
<div className="absolute top-0 w-full h-12 border-b border-slate-200/50 flex items-center px-4 gap-2 bg-white/50">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="p-6 pt-16 h-full flex flex-col gap-4">

<div className="h-32 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 relative overflow-hidden flex items-end p-4">
<svg className="w-full h-16 absolute bottom-0 left-0 text-[#0057FF]" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path className="animate-dash" d="M0,100 Q10,80 20,90 T40,60 T60,70 T80,30 T100,40" fill="none" strokeLinecap="round"></path>
<path d="M0,100 Q10,80 20,90 T40,60 T60,70 T80,30 T100,40 L100,100 L0,100 Z" fill="url(#grad)" opacity="0.1" stroke="none"></path>
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0057FF" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#0057FF" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2">
<iconify-icon className="text-[#F5A623] text-xl" icon="solar:rocket-linear"></iconify-icon>
<span className="text-xs text-slate-500 font-medium">Deployment</span>
<span className="text-lg font-display font-semibold tracking-tight">Active</span>
</div>
<div className="bg-[#0057FF] rounded-xl p-4 shadow-sm shadow-[#0057FF]/30 flex flex-col gap-2 text-white">
<iconify-icon className="text-white/80 text-xl" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs text-white/80 font-medium">Optimization</span>
<span className="text-lg font-display font-semibold tracking-tight">+45% ROI</span>
</div>
</div>
<div className="mt-auto h-8 rounded-full bg-slate-100 w-3/4 animate-pulse"></div>
</div>
</div>

<div className="absolute -right-6 top-1/4 glass-card p-3 rounded-xl shadow-lg border border-white flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623]">
<iconify-icon className="text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-800 tracking-tight">AI Agent</p>
<p className="text-[10px] text-slate-500">Configured</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200 bg-slate-50 overflow-hidden flex flex-col items-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Trusted by Leading Brands</p>
<div className="w-full max-w-7xl relative mask-edges">
<div className="flex w-[200%] animate-marquee pause-on-hover items-center">

<div className="flex w-1/2 justify-around items-center">
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">ACME CORP</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">GLOBEX</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">SOYLENT</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">INITECH</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">UMBRELLA</span>
</div>

<div className="flex w-1/2 justify-around items-center">
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">ACME CORP</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">GLOBEX</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">SOYLENT</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">INITECH</span>
<span className="font-display font-semibold text-xl tracking-tighter text-slate-400">UMBRELLA</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
                        Is Your Agentforce Underperforming?
                    </h2>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto font-light">
                        Many businesses invest in AI tools but fail to see the promised returns due to poor setup and misalignment.
                    </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-stretch reveal-up">

<div className="bg-red-50/50 rounded-2xl p-8 md:p-12 border border-red-100 flex flex-col gap-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full"></div>
<h3 className="text-xl font-display font-medium text-slate-800 tracking-tight border-b border-red-200/50 pb-4">Common Pitfalls</h3>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">Slow or Failed Rollouts</h4>
<p className="text-sm text-slate-600 mt-1 font-light">Implementations taking months instead of weeks, stalled by technical debt.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-red-500 text-lg" icon="solar:user-cross-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">Agents Misaligned</h4>
<p className="text-sm text-slate-600 mt-1 font-light">AI responses lacking business context, leading to poor customer experiences.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-red-500 text-lg" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">Poor ROI on Investment</h4>
<p className="text-sm text-slate-600 mt-1 font-light">Paying for premium Salesforce features but utilizing only a fraction of their power.</p>
</div>
</div>
</div>

<div className="bg-blue-50/50 rounded-2xl p-8 md:p-12 border border-blue-100 flex flex-col gap-6 relative overflow-hidden shadow-lg shadow-[#0057FF]/5">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#0057FF]/5 rounded-bl-full"></div>
<h3 className="text-xl font-display font-medium text-[#0057FF] tracking-tight border-b border-blue-200/50 pb-4">Here's How We Fix That</h3>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-[#0057FF] text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">Rapid, Agile Deployment</h4>
<p className="text-sm text-slate-600 mt-1 font-light">Strategic blueprints that cut implementation time by up to 60%.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-[#0057FF] text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">Hyper-Tuned Workflows</h4>
<p className="text-sm text-slate-600 mt-1 font-light">Custom prompting and deep data integration so agents act like top performers.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-[#0057FF] text-lg" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">Maximized Performance</h4>
<p className="text-sm text-slate-600 mt-1 font-light">Continuous monitoring and scaling to ensure immediate and growing ROI.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal-up">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900 inline-block relative">
                        Our Proven 4-Step Process
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F5A623] rounded-full opacity-80"></span>
</h2>
</div>

<div className="relative reveal-up">

<div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] border-t-2 border-dashed border-[#F5A623] opacity-30 z-0"></div>

<div className="md:hidden absolute top-0 left-[44px] w-[2px] h-full border-l-2 border-dashed border-[#F5A623] opacity-30 z-0"></div>
<div className="grid md:grid-cols-4 gap-10 md:gap-6 relative z-10">

<div className="group flex flex-row md:flex-col items-start gap-6 relative">
<div className="w-24 h-24 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center relative group-hover:border-[#F5A623] group-hover:shadow-lg group-hover:shadow-[#F5A623]/20 transition-all duration-300">
<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F5A623] text-slate-900 text-sm font-display font-semibold flex items-center justify-center border-4 border-slate-50">1</span>
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#0057FF] transition-colors duration-300" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-display font-medium text-slate-900 mb-2">Discovery &amp; Audit</h3>
<p className="text-sm text-slate-600 font-light">We deep-dive into your current Salesforce setup, business goals, and identify gaps and opportunities.</p>
</div>
</div>

<div className="group flex flex-row md:flex-col items-start gap-6 relative">
<div className="w-24 h-24 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center relative group-hover:border-[#0057FF] group-hover:shadow-lg group-hover:shadow-[#0057FF]/20 transition-all duration-300">
<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F5A623] text-slate-900 text-sm font-display font-semibold flex items-center justify-center border-4 border-slate-50">2</span>
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#F5A623] transition-colors duration-300" icon="solar:map-arrow-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-display font-medium text-slate-900 mb-2">Strategy &amp; Blueprint</h3>
<p className="text-sm text-slate-600 font-light">We design a custom Agentforce roadmap tailored specifically to your workflows and objectives.</p>
</div>
</div>

<div className="group flex flex-row md:flex-col items-start gap-6 relative">
<div className="w-24 h-24 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center relative group-hover:border-[#F5A623] group-hover:shadow-lg group-hover:shadow-[#F5A623]/20 transition-all duration-300">
<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F5A623] text-slate-900 text-sm font-display font-semibold flex items-center justify-center border-4 border-slate-50">3</span>
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#0057FF] transition-colors duration-300" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-display font-medium text-slate-900 mb-2">Implementation</h3>
<p className="text-sm text-slate-600 font-light">Our experts deploy and integrate Agentforce seamlessly into your existing systems with zero disruption.</p>
</div>
</div>

<div className="group flex flex-row md:flex-col items-start gap-6 relative">
<div className="w-24 h-24 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center relative group-hover:border-[#0057FF] group-hover:shadow-lg group-hover:shadow-[#0057FF]/20 transition-all duration-300">
<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#F5A623] text-slate-900 text-sm font-display font-semibold flex items-center justify-center border-4 border-slate-50">4</span>
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#F5A623] transition-colors duration-300" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-display font-medium text-slate-900 mb-2">Optimize &amp; Scale</h3>
<p className="text-sm text-slate-600 font-light">We continuously monitor, fine-tune, and scale your Agentforce setup for maximum ROI and performance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-[#0057FF]">
                        Specialized Services
                    </h2>
<p className="mt-4 text-base text-slate-500 font-light max-w-2xl">
                        Whether you are starting from scratch or looking to extract more value from your current setup, we have the expertise to deliver.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8 reveal-up">

<div className="group relative bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0057FF]/10 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5A623] to-[#0057FF] transform origin-left scale-x-100 opacity-80"></div>
<div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#0057FF]" icon="solar:widget-add-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-medium text-slate-900 mb-4 tracking-tight">Agentforce Implementation</h3>
<p className="text-base text-slate-600 font-light mb-8">
                            End-to-end deployment of Salesforce Agentforce tailored to your business processes. We handle architecture, integration, data mapping, and initial agent prompting to ensure a flawless launch.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#F5A623] text-lg" icon="solar:check-read-linear"></iconify-icon> Custom Blueprint Design
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#F5A623] text-lg" icon="solar:check-read-linear"></iconify-icon> Seamless Systems Integration
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#F5A623] text-lg" icon="solar:check-read-linear"></iconify-icon> Team Training &amp; Handover
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#0057FF] group-hover:text-[#F5A623] transition-colors" href="#contact">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F5A623]/10 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0057FF] to-[#F5A623] transform origin-left scale-x-100 opacity-80"></div>
<div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#F5A623]" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-medium text-slate-900 mb-4 tracking-tight">Agentforce Optimization</h3>
<p className="text-base text-slate-600 font-light mb-8">
                            Fine-tune and maximize the performance of your existing setup. We audit your workflows, refine agent logic, and eliminate friction to drastically improve accuracy and ROI.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#0057FF] text-lg" icon="solar:check-read-linear"></iconify-icon> Performance &amp; Accuracy Audit
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#0057FF] text-lg" icon="solar:check-read-linear"></iconify-icon> Advanced Prompt Engineering
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-[#0057FF] text-lg" icon="solar:check-read-linear"></iconify-icon> Continuous Scaling Strategy
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#0057FF] group-hover:text-[#F5A623] transition-colors" href="#contact">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-50/50 border-y border-blue-100/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-100/50 reveal-up" id="stats-container">
<div className="text-center px-4">
<div className="text-4xl md:text-5xl font-display font-semibold text-[#F5A623] tracking-tight mb-2 flex justify-center items-baseline">
<span className="stat-counter" data-target="50">0</span>+
                        </div>
<p className="text-sm font-medium text-slate-800">Implementations</p>
</div>
<div className="text-center px-4">
<div className="text-4xl md:text-5xl font-display font-semibold text-[#F5A623] tracking-tight mb-2 flex justify-center items-baseline">
<span className="stat-counter" data-target="98">0</span>%
                        </div>
<p className="text-sm font-medium text-slate-800">Client Satisfaction</p>
</div>
<div className="text-center px-4">
<div className="text-4xl md:text-5xl font-display font-semibold text-[#F5A623] tracking-tight mb-2 flex justify-center items-baseline">
<span className="stat-counter" data-target="3">0</span>x
                        </div>
<p className="text-sm font-medium text-slate-800">Faster Deployment</p>
</div>
<div className="text-center px-4">
<div className="text-4xl md:text-5xl font-display font-semibold text-[#F5A623] tracking-tight mb-2 flex justify-center items-baseline">
<span className="stat-counter" data-target="24">0</span>/7
                        </div>
<p className="text-sm font-medium text-slate-800">Support Availability</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-slate-900">
                        Don't Just Take Our Word For It
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal-up">

<div className="bg-white p-8 rounded-2xl border border-slate-100 border-l-4 border-l-[#0057FF] shadow-md shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#F5A623]/20" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex gap-1 mb-4 text-[#F5A623]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                            "AgentForce Solutions completely transformed our customer service operations. Their optimization strategies doubled our agent resolution rate within a month."
                        </p>
<div>
<p className="font-medium text-slate-900 text-sm">Sarah Jenkins</p>
<p className="text-xs text-slate-500">VP of Operations, TechFlow</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 border-l-4 border-l-[#0057FF] shadow-md shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#F5A623]/20" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex gap-1 mb-4 text-[#F5A623]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                            "The implementation was incredibly smooth. They understood our complex data structure and configured the AI to handle queries we thought were impossible."
                        </p>
<div>
<p className="font-medium text-slate-900 text-sm">David Chen</p>
<p className="text-xs text-slate-500">CTO, RetailPlus</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 border-l-4 border-l-[#0057FF] shadow-md shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#F5A623]/20" icon="solar:quote-left-linear"></iconify-icon>
<div className="flex gap-1 mb-4 text-[#F5A623]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                            "We had a botched rollout previously. This team came in, audited the mess, and gave us a blueprint that got us back on track in weeks. True experts."
                        </p>
<div>
<p className="font-medium text-slate-900 text-sm">Elena Rodriguez</p>
<p className="text-xs text-slate-500">Director of IT, Horizon Finance</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/50" id="faq">
<div className="max-w-3xl mx-auto px-6 reveal-up">
<div className="text-center mb-12">
<h2 className="text-3xl font-display font-semibold tracking-tight text-slate-900 mb-4">Common Questions</h2>
<p className="text-slate-500 text-sm font-light">Everything you need to know about our services.</p>
</div>
<div className="space-y-4">

<div className="faq-item bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-medium text-slate-800 text-base">How long does Agentforce implementation take?</span>
<iconify-icon className="faq-icon text-slate-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed">
                            Timeline varies based on your existing Salesforce architecture and the complexity of workflows, but our typical deployment ranges from 4 to 8 weeks. We prioritize agile, phased rollouts to show value quickly.
                        </div>
</div>

<div className="faq-item bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-medium text-slate-800 text-base">Do you work with businesses new to Salesforce?</span>
<iconify-icon className="faq-icon text-slate-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed">
                            Yes. While our core expertise is Agentforce, our architects can assist with foundational Salesforce setup to ensure the environment is perfectly primed for AI integration.
                        </div>
</div>

<div className="faq-item bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-medium text-slate-800 text-base">What makes your optimization service different?</span>
<iconify-icon className="faq-icon text-slate-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed">
                            We don't just look at technical settings. We audit the alignment between AI output and your business goals, applying advanced prompt engineering and data mapping that most generic agencies overlook.
                        </div>
</div>

<div className="faq-item bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button className="faq-button w-full flex items-center justify-between p-6 text-left focus:outline-none">
<span className="font-medium text-slate-800 text-base">Can you integrate Agentforce with our existing tools?</span>
<iconify-icon className="faq-icon text-slate-400 text-xl transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-sm text-slate-600 font-light leading-relaxed">
                            Absolutely. Agentforce is most powerful when it has access to complete data. We build secure, robust integrations with ERPs, marketing platforms, and custom databases via MuleSoft or direct APIs.
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#F5A623] to-[#0057FF]">
<div className="absolute inset-0 bg-dot-pattern-white opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal-up">
<h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
                    Ready to Transform Your Salesforce Experience?
                </h2>
<p className="text-lg text-white/90 mb-10 font-light max-w-2xl mx-auto">
                    Let's build something powerful together. Stop leaving ROI on the table and start maximizing your AI capabilities today.
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0057FF] bg-white rounded-full hover:bg-[#F5A623] hover:text-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" href="#contact">
                    Book a Free Consultation
                </a>
</div>
</section>
</main>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="font-display font-semibold tracking-tighter text-slate-900 text-xl">AGENTFORCE<span className="text-[#0057FF]">.</span></span>
</div>
<p className="text-sm text-slate-500 font-light max-w-sm mb-6">
                        Your Agentforce Growth Partner. We build, optimize, and scale intelligent AI systems for forward-thinking enterprises.
                    </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-[#F5A623] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:plain-2-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#F5A623] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:basketball-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#F5A623] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Implementation</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Optimization</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Auditing</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Custom Integration</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-[#0057FF] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400 font-light">
                    © 2024 AgentForce Solutions. All rights reserved.
                </p>
<div className="flex gap-6 text-xs text-slate-400 font-light">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
