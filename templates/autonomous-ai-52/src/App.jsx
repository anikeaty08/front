import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                


                !function(){if(window.UnicornStudio){try{window.UnicornStudio.init()}catch(i){}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
              


      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sys-active");

              // Counter Animation (smoother + slower)
              if (entry.target.hasAttribute("data-sys-counter")) {
                const target = parseInt(entry.target.getAttribute("data-sys-counter"));
                const suffix = entry.target.getAttribute("data-sys-suffix") || "";
                const duration = 2800;
                const start = 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 5);

                  entry.target.innerText = Math.floor(start + (target - start) * ease) + suffix;

                  if (progress < 1) requestAnimationFrame(animate);
                  else entry.target.innerText = target + suffix;
                };
                requestAnimationFrame(animate);
              }

              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

        document.querySelectorAll(".sys-reveal, .sys-flicker-anim, [data-sys-counter], .sys-bar-fill").forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid"></div>

<header className="relative z-40 h-16 border-b border-slate-800 bg-[#050505] flex items-stretch sticky top-0">

<div className="md:w-64 flex bg-[#050505] w-full border-slate-800 border-r pr-6 pl-6 items-center justify-between">
<span className="text-lg font-bold tracking-widest text-white uppercase">VECTOR AI</span>
<div className="w-2 h-2 rounded-none bg-teal-600"></div>
</div>

<nav className="hidden md:flex flex-1 items-stretch overflow-x-auto no-scrollbar">
<a className="flex items-center px-8 border-r border-slate-800 text-xs font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors" href="#">
<span className="mr-2 text-teal-600">01.</span>
          Home
        </a>
<a className="flex items-center px-8 border-r border-slate-800 text-xs font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors" href="#">
<span className="text-slate-600 mr-2">02.</span>
          About
        </a>
<a className="flex items-center px-8 border-r border-slate-800 text-xs font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors" href="#">
<span className="text-slate-600 mr-2">03.</span>
          Suites
        </a>
<a className="flex items-center px-8 border-r border-slate-800 text-xs font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors" href="#">
<span className="text-slate-600 mr-2">04.</span>
          Custom
        </a>
<a className="flex items-center px-8 border-r border-slate-800 text-xs font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors" href="#">
<span className="text-slate-600 mr-2">05.</span>
          FAQ
        </a>
<a className="flex items-center px-8 border-r border-slate-800 text-xs font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors" href="#contact">
<span className="text-slate-600 mr-2">06.</span>
          Contact
        </a>
</nav>

<div className="flex items-stretch shrink-0">
<div className="flex items-center border-l border-slate-800 bg-[#050505]">
<a className="text-xs font-mono text-slate-300 px-8 py-2 hover:text-white transition-colors uppercase h-full flex items-center justify-center" href="https://app.vectorai.digital/authentication/sign-in/signin-basic/">
            Login
          </a>
</div>
<a className="px-8 border-l border-slate-800 text-white transition-colors h-full flex items-center justify-center text-xs font-mono uppercase tracking-widest hover:bg-teal-600" href="#contact">
          Schedule Demo
        </a>
</div>
</header>

<main className="relative z-10 flex-1 flex flex-col md:flex-row">

<aside className="hidden md:flex flex-col w-16 border-r border-slate-800 bg-[#050505] shrink-0">
<div className="flex-1 flex flex-col pt-32 pb-12 gap-x-12 gap-y-12 items-center justify-start">
<div className="whitespace-nowrap text-[10px] uppercase text-slate-600 tracking-widest font-mono -rotate-90">
            Deployment: 2-8 Weeks
          </div>
<div className="w-px h-24 bg-slate-800"></div>
<div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-slate-600">
            22 AI Agents
          </div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-b border-slate-800">

<div className="lg:col-span-7 md:p-16 flex flex-col bg-center bg-[#050505] border-slate-800 border-r pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-none justify-between" style={{maskImage: 'linear-gradient(280deg, transparent, black 45%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(280deg, transparent, black 45%, black 100%, transparent)'}}>
<div className="absolute inset-0 -z-10 pointer-events-none" data-container-bg="true">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div>
</div>

<div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-slate-700"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-slate-700"></div>
<div className="font-mono text-xs mb-8 uppercase tracking-widest text-teal-600">
              // 22 AI Agents • 5 Departments • Your ROI
            </div>
<div className="space-y-6">
<h1 className="uppercase leading-none md:text-8xl text-6xl font-medium text-white tracking-tight sys-reveal sys-rise sys-active">
                A Security-First<br/>
<span className="text-slate-600">Autonomous AI</span>
</h1>
<p className="max-w-md text-sm text-slate-500 font-mono leading-relaxed border-l-2 pl-4 sys-reveal sys-rise sys-delay-100 sys-active border-teal-600">
                A complete AI-powered company working for you 24/7. Trained on your company knowledge base, with real-time operational visibility. Marketing, Finance, Warehouse, Security &amp; Operations.
              </p>
