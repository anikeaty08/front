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
sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
mono: ['Courier New', 'Courier', 'monospace'],
},
colors: {
cream: '#fcfbf9',
neutral: {
900: '#171717', // Primary Text
800: '#262626',
600: '#525252', // Secondary Text
400: '#a3a3a3', // Muted
200: '#e5e5e5', // Light Border
},
emerald: {
500: '#10b981' // Accent
}
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
widest: '0.1em'
},
borderRadius: {
'organic': '200px 10px 10px 200px',
'organic-rev': '10px 200px 200px 10px',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 3s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(500%)' },
}
}
}
}
}



        // Scroll Reveal
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Cursor Glow Effect
        const cursor = document.getElementById('cursor-glow');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth following logic
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;
            cursorX += distX * 0.1;
            cursorY += distY * 0.1;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Magnetic Buttons Effect
        const magnets = document.querySelectorAll('.magnetic');
        magnets.forEach((magnet) => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Strength of magnet
                magnet.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            });

            magnet.addEventListener('mouseleave', () => {
                magnet.style.transform = 'translate(0, 0)';
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
      

<div className="cursor-glow hidden md:block" id="cursor-glow" style={{left: '0px', top: '0px'}}></div>

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#fcfbf9] px-6 py-6 md:px-12 flex justify-between items-center">
<a className="text-lg tracking-tight font-medium lowercase magnetic hover:text-emerald-500 transition-colors" href="#" style={{transform: 'translate(0px, 0px)'}}>murisa.group</a>
<div className="hidden md:flex gap-8 text-sm lowercase tracking-wide font-medium">
<a className="magnetic hover:text-emerald-500 transition-colors duration-300" href="#work">work</a>
<a className="magnetic hover:text-emerald-500 transition-colors duration-300" href="#services">services</a>
<a className="magnetic hover:text-emerald-500 transition-colors duration-300" href="#about">about</a>
<a className="magnetic hover:text-emerald-500 transition-colors duration-300" href="#contact">contact</a>
</div>
<a className="md:hidden text-neutral-900 mix-blend-normal" href="#contact">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</nav>

<header className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative">
<div className="absolute top-24 md:top-32 left-6 md:left-12 flex items-center gap-2 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs uppercase tracking-widest text-neutral-600 font-medium">Available for projects</span>
</div>
<div className="max-w-7xl mx-auto w-full mt-12 md:mt-0">
<h1 className="text-[10vw] md:text-[8vw] leading-[0.9] tracking-tighter font-medium text-neutral-900 mb-8 md:mb-12 reveal active">
                I Build Systems <br/>
                That Think, <br/>
<span className="text-neutral-400">So You Don't Have To</span>
</h1>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 reveal delay-100 active">
<p className="max-w-md text-lg md:text-xl leading-relaxed text-neutral-600">
                    Automation architect &amp; AI systems designer. Building intelligent workflows that scale businesses and eliminate manual chaos.
                </p>
<a className="magnetic group flex items-center gap-2 text-xs font-medium uppercase tracking-widest border-b border-neutral-200 pb-1 hover:border-neutral-900 hover:text-neutral-900 text-neutral-600 transition-all" href="#work">
                    Selected Work
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" width="14"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white/50" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16 md:mb-24 reveal">
<h2 className="text-4xl md:text-6xl tracking-tight font-medium">Selected Work</h2>
<span className="hidden md:block text-xs uppercase tracking-widest text-neutral-400">2024 — 2025</span>
</div>
<div className="flex flex-col gap-24 md:gap-32">

<article className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center reveal">
<div className="h-[50vh] md:h-[60vh] w-full bg-neutral-900 overflow-hidden relative md:rounded-organic rounded-[40px] transition-transform duration-700 hover:shadow-2xl hover:shadow-emerald-500/10 hover:scale-[1.02]">

<div className="absolute inset-0 p-8 flex flex-col font-mono text-xs">
<div className="flex justify-between text-neutral-500 mb-8 border-b border-neutral-800 pb-2">
<span>N8N_WORKFLOW_INIT</span>
<span className="text-emerald-500 animate-pulse">STATUS: ACTIVE</span>
</div>
<div className="space-y-4 text-emerald-500/80">
<p>&gt; Initializing research protocol...</p>
<p className="delay-75">&gt; Scanning 15+ data sources...</p>
<div className="flex gap-1 items-end h-8">
<div className="w-1 bg-emerald-500 h-2 animate-[pulse_0.5s_infinite]"></div>
<div className="w-1 bg-emerald-500 h-5 animate-[pulse_0.5s_infinite_0.1s]"></div>
<div className="w-1 bg-emerald-500 h-3 animate-[pulse_0.5s_infinite_0.2s]"></div>
</div>
<p className="text-white typing-cursor">&gt; 8hrs research → 30min execution</p>
</div>
<div className="mt-auto relative h-32 w-full border-t border-neutral-800 pt-4">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
<div className="scan-line top-0"></div>
</div>
</div>
</div>
<div className="space-y-6 md:pr-12">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Scaletopia</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">GTM Research Agent</h3>
<p className="text-neutral-600 leading-relaxed">
                            Built an N8N-powered AI agent that autonomously researches companies using multiple data sources. Reduced manual sales research from 8 hours to 30 minutes while standardizing report quality across the team.
                        </p>
<ul className="flex flex-wrap gap-2 pt-4">
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">N8N</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">OpenAI GPT-4</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Airtable</li>
</ul>
</div>
</article>

<article className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center reveal">
<div className="order-2 md:order-1 space-y-6 md:pl-12">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Nationwide Abstrax</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">AI Voice Agent Fleet</h3>
<p className="text-neutral-600 leading-relaxed">
                            Deployed a fleet of AI voice agents to handle inbound and outbound calls. Integrated directly with Salesforce for real-time lead routing, achieving a 50% reduction in calling costs while maintaining lead qualification rates.
                        </p>
<ul className="flex flex-wrap gap-2 pt-4">
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Vapi</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Salesforce</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Make.com</li>
</ul>
</div>
<div className="order-1 md:order-2 h-[50vh] md:h-[60vh] w-full bg-neutral-200 overflow-hidden relative md:rounded-organic-rev rounded-[40px] transition-transform duration-700 hover:shadow-2xl hover:shadow-neutral-500/10 hover:scale-[1.02]">

<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="w-32 h-32 rounded-full border border-neutral-400 flex items-center justify-center relative mb-8 bg-white">
<div className="absolute w-full h-full rounded-full border border-emerald-500 opacity-20 animate-ping"></div>
<div className="absolute w-[120%] h-[120%] rounded-full border border-emerald-500 opacity-10 animate-[ping_2s_infinite]"></div>
<iconify-icon className="text-neutral-800 relative z-10" icon="lucide:mic" width="48"></iconify-icon>
</div>
<div className="flex items-center gap-1 h-12">
<div className="w-2 bg-neutral-800 rounded-full h-4 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-2 bg-neutral-800 rounded-full h-8 animate-[pulse_0.8s_ease-in-out_infinite_0.1s]"></div>
<div className="w-2 bg-neutral-800 rounded-full h-12 animate-[pulse_0.8s_ease-in-out_infinite_0.2s]"></div>
<div className="w-2 bg-neutral-800 rounded-full h-6 animate-[pulse_0.8s_ease-in-out_infinite_0.3s]"></div>
<div className="w-2 bg-neutral-800 rounded-full h-3 animate-[pulse_0.8s_ease-in-out_infinite_0.4s]"></div>
</div>
<div className="bg-white px-4 py-1 rounded-full shadow-sm mt-6 border border-neutral-200">
<span className="text-xs font-mono text-emerald-500">Processing Voice...</span>
</div>
</div>
</div>
</article>

<article className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center reveal">
<div className="h-[50vh] md:h-[60vh] w-full bg-neutral-800 overflow-hidden relative md:rounded-organic rounded-[40px] transition-transform duration-700 hover:shadow-2xl hover:shadow-emerald-500/10 hover:scale-[1.02]">

<div className="absolute inset-0 p-8 flex flex-col justify-center">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-neutral-700/50 backdrop-blur p-4 rounded-xl border border-neutral-600">
<div className="flex justify-between items-start mb-2">
<iconify-icon className="text-emerald-500" icon="lucide:shield-check" width="20"></iconify-icon>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<div className="text-xs text-neutral-400">System Health</div>
<div className="text-xl font-medium text-white">99.8%</div>
</div>
<div className="bg-neutral-700/50 backdrop-blur p-4 rounded-xl border border-neutral-600">
<div className="flex justify-between items-start mb-2">
<iconify-icon className="text-neutral-400" icon="lucide:mail" width="20"></iconify-icon>
<span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded">AUTO</span>
</div>
<div className="text-xs text-neutral-400">Deliverability</div>
<div className="text-xl font-medium text-white">High</div>
</div>
</div>
<div className="bg-neutral-900 rounded-xl p-4 font-mono text-xs space-y-2 border border-neutral-700 shadow-inner">
<div className="flex gap-2">
<span className="text-neutral-500">14:02:21</span>
<span className="text-emerald-400">Check_Domain_Health()</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-500">14:02:22</span>
<span className="text-amber-400">WARN: Spam trap detected</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-500">14:02:22</span>
<span className="text-emerald-400">Action: Swap_DNS_Route -&gt; Success</span>
</div>
</div>
</div>
</div>
<div className="space-y-6 md:pr-12">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Scaletopia</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Self-Healing Email System</h3>
<p className="text-neutral-600 leading-relaxed">
                            Automated email infrastructure monitoring that detects and replaces burnt domains without human intervention. Increased deliverability by 40% and eliminated manual domain management.
                        </p>
<ul className="flex flex-wrap gap-2 pt-4">
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">EmailReach API</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Webhooks</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Custom Scripts</li>
</ul>
</div>
</article>

<article className="group grid md:grid-cols-2 md:gap-16 reveal relative gap-x-8 gap-y-8 items-center">
<div className="order-2 md:order-1 space-y-6 md:pl-12">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Scaletopia</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Real-Time Client Dashboard</h3>
<p className="text-neutral-600 leading-relaxed">
                            Built comprehensive Airtable dashboard tracking 20+ KPIs with dynamic filtering, automated alerts, and predictive churn indicators. Reduced client churn by 30%.
                        </p>
<ul className="flex flex-wrap gap-2 pt-4">
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Airtable</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">N8N</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Slack API</li>
</ul>
</div>
<div className="order-1 md:order-2 h-[50vh] md:h-[60vh] w-full bg-neutral-50 overflow-hidden relative md:rounded-organic-rev rounded-[40px] border border-neutral-200 transition-transform duration-700 hover:shadow-2xl hover:scale-[1.02]">

<div className="absolute inset-0 p-8 flex flex-col justify-center">
<div className="flex gap-4 mb-6">
<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 flex-1">
<div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Churn</div>
<div className="text-2xl font-medium text-emerald-500 flex items-center gap-2">
                                        30% <iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 flex-1">
<div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">CSAT</div>
<div className="text-2xl font-medium text-neutral-900 flex items-center gap-2">
                                        4.8 <iconify-icon className="text-emerald-500" icon="lucide:arrow-up" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 h-32 flex items-end gap-2 px-6 pb-4">
<div className="w-full bg-emerald-500/10 rounded-t h-[40%] animate-pulse"></div>
<div className="w-full bg-emerald-500/20 rounded-t h-[60%] animate-[pulse_1.5s_infinite]"></div>
<div className="w-full bg-emerald-500/40 rounded-t h-[50%] animate-[pulse_2s_infinite]"></div>
<div className="w-full bg-emerald-500/60 rounded-t h-[80%] animate-[pulse_1s_infinite]"></div>
<div className="w-full bg-emerald-500 rounded-t h-[90%]"></div>
</div>
</div>
</div>
</article>

<article className="group grid md:grid-cols-2 gap-8 md:gap-16 reveal relative gap-x-8 gap-y-8 items-center">
<div className="h-[50vh] md:h-[60vh] w-full bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden relative md:rounded-organic rounded-[40px] transition-transform duration-700 hover:shadow-2xl hover:scale-[1.02]">

<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex items-center gap-8 text-neutral-400 mb-8">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full border border-neutral-600 flex items-center justify-center bg-neutral-800">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<span className="text-[10px] uppercase">Trigger</span>
</div>
<div className="h-[2px] w-12 bg-neutral-700 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-emerald-500 animate-[scan_1.5s_linear_infinite]"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full border border-emerald-500 text-emerald-500 flex items-center justify-center bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
<iconify-icon icon="lucide:cpu" width="20"></iconify-icon>
</div>
<span className="text-[10px] uppercase text-emerald-500">Route</span>
</div>
<div className="h-[2px] w-12 bg-neutral-700 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/2 bg-emerald-500 animate-[scan_1.5s_linear_infinite_0.75s]"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full border border-neutral-600 flex items-center justify-center bg-neutral-800">
<iconify-icon icon="lucide:bell" width="20"></iconify-icon>
</div>
<span className="text-[10px] uppercase">Notify</span>
</div>
</div>

<div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 w-48 animate-float shadow-xl">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:message-circle" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">New Lead</div>
<div className="text-[10px] text-neutral-400">&lt; 2 mins ago</div>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-6 md:pr-12">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">Scaletopia</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight">Multi-Channel Notification Hub</h3>
<p className="text-neutral-600 leading-relaxed">
                            Webhook-based system routing all engagement signals to appropriate Slack channels within 2 minutes. Improved team response time by 60%.
                        </p>
<ul className="flex flex-wrap gap-2 pt-4">
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Airtable</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Slack API</li>
<li className="px-3 py-1 border border-neutral-200 rounded-full text-xs text-neutral-500">Make.com</li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-cream" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-12 md:gap-24">
<div className="md:col-span-1 reveal">
<h2 className="text-4xl md:text-5xl tracking-tight font-medium mb-6">What I Build</h2>
<p className="text-neutral-600 leading-relaxed mb-8">
                        From simple automations to complex AI systems, I architect solutions that scale with your business and operate autonomously.
                    </p>
<a className="magnetic inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest bg-neutral-900 text-cream px-6 py-3 rounded-full hover:bg-emerald-500 transition-colors duration-300" href="#contact">
                        Start a Project
                    </a>
</div>
<div className="md:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">

<div className="space-y-4 reveal delay-100 group">
<div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="lucide:workflow" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight">Workflow Automation</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                            End-to-end process automation using Make.com, N8N, and Zapier. Multi-branch logic and enterprise-grade reliability.
                        </p>
</div>

<div className="space-y-4 reveal delay-150 group">
<div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="lucide:phone-call" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight">AI Voice Agents</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                            Intelligent conversational agents that qualify leads, book appointments, and handle objections in real-time.
                        </p>
</div>

<div className="space-y-4 reveal delay-200 group">
<div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight">CRM Automation</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                            Transforming CRMs into intelligent systems. Auto-enrichment, smart routing, and pipeline automation for HubSpot &amp; Salesforce.
                        </p>
</div>

<div className="space-y-4 reveal delay-250 group">
<div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="lucide:bot" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight">AI Research Agents</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                            Autonomous agents that scrape, analyze, and compile complex market research and competitive intelligence.
                        </p>
</div>

<div className="space-y-4 reveal delay-300 group">
<div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="lucide:plug" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight">API Integration</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                            Connect any system to any system. Custom integrations, webhook orchestration, and real-time data sync.
                        </p>
</div>

<div className="space-y-4 reveal delay-300 group">
<div className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center mb-4 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="group-hover:text-emerald-500 transition-colors" icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-xl font-medium tracking-tight">Dashboard &amp; Reporting</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                            Real-time visibility into your operations. Custom dashboards, automated alerts, and executive reporting.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-200 overflow-hidden bg-white/50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 text-center">Tools I Master</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-6 reveal">
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Make.com</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">N8N</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">OpenAI API</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Vapi</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">HubSpot</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Salesforce</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Airtable</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">GoHighLevel</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Python</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Webhooks</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Zapier</span>
<span className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-emerald-500 hover:text-emerald-500 transition-colors">Claude API</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-900 text-cream relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 p-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<span className="block text-emerald-500 text-xs uppercase tracking-widest mb-6 reveal">The Philosophy</span>
<h2 className="text-3xl md:text-5xl leading-tight font-medium tracking-tight mb-12 reveal">
                "Every manual process is a system waiting to be born."
            </h2>
<div className="grid md:grid-cols-2 gap-12 text-neutral-400 leading-relaxed reveal delay-100">
<p>
                    I don't just automate—I design ecosystems. My approach is obsessed with error handling and self-healing.
                </p>
<p>
                    I build systems that work while you sleep, not systems that break when you're away.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-neutral-800 reveal delay-200">
<div className="group">
<span className="block text-3xl font-medium text-white mb-2 group-hover:text-emerald-500 transition-colors">500+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Workflows Deployed</span>
</div>
<div className="group">
<span className="block text-3xl font-medium text-white mb-2 group-hover:text-emerald-500 transition-colors">99.8%</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">System Uptime</span>
</div>
<div className="group">
<span className="block text-3xl font-medium text-white mb-2 group-hover:text-emerald-500 transition-colors">10K+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Hours Saved/Mo</span>
</div>
<div className="group">
<span className="block text-3xl font-medium text-white mb-2 group-hover:text-emerald-500 transition-colors">75%</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Cost Reduction</span>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between mb-16 reveal">
<h2 className="text-4xl tracking-tight font-medium">How I Work</h2>
</div>
<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">

<div className="relative pt-6 border-t border-neutral-200 reveal hover:border-emerald-500 transition-colors duration-500 group">
<span className="absolute top-0 transform -translate-y-1/2 bg-cream pr-4 text-xs font-mono text-neutral-400 group-hover:text-emerald-500 transition-colors">01</span>
<h3 className="text-lg font-medium mb-3">Discovery</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Deep dive into current processes. Mapping manual steps and identifying bottlenecks.</p>
</div>

<div className="relative pt-6 border-t border-neutral-200 reveal delay-75 hover:border-emerald-500 transition-colors duration-500 group">
<span className="absolute top-0 transform -translate-y-1/2 bg-cream pr-4 text-xs font-mono text-neutral-400 group-hover:text-emerald-500 transition-colors">02</span>
<h3 className="text-lg font-medium mb-3">Architecture</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Designing the automation blueprint. Data flows, trigger logic, and scalability considerations.</p>
</div>

<div className="relative pt-6 border-t border-neutral-200 reveal delay-150 hover:border-emerald-500 transition-colors duration-500 group">
<span className="absolute top-0 transform -translate-y-1/2 bg-cream pr-4 text-xs font-mono text-neutral-400 group-hover:text-emerald-500 transition-colors">03</span>
<h3 className="text-lg font-medium mb-3">Build</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Development with obsessive attention to edge cases, retry logic, and error handling.</p>
</div>

<div className="relative pt-6 border-t border-neutral-200 reveal delay-200 hover:border-emerald-500 transition-colors duration-500 group">
<span className="absolute top-0 transform -translate-y-1/2 bg-cream pr-4 text-xs font-mono text-neutral-400 group-hover:text-emerald-500 transition-colors">04</span>
<h3 className="text-lg font-medium mb-3">Test &amp; Launch</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Rigorous scenario testing. Gradual rollout with active monitoring.</p>
</div>

<div className="relative pt-6 border-t border-neutral-200 reveal delay-250 hover:border-emerald-500 transition-colors duration-500 group">
<span className="absolute top-0 transform -translate-y-1/2 bg-cream pr-4 text-xs font-mono text-neutral-400 group-hover:text-emerald-500 transition-colors">05</span>
<h3 className="text-lg font-medium mb-3">Optimize</h3>
<p className="text-sm text-neutral-600 leading-relaxed">Continuous monitoring and iteration to expand coverage and efficiency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white/30">
<div className="reveal text-center max-w-5xl mr-auto ml-auto">
<iconify-icon className="text-emerald-500 mb-8" icon="lucide:quote" width="32"></iconify-icon>
<blockquote className="md:text-4xl leading-tight text-2xl font-medium tracking-tight mb-8">"The GTM research agent alone saved us 200+ hours in the first month. MURISA GROUP doesn’t just automate—They architect systems that genuinely transform how we operate."</blockquote>

<div className="flex items-center justify-center gap-4 mt-8">
<div className="text-center">
<cite className="not-italic text-sm font-medium text-neutral-900 block tracking-wide">CEO</cite>
<span className="text-sm text-neutral-500">Scaletopia</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-cream border-t border-neutral-200" id="contact">
<div className="reveal text-center max-w-4xl mr-auto ml-auto">
<h2 className="text-5xl md:text-7xl tracking-tighter font-medium mb-8">Let's Build<br/>Something</h2>
<p className="text-lg text-neutral-600 mb-12 max-w-sm mx-auto">Have a process that needs automating? Whether you have a specific plan or need help identifying opportunities, let's connect.</p>
<div className="space-y-4 mb-16">
<a className="block text-2xl md:text-3xl hover:text-emerald-500 transition-colors magnetic" href="mailto:contact@murisagroup.com" style={{transform: 'translate(0px, 0px)'}}>contact@murisagroup.com</a>
<a className="block text-xl text-neutral-500 hover:text-neutral-900 transition-colors magnetic" href="tel:+21623035527">+216 23 03 55 27</a>
</div>
<div className="flex justify-center">
<a className="magnetic group inline-flex items-center gap-2 bg-neutral-900 text-cream pl-6 pr-2 py-2 rounded-full hover:bg-emerald-500 transition-all duration-300" href="https://www.linkedin.com/in/baha-banwaz">
<span className="text-sm font-medium uppercase tracking-widest">Connect on LinkedIn</span>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 group-hover:scale-90 transition-transform">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<footer className="py-12 px-6 md:px-12 bg-cream text-neutral-500 text-sm border-t border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="font-medium text-neutral-900">© 2025 MURISA GROUP</span>
<span className="text-xs">Automating the boring stuff</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span>Remote Worldwide</span>
</div>
</div>
</footer>


    </>
  );
}
