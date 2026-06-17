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



        document.addEventListener("DOMContentLoaded", function() {
            const ctx = document.getElementById('retentionChart').getContext('2d');
            
            // Gradient for light mode
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.1)'); // blue-600 low opacity
            gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Retention Score',
                        data: [82, 84, 86, 89, 92, 94],
                        borderColor: '#2563eb', // blue-600
                        backgroundColor: gradient,
                        borderWidth: 2,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#2563eb',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1f2937',
                            padding: 10,
                            bodyFont: { family: 'Inter', size: 12 },
                            displayColors: false,
                            callbacks: {
                                label: function(context) { return context.parsed.y + '%'; }
                            }
                        }
                    },
                    scales: {
                        x: { display: false },
                        y: { display: false, min: 75 }
                    },
                    layout: { padding: 0 }
                }
            });
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
      

<nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between max-w-[1440px] mx-auto relative z-50">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-br-lg rounded-tl-lg rounded-tr-sm rounded-bl-sm">
<iconify-icon className="" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold text-gray-900 tracking-tight">HR Master</span>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-blue-600 transition-colors" href="#">Expertise</a>
<a className="hover:text-blue-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-blue-600 transition-colors" href="#">Insights</a>
<a className="hover:text-blue-600 transition-colors" href="#">About Us</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="hover:text-blue-600 text-sm font-medium text-gray-900" href="#">Client Login</a>
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all border border-gray-900">
                Book Consultation
            </button>
</div>

<div className="md:hidden">
<button className="text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-8 pb-20 lg:flex lg:gap-16 items-center">

<div className="lg:w-[45%] flex flex-col justify-center mb-16 lg:mb-0">
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide border border-blue-100">HRD CONSULTING FIRM</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-semibold tracking-tight mb-8 text-gray-900">
                Unlocking human <br/> <span className="text-gray-400">potential</span> for <br/> business growth.
            </h1>
<p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-normal">
                We design organizational cultures, develop transformative leadership, and align talent strategy with your corporate vision.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

<button className="group bg-blue-600 text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 transition-transform hover:scale-105 shadow-lg shadow-blue-600/20">
<span className="font-medium text-sm">Start your transformation</span>
<div className="bg-white text-blue-600 rounded-full p-2 group-hover:translate-x-1 transition-transform flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</button>

<div className="flex items-center gap-3 pl-2">
<div className="flex -space-x-3">
<img alt="Consultant 1" className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&amp;q=80"/>
<img alt="Consultant 2" className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] bg-gray-200 flex items-center justify-center text-[10px] font-medium text-gray-600">
                            +40
                        </div>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-gray-900">Expert Consultants</span>
<span className="text-[10px] text-gray-500">Global availability</span>
</div>
</div>
</div>
</div>

<div className="lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-5 relative">

<div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

<div className="flex flex-col gap-5 pt-0 md:pt-12">

<div className="relative group h-[300px] w-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">
<img alt="Executive Meeting" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-xl shadow-lg flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900">Executive Coaching</span>
</div>
</div>
</div>

<div className="bg-[#F3F0FF] rounded-3xl p-6 flex flex-col justify-center min-h-[200px] border border-purple-100">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 text-purple-600 shadow-sm">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Org. Design</h3>
<p className="text-xs text-gray-600 leading-relaxed font-normal">
                        Restructuring frameworks to eliminate silos and enhance cross-functional agility.
                    </p>
</div>
</div>

<div className="flex flex-col gap-5">

<div className="bg-[#ECFDF5] rounded-3xl p-6 flex flex-col justify-center min-h-[200px] border border-emerald-100">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 text-emerald-600 shadow-sm">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Culture Audit</h3>
<p className="text-xs text-gray-600 leading-relaxed font-normal">
                        Data-driven assessment of your company's values, behaviors, and engagement levels.
                    </p>
</div>

<div className="relative group h-[300px] w-full rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">
<img alt="Workshop" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-xl shadow-lg flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:book-2-linear" width="18"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900">L&amp;D Programs</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full bg-white border-y border-gray-100 py-12 px-6">
<div className="max-w-[1440px] mx-auto flex flex-col items-center">
<p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-8 text-center">
                Trusted by People Leaders at
            </p>
<div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon> Nexus
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
<iconify-icon icon="solar:earth-linear" width="24"></iconify-icon> Globalia
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon> Infinite
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
<iconify-icon icon="solar:shield-linear" width="24"></iconify-icon> SecureCorp
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon> EnergyPlus
                </div>
</div>
</div>
</section>

