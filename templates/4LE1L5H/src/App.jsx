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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });

    // Initialize the chart for the hero dashboard
    function initializeChart() {
      const canvas = document.getElementById('trafficChart');
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const data = [43, 32, 24, 19, 25];

      function createGradient(color1, color2, opacity1 = 0.9, opacity2 = 0.1) {
        const { height } = canvas.getBoundingClientRect();
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, color1.replace('1)', `${opacity1})`));
        gradient.addColorStop(1, color2.replace('1)', `${opacity2})`));
        return gradient;
      }

      const chartData = {
        labels: ['Google', 'Organic', 'Meta', 'LinkedIn', 'Direct'],
        datasets: [{
          data: data,
          backgroundColor: [
            createGradient('rgba(16,185,129,1)', 'rgba(16,185,129,1)', 0.95, 0.08),
            createGradient('rgba(245,158,11,1)', 'rgba(245,158,11,1)', 0.95, 0.08),
            createGradient('rgba(244,63,94,1)', 'rgba(244,63,94,1)', 0.95, 0.08),
            createGradient('rgba(59,130,246,1)', 'rgba(59,130,246,1)', 0.95, 0.08),
            createGradient('rgba(139,92,246,1)', 'rgba(139,92,246,1)', 0.95, 0.08)
          ],
          borderColor: [
            'rgba(16,185,129,0.8)', 'rgba(245,158,11,0.8)', 'rgba(244,63,94,0.8)', 
            'rgba(59,130,246,0.8)', 'rgba(139,92,246,0.8)'
          ],
          borderWidth: 2,
          borderRadius: 16,
          borderSkipped: false,
          barPercentage: 0.7,
          categoryPercentage: 0.8
        }]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 2000, easing: 'easeInOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15,20,25,0.95)',
            titleColor: '#fff',
            bodyColor: 'rgba(255,255,255,0.9)',
            padding: 16,
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            cornerRadius: 12,
            titleFont: { family: 'Inter', size: 14, weight: '600' },
            bodyFont: { family: 'Inter', size: 13 }
          }
        },
        layout: { padding: { top: 20, right: 20, bottom: 20, left: 20 } },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: { 
              color: 'rgba(255,255,255,0.4)', 
              font: { family: 'Inter', size: 12, weight: '500' },
              padding: 12
            },
            border: { display: false }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
            ticks: { 
              color: 'rgba(255,255,255,0.4)',
              font: { family: 'Inter', size: 11 },
              padding: 16,
              callback: function(value) { return value + 'K'; }
            },
            border: { display: false }
          }
        }
      };

      new Chart(ctx, { type: 'bar', data: chartData, options });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      initializeChart();
      
      // Simulate live updates for the hero dashboard
      setInterval(() => {
        const ctrElement = document.querySelector('.xl\\:w-\\[380px\\] .grid .p-4:first-child .text-2xl');
        const cpcElement = document.querySelector('.xl\\:w-\\[380px\\] .grid .p-4:last-child .text-2xl');
        
        if (ctrElement && cpcElement) {
          const ctr = (3.2 + Math.random() * 0.5).toFixed(2);
          const cpc = (2.0 + Math.random() * 0.4).toFixed(2);
          
          ctrElement.textContent = ctr + '%';
          cpcElement.textContent = '$' + cpc;
        }
      }, 3000);
    });
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad067abf-687c-426a-8bf6-28f4c15eaa8f_3840w.jpg")'}}></div>

<nav className="relative z-50 animate-[fadeIn_0.8s_ease-out_0s_both]">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
<div className="flex items-center justify-between py-6">

