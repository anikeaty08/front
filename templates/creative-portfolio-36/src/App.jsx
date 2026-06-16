import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Smooth Scroll for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="min-h-screen flex flex-col md:p-12 overflow-hidden w-full pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'linear-gradient(175deg, transparent 40%, rgba(0,0,0,0.05) 40.5%, transparent 41%)'}}></div>

<div className="flex w-full h-[80vh] max-w-6xl mr-auto ml-auto relative items-center justify-center">

<div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-90 select-none">
<h1 className="font-display font-extrabold text-[12vw] md:text-[10rem] leading-[0.85] tracking-tighter text-[#111111] text-center mix-blend-multiply opacity-90">
<span className="block -rotate-2 transform origin-bottom-right">HELLO</span>
<span className="block ml-12 rotate-1 text-[#333]">FOLKS</span>
</h1>
</div>

<svg className="absolute top-1/4 left-10 w-32 h-32 md:w-48 md:h-48 text-[#111] opacity-60 z-10 pointer-events-none rotate-12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 100 100">
<path d="M10,50 Q30,10 50,50 T90,50"></path>
<path d="M15,55 Q35,15 55,55 T95,55" stroke-opacity="0.5"></path>
<path d="M85,45 L90,50 L85,55"></path>
</svg>

<div className="relative z-20 group">

<div className="sticker-effect transition-transform duration-500 ease-out group-hover:scale-105">

<div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] clip-paper bg-stone-200 overflow-hidden">

<img alt="Designer Portrait" className="filter contrast-125 w-full h-full object-cover grayscale brightness-110 translate-y-4 scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 halftone-overlay opacity-30 pointer-events-none"></div>

<div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none"></div>
</div>
</div>

<div className="absolute -bottom-8 -right-4 md:-right-12 z-30 transform -rotate-6">
<p className="font-hand text-2xl md:text-4xl text-stone-800 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-sm shadow-sm border border-stone-100/50">
                        I make things pop! ✨
                    </p>

<svg className="absolute -bottom-8 left-1/2 w-16 h-16 text-[#111]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 50 50">
<path d="M40,10 Q25,25 10,40" stroke-dasharray="4 2"></path>
<path d="M10,40 L15,30 M10,40 L22,42"></path>
</svg>
</div>
</div>


<a className="absolute top-[10%] left-[5%] md:left-[15%] z-30 animate-float-1 group" href="#works">
<div className="relative">
<button className="md:text-base transition-all duration-300 group-hover:scale-110 group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] group-hover:-rotate-3 flex gap-2 text-sm font-semibold text-[#111111] font-display bg-[#FFD84D] border-transparent border-2 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
                        Selected Works
                    </button>

<svg className="absolute top-full left-1/2 w-24 h-24 text-gray-800 pointer-events-none opacity-0 md:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" style={{transform: 'translate(20px, 0) rotate(20deg)'}} viewbox="0 0 100 100">
<path d="M10,10 Q50,50 80,80" stroke-dasharray="3 3"></path>
<path d="M80,80 L70,75 M80,80 L75,70"></path>
</svg>
</div>
</a>

<a className="absolute top-[15%] right-[5%] md:right-[18%] z-30 animate-float-2 group delay-100" href="#about">
<div className="relative">
<button className="md:text-base transition-all duration-300 group-hover:scale-110 group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] group-hover:rotate-3 flex gap-2 text-sm font-semibold text-[#111111] font-display bg-[#6EC1FF] border-transparent border-2 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle className="" cx="12" cy="7" r="4"></circle></g></svg>
                        About Me
                    </button>

<svg className="absolute top-full right-full w-20 h-20 text-gray-800 pointer-events-none opacity-0 md:opacity-100" fill="none" stroke="currentColor" strokeWidth="1.5" style={{transform: 'translate(-10px, 10px)'}} viewbox="0 0 100 100">
<path d="M90,10 C70,40 60,20 40,60"></path>
<path d="M40,60 L50,55 M40,60 L48,48"></path>
</svg>
</div>
</a>

<a className="absolute bottom-[15%] left-[8%] md:left-[20%] z-30 animate-float-3 group delay-200" href="#lab">
<div className="relative">
<button className="bg-[#5ED48F] text-[#111111] font-display font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.15)] border-2 border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] group-hover:rotate-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flask-conical" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        The Lab
                    </button>

<svg className="absolute bottom-full left-1/2 w-16 h-16 text-gray-800 pointer-events-none opacity-0 md:opacity-100" fill="none" stroke="currentColor" strokeWidth="1.5" style={{transform: 'translate(20px, -10px) rotate(-10deg)'}} viewbox="0 0 100 100">
<path d="M10,90 Q40,60 80,20"></path>
<path d="M80,20 L70,25 M80,20 L75,30"></path>
</svg>
</div>
</a>

<a className="absolute bottom-[20%] right-[8%] md:right-[15%] z-30 animate-float-1 group delay-300" href="#contact">
<div className="relative">
<button className="bg-[#FF7FBF] text-[#111111] font-display font-semibold text-sm md:text-base px-6 py-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.15)] border-2 border-transparent transition-all duration-300 group-hover:scale-110 group-hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] group-hover:-rotate-2 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                        Let's Talk
                    </button>

<svg className="absolute bottom-full right-full w-24 h-24 text-gray-800 pointer-events-none opacity-0 md:opacity-100" fill="none" stroke="currentColor" strokeWidth="1.5" style={{transform: 'translate(10px, 10px)'}} viewbox="0 0 100 100">
<path d="M90,90 C70,50 40,80 20,40" stroke-dasharray="5 5"></path>
<path d="M20,40 L30,42 M20,40 L25,50"></path>
</svg>
</div>
</a>
</div>

<div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 rotate-3 animate-float-2 z-40 hidden md:block">
<div className="bg-[#fff9c4] text-stone-800 p-4 w-40 shadow-[2px_2px_6px_rgba(0,0,0,0.1)] font-hand text-xl leading-tight text-center relative">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-sm border border-orange-700"></div>
                Scrolled this far? Have a cookie 🍪
            </div>
</div>
</main>


    </>
  );
}
