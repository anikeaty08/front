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



        // Progress Bar
        window.onscroll = function() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            document.getElementById("scrollProgress").style.width = scrolled + "%";
            
            // Navbar blur effect toggle on scroll
            const nav = document.querySelector('nav');
            if(window.scrollY > 50) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        };

        // Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
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
      

<div className="bg-slate-950 text-white py-2 text-xs font-medium tracking-wide">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-2 opacity-80">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
<span>Secure • Scalable • Fast Response</span>
</div>
<div className="flex gap-4">
<a className="hover:text-slate-300 transition-colors" href="#">Book a demo</a>
<a className="hover:text-slate-300 transition-colors flex items-center gap-1" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="14"></span> WhatsApp
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="18"></span>
</div>
                KWS
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#agents">AI Agents</a>
<a className="hover:text-slate-900 transition-colors" href="#clinic">Clinic Booking</a>
<a className="hover:text-slate-900 transition-colors" href="#pinata">Pinata Themes</a>
<a className="hover:text-slate-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-slate-900 transition-colors" href="#solutions">Solutions</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity">Login</button>
<button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    Get Demo
                </button>
</div>
</div>

<div className="h-[1px] bg-slate-200 w-full relative">
<div className="absolute left-0 top-0 h-full bg-slate-900 w-0 transition-all duration-100" id="scrollProgress"></div>
</div>
</nav>

<section className="relative pt-20 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-30 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6 flex flex-col gap-8 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 w-fit">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Enterprise Ready AI</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    AI agents that do <br/><span className="text-gradient">real work.</span>
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed max-w-lg">
                    We build Voice, Chat, and Tool-calling agents that integrate directly into your business. From clinics to enterprise teams.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all">
                        Book a Demo
                    </button>
<button className="group bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full text-sm font-medium hover:border-slate-400 transition-all flex items-center gap-2">
                        Explore Agents
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 px-4">
<span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
<span className="ml-0.5" data-icon="lucide:play" data-width="12"></span>
</span>
                        Watch 45s
                    </button>
</div>
<div className="pt-8 border-t border-slate-200/60 mt-4">
<p className="text-xs text-slate-400 font-medium mb-4">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-6 w-20 bg-slate-800 mask-image"></div> 
<div className="flex items-center gap-1 font-bold text-slate-900 tracking-tighter text-lg">ACME<span className="text-xs font-normal text-slate-500">CORP</span></div>
<div className="flex items-center gap-1 font-bold text-slate-900 tracking-tighter text-lg">Z<span className="text-xs font-normal text-slate-500">CLINIC</span></div>
<div className="flex items-center gap-1 font-bold text-slate-900 tracking-tighter text-lg">NEXUS</div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative h-[500px] lg:h-[600px] w-full reveal-on-scroll delay-200">

<div className="absolute inset-0 bg-white/40 border border-white/50 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden flex flex-col animate-float">

<div className="h-12 border-b border-slate-100 flex items-center px-4 gap-2 bg-white/60">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="mx-auto w-32 h-1.5 bg-slate-100 rounded-full"></div>
</div>

<div className="flex-1 p-6 bg-gradient-to-br from-white to-slate-50/50 relative">


<div className="absolute top-8 left-8 right-20 bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-start gap-4 transform transition hover:scale-105 duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900">Lead Generation Agent</h3>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] font-mono bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100">Searching LinkedIn...</span>
<span className="text-[10px] font-mono bg-green-50 text-green-600 px-2 py-0.5 rounded border border-green-100">Email Found</span>
</div>
</div>
</div>

<div className="absolute top-40 left-16 right-12 bg-white rounded-xl p-4 shadow-lg border border-slate-100 flex items-start gap-4 z-10 animate-float-delayed">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="iconify" data-icon="lucide:calendar-check" data-width="20"></span>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900">Clinic Appointment Agent</h3>
<div className="mt-2 space-y-2">
<div className="flex gap-2">
<div className="bg-indigo-50 p-2 rounded-lg rounded-tl-none text-[10px] text-slate-600 max-w-[80%]">
                                            Hi, Dr. Smith has an opening at 2 PM tomorrow. Shall I book it?
                                        </div>
