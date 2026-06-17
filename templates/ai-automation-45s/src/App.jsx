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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
accent: '#3b82f6', /* Muted Blue */
dark: '#0f172a',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        function roiCalculator() {
            return {
                lang: 'en',
                impactMode: 'business',
                inputs: { 
                    country: '', city: '', profession: '', 
                    hoursPerDay: 8, salary: null, savedHours: null, 
                    inflation: 0, housePrice: 300000, downPayment: 20 
                },
                results: { hourlyRate: 0, monthlySave: 0, monthlyTime: 0, projections: {} },
                businessTiles: [],
                personalTiles: [],
                loadingInflation: false,
                inflationAuto: false,
                
                // Demos Data
                demos: [
                    { id: 1, name: "Lead Capture", problem: "Leads lost in inbox noise", automation: "Email → CRM → Follow-Up", outcome: "Zero response delay", complexity: "Basic", size: "solo", setup: "1-3 days", savings: "5-10 hrs/mo", tags: ["solo", "basic"] },
                    { id: 2, name: "Invoice Processor", problem: "Manual data entry errors", automation: "Intake → Categorize → Sync", outcome: "Real-time P&L visibility", complexity: "Basic", size: "small biz", setup: "1-3 days", savings: "10-20 hrs/mo", tags: ["small biz", "basic"] },
                    { id: 3, name: "Daily Ops Digest", problem: "Scattered metrics", automation: "KPI Aggregation → Slack", outcome: "Instant morning clarity", complexity: "Basic", size: "small biz", setup: "3-5 days", savings: "15 hrs/mo", tags: ["small biz", "basic"] },
                    { id: 4, name: "Support Triage", problem: "Slow ticket routing", automation: "Sentiment Analysis → Route", outcome: "Faster resolution time", complexity: "Intermediate", size: "growing", setup: "1 week", savings: "30-50 hrs/mo", tags: ["growing", "intermediate"] },
                    { id: 5, name: "E-com Returns", problem: "Refund bottlenecks", automation: "Eligibility Check → Refund", outcome: "Auto-approved compliance", complexity: "Intermediate", size: "growing", setup: "1-2 weeks", savings: "40+ hrs/mo", tags: ["growing", "intermediate"] },
                    { id: 6, name: "No-Show Prevention", problem: "Calendar revenue gaps", automation: "SMS Reminders → Rebook", outcome: "Retained consult revenue", complexity: "Intermediate", size: "small biz", setup: "1 week", savings: "10 hrs/mo", tags: ["small biz", "intermediate"] },
                    { id: 7, name: "Ops RAG Agent", problem: "Knowledge silos", automation: "Docs + Chat → Answer", outcome: "Instant internal SOPs", complexity: "Advanced", size: "growing", setup: "2-3 weeks", savings: "100+ hrs/mo", tags: ["growing", "advanced"] },
                    { id: 8, name: "Orchestrator", problem: "System fragmentation", automation: "Multi-system Sync + Logs", outcome: "Total audit traceability", complexity: "Advanced", size: "enterprise", setup: "3-4 weeks", savings: "200+ hrs/mo", tags: ["enterprise", "advanced"] },
                ],

                get currentImpactItems() {
                    return this.impactMode === 'business' ? this.businessTiles : this.personalTiles;
                },

                async fetchInflation() {
                    if (this.inputs.country.length < 3) return;
                    this.loadingInflation = true;
                    this.inflationAuto = false;
                    
                    try {
                        const resCode = await fetch(`https://restcountries.com/v3.1/name/${this.inputs.country}?fields=cca2`);
                        if (!resCode.ok) throw new Error('Country not found');
                        const dataCode = await resCode.json();
                        const cca2 = dataCode[0].cca2;

                        const resInf = await fetch(`https://api.worldbank.org/v2/country/${cca2}/indicator/FP.CPI.TOTL.ZG?format=json&date=2022:2023&per_page=1`);
                        const dataInf = await resInf.json();
                        
                        if (dataInf && dataInf[1] && dataInf[1][0] && dataInf[1][0].value) {
                            this.inputs.inflation = parseFloat(dataInf[1][0].value).toFixed(1);
                            this.inflationAuto = true;
                        }
                    } catch (e) {
                        console.log('Auto-fetch failed, manual entry allowed.');
                    } finally {
                        this.loadingInflation = false;
                    }
                },

                init() {
                    this.$watch('inputs', () => this.calculate(), { deep: true });
                },

                calculate() {
                    if (!this.inputs.salary || !this.inputs.savedHours) return;

                    const workDays = 22;
                    const hourlyRate = this.inputs.salary / (this.inputs.hoursPerDay * workDays);
                    const dailySave = hourlyRate * this.inputs.savedHours;
                    const monthlySave = dailySave * workDays;
                    const infRate = (this.inputs.inflation || 0) / 100;

                    this.results.hourlyRate = hourlyRate;
                    this.results.monthlySave = monthlySave;
                    this.results.monthlyTime = this.inputs.savedHours * workDays;

                    // Projections
                    const getProj = (months) => {
                        let total = 0;
                        let currentMonthly = monthlySave;
                        for(let i=1; i<=months; i++) {
                            total += currentMonthly;
                            if (i % 12 === 0) currentMonthly *= (1 + infRate);
                        }
                        return total;
                    };

                    this.results.projections = {
                        '3m': getProj(3), '6m': getProj(6),
                        '1y': getProj(12), '3y': getProj(36),
                        '5y': getProj(60), '10y': getProj(120)
                    };

                    // Tiles Logic
                    const mSave = monthlySave > 0 ? monthlySave : 1;
                    const housePrice = this.inputs.housePrice || 300000;
                    const dpGoal = housePrice * ((this.inputs.downPayment || 20) / 100);

                    // Business Constants
                    const cost = {
                        assistant: 1500, // Part time
                        va: 3000,
                        tools: 500,
                        ads: 2000,
                        hire: 1200, // Weekly cost of $60k employee
                        inventory: 5000
                    };

                    this.businessTiles = [
                        { label: 'Runway', title: 'PT Assistant', value: (mSave / cost.assistant).toFixed(1) + ' Mo' },
                        { label: 'Runway', title: 'VA / Ops Support', value: (mSave / cost.va).toFixed(1) + ' Mo' },
                        { label: 'Runway', title: 'Tool Stack', value: (mSave / cost.tools).toFixed(1) + ' Mo' },
                        { label: 'Budget', title: 'Paid Ads', value: Math.min(100, (mSave / cost.ads) * 100).toFixed(0) + '%' },
                        { label: 'Runway', title: 'New Hire', value: (mSave / cost.hire).toFixed(1) + ' Wks' },
                        { label: 'Buffer', title: 'Inventory', value: (mSave / cost.inventory).toFixed(1) + ' Mo' }
                    ];

                    // Personal Constants
                    const pCost = {
                        emergency: 15000,
                        rent: 2500,
                        car: 600,
                        debt: 10000
                    };

                    this.personalTiles = [
                        { label: 'Goal', title: 'Emergency Fund', value: (pCost.emergency / mSave).toFixed(1) + ' Mo' },
                        { label: 'Runway', title: 'Rent Payment', value: (mSave / pCost.rent).toFixed(1) + ' Mo' },
                        { label: 'Runway', title: 'Car Payment', value: (mSave / pCost.car).toFixed(1) + ' Mo' },
                        { label: 'Goal', title: 'House Down Pay', value: (dpGoal / mSave).toFixed(1) + ' Mo' },
                        { label: 'Goal', title: 'Full House Price', value: (housePrice / mSave).toFixed(1) + ' Mo' },
                        { label: 'Payoff', title: 'Debt Clearance', value: (pCost.debt / mSave).toFixed(1) + ' Mo' }
                    ];
                },

                formatMoney(val) {
                    return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
                },
                
                formatLabel(key) {
                    const map = { '3m': '3 Months', '6m': '6 Months', '1y': '1 Year', '3y': '3 Years', '5y': '5 Years', '10y': '10 Years' };
                    return map[key];
                }
            }
        }
    


        (function() {
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];
            
            // Mouse tracking
            let mouse = { x: -1000, y: -1000 };
            document.addEventListener('mousemove', (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            });

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                initParticles();
            }

            class Particle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = (Math.random() - 0.5) * 0.2;
                    this.vy = (Math.random() - 0.5) * 0.2;
                    this.size = Math.random() * 1.5;
                    this.baseOpacity = Math.random() * 0.3 + 0.1;
                    this.opacity = this.baseOpacity;
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    // Mouse interaction
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 200;

                    if (dist < maxDist) {
                        const force = (maxDist - dist) / maxDist;
                        this.x -= dx * force * 0.03;
                        this.y -= dy * force * 0.03;
                        this.opacity = Math.min(1, this.baseOpacity + force * 0.5);
                    } else {
                        this.opacity = this.baseOpacity;
                    }

                    // Wrap around
                    if (this.x < 0) this.x = width;
                    if (this.x > width) this.x = 0;
                    if (this.y < 0) this.y = height;
                    if (this.y > height) this.y = 0;
                }

                draw() {
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            function initParticles() {
                particles = [];
                const count = Math.min(Math.floor(width * height / 15000), 100); // Responsive count
                for (let i = 0; i < count; i++) {
                    particles.push(new Particle());
                }
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
                requestAnimationFrame(animate);
            }

            window.addEventListener('resize', resize);
            resize();
            animate();
            
            // Lucide icons init
            lucide.createIcons();
        })();
    
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
      