</div>
<div className="pt-12">
<a className="group bg-slate-100 text-black hover:text-white text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 w-fit border border-transparent rounded-none font-semibold sys-reveal sys-rise sys-delay-200 sys-active hover:bg-teal-600 hover:border-teal-600" href="mailto:contact@vectorai.digital">
                Talk to Sales
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 relative bg-slate-900 overflow-hidden group">

<div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-black/50 backdrop-blur-sm border border-slate-700 p-2 text-[10px] font-mono text-white sys-flicker-anim sys-active">
                  VECTOR_CORE [LIVE]
                </div>
<iconify-icon className="text-white opacity-50" icon="solar:maximize-linear" width="20"></iconify-icon>
</div>

<div className="self-end bg-[#050505] border border-slate-700 p-4 w-64 shadow-2xl sys-reveal sys-slide-r sys-delay-300 sys-active">
<div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
<span className="text-[10px] text-white uppercase tracking-widest">
                    Vector AI Dashboard
                  </span>
<div className="w-1.5 h-1.5 rounded-none animate-pulse bg-teal-500"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-slate-500">
<span>DEPLOYMENT</span>
<span className="text-white">2-8 WKS</span>
</div>
<div className="w-full bg-slate-800 h-0.5">
<div className="w-[30%] h-full bg-teal-600"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-slate-500">
<span>AI_AGENTS</span>
<span className="text-white">22</span>
</div>
<a className="block text-right text-[10px] hover:text-white mt-4 uppercase tracking-wider underline underline-offset-4 pointer-events-auto text-teal-600 decoration-teal-600" href="#contact">
                    Schedule Demo -&gt;
                  </a>
</div>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover contrast-100 brightness-50 [transform:scaleX(-1)_scaleY(1)] group-hover:brightness-100 group-hover:[transform:scaleX(-1.05)_scaleY(1.05)] transition-[filter,transform] duration-1000 ease-linear" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8826ae6a-df85-4863-aa7e-53251ae70196_1600w.jpg" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
</div>
</div>
<div className="flex flex-col md:p-12 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-slate-800 border-b pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<div className="text-[10px] font-mono mb-6 uppercase tracking-widest text-teal-600">
              // Features
            </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight mb-4 leading-none sys-reveal sys-rise sys-active">
              What is 
              <span className="text-slate-600">Vector AI</span>
</h2>
<p className="text-sm text-slate-500 font-mono leading-relaxed max-w-lg sys-reveal sys-rise sys-delay-100 sys-active">
              Vector AI is your copilot for operations and marketing: thinks, suggests, and automates without forcing you to start from scratch. Connect your campaigns, documents, and processes.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#050505]">

<div className="group relative border-r border-b border-slate-800 p-8 h-80 flex flex-col justify-between hover:bg-slate-900/50 transition-colors sys-reveal sys-rise sys-delay-100 sys-active">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-slate-600 border border-slate-800 px-2 py-1">
                FTR. 01
              </span>
<iconify-icon className="text-white transition-colors group-hover:text-teal-600" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                Zero Friction
              </h3>
<p className="leading-relaxed text-xs text-slate-500 font-mono">
                Boost your business without barriers. Vector AI automatizes so you can focus on growth.
              </p>
</div>
<div className="w-full h-px bg-slate-800 transition-colors origin-left duration-500 group-hover:bg-teal-600"></div>
</div>

<div className="group relative border-r border-b border-slate-800 p-8 h-80 flex flex-col justify-between bg-slate-900/20 sys-reveal sys-rise sys-delay-200 sys-active">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-slate-600" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<div className="mt-4">
<h3 className="text-2xl font-light text-white uppercase tracking-tight leading-8">
                Privacy by Design
              </h3>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mt-4 leading-relaxed">
                Your data is protected with military-grade encryption. Zero-trust architecture.
              </p>
</div>
<div className="font-mono text-[10px] space-y-2 text-slate-500 border-t border-slate-800 pt-4">
<div className="flex justify-between">
<span className="">ENCRYPTION</span>
<span className="text-white">AES-256</span>
</div>
<div className="flex justify-between">
<span className="">ARCHITECTURE</span>
<span className="text-white">ZERO-TRUST</span>
</div>
</div>
</div>

<div className="group relative border-r border-b border-slate-800 p-8 h-80 flex flex-col justify-between hover:bg-slate-900/50 transition-colors sys-reveal sys-rise sys-delay-300 sys-active">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-slate-600 border border-slate-800 px-2 py-1">
                FTR. 03
              </span>
<iconify-icon className="text-white transition-colors group-hover:text-teal-600" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                Measurable Results
              </h3>
