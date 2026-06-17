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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
colors: {
page: '#ffffff',
primary: '#0f172a', // Slate 900
secondary: '#475569', // Slate 600
accent: '#2563eb', // Blue 600
surface: '#f8fafc', // Slate 50
border: '#e2e8f0', // Slate 200
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Simple Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.observe-slide').forEach((el) => {
            observer.observe(el);
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
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-accent/5 blur-[120px] rounded-full"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<header className="fixed top-0 w-full z-40 border-b border-border/60 bg-page/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-accent">
<span className="font-bold text-lg tracking-tighter">T</span>
</div>
<span className="text-base font-bold tracking-tight text-primary">
                    TASKIZ
                </span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200" href="#problem">The Problem</a>
<a className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200" href="#solution">How It Works</a>
<a className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200" href="#features">Features</a>
<a className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white text-xs font-semibold text-primary hover:bg-surface transition-all" href="#demo">
                    Book a Demo
                </a>
<a className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary hover:bg-primary/90 text-xs font-semibold text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#start">
<span>Get Started</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</header>
<main className="z-10 pt-32 pb-24 relative">

<section className="max-w-7xl mx-auto px-6 mb-24 relative">
<div className="flex flex-col text-center items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 shadow-sm mb-8 animate-[fadeIn_1s_ease-out]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="text-[11px] font-semibold text-accent tracking-wide uppercase">
                        AI Back Office for Contractors
                    </span>
</div>
<h1 className="font-display md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-primary tracking-tighter max-w-5xl mb-8">
                    Stop running the office.
                    <br className="hidden md:block"/>
<span className="shimmer-text">Start running jobs.</span>
</h1>
<p className="md:text-xl leading-relaxed text-secondary text-lg font-normal tracking-tight max-w-2xl mb-10">
                    Never miss a call. Never forget a follow-up. TASKIZ answers calls, books jobs, and sends quotes automatically—so you can focus on the work that pays.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
<a className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2" href="#start">
                        Get Started
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary border border-border rounded-full font-semibold text-sm hover:bg-surface transition-all flex items-center justify-center gap-2" href="#how-it-works">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        See How It Works
                    </a>
</div>

<div className="relative w-full max-w-[340px] md:max-w-[360px] mx-auto z-20 group perspective-1000">
<div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-[4rem] -z-10 group-hover:bg-accent/30 transition-all duration-700"></div>
<div className="relative rounded-[3rem] border-[8px] border-primary bg-primary shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="relative bg-white h-[680px] w-full overflow-hidden flex flex-col font-sans">

<div className="bg-surface border-b border-border pt-12 pb-4 px-6 relative shrink-0">
<div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
<div className="flex justify-between items-center mt-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">AI</div>
<div>
<div className="text-xs font-bold text-primary">Taskiz Assistant</div>
<div className="text-[10px] text-green-600 font-medium">Active now</div>
</div>
</div>
<span className="iconify text-secondary" data-icon="lucide:more-vertical" data-width="20"></span>
</div>
</div>

<div className="flex-1 p-4 space-y-4 bg-slate-50 overflow-y-auto no-scrollbar">
<div className="text-center text-[10px] text-gray-400 font-medium my-4">Today 9:41 AM</div>

<div className="flex justify-end observe-slide slide-up" style={{transitionDelay: '100ms'}}>
<div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-xs leading-relaxed shadow-sm">
                                        Hi, I need a quote for a master bath renovation. Do you have availability?
                                    </div>
</div>

<div className="flex justify-start observe-slide slide-up" style={{transitionDelay: '400ms'}}>
<div className="bg-white border border-border text-primary p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-xs leading-relaxed shadow-sm">
                                        Hi! Thanks for reaching out. We definitely do bathroom renos. I can get a quote started for you. When are you looking to start the project?
                                    </div>
</div>

<div className="flex justify-end observe-slide slide-up" style={{transitionDelay: '800ms'}}>
<div className="bg-primary text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-xs leading-relaxed shadow-sm">
                                        Ideally next month.
                                    </div>
</div>

<div className="flex justify-center observe-slide slide-up" style={{transitionDelay: '1200ms'}}>
<div className="bg-white border border-green-100 p-3 rounded-xl w-full shadow-sm">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:calendar-check-2" data-width="14"></span>
</div>
<div>
<div className="text-xs font-bold text-primary">Estimate Scheduled</div>
<div className="text-[10px] text-secondary">Tuesday, Oct 24 • 10:00 AM</div>
</div>
</div>
<div className="h-px bg-border my-2"></div>
<div className="text-[10px] text-secondary text-center">Lead captured &amp; added to CRM</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-border">
<div className="h-10 bg-surface rounded-full border border-border flex items-center px-4 justify-between">
<span className="text-xs text-gray-400">Reply to Taskiz...</span>
<div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:arrow-up" data-width="12"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<p className="text-center text-sm font-medium text-secondary/70 mb-8">Trusted by growing contractors who want less admin and more booked jobs.</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tighter text-primary flex items-center gap-2">
<span className="iconify" data-icon="lucide:hammer" data-width="18"></span> BUILDER.IO
                </span>
<span className="text-lg font-bold tracking-tighter text-primary flex items-center gap-2">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span> VOLT
                </span>
<span className="text-lg font-bold tracking-tighter text-primary flex items-center gap-2">
<span className="iconify" data-icon="lucide:droplet" data-width="18"></span> FLOW
                </span>
<span className="text-lg font-bold tracking-tighter text-primary flex items-center gap-2">
<span className="iconify" data-icon="lucide:paint-bucket" data-width="18"></span> COAT
                </span>
<span className="text-lg font-bold tracking-tighter text-primary flex items-center gap-2">
<span className="iconify" data-icon="lucide:trees" data-width="18"></span> LANDSCAPE
                </span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mt-12"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="problem">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="observe-slide slide-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-primary mb-6">
                        Running jobs is easy. <br/>
<span className="text-secondary/60">Running the business is the problem.</span>
</h2>
<p className="text-secondary text-base leading-relaxed mb-8">
                        If you’re a contractor, you know the pain. You don’t need another complicated CRM. You need an assistant that handles the admin for you.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-primary">
<span className="iconify text-red-500" data-icon="lucide:x-circle" data-width="18"></span>
                            Missed calls that turn into lost jobs
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-primary">
<span className="iconify text-red-500" data-icon="lucide:x-circle" data-width="18"></span>
                            Notes and measurements scattered everywhere
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-primary">
<span className="iconify text-red-500" data-icon="lucide:x-circle" data-width="18"></span>
                            Evenings and weekends spent on paperwork
                        </li>
</ul>
</div>
<div className="grid grid-cols-1 gap-4">

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/40 transition-colors group">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-primary mb-4 group-hover:text-accent group-hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:phone-missed" data-width="20"></span>
</div>
<h3 className="font-semibold text-primary mb-2">The Silent Job Killer</h3>
<p className="text-sm text-secondary">60% of leads go to the competitor if you don't answer immediately. Voicemail isn't enough.</p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/40 transition-colors group">
<div className="w-10 h-10 bg-white border border-border rounded-lg flex items-center justify-center text-primary mb-4 group-hover:text-accent group-hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:file-clock" data-width="20"></span>
</div>
<h3 className="font-semibold text-primary mb-2">Quote Delay</h3>
<p className="text-sm text-secondary">Taking too long to send quotes because you're stuck on the job site all day.</p>
</div>
</div>
</div>
</section>

<section className="bg-primary text-white py-24 relative overflow-hidden" id="solution">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 blur-[100px] rounded-full mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
<span className="iconify text-accent" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs font-semibold tracking-wide uppercase text-white/90">The Solution</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
                    Meet TASKIZ.
                    <span className="text-white/50 block mt-2 text-3xl md:text-4xl">Your AI-Powered Back Office.</span>
</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                    TASKIZ works quietly in the background, handling calls, organizing job details, and automating follow-ups without changing how you work. It feels like hiring a full-time office manager—without the salary.
                </p>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 relative" id="how-it-works">
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-ml-px"></div>
<div className="space-y-24">

<div className="relative flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 observe-slide slide-up">
<div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Step 01</div>
<h3 className="text-2xl font-semibold text-primary tracking-tight mb-3">AI Answers Your Calls</h3>
<p className="text-secondary text-sm leading-relaxed">
                            Every call is answered automatically. TASKIZ qualifies the lead, captures job details, and books available appointments instantly.
                        </p>
<ul className="mt-4 space-y-2 inline-block text-left">
<li className="text-xs font-medium text-secondary flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:check" data-width="12"></span> Qualifies leads
                            </li>
<li className="text-xs font-medium text-secondary flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:check" data-width="12"></span> Captures details
                            </li>
</ul>
</div>
<div className="absolute left-6 md:left-1/2 -ml-[9px] w-[18px] h-[18px] rounded-full bg-page border-4 border-accent z-10 top-0 md:top-auto shadow-sm"></div>
<div className="md:w-1/2 md:pl-16 pl-12 pt-6 md:pt-0">
<div className="bg-surface border border-border p-6 rounded-xl shadow-sm max-w-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:phone-incoming" data-width="14"></span>
</div>
<div className="text-xs font-semibold">Incoming Call: Unknown</div>
</div>
<div className="text-xs text-secondary bg-white p-3 rounded-lg border border-border">
                                "Thanks for calling Mike's Plumbing. I can help book a repair. What seems to be the issue?"
                            </div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 order-2 md:order-1 pt-6 md:pt-0">
<div className="bg-surface border border-border p-6 rounded-xl shadow-sm max-w-sm ml-auto">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="iconify text-red-500" data-icon="lucide:mic" data-width="16"></span>
<span className="text-xs font-semibold">Recording... 0:14</span>
</div>
<div className="flex gap-1 h-3 items-end">
<div className="w-1 bg-primary h-2 animate-pulse"></div>
<div className="w-1 bg-primary h-3 animate-pulse delay-75"></div>
<div className="w-1 bg-primary h-1 animate-pulse delay-150"></div>
</div>
</div>
<div className="text-xs text-secondary">
                                "Customer needs a 12x12 deck replacement. Composite material. Access via side gate."
                            </div>
</div>
</div>
<div className="absolute left-6 md:left-1/2 -ml-[9px] w-[18px] h-[18px] rounded-full bg-page border-4 border-primary z-10 top-0 md:top-auto shadow-sm"></div>
<div className="md:w-1/2 md:pl-16 pl-12 order-1 md:order-2 observe-slide slide-up">
<div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Step 02</div>
<h3 className="text-2xl font-semibold text-primary tracking-tight mb-3">Talk Instead of Typing</h3>
<p className="text-secondary text-sm leading-relaxed">
                            On the job site, just record voice notes. TASKIZ transcribes everything, organizes notes, stores photos, and keeps a searchable history.
                        </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 observe-slide slide-up">
<div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Step 03</div>
<h3 className="text-2xl font-semibold text-primary tracking-tight mb-3">Instant Proposals</h3>
<p className="text-secondary text-sm leading-relaxed">
                            Quotes are created automatically using your templates and pricing patterns. Send same-day quotes in one click.
                        </p>
</div>
<div className="absolute left-6 md:left-1/2 -ml-[9px] w-[18px] h-[18px] rounded-full bg-page border-4 border-accent z-10 top-0 md:top-auto shadow-sm"></div>
<div className="md:w-1/2 md:pl-16 pl-12 pt-6 md:pt-0">
<div className="bg-surface border border-border p-1 rounded-xl shadow-sm max-w-sm">
<div className="bg-white border border-border rounded-lg p-4">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-gray-200 rounded"></div>
<div className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">READY TO SEND</div>
</div>
<div className="h-2 w-2/3 bg-gray-100 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded mb-4"></div>
<div className="flex justify-between items-center pt-2 border-t border-border">
<span className="text-xs font-bold text-primary">$4,250.00</span>
<span className="text-[10px] text-accent font-medium">View PDF -&gt;</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:items-center">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 order-2 md:order-1 pt-6 md:pt-0">
<div className="bg-surface border border-border p-6 rounded-xl shadow-sm max-w-sm ml-auto">
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:bell" data-width="12"></span>
</div>
<div className="text-xs text-primary">Reminder sent to Sarah J.</div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
</div>
<div className="text-xs text-primary">Follow-up on Quote #1024</div>
</div>
</div>
</div>
</div>
<div className="absolute left-6 md:left-1/2 -ml-[9px] w-[18px] h-[18px] rounded-full bg-page border-4 border-primary z-10 top-0 md:top-auto shadow-sm"></div>
<div className="md:w-1/2 md:pl-16 pl-12 order-1 md:order-2 observe-slide slide-up">
<div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Step 04</div>
<h3 className="text-2xl font-semibold text-primary tracking-tight mb-3">Automated Follow-Ups</h3>
<p className="text-secondary text-sm leading-relaxed">
                            TASKIZ handles the messages you forget. Job confirmations, appointment reminders, and review requests happen automatically.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-primary mb-4">Everything You Need.<br/>Nothing You Don't.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:phone-call" data-width="20"></span>
</div>
<h3 className="font-semibold text-primary mb-2">AI Call Handling</h3>
<p className="text-sm text-secondary leading-relaxed">Answers, qualifies, books, and logs every call instantly.</p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:mic" data-width="20"></span>
</div>
<h3 className="font-semibold text-primary mb-2">Voice to Docs</h3>
<p className="text-sm text-secondary leading-relaxed">Speak naturally. TASKIZ organizes voice notes into job documentation.</p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="font-semibold text-primary mb-2">Proposal Automation</h3>
<p className="text-sm text-secondary leading-relaxed">Instant, branded quotes pulled directly from real job data.</p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="20"></span>
</div>
<h3 className="font-semibold text-primary mb-2">Auto-Confirmations</h3>
<p className="text-sm text-secondary leading-relaxed">No more missed appointments or forgotten follow-ups.</p>
</div>

<div className="md:col-span-2 bg-primary text-white border border-primary p-6 rounded-xl hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="font-semibold text-white mb-2">AI That Learns Your Business</h3>
<p className="text-sm text-white/70 leading-relaxed max-w-md">It learns your tone of voice, pricing habits, and follow-up patterns. TASKIZ gets better the more you use it.</p>
</div>
<div className="absolute right-0 bottom-0 opacity-10">
<span className="iconify" data-icon="lucide:bot" data-width="200"></span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 scroll-mt-24" id="pricing">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tighter text-primary mb-4">Simple Monthly Pricing</h2>
<p className="text-secondary">No complex setup. No hidden fees.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white border border-border rounded-2xl p-8 hover:border-primary/30 transition-all relative">
<h3 className="font-bold text-lg text-primary mb-2">Solo</h3>
<p className="text-sm text-secondary mb-6">For solo contractors who want their evenings back.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-primary tracking-tight">$97</span>
<span className="text-sm text-secondary">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-primary">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> AI Call Answering
                        </li>
<li className="flex items-center gap-3 text-sm text-primary">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> Auto-Booking
                        </li>
<li className="flex items-center gap-3 text-sm text-primary">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> 50 Quotes / mo
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-border font-semibold text-sm hover:bg-surface transition-colors">Get Started</button>
</div>

<div className="bg-primary text-white border border-primary rounded-2xl p-8 shadow-xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-accent text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<h3 className="font-bold text-lg text-white mb-2">Pro</h3>
<p className="text-sm text-white/70 mb-6">For growing teams drowning in admin.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-bold text-white tracking-tight">$197</span>
<span className="text-sm text-white/70">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> Everything in Solo
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> Advanced Automation
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> Unlimited Quotes
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-accent" data-icon="lucide:check" data-width="16"></span> Team Calendar Sync
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-accent hover:bg-accent/90 font-semibold text-sm text-white transition-colors">Get Started</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="bg-surface border border-border rounded-3xl p-12 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-primary mb-6">
                        Stop Running the Office. <br/>Start Running Jobs.
                    </h2>
<p className="text-secondary mb-8 max-w-lg mx-auto">
                        TASKIZ gives contractors a real AI assistant — not another dashboard to babysit.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                            Get Early Access <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-8 py-3 bg-white border border-border text-primary rounded-full font-semibold text-sm hover:bg-gray-50 transition-all">
                            Book a Demo
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-border bg-white pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-primary text-white rounded flex items-center justify-center text-xs font-bold">T</div>
<span className="font-bold text-primary">TASKIZ</span>
</div>
<p className="text-sm text-secondary max-w-xs">
                        The AI Back Office Built for Contractors. Less Admin. More Jobs.
                    </p>
</div>
<div>
<h4 className="font-semibold text-sm text-primary mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-sm text-secondary hover:text-primary" href="#">Features</a></li>
<li><a className="text-sm text-secondary hover:text-primary" href="#">Pricing</a></li>
<li><a className="text-sm text-secondary hover:text-primary" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-primary mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-secondary hover:text-primary" href="#">About</a></li>
<li><a className="text-sm text-secondary hover:text-primary" href="#">Contact</a></li>
<li><a className="text-sm text-secondary hover:text-primary" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-border flex justify-between items-center">
<span className="text-xs text-secondary/50">© 2024 TASKIZ. All rights reserved.</span>
<div className="flex gap-4">
<span className="iconify text-secondary/50 hover:text-primary cursor-pointer" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-secondary/50 hover:text-primary cursor-pointer" data-icon="lucide:linkedin" data-width="16"></span>
</div>
</div>
</div>
</footer>


    </>
  );
}
