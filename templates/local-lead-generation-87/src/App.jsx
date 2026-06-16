import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function() {
            function isMobileDevice() {
                return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || ('ontouchstart' in window);
            }
            
            if (isMobileDevice()) {
                document.body.classList.add('is-mobile');
                console.log("Mobile device detected: Optimizing buttons.");
            } else {
                document.body.classList.add('is-desktop');
            }
        })();
    


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="ambient-glow"></div>

<nav className="fixed top-0 w-full z-[999] border-b border-white/5 bg-[#0D0D0D]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="clickable-area flex items-center gap-2 group" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide text-[#4A4AFF]" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-sm font-semibold tracking-tighter uppercase text-white">Rod Leads<span className="hidden sm:inline text-neutral-500"> / Growth</span></span>
</a>
<div className="flex items-center gap-4">
<a className="clickable-area text-xs font-medium text-neutral-400 hover:text-white transition-colors py-4 px-2" href="#pricing">Pricing</a>
<a className="clickable-area hidden md:inline-flex text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/5" href="tel:+16505150425">
                    (650) 515-0425
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A4AFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A4AFF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A4AFF]"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-400">Accepting New Clients</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                Local Lead Generation &amp; <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">Digital Growth Solutions.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Transparent, High-Impact Packages Built for Local Service Businesses.
            </p>

<div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="clickable-area w-full sm:w-auto btn-neon inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white tracking-wide" href="sms:+16505150425?body=I%20want%20to%20know%20how%20much%20this%20service%20actually%20costs%20and%20how%20it%20works.">
                    Text to Start
                    <svg aria-hidden="true" className="iconify iconify--lucide" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="clickable-area w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white tracking-wide border border-white/10 bg-neutral-900/50 hover:bg-white/10 transition-colors" href="tel:+16505150425">
                    Call Now
                </a>
</div>
</div>
</section>

<section className="relative z-10 py-24 md:py-32 px-6 border-t border-white/5 bg-[#0D0D0D]">
<div className="max-w-3xl mx-auto space-y-6">
<span className="text-[#4A4AFF] text-xs font-semibold tracking-widest uppercase mb-2 block">Who We Are</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">The Mission</h2>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                Rod Leads Growth Studio is a modern digital growth service dedicated to helping local businesses strengthen their online presence and consistently generate new clients. Our mission is to simplify the entire process of being found, trusted, and chosen. We focus on practical, high-impact strategies—like Google Business Optimization and Local SEO—that deliver real results without unnecessary complexity.
            </p>
</div>
</section>

<section className="relative z-10 py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="glass-card p-8 md:p-10 rounded-3xl relative">
<div className="absolute top-10 right-10 p-3 bg-neutral-800/50 rounded-full border border-white/5 text-neutral-500">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">The Reality</h3>
<p className="text-neutral-400 leading-relaxed mb-6">90% of clients search on Google, but most businesses don't rank. Leads are inconsistent, and poor digital presence equals lost revenue.</p>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-600 w-1/4"></div>
</div>
<p className="mt-2 text-xs text-neutral-500">Low Visibility</p>
</div>

