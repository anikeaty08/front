import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        function submitLeadMagnet(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.textContent = 'Processing...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Sent to Inbox';
                btn.style.backgroundColor = '#065f46';
                btn.style.color = '#fff';
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = 'SEND ME THE REPORT <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>';
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2500);
            }, 1000);
        }

        function submitProjectForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'APPLICATION RECEIVED';
                btn.style.backgroundColor = '#059669';
                btn.style.color = '#fff';
                status.classList.remove('hidden');
                status.innerHTML = '<span class="text-emerald-500">Success. We will review your application within 24 hours.</span>';
                e.target.reset();
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>

<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-15 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/95 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-white"></div>
<span className="text-sm font-medium tracking-tight text-white">VARIANT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors" href="#process">PROCESS</a>
<a className="hover:text-white transition-colors" href="#solutions">SOLUTIONS</a>
<a className="hover:text-white transition-colors" href="#audit">FREE AUDIT</a>
</div>
<a className="text-xs font-medium border border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-2 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-2 rounded-sm" href="#contact">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="hidden sm:inline">Start Project</span>
<span className="sm:hidden">Start</span>
</a>
</div>
</nav>

<main className="relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-800 border-l pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-neutral-950 border border-neutral-800"></div>
<div aria-hidden="true" className="absolute -left-[5px] bottom-0 w-[9px] h-[9px] bg-neutral-950 border border-neutral-800"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 border border-neutral-800 rounded-full animate-in animate-in-delay-1">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-emerald-500 uppercase tracking-wide">Systems Operational</span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-white tracking-tighter">High-Performance Websites.<br/> <span className="text-neutral-500">Launched in 72 Hours.</span></h1>
<p className="max-w-xl text-neutral-400 text-sm md:text-base leading-relaxed font-light animate-in animate-in-delay-2">
                Stop losing customers to slow, outdated websites. We build secure, enterprise-grade sites designed to turn visitors into revenue—without the 3-month wait.
            </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">
<a className="text-center px-6 py-3.5 bg-white text-black text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto rounded-sm" href="#contact">
                    START YOUR PROJECT
                </a>
<a className="text-center px-6 py-3.5 border border-neutral-800 text-neutral-300 text-xs font-medium hover:bg-neutral-900 hover:text-white transition-colors w-full sm:w-auto rounded-sm flex items-center justify-center gap-2" href="#audit">
<iconify-icon icon="lucide:file-bar-chart-2" width="14"></iconify-icon>
                    GET FREE SITE AUDIT
                </a>
</div>
</div>

<div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-800 animate-in animate-in-delay-3">
<div className="p-4 sm:p-8 border-r border-neutral-800 text-center">
<div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1">72h</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Avg. Launch Time</div>
</div>
<div className="p-4 sm:p-8 md:border-r border-neutral-800 text-center">
<div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1">100%</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Secure &amp; SSL Ready</div>
</div>
<div className="p-4 sm:p-8 border-r border-t md:border-t-0 border-neutral-800 text-center">
<div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1">Mobile</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">First Design</div>
</div>
<div className="p-4 sm:p-8 text-center border-t md:border-t-0 border-neutral-800">
<div className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1">ROI</div>
<div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500">Focused Strategy</div>
</div>
</div>
</main>

<section className="py-16 sm:py-24 border-b border-neutral-800 bg-neutral-950 relative">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h2 className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                The Current State
            </h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tighter mb-8 sm:mb-12">Why the "Old Way" is failing your business.</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div className="p-6 sm:p-8 bg-neutral-900/20 border border-neutral-800/60 glow-hover rounded-sm">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 mb-4 sm:mb-6 text-orange-500">
<iconify-icon icon="lucide:hourglass" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">The 3-Month Waiting Room</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-light">
                        Traditional agencies take 12 weeks to launch a website. That is a full quarter of lost sales. In today's market, speed is your biggest advantage.
                    </p>
</div>
<div className="p-6 sm:p-8 bg-neutral-900/20 border border-neutral-800/60 glow-hover rounded-sm">
<div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 mb-4 sm:mb-6 text-red-500">
<iconify-icon icon="lucide:eye-off" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">The "Pretty" Trap</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-light">
                        Most websites are built to look like art portfolios, not to get you phone calls. We focus on clarity, speed, and ease of use—the things that actually make people buy.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950 relative" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6 border-b border-neutral-800 pb-6 sm:pb-8">
<div>
<h2 className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
                        Our Process
                    </h2>
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tighter">We don't guess. We follow the data.</h3>
</div>
<p className="text-xs sm:text-sm text-neutral-400 max-w-md font-light">
                    We use a pre-built, secure framework to build your site. This ensures your website is stable, fast, and ready to scale from Day 1.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