<p className="leading-relaxed text-xs text-slate-500 font-mono">
                Real-time analytics. You know exactly what works and what doesn't.
              </p>
</div>
<div className="w-full h-px bg-slate-800 transition-colors origin-left duration-500 group-hover:bg-teal-600"></div>
</div>

<div className="group relative border-b border-slate-800 h-80 bg-slate-950 flex flex-col sys-reveal sys-rise sys-delay-400 sys-active">
<div className="p-4 border-b border-slate-800 flex justify-between items-start">
<div className="flex flex-col">
<span className="text-[10px] font-mono uppercase tracking-wider text-teal-600">
                  Scalable
                </span>
<span className="text-[8px] font-mono text-slate-600 uppercase mt-0.5 tracking-tight">
                  From startups to enterprise
                </span>
</div>
</div>
<div className="flex-1 relative p-4 flex flex-col justify-end">
<p className="leading-relaxed text-xs text-slate-500 font-mono mb-6">
                Vector AI grows with you without limits.
              </p>
<div className="h-16 flex items-end gap-1">
<div className="w-1/6 bg-slate-800 h-[20%] transition-colors hover:bg-teal-600"></div>
<div className="w-1/6 bg-slate-800 h-[40%] transition-colors hover:bg-teal-600"></div>
<div className="w-1/6 bg-slate-800 h-[60%] transition-colors hover:bg-teal-600"></div>
<div className="w-1/6 bg-slate-800 h-[80%] transition-colors hover:bg-teal-600"></div>
<div className="w-1/6 h-[100%] transition-colors bg-teal-600"></div>
<div className="w-1/6 bg-white h-[100%]"></div>
</div>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-slate-800 p-8 h-80 flex flex-col justify-between hover:bg-slate-900/50 transition-colors sys-reveal sys-rise sys-delay-100">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-slate-600 border border-slate-800 px-2 py-1">
                FTR. 05
              </span>
<iconify-icon className="text-white transition-colors group-hover:text-teal-600" icon="solar:route-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                Guided Onboarding
              </h3>
<p className="leading-relaxed text-xs text-slate-500 font-mono">
                Complete setup based on scope. No consultants. No unnecessary complexity.
              </p>
</div>
<div className="w-full h-px bg-slate-800 transition-colors origin-left duration-500 group-hover:bg-teal-600"></div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-slate-800 p-8 h-80 flex flex-col justify-between hover:bg-slate-900/50 transition-colors sys-reveal sys-rise sys-delay-200">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-slate-600 border border-slate-800 px-2 py-1">
                FTR. 06
              </span>
<iconify-icon className="text-white transition-colors group-hover:text-teal-600" icon="solar:headphones-square-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                12-24h Support
              </h3>
<p className="leading-relaxed text-xs text-slate-500 font-mono">
                Our team responds quickly. Email support that actually helps.
              </p>
</div>
<div className="w-full h-px bg-slate-800 transition-colors origin-left duration-500 group-hover:bg-teal-600"></div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-slate-800 p-8 h-80 flex flex-col justify-between bg-slate-900/20 sys-reveal sys-rise sys-delay-300">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-slate-600" icon="solar:server-square-linear" width="32"></iconify-icon>
</div>
<div className="mt-4">
<h3 className="text-2xl font-light text-white uppercase tracking-tight leading-8">
                Scalable Infrastructure
              </h3>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mt-4 leading-relaxed">
                Cloud native. Architecture that supports millions of operations.
              </p>
</div>
<div className="font-mono text-[10px] space-y-2 text-slate-500 border-t border-slate-800 pt-4">
<div className="flex justify-between">
<span className="">UPTIME</span>
<span className="text-teal-500">99.9%</span>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-slate-800 p-8 h-80 flex flex-col justify-between hover:bg-slate-900/50 transition-colors sys-reveal sys-rise sys-delay-400">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-slate-600 border border-slate-800 px-2 py-1">
                FTR. 08
              </span>
<iconify-icon className="text-white transition-colors group-hover:text-teal-600" icon="solar:window-frame-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                Intuitive Interface
              </h3>
<p className="leading-relaxed text-xs text-slate-500 font-mono">
                Modern UI designed for productivity. If you use Excel, you can use Vector AI.
              </p>
</div>
<div className="w-full h-px bg-slate-800 transition-colors origin-left duration-500 group-hover:bg-teal-600"></div>
</div>
</div>
<div className="flex flex-col md:p-12 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-slate-800 border-t pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<div className="text-[10px] font-mono mb-6 uppercase tracking-widest text-teal-600">
              // Suites
            </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight mb-4 leading-none sys-reveal sys-rise">
              5 Suites. 22 AI Agents.<br/>
