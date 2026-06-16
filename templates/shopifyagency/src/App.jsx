import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // 12-Week Intensive Accordion Logic
        let activeIndex = 1; // Default open index
        
        function toggleCurriculum(index) {
            // Reset all
            for (let i = 0; i < 4; i++) {
                const desc = document.getElementById(`desc-${i}`);
                const icon = document.getElementById(`icon-${i}`);
                const title = document.getElementById(`title-${i}`);
                const wrapper = desc.parentElement.parentElement; // The .group div

                if (i === index) {
                    // Activate this one
                    desc.classList.remove('h-0', 'opacity-0');
                    desc.classList.add('h-auto', 'opacity-100');
                    icon.parentElement.classList.remove('bg-white/5', 'text-white');
                    icon.parentElement.classList.add('bg-[#FF3B30]', 'text-white');
                    icon.classList.add('rotate-45');
                    title.classList.remove('text-[#F5F5F0]');
                    title.classList.add('text-[#FF3B30]');
                } else {
                    // Deactivate others
                    desc.classList.remove('h-auto', 'opacity-100');
                    desc.classList.add('h-0', 'opacity-0');
                    icon.parentElement.classList.remove('bg-[#FF3B30]', 'text-white');
                    icon.parentElement.classList.add('bg-white/5');
                    icon.classList.remove('rotate-45');
                    title.classList.remove('text-[#FF3B30]');
                    title.classList.add('text-[#F5F5
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1E]/85 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#FF3B30]" data-icon="solar:bag-bold-duotone" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11.996 6.833a4.004 4.004 0 0 1 4 4v1.834h-8v-1.834a4.004 4.004 0 0 1 4-4" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M3.568 15.688a2.766 2.766 0 0 1 2.37-2.764l1.344-.191v2.1a1.25 1.25 0 0 0 2.5 0v-2.457l4.428-.633v3.09a1.25 1.25 0 0 0 2.5 0v-3.447l1.353-.193a2.766 2.766 0 0 1 3.136 2.368l.492 3.938c.38 3.04-2.19 5.501-5.253 5.501H7.558c-3.063 0-5.633-2.46-5.253-5.5l.493-3.943q.385 3.125.77 2.13z" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-lg font-semibold tracking-tight text-[#F5F5F0]">Velour</span>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium text-[#A1A1AA]">
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-[#F5F5F0] hover:text-[#FF3B30] transition-colors" href="#">Client Login</a>
<a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF3B30] text-white text-sm font-semibold hover:bg-[#D70015] transition-all shadow-[0_0_15px_rgba(255,59,48,0.3)]" href="#">
                    Start Project
                </a>
</div>

<button className="md:hidden text-[#F5F5F0] p-1" id="menu-btn">
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#1C1C1E] border-b border-white/5 p-6 flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Work</a>
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Services</a>
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">Process</a>
<a className="text-[#A1A1AA] hover:text-white text-lg font-medium" href="#">About</a>
<hr className="border-white/10 my-2"/>
<a className="text-white text-lg font-medium" href="#">Client Login</a>
<a className="bg-[#FF3B30] text-white text-center py-3 rounded-lg font-semibold" href="#">Start Project</a>
</div>
</nav>

<header className="lg:px-10 overflow-hidden text-[#F5F5F0] bg-[#1C1C1E] rounded-b-[3rem] pt-12 pr-6 pb-24 pl-6 relative pt-28">
<div className="max-w-[1400px] mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">

<div className="lg:col-span-6 flex flex-col gap-8 z-10">
<div className="">
<h1 className="lg:text-[5.5rem] leading-[1] text-6xl text-[#F5F5F0] mb-6 font-medium tracking-tight">
                            Design Meets <br/>
<span className="text-[#FF3B30]">Revenue.</span>
</h1>
<p className="text-[#A1A1AA] text-lg font-light leading-relaxed max-w-lg">
                            We build high-converting Shopify Plus experiences for ambitious brands. Stop leaking customers and start scaling your GMV.
                        </p>
</div>

<div className="flex flex-wrap items-center gap-6 mt-2">
<a className="px-8 py-4 bg-[#FF3B30] text-white rounded-xl font-semibold text-base hover:bg-[#D70015] transition-colors shadow-[0_0_20px_rgba(255,59,48,0.3)]" href="#">
                            View Our Work
                        </a>
<div className="flex flex-col border-l border-white/10 pl-6">
<span className="text-sm font-medium text-[#F5F5F0]">Agency Capacity</span>
<span className="text-sm text-[#FF3B30] font-medium">2 Slots Available</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#2C2C2E] aspect-[4/3]">
<div className="absolute top-6 right-6 z-20 bg-[#F5F5F0]/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg max-w-[180px]">
<div className="text-[10px] font-bold text-[#71717A] uppercase tracking-wider mb-1">Growth Metric</div>
<div className="text-sm font-semibold text-[#1C1C1E] leading-tight">30% Lift in Conversion Rate</div>
</div>
<img alt="E-commerce store design" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>

<div className="flex mt-8 pr-4 pl-4 space-x-4 items-start justify-between">
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-[#F5F5F0] tracking-tight mb-1">$50M+</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Client Revenue</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-[#FF3B30] tracking-tight mb-1">4.8%</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Avg Conv. Rate</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-[#F5F5F0] tracking-tight mb-1">200+</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Stores Built</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-[#F5F5F0] tracking-tight mb-1">Top 1%</h3>
<p className="text-[#71717A] text-xs font-medium uppercase tracking-wide">Shopify Partners</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#1C1C1E] via-transparent to-[#1C1C1E]"></div>
<div className="flex overflow-hidden w-full">
<div className="flex gap-6 animate-marquee w-max pt-4 pb-4 gap-x-6 gap-y-6">

<div className="w-[350px] bg-[#2C2C2E] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#FF3B30]/50 transition-colors group">
<div className="w-12 h-12 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-6 text-[#FF3B30] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.22-.22 2.385-.623 3.468a3.75 3.75 0 0 1-1.402-2.906c0-1.282.684-2.4 1.705-3.033A1.25 1.25 0 1 0 20.373 7.4c-1.096-.68-2.527-.602-3.693.307a1.25 1.25 0 1 0-1.428 2.052c.045.031.066.087.054.14a.25.25 0 0 1-.244.195a.25.25 0 0 1-.212-.116l-2.008-3.464a1.25 1.25 0 1 0-2.164 1.254l2.007 3.464a1.75 1.75 0 0 0 2.68.397l.006-.006c.928-.909 2.22-.924 3.064-.265a3.75 3.75 0 0 1 1.093 5.345c-.886 1.41-2.42 2.3-4.116 2.3c-.563 0-1.077.303-1.346.793l-.86 1.564c-1.01 1.836.315 4.086 2.408 4.086c-.504.354-1.072.556-1.614.556" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M6.25 15.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M8 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#F5F5F0] mb-3 font-medium tracking-tight">UX/UI Design</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Beautiful, brand-first interfaces that guide customers seamlessly from landing to checkout.
        </p>
</div>

<div className="w-[350px] bg-[#FF3B30]/10 rounded-3xl p-8 flex flex-col h-full border border-[#FF3B30]/20 hover:bg-[#FF3B30]/20 transition-colors group">
<div className="w-12 h-12 bg-[#FF3B30] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:code-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.9 3.54a.8.8 0 0 1 1 .536l3.4 12a.8.8 0 0 1-1.537.436l-3.4-12a.8.8 0 0 1 .536-1" fill="currentColor" opacity=".5"></path><path d="M10.108 3.54a.8.8 0 0 0-1 .536l-3.4 12a.8.8 0 1 0 1.537.436l3.4-12a.8.8 0 0 0-.536-1m-4.32 6.012a.8.8 0 0 1 0 1.131L2.454 14l3.333 3.316a.8.8 0 0 1-1.132 1.137l-3.9-3.88a.8.8 0 0 1 0-1.138l3.9-3.88a.8.8 0 0 1 1.132-.005m14.654 1.131a.8.8 0 0 0 0-1.13L17.11 5.67a.8.8 0 0 0-1.132 1.138l3.9 3.88a.8.8 0 0 0 1.132 0l3.9-3.88a.8.8 0 0 0-1.132-1.137z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#FF3B30] mb-3 font-medium tracking-tight">Theme Development</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Pixel-perfect Liquid &amp; Hydrogen development optimized for speed, SEO, and scalability.
        </p>
</div>

<div className="w-[350px] bg-[#2C2C2E] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#FF3B30]/50 transition-colors group">
<div className="w-12 h-12 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-6 text-[#F5F5F0] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:chart-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M15.5 13.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-3.5-3a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1m-3.5 5.25a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-.25a1 1 0 0 1 1-1" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#F5F5F0] mb-3 font-medium tracking-tight">CRO &amp; Strategy</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Data-driven A/B testing and funnel optimization to squeeze more revenue from every visitor.
        </p>
</div>

<div className="w-[350px] bg-[#2C2C2E] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-white/30 transition-colors group">
<div className="w-12 h-12 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:transfer-horizontal-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h12.17l-1.88 1.88a.75.75 0 0 0 1.06 1.06l3.16-3.16a.75.75 0 0 0 0-1.06l-3.16-3.16a.75.75 0 0 0-1.06 1.06L16.17 8.5H4a.75.75 0 0 0 0 1.5" fill="currentColor" opacity=".5"></path><path d="M20 14H7.83l1.88-1.88a.75.75 0 0 0-1.06-1.06l-3.16 3.16a.75.75 0 0 0 0 1.06l3.16 3.16a.75.75 0 0 0 1.06-1.06L7.83 15.5H20a.75.75 0 0 0 0-1.5" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#F5F5F0] mb-3 font-medium tracking-tight">Migration</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Seamless re-platforming from WooCommerce, Magento, or Salesforce to Shopify Plus.
        </p>
</div>

<div className="w-[350px] bg-[#2C2C2E] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#FF3B30]/50 transition-colors group">
<div className="w-12 h-12 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-6 text-[#FF3B30] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.22-.22 2.385-.623 3.468a3.75 3.75 0 0 1-1.402-2.906c0-1.282.684-2.4 1.705-3.033A1.25 1.25 0 1 0 20.373 7.4c-1.096-.68-2.527-.602-3.693.307a1.25 1.25 0 1 0-1.428 2.052c.045.031.066.087.054.14a.25.25 0 0 1-.244.195a.25.25 0 0 1-.212-.116l-2.008-3.464a1.25 1.25 0 1 0-2.164 1.254l2.007 3.464a1.75 1.75 0 0 0 2.68.397l.006-.006c.928-.909 2.22-.924 3.064-.265a3.75 3.75 0 0 1 1.093 5.345c-.886 1.41-2.42 2.3-4.116 2.3c-.563 0-1.077.303-1.346.793l-.86 1.564c-1.01 1.836.315 4.086 2.408 4.086c-.504.354-1.072.556-1.614.556" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M6.25 15.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M8 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#F5F5F0] mb-3 font-medium tracking-tight">UX/UI Design</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Beautiful, brand-first interfaces that guide customers seamlessly from landing to checkout.
        </p>
</div>

<div className="w-[350px] bg-[#FF3B30]/10 rounded-3xl p-8 flex flex-col h-full border border-[#FF3B30]/20 hover:bg-[#FF3B30]/20 transition-colors group">
<div className="w-12 h-12 bg-[#FF3B30] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:code-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.9 3.54a.8.8 0 0 1 1 .536l3.4 12a.8.8 0 0 1-1.537.436l-3.4-12a.8.8 0 0 1 .536-1" fill="currentColor" opacity=".5"></path><path d="M10.108 3.54a.8.8 0 0 0-1 .536l-3.4 12a.8.8 0 1 0 1.537.436l3.4-12a.8.8 0 0 0-.536-1m-4.32 6.012a.8.8 0 0 1 0 1.131L2.454 14l3.333 3.316a.8.8 0 0 1-1.132 1.137l-3.9-3.88a.8.8 0 0 1 0-1.138l3.9-3.88a.8.8 0 0 1 1.132-.005m14.654 1.131a.8.8 0 0 0 0-1.13L17.11 5.67a.8.8 0 0 0-1.132 1.138l3.9 3.88a.8.8 0 0 0 1.132 0l3.9-3.88a.8.8 0 0 0-1.132-1.137z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#FF3B30] mb-3 font-medium tracking-tight">Theme Development</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Pixel-perfect Liquid &amp; Hydrogen development optimized for speed, SEO, and scalability.
        </p>
</div>
<div className="w-[350px] bg-[#2C2C2E] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#FF3B30]/50 transition-colors group">
<div className="w-12 h-12 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-6 text-[#F5F5F0] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:chart-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M15.5 13.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-3.5-3a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1m-3.5 5.25a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-.25a1 1 0 0 1 1-1" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-[#F5F5F0] mb-3 font-medium tracking-tight">CRO &amp; Strategy</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Data-driven A/B testing and funnel optimization to squeeze more revenue from every visitor.
        </p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16">
<div className="flex flex-wrap gap-12 lg:gap-20 transition-all hover:grayscale-0 hover:opacity-100 opacity-40 max-w-7xl mr-auto ml-auto pr-6 pl-6 grayscale gap-x-12 gap-y-12 justify-center">

<svg className="iconify text-[#1C1C1E] w-[48px] h-[48px]" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 11.7c.3-2.5-1.5-4.6-3.7-5.4l-.8-.3c-.6-.2-1.3-.3-2-.3l-.3-2.8c-.1-.7-.5-1.2-1.2-1.4l-3.3-1c-.6-.2-1.3 0-1.8.4L3.6 4.3c-.6.5-.9 1.2-.7 1.9l.8 3.5l.8 8.1l.2 2.5c.2 1.6 1.6 2.8 3.2 2.8h7.9c1.6 0 3-1.2 3.2-2.8l.2-2.2l1-9c.2 1.1.2 2.1-.1 3c-1.1 3-5.2 3.6-5.2 3.6s4.8.4 6.2-2.7c.5-.4.5-.8.5-1.3M15.3 6.4c-.1.7-.8 1.2-1.5 1.1c-.7-.1-1.2-.8-1.1-1.5c.1-.7.8-1.2 1.5-1.1c.8.1 1.3.7 1.1 1.5m-3.9 1c-.1.7-.8 1.2-1.5 1.1c-.7-.1-1.2-.8-1.1-1.5c.1-.7.8-1.2 1.5-1.1c.7.2 1.2.8 1.1 1.5m-2.8 5.7c0 .5-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1" fill="#95BF47"></path></svg>

<svg className="iconify text-[#1C1C1E] w-[48px] h-[48px]" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M2.376 11.238L6.44 2.115h4.06l-4.148 9.123h-3.97zm2.463 3.639h4.06l4.475 7.008h-4.382l-4.153-7.008zM19.143 2.115h4.032l-5.698 9.123L23.175 20.36h-4.032l-5.698-9.122z" fill="#1C1C1E"></path></svg>

<svg aria-hidden="true" className="iconify w-[48px] h-[48px] text-[#1C1C1E]" height="1em" role="img" viewbox="0 0 256 228" width="1.13em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" fill="#00D8FF"></path></svg>

<svg className="iconify text-[#1C1C1E] w-[48px] h-[48px]" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 12V6h3c1.657 0 3 1.343 3 3s-1.343 3-3 3z" fill="#F24E1E"></path><path d="M12 18v-6H9c-1.657 0-3 1.343-3 3s1.343 3 3 3z" fill="#A259FF"></path><path d="M6 12V6h6v6z" fill="#1ABCFE"></path><path d="M6 18c0 1.657 1.343 3 3 3c1.657 0 3-1.343 3-3v-6H6z" fill="#0ACF83"></path><path d="M6 6c0-1.657 1.343-3 3-3h3v6H9C7.343 9 6 7.657 6 6" fill="#FF7262"></path></svg>

<svg className="iconify text-[#1C1C1E] w-[48px] h-[48px]" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 5.5c-2.4 0-3.3 1.1-3.6 2.3c-.3 1.1.2 1.6.4 1.9c.4.6.6 1.4.3 2.2c-.5 1.4-2.2 2.1-3.6 2.1c-2.4 0-3.3-1.1-3.6-2.3c-.3-1.1.2-1.6.4-1.9c.4-.6.6-1.4.3-2.2c-.5-1.4-2.2-2.1-3.6-2.1c-2.7 0-4.1 2.3-3 4.7c.9 2.1 3.5 3.2 5.5 3.2c2.4 0 3.3-1.1 3.6-2.3c.3-1.1-.2-1.6-.4-1.9c-.4-.6-.6-1.4-.3-2.2c.5-1.4 2.2-2.1 3.6-2.1c2.4 0 3.3 1.1 3.6 2.3c.3 1.1-.2 1.6-.4 1.9c-.4.6-.6 1.4-.3 2.2c.5 1.4 2.2 2.1 3.6 2.1c2.7 0 4.1-2.3 3-4.7c-1-2-3.6-3.1-5.5-3.1" fill="#06B6D4"></path></svg>
</div>
</section>

<section className="py-24 bg-[#F5F5F0]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#1C1C1E]"></div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#1C1C1E]">The Velour Difference</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-4">
<img alt="Reviewer" className="w-14 h-14 rounded-full border-4 border-[#F5F5F0]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Reviewer" className="w-14 h-14 rounded-full border-4 border-[#F5F5F0]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Reviewer" className="w-14 h-14 rounded-full border-4 border-[#F5F5F0]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="">
<div className="font-semibold text-xl text-[#1C1C1E]">5-Star Partner</div>
<div className="text-[#52525B] text-sm font-light">Trusted by Shopify Plus Brands</div>
</div>
</div>
</div>
<div className="">
<h2 className="lg:text-5xl leading-tight text-4xl text-[#1C1C1E] mb-6 font-medium tracking-tight">
                        We Don't Just Design Stores. <br/>
                        We Engineer <span className="text-[#FF3B30]">Growth.</span>
</h2>
<p className="text-xl text-[#52525B] leading-relaxed mb-8 font-light">
                        Most agencies focus on awards. We focus on your bottom line. At Velour, we combine data-driven CRO strategies with premium aesthetics to build Shopify stores that outperform the competition.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-5 relative group">
<img alt="Design Meeting" className="w-full h-80 object-cover rounded-[2rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="md:col-span-5 relative group">
<img alt="Agency Office" className="w-full h-80 object-cover rounded-[2rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="md:col-span-2 flex items-end justify-end">
<a className="w-full h-full min-h-[100px] bg-[#1C1C1E] text-[#F5F5F0] rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-[#2C2C2E] transition-colors p-6 text-center border border-[#FF3B30]/20 shadow-xl group" href="#">
<span className="text-lg font-medium text-[#F5F5F0]">Meet the Team</span>
<svg aria-hidden="true" className="iconify text-2xl text-[#FF3B30] group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6">
<div className="bg-[#1C1C1E] text-[#F5F5F0] rounded-[2.5rem] p-8 lg:p-20 relative overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-xl">
<span className="text-[#FF3B30] text-sm font-medium tracking-wide uppercase mb-4 block">— Comprehensive Services</span>
<h2 className="text-4xl lg:text-5xl text-[#F5F5F0] font-medium tracking-tight">Full-Service Commerce.</h2>
</div>
<div className="mt-6 md:mt-0 max-w-xs text-[#A1A1AA] text-lg font-light">
                        From initial strategy to post-launch optimization, we handle every aspect of your digital flagship.
                        <a className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#F5F5F0] text-[#1C1C1E] rounded-full text-sm font-medium hover:bg-[#EBEBE6]" href="#">
                            Service Menu
                            <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:download-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col border-t border-white/10" id="curriculum-list">


<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(0)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-[#F5F5F0] font-medium tracking-tight group-hover:text-[#FF3B30] transition-colors" id="title-0">Strategy &amp; Discovery</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-0" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-0">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    We analyze your market, competitors, and user behavior to architect a digital presence that positions your brand as the market leader.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(1)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-[#FF3B30] font-medium tracking-tight" id="title-1">Custom Shopify Development</h3>
<div className="rounded-full bg-[#FF3B30] text-white p-3 transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform rotate-45 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-1" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-100" id="desc-1">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    From headless Hydrogen builds to custom Liquid themes, we write clean, scalable code that loads instantly and ranks high.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(2)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-[#F5F5F0] font-medium tracking-tight group-hover:text-[#FF3B30] transition-colors" id="title-2">Conversion Optimization</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-2" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-2">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Continuous A/B testing, heatmap analysis, and funnel optimization to ensure your ad spend yields the highest possible ROAS.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(3)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-[#F5F5F0] font-medium tracking-tight group-hover:text-[#FF3B30] transition-colors" id="title-3">App Integration &amp; Automation</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:add-circle-bold-duotone" height="1em" id="icon-3" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path><path d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-3">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Seamless integration with Klaviyo, Yotpo, Gorgias, and custom private apps to automate operations and personalize the customer journey.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F0]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-[#1C1C1E]"></div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#1C1C1E]">Featured Projects</span>
</div>
<h2 className="text-4xl lg:text-5xl text-[#1C1C1E] font-medium tracking-tight">Recent Work that Converts</h2>
</div>
<a className="px-6 py-3 bg-[#1C1C1E] text-[#F5F5F0] rounded-full text-sm font-medium hover:bg-[#2C2C2E] transition-colors flex items-center gap-2 mt-6 md:mt-0" href="#">
                    View Portfolio
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group cursor-pointer bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E5E5]">
<div className="bg-[#F2F4F3] rounded-[2rem] overflow-hidden mb-6 relative aspect-[4/3]">
<div className="group-hover:bg-black/10 transition-colors z-10 bg-center bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Fashion Store" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-4 py-1 rounded-full bg-[#1C1C1E] text-white text-xs font-medium">Streetwear</span>
</div>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div>
<h3 className="text-2xl mb-1 text-[#1C1C1E] font-medium tracking-tight">Apex Apparel</h3>
<p className="text-[#71717A] text-lg font-light">Design + Shopify 2.0</p>
</div>
<div className="p-3 rounded-full bg-[#F5F5F0] text-[#1C1C1E] group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E5E5]">
<div className="bg-[#F2F4F3] rounded-[2rem] overflow-hidden mb-6 relative aspect-[4/3]">
<div className="group-hover:bg-black/10 transition-colors bg-center z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Beauty Brand" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1592914610354-fd354ea45e48?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-4 py-1 rounded-full bg-[#1C1C1E] text-white text-xs font-medium">Beauty</span>
</div>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div className="">
<h3 className="text-2xl mb-1 text-[#1C1C1E] font-medium tracking-tight">Lumina Skin</h3>
<p className="text-[#71717A] text-lg font-light">Headless + Subscription</p>
</div>
<div className="p-3 rounded-full bg-[#F5F5F0] text-[#1C1C1E] group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1C1E] text-[#F5F5F0] py-24 overflow-hidden rounded-t-[3rem] relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#FF3B30]"></div>
<span className="text-sm font-semibold uppercase tracking-wider text-[#FF3B30]">Client Results</span>
</div>
<h2 className="text-4xl lg:text-6xl mb-8 text-[#F5F5F0] font-medium tracking-tight">Results that speak for themselves.</h2>

<div className="bg-[#2C2C2E] border border-white/5 p-10 rounded-[2rem] max-w-lg relative mb-10 min-h-[300px] flex flex-col justify-between transition-all" id="testimonial-card">
<div className="">
<span className="iconify text-[#FF3B30] text-4xl mb-6" data-icon="solar:quote-up-square-bold-duotone"></span>
<div className="transition-opacity duration-500 opacity-100" id="testimonial-content">
<p className="text-xl text-[#D4D4D8] italic mb-6 leading-relaxed font-light">
                                "Velour completely transformed our digital presence. We saw a 200% increase in mobile conversions within the first month of launching the new site."
                            </p>
<div>
<div className="font-medium text-[#F5F5F0] text-lg">Sarah Jenkins</div>
<div className="text-[#71717A] text-sm">Founder, Glow Co.</div>
</div>
</div>
</div>

<div className="flex gap-2 mt-8">
<div className="h-1 rounded-full bg-[#FF3B30] w-8 transition-all duration-300" id="indicator-0"></div>
<div className="h-1 rounded-full bg-white/20 w-8 transition-all duration-300" id="indicator-1"></div>
<div className="h-1 rounded-full bg-white/20 w-8 transition-all duration-300" id="indicator-2"></div>
</div>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F5F0] text-[#1C1C1E] rounded-full font-medium hover:bg-[#EBEBE6] transition-colors" href="#">
                    Read Case Studies
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
<div className="relative h-full min-h-[500px]">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
<img className="opacity-30 mix-blend-overlay w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-20 -left-10 bg-[#F5F5F0] text-[#1C1C1E] p-6 rounded-[2rem] shadow-2xl max-w-xs hidden lg:block transform transition-all duration-700 hover:-translate-y-2" id="bubble-card">
<p className="text-sm font-medium leading-relaxed mb-4" id="bubble-text">"Our AOV increased by $15 overnight. The design paid for itself in a week."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" id="bubble-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=50&amp;h=50"/>
<div>
<div className="font-bold text-xs" id="bubble-name">David Kim</div>
<div className="text-xs text-[#52525B]" id="bubble-role">CEO, TechGear</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-4 items-end">
<div className="flex items-center gap-3 text-right bg-[#1C1C1E]/80 backdrop-blur px-4 py-2 rounded-full border border-white/10">
<div className="text-xs text-[#A1A1AA]">
<div className="font-bold text-[#F5F5F0]">Shopify</div>
<div className="">Plus Partner</div>
</div>
<img className="w-8 h-8 rounded-full border border-white/20 grayscale" src="https://images.unsplash.com/photo-1622675363311-ac97f3a9a340?auto=format&amp;fit=crop&amp;w=50&amp;h=50"/>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#1C1C1E] mb-0 pr-6 pb-6 pl-6">
<div className="lg:p-24 overflow-hidden group text-center bg-[#2C2C2E] max-w-7xl border-white/5 border rounded-[2.5rem] mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 relative">
<h2 className="text-4xl lg:text-6xl text-[#F5F5F0] font-medium tracking-tight mb-6 relative z-10">Ready to scale your brand?</h2>
<p className="text-[#A1A1AA] text-lg max-w-xl mx-auto mb-10 relative z-10">
                We are currently accepting new projects for Q4. Book a discovery call to see if we're a good match.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
<a className="px-8 py-4 bg-[#FF3B30] text-white rounded-full font-semibold text-lg hover:bg-[#D70015] transition-colors shadow-lg" href="#">
                    Book Discovery Call
                </a>
<a className="px-8 py-4 border border-white/20 text-[#F5F5F0] rounded-full font-semibold text-lg hover:bg-white/5 transition-colors" href="#">
                    View Pricing
                </a>
</div>

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF3B30] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5F5F0] rounded-full blur-[100px] opacity-5 group-hover:opacity-10 transition-opacity"></div>
</div>
</div>

<footer className="bg-[#1C1C1E] border-white/5 border-t mt-0 mb-0 pt-24 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-[#FF3B30]" data-icon="solar:bag-bold-duotone" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11.996 6.833a4.004 4.004 0 0 1 4 4v1.834h-8v-1.834a4.004 4.004 0 0 1 4-4" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M3.568 15.688a2.766 2.766 0 0 1 2.37-2.764l1.344-.191v2.1a1.25 1.25 0 0 0 2.5 0v-2.457l4.428-.633v3.09a1.25 1.25 0 0 0 2.5 0v-3.447l1.353-.193a2.766 2.766 0 0 1 3.136 2.368l.492 3.938c.38 3.04-2.19 5.501-5.253 5.501H7.558c-3.063 0-5.633-2.46-5.253-5.5l.493-3.943q.385 3.125.77 2.13z" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-xl font-semibold tracking-tight text-[#F5F5F0]">Velour</span>
</div>
<p className="text-[#71717A] text-sm leading-relaxed max-w-xs mb-6">
                        We build e-commerce experiences that people love and algorithms reward. Based in NYC, serving brands globally.
                    </p>
<div className="flex gap-4">
<a className="text-[#A1A1AA] hover:text-[#FF3B30] transition-colors" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:twitter" height="1em" role="img" viewbox="0 0 256 209" width="1.23em" xmlns="http://www.w3.org/2000/svg"><path d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45" fill="currentColor"></path></svg></a>
<a className="text-[#A1A1AA] hover:text-[#FF3B30] transition-colors" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:linkedin-icon" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg></a>
<a className="text-[#A1A1AA] hover:text-[#FF3B30] transition-colors" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:github-icon" height="1em" role="img" viewbox="0 0 256 250" width="1.03em" xmlns="http://www.w3.org/2000/svg"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" fill="currentColor"></path></svg></a>
</div>
</div>
<div className="">
<h4 className="text-[#F5F5F0] font-medium mb-6">Services</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">Shopify Development</a></li>
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">UX/UI Design</a></li>
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">Migrations</a></li>
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">Conversion Audit</a></li>
</ul>
</div>
<div className="">
<h4 className="text-[#F5F5F0] font-medium mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li className=""><a className="hover:text-[#FF3B30] transition-colors" href="#">Our Work</a></li>
<li className=""><a className="hover:text-[#FF3B30] transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-[#FF3B30] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-[#F5F5F0] font-medium mb-6">Legal</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#FF3B30] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#52525B] text-sm">© 2024 Velour Agency Inc. All rights reserved.</p>
<div className="flex gap-2 text-sm text-[#52525B]">
<span className="flex items-center gap-1">Made with <svg className="w-3 h-3 text-[#FF3B30]" fill="currentColor" viewbox="0 0 20 20"><path clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fill-rule="evenodd"></path></svg> in NYC</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