<div className="glass-card p-8 md:p-10 rounded-3xl relative border-t-2 border-t-[#4A4AFF]/20">
<div className="absolute top-10 right-10 p-3 bg-[#4A4AFF]/10 rounded-full border border-[#4A4AFF]/20 text-[#4A4AFF]">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Our Solution</h3>
<p className="text-neutral-400 leading-relaxed mb-6">A complete local growth system: Google Business Optimization, Local SEO Setup, High-Converting Landing Pages, and City-Specific Targeting.</p>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-[#4A4AFF] w-3/4"></div>
</div>
<p className="mt-2 text-xs text-[#4A4AFF]">High Impact</p>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-[#111111]">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Realistic Results</h2>
<p className="text-neutral-400">Benchmarks based on typical cleaning company or contractor performance after implementation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border border-white/5 rounded-2xl bg-[#0D0D0D] text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">30–60%</div>
<div className="text-sm font-medium text-[#4A4AFF] uppercase tracking-wide">Increase</div>
<p className="mt-4 text-sm text-neutral-400">in weekly calls derived from optimized profiles.</p>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-[#0D0D0D] text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">50–120%</div>
<div className="text-sm font-medium text-[#4A4AFF] uppercase tracking-wide">Uplift</div>
<p className="mt-4 text-sm text-neutral-400">in website traffic from "near me" searches.</p>
</div>
<div className="p-8 border border-white/5 rounded-2xl bg-[#0D0D0D] text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">3–6</div>
<div className="text-sm font-medium text-[#4A4AFF] uppercase tracking-wide">Weeks</div>
<p className="mt-4 text-sm text-neutral-400">typical timeframe for ranking improvements.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white text-center mb-16">Transparent Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl bg-[#0D0D0D] border border-neutral-800 relative">
<div className="mb-4 text-sm font-medium text-neutral-400">Local Starter</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-4">$250–$350</div>
<p className="text-sm text-neutral-500 mb-8 h-10">Best for businesses starting their local growth journey.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Google Business Optimization
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Local SEO Setup
                        </li>
</ul>
<a className="clickable-area block w-full py-4 rounded-xl border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="tel:+16505150425">Contact</a>
</div>

<div className="relative p-8 rounded-3xl bg-[#131313] border border-[#4A4AFF]/50 md:scale-105 z-20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#4A4AFF] rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">Most Popular</div>
<div className="mb-4 mt-2 text-sm font-medium text-[#4A4AFF]">Lead Starter Package</div>
<div className="text-4xl font-semibold text-white tracking-tight mb-1">$400–$600</div>
<div className="text-xs text-neutral-500 mb-6">Optional Maintenance: $100/mo</div>
<p className="text-sm text-neutral-400 mb-8 h-10">Complete foundation for consistent lead generation.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white font-medium">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Google Business Optimization
                        </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Conversion Landing Page
                        </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            3 Local Pages
                        </li>
</ul>
<a className="clickable-area block w-full py-4 rounded-xl bg-[#4A4AFF] text-white text-center text-sm font-medium hover:bg-[#3838db] transition-colors" href="sms:+16505150425?body=I%20want%20to%20know%20how%20much%20this%20service%20actually%20costs%20and%20how%20it%20works.">Get Started</a>
</div>

<div className="p-8 rounded-3xl bg-[#0D0D0D] border border-neutral-800 relative">
<div className="mb-4 text-sm font-medium text-neutral-400">Growth Monthly Plan</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-4">$150–$300<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-500 mb-8 h-10">Continuous optimization and steady lead flow.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Monthly Updates
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="iconify iconify--lucide text-[#4A4AFF] shrink-0" height="16" viewbox="0 0 24 24" width="16"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Review Management
                        </li>
</ul>
<a className="clickable-area block w-full py-4 rounded-xl border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="tel:+16505150425">Contact</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 px-6">
<div className="max-w-5xl mx-auto">
<div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#4A4AFF]/20 relative overflow-hidden">
<div className="text-center md:text-left relative z-10 pointer-events-none">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Unsure which plan fits you?</h3>
<p className="text-neutral-400">Talk directly to Rod to find the perfect strategy.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-20">
<a className="clickable-area px-6 py-4 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white flex items-center justify-center gap-2" href="sms:+16505150425?body=I%20want%20to%20know%20how%20much%20this%20service%20actually%20costs%20and%20how%20it%20works.">
<svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Send a Text
                    </a>
<a className="clickable-area bg-white text-black px-6 py-4 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="tel:+16505150425">
<svg className="iconify iconify--lucide" height="18" viewbox="0 0 24 24" width="18"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Call (650) 515-0425
                    </a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#0F0F0F]">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tighter text-white mb-10 text-center">Add-On Services</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
<div className="p-6 border border-white/5 bg-[#0A0A0A] rounded-xl">
<div className="text-xs font-semibold uppercase text-neutral-500 mb-2">Optimization</div>
<h3 className="text-white font-medium mb-1">Google Business Profile</h3>
<p className="text-neutral-400 text-sm">$100–$200</p>
</div>
<div className="p-6 border border-white/5 bg-[#0A0A0A] rounded-xl">
<div className="text-xs font-semibold uppercase text-neutral-500 mb-2">Foundation</div>
<h3 className="text-white font-medium mb-1">Local SEO Setup</h3>
<p className="text-neutral-400 text-sm">$150–$350</p>
</div>
<div className="p-6 border border-white/5 bg-[#0A0A0A] rounded-xl">
<div className="text-xs font-semibold uppercase text-neutral-500 mb-2">Conversion</div>
<h3 className="text-white font-medium mb-1">Landing Page</h3>
<p className="text-neutral-400 text-sm">$100–$400</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 overflow-hidden bg-[#0D0D0D]" id="contact">
<div className="max-w-3xl mx-auto text-center relative z-20 border border-white/5 bg-[#111111] p-8 md:p-16 rounded-3xl">
<span className="inline-block p-4 mb-6 rounded-full bg-[#4A4AFF]/10 text-[#4A4AFF]">
<svg className="iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to Grow?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-lg mx-auto">No complex forms. Just a direct line to start getting you more leads.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="clickable-area w-full md:w-auto btn-neon px-8 py-4 rounded-xl text-lg font-semibold text-white tracking-wide inline-flex justify-center items-center gap-3" href="tel:+16505150425">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Call (650) 515-0425
                </a>
<a className="clickable-area w-full md:w-auto px-8 py-4 rounded-xl border border-white/10 text-lg font-medium text-white inline-flex justify-center items-center gap-3 hover:bg-white/5 transition-colors" href="sms:+16505150425?body=I%20want%20to%20know%20how%20much%20this%20service%20actually%20costs%20and%20how%20it%20works.">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Text Us
                </a>
</div>
<p className="mt-8 text-sm text-neutral-600">Response time: Usually within 1 hour</p>
</div>
<div className="mt-24 pt-8 border-t border-white/5 text-center text-xs text-neutral-600">
<p>© 2023 Rod Leads Growth Studio. All rights reserved.</p>
</div>
</section>



    </>
  );
}