<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-500/10">
<svg className="h-5 w-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="text-xl font-semibold tracking-tight text-white">
<span className="">Neura</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/70 hover:text-white transition-colors font-medium font-sans" href="#features">Features</a>
<a className="text-sm text-white/70 hover:text-white transition-colors font-medium font-sans" href="#pricing">Pricing</a>
<a className="text-sm text-white/70 hover:text-white transition-colors font-medium font-sans" href="#integrations">Integrations</a>
<a className="text-sm text-white/70 hover:text-white transition-colors font-medium font-sans" href="#docs">Docs</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium font-sans">
            Sign In
          </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-medium rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 ring-1 ring-emerald-500/30 font-sans">
            Start Free Trial
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<button className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-xl bg-white/[0.06] hover:bg-white/[0.12] transition-all duration-200 ring-1 ring-white/10">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-12 pb-20">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

<div className="text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 text-sm font-medium mb-8 animate-[fadeIn_0.8s_ease-out_0.2s_both] font-sans">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
          New: Real-time attribution modeling
        </div>
<h1 className="md:text-7xl animate-[slideUp_0.8s_ease-out_0.4s_both] text-4xl font-light text-white tracking-tighter font-manrope mb-6" style={{}}>Marketing
 Intelligence<span className="bg-clip-text font-light text-transparent tracking-tighter font-manrope bg-neutral-50" style={{}}> Reimagined</span></h1>
<p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed animate-[slideUp_0.8s_ease-out_0.6s_both] font-sans">
          Transform your marketing data into actionable insights with advanced attribution modeling, real-time analytics, and predictive intelligence that scales with your growth.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_0.8s_ease-out_0.8s_both]">
<a className="inline-flex items-center justify-center gap-2 animate-float tracking-tight pt-4 pr-8 pb-4 pl-8 font-sans" href="#" style={{'--green': '#1BFD9C', fontSize: '18px', letterSpacing: '0.06em', position: 'relative', fontFamily: 'inherit', borderRadius: '1rem', overflow: 'hidden', lineHeight: '1.4em', border: '2px solid var(--green)', background: 'linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%)', color: 'var(--green)', boxShadow: 'rgba(27, 253, 156, 0.4) 0px 0px 10px inset, rgba(27, 253, 156, 0.1) 0px 0px 9px 3px'}} title="Link disabled in preview mode">Get Started Free</a>
<button className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium rounded-2xl transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20 text-lg backdrop-blur-sm font-sans">
            
            Watch Demo
          </button>
</div>

<div className="flex items-center justify-center gap-8 mt-12 text-sm text-white/40 animate-[fadeIn_0.8s_ease-out_1s_both]">
<div className="flex items-center gap-2 font-sans">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20,6 9,17 4,12"></polyline></svg>
            No credit card required
          </div>
<div className="flex items-center gap-2 font-sans">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1h-1V4c0-.552-.448-1-1-1H4c-.552 0-1 .448-1 1v3H2c-.552 0-1 .448-1 1v3c0 .552.448 1 1 1h1v3c0 .552.448 1 1 1h15c.552 0 1-.448 1-1v-3h1z"></path></svg>
            14-day free trial
          </div>
<div className="flex items-center gap-2 font-sans">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            Setup in 5 minutes
          </div>
</div>
</div>

<div className="relative max-w-6xl mx-auto animate-[slideUp_0.8s_ease-out_1.2s_both]">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl blur-2xl"></div>
<div className="relative shadow-black/50 ring-1 ring-white/[0.08] border-white/[0.05] overflow-hidden bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border rounded-3xl shadow-2xl backdrop-blur-xl">

<div className="sm:px-6 lg:px-6 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-500/10">
<svg className="lucide lucide-trending-up h-5 w-5 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<div className="text-lg font-semibold tracking-tight text-white font-sans">Traffic Acquisition</div>
<div className="text-sm text-white/50 font-sans">Multi-channel performance overview</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-sm text-emerald-300 font-medium font-sans">Live</span>
</div>
<button className="inline-flex items-center gap-2.5 h-9 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] transition-all duration-200 ring-1 ring-white/10 text-sm text-white/90 font-sans">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Last 30 Days
                </button>
