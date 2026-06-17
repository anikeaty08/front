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



// Download page functionality
document.getElementById('downloadPage').addEventListener('click', function() {
  const element = document.documentElement;
  const opt = {
    margin: 0,
    filename: 'nebulaQ-landing.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple chart implementation
const canvas = document.getElementById('queryChart');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width = canvas.offsetWidth * 2;
  const height = canvas.height = canvas.offsetHeight * 2;
  ctx.scale(2, 2);
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, height/2);
  gradient.addColorStop(0, 'rgba(56, 189, 248, 0.3)');
  gradient.addColorStop(1, 'rgba(56, 189, 248, 0.05)');
  
  // Sample data points
  const points = [
    {x: 50, y: 180}, {x: 120, y: 160}, {x: 190, y: 140},
    {x: 260, y: 120}, {x: 330, y: 100}, {x: 400, y: 80},
    {x: 470, y: 60}, {x: 540, y: 50}
  ];
  
  // Draw area under curve
  ctx.beginPath();
  ctx.moveTo(points[0].x, height/2);
  points.forEach(point => ctx.lineTo(point.x, point.y));
  ctx.lineTo(points[points.length - 1].x, height/2);
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Draw line
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.forEach(point => ctx.lineTo(point.x, point.y));
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Draw points
  points.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();
  });
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-float"></div>
</div>

<header className="relative z-50 glass-effect border-b border-white/5">
<div className="container mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
<div className="flex items-center space-x-3" style={{animation: 'slideInLeft 0.8s ease-out forwards'}}>
<div className="relative">
<svg className="text-cyan-400 animate-pulse" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m14.31 8 5.74 9.94"></path>
<path d="M9.69 8h11.48"></path>
<path d="m7.38 12 5.74-9.94"></path>
<path d="M9.69 16 3.95 6.06"></path>
<path d="M14.31 16H2.83"></path>
<path d="m16.62 12-5.74 9.94"></path>
</svg>
<div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
</div>
<span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">NebulaQ</span>
</div>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium" style={{animation: 'slideUp 0.8s 0.2s ease-out forwards'}}>
<a className="relative hover:text-white transition-all duration-300 group" href="#">
        Platform
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative hover:text-white transition-all duration-300 group" href="#">
        Use-Cases
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative hover:text-white transition-all duration-300 group" href="#">
        Docs
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative hover:text-white transition-all duration-300 group" href="#">
        Pricing
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative hover:text-white transition-all duration-300 group" href="#">
        Company
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>
<div className="flex items-center space-x-4" style={{animation: 'slideInRight 0.8s 0.4s ease-out forwards'}}>
<button className="hidden md:inline-block text-slate-300 hover:text-white text-sm font-medium transition-all duration-300">Log in</button>
<button className="relative overflow-hidden rounded-lg border border-cyan-400/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-white px-5 py-2.5 text-sm font-medium transition-all duration-300 group">
<span className="relative z-10">Sign up</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-600/50 hover:border-slate-400/50 bg-slate-800/50 hover:bg-slate-700/50 px-4 py-2.5 text-xs text-slate-300 hover:text-white transition-all duration-300" id="downloadPage">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
        Export
      </button>
</div>
</div>
</header>
<main className="relative">

<section className="relative text-center pt-32 pb-40 px-6 lg:px-0">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-300 mb-8" style={{animation: 'slideUp 0.8s ease-out forwards'}}>
<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        Live AI Knowledge Engine
      </div>
<h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight" style={{animation: 'slideUp 0.8s 0.1s ease-out forwards'}}>
<span className="text-gradient">Generate Answers,</span><br/>
<span className="text-white">Not Noise</span>
</h1>
<p className="text-2xl lg:text-3xl font-light text-cyan-300 mb-8" style={{animation: 'slideUp 0.8s 0.2s ease-out forwards'}}>
<em>Knowledge delivered in under 2 seconds</em>
</p>
<p className="max-w-2xl mx-auto text-slate-400 text-lg lg:text-xl leading-relaxed mb-12" style={{animation: 'slideUp 0.8s 0.3s ease-out forwards'}}>
        NebulaQ's neural engine scours every connected source to deliver concise, context-rich insights faster than you can think of your next question.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animation: 'slideUp 0.8s 0.4s ease-out forwards'}}>
<button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:scale-105 glow-cyan">
<span className="relative z-10 flex items-center gap-2">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
            Start Free Demo
          </span>
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button>
<button className="group flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-all duration-300">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5,3 19,12 5,21"></polygon>
</svg>
          Watch Demo
        </button>
</div>
</div>
</section>

<section className="relative px-6 lg:px-0 -mt-20 mb-32">
<div className="mx-auto max-w-7xl" style={{animation: 'slideUp 1s ease-out forwards'}}>
<div className="glass-effect rounded-3xl shadow-2xl overflow-hidden glow-cyan border border-white/10">
<div className="p-8 lg:p-12">
<div className="flex gap-8 items-start">

<aside className="hidden lg:block w-64 shrink-0">
<button className="w-full mb-8 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 hover:text-white px-4 py-3 font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                New Query
              </button>
<div className="space-y-2">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Navigation</div>
<a className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all duration-200 group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
                  Queries
                </a>
<a className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all duration-200 group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
                  Live Feed
                </a>
