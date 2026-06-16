import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize lucide icons properly
    function initializeIcons() {
      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons({ 
          strokeWidth: 1.5,
          attrs: {
            class: ''
          }
        });
      }
    }

    // Wait for DOM and lucide to load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeIcons, 100);
      });
    } else {
      setTimeout(initializeIcons, 100);
    }

    // Also try after a delay to catch late-loading scripts
    setTimeout(initializeIcons, 500);
    setTimeout(initializeIcons, 1000);

    // Enhanced staggered entrance animation with fade, slide, and blur
    document.addEventListener('DOMContentLoaded', function() {
      const items = document.querySelectorAll('[data-animate]');
      items.forEach((el, i) => {
        // Set initial state with opacity, transform, and blur
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.filter = 'blur(4px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0px)';
          el.style.filter = 'blur(0px)';
        }, 150 * i + 200);
      });
    });

    // Chart.js
    const ctx = document.getElementById('metricsChart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
          datasets: [
            {
              label: 'Active users',
              data: [180, 220, 260, 300, 360, 420, 500, 580],
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(79,70,229,0.12)',
              fill: true,
              tension: 0.3,
              pointRadius: 2
            },
            {
              label: 'Interactions',
              data: [800, 950, 1100, 1240, 1400, 1550, 1750, 1980],
              borderColor: '#a78bfa',
              backgroundColor: 'rgba(167,139,250,0.06)',
              fill: true,
              tension: 0.3,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#475569' }
            },
            y: {
              grid: { color: '#f3f4f6' },
              ticks: { beginAtZero: true, color: '#475569' }
            }
          },
          elements: {
            line: { borderWidth: 2 }
          }
        }
      });
    }

    // Export current page as HTML
    document.getElementById('downloadHtml').addEventListener('click', function() {
      const html = '<!doctype html>\n' + document.documentElement.outerHTML;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'helioai-about.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="min-h-screen bg-slate-400 pt-10 pr-4 pb-10 pl-4">
<div className="mx-auto max-w-6xl bg-white rounded-3xl shadow-xl p-5 md:p-8 ring-1 ring-gray-100" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>

<header className="flex items-center justify-between gap-4 py-3 md:py-4 border-b border-gray-100/60" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex ring-1 ring-indigo-100 bg-indigo-50 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/309994dc-b445-4320-977f-88a9de7ec26a_320w.jpg)] bg-cover rounded-lg items-center justify-center">
</div>
<div className="">
<div className="text-lg font-semibold tracking-tight text-slate-900">HelioAI</div>
<div className="text-xs text-slate-500">Conversational automation</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Overview</a>
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Integrations</a>
<a className="hover:text-slate-900 transition-colors" href="#">Customers</a>
<a className="hover:text-slate-900 transition-colors" href="#">Careers</a>
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-slate-700 shadow-sm hover:bg-gray-50 transition" id="downloadHtml">
<svg className="lucide lucide-download w-4 h-4 text-slate-600" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
            Export
          </button>
<button aria-label="Sign in" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
            Sign in
          </button>
</div>
</header>

<section className="mt-8 text-center px-2">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
          We make conversations act like teammates
        </h1>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
          HelioAI empowers product, support, and ops teams with trusted AI assistants that automate workflows, drive better outcomes, and maintain human clarity.
        </p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition" href="#">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            Get started
          </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-200 text-sm text-slate-700 hover:bg-gray-50 transition" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            Docs &amp; API
          </a>
</div>
</section>

<section className="mt-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="md:p-6 h-72 flex flex-col ring-1 ring-indigo-50 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex items-center justify-between">
<div className="">
<div className="text-3xl md:text-4xl font-semibold text-indigo-700">+12×</div>
<div className="text-xs text-indigo-600 mt-1">faster routing &amp; resolution</div>
</div>
<div className="text-sm text-slate-500">Q2 2025</div>
</div>
<p className="text-sm text-indigo-800 opacity-90">Customers reduce turnaround and scale support without growing headcount.</p>
</article>

<article className="rounded-2xl overflow-hidden h-72 md:h-72" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="3d workspace render" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c970e64e-4e4d-43e9-8f63-5c51988ae9a5_800w.jpg" style={{}}/>
</article>

<article className="rounded-2xl overflow-hidden h-72" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="team discussion" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d2f892c-1a8f-4733-920a-6b2b10cc656a_800w.jpg" style={{}}/>
</article>

<article className="rounded-2xl overflow-hidden h-48 md:h-48" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="face portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d230d27-880b-420e-8e5d-f8db82dfc9bc_800w.jpg" style={{}}/>
</article>

