import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggleBtn || !menu) return;

    const icon = toggleBtn.querySelector('iconify-icon');

    function openMenu() {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'false');
      if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'true');
      if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
      document.body.style.overflow = '';
    }

    function isOpen() {
      return !menu.classList.contains('opacity-0');
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  })();



        // Simple Carousel Logic
        const cards = document.querySelectorAll('.slider-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextCard();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            resetInterval();
        });

        let autoSlide = setInterval(nextCard, 4000);

        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 4000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md fixed top-0 z-[500]">
<div className="flex max-w-7xl mx-auto px-6 h-16 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/50">DS</div>
<span className="font-bold text-lg tracking-tight text-white">Digital Scale</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/solutions">Solutions</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/results">Results</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="/agency">Agency</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 group" href="/contact">
        Get Proposal
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 text-white transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-slate-950 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-white hover:text-blue-400 transition-colors" href="/agency">Agency</a>
<a className="text-3xl font-medium tracking-tight text-white hover:text-blue-400 transition-colors" href="/solutions">Solutions</a>
<a className="text-3xl font-medium tracking-tight text-white hover:text-blue-400 transition-colors" href="/results">Results</a>
</div>


<main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-6 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">Trusted by 200+ Startups</span>
</div>

<h1 className="animate-enter delay-200 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                    Marketing that <br/>
<span className="text-blue-500">scales.</span>
</h1>

<p className="animate-enter delay-300 text-lg text-slate-400 leading-relaxed max-w-md">
                    We combine SEO, paid acquisition, and data analytics to help brands explode their revenue and maximize ROAS.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-blue-600 text-white text-base px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20">
                        Book Strategy Audit
                    </button>
<button className="px-6 py-3 text-slate-300 font-medium hover:text-white flex items-center gap-2 transition-colors border border-slate-800 rounded-lg hover:bg-slate-900 hover:border-slate-700">
                        View ROI Cases
                    </button>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-slate-800 flex gap-12">
<div>
<p className="text-2xl font-bold tracking-tight text-white">$120M+</p>
<p className="text-sm text-slate-500 mt-1">Revenue Generated</p>
</div>
<div>
<p className="text-2xl font-bold tracking-tight text-white">4.8x</p>
<p className="text-sm text-slate-500 mt-1">Average ROAS</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

<div className="relative w-full max-w-sm bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">

<div className="h-12 border-b border-slate-800 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>

<div className="relative w-full aspect-[3/4] bg-slate-950" id="sliderContainer">

<div className="slider-card card-active absolute inset-0 p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Total Revenue</div>
<div className="text-3xl font-bold text-white">$124,500</div>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:graph-up-bold"></iconify-icon>
</div>
</div>

<div className="flex items-end justify-between h-32 gap-2 mb-8">
<div className="w-full bg-slate-800 rounded-t h-[40%] hover:bg-blue-600/50 transition-colors"></div>
<div className="w-full bg-slate-800 rounded-t h-[60%] hover:bg-blue-600/50 transition-colors"></div>
<div className="w-full bg-slate-800 rounded-t h-[30%] hover:bg-blue-600/50 transition-colors"></div>
<div className="w-full bg-slate-800 rounded-t h-[70%] hover:bg-blue-600/50 transition-colors"></div>
<div className="w-full bg-blue-600 rounded-t h-[85%] shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
<div className="w-full bg-slate-800 rounded-t h-[55%] hover:bg-blue-600/50 transition-colors"></div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">New Users</div>
<div className="text-xs text-slate-500">+12% vs last week</div>
</div>
</div>
<div className="text-sm font-bold text-white">2,401</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-900 border border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
<iconify-icon icon="solar:cart-large-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Orders</div>
<div className="text-xs text-slate-500">+5% vs last week</div>
</div>
</div>
<div className="text-sm font-bold text-white">845</div>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">SEO Traffic</div>
<div className="text-3xl font-bold text-white">42.8K</div>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:magnifer-bold"></iconify-icon>
</div>
</div>
<div className="space-y-3 mt-4">
<div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-blue-500 w-[75%]"></div>
</div>
<div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-blue-500 w-[60%]"></div>
</div>
<div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-blue-500 w-[90%]"></div>
</div>
</div>
<div className="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-800">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-400">Keyword Ranking</span>
</div>
<div className="text-lg font-medium text-white">"SaaS Growth Agency"</div>
<div className="text-2xl font-bold text-blue-400 mt-1">#1 Position</div>
</div>
</div>
</div>

