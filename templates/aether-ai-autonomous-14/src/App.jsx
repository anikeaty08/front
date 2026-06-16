import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#030303',
surface: '#0A0A0A',
surfaceHighlight: '#111111',
border: '#1f1f1f',
accent: '#172554', // Muted deep blue
accentLight: '#1e3a8a',
textMain: '#EDEDED',
textMuted: '#888888',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
},
backgroundImage: {
'beam-gradient': 'radial-gradient(circle at 50% 0%, rgba(29, 78, 216, 0.15) 0%, transparent 50%)',
'glass': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
}
}
}
}



        // Language Switching Logic (UI Simulation)
        function changeLang(lang) {
            document.getElementById('current-lang').innerText = lang;
            // In a real app, this would trigger i18n replacement
            // For demo, we just update the label to show interactivity
        }

        // ROI Calculator Logic
        function calculateROI() {
            const salary = parseFloat(document.getElementById('salaryInput').value);
            const hoursSaved = parseFloat(document.getElementById('hoursInput').value);
            const inflation = parseFloat(document.getElementById('inflationInput').value) / 100;
            
            // Updates visual displays
            document.getElementById('salaryDisplay').innerText = '$' + salary.toLocaleString();
            document.getElementById('hoursDisplay').innerText = hoursSaved + 'h';
            
            // Logic
            // Assume 160 working hours per month for hourly rate calc
            const hourlyRate = salary / 160;
            const monthlySavings = hourlyRate * hoursSaved * 4.3; // 4.3 weeks/month
            
            // Display Hourly & Monthly
            document.getElementById('hourlyRate').innerText = '$' + hourlyRate.toFixed(2);
            document.getElementById('monthlySavings').innerText = '$' + Math.floor(monthlySavings).toLocaleString();

            // Projections with compound inflation consideration (simplified)
            // Future Value = PMT * (((1 + r)^n - 1) / r) * (1+r) - assuming reinvestment or just raw saving + inflation adjustment
            // To keep it simple and understandable: Value = Savings * Months * (1 + inflation)^years
            
            const calcProjection = (months) => {
                const years = months / 12;
                // Simple linear savings adjusted for inflation purchasing power loss or gain? 
                // Let's assume the value displayed is accumulative nominal dollars saved.
                let total = monthlySavings * months;
                // Add inflation factor as if salary increases match inflation
                total = total * Math.pow((1 + inflation), years);
                return total;
            };

            const y1 = calcProjection(12);
            const y3 = calcProjection(36);
            const y5 = calcProjection(60);

            document.getElementById('y1Savings').innerText = '$' + (y1 / 1000).toFixed(1) + 'k';
            document.getElementById('y3Savings').innerText = '$' + (y3 / 1000).toFixed(1) + 'k';
            document.getElementById('y5Savings').innerText = '$' + (y5 / 1000).toFixed(1) + 'k';

            // Dynamic Suggestion based on y3
            const suggestionEl = document.getElementById('purchaseSuggestion');
            if (y3 > 150000) suggestionEl.innerText = "Investment Condo";
            else if (y3 > 80000) suggestionEl.innerText = "Porsche 911 downpayment";
            else if (y3 > 40000) suggestionEl.innerText = "Luxury World Tour";
            else suggestionEl.innerText = "Premium Home Office";
        }

        // Mock API for Inflation
        async function updateInflation() {
            const country = document.getElementById('countrySelect').value;
            const input = document.getElementById('inflationInput');
            const display = document.getElementById('inflationDisplay');
            
            // Fallback data map
            const rates = {
                'us': 3.2,
                'uk': 4.0,
                'de': 2.5,
                'tr': 64.8,
                'es': 3.4
            };
            
            // Simulate API fetch delay
            input.parentElement.classList.add('opacity-50');
            setTimeout(() => {
                const rate = rates[country] || 3.0;
                input.value = rate;
                display.innerText = rate + '%';
                input.parentElement.classList.remove('opacity-50');
                calculateROI(); // Recalculate
            }, 500);
            
            // Note: Actual World Bank API requires complex country ISO handling and CORS proxies 
            // usually not suitable for single-file HTML without backend.
        }

        // Initialize
        calculateROI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-[800px] bg-beam-gradient pointer-events-none z-0 aura-beam"></div>
