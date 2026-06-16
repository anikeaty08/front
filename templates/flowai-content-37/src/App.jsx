import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


(function() {
  const rail = document.getElementById('testimonial-rail');
  const prevButton = document.getElementById('testimonial-prev');
  const nextButton = document.getElementById('testimonial-next');
  
  if (rail && prevButton && nextButton) {
    const scrollDistance = 540; // Card width + gap
    
    // Previous button click handler
    prevButton.addEventListener('click', function(e) {
      e.preventDefault();
      rail.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth'
      });
    });
    
    // Next button click handler
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      rail.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
      });
    });
    
    // Update button states based on scroll position
    function updateButtonStates() {
      const scrollLeft = rail.scrollLeft;
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      
      // Disable/enable previous button
      if (scrollLeft <= 10) {
        prevButton.style.opacity = '0.5';
        prevButton.style.pointerEvents = 'none';
      } else {
        prevButton.style.opacity = '1';
        prevButton.style.pointerEvents = 'auto';
      }
      
      // Disable/enable next button
      if (scrollLeft >= maxScroll - 10) {
        nextButton.style.opacity = '0.5';
        nextButton.style.pointerEvents = 'none';
      } else {
        nextButton.style.opacity = '1';
        nextButton.style.pointerEvents = 'auto';
      }
    }
    
    // Initial button state update
    updateButtonStates();
    
    // Update button states on scroll
    rail.addEventListener('scroll', updateButtonStates);
    
    // Update button states on window resize
    window.addEventListener('resize', updateButtonStates);
  }
})();



    // Initialize Lucide icons
    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative z-10 sm:px-6 md:px-10 animate-slideDown bg-white w-full max-w-7xl border-neutral-200/70 border rounded-3xl mt-6 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 shadow-2xl">
<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<div className="flex gap-2 cursor-pointer items-center" onclick="window.location.href='/home'" role="button">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px] text-neutral-900" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-xl text-neutral-900 font-geist tracking-tight" style={{}}>FlowAI</span>
</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors hover:scale-105 duration-200 font-geist tracking-tight" href="/features" style={{}}>Features</a>
<a className="hover:text-neutral-900 transition-colors hover:scale-105 duration-200 font-geist tracking-tight" href="/workflows" style={{}}>Workflows</a>
<a className="hover:text-neutral-900 transition-colors hover:scale-105 duration-200 font-geist tracking-tight" href="/pricing" style={{}}>Pricing</a>
<a className="hover:text-neutral-900 transition-colors hover:scale-105 duration-200 font-geist tracking-tight" href="/about" style={{}}>About</a>
</nav>
<a className="inline-flex w-auto items-center justify-center rounded-xl px-5 py-3 text-sm text-white font-geist tracking-tight" href="#demo" onmousedown="this.style.transform='scale(0.95)'" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(0.98)'" onmouseup="this.style.transform='scale(1)'" style={{background: 'linear-gradient(rgb(23, 23, 23), rgb(17, 17, 17))', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 16px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset', border: '1px solid rgba(0, 0, 0, 0.5)'}}>
        Start Free Trial
      </a>
</div>
</header>

<section className="z-10 sm:p-8 animate-scaleIn animation-delay-200 text-white bg-neutral-950 w-full max-w-7xl border-white/10 border rounded-[48px] mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative top-0 right-0 bottom-0 left-0 shadow-2xl" style={{height: '600px', overflow: 'hidden'}}>