<article className="rounded-2xl overflow-hidden h-48 md:h-48" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="3d render" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2d847a64-3da6-465f-9293-b3aa773faab1_800w.jpg" style={{}}/>
</article>

<article className="bg-yellow-50 rounded-2xl p-6 h-48 flex flex-col justify-center ring-1 ring-yellow-50" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="text-3xl font-semibold text-yellow-700">2.8M</div>
<p className="text-sm mt-2 text-yellow-800/90">monthly interactions handled with confidence</p>
</article>
</div>
</section>

<section className="mt-12">
<div className="overflow-hidden bg-slate-800 rounded-3xl shadow-2xl border border-slate-700">
<div className="grid grid-cols-1 lg:grid-cols-3 flex-1">

<div className="relative lg:border-r border-slate-600 flex flex-col min-h-[400px] lg:min-h-auto">
<div className="p-6 lg:p-8">
<p className="uppercase text-xs font-semibold tracking-wider text-slate-300 leading-snug max-w-xs">
            Network Infrastructure. 
            <span className="normal-case font-normal text-slate-400">Real-time monitoring of nodes, data centers, and edge points across global regions with comprehensive analytics.</span>
</p>
</div>
<div className="flex-1 flex bg-gradient-to-br from-indigo-900/20 to-blue-900/20 p-6 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-center opacity-30 bg-cover bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7be87323-3ef9-4ba2-a522-2b9f432e29ce_800w.jpg)]"></div>
<div className="relative z-10 text-center">
<h3 className="text-xl font-semibold text-white mb-2">1,240 Active Nodes</h3>
<p className="text-slate-300 text-sm">99.8% Uptime • Global Scale</p>
</div>
</div>
</div>

<div className="relative lg:border-r border-slate-600 flex flex-col min-h-[400px] lg:min-h-auto border-t lg:border-t-0">
<div className="p-6 lg:p-8">
<p className="uppercase text-xs font-semibold tracking-wider text-slate-300 leading-snug max-w-xs">
            SmartSync Technology™ 
            <span className="normal-case font-normal text-slate-400">Intelligent cross-region synchronization keeps your network performance, health metrics, and alerts perfectly coordinated.</span>
</p>
</div>
<div className="flex-1 flex bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-6 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-center opacity-20 bg-cover bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c971ca15-2f95-49f2-bf48-60b6ba4a00cb_800w.jpg)]"></div>
<div className="relative z-10 space-y-4">
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
<div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div>
<p className="text-white font-medium text-sm">Throughput</p>
<p className="text-slate-400 text-xs">1.8 Gbps average</p>
</div>
</div>
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Latency</p>
<p className="text-slate-400 text-xs">24ms median</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col relative overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f312e75-9342-40ad-b24f-6aef51ca0cde_800w.jpg)] bg-cover">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-12 -translate-x-12"></div>
<div className="flex items-start justify-between p-6 lg:p-8 relative z-10">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<span className="text-xl font-medium text-gray-900">Network Hub</span>
</div>
<div className="flex space-x-3 text-gray-900">
<div className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<div className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 01 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
</div>
</div>
</div>
<div className="lg:px-8 relative z-10 pr-6 pl-6">
<h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-medium text-gray-900 tracking-tighter">
            Everything you need <span className="text-gray-700">to monitor.</span>
</h2>
<p className="lg:mt-6 max-w-sm lg:text-base leading-relaxed text-sm text-gray-800 mt-4">
            Designed for operators, built for scale. Each monitoring suite includes real-time alerts, bandwidth analytics, and advanced performance metrics.
          </p>
</div>
<div className="lg:px-8 lg:pb-8 relative z-10 mt-auto pr-6 pb-6 pl-6">
<div className="h-px bg-gray-900/20 w-full my-6 lg:my-8"></div>
<div className="flex items-start space-x-4">
<div className="relative flex-shrink-0">
<div className="p-3 lg:p-4 bg-gray-900 rounded-2xl shadow-lg">
<svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">∞</span>
</div>
<div className="min-w-0">
<h3 className="font-semibold text-gray-900 mb-1">Network Infrastructure Suite</h3>
<p className="leading-relaxed text-sm text-gray-800">
                Complete visibility into network health, performance analytics, automated scaling, and 87% peak bandwidth utilization monitoring.
              </p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:px-8 lg:py-8 bg-slate-900 border-slate-600 border-t pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row sm:items-center max-w-6xl mx-auto items-start justify-between">
<div className="sm:mb-0 mb-4">
<p className="uppercase leading-snug text-xs font-semibold text-slate-300 tracking-wider max-w-md">
            Premium Monitoring App. 
            <span className="normal-case font-normal text-slate-400">
              Hand-crafted dashboard experience with intelligent alerts, real-time metrics, and voice notifications keeps your infrastructure always within reach.
            </span>
