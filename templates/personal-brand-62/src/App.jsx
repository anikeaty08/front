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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Pre-fill package selection
        function selectPackage(packageName) {
            const select = document.getElementById('packageSelect');
            for(let i=0; i < select.options.length; i++) {
                if(select.options[i].text.includes(packageName)) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }

        // Simulate Application Form Submission
        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = '<svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');

            setTimeout(() => {
                const form = document.getElementById('applicationForm');
                const successMsg = document.getElementById('successMessage');
                form.style.opacity = '0';
                form.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    form.classList.add('hidden');
                    successMsg.classList.remove('hidden');
                }, 300);
            }, 1500);
        }

        // Handle Signup and Launch Demo Dashboard
        function handleSignup(e) {
            e.preventDefault();
            const btn = document.getElementById('signupBtn');
            const nameInput = document.getElementById('demoName').value;
            const originalText = btn.innerHTML;

            // Loading state
            btn.innerHTML = '<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
            btn.disabled = true;

            setTimeout(() => {
                // Update Dashboard User Data
                document.getElementById('userNameDisplay').textContent = nameInput.split(' ')[0] || 'Creator';
                document.getElementById('userAvatar').textContent = nameInput.substring(0,2).toUpperCase() || 'ME';

                // Close Modal
                document.getElementById('authModal').close();
                
                // Show Dashboard with Animation
                const dashboard = document.getElementById('demoDashboard');
                dashboard.classList.remove('hidden');
                dashboard.classList.add('flex', 'dashboard-enter');
                
                // Reset Button
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        }

        function logout() {
            const dashboard = document.getElementById('demoDashboard');
            dashboard.classList.add('hidden');
            dashboard.classList.remove('flex', 'dashboard-enter');
            
            // Reset form
            document.getElementById('signupForm').reset();
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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0F19]/60">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group select-none" href="#">
<div className="relative w-9 h-9 flex-shrink-0">
<svg className="w-full h-full text-blue-600 group-hover:text-blue-500 transition-colors duration-300" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">

<circle cx="10" cy="10" fill="currentColor" r="7"></circle>

<rect fill="currentColor" height="30" rx="5.5" transform="rotate(25 23.5 21)" width="11" x="18" y="6"></rect>
</svg>
</div>
<div className="flex flex-col leading-[0.9]">
<span className="text-white font-semibold tracking-tight text-[19px]">velocity</span>
<span className="text-slate-400 font-light tracking-wide text-[17px]">upscale</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#problems">Problems</a>
<a className="hover:text-white transition-colors duration-200" href="#method">Method</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Packages</a>
<a className="hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-5">
<button className="hidden sm:flex flex-col items-end leading-none group cursor-pointer" onclick="document.getElementById('authModal').showModal()">
<span className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">Client Portal</span>
<span className="text-[10px] text-slate-500 group-hover:text-slate-400">Log in / Sign up</span>
</button>
<a className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] active:scale-95" href="#audit">
                    Apply Now
                    <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="pt-36 pb-20 px-6 relative overflow-hidden">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative z-10 text-center lg:text-left animate-fade-in">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white tracking-tighter leading-[1.05] mb-8 text-glow">
                    Turn views into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">paying clients.</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 font-light">
                    Stop posting for likes. We build personal brand systems that convert traffic into revenue, without you spending 20 hours a week on content.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-medium text-sm transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group" href="#audit">
                        Get Your Strategy
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-sm text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white transition-all text-center" href="#method">
                        How it works
                    </a>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#0B0F19] flex items-center justify-center text-white text-[10px] shadow-lg">JM</div>
<div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#0B0F19] flex items-center justify-center text-white text-[10px] shadow-lg">AK</div>
<div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-[#0B0F19] flex items-center justify-center text-white text-[10px] shadow-lg">+40</div>
</div>
<p className="opacity-80">Trust is built on systems, not luck.</p>
</div>
</div>

<div className="relative mt-8 lg:mt-0 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none opacity-60"></div>
<div className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-all duration-700 ease-out group">
<div className="bg-[#0B0F19] rounded-xl overflow-hidden border border-white/5 p-8 relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex justify-between items-start mb-10">
<div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1.5">Growth Metrics</div>
<div className="text-3xl text-white font-medium tracking-tight">Profile Conversion</div>
</div>
<div className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium rounded-full flex items-center gap-1.5 shadow-[0_0_10px_-2px_rgba(34,197,94,0.2)]">
                                +12.5% <i className="w-3.5 h-3.5" data-lucide="trending-up"></i>
</div>
</div>

<div className="h-52 flex items-end gap-3 justify-between mb-8 px-2">
<div className="w-full bg-blue-500/5 rounded-t-sm h-[30%] border-t border-blue-500/20"></div>
<div className="w-full bg-blue-500/10 rounded-t-sm h-[45%] border-t border-blue-500/20"></div>
<div className="w-full bg-blue-500/20 rounded-t-sm h-[40%] border-t border-blue-500/30"></div>
<div className="w-full bg-blue-500/30 rounded-t-sm h-[60%] border-t border-blue-500/40"></div>
<div className="w-full bg-blue-500/50 rounded-t-sm h-[55%] border-t border-blue-500/50"></div>
<div className="w-full bg-blue-500/70 rounded-t-sm h-[85%] relative border-t border-blue-500/60">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse"></div>
</div>
<div className="w-full bg-blue-500 rounded-t-sm h-[95%] shadow-[0_0_30px_rgba(59,130,246,0.5)] border-t border-blue-400 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="eye"></i> Reach
                                </div>
<div className="text-xl text-white font-medium tracking-tight">1.1M+</div>
</div>
<div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="users"></i> Leads
                                </div>
<div className="text-xl text-white font-medium tracking-tight">124/mo</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0F1623]/30" id="problems">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-5 leading-tight">Great Business,<br/>Invisible Brand?</h2>
<p className="text-slate-400 text-lg font-light">You're busy building. You don't have time to dance on TikTok. But being invisible is costing you deals.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] card-hover group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
</div>
<h3 className="text-white font-medium text-xl mb-3">The "No Time" Paradox</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                        Content creation feels like a second full-time job. You post sporadically, killing your algorithmic momentum.
                    </p>