<div className="overflow-hidden bg-gradient-to-tr from-neutral-950 via-neutral-950/90 to-neutral-900/60 border-white/10 border rounded-[48px] absolute top-0 right-0 bottom-0 left-0 shadow-2xl backdrop-blur-sm items-center"><div className="absolute top-0 right-0 bottom-0 left-0 saturate-50 brightness-75" data-container-bg="true"><div className="aura-background-component -z-10 absolute w-full h-full top-0" style={{width: '1276px', height: '596px'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>


<div className="sm:w-1/2 flex w-full absolute top-0 bottom-0 left-0 items-center">
<div className="sm:px-10 w-full pr-6 pl-6">


<h2 className="sm:text-6xl md:text-7xl leading-[1.05] text-4xl text-white mt-4 font-geist tracking-tighter" style={{}}>Automate Your Content. Amplify Your Impact.</h2>

<p className="sm:text-base animate-fadeInRight animation-delay-400 text-sm text-neutral-300 max-w-[52ch] mt-4 font-geist tracking-tight" style={{}}>
            Generate, optimize, and distribute content across all channels with AI-powered automation. Save 10+ hours per week while scaling your content strategy.
          </p>

<div className="flex gap-4 sm:gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center">
<a className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm text-neutral-900 bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 transition-colors font-geist tracking-tight" href="#demo" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(0.98)'" style={{transform: 'scale(1)', boxShadow: 'rgba(34, 197, 94, 0.25) 0px 8px 24px'}}>
              Try Free for 14 Days
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-geist tracking-tight" href="#workflows" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(0.98)'" style={{transform: 'scale(1)'}}>
              See How It Works
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>


</div>
</div>

<div className="absolute top-1/2" style={{transform: 'translateY(-50%)', right: '-32px'}}>
<div className="overflow-hidden sm:w-[480px] bg-neutral-950 text-white w-[420px] border-white/10 border rounded-3xl relative shadow-2xl" style={{boxShadow: '0 40px 100px rgba(0,0,0,0.6)'}}>


<div className="card-top glass-effect w-[32rem] h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="absolute inset-0 rounded-[1.2em] border border-white/20" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="border-emerald-300/20 border rounded-[1.2em] absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(135deg, transparent 60%, rgba(16, 185, 129, 0.8))'}}></div>
<div className="pointer-events-none absolute -inset-px rounded-[1.3rem] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(52,211,153,0.12),transparent_60%)]"></div>
<div className="flex flex-col h-full p-6 pb-7">
<div className="flex justify-between items-start mb-2">
<div className="w-3/4">
<h1 className="text-[26px] leading-tight tracking-tight font-sans font-medium" style={{}}>FlowAI Engine</h1>
<p className="text-neutral-300 text-sm font-light mt-1 font-sans">Content Automation • Live</p>
</div>
<div className="w-1/4 text-right">
<div className="text-[20px] font-semibold font-mono font-sans">WORKFLOWS</div>
<div className="flex items-center justify-end gap-1 mt-1">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{boxShadow: '0 0 6px rgba(16, 185, 129, 0.3)'}}></div>
<span className="text-xs text-emerald-300 font-sans">RUNNING</span>
</div>
</div>
</div>
<div className="relative mx-auto w-full mb-4">
<div className="absolute inset-0 translate-y-2 scale-[0.98] rounded-lg bg-neutral-900/50 ring-1 ring-white/5 blur-[0.3px]"></div>
<div className="relative rounded-lg bg-[linear-gradient(180deg,rgba(19,24,31,0.9),rgba(10,13,18,0.9))] ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-neutral-950/50">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-500/60"></span>
<span className="h-2 w-2 rounded-full bg-amber-500/60"></span>
<span className="h-2 w-2 rounded-full bg-emerald-500/60"></span>
</div>
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-2 py-1 text-xs text-neutral-300">
<svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-neutral-400/80 font-sans">content-flow…</span>
</div>
</div>
<div className="relative h-32">
<div className="absolute inset-0 grid grid-cols-[30px_1fr]">
<div className="select-none border-r border-white/5 bg-neutral-950/30 px-2 py-2 text-[11px] leading-4 text-neutral-400/50">
<div className="font-sans">1</div><div className="font-sans">2</div><div className="font-sans">3</div><div className="font-sans">4</div><div className="font-sans">5</div><div className="font-sans">6</div><div className="font-sans">7</div><div className="font-sans">8</div>
</div>
<pre className="overflow-hidden text-[11px] leading-4 text-neutral-300 mt-0 mr-0 mb-0 ml-0 pt-2 pr-3 pb-2 pl-3"><span className="text-blue-300 font-sans">def</span> <span className="text-yellow-300 font-sans">generate_content</span>(brief, channels):
  <span className="text-emerald-300 font-sans">workflow</span> = <span className="text-yellow-300 font-sans">ContentWorkflow</span>()
  <span className="text-emerald-300 font-sans">content</span> = workflow.create(brief)
  <span className="text-emerald-300 font-sans">optimized</span> = workflow.optimize(content)
  
  <span className="text-blue-300 font-sans">for</span> channel <span className="text-blue-300 font-sans">in</span> channels:
    workflow.distribute(optimized, channel)
  <span className="text-blue-300 font-sans">return</span> workflow.analyze()</pre>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0B0F14] to-transparent"></div>
