import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      try {
        if (typeof Chart === 'undefined') return;
        var container = document.getElementById('aura-emfmkg1dd');
        if (!container) return;
        var canvases = container.querySelectorAll('canvas[data-chartjs="true"]');
        canvases.forEach(function (cv) {
          if ((Chart.getChart && Chart.getChart(cv)) || cv._chart) return;
          var type = cv.getAttribute('data-chart-type') || 'pie';
          var labels = [];
          var values = [];
          var colors = [];
          try { labels = JSON.parse(cv.getAttribute('data-chart-labels') || '[]'); } catch (e) {}
          try { values = JSON.parse(cv.getAttribute('data-chart-values') || '[]'); } catch (e) {}
          try { colors = JSON.parse(cv.getAttribute('data-chart-colors') || '[]'); } catch (e) {}
          var chart = new Chart(cv, {
            type: type,
            data: {
              labels: labels,
              datasets: [{
                data: values,
                backgroundColor: colors.length ? colors : undefined,
                borderWidth: 0,
                hoverOffset: 6
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: '#111827',
                  padding: 10,
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  cornerRadius: 10
                }
              }
            }
          });
          cv._chart = chart;
        });
      } catch (e) {}
    })();
  


    // Icons
    lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // FAQ toggles
    document.querySelectorAll('.faq-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.parentElement.querySelector('.faq-content');
        const icon = btn.querySelector('[data-lucide="chevron-down"]');
        if (content) {
          content.classList.toggle('hidden');
        }
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      });
    });

    // Chart.js donut
    const ctx = document.getElementById('allocationChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['AI Infra', 'Climate', 'Open Source', 'Frontier'],
          datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#10E80C', '#111827', '#6B7280', '#D1D5DB'],
            borderWidth: 0,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          cutout: '65%',
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#111827',
              padding: 10,
              titleColor: '#fff',
              bodyColor: '#fff',
              cornerRadius: 10
            }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative">

<nav className="relative z-50 mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex pt-6 pb-6 items-center justify-between">
<div className="flex gap-3 font-bold font-space-grotesk bg-[url(https://nosana.com/_nuxt/img/Nosana_Logo_horizontal_color_white.9b9a5b4.svg?w=800&amp;q=80)] bg-cover items-center" style={{}}>
<div className="w-3 h-3 bg-[url(https://nosana.com/_nuxt/img/Nosana_Logo_horizontal_color_white.9b9a5b4.svg?w=800&amp;q=80)] bg-cover rounded-full" style={{backgroundColor: 'rgb(16, 232, 12)'}}></div>
<span className="sm:text-lg text-base font-bold text-gray-900 font-space-grotesk" style={{}}>NOSNA</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-gray-900 font-geist" href="/home" style={{}}>Home</a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-600 font-geist" href="/grand-guidelines-2" style={{}}>Grant Guidelines</a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-600 font-geist" href="/resources-hub-2" style={{}}>Resource Hub</a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-600 font-geist" href="#faq" style={{}}>FAQ</a>
<a className="inline-flex items-center gap-2 transition-colors text-sm font-medium text-black font-geist rounded-full pt-2 pr-4 pb-2 pl-4" href="/apply-form" style={{backgroundColor: 'rgb(16, 232, 12)'}}>
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            Apply
          </a>
</div>
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="mt-2 rounded-2xl bg-white border border-gray-200 shadow-lg p-3" style={{backdropFilter: 'saturate(180%) blur(12px)'}}>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-900 bg-gray-100 font-geist" href="#overview" style={{}}>Overview</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors font-geist" href="#tracks" style={{}}>Tracks</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors font-geist" href="#timeline" style={{}}>Timeline</a>
<a className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors font-geist" href="#faq" style={{}}>FAQ</a>
<a className="mt-2 block rounded-xl px-4 py-3 text-sm font-medium text-black font-geist" href="#apply" style={{backgroundColor: 'rgb(16, 232, 12)'}}>Apply</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden" id="overview">
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
<div className="lg:px-8 lg:pt-16 relative max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-20 pl-6">
<div className="grid gap-12 lg:grid-cols-12 items-center">