</div>
<div className="flex gap-2 justify-end">
<div className="bg-slate-900 text-white p-2 rounded-lg rounded-tr-none text-[10px] max-w-[80%]">
                                            Yes, please confirm.
                                        </div>
</div>
</div>
</div>
</div>

<div className="absolute top-80 left-8 right-32 bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Workflow Automation</h3>
<p className="text-[10px] text-slate-400 mt-1">Stripe → Slack → CRM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2 reveal-on-scroll">
<span className="iconify text-slate-400 mb-1" data-icon="lucide:trending-down" data-width="24"></span>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">-40%</p>
<p className="text-sm text-slate-500 font-medium">No-show rates</p>
</div>
<div className="flex flex-col gap-2 reveal-on-scroll delay-100">
<span className="iconify text-slate-400 mb-1" data-icon="lucide:clock" data-width="24"></span>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">24/7</p>
<p className="text-sm text-slate-500 font-medium">Instant Response</p>
</div>
<div className="flex flex-col gap-2 reveal-on-scroll delay-200">
<span className="iconify text-slate-400 mb-1" data-icon="lucide:briefcase" data-width="24"></span>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">-85%</p>
<p className="text-sm text-slate-500 font-medium">Admin Workload</p>
</div>
<div className="flex flex-col gap-2 reveal-on-scroll delay-300">
<span className="iconify text-slate-400 mb-1" data-icon="lucide:bar-chart-3" data-width="24"></span>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">2x</p>
<p className="text-sm text-slate-500 font-medium">Lead Conversion</p>
</div>
</div>
</section>

<section className="py-32 bg-slate-50/50" id="agents">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Every type of AI agent — <br/>built for your workflow.</h2>
<p className="text-slate-500 text-lg">We don't just wrap ChatGPT. We build agents with tools, memory, and actions.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Lead Gen Agent</h3>
<p className="text-sm text-slate-500 mb-6">Autonomously finds prospects, enriches data, and drafts personalized outreach.</p>
<div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-6">
<p className="text-[10px] font-mono text-slate-400 uppercase mb-1">Input → Output</p>
<p className="text-xs font-mono text-slate-700">"Find CTOs in HealthTech" → JSON List + Emails</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        See example <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:package-search" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Product Sourcing Agent</h3>
<p className="text-sm text-slate-500 mb-6">Scans suppliers globally, compares prices, and monitors inventory levels.</p>
<div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-6">
<p className="text-[10px] font-mono text-slate-400 uppercase mb-1">Input → Output</p>
<p className="text-xs font-mono text-slate-700">"Specs for organic cotton" → 5 Supplier Quotes</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        See example <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-200">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Appointment Agent</h3>
<p className="text-sm text-slate-500 mb-6">Handles scheduling, rescheduling, and reminders via Chat or Voice.</p>
<div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-6">
<p className="text-[10px] font-mono text-slate-400 uppercase mb-1">Input → Output</p>
<p className="text-xs font-mono text-slate-700">Incoming Call → Calendar Slot Booked</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        See example <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:workflow" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Workflow Automation</h3>
<p className="text-sm text-slate-500 mb-6">Connects disparate apps (n8n, Zapier) to automate repetitive back-office tasks.</p>
<div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-6">
<p className="text-[10px] font-mono text-slate-400 uppercase mb-1">Input → Output</p>
<p className="text-xs font-mono text-slate-700">New Stripe Charge → Invoice + Slack Alert</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        See example <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">CRM Automation</h3>
<p className="text-sm text-slate-500 mb-6">Keeps HubSpot/Salesforce clean, updates deal stages, and logs communications.</p>
<div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-6">
<p className="text-[10px] font-mono text-slate-400 uppercase mb-1">Input → Output</p>
<p className="text-xs font-mono text-slate-700">Email Received → CRM Logged &amp; Tagged</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        See example <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-200 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Custom Agent</h3>
<p className="text-sm text-slate-300 mb-6">Need something specific? We build custom neural architectures for unique needs.</p>
<div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 mb-6">
<p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Input → Output</p>
<p className="text-xs font-mono text-slate-200">Your Problem → Your Solution</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                            Talk to us <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<div className="mb-8">
<span className="text-blue-600 font-medium text-sm">LIVE DEMO</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2">Clinic Booking Agent</h2>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-600 mt-1">1</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Natural Conversation</h4>
<p className="text-sm text-slate-500 mt-1">Handles interruptions, accents, and complex scheduling queries naturally.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-600 mt-1">2</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Real-time Calendar Sync</h4>
<p className="text-sm text-slate-500 mt-1">Connects directly to your practice management software.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-600 mt-1">3</div>
<div>
<h4 className="text-base font-semibold text-slate-900">WhatsApp Confirmation</h4>
<p className="text-sm text-slate-500 mt-1">Sends immediate confirmation and reminders to reduce no-shows.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-blue-600 font-medium hover:underline" href="#">Explore all use cases →</a>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative min-h-[500px] flex flex-col shadow-inner reveal-on-scroll delay-200">
<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-200 px-3 py-1 rounded-full text-[10px] uppercase font-medium text-slate-500">Live Transcript</div>
<div className="mt-8 space-y-4 font-mono text-sm">
<div className="flex gap-3 animate-float">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">AI</div>
<div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-100 shadow-sm max-w-[80%] text-slate-600">
                                KWS Dental, this is Sarah. How can I help you today?
                            </div>
