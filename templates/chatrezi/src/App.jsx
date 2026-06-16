import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function() {
      // Typewriter Effect
      var root = document.querySelector('[data-element-id="aura-emj3v8mi32emth1tx"]');
      if (!root) return;
      
      var nodes = [];
      
      // Recursively find text nodes, skipping SVGs to preserve icons
      function findTextNodes(el) {
        if (el.nodeType === 3 && el.textContent.trim().length > 0) {
          nodes.push({ n: el, t: el.textContent });
          el.textContent = ''; // Clear text immediately
        } else if (el.nodeType === 1 && el.tagName !== 'SVG' && el.tagName !== 'svg' && el.tagName !== 'SCRIPT') {
          for (var child = el.firstChild; child; child = child.nextSibling) {
            findTextNodes(child);
          }
        }
      }
      
      findTextNodes(root);
      
      var nodeIndex = 0;
      var charIndex = 0;
      
      function type() {
        if (nodeIndex >= nodes.length) return;
        
        var currentItem = nodes[nodeIndex];
        
        if (charIndex < currentItem.t.length) {
          currentItem.n.textContent += currentItem.t.charAt(charIndex);
          charIndex++;
          // Fast random delay for realistic typing
          setTimeout(type, Math.random() * 5); 
        } else {
          nodeIndex++;
          charIndex = 0;
          // Short pause between text blocks
          setTimeout(type, 10); 
        }
      }
      
      // Start typing after a short delay to allow fade-in
      setTimeout(type, 300);
    })();
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-20 animated-background opacity-60 pointer-events-none"></div>
<div className="fixed inset-0 -z-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'}}></div>

<nav className="sticky top-0 z-50 bg-white/0 backdrop-blur-sm animate-in delay-0 flex-none">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-800 tracking-tight">powered by <a className="underline decoration-zinc-300 hover:decoration-zinc-800 hover:text-zinc-950 transition-colors" href="https://rezi.ai" target="_blank">Rezi</a></span>
</div>
<div className="flex gap-4 items-center">
<button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors font-sans font-medium" style={{}}>Sign in</button>
<a className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-xs text-white shadow-sm transition-all hover:bg-zinc-800 hover:scale-[1.02] focus-visible:outline-none active:scale-[0.98] font-sans font-medium" href="#" style={{}}>
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col w-full max-w-6xl mr-auto ml-auto pt-12 relative items-center">

<div className="flex-none text-center w-full max-w-3xl z-20 pr-6 pl-6">

<div className="animate-in delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-6 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] uppercase tracking-wide text-zinc-600 font-sans font-medium" style={{}}>AI-Powered Resume Builder</span>
</div>

<h1 className="animate-in delay-200 md:text-6xl leading-[1.1] text-5xl text-zinc-900 tracking-tight mb-4" style={{}}>ChatGPT Resume Builder</h1>

<p className="animate-in delay-300 text-lg text-zinc-500 leading-relaxed max-w-lg mx-auto mb-8 font-sans font-medium" style={{}}>
                Create ATS-optimized resumes in seconds with our GPT-4 powered chat assistant.
            </p>
</div>