<div className="lg:col-span-6 space-y-8">
<div className="space-y-6">
<p className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 px-3 py-1 rounded-full border border-gray-200 font-geist" style={{}}>
<span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#10E80C'}}></span>
                Non‑dilutive • Global • Fast decisions
              </p>
<h1 className="sm:text-6xl lg:text-7xl leading-none text-5xl font-semibold text-gray-900 tracking-tight font-space-grotesk" style={{}}>Grants to Power the Future of<br/><span className="text-gray-800/70 font-space-grotesk" style={{}}>Decentralized AI</span></h1>
<p className="sm:text-xl leading-relaxed text-lg font-medium text-gray-600 font-geist max-w-xl" style={{}}>The Nosana Grants Program supports developers, researchers and builders 
leveraging decentralized GPU infrastructure to reshape AI inference.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<a className="group inline-flex items-center gap-3 px-7 py-4 text-black rounded-full shadow-sm hover:shadow-md transition-all duration-300 font-geist" href="#apply" style={{backgroundColor: 'rgb(16, 232, 12)'}}>
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Start application
                <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 font-medium border border-gray-300 rounded-full px-7 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-geist" href="#brief" style={{}}>
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
                Program brief (PDF)
              </a>
</div>
<div className="flex items-center gap-8 text-sm text-gray-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-coins w-4 h-4 text-gray-700" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="font-geist" style={{}}>$5M this cohort</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist" style={{}}>0% equity, 0% fees</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-4 h-4 text-gray-700" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="font-geist" style={{}}>Worldwide</span>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">
<div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
<div className="flex items-center justify-between p-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#10E80C'}}></div>
<span className="font-medium text-gray-900 font-geist" style={{}}>Application snapshot</span>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500 font-geist" style={{}}>
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Autosaved
                  </div>
</div>
<div className="p-8 space-y-8">

<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-700 font-geist" style={{}}>Completion</span>
<span className="text-sm text-gray-500 font-geist" style={{}}>60%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="h-2 rounded-full" style={{width: '60%', backgroundColor: '#10E80C'}}></div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-gray-200 p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 font-geist" style={{}}>Founder details</p>
<p className="text-xs text-gray-500 font-geist" style={{}}>Completed</p>
</div>
<svg className="lucide lucide-check w-4 h-4 ml-auto" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="rounded-2xl border border-gray-200 p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-50">
<svg className="lucide lucide-lightbulb w-5 h-5 text-gray-800" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 font-geist" style={{}}>Project overview</p>
<p className="text-xs text-gray-500 font-geist" style={{}}>In progress</p>
</div>
<svg className="lucide lucide-loader-2 w-4 h-4 ml-auto animate-spin text-gray-400" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
<div className="rounded-2xl border border-gray-200 p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-50">
<svg className="lucide lucide-wallet w-5 h-5 text-gray-800" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 font-geist" style={{}}>Budget &amp; use</p>
<p className="text-xs text-gray-500 font-geist" style={{}}>Pending</p>
</div>
<svg className="lucide lucide-clock w-4 h-4 ml-auto text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div className="rounded-2xl border border-gray-200 p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-50">
<svg className="lucide lucide-link-2 w-5 h-5 text-gray-800" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 font-geist" style={{}}>References</p>
<p className="text-xs text-gray-500 font-geist" style={{}}>Pending</p>
</div>
<svg className="lucide lucide-clock w-4 h-4 ml-auto text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>

</div>
</div>

<div className="absolute -top-5 -right-5 w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center" style={{background: 'rgba(16,232,12,0.12)', backdropFilter: 'blur(16px)'}}>
<svg className="lucide lucide-award w-7 h-7 text-gray-900" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center bg-gray-900/80" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-8 text-center border-gray-200 border-t mt-16 pt-10">
<div className="">
<p className="sm:text-4xl text-3xl font-semibold text-gray-900 tracking-tight font-space-grotesk" style={{}}>$5k - $50K</p>
<p className="text-gray-500 font-geist" style={{}}>Max per team</p>
</div>
<div className="">
<p className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk" style={{}}>8 weeks</p>
<p className="text-gray-500 font-geist" style={{}}>From apply to funds</p>
</div>
<div className="">
<p className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk" style={{}}>3 cohorts</p>
<p className="text-gray-500 font-geist" style={{}}>Per year</p>
</div>
</div>
</div>
</section>
</header>