<div className="bg-neutral-950 p-6 sm:p-10">
<div className="text-xs font-mono text-neutral-600 mb-4 sm:mb-6 border border-neutral-800 inline-block px-2 py-1 rounded-sm">01 / ANALYZE</div>
<h4 className="text-base sm:text-lg font-medium text-white mb-3 tracking-tight">Competitor Research</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-light">
                        We audit your top 3 competitors to see what's working for them. We use this data to build a foundation that meets your customers' expectations.
                    </p>
</div>
<div className="bg-neutral-950 p-6 sm:p-10">
<div className="text-xs font-mono text-neutral-600 mb-4 sm:mb-6 border border-neutral-800 inline-block px-2 py-1 rounded-sm">02 / BUILD</div>
<h4 className="text-base sm:text-lg font-medium text-white mb-3 tracking-tight">Rapid Assembly</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-light">
                        Because we use a proven component library, we can construct your site in 24–72 hours. No bloat. No unnecessary code.
                    </p>
</div>
<div className="bg-neutral-950 p-6 sm:p-10">
<div className="text-xs font-mono text-neutral-600 mb-4 sm:mb-6 border border-neutral-800 inline-block px-2 py-1 rounded-sm">03 / VERIFY</div>
<h4 className="text-base sm:text-lg font-medium text-white mb-3 tracking-tight">Launch &amp; Track</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-light">
                        We install analytics tools immediately. We confirm the site is working and loads instantly on mobile.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-b border-neutral-800 py-16 sm:py-24 relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
<div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 gap-6 sm:gap-10 border-b border-neutral-800 pb-6 sm:pb-8">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white max-w-2xl leading-[1.1]">
                    Helping visionary enterprises engineer <span className="text-neutral-500">digital intelligence</span> that scales globally.
                </h2>
<a className="flex items-center gap-2 text-sm font-medium text-white border-b border-neutral-700 pb-1 hover:border-emerald-500 hover:text-emerald-500 transition-colors" href="#contact">
                    Start a Project
                    <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-neutral-900/20 p-6 sm:p-8 rounded-sm flex flex-col justify-between min-h-[320px] border border-neutral-800">
<div>
<h3 className="text-base sm:text-lg font-medium text-white mb-4 leading-tight tracking-tight">
                            "Finally, a website that actually brings in leads."
                        </h3>
<p className="text-neutral-400 leading-relaxed text-xs sm:text-sm font-light">
                            "Variant didn't just design a pretty page, they built a sales tool. We got our first qualified lead 24 hours after launch."
                        </p>
</div>
<div className="mt-6 border-t border-neutral-800 pt-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white text-sm font-medium">SJ</div>
<div>
<div className="text-sm font-medium text-white leading-none mb-1">Sarah Jenkins</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Business Owner</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/20 p-6 sm:p-8 rounded-sm flex flex-col items-center justify-between min-h-[320px] border border-neutral-800">
<div className="text-center">
<span className="text-xs text-neutral-500 font-mono uppercase tracking-widest block mb-2">Performance</span>
<span className="text-sm font-medium text-white tracking-tight">Google Speed Score</span>
</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<div className="absolute inset-0 border border-neutral-800 rounded-full"></div>
<div className="text-3xl font-medium text-white tracking-tighter">98/100</div>
</div>
<button className="w-full bg-white text-black text-xs font-semibold tracking-wide py-3 rounded-sm hover:bg-neutral-200 transition-colors">
                        VIEW CASE STUDY
                    </button>
</div>

<div className="flex flex-col bg-neutral-900 min-h-[320px] border border-neutral-800 rounded-sm p-6 sm:p-8 justify-between sm:col-span-2 lg:col-span-1">
<div className="flex justify-between items-start text-white">
<span className="text-base sm:text-lg font-medium tracking-tight">Inquiries</span>
<iconify-icon className="text-neutral-500" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-neutral-300 font-light">
                        Let's initialize a sequence. Whether you have a complex problem or just curiosity, we're here to help.
                    </p>
<div className="space-y-3 text-sm text-neutral-400">
<a className="hover:text-white transition-colors flex text-sm text-neutral-300 gap-x-3 items-center" href="mailto:hello@variant.sys">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                            hello@variant.sys
                        </a>
<div className="flex gap-2 text-sm text-neutral-300 gap-x-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></span>
                            +1 (555) 019-2834
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-900/20 border-b border-neutral-800" id="audit">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8 md:p-12 rounded-sm">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-sm mb-4 sm:mb-6">
<iconify-icon className="text-emerald-500" icon="lucide:unlock" width="12"></iconify-icon>
<span className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider">Free Access</span>
</div>
<h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">Unlock Your Competitor Intelligence Report</h2>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                            Don't redesign your site blindly. Enter your email to get a free checklist of what your top 3 competitors are doing right.
                        </p>
