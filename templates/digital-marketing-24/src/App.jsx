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



        // Pricing Toggle Logic
        const toggle = document.getElementById('billing-toggle');
        const priceElements = document.querySelectorAll('.price-display');
        
        toggle.addEventListener('change', (e) => {
            const isYearly = e.target.checked;
            priceElements.forEach(el => {
                el.innerText = isYearly ? el.dataset.yearly : el.dataset.monthly;
                el.classList.add('scale-110', 'text-indigo-400');
                setTimeout(() => {
                    el.classList.remove('scale-110', 'text-indigo-400');
                    el.classList.add('transition-all', 'duration-300');
                }, 100);
            });
        });

        // Modal Logic
        const modal = document.getElementById('main-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalLabel2 = document.getElementById('modal-field-label');
        const modalInput2 = document.getElementById('modal-field-input');
        const modalSubmitBtn = document.getElementById('modal-submit-btn');
        const modalForm = document.getElementById('modal-form');

        function openModal(context) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';

            // Reset Form
            modalForm.reset();
            const btnText = modalSubmitBtn.querySelector('span');
            if(btnText) btnText.innerText = "Submit Request";

            if (context === 'Login') {
                modalTitle.innerText = "Welcome back";
                modalDesc.innerText = "Enter your credentials to access the dashboard.";
                modalLabel2.innerText = "Password";
                modalInput2.type = "password";
                modalInput2.placeholder = "••••••••";
                if(btnText) btnText.innerText = "Log in";
            } else {
                modalTitle.innerText = context ? context : 'Get Started';
                modalDesc.innerText = "Leave your details and we'll audit your current setup.";
                modalLabel2.innerText = "Website";
                modalInput2.type = "text";
                modalInput2.placeholder = "company.com";
                if(btnText) btnText.innerText = "Submit Request";
            }
        }

        function closeModal() {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }

        // Form Submission Logic
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btnSpan = modalSubmitBtn.querySelector('span');
            const originalText = btnSpan.innerText;
            
            // Loading State
            btnSpan.innerText = "";
            const spinner = document.createElement('span');
            spinner.className = 'spinner';
            modalSubmitBtn.appendChild(spinner);
            modalSubmitBtn.disabled = true;

            // Simulate Network Request
            setTimeout(() => {
                modalSubmitBtn.removeChild(spinner);
                btnSpan.innerText = "Success!";
                modalSubmitBtn.classList.remove('bg-white', 'text-black');
                modalSubmitBtn.classList.add('bg-emerald-500', 'text-white');
                
                setTimeout(() => {
                    closeModal();
                    // Reset button style after close
                    setTimeout(() => {
                        modalSubmitBtn.disabled = false;
                        btnSpan.innerText = originalText;
                        modalSubmitBtn.classList.add('bg-white', 'text-black');
                        modalSubmitBtn.classList.remove('bg-emerald-500', 'text-white');
                    }, 500);
                }, 800);
            }, 1500);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // Mobile Menu Logic
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            }
        }

        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white text-lg font-medium tracking-tighter hover:opacity-80 transition-opacity z-50 relative" href="#">
                    GROWTH
                </a>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Method</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium hover:text-white transition-colors" onclick="openModal('Login')">Log in</button>
<button className="group relative px-4 py-2 text-sm text-white bg-white/10 rounded-full overflow-hidden transition-all hover:bg-white/15 border border-white/10" onclick="openModal('Start scaling')">
<span className="relative z-10 font-medium">Start scaling</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 ease-out"></div>
</button>
</div>