<div className="h-14 border-t border-slate-800 flex items-center justify-between px-6 bg-slate-900">
<button className="text-slate-400 hover:text-white transition-colors" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
</div>
<button className="text-slate-400 hover:text-white transition-colors" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 animate-enter delay-500 border-t border-slate-800 pt-12">
<p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-8 text-center">Growth partners for modern companies</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<iconify-icon className="text-white" height="26" icon="simple-icons:hubspot" width="86"></iconify-icon>
<iconify-icon className="text-white" height="28" icon="simple-icons:shopify" width="96"></iconify-icon>
<iconify-icon className="text-white" height="24" icon="simple-icons:slack" width="86"></iconify-icon>
<iconify-icon className="text-white" height="28" icon="simple-icons:zapier" width="96"></iconify-icon>
<iconify-icon className="text-white" height="30" icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon className="text-white" height="26" icon="simple-icons:airtable" width="92"></iconify-icon>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-slate-800">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 animate-enter">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Full-stack <span className="text-blue-500">digital growth.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors" href="#">
            View all capabilities
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-enter delay-100">

<div className="group bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500/50 transition-colors duration-300">
<div className="w-12 h-12 bg-slate-800 text-blue-500 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">SEO &amp; Organic</h3>
<p className="text-slate-400 leading-relaxed text-sm">Technical SEO, content strategy, and authority building to capture high-intent search traffic.</p>
</div>

<div className="group bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500/50 transition-colors duration-300">
<div className="w-12 h-12 bg-slate-800 text-blue-500 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Paid Media (PPC)</h3>
<p className="text-slate-400 leading-relaxed text-sm">Profit-focused ad campaigns across Google, Meta, and LinkedIn that scale with your revenue.</p>
</div>

<div className="group bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500/50 transition-colors duration-300">
<div className="w-12 h-12 bg-slate-800 text-blue-500 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Email &amp; Retention</h3>
<p className="text-slate-400 leading-relaxed text-sm">Automated flows and newsletters that turn one-time buyers into loyal, high-LTV customers.</p>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 pb-24 border-t border-slate-800 pt-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 animate-enter delay-200">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-4">SaaS Growth</span>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Scaling B2B leads with SEO &amp; Ads
            </h2>
<p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
                TechFlow needed to lower their CAC and increase qualified demos. We implemented a full-funnel strategy.
            </p>
<div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-6 w-full max-w-sm">
<div>
<div className="text-3xl font-bold tracking-tight text-white mb-1">340%</div>
<div className="text-sm text-slate-500">Inbound Leads</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-white mb-1">-42%</div>
<div className="text-sm text-slate-500">Cost Per Lead</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="aspect-video rounded-xl overflow-hidden relative shadow-2xl border border-slate-800 bg-slate-900">
<img alt="TechFlow Campaign" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-enter delay-300">
<div className="order-1">
<div className="aspect-video rounded-xl overflow-hidden relative shadow-2xl border border-slate-800 bg-slate-900">
<img alt="Lumina Strategy" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>
</div>
<div className="order-2 flex flex-col items-start">
<span className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-4">E-commerce</span>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Maximizing ROAS with Retention
            </h2>
<p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
                We shifted Lumina's focus from pure acquisition to increasing LTV through advanced email flows.
            </p>
<div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-6 w-full max-w-sm">
<div>
<div className="text-3xl font-bold tracking-tight text-white mb-1">5.2x</div>
<div className="text-sm text-slate-500">Total ROAS</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-white mb-1">65%</div>
<div className="text-sm text-slate-500">Repeat Rate</div>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 py-24 bg-slate-900/30 border-y border-slate-800">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">Our Process</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            We let the data do the talking
        </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 animate-enter delay-100">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-slate-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center shadow-lg mb-6">
<iconify-icon className="text-blue-500" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">1. Data Audit</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs">We analyze your analytics and market fit to find hidden opportunities.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/40 mb-6">
<iconify-icon className="text-white" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">2. Omnichannel Launch</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs">We deploy campaigns across Search, Social, and Email simultaneously.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center shadow-lg mb-6">
<iconify-icon className="text-blue-500" icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">3. Optimize &amp; Scale</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs">We A/B test creatives and targeting to lower CPA and increase budget.</p>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-enter">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col justify-center">
<iconify-icon className="text-blue-600 mb-8" icon="solar:quote-up-bold" width="32"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug mb-8">
                "They didn't just run ads; they built a revenue engine that transformed our business."
            </h3>