<section className="bg-white pt-20 pb-20">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-left max-w-4xl mr-auto mb-14 ml-0">
<h2 className="sm:text-5xl text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk mb-5" style={{}}>Why We’re Funding the Future</h2>
<p className="sm:text-xl text-lg font-medium text-gray-600 font-geist" style={{}}>The Nosana Grants Program supports initiatives that expand the capabilities, accessibility and adoption of our decentralized GPU. By reducing barriers to compute and enabling scalable, distributed AI inference we aim to unlock innovation in AI applications, tools and infrastructure.</p>
</div>
<div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">

<article className="group overflow-hidden bg-white border-gray-200 rounded-3xl">
<div className="pt-7 pr-7 pb-7 pl-7">
<div className="flex w-14 h-14 rounded-2xl items-center justify-center mb-5" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-cpu w-7 h-7" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2 font-geist" style={{}}>AI Infrastructure</h3>
<p className="text-gray-600 font-geist" style={{}}>Tooling, models, compilers, evals, and safety for scalable AI systems.</p>
</div>
<div className="flex text-sm text-gray-500 border-gray-100 border-t pt-4 pr-7 pb-4 pl-7 items-center justify-between">
<span className="font-geist" style={{}}>Up to $250k</span>
<span className="inline-flex items-center gap-1 font-medium font-geist" style={{color: 'rgb(16, 232, 12)'}}>Learn more <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</article>

<article className="group overflow-hidden bg-white border-gray-200 rounded-3xl">
<div className="pt-7 pr-7 pb-7 pl-7">
<div className="flex w-14 h-14 rounded-2xl items-center justify-center mb-5" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-leaf w-7 h-7" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2 font-geist" style={{}}>Climate Tech</h3>
<p className="text-gray-600 font-geist" style={{}}>Decarbonization, grid intelligence, materials, and carbon removal.</p>
</div>
<div className="px-7 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
<span className="font-geist" style={{}}>Up to $200k</span>
<span className="inline-flex items-center gap-1 font-medium font-geist" style={{color: 'rgb(16, 232, 12)'}}>Learn more <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</article>

<article className="group overflow-hidden bg-white border-gray-200 rounded-3xl">
<div className="pt-7 pr-7 pb-7 pl-7">
<div className="flex w-14 h-14 rounded-2xl items-center justify-center mb-5" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-github w-7 h-7" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2 font-geist" style={{}}>Open Source</h3>
<p className="text-gray-600 font-geist" style={{}}>Foundational libraries and community infrastructure for builders.</p>
</div>
<div className="flex text-sm text-gray-500 border-gray-100 border-t pt-4 pr-7 pb-4 pl-7 items-center justify-between">
<span className="font-geist" style={{}}>Up to $120k</span>
<span className="inline-flex items-center gap-1 font-medium font-geist" style={{color: 'rgb(16, 232, 12)'}}>Learn more <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</article>

<article className="group overflow-hidden bg-white border-gray-200 rounded-3xl">
<div className="pt-7 pr-7 pb-7 pl-7">
<div className="flex w-14 h-14 rounded-2xl items-center justify-center mb-5" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-beaker w-7 h-7" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2 font-geist" style={{}}>Frontier Research</h3>
<p className="text-gray-600 font-geist" style={{}}>Early, high‑risk investigations with potential step‑change outcomes.</p>
</div>
<div className="px-7 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
<span className="font-geist" style={{}}>Up to $150k</span>
<span className="inline-flex items-center gap-1 font-medium font-geist" style={{color: 'rgb(16, 232, 12)'}}>Learn more <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-4xl mb-12">
<h2 className="sm:text-5xl text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk">What Types of Projects Qualify?</h2>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

