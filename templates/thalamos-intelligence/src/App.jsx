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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Theme Toggle
        const themeBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        themeBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        });

        // Spotlight
        document.addEventListener('mousemove', (e) => {
            document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
        });

        // Typewriter
        const words = ["clinics", "specialists", "surgeons", "health groups"];
        let wordIndex = 0, charIndex = 0, isDeleting = false;
        const typeElement = document.getElementById('typewriter-text');
        const cursorElement = document.getElementById('cursor');

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typeElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                cursorElement.classList.add('cursor-blink');
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                cursorElement.classList.remove('cursor-blink');
                setTimeout(type, 500);
            } else {
                cursorElement.classList.remove('cursor-blink');
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        setTimeout(type, 1000);

        // Modal
        const modal = document.getElementById('audit-modal');
        const modalContent = document.getElementById('audit-modal-content');

        window.openAuditModal = () => {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        };

        window.closeAuditModal = () => {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        };
    
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
      
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-50/60 dark:bg-[#0a0a0c] transition-colors duration-500">
<div className="ambient-glow">
<div className="glow-blob bg-purple-600/40 dark:bg-purple-900/40 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply dark:mix-blend-screen animate-[blob_20s_infinite_alternate]"></div>
<div className="glow-blob bg-indigo-600/40 dark:bg-indigo-900/40 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply dark:mix-blend-screen animate-[blob_20s_infinite_alternate]" style={{animationDelay: '2s'}}></div>
</div>
<div className="spotlight-overlay"></div>
<div className="tech-grid bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-purple-500/30"></div>
</div>

<nav className="fixed flex dark:bg-[#0a0a0c]/70 dark:border-white/5 transition-all duration-300 bg-white/70 w-full z-50 border-zinc-200 border-b pt-4 pr-6 pb-4 pl-6 top-0 left-0 backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-2.5 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">
<svg className="w-8 h-8 shrink-0 group-active:scale-95 transition-transform" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad-top" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#d8b4fe"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
<lineargradient id="grad-mid" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#c084fc"></stop>
<stop offset="100%" stop-color="#7e22ce"></stop>
</lineargradient>
<lineargradient id="grad-bot" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#581c87"></stop>
</lineargradient>
</defs>
<ellipse cx="50" cy="74" fill="url(#grad-bot)" rx="40" ry="14"></ellipse>
<ellipse cx="50" cy="56" fill="url(#grad-mid)" rx="40" ry="14"></ellipse>
<ellipse cx="50" cy="38" fill="url(#grad-mid)" rx="40" ry="14"></ellipse>
<ellipse cx="50" cy="20" fill="url(#grad-top)" rx="40" ry="14"></ellipse>
<line stroke="white" stroke-opacity="0.4" strokeWidth="1.5" x1="50" x2="50" y1="6" y2="88"></line>
<circle cx="50" cy="38" fill="white" r="3.5"></circle>
</svg>
<span className="text-2xl tracking-tight font-semibold text-zinc-900 dark:text-white leading-none mt-0.5">
                ThalamOS
            </span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-zinc-100/50 dark:bg-white/5 border-zinc-200 dark:border-white/5">
<a className="px-4 py-1.5 text-sm font-normal rounded-full transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#home">Home</a>
<a className="px-4 py-1.5 text-sm font-normal rounded-full transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#features">Copilot</a>
<a className="px-4 py-1.5 text-sm font-normal rounded-full transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5" href="#dashboard">Dashboard</a>
</div>
<div className="flex items-center gap-3">
<button aria-label="Toggle Theme" className="group theme-toggle-btn w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#111114] text-zinc-600 dark:text-zinc-400 hover:border-purple-500/50 hover:text-purple-500 transition-all shadow-sm" id="theme-toggle">
<i className="w-4 h-4 absolute transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 dark:opacity-0" data-lucide="moon" strokeWidth="1.5"></i>
<i className="w-4 h-4 absolute transition-transform duration-500 rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" data-lucide="sun" strokeWidth="1.5"></i>
</button>
<button className="group dark:bg-white transition-all overflow-hidden hover:bg-zinc-800 dark:hover:bg-zinc-100 dark:text-zinc-950 active:scale-95 text-sm font-normal text-white bg-zinc-900 border-transparent border rounded pt-2 pr-4 pb-2 pl-4 relative shadow-sm" onclick="openAuditModal();window.location.href='https://calendly.com/dbhatti/thalamos'" role="button">
<span className="btn-content-slide">
<span className="btn-text-original">
<span className="md:hidden">Demo</span>
<span className="hidden md:inline">Request Demo</span>
</span>
<span className="btn-text-hover text-purple-400 dark:text-purple-600">
                        Book Now →
                    </span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-32 pb-20 relative items-center" id="home">
<div className="text-center max-w-5xl z-20 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm font-normal mb-6 animate-[fadeIn_0.5s_ease-out_forwards] text-purple-700 dark:text-purple-300 backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-purple-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
</span>
<span className="">AI Practice Management CoPilot</span>
</div>
<h1 className="flex flex-col items-center text-center z-20 mt-2 mb-10 tracking-tight">
<span className="block md:text-7xl dark:text-white leading-[0.95] animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] bg-clip-text dark:from-white dark:via-zinc-200 dark:to-zinc-400 md:pb-3 text-4xl font-semibold text-zinc-900 tracking-tight bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 pb-2 drop-shadow-sm">Intelligence. <span className="dark:text-purple-400 transition-colors duration-500 text-purple-600">Operations.</span> Audits.</span>
<span className="block h-[1.1em] md:text-6xl dark:text-zinc-400/90 md:-mt-2 min-h-[1.1em] text-3xl font-light italic text-zinc-500 tracking-tight font-serif opacity-100 mt-1">
                    built for modern <span className="" id="typewriter-text">clinic</span>
<span className="inline-block w-[2px] h-[0.85em] bg-purple-500/80 ml-1 align-baseline rounded-full relative top-[2px]" id="cursor"></span>
</span>
</h1>
<p className="leading-relaxed md:text-lg dark:text-zinc-400 z-20 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.15s_forwards] text-base font-normal text-zinc-600 opacity-0 max-w-2xl mr-auto mb-10 ml-auto relative">
                ThalamOS is the intelligent practice copilot providing deep operational insights, automated task management, and clinical audits. View your entire practice's health from one unified dashboard.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-20 opacity-0 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">
<button className="md:w-auto block dark:bg-white transition-all hover:bg-zinc-800 dark:hover:bg-zinc-100 active:bg-black dark:active:bg-zinc-200 dark:text-zinc-950 cursor-pointer text-sm font-normal text-white bg-zinc-900 w-full z-10 border-transparent border rounded pt-3 pr-6 pb-3 pl-6 relative shadow-sm" onclick="openAuditModal();window.location.href='https://calendly.com/dbhatti/thalamos'" role="button">
<span className="btn-content-slide">
<span className="btn-text-original">Request Demo</span>
<span className="btn-text-hover text-purple-400 dark:text-purple-600">See the platform</span>
</span>
</button>
<button className="group flex transition-all md:w-auto text-sm font-normal bg-white/80 dark:bg-[#111114] w-full border border-zinc-200 dark:border-white/10 rounded pt-3 pr-5 pb-3 pl-5 gap-x-2 items-center justify-center hover:text-zinc-900 dark:hover:text-white text-zinc-500 dark:text-zinc-400 active:scale-95 shadow-sm backdrop-blur-sm" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
<i className="w-4 h-4 text-zinc-400 group-hover:text-purple-500 transition-colors" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
<span className="">Explore Features</span>
</button>
</div>
</div>

<div className="dashboard-container z-20 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards] opacity-0 w-full max-w-6xl mt-[100px] mr-auto ml-auto pr-4 pl-4 relative">
<div className="dashboard-ui relative w-full rounded-xl bg-white dark:bg-[#0c0c0e] overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">

<div className="h-9 border-b bg-zinc-50 dark:bg-white/[0.02] border-zinc-200 dark:border-white/5 flex items-center px-4 justify-between select-none">
<div className="flex gap-1.5 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-white/20"></div>
</div>
<div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 tracking-widest uppercase flex items-center gap-2">
<i className="w-3 h-3" data-lucide="activity" strokeWidth="1.5"></i>
                        Plexus_Data_Sync_Active
                    </div>
<div className="w-10"></div>
</div>

<div className="relative p-6 md:p-10 min-h-[380px] flex flex-col justify-center bg-zinc-50/50 dark:bg-[#0a0a0c] overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-zinc-200/50 to-transparent dark:from-white/5 bg-[length:24px_24px] opacity-50"></div>
<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4">

<div className="flex-1 flex flex-col items-center group">
<div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-normal">Data Sync</span>
<span className="text-xs font-mono font-normal text-zinc-900 dark:text-white">Live</span>
</div>
</div>
<div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-zinc-200 to-zinc-100 dark:from-white/10 dark:to-white/5 shadow-lg transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#111114] rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
<div className="w-10 h-10 rounded bg-zinc-50 dark:bg-white/5 flex items-center justify-center mb-3 text-zinc-500 dark:text-zinc-400 border border-zinc-100 dark:border-white/10">
<i className="w-5 h-5" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-normal text-zinc-900 dark:text-white mb-1">Practice Data</h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">EHR, Billing, and HR metrics unified securely.</p>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">
<div className="h-[1px] w-full bg-zinc-200 dark:bg-white/10 relative overflow-hidden">
<div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-flow-beam" style={{left: '-50%'}}></div>
</div>
</div>

<div className="flex-[1.4] flex flex-col items-center z-20 group">
<div className="mb-5 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-500/30 shadow-sm shadow-purple-500/10 backdrop-blur-sm">
<span className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-300 font-normal">AI Analysis</span>
</div>
</div>
<div className="relative w-full max-w-[320px] p-[1px] rounded-xl bg-gradient-to-br from-purple-300 via-purple-500 to-indigo-500 shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#0c0c0e] rounded-[11px] p-6 relative overflow-hidden h-full">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl pointer-events-none"></div>
<div className="flex items-center gap-4 mb-5 border-b border-zinc-100 dark:border-white/5 pb-4">
<div className="w-10 h-10 rounded bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-md shrink-0">
<i className="w-5 h-5" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-tight tracking-tight">Practice Copilot</h3>
<p className="text-xs text-purple-600 dark:text-purple-400 font-normal uppercase tracking-wide mt-0.5">Daily Intelligence</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2.5 p-2 rounded bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="check-circle"></i>
<span className="text-sm font-normal text-zinc-700 dark:text-zinc-300">Generates Daily Briefs</span>
</div>
<div className="flex items-center gap-2.5 p-2 rounded bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="check-circle"></i>
<span className="text-sm font-normal text-zinc-700 dark:text-zinc-300">Calculates Health Scores</span>
</div>
<div className="flex items-center gap-2.5 p-2 rounded bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="check-circle"></i>
<span className="text-sm font-normal text-zinc-700 dark:text-zinc-300">Prioritizes Task Lists</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">
<div className="h-[1px] w-full bg-zinc-200 dark:bg-white/10 relative overflow-hidden">
<div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-flow-beam" style={{left: '-50%', animationDelay: '1s'}}></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center group">
<div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/30 shadow-sm backdrop-blur-sm">
<span className="text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-300 font-normal">Insights Delivered</span>
</div>
</div>
<div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-indigo-400 to-indigo-600 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)] transition-transform md:group-hover:scale-105 duration-300">
<div className="bg-white dark:bg-[#111114] rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
<div className="w-10 h-10 rounded bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-3 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-normal text-zinc-900 dark:text-white mb-1">Executive Dashboard</h3>
<p className="dark:text-indigo-400/80 leading-snug text-xs font-normal text-indigo-700">Alerts, Daily and weekly Audits, and operational KPIs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="relative py-24 bg-transparent overflow-hidden border-t border-zinc-200 dark:border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-normal text-zinc-900 dark:text-white tracking-tight mb-4">
                    The ThalamOS Architecture
                </h2>