<div className="flex items-center gap-3 mt-auto">
<div>
<p className="text-sm font-semibold text-white">David Park</p>
<p className="text-sm text-slate-500">CMO, Veloce Systems</p>
</div>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden relative group min-h-[300px]">
<img alt="Office Analytics" className="w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-80" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-slate-950/80 backdrop-blur-md px-6 py-4 rounded-xl border border-slate-800 flex items-center justify-between">
<span className="text-slate-400 text-sm">YoY Growth</span>
<span className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                        +240% <iconify-icon icon="solar:graph-new-bold"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-800">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Vanity metrics vs. Revenue
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-enter delay-100">

<div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
<h3 className="text-xl font-semibold text-slate-400 mb-6 flex items-center gap-3">
                Traditional Agencies
            </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Focus on "likes" and impressions</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Opaque reporting structures</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Long-term lock-in contracts</span>
</li>
</ul>
</div>

<div className="bg-blue-600/5 rounded-2xl p-8 border border-blue-600/20 relative overflow-hidden">
<h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Digital Scale
            </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Focus on Revenue, ROAS &amp; CAC</span>
</li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Live 24/7 Data Dashboards</span>
</li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Flexible Performance Agreements</span>
</li>
</ul>
</div>
</div>
</section>
<section className="w-full max-w-3xl mx-auto px-6 py-24 border-t border-slate-800">
<div className="mb-12 text-center animate-enter">
<h2 className="text-3xl font-bold tracking-tight text-white">
            Frequently Asked Questions
        </h2>
</div>
<div className="flex flex-col gap-3 animate-enter delay-100">

<details className="group bg-slate-900 rounded-lg border border-slate-800 overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium text-white hover:bg-slate-800/50">
                Do you guarantee results?
                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                We work on performance-based models where possible. While no agency can guarantee market conditions, our incentives are aligned with your revenue growth.
            </div>
</details>

<details className="group bg-slate-900 rounded-lg border border-slate-800 overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium text-white hover:bg-slate-800/50">
                Which channels are best for B2B?
                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                For B2B, we typically focus on LinkedIn Ads, Google Search (high intent), and SEO content marketing to drive qualified leads rather than just traffic.
            </div>
</details>

<details className="group bg-slate-900 rounded-lg border border-slate-800 overflow-hidden transition-all duration-300">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium text-white hover:bg-slate-800/50">
                What is your minimum budget?
                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                To see significant statistical significance and results, we recommend a minimum ad spend of $5k/month, plus our management fee.
            </div>
</details>
</div>
</section>
<footer className="w-full border-t border-slate-800 bg-slate-950 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-enter">

<div className="flex flex-col justify-center items-start text-left">
<h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                    Ready to dominate your market?
                </h2>
<p className="text-slate-400 mb-8 max-w-md">Get a free marketing audit. We'll show you exactly where you're losing money and how to fix it.</p>
<div className="flex gap-4">
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30">
                        Get Free Audit
                    </button>
<button className="px-6 py-3 text-slate-300 font-medium hover:text-white border border-slate-800 rounded-lg hover:bg-slate-900">
                        Contact Sales
                    </button>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-16 flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<span className="font-bold text-xs">DS</span>
</div>
<span className="font-bold text-white tracking-tight">Digital Scale</span>
</div>
<p className="text-xs text-slate-500 mb-6">Data-driven growth for ambitious brands.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-3">
<span className="text-xs font-bold text-white uppercase tracking-wider">Services</span>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">SEO &amp; Organic</a>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">PPC &amp; Ads</a>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">Email Marketing</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-bold text-white uppercase tracking-wider">Company</span>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">About Us</a>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">Case Studies</a>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-bold text-white uppercase tracking-wider">Legal</span>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">Privacy</a>
<a className="text-sm text-slate-400 hover:text-blue-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-800 flex justify-between text-[10px] text-slate-600 font-medium">
<span>© 2025 Digital Scale. All rights reserved.</span>
<span>Built for growth.</span>
</div>
</div>
</footer>

    </>
  );
}
