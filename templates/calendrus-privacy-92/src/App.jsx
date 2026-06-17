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
sky: { 500: '#0EA5E9', 600: '#0284C7', 900: '#0C4A6E' },
slate: { 950: '#020617', 900: '#0F172A' }
}
}
}
};



        lucide.createIcons();
        
        const observerOptions = { threshold: 0.1, rootMargin: "0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.animationPlayState = "running";
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".animate-enter").forEach((el) => {
                el.style.opacity = "0"; 
                observer.observe(el);
            });
            // Initial render state for the interactive calendar
            updateCalendarView('reality');
        });

        // Interactive Calendar Logic
        const eventData = {
            'event-1': { 
                reality: { title: "Q3 Board Strategy", desc: "Conf Room A • 12 Attendees", bg: "bg-blue-50 border-blue-500 text-blue-900", icon: true },
                ea: { title: "Q3 Board Strategy", desc: "Conf Room A • 12 Attendees", bg: "bg-blue-50 border-blue-500 text-blue-900", icon: true },
                team: { title: "Busy", desc: "", bg: "bg-slate-100 border-slate-300 text-slate-400", icon: false },
                partner: { title: "Busy", desc: "", bg: "bg-slate-100 border-slate-300 text-slate-400", icon: false }
            },
            'event-2': { 
                reality: { title: "Dentist Appointment", desc: "Dr. Smith • Downtown", bg: "bg-green-50 border-green-500 text-green-900", icon: true },
                ea: { title: "Personal Appointment", desc: "Details Hidden", bg: "bg-slate-100 border-slate-300 text-slate-500", icon: false },
                team: { title: "Busy", desc: "", bg: "bg-slate-100 border-slate-300 text-slate-400", icon: false },
                partner: { title: "Busy", desc: "", bg: "bg-slate-100 border-slate-300 text-slate-400", icon: false }
            },
            'event-3': { 
                reality: { title: "Product Review", desc: "Zoom • Engineering Team", bg: "bg-purple-50 border-purple-500 text-purple-900", icon: true },
                ea: { title: "Product Review", desc: "Zoom", bg: "bg-purple-50 border-purple-500 text-purple-900", icon: true },
                team: { title: "Product Review", desc: "Zoom", bg: "bg-purple-50 border-purple-500 text-purple-900", icon: true },
                partner: { title: "Busy", desc: "", bg: "bg-slate-100 border-slate-300 text-slate-400", icon: false }
            }
        };

        function updateCalendarView(viewName) {
            // Update Tab Styles
            const tabs = ['reality', 'rules', 'ghost'];
            tabs.forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                if (t === viewName) {
                    btn.classList.remove('tab-inactive', 'text-slate-500');
                    btn.classList.add('tab-active');
                } else {
                    btn.classList.add('tab-inactive', 'text-slate-500');
                    btn.classList.remove('tab-active');
                }
            });

            // Handle Persona Container Visibility
            const personaContainer = document.getElementById('persona-container');
            const previewLabel = document.getElementById('preview-label');
            
            let currentPersona = document.querySelector('input[name="persona"]:checked').value;
            
            if (viewName === 'reality') {
                personaContainer.style.opacity = '0.4';
                personaContainer.style.pointerEvents = 'none';
                previewLabel.textContent = "YOUR VIEW";
                applyEvents('reality');
            } else if (viewName === 'ghost') {
                personaContainer.style.opacity = '0.4';
                personaContainer.style.pointerEvents = 'none';
                previewLabel.textContent = "PUBLIC VIEW (GHOST)";
                applyEvents('ghost');
            } else {
                // Rules view
                personaContainer.style.opacity = '1';
                personaContainer.style.pointerEvents = 'auto';
                previewLabel.textContent = "VIEW AS: " + currentPersona.toUpperCase();
                applyEvents(currentPersona);
            }
        }

        function applyEvents(mode) {
            ['event-1', 'event-2', 'event-3'].forEach(id => {
                const el = document.getElementById(id);
                const titleEl = el.querySelector('.title-text');
                const descEl = el.querySelector('.desc-text');
                const iconContainer = el.querySelector('.icon-container');
                
                let data;
                
                if (mode === 'ghost') {
                    data = { title: "Busy", desc: "", bg: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-slate-100 border-slate-200 text-slate-400 grayscale", icon: false };
                } else {
                    data = eventData[id][mode];
                }

                // Reset classes
                el.className = `event-card absolute rounded-xl p-4 border-l-4 ${data.bg}`;
                if (id === 'event-1') el.classList.add('top-0', 'w-full', 'h-[90px]');
                if (id === 'event-2') el.classList.add('top-[110px]', 'w-[80%]', 'h-[70px]');
                if (id === 'event-3') el.classList.add('top-[200px]', 'w-full', 'h-[80px]');

                // Update text content
                titleEl.textContent = data.title;
                descEl.textContent = data.desc;
                
                // Toggle Icon
                iconContainer.style.opacity = data.icon ? '1' : '0';
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
      

<nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-12 glass-nav">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-sky-900/20 transform hover:scale-105 transition-transform">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="font-display text-sm font-bold tracking-tight text-white">CALENDRUS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Ghost Mode</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Security</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Sign In</a>
<button className="bg-sky-500 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-sky-400 transition-all hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] flex items-center gap-2">
<span>Join Waitlist</span>
<svg className="lucide lucide-arrow-right w-3 h-3 text-white" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-[#020617] lg:h-screen lg:min-h-[800px] lg:pt-0 lg:pb-0">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950/50 to-slate-950"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

<div className="hidden lg:block absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-enter"></div>
<div className="hidden lg:block absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-enter delay-200"></div>

<div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center relative z-10">

<div className="flex flex-col gap-8 max-w-xl lg:max-w-2xl lg:justify-center">
<div className="animate-enter delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide text-slate-300">Private calendar consolidation for executives</span>
</div>
</div>
<div className="animate-enter delay-200">
<h1 className="text-5xl lg:text-7xl xl:text-8xl font-display font-semibold tracking-tight leading-[1.05] text-white mb-6">
                        One calendar they can see. 
                        <span className="gradient-text">A dozen they can’t.</span>
</h1>
<p className="text-base lg:text-lg text-slate-400 max-w-lg leading-relaxed">
                        Calendrus unifies all your calendars into one privacy-safe view, so you can share availability across organizations without exposing sensitive meeting details.
                    </p>
</div>
<div className="animate-enter delay-300">
<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-4">
<button className="bg-sky-500 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-sky-400 transition-all shadow-xl shadow-sky-900/20 hover:shadow-sky-500/20 flex items-center gap-2 group hover:-translate-y-1">
<span>Join the waitlist</span>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/90" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900/50 hover:bg-slate-800 hover:text-white transition-all border border-slate-800 hover:border-slate-700 flex items-center gap-2 group">
<span>View product demo</span>
<svg className="lucide lucide-play-circle w-4 h-4 text-slate-500 group-hover:text-white transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</button>
</div>
<p className="text-[10px] text-slate-500 font-medium">No spam. We’ll email you when your account is ready.</p>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] lg:h-auto lg:w-full animate-enter delay-300 perspective-[1000px]">
<div className="absolute inset-0 bg-[#0F172A] rounded-3xl border border-slate-800 shadow-2xl shadow-black/50 overflow-hidden flex flex-col" style={{animation: 'floatInfinite 8s ease-in-out infinite'}}>
<div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-md">
<div className="flex items-center gap-4">
<div className="flex gap-1.5 group cursor-pointer">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px bg-slate-800"></div>
<span className="text-xs font-bold text-slate-400 tracking-tight">UNIFIED VIEW</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-slate-800 rounded-full p-1 pl-3 pr-1 border border-slate-700">
<span className="text-[10px] font-bold text-slate-300">Ghost Mode</span>
<div className="h-5 w-9 bg-sky-500 rounded-full relative flex items-center shadow-inner">
<div className="h-3.5 w-3.5 bg-white rounded-full absolute right-1 shadow-sm"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 p-6 relative bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]">
<div className="absolute left-6 top-6 bottom-6 w-12 flex flex-col justify-between text-[10px] text-slate-600 font-mono font-medium">
<span>09:00</span><span>10:00</span><span>11:00</span><span className="">12:00</span><span className="">13:00</span><span>14:00</span>
</div>
<div className="ml-14 h-full relative space-y-4">
<div className="w-full h-20 bg-slate-800/80 border-l-2 border-l-blue-500 rounded-r-md p-3 flex items-start gap-3 backdrop-blur-sm">
<div>
<div className="text-xs font-bold text-slate-200">Board Meeting</div>
<div className="text-[10px] text-slate-500 font-medium mt-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Corporate Cal
                                    </div>
</div>
</div>
<div className="w-4/5 ml-auto h-24 bg-slate-900 border border-slate-800 rounded-xl p-1 relative overflow-hidden group shadow-inner">
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="flex items-center gap-2 text-slate-400 bg-slate-800/90 px-3 py-1.5 rounded-full shadow-lg border border-slate-700 backdrop-blur-sm">
<svg className="lucide lucide-eye-off w-3.5 h-3.5 text-sky-400" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
<span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400">Busy</span>
</div>
</div>
<div className="p-3 opacity-20 filter blur-[4px]">
<div className="w-1.5 h-full bg-purple-500 rounded-full absolute left-3 top-3 bottom-3"></div>
<div className="ml-5 h-3 w-32 bg-slate-600 rounded mb-2"></div>
<div className="ml-5 h-2 w-20 bg-slate-700 rounded"></div>
</div>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/10 to-transparent h-10 w-full" style={{animation: 'scanline-enhanced 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
</div>
<div className="w-2/3 h-16 bg-slate-800/80 border-l-2 border-l-green-500 rounded-r-md p-3 flex items-start gap-3 backdrop-blur-sm">
<div>
<div className="text-xs font-bold text-slate-200">Doctor's Appt</div>
<div className="text-[10px] text-slate-500 font-medium mt-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Personal Cal
                                    </div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur p-4 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 flex items-center gap-3 animate-enter delay-500 z-20 hover:scale-105 transition-transform cursor-default">
<div className="bg-green-500/10 text-green-500 border border-green-500/20 p-2.5 rounded-xl">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="text-xs font-bold text-white">Details Protected</div>
<div className="text-[10px] text-slate-400 font-medium">Redaction Active</div>
</div>
</div>
<div className="absolute top-10 -right-8 bg-slate-900/90 backdrop-blur p-3 rounded-2xl shadow-2xl shadow-black/50 border border-slate-800 flex flex-col items-center justify-center gap-1 animate-enter delay-500 z-20 hover:scale-105 transition-transform w-24">
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Synced</div>
<div className="flex -space-x-2 my-1">
<div className="w-5 h-5 rounded-full bg-blue-500 border border-slate-900"></div>
<div className="w-5 h-5 rounded-full bg-purple-500 border border-slate-900"></div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-slate-900"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<p className="text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-8 opacity-0 animate-enter">Trusted by privacy-conscious executives at</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-0 animate-enter delay-100">
<span className="font-display font-bold text-xl tracking-tighter text-slate-300 hover:text-slate-800 transition-colors cursor-default">ACME<span className="text-sky-500">CORP</span></span>
<span className="font-display font-bold text-xl tracking-tighter text-slate-300 hover:text-slate-800 transition-colors cursor-default">STRATOS</span>
<span className="font-display font-bold text-xl tracking-tighter text-slate-300 hover:text-slate-800 transition-colors cursor-default">VELOCITY</span>
<span className="font-display font-bold text-xl tracking-tighter text-slate-300 hover:text-slate-800 transition-colors cursor-default">NEXUS</span>
<span className="font-display font-bold text-xl tracking-tighter text-slate-300 hover:text-slate-800 transition-colors cursor-default">GLOBEX</span>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFB] overflow-hidden relative border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center opacity-0 animate-enter">
<h2 className="text-3xl font-display font-semibold tracking-tight text-slate-900">Loved by leaders who value discretion</h2>
<p className="text-sm text-slate-500 mt-4 max-w-2xl mx-auto">See why privacy-first executives choose Calendrus to manage their hybrid lives.</p>
</div>
<div className="marquee-container">
<div className="marquee-content gap-8 pl-8">

<div className="flex gap-8 items-stretch">

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "The ghost mode is brilliant. Clients see I'm busy, but they don't see *why*. It maintains professional boundaries effortlessly without offending anyone."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">MT</div>
<div>
<div className="text-xs font-bold text-slate-900">Mark T.</div>
<div className="text-[10px] text-slate-500 font-medium">Founder, Apex</div>
</div>
</div>
</div>

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "Finally, I can merge my personal iCloud and work Outlook without my assistant seeing my medical appointments. A complete lifesaver for my sanity."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600">SJ</div>
<div>
<div className="text-xs font-bold text-slate-900">Sarah Jenkins</div>
<div className="text-[10px] text-slate-500 font-medium">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "Zero-knowledge architecture was a requirement for our SecOps team. Calendrus was the only tool that passed the rigorous audit."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">AM</div>
<div>
<div className="text-xs font-bold text-slate-900">Alex M.</div>
<div className="text-[10px] text-slate-500 font-medium">CTO, Fortify</div>
</div>
</div>
</div>

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "I manage three boards and a startup. The conflict resolution is flawless. I no longer double book myself across different ecosystems."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">DL</div>
<div>
<div className="text-xs font-bold text-slate-900">David L.</div>
<div className="text-[10px] text-slate-500 font-medium">Director, Zenith</div>
</div>
</div>
</div>
</div>

<div className="flex gap-8 items-stretch">

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "The ghost mode is brilliant. Clients see I'm busy, but they don't see *why*. It maintains professional boundaries effortlessly without offending anyone."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">MT</div>
<div>
<div className="text-xs font-bold text-slate-900">Mark T.</div>
<div className="text-[10px] text-slate-500 font-medium">Founder, Apex</div>
</div>
</div>
</div>

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "Finally, I can merge my personal iCloud and work Outlook without my assistant seeing my medical appointments. A complete lifesaver for my sanity."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600">SJ</div>
<div>
<div className="text-xs font-bold text-slate-900">Sarah Jenkins</div>
<div className="text-[10px] text-slate-500 font-medium">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "Zero-knowledge architecture was a requirement for our SecOps team. Calendrus was the only tool that passed the rigorous audit."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">AM</div>
<div>
<div className="text-xs font-bold text-slate-900">Alex M.</div>
<div className="text-[10px] text-slate-500 font-medium">CTO, Fortify</div>
</div>
</div>
</div>

<div className="w-[360px] bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center gap-1 text-amber-400 mb-4">
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
<svg className="w-3.5 h-3.5 fill-current" data-lucide="star"></svg>
</div>
<p className="text-sm text-slate-700 leading-relaxed font-medium">
                                "I manage three boards and a startup. The conflict resolution is flawless. I no longer double book myself across different ecosystems."
                            </p>
</div>
<div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-50">
<div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">DL</div>
<div>
<div className="text-xs font-bold text-slate-900">David L.</div>
<div className="text-[10px] text-slate-500 font-medium">Director, Zenith</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 lg:px-12 bg-white pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-20 opacity-0 animate-enter">
<h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-slate-900 mb-6">
                    A private layer over 
                    <span className="text-slate-400">every calendar you own.</span>
</h2>
<p className="text-slate-500 text-sm leading-relaxed">
                   Calendrus connects all your Google Workspace accounts, consolidates events into a single view, and applies redaction rules so you can safely share availability without revealing sensitive details.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 opacity-0 animate-enter delay-100">
<div className="w-12 h-12 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Multi-Account Consolidation</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Merge Corporate, Board, and Personal calendars into a single, conflict-free availability stream without merging data sources.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 opacity-0 animate-enter delay-200">
<div className="w-12 h-12 bg-purple-50 rounded-xl border border-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
<svg className="lucide lucide-sliders w-6 h-6" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Redaction Rules</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Define exactly what details are shared. Scrub titles, locations, and attendees automatically before they leave your device.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 opacity-0 animate-enter delay-300">
<div className="w-12 h-12 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
<svg className="lucide lucide-ghost w-6 h-6" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Ghost Mode</h3>
<p className="text-xs text-slate-500 leading-relaxed">
                        Instantly toggle your public link to "Busy Only". Obfuscate all metadata while keeping your assistant in the loop.
                    </p>
</div>
</div>
</div>
</section>

<section className="lg:py-32 lg:px-12 overflow-hidden text-white bg-slate-950 pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" style={{animation: 'floatInfinite 8s ease-in-out infinite'}}></div>
<div className="max-w-7xl mx-auto mb-20 text-center opacity-0 animate-enter">
<h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight">How it works</h2>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-[28px] left-[20%] right-[20%] h-12 pointer-events-none z-0 opacity-0 animate-enter delay-500">
<svg className="absolute left-[15%] w-[20%] h-full text-slate-700 overflow-visible" fill="none">
<path className="opacity-50 animate-[dash_3s_linear_infinite]" d="M0 20 Q 50 20, 100 20" stroke="currentColor" stroke-dasharray="6 4" strokeWidth="1.5"></path>
</svg>
<svg className="absolute right-[15%] w-[20%] h-full text-slate-700 overflow-visible" fill="none">
<path className="opacity-50 animate-[dash_3s_linear_infinite]" d="M0 20 Q 50 20, 100 20" stroke="currentColor" stroke-dasharray="6 4" strokeWidth="1.5"></path>
</svg>
</div>

<div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-enter delay-100 group">
<div className="relative mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-16 h-16 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:border-sky-500/50 group-hover:bg-slate-900 group-hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] transition-all duration-300">
<svg className="lucide lucide-link w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight group-hover:text-sky-400 transition-colors duration-300">Connect Calendars</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
                    Link your Corporate, Personal, and Board accounts. We use OAuth and never store credentials.
                </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-enter delay-200 group">
<div className="relative mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-16 h-16 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:border-sky-500/50 group-hover:bg-slate-900 group-hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] transition-all duration-300">
<svg className="lucide lucide-settings w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight group-hover:text-sky-400 transition-colors duration-300">Set Rules</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
                    Define visibility. Choose which details to strip and which calendars to prioritize.
                </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-enter delay-300 group">
<div className="relative mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-16 h-16 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:border-sky-500/50 group-hover:bg-slate-900 group-hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] transition-all duration-300">
<svg className="lucide lucide-shield w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight group-hover:text-sky-400 transition-colors duration-300">Share Safely</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
                    Share your unified link. Viewers see availability, you see peace of mind.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="opacity-0 animate-enter">
<h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-slate-900 mb-4">
                        See what they see. <br/>
<span className="text-slate-400">Before you hit share.</span>
</h2>
<p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-md">
                        Switch between views and roles to see how Calendrus redacts your calendar in real time. You always have full control over the final output.
                    </p>

<div className="inline-flex bg-slate-100 p-1 rounded-xl mb-8 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 tab-active" id="tab-reality" onclick="updateCalendarView('reality')">Reality View</button>
<button className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 tab-inactive text-slate-500" id="tab-rules" onclick="updateCalendarView('rules')">Rules View</button>
<button className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 tab-inactive text-slate-500" id="tab-ghost" onclick="updateCalendarView('ghost')">Ghost Mode</button>
</div>

<div className="space-y-3 opacity-50 pointer-events-none transition-opacity duration-300" id="persona-container">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Viewing as</p>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="persona" onchange="updateCalendarView('rules')" type="radio" value="ea"/>
<div className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 transition-all peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:border-slate-300">
                                    Executive Assistant
                                </div>
</label>
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="persona" onchange="updateCalendarView('rules')" type="radio" value="team"/>
<div className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 transition-all peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:border-slate-300">
                                    Internal Team
                                </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="persona" onchange="updateCalendarView('rules')" type="radio" value="partner"/>
<div className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 transition-all peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:border-slate-300">
                                    External Partner
                                </div>
</label>
</div>
</div>
</div>

<div className="relative opacity-0 animate-enter delay-200">
<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative min-h-[400px]">

<div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest" id="preview-label">PREVIEW</div>
<div className="w-8"></div> 
</div>

<div className="p-6 relative">

<div className="absolute left-6 top-6 bottom-6 w-12 flex flex-col justify-between text-[10px] text-slate-400 font-mono">
<span>09 AM</span><span>10 AM</span><span>11 AM</span><span>12 PM</span><span>01 PM</span><span>02 PM</span>
</div>

<div className="ml-12 h-[340px] relative border-l border-slate-100 pl-4 space-y-4">

<div className="event-card absolute top-0 w-full h-[90px] rounded-xl p-4 border-l-4" id="event-1">
<div className="flex justify-between items-start">
<div className="event-content">
<div className="text-xs font-bold mb-1 title-text">Q3 Board Strategy</div>
<div className="text-[10px] opacity-80 desc-text">Conf Room A • 12 Attendees</div>
</div>
<div className="icon-container opacity-100 transition-opacity">
<svg className="lucide lucide-users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
</div>

<div className="event-card absolute top-[110px] w-[80%] h-[70px] rounded-xl p-4 border-l-4" id="event-2">
<div className="flex justify-between items-start">
<div className="event-content">
<div className="text-xs font-bold mb-1 title-text">Dentist Appointment</div>
<div className="text-[10px] opacity-80 desc-text">Dr. Smith • Downtown</div>
</div>
<div className="icon-container opacity-100 transition-opacity">
<svg className="lucide lucide-user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>

<div className="event-card absolute top-[200px] w-full h-[80px] rounded-xl p-4 border-l-4" id="event-3">
<div className="flex justify-between items-start">
<div className="event-content">
<div className="text-xs font-bold mb-1 title-text">Product Review</div>
<div className="text-[10px] opacity-80 desc-text">Zoom • Engineering Team</div>
</div>
<div className="icon-container opacity-100 transition-opacity">
<svg className="lucide lucide-video" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
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

<section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50 border-t border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 opacity-0 animate-enter">
<h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-slate-900">Your calendar is a leak waiting to happen</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto relative">

<div className="opacity-0 animate-enter delay-100 p-8 rounded-3xl bg-white border border-slate-200 grayscale opacity-80 lg:scale-95 lg:hover:opacity-100 lg:hover:scale-[0.97] lg:origin-right z-0 transition-all duration-500">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<svg className="lucide lucide-x w-4 h-4 text-slate-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-500">The Risk</h3>
</div>
<div className="space-y-5">
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="alert-circle"></svg>
<p className="text-sm text-slate-500">Sensitive meeting titles visible to EAs</p>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="alert-circle"></svg>
<p className="text-sm text-slate-500">Personal doctor appointments exposed</p>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="alert-circle"></svg>
<p className="text-sm text-slate-500">Manual "Busy" blocks prone to error</p>
</div>
<div className="flex items-start gap-3">
<svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="alert-circle"></svg>
<p className="text-sm text-slate-500">Credential sharing security risks</p>
</div>
</div>
</div>

<div className="opacity-0 animate-enter delay-300 relative p-10 rounded-3xl bg-white border border-sky-100 shadow-2xl shadow-sky-900/10 lg:scale-110 lg:-ml-4 z-10 lg:hover:scale-[1.12] transition-all duration-500">
<div className="absolute -top-3 right-8 bg-sky-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide uppercase flex items-center gap-1.5">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg> Secure
                    </div>
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-2xl font-display font-semibold text-slate-900">Calendrus</h3>
</div>
<div className="space-y-5 mb-10">
<div className="flex items-start gap-3">
<div className="bg-sky-50 rounded-full p-1"><svg className="w-3 h-3 text-sky-600" data-lucide="check"></svg></div>
<p className="text-sm text-slate-700 font-medium">Automated PII redaction</p>
</div>
<div className="flex items-start gap-3">
<div className="bg-sky-50 rounded-full p-1"><svg className="w-3 h-3 text-sky-600" data-lucide="check"></svg></div>
<p className="text-sm text-slate-700 font-medium">AES-256 encrypted tokens</p>
</div>
<div className="flex items-start gap-3">
<div className="bg-sky-50 rounded-full p-1"><svg className="w-3 h-3 text-sky-600" data-lucide="check"></svg></div>
<p className="text-sm text-slate-700 font-medium">Conflict-free consolidation</p>
</div>
<div className="flex items-start gap-3">
<div className="bg-sky-50 rounded-full p-1"><svg className="w-3 h-3 text-sky-600" data-lucide="check"></svg></div>
<p className="text-sm text-slate-700 font-medium">Full disconnect capability</p>
</div>
</div>
<button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
<span>Join the waitlist</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-center text-[10px] text-slate-400 mt-4">Security first. No data mining.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white border-t border-slate-200">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 opacity-0 animate-enter">
<h2 className="text-3xl font-display font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
</div>
<div className="space-y-2 opacity-0 animate-enter delay-100">

<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-sky-200">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none bg-white">
<span className="text-sm font-semibold text-slate-900">How does the privacy redaction work?</span>
<span className="transition group-open:rotate-45">
<svg className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" data-lucide="plus"></svg>
</span>
</summary>
<div className="text-sm text-slate-500 px-6 pb-6 leading-relaxed">
                        We connect to your calendar APIs via OAuth. Before any event leaves your secure environment to be displayed on your unified availability view, our engine scrubs sensitive fields (Title, Description, Location, Attendees) based on your rules, replacing them with generic tags like "Busy" or "Personal Commitment".
                    </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-sky-200">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none bg-white">
<span className="text-sm font-semibold text-slate-900">Do you store my calendar data?</span>
<span className="transition group-open:rotate-45">
<svg className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" data-lucide="plus"></svg>
</span>
</summary>
<div className="text-sm text-slate-500 px-6 pb-6 leading-relaxed">
                        No. We operate on a zero-knowledge architecture. We only store the access tokens (encrypted with AES-256) required to fetch your schedule in real-time. Your actual calendar event data is processed in-memory and never persisted to a database.
                    </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-sky-200">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none bg-white">
<span className="text-sm font-semibold text-slate-900">Does it work with Outlook and iCloud?</span>
<span className="transition group-open:rotate-45">
<svg className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" data-lucide="plus"></svg>
</span>
</summary>
<div className="text-sm text-slate-500 px-6 pb-6 leading-relaxed">
                        Yes. Calendrus supports Google Workspace, Microsoft Outlook (Exchange &amp; 365), and iCloud calendars. You can mix and match any combination of these accounts into a single unified stream.
                    </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-sky-200">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none bg-white">
<span className="text-sm font-semibold text-slate-900">Can my assistant still see details?</span>
<span className="transition group-open:rotate-45">
<svg className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" data-lucide="plus"></svg>
</span>
</summary>
<div className="text-sm text-slate-500 px-6 pb-6 leading-relaxed">
                        Absolutely. You can generate specific "Delegate Links" that grant higher permission levels to trusted Executive Assistants, allowing them to see full details while the public link remains redacted.
                    </div>
</details>

<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-sky-200">
<summary className="flex cursor-pointer items-center justify-between p-6 list-none bg-white">
<span className="text-sm font-semibold text-slate-900">Is this compliant with SOC2/GDPR?</span>
<span className="transition group-open:rotate-45">
<svg className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" data-lucide="plus"></svg>
</span>
</summary>
<div className="text-sm text-slate-500 px-6 pb-6 leading-relaxed">
                        We are currently in the audit window for SOC2 Type II compliance and are fully GDPR compliant. Our enterprise tier includes specific DPA (Data Processing Agreements) for corporate requirements.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden border-t border-slate-100">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="opacity-0 animate-enter">
<h2 className="text-4xl lg:text-6xl font-display font-semibold tracking-tight text-slate-900 mb-6">
                    Ready to share your availability <br/>without sharing your secrets?
                </h2>
<p className="text-slate-500 text-sm mb-10 max-w-lg mx-auto">
                    Join the early access waitlist for Calendrus and be the first to unify your time, safely.
                </p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<input className="w-full sm:w-auto flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 text-slate-900" placeholder="work@company.com" type="email"/>
<button className="w-full sm:w-auto bg-sky-500 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-sky-400 transition-colors shadow-lg hover:shadow-sky-500/20 flex items-center justify-center gap-2" type="button">
<span>Join the waitlist</span>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</form>
<p className="mt-6 text-[10px] text-slate-400 font-medium tracking-wide flex items-center justify-center gap-1">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> ENTERPRISE GRADE SECURITY
                </p>
</div>
</div>
</section>

<footer className="py-12 px-6 lg:px-12 border-t border-slate-200 bg-gray-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all cursor-pointer">
<div className="bg-sky-500 p-1 rounded-md text-white">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="font-display text-sm font-semibold tracking-tight text-slate-900">CALENDRUS</span>
</div>
<div className="flex items-center gap-8">
<a className="text-[10px] text-slate-500 hover:text-sky-600 uppercase tracking-widest font-medium transition-colors" href="#">Privacy</a>
<a className="text-[10px] text-slate-500 hover:text-sky-600 uppercase tracking-widest font-medium transition-colors" href="#">Security</a>
<a className="text-[10px] text-slate-500 hover:text-sky-600 uppercase tracking-widest font-medium transition-colors" href="#">Contact</a>
</div>
<p className="text-[10px] text-slate-400 font-mono">© 2024 Calendrus Inc.</p>
</div>
</footer>


    </>
  );
}