</div>
</div>
</div>
<div className="flex justify-between mb-4 max-w-lg">
<div className="text-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
<div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium" style={{}}>
          847
        </div>
<div className="text-xs opacity-70 uppercase tracking-wide font-sans">CONTENT PIECES</div>
</div>
<div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
<div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium" style={{}}>
          15
        </div>
<div className="text-xs opacity-70 uppercase tracking-wide font-sans">CHANNELS</div>
</div>
<div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
<div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5">
<div className="text-2xl leading-tight bg-gradient-to-r from-white/95 to-neutral-200/80 bg-clip-text text-transparent font-sans font-medium" style={{}}>
          92
          <span className="text-sm font-sans">%</span>
</div>
<div className="text-xs opacity-70 uppercase tracking-wide font-sans">EFFICIENCY</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent mb-3"></div>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg font-sans">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        AUTOMATION
      </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg font-sans">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        ANALYTICS
      </span>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-lg font-sans">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2m0 0H7m10 0v18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
        DISTRIBUTION
      </span>
</div>
<div className="rounded px-2 py-0.5 font-mono text-xs relative overflow-hidden mb-4" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.08) 100%)'}}>
<div className="flex items-center justify-between">
<span className="text-neutral-300 font-sans">STATUS: OPTIMIZING CONTENT</span>
<span className="text-white font-sans">v2.1.0</span>
</div>
</div>
<div className="mt-auto flex justify-between w-full">
<div className="flex flex-col">
<span className="opacity-70 flex items-center gap-2 text-sm mb-1">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-sans">AI-POWERED</span>
</span>
<span className="text-xs opacity-60 flex items-center gap-2 font-mono">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-sans">MULTI-CHANNEL</span>
</span>
</div>
<div className="flex flex-col items-end">
<span className="opacity-70 flex items-center gap-2 text-sm mb-1">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 48 48">
<path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="font-sans">FLOWAI</span>
<div className="w-2 h-2 rounded-full bg-emerald-400" style={{boxShadow: '0 0 6px rgba(52, 211, 153, 0.4)'}}></div>
</span>
<p className="text-sm font-medium flex items-center gap-2 cursor-pointer hover:text-blue-300 transition-colors">
<svg className="w-3 h-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-sans">dashboard.flowai.com</span>
</p>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-emerald-500/5 blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:p-8 animate-scaleIn animation-delay-300 bg-white w-full max-w-7xl border-neutral-200/70 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div className="flex gap-6 sm:px-0 animate-fadeInUp pr-1 pl-1 items-center">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-zinc-950 font-geist tracking-tighter" style={{}}>How it works.</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-neutral-200 h-10" role="separator"></span>
<p className="sm:text-base text-sm text-zinc-400 mt-1 font-geist tracking-tight" style={{}}>Three simple steps to automate your content</p>
</div>
<div className="h-px animate-fadeIn animation-delay-100 bg-neutral-200 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 z-10 sm:mt-8 mt-6 relative items-stretch">

<div className="lg:col-span-4 sm:p-8 hover-lift bg-white border-neutral-200 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative h-full flex flex-col">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 font-geist tracking-tight" style={{}}>STEP 1</span>

