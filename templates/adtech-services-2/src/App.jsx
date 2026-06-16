import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
blue: '#1877F2',
yellow: '#FCBC32',
dark: '#0a0a0a',
light: '#ffffff',
grey: '#f5f5f5'
}
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
slab: ['Roboto Slab', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-brand-light/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90 transition-all duration-300">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="text-2xl font-bold tracking-tight flex items-center gap-1 group" href="#">
<span className="text-brand-blue">ads</span><span className="text-black dark:text-white transition-colors">remedy</span>
</a>

<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-brand-blue transition-colors" href="#services">Solutions</a>
<a className="hover:text-brand-blue transition-colors" href="#process">Process</a>
<a className="hover:text-brand-blue transition-colors" href="#case-study">Results</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none" id="theme-toggle">
<iconify-icon className="text-xl hidden dark:block" icon="solar:sun-2-linear"></iconify-icon>
<iconify-icon className="text-xl block dark:hidden" icon="solar:moon-stars-linear"></iconify-icon>
</button>

<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md ring-1 ring-brand-blue ring-offset-2 dark:ring-offset-slate-950" href="#">
                        Book a Call
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-5xl">
<h1 className="text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] dark:text-white font-extrabold text-slate-900 tracking-tighter mb-8">
                    Rewiring Advertising <br className="hidden lg:block"/> with Intelligence
                </h1>
<div className="max-w-2xl border-l-2 border-brand-yellow pl-6">
<p className="font-slab text-lg md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        AI-Powered. Human-Driven. Outcome-Focused. We fix fragmented ad landscapes with smart, unified solutions.
                    </p>
</div>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20">
                        Start Optimization
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 dark:bg-transparent dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition-all">
                        View Methodology
                    </button>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
</section>

<section className="py-16 border-y border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-4xl text-brand-yellow" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Experience</span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight mb-2">10+</div>
<p className="font-slab text-slate-500 dark:text-slate-400">Years defining AdTech standards.</p>
</div>

<div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-4xl text-brand-yellow" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Impact</span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight mb-2">$80M+</div>
<p className="font-slab text-slate-500 dark:text-slate-400">Revenue generated for partners.</p>
</div>

<div className="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-4xl text-brand-yellow" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Trust</span>
</div>
<div className="text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight mb-2">400+</div>
<p className="font-slab text-slate-500 dark:text-slate-400">Global publishers served.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-brand-blue font-semibold tracking-wide uppercase text-xs mb-3 block">Solutions</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Ecosystem Architecture</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="p-10 flex-grow relative z-10">
<div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-brand-blue">
<iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">For Publishers</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 mb-8 font-light">
                            Full-stack monetization infrastructure designed to maximize yield without compromising user experience.
                        </p>

<div className="relative w-full aspect-video rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-brand-yellow rounded-tl-lg"></div>
<div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-brand-yellow rounded-br-lg"></div>

<div className="w-full space-y-3 opacity-50">
<div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
<div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-800 rounded"></div>
<div className="flex gap-2 pt-2">
<div className="h-16 w-full bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-200 dark:border-blue-800/30"></div>
<div className="h-16 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
<div className="px-10 py-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
<a className="text-brand-blue font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                            Get Started <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="p-10 flex-grow relative z-10">
<div className="w-12 h-12 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 flex items-center justify-center mb-6 text-brand-yellow">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">For Advertisers</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 mb-8 font-light">
                            Performance-driven impact connecting brands with premium inventory through intelligent targeting.
                        </p>

<div className="relative w-full aspect-video rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 flex items-center justify-center overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-brand-yellow rounded-tr-lg"></div>
<div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-brand-yellow rounded-bl-lg"></div>

<div className="relative w-32 h-32 rounded-full border-8 border-slate-100 dark:border-slate-800 flex items-center justify-center">
<div className="absolute w-full h-full rounded-full border-8 border-brand-blue border-t-transparent border-l-transparent -rotate-45"></div>
<span className="text-2xl font-bold text-slate-300 dark:text-slate-700">%</span>
</div>
</div>
</div>
<div className="px-10 py-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
<a className="text-brand-blue font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                            Launch Campaign <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-slate-950" id="process">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-16 text-center">How We Do It</h2>
<div className="relative">

<div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
<div className="space-y-16">

<div className="group relative flex gap-8 items-start">
<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">01</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Audit &amp; Analysis</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                                We begin by dissecting your current setup. Our AI tools identify leakage points and opportunities for immediate yield improvement.
                            </p>
<div className="h-0.5 w-0 bg-brand-yellow mt-6 group-hover:w-24 transition-all duration-500 ease-out"></div>
</div>
</div>

<div className="group relative flex gap-8 items-start">

<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">02</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Integration &amp; Setup</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                                Seamless implementation of our header bidding wrapper and direct demand tags. Zero downtime, maximum compatibility.
                            </p>
<div className="h-0.5 w-0 bg-brand-yellow mt-6 group-hover:w-24 transition-all duration-500 ease-out"></div>
</div>
</div>

<div className="group relative flex gap-8 items-start">
<div className="relative z-10 w-16 h-16 flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center group-hover:border-brand-blue transition-colors duration-300">
<span className="text-lg font-bold text-slate-400 group-hover:text-brand-blue transition-colors">03</span>
</div>
<div className="pt-3">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Optimization &amp; Scale</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                                Continuous algorithmic adjustments based on real-time data. We scale what works and cut what doesn't.
                            </p>
<div className="h-0.5 w-0 bg-brand-yellow mt-6 group-hover:w-24 transition-all duration-500 ease-out"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" id="case-study">
<div className="max-w-7xl mx-auto px-6">
<div className="relative bg-white dark:bg-slate-950 rounded-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800 overflow-hidden">

<div className="absolute top-0 left-12 w-0.5 h-full bg-slate-100 dark:bg-slate-800"></div>
<div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800"></div>
<div className="absolute top-12 left-12 w-3 h-3 bg-brand-yellow rounded-full z-20"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-brand-blue font-mono text-xs uppercase tracking-widest mb-4 block">Case Study</span>
<h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Bright Mountain Media</h3>
<p className="font-slab text-slate-600 dark:text-slate-400 mb-8">
                            By restructuring the ad stack and implementing server-side header bidding, we increased fill rates by 40% in the first quarter.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-brand-yellow text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                40% Increase in Fill Rate
                            </li>
<li className="flex items-center gap-3 text-sm font-medium">
<iconify-icon className="text-brand-yellow text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                25% Uplift in CPM
                            </li>
</ul>
<a className="text-brand-blue text-sm font-semibold hover:underline decoration-brand-yellow decoration-2 underline-offset-4" href="#">Read full story</a>
</div>

<div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800">
<div className="flex items-end justify-between h-48 gap-2 relative">

<svg className="absolute inset-0 w-full h-full text-brand-blue" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 45 Q 25 45, 30 35 T 50 30 T 70 15 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="opacity-10" d="M0 45 Q 25 45, 30 35 T 50 30 T 70 15 T 100 5 V 50 H 0 Z" fill="url(#gradient)"></path>
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>

<div className="w-full h-px bg-slate-200 dark:bg-slate-800 absolute top-0"></div>
<div className="w-full h-px bg-slate-200 dark:bg-slate-800 absolute top-1/2"></div>
<div className="w-full h-px bg-slate-200 dark:bg-slate-800 absolute bottom-0"></div>
</div>
<div className="flex justify-between mt-4 text-xs font-mono text-slate-400">
<span>Q1</span>
<span>Q2</span>
<span>Q3</span>
<span>Q4</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#f0f0f0] dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Latest Insights</h2>
<a className="text-sm font-semibold text-slate-500 hover:text-brand-blue flex items-center gap-1" href="#">
                    Follow on LinkedIn <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 dark:text-white">Adsremedy</span>
<span className="text-[10px] text-slate-500">2 days ago</span>
</div>
</div>
<p className="font-slab text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        The cookieless future isn't coming; it's already here. Here is how publishers can pivot their data strategy...
                    </p>
<div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded mb-4"></div>
</div>

<div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 dark:text-white">Adsremedy</span>
<span className="text-[10px] text-slate-500">5 days ago</span>
</div>
</div>
<p className="font-slab text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        Programmatic isn't just about automation. It's about transparency. We break down the fee structures...
                    </p>
<div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded mb-4"></div>
</div>

<div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 dark:text-white">Adsremedy</span>
<span className="text-[10px] text-slate-500">1 week ago</span>
</div>
</div>
<p className="font-slab text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        Excited to announce our partnership with Bright Mountain Media. Read the full case study on our site.
                    </p>
<div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded mb-4"></div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">Ready to fix your ad stack?</h2>
<p className="font-slab text-lg text-slate-600 dark:text-slate-400 mb-10 font-light">
                Join the publishers and advertisers generating outcome-focused revenue today.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25" href="#">
                    Schedule Consultation
                </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-900 bg-brand-yellow rounded-lg hover:bg-yellow-400 transition-all shadow-md" href="#">
                    Explore Platform
                </a>
</div>
</div>
</section>

<footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="text-xl font-bold tracking-tight flex items-center gap-1">
<span className="text-brand-blue">ads</span><span className="text-black dark:text-white">remedy</span>
</div>
<div className="w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg flex items-center justify-center font-bold text-xl">
                        ar
                    </div>
</div>

<div>
<h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="hover:text-brand-blue transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="hover:text-brand-blue transition-colors" href="#">For Publishers</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">For Advertisers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 dark:text-white mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="hover:text-brand-blue transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
<p>© 2024 Adsremedy Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-brand-blue" href="#"><iconify-icon className="text-lg" icon="solar:brands-linkedin-linear"></iconify-icon></a>
<a className="hover:text-brand-blue" href="#"><iconify-icon className="text-lg" icon="solar:brands-twitter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