<span className="text-slate-600">Infinite Possibilities.</span>
</h2>
<p className="text-sm text-slate-500 font-mono leading-relaxed max-w-lg sys-reveal sys-rise sys-delay-100">
              Each suite replaces $10K+/year software. Enterprise-grade AI, designed for businesses of all sizes.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#050505] border-t border-slate-800 border-b">

<div className="group relative border-r border-b lg:border-b-0 border-slate-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-slate-900/30 transition-colors sys-reveal sys-rise sys-delay-100">
<div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider border border-slate-800 px-2 py-1">
                  5_AGENTS
                </span>
<iconify-icon className="text-slate-600 transition-colors group-hover:text-teal-600" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Marketing &amp; Sales Suite
              </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed">
                Automate campaigns, content, SEO, email marketing, and ads with 5 specialized agents.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-slate-800/50 flex flex-col gap-2">
<div className="text-[9px] font-mono text-slate-400 uppercase">• CR Agent (Client records)</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• SEO and AEO Optimization</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• AI Ad Gen (Meta, Google)</div>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-slate-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-slate-900/30 transition-colors sys-reveal sys-rise sys-delay-200">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider border border-slate-800 px-2 py-1">
                  3_AGENTS
                </span>
<iconify-icon className="text-slate-600 transition-colors group-hover:text-teal-600" icon="solar:calculator-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Financial Suite
              </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed">
                Accounting, financial reports, and analysis with 3 specialized agents.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-slate-800/50 flex flex-col gap-2">
<div className="text-[9px] font-mono text-slate-400 uppercase">• Invoice generation</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• Real-time reports</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• Tax prep (1099 format)</div>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-slate-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-slate-900/30 transition-colors sys-reveal sys-rise sys-delay-300">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider border border-slate-800 px-2 py-1">
                  6_AGENTS
                </span>
<iconify-icon className="text-slate-600 transition-colors group-hover:text-teal-600" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Warehouse Suite
              </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed">
                Complete inventory and logistics management.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-slate-800/50 flex flex-col gap-2">
<div className="text-[9px] font-mono text-slate-400 uppercase">• ML demand prediction</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• Automatic reorder</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• End-to-end processing</div>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-slate-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-slate-900/30 transition-colors sys-reveal sys-rise sys-delay-400">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider border border-slate-800 px-2 py-1">
                  3_AGENTS
                </span>
<iconify-icon className="text-slate-600 transition-colors group-hover:text-teal-600" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Operations Suite
              </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed">
                Automate daily operations and client management.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-slate-800/50 flex flex-col gap-2">
<div className="text-[9px] font-mono text-slate-400 uppercase">• Auto-capture from ads</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• Automatic scheduling</div>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-slate-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-slate-900/30 transition-colors sys-reveal sys-rise sys-delay-100">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider border border-slate-800 px-2 py-1">
                  5_AGENTS
                </span>
<iconify-icon className="text-slate-600 transition-colors group-hover:text-teal-600" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Security Suite
              </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed">
                Enterprise-level security. Included in Professional plan and above.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-slate-800/50 flex flex-col gap-2">
<div className="text-[9px] font-mono text-slate-400 uppercase">• Ethical Hacker Agent</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• Military-Grade Encryption</div>
<div className="text-[9px] font-mono text-slate-400 uppercase">• Threat detection</div>
</div>
</div>
</div>
<div className="flex flex-col border-t border-b border-slate-800 bg-[#050505] relative overflow-hidden">

<div className="flex flex-col md:px-12 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 z-10 border-slate-800 border-b px-8 py-10 relative gap-x-6 gap-y-6 justify-between">
<div className="">
<div className="text-[10px] font-mono mb-4 uppercase tracking-widest text-teal-600">
                // Knowledge_Base
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                Frequently Asked
                <span className="text-slate-600">Questions</span>
</h2>
<p className="text-sm text-slate-500 font-mono leading-relaxed max-w-xl mt-4">
                Answers to the most common questions about Vector AI, our architecture, and how to deploy it for your business operations.
              </p>
</div>
<div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-teal-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span>FAQ Active</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">

<div className="lg:col-span-3 border-r border-slate-800 p-8 flex flex-col relative bg-slate-900/10 group hover:bg-slate-900/20 transition-colors sys-reveal sys-slide-l">
<div className="absolute top-0 left-0 p-2 border-r border-b border-slate-800 bg-[#050505] text-[9px] font-mono text-slate-500">
                01_BASICS
              </div>
<div className="mt-12 space-y-8 flex-1">
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-2">
                    What is Vector AI?
                  </h3>
<p className="text-xs text-slate-400 font-mono leading-relaxed">
                    Vector AI is the first autonomous AI-powered company designed to run business operations and marketing 24/7—built with security-first architecture and trained on your company knowledge base.
                  </p>
</div>
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-2">
                    What does Vector AI do?
                  </h3>