<button className="md:hidden z-50 relative p-2 text-white/70 hover:text-white" id="mobile-menu-btn">
<span className="iconify w-6 h-6" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex items-center justify-center md:hidden" id="mobile-menu">
<div className="flex flex-col items-center gap-8 text-xl font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#process" onclick="toggleMobileMenu()">Method</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#pricing" onclick="toggleMobileMenu()">Pricing</a>
<div className="w-12 h-px bg-white/10 my-2"></div>
<button className="text-neutral-400 hover:text-white" onclick="toggleMobileMenu(); openModal('Login')">Log in</button>
<button className="text-white bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-500 transition-colors" onclick="toggleMobileMenu(); openModal('Start scaling')">Start scaling</button>
</div>
</div>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center px-4" id="main-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="modal-content relative w-full max-w-lg bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl p-8 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-20" onclick="closeModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-strokeWidth="1.5"></span>
</button>
<h3 className="text-2xl font-medium text-white mb-2 relative z-10" id="modal-title">Get started</h3>
<p className="text-neutral-400 text-sm mb-6 relative z-10" id="modal-desc">Leave your details and we'll audit your current setup.</p>
<form className="space-y-4 relative z-10" id="modal-form">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 uppercase tracking-wide">Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 uppercase tracking-wide" id="modal-field-label">Website</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm" id="modal-field-input" placeholder="company.com" required="" type="text"/>
</div>
<button className="w-full bg-white text-black font-medium py-2.5 rounded-lg hover:bg-neutral-200 transition-all mt-2 text-sm flex items-center justify-center gap-2" id="modal-submit-btn" type="submit">
<span>Submit Request</span>
</button>
</form>
</div>
</div>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-slide-up cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Now accepting new enterprise partners
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-8 animate-slide-up delay-100">
                Marketing driven by <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 via-white to-white/50">intelligence.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-200">
                We blend creative strategy with algorithmic precision to scale revenue for forward-thinking brands. No fluff, just measurable growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" onclick="openModal('Audit your site')">
                    Audit your site
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex justify-center" href="#process">
                    View method
                </a>
</div>
</section>

<section className="mt-24 border-y border-white/5 bg-white/[0.02] select-none">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-500 mb-8">Trusted by next-gen companies</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">volts</span>
<span className="text-xl font-semibold tracking-tighter text-white">KYLIN</span>
<span className="text-xl font-semibold tracking-tighter text-white">focal</span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need to scale</h2>
<p className="text-neutral-400 max-w-xl">Our modular approach allows us to plug into your existing stack or build a growth engine from the ground up.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 group relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-300">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<span className="iconify w-64 h-64 text-indigo-500" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 mb-6 text-indigo-400">
<span className="iconify w-6 h-6" data-icon="lucide:trending-up" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Performance Marketing</h3>
<p className="text-neutral-400 max-w-md">Data-driven campaigns across Meta, Google, and LinkedIn. We optimize for ROAS, not just clicks, ensuring every dollar spent contributes to your bottom line.</p>
</div>
</div>
<div className="md:row-span-2 group relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-white/20 transition-colors duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 mb-6 text-purple-400">
<span className="iconify w-6 h-6" data-icon="lucide:bot" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Marketing Automation</h3>
<p className="text-neutral-400">Full-cycle lifecycle marketing. From onboarding sequences to retention loops, we build systems that nurture leads automatically 24/7.</p>
</div>
<div className="mt-8 relative h-40 w-full bg-white/5 rounded-lg border border-white/5 overflow-hidden">
<div className="absolute top-4 left-4 right-4 h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-2/3"></div>
</div>
<div className="absolute top-8 left-4 right-12 h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-500/50 w-1/2"></div>
</div>
<div className="absolute top-12 left-4 right-8 h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-500/30 w-3/4"></div>
</div>
</div>
</div>
<div className="group relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 mb-6 text-pink-400">
<span className="iconify w-6 h-6" data-icon="lucide:pen-tool" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Content Strategy</h3>
<p className="text-neutral-400 text-sm">SEO-optimized content that ranks and converts. We build topical authority for your brand.</p>
</div>
<div className="group relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors duration-300">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 mb-6 text-cyan-400">
<span className="iconify w-6 h-6" data-icon="lucide:pie-chart" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Analytics &amp; Attribution</h3>
<p className="text-neutral-400 text-sm">Crystal clear dashboards. Know exactly where your customers come from.</p>
</div>
</div>
</section>