<div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden">
<div className="absolute inset-0 p-4 sm:p-6">

<div className="bg-white/90 border border-neutral-200 rounded-xl p-4 w-full shadow-2xl">
<div className="flex items-center gap-2 mb-3">
<svg className="w-4 h-4 text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>
<div className="h-2 w-24 bg-neutral-900 rounded"></div>
</div>
<div className="h-2 w-full bg-neutral-100 rounded mb-2"></div>
<div className="h-2 w-4/5 bg-neutral-100 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-neutral-100 rounded mb-3"></div>
<div className="flex gap-2">
<div className="h-6 w-16 bg-emerald-100 rounded-lg flex items-center justify-center">
<div className="h-1 w-8 bg-emerald-600 rounded"></div>
</div>
<div className="h-6 w-20 bg-neutral-100 rounded-lg"></div>
</div>
</div>

</div>
</div>

<h3 className="mt-6 text-3xl sm:text-4xl text-neutral-900 font-geist tracking-tighter" style={{}}>Create your brief</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-[52ch] font-geist tracking-tight" style={{}}>Simply describe your content goals, target audience, and key messages. Our AI understands context and brand voice.</p>
</div>

<div className="lg:col-span-4 sm:p-8 hover-lift bg-white border-neutral-200 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative h-full flex flex-col">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 font-geist tracking-tight" style={{}}>STEP 2</span>

<div className="relative h-48 sm:h-56 rounded-2xl border border-neutral-200 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 p-4">
<div className="grid grid-cols-2 gap-3 h-full">

<div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-blue-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<div className="h-1.5 w-12 bg-blue-600 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-neutral-200 rounded"></div>
<div className="h-1 w-4/5 bg-neutral-200 rounded"></div>
<div className="h-1 w-3/4 bg-neutral-200 rounded"></div>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<div className="h-1.5 w-10 bg-emerald-600 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-neutral-200 rounded"></div>
<div className="h-1 w-5/6 bg-neutral-200 rounded"></div>
<div className="h-1 w-2/3 bg-neutral-200 rounded"></div>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-purple-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
<div className="h-1.5 w-14 bg-purple-600 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-neutral-200 rounded"></div>
<div className="h-1 w-4/5 bg-neutral-200 rounded"></div>
<div className="h-1 w-3/5 bg-neutral-200 rounded"></div>
</div>
</div>
<div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-orange-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l11.733 16h4.267l-11.733-16z"></path><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"></path></svg>
<div className="h-1.5 w-8 bg-orange-600 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-neutral-200 rounded"></div>
<div className="h-1 w-3/4 bg-neutral-200 rounded"></div>
<div className="h-1 w-4/5 bg-neutral-200 rounded"></div>
</div>
</div>
</div>

</div>

<h3 className="mt-6 text-3xl sm:text-4xl text-neutral-900 font-geist tracking-tighter" style={{}}>AI generates content</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-[52ch] font-geist tracking-tight" style={{}}>Our AI creates multiple content variations optimized for different channels and formats in seconds.</p>
</div>

<div className="lg:col-span-4 relative rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-8 hover-lift h-full flex flex-col">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 font-geist tracking-tight" style={{}}>STEP 3</span>

<div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden p-4">
<div className="w-full h-full rounded-xl overflow-hidden bg-white border border-neutral-200 p-3">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
<svg className="text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v5h5"></path><path d="M21 12A9 9 0 0 0 6 2.3L3 8"></path><path d="M21 21v-5h-5"></path><path d="M3 12a9 9 0 0 0 15 6.7L21 16"></path></svg>
</div>
<div className="h-2 w-16 bg-neutral-900 rounded"></div>
</div>
<div className="w-4 h-4 bg-green-400 rounded-full"></div>
</div>