</div>
<div className="flex gap-3 flex-row-reverse animate-float-delayed">
<div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]">U</div>
<div className="bg-slate-100 p-3 rounded-lg rounded-tr-none max-w-[80%] text-slate-800">
                                Hi, I need to reschedule my cleaning next Tuesday.
                            </div>
</div>
<div className="flex gap-3 animate-float delay-100">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">AI</div>
<div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-100 shadow-sm max-w-[80%] text-slate-600">
                                No problem. I see your appointment on Tuesday at 10 AM. When would you like to come in instead?
                            </div>
</div>

<div className="my-4 flex justify-center">
<div className="bg-slate-800 text-green-400 text-xs px-3 py-1.5 rounded font-mono border border-slate-700 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Tool Call: check_calendar(next_week)
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-slate-900 text-white overflow-hidden" id="clinic">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2 reveal-on-scroll">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">READY TO DEPLOY</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">The Ultimate Clinic Booking Agent.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Stop missing calls. Our pre-trained AI agent answers 24/7, integrates with your CRM, and fills your calendar automatically. HIPAA compliant and secure.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span> Reschedule &amp; Cancel handling
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span> Multi-doctor schedule management
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span> Automated WhatsApp/SMS reminders
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span> Detailed call analytics dashboard
                        </li>
</ul>
<div className="flex flex-wrap gap-4">
<button className="bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">See Demo</button>
<button className="border border-slate-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:border-slate-500 transition-colors">Pricing</button>
</div>
</div>
<div className="md:w-1/2 w-full reveal-on-scroll delay-200">
<div className="rounded-xl bg-slate-800 border border-slate-700 p-2 shadow-2xl">
<div className="bg-slate-900 rounded-lg overflow-hidden aspect-video relative flex items-center justify-center">

<div className="text-center">
<span className="iconify text-slate-700 mx-auto mb-4" data-icon="lucide:layout-dashboard" data-width="48"></span>
<p className="text-slate-600 font-mono text-xs">Dashboard Interface Preview</p>
</div>

