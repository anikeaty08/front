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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('border-stone-200/60', 'border-stone-200');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('border-stone-200', 'border-stone-200/60');
            }
        });

        // Tab Switching Logic
        function switchTab(index) {
            // Reset Tabs
            for(let i=0; i<3; i++) {
                const tab = document.getElementById(`tab-${i}`);
                const panel = document.getElementById(`panel-${i}`);
                
                // Reset styling
                tab.classList.remove('bg-white', 'border-stone-200', 'shadow-sm');
                tab.classList.add('border-transparent');
                
                const iconContainer = tab.querySelector('.rounded-full');
                iconContainer.classList.remove('bg-teal-50', 'text-teal-700');
                iconContainer.classList.add('bg-stone-100', 'text-stone-600');
                
                // Hide panel
                panel.classList.add('hidden');
                panel.classList.remove('fade-in');
            }

            // Set Active Tab
            const activeTab = document.getElementById(`tab-${index}`);
            const activePanel = document.getElementById(`panel-${index}`);
            
            activeTab.classList.add('bg-white', 'border-stone-200', 'shadow-sm');
            activeTab.classList.remove('border-transparent');
            
            const activeIcon = activeTab.querySelector('.rounded-full');
            activeIcon.classList.remove('bg-stone-100', 'text-stone-600');
            activeIcon.classList.add('bg-teal-50', 'text-teal-700');
            
            activePanel.classList.remove('hidden');
            // Trigger reflow for animation
            void activePanel.offsetWidth; 
            activePanel.classList.add('fade-in');
        }

        // Gamification Logic
        let currentScore = 0;
        let unlockedCount = 0;
        const totalModules = 6;

        function unlock(element, points, name) {
            if(element.dataset.unlocked === "true") return;

            // Mark as unlocked
            element.dataset.unlocked = "true";
            
            // Visual changes
            element.classList.remove('border-stone-200', 'hover:border-teal-300');
            element.classList.add('border-teal-500', 'bg-teal-50/30');
            
            const icon = element.querySelector('iconify-icon');
            icon.classList.remove('text-stone-400');
            icon.classList.add('text-teal-600');

            // Add checkmark
            const check = document.createElement('div');
            check.className = 'absolute top-4 right-4 text-teal-600 fade-in';
            check.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-lg"></iconify-icon>';
            element.appendChild(check);

            // Update State
            currentScore += points;
            unlockedCount++;

            // Update UI
            document.getElementById('score').innerText = currentScore;
            document.getElementById('progress-text').innerText = `${unlockedCount}/${totalModules} Unlocked`;
            document.getElementById('progress-bar').style.width = `${(unlockedCount/totalModules)*100}%`;

            showToast(`Unlocked ${name} (+${points} pts)`);

            if(unlockedCount === totalModules) {
                setTimeout(() => showToast('🎉 All features unlocked!'), 1500);
            }
        }

        // Toast Logic
        let toastTimeout;
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = message;
            
            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3000);
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="tracking-tighter font-semibold text-lg text-teal-900">WS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#integrations">Integrations</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#explore">Explore</a>
</div>
<button className="text-xs font-medium bg-teal-800 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors flex items-center gap-2" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">
                Get Started
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
<div className="bg-orb orb-1"></div>
<div className="bg-orb orb-2"></div>
<div className="max-w-3xl mx-auto text-center z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm text-xs font-medium text-stone-600 mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                Now live — D2C + Marketplace analytics
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-stone-900 leading-tight mb-6">
                One Platform. <br/>
<span className="text-teal-800">Total Clarity.</span>
</h1>
<p className="text-lg font-light text-stone-500 max-w-xl mx-auto mb-10 leading-relaxed">
                Connect your ad channels, track every funnel step, and act on insights — without switching tabs.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="h-12 px-6 rounded-full bg-teal-800 text-white text-sm font-medium hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2" onclick="document.getElementById('cta').scrollIntoView({behavior:'smooth'})">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
                    Start Free Trial
                </button>