<p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A comprehensive framework designed specifically to organize the complex daily operations of medical practices.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-xl border border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all relative group shadow-sm">
<div className="text-4xl font-normal text-zinc-100 dark:text-white/5 absolute right-6 top-6 transition-colors">01</div>
<div className="w-10 h-10 rounded bg-zinc-100 dark:bg-white/10 flex items-center justify-center mb-6 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
<i className="w-5 h-5" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Unify Operations</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed">
                        Connect HR, contract lifecycles, billing data, and EHR metrics into a single, secure environment, eliminating siloed information across locations.
                    </p>
</div>
<div className="p-8 rounded-xl border border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all relative group shadow-sm">
<div className="text-4xl font-normal text-zinc-100 dark:text-white/5 absolute right-6 top-6 transition-colors">02</div>
<div className="w-10 h-10 rounded bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
<i className="w-5 h-5" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Intelligent Daily Briefs</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed">
                        The Practice Copilot analyzes overnight inputs to generate customized morning briefs, highlighting volume trends, collection rates, and critical alerts.
                    </p>
</div>
<div className="p-8 rounded-xl border border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] hover:border-zinc-300 dark:hover:bg-white/[0.04] transition-all relative group shadow-sm">
<div className="text-4xl font-normal text-zinc-100 dark:text-white/5 absolute right-6 top-6 transition-colors">03</div>
<div className="w-10 h-10 rounded bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
<i className="w-5 h-5" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm text-zinc-900 dark:text-white font-medium mb-2 tracking-tight">Clinical Audits &amp; Tasks</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed">
                        Automatically surface open encounters, pending orders, and no-show statistics while generating a prioritized daily task list for your administration.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-transparent border-t border-zinc-200 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