<section className="relative py-24 border-y border-white/5 bg-white/[0.02]" id="process">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Precision targeting with <br/>proprietary data.</h2>
<div className="space-y-8">
<div className="flex gap-4 group cursor-default">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">1</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Audience Identification</h4>
<p className="text-sm text-neutral-400 leading-relaxed">We don't guess. We scrape, enrich, and segment data to find your exact Ideal Customer Profile (ICP).</p>
</div>
</div>
<div className="w-px h-8 bg-white/10 ml-4"></div>
<div className="flex gap-4 group cursor-default">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center border border-white/10">2</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Hypothesis Testing</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Rapid creative testing to identify winning hooks, angles, and formats within the first 14 days.</p>
</div>
</div>
<div className="w-px h-8 bg-white/10 ml-4"></div>
<div className="flex gap-4 group cursor-default">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center border border-white/10">3</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Scale &amp; Optimize</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Once validated, we uncapped budgets on winning channels while maintaining efficiency.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="relative z-10 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl p-6 overflow-hidden">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500">Live Campaign Data</div>
</div>
<div className="flex items-end justify-between h-48 gap-2 mb-6">
<div className="w-full bg-indigo-500/10 rounded-t-sm h-[40%] relative group cursor-pointer hover:bg-indigo-500/20 transition-all"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[60%] relative group cursor-pointer hover:bg-indigo-500/30 transition-all"></div>
<div className="w-full bg-indigo-500/10 rounded-t-sm h-[30%] relative group cursor-pointer hover:bg-indigo-500/20 transition-all"></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[75%] relative group cursor-pointer hover:bg-indigo-500/50 transition-all"></div>
<div className="w-full bg-indigo-500/10 rounded-t-sm h-[45%] relative group cursor-pointer hover:bg-indigo-500/20 transition-all"></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[90%] relative group cursor-pointer hover:bg-indigo-500/90 transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white/5 rounded p-3">
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Conv. Rate</div>
<div className="text-lg font-medium text-white">4.2%</div>
</div>
<div className="bg-white/5 rounded p-3">
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">CPA</div>
<div className="text-lg font-medium text-white">$12.50</div>
</div>
<div className="bg-white/5 rounded p-3">
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">ROAS</div>
<div className="text-lg font-medium text-emerald-400">+340%</div>
</div>
</div>
</div>
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-2xl -z-10 rounded-full"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-neutral-400 mb-8">Choose the plan that fits your growth stage.</p>
<div className="flex items-center justify-center gap-3">
<span className="text-sm text-neutral-400">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="billing-toggle">
<input className="sr-only peer" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
<span className="text-sm text-white font-medium">Yearly <span className="text-xs text-emerald-400 font-normal ml-1">(-20%)</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col hover:bg-neutral-900/50 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-neutral-500 mt-2">Perfect for validating new ideas.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white price-display" data-monthly="$2,500" data-yearly="$2,000">$2,500</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-neutral-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
                            Paid Social Management
                        </li>
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-neutral-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
                            Weekly Reporting
                        </li>
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-neutral-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
                            Basic Creative Assets
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-center text-sm hover:bg-white/5 transition-colors" onclick="openModal('Starter Plan')">Get Started</button>
</div>

<div className="relative p-8 rounded-2xl bg-[#0F0F0F] border border-indigo-500/30 flex flex-col shadow-[0_0_40px_-10px_rgba(79,70,229,0.15)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Growth</h3>
<p className="text-sm text-neutral-500 mt-2">For companies ready to scale fast.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white price-display" data-monthly="$5,000" data-yearly="$4,000">$5,000</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
<span className="text-neutral-200">Everything in Starter</span>
</li>
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
<span className="text-neutral-200">Paid Search (Google/Bing)</span>
</li>
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-indigo-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
<span className="text-neutral-200">Unlimited Creative Testing</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-center text-sm hover:bg-neutral-200 transition-colors" onclick="openModal('Growth Plan')">Get Started</button>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col hover:bg-neutral-900/50 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-neutral-500 mt-2">Full-service partnership.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-neutral-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
                            Omnichannel Strategy
                        </li>
<li className="flex items-start gap-3 text-sm">
<span className="iconify text-neutral-400 mt-0.5" data-icon="lucide:check" data-strokeWidth="2"></span>
                            Custom Data Pipelines
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium text-center text-sm hover:bg-white/5 transition-colors" onclick="openModal('Enterprise Plan')">Contact Sales</button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-32">
<div className="relative rounded-3xl overflow-hidden p-12 text-center bg-gradient-to-b from-neutral-900 to-black border border-white/10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to dominate your market?</h2>
<p className="text-neutral-400 text-lg mb-8 max-w-lg mx-auto">Book a free 30-minute strategy call. We'll audit your current setup and identify low-hanging fruit.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto" onclick="openModal('Strategy Call')">Book Strategy Call</button>
<button className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors w-full sm:w-auto" onclick="openModal('Generic Contact')">Email Us</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#030303] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-lg font-medium tracking-tighter mb-4 block" href="#">GROWTH</a>
<p className="text-sm text-neutral-500">
                        San Francisco, CA<br/>
                        Digital Growth Agency<br/>
                        © 2024
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Paid Search</a></li>
<li><a className="hover:text-white transition-colors" href="#">Social Ads</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEO</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-strokeWidth="1.5"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5"></span></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">Designed with precision.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