<a className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all duration-200 group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
                  Sources
                </a>
<a className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2.5 transition-all duration-200 group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="20" x="2" y="3"></rect>
<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
<path d="M10 12h4"></path>
</svg>
                  Archive
                </a>
</div>
</aside>

<div className="flex-1 min-h-[480px]">
<div className="glass-effect rounded-2xl border border-white/10 p-8 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
<h2 className="text-2xl font-bold tracking-tight text-center text-white mb-12">
                  Real-time Knowledge Analytics
                </h2>
<div className="grid gap-8 lg:grid-cols-2 mb-8">

<div className="glass-effect rounded-xl border border-cyan-400/20 p-6 hover:border-cyan-400/40 transition-all duration-300 group" style={{animation: 'slideInLeft 0.7s 0.1s ease-out forwards'}}>
<div className="flex items-start gap-4 mb-4">
<div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
<svg className="text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-white text-lg">1.8s</h3>
<span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">-12%</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">Median response time across 2.2k queries/min with consistent sub-2s delivery.</p>
</div>
</div>
</div>
<div className="glass-effect rounded-xl border border-purple-400/20 p-6 hover:border-purple-400/40 transition-all duration-300 group" style={{animation: 'slideInRight 0.7s 0.1s ease-out forwards'}}>
<div className="flex items-start gap-4 mb-4">
<div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
<svg className="text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-white text-lg">97.4%</h3>
<span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">+2%</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">Precision accuracy on industry benchmarks with minimal irrelevant results.</p>
</div>
</div>
</div>
</div>

<div className="glass-effect rounded-xl border border-white/10 p-8" style={{animation: 'slideUp 0.7s 0.3s ease-out forwards'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">Query Volume Trends</h3>
<div className="flex items-center gap-2 text-xs text-slate-400">
<div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      Weekly Growth +24%
                    </div>
</div>
<div className="h-64 relative">
<canvas className="w-full h-full" id="queryChart"></canvas>
</div>
<p className="mt-4 text-sm text-slate-400">Real-time analytics showing increasing user engagement and system performance optimization.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-0">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-400/20 px-4 py-2 text-sm font-medium text-purple-300 mb-6">
<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          Why Choose NebulaQ
        </div>
<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Your Personal <span className="text-gradient">AI Research</span> Department
        </h2>
<p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Stop drowning in documentation. Ask intelligent questions and receive synthesized, actionable insights from every connected source—instantly.
        </p>
</div>
<div className="grid gap-8 lg:grid-cols-3">
<div className="group glass-effect rounded-2xl border border-white/10 p-8 text-center hover:border-amber-400/30 transition-all duration-500 hover:scale-105" style={{animation: 'slideUp 0.7s 0.1s ease-out forwards'}}>
<div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="text-amber-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Universal Data Integration</h3>
<p className="text-slate-400 leading-relaxed">Seamlessly connect files, APIs, databases, and live feeds into one unified knowledge graph for comprehensive insights.</p>
</div>
<div className="group glass-effect rounded-2xl border border-white/10 p-8 text-center hover:border-rose-400/30 transition-all duration-500 hover:scale-105" style={{animation: 'slideUp 0.7s 0.2s ease-out forwards'}}>
<div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="text-rose-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Enterprise-Grade Security</h3>
<p className="text-slate-400 leading-relaxed">Advanced role-based access controls and encryption ensure sensitive data stays protected while enabling seamless collaboration.</p>
</div>
<div className="group glass-effect rounded-2xl border border-white/10 p-8 text-center hover:border-indigo-400/30 transition-all duration-500 hover:scale-105" style={{animation: 'slideUp 0.7s 0.3s ease-out forwards'}}>
<div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="text-indigo-400" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17H5"></path>
<path d="M19 7h-9"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Intelligent Automation</h3>
<p className="text-slate-400 leading-relaxed">Custom AI pipelines and smart retrieval algorithms that learn from your patterns—no coding expertise required.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 glass-effect py-16 px-6 lg:px-0">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="relative">
<svg className="text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m14.31 8 5.74 9.94"></path>
<path d="M9.69 8h11.48"></path>
<path d="m7.38 12 5.74-9.94"></path>
<path d="M9.69 16 3.95 6.06"></path>
<path d="M14.31 16H2.83"></path>
<path d="m16.62 12-5.74 9.94"></path>
</svg>
<div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
</div>
<span className="font-bold text-lg tracking-tight text-white">NebulaQ</span>
<span className="text-sm text-slate-400">© 2024</span>
</div>
<div className="flex items-center gap-8">
<nav className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-white transition-colors duration-300" href="#">Terms</a>
<a className="hover:text-white transition-colors duration-300" href="#">Support</a>
<a className="hover:text-white transition-colors duration-300" href="#">Status</a>
</nav>
<div className="flex items-center gap-4">
<a aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors duration-300" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors duration-300" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l11.733 16h4.267l-11.733-16z"></path>
<path d="M6.305 4h3.227l7.702 10.768h-3.227z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors duration-300" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 text-center">
<p className="text-slate-400 text-sm leading-relaxed">
        Transforming enterprise knowledge discovery with intelligent AI systems.<br/>
        Built for teams that demand instant, accurate insights.
      </p>
</div>
</div>
</footer>


    </>
  );
}
