import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
primary: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#3b82f6', // Focus Blue
600: '#2563eb',
900: '#1e3a8a',
},
dark: {
bg: '#0A0A0A',
card: '#111111',
border: '#222222'
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Dark Mode Logic
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        });

        // Timeline "Game" Logic
        document.addEventListener('scroll', () => {
            const journeySection = document.getElementById('journey');
            const progressLine = document.getElementById('progressLine');
            const stations = document.querySelectorAll('.station-node');
            const avatar = document.getElementById('avatar');
            
            const rect = journeySection.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate progress through the section
            // Start filling when section top hits middle of viewport
            let progress = 0;
            const startOffset = windowHeight / 2;
            
            if (sectionTop < startOffset) {
                const scrolled = startOffset - sectionTop;
                // Stop calculating when reaching bottom
                const maxScroll = sectionHeight - windowHeight; // Rough approximation for end padding
                progress = Math.min(scrolled, sectionHeight); 
            }

            // Update Line Height
            progressLine.style.height = `${Math.max(0, progress)}px`;

            // Active State for Stations
            stations.forEach((station) => {
                const stationRect = station.getBoundingClientRect();
                const stationPoint = station.querySelector('.node-point');
                const triggerPoint = windowHeight / 2;

                if (stationRect.top < triggerPoint + 50) {
                    station.classList.remove('opacity-40');
                    station.classList.add('opacity-100');
                    stationPoint.classList.add('bg-primary-500', 'border-primary-100', 'node-active');
                    stationPoint.classList.remove('bg-zinc-200', 'dark:bg-zinc-700', 'border-white', 'dark:border-black');
                } else {
                    station.classList.add('opacity-40');
                    station.classList.remove('opacity-100');
                    stationPoint.classList.remove('bg-primary-500', 'border-primary-100', 'node-active');
                    stationPoint.classList.add('bg-zinc-200', 'dark:bg-zinc-700', 'border-white', 'dark:border-black');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 glass-panel transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity" href="#">
                L. KISLYUK
            </a>
<div className="flex items-center gap-6">
<div className="hidden sm:flex gap-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#journey">Journey</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#projects">Projects</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#blog">Blog</a>
</div>
<button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500" id="themeToggle">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative w-full overflow-hidden">

<section className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">

<div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl filter"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl filter"></div>
</div>
<div className="max-w-3xl w-full z-10 space-y-8 text-center sm:text-left">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Open to new opportunities
                    </div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                        Bridging engineering <br className="hidden sm:block"/>with <span className="text-zinc-400 dark:text-zinc-500">user needs.</span>
</h1>
<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
                        Technical Product Leader &amp; Analytics Engineer. I build data infrastructures and AI products that solve complex problems with engineering precision and product empathy.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200" href="#journey">
<span>Start Interactive Journey</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 px-8 text-sm font-medium text-zinc-600 dark:text-zinc-300 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50" href="#">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                        Resume PDF
                    </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-dark-card py-12">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight">5+</div>
<div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Years Exp.</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight">$200K</div>
<div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">TVL Managed</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight">20TB</div>
<div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Data Processed</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight">95%</div>
<div className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Accuracy</div>
</div>
</div>
</section>

<section className="py-32 relative" id="journey">
<div className="max-w-6xl mx-auto px-6 mb-16">
<h2 className="text-2xl font-medium tracking-tight mb-2">Career Roadmap</h2>
<p className="text-zinc-500 dark:text-zinc-400">Navigate through my professional evolution.</p>
</div>
<div className="relative max-w-4xl mx-auto px-6">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 md:-translate-x-1/2 h-full z-0"></div>

<div className="absolute left-6 md:left-1/2 top-0 w-px bg-primary-500 md:-translate-x-1/2 z-0 transition-all duration-100 ease-out" id="progressLine" style={{height: '0px'}}></div>

<div className="sticky top-1/2 left-6 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white dark:bg-black border-2 border-primary-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300" id="avatar">
<iconify-icon className="text-primary-500 text-xs" icon="solar:routing-2-linear"></iconify-icon>
</div>

<div className="space-y-32 relative z-10 pb-32 pt-12">

<div className="station-node relative grid md:grid-cols-2 gap-8 md:gap-16 items-center opacity-40 transition-opacity duration-500" data-index="0">
<div className="md:text-right order-2 md:order-1">
<span className="font-mono text-xs text-primary-600 dark:text-primary-500 mb-2 block">May 2025 - Dec 2025</span>
<h3 className="text-xl font-medium tracking-tight">Pupas AI</h3>
<p className="text-zinc-500 text-sm mt-2">Lead Analytics Engineer</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full -translate-x-1/2 border-2 border-white dark:border-black transition-colors duration-300 node-point"></div>
<div className="order-3 md:order-2 pl-12 md:pl-0">
<div className="bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-6 rounded-xl shadow-sm">
<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                                    Architected an autonomous yield optimization protocol on Waves blockchain. Built AI agents achieving 190% APY and managed $200K TVL.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">LangChain</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">RAG</span>
</div>
</div>
</div>
</div>

<div className="station-node relative grid md:grid-cols-2 gap-8 md:gap-16 items-center opacity-40 transition-opacity duration-500" data-index="1">
<div className="order-2 md:order-2">
<span className="font-mono text-xs text-primary-600 dark:text-primary-500 mb-2 block">Dec 2023 - May 2025</span>
<h3 className="text-xl font-medium tracking-tight">Pygma.me</h3>
<p className="text-zinc-500 text-sm mt-2">Technical Product &amp; Analytics</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full -translate-x-1/2 border-2 border-white dark:border-black transition-colors duration-300 node-point"></div>
<div className="order-3 md:order-1 md:text-right pl-12 md:pl-0">
<div className="bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-6 rounded-xl shadow-sm">
<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                                    Built end-to-end analytics infrastructure for an AI copilot. Processed 20TB of Instagram data and achieved 78% attribution accuracy.
                                </p>
<div className="flex flex-wrap gap-2 md:justify-end">
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">BigQuery</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">dbt</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">Python</span>
</div>
</div>
</div>
</div>

<div className="station-node relative grid md:grid-cols-2 gap-8 md:gap-16 items-center opacity-40 transition-opacity duration-500" data-index="2">
<div className="md:text-right order-2 md:order-1">
<span className="font-mono text-xs text-primary-600 dark:text-primary-500 mb-2 block">Mar 2023 - Jun 2024</span>
<h3 className="text-xl font-medium tracking-tight">Aero eCommerce</h3>
<p className="text-zinc-500 text-sm mt-2">Senior Data Engineer</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full -translate-x-1/2 border-2 border-white dark:border-black transition-colors duration-300 node-point"></div>
<div className="order-3 md:order-2 pl-12 md:pl-0">
<div className="bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-6 rounded-xl shadow-sm">
<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                                    Scaled data infra for 50M daily records. Reduced storage costs by 30% while maintaining 95% data accuracy via Great Expectations.
                                </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">Airflow</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">Clickhouse</span>
</div>
</div>
</div>
</div>

<div className="station-node relative grid md:grid-cols-2 gap-8 md:gap-16 items-center opacity-40 transition-opacity duration-500" data-index="3">
<div className="order-2 md:order-2">
<span className="font-mono text-xs text-primary-600 dark:text-primary-500 mb-2 block">Jun 2019 - Sep 2022</span>
<h3 className="text-xl font-medium tracking-tight">Glowbyte</h3>
<p className="text-zinc-500 text-sm mt-2">Data Engineer</p>
</div>
<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-zinc-200 dark:bg-zinc-700 rounded-full -translate-x-1/2 border-2 border-white dark:border-black transition-colors duration-300 node-point"></div>
<div className="order-3 md:order-1 md:text-right pl-12 md:pl-0">
<div className="bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-6 rounded-xl shadow-sm">
<p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                                    Developed 13 enterprise integrations managing 1500 tables. Reduced data latency by 30%.
                                </p>
<div className="flex flex-wrap gap-2 md:justify-end">
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">PostgreSQL</span>
<span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-[10px] uppercase font-mono rounded text-zinc-500">Greenplum</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 dark:bg-[#0A0A0A]" id="projects">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-white">Selected Works</h2>
<p className="mt-2 text-zinc-500 max-w-md">Engineering infrastructure and product logic.</p>
</div>
<a className="text-sm font-medium text-zinc-900 dark:text-white flex items-center gap-1 hover:opacity-70" href="#">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-8 card-hover">
<div className="flex flex-col h-full justify-between relative z-10">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white">Pygma AI Copilot</h3>
<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
                                        Comprehensive analytics system for an AI Instagram tool. Implemented precise event tracking across the user funnel, connecting marketing spend to product usage.
                                    </p>
</div>
</div>
<div className="flex gap-2 mt-8">
<span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400">BigQuery</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400">Mixpanel</span>
</div>
</div>

<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-50 to-transparent dark:from-blue-900/10 opacity-50 rounded-tl-full"></div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-8 card-hover">
<div className="flex flex-col h-full justify-between">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white">Web3 Analytics</h3>
<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    Managed data warehousing for 6 blockchains (EVM, Tron, Near) enabling real-time investment decisions.
                                </p>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-8 card-hover">
<div className="flex flex-col h-full justify-between">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white">Pupas AI DeFi</h3>
<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    Autonomous yield optimizer agents.
                                </p>
</div>
</div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border p-8 card-hover">
<div className="flex flex-col h-full justify-between relative z-10">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white">Aero Data Warehouse</h3>
<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
                                        Optimization of storage and compute for high-volume eCommerce data. Automated ETL pipelines ensuring data quality for critical business reporting.
                                    </p>
</div>
</div>
<div className="flex gap-2 mt-8">
<span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400">Clickhouse</span>
<span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400">Airflow</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
<div className="max-w-6xl mx-auto px-6">
<p className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-6">Technologies &amp; Tools</p>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-zinc-600 dark:text-zinc-400">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Python
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:database-linear"></iconify-icon> SQL / Clickhouse
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:cloud-linear"></iconify-icon> BigQuery
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:infinity-linear"></iconify-icon> Airflow / dbt
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> Mixpanel / GA4
                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:stars-linear"></iconify-icon> LangChain
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-dark-card border-t border-zinc-200 dark:border-dark-border" id="blog">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight mb-8">Recent Thinking</h2>
<div className="space-y-6">
<article className="group cursor-pointer">
<div className="flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-zinc-100 dark:border-zinc-800">
<h3 className="text-lg font-medium group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                                Optimizing dbt pipelines for scale
                            </h3>
<span className="text-sm text-zinc-400 font-mono mt-2 md:mt-0">Jan 15, 2026</span>
</div>
</article>
<article className="group cursor-pointer">
<div className="flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-zinc-100 dark:border-zinc-800">
<h3 className="text-lg font-medium group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                                Bridging the gap: Engineering vs. Product needs
                            </h3>
<span className="text-sm text-zinc-400 font-mono mt-2 md:mt-0">Dec 10, 2025</span>
</div>
</article>
<article className="group cursor-pointer">
<div className="flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-zinc-100 dark:border-zinc-800">
<h3 className="text-lg font-medium group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
                                Building autonomous agents with LangGraph
                            </h3>
<span className="text-sm text-zinc-400 font-mono mt-2 md:mt-0">Nov 22, 2025</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 dark:bg-dark-bg">
<div className="max-w-2xl mx-auto text-center space-y-8">
<h2 className="text-3xl font-medium tracking-tight">Ready to collaborate?</h2>
<p className="text-zinc-500">I'm currently exploring opportunities where I can leverage both my engineering background and product vision.</p>
<div className="flex flex-col items-center gap-4">
<a className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity" href="mailto:ls.kislyuk@gmail.com">
                        ls.kislyuk@gmail.com
                    </a>
<div className="flex gap-6 mt-4">
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="24"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
<div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs text-zinc-400">
<div>© 2026 Lev Kislyuk</div>
<div>Designed in Linear Style</div>
</div>
</footer>
</main>


    </>
  );
}
