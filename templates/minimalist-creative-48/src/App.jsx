import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center px-6 lg:px-16">
<div className="w-full max-w-7xl h-full grid grid-cols-4 border-x border-[#e5e5e5]">
<div className="border-r border-[#e5e5e5] h-full w-full"></div>
<div className="border-r border-[#e5e5e5] h-full w-full"></div>
<div className="border-r border-[#e5e5e5] h-full w-full"></div>
<div className="h-full w-full"></div>
</div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col h-full flex-1">

<header className="py-10 flex justify-between items-center w-full">
<div className="font-serif text-2xl font-medium tracking-tight select-none">Portfolio.</div>
<nav className="flex gap-8 text-xs text-[#666666] tracking-[0.15em] uppercase font-light">
<a className="hover:text-[#09090b] transition-colors duration-300" href="#">Work</a>
<a className="hover:text-[#09090b] transition-colors duration-300" href="#">About</a>
<a className="hover:text-[#09090b] transition-colors duration-300" href="#">Contact</a>
</nav>
</header>

<main className="w-full pt-32 lg:pt-48 relative flex-1 flex flex-col">

<div className="absolute top-24 left-0 right-0 flex justify-center pointer-events-none z-[-1] overflow-hidden select-none">
<span className="font-serif text-[18vw] text-[#f6f6f6] leading-none tracking-tighter uppercase font-normal ml-12 lg:ml-24">PORTFOLIO</span>
</div>

<div className="relative w-full">
<div className="text-xs text-[#666666] tracking-[0.2em] uppercase mb-8 font-light">Creative Developer &amp; Designer</div>
<h1 className="font-serif text-6xl md:text-7xl lg:text-[7.5vw] leading-[1.05] tracking-tight text-[#09090b] font-normal">
                    Crafting Digital<br/>
<em className="italic font-light pr-1 md:pr-3">Experiences</em><span className="text-[#1940D6]">.</span>
</h1>
</div>

<div className="mt-20 lg:mt-32 grid grid-cols-4 gap-0 w-full">
<div className="col-start-2 md:col-start-3 col-span-3 md:col-span-2 text-right">
<p className="text-lg text-[#666666] leading-[1.7] max-w-[420px] ml-auto font-light">
                        I build thoughtful, high-performance interfaces that merge aesthetic precision with functional clarity.
                    </p>
</div>
</div>

<div className="absolute bottom-[-10vh] left-0 flex items-center gap-3 text-xs text-[#666666] uppercase tracking-[0.15em] font-light">
<i className="w-3.5 h-3.5" data-lucide="arrow-down" strokeWidth="1.5"></i>
<span>Scroll to explore</span>
</div>
</main>

<div className="h-[180vh] w-full"></div>

<footer className="w-full border-t border-[#e5e5e5] py-10 flex flex-col md:flex-row justify-between items-center text-xs text-[#666666] font-light mt-auto">
<div className="mb-4 md:mb-0">© 2026 Portfolio. All rights reserved.</div>
<div>Designed with precision.</div>
</footer>
</div>

<div className="fixed bottom-8 right-8 z-50 bg-[#09090b] rounded-lg flex items-center gap-2.5 px-3 py-2 shadow-2xl backdrop-blur-md border border-white/5">
<div className="w-4 h-4 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center">
<div className="w-full h-px bg-white/30 rotate-45"></div>
</div>
<span className="text-xs text-white/80 font-light tracking-wide">Edit with <span className="font-medium text-white">Base 44</span></span>
<i className="w-3.5 h-3.5 text-white/50 hover:text-white cursor-pointer transition-colors ml-1" data-lucide="x" strokeWidth="1.5"></i>
</div>


    </>
  );
}