<button className="h-12 px-6 rounded-full bg-transparent border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-all flex items-center gap-2" onclick="showToast('Demo booking opens soon')">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>
</section>

<div className="w-full border-y border-stone-200 bg-white/50 backdrop-blur-sm overflow-hidden py-4 flex relative z-10">
<div className="flex whitespace-nowrap animate-marquee items-center">

<div className="flex items-center gap-12 px-6">
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">₹3.6CR+</span><span className="text-xs text-stone-500 font-light">Revenue tracked</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">40M+</span><span className="text-xs text-stone-500 font-light">Impressions</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">3.52x</span><span className="text-xs text-stone-500 font-light">Avg. ROAS</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">8.1%</span><span className="text-xs text-stone-500 font-light">CVR Boost</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">Multi-channel</span><span className="text-xs text-stone-500 font-light">Meta · Google · Amazon</span></div>
</div>
<div className="flex items-center gap-12 px-6">
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">₹3.6CR+</span><span className="text-xs text-stone-500 font-light">Revenue tracked</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">40M+</span><span className="text-xs text-stone-500 font-light">Impressions</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">3.52x</span><span className="text-xs text-stone-500 font-light">Avg. ROAS</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">8.1%</span><span className="text-xs text-stone-500 font-light">CVR Boost</span></div>
<div className="w-1 h-1 rounded-full bg-stone-300"></div>
<div className="flex items-center gap-3"><span className="text-lg font-semibold text-stone-800 tracking-tight">Multi-channel</span><span className="text-xs text-stone-500 font-light">Meta · Google · Amazon</span></div>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-6xl mx-auto" id="features">
<div className="mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-2 block">What it does</span>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Everything your team needs, in one view.</h2>
<p className="text-lg text-stone-500 font-light max-w-2xl">Click a feature to explore the live dashboard preview.</p>
</div>
<div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

<div className="flex flex-col gap-2 relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 z-0 hidden lg:block"></div>
<button className="group text-left p-6 rounded-2xl border border-transparent hover:bg-white hover:border-stone-200 hover:shadow-sm transition-all z-10 bg-white border-stone-200 shadow-sm" id="tab-0" onclick="switchTab(0)">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-1">Business Summary</h3>
<p className="text-sm font-light text-stone-500">Revenue, sessions, ROAS and conversions across all channels.</p>
</div>
</div>
</button>
<button className="group text-left p-6 rounded-2xl border border-transparent hover:bg-white hover:border-stone-200 hover:shadow-sm transition-all z-10" id="tab-1" onclick="switchTab(1)">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-teal-50 flex items-center justify-center text-stone-600 group-hover:text-teal-700 shrink-0 transition-colors">
<iconify-icon className="text-xl" icon="solar:funnel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-1">Full Funnel View</h3>
<p className="text-sm font-light text-stone-500">Track every stage from Impressions to Purchase accurately.</p>
</div>
</div>
</button>
<button className="group text-left p-6 rounded-2xl border border-transparent hover:bg-white hover:border-stone-200 hover:shadow-sm transition-all z-10" id="tab-2" onclick="switchTab(2)">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-teal-50 flex items-center justify-center text-stone-600 group-hover:text-teal-700 shrink-0 transition-colors">
<iconify-icon className="text-xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-1">Campaign Manager</h3>
<p className="text-sm font-light text-stone-500">Launch, monitor and optimise across Meta, Google &amp; Amazon.</p>
</div>
</div>
</button>
</div>

<div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-2 h-[480px] overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-12 bg-stone-50 border-b border-stone-100 flex items-center px-4 gap-2 rounded-t-xl z-20">
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300"></div>
</div>