<div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-50"></div>

<nav className="fixed top-0 w-full z-40 border-b border-border bg-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-[0.2em] font-medium text-white hover:text-white/80 transition-colors" href="#">
                AETHER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-textMuted">
<a className="hover:text-white transition-colors" href="#services">Capabilities</a>
<a className="hover:text-white transition-colors" href="#roi">ROI Engine</a>
<a className="hover:text-white transition-colors" href="#demos">Library</a>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<button className="flex items-center gap-2 text-xs text-textMuted hover:text-white transition-colors uppercase tracking-wider">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="14"></iconify-icon>
<span id="current-lang">EN</span>
</button>

<div className="absolute right-0 top-full mt-2 w-24 bg-surface border border-border rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
<div className="py-1">
<button className="block w-full text-left px-4 py-2 text-xs text-textMuted hover:bg-white/5 hover:text-white" onclick="changeLang('EN')">English</button>
<button className="block w-full text-left px-4 py-2 text-xs text-textMuted hover:bg-white/5 hover:text-white" onclick="changeLang('TR')">Türkçe</button>
<button className="block w-full text-left px-4 py-2 text-xs text-textMuted hover:bg-white/5 hover:text-white" onclick="changeLang('ES')">Español</button>
<button className="block w-full text-left px-4 py-2 text-xs text-textMuted hover:bg-white/5 hover:text-white" onclick="changeLang('DE')">Deutsch</button>
</div>
</div>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 border border-white/10 rounded hover:bg-white/15 transition-all" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">
                    Book Call
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-40 pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-textMuted mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                System Operational
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Silent, intelligent <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">workflows.</span>
</h1>
<p className="text-lg md:text-xl text-textMuted font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                We architect autonomous systems that reclaim time and revenue. Move beyond chat interfaces into true agentic automation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors" href="#roi">
                    Calculate Impact
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-surface border border-white/10 text-white text-sm font-medium rounded hover:bg-surfaceHighlight hover:border-white/20 transition-all flex items-center justify-center gap-2 group" href="#demos">
                    View Results
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-border bg-bg" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Our Capabilities</h2>
<p className="text-textMuted font-light max-w-xl">Engineering bespoke intelligence layers for enterprise operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-surface border border-border hover:border-accentLight/30 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(30,58,138,0.3)]">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-accent/30 transition-colors">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Custom AI Agents</h3>
<p className="text-sm text-textMuted font-light leading-relaxed mb-6">Autonomous workers that execute complex tasks without human intervention.</p>
<a className="text-xs text-white flex items-center gap-2 hover:gap-3 transition-all opacity-0 group-hover:opacity-100" href="#">
                        Learn More <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>

<div className="group p-6 bg-surface border border-border hover:border-accentLight/30 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(30,58,138,0.3)]">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-accent/30 transition-colors">
<iconify-icon icon="lucide:workflow" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Orchestration</h3>
<p className="text-sm text-textMuted font-light leading-relaxed mb-6">Syncing disparate software ecosystems into a single fluid pipeline.</p>
<a className="text-xs text-white flex items-center gap-2 hover:gap-3 transition-all opacity-0 group-hover:opacity-100" href="#">
                        Learn More <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>

<div className="group p-6 bg-surface border border-border hover:border-accentLight/30 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(30,58,138,0.3)]">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-accent/30 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-textMuted font-light leading-relaxed mb-6">GDPR-compliant data handling and private LLM deployment.</p>
<a className="text-xs text-white flex items-center gap-2 hover:gap-3 transition-all opacity-0 group-hover:opacity-100" href="#">
                        Learn More <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>

<div className="group p-6 bg-surface border border-border hover:border-accentLight/30 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(30,58,138,0.3)]">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-accent/30 transition-colors">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-textMuted font-light leading-relaxed mb-6">Forward-looking data models to anticipate market shifts.</p>
<a className="text-xs text-white flex items-center gap-2 hover:gap-3 transition-all opacity-0 group-hover:opacity-100" href="#">
                        Learn More <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-border bg-surface/30" id="roi">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16">