<div className="grid grid-cols-3 gap-2 mb-3">
<div className="bg-blue-50 border border-blue-200 rounded p-2 text-center">
<svg className="mx-auto text-blue-600 mb-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<div className="h-1 w-8 bg-blue-600 rounded mx-auto"></div>
</div>
<div className="bg-emerald-50 border border-emerald-200 rounded p-2 text-center">
<svg className="mx-auto text-emerald-600 mb-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M6 8l6 4 6-4"></path></svg>
<div className="h-1 w-6 bg-emerald-600 rounded mx-auto"></div>
</div>
<div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">
<svg className="mx-auto text-purple-600 mb-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect className="" height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<div className="h-1 w-10 bg-purple-600 rounded mx-auto"></div>
</div>
</div><div className="grid grid-cols-3 gap-2 mb-3">
<div className="bg-blue-50 border border-blue-200 rounded p-2 text-center">
<svg className="mx-auto text-blue-600 mb-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<div className="h-1 w-8 bg-blue-600 rounded mx-auto"></div>
</div>
<div className="text-center bg-emerald-50 border-emerald-200 border rounded pt-2 pr-2 pb-2 pl-2">
<svg className="mx-auto text-emerald-600 mb-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect><path className="" d="M6 8l6 4 6-4"></path></svg>
<div className="h-1 w-6 bg-emerald-600 rounded mx-auto"></div>
</div>
<div className="bg-purple-50 border border-purple-200 rounded p-2 text-center">
<svg className="mx-auto text-purple-600 mb-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<div className="h-1 w-10 bg-purple-600 rounded mx-auto"></div>
</div>
</div>

</div>
</div>

<h3 className="mt-6 text-3xl sm:text-4xl text-neutral-900 font-geist tracking-tighter" style={{}}>Distribute &amp; optimize</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-[52ch] font-geist tracking-tight" style={{}}>Content is automatically distributed across your channels with performance tracking and optimization.</p>
</div>
</div>
</section>

<section className="z-10 sm:p-8 animate-scaleIn animation-delay-400 bg-[#ffffff] w-full max-w-7xl border-neutral-200/70 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div className="flex gap-6 sm:px-0 animate-fadeInUp pr-1 pl-1 items-center">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-[#000000] font-geist tracking-tighter" style={{}}>Testimonials.</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-neutral-200 h-10" role="separator"></span>
<p className="sm:text-base text-sm text-zinc-400 mt-1 font-geist tracking-tight" style={{}}>Real stories, real success. Our customers have experienced firsthand the impact of our AI-powered solutions.</p>
</div>
<div className="h-px animate-fadeIn animation-delay-100 bg-neutral-200 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 sm:mt-8 mt-6 items-center">


<div className="lg:col-span-12 relative">
<div className="relative overflow-hidden h-[420px] rounded-3xl mt-6">

<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

<div className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center" id="testimonial-rail" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover-lift backdrop-blur-sm snap-center -rotate-2 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-geist tracking-tighter" style={{}}>
            "FlowAI transformed our content strategy. We now generate 10x more content while maintaining quality."
          </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="">
<div className="text-sm font-geist tracking-tight" style={{}}>Sarah Chen</div>
<div className="text-xs text-neutral-500 font-geist tracking-tight" style={{}}>Marketing Director, TechFlow</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover-lift backdrop-blur-sm snap-center rotate-1 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-geist tracking-tighter" style={{}}>
            "The AI automation saved us 20+ hours weekly. Our content performance increased by 300%."
          </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="">
<div className="text-sm font-geist tracking-tight" style={{}}>Marcus Rodriguez</div>
<div className="text-xs text-neutral-500 font-geist tracking-tight" style={{}}>Content Lead, GrowthLab</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover-lift backdrop-blur-sm snap-center -rotate-1 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-geist tracking-tighter" style={{}}>
            "Incredible ROI. FlowAI paid for itself within the first month of implementation."
          </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="">