<article className="group overflow-hidden bg-white border-gray-200 border-0 rounded-3xl">
<div className="overflow-hidden">
<img alt="3D render of layered chip with neon accents" className="sm:h-52 transition-transform duration-300 group-hover:scale-105 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0465d628-a834-480c-8e14-ff665ed9a84b_800w.jpg" style={{}}/>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-geist">Protocol &amp; Core Infrastructure</h3>
<ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2 font-geist">
<li className="">Enhancements to the Nosana network.</li>
<li className="">Optimizations for GPU workload distribution and performance.</li>
<li className="">Security, privacy, and cryptographic innovations.</li>
</ul>
</div>
</article>

<article className="group overflow-hidden bg-white border-gray-200 border-0 rounded-3xl">
<div className="overflow-hidden">
<img alt="3D render of connected nodes and UI layers" className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4bb2c3e7-9367-4d74-b3ef-e74384d9fedb_800w.jpg" style={{}}/>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-geist">Ecosystem &amp; Developer Tooling</h3>
<ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2 font-geist">
<li className="">SDKs, APIs, and CLI tools to improve the developer experience.</li>
<li className="">Open‑source dashboards and monitoring tools.</li>
<li className="">Documentation, tutorials, and technical resources.</li>
</ul>
</div>
</article>

<article className="group overflow-hidden bg-white border-gray-200 border-0 rounded-3xl">
<div className="overflow-hidden">
<img alt="3D render of modular app tiles" className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2708f065-299d-4cc7-b08e-37d986f56c16_800w.jpg" style={{}}/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-geist">AI Application Layer</h3>
<ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2 font-geist">
<li>Decentralized AI model deployment frameworks.</li>
<li className="">Fine‑tuning and inference pipelines optimized for distributed compute.</li>
<li className="">Cross‑platform integrations with existing ML tools.</li>
</ul>
</div>
</article>

