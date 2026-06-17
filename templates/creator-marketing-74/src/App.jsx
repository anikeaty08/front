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



        // Simple Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorCircle = document.getElementById('cursor-circle');
        
        // Only activate custom cursor on non-touch devices
        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                // Update dot position instantly
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                // Update circle position with slight delay
                cursorCircle.style.left = `${posX}px`;
                cursorCircle.style.top = `${posY}px`;
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
      

<div className="cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="cursor-circle hidden md:block" id="cursor-circle"></div>

<nav className="fixed top-0 w-full z-50 px-4 py-6 mix-blend-difference text-white">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="text-2xl font-medium tracking-tighter uppercase z-50" href="#">Archive.</a>
<div className="hidden md:flex gap-8 text-sm font-normal tracking-tight">
<a className="hover:underline decoration-2 underline-offset-4" href="#skills">Skills</a>
<a className="hover:underline decoration-2 underline-offset-4" href="#setup">Setup</a>
<a className="hover:underline decoration-2 underline-offset-4" href="#archive">Archive App</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full font-normal text-sm hover:scale-105 transition-transform duration-300" href="#archive">
                Book a Demo
            </a>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#FDE047] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F9A8D4] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-7xl w-full px-4 md:px-8 relative z-10 flex flex-col justify-center">
<div className="space-y-[-1rem] md:space-y-[-2rem] w-full">

<div className="flex items-center gap-4">
<h1 className="text-7xl sm:text-8xl md:text-9xl leading-none font-semibold tracking-tighter text-slate-900 transform hover:skew-x-3 transition-transform duration-500 cursor-default">
                        CREATOR
                    </h1>
<div className="hidden md:flex h-16 w-32 bg-[#FDE047] rounded-full items-center justify-center rotate-6 neo-shadow-sm border-2 border-black">
<iconify-icon className="text-black text-4xl" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-end gap-4 w-full">
<div className="hidden md:flex h-20 w-20 bg-[#F9A8D4] rounded-full items-center justify-center -rotate-12 neo-shadow-sm border-2 border-black">
<iconify-icon className="text-black text-4xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-7xl sm:text-8xl md:text-9xl leading-none font-semibold tracking-tighter text-slate-900 text-right transform hover:-skew-x-3 transition-transform duration-500 cursor-default">
                        MARKETING
                    </h1>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mt-4 md:mt-0">
<span className="text-xl md:text-3xl font-normal tracking-tight font-[Space_Grotesk] bg-black text-white px-4 py-1 rounded-full -rotate-2">
                        &amp;
                    </span>
<h1 className="text-6xl sm:text-7xl md:text-8xl leading-none font-medium tracking-tighter text-slate-900 text-outline hover:text-[#2563EB] transition-colors duration-300">
                        SKILLS PLAYBOOK
                    </h1>
</div>
</div>
<p className="mt-12 text-lg md:text-xl max-w-xl font-normal leading-relaxed tracking-tight text-slate-700">
                The ultimate open-source guide to leveling up your influencer marketing program. Master strategies, outreach templates, and scalable workflows built for modern marketers.
            </p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="px-8 py-4 bg-[#2563EB] border-2 border-black text-white font-semibold text-lg rounded-xl neo-shadow hover:translate-y-1 hover:shadow-none transition-all duration-200" href="#skills">
                    Explore Skills
                </a>
<a className="px-8 py-4 bg-white border-2 border-black text-black font-semibold text-lg rounded-xl neo-shadow hover:translate-y-1 hover:shadow-none transition-all duration-200 flex items-center gap-2" href="https://github.com/archive-dot-com/creator-marketing-skills/tree/main" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                    View on GitHub
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-4xl text-slate-400" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</header>