<div className="text-sm font-geist tracking-tight" style={{}}>Emma Thompson</div>
<div className="text-xs text-neutral-500 font-geist tracking-tight" style={{}}>Founder, Digital Ventures</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover-lift backdrop-blur-sm snap-center rotate-2 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-geist tracking-tighter" style={{}}>
            "From brief to published content in minutes — completely game-changing for our workflow."
          </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-geist tracking-tight" style={{}}>Alex Morgan</div>
<div className="text-xs text-neutral-500 font-geist tracking-tight" style={{}}>Creative Director, Apex Studios</div>
</div>
</div>
</article>

<article className="min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover-lift backdrop-blur-sm snap-center -rotate-3 shadow-2xl">
<p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-geist tracking-tighter" style={{}}>
            "The analytics and multi-channel distribution features are phenomenal. Best investment we made."
          </p>
<div className="mt-8 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;h=200&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-geist tracking-tight" style={{}}>Priya Patel</div>
<div className="text-xs text-neutral-500 font-geist tracking-tight" style={{}}>Head of Marketing, InnovateCorp</div>
</div>
</div>
</article>
</div>

<div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
<button aria-label="Previous" className="hover:bg-neutral-200 transition-colors inline-flex text-neutral-900 bg-neutral-100 w-10 h-10 border-neutral-200 border rounded-full items-center justify-center" id="testimonial-prev" style={{opacity: '0.5', pointerEvents: 'none'}}>
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="w-10 h-10 rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-colors inline-flex items-center justify-center" id="testimonial-next" style={{opacity: '1', pointerEvents: 'auto'}}>
<svg className="lucide lucide-arrow-right w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '24px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

</section>

<section className="z-10 sm:p-8 animate-scaleIn animation-delay-500 bg-white w-full max-w-7xl border-neutral-200/70 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-2xl">

<div className="flex gap-6 sm:px-0 animate-fadeInUp pr-1 pl-1 items-center">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-zinc-950 font-geist tracking-tighter" style={{}}>Pricing.</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-neutral-200 h-10" role="separator"></span>
<p className="sm:text-base text-sm text-zinc-400 mt-1 font-geist tracking-tight" style={{}}>Intelligent automation for every scale</p>
</div>
<div className="h-px bg-neutral-200 mt-4 animate-fadeIn animation-delay-100"></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-200">
<div className="rounded-[28px] bg-white text-neutral-900 border border-neutral-200/70 shadow-2xl p-6 sm:p-8">
<h3 className="text-3xl sm:text-4xl font-geist tracking-tighter" style={{}}>Starter</h3>
<p className="text-neutral-600 mt-2 font-geist tracking-tight" style={{}}>Perfect for small teams and individual creators starting their automation journey.</p>
<div className="mt-6 mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-geist tracking-tighter" style={{}}>$29</span>
<span className="text-neutral-600 font-geist tracking-tight" style={{}}>/month</span>
</div>
<p className="text-sm text-neutral-500 mt-1 font-geist tracking-tight" style={{}}>Billed monthly</p>
</div>
<ul className="mt-6 space-y-4">
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-neutral-800 font-geist tracking-tight" style={{}}>10 AI content generations per day</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-neutral-800 font-geist tracking-tight" style={{}}>Basic SEO optimization</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-neutral-800 font-geist tracking-tight" style={{}}>3 distribution channels</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-neutral-800 font-geist tracking-tight" style={{}}>Email support</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-neutral-800 font-geist tracking-tight" style={{}}>14-day free trial</span>
</li>
</ul>
<div className="mt-8">
<a className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm text-white font-geist tracking-tight" href="#demo" style={{background: 'linear-gradient(rgb(23, 23, 23), rgb(17, 17, 17))', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 16px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset', border: '1px solid rgba(0, 0, 0, 0.5)'}}>
              Start Free Trial
            </a>