<p className="text-xs text-slate-400 font-mono leading-relaxed">
                    Vector AI automates your complete business operations: marketing, finance, warehouse, security, and daily workflows—while giving you real-time visibility through analytics and dashboards.
                  </p>
</div>
</div>
</div>

<div className="lg:col-span-6 border-r border-slate-800 bg-[#080808] relative flex flex-col overflow-hidden group sys-reveal sys-scale sys-delay-100">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
<div className="absolute top-0 right-0 p-2 border-l border-b border-slate-800 bg-[#050505] text-[9px] font-mono z-10 text-teal-600">
                02_AGENTS
              </div>
<div className="p-12 flex flex-col h-full items-center justify-center relative z-10">

<div className="relative w-64 h-64 mb-12 flex items-center justify-center">
<div className="absolute inset-0 border border-slate-800 rounded-full animate-[spin_10s_linear_infinite] opacity-30"></div>
<div className="absolute inset-4 border border-slate-800 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border rounded-full flex items-center justify-center backdrop-blur-sm border-teal-600/20 bg-teal-600/5">
<iconify-icon className="text-4xl drop-shadow-[0_0_15px_rgba(234,88,12,0.5)] text-teal-600" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rounded-full"></div>
<div className="absolute bottom-1/2 right-0 translate-x-1 translate-y-1/2 w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
</div>
<div className="text-center space-y-2 max-w-md">
<h3 className="text-xl font-medium text-white uppercase tracking-tight">
                    How many agents does Vector AI have?
                  </h3>
