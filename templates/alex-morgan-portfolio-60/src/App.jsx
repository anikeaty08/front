import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Simple Clock Script
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            const clockEl = document.getElementById('clock');
            if(clockEl) clockEl.innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-5xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-sm animate-fade-in-up">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-medium text-xs border transition-transform duration-300 group-hover:scale-110 bg-black text-white border-black/10" style={{}}>
                    AM
                </div>
<span className="text-sm font-medium tracking-tight group-hover:text-black transition-colors text-zinc-600" style={{}}>Alex Morgan</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500" style={{}}>
<a className="transition-colors duration-200 hover:text-black" href="#work">Work</a>
<a className="transition-colors duration-200 hover:text-black" href="#about">About</a>
<a className="transition-colors duration-200 hover:text-black" href="#writing">Writing</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 border-zinc-200 hover:border-zinc-300 hover:bg-white" href="mailto:hello@alex.design" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
                    Available for projects
                </a>
<button className="md:hidden p-2 text-zinc-500" style={{}}>
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="lg:pt-52 lg:pb-32 overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
<div className="max-w-5xl mx-auto relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 text-zinc-500 animate-fade-in-up delay-100 transition-colors cursor-default shadow-sm border-zinc-200 bg-white hover:border-zinc-300" style={{}}>
<svg className="lucide lucide-map-pin text-zinc-800" data-lucide="map-pin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Based in San Francisco</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 animate-fade-in-up delay-200 text-zinc-900" style={{}}>
                    Crafting digital 
                    <span className="relative inline-block text-zinc-400" style={{}}>
                        artifacts
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D4F868]" preserveaspectratio="none" style={{}} viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
</span> 
                    with <br/> precision and purpose.
                </h1>
<p className="text-xl text-zinc-500 mb-10 max-w-xl leading-relaxed font-light animate-fade-in-up delay-300" style={{}}>
                    I'm a multidisciplinary designer and engineer helping startups build intuitive, high-performance interfaces. Currently Design Lead at <span className="font-medium text-zinc-900" style={{}}>Vercel</span>.
                </p>
<div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-500">
<button className="px-7 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800" style={{}}>
                        View Selected Work
                        <svg className="lucide lucide-arrow-down" data-lucide="arrow-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
<div className="flex items-center gap-4">
<a className="p-3 border rounded-full text-zinc-500 transition-all duration-300 hover:-translate-y-1 bg-white border-zinc-200 hover:text-black hover:border-zinc-400" href="#" style={{}}>
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-3 border rounded-full text-zinc-500 transition-all duration-300 hover:-translate-y-1 bg-white border-zinc-200 hover:text-black hover:border-zinc-400" href="#" style={{}}>
<svg className="lucide lucide-github" data-lucide="github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-3 border rounded-full text-zinc-500 transition-all duration-300 hover:-translate-y-1 bg-white border-zinc-200 hover:text-black hover:border-zinc-400" href="#" style={{}}>
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>

<div className="absolute top-20 right-0 -z-10 opacity-30 lg:opacity-100 lg:static lg:w-full lg:h-full pointer-events-none">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4F868]/20 rounded-full blur-3xl animate-float to-zinc-200/20" style={{}}></div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-zinc-100" id="work" style={{}}>
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2 text-zinc-900" style={{}}>Selected Work</h2>
<p className="text-zinc-500 font-light" style={{}}>A collection of projects spanning SaaS, Finance, and AI.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-black" href="#" style={{}}>
                    View Archive 
                    <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group cursor-pointer">
<div className="border rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 bg-zinc-50 border-zinc-100" style={{}}>
<div className="absolute inset-0 flex items-center justify-center bg-zinc-100" style={{}}>