</div>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-300">
<div className="sm:p-8 text-white bg-neutral-950 border-white/10 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
</div>
<h3 className="text-3xl sm:text-4xl font-geist tracking-tighter" style={{}}>Pro</h3>
<p className="text-neutral-300 mt-2 font-geist tracking-tight" style={{}}>Advanced automation for growing teams and content-focused businesses.</p>
<div className="mt-6 mb-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-geist tracking-tighter" style={{}}>$99</span>
<span className="text-neutral-300 font-geist tracking-tight" style={{}}>/month</span>
</div>
<p className="text-sm text-neutral-400 mt-1 font-geist tracking-tight" style={{}}>Billed monthly</p>
</div>
<ul className="mt-6 space-y-4">
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="font-geist tracking-tight" style={{}}>Unlimited AI content generation</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="font-geist tracking-tight" style={{}}>Advanced SEO &amp; performance analytics</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="font-geist tracking-tight" style={{}}>Unlimited distribution channels</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="font-geist tracking-tight" style={{}}>Custom workflow automation</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="font-geist tracking-tight" style={{}}>Priority support &amp; onboarding</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 flex-shrink-0">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="font-geist tracking-tight" style={{}}>Team collaboration tools</span>
</li>
</ul>
<div className="mt-8">
<a className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm text-neutral-900 bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 transition-all duration-200 font-geist tracking-tight" href="#demo" style={{}}>
              Start Pro Trial
            </a>
</div>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-400">
<div className="rounded-[24px] bg-gradient-to-br from-neutral-50 to-neutral-100/60 border border-neutral-200 p-6 sm:p-8">
<div className="flex items-center gap-3">
<svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3 3-3"></path><path d="M16 18h6"></path></svg>
<h4 className="text-xl text-neutral-900 font-geist tracking-tight" style={{}}>Enterprise</h4>
</div>
<p className="text-sm text-neutral-600 mt-3 max-w-[52ch] font-geist tracking-tight" style={{}}>Custom solutions for large organizations with dedicated support, white-label options, and enterprise-grade security.</p>
<div className="mt-4 flex items-center gap-3">
<p className="text-sm text-neutral-900 font-geist tracking-tight" style={{}}>Custom pricing</p>
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs text-blue-700 bg-blue-50 border border-blue-200 font-geist tracking-tight" style={{}}>
              Contact Sales
            </span>
</div>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-400">
<div className="rounded-[24px] bg-gradient-to-br from-neutral-50 to-neutral-100/60 border border-neutral-200 p-6 sm:p-8">
<div className="flex items-center gap-3">
<svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m21 12-6-6m-6 6-6-6"></path></svg>
<h4 className="text-xl text-neutral-900 font-geist tracking-tight" style={{}}>Add-ons</h4>
</div>
<p className="text-sm text-neutral-600 mt-3 max-w-[52ch] font-geist tracking-tight" style={{}}>Premium content templates, advanced integrations, custom AI training, and dedicated account management available.</p>
<p className="mt-4 text-sm text-neutral-900 font-geist tracking-tight" style={{}}>Starting at $19/month</p>
</div>
</div>
</div>

<div className="mt-8 text-center animate-fadeInUp animation-delay-500">
<p className="text-sm text-neutral-600 mb-4 font-geist tracking-tight" style={{}}>All plans include 14-day free trial • No credit card required • Cancel anytime</p>
<a className="inline-flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-700 transition-colors font-geist tracking-tight" href="#demo" style={{}}>
        Compare all features
        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<div className="z-10 sm:p-8 animate-scaleIn animation-delay-600 text-white bg-neutral-950 w-full max-w-7xl border-white/10 border rounded-[28px] mt-24 mr-auto mb-6 ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px] rounded-tr-[36px]">
<div className="absolute inset-0" style={{background: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: '0.15'}}></div>
<div className="absolute -right-20 -top-4 w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-3xl"></div>
<div className="absolute -left-20 -bottom-20 w-[420px] h-[420px] rounded-full bg-emerald-500/5 blur-3xl"></div>
</div>

<div className="relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 sm:p-8 bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10 border rounded-[24px] pt-6 pr-6 pb-6 pl-6 items-center">