<p className="text-slate-500 font-mono text-xs leading-relaxed">
                    Vector AI has 22 AI agents organized into 5 Suites, each focused on a core department of your business.
                  </p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 border-t border-slate-800 bg-[#050505]/90 p-4 font-mono text-[10px] text-slate-500 overflow-hidden">
<div className="flex justify-between items-center mb-2 opacity-50">
<span>WHAT ARE THE 5 VECTOR AI SUITES?</span>
<span>LIVE</span>
</div>
<div className="space-y-1 opacity-70">
<div className="flex gap-4">
<span className="text-slate-700">00:01:23</span>
<span className="text-slate-400">
                      &gt; init_suite(target="Marketing &amp; Sales")
                    </span>
</div>
<div className="flex gap-4">
<span className="text-slate-700">00:01:24</span>
<span className="text-slate-400">
                      &gt; init_suite(target="Financial")
                      <span className="text-teal-600">LOADED</span>
</span>
</div>
<div className="flex gap-4">
<span className="text-slate-700">00:01:25</span>
<span className="text-slate-400">
                      &gt; init_suite(target="Warehouse")
                    </span>
</div>
<div className="flex gap-4">
<span className="text-slate-700">00:01:25</span>
<span className="text-teal-600">
                      &gt; init_suite(target="Operations &amp; Security")
                    </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col border-r lg:border-r-0 border-slate-800 sys-reveal sys-slide-r sys-delay-200">

<div className="flex-1 border-b border-slate-800 p-8 relative bg-slate-900/5 group hover:bg-slate-900/10 transition-colors">
<div className="absolute top-0 left-0 p-2 border-r border-b border-slate-800 bg-[#050505] text-[9px] font-mono text-slate-500">
                  03_USAGE
                </div>
<div className="mt-10 mb-6 space-y-6">
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-2">
                      Who is Vector AI for?
                    </h3>
<p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                      For entrepreneurs and businesses that want to scale faster by automating operations and marketing without adding unnecessary complexity.
                    </p>
</div>
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-2">
                      Does Vector AI replace employees?
                    </h3>
<p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                      Vector AI doesn't replace humans—it empowers teams by automating repetitive work, improving decision-making, and increasing execution speed.
                    </p>
</div>
</div>
</div>

<div className="flex-1 p-8 relative bg-slate-950 flex flex-col justify-center group hover:bg-slate-900 transition-colors">
<div className="absolute top-0 left-0 p-2 border-r border-b border-slate-800 bg-[#050505] text-[9px] font-mono text-slate-500">
                  04_ONBOARDING
                </div>
<div>
<h3 className="text-sm text-white font-medium uppercase tracking-wider mb-2">
                    How do I get started?
                  </h3>
<p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                    Schedule a demo with our team. We'll show you how Vector AI can work for your specific business and which agents would give you the most value based on your industry.
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col border-b border-slate-800 bg-[#050505] relative">

<div className="flex flex-col overflow-hidden md:px-8 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-slate-800 border-b px-8 py-8 relative gap-x-6 gap-y-6 items-start justify-between">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-800/20 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[9px] font-mono mb-3 uppercase tracking-widest flex items-center gap-2 text-teal-600">
<span className="w-1.5 h-1.5 bg-teal-600"></span>
                // System_Audit_Protocol_v4
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                Military-Grade Security
                <span className="text-slate-600">That Never Sleeps</span>
</h2>
<p className="text-sm text-slate-500 font-mono leading-relaxed max-w-2xl mt-4">
                While competitors sleep, our Ethical Hacker Agent protects your business 24/7. Enterprise security without the enterprise price tag.
              </p>
</div>
<div className="flex items-center gap-8 relative z-10">
<div className="hidden md:block text-right">
<div className="text-[9px] text-slate-500 font-mono uppercase tracking-wider mb-1">
                  Audit Session
                </div>
<div className="text-xs text-white font-mono bg-slate-900 px-2 py-1 border border-slate-800">
                  ID: 8842-XC
                </div>
</div>
<div className="text-right">
<div className="text-[9px] text-slate-500 font-mono uppercase tracking-wider mb-1">
                  Status
                </div>
<div className="text-xs font-mono flex items-center gap-2 justify-end text-teal-500">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-teal-500"></span>
                  VERIFIED
                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] bg-[#050505]">

<div className="lg:col-span-8 border-r border-slate-800 flex flex-col">

<div className="flex-1 p-8 md:p-12 relative overflow-hidden group border-b border-slate-800 bg-slate-900/5 hover:bg-slate-900/10 transition-colors sys-reveal sys-rise">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 border text-[10px] font-mono uppercase tracking-wider mb-8 border-teal-500/20 bg-teal-500/5 text-teal-500">
<iconify-icon icon="solar:shield-check-bold" width="14"></iconify-icon>
                      Production Environment Active
                    </div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter uppercase leading-[0.9]">
                      Ethical Hacker
                      <span className="block text-slate-700">Agent</span>
</h3>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
<p className="text-xs text-slate-500 font-mono leading-relaxed border-l border-slate-800 pl-4">
                      AI-powered penetration testing running 24/7. Finds vulnerabilities before the bad guys do.
                    </p>
</div>
</div>
</div>

<div className="h-auto md:h-64 grid grid-cols-1 md:grid-cols-2">

<div className="border-r border-slate-800 p-8 flex flex-col justify-between hover:bg-slate-900/20 transition-colors">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Compliance Ready
                    </span>
<iconify-icon className="text-slate-600" icon="solar:file-check-linear" width="18"></iconify-icon>
</div>
<div className="space-y-3 mt-4">
<div className="text-[10px] text-slate-500 font-mono leading-relaxed">
                      SOC2, GDPR, CCPA compliant out of the box. Built for enterprise security requirements.
                    </div>
</div>
</div>

<div className="p-8 flex flex-col justify-between hover:bg-slate-900/20 transition-colors relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Military-Grade Encryption
                    </span>
<iconify-icon className="text-slate-600" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<div className="z-10 mt-4">
<div className="text-3xl font-light text-white mb-2 tracking-tight">
                      AES-256
                    </div>
<div className="text-[10px] text-slate-500 font-mono leading-relaxed">
                      The same level used by government agencies and banks.
                    </div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-slate-800/50 -rotate-12 group-hover:text-slate-800 transition-colors duration-500" icon="solar:shield-bold" width="100"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col bg-slate-950/30">

<div className="flex-1 p-8 border-b border-slate-800 hover:bg-slate-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-end mb-4">
<span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                    Zero-Trust Architecture
                  </span>
<span className="text-[9px] font-mono text-teal-600">
                    ACTIVE
                  </span>
</div>
<div className="text-[10px] text-slate-500 font-mono leading-relaxed">
                  Never trust, always verify. Every request is authenticated, even from inside your network.
                </div>
</div>

<div className="flex-1 p-8 border-b border-slate-800 hover:bg-slate-900 transition-colors flex flex-col justify-center">
<div className="flex justify-between items-end mb-4">
<span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                    Real-Time Threat Detection
                  </span>
<span className="text-[9px] font-mono text-teal-500">
                    OPTIMAL
                  </span>
</div>
<div className="text-[10px] text-slate-500 font-mono leading-relaxed">
                  AI monitors for suspicious activity 24/7. Automatic alerts and incident response.
                </div>
</div>

<div className="flex-1 p-8 hover:bg-slate-900 transition-colors flex flex-col justify-center">
<span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                  Data Isolation
                </span>
<div className="text-[10px] text-slate-500 font-mono leading-relaxed">
                  Your data stays yours. Complete isolation between tenants. No cross-contamination.
                </div>
</div>
</div>
</div>
</div>
<section className="overflow-hidden bg-[#050505] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f879b8e1-cba6-476a-9fea-a4abd7ca2645_3840w.jpg?w=800&amp;q=80)] bg-cover bg-center border-slate-800 border-b pt-24 pr-4 pb-24 pl-4 relative">

<div className="bg-black/90 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">

<div className="mb-16 max-w-2xl mx-auto">
<div className="text-[10px] font-mono mb-4 uppercase tracking-widest text-teal-600">
                // Access_Control
              </div>
<h2 className="text-4xl md:text-5xl font-medium text-white uppercase tracking-tight leading-none mb-6">
                Custom AI
                <span className="text-slate-600">Solutions</span>
</h2>
<p className="text-sm text-slate-500 font-mono leading-relaxed">
                Beyond our 22 agents, we build exactly what your business needs. Enterprise-grade custom development. Your vision, our expertise.
              </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 w-full items-stretch">

<div className="group relative bg-slate-900/20 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-100">
<div className="px-3 py-1 border border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-6">
                  Level_01
                </div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors mb-6" icon="solar:code-circle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3 text-center">
                  Custom AI Agents
                </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed mb-8 text-center">
                  Need an agent that doesn't exist? We design and build AI agents tailored to your specific industry, workflows, and business logic. From healthcare to logistics, we've got you covered.
                </p>
</div>

<div className="group relative bg-slate-900/20 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-200">
<div className="px-3 py-1 border border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-6">
                  Level_02
                </div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors mb-6" icon="solar:server-square-bold" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3 text-center">
                  System Integration
                </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed mb-8 text-center">
                  Already using Salesforce, SAP, or custom ERPs? We connect Vector AI with your existing tech stack. No rip-and-replace. Seamless data flow between all your systems.
                </p>
</div>

<div className="group relative bg-slate-900/20 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-300">
<div className="px-3 py-1 border border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-6">
                  Level_03
                </div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors mb-6" icon="solar:shield-keyhole-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3 text-center">
                  Enterprise Solutions
                </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed mb-8 text-center">
                  For organizations with unique requirements. Dedicated infrastructure, custom SLAs, advanced security, and white-label options. Built for scale, designed for you. Deployment in 2-8 weeks.
                </p>
</div>

<div className="group relative bg-slate-900/20 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/40 p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-1 rounded-sm sys-reveal sys-rise sys-delay-400">
<div className="px-3 py-1 border border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-6">
                  Level_04
                </div>
<iconify-icon className="text-slate-600 group-hover:text-white transition-colors mb-6" icon="solar:lightbulb-bolt-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white uppercase tracking-tight mb-3 text-center">
                  AI Consulting
                </h3>
<p className="text-xs text-slate-500 font-mono leading-relaxed mb-8 text-center">
                  Not sure where to start? Our team analyzes your operations and identifies the highest-impact automation opportunities. Strategy first, implementation second.
                </p>
</div>
</div>
</div>
</section>
<section className="md:py-24 overflow-hidden flex flex-col select-none bg-[#050505] w-full border-slate-800 border-b pt-32 pb-32 relative items-center justify-center" id="contact">
<div className="absolute inset-0 pointer-events-none z-0" data-container-bg="true">
<div className="aura-background-component top-0 w-full z-0 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,transparent_50%)] pointer-events-none mix-blend-screen"></div>

<div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
<div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6">

<div className="mb-12 flex items-center gap-4">
<div className="h-px w-12 bg-slate-800"></div>
<div className="flex items-center gap-3 px-3 py-1 bg-slate-900/50 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-teal-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Vector AI, Inc
              </div>
<div className="h-px w-12 bg-slate-800"></div>
</div>

<h2 className="text-5xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter uppercase leading-[0.85] mb-8 relative group cursor-default sys-reveal sys-rise">
<span className="relative z-10">
                Schedule

                <span className="text-slate-700 group-hover:text-slate-600 transition-colors">
                  Demo
                </span>
</span>

<iconify-icon className="absolute -top-4 -right-8 opacity-50 text-4xl hidden md:block animate-pulse text-teal-600" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</h2>
<p className="text-sm text-slate-500 font-mono mb-16 max-w-md mx-auto leading-relaxed border-l-2 pl-6 text-left md:text-center md:border-l-0 md:pl-0 border-teal-600/50">
<span className="text-teal-600">//</span>
              Available remotely • By request • Subject to compliance
            </p>

<div className="relative group">

<div className="absolute -inset-1 rounded-sm opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500 bg-teal-600"></div>
<a className="relative bg-[#080808] border border-slate-700 text-white px-12 py-6 md:px-16 md:py-8 flex flex-col items-center justify-center transition-all duration-300 transform group-hover:-translate-y-1 sys-reveal sys-scale sys-delay-200 group-hover:border-teal-600" href="mailto:contact@vectorai.digital">
<div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-slate-500 transition-colors group-hover:border-teal-500"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-slate-500 transition-colors group-hover:border-teal-500"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-slate-500 transition-colors group-hover:border-teal-500"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-slate-500 transition-colors group-hover:border-teal-500"></div>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-2 transition-colors group-hover:text-teal-500">
                  Command_Execute
                </span>
<span className="text-xl md:text-3xl font-bold uppercase tracking-widest flex items-center gap-3">
                  [ Initiate_Sequence ]
                </span>
</a>
</div>

<div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl border-t border-slate-900 pt-8 opacity-60">
<div className="text-center">
<div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">
                  Security
                </div>
<div className="text-[10px] font-mono text-teal-500">
                  ENCRYPTED_256
                </div>
</div>
<div className="text-center border-l border-slate-900">
<div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">
                  Latency
                </div>
<div className="text-[10px] font-mono text-slate-400">0.02ms</div>
</div>
<div className="text-center border-l border-slate-900">
<div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest mb-1">
                  Node
                </div>
<div className="text-[10px] font-mono text-teal-600">
                  GLOBAL
                </div>
</div>
</div>
</div>
</section>
<footer className="border-t border-slate-800 bg-[#050505] text-slate-500 font-mono relative z-20">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.15]"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px] relative z-10">

<div className="lg:col-span-3 border-r border-slate-800 p-8 flex flex-col justify-between bg-slate-900/5 backdrop-blur-sm">
<div>

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:command-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-widest uppercase">
                    Vector AI
                  </span>
</div>
<div className="text-xs text-slate-500 leading-relaxed mb-8">
                  Vector AI is your solution to create smart and automated business operations. Designed for entrepreneurs and businesses, it provides the tools and AI needed to scale without friction.
                </div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] border-b border-slate-800 pb-2">
