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



        function switchPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target page
            const target = document.getElementById('page-' + pageId);
            if(target) target.classList.add('active');
            
            // Update Nav Active State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeNav = document.getElementById('nav-' + pageId);
            if(activeNav) activeNav.classList.add('active');

            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Initialize Home active state
        document.getElementById('nav-home').classList.add('active');
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="flex items-center gap-2 group" onclick="switchPage('home')">
<div className="bg-gradient-to-br from-teal-400 to-cyan-600 p-1.5 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-shadow">
<iconify-icon className="text-white text-lg" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white">ChatGPT <span className="text-teal-400">Health</span></span>
</button>

<div className="hidden lg:flex items-center p-1 rounded-full border border-white/5 bg-white/[0.02]">
<button className="nav-link px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all" id="nav-home" onclick="switchPage('home')">Hub</button>
<button className="nav-link px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all" id="nav-governance" onclick="switchPage('governance')">Governance</button>
<button className="nav-link px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all" id="nav-literacy" onclick="switchPage('literacy')">Literacy</button>
<button className="nav-link px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all" id="nav-advisory" onclick="switchPage('advisory')">Advisory</button>
<button className="nav-link px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all" id="nav-resources" onclick="switchPage('resources')">Resources</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" onclick="switchPage('advisory')">
                    Book Now
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="lg:hidden text-white flex"><iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon></button>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 relative">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

<section className="page-section active" id="page-home">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<div className="flex items-center gap-2 text-sm text-teal-400 mb-4 font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-teal-400"></span>
                            Internal Portal
                        </div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Platform <span className="text-slate-500">Insights</span></h1>
</div>
<p className="text-slate-400 max-w-md text-lg">
                        Select a module below to access detailed frameworks, curriculums, and advisory services.
                    </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<button className="glass glass-hover p-6 rounded-2xl text-left group transition-all h-full flex flex-col" onclick="switchPage('governance')">
<div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
<iconify-icon className="text-teal-400 text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Governance</h3>
<p className="text-sm text-slate-400 flex-grow">Risk frameworks, HIPAA compliance checklists, and human-in-the-loop protocols.</p>
<div className="mt-4 flex items-center text-sm font-medium text-teal-400 gap-1 group-hover:gap-2 transition-all">
                            Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>

<button className="glass glass-hover p-6 rounded-2xl text-left group transition-all h-full flex flex-col" onclick="switchPage('literacy')">
<div className="bg-indigo-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-indigo-400 text-2xl" icon="solar:square-academic-cap-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">AI Literacy</h3>
<p className="text-sm text-slate-400 flex-grow">Educational curriculums for clinicians, leadership, and operational staff.</p>
<div className="mt-4 flex items-center text-sm font-medium text-indigo-400 gap-1 group-hover:gap-2 transition-all">
                            View Courses <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>

<button className="glass glass-hover p-6 rounded-2xl text-left group transition-all h-full flex flex-col" onclick="switchPage('advisory')">
<div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Advisory</h3>
<p className="text-sm text-slate-400 flex-grow">Speaking engagements, strategic consulting, and workshop facilitation.</p>
<div className="mt-4 flex items-center text-sm font-medium text-purple-400 gap-1 group-hover:gap-2 transition-all">
                            Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>

<button className="glass glass-hover p-6 rounded-2xl text-left group transition-all h-full flex flex-col" onclick="switchPage('resources')">
<div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Resources</h3>
<p className="text-sm text-slate-400 flex-grow">Downloadable PDF policies, slide decks, and whitepapers.</p>
<div className="mt-4 flex items-center text-sm font-medium text-blue-400 gap-1 group-hover:gap-2 transition-all">
                            Downloads <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>
</div>