<article className="group overflow-hidden bg-white border-gray-200 border-0 rounded-3xl">
<div className="overflow-hidden">
<img alt="3D render of glowing atom over platform" className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/382269e3-aeb0-45b7-ad66-400f34b74ac6_800w.jpg" style={{}}/>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 font-geist">Community &amp; Education</h3>
<ul className="mt-3 list-disc pl-5 text-sm text-gray-600 space-y-2 font-geist">
<li className="">Initiatives that grow the Nosana developer community.</li>
<li>Hackathons, workshops, and training programs.</li>
<li>Educational content to promote decentralized AI adoption.</li>
</ul>
</div>
</article>
</div>
</div>
</section><section className="bg-gray-100 pt-20 pb-20">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center justify-between mb-10">
<h3 className="sm:text-5xl text-4xl font-semibold text-gray-900 tracking-tight font-space-grotesk">Application Process</h3>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition font-geist" href="#apply">
        Apply Now
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<ul className="divide-y divide-gray-200 border-gray-300 border-t">
<li className="pt-6 pb-6">
<div className="grid sm:grid-cols-12 gap-6">
<p className="sm:col-span-5 text-gray-900 font-medium font-geist"><span className="mr-2">1.</span>Proposal Submission</p>
<p className="sm:col-span-7 text-gray-600 font-geist">Complete the online application form with project details, budget and expected milestones.</p>
</div>
</li>
<li className="pt-6 pb-6">
<div className="grid sm:grid-cols-12 gap-6">
<p className="sm:col-span-5 text-gray-900 font-medium font-geist"><span className="mr-2">2.</span>Review &amp; Evaluation</p>
<p className="sm:col-span-7 text-gray-600 font-geist">Our review board assesses proposals based on technical merit, feasibility and ecosystem alignment.</p>
</div>
</li>
<li className="pt-6 pb-6">
<div className="grid sm:grid-cols-12 gap-6">
<p className="sm:col-span-5 font-medium text-gray-900 font-geist"><span className="mr-2">3.</span>Interview <span className="text-gray-500">(if shortlisted)</span></p>
<p className="sm:col-span-7 text-gray-600 font-geist">Selected applicants may present their project and answer questions.</p>
</div>
</li>
<li className="pt-6 pb-6">
<div className="grid sm:grid-cols-12 gap-6">
<p className="sm:col-span-5 text-gray-900 font-medium font-geist"><span className="mr-2">4.</span>Award &amp; Onboarding</p>
<p className="sm:col-span-7 text-gray-600 font-geist">Approved projects receive funding, infrastructure access and mentorship.</p>
</div>
</li>
<li className="py-6">
<div className="grid sm:grid-cols-12 gap-6">
<p className="sm:col-span-5 text-gray-900 font-medium font-geist"><span className="mr-2">5.</span>Milestone Delivery</p>
<p className="sm:col-span-7 text-gray-600 font-geist">Funding is released in tranches upon meeting agreed milestones.</p>
</div>
</li>
<li className="py-6">
<div className="grid sm:grid-cols-12 gap-6">
<p className="sm:col-span-5 text-gray-900 font-medium font-geist"><span className="mr-2">6.</span>Showcase &amp; Integration</p>
<p className="sm:col-span-7 text-gray-600 font-geist">Successful projects are promoted and integrated into the Nosana ecosystem.</p>
</div>
</li>
</ul>
<div className="sm:hidden mt-8">
<a className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition font-geist" href="#apply">
        Apply Now
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section><section className="bg-gray-50 pt-20 pb-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-6">
<div className="bg-white border-gray-200 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6 font-space-grotesk" style={{}}>Eligibility</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 mt-0.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-gray-700 font-geist" style={{}}><span className="font-medium text-gray-900 font-geist" style={{}}>Teams or individuals</span> with demonstrable progress or strong research background.</p>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 mt-0.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-gray-700 font-geist" style={{}}>Work must fit one of our tracks and have a clear public benefit.</p>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 mt-0.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-gray-700 font-geist" style={{}}>Grants are <span className="font-medium text-gray-900 font-geist" style={{}}>non‑dilutive</span> and cannot be used for token sales or debt service.</p>
</li>
</ul>
<div className="mt-6 p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
<svg className="lucide lucide-info w-5 h-5 text-gray-700" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p className="text-sm text-gray-600 font-geist" style={{}}>Students, non‑profits, and for‑profits are all eligible.</p>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="bg-white border-gray-200 rounded-3xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6 font-space-grotesk" style={{}}>What we fund</h3>
<div className="grid sm:grid-cols-2 gap-5">
<div className="rounded-2xl border border-gray-200 p-5">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-blocks w-5 h-5 text-gray-900" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
<p className="font-medium text-gray-900 font-geist" style={{}}>Foundational tooling</p>
</div>
<p className="text-gray-600 text-sm font-geist" style={{}}>SDKs, frameworks, infra primitives, safety &amp; evals.</p>
</div>
<div className="rounded-2xl border border-gray-200 p-5">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-factory w-5 h-5 text-gray-900" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
<p className="font-medium text-gray-900 font-geist" style={{}}>Pilots &amp; deployments</p>
</div>
<p className="text-gray-600 text-sm font-geist" style={{}}>From lab to field with measurable outcomes.</p>
</div>
<div className="rounded-2xl border border-gray-200 p-5">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-flask-conical w-5 h-5 text-gray-900" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
<p className="font-medium text-gray-900 font-geist" style={{}}>Exploratory research</p>
</div>
<p className="text-gray-600 text-sm font-geist" style={{}}>High‑risk ideas with clear path to validation.</p>
</div>
<div className="rounded-2xl border border-gray-200 p-5">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-users w-5 h-5 text-gray-900" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<p className="font-medium text-gray-900 font-geist" style={{}}>Community &amp; education</p>
</div>
<p className="text-gray-600 text-sm font-geist" style={{}}>Docs, curricula, and capacity‑building programs.</p>
</div>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:opacity-90 font-geist" href="#apply" style={{color: 'rgb(16, 232, 12)'}}>
              Check fit and apply <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section><section className="bg-white pt-20 pb-20">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mx-auto max-w-2xl text-center mb-14">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3 font-space-grotesk" style={{}}>Timeline</h3>
