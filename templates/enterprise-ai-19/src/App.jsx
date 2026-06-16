import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        function toggleMenu(show) {
            if (show) {
                mobileMenu.classList.remove('translate-x-full');
                body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                body.style.overflow = '';
            }
        }

        if (menuBtn && closeBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => toggleMenu(true));
            closeBtn.addEventListener('click', () => toggleMenu(false));
            
            // Close on link click
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => toggleMenu(false));
            });
        }

        // Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
<div className="max-w-7xl mx-auto">
<nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all hover:shadow-md">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center transition-transform group-hover:scale-95 duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">NovaFlow</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#platform">Platform</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#resources">Resources</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors mr-2" href="#">
                        Log in
                    </a>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-medium text-white shadow transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950" href="#">
                        Get Started
                    </a>
<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
</div>
</header>

<div className="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 md:hidden flex flex-col" id="mobile-menu">
<div className="p-6 flex items-center justify-between border-b border-slate-100">
<span className="font-semibold text-lg tracking-tight text-slate-900">NovaFlow</span>
<button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full" id="close-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
<a className="text-2xl font-medium tracking-tight text-slate-900" href="#">Platform</a>
<a className="text-2xl font-medium tracking-tight text-slate-900" href="#">Solutions</a>
<a className="text-2xl font-medium tracking-tight text-slate-900" href="#">Developers</a>
<a className="text-2xl font-medium tracking-tight text-slate-900" href="#">Company</a>
</div>
<div className="p-6 border-t border-slate-100">
<a className="flex w-full items-center justify-center rounded-full bg-slate-900 py-4 text-base font-medium text-white" href="#">Start Building</a>
</div>
</div>
<main className="flex-1">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl opacity-60"></div>
</div>
<div className="sm:px-6 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="reveal active inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm mb-8 transition-colors hover:bg-white hover:border-slate-300">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                    NovaFlow 2.0 is now available
                    <svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h1 className="reveal active delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
                    Orchestrate your <br className="hidden md:block"/>
<span className="font-serif-custom italic font-normal text-slate-500">enterprise</span> intelligence.
                </h1>
<p className="reveal active delay-200 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    The operating system for modern business autonomy. Unify your data, automate complex workflows, and deploy AI agents without rewriting your infrastructure.
                </p>
<div className="reveal active delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-900 px-8 text-base font-medium text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all" href="#">
                        Start Building
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-base font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Read Documentation
                    </a>
</div>

<div className="reveal active delay-500 mt-20 relative max-w-6xl mx-auto">
</div>
</div>
</section>


<section className="py-24 border-y border-slate-100 bg-slate-50/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center reveal">
<div>
<div className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-2">99.9%</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Uptime SLA</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-2">50ms</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Global Latency</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-2">2B+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Requests/Day</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-2">500+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Integrations</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-20 max-w-3xl reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                        Designed for <span className="font-serif-custom italic text-slate-500">complexity</span>,  simplified for you.
                    </h2>
<p className="text-lg text-slate-600">
                        We abstract away the infrastructure challenges of running LLM chains in production, giving you a clean canvas to build logic.
                    </p>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-24 reveal">

<div className="flex flex-col justify-center order-2 md:order-1">
<div className="inline-flex items-center gap-2 text-indigo-600 font-medium mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
<span>Visual Logic Builder</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight">Construct workflows visually.</h3>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Map out complex decision trees and agent interactions using our node-based editor. What you see is exactly how your logic executes in production.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-700">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Drag-and-drop node configuration
                            </li>
<li className="flex items-center gap-3 text-slate-700">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Real-time debugging and tracing
                            </li>
<li className="flex items-center gap-3 text-slate-700">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Version control built-in
                            </li>
</ul>
</div>
<div className="relative order-1 md:order-2 rounded-2xl bg-slate-50 border border-slate-100 p-8 shadow-inner aspect-square md:aspect-auto flex items-center justify-center">