<div className="mt-12">
<h3 className="text-lg font-medium text-white mb-4">Latest Insights</h3>
<div className="glass rounded-xl p-1 overflow-hidden">
<div className="flex flex-col md:flex-row">
<div className="p-6 md:p-8 flex-1 border-b md:border-b-0 md:border-r border-white/5">
<span className="text-xs font-medium text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded mb-3 inline-block">Alert</span>
<h4 className="text-white font-medium mb-2">Updated Liability Guidelines</h4>
<p className="text-sm text-slate-400">New standards released regarding AI-assisted diagnostic errors and insurance coverage.</p>
</div>
<div className="p-6 md:p-8 flex-1 border-b md:border-b-0 md:border-r border-white/5">
<span className="text-xs font-medium text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded mb-3 inline-block">New Course</span>
<h4 className="text-white font-medium mb-2">Prompting for Radiologists</h4>
<p className="text-sm text-slate-400">Specialized module for generating imaging summaries effectively.</p>
</div>
<div className="p-6 md:p-8 flex-1">
<span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded mb-3 inline-block">Download</span>
<h4 className="text-white font-medium mb-2">Q4 Risk Report</h4>
<p className="text-sm text-slate-400">Quarterly analysis of LLM hallucination rates in clinical settings.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="page-governance">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12">
<button className="text-sm text-slate-500 hover:text-white mb-4 flex items-center gap-1 transition-colors" onclick="switchPage('home')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Hub</button>
<h1 className="text-3xl md:text-4xl font-medium text-white">Governance &amp; Risk Framework</h1>
<p className="text-slate-400 mt-2 max-w-2xl">Proprietary approach to managing LLM risks in clinical environments, aligned with NIST and EU AI Act standards.</p>
</div>
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-1 space-y-6">
<div className="glass rounded-xl p-6">
<h4 className="text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-teal-400" icon="solar:shield-warning-linear"></iconify-icon>
                                Risk Matrix
                            </h4>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm p-2 rounded hover:bg-white/5 transition-colors">
<span className="text-slate-400">Data Privacy (HIPAA)</span>
<span className="bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded text-xs font-medium">Critical</span>
</li>
<li className="flex items-center justify-between text-sm p-2 rounded hover:bg-white/5 transition-colors">
<span className="text-slate-400">Clinical Hallucination</span>
<span className="bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded text-xs font-medium">Critical</span>
</li>
<li className="flex items-center justify-between text-sm p-2 rounded hover:bg-white/5 transition-colors">
<span className="text-slate-400">Algorithmic Bias</span>
<span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded text-xs font-medium">High</span>
</li>
<li className="flex items-center justify-between text-sm p-2 rounded hover:bg-white/5 transition-colors">
<span className="text-slate-400">Operational Dependency</span>
<span className="bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded text-xs font-medium">Medium</span>
</li>
</ul>
</div>
<button className="w-full bg-white text-slate-950 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
                            Download Policy PDF
                        </button>
</div>

<div className="lg:col-span-2 space-y-12">

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-medium border border-teal-500/30 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">01</div>
<div className="flex-1 w-px bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-white mb-2">Inventory &amp; Assessment</h3>
<p className="text-slate-400 mb-4 leading-relaxed">
                                    Before deployment, institutions must map all "Shadow AI" usage. We provide tools to inventory authorized and unauthorized LLM use cases across departments.
                                </p>
<div className="glass p-4 rounded-lg border-l-2 border-teal-500">
<p className="text-sm text-slate-300 italic">"You cannot govern what you cannot see. 60% of doctors admit to using ChatGPT without administrative approval."</p>
</div>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-medium border border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white transition-colors">02</div>
<div className="flex-1 w-px bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-white mb-2">Human-in-the-Loop Protocol</h3>
<p className="text-slate-400 mb-4 leading-relaxed">
                                    Defining the "Review Threshold". Automated outputs for patient triage require 100% human review, whereas administrative scheduling may require only spot-checking.
                                </p>
<div className="grid grid-cols-2 gap-4">
<div className="glass p-4 rounded-lg text-center">
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Clinical Output</div>
<div className="text-white font-medium">100% Review</div>
</div>
<div className="glass p-4 rounded-lg text-center">
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Admin Output</div>
<div className="text-white font-medium">15% Audit</div>
</div>
</div>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-medium border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">03</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Continuous Monitoring</h3>
<p className="text-slate-400 leading-relaxed">
                                    Model drift is real. Our framework requires quarterly re-validation of prompts and outputs against updated medical guidelines.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="page-literacy">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12">
