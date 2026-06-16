import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


                                            (function() {
                                                const canvas = document.currentScript.parentElement;
                                                const ctx = canvas.getContext('2d');
                                                if (!ctx || typeof Chart === 'undefined') return;
                                                
                                                const gradient = ctx.createLinearGradient(0, 0, 0, 80);
                                                gradient.addColorStop(0, 'rgba(168,85,247,0.35)');
                                                gradient.addColorStop(1, 'rgba(168,85,247,0.02)');
                                                
                                                new Chart(ctx, {
                                                    type: 'line',
                                                    data: {
                                                        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
                                                        datasets: [{
                                                            data: [12,8,6,4,3,2,4,8,15,25,35,42,38,45,52,48,44,38,32,28,24,20,16,14],
                                                            tension: 0.35,
                                                            fill: true,
                                                            backgroundColor: gradient,
                                                            borderColor: '#a855f7',
                                                            borderWidth: 1.5,
                                                            pointRadius: 0
                                                        }]
                                                    },
                                                    options: {
                                                        responsive: true,
                                                        maintainAspectRatio: false,
                                                        plugins: { legend: { display: false }, tooltip: { enabled: false } },
                                                        scales: { x: { display: false }, y: { display: false } }
                                                    }
                                                });
                                            })();
                                        


                                            (function() {
                                                const canvas = document.currentScript.parentElement;
                                                const ctx = canvas.getContext('2d');
                                                if (!ctx || typeof Chart === 'undefined') return;
                                                
                                                const grad = ctx.createLinearGradient(0, 0, 0, 300);
                                                grad.addColorStop(0, 'rgba(168,85,247,0.35)');
                                                grad.addColorStop(1, 'rgba(168,85,247,0.02)');
                                                
                                                new Chart(ctx, {
                                                    type: 'line',
                                                    data: {
                                                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                                        datasets: [{
                                                            label: 'Messages',
                                                            data: [145, 167, 203, 189, 234, 156, 198],
                                                            tension: 0.35,
                                                            fill: true,
                                                            backgroundColor: grad,
                                                            borderColor: '#a855f7',
                                                            borderWidth: 1.5,
                                                            pointRadius: 0
                                                        }]
                                                    },
                                                    options: {
                                                        responsive: true,
                                                        maintainAspectRatio: false,
                                                        plugins: {
                                                            legend: { display: false },
                                                            tooltip: {
                                                                backgroundColor: 'rgba(0,0,0,0.8)',
                                                                borderColor: 'rgba(255,255,255,0.08)',
                                                                borderWidth: 1,
                                                                padding: 10,
                                                                titleColor: '#fff',
                                                                bodyColor: '#d1d5db',
                                                                displayColors: false
                                                            }
                                                        },
                                                        scales: {
                                                            x: {
                                                                grid: { color: 'rgba(255,255,255,0.06)' },
                                                                ticks: { color: '#a3a3a3', font: { size: 11 } }
                                                            },
                                                            y: {
                                                                grid: { color: 'rgba(255,255,255,0.06)' },
                                                                ticks: { color: '#a3a3a3', font: { size: 11 } }
                                                            }
                                                        }
                                                    }
                                                });
                                            })();
                                        


        // Initialize Lucide icons
        window.addEventListener('DOMContentLoaded', () => {
            if (window.lucide && window.lucide.createIcons) {
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
        });

        // Scroll progress
        const progressEl = document.getElementById('scroll-progress');
        function setProgress() {
            const h = document.documentElement;
            const st = h.scrollTop || document.body.scrollTop;
            const sh = h.scrollHeight - h.clientHeight;
            progressEl.style.width = (sh ? (st / sh) * 100 : 0) + '%';
        }
        setProgress();
        window.addEventListener('scroll', setProgress, { passive: true });

        // Header hide on scroll
        const header = document.getElementById('site-header');
        let lastY = window.pageYOffset;
        window.addEventListener('scroll', () => {
            const y = window.pageYOffset;
            if (y > lastY && y > 80) header.classList.add('-translate-y-full');
            else header.classList.remove('-translate-y-full');
            lastY = y;
        }, { passive: true });

        // Smooth scroll
        function smoothScrollTo(targetId) {
            const el = document.querySelector(targetId);
            if (!el) return;
            const headerH = header?.offsetHeight || 64;
            const top = el.getBoundingClientRect().top + window.pageYOffset - headerH + 6;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href');
                const target = href && document.querySelector(href);
                if (!href || !target) return;
                e.preventDefault();
                smoothScrollTo(href);
            });
        });

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear().toString();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute w-full h-full top-0 left-0 -z-10" data-us-project="K7xzrAoejHe2lHXqTJzm"></div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 w-0 z-[60] to-blue-400" id="scroll-progress" style={{width: '77.2107%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-white/5 transition-transform duration-300 will-change-transform" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-blue-600">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12h.01"></path>
<path d="M12 12h.01"></path>
<path d="M16 12h.01"></path>
<path d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
</span>
<span className="text-lg tracking-tight">FlowChat</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 px-2">
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#product">Product</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#analytics">Analytics</a>
<a className="hover:text-white transition text-sm text-gray-300 pt-2 pr-3 pb-2 pl-3" data-nav-link="" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#try">
                        Sign in
                    </a>
<button aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-14" id="overview">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">
<div className="max-w-3xl mr-auto ml-auto">
<span className="text-xs uppercase tracking-wider text-blue-300/90">New: Voice messages</span>
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-medium tracking-tight mt-3">
                        Connect. Collaborate. Create without limits.
                    </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
                        FlowChat brings teams together with seamless messaging, 
                        smart channels, and powerful collaboration tools.
                    </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#try">
                            Start chatting
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-gray-100 bg-white/5 border-white/10 border rounded-full px-5 py-3 backdrop-blur-lg" href="#product">
                            Watch demo
                            <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=160&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 border-black bg-blue-400 flex items-center justify-center text-black text-xs">
                                10k+
                            </div>
</div>
<div className="">
<p className="text-sm text-gray-100">10,000+ teams connected</p>
<p className="text-sm text-gray-400">From startups to enterprise</p>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl mt-6 mr-auto ml-auto">
<div className="relative overflow-hidden text-left bg-gray-900/50 border-white/10 border rounded-2xl shadow-2xl backdrop-blur-lg">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-3">
<div className="relative">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
<svg className="w-4 h-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="m22 21-3-3"></path>
<circle cx="20" cy="7" r="3"></circle>
</svg>
</span>
<span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-blue-400 rounded-full border-2 border-black"></span>
</div>
<div>
<p className="text-sm font-medium">Product Team</p>
<p className="text-xs text-gray-400">12 members • 3 online</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-blue-400/10 px-2 py-1 text-xs text-blue-300 ring-1 ring-blue-400/20">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
</svg>
                                    Active
                                </span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-0 h-80">

<div className="bg-black/20 border-white/10 border-r pt-4 pr-4 pb-4 pl-4">
<div className="space-y-3">
<div className="">
<p className="text-xs text-gray-400 mb-2">CHANNELS</p>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-sm">
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                                general
                                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-400 hover:text-white">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                                product-updates
                                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-400 hover:text-white">
<span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                                                design
                                            </div>
</div>
</div>
<div className="">
<p className="text-xs text-gray-400 mb-2">DIRECT MESSAGES</p>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-400 hover:text-white">
<div className="relative">
<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
<div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-blue-400 rounded-full border border-black"></div>
</div>
                                                Sarah Chen
                                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-400 hover:text-white">
<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                                Alex Park
                                            </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 flex flex-col">
<div className="flex-1 p-4 space-y-4 overflow-y-auto">

<div className="flex items-start gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium">Sarah Chen</span>
<span className="text-xs text-gray-400">2:34 PM</span>
</div>
<p className="text-sm text-gray-300 mt-1">Great work on the new onboarding flow! The conversion rates look promising 🚀</p>
</div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium">Alex Park</span>
<span className="text-xs text-gray-400">2:35 PM</span>
</div>
<p className="text-sm text-gray-300 mt-1">Thanks! Should we schedule a review session for next week?</p>
</div>
</div>

<div className="flex items-start gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=64&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex items-baseline gap-2">
<span className="text-sm font-medium">Mike Johnson</span>
<span className="text-xs text-gray-400">2:36 PM</span>
</div>
<p className="text-sm text-gray-300 mt-1">I've attached the updated wireframes</p>
<div className="mt-2 p-3 rounded-lg border border-white/10 bg-white/5 max-w-xs">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
<svg className="text-cyan-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<path d="m14 2 6 6"></path>
</svg>
</div>
<div className="">
<p className="text-xs">wireframes-v2.figma</p>
<p className="text-xs text-gray-400">2.4 MB</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49"></path>
</svg>
<input className="flex-1 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none" placeholder="Type a message..." type="text"/>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-white/10 transition-colors">
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
</svg>
</button>
<button className="p-1.5 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90">Features</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white font-medium">
                        Everything you need for seamless communication
                    </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]" href="#product">
                    Explore features
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="w-5 h-5 text-gray-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12h.01"></path>
<path d="M12 12h.01"></path>
<path d="M16 12h.01"></path>
<path d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Smart messaging</h3>
<p className="mt-2 text-sm text-gray-400">
                        Real-time messaging with threads, reactions, and rich formatting.
                    </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="w-5 h-5 text-gray-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Voice &amp; video</h3>
<p className="mt-2 text-sm text-gray-400">
                        Crystal-clear calls with screen sharing and recording.
                    </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="w-5 h-5 text-gray-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<path d="m14 2 6 6"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">File sharing</h3>
<p className="mt-2 text-sm text-gray-400">
                        Share any file type with drag-and-drop simplicity.
                    </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="w-5 h-5 text-gray-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5"></path>
<path d="M9 8V2"></path>
<path d="M15 8V2"></path>
<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Integrations</h3>
<p className="mt-2 text-sm text-gray-400">
                        Connect tools you love: GitHub, Jira, Google Drive, and more.
                    </p>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16" id="product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl tracking-tight font-medium">
                        Built for modern teams
                    </h2>
<p className="mt-3 text-gray-300">
                        Experience messaging that adapts to how your team works. 
                        Clean, fast, and designed to keep conversations flowing.
                    </p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                            Organize conversations with channels and threads.
                        </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                            Smart notifications that respect your focus.
                        </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                            Powerful search across all your conversations.
                        </li>
</ul>
</div>
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black overflow-hidden">

<div className="p-5">
<div className="grid grid-cols-3 gap-4 mb-4">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-xs text-gray-400">Messages today</p>
<p className="text-lg mt-1">1,247</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-xs text-gray-400">Active users</p>
<p className="text-lg mt-1">89</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-xs text-gray-400">Files shared</p>
<p className="text-lg mt-1">34</p>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-gray-300">Message activity</p>
<span className="text-xs text-gray-400">Last 7 days</span>
</div>
<div className="h-16 w-full">
<div className="w-full h-full">
<canvas className="" height="128" id="activityChart" style={{display: 'block', boxSizing: 'border-box', height: '64px', width: '631px'}} width="1262">

</canvas>
</div>
</div>
</div>
</div>

<div className="px-5 pb-5">
<div className="rounded-xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
<line x1="2" x2="22" y1="2" y2="22"></line>
</svg>
</span>
<div>
<p className="text-sm">Smart suggestion</p>
<p className="text-xs text-gray-400">
                                        Create #design-review channel for this discussion?
                                    </p>
</div>
<button className="ml-auto text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10" type="button">
                                    Create
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="analytics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider text-blue-300/90">Analytics</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-medium">
                        Insights that matter
                    </h2>
<p className="mt-3 text-gray-300">
                        Understand how your team communicates with actionable insights 
                        and engagement metrics.
                    </p>
</div>
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm">Team engagement</p>
<p className="text-xs text-gray-400">Messages per user per day</p>
</div>
<div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-emerald-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="text-blue-300">+24%</span>
</div>
</div>
<div className="mt-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="relative w-full h-64">
<div className="w-full h-full">
<canvas className="" height="512" id="engagementChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '631px'}} width="1262">

</canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">Response time</p>
<p className="text-lg mt-1">2.3 min</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">Active channels</p>
<p className="text-lg mt-1">12</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90">Pricing</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-medium">
                        Simple plans for teams of all sizes
                    </h2>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Free</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Small teams</span>
</div>
<p className="mt-1 text-sm text-gray-400">Perfect for getting started</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium">$0</span><span className="text-sm text-gray-400">forever</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            Up to 10 users
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            10GB file storage
                        </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">Get started</a>
</div>

<div className="rounded-2xl border border-blue-400/30 bg-gradient-to-b from-gray-900/80 to-black p-6 relative">
<div className="absolute -top-3 right-4 px-2 py-1 rounded-full text-xs bg-blue-400 text-black">
                        Most popular
                    </div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Pro</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Growing teams</span>
</div>
<p className="mt-1 text-sm text-gray-300">
                        Everything in Free plus advanced features and integrations.
                    </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium">$8</span><span className="text-sm text-gray-400">/user/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            Unlimited users
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            100GB file storage
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            Advanced analytics
                        </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all" href="#try">Try Pro</a>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Enterprise</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Large teams</span>
</div>
<p className="mt-1 text-sm text-gray-400">
                        Advanced security, compliance, and dedicated support.
                    </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium">Custom</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            SSO &amp; SCIM
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            Data governance
                        </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                            24/7 priority support
                        </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">Contact sales</a>
</div>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-blue-600">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12h.01"></path>
<path d="M12 12h.01"></path>
<path d="M16 12h.01"></path>
<path d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
</svg>
</span>
<span className="text-lg tracking-tight">FlowChat</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md">
                        Connecting teams with seamless, intelligent communication.
                    </p>
</div>
<div className="">
<h4 className="text-sm">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li className=""><a className="hover:text-gray-200" href="#features">Features</a></li>
<li><a className="hover:text-gray-200" href="#product">Product</a></li>
<li><a className="hover:text-gray-200" href="#analytics">Analytics</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200" href="#pricing">Pricing</a></li>
<li className=""><a className="hover:text-gray-200" href="#overview">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">
                    © <span id="year">2025</span> FlowChat. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300" href="#overview">
                        Back to top
                        <svg className="w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