</div>
</div>
</div>

<div className="sm:px-6 lg:px-6 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col xl:flex-row xl:items-start gap-6">

<div className="xl:w-[380px] flex-shrink-0">
<div className="space-y-6">

<div className="relative">
<div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 rounded-2xl blur-xl"></div>
<div className="relative">
<div className="flex flex-col gap-2 text-center mb-3 items-start">
<div className="md:text-8xl text-8xl text-white font-manrope font-light tracking-tighter" style={{}}>+127%</div>
</div>
<div className="text-white/60 text-left mb-1 font-sans">Total acquisition growth</div>
<div className="text-sm text-white/40 font-sans">143,829 new users acquired</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] ring-1 ring-white/[0.08]">
<div className="text-2xl text-white mb-1 font-manrope font-light tracking-tighter" style={{}}>3.26%</div>
<div className="text-sm text-white/50 font-sans">Avg CTR</div>
<div className="flex items-center gap-1 mt-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400 font-sans">+0.8%</span>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] ring-1 ring-white/[0.08]">
<div className="text-2xl text-white mb-1 font-manrope font-light tracking-tighter" style={{}}>$2.03</div>
<div className="text-sm text-white/50 font-sans">Avg CPC</div>
<div className="flex items-center gap-1 mt-2">
<div className="h-1.5 w-1.5 rounded-full bg-rose-400"></div>
<span className="text-xs text-rose-400 font-sans">+$0.23</span>
</div>
</div>
</div>

<div className="p-5 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] ring-1 ring-white/[0.08]">
<div className="flex items-start gap-3 mb-4">
<div className="h-8 w-8 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
<svg className="text-violet-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 font-sans">AI Insights</h3>
<p className="text-sm text-white/70 leading-relaxed font-sans">Google Ads and LinkedIn are driving the highest quality leads with 2.3x better LTV. Consider reallocating 15% of Meta budget.</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="relative h-full">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-violet-500/5 rounded-2xl blur-sm"></div>
<div className="relative h-full ring-1 ring-white/[0.08] flex flex-col bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent rounded-2xl p-6">
<div className="flex-1 h-full min-h-[400px]">
<canvas className="h-full w-full" height="800" id="trafficChart" style={{boxSizing: 'border-box', display: 'block', minHeight: '400px', height: '400px', width: '650px'}} width="1300"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-6">
<div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-transparent ring-1 ring-white/5 hover:ring-white/10 transition-all duration-200 cursor-pointer group">
<div className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white font-sans">Google Ads</div>
<div className="text-xs text-white/50 font-sans">39K users • 24.7%</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-transparent ring-1 ring-white/5 hover:ring-white/10 transition-all duration-200 cursor-pointer group">
<div className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white font-sans">Organic Search</div>
<div className="text-xs text-white/50 font-sans">23K users • 14.6%</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-rose-500/20 to-transparent ring-1 ring-white/5 hover:ring-white/10 transition-all duration-200 cursor-pointer group">
<div className="h-3 w-3 rounded-full bg-gradient-to-r from-rose-400 to-rose-500"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white font-sans">Meta Ads</div>
<div className="text-xs text-white/50 font-sans">22K users • 13.9%</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-transparent ring-1 ring-white/5 hover:ring-white/10 transition-all duration-200 cursor-pointer group">
<div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white font-sans">LinkedIn Ads</div>
<div className="text-xs text-white/50 font-sans">21K users • 13.3%</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-violet-500/20 to-transparent ring-1 ring-white/5 hover:ring-white/10 transition-all duration-200 cursor-pointer group">
<div className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-400 to-violet-500"></div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white font-sans">Direct/Email</div>
<div className="text-xs text-white/50 font-sans">25K users • 15.8%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10 mr-6 mb-10 ml-6 pt-20 pb-20" id="features">
<div className="max-w-7xl sm:px-8 lg:px-10 mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter" style={{}}>
      Everything you need to
      <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent font-manrope font-light tracking-tighter" style={{}}>scale intelligently</span>