<button className="text-sm text-slate-500 hover:text-white mb-4 flex items-center gap-1 transition-colors" onclick="switchPage('home')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Hub</button>
<div className="flex justify-between items-end">
<div>
<h1 className="text-3xl md:text-4xl font-medium text-white">AI Literacy Curriculum</h1>
<p className="text-slate-400 mt-2 max-w-2xl">Structured learning paths designed for healthcare roles, from frontline clinicians to C-Suite executives.</p>
</div>
<button className="hidden md:block bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Access LMS</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass glass-hover p-8 rounded-2xl group transition-all flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="bg-slate-900 p-3 rounded-xl border border-white/10 group-hover:border-teal-500/30 transition-colors">
<iconify-icon className="text-teal-400 text-3xl" icon="solar:stethoscope-linear"></iconify-icon>
</div>
<span className="bg-teal-500/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">Level 1: Clinician</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Prompt Engineering for Medicine</h3>
<p className="text-sm text-slate-400 mb-6 flex-grow">Mastering the art of querying LLMs for differential diagnosis support, discharge summary generation, and research summarization without compromising PHI.</p>
<div className="space-y-3 mb-8 bg-black/20 p-4 rounded-xl">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Anatomy of a Clinical Prompt</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Identifying Hallucinations</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Data De-identification Techniques</span>
</div>
</div>
<button className="w-full border border-white/10 hover:bg-white hover:text-slate-950 text-white py-2 rounded-lg text-sm font-medium transition-colors">View Syllabus</button>
</div>

<div className="glass glass-hover p-8 rounded-2xl group transition-all flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="bg-slate-900 p-3 rounded-xl border border-white/10 group-hover:border-indigo-500/30 transition-colors">
<iconify-icon className="text-indigo-400 text-3xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<span className="bg-indigo-500/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">Level 2: Leadership</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Strategic AI Integration</h3>
<p className="text-sm text-slate-400 mb-6 flex-grow">For CMIOs, CIOs, and Hospital Administrators. Focuses on ROI, vendor selection, legal liability, and change management.</p>
<div className="space-y-3 mb-8 bg-black/20 p-4 rounded-xl">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Build vs. Buy Decisions</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Liability &amp; Insurance</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Workforce Reskilling</span>
</div>
</div>
<button className="w-full border border-white/10 hover:bg-white hover:text-slate-950 text-white py-2 rounded-lg text-sm font-medium transition-colors">View Syllabus</button>
</div>
</div>

<div className="mt-8 glass p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-teal-900/20 to-transparent border-teal-500/20">
<div className="flex gap-6 items-center">
<div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/20">
<iconify-icon className="text-slate-950 text-3xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white">Live Virtual Workshop Series</h3>
<p className="text-slate-400 mt-1">Next Session: "Ethics in AI Healthcare" — Oct 24, 2024</p>
</div>
</div>
<button className="bg-white text-slate-950 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors whitespace-nowrap w-full md:w-auto">Register Seat</button>
</div>
</div>
</section>

<section className="page-section" id="page-advisory">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12">
<button className="text-sm text-slate-500 hover:text-white mb-4 flex items-center gap-1 transition-colors" onclick="switchPage('home')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Hub</button>
<h1 className="text-3xl md:text-4xl font-medium text-white">Strategic Advisory</h1>
<p className="text-slate-400 mt-2 max-w-2xl">Bridging the gap between technology developers and clinical end-users through expert consultation.</p>
</div>
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-7">
<h2 className="text-2xl font-medium text-white mb-6">About Dr. Harvey Castro</h2>
<div className="prose prose-invert prose-lg text-slate-400">
<p className="mb-4">
                                A physician, healthcare executive, and trusted authority on the application of Large Language Models in medicine. 
                            </p>
<p className="mb-6">
                                Unlike futurists who speak in abstractions, Dr. Castro provides actionable, clinically valid strategies for implementation today. He has advised major health systems, pharmaceutical companies, and policy boards.
                            </p>
</div>
<div className="mt-8">
<h3 className="text-white font-medium mb-4">Common Engagements</h3>
<div className="grid sm:grid-cols-2 gap-3">
<div className="glass px-4 py-4 rounded-lg text-sm text-slate-300 flex items-center gap-3">
<div className="p-2 rounded bg-indigo-500/10 text-indigo-400"><iconify-icon icon="solar:microphone-2-linear"></iconify-icon></div>
                                    The Future of Diagnosis
                                </div>