<div className="w-full max-w-2xl bg-white dark:bg-[#161618] border border-zinc-200 dark:border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl dark:shadow-none">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="flex flex-col gap-4 relative z-10">

<label className="cursor-pointer group flex items-center justify-between p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] backdrop-blur-sm hover:bg-zinc-100/50 dark:hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 shadow-sm dark:shadow-none">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-1">Email automation</span>
<span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">Smart personalization &amp; timing</span>
</div>
</div>

<div className="relative shrink-0">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-[42px] h-6 bg-zinc-200 dark:bg-white/10 rounded-full peer peer-checked:bg-purple-500 dark:peer-checked:bg-[#a855f7] transition-colors duration-300"></div>
<div className="absolute inset-y-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[18px] shadow-sm"></div>
</div>
</label>

<label className="cursor-pointer group flex items-center justify-between p-4 rounded-2xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-white/[0.03] backdrop-blur-sm hover:bg-zinc-100/50 dark:hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 shadow-sm dark:shadow-none">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-1">Customer journey mapping</span>
<span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">AI-driven experience optimization</span>
</div>
</div>

<div className="relative shrink-0">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-[42px] h-6 bg-zinc-200 dark:bg-white/10 rounded-full peer peer-checked:bg-purple-500 dark:peer-checked:bg-[#a855f7] transition-colors duration-300"></div>
<div className="absolute inset-y-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-[18px] shadow-sm"></div>
</div>
</label>

<label className="cursor-pointer group flex items-center justify-between p-4 rounded-2xl border border-zinc-200/50 dark:border-white/5 bg-white dark:bg-white/[0.01] backdrop-blur-sm hover:bg-zinc-50 dark:hover:bg-white/[0.03] transition-colors">
<div className="flex items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 text-zinc-400 dark:text-zinc-500">
<i className="w-5 h-5" data-lucide="layout-panel-top" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-zinc-600 dark:text-zinc-300 tracking-tight leading-tight mb-1">Advanced analytics</span>
<span className="text-sm text-zinc-400 dark:text-zinc-500 font-normal">Real-time performance insights</span>
</div>
</div>

<div className="relative shrink-0">
<input className="sr-only peer" type="checkbox"/>
<div className="w-[42px] h-6 bg-zinc-200 dark:bg-white/10 rounded-full peer transition-colors duration-300"></div>
<div className="absolute inset-y-1 left-1 w-4 h-4 bg-zinc-400 dark:bg-zinc-400 rounded-full transition-transform duration-300 shadow-sm"></div>
</div>
</label>
</div>

<div className="mt-14 relative z-10 pr-8">
<h3 className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-white tracking-tight mb-3">Smart Process Automation</h3>
<p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                        Transform manual workflows into intelligent processes that learn, adapt, and continuously improve performance.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent border-zinc-200 dark:border-white/5 border-t py-32 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-normal tracking-tight mb-4 text-zinc-900 dark:text-white">
                    Built for modern medical practices.
                </h2>
<p className="text-sm md:text-base leading-relaxed font-normal text-zinc-600 dark:text-zinc-400">
                    Replace fragmented tools with a singular, intelligent platform that oversees the complete health of your operational workflow.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#111114]/80 p-8 shadow-sm transition-all duration-300 hover:shadow-md md:col-span-2 lg:col-span-8 lg:row-span-2">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
<i className="w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">Automated Daily Briefs</h3>
</div>
<p className="mb-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
                            Start your day with absolute clarity. ThalamOS analyzes practice data across all locations to deliver a comprehensive brief. It flags contract expirations, highlights patient volume targets, and prioritizes your attention instantly.
                        </p>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-auto">
<div className="rounded border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/5 dark:bg-white/5 dark:text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="file-text" strokeWidth="1.5"></i>
                                Morning Reports
                            </div>
<div className="rounded border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/5 dark:bg-white/5 dark:text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="alert-circle" strokeWidth="1.5"></i>
                                Critical Alerts
                            </div>
<div className="rounded border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/5 dark:bg-white/5 dark:text-zinc-300 flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="clipboard-list" strokeWidth="1.5"></i>
                                Prioritized Tasks
                            </div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#111114]/80 p-8 shadow-sm transition-all duration-300 hover:shadow-md md:col-span-2 lg:col-span-4 lg:row-span-2">
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">Practice Health Score</h3>
</div>
<p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            A dynamic, composite metric reflecting your operational vitality. Combines revenue, collection rates, and patient volumes into a single source of truth.
                        </p>
<div className="mt-auto p-4 rounded bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center gap-4">
<div className="w-14 h-14 rounded-full border-4 border-indigo-500 flex items-center justify-center text-lg font-mono font-medium text-zinc-900 dark:text-white">
                                84
                            </div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Composite Score</span>
<span className="text-sm text-indigo-600 dark:text-indigo-400 font-normal">Trending Positive ↑</span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#111114]/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-6">
<div className="flex items-center gap-4 mb-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-zinc-100 text-zinc-600 dark:bg-white/10 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900 dark:text-white">Clinical Audits</h3>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Monitor unclosed encounters, pending lab orders, and no-show rates segmented by location and provider.
                    </p>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#111114]/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-6">
<div className="flex items-center gap-4 mb-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-zinc-100 text-zinc-600 dark:bg-white/10 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium tracking-tight text-zinc-900 dark:text-white">Contract &amp; HR Tracking</h3>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Never miss a renewal. Automated alerts for physician contracts, performance reviews, and operational milestones.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-zinc-50/50 dark:bg-[#0c0c0e] border-y border-zinc-200 dark:border-white/5 overflow-hidden" id="dashboard">
<div className="max-w-[90rem] mx-auto px-6 relative z-10 flex flex-col items-center">
<div className="text-center mb-16 max-w-2xl">
<span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-4 block">Platform View</span>
<h2 className="text-3xl md:text-4xl font-normal text-zinc-900 dark:text-white tracking-tight mb-4">Command your entire operation.</h2>
<p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                    A prioritized, high-fidelity view of what demands your attention today.
                </p>
</div>

<div className="w-full bg-white dark:bg-[#0f0f11] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-sans">

<div className="h-14 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 justify-between bg-white dark:bg-[#0f0f11]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded flex items-center justify-center font-semibold text-sm">P</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-none">PlexusOS</h3>
<span className="text-xs text-zinc-500">Comprehensive Neurology Services</span>
</div>
</div>
<div className="flex items-center gap-5">

<div className="relative hidden sm:block">
<select className="appearance-none bg-zinc-50 dark:bg-[#161618] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors cursor-pointer">
<option>All Sites</option>
<option>Frederick</option>
<option>Hagerstown</option>
</select>
<i className="w-4 h-4 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="relative cursor-pointer">
<i className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white dark:ring-[#0f0f11] text-[9px] font-semibold text-white">3</span>
</div>
<div className="flex items-center gap-2 cursor-pointer border-l pl-4 border-zinc-200 dark:border-zinc-800">
<div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-600 dark:text-zinc-400">SR</div>
<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hidden sm:block">Dr. Rafiq</span>
</div>
</div>
</div>

<div className="flex items-center gap-8 px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0f0f11] overflow-x-auto custom-scrollbar">
<div className="flex items-center gap-2 py-3 border-b-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white text-sm font-medium whitespace-nowrap cursor-pointer">
<i className="w-4 h-4" data-lucide="calendar"></i> Daily Ops
                    </div>
<div className="flex items-center gap-2 py-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 text-sm font-normal whitespace-nowrap cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Overview
                    </div>
<div className="flex items-center gap-2 py-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 text-sm font-normal whitespace-nowrap cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="dollar-sign"></i> Financial
                    </div>
<div className="flex items-center gap-2 py-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 text-sm font-normal whitespace-nowrap cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="users"></i> People &amp; HR <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs px-1.5 rounded ml-1">11</span>
</div>
<div className="flex items-center gap-2 py-3 border-b-2 border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 text-sm font-normal whitespace-nowrap cursor-pointer transition-colors">
<i className="w-4 h-4" data-lucide="file-text"></i> Contracts <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs px-1.5 rounded ml-1">7</span>
</div>
</div>

<div className="dark:bg-[#131315] flex overflow-x-auto custom-scrollbar dark:border-zinc-800 bg-zinc-50/50 border-zinc-200 border-b pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3">
<div className="flex items-center gap-3 shrink-0 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 px-3 py-1.5 rounded-md">
<span className="text-xl font-semibold text-red-600 dark:text-red-400">37</span>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 dark:text-zinc-200">Practice Health</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">Composite Score</span>
</div>
</div>
<div className="flex flex-col justify-center shrink-0 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-amber-700 dark:text-amber-500">$4.8M</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">YTD Revenue</span>
</div>
<div className="flex flex-col justify-center shrink-0 bg-red-50/50 dark:bg-red-950/10 border border-red-100/50 dark:border-red-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-red-600 dark:text-red-400">3.2%</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">YoY Revenue</span>
</div>
<div className="flex flex-col justify-center shrink-0 bg-red-50/50 dark:bg-red-950/10 border border-red-100/50 dark:border-red-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-red-600 dark:text-red-400">-3.4%</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">MoM Revenue</span>
</div>
<div className="flex flex-col justify-center shrink-0 bg-red-50/50 dark:bg-red-950/10 border border-red-100/50 dark:border-red-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-red-600 dark:text-red-400">$-537K</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">YTD Net</span>
</div>
<div className="flex flex-col justify-center shrink-0 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-amber-700 dark:text-amber-500">76%</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">Collection %</span>
</div>
<div className="flex flex-col justify-center shrink-0 bg-red-50/50 dark:bg-red-950/10 border border-red-100/50 dark:border-red-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-red-600 dark:text-red-400">44%</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">AR Current %</span>
</div>
<div className="flex flex-col justify-center shrink-0 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/20 px-4 py-1.5 rounded-md">
<span className="text-sm font-medium text-amber-700 dark:text-amber-500">52</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide">Pt Volume/Day</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-zinc-50/30 dark:bg-transparent">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="bg-white dark:bg-[#161618] rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
<div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<h4 className="text-sm font-medium text-zinc-900 dark:text-white">Daily Brief</h4>
<p className="text-xs text-zinc-500">Monday, Feb 17, 2025 · Frederick: 38°F, partly cloudy</p>
</div>
<div className="flex items-center gap-3 text-xs bg-zinc-50 dark:bg-[#0f0f11] px-3 py-1.5 rounded border border-zinc-100 dark:border-zinc-800">
<span className="text-zinc-500">Today's Patients:</span>
<span className="text-zinc-700 dark:text-zinc-300">FRD: <span className="font-medium">62</span></span>
<span className="text-zinc-700 dark:text-zinc-300">HGR: <span className="font-medium">18</span></span>
<span className="text-zinc-700 dark:text-zinc-300">SS: <span className="font-medium">12</span></span>
<span className="text-zinc-700 dark:text-zinc-300">HOSP: <span className="font-medium">22</span></span>
<span className="text-purple-600 dark:text-purple-400 font-medium border-l border-zinc-200 dark:border-zinc-700 pl-3">Total: 114</span>
</div>
</div>
<div className="p-5 flex flex-col gap-3">
<div className="flex items-start gap-3 bg-red-50/50 dark:bg-red-950/10 p-3 rounded border border-red-100 dark:border-red-900/30">
<i className="w-4 h-4 text-red-500 shrink-0 mt-0.5" data-lucide="alert-triangle"></i>
<p className="text-sm text-red-800 dark:text-red-300">Connor Thompson PA-C contract expires in 89 days — renewal draft needed this week</p>
</div>
<div className="flex items-start gap-3 bg-amber-50/50 dark:bg-amber-950/10 p-3 rounded border border-amber-100/50 dark:border-amber-900/20">
<i className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" data-lucide="alert-circle"></i>
<p className="text-sm text-amber-800 dark:text-amber-300">Hagerstown volume hit 22 pts/day last Thursday — trending toward break-even</p>
</div>
<div className="flex items-start gap-3 bg-purple-50/50 dark:bg-purple-950/10 p-3 rounded border border-purple-100/50 dark:border-purple-900/20">
<i className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-purple-800 dark:text-purple-300">Q4 collection rate improved to 78% from 74% — billing team adjustments working</p>
</div>
<div className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-800/20 p-3 rounded border border-zinc-200 dark:border-zinc-800/50">
<i className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-zinc-700 dark:text-zinc-300">Legend EHR maintenance window scheduled Thursday 10pm-2am EST</p>
</div>
</div>
</div>

<div className="bg-white dark:bg-[#161618] rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm flex-1">
<div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800/50">
<h4 className="text-sm font-medium text-zinc-900 dark:text-white">Task List</h4>
</div>
<div className="p-5 flex flex-col gap-6">

<div className="">
<div className="flex items-center gap-2 mb-3 px-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<h5 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">High Priority <span className="font-normal">(4)</span></h5>
</div>
<div className="flex flex-col gap-2">

<label className="custom-checkbox flex items-start gap-3 p-3 rounded border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/5 cursor-pointer group hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
<input className="sr-only" type="checkbox"/>
<div className="relative w-4 h-4 mt-0.5 rounded-sm border border-red-300 dark:border-red-800 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-red-600 opacity-0 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-1.5">Review Connor Thompson PA-C renewal terms</span>
<div className="flex items-center gap-2 text-xs">
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#0f0f11] text-purple-600 dark:text-purple-400 border border-zinc-200 dark:border-zinc-800">Contract</span>
<span className="text-zinc-500">Due: Feb 21</span>
<span className="text-zinc-300 dark:text-zinc-700">•</span>
<span className="text-zinc-500">Dr. Rafiq</span>
</div>
</div>
</label>

<label className="custom-checkbox flex items-start gap-3 p-3 rounded border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/5 cursor-pointer group hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
<input className="sr-only" type="checkbox"/>
<div className="relative w-4 h-4 mt-0.5 rounded-sm border border-red-300 dark:border-red-800 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-red-600 opacity-0 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-1.5">Finalize Hagerstown volume ramp plan — target 27 pts/day</span>
<div className="flex items-center gap-2 text-xs">
<span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#0f0f11] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">Operations</span>
<span className="text-zinc-500">Due: Feb 24</span>
<span className="text-zinc-300 dark:text-zinc-700">•</span>
<span className="text-zinc-500">Admin</span>
</div>
</div>
</label>

<label className="custom-checkbox flex items-start gap-3 p-3 rounded border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/5 cursor-pointer group hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
<input className="sr-only" type="checkbox"/>
<div className="relative w-4 h-4 mt-0.5 rounded-sm border border-red-300 dark:border-red-800 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-red-600 opacity-0 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-1.5">Review Corey Ward productivity (64% collection rate)</span>
<div className="flex items-center gap-2 text-xs">
<span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30">Financial</span>
<span className="text-zinc-500">Due: Feb 19</span>
<span className="text-zinc-300 dark:text-zinc-700">•</span>
<span className="text-zinc-500">Admin</span>
</div>
</div>
</label>
</div>
</div>

<div className="">
<div className="flex items-center gap-2 mb-3 px-1">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<h5 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Low Priority <span className="font-normal bg-zinc-100 dark:bg-zinc-800 px-1 rounded ml-1">(4)</span></h5>
</div>
<div className="flex flex-col gap-2">

<label className="custom-checkbox flex items-start gap-3 p-3 rounded border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#161618] cursor-pointer group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
<input className="sr-only" type="checkbox"/>
<div className="relative w-4 h-4 mt-0.5 rounded-sm border border-zinc-300 dark:border-zinc-700 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-purple-500 opacity-0 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-1.5">Update credentialing docs for new NP candidate</span>
<div className="flex items-center gap-2 text-xs">
<span className="px-2 py-0.5 rounded-full bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">HR</span>
<span className="text-zinc-500">Due: Mar 5</span>
<span className="text-zinc-300 dark:text-zinc-700">•</span>
<span className="text-zinc-500">HR</span>
</div>
</div>
</label>

<label className="custom-checkbox flex items-start gap-3 p-3 rounded border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#161618] cursor-pointer group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
<input className="sr-only" type="checkbox"/>
<div className="relative w-4 h-4 mt-0.5 rounded-sm border border-zinc-300 dark:border-zinc-700 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-purple-500 opacity-0 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-1.5">Evaluate EEG lab equipment maintenance schedule</span>
<div className="flex items-center gap-2 text-xs">
<span className="px-2 py-0.5 rounded-full bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">Operations</span>
<span className="text-zinc-500">Due: Mar 10</span>
<span className="text-zinc-300 dark:text-zinc-700">•</span>
<span className="text-zinc-500">Admin</span>
</div>
</div>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col h-full">
<div className="bg-white dark:bg-[#161618] rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm h-full flex flex-col">
<div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800/50 flex flex-col gap-1">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-zinc-900 dark:text-white">Yesterday's Audit</h4>
<span className="text-xs text-zinc-500">Sunday, Feb 16</span>
</div>
<span className="text-xs text-zinc-400">89 total encounters</span>
</div>
<div className="p-5 flex-1 flex flex-col gap-8 overflow-y-auto custom-scrollbar">

<div>
<h5 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Encounters Still Open</h5>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0f0f11]">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">Dr. Burke</span>
<span className="text-xs text-zinc-500">Frederick</span>
</div>
<span className="text-lg font-semibold text-zinc-900 dark:text-white">8</span>
</div>
<div className="flex items-center justify-between p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0f0f11]">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">Dr. Afriyie</span>
<span className="text-xs text-zinc-500">Frederick</span>
</div>
<span className="text-lg font-semibold text-zinc-900 dark:text-white">5</span>
</div>
<div className="flex items-center justify-between p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0f0f11]">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">C. Thompson</span>
<span className="text-xs text-zinc-500">Hagerstown</span>
</div>
<span className="text-lg font-semibold text-zinc-900 dark:text-white">3</span>
</div>
<div className="flex items-center justify-between p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#0f0f11]">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">J. Caw</span>
<span className="text-xs text-zinc-500">Hospitals</span>
</div>
<span className="text-lg font-semibold text-zinc-900 dark:text-white">4</span>
</div>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">Orders Pending</h5>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center justify-between p-3 rounded border border-purple-100 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/10">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">Lab Orders</span>
<span className="text-xs text-zinc-500">Oldest: 3 days</span>
</div>
<span className="text-lg font-semibold text-purple-600 dark:text-purple-400">12</span>
</div>
<div className="flex items-center justify-between p-3 rounded border border-purple-100 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/10">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">Imaging</span>
<span className="text-xs text-zinc-500">Oldest: 2 days</span>
</div>
<span className="text-lg font-semibold text-purple-600 dark:text-purple-400">6</span>
</div>
<div className="flex items-center justify-between p-3 rounded border border-purple-100 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/10">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">Referrals</span>
<span className="text-xs text-zinc-500">Oldest: 5 days</span>
</div>
<span className="text-lg font-semibold text-purple-600 dark:text-purple-400">9</span>
</div>
<div className="flex items-center justify-between p-3 rounded border border-purple-100 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/10">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900 dark:text-white">Rx Refills</span>
<span className="text-xs text-zinc-500">Oldest: 1 day</span>
</div>
<span className="text-lg font-semibold text-purple-600 dark:text-purple-400">4</span>
</div>
</div>
</div>

<div className="">
<h5 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">No-Shows by Location</h5>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4">
<span className="text-sm text-zinc-700 dark:text-zinc-300 w-24 shrink-0">Frederick</span>
<div className="flex-1 h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex items-center">
<div className="h-full bg-amber-500 rounded-full" style={{width: '11%'}}></div>
</div>
<div className="text-xs text-zinc-500 w-10 text-right">7/62</div>
<div className="text-sm font-semibold text-zinc-900 dark:text-white w-8 text-right">11%</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-zinc-700 dark:text-zinc-300 w-24 shrink-0">Hagerstown</span>
<div className="flex-1 h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex items-center">
<div className="h-full bg-red-500 rounded-full" style={{width: '17%'}}></div>
</div>
<div className="text-xs text-zinc-500 w-10 text-right">3/18</div>
<div className="text-sm font-semibold text-red-600 dark:text-red-400 w-8 text-right">17%</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-zinc-700 dark:text-zinc-300 w-24 shrink-0">Silver Spring</span>
<div className="flex-1 h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex items-center">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '8%'}}></div>
</div>
<div className="text-xs text-zinc-500 w-10 text-right">1/12</div>
<div className="text-sm font-semibold text-zinc-900 dark:text-white w-8 text-right">8%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 dark:border-white/5 py-16">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white mb-6">Gain absolute control of your practice today.</h2>
<button className="dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors cursor-pointer text-sm font-medium text-white bg-zinc-900 rounded mb-12 pt-2.5 pr-6 pb-2.5 pl-6" onclick="openAuditModal();window.location.href='https://calendly.com/dbhatti/thalamos'" role="button">Request a Demo</button>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200 dark:border-white/5 text-sm text-zinc-500">
<p>© 2025 ThalamOS. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-900 dark:hover:text-white" href="#">Privacy</a>
<a className="hover:text-zinc-900 dark:hover:text-white" href="#">Terms</a>
<a className="hover:text-zinc-900 dark:hover:text-white" href="#">HIPAA Compliance</a>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="audit-modal">
<div className="absolute inset-0 bg-zinc-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeAuditModal()"></div>
<div className="relative w-full max-w-lg bg-white dark:bg-[#111114] rounded-xl shadow-2xl border border-zinc-200 dark:border-white/10 overflow-hidden transform transition-all duration-300 scale-95 opacity-0 flex flex-col max-h-[90vh]" id="audit-modal-content">
<div className="px-5 py-4 border-b border-zinc-100 dark:border-white/5 flex items-center justify-between">
<h3 className="font-medium text-base text-zinc-900 dark:text-white">Request Demo</h3>
<button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" onclick="closeAuditModal()">
<i className="w-5 h-5" data-lucide="x-circle" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-6 overflow-y-auto custom-scrollbar flex-1">
<form className="space-y-4" id="demo-form" onsubmit="event.preventDefault();">
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Practice Name *</label>
<input className="w-full px-3 py-2 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-white/10 rounded text-sm focus:outline-none focus:border-purple-500/50 transition-colors text-zinc-900 dark:text-white" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address *</label>
<input className="w-full px-3 py-2 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-white/10 rounded text-sm focus:outline-none focus:border-purple-500/50 transition-colors text-zinc-900 dark:text-white" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Number of Providers</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-zinc-50 dark:bg-[#0c0c0e] border border-zinc-200 dark:border-white/10 rounded text-sm focus:outline-none focus:border-purple-500/50 transition-colors text-zinc-900 dark:text-white appearance-none cursor-pointer">
<option>1-5 Providers</option>
<option>6-20 Providers</option>
<option>21+ Providers</option>
</select>
<i className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="pt-4">
<button className="w-full py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-sm font-medium rounded hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors" onclick="closeAuditModal()" type="submit">
                            Submit Request
                        </button>
</div>
</form>
</div>
</div>
</div>

    </>
  );
}