</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto font-sans">
      Advanced analytics tools designed for modern growth teams who demand precision, speed, and actionable insights.
    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] rounded-3xl shadow-lg backdrop-blur-xl">
<div className="sm:p-8 px-6 py-6">

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900/50 to-neutral-800/30 ring-1 ring-inset ring-white/5 overflow-hidden">

<div className="absolute inset-4 rounded-xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">ATTRIBUTION MODEL</span>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs text-emerald-300 font-sans">LIVE</span>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-neutral-300 font-sans">Google Ads</span>
</div>
<span className="text-emerald-400 font-sans">34%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-amber-400"></div>
<span className="text-neutral-300 font-sans">Organic</span>
</div>
<span className="text-amber-400 font-sans">28%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-rose-400"></div>
<span className="text-neutral-300 font-sans">Meta</span>
</div>
<span className="text-rose-400 font-sans">22%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-neutral-300 font-sans">LinkedIn</span>
</div>
<span className="text-blue-400 font-sans">16%</span>
</div>
</div>

<div className="mt-3 pt-2 border-t border-neutral-800/70">
<div className="text-xs text-violet-400 font-sans">Multi-touch attribution</div>
</div>
</div>
</div>

<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="text-xl sm:text-2xl text-white font-manrope font-light tracking-tighter" style={{}}>Attribution Modeling</h3>
</div>
<p className="mt-3 text-neutral-400 text-sm font-sans">Track every touchpoint in your customer journey with advanced multi-touch attribution and real-time conversion tracking.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300 font-sans" href="#" title="Link disabled in preview mode">
              View attribution
              <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] rounded-3xl shadow-lg backdrop-blur-xl">
<div className="sm:p-8 px-6 py-6">

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900/50 to-neutral-800/30 ring-1 ring-inset ring-white/5 overflow-hidden">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full text-neutral-800/50">
<defs>
<pattern height="24" id="analytics-grid" patternunits="userSpaceOnUse" width="24">
<path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect className="" fill="url(#analytics-grid)" height="100%" width="100%"></rect>
</svg>

<div className="absolute inset-4 rounded-xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">AI PREDICTIONS</span>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse"></div>
<span className="text-xs text-violet-300 font-sans">LEARNING</span>
</div>
</div>

<div className="space-y-2">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-300 font-sans">Next 30 Days</span>
<span className="text-xs text-emerald-400 font-sans">+18.2%</span>
</div>
<div className="mt-1 text-xs text-neutral-400 font-sans">Expected growth</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-300 font-sans">Best Channels</span>
<span className="text-xs text-blue-400 font-sans">Google + LinkedIn</span>
</div>
<div className="mt-1 text-xs text-neutral-400 font-sans">Optimize budget</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-300 font-sans">LTV Prediction</span>
<span className="text-xs text-violet-400 font-sans">$4,230</span>
</div>
<div className="mt-1 text-xs text-neutral-400 font-sans">Avg customer value</div>
</div>
</div>
</div>
</div>

<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<h3 className="text-xl sm:text-2xl text-white font-manrope font-light tracking-tighter" style={{}}>Predictive Intelligence</h3>
</div>
<p className="mt-3 text-neutral-400 text-sm font-sans">AI-powered forecasting and recommendations to optimize your marketing spend and predict customer lifetime value.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300 font-sans" href="#" title="Link disabled in preview mode">
              View predictions
              <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] rounded-3xl shadow-lg backdrop-blur-xl">
<div className="sm:p-8 px-6 py-6">

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900/50 to-neutral-800/30 ring-1 ring-inset ring-white/5 overflow-hidden">