<div className="w-3/4 h-3/4 rounded-xl shadow-sm border p-6 flex flex-col gap-4 group-hover:scale-105 transition-transform duration-500 bg-white border-zinc-200/50" style={{}}>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400" style={{}}></div>
<div className="w-2 h-2 rounded-full bg-green-400" style={{}}></div>
</div>
<div className="h-2 w-1/3 rounded bg-zinc-100" style={{}}></div>
<div className="flex-1 rounded border dashed bg-zinc-50 border-zinc-100" style={{}}></div>
<div className="flex justify-between">
<div className="h-8 w-8 bg-[#D4F868] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-xs font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>Aura Finance</h3>
<span className="text-xs font-medium border px-2 py-1 rounded-md text-zinc-400 border-zinc-200" style={{}}>2023</span>
</div>
<p className="text-zinc-500 font-light text-sm leading-relaxed" style={{}}>
                        End-to-end product design for a next-gen financial dashboard. Focused on data visualization and accessibility.
                    </p>
<div className="flex gap-2 mt-4 text-xs font-medium text-zinc-400" style={{}}>
<span>Fintech</span> • <span>Product Design</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="border rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 bg-zinc-900 border-zinc-800" style={{}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center text-white" style={{}}>
<div className="w-16 h-16 bg-[#D4F868] rounded-2xl mx-auto mb-4 flex items-center justify-center text-black">
<svg className="lucide lucide-layers" data-lucide="layers" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>Stack OS</h3>
<span className="text-xs font-medium border px-2 py-1 rounded-md text-zinc-400 border-zinc-200" style={{}}>2024</span>
</div>
<p className="text-zinc-500 font-light text-sm leading-relaxed" style={{}}>
                        A conceptual operating system for web-based applications. Built with React and WebAssembly.
                    </p>
<div className="flex gap-2 mt-4 text-xs font-medium text-zinc-400" style={{}}>
<span>System</span> • <span>Development</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-[#F4F4F5] border rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 border-zinc-200" style={{}}>
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>Lumina</h3>
<span className="text-xs font-medium border px-2 py-1 rounded-md text-zinc-400 border-zinc-200" style={{}}>2022</span>
</div>
<p className="text-zinc-500 font-light text-sm leading-relaxed" style={{}}>
                        Brand identity and marketing site for an AI-powered photography assistant.
                    </p>
<div className="flex gap-2 mt-4 text-xs font-medium text-zinc-400" style={{}}>
<span>Branding</span> • <span>Web Design</span>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="bg-gradient-to-br border rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 flex items-center justify-center from-zinc-100 to-white border-zinc-200" style={{}}>
<div className="relative w-48 h-48">
<div className="absolute inset-0 bg-[#D4F868] rounded-full blur-2xl opacity-40 animate-pulse"></div>
<div className="relative z-10 border w-full h-full rounded-2xl shadow-lg flex items-center justify-center bg-white border-zinc-100" style={{}}>
<svg className="lucide lucide-box text-zinc-800" data-lucide="box" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>Mono Icons</h3>
<span className="text-xs font-medium border px-2 py-1 rounded-md text-zinc-400 border-zinc-200" style={{}}>Open Source</span>
</div>
<p className="text-zinc-500 font-light text-sm leading-relaxed" style={{}}>
                        A pack of 400+ handcrafted icons for modern interface design. Used by over 10k designers.
                    </p>
<div className="flex gap-2 mt-4 text-xs font-medium text-zinc-400" style={{}}>
<span>Resource</span> • <span>Iconography</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="about">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h3 className="text-lg font-medium mb-4 text-zinc-900" style={{}}>Technical Stack</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-6" style={{}}>
                    The tools and technologies I use to bring ideas to life. I prefer component-driven development and clean, maintainable code.
                </p>
</div>
<div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">

<div className="p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-colors bg-white border-zinc-100 hover:border-zinc-300" style={{}}>
<svg className="lucide lucide-figma text-zinc-800" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<span className="text-xs font-medium">Figma</span>
</div>
<div className="p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-colors bg-white border-zinc-100 hover:border-zinc-300" style={{}}>
<svg className="lucide lucide-code-2 text-zinc-800" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="text-xs font-medium">React</span>
</div>
<div className="p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-colors bg-white border-zinc-100 hover:border-zinc-300" style={{}}>
<svg className="lucide lucide-wind text-zinc-800" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-xs font-medium">Tailwind</span>
</div>
<div className="p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-colors bg-white border-zinc-100 hover:border-zinc-300" style={{}}>
<svg className="lucide lucide-box text-zinc-800" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-xs font-medium">Three.js</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-zinc-100" id="writing" style={{}}>
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-zinc-900" style={{}}>Latest Thoughts</h2>
<div className="space-y-2">

<a className="group block p-6 -mx-6 rounded-2xl hover:bg-[#FAFAFA] transition-colors" href="#">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
<h3 className="text-lg font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>Designing for the next billion users</h3>
<span className="text-sm font-mono text-zinc-400" style={{}}>Oct 24, 2024</span>
</div>
<p className="text-zinc-500 font-light max-w-2xl text-sm leading-relaxed" style={{}}>
                        Exploration of accessibility standards and low-bandwidth optimization in modern web applications.
                    </p>
</a>

<a className="group block p-6 -mx-6 rounded-2xl hover:bg-[#FAFAFA] transition-colors" href="#">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
<h3 className="text-lg font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>The end of flat design?</h3>
<span className="text-sm font-mono text-zinc-400" style={{}}>Sep 12, 2024</span>
</div>
<p className="text-zinc-500 font-light max-w-2xl text-sm leading-relaxed" style={{}}>
                        Why skeuomorphism is making a subtle comeback through "spatial" UI trends.
                    </p>
</a>

<a className="group block p-6 -mx-6 rounded-2xl hover:bg-[#FAFAFA] transition-colors" href="#">
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
<h3 className="text-lg font-medium group-hover:text-zinc-600 transition-colors text-zinc-900" style={{}}>Velocity in Engineering</h3>
<span className="text-sm font-mono text-zinc-400" style={{}}>Aug 05, 2024</span>
</div>
<p className="text-zinc-500 font-light max-w-2xl text-sm leading-relaxed" style={{}}>
                        How to maintain speed without sacrificing code quality in early-stage startups.
                    </p>
</a>
</div>
</div>
</section>

<footer className="py-20 rounded-t-[3rem] mt-12 bg-zinc-900 text-white" style={{}}>
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">Let's build something <br/> <span className="text-[#D4F868]" style={{}}>meaningful</span>.</h2>
<p className="font-light text-lg mb-8 max-w-md text-zinc-400" style={{}}>
                        Open for select freelance opportunities and collaborations. Drop me a line if you want to chat.
                    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:bg-[#D4F868] hover:scale-105 transition-all duration-300 bg-white text-black" href="mailto:hello@alex.design">
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                        hello@alex.design
                    </a>
</div>
<div className="flex flex-col justify-end items-start md:items-end">

<div className="border p-6 rounded-2xl w-full max-w-xs backdrop-blur-sm bg-white/5 border-white/10">
<div className="flex items-center justify-between mb-4">
<span className="text-xs uppercase tracking-widest text-zinc-400" style={{}}>Local Time</span>
<div className="w-2 h-2 rounded-full bg-[#D4F868] animate-pulse"></div>
</div>
<div className="text-3xl font-mono mb-1" id="clock">11:36 AM</div>
<div className="text-sm text-zinc-500" style={{}}>San Francisco, CA</div>
</div>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 font-light border-white/10" style={{}}>
<div className="flex gap-6 mb-4 md:mb-0">
<a className="transition-colors hover:text-white" href="#" style={{}}>Twitter</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>LinkedIn</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>GitHub</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Instagram</a>
</div>
<div className="flex items-center gap-2">
<span>© 2024 Alex Morgan.</span>
<span>Crafted with</span>
<svg className="text-[#D4F868]" fill="currentColor" height="14" stroke="none" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