<div className="absolute bottom-6 left-6 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-lg">
<p className="text-slate-400 text-xs">Appointments Today</p>
<p className="text-2xl font-semibold text-white mt-1">24 <span className="text-green-400 text-xs font-normal">↑ 12%</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">How KWS builds your agent</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-slate-200 -z-10"></div>
<div className="text-center reveal-on-scroll">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="iconify text-slate-900" data-icon="lucide:search" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">1. Discover</h3>
<p className="text-sm text-slate-500 px-4">We analyze your workflows to identify high-ROI automation opportunities.</p>
</div>
<div className="text-center reveal-on-scroll delay-100">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="iconify text-slate-900" data-icon="lucide:code-2" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">2. Build &amp; Integrate</h3>
<p className="text-sm text-slate-500 px-4">Our engineers develop custom agents and connect them to your existing stack.</p>
</div>
<div className="text-center reveal-on-scroll delay-200">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="iconify text-slate-900" data-icon="lucide:line-chart" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">3. Monitor &amp; Improve</h3>
<p className="text-sm text-slate-500 px-4">Continuous QA, analytics, and refinement to ensure 99% accuracy.</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-400 font-medium mb-8">SEAMLESS INTEGRATION WITH YOUR TOOLS</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="iconify text-slate-800" data-icon="logos:whatsapp-icon" data-width="28"></span>
<span className="iconify text-slate-800" data-icon="logos:google-calendar" data-width="28"></span>
<span className="iconify text-slate-800" data-icon="logos:slack-icon" data-width="28"></span>
<span className="iconify text-slate-800" data-icon="logos:hubspot" data-width="28"></span>
<span className="iconify text-slate-800" data-icon="simple-icons:twilio" data-width="28"></span>
<span className="iconify text-slate-800" data-icon="simple-icons:n8n" data-width="32"></span>
<span className="iconify text-slate-800" data-icon="logos:stripe" data-width="38"></span>
</div>
</div>
</section>

<section className="py-32 bg-white" id="pinata">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 border border-purple-100 shadow-sm relative overflow-hidden group reveal-on-scroll">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:layout-template" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Pinata Themes</h3>
<p className="text-slate-500 mb-8 max-w-sm">Premium, conversion-focused website templates designed for agencies and startups.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 border-b border-slate-200 pb-0.5 hover:border-slate-900 transition-colors" href="#">
                            Browse Gallery <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="absolute right-[-40px] bottom-[-40px] opacity-10 rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-purple-900" data-icon="lucide:layers" data-width="200"></span>
</div>
</div>

<div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 shadow-sm relative overflow-hidden group reveal-on-scroll delay-100">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:code" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Custom Web Development</h3>
<p className="text-slate-500 mb-8 max-w-sm">High-performance React/Next.js development for scalable web applications.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 border-b border-slate-200 pb-0.5 hover:border-slate-900 transition-colors" href="#">
                            View Services <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="absolute right-[-40px] bottom-[-40px] opacity-5 rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-slate-900" data-icon="lucide:terminal-square" data-width="200"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 overflow-hidden" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end reveal-on-scroll">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Recent Work</h2>
<p className="text-slate-500 mt-2">Projects we've shipped recently.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors"><span className="iconify" data-icon="lucide:arrow-left"></span></button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-colors"><span className="iconify" data-icon="lucide:arrow-right"></span></button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 pb-12 no-scrollbar snap-x snap-mandatory">
<div className="w-0 flex-shrink-0"></div> 