<div className="absolute inset-4 rounded-xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">LIVE METRICS</span>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs text-emerald-300 font-mono font-sans">REAL-TIME</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="text-center">
<div className="text-lg font-semibold text-emerald-400 font-mono font-sans">1,247</div>
<div className="text-xs text-neutral-400 font-sans">Active Users</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-blue-400 font-mono font-sans">23</div>
<div className="text-xs text-neutral-400 font-sans">Conversions</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-amber-400 font-mono font-sans">3.2%</div>
<div className="text-xs text-neutral-400 font-sans">CTR</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-violet-400 font-mono font-sans">$2.18</div>
<div className="text-xs text-neutral-400 font-sans">Avg CPC</div>
</div>
</div>

<div className="mt-3 pt-2 border-t border-neutral-800/70">
<div className="flex items-center gap-2">
<div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse"></div>
<div className="text-xs text-neutral-400 font-sans">Updates every 5s</div>
</div>
</div>
</div>
</div>

<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h3 className="text-xl sm:text-2xl text-white font-manrope font-light tracking-tighter" style={{}}>Real‑Time Analytics</h3>
</div>
<p className="mt-3 text-neutral-400 text-sm font-sans">Monitor your campaigns as they happen with live data streams and instant alerts for performance changes.</p>
<div className="mt-4">
<a 2000="" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text- data &lt;svg xmlns=" fill="none" height="24" href="#" http:="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" svg"="" viewbox="0 0 24 24" width="24" www.w3.org=""><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</a>
</div>
</div>
</div>
</article>
</div>
</div>
</section><section className="sm:p-8 border-white/[0.08] bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border rounded-3xl mr-60 ml-60 pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl">
<div className="flex items-center gap-2 text-sm text-emerald-300">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium font-sans" style={{}}>Customer Intelligence</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white font-manrope font-light tracking-tighter" style={{}}>Real Results.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-light font-sans" style={{}}>Advanced analytics driving exceptional growth</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="sm:p-6 flex flex-col min-h-[420px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between ring-1 ring-white/5">
<div className="space-y-5">
<div className="flex items-end gap-2">
<span className="text-5xl sm:text-6xl text-white font-manrope font-light tracking-tighter" style={{}}>99.8</span>
<span className="text-white/60 text-base font-normal font-sans" style={{}}>%</span>
</div>
<p className="text-sm text-white/80 font-sans" style={{}}>We've optimized <span className="font-medium text-white font-sans" style={{}}>250K+ campaigns</span> with industry-leading performance and precision.</p>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-emerald-300 font-sans" style={{}}>AnalyticsFlow®</span>
</div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-full flex items-center justify-center">
<svg className="lucide lucide-trending-up h-3 w-3 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 -ml-2 rounded-full flex items-center justify-center">
<svg className="lucide lucide-brain h-3 w-3 text-blue-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 -ml-2 rounded-full flex items-center justify-center">
<svg className="lucide lucide-zap h-3 w-3 text-violet-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-medium font-sans" style={{}}>250K+</span>
</div>
<div className="flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs text-white/70 font-normal font-sans" style={{}}>Active across 50+ industries</span>
</div>
</div>
<button className="mt-6 h-11 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-emerald-500/25 font-sans" style={{}}>
                        Start Analytics
                    </button>
</article>

<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between ring-1 ring-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/440abaed-d182-4e6b-945f-4b30257fce79_320w.jpg)] bg-cover border border-white/20 rounded-lg items-center justify-center ring-1 ring-white/10">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight text-white font-sans" style={{}}>Sarah Chen</p>
<p className="text-xs text-white/60 font-sans" style={{}}>Growth Director</p>
</div>
</div>
<span className="text-white/40">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between ring-1 ring-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-white/40">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug text-white font-manrope font-light tracking-tighter" style={{}}>AnalyticsFlow increased our attribution accuracy by 85% and transformed our marketing ROI.</p>
</article>
</div>
<div className="grid grid-rows-[1fr_auto] gap-4">
<article className="flex flex-col min-h-[420px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg justify-between ring-1 ring-white/5">
<p className="text-2xl sm:text-3xl text-center leading-snug text-white font-manrope font-light tracking-tighter" style={{}}>The AI insights reveal optimization opportunities we never knew existed.</p>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-white/40">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
</article>
<article className="flex gap-3 bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center ring-1 ring-white/5">
<div className="h-9 w-9 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7206b228-1279-4d12-b408-6a9e34152341_320w.jpg)] bg-cover border border-white/20 rounded-lg items-center justify-center ring-1 ring-white/10">
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight text-white font-sans" style={{}}>Marcus Johnson</p>
<p className="text-xs text-white/60 font-sans" style={{}}>VP of Marketing</p>
</div>
</article>
</div>
<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between ring-1 ring-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9871ecc7-e70a-4f1a-9b1d-3cafe686b682_320w.jpg)] bg-cover border border-white/20 rounded-lg items-center justify-center ring-1 ring-white/10" style={{}}>
</div>
<div className="">
<p className="text-sm font-medium tracking-tight leading-tight text-white font-sans" style={{}}>Maya Patel</p>
<p className="text-xs text-white/60 font-sans" style={{}}>Analytics Lead</p>
</div>
</div>
<span className="text-white/40">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/[0.08] rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between ring-1 ring-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-white/40">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug text-white font-manrope font-light tracking-tighter" style={{}}>Seamless integration with our existing stack. Setup was effortless and immediate.</p>
</article>
</div>
</div>
</section><section className="relative pt-20 pb-20">
<div className="max-w-7xl sm:px-8 lg:px-10 mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 text-sm font-medium mb-8">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs font-medium font-sans">Pricing</span>
</div>
<h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter" style={{}}>
        Scale with
        <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent font-manrope font-light tracking-tighter" style={{}}>flexible pricing</span>