<p className="text-lg text-gray-600 font-medium font-geist" style={{}}>Fast, transparent, and supportive from day one.</p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<ol className="space-y-5">
<li className="rounded-2xl border border-gray-200 p-6 flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="">
<p className="font-medium text-gray-900 font-geist" style={{}}>Applications open</p>
<p className="text-sm text-gray-600 font-geist" style={{}}>Rolling until Oct 15</p>
</div>
<span className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-geist" style={{}}>Week 0</span>
</li>
<li className="rounded-2xl border border-gray-200 p-6 flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div>
<p className="font-medium text-gray-900 font-geist" style={{}}>Review &amp; interview</p>
<p className="text-sm text-gray-600 font-geist" style={{}}>30‑minute call with our team</p>
</div>
<span className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-geist" style={{}}>Weeks 1‑2</span>
</li>
<li className="rounded-2xl border border-gray-200 p-6 flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-file-check w-5 h-5" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div>
<p className="font-medium text-gray-900 font-geist" style={{}}>Decision &amp; offer</p>
<p className="text-sm text-gray-600 font-geist" style={{}}>Term‑light grant agreement</p>
</div>
<span className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-geist" style={{}}>Week 3</span>
</li>
<li className="rounded-2xl border border-gray-200 p-6 flex items-start gap-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div>
<p className="font-medium text-gray-900 font-geist" style={{}}>Funds disbursed</p>
<p className="text-sm text-gray-600 font-geist" style={{}}>Milestone‑based or upfront</p>
</div>
<span className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-geist" style={{}}>Week 4</span>
</li>
</ol>
</div>

<div className="lg:col-span-5">
<div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7 h-full">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight mb-1 font-geist" style={{}}>Cohort allocation</h4>
<p className="text-sm text-gray-600 mb-5 font-geist" style={{}}>Illustrative breakdown for $5M pool</p>
<div className="rounded-2xl border border-gray-100 p-5">
<div className="">
<div className="relative">
<div className="">
<div className="">
<div className="mx-auto max-w-xs">
<div className="">
</div>
</div>
<div className="mx-auto max-w-xs mt-6">
<div className="">
<canvas aria-label="Pie chart showing regional distribution: North America 35%, Europe 30%, APAC 20%, Other 15%" className="" data-chart-colors='["#10E80C","#111827","#6B7280","#D1D5DB"]' data-chart-labels='["North America","Europe","APAC","Other"]' data-chart-type="pie" data-chart-values="[35,30,20,15]" data-chartjs="true" height="320" role="img" style={{display: 'block', boxSizing: 'border-box', height: '320px', width: '320px'}} width="320"></canvas>
</div>
</div>

