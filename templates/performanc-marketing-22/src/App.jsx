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



        // Init Lucide
        lucide.createIcons();

        // Init Chart.js for Hero Dashboard
        document.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('performanceChart');
            
            if (ctx) {
                // Create Gradient for Line
                const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

                const chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        datasets: [{
                            label: 'ROAS',
                            data: [2.8, 3.1, 3.0, 3.5, 3.9, 4.2, 3.8],
                            borderColor: '#10B981',
                            backgroundColor: gradient,
                            borderWidth: 2,
                            pointBackgroundColor: '#050505',
                            pointBorderColor: '#10B981',
                            pointHoverBackgroundColor: '#10B981',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Spend ($k)',
                            data: [1.2, 1.5, 1.3, 1.8, 2.1, 2.5, 2.0],
                            borderColor: '#3B82F6',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            pointRadius: 0,
                            fill: false,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                                titleColor: '#fff',
                                bodyColor: '#9ca3af',
                                borderColor: 'rgba(255,255,255,0.1)',
                                borderWidth: 1,
                                padding: 12,
                                displayColors: true,
                                usePointStyle: true
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                    drawBorder: false
                                },
                                ticks: {
                                    color: 'rgba(255,255,255,0.3)',
                                    font: {
                                        family: "'JetBrains Mono', monospace",
                                        size: 10
                                    }
                                }
                            },
                            y: {
                                grid: {
                                    color: 'rgba(255,255,255,0.05)',
                                    borderDash: [5, 5]
                                },
                                ticks: {
                                    color: 'rgba(255,255,255,0.3)',
                                    font: {
                                        family: "'JetBrains Mono', monospace",
                                        size: 10
                                    }
                                },
                                border: {
                                    display: false
                                }
                            }
                        }
                    }
                });
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-600/20 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all duration-300">
<i className="h-4 w-4 text-emerald-400" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight font-manrope">Stakque</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/60 hover:text-white transition-colors font-medium" href="#methodology">The E3 Model</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-medium" href="#solutions">Solutions</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-medium" href="#results">Results</a>
<a className="text-sm text-white/60 hover:text-white transition-colors font-medium" href="#engagement">Engagement</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:inline-flex text-sm text-white/60 hover:text-white font-medium transition-colors">Client Login</button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-white/90 text-sm font-semibold rounded-full transition-all duration-200">
                        Book Consultation
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 z-10">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-3xl animate-[slideUp_0.8s_ease-out_both]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">PIONEERING PERFORMANCE</span>
</div>
<h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">E3 Model</span> for <br/>
                        Scalable Growth.
                    </h1>
<p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl font-light">
                        Stakque isn't just an agency. We are an Engineered performance partner.
                        <span className="text-white/90">Embedded</span> in your team, focusing on the <span className="text-white/90">Essential</span> metrics, driving results through <span className="text-white/90">Engineered</span> systems.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/20">
                            Explore the Methodology
                            <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-200 backdrop-blur-sm">
                            View Case Studies
                        </button>
</div>
<div className="mt-12 flex items-center gap-8 text-sm text-white/40">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span>$500M+ Managed Ad Spend</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span>Proprietary Tech Stack</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full animate-[fadeIn_1.2s_ease-out_0.2s_both]">

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>

<div className="relative w-full h-full glass-panel rounded-2xl p-6 flex flex-col">

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white font-semibold font-manrope">Performance Overview</h3>
<p className="text-xs text-white/40 mt-1 font-mono">LIVE DATA STREAM • Q3 2024</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/60">ROAS Focus</span>
<span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">Active</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<p className="text-xs text-white/40 mb-1">Total Revenue</p>
<p className="text-2xl font-mono text-white">$4.2M</p>
<span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +24%
                                </span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<p className="text-xs text-white/40 mb-1">Blended ROAS</p>
<p className="text-2xl font-mono text-white">3.8x</p>
<span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +0.4
                                </span>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<p className="text-xs text-white/40 mb-1">CPA</p>
<p className="text-2xl font-mono text-white">$42.10</p>
<span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> -12%
                                </span>
</div>
</div>

<div className="flex-1 w-full min-h-[300px]">
<canvas id="performanceChart"></canvas>
</div>