<div className="min-w-[300px] md:min-w-[400px] snap-start bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal-on-scroll">
<div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300">
<span className="iconify" data-icon="lucide:image" data-width="32"></span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-3">
<span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">Web3</span>
<span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">AI</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">NFT Closet X</h4>
<p className="text-sm text-slate-500 mt-1">AI-powered asset management for digital collectibles.</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-100">
<div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300">
<span className="iconify" data-icon="lucide:search" data-width="32"></span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-3">
<span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">Research</span>
<span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">NLP</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">Research Buddy</h4>
<p className="text-sm text-slate-500 mt-1">Automated academic paper summarizer agent.</p>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-200">
<div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300">
<span className="iconify" data-icon="lucide:database" data-width="32"></span>
</div>
<div className="p-6">
<div className="flex gap-2 mb-3">
<span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">Data</span>
<span className="text-[10px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">Automation</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">DataM</h4>
<p className="text-sm text-slate-500 mt-1">Enterprise data migration orchestration tool.</p>
</div>
</div>
<div className="w-6 flex-shrink-0"></div> 
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Simple, scalable pricing</h2>
<p className="text-slate-500 mt-4">Start small and scale as your agents handle more workload.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors reveal-on-scroll">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<p className="text-sm text-slate-500 mt-1">For pilots and small teams.</p>
<div className="mt-6 mb-6">
<span className="text-3xl font-bold text-slate-900">Talk to us</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm text-slate-600"><span className="iconify text-green-500" data-icon="lucide:check"></span> 1 Custom Agent</li>
<li className="flex gap-2 text-sm text-slate-600"><span className="iconify text-green-500" data-icon="lucide:check"></span> Basic Integrations</li>
<li className="flex gap-2 text-sm text-slate-600"><span className="iconify text-green-500" data-icon="lucide:check"></span> Email Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">Get Estimate</button>
</div>

<div className="p-8 rounded-2xl border border-slate-900 bg-slate-900 text-white shadow-xl transform lg:-translate-y-4 reveal-on-scroll delay-100">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-white">Growth</h3>
<p className="text-sm text-slate-400 mt-1">For scaling clinics &amp; businesses.</p>
</div>
<span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">POPULAR</span>
</div>
<div className="mt-6 mb-6">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm text-slate-300"><span className="iconify text-green-400" data-icon="lucide:check"></span> Multiple Agents</li>
<li className="flex gap-2 text-sm text-slate-300"><span className="iconify text-green-400" data-icon="lucide:check"></span> Advanced CRM Sync</li>
<li className="flex gap-2 text-sm text-slate-300"><span className="iconify text-green-400" data-icon="lucide:check"></span> Priority Support</li>
<li className="flex gap-2 text-sm text-slate-300"><span className="iconify text-green-400" data-icon="lucide:check"></span> Voice Capabilities</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors">Book a Demo</button>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors reveal-on-scroll delay-200">
<h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
<p className="text-sm text-slate-500 mt-1">Full workflow automation.</p>
<div className="mt-6 mb-6">
<span className="text-3xl font-bold text-slate-900">Contact</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm text-slate-600"><span className="iconify text-green-500" data-icon="lucide:check"></span> Unlimited Agents</li>
<li className="flex gap-2 text-sm text-slate-600"><span className="iconify text-green-500" data-icon="lucide:check"></span> Custom LLM Fine-tuning</li>
<li className="flex gap-2 text-sm text-slate-600"><span className="iconify text-green-500" data-icon="lucide:check"></span> SLA &amp; Dedicated Account Manager</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-slate-900 rounded text-white flex items-center justify-center">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
</div>
                        KWS Technology
                    </a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Building the workforce of tomorrow with intelligent AI agents, automation, and premium digital solutions.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><span className="iconify" data-icon="lucide:github"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Solutions</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Clinic Agent</a></li>
<li><a className="hover:text-slate-900" href="#">Lead Generation</a></li>
<li><a className="hover:text-slate-900" href="#">Workflow Auto</a></li>
<li><a className="hover:text-slate-900" href="#">Pinata Themes</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Portfolio</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Blog</a></li>
<li><a className="hover:text-slate-900" href="#">Case Studies</a></li>
<li><a className="hover:text-slate-900" href="#">Documentation</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 KWS Technology. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
