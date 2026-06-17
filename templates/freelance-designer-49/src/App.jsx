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
      

<div className="fixed top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-fuchsia-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<main className="flex-1 w-full xl:w-[calc(100%-6rem)] relative flex flex-col pb-32">

<header className="absolute top-0 w-full px-6 py-8 md:px-12 flex justify-between items-center z-30">

<a className="flex items-center gap-1.5" href="#home">
<iconify-icon className="text-fuchsia-500 text-xl" icon="solar:stars-linear"></iconify-icon>
<span className="text-xl tracking-tight font-medium text-white">
                    siedschlag <span className="text-neutral-500">design</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Design &amp; Web</a>

<div className="flex items-center gap-2.5 border border-neutral-800/80 bg-neutral-900/40 rounded-full pl-2.5 pr-4 py-1.5 backdrop-blur-md">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</div>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Available for work</span>
</div>

<button className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors group">
                    EN 
                    <iconify-icon className="text-sm group-hover:translate-y-0.5 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<button className="md:hidden text-neutral-400">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 relative z-10 pt-20" id="home">

<div className="hidden lg:block lg:col-span-5 relative h-full min-h-[600px]">

<div className="absolute top-1/2 left-20 -translate-y-1/2 w-40 h-40 animate-[spin_20s_linear_infinite] opacity-50 hover:opacity-100 transition-opacity duration-700">
<svg className="w-full h-full text-neutral-400" viewbox="0 0 200 200">
<path d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" id="curve"></path>
<text className="text-sm uppercase tracking-[0.2em] font-medium" fill="currentColor">
<textpath href="#curve" startoffset="0%">
                                • graphic design • web development • siedschlag •
                            </textpath>
</text>
</svg>
</div>

<div className="absolute top-1/2 left-20 -translate-y-1/2 w-40 h-40 flex items-center justify-center text-fuchsia-500">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:pr-32 py-32 h-full">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-[0.15em] text-fuchsia-500 font-medium mb-6 flex items-center gap-2">
<span className="w-8 h-[1px] bg-fuchsia-500/50"></span>
                        Graphic &amp; Web Designer
                    </p>
<h1 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] font-semibold tracking-tight text-white mb-8">
                        Agency-level design services at freelancer rates
                    </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed font-normal max-w-lg">
                        Hi, I'm Lea. My mission is to design and develop stunning digital experiences that you and your audience will absolutely love.
                    </p>

<a className="group inline-flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-full pl-6 pr-2 py-2 hover:bg-neutral-800/80 hover:border-neutral-700 transition-all duration-300 w-fit" href="#about">
<span className="text-sm font-medium text-neutral-200">Start a project</span>
<div className="bg-fuchsia-500 rounded-full p-2.5 flex items-center justify-center text-white group-hover:scale-105 group-hover:bg-fuchsia-400 transition-all shadow-[0_0_15px_rgba(217,70,239,0.3)]">
<iconify-icon className="text-base" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center relative z-10 border-t border-neutral-900/50" id="about">
<div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Why work with me?</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        I bridge the gap between aesthetics and functionality. With years of experience blending sharp graphic design with modern web development, I ensure your project isn't just visually captivating—it performs flawlessly.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-fuchsia-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base">Direct communication, no middleman</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-fuchsia-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base">Fast turnaround times</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-fuchsia-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base">Pixel-perfect attention to detail</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
<span className="text-5xl font-semibold tracking-tight text-white mb-2">5+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Years Exp.</span>
</div>
<div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center mt-8">
<span className="text-5xl font-semibold tracking-tight text-white mb-2">40+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Projects</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-6 md:px-12 py-24 relative z-10 border-t border-neutral-900/50" id="work">
<div className="max-w-6xl mx-auto w-full">
<div className="flex justify-between items-end mb-16">
<div>
<p className="text-xs uppercase tracking-[0.15em] text-fuchsia-500 font-medium mb-4">Selected Works</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Recent Projects</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group" href="#">
                        View all 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-3xl bg-neutral-900 overflow-hidden mb-6 relative border border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-700" icon="solar:gallery-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2 group-hover:text-fuchsia-500 transition-colors">Fintech Branding</h3>
<p className="text-sm text-neutral-400">Identity &amp; Web Design</p>
</div>
<iconify-icon className="text-xl text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full aspect-[4/3] rounded-3xl bg-neutral-900 overflow-hidden mb-6 relative border border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-4xl text-neutral-700" icon="solar:gallery-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2 group-hover:text-fuchsia-500 transition-colors">Aura Skincare</h3>
<p className="text-sm text-neutral-400">E-Commerce Development</p>
</div>
<iconify-icon className="text-xl text-neutral-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center relative z-10 border-t border-neutral-900/50" id="services">
<div className="max-w-6xl mx-auto w-full">
<p className="text-xs uppercase tracking-[0.15em] text-fuchsia-500 font-medium mb-4 text-center">What I do</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">My Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-4">Graphic Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Creating memorable brand identities, stunning marketing materials, and cohesive visual systems that tell your unique story.
                        </p>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
<iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-4">UI/UX Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Designing intuitive, user-centric interfaces for web and mobile applications that engage users and drive conversions.
                        </p>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white mb-6">
<iconify-icon className="text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-4">Web Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Building fast, responsive, and accessible websites using modern frontend technologies and clean, maintainable code.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 relative z-10 border-t border-neutral-900/50" id="expertise">
<div className="max-w-4xl mx-auto w-full text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12">Tools &amp; Expertise</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">Figma</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">Adobe Creative Suite</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">HTML / CSS</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">Tailwind CSS</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">Webflow</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">React &amp; Next.js</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">Framer Motion</div>
<div className="px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium text-neutral-300 hover:text-white hover:border-fuchsia-500/50 transition-colors cursor-default">Wireframing &amp; Prototyping</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block w-full max-w-3xl px-6 xl:ml-[-3rem]">
<nav className="flex items-center justify-between px-8 py-3.5 rounded-full border border-neutral-800/60 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl">
<a className="text-xs font-medium text-fuchsia-500 tracking-widest uppercase relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-fuchsia-500 after:rounded-full" href="#home">Home</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white tracking-widest uppercase transition-colors" href="#about">About Me</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white tracking-widest uppercase transition-colors" href="#work">Work</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white tracking-widest uppercase transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white tracking-widest uppercase transition-colors flex items-center gap-1.5 group" href="#expertise">
                Expertise 
                <iconify-icon className="text-neutral-500 group-hover:text-fuchsia-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</nav>
</div>

<aside className="w-24 bg-white hidden xl:flex flex-col justify-between items-center py-8 border-l border-neutral-200 shrink-0 z-40 fixed right-0 top-0 h-screen">

<a className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-black hover:bg-neutral-50 transition-colors" href="#home">
<iconify-icon className="text-xl" icon="solar:pallete-2-linear"></iconify-icon>
</a>

<div className="flex-1 flex items-center justify-center my-12">
<h2 className="text-black font-semibold text-5xl tracking-tight uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap opacity-90">
                Design Expert
            </h2>
</div>

<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-black bg-neutral-50">
<span className="font-semibold text-sm tracking-tight">SD.</span>
</div>
</aside>

    </>
  );
}