<div className="max-w-[620px]">
<p className="text-sm text-emerald-400 mb-3 font-geist tracking-tight">Get Started</p>
<h2 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-geist font-semibold">
      Ready to Transform Your Content?
    </h2>
<p className="sm:text-base text-sm text-neutral-300 mt-3 font-geist tracking-tight">
      Join thousands of teams already using FlowAI to automate their content workflow and scale their reach.
    </p>
<div className="relative mt-6">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-geist tracking-tight text-white border border-white/10 shadow-2xl" href="#signup" style={{background: 'linear-gradient(180deg, #10b981, #059669)', boxShadow: '0 12px 30px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
        START FREE TRIAL
      </a>
<div aria-hidden="true" className="pointer-events-none absolute -z-10 -bottom-2 left-0 right-0 h-10 mx-auto rounded-full" style={{filter: 'blur(18px)', background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,0.35), rgba(16,185,129,0) 70%)'}}>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl border border-white/10 bg-neutral-900/60 overflow-hidden backdrop-blur-sm">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-neutral-900/60">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-neutral-700"></span>
<span className="h-2 w-2 rounded-full bg-neutral-700"></span>
<span className="h-2 w-2 rounded-full bg-neutral-700"></span>
</div>
<div className="h-2 w-24 rounded bg-neutral-800"></div>
</div>

<div className="p-4 grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between mb-2">
<div className="h-2 w-10 rounded bg-neutral-700"></div>
<div className="h-2 w-6 rounded bg-emerald-500/60"></div>
</div>
<div className="h-6 w-20 rounded bg-neutral-800 mb-1"></div>
<div className="h-1.5 w-3/4 rounded bg-emerald-500/40"></div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between mb-2">
<div className="h-2 w-10 rounded bg-neutral-700"></div>
<div className="h-2 w-6 rounded bg-emerald-500/60"></div>
</div>
<div className="h-6 w-14 rounded bg-neutral-800 mb-1"></div>
<div className="h-1.5 w-1/2 rounded bg-emerald-400/60"></div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-3 col-span-2">
<div className="h-2 w-20 rounded bg-neutral-700 mb-3"></div>
<div className="grid grid-cols-6 gap-1 items-end">
<div className="h-6 bg-emerald-400/60 rounded"></div>
<div className="h-10 bg-emerald-400/60 rounded"></div>
<div className="h-14 bg-emerald-400/60 rounded"></div>
<div className="h-20 bg-emerald-400/60 rounded"></div>
<div className="h-12 bg-emerald-400/60 rounded"></div>
<div className="h-16 bg-emerald-400/60 rounded"></div>
</div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl">
</div>
</div>
</div>
</div>

<div className="h-px bg-white/5 mt-8 mb-6"></div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="w-6 h-6 text-white" strokeWidth="2" viewbox="0 0 48 48">
<path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="text-sm text-white font-geist tracking-tight">FlowAI</span>
<span className="text-xs text-neutral-500 font-geist tracking-tight">© 2025</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<a className="text-xs text-neutral-400 hover:text-neutral-300 transition-colors font-geist tracking-tight" href="#">Privacy Policy</a>
</div>
<nav className="flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-neutral-300 transition-colors font-geist tracking-tight" href="/features">Features</a>
<a className="hover:text-neutral-300 transition-colors font-geist tracking-tight" href="/about">About</a>
<a className="hover:text-neutral-300 transition-colors font-geist tracking-tight" href="/pricing">Pricing</a>
<a className="hover:text-neutral-300 transition-colors font-geist tracking-tight" href="/changelog">Changelog</a>
<a className="hover:text-neutral-300 transition-colors font-geist tracking-tight" href="/contact">Contact</a>
<span className="hidden sm:inline-block w-px h-4 bg-white/10"></span>
<div className="hidden sm:flex items-center gap-4">
<a aria-label="LinkedIn" className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Twitter" className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="GitHub" className="text-neutral-500 hover:text-neutral-300 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</nav>
</div>
</div>
</div>


    </>
  );
}