<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">ROI Projection Engine</h2>
<p className="text-textMuted font-light mb-10 text-sm">Quantify the value of time reclaimed via automation.</p>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-textMuted">Profession</label>
<select className="bg-surfaceHighlight border border-border rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accentLight transition-colors appearance-none">
<option>Agency Owner</option>
<option>Executive</option>
<option>Manager</option>
<option>Freelancer</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-textMuted">Country</label>
<select className="bg-surfaceHighlight border border-border rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accentLight transition-colors appearance-none" id="countrySelect" onchange="updateInflation()">
<option value="us">United States</option>
<option value="uk">United Kingdom</option>
<option value="de">Germany</option>
<option value="tr">Turkey</option>
<option value="es">Spain</option>
</select>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-textMuted flex justify-between">
<span>Monthly Revenue / Salary</span>
<span className="text-white font-mono" id="salaryDisplay">$10,000</span>
</label>
<input className="w-full h-2 bg-surfaceHighlight rounded-lg appearance-none cursor-pointer" id="salaryInput" max="50000" min="2000" oninput="calculateROI()" step="500" type="range" value="10000"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-textMuted flex justify-between">
<span>Hours Saved / Week</span>
<span className="text-white font-mono" id="hoursDisplay">10h</span>
</label>
<input className="w-full h-2 bg-surfaceHighlight rounded-lg appearance-none cursor-pointer" id="hoursInput" max="40" min="1" oninput="calculateROI()" type="range" value="10"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-textMuted flex justify-between">
<span>Inflation Rate (API Fetch)</span>
<span className="text-white font-mono" id="inflationDisplay">3.2%</span>
</label>
<input className="bg-surfaceHighlight border border-border rounded px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-accentLight transition-colors" id="inflationInput" oninput="calculateROI()" step="0.1" type="number" value="3.2"/>
</div>
</div>
</div>

<div className="flex-1 bg-gradient-to-br from-surfaceHighlight to-bg border border-border rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 gap-8">
<div>
<p className="text-xs uppercase tracking-widest text-textMuted mb-2">Est. Hourly Value</p>
<p className="text-4xl font-mono font-light text-white" id="hourlyRate">$62.50</p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-textMuted mb-2">Monthly Recovery</p>
<div className="flex items-baseline gap-2">
<p className="text-5xl font-mono font-medium text-white" id="monthlySavings">$2,500</p>
<span className="text-green-500 text-sm font-mono">+12.5%</span>
</div>
</div>
<div className="h-px bg-white/10 w-full"></div>
<div className="grid grid-cols-3 gap-4">
<div>
<p className="text-[10px] uppercase text-textMuted mb-1">1 Year</p>
<p className="text-lg font-mono text-white" id="y1Savings">$30k</p>
</div>
<div>
<p className="text-[10px] uppercase text-textMuted mb-1">3 Years</p>
<p className="text-lg font-mono text-white" id="y3Savings">$92k</p>
</div>
<div>
<p className="text-[10px] uppercase text-textMuted mb-1">5 Years</p>
<p className="text-lg font-mono text-white" id="y5Savings">$158k</p>
</div>
</div>
<div className="bg-accent/10 border border-accent/20 rounded p-4 flex items-start gap-3 mt-2">
<iconify-icon className="text-accentLight shrink-0 mt-0.5" icon="lucide:sparkles" width="16"></iconify-icon>
<p className="text-xs text-blue-200/80 leading-relaxed">
<span className="font-medium text-blue-100">Insight:</span> In 3 years, these savings equate to a <span className="text-white" id="purchaseSuggestion">Porsche 911 downpayment</span>.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-border bg-bg" id="demos">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Demo Library</h2>
<p className="text-textMuted font-light max-w-xl">Real-world implementations available for immediate deployment.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-textMuted uppercase">12 Systems</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-textMuted uppercase">Pilot Ready</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">


