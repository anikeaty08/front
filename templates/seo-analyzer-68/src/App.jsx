import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const views = {
            hero: document.getElementById('view-hero'),
            loading: document.getElementById('view-loading'),
            results: document.getElementById('view-results')
        };
        const elements = {
            urlInput: document.getElementById('url-input'),
            loadingUrl: document.getElementById('loading-url'),
            loadingText: document.getElementById('loading-text'),
            progressBar: document.getElementById('progress-bar'),
            resultUrl: document.getElementById('result-url'),
            scanTime: document.getElementById('scan-time'),
            scoreCircle: document.getElementById('score-circle'),
            overallScore: document.getElementById('overall-score'),
            scoreLabel: document.getElementById('score-label'),
            steps: [
                document.getElementById('step-1'),
                document.getElementById('step-2'),
                document.getElementById('step-3')
            ]
        };

        // Helper: Format domain
        function cleanDomain(url) {
            try {
                let domain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
                return domain || 'example.com';
            } catch (e) { return 'example.com'; }
        }

        // Logic: Start Analysis
        function startAnalysis(e) {
            if(e) e.preventDefault();
            
            const rawUrl = elements.urlInput.value;
            if(!rawUrl) return;

            const domain = cleanDomain(rawUrl);

            // Update Text
            elements.loadingUrl.innerText = domain;
            elements.resultUrl.innerText = domain;
            
            // Switch View: Hero -> Loading
            views.hero.classList.add('hidden');
            views.results.classList.add('hidden');
            views.loading.classList.remove('hidden');
            
            // Reset Loading State
            elements.progressBar.style.width = '0%';
            elements.steps.forEach(el => {
                el.classList.add('opacity-50');
                el.classList.remove('opacity-100', 'bg-white', 'shadow-sm');
                el.querySelector('div').className = "w-2 h-2 rounded-full bg-slate-300";
            });

            // Simulate Progress
            simulateLoading(domain);
        }

        // Logic: Simulation Steps
        function simulateLoading(domain) {
            let progress = 0;
            const ms = 3000; // Total fake loading time
            const interval = 30;
            const step = 100 / (ms / interval);

            const timer = setInterval(() => {
                progress += step;
                elements.progressBar.style.width = `${Math.min(progress, 100)}%`;

                // Update text based on progress
                if (progress < 30) {
                    elements.loadingText.innerText = "Connecting to " + domain + "...";
                    activateStep(0);
                } else if (progress < 60) {
                    elements.loadingText.innerText = "Analyzing Core Web Vitals...";
                    activateStep(1);
                } else if (progress < 90) {
                    elements.loadingText.innerText = "Generating Final Report...";
                    activateStep(2);
                }

                if (progress >= 100) {
                    clearInterval(timer);
                    setTimeout(showResults, 500);
                }
            }, interval);
        }

        function activateStep(index) {
            const el = elements.steps[index];
            el.classList.remove('opacity-50');
            el.classList.add('opacity-100', 'bg-white', 'shadow-sm');
            el.querySelector('div').className = "w-2 h-2 rounded-full bg-emerald-500";
        }

        // Logic: Show Results
        function showResults() {
            views.loading.classList.add('hidden');
            views.results.classList.remove('hidden');
            
            // Animate Score
            // Full circle is approx 477px (2 * PI * 76)
            const circumference = 477;
            elements.scoreCircle.style.strokeDasharray = circumference;
            elements.scoreCircle.style.strokeDashoffset = circumference;
            
            // Randomize score slightly between 78 and 92 for realism
            const finalScore = Math.floor(Math.random() * (92 - 78 + 1) + 78);
            const offset = circumference - (finalScore / 100) * circumference;
            
            setTimeout(() => {
                elements.scoreCircle.style.strokeDashoffset = offset;
                animateValue(elements.overallScore, 0, finalScore, 1500);
                elements.scoreLabel.innerText = finalScore > 80 ? 'Good' : 'Average';
            }, 100);

            // Update Time
            const now = new Date();
            elements.scanTime.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Logic: Reset
        function resetApp() {
            elements.urlInput.value = '';
            views.results.classList.add('hidden');
            views.loading.classList.add('hidden');
            views.hero.classList.remove('hidden');
        }

        // Logic: Accordion Toggle
        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById('icon-' + id);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer" onclick="resetApp()">
<div className="flex items-center justify-center w-8 h-8 bg-slate-900 rounded-lg text-white shadow-sm hover:shadow-md transition-all">
<iconify-icon className="" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">RANK</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="#">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Resources</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-95">
                        Get Started
                    </button>
</div>
</div>
</div>
</nav>

<main className="flex-grow relative">

<div className="lg:pt-32 lg:pb-24 overflow-hidden transition-opacity duration-500 pt-24 pb-16 relative" id="view-hero">
<div className="text-center max-w-4xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    New: Core Web Vitals Analysis 2.0
                </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                    Master your website's <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">SEO performance</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Analyze your SEO health, identify technical issues, and get step-by-step 
                    fixes to improve your ranking. Enter your URL below to start.
                </p>

<div className="max-w-xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<form className="relative flex items-center bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 p-2 transition-transform focus-within:scale-[1.01]" id="analyze-form" onsubmit="startAnalysis(event)">
<div className="pl-4 text-slate-400 flex items-center">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<input className="flex-1 block w-full border-0 bg-transparent py-3 pl-3 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm outline-none" id="url-input" placeholder="https://example.com" required="" type="url"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition-all active:scale-95" type="submit">
                            Analyze
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
<div className="mt-12 flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1 font-bold text-lg text-slate-800"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> ACME</div>
<div className="flex items-center gap-1 font-bold text-lg text-slate-800"><iconify-icon icon="solar:earth-linear"></iconify-icon> GLOBAL</div>
<div className="flex items-center gap-1 font-bold text-lg text-slate-800"><iconify-icon className="" icon="solar:atom-linear"></iconify-icon> TECH</div>
<div className="flex items-center gap-1 font-bold text-lg text-slate-800"><iconify-icon icon="solar:infinite-linear"></iconify-icon> FLOW</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<svg className="absolute top-0 left-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" opacity="0.03"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#9333ea', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="hidden min-h-[60vh] flex flex-col items-center justify-center px-4" id="view-loading">
<div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full text-center">
<div className="mb-6 relative">
<div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl mx-auto flex items-center justify-center relative z-10">
<iconify-icon className="animate-pulse" icon="solar:scanner-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-indigo-400 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Analyzing <span className="text-indigo-600" id="loading-url">site...</span></h3>
<p className="text-sm text-slate-500 mb-6 h-5" id="loading-text">Connecting to server...</p>
<div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
<div className="bg-indigo-600 h-2 rounded-full loader-bar" id="progress-bar" style={{width: '0%'}}></div>
</div>
<div className="flex justify-between text-xs text-slate-400 font-medium">
<span>0%</span>
<span>100%</span>
</div>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg">
<div className="flex items-center gap-3 bg-white/50 backdrop-blur p-3 rounded-lg border border-slate-200 opacity-50 transition-opacity" id="step-1">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-500">Crawling</span>
</div>
<div className="flex items-center gap-3 bg-white/50 backdrop-blur p-3 rounded-lg border border-slate-200 opacity-50 transition-opacity" id="step-2">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-500">Core Vitals</span>
</div>
<div className="flex items-center gap-3 bg-white/50 backdrop-blur p-3 rounded-lg border border-slate-200 opacity-50 transition-opacity" id="step-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-xs font-medium text-slate-500">Report</span>
</div>
</div>
</div>

<div className="hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in" id="view-results">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Audit Results for <span className="text-indigo-600" id="result-url">example.com</span></h2>
<p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                        Last scanned: <span id="scan-time">Just now</span>
<span className="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
<iconify-icon icon="solar:export-linear" width="18"></iconify-icon>
                        Export PDF
                    </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors" onclick="resetApp()">
<iconify-icon icon="solar:restart-linear" width="18"></iconify-icon>
                        New Scan
                    </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

<div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-400 cursor-pointer" icon="solar:info-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">Overall SEO Score</h3>
<div className="relative w-44 h-44">
<svg className="w-full h-full transform -rotate-90">

<circle cx="88" cy="88" fill="transparent" r="76" stroke="#f1f5f9" strokeWidth="8"></circle>

<circle className="text-indigo-600 circle-progress" cx="88" cy="88" fill="transparent" id="score-circle" r="76" stroke="currentColor" stroke-dasharray="477" stroke-dashoffset="477" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
<span className="text-6xl font-semibold text-slate-900 tracking-tight" id="overall-score">0</span>
<span className="text-sm text-slate-500 font-medium mt-1" id="score-label">Calculating...</span>
</div>
</div>
<div className="mt-6 flex gap-6 text-center w-full justify-center">
<div>
<div className="text-xs text-slate-400 font-medium uppercase mb-1">Passed</div>
<div className="text-lg font-semibold text-emerald-600 flex items-center justify-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 24
                            </div>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase mb-1">Warnings</div>
<div className="text-lg font-semibold text-amber-500 flex items-center justify-center gap-1">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon> 5
                            </div>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase mb-1">Errors</div>
<div className="text-lg font-semibold text-rose-500 flex items-center justify-center gap-1">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> 3
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:document-text-linear" width="22"></iconify-icon>
</div>
<span className="font-medium text-slate-900">On-Page SEO</span>
</div>
<span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">95/100</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-500">Meta Titles</span>
<span className="text-emerald-600 flex items-center gap-1 font-medium"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Optimal</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-500">Content Length</span>
<span className="text-amber-500 flex items-center gap-1 font-medium"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Short</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
<iconify-icon icon="solar:bolt-linear" width="22"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Performance</span>
</div>
<span className="text-sm font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">65/100</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-500">LCP (Loading)</span>
<span className="text-rose-500 font-medium">2.8s</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-rose-500 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
<div className="flex items-center justify-between text-sm mt-2">
<span className="text-slate-500">CLS (Stability)</span>
<span className="text-emerald-600 font-medium">0.02</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon icon="solar:server-linear" width="22"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Technical</span>
</div>
<span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">100/100</span>
</div>
<div className="grid grid-cols-2 gap-3 text-sm">
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Sitemap.xml
                            </div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Robots.txt
                            </div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon> SSL/HTTPS
                            </div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:link-broken-linear"></iconify-icon> Valid Links
                            </div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-pink-50 text-pink-600 rounded-lg">
<iconify-icon icon="solar:smartphone-linear" width="22"></iconify-icon>
</div>
<span className="font-medium text-slate-900">Mobile</span>
</div>
<span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Pass</span>
</div>
<div className="flex items-center justify-center h-24 bg-slate-50 rounded-lg border border-dashed border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-100 opacity-50"></div>
<p className="text-sm text-slate-500 text-center px-4 relative z-10 font-medium">
<iconify-icon className="mr-1 text-emerald-500 relative top-0.5" icon="solar:check-read-linear"></iconify-icon>
                                Viewport Configured
                            </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Issues &amp; Fixes</h3>
<div className="flex gap-2">
<span className="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-100">3 Critical</span>
<span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full border border-amber-100">5 Warnings</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
<div className="p-5 flex gap-4 items-start cursor-pointer hover:bg-slate-50 transition-colors" onclick="toggleAccordion('issue-1')">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-base font-semibold text-slate-900">Missing Alt Attributes</h4>
<div className="flex items-center gap-3">
<span className="text-[10px] uppercase font-bold tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">High</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="icon-issue-1"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-500 mt-1">4 images on your homepage are missing the 'alt' tag description.</p>
</div>
</div>

<div className="hidden border-t border-slate-100 bg-slate-50/50" id="issue-1">
<div className="p-5">
<h5 className="text-xs font-bold text-slate-700 uppercase mb-3 flex items-center gap-1.5">
<iconify-icon icon="solar:wrench-linear"></iconify-icon> How to fix
                                </h5>
<div className="bg-white p-4 rounded-lg border border-slate-200">
<ol className="list-decimal list-inside text-sm text-slate-600 space-y-2">
<li>Locate the <code>&lt;img&gt;</code> tags in your HTML code.</li>
<li>Add <code>alt="Description"</code> attribute to each tag.</li>
<li>Ensure descriptions contain relevant keywords but remain natural.</li>
</ol>
<div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-400 font-mono">
                                        Example: &lt;img src="logo.png" alt="Company Logo"&gt;
                                    </div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
<div className="p-5 flex gap-4 items-start cursor-pointer hover:bg-slate-50 transition-colors" onclick="toggleAccordion('issue-2')">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-base font-semibold text-slate-900">LCP Time &gt; 2.5s</h4>
<div className="flex items-center gap-3">
<span className="text-[10px] uppercase font-bold tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">High</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="icon-issue-2"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-500 mt-1">Largest Contentful Paint is 2.8s. Ideally, it should be under 2.5s.</p>
</div>
</div>
<div className="hidden border-t border-slate-100 bg-slate-50/50" id="issue-2">
<div className="p-5">
<h5 className="text-xs font-bold text-slate-700 uppercase mb-3 flex items-center gap-1.5">
<iconify-icon icon="solar:wrench-linear"></iconify-icon> How to fix
                                </h5>
<div className="bg-white p-4 rounded-lg border border-slate-200">
<ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
<li>Compress large hero images (convert PNG to WebP).</li>
<li>Preload critical assets using <code>&lt;link rel="preload"&gt;</code>.</li>
<li>Serve static assets via a CDN (e.g., Cloudflare).</li>
</ul>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
<div className="p-5 flex gap-4 items-start cursor-pointer hover:bg-slate-50 transition-colors" onclick="toggleAccordion('issue-3')">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-base font-semibold text-slate-900">Low Text to HTML Ratio</h4>
<div className="flex items-center gap-3">
<span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">Med</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="icon-issue-3"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-500 mt-1">Page has a lot of code relative to the visible text content.</p>
</div>
</div>
<div className="hidden border-t border-slate-100 bg-slate-50/50" id="issue-3">
<div className="p-5">
<div className="bg-white p-4 rounded-lg border border-slate-200">
<p className="text-sm text-slate-600">Consider adding more descriptive content, blog sections, or FAQs to this page to increase topical relevance.</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<h3 className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Domain Authority</h3>
<div className="flex items-end gap-2 mt-4">
<span className="text-5xl font-semibold tracking-tight">42</span>
<span className="text-base text-slate-400 mb-1 font-medium">/ 100</span>
</div>
<div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
<div className="flex justify-between text-sm items-center">
<span className="text-slate-400">Visibility</span>
<span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Medium</span>
</div>
<div className="flex justify-between text-sm items-center">
<span className="text-slate-400">Est. Traffic</span>
<span className="text-white font-medium">~5.2k/mo</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
<div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h3 className="font-medium text-slate-900 text-sm">Top Keywords</h3>
<a className="text-xs text-indigo-600 hover:text-indigo-800 font-medium" href="#">View All</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-100">
<tr>
<th className="px-5 py-3 font-medium">Keyword</th>
<th className="px-5 py-3 font-medium text-right">Pos</th>
<th className="px-5 py-3 font-medium text-right">Vol</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-5 py-3 font-medium text-slate-700">seo tool</td>
<td className="px-5 py-3 text-right text-emerald-600 font-medium">3</td>
<td className="px-5 py-3 text-right text-slate-500">12k</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-5 py-3 font-medium text-slate-700">website audit</td>
<td className="px-5 py-3 text-right text-emerald-600 font-medium">7</td>
<td className="px-5 py-3 text-right text-slate-500">4k</td>
</tr>
<tr className="hover:bg-slate-50/80 transition-colors">
<td className="px-5 py-3 font-medium text-slate-700">check score</td>
<td className="px-5 py-3 text-right text-amber-500 font-medium">14</td>
<td className="px-5 py-3 text-right text-slate-500">900</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100 p-5">
<div className="flex items-center gap-2 mb-3">
<div className="bg-white p-1.5 rounded-md shadow-sm text-indigo-600">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-medium text-indigo-900 text-sm">Quick Wins</h3>
</div>
<p className="text-xs text-indigo-700/80 mb-4 leading-relaxed">We found 2 keywords with high search volume and low difficulty.</p>
<div className="space-y-2">
<div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-indigo-50 shadow-sm hover:border-indigo-200 transition-colors cursor-pointer">
<span className="text-sm font-medium text-slate-700">free seo checker</span>
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">EASY</span>
</div>
<div className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-indigo-50 shadow-sm hover:border-indigo-200 transition-colors cursor-pointer">
<span className="text-sm font-medium text-slate-700">on-page optimization</span>
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">EASY</span>
</div>
</div>
<button className="w-full mt-4 py-2 text-xs font-semibold text-center text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 rounded-lg transition-colors">
                            Unlock 50+ Opportunities
                        </button>
</div>
</div>
</div>
</div>
</main>

<div className="bg-white border-slate-200 border-t pt-24 pb-24" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">Pricing Plans</h2>
<p className="mt-4 text-lg text-slate-500">Choose the perfect plan to boost your rankings.</p>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="mt-4 text-sm text-slate-500">Perfect for checking a single website.</p>
<p className="mt-8">
<span className="text-4xl font-bold tracking-tight text-slate-900">$0</span>
<span className="text-base font-medium text-slate-500">/mo</span>
</p>
<ul className="mt-8 space-y-4 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Basic SEO Score
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            10 Page Crawls
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors" href="#">Current Plan</a>
</div>

<div className="relative rounded-2xl border border-indigo-200 bg-slate-50 p-8 shadow-lg flex flex-col transform md:-translate-y-4 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm ring-4 ring-white">Most Popular</div>
<h3 className="text-lg font-semibold text-slate-900">Pro</h3>
<p className="mt-4 text-sm text-slate-500">For freelancers and growing sites.</p>
<p className="mt-8">
<span className="text-4xl font-bold tracking-tight text-slate-900">$29</span>
<span className="text-base font-medium text-slate-500">/mo</span>
</p>
<ul className="mt-8 space-y-4 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Advanced SEO Analysis
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Competitor Comparison
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            PDF Reports
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition-colors" href="#">Upgrade to Pro</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<h3 className="text-lg font-semibold text-slate-900">Business</h3>
<p className="mt-4 text-sm text-slate-500">For agencies and large scale audits.</p>
<p className="mt-8">
<span className="text-4xl font-bold tracking-tight text-slate-900">$79</span>
<span className="text-base font-medium text-slate-500">/mo</span>
</p>
<ul className="mt-8 space-y-4 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Pages Crawl
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            White-label Reports
                        </li>
</ul>
<a className="mt-8 block w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</div>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center justify-center w-6 h-6 bg-slate-900 rounded text-white">
<iconify-icon className="" icon="solar:graph-up-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-slate-900">RANK</span>
</div>
<p className="text-sm text-slate-500 pr-4">
                        Professional SEO tools made simple for everyone.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Analyzer</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Keyword Tool</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Rank SEO Analyzer. All rights reserved.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon></a>
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