<div className="pt-5 border-t border-white/5">
<div className="flex items-center gap-2.5 text-xs text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
<span><strong className="font-medium text-white">The Fix:</strong> 2hrs/month commitment.</span>
</div>
</div>
</div>

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] card-hover group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="users-2"></i>
</div>
</div>
<h3 className="text-white font-medium text-xl mb-3">Views ≠ Clients</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                        You had a reel go viral, but your Stripe dashboard is flat. You're attracting viewers, not buyers.
                    </p>
<div className="pt-5 border-t border-white/5">
<div className="flex items-center gap-2.5 text-xs text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
<span><strong className="font-medium text-white">The Fix:</strong> Profile funnel optimization.</span>
</div>
</div>
</div>

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] card-hover group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="ghost"></i>
</div>
</div>
<h3 className="text-white font-medium text-xl mb-3">The "Ghost" Founder</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                        Competitors are building in public and stealing your market share while your last post was from 2022.
                    </p>
<div className="pt-5 border-t border-white/5">
<div className="flex items-center gap-2.5 text-xs text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
<span><strong className="font-medium text-white">The Fix:</strong> Authority content pillars.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 relative" id="method">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-16 text-center">The Velocity Method</h2>
<div className="grid md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="relative pt-10 group cursor-default">
<div className="w-5 h-5 rounded-full bg-[#0B0F19] border-[3px] border-blue-600 absolute top-8 left-1/2 -translate-x-1/2 z-10 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300"></div>
<div className="p-6 rounded-2xl border border-white/5 bg-[#0F1623] hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-colors h-full">
<div className="text-blue-500 font-mono text-[10px] tracking-widest mb-3 font-semibold">PHASE 01</div>
<h4 className="text-white font-medium mb-2.5">Audit &amp; Diagnose</h4>
<p className="text-xs text-slate-400 leading-relaxed">Identify the exact bottlenecks in your bio, hooks, and content structure.</p>
</div>
</div>
<div className="relative pt-10 group cursor-default">
<div className="w-5 h-5 rounded-full bg-[#0B0F19] border-[3px] border-slate-700 group-hover:border-blue-500 absolute top-8 left-1/2 -translate-x-1/2 z-10 transition-colors duration-300 group-hover:scale-110"></div>
<div className="p-6 rounded-2xl border border-white/5 bg-[#0F1623] hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-colors h-full">
<div className="text-blue-500 font-mono text-[10px] tracking-widest mb-3 font-semibold">PHASE 02</div>
<h4 className="text-white font-medium mb-2.5">Clarify Positioning</h4>
<p className="text-xs text-slate-400 leading-relaxed">Refine who you are, who it's for, and why they should follow you now.</p>
</div>
</div>
<div className="relative pt-10 group cursor-default">
<div className="w-5 h-5 rounded-full bg-[#0B0F19] border-[3px] border-slate-700 group-hover:border-blue-500 absolute top-8 left-1/2 -translate-x-1/2 z-10 transition-colors duration-300 group-hover:scale-110"></div>
<div className="p-6 rounded-2xl border border-white/5 bg-[#0F1623] hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-colors h-full">
<div className="text-blue-500 font-mono text-[10px] tracking-widest mb-3 font-semibold">PHASE 03</div>
<h4 className="text-white font-medium mb-2.5">Build Systems</h4>
<p className="text-xs text-slate-400 leading-relaxed">Install content pillars, hook banks, and visual styles for consistency.</p>
</div>
</div>
<div className="relative pt-10 group cursor-default">
<div className="w-5 h-5 rounded-full bg-[#0B0F19] border-[3px] border-slate-700 group-hover:border-blue-500 absolute top-8 left-1/2 -translate-x-1/2 z-10 transition-colors duration-300 group-hover:scale-110"></div>
<div className="p-6 rounded-2xl border border-white/5 bg-[#0F1623] hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-colors h-full">
<div className="text-blue-500 font-mono text-[10px] tracking-widest mb-3 font-semibold">PHASE 04</div>
<h4 className="text-white font-medium mb-2.5">Scale &amp; Iterate</h4>
<p className="text-xs text-slate-400 leading-relaxed">Review data, double down on winning formats, and automate.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0B0F19]" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Transparent Pricing.</h2>
<p className="text-slate-400 text-lg font-light">Start with clarity, upgrade to full systems.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl border border-white/10 bg-[#0F1623] flex flex-col hover:border-white/20 transition-all duration-300 group">
<div className="mb-8">
<h3 className="text-lg text-white font-medium">Clarity Audit</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">₹3,999</span>
<span className="text-slate-500 text-sm">/one-time</span>
</div>
<p className="text-sm text-slate-400 mt-4 font-light">Perfect for identifying what's broken.</p>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Profile Conversion Audit
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Bio &amp; Highlights Fix
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 3 Quick-Win Action Steps
                        </li>
</ul>
<a className="w-full py-3.5 rounded-xl border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors text-center" href="#audit" onclick="selectPackage('Clarity Audit')">Get Audit</a>
</div>

<div className="p-8 rounded-3xl border border-blue-500/40 bg-[#0F1623] relative overflow-hidden flex flex-col shadow-2xl shadow-blue-900/20 transform md:-translate-y-4 transition-transform duration-300">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
<div className="absolute top-5 right-5 text-[10px] font-bold tracking-wider text-blue-200 bg-blue-500/10 px-2.5 py-1 rounded-md uppercase border border-blue-500/20">Popular</div>
<div className="mb-8 relative z-10">
<h3 className="text-lg text-white font-medium">Growth Structure</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">₹7,999</span>
<span className="text-slate-500 text-sm">/one-time</span>
</div>
<p className="text-sm text-slate-400 mt-4 font-light">For creators ready to build a content engine.</p>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1 relative z-10">
<li className="flex items-center gap-3">
<div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div> Everything in Clarity
                        </li>
<li className="flex items-center gap-3">
<div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div> Content Pillars Strategy
                        </li>
<li className="flex items-center gap-3">
<div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div> Hook Bank (20 Custom Hooks)
                        </li>
<li className="flex items-center gap-3">
<div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400"><i className="w-3 h-3" data-lucide="check"></i></div> Visual Style Guide
                        </li>
</ul>
<a className="relative z-10 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-[0_4px_20px_-4px_rgba(37,99,235,0.4)] hover:shadow-[0_4px_25px_-4px_rgba(37,99,235,0.5)] text-center" href="#audit" onclick="selectPackage('Growth Structure')">Choose Standard</a>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-[#0F1623] flex flex-col hover:border-white/20 transition-all duration-300 group">
<div className="mb-8">
<h3 className="text-lg text-white font-medium">Velocity System</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">₹11,999</span>
<span className="text-slate-500 text-sm">/one-time</span>
</div>
<p className="text-sm text-slate-400 mt-4 font-light">Complete overhaul and roadmap.</p>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Everything in Standard
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 30-Day Content Roadmap
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> 1:1 Strategy Call (60 min)
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Priority Support (7 Days)
                        </li>
</ul>
<a className="w-full py-3.5 rounded-xl border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors text-center" href="#audit" onclick="selectPackage('Velocity System')">Choose Premium</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="audit">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="grid lg:grid-cols-5 gap-0 bg-[#0F1623] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
<div className="lg:col-span-2 bg-[#131B2C] p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
<div>
<h3 className="text-2xl text-white font-medium mb-4">Apply for Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 font-light">
                            Tell us about your business. We manually review every application to ensure we can actually help you turn content into clients.
                        </p>
<div className="space-y-5">
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/10">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
                                Manual Profile Review
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/10">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
                                48hr Response Time
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/10">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
                                velocity.upscale1@gmail.com
                            </div>
</div>
</div>
</div>
<div className="lg:col-span-3 p-8 md:p-12 relative bg-[#0F1623]">
<form className="space-y-6" id="applicationForm" onsubmit="handleFormSubmit(event)">

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:placeholder-slate-500" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:placeholder-slate-500" placeholder="john@company.com" required="" type="email"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Instagram Handle</label>
<input className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:placeholder-slate-500" placeholder="@velocity.upscale" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">Selected Package</label>
<select className="w-full px-4 py-3 rounded-xl text-sm text-white bg-[#0F1623] text-slate-300 focus:text-white cursor-pointer appearance-none" id="packageSelect">
<option>Clarity Audit (₹3,999)</option>
<option selected="">Growth Structure (₹7,999)</option>
<option>Velocity System (₹11,999)</option>
<option>Custom / Not Sure</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 ml-1">What are you struggling with?</label>
<textarea className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 focus:placeholder-slate-500 resize-none" placeholder="I'm getting views but no leads..." required="" rows="3"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 mt-2 flex items-center justify-center gap-2 group" type="submit">
                            Submit Application
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>

<div className="hidden absolute inset-0 bg-[#0F1623] flex flex-col items-center justify-center p-12 text-center z-10" id="successMessage">
<div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/20 success-icon">
<i className="w-10 h-10" data-lucide="check"></i>
</div>
<h3 className="text-2xl text-white font-medium mb-3">Application Received</h3>
<p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                            We've received your details. Expect an email from <strong>velocity.upscale1@gmail.com</strong> within 48 hours.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl text-white font-medium mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] border border-white/10 rounded-xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-slate-200 font-medium text-sm select-none">
                        Do you guarantee results?
                        <span className="transition-transform group-open:rotate-180 opacity-50"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light">
                        We guarantee a system that increases your probability of success. We don't control the algorithm, but we control the strategy, hooks, and structure that are proven to work.
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/10 rounded-xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-slate-200 font-medium text-sm select-none">
                        Do I need to be on camera?
                        <span className="transition-transform group-open:rotate-180 opacity-50"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light">
                        Personal branding works best when people connect with *you*. However, we can design content pillars that minimize face time if necessary (voiceovers, b-roll, text-on-screen).
                    </div>
</details>
<details className="group bg-white/[0.02] border border-white/10 rounded-xl open:bg-white/[0.04] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-slate-200 font-medium text-sm select-none">
                        How do I pay?
                        <span className="transition-transform group-open:rotate-180 opacity-50"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light">
                        Once we review your application and ensure we're a good fit, we will send a secure payment link via email. Work begins immediately upon payment.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/5 bg-[#0B0F19]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
<div className="flex flex-col gap-5 text-center md:text-left">

<div className="flex items-center justify-center md:justify-start gap-3">
<div className="relative w-7 h-7 flex-shrink-0">
<svg className="w-full h-full text-blue-600" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" fill="currentColor" r="7"></circle>
<rect fill="currentColor" height="30" rx="5.5" transform="rotate(25 23.5 21)" width="11" x="18" y="6"></rect>
</svg>
</div>
<div className="flex flex-col leading-[0.9]">
<span className="text-white font-semibold tracking-tight text-base">velocity</span>
<span className="text-slate-500 font-light tracking-wide text-sm">upscale</span>
</div>
</div>
<a className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-medium" href="mailto:velocity.upscale1@gmail.com">
                    velocity.upscale1@gmail.com
                </a>
</div>
<div className="flex gap-10 text-xs text-slate-500 font-medium">
<a className="hover:text-slate-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-slate-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-slate-300 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-600 font-medium">
                © 2024 velocity.upscale. All rights reserved.
            </div>
</div>
</footer>

<dialog className="bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm open:animate-fade-in w-full max-w-sm m-auto" id="authModal">
<div className="bg-[#0F1623] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden mx-4">
<div className="flex justify-between items-center mb-6">
<h3 className="text-white font-medium text-lg">Create Account</h3>
<form method="dialog">
<button className="text-slate-500 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="x-circle"></i>
</button>
</form>
</div>
<form className="space-y-4" id="signupForm" onsubmit="handleSignup(event)">
<div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 leading-relaxed mb-4">
<i className="w-3.5 h-3.5 inline mr-1.5 relative -top-0.5" data-lucide="sparkles"></i>
                    Create a profile to access the Client Portal.
                </div>
<div>
<input className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600" id="demoName" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<input className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600" placeholder="Email Address" required="" type="email"/>
</div>
<div>
<input className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600" placeholder="Create Password" required="" type="password"/>
</div>
<div className="pt-2">
<button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2" id="signupBtn">
                        Create Profile
                    </button>
<p className="text-[10px] text-slate-500 text-center mt-4">
                        Already have an account? <span className="text-white cursor-pointer hover:underline">Log in</span>
</p>
</div>
</form>
</div>
</dialog>

<div className="fixed inset-0 z-[60] bg-[#0B0F19] hidden flex-col md:flex-row font-sans" id="demoDashboard">

<div className="w-full md:w-64 border-r border-white/5 bg-[#0F1623] p-6 flex flex-col justify-between h-auto md:h-full flex-shrink-0">
<div>
<div className="flex items-center gap-2.5 mb-10">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<span className="font-semibold text-white tracking-tight">velocity.app</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="layers"></i> Content Pillars
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i> Analytics
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i> Schedule
                    </a>
</nav>
</div>
<div className="hidden md:block">
<div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/5 mb-4">
<div className="text-xs font-medium text-white mb-1">Audit Status</div>
<div className="text-[10px] text-slate-400 mb-3">Your profile review is in progress.</div>
<div className="w-full bg-white/10 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full w-[60%]"></div>
</div>
</div>
<button className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-white text-sm font-medium w-full transition-colors" onclick="logout()">
<i className="w-4 h-4" data-lucide="log-out"></i> Sign Out
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-[#0B0F19] relative">
<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 md:px-10 sticky top-0 bg-[#0B0F19]/80 backdrop-blur-md z-10">
<div className="text-sm font-medium text-slate-400">Dashboard / Overview</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs text-white font-medium" id="userAvatar">JM</div>
</div>
</header>
<main className="p-6 md:p-10 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl text-white font-medium mb-1">Welcome back, <span id="userNameDisplay">Creator</span></h1>
<p className="text-sm text-slate-500">Here's what's happening with your personal brand today.</p>
</div>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-white/5 hover:bg-slate-200 transition-colors">
                        + New Post Idea
                    </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
<div className="p-6 rounded-xl border border-white/5 bg-[#0F1623]">
<div className="text-slate-400 text-xs font-medium mb-2 flex items-center justify-between">
                            Total Reach <i className="w-3 h-3 text-green-400" data-lucide="trending-up"></i>
</div>
<div className="text-2xl text-white font-semibold tracking-tight">24,502</div>
<div className="text-[10px] text-slate-500 mt-1">+12% vs last week</div>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-[#0F1623]">
<div className="text-slate-400 text-xs font-medium mb-2 flex items-center justify-between">
                            Engagement Rate <i className="w-3 h-3 text-slate-500" data-lucide="minus"></i>
</div>
<div className="text-2xl text-white font-semibold tracking-tight">4.2%</div>
<div className="text-[10px] text-slate-500 mt-1">Stable</div>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-[#0F1623]">
<div className="text-slate-400 text-xs font-medium mb-2 flex items-center justify-between">
                            Inbound Leads <i className="w-3 h-3 text-green-400" data-lucide="trending-up"></i>
</div>
<div className="text-2xl text-white font-semibold tracking-tight">18</div>
<div className="text-[10px] text-slate-500 mt-1">3 new today</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-white font-medium text-sm">Active Content Pillars</h3>
<button className="text-blue-500 text-xs hover:text-blue-400">View Strategy</button>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-white/5 bg-[#0F1623] hover:border-white/10 transition-colors group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<h4 className="text-white font-medium text-sm mb-1">Contrarian Takes</h4>
<p className="text-xs text-slate-500 leading-relaxed">Debunking common industry myths to establish authority.</p>
<div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 bg-white/5 w-fit px-2 py-1 rounded">
                                    Format: Twitter Thread / Carousel
                                </div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#0F1623] hover:border-white/10 transition-colors group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
<i className="w-4 h-4" data-lucide="monitor"></i>
</div>
<h4 className="text-white font-medium text-sm mb-1">Behind The Build</h4>
<p className="text-xs text-slate-500 leading-relaxed">Sharing raw metrics and lessons from building the business.</p>
<div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400 bg-white/5 w-fit px-2 py-1 rounded">
                                    Format: Short-form Video
                                </div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#0F1623] mt-6">
<h3 className="text-white font-medium text-sm mb-6">Audience Growth</h3>
<div className="h-40 flex items-end gap-2 px-2">
<div className="flex-1 bg-slate-800/50 rounded-sm h-[20%]"></div>
<div className="flex-1 bg-slate-800/50 rounded-sm h-[30%]"></div>
<div className="flex-1 bg-slate-800/50 rounded-sm h-[25%]"></div>
<div className="flex-1 bg-slate-800/50 rounded-sm h-[40%]"></div>
<div className="flex-1 bg-slate-800/50 rounded-sm h-[45%]"></div>
<div className="flex-1 bg-blue-600 rounded-sm h-[60%] shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
<div className="flex-1 bg-slate-800/50 rounded-sm h-[55%]"></div>
</div>
</div>
</div>

<div>
<h3 className="text-white font-medium text-sm mb-4">Upcoming Schedule</h3>
<div className="space-y-3">
<div className="p-4 rounded-xl border border-white/5 bg-[#0F1623] flex items-start gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-white text-xs font-medium mb-1">Post "How I started"</div>
<div className="text-[10px] text-slate-500">Tomorrow at 9:00 AM</div>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-[#0F1623] flex items-start gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-slate-300 text-xs font-medium mb-1">Draft 3 Hooks</div>
<div className="text-[10px] text-slate-500">Due Wednesday</div>
</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-[#0F1623] flex items-start gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-slate-300 text-xs font-medium mb-1">Review Audit</div>
<div className="text-[10px] text-slate-500">Pending Velocity Team</div>
</div>
</div>

<div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-center">
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
<i className="w-4 h-4" data-lucide="lock"></i>
</div>
<h4 className="text-white text-xs font-bold mb-1">Unlock Full System</h4>
<p className="text-[10px] text-blue-100 mb-3 leading-tight">Get your custom roadmap and strategy call.</p>
<button className="w-full py-2 bg-white text-blue-600 text-[10px] font-bold uppercase tracking-wide rounded shadow" onclick="logout()">Upgrade Now</button>
</div>
</div>
</div>
</div>
</main>
<button className="md:hidden block w-full py-4 text-center text-slate-500 text-xs border-t border-white/5 mt-4" onclick="logout()">Sign Out</button>
</div>
</div>


    </>
  );
}