<span className="uppercase tracking-wider">Email</span>
<span className="text-slate-300">contact@vectorai.digital</span>
</div>
<div className="flex justify-between items-center text-[10px] pb-1">
<span className="uppercase tracking-wider">Env</span>
<span className="text-teal-600">PRODUCTION</span>
</div>
</div>
</div>

<div className="lg:col-span-6 border-r border-slate-800 grid grid-cols-1 md:grid-cols-3">

<div className="border-r border-slate-800 p-8 flex flex-col relative group hover:bg-slate-900/10 transition-colors">
<div className="text-[9px] uppercase tracking-widest mb-6 font-semibold text-teal-600">
                  // Platform
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      Overview
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      Agents
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      Infrastructure
                    </a>
</li>
</ul>
</div>

<div className="border-r border-slate-800 p-8 flex flex-col relative group hover:bg-slate-900/10 transition-colors">
<div className="text-[9px] text-slate-500 uppercase tracking-widest mb-6 font-semibold">
                  // Resources
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      Documentation
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      API Ref
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      Community
                    </a>
</li>
</ul>
</div>

<div className="p-8 flex flex-col relative group hover:bg-slate-900/10 transition-colors">
<div className="text-[9px] text-slate-500 uppercase tracking-widest mb-6 font-semibold">
                  // Developers
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      GitHub
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      CLI Tool
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-slate-700"></span>
                      SDKs
                    </a>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-3 p-8 flex flex-col justify-between bg-slate-900/5">