<div className="glass px-4 py-4 rounded-lg text-sm text-slate-300 flex items-center gap-3">
<div className="p-2 rounded bg-indigo-500/10 text-indigo-400"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></div>
                                    AI Ethics &amp; Governance
                                </div>
<div className="glass px-4 py-4 rounded-lg text-sm text-slate-300 flex items-center gap-3">
<div className="p-2 rounded bg-indigo-500/10 text-indigo-400"><iconify-icon icon="solar:graph-up-linear"></iconify-icon></div>
                                    Operational Efficiency
                                </div>
<div className="glass px-4 py-4 rounded-lg text-sm text-slate-300 flex items-center gap-3">
<div className="p-2 rounded bg-indigo-500/10 text-indigo-400"><iconify-icon icon="solar:heart-pulse-linear"></iconify-icon></div>
                                    Patient-Centric AI
                                </div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="glass p-8 rounded-2xl border-t-4 border-t-indigo-500">
<h3 className="text-xl font-medium text-white mb-6">Inquire for Engagement</h3>
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="Dr. Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Organization</label>
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="General Hospital" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Interest</label>
<div className="relative">
<select className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer">
<option>Keynote Speaking</option>
<option>Executive Consulting</option>
<option>Workshop Facilitation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
<textarea className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="Tell us about your event..." rows="3"></textarea>
</div>
<button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-3 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20" type="button">Send Inquiry</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="page-resources">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12">
<button className="text-sm text-slate-500 hover:text-white mb-4 flex items-center gap-1 transition-colors" onclick="switchPage('home')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Hub</button>
<div className="flex justify-between items-end">
<div>
<h1 className="text-3xl md:text-4xl font-medium text-white">Resource Library</h1>
<p className="text-slate-400 mt-2">Frameworks, cheat sheets, and whitepapers available for download.</p>
</div>

<div className="hidden md:flex gap-2">
<div className="relative">
<input className="bg-slate-900 border border-white/10 rounded-full px-4 py-2 pl-10 text-sm text-white focus:outline-none focus:border-teal-500 w-64" placeholder="Search resources..." type="text"/>
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-4">

<div className="glass p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-white/[0.04] transition-colors border-l-4 border-l-transparent hover:border-l-red-400">
<div className="flex items-center gap-4">
<div className="bg-red-500/10 p-3 rounded-lg text-red-400">
<iconify-icon className="text-2xl" icon="solar:file-text-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium group-hover:text-teal-400 transition-colors">AI Governance Checklist v2.0</h4>
<p className="text-sm text-slate-500">PDF • 2.4 MB • Updated Oct 2023</p>
</div>
</div>
<button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all">
                            Download <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>

<div className="glass p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-white/[0.04] transition-colors border-l-4 border-l-transparent hover:border-l-blue-400">
<div className="flex items-center gap-4">
<div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
<iconify-icon className="text-2xl" icon="solar:file-text-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium group-hover:text-teal-400 transition-colors">NIST AI RMF Mapping Guide</h4>
<p className="text-sm text-slate-500">PDF • 1.8 MB • Healthcare Edition</p>
</div>
</div>
<button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all">
                            Download <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>

<div className="glass p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-white/[0.04] transition-colors border-l-4 border-l-transparent hover:border-l-amber-400">
<div className="flex items-center gap-4">
<div className="bg-amber-500/10 p-3 rounded-lg text-amber-400">
<iconify-icon className="text-2xl" icon="solar:presentation-graph-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium group-hover:text-teal-400 transition-colors">Executive Slide Deck: AI Risks</h4>
<p className="text-sm text-slate-500">PPTX • 5.1 MB • Editable Templates</p>
</div>
</div>
<button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all">
                            Download <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>

<div className="glass p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-white/[0.04] transition-colors border-l-4 border-l-transparent hover:border-l-purple-400">
<div className="flex items-center gap-4">
<div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
<iconify-icon className="text-2xl" icon="solar:book-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium group-hover:text-teal-400 transition-colors">Sample Policy: Generative AI Use</h4>
<p className="text-sm text-slate-500">DOCX • 0.5 MB • Legal Draft</p>
</div>
</div>
<button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all">
                            Download <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 pt-8 pb-8 border-t border-white/5 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500" icon="solar:copyright-linear"></iconify-icon>
<span className="text-sm text-slate-500">2024 ChatGPT Health. Internal Use Only.</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