<canvas height="687" id="particle-canvas" width="1056"></canvas>

<nav :className="scrollAtTop ? 'bg-transparent border-transparent py-4' : 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-3'" className="fixed w-full z-50 top-0 transition-all duration-300 border-b bg-[#050505]/80 backdrop-blur-md border-white/5 py-3">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-2 h-2 bg-white rounded-full group-hover:bg-brand-accent transition-colors"></div>
<span className="tracking-tighter">AETHER</span>
</a>

<div className="hidden md:flex items-center gap-10 text-xs font-medium text-slate-400 tracking-wide uppercase">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#roi">ROI Calculator</a>
<a className="hover:text-white transition-colors" href="#demos">Demos</a>
<a className="hover:text-white transition-colors" href="#cases">Case Studies</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a :href="bookingUrl" className="text-white text-xs font-medium border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">
                    Book Consultation
                </a>
</div>

<button @click="mobileMenu = !mobileMenu" className="md:hidden text-slate-400 hover:text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden bg-[#0a0a0a] border-b border-white/10 p-6 absolute w-full top-full left-0" style={{display: 'none'}} x-show="mobileMenu" x-transition.opacity="">
<div className="flex flex-col gap-6 text-sm font-medium text-slate-300 text-center">
<a @click="mobileMenu=false" href="#services">Services</a>
<a @click="mobileMenu=false" href="#roi">ROI Calculator</a>
<a @click="mobileMenu=false" href="#demos">Demos</a>
<a @click="mobileMenu=false" href="#cases">Case Studies</a>
<a :href="bookingUrl" @click="mobileMenu=false" className="text-brand-accent" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">Book Consultation</a>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
<div className="animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
<span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400 mb-8">
                    Next Generation Automation
                </span>