</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-sans">Choose a plan that grows with your data needs and unlocks the intelligence your team deserves.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/20">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative p-8">

<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/80 text-xs font-medium font-sans">01</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/20"></span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/[0.06] ring-1 ring-white/10 text-white/70 text-xs font-sans">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              2 weeks setup
            </div>
</div>

<div className="mb-8">
<h3 className="text-2xl text-white mb-2 font-manrope font-light tracking-tighter" style={{}}>Starter</h3>
<p className="text-white/60 text-sm mb-4 font-sans">Perfect for small teams getting started with data-driven insights.</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-manrope font-light tracking-tighter" style={{}}>$299</span>
<span className="text-white/50 text-sm font-sans">/month</span>
</div>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20 mb-8 font-sans">
            Get Started
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="space-y-4">
<p className="text-xs text-white/50 font-medium tracking-widest uppercase mb-4 font-sans">What's included</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Up to 10K tracked events per month</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Basic attribution modeling</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">5 integrations included</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Email support</span>
</li>
</ul>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl ring-1 ring-emerald-500/20 transform scale-105">

<div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl blur-xl animate-pulse"></div>
<div className="relative pt-8 pr-8 pb-8 pl-8">

<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 text-emerald-300 text-xs font-medium font-sans">02</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60"></span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/30 text-emerald-300 text-xs font-sans">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
      1 week setup
    </div>
</div>

<div className="mb-8">
<h3 className="text-2xl text-white mb-2 font-manrope font-light tracking-tighter" style={{}}>Professional</h3>
<p className="text-white/60 text-sm mb-4 font-sans">Advanced analytics for growing teams and scale-ready insights.</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-manrope font-light tracking-tighter" style={{}}>$799</span>
<span className="text-white/50 text-sm font-sans">/month</span>
</div>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium transition-all duration-200 shadow-lg shadow-emerald-500/25 ring-1 ring-emerald-500/30 mb-8 font-sans">
    Start Professional
    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A 14z"></path></svg>
</button>

