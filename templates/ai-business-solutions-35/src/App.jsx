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
space: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
bg: '#FFFDF7', // Creamy background
card: '#FFFFFF',
border: '#000000',
primary: '#000000',
accent: '#FF6B6B', // Reddish accent for shadows
pastel: {
orange: '#FEF5E7',
green: '#DDF2D1',
blue: '#DFF1FA',
}
}
},
boxShadow: {
'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
'brutal-red': '4px 4px 0px 0px #FF6B6B',
},
animation: {
'float': 'float 6s ease-in-out infinite',
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b-[2px] border-black">
<div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center border-[2px] border-black shadow-brutal-sm">
<iconify-icon icon="lucide:smile" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="font-space font-semibold text-xl md:text-2xl tracking-tight text-black">BenAI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-black font-medium transition-colors" href="#features">Solutions</a>
<a className="text-sm text-gray-600 hover:text-black font-medium transition-colors" href="#how-it-works">Process</a>
<a className="text-sm text-gray-600 hover:text-black font-medium transition-colors" href="#team">Team</a>
</div>
<button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-brutal-sm hover:-translate-y-0.5 transition-all border-[2px] border-black active:translate-y-0 active:shadow-none">
                Sign In
            </button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-[1200px] mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-[2px] border-black mb-8 shadow-brutal-sm animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
</span>
<span className="text-xs font-semibold text-black tracking-wide uppercase">Your AI Transformation Partner</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-bold tracking-tight text-black leading-[1.1] mb-8 max-w-5xl mx-auto">
                Become <span className="underline decoration-4 decoration-brand-accent underline-offset-4">AI-First.</span><br/>
                Win the Era.
            </h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
                We build your AI strategy. Then we execute it. <br className="hidden md:block"/>No fluff, just operational efficiency and automated growth.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative bg-black text-white px-8 py-4 rounded-full text-lg font-space font-medium border-[2px] border-black hover:bg-white hover:text-black hover:shadow-brutal transition-all duration-200 flex items-center gap-2">
                    Get Started
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="24"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full text-lg font-space font-medium text-black border-[2px] border-transparent hover:border-black hover:bg-white transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="24"></iconify-icon>
                    View Demo
                </button>
</div>

<div className="flex justify-center gap-6 mt-12">
<a className="text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:youtube" width="24"></iconify-icon></a>
<a className="text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:linkedin" width="24"></iconify-icon></a>
<a className="text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:instagram" width="24"></iconify-icon></a>
<a className="text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:twitter" width="24"></iconify-icon></a>
</div>
</div>
</section>

<section className="py-12 px-6 border-y-[2px] border-black bg-white">
<div className="max-w-[1280px] mx-auto">
<p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-10">Trusted AI Partner of</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-space font-bold text-black cursor-default">
<iconify-icon icon="lucide:triangle" strokeWidth="2.5" width="24"></iconify-icon> ACME Corp
                </div>
<div className="flex items-center gap-2 text-xl font-space font-bold text-black cursor-default">
<iconify-icon icon="lucide:circle" strokeWidth="2.5" width="24"></iconify-icon> Sphere
                </div>
<div className="flex items-center gap-2 text-xl font-space font-bold text-black cursor-default">
<iconify-icon icon="lucide:box" strokeWidth="2.5" width="24"></iconify-icon> HexaTech
                </div>
<div className="flex items-center gap-2 text-xl font-space font-bold text-black cursor-default">
<iconify-icon icon="lucide:layers" strokeWidth="2.5" width="24"></iconify-icon> Stacked
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-[1280px] mx-auto">

<div className="border-[2px] border-black rounded-[2.5rem] p-8 md:p-12 bg-white relative shadow-brutal-lg">
<h2 className="text-3xl md:text-4xl font-space font-bold text-center text-black tracking-tight mb-16">
                    Business Solutions
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-brand-pastel-orange border-[2px] border-black p-8 rounded-2xl shadow-brutal hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center mb-6 border-[2px] border-black shadow-[4px_4px_0px_0px_#FFF]">
<iconify-icon icon="lucide:search" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-space font-bold text-black mb-3">AI SEO System</h3>
<p className="text-gray-800 leading-relaxed mb-8 text-sm flex-grow font-medium">
                            End-to-end SEO &amp; GEO automation system for agencies &amp; businesses. Dominate search results automatically.
                        </p>
<button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold border-[2px] border-black shadow-brutal-red flex justify-between items-center group-hover:shadow-[2px_2px_0px_0px_#FF6B6B] group-hover:translate-y-[2px] transition-all">
                            Learn More 
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="group bg-brand-pastel-green border-[2px] border-black p-8 rounded-2xl shadow-brutal hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center mb-6 border-[2px] border-black shadow-[4px_4px_0px_0px_#FFF]">
<iconify-icon icon="lucide:users" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-space font-bold text-black mb-3">AI Recruiting</h3>
<p className="text-gray-800 leading-relaxed mb-8 text-sm flex-grow font-medium">
                            Adopt AI Hiring Manager &amp; Candidate Monitoring Systems. Automate screening and scheduling effortlessly.
                        </p>
<button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold border-[2px] border-black shadow-brutal-red flex justify-between items-center group-hover:shadow-[2px_2px_0px_0px_#FF6B6B] group-hover:translate-y-[2px] transition-all">
                            Learn More 
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>

<div className="group bg-brand-pastel-blue border-[2px] border-black p-8 rounded-2xl shadow-brutal hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="w-16 h-16 rounded-xl bg-black text-white flex items-center justify-center mb-6 border-[2px] border-black shadow-[4px_4px_0px_0px_#FFF]">
<iconify-icon icon="lucide:cpu" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-space font-bold text-black mb-3">Custom Solutions</h3>
<p className="text-gray-800 leading-relaxed mb-8 text-sm flex-grow font-medium">
                            Custom AI Implementations, Training &amp; Consulting for Businesses. Tailored to your specific operational needs.
                        </p>
<button className="w-full bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold border-[2px] border-black shadow-brutal-red flex justify-between items-center group-hover:shadow-[2px_2px_0px_0px_#FF6B6B] group-hover:translate-y-[2px] transition-all">
                            Learn More 
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 px-6">
<div className="max-w-[1280px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white border-[2px] border-black p-6 rounded-2xl text-center shadow-brutal hover:-translate-y-1 transition-transform">
<div className="text-3xl md:text-5xl font-space font-bold text-black mb-2">40%</div>
<div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Faster Operations</div>
</div>
<div className="bg-white border-[2px] border-black p-6 rounded-2xl text-center shadow-brutal hover:-translate-y-1 transition-transform">
<div className="text-3xl md:text-5xl font-space font-bold text-black mb-2">$2M</div>
<div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Saved Yearly</div>
</div>
<div className="bg-white border-[2px] border-black p-6 rounded-2xl text-center shadow-brutal hover:-translate-y-1 transition-transform">
<div className="text-3xl md:text-5xl font-space font-bold text-black mb-2">500+</div>
<div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">Hours Saved/Mo</div>
</div>
<div className="bg-white border-[2px] border-black p-6 rounded-2xl text-center shadow-brutal hover:-translate-y-1 transition-transform">
<div className="text-3xl md:text-5xl font-space font-bold text-black mb-2">3x</div>
<div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">ROI Year One</div>
</div>
</div>

<div className="bg-brand-pastel-orange border-[2px] border-black p-10 rounded-3xl h-full flex flex-col justify-center relative shadow-brutal">
<iconify-icon className="text-black absolute top-8 left-8 opacity-10" icon="lucide:quote" width="48"></iconify-icon>
<blockquote className="relative z-10 pt-6">
<p className="text-xl md:text-2xl font-medium text-black leading-relaxed mb-8">
                            "BenAI transformed our operations in just 3 months. The roadmap was clear, the execution was flawless, and the ROI was undeniable."
                        </p>
<footer className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-[2px] border-black overflow-hidden bg-white">
<img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=John+Smith&amp;background=random&amp;color=000"/>
</div>
<div>
<div className="text-base font-bold font-space text-black">John Smith</div>
<div className="text-xs text-gray-600 font-semibold uppercase">CEO at TechCorp</div>
</div>
</footer>
</blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="how-it-works">
<div className="max-w-[1280px] mx-auto">
<h2 className="text-3xl md:text-5xl font-space font-bold text-center text-black tracking-tight mb-20">
                How It Works
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-[50px] left-[20%] right-[20%] h-[2px] bg-black z-0 border-t-2 border-dashed border-gray-300"></div>

<div className="relative bg-white border-[2px] border-black rounded-2xl p-8 z-10 hover:-translate-y-2 transition-transform duration-300 shadow-brutal">
<div className="w-16 h-16 rounded-full bg-brand-pastel-orange border-[2px] border-black flex items-center justify-center mb-6 mx-auto md:mx-0">
<span className="text-2xl font-space font-bold text-black">01</span>
</div>
<h3 className="text-xl font-space font-bold text-black mb-3">Audit</h3>
<p className="text-gray-600 text-sm leading-relaxed font-medium">
                        We analyze your sales, ops, and support workflows. In two weeks, you get a prioritized roadmap ranked by ROI.
                    </p>
</div>

<div className="relative bg-white border-[2px] border-black rounded-2xl p-8 z-10 hover:-translate-y-2 transition-transform duration-300 shadow-brutal">
<div className="w-16 h-16 rounded-full bg-brand-pastel-green border-[2px] border-black flex items-center justify-center mb-6 mx-auto md:mx-0">
<span className="text-2xl font-space font-bold text-black">02</span>
</div>
<h3 className="text-xl font-space font-bold text-black mb-3">Build</h3>
<p className="text-gray-600 text-sm leading-relaxed font-medium">
                        Our engineers build &amp; ship your automations. Systems go live in weeks. Value shows up fast.
                    </p>
</div>

<div className="relative bg-white border-[2px] border-black rounded-2xl p-8 z-10 hover:-translate-y-2 transition-transform duration-300 shadow-brutal">
<div className="w-16 h-16 rounded-full bg-brand-pastel-blue border-[2px] border-black flex items-center justify-center mb-6 mx-auto md:mx-0">
<span className="text-2xl font-space font-bold text-black">03</span>
</div>
<h3 className="text-xl font-space font-bold text-black mb-3">Train</h3>
<p className="text-gray-600 text-sm leading-relaxed font-medium">
                        We train your team to own the AI. Continuous support ensures adoption actually sticks long-term.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="team">
<div className="max-w-[1280px] mx-auto">
<h2 className="text-3xl md:text-5xl font-space font-bold text-center text-black tracking-tight mb-6">
                Our Team
            </h2>
<p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto font-medium">AI-Native experts delivering enterprise-grade results.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border-[2px] border-black p-6 rounded-2xl flex items-center gap-4 group hover:shadow-brutal transition-all">
<div className="w-16 h-16 rounded-full border-[2px] border-black overflow-hidden shrink-0">
<img alt="Owen Boesveld" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Owen+Boesveld&amp;background=f0f0f0&amp;color=000"/>
</div>
<div>
<h3 className="text-lg font-space font-bold text-black">Owen Boesveld</h3>
<p className="text-brand-accent text-xs font-bold tracking-wide uppercase mb-1">CEO</p>
<p className="text-gray-500 text-xs line-clamp-1 font-medium">AI Transformation Lead</p>
</div>
<a className="ml-auto text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
<div className="bg-white border-[2px] border-black p-6 rounded-2xl flex items-center gap-4 group hover:shadow-brutal transition-all">
<div className="w-16 h-16 rounded-full border-[2px] border-black overflow-hidden shrink-0">
<img alt="Jason Reynolds" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Jason+Reynolds&amp;background=f0f0f0&amp;color=000"/>
</div>
<div>
<h3 className="text-lg font-space font-bold text-black">Jason Reynolds</h3>
<p className="text-brand-accent text-xs font-bold tracking-wide uppercase mb-1">COO</p>
<p className="text-gray-500 text-xs line-clamp-1 font-medium">20+ years digital ops</p>
</div>
<a className="ml-auto text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
<div className="bg-white border-[2px] border-black p-6 rounded-2xl flex items-center gap-4 group hover:shadow-brutal transition-all">
<div className="w-16 h-16 rounded-full border-[2px] border-black overflow-hidden shrink-0">
<img alt="Ben van Sprundel" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Ben+van+Sprundel&amp;background=f0f0f0&amp;color=000"/>
</div>
<div>
<h3 className="text-lg font-space font-bold text-black">Ben van Sprundel</h3>
<p className="text-brand-accent text-xs font-bold tracking-wide uppercase mb-1">CMO</p>
<p className="text-gray-500 text-xs line-clamp-1 font-medium">3x Founder &amp; AI Creator</p>
</div>
<a className="ml-auto text-black hover:scale-110 transition-transform" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-space font-bold text-center text-black tracking-tight mb-12">
                Frequently Asked
            </h2>
<div className="space-y-4">

<details className="group bg-white border-[2px] border-black rounded-xl cursor-pointer shadow-brutal-sm open:shadow-brutal transition-all" open="">
<summary className="flex justify-between items-center p-6 font-space font-bold text-lg text-black">
                        How does the AI audit work?
                        <span className="transition-transform group-open:rotate-180 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-[2px] border-black pt-4 font-medium">
                        We spend two weeks inside your business. We interview your team, map your workflows across sales, ops, marketing, and support, and identify where AI can create the most value. You get a prioritized roadmap.
                    </div>
</details>

<details className="group bg-white border-[2px] border-black rounded-xl cursor-pointer shadow-brutal-sm open:shadow-brutal transition-all">
<summary className="flex justify-between items-center p-6 font-space font-bold text-lg text-black">
                        How long until we see results?
                        <span className="transition-transform group-open:rotate-180 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-[2px] border-black pt-4 font-medium">
                        Two weeks for the audit and roadmap. Weeks for the first live automations. Months for measurable ROI. We front-load quick wins so you see value fast.
                    </div>
</details>

<details className="group bg-white border-[2px] border-black rounded-xl cursor-pointer shadow-brutal-sm open:shadow-brutal transition-all">
<summary className="flex justify-between items-center p-6 font-space font-bold text-lg text-black">
                        What kind of companies do you work with?
                        <span className="transition-transform group-open:rotate-180 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-600 leading-relaxed border-t-[2px] border-black pt-4 font-medium">
                        Mid-sized and enterprise businesses, usually 50+ employees. We're industry-agnostic. We look for teams serious about AI adoption, not companies looking for a quick fix.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-[1280px] mx-auto bg-black text-white rounded-[2.5rem] px-6 py-24 text-center relative overflow-hidden border-[2px] border-black shadow-brutal-lg">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<h2 className="text-4xl md:text-6xl font-space font-bold text-white tracking-tight mb-8 max-w-3xl mx-auto relative z-10">
                Let's set you up to win.
            </h2>
<div className="flex flex-col items-center gap-6 relative z-10">
<button className="bg-white text-black px-10 py-4 rounded-full text-xl font-space font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2 border-[2px] border-transparent hover:border-white">
                    Start Transformation
                    <iconify-icon icon="lucide:arrow-right" width="24"></iconify-icon>
</button>
<span className="text-sm text-gray-400 font-medium">Free consultation. No commitment.</span>
</div>
</div>
</section>

<footer className="border-t-[2px] border-black bg-white pt-16 pb-12 px-6">
<div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center border-[2px] border-black">
<iconify-icon icon="lucide:smile" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="font-space font-bold text-xl text-black">BenAI</span>
</div>
<p className="text-gray-600 mb-8 text-sm font-medium">Your AI transformation partner.</p>
<div className="flex gap-6 mb-12">
<a className="text-gray-500 hover:text-black transition-colors hover:scale-110" href="#"><iconify-icon icon="lucide:linkedin" width="24"></iconify-icon></a>
<a className="text-gray-500 hover:text-black transition-colors hover:scale-110" href="#"><iconify-icon icon="lucide:twitter" width="24"></iconify-icon></a>
<a className="text-gray-500 hover:text-black transition-colors hover:scale-110" href="#"><iconify-icon icon="lucide:youtube" width="24"></iconify-icon></a>
</div>
<div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                © 2025 BenAI. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
