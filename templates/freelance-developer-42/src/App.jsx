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
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-white group" href="#">
                jordanbuilds<span className="text-blue-500 group-hover:text-blue-400 transition-colors">.tech</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#toolkit">Toolkit</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950" href="https://calendar.app.google/Z7fW6iyezahoxRTn8" target="_blank">
                Book a Call
            </a>
<button className="md:hidden text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    You focus on the creative. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">I'll handle the tech.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                    I operate behind the scenes as your technical ghost. From advanced GoHighLevel builds and two-way API data syncs to complex automations, I build the invisible systems that power your front-end vision.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center shadow-blue-500/25 transition-all hover:bg-blue-500 hover:translate-y-[-1px] text-sm font-medium text-white bg-blue-600 h-11 rounded-md pr-8 pl-8 shadow-lg" href="#work">
                        See My Work
                    </a>
<a className="inline-flex items-center justify-center transition-all hover:bg-slate-800 hover:text-white text-sm font-medium text-slate-300 bg-transparent h-11 border-slate-700 border rounded-md pr-8 pl-8" href="https://calendar.app.google/Z7fW6iyezahoxRTn8" target="_blank">
                        Book a Free Call
                    </a>
</div>
</div>
<div className="relative hidden lg:block animate-float">
<div className="relative z-10 p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
<div className="flex items-center justify-between relative">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -z-10"></div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/20">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:database" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<span className="text-xs font-medium text-slate-400">GoHighLevel</span>
</div>
<div className="text-blue-500/50 animate-pulse">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col items-center gap-3 relative">
<div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
<div className="w-20 h-20 rounded-2xl bg-slate-800 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-900/20 relative z-10">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:webhook" data-strokeWidth="1.5" data-width="36" height="36" role="img" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></g></svg>
</div>
<span className="text-xs font-medium text-blue-300">n8n / API</span>
</div>
<div className="text-blue-500/50 animate-pulse delay-75">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/20 group">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<span className="text-xs font-medium text-slate-400">Solution</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-800">
<div className="space-y-2 font-mono text-xs">
<div className="flex gap-2">
<span className="text-purple-400">const</span>
<span className="text-blue-300">automation</span>
<span className="text-slate-400">=</span>
<span className="text-yellow-300">async</span>
<span className="text-slate-400">() =&gt; {</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-purple-400">await</span>
<span className="text-blue-300">workflow</span>
<span className="text-slate-400">.</span>
<span className="text-blue-200">trigger</span>
<span className="text-slate-400">();</span>
</div>
<div className="pl-4 flex gap-2">
<span className="text-purple-400">return</span>
<span className="text-emerald-400">"Success"</span>
<span className="text-slate-400">;</span>
</div>
<div className="text-slate-400">}</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-900 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">How I Can Help</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Specialized services designed to streamline your business operations and scale your technical capabilities.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-8 rounded-2xl bg-slate-850 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:database" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Backend Systems &amp; Portals</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        I build the custom dashboards, client portals, and internal tools that keep your operations organized while you focus on client-facing deliverables.
                    </p>
</div>
<div className="group p-8 rounded-2xl bg-slate-850 border border-slate-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Silent Automations</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        I write the invisible "glue" code using n8n, custom Webhooks, and API integrations to ensure your disparate apps and data flow seamlessly in the background.
                    </p>
</div>
<div className="group p-8 rounded-2xl bg-slate-850 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">White-Label Tech Ops</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Expert GoHighLevel setups, custom domain routing, and robust Meta Conversion API integrations managed entirely under your brand's umbrella.
                    </p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-950" id="work">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Selected Work</h2>
<p className="text-slate-400 max-w-xl">
                        A focus on AI, Systems Integration, and invisible operations.
                    </p>
</div>
<a className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group" href="https://nexus-lead-engine.netlify.app/" target="_blank">
                    View Live App 
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 gap-8">
<div className="group rounded-xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all">
<div className="h-64 bg-slate-800 flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-slate-800"></div>
<svg aria-hidden="true" className="iconify text-slate-600 group-hover:scale-110 transition-transform duration-500 iconify--lucide" data-icon="lucide:map" data-strokeWidth="1" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zM15 5.714V19.71M8 4.286v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="p-8 md:p-10">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide">Next.js</span>
<span className="px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide">Python FastAPI</span>
<span className="px-3 py-1.5 rounded-md bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-wide">AI SERP Agents</span>
<span className="px-3 py-1.5 rounded-md bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wide">Retell AI</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">Nexus Lead Engine</h3>
<p className="text-base text-slate-400 leading-relaxed max-w-4xl">
                            A powerful, map-based B2B lead generation application built to run local macro sweeps. The system utilizes a Next.js frontend connected to a custom Python FastAPI microservice to scrape business data seamlessly. It features multi-level data enrichment: extracting raw social links from company websites and deploying intelligent AI SERP agents to locate key management LinkedIn profiles. Built with an infrastructure ready for AI voice agent integration (Retell AI) for automated sales qualification and lead scoring.
                        </p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 hover:text-blue-300 transition-all border border-slate-700" href="https://nexus-lead-engine.netlify.app/" target="_blank">
                                Launch Application
                                <svg className="lucide lucide-external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-slate-900 border-t border-white/5 border-b" id="toolkit">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-12">My Toolkit</h2>
<div className="grid md:grid-cols-3 gap-12">
<div>
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:code-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-medium text-white">Development</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> React / Next.js
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Node.js
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Python
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Firebase / Supabase
                        </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-medium text-white">Automation</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> n8n
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Zapier
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Make.com
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Webhooks &amp; REST APIs
                        </li>
</ul>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:bar-chart-3" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-lg font-medium text-white">Marketing &amp; AI</h3>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> GoHighLevel (GHL)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Gemini AI
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> OpenAI API
                        </li>
</ul>
</div>
</div>
</div>
</section>
<footer className="relative py-24 bg-slate-950 overflow-hidden" id="contact">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Have a problem to solve?
            </h2>
<p className="text-lg text-slate-400 mb-10">
                Let's discuss how we can automate your workflow or build your next application.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:scale-105" href="mailto:hello@jordanbuilds.tech">
<svg aria-hidden="true" className="iconify mr-2 iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                    Email Me
                </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-8 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600" href="https://calendar.app.google/Z7fW6iyezahoxRTn8" target="_blank">
<svg aria-hidden="true" className="iconify mr-2 iconify--lucide" data-icon="lucide:calendar" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                    Book Strategy Call
                </a>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2026 JordanBuilds.tech. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-slate-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-slate-300 transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