<div className="w-full bg-black py-4 overflow-hidden border-y-4 border-black rotate-1 scale-105 z-20 relative my-12">
<div className="whitespace-nowrap flex animate-marquee">
<span className="text-3xl md:text-5xl font-semibold text-[#FDE047] mx-8 tracking-tighter font-[Syne]">OUTREACH</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-semibold text-[#F9A8D4] mx-8 tracking-tighter font-[Syne]">NEGOTIATION</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-semibold text-[#2563EB] mx-8 tracking-tighter font-[Syne]">ROI TRACKING</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-semibold text-[#FDE047] mx-8 tracking-tighter font-[Syne]">CAMPAIGNS</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-semibold text-[#F9A8D4] mx-8 tracking-tighter font-[Syne]">SEEDING</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-semibold text-[#FDE047] mx-8 tracking-tighter font-[Syne]">OUTREACH</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
<span className="text-3xl md:text-5xl font-semibold text-[#F9A8D4] mx-8 tracking-tighter font-[Syne]">NEGOTIATION</span>
<span className="text-3xl md:text-5xl font-semibold text-white mx-8 tracking-tighter font-[Syne]">•</span>
</div>
</div>

<section className="py-24 bg-[#FFFDF5] relative overflow-hidden" id="skills">

<div className="absolute right-0 top-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute left-0 bottom-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-center mb-16">
                CORE <span className="relative inline-block px-4">
<span className="absolute inset-0 bg-[#F9A8D4] -skew-y-2 transform -z-10 border-2 border-black neo-shadow-sm"></span>
                    PLAYBOOK
                </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-white border-2 border-black rounded-2xl hover:bg-[#FDE047] transition-colors duration-300 group neo-shadow-sm hover:neo-shadow cursor-default">
<iconify-icon className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl font-semibold font-[Syne] tracking-tight mb-2">Campaign Strategy</h3>
<p className="text-sm font-normal opacity-90 leading-relaxed">Learn how to effectively structure product seeding, affiliate programs, and tiered brand ambassador campaigns to maximize your impact.</p>
</div>

<div className="p-8 bg-white border-2 border-black rounded-2xl hover:bg-[#2563EB] hover:text-white transition-colors duration-300 group neo-shadow-sm hover:neo-shadow cursor-default">
<iconify-icon className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:letter-opened-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl font-semibold font-[Syne] tracking-tight mb-2">Creator Outreach</h3>
<p className="text-sm font-normal opacity-90 leading-relaxed">Access proven DM and email templates that cut through the noise. Learn the exact negotiation scripts that top influencer managers use.</p>
</div>

<div className="p-8 bg-white border-2 border-black rounded-2xl hover:bg-[#F9A8D4] transition-colors duration-300 group neo-shadow-sm hover:neo-shadow cursor-default">
<iconify-icon className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl font-semibold font-[Syne] tracking-tight mb-2">Measurement &amp; ROI</h3>
<p className="text-sm font-normal opacity-90 leading-relaxed">Move past vanity metrics. Implement robust tracking frameworks to calculate actual customer acquisition costs and campaign profitability.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white relative" id="setup">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-20">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tighter text-slate-900">
                    HOW TO <br/> <span className="text-[#2563EB]">IMPLEMENT</span>
</h2>
<p className="text-lg font-normal text-slate-500 max-w-sm mt-6 md:mt-0 text-right">
                    Seamlessly bring these frameworks into your team's day-to-day operations.
                </p>
</div>
<div className="flex flex-col gap-32">

<div className="project-card group relative w-full md:w-10/12 mx-auto">
<div className="absolute inset-0 bg-[#FDE047] rounded-3xl border-2 border-black transform rotate-2 group-hover:rotate-6 transition-transform duration-500 z-0"></div>
<div className="relative bg-white rounded-3xl border-2 border-black p-4 md:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="aspect-video bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative group-hover:scale-[1.02] transition-transform duration-500">
<div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg border border-stone-100 p-4 space-y-3">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="h-6 w-1/2 bg-stone-200 rounded"></div>
<div className="space-y-2 mt-4">
<div className="h-4 w-full bg-stone-100 rounded"></div>
<div className="h-4 w-5/6 bg-stone-100 rounded"></div>
<div className="h-4 w-4/6 bg-stone-100 rounded"></div>
</div>
</div>
</div>
</div>
<div className="space-y-6 px-2">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-black text-white text-xs font-medium uppercase tracking-wider rounded-full">Step 01</span>
</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2">READ THE GUIDES</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                                        Dive into our comprehensive markdown repositories containing curated insights. Treat this as your primary knowledge base for modern creator marketing.
                                    </p>
</div>
<a className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight underline decoration-2 underline-offset-4 hover:text-[#2563EB] transition-colors" href="https://github.com/archive-dot-com/creator-marketing-skills/tree/main" target="_blank">
                                    Browse Repository <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="project-card group relative w-full md:w-10/12 mx-auto">
<div className="absolute inset-0 bg-[#F9A8D4] rounded-3xl border-2 border-black transform -rotate-1 group-hover:-rotate-3 transition-transform duration-500 z-0"></div>
<div className="relative bg-white rounded-3xl border-2 border-black p-4 md:p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1 space-y-6 px-2">
<div>
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-black text-white text-xs font-medium uppercase tracking-wider rounded-full">Step 02</span>
</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2">DUPLICATE TEMPLATES</h3>
<p className="text-slate-600 text-lg leading-relaxed">
                                        Don't start from scratch. Copy our Notion templates, outreach scripts, and Google Sheets tracker documents directly into your own workspace.
                                    </p>
</div>
<button className="flex items-center gap-2 text-xl font-semibold tracking-tight underline decoration-2 underline-offset-4 hover:text-[#F9A8D4] transition-colors">
                                    Access Templates <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="order-1 md:order-2 aspect-video bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative group-hover:scale-[1.02] transition-transform duration-500">
<div className="w-full h-full bg-gradient-to-bl from-pink-100 to-blue-50 flex items-center justify-center p-6">
<div className="w-full h-full bg-white border-2 border-black rounded-lg p-3 flex gap-4">
<div className="w-16 h-full bg-stone-100 rounded border border-stone-300"></div>
<div className="flex-1 space-y-2">
<div className="h-8 w-1/2 bg-stone-100 rounded mb-4"></div>
<div className="h-12 w-full bg-[#F9A8D4] rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
<div className="h-12 w-full bg-[#FDE047] rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
<div className="h-12 w-full bg-[#2563EB] rounded border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
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

<footer className="bg-black text-[#FFFDF5] pt-24 pb-10 px-4 rounded-t-[3rem] relative overflow-hidden mt-12" id="archive">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="mb-6">
<span className="px-4 py-2 border border-[#FFFDF5] rounded-full text-xs font-normal font-mono uppercase tracking-widest bg-white/10">Powered by Archive</span>
</div>
<h2 className="text-6xl sm:text-7xl md:text-8xl leading-[0.9] font-semibold tracking-tighter font-[Syne] mb-8 hover:text-[#FDE047] transition-colors duration-300 cursor-pointer">
                SCALE YOUR <br/> MARKETING
            </h2>
<p className="max-w-xl text-lg text-gray-400 mb-12 font-normal leading-relaxed">
                Take the skills you've learned and put them on autopilot. Automatically detect when creators post, save content forever, and measure the true impact of your campaigns with Archive.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-[#FDE047] text-black font-semibold tracking-tight text-xl rounded-full hover:scale-105 hover:bg-white transition-all duration-300 border-2 border-black neo-shadow-sm hover:neo-shadow" href="https://archive.com" target="_blank">
                Book a Demo
                <iconify-icon className="text-2xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="w-full h-px bg-gray-800 my-16"></div>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-normal text-gray-500">
<p>© 2024 Archive.com. Open Source Creator Skills.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="https://archive.com">Archive App</a>
<a className="hover:text-white transition-colors" href="https://github.com/archive-dot-com">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