<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:inbox" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Inbox → Daily Brief</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Summarizes emails, calendar events, and tasks into a morning briefing.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Gmail</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Slack</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:brain-circuit" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Personal Knowledge RAG</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Upload PDF/Docs, ask questions, get cited answers instantly.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Pinecone</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">OpenAI</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:briefcase" width="24"></iconify-icon>
<span className="text-[10px] bg-blue-900/30 text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Pilot</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Job Hunt Autopilot</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Tracks applications, drafts custom cover letters and follow-ups.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">LinkedIn</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Notion</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:repeat" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Content Repurposer</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Turns one video/article into 10 tweets, a LinkedIn post, and a newsletter.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">GPT-4</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Socials</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:magnet" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Lead Capture + Reply</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Instantly logs leads into CRM and sends personalized intro within seconds.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">HubSpot</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Mail</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:calendar-check" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Booking + Reminders</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Handles scheduling, sends SMS reminders, and manages reschedules.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Cal.com</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Twilio</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:receipt" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Invoice Chaser</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Monitors due dates and politely follows up on unpaid invoices.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Xero</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Stripe</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:package" width="24"></iconify-icon>
<span className="text-[10px] bg-blue-900/30 text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Pilot</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Order → Inventory Sync</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Syncs new orders, deducts inventory, and triggers shipping labels.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Shopify</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Airtable</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:file-text" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Multi-Client Reporting</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Aggregates ads &amp; analytics into branded PDFs for agency clients.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Meta Ads</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Looker</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:user-plus" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Onboarding Automation</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Creates accounts, assigns tasks, and sends welcome kits to new hires.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">BambooHR</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Jira</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:landmark" width="24"></iconify-icon>
<span className="text-[10px] bg-blue-900/30 text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Pilot</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Vendor Invoice Routing</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Extracts data from PDF bills, routes for approval, syncs to accounting.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">OCR</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Quickbooks</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>

<div className="group bg-surface border border-border hover:border-white/20 p-6 rounded-lg transition-all hover:bg-surfaceHighlight">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-white/60" icon="lucide:activity" width="24"></iconify-icon>
<span className="text-[10px] bg-green-900/30 text-green-400 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-wider">Ready</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Governance Monitor</h3>
<p className="text-sm text-textMuted leading-relaxed mb-4 h-10">Central dashboard for monitoring all automation runs and failure alerts.</p>
<div className="flex gap-2 mb-6">
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Zapier</span>
<span className="text-[10px] text-white/40 border border-white/5 px-2 py-1 rounded">Make</span>
</div>
<button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded transition-colors border border-white/5">View Demo</button>
</div>
</div>

<div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-surfaceHighlight to-bg border border-border flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h4 className="text-lg font-medium text-white mb-1">Want one of these running in your business?</h4>
<p className="text-sm text-textMuted">We can deploy most of these systems within 72 hours.</p>
</div>
<div className="flex gap-4">
<button className="px-5 py-2.5 text-xs font-medium text-white bg-white/10 hover:bg-white/15 rounded border border-white/5 transition-all">Get a Quick Audit</button>
<a className="px-5 py-2.5 text-xs font-medium bg-white text-black hover:bg-gray-200 rounded transition-all" href="https://calendly.com/aethertrade2023/discovery-meeting">Request a Demo</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 border-t border-border">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Ready to Scale?</h2>
<p className="text-textMuted font-light mb-10 leading-relaxed">
                Schedule a 15-minute discovery call. No sales pitch, just engineering feasibility to see if our systems align with your infrastructure.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-accentLight/90 hover:bg-accentLight text-white rounded text-sm font-medium transition-all hover:shadow-[0_0_40px_-10px_rgba(30,58,138,0.5)]" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
                Book Consultation
            </a>
</div>
</section>

<footer className="border-t border-border bg-bg py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm tracking-[0.2em] font-medium text-white/80">AETHER AI</span>
<span className="text-xs text-textMuted">© 2024</span>
</div>
<div className="flex gap-8 text-xs text-textMuted">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