<section className="md:px-12 bg-gray-50/50 w-full pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1440px] mx-auto">

<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Engineering <span className="text-blue-600">high-performance</span>  cultures for the modern enterprise.
                    </h2>
<p className="text-lg text-gray-500 font-normal leading-relaxed max-w-xl">
                        We deploy organizational psychology strategies to transform your workforce into your most defensible competitive advantage.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-200 pb-1 hover:border-blue-600 hover:text-blue-600 transition-colors mt-4" href="#">
                    Explore Methodologies
                    <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl flex flex-col justify-between h-[420px] border border-gray-100 shadow-sm group hover:shadow-md transition-all">
<div className="relative">
<iconify-icon className="text-blue-100 mb-6" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-gray-900 mb-4 tracking-tight leading-snug">
                            "The clarity HR Master brought to our organizational structure was transformative. We finally have a leadership layer that scales effectively."
                        </h3>
</div>
<div className="mt-8 pt-6 border-t border-gray-100">
<div className="flex items-center gap-4">
<img alt="Elena" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="">
<div className="text-sm font-semibold text-gray-900">Elena Rossini</div>
<div className="text-xs font-medium text-gray-500">VP of People, FintechCo</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[420px] group bg-white border border-gray-100">
<img alt="Strategic Meeting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
</span>
<span className="text-xs font-medium text-white/90 uppercase tracking-wider">Leadership Labs</span>
</div>
<p className="text-white text-lg font-medium leading-snug">
                            Aligning executive vision with operational reality through immersive workshops.
                        </p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl flex flex-col h-[420px] border border-gray-100 shadow-sm relative overflow-hidden">
<div className="mb-6 z-10">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:chart-2-linear" width="14"></iconify-icon> Impact Metric
                        </span>
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight mt-2 flex items-baseline gap-2">
                            94%
                            <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">+12% YoY</span>
</h3>
<p className="text-sm text-gray-500 mt-2">Employee Retention Rate</p>
</div>
<div className="flex-grow w-full relative z-10 flex items-end pb-4">
<canvas className="w-full h-full max-h-[200px]" height="200" id="retentionChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '250.5px'}} width="250"></canvas>
</div>