</div>
<h1 className="animate-fade-in opacity-0 md:text-8xl text-5xl font-medium text-white tracking-tighter mb-8 max-w-5xl leading-[1.05]" style={{animationDelay: '0.3s'}}>
                Silent, intelligent <br/>
<span className="text-slate-500">workflows.</span>
</h1>
<p className="animate-fade-in opacity-0 text-lg md:text-xl text-slate-400 max-w-xl mb-12 font-light leading-relaxed" style={{animationDelay: '0.5s'}}>
                We architect autonomous systems that reclaim time and revenue. <br className="hidden md:block"/> Precision engineering for high-growth enterprises.
            </p>
<div className="animate-fade-in opacity-0 flex flex-col sm:flex-row items-center gap-5" style={{animationDelay: '0.7s'}}>
<a className="min-w-[160px] bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors" href="#roi">
                    Calculate Impact
                </a>
<a className="min-w-[160px] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 hover:border-brand-accent hover:text-brand-accent transition-colors" href="#demos">
                    View Demos
                </a>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-[#050505]" id="services">
<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 lg:gap-24">
<div className="lg:col-span-1">
<h2 className="text-3xl font-medium text-white mb-6">Capabilities</h2>
<p className="text-slate-500 leading-relaxed text-sm">
                        Our systems integrate seamlessly into your existing infrastructure, replacing manual bottlenecks with fluid, self-correcting logic.
                    </p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">
<div className="group">
<svg className="lucide lucide-cpu w-6 h-6 text-slate-600 mb-6 group-hover:text-brand-accent transition-colors" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h3 className="text-lg font-medium text-white mb-3">Custom Agents</h3>
<p className="text-sm text-slate-500">LLMs tailored to your brand voice and data, capable of handling complex customer support and internal queries autonomously.</p>
</div>
<div className="group">
<svg className="lucide lucide-workflow w-6 h-6 text-slate-600 mb-6 group-hover:text-brand-accent transition-colors" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<h3 className="text-lg font-medium text-white mb-3">Orchestration</h3>
<p className="text-sm text-slate-500">End-to-end data pipelines that sync your CRM, ERP, and communication tools instantly without human oversight.</p>
</div>
<div className="group">
<svg className="lucide lucide-shield-check w-6 h-6 text-slate-600 mb-6 group-hover:text-brand-accent transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-lg font-medium text-white mb-3">Enterprise Security</h3>
<p className="text-sm text-slate-500">Self-hosted infrastructure options ensuring your data never leaves your controlled environment.</p>
</div>
<div className="group">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-slate-600 mb-6 group-hover:text-brand-accent transition-colors" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-lg font-medium text-white mb-3">Predictive Analytics</h3>
<p className="text-sm text-slate-500">Dashboards that don't just report history, but forecast trends and flag anomalies in real-time.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#080808] border-y border-white/5" id="roi" x-data="roiCalculator()">
<div className="max-w-6xl mx-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium text-white mb-2">ROI Projection Engine</h2>
<p className="text-slate-500 text-sm">Quantify the value of automation for your specific context.</p>
</div>

<div className="flex items-center p-1 bg-white/5 rounded-lg border border-white/10">
<template x-htmlFor="l in ['en', 'tr', 'es', 'de']"></template><button :className="lang === l ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-white'" @click="lang = l" className="px-3 py-1.5 text-[10px] font-bold uppercase rounded-md transition-all bg-white text-black shadow-sm">
<span x-text="l"></span>
</button><button :className="lang === l ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-white'" @click="lang = l" className="px-3 py-1.5 text-[10px] font-bold uppercase rounded-md transition-all text-slate-500 hover:text-white">
<span x-text="l"></span>
</button><button :className="lang === l ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-white'" @click="lang = l" className="px-3 py-1.5 text-[10px] font-bold uppercase rounded-md transition-all text-slate-500 hover:text-white">
<span x-text="l"></span>
</button><button :className="lang === l ? 'bg-white text-black shadow-sm' : 'text-slate-500 hover:text-white'" @click="lang = l" className="px-3 py-1.5 text-[10px] font-bold uppercase rounded-md transition-all text-slate-500 hover:text-white">
<span x-text="l"></span>
</button>
</div>
</div>

<div className="glass-panel rounded-3xl p-1">
<div className="bg-[#050505]/80 rounded-[22px] p-6 md:p-10">

<div className="grid md:grid-cols-12 gap-8 mb-12 gap-x-8 gap-y-8">

<div className="md:col-span-4 space-y-5">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Context</h4>
<div className="relative">
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">Country</label>
<input @input.debounce.600ms="fetchInflation()" className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" placeholder="e.g. United States" type="text" x-model="inputs.country"/>
<div className="absolute right-3 top-9" style={{display: 'none'}} x-show="loadingInflation">
<svg className="lucide lucide-loader-2 w-4 h-4 text-brand-accent animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
<div className="">
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">City</label>
<input className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" type="text" x-model="inputs.city"/>
</div>
<div className="">
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">Profession</label>
<input className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" type="text" x-model="inputs.profession"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-[10px] uppercase text-slate-500 tracking-wide mb-1.5">House Price</label>
<input className="input-field placeholder-slate-700 text-sm text-white font-mono-num w-full rounded-lg pt-3 pr-4 pb-3 pl-4" type="number" x-model="inputs.housePrice"/>
</div>
<div>
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">Down Pay (%)</label>
<input className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" type="number" x-model="inputs.downPayment"/>
</div>
</div>
</div>

<div className="md:col-span-4 space-y-5">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Metrics</h4>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">Daily Hours</label>
<input className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" type="number" x-model="inputs.hoursPerDay"/>
</div>
<div className="">
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">Saved (Hrs/Day)</label>
<input className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num border-brand-accent/30" type="number" x-model="inputs.savedHours"/>
</div>
</div>
<div className="">
<label className="block text-[10px] text-slate-500 uppercase tracking-wide mb-1.5">Monthly Salary</label>
<div className="relative">
<span className="absolute left-4 top-3 text-slate-600 font-mono-num">$</span>
<input className="input-field w-full rounded-lg pl-8 pr-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" type="number" x-model="inputs.salary"/>
</div>
</div>
<div className="">
<div className="flex justify-between items-end mb-1.5">
<label className="block text-[10px] text-slate-500 uppercase tracking-wide">Inflation Rate (%)</label>
<span className="text-[9px] text-brand-accent bg-brand-accent/10 px-1.5 py-0.5 rounded border border-brand-accent/20" style={{display: 'none'}} x-show="inflationAuto">Auto (World Bank)</span>
</div>
<input className="input-field w-full rounded-lg px-4 py-3 text-sm text-white placeholder-slate-700 font-mono-num" step="0.1" type="number" x-model="inputs.inflation"/>
</div>
</div>

<div className="md:col-span-4 flex flex-col justify-between bg-gradient-to-b from-white/5 to-transparent rounded-xl border border-white/5 p-6">
<div>
<p className="text-xs text-brand-accent font-medium mb-1">Your Hourly Value</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-mono-num" x-text="formatMoney(results.hourlyRate)">0.00</span>
<span className="text-sm text-slate-500">/hr</span>
</div>
</div>
<div className="mt-8 space-y-4">
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-xs text-slate-400">Monthly Saved</span>
<span className="text-lg font-medium text-white font-mono-num" x-text="formatMoney(results.monthlySave)">0.00</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-xs text-slate-400">Monthly Time</span>
<span className="text-lg font-medium text-white font-mono-num"><span x-text="results.monthlyTime">0</span> h</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-xs text-slate-400">Yearly Savings</span>
<span className="text-lg font-medium text-white font-mono-num" x-text="formatMoney(results.monthlySave * 12)">0.00</span>
</div>
</div>
</div>
</div>

<div style={{display: 'none'}} x-show="inputs.salary &gt; 0 &amp;&amp; inputs.savedHours &gt; 0" x-transition.opacity.duration.500ms="">
<div className="h-px w-full bg-white/5 mb-10"></div>
<h4 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-brand-accent" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span>Accumulated Value</span>
</h4>
<div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
</div>

<div className="flex items-center justify-between mb-6">
<h4 className="text-sm font-medium text-white flex items-center gap-2">
<svg className="lucide lucide-target w-4 h-4 text-brand-accent" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span>Impact Scenarios</span>
</h4>

<div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/10">
<button :className="impactMode === 'business' ? 'bg-white text-black' : 'text-slate-500 hover:text-white'" @click="impactMode = 'business'" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-md transition-all bg-white text-black">
                                        Business
                                    </button>
<button :className="impactMode === 'personal' ? 'bg-white text-black' : 'text-slate-500 hover:text-white'" @click="impactMode = 'personal'" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-md transition-all text-slate-500 hover:text-white">
                                        Personal
                                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
</div>
</div>

<div className="flex flex-col items-center justify-center mt-8">
<a :href="bookingUrl" className="bg-white text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">
                                Book a Strategy Call
                            </a>
<p className="text-[10px] text-slate-600 mt-4">This is an estimate. Final ROI is confirmed during discovery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-32 pr-6 pb-32 pl-6" id="demos" x-data="{ filter: 'all' }">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium text-white mb-2">Live Demos</h2>
<p className="text-sm text-slate-500">Real templates you can deploy in days.</p>
</div>

<div className="flex flex-wrap gap-2">
<template x-htmlFor="f in ['all', 'solo', 'small biz', 'growing', 'enterprise']"></template><button :className="filter === f ? 'bg-white text-black border-white' : 'text-slate-500 border-white/10 hover:border-white hover:text-white'" @click="filter = f" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all bg-white text-black border-white">
<span x-text="f"></span>
</button><button :className="filter === f ? 'bg-white text-black border-white' : 'text-slate-500 border-white/10 hover:border-white hover:text-white'" @click="filter = f" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all text-slate-500 border-white/10 hover:border-white hover:text-white">
<span x-text="f"></span>
</button><button :className="filter === f ? 'bg-white text-black border-white' : 'text-slate-500 border-white/10 hover:border-white hover:text-white'" @click="filter = f" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all text-slate-500 border-white/10 hover:border-white hover:text-white">
<span x-text="f"></span>
</button><button :className="filter === f ? 'bg-white text-black border-white' : 'text-slate-500 border-white/10 hover:border-white hover:text-white'" @click="filter = f" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all text-slate-500 border-white/10 hover:border-white hover:text-white">
<span x-text="f"></span>
</button><button :className="filter === f ? 'bg-white text-black border-white' : 'text-slate-500 border-white/10 hover:border-white hover:text-white'" @click="filter = f" className="text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border transition-all text-slate-500 border-white/10 hover:border-white hover:text-white">
<span x-text="f"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<template :key="demo.id" x-htmlFor="demo in demos.filter(d =&gt; filter === 'all' || d.tags.includes(filter))"></template>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-32 pr-6 pb-32 pl-6" id="cases">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-medium text-white mb-2">Proven Efficiency</h2>
<p className="text-slate-500 text-sm">Real results from live production environments.</p>
</div>
<a :href="bookingUrl" className="text-brand-accent text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mt-4 md:mt-0" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">View All Cases -&gt;</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative aspect-[16/9] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex gap-4 mb-3">
<div className="text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 px-2 py-1 rounded">Retail</div>
<div className="text-[10px] font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">+300% Capacity</div>
</div>
<h3 className="text-xl text-white font-medium mb-1 group-hover:underline decoration-1 underline-offset-4 decoration-brand-accent">Logistics Automated Routing</h3>
<p className="text-sm text-slate-400">Eliminated manual dispatch for a mid-sized fleet.</p>
</div>
</div>

<div className="group relative aspect-[16/9] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex gap-4 mb-3">
<div className="text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 px-2 py-1 rounded">FinTech</div>
<div className="text-[10px] font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">40h/mo Saved</div>
</div>
<h3 className="text-xl text-white font-medium mb-1 group-hover:underline decoration-1 underline-offset-4 decoration-brand-accent">Compliance Reporting Bot</h3>
<p className="text-sm text-slate-400">Automated KYC checks and regulatory filing generation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="packages">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-white mb-12 text-center">Engagement Models</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col hover:border-white/20 transition-colors group">
<div className="mb-6">
<span className="text-xs font-mono text-slate-500 uppercase">Starter</span>
<h3 className="text-2xl font-medium text-white mt-2">Pilot</h3>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-400"><div className="w-1 h-1 bg-brand-accent rounded-full"></div>Single Workflow Automation</li>
<li className="flex items-center gap-3 text-sm text-slate-400"><div className="w-1 h-1 bg-brand-accent rounded-full"></div>Basic Error Handling</li>
<li className="flex items-center gap-3 text-sm text-slate-400"><div className="w-1 h-1 bg-brand-accent rounded-full"></div>7-Day Delivery</li>
</ul>
<a :href="bookingUrl" className="w-full block text-center py-3 border border-white/10 rounded-lg text-xs uppercase font-bold text-white hover:bg-white hover:text-black transition-colors" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">Start Pilot</a>
</div>

<div className="p-8 rounded-2xl border border-brand-accent/30 bg-[#0c0c0c] flex flex-col relative shadow-[0_0_40px_-20px_rgba(59,130,246,0.15)]">
<div className="mb-6">
<span className="text-xs font-mono text-brand-accent uppercase">Scalable</span>
<h3 className="text-2xl font-medium text-white mt-2">Growth</h3>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>Multi-Step Orchestration</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>Custom AI Agents</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>Dashboard &amp; Analytics</li>
</ul>
<a :href="bookingUrl" className="w-full block text-center py-3 bg-brand-accent/10 border border-brand-accent/50 rounded-lg text-xs uppercase font-bold text-brand-accent hover:bg-brand-accent hover:text-white transition-all" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">Select Growth</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col hover:border-white/20 transition-colors">
<div className="mb-6">
<span className="text-xs font-mono text-slate-500 uppercase">Enterprise</span>
<h3 className="text-2xl font-medium text-white mt-2">Partner</h3>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-400"><div className="w-1 h-1 bg-brand-accent rounded-full"></div>Full System Architecture</li>
<li className="flex items-center gap-3 text-sm text-slate-400"><div className="w-1 h-1 bg-brand-accent rounded-full"></div>Self-Hosted Infrastructure</li>
<li className="flex items-center gap-3 text-sm text-slate-400"><div className="w-1 h-1 bg-brand-accent rounded-full"></div>24/7 SLA Support</li>
</ul>
<a :href="bookingUrl" className="w-full block text-center py-3 border border-white/10 rounded-lg text-xs uppercase font-bold text-white hover:bg-white hover:text-black transition-colors" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505]" id="contact">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl font-medium text-white mb-6">Ready to scale?</h2>
<p className="text-slate-400 mb-10 text-lg font-light">
                    Schedule a 15-minute discovery call. No sales pitch, just engineering feasibility.
                </p>
<div className="flex justify-center">
<a :href="bookingUrl" className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors" href="https://calendly.com/aethertrade2023/discovery-meeting" rel="noopener" target="_blank">
                        Book Consultation
                    </a>
</div>
<div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 Aether AI. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</section>
</main>





    </>
  );
}