<div>
<div className="text-[9px] text-slate-500 uppercase tracking-widest mb-6 font-semibold">
                  // Company
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide mb-8">
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      About Vector AI
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="/privacy">
                      Privacy Policy
                    </a>
</li>
<li>
<a className="block text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="/terms">
                      Terms of Service
                    </a>
</li>
</ul>
</div>
<div className="bg-[#050505] border border-slate-800 p-4 relative group hover:border-slate-700 transition-colors">
<div className="text-[9px] uppercase tracking-wider text-slate-500 mb-2">
                  Subscribe_Newsletter
                </div>
<div className="flex gap-2">
<input className="bg-slate-900/50 border border-slate-800 text-[10px] px-2 py-1.5 w-full focus:outline-none text-white placeholder-slate-700 font-mono uppercase focus:border-teal-600" placeholder="EMAIL_ADDR" type="text"/>
<button className="bg-slate-800 text-white px-3 py-1.5 transition-colors border border-slate-700 flex items-center gap-2 uppercase text-[9px] tracking-widest whitespace-nowrap hover:bg-teal-600 hover:border-teal-600">
                    Initiate Sequence
                  </button>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 bg-[#080808] px-8 py-3 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-wider text-slate-600 relative z-20">
<div className="flex items-center gap-8">
<span className="hover:text-slate-400 transition-colors cursor-default">
                © 2026 Vector AI. All rights reserved. | San Juan, Puerto Rico
              </span>
<span className="hidden md:inline w-px h-3 bg-slate-800"></span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="/privacy">
                  Privacy
                </a>
<a className="hover:text-white transition-colors" href="/terms">Terms</a>
</div>
</div>
<div className="flex items-center gap-6 mt-2 md:mt-0 font-mono">
<div className="flex items-center gap-2 text-teal-900">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
<span className="text-teal-600">Secure_Connection</span>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