<ul className="space-y-2 mb-6 sm:mb-8">
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="14"></iconify-icon>
                                Speed &amp; Performance Benchmarks
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="14"></iconify-icon>
                                Conversion Funnel Analysis
                            </li>
<li className="flex items-center gap-3 text-xs text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" width="14"></iconify-icon>
                                SEO Gap Identification
                            </li>
</ul>
</div>
<div className="w-full md:w-80">
<form className="space-y-4" onsubmit="submitLeadMagnet(event)">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-email">Work Email</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-700" id="lm-email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5" htmlFor="lm-url">Company Website</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm placeholder:text-neutral-700" id="lm-url" placeholder="https://yourcompany.com" required="" type="url"/>
</div>
<button className="w-full bg-white text-black px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors rounded-sm flex items-center justify-center gap-2" type="submit">
                                SEND ME THE REPORT
                                <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<p className="text-[10px] text-neutral-600 text-center">Zero spam. 100% Value.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950" id="solutions">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12 sm:mb-16">
<h2 className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4">Deployment Options</h2>
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tighter">Simple, transparent pricing.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div className="flex flex-col p-6 sm:p-8 bg-neutral-900/20 border border-neutral-800 rounded-sm">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-sm flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono border border-neutral-800 px-2 py-1 rounded-sm text-neutral-500">AUDIT</span>
</div>
<h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-2">The Competitor Audit</h3>
<p className="text-xs text-neutral-400 font-light mb-6 leading-relaxed">
                        Best for businesses who aren't ready to rebuild but want answers. Get a comprehensive analysis of your competitive landscape.
                    </p>
<ul className="space-y-2 mt-auto border-t border-neutral-800 pt-4 sm:pt-6">
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Top 3 Competitor Analysis
                        </li>
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Actionable Recommendations
                        </li>
</ul>
</div>
<div className="flex flex-col p-6 sm:p-8 bg-neutral-900/20 border border-neutral-800 rounded-sm">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-sm flex items-center justify-center text-purple-400">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono border border-neutral-800 px-2 py-1 rounded-sm text-neutral-500">ENTERPRISE</span>
</div>
<h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-2">The Full System Architecture</h3>
<p className="text-xs text-neutral-400 font-light mb-6 leading-relaxed">
                        Complete multi-page digital infrastructure. CMS integration, analytics dashboard setup, and advanced SEO foundation.
                    </p>
<ul className="space-y-2 mt-auto border-t border-neutral-800 pt-4 sm:pt-6">
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span> 5-Page Structure
                        </li>
<li className="text-[11px] text-neutral-500 flex items-center gap-2">
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Analytics Dashboard
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-t border-neutral-800 bg-neutral-950" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4">Secure Your Slot</h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                    Ready to stop guessing?
                </h3>
<p className="text-neutral-400 text-xs sm:text-sm font-light">
                    We limit our active builds to ensure we hit our 72-hour delivery standard.
                </p>
</div>
<form className="space-y-4 sm:space-y-6 bg-neutral-900/10 border border-neutral-800 p-6 sm:p-8 rounded-sm" id="projectForm" onsubmit="submitProjectForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Full Name</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Work Email</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Company Website (Optional)</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-sm" name="website" placeholder="https://" type="url"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Estimated Budget</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-300" name="budget" required="">
<option disabled="" selected="" value="">Select Range</option>
<option value="1.5k-5k">$1,500 - $5,000</option>
<option value="5k-10k">$5,000 - $10,000</option>
<option value="10k+">$10,000+</option>
</select>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Timeline</label>
<select className="w-full input-base px-3 py-3 rounded-sm text-sm text-neutral-300" name="timeline" required="">
<option disabled="" selected="" value="">Select Timeline</option>
<option value="asap">ASAP</option>
<option value="1month">Within 1 Month</option>
<option value="quarter">This Quarter</option>
</select>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1.5">Primary Pain Point</label>
<textarea className="w-full input-base px-3 py-3 rounded-sm text-sm" name="message" placeholder="What is wrong with your current site?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black py-4 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors rounded-sm flex items-center justify-center gap-2 mt-4" id="submitBtn" type="submit">
                    SUBMIT APPLICATION
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
<div className="hidden text-center text-xs mt-4" id="formStatus"></div>
</form>
</div>
</section>

<footer className="bg-neutral-950 py-8 sm:py-12 border-t border-neutral-800">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-neutral-800"></div>
<span>Variant Systems © 2025</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Systems Operational
            </div>
</div>
</footer>



    </>
  );
}