<div className="absolute inset-0 pointer-events-none opacity-30" style={{backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>
</div>

<div className="bg-[#F8F9FA] border border-gray-200 p-8 rounded-3xl flex flex-col justify-between h-[420px] relative overflow-hidden group">

<div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm text-gray-900">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-gray-900">Talent Audit &amp; Strategy</h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                            A comprehensive 360° analysis of your current human capital infrastructure and future readiness gaps.
                        </p>
</div>
<div className="relative z-10">
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Competency Mapping
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> Succession Planning
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="16"></iconify-icon> KPI Alignment
                            </li>
</ul>
<button className="w-full bg-white border border-gray-200 text-gray-900 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 group/btn shadow-sm">
                            Start Assessment
                            <iconify-icon className="transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 overflow-hidden group bg-white w-full border-gray-100 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-[1440px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
<span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Our Expertise</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-gray-900 leading-[1.05] mb-8">
                        Elevating <span className="text-gray-400">human potential</span> for sustainable impact.
                    </h2>
<p className="text-lg text-gray-500 leading-relaxed font-normal max-w-lg mb-10">
                        We partner with forward-thinking organizations to design culture, develop leadership, and optimize talent strategies that drive sustainable growth.
                    </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-10 border-t border-gray-100 pt-8">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon className="text-blue-600" icon="solar:target-linear" width="20"></iconify-icon>
<span>Talent Acquisition</span>
</div>
<p className="text-sm text-gray-500 pl-7">Strategic role-fit assessment</p>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon className="text-blue-600" icon="solar:structure-linear" width="20"></iconify-icon>
<span>Org Design</span>
</div>
<p className="text-sm text-gray-500 pl-7">Structure for agility &amp; flow</p>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon className="text-blue-600" icon="solar:graph-new-linear" width="20"></iconify-icon>
<span>Performance Mgmt</span>
</div>
<p className="text-sm text-gray-500 pl-7">Continuous feedback loops</p>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-gray-900 font-medium">
<iconify-icon className="text-blue-600" icon="solar:mortarboard-linear" width="20"></iconify-icon>
<span>Learning &amp; Dev</span>
</div>
<p className="text-sm text-gray-500 pl-7">Upskilling workforces</p>
</div>
</div>
<div className="flex items-center gap-6">
<button className="bg-gray-900 text-white h-12 px-8 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group/btn shadow-xl shadow-gray-900/10">
                            Book Consultation
                            <iconify-icon className="transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2" href="#">
                            Read Case Studies
                        </a>
</div>
</div>

<div className="relative grid grid-cols-2 gap-4">

<div className="group/card relative h-56 bg-[#FAFAFA] rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-500">
<div className="absolute top-4 left-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm text-blue-600">
<iconify-icon icon="solar:user-id-linear" width="22"></iconify-icon>
</div>
</div>
<div className="absolute bottom-5 left-5 right-5">
<h3 className="text-gray-900 font-semibold text-base tracking-tight">Executive Search</h3>
<p className="text-gray-500 text-xs mt-1 font-medium">Leadership Benchmarking</p>
</div>
</div>

<div className="group/card relative h-56 bg-[#FAFAFA] rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-500 mt-8">
<div className="absolute top-4 left-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm text-emerald-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
</div>
</div>
<div className="absolute bottom-5 left-5 right-5">
<h3 className="text-gray-900 font-semibold text-base tracking-tight">Team Synergy</h3>
<p className="text-gray-500 text-xs mt-1 font-medium">Conflict Resolution</p>
</div>
</div>

<div className="group/card relative h-56 bg-[#FAFAFA] rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-500 -mt-8">
<div className="absolute top-4 left-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm text-purple-600">
<iconify-icon icon="solar:pulse-linear" width="22"></iconify-icon>
</div>
</div>
<div className="absolute bottom-5 left-5 right-5">
<h3 className="text-gray-900 font-semibold text-base tracking-tight">Engagement</h3>
<p className="text-gray-500 text-xs mt-1 font-medium">Retention Analytics</p>
</div>
</div>

<div className="group/card relative h-56 bg-[#FAFAFA] rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-500">
<div className="absolute top-4 left-4">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm text-orange-500">
<iconify-icon icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
</div>
<div className="absolute bottom-5 left-5 right-5">
<h3 className="text-gray-900 font-semibold text-base tracking-tight">Succession</h3>
<p className="text-gray-500 text-xs mt-1 font-medium">Leadership Bench</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#FDFBF7] pt-12 pb-12 px-6 md:px-12 border-t border-gray-200 relative z-20">
<div className="max-w-[1440px] mx-auto">
<div className="relative overflow-hidden bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100">

<div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60"></div>
<div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl opacity-40"></div>
<div className="relative z-10 p-8 md:p-12 lg:p-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gray-100">

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-br-lg rounded-tl-lg rounded-tr-sm rounded-bl-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">HR Master</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                                    Engineering the <br/>
<span className="text-gray-400">future of work.</span>
</h3>
<p className="text-gray-500 text-lg leading-relaxed max-w-md mb-8">
                                    We combine organizational psychology with data science to build resilient, high-velocity cultures for the modern enterprise.
                                </p>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div className="">
<h4 className="text-xl font-semibold text-gray-900 tracking-tight">Start a conversation</h4>
<p className="text-sm text-gray-500 mt-1">Receive a preliminary talent audit within 24 hours.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 border border-green-200 px-3 py-1 text-xs font-medium">
<span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse"></span>
                                        Accepting New Clients
                                    </div>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Full Name</label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all" placeholder="Sarah Jenkins" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Work Email</label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all" placeholder="sarah@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Company Size</label>
<div className="relative">
<select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all appearance-none">
<option>50 - 200 Employees</option>
<option>201 - 1,000 Employees</option>
<option>1,000+ Employees</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700 ml-1">Interest</label>
<div className="relative">
<select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all appearance-none">
<option>Organizational Design</option>
<option>Leadership Development</option>
<option>Talent Strategy</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-2 pt-2">
<button className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors px-6 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 group shadow-lg shadow-gray-900/10" type="button">
                                            Book Strategy Call
                                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pt-16 pb-8">
<div className="col-span-2 lg:col-span-2">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">Offices</h4>
<div className="grid grid-cols-2 gap-8">
<div>
<h5 className="text-sm font-medium text-gray-900 mb-2">Copenhagen</h5>
<p className="text-sm text-gray-500 leading-relaxed">Gammel Kongevej 111610 Copenhagen V</p>
</div>
<div>
<h5 className="text-sm font-medium text-gray-900 mb-2">London</h5>
<p className="text-sm text-gray-500 leading-relaxed">123 Clerkenwell RdFarringdon, EC1R 5DB</p>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">Expertise</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Org. Design</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Talent Strategy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Culture Audit</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Methodology</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-6">Connect</h4>
<div className="flex items-center gap-3">
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:linkedin" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400 font-medium">© 2025 HR Master Consulting. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