</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: '#10E80C'}}></span>
<span className="text-gray-700 font-geist" style={{}}>AI Infra (40%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span>
<span className="text-gray-700 font-geist" style={{}}>Climate (25%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
<span className="text-gray-700 font-geist" style={{}}>Open Source (20%)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
<span className="text-gray-700 font-geist" style={{}}>Frontier (15%)</span>
</div>
</div>
<div className="mt-6 flex items-center justify-between rounded-xl border border-gray-200 p-4">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield w-5 h-5 text-gray-800" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<p className="text-sm text-gray-700 font-geist" style={{}}>No strings attached</p>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full font-geist" style={{backgroundColor: 'rgba(16, 232, 12, 0.1)', color: 'rgb(10, 158, 8)'}}>Non‑dilutive</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-20 bg-gray-50" id="faq">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-12">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3 font-space-grotesk" style={{}}>Frequently asked</h3>
<p className="text-lg text-gray-600 font-medium font-geist" style={{}}>If you can’t find it here, our team is a message away.</p>
</div>
<div className="grid lg:grid-cols-2 gap-6">

<div className="rounded-2xl border border-gray-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-toggle">
<div className="flex items-center gap-3">
<svg className="lucide lucide-help-circle w-5 h-5 text-gray-800" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="font-medium text-gray-900 font-geist" style={{}}>Do you take equity or tokens?</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-5 pb-5 hidden">
<p className="text-gray-600 font-geist" style={{}}>No. Grants are non‑dilutive and carry no token warrants or fees.</p>
</div>
</div>
<div className="rounded-2xl border border-gray-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-toggle">
<div className="flex items-center gap-3">
<svg className="lucide lucide-building-2 w-5 h-5 text-gray-800" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="font-medium text-gray-900 font-geist" style={{}}>Are non‑profits eligible?</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-5 pb-5 hidden">
<p className="text-gray-600 font-geist" style={{}}>Yes—non‑profits, academic labs, and independent researchers are welcome.</p>
</div>
</div>
<div className="rounded-2xl border border-gray-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-toggle">
<div className="flex items-center gap-3">
<svg className="lucide lucide-clock-3 w-5 h-5 text-gray-800" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium text-gray-900 font-geist" style={{}}>How long do decisions take?</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-5 pb-5 hidden">
<p className="text-gray-600 font-geist" style={{}}>Most applicants hear back in 2 weeks; funds disburse by week 4.</p>
</div>
</div>
<div className="rounded-2xl border border-gray-200 bg-white">
<button className="w-full flex items-center justify-between p-5 text-left faq-toggle">
<div className="flex items-center gap-3">
<svg className="lucide lucide-globe-2 w-5 h-5 text-gray-800" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium text-gray-900 font-geist" style={{}}>Is this program global?</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-5 pb-5 hidden">
<p className="text-gray-600 font-geist" style={{}}>Yes. We support teams in most countries, subject to local regulations.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="apply">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-5">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4 font-space-grotesk" style={{}}>Apply in minutes</h3>
<p className="text-lg text-gray-600 font-medium mb-6 font-geist" style={{}}>We’ll ask for the essentials. You can update your application anytime before the deadline.</p>
<div className="rounded-2xl border border-gray-200 p-5">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10E80C1A'}}>
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: '#10E80C'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 font-geist" style={{}}>Privacy first</p>
<p className="text-xs text-gray-600 font-geist" style={{}}>Your data stays confidential and secure.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="bg-gray-50 rounded-3xl border border-gray-200 p-6 sm:p-8">
<div className="grid sm:grid-cols-2 gap-5">
<div className="col-span-1">
<label className="text-sm text-gray-700 font-geist" style={{}}>Full name</label>
<input className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2" placeholder="Alex Rivera" style={{ringColor: '#10E80C'}} type="text"/>
</div>
<div className="col-span-1">
<label className="text-sm text-gray-700 font-geist" style={{}}>Email</label>
<input className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2" placeholder="alex@team.co" style={{ringColor: '#10E80C'}} type="email"/>
</div>
<div className="col-span-1">
<label className="text-sm text-gray-700 font-geist" style={{}}>Organization</label>
<input className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2" placeholder="Nova Systems" style={{ringColor: '#10E80C'}} type="text"/>
</div>
<div className="col-span-1">
<label className="text-sm text-gray-700 font-geist" style={{}}>Website</label>
<input className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2" placeholder="https://novasystems.ai" style={{ringColor: '#10E80C'}} type="url"/>
</div>

<div className="col-span-1">
<label className="text-sm text-gray-700 font-geist" style={{}}>Track</label>
<div className="relative mt-2">
<svg className="lucide lucide-layers w-4 h-4 text-gray-500 absolute left-3 top-3.5 pointer-events-none" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<select className="appearance-none w-full rounded-xl border border-gray-300 bg-white pl-10 pr-10 py-3 text-gray-900 focus:outline-none focus:ring-2" style={{ringColor: '#10E80C'}}>
<option className="font-geist" style={{}}>AI Infrastructure</option>
<option className="font-geist" style={{}}>Climate Tech</option>
<option className="font-geist" style={{}}>Open Source</option>
<option className="font-geist" style={{}}>Frontier Research</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 absolute right-3 top-3.5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="text-sm text-gray-700 font-geist" style={{}}>Region</label>
<div className="relative mt-2">
<svg className="lucide lucide-globe w-4 h-4 text-gray-500 absolute left-3 top-3.5 pointer-events-none" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<select className="appearance-none w-full rounded-xl border border-gray-300 bg-white pl-10 pr-10 py-3 text-gray-900 focus:outline-none focus:ring-2" style={{ringColor: '#10E80C'}}>
<option className="font-geist" style={{}}>North America</option>
<option className="font-geist" style={{}}>Europe</option>
<option className="font-geist" style={{}}>Asia Pacific</option>
<option className="font-geist" style={{}}>Latin America</option>
<option className="font-geist" style={{}}>Africa</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 absolute right-3 top-3.5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-gray-700 font-geist" style={{}}>One‑line pitch</label>
<input className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2" placeholder="What are you building, and why now?" style={{ringColor: '#10E80C'}} type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-gray-700 font-geist" style={{}}>How would you use the grant?</label>
<textarea className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2" placeholder="Share your milestones, timeline, and budget focus." rows="4" style={{ringColor: '#10E80C'}}></textarea>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-gray-600 font-geist" style={{}}>
<svg className="lucide lucide-lock w-4 h-4 text-gray-700" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Secure save &amp; edit until deadline
              </div>
<button className="inline-flex items-center gap-2 text-black font-medium px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all font-geist" style={{backgroundColor: 'rgb(16, 232, 12)'}} type="button">
                Submit application
                <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-20 pb-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 font-space-grotesk" style={{}}>
          Build what matters.
          <span className="text-white/70 font-space-grotesk" style={{}}>We’ll fund the rest.</span>
</h4>
<p className="text-lg text-gray-300 font-medium mb-10 font-geist" style={{}}>Applications are reviewed on a rolling basis. The earlier you apply, the sooner we can support you.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center gap-3 text-black rounded-full px-8 py-4 font-medium hover:opacity-90 transition font-geist" href="#apply" style={{backgroundColor: 'rgb(16, 232, 12)'}}>
            Apply now
            <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 text-white font-medium px-8 py-4 border border-gray-700 rounded-full hover:bg-gray-800 transition font-geist" href="#tracks" style={{}}>
            Explore tracks
            <svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
</div>
<div className="mt-10 grid sm:grid-cols-3 gap-6 text-center border-t border-gray-800 pt-8">
<div className="">
<p className="text-3xl font-semibold text-white tracking-tight font-space-grotesk" style={{}}>2k+</p>
<p className="text-gray-400 font-geist" style={{}}>Applications last cohort</p>
</div>
<div className="">
<p className="text-3xl font-semibold text-white tracking-tight font-space-grotesk" style={{}}>75</p>
<p className="text-gray-400 font-geist" style={{}}>Teams funded</p>
</div>
<div className="">
<p className="text-3xl font-semibold text-white tracking-tight font-space-grotesk" style={{}}>48h</p>
<p className="text-gray-400 font-geist" style={{}}>Fastest decision</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-6 gap-8 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-5">
<div className="w-3 h-3 rounded-full" style={{backgroundColor: '#10E80C'}}></div>
<h5 className="text-lg font-medium text-gray-900 font-geist" style={{}}>MindSpark</h5>
</div>
<p className="text-gray-600 leading-relaxed mb-5 font-geist" style={{}}>Backing ambitious teams building a brighter, more abundant future.</p>
<div className="flex items-center gap-3">
<a className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4 text-gray-700" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4 text-gray-700" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors" href="#">
<svg className="lucide lucide-mail w-4 h-4 text-gray-700" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div className="">
<h6 className="font-medium text-gray-900 mb-3 font-geist" style={{}}>Program</h6>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#overview" style={{}}>Overview</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#tracks" style={{}}>Tracks</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#timeline" style={{}}>Timeline</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#apply" style={{}}>Apply</a></li>
</ul>
</div>
<div>
<h6 className="font-medium text-gray-900 mb-3 font-geist" style={{}}>Resources</h6>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#faq" style={{}}>FAQ</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#brief" style={{}}>Program brief</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Blog</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Community</a></li>
</ul>
</div>
<div className="">
<h6 className="font-medium text-gray-900 mb-3 font-geist" style={{}}>Company</h6>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>About</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Careers</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div>
<h6 className="font-medium text-gray-900 mb-3 font-geist" style={{}}>Legal</h6>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Terms</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Privacy</a></li>
<li><a className="text-gray-600 hover:text-gray-900 font-geist" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
</div>
<div className="pt-6 border-t border-gray-200">
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500 font-geist" style={{}}>© 2025 MindSpark. All rights reserved.</p>
<div className="flex items-center gap-3">
<span className="text-xs font-medium px-2 py-1 rounded-full font-geist" style={{backgroundColor: 'rgba(16, 232, 12, 0.1)', color: 'rgb(10, 158, 8)'}}>Grants</span>
<span className="text-xs text-gray-500 font-geist" style={{}}>Cohort Autumn ’25</span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