</p>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span>Updated 2m ago</span>
<span className="text-slate-600">•</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<span>Live monitoring</span>
</div>
</div>
</div>
</div>
</section><section className="mt-12">
<div className="text-center mb-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your team's needs. All plans include our core AI automation features with different scale and support levels.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Most Popular</div>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-semibold text-slate-900">$29</span>
<span className="text-slate-600 ml-1">/month</span>
</div>
<p className="text-sm text-slate-500 mt-1">Per team, billed monthly</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Up to 5 team members</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">10,000 monthly interactions</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Basic automation workflows</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Email support</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Dashboard &amp; analytics</span>
</li>
</ul>
<button className="w-full px-4 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">
        Start free trial
      </button>
</div>

<div className="bg-white rounded-2xl border-2 border-indigo-200 p-6 shadow-md relative">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<div className="px-4 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">Recommended</div>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Professional</h3>
<div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
<svg className="w-4 h-4 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-semibold text-slate-900">$89</span>
<span className="text-slate-600 ml-1">/month</span>
</div>
<p className="text-sm text-slate-500 mt-1">Per team, billed monthly</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Up to 25 team members</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">100,000 monthly interactions</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Advanced automation + AI workflows</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Priority support + phone</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Custom integrations</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Advanced analytics &amp; reporting</span>
</li>
</ul>
<button className="w-full px-4 py-3 bg-lg hover:bg-indigo-700 transition">
        Start free trial
      </button>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
<svg className="w-4 h-4 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline">
<span className="text-3xl font-semibold text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-500 mt-1">Contact our sales team</p>
</div>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Unlimited team members</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Unlimited interactions</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">Enterprise AI &amp; automation</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">24/7 dedicated support</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">SOC2 + custom compliance</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">On-premise deployment</span>
</li>
</ul>
<button className="w-full px-4 py-3 bg-white border border-gray-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition">
        Contact sales
      </button>
</div>
</div>

<div className="mt-12 max-w-4xl mx-auto">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 text-center mb-8">Frequently asked questions</h3>
<div className="space-y-6">
<div className="bg-white rounded-lg border border-gray-200 p-6">
<h4 className="font-medium text-slate-900 mb-2">What happens when I exceed my interaction limit?</h4>
<p className="text-sm text-slate-600">We'll notify you before you reach your limit. You can upgrade your plan or purchase additional interactions at $0.01 per interaction.</p>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-6">
<h4 className="font-medium text-slate-900 mb-2">Can I change plans anytime?</h4>
<p className="text-sm text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
</div>
<div className="bg-white rounded-lg border border-gray-200 p-6">
<h4 className="font-medium text-slate-900 mb-2">Do you offer annual billing discounts?</h4>
<p className="text-sm text-slate-600">Yes! Save 20% when you pay annually. All annual plans include priority support and additional integrations at no extra cost.</p>
</div>
</div>
</div>
</section>

<section className="mt-10">
<h3 className="text-lg font-semibold tracking-tight text-slate-900" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>Leadership</h3>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white shadow-sm" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="CEO" className="w-12 h-12 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6162ef84-31c5-4614-b111-1c518c2fdee2_320w.jpg" style={{}}/>
<div>
<div className="text-sm font-medium text-slate-900">Ava Marin</div>
<div className="text-xs text-slate-500">Founder &amp; CEO</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white shadow-sm" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="CTO" className="w-12 h-12 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/693ff39c-ae32-4a13-b334-cd4af1c3552d_320w.jpg" style={{}}/>
<div>
<div className="text-sm font-medium text-slate-900">Ravi Chopra</div>
<div className="text-xs text-slate-500">CTO</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white shadow-sm" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<img alt="Head of Ops" className="w-12 h-12 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86b50377-9709-4c6e-9fd3-8a4012c81092_320w.jpg" style={{}}/>
<div>
<div className="text-sm font-medium text-slate-900">Morgan Lee</div>
<div className="text-xs text-slate-500">Head of Operations</div>
</div>
</div>
</div>
</section>

<section className="mt-8 border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', filter: 'blur(0px)', transition: '0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-8 h-8 flex items-center justify-center rounded-sm bg-indigo-50 ring-1 ring-indigo-100 text-indigo-600 font-semibold tracking-tight">H</div>
<div>
<div className="text-sm text-slate-900">HelioAI</div>
<div className="text-xs text-slate-500">AI that works with your team</div>
</div>
</div>
<div className="text-sm text-slate-500">© <span id="year">2025</span> HelioAI. All rights reserved.</div>
</section>
</div>
</main>


    </>
  );
}