<div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs text-white/60">Meta Ads</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-white/60">Google Ads</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-xs text-white/60">TikTok</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-xs text-white/60">Programmatic</span>
</div>
</div>
</div>

<div className="absolute -right-4 top-10 p-4 glass-panel rounded-xl animate-float hidden xl:block max-w-[240px]">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<div>
<p className="text-sm font-semibold text-white">Optimization</p>
<p className="text-xs text-white/60 mt-1">Campaign "Scale_Q3" scaled by 15% based on CPA targets.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="methodology">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
<div className="mb-20">
<h2 className="text-4xl lg:text-5xl font-manrope font-semibold tracking-tight text-white mb-6">
                    The <span className="text-emerald-400">E3</span> Model.
                </h2>
<p className="text-xl text-white/60 max-w-2xl font-light">
                    Traditional agencies stay on the outside. Stakque is different. Our proprietary framework ensures alignment, focus, and systematic execution.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 hover:to-transparent transition-all duration-500">
<div className="relative h-full bg-[#0A0A0A] rounded-[14px] p-8 border border-white/5 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-emerald-500/20 -mr-8 -mt-8" data-lucide="users"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-emerald-400" data-lucide="merge"></i>
</div>
<h3 className="text-2xl font-manrope font-semibold text-white mb-2">Embedded</h3>
<p className="text-sm font-mono text-emerald-500 mb-6 tracking-wide uppercase">Total Integration</p>
<p className="text-white/60 leading-relaxed">
                            We don't function as a vendor. We operate as a tactical extension of your growth team. Shared Slack channels, weekly sprints, and deep cultural alignment mean zero friction and maximum speed.
                        </p>
<div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>Slack/Teams Integration</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
<span>In-house meeting cadence</span>
</div>
</div>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-transparent transition-all duration-500">
<div className="relative h-full bg-[#0A0A0A] rounded-[14px] p-8 border border-white/5 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-blue-500/20 -mr-8 -mt-8" data-lucide="target"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-blue-400" data-lucide="focus"></i>
</div>
<h3 className="text-2xl font-manrope font-semibold text-white mb-2">Essential</h3>
<p className="text-sm font-mono text-blue-500 mb-6 tracking-wide uppercase">Radical Focus</p>
<p className="text-white/60 leading-relaxed">
                            Vanity metrics die here. We strip away the noise to focus purely on the essential levers that drive Net Revenue and Contribution Margin. If it doesn't impact the bottom line, we don't track it.
                        </p>
<div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Contribution Margin Focus</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Zero Vanity Reporting</span>
</div>
</div>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-transparent transition-all duration-500">
<div className="relative h-full bg-[#0A0A0A] rounded-[14px] p-8 border border-white/5 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-purple-500/20 -mr-8 -mt-8" data-lucide="cpu"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-purple-400" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-manrope font-semibold text-white mb-2">Engineered</h3>
<p className="text-sm font-mono text-purple-500 mb-6 tracking-wide uppercase">Systematic Scale</p>
<p className="text-white/60 leading-relaxed">
                            Growth is a science, not art. We leverage Python-based bid scripting, server-side tracking, and custom data lakes to engineer advantages that manual media buying simply cannot compete with.
                        </p>
<div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>Automated Rules &amp; Scripts</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/80">
<i className="w-4 h-4 text-purple-500" data-lucide="check"></i>
<span>CAPI &amp; Server-side Tracking</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white/[0.02]" id="results">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
<div className="grid xl:grid-cols-4 gap-6">

<div className="xl:col-span-2 glass-panel rounded-3xl p-10 flex flex-col justify-between min-h-[400px]">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-sm font-mono text-emerald-400">AGENCY PERFORMANCE</span>
</div>
<h3 className="text-4xl lg:text-6xl font-manrope font-light text-white leading-tight">
                            We don't guess.<br/>
                            We <span className="text-white/40">engineer</span> outcomes.
                        </h3>