<div className="animate-in delay-400 w-full max-w-2xl px-6 flex-none z-30 mb-8">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl opacity-50 blur transition duration-500 group-hover:opacity-70"></div>
<div className="relative bg-white rounded-xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-zinc-200/80 overflow-hidden ring-1 ring-zinc-100">
<textarea autofocus="" className="block w-full resize-none outline-none placeholder:text-zinc-400 text-sm font-medium text-zinc-800 h-28 pt-4 px-4 pb-12 rounded-xl border-2 border-transparent bg-white shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-shadow" placeholder="Paste your LinkedIn URL or type 'Create a resume for a Product Designer role'..." style={{backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(to right, #3b82f6, #a855f7, #ec4899, #3b82f6)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box', backgroundSize: '100% 100%, 400% 100%', animation: 'gradientMove 4s ease infinite'}}></textarea>

<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pl-2">
<div className="flex items-center gap-2">
<button className="flex gap-1.5 hover:text-zinc-700 hover:bg-zinc-100 transition-colors hover:border-zinc-200 text-xs text-zinc-500 border-transparent border rounded-md pt-1 pr-2 pb-1 pl-2 gap-x-1.5 gap-y-1.5 items-center font-sans font-medium" style={{}}>Attach Resume<svg className="lucide lucide-paperclip lucide-sparkles w-[12px] h-[12px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="paperclip" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(63, 63, 70)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg></button>
</div>
<button className="h-8 w-8 bg-zinc-900 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-all shadow-sm active:scale-95">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="w-full flex-grow overflow-hidden relative animate-in delay-500 mt-8">

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-40 pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 max-w-6xl mx-auto opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700">

<div className="aspect-[210/297] transform hover:translate-y-2 transition-transform duration-300 flex flex-col overflow-hidden text-zinc-900 font-pt-serif bg-white ring-zinc-200 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] translate-y-4">

<div className="flex flex-col pb-2 mb-1 animate-in delay-100">
<h1 className="text-sm font-medium text-blue-600 tracking-tight mb-1">Charles Bloomberg</h1>
<div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[6px] text-zinc-500 items-center font-medium leading-none">
<span className="flex items-center gap-0.5 font-sans font-medium" style={{}}>Seoul, South Korea</span>
<span className="flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-mail w-2 h-2" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="text-zinc-500 font-sans font-medium" style={{}}>charlesbloomberg@gmail.com</span>
</span>
<span className="flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-linkedin w-2 h-2" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="text-zinc-500 font-sans font-medium" style={{}}>in/cbloomberg</span>
</span>
</div>
<div className="w-full h-px bg-zinc-100 mt-2"></div>
</div>

<div className="flex flex-col gap-2 text-[6px]">

<div className="animate-in delay-200">
<h2 className="text-[7px] text-zinc-800 uppercase tracking-wider mb-0.5 font-sans font-medium" style={{}}>Professional Summary</h2>
<p className="font-medium text-zinc-600">
    Passion for building inspiring companies through industry-leading <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>tech</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>design</span>, and <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>execution</span>. An
    experienced early-stage global <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>executive</span> with an <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>economics</span> degree from the University of Wisconsin -
    Madison.
</p>
</div>

<div className="animate-in delay-300">
<h2 className="text-[7px] text-zinc-800 uppercase tracking-wider mb-1 font-sans font-medium" style={{}}>Professional Experience
            </h2>
<div className="w-full h-px bg-zinc-100 mb-1.5 -mt-0.5"></div>
<div className="flex flex-col gap-1.5">

<div className="">
<div className="flex items-center gap-1 mb-0.5">
<span className="text-blue-600 font-sans font-medium" style={{}}>CEO &amp; Founder</span>
<span className="text-zinc-300 font-sans font-medium" style={{}}>|</span>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Rezi</span>
</div>
<div className="text-zinc-400 mb-0.5 text-[5.5px] font-sans font-medium" style={{}}>August 2015—Present, Seoul, South Korea</div>
<ul className="list-disc ml-2 space-y-0.5 text-zinc-600 marker:text-zinc-300">
<li className="font-medium text-zinc-600 pl-0.5">Launched Rezi, a renowned <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>AI-powered</span> resume <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>SaaS</span> software, garnering trust from over
    4,133,800 users globally.</li>
<li className="font-medium text-zinc-600 pl-0.5">Initiated Rezi at the age of 22, and within a year, successfully <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>globalized</span> into South
    Korea, raising over $650,000 in <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>capital fundraising</span> efforts and gaining recognition as South Korea's leading English
    resume company.</li>
<li className="pl-0.5 text-zinc-600 font-medium" style={{}}>Adapted to market by developing <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>business models</span>, resulting in the
    creation of
    advanced <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>AI features</span> to outcompete alternatives. Collaborated with the development team, formulating zero-investment
    <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>growth strategies</span> that led to an addition of 600,000 users in six months. </li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-1 mb-0.5">
<span className="text-blue-600 font-sans font-medium" style={{}}>Web Developer</span>
<span className="text-zinc-300 font-sans font-medium" style={{}}>|</span>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Kaplan</span>
</div>
<div className="text-zinc-400 mb-0.5 text-[5.5px] font-sans font-medium" style={{}}>May 2015—November 2015, La Crosse, WI
  </div>
<ul className="list-disc ml-2 space-y-0.5 text-zinc-600 marker:text-zinc-300">
<li className="pl-0.5 text-zinc-600 font-medium" style={{}}>Executed <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>website redesign</span> of kaplancleantech.com without
      assistance using Expression Engine as a <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>CMS</span>.</li>
<li className="font-medium text-zinc-600 pl-0.5">Optimized 3 <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>landing page</span> variants using, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>HTML</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>A/B testing</span>
      software
      and customer feedback to increase <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>leads</span> for sales teams. </li>
</ul>
</div>
</div>
</div>

<div className="animate-in delay-400">
<h2 className="text-[7px] text-zinc-800 uppercase tracking-wider mb-1 font-sans font-medium" style={{}}>Consultancy</h2>
<div className="w-full h-px bg-zinc-100 mb-1.5 -mt-0.5"></div>
<div className="">
<div className="flex items-center gap-1 mb-0.5">
<span className="text-blue-600 font-sans font-medium" style={{}}>Early-Stage Startup Architect</span>
<span className="text-zinc-300 font-sans font-medium" style={{}}>|</span>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Independent Startup Consultant</span>
</div>
<div className="text-zinc-400 mb-0.5 text-[5.5px] font-sans font-medium" style={{}}>June 2020—Present</div>
<p className="font-medium text-zinc-600">Worked with 3 global founders to bring well-executed <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>MVPs</span> to market through <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>no-code</span>
  and "<span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>ship-first</span>"  methodologies.</p>
</div>
</div>

<div className="animate-in delay-500">
<h2 className="text-[7px] text-zinc-800 uppercase tracking-wider mb-1 font-sans font-medium" style={{}}>Education</h2>
<div className="w-full h-px bg-zinc-100 mb-1.5 -mt-0.5"></div>
<div className="">
<div className="flex items-center gap-1 flex-wrap mb-0.5">
<span className="text-blue-600 font-sans font-medium" style={{}}>Bachelor of Science in Economics</span>
<span className="text-zinc-300 font-sans font-medium" style={{}}>|</span>
<span className="text-zinc-900 font-sans font-medium" style={{}}>University of Wisconsin - Madison</span>
</div>
<div className="text-zinc-400 text-[5.5px] font-sans font-medium" style={{}}>Powers-Knapp Scholar, 2014</div>
</div>
</div>

<div className="animate-in delay-600">
<h2 className="text-[7px] text-zinc-800 uppercase tracking-wider mb-1 font-sans font-medium" style={{}}>Expert-Level Skills</h2>
<div className="w-full h-px bg-zinc-100 mb-1.5 -mt-0.5"></div>
<div className="flex flex-col gap-0.5 text-zinc-600">
<div className="font-medium" style={{}}>
<span className="text-zinc-900 font-medium" style={{}}>Leadership:</span> Speaking, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Fundraising</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Product
  Development</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>International Marketing</span></div>
<div className="font-sans font-medium" style={{}}><span className="text-zinc-900 font-sans font-medium" style={{}}>Front End:</span> <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>HTML</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>CSS</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Bootstrap</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Webflow</span></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none">
</div>

</div>

<div className="aspect-[210/297] transform hover:translate-y-2 transition-transform duration-300 flex flex-col overflow-hidden text-zinc-900 font-pt-serif bg-white ring-zinc-200 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] translate-y-4">

<div className="flex flex-col items-center mb-2">
<h1 className="text-sm text-zinc-900 tracking-tight mb-1 font-sans font-medium" style={{}}>Charles Bloomberg</h1>
<div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[5px] text-zinc-600 font-medium">
<span className="font-sans font-medium" style={{}}>Seoul, South Korea</span>
<span className="flex items-center gap-1 text-zinc-500 font-sans font-medium" style={{}}>
<svg className="text-zinc-800" fill="none" height="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                charlesbloomberg@gmail.com
            </span>
<span className="flex items-center gap-1 text-zinc-500 font-sans font-medium" style={{}}>
<svg className="text-zinc-800" fill="none" height="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                (621) 799-5548
            </span>
<span className="flex items-center gap-1 text-zinc-500 font-sans font-medium" style={{}}>
<svg className="text-zinc-800" fill="none" height="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="6" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                in/cbloomberg
            </span>
</div>
</div>

<div className="flex flex-col gap-3">

<div className="">
<h2 className="text-[6px] uppercase tracking-wider border-zinc-300 border-b mb-1.5 pb-0.5 font-sans font-medium" style={{}}>
  Professional Summary</h2>
<p className="text-[5px] leading-relaxed text-zinc-800 text-justify font-sans font-medium" style={{}}>
                Passion for building inspiring companies through industry-leading <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>tech</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>design</span>, and <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>execution</span>. An
                experienced early-stage global <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>executive</span> with an <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>economics</span> degree from the University of Wisconsin -
                Madison. Looking to join as a global startup consultant.
            </p>
</div>

<div className="">
<h2 className="text-[6px] uppercase tracking-wider border-zinc-300 border-b mb-1.5 pb-0.5 font-sans font-medium" style={{}}>
  Professional Experience</h2>

<div className="mb-2.5">
<div className="text-[5.5px] leading-snug mb-0.5">
<div className="text-zinc-900 font-sans font-medium" style={{}}>CEO &amp; Founder</div>
<div className="flex justify-between items-baseline">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Rezi</span>
<span className="text-zinc-800 font-sans font-medium" style={{}}>August 2015—Present, Seoul, South Korea</span>
</div>
</div>
<ul className="list-disc ml-2 space-y-0.5 text-[5px] text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Built Rezi - the most loved <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>resume software</span> in the world, trusted by over
                        2,227,254 users.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Founded Rezi at the age of 22. At 23, successfully <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>globalized</span> into South Korea
                        growing to be South Korea's leading English resume company.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Collaborated with the development team to engineer scalable <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>partnership
                        strategies</span> resulting in over 50,000 new users in 1 month with zero marketing dollars spent.</li>
</ul>
</div>

<div className="mb-2.5">
<div className="text-[5.5px] leading-snug mb-0.5">
<div className="text-zinc-900 font-sans font-medium" style={{}}>Web Developer</div>
<div className="flex justify-between items-baseline">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Kaplan</span>
<span className="text-zinc-800 font-sans font-medium" style={{}}>May 2015—November 2015, La Crosse, WI</span>
</div>
</div>
<ul className="list-disc ml-2 space-y-0.5 text-[5px] text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Executed <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>website redesign</span> of kaplancleantech.com using Expression Engine as a <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>CMS</span>
                        while working with marketing teams.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Lead the developing <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>SEO strategies</span> monitoring campaigns using <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>MOZ Analytics</span> for a
                        500k budget.</li>
</ul>
</div>

<div className="mb-1">
<div className="text-[5.5px] leading-snug mb-0.5">
<div className="text-zinc-900 font-sans font-medium" style={{}}>Marketing Analyst</div>
<div className="flex justify-between items-baseline">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Kaplan</span>
<span className="text-zinc-800 font-sans font-medium" style={{}}>November 2014—May 2015, La Crosse, WI</span>
</div>
</div>
<ul className="list-disc ml-2 space-y-0.5 text-[5px] text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Relied and implement <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Tableau dashboards</span> to track 6 <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>marketing KPIs</span>. Used data to
                        create reports circulated amongst leadership.</li>
</ul>
</div>
</div>

<div className="">
<h2 className="text-[6px] uppercase tracking-wider border-b border-zinc-300 pb-0.5 mb-1.5 font-sans font-medium" style={{}}>
  Consultancy</h2>
<div className="mb-1">
<div className="text-[5.5px] leading-snug mb-0.5">
<div className="text-zinc-900 font-sans font-medium" style={{}}>Early-Stage Startup Architect</div>
<div className="flex justify-between items-baseline">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Independant Startup Consultant</span>
<span className="text-zinc-700 text-[5px] font-sans font-medium" style={{}}>June 2020 - Present</span>
</div>
</div>
<p className="text-[5px] text-zinc-700 font-sans font-medium" style={{}}>Worked with 3 global founders to bring well-executed <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>MVPs</span> to market
                    through <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>no-code</span>.</p>
</div>
</div>

<div className="">
<h2 className="text-[6px] uppercase tracking-wider border-b border-zinc-300 pb-0.5 mb-1.5 font-sans font-medium" style={{}}>
  Education</h2>
<div className="text-[5.5px]">
<div className="text-zinc-900 font-sans font-medium" style={{}}>Bachelor of Science in Economics</div>
<div className="flex justify-between text-zinc-700">
<span className="font-sans font-medium" style={{}}>University of Wisconsin - Madison</span>
<span className="font-sans font-medium" style={{}}>2014</span>
</div>
</div>
</div>

<div>
<h2 className="text-[6px] uppercase tracking-wider border-b border-zinc-900 pb-0.5 mb-1.5 font-sans font-medium" style={{}}>
                Expert-Level Skills</h2>
<div className="text-[5px] text-zinc-700 font-sans font-medium" style={{}}>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Leadership:</span> Speaking, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Fundraising</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Product Development</span>,
                <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>International Marketing</span>
</div>
<div className="text-[5px] text-zinc-700 font-sans font-medium" style={{}}>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Front End:</span> <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>HTML</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>CSS</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Bootstrap</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Webflow</span>
</div>
</div>
</div>
</div>

<div className="aspect-[210/297] transform hover:translate-y-2 transition-transform duration-300 flex flex-col overflow-hidden text-zinc-900 font-pt-serif bg-white ring-zinc-200 ring-1 pt-6 pr-6 pb-6 pl-6 relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] translate-y-4">

<div className="text-center mb-3">
<h1 className="text-[11px] mb-1 text-zinc-900 leading-none font-sans font-medium" style={{}}>Charles Bloomberg</h1>
<div className="text-[5px] text-zinc-600 flex justify-center items-center gap-1 flex-wrap leading-tight">
<span className="font-sans font-medium" style={{}}>Seoul, South Korea</span>
<span className="text-zinc-400 font-sans font-medium" style={{}}>•</span>
<span className="font-sans font-medium" style={{}}>charlesbloomberg@gmail.com</span>
<span className="text-zinc-400 font-sans font-medium" style={{}}>•</span>
<span className="font-sans font-medium" style={{}}>(621) 799-5548</span>
<span className="text-zinc-400 font-sans font-medium" style={{}}>•</span>
<span className="font-sans font-medium" style={{}}>in/cbloomberg</span>
</div>
</div>

<div className="mb-2.5">
<div className="border-t border-zinc-300 pt-1 mb-1 text-center">
<h2 className="text-[6px] uppercase tracking-widest text-zinc-900 font-sans font-medium" style={{}}>Professional
                Summary</h2>
</div>
<p className="text-[5px] leading-relaxed text-zinc-700 text-justify font-sans font-medium" style={{}}>
            Passion for building inspiring companies through industry-leading <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>tech</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>design</span>, and <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>execution</span>. An
            experienced early-stage global <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>executive</span> with an <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>economics</span> degree from the University of Wisconsin -
            Madison. Looking to join as a global startup consultant.
        </p>
</div>

<div className="mb-2.5 flex-1">
<div className="border-t border-zinc-300 pt-1 mb-1.5 text-center">
<h2 className="text-[6px] uppercase tracking-widest text-zinc-900 font-sans font-medium" style={{}}>Professional
                Experience</h2>
</div>

<div className="mb-2">
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Rezi</span>
<span className="text-zinc-600 font-sans font-medium" style={{}}>Seoul, South Korea</span>
</div>
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-800 font-sans font-medium" style={{}}>CEO &amp; Founder</span>
<span className="text-zinc-500 font-sans font-medium" style={{}}>April 2015—Present</span>
</div>
<ul className="list-disc ml-2.5 text-[4.5px] space-y-0.5 text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Launched Rezi, a renowned <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>AI-powered</span> resume <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>SaaS</span>
                    software, garnering trust from over 3,133,800 users globally.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Initiated Rezi at the age of 22, and within a year,
                    successfully <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>globalized</span> into South Korea, raising over $650,000 in <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>capital fundraising</span> efforts and
                    gaining recognition as South Korea's leading English resume company.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Adapted to market by developing <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>business models</span>,
                    resulting in the creation of advanced <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>AI features</span> to outcompete alternatives. Collaborated with the
                    development team, formulating zero-investment <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>growth strategies</span> that led to an addition of 600,000
                    users in six months.</li>
</ul>
</div>

<div className="mb-2">
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Kaplan</span>
<span className="text-zinc-600 font-sans font-medium" style={{}}>La Crosse, WI</span>
</div>
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-800 font-sans font-medium" style={{}}>Web Developer</span>
<span className="text-zinc-500 font-sans font-medium" style={{}}>May 2015—November 2015</span>
</div>
<ul className="list-disc ml-2.5 text-[4.5px] space-y-0.5 text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Executed <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>website redesign</span> of kaplancleantech.com
                    without assistance using Expression Engine as a <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>CMS</span>.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Optimized 3 <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>landing page</span> variants using, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>HTML</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>A/B
                    testing</span> software and customer feedback to increase <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>leads</span> for sales teams.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Helped developed <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>SEO strategies</span> monitoring campaigns.
                    Maintained performance through site analysis, and new keyword research.</li>
</ul>
</div>

<div className="mb-1">
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Kaplan</span>
<span className="text-zinc-600 font-sans font-medium" style={{}}>La Crosse, WI</span>
</div>
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-800 font-sans font-medium" style={{}}>Marketing Analyst</span>
<span className="text-zinc-500 font-sans font-medium" style={{}}>November 2014—May 2015</span>
</div>
<ul className="list-disc ml-2.5 text-[4.5px] space-y-0.5 text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Relied and implement <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Tableau dashboards</span> to track 6
                    <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>marketing KPIs</span>. Used data to create reports circulated amongst leadership. Collaborated with
                    marketing specialists to improve marketing strategies to maximize <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>ROI</span> such as introducing Facebook
                    retargeting.</li>
<li className="pl-0.5 font-sans font-medium" style={{}}>Authored and promoted customer testimonials monthly to
                    enhance <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>brand credibility</span>, driving a 15% increase in online engagement and customer trust within 3
                    months.</li>
</ul>
</div>
</div>

<div className="mb-2.5">
<div className="border-t border-zinc-300 pt-1 mb-1.5 text-center">
<h2 className="text-[6px] uppercase tracking-widest text-zinc-900 font-sans font-medium" style={{}}>Consultancy
            </h2>
</div>
<div className="">
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Early-Stage Startup Architect</span>
<span className="text-zinc-500 font-sans font-medium" style={{}}>June 2020 - Present</span>
</div>
<div className="text-[5px] text-zinc-600 mb-0.5 font-sans font-medium" style={{}}>Independant Startup Consultant
            </div>
<ul className="list-disc ml-2.5 text-[4.5px] space-y-0.5 text-zinc-700 leading-normal marker:text-zinc-400">
<li className="pl-0.5 font-sans font-medium" style={{}}>Worked with 3 global founders to bring well-executed
                    <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>MVPs</span> to market through <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>no-code</span>
                    methodologies.</li>
</ul>
</div>
</div>

<div className="mb-2.5">
<div className="border-t border-zinc-300 pt-1 mb-1.5 text-center">
<h2 className="text-[6px] uppercase tracking-widest text-zinc-900 font-sans font-medium" style={{}}>Education</h2>
</div>
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-900 font-sans font-medium" style={{}}>Bachelor of Science in Economics</span>
<span className="text-zinc-600 font-sans font-medium" style={{}}>Powers-Knapp Scholar</span>
</div>
<div className="flex justify-between items-baseline text-[5.5px] leading-none mb-0.5">
<span className="text-zinc-700 font-sans font-medium" style={{}}>University of Wisconsin - Madison</span>
<span className="text-zinc-500 font-sans font-medium" style={{}}>2014</span>
</div>
</div>

<div className="">
<div className="border-t border-zinc-300 pt-1 mb-1.5 text-center">
<h2 className="text-[6px] uppercase tracking-widest text-zinc-900 font-sans font-medium" style={{}}>Expert-Level
                Skills</h2>
</div>
<div className="text-[4.5px] text-zinc-700 space-y-0.5 leading-normal">
<div className="font-sans font-medium" style={{}}>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Leadership:</span> Speaking, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Fundraising</span>,
                <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Product Development</span>,
                <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>International Marketing</span></div>
<div className="font-sans font-medium" style={{}}>
<span className="text-zinc-900 font-sans font-medium" style={{}}>Front End:</span> <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>HTML</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>CSS</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Bootstrap</span>,
                <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Webflow</span> |
                <span className="text-zinc-900 font-sans font-medium" style={{}}>Design:</span> <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Photoshop</span>, <span className="animate-in delay-700 rounded-[2px] px-0.5 -mx-0.5" style={{backgroundColor: 'rgb(210, 255, 248)'}}>Illustrator</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full bg-zinc-950 border-t border-zinc-800 py-6 z-50 flex-none relative">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
<svg className="lucide lucide-command w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</div>
<span className="text-xs text-zinc-400 font-sans font-medium" style={{}}>© 2024 ChatResume</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-sans font-medium" href="#" style={{}}>Privacy</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors font-sans font-medium" href="#" style={{}}>Terms</a>
<div className="flex items-center gap-3 ml-2 border-l border-zinc-800 pl-4">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<svg className="lucide lucide-twitter w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S4.5 14.2 4 9.5c2.1 2.8 5.5 2.2 4.9.4C6.1 7.7 2.6 7.4 2 2c.7 1.2 2.6 2.5 5 2.9-.5-2-1.5-5 3.5-5 1.5 0 2.5.5 4 1.5 1.5-1.5 2.5-2 2.5-2z"></path></svg>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<svg className="lucide lucide-github w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