<div className="pt-16 p-6 h-full w-full bg-stone-50/50 rounded-b-xl fade-in" id="panel-0">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-stone-800">Overview</span>
<span className="text-xs px-2 py-1 bg-white border border-stone-200 rounded text-stone-500 shadow-sm">Last 7 Days</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 border border-stone-100 rounded-xl shadow-sm">
<div className="text-xs text-stone-500 mb-1">Total Revenue</div>
<div className="text-2xl tracking-tight font-medium text-stone-900">₹2.26M</div>
<div className="text-xs text-teal-600 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 44.6%</div>
</div>
<div className="bg-white p-4 border border-stone-100 rounded-xl shadow-sm">
<div className="text-xs text-stone-500 mb-1">ROAS</div>
<div className="text-2xl tracking-tight font-medium text-stone-900">3.52x</div>
<div className="text-xs text-amber-600 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 7.9%</div>
</div>
<div className="bg-white p-4 border border-stone-100 rounded-xl shadow-sm">
<div className="text-xs text-stone-500 mb-1">Spends</div>
<div className="text-2xl tracking-tight font-medium text-stone-900">₹641K</div>
</div>
<div className="bg-white p-4 border border-stone-100 rounded-xl shadow-sm">
<div className="text-xs text-stone-500 mb-1">Conversion</div>
<div className="text-2xl tracking-tight font-medium text-stone-900">8.1%</div>
</div>
</div>
</div>

<div className="pt-16 p-6 h-full w-full bg-stone-50/50 rounded-b-xl hidden fade-in" id="panel-1">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-stone-800">Funnel (Meta Ads)</span>
</div>
<div className="space-y-3">
<div className="relative h-10 w-full bg-teal-800 rounded-md flex items-center px-4 justify-between text-white text-xs font-medium">
<span>Impressions</span><span>8.02M</span>
</div>
<div className="relative h-10 w-[85%] bg-teal-700 rounded-md flex items-center px-4 justify-between text-white text-xs font-medium">
<span>Clicks</span><span>10.5K</span>
</div>
<div className="relative h-10 w-[65%] bg-teal-600 rounded-md flex items-center px-4 justify-between text-white text-xs font-medium">
<span>Landing Page</span><span>6.1K</span>
</div>
<div className="relative h-10 w-[40%] bg-teal-500 rounded-md flex items-center px-4 justify-between text-white text-xs font-medium">
<span>Checkout</span><span>594</span>
</div>
<div className="relative h-10 w-[20%] bg-teal-400 rounded-md flex items-center px-4 justify-between text-stone-900 text-xs font-medium">
<span>Purchase</span><span>140</span>
</div>
</div>
</div>

<div className="pt-16 p-6 h-full w-full bg-stone-50/50 rounded-b-xl hidden fade-in" id="panel-2">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-stone-800">Active Campaigns</span>
</div>
<div className="space-y-3">
<div className="bg-white border border-stone-100 p-4 rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#1877f2] text-white flex items-center justify-center font-medium text-xs">f</div>
<div>
<div className="text-sm font-medium text-stone-900">Retargeting_V2</div>
<div className="text-xs text-stone-500">Meta Ads</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-teal-800">3.5x</div>
<div className="text-[10px] text-stone-400 uppercase">ROAS</div>
</div>
</div>
<div className="bg-white border border-stone-100 p-4 rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#ea4335] text-white flex items-center justify-center font-medium text-xs">G</div>
<div>
<div className="text-sm font-medium text-stone-900">Brand_Search</div>
<div className="text-xs text-stone-500">Google Ads</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-teal-800">2.8x</div>
<div className="text-[10px] text-stone-400 uppercase">ROAS</div>
</div>
</div>
<div className="bg-white border border-stone-100 p-4 rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#ff9900] text-white flex items-center justify-center font-medium text-xs">A</div>
<div>
<div className="text-sm font-medium text-stone-900">Spons_Prod_Top</div>
<div className="text-xs text-stone-500">Amazon Ads</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-teal-800">4.1x</div>
<div className="text-[10px] text-stone-400 uppercase">ROAS</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200" id="explore">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 text-center">
<span className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-2 block">Interactive Explorer</span>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Unlock the platform.</h2>
<p className="text-lg text-stone-500 font-light max-w-xl mx-auto">Click modules to explore features and earn points.</p>
</div>
<div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-200">
<div className="flex items-center gap-2 text-lg font-medium text-stone-900">
<iconify-icon className="text-teal-700" icon="solar:map-linear"></iconify-icon>
                        Platform Map
                    </div>