</div>
<div className="grid grid-cols-2 gap-8 mt-12">
<div>
<p className="text-5xl font-mono text-white mb-2">285%</p>
<p className="text-sm text-white/50">Average YoY Client Growth</p>
</div>
<div>
<p className="text-5xl font-mono text-white mb-2">$500M+</p>
<p className="text-sm text-white/50">Ad Spend Managed</p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
<div className="text-emerald-400 mb-6">
<i className="w-8 h-8" data-lucide="quote"></i>
</div>
<p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                        "Stakque's Embedded model changed everything. They aren't an agency; they are the most technical members of our marketing team. The CPA reduction was immediate."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">JD</div>
<div>
<p className="text-sm font-semibold text-white">James Dalton</p>
<p className="text-xs text-white/40">CMO, FinTech Scale-up</p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
<div className="text-blue-400 mb-6">
<i className="w-8 h-8" data-lucide="quote"></i>
</div>
<p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                        "The engineering approach to creative testing and bid management allowed us to scale spend by 4x while maintaining our efficiency targets. Pure science."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">ES</div>
<div>
<p className="text-sm font-semibold text-white">Elena S.</p>
<p className="text-xs text-white/40">Founder, E-com Brand</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="engagement">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Partnership Tiers</span>
<h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">Engagement Models</h2>
<p className="text-white/60">We structure our partnerships to align incentives. We grow when you grow.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group relative rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 transition-all hover:border-white/20">
<div className="mb-8">
<span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 mb-4 border border-white/5">One-time</span>
<h3 className="text-2xl font-semibold text-white mb-2">Diagnostic Audit</h3>
<p className="text-sm text-white/50">Deep dive into your current account architecture and data integrity.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-white/40 shrink-0" data-lucide="search"></i>
                            Full Ad Account Analysis
                        </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-white/40 shrink-0" data-lucide="database"></i>
                            Tracking &amp; Pixel Verification
                        </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-white/40 shrink-0" data-lucide="file-text"></i>
                            Opportunity Roadmap
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all">Book Audit</button>
</div>

<div className="relative rounded-3xl bg-[#0F0F0F] border border-emerald-500/30 p-8 shadow-2xl shadow-emerald-900/10 scale-105 z-10">
<div className="absolute inset-0 bg-emerald-500/5 rounded-3xl pointer-events-none"></div>
<div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-t-3xl"></div>
<div className="mb-8 relative">
<span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400 mb-4 border border-emerald-500/20">Most Common</span>
<h3 className="text-2xl font-semibold text-white mb-2">Growth Partner</h3>
<p className="text-sm text-white/50">Full E3 implementation. Monthly retainer + performance incentive.</p>
</div>
<ul className="space-y-4 mb-8 relative">
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400 shrink-0" data-lucide="check-circle"></i>
<strong>Embedded</strong> Team Structure
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400 shrink-0" data-lucide="check-circle"></i>
                            Daily Bid Management &amp; Optimization
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400 shrink-0" data-lucide="check-circle"></i>
                            Creative Strategy &amp; Feedback Loops
                        </li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-5 h-5 text-emerald-400 shrink-0" data-lucide="check-circle"></i>
                            Custom Data Reporting Dashboard
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-emerald-500/25 relative">Apply for Partnership</button>
</div>

<div className="group relative rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 transition-all hover:border-white/20">
<div className="mb-8">
<span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 mb-4 border border-white/5">High Volume</span>
<h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
<p className="text-sm text-white/50">For brands spending $100k+/mo. Custom engineering and infrastructure.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="server"></i>
                            Dedicated Engineering Resources
                        </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="globe"></i>
                            Global Market Expansion Strategy
                        </li>
<li className="flex items-start gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-blue-400 shrink-0" data-lucide="shield-check"></i>
                            Priority SLA &amp; 24/7 Support
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="max-w-[1600px] mx-auto px-6 lg:px-10">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-emerald-400" data-lucide="layers"></i>
</div>
<span className="text-xl font-semibold text-white font-manrope">Stakque</span>
</div>
<p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
                        Pioneering the E3 performance model. We blend technical engineering with creative strategy to drive essential growth for forward-thinking brands.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Methodology</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Embedded Teams</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Essential Metrics</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Engineered Growth</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Tech Stack</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About Stakque</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30">
<p>© 2024 Stakque Performance Agency. All rights reserved.</p>
<div className="flex gap-6 mt-4 sm:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