<div className="relative w-full max-w-sm">
<div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 rounded-full"></div>
<div className="relative bg-white rounded-xl shadow-xl border border-slate-200 p-4 space-y-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs text-slate-400 font-mono">workflow.json</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-100">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:box" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
<div className="h-2 w-24 bg-slate-200 rounded"></div>
</div>
<div className="flex justify-center">
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-3 p-3 bg-white shadow-sm rounded border border-indigo-200 ring-2 ring-indigo-50">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<div className="h-2 w-32 bg-slate-800 rounded"></div>
</div>
<div className="flex justify-center">
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-100">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center mb-16 reveal">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10 mb-6">
                        Ecosystem
                    </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                        Connects with <span className="font-serif-custom italic text-indigo-300">everything</span>.
                    </h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Don't rip and replace. NovaFlow acts as the intelligent glue layer between your legacy systems and modern AI capabilities.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">

<div className="glass-panel-dark h-24 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="iconify text-white/60 iconify--lucide" data-icon="lucide:database" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<div className="glass-panel-dark h-24 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="iconify text-white/60 iconify--lucide" data-icon="lucide:cloud" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="glass-panel-dark h-24 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="iconify text-white/60 iconify--lucide" data-icon="lucide:slack" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></g></svg>
</div>
<div className="glass-panel-dark h-24 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="iconify text-white/60 iconify--lucide" data-icon="lucide:github" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</div>
<div className="glass-panel-dark h-24 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="iconify text-white/60 iconify--lucide" data-icon="lucide:mail" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="glass-panel-dark h-24 rounded-xl flex items-center justify-center hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="iconify text-white/60 iconify--lucide" data-icon="lucide:credit-card" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
</div>
<div className="mt-20 p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm reveal">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-2xl font-medium mb-2">Ready to modernize?</h3>
<p className="text-slate-400">Get a custom demo of the NovaFlow Engine.</p>
</div>
<div className="flex gap-4">
<a className="px-6 py-3 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-colors" href="#">
                                Book Demo
                            </a>
<a className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors" href="#">
                                Contact Sales
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
                        Trusted by visionaries
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 reveal">

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-indigo-500 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-700 text-lg leading-relaxed flex-1">
                            "NovaFlow allowed us to compress our data processing workflow from 3 days to 45 minutes. The reliability is unmatched."
                        </p>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200/50">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
<div>
<div className="font-medium text-slate-900 text-sm">Elena Roberts</div>
<div className="text-slate-500 text-xs">CTO, Vertex Dynamics</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-indigo-500 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-700 text-lg leading-relaxed flex-1">
                            "We tried building our own orchestration layer. Switching to NovaFlow saved us six months of engineering time."
                        </p>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200/50">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
<div>
<div className="font-medium text-slate-900 text-sm">Marcus Chen</div>
<div className="text-slate-500 text-xs">VP Engineering, Aether</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex gap-1 text-indigo-500 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-700 text-lg leading-relaxed flex-1">
                            "The visual builder bridges the gap between our product managers and engineers. It's the common language we needed."
                        </p>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200/50">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
<div>
<div className="font-medium text-slate-900 text-sm">Sarah Jenkins</div>
<div className="text-slate-500 text-xs">Product Lead, Horizon</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                    Stop patching.  Start <span className="font-serif-custom italic">orchestrating</span>.
                </h2>
<p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Join the enterprise standard for intelligent automation. 
                    Deploy your first agent in minutes, not months.
                </p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
<input className="h-12 px-4 rounded-full border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent flex-1 shadow-sm text-sm" placeholder="Enter work email" type="email"/>
<button className="h-12 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="button">
                        Get Access
                    </button>
</form>
<p className="mt-4 text-xs text-slate-400">14-day free trial. No credit card required.</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="/">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">NovaFlow</span>
</a>
<p className="text-slate-500 text-sm max-w-xs mb-6">
                        Empowering enterprises with intelligent orchestration and automated workflows.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition-colors" href="#">Platform</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 NovaFlow Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