<div className="space-y-4">
<p className="text-xs text-emerald-300 font-medium tracking-widest uppercase mb-4 font-sans">Everything in Starter, plus</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Up to 100K tracked events</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">AI-powered predictive insights</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Unlimited integrations</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Priority support &amp; onboarding</span>
</li>
</ul>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/20">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 via-transparent to-violet-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="relative p-8">

<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/80 text-xs font-medium font-sans">03</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/[0.06] ring-1 ring-white/10 text-white/70 text-xs font-sans">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Custom setup
            </div>
</div>

<div className="mb-8">
<h3 className="text-2xl text-white mb-2 font-manrope font-light tracking-tighter" style={{}}>Enterprise</h3>
<p className="text-white/60 text-sm mb-4 font-sans">Custom solutions for large organizations with advanced needs.</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl text-white font-manrope font-light tracking-tighter" style={{}}>Custom</span>
<span className="text-white/50 text-sm font-sans">pricing</span>
</div>
</div>

<button className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20 mb-8 font-sans">
            Contact Sales
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</button>

<div className="space-y-4">
<p className="text-xs text-white/50 font-medium tracking-widest uppercase mb-4 font-sans">Everything in Professional, plus</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/20 ring-1 ring-blue-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Unlimited tracked events</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/20 ring-1 ring-blue-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Dedicated infrastructure &amp; SLA</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/20 ring-1 ring-blue-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Custom integrations &amp; API access</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500/20 ring-1 ring-blue-500/30 flex items-center justify-center flex-shrink-0">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm text-white/80 font-sans">Dedicated customer success manager</span>
</li>
</ul>
</div>
</div>
</article>
</div>

<div className="mt-16 flex flex-col items-center text-center">
<p className="text-white/50 text-sm font-sans">
        Need a custom solution? 
        <a className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors font-sans" href="#" title="Link disabled in preview mode">
          Let's talk about your requirements
        </a>
</p>
</div>
</div>
</section>


<div className="bg-black border-white/10 border-t text-white w-full">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
  </style>
<footer className="relative bg-black border-t border-white/10 text-white">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
<div className="grid md:grid-cols-4 gap-12">

<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-500/10">
<svg className="h-6 w-6 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<div className="text-2xl font-semibold tracking-tight text-white font-manrope">
            Neura
          </div>
</div>
<p className="text-white/60 text-base max-w-md leading-relaxed font-sans mb-8">
          Transform your marketing data into actionable insights with advanced attribution modeling, real-time analytics, and predictive intelligence that scales with your growth.
        </p>

<div className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all duration-200 backdrop-blur-sm font-sans" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 ring-1 ring-emerald-500/30 font-sans">
            Subscribe
          </button>
</div>
</div>

<div>
<h4 className="text-lg font-semibold text-white mb-6 font-manrope">Product</h4>
<ul className="space-y-4">
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#features">Features</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#integrations">Integrations</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#pricing">Pricing</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">API Documentation</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">Security</a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-semibold text-white mb-6 font-manrope">Company</h4>
<ul className="space-y-4">
<li className="">
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">About</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">Blog</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">Careers</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="mailto:hello@neura.ai">Contact</a>
</li>
<li>
<a className="text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">Support</a>
</li>
</ul>
</div>
</div>

<div className="border-t border-white/10 mt-16 pt-8">
<div className="flex flex-col lg:flex-row items-center justify-between gap-6">

<div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/40 font-sans">
<p>© 2025 Neura AI. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white/60 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white/60 transition-colors" href="#">Cookie Policy</a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<a className="h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20" href="#">
<svg className="text-white/60 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20" href="#">
<svg className="text-white/60 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>
</a>
<a className="h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20" href="#">
<svg className="text-white/60 hover:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<a className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-emerald-300 transition-colors font-sans" href="#">
<span>Back to top</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</footer>
</div>
<style>
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }
  </style>


    </>
  );
}