<div className="flex items-center gap-4">
<div className="text-sm font-light text-stone-500"><span id="progress-text">0/6 Unlocked</span></div>
<div className="bg-white border border-stone-200 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm text-sm">
<iconify-icon className="text-amber-500" icon="solar:star-linear"></iconify-icon>
<span className="font-medium text-stone-900" id="score">0</span> pts
                        </div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
<button className="game-tile text-left p-6 bg-white border border-stone-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all relative group cursor-pointer" onclick="unlock(this, 20, 'WeavrWise AI')">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-teal-600 mb-4 block transition-colors" icon="solar:magic-stick-3-linear"></iconify-icon>
<h4 className="text-sm font-medium text-stone-900 mb-1">WeavrWise AI</h4>
<p className="text-xs text-stone-500 font-light">Ask your data anything, naturally.</p>
</button>
<button className="game-tile text-left p-6 bg-white border border-stone-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all relative group cursor-pointer" onclick="unlock(this, 15, 'Custom Reports')">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-teal-600 mb-4 block transition-colors" icon="solar:document-text-linear"></iconify-icon>
<h4 className="text-sm font-medium text-stone-900 mb-1">Custom Reports</h4>
<p className="text-xs text-stone-500 font-light">Schedule &amp; export branded reports.</p>
</button>
<button className="game-tile text-left p-6 bg-white border border-stone-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all relative group cursor-pointer" onclick="unlock(this, 15, 'Market Places')">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-teal-600 mb-4 block transition-colors" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-medium text-stone-900 mb-1">Market Places</h4>
<p className="text-xs text-stone-500 font-light">Amazon &amp; Flipkart management.</p>
</button>
<button className="game-tile text-left p-6 bg-white border border-stone-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all relative group cursor-pointer" onclick="unlock(this, 10, 'Dayparting')">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-teal-600 mb-4 block transition-colors" icon="solar:clock-circle-linear"></iconify-icon>
<h4 className="text-sm font-medium text-stone-900 mb-1">Dayparting</h4>
<p className="text-xs text-stone-500 font-light">Hourly budget control by day.</p>
</button>
<button className="game-tile text-left p-6 bg-white border border-stone-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all relative group cursor-pointer" onclick="unlock(this, 20, 'Keyword Tracker')">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-teal-600 mb-4 block transition-colors" icon="solar:key-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-medium text-stone-900 mb-1">Keyword Tracker</h4>
<p className="text-xs text-stone-500 font-light">Match type &amp; bid optimisation.</p>
</button>
<button className="game-tile text-left p-6 bg-white border border-stone-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-all relative group cursor-pointer" onclick="unlock(this, 20, 'Smart Alerts')">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-teal-600 mb-4 block transition-colors" icon="solar:bell-linear"></iconify-icon>
<h4 className="text-sm font-medium text-stone-900 mb-1">Smart Alerts</h4>
<p className="text-xs text-stone-500 font-light">Real-time ROAS &amp; budget tracking.</p>
</button>
</div>
<div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-teal-600 transition-all duration-700 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto text-center" id="integrations">
<span className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-2 block">Integrations</span>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Plug in. Start seeing.</h2>
<p className="text-lg text-stone-500 font-light mb-12">Connect your stack in minutes — no engineering required.</p>
<div className="flex flex-wrap justify-center gap-3">
<div className="px-4 py-2 border border-stone-200 rounded-full bg-white text-sm font-medium text-stone-700 flex items-center gap-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-green-500"></span> Meta Ads</div>
<div className="px-4 py-2 border border-stone-200 rounded-full bg-white text-sm font-medium text-stone-700 flex items-center gap-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-green-500"></span> Google Ads</div>
<div className="px-4 py-2 border border-stone-200 rounded-full bg-white text-sm font-medium text-stone-700 flex items-center gap-2 shadow-sm"><span className="w-2 h-2 rounded-full bg-green-500"></span> Shopify</div>
<div className="px-4 py-2 border border-stone-200 rounded-full bg-white text-sm font-medium text-stone-700 flex items-center gap-2 shadow-sm text-stone-400 border-dashed hover:border-stone-300 cursor-pointer transition-colors" onclick="showToast('Initiating connection...')">Amazon Ads +</div>
<div className="px-4 py-2 border border-stone-200 rounded-full bg-white text-sm font-medium text-stone-700 flex items-center gap-2 shadow-sm text-stone-400 border-dashed hover:border-stone-300 cursor-pointer transition-colors" onclick="showToast('Initiating connection...')">Flipkart +</div>
<div className="px-4 py-2 border border-stone-200 rounded-full bg-white text-sm font-medium text-stone-700 flex items-center gap-2 shadow-sm text-stone-400 border-dashed hover:border-stone-300 cursor-pointer transition-colors" onclick="showToast('Initiating connection...')">GA4 +</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 px-6 border-t border-stone-800">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<span className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-2 block">Social Proof</span>
<h2 className="text-3xl font-medium tracking-tight text-white">Results, not dashboards.</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700/50 hover:bg-stone-800 transition-colors">
<p className="text-base font-light italic text-stone-300 mb-6">"Weavr Slate gave us a single source of truth. We cut reporting time from 3 days to 3 hours."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-xs font-medium">P</div>
<div>
<div className="text-sm font-medium">Priya S.</div>
<div className="text-xs text-stone-400">Head of Growth, D2C</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700/50 hover:bg-stone-800 transition-colors">
<p className="text-base font-light italic text-stone-300 mb-6">"The full funnel view changed how we allocate budget. ROAS improved 40% in the first month."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-xs font-medium">R</div>
<div>
<div className="text-sm font-medium">Rohit M.</div>
<div className="text-xs text-stone-400">Performance Lead</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-stone-800/50 border border-stone-700/50 hover:bg-stone-800 transition-colors">
<p className="text-base font-light italic text-stone-300 mb-6">"WeavrWise saved our analyst 10+ hours a week. Just ask it, and it shows you what matters."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-xs font-medium">A</div>
<div>
<div className="text-sm font-medium">Ankita K.</div>
<div className="text-xs text-stone-400">CMO</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center max-w-2xl mx-auto" id="cta">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Ready to see your full funnel?</h2>
<p className="text-lg text-stone-500 font-light mb-8">Setup takes under 10 minutes. No credit card required.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-4" onsubmit="event.preventDefault(); showToast('Check your inbox!'); this.reset();">
<input className="flex-1 h-12 px-4 rounded-xl border border-stone-200 bg-white text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-stone-900 placeholder:text-stone-400" placeholder="Enter work email" required="" type="email"/>
<button className="h-12 px-6 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shrink-0" type="submit">
                Start Free Trial
            </button>
</form>
<div className="text-xs text-stone-400 font-light">Free 14-day trial · Cancel anytime</div>
</section>

<footer className="py-8 px-6 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-stone-500 max-w-6xl mx-auto">
<div>© 2024 Weavr Slate. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>
</footer>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 translate-y-24 opacity-0 bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-xl transition-all duration-300 z-[100] flex items-center gap-2 pointer-events-none" id="toast">
<iconify-icon className="text-teal-400" icon="solar:info-circle-linear"></iconify-icon>
<span id="toast-msg">Notification</span>
</div>


    </>
  );
}
