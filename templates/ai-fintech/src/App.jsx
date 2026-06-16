import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
neutral: {
925: '#0a0a0a',
950: '#050505',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



/*
Sequence animation on scroll when visible.
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;
                
                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div></div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.04), transparent 40%)'}}>
</div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 z-50 opacity-60"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-full">

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}>
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-sky-500 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.4s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.25s'}}>
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-300 to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '2.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.2s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.45s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md shrink-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-cyan-400 text-3xl iconify--solar" data-icon="solar:infinity-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.597 0 1.045-.107 1.407-.284c.362-.176.679-.442.986-.816c.54-.66.983-1.558 1.567-2.741q.175-.355.37-.744l.34-.69c.581-1.181 1.117-2.27 1.777-3.075c.41-.501.89-.923 1.49-1.215S16.216 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284c-.362.176-.679.442-.986.816c-.54.66-.983 1.558-1.567 2.741q-.175.355-.37.744l-.34.69c-.581 1.181-1.117 2.27-1.777 3.076c-.41.5-.89.922-1.49 1.214s-1.28.435-2.063.435A5.75 5.75 0 1 1 10.451 7.4a.75.75 0 1 1-.901 1.2A4.23 4.23 0 0 0 7 7.75" fill="currentColor" fill-rule="evenodd"></path></svg>
<span className="text-xl font-semibold tracking-tight text-white">Fabric</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                    Platform 
                    <svg aria-hidden="true" className="iconify text-gray-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" style={{width: '12px', height: '12px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#">Developers</a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-1 text-sm font-normal text-gray-300 hover:text-white" href="#">
                    Sign In
                </a>
<button className="relative rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group">
<span className="relative z-10 uppercase">Contact Sales</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</nav>

<main className="relative pt-12">

<section className="flex flex-col w-full max-w-7xl z-10 mt-24 mr-auto mb-32 ml-auto px-6 relative" id="hero">

<div className="w-full flex justify-start mb-8 spotlight-group relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate" style={{-MouseXRel: '1149.5px', -MouseYRel: '1701.5px'}}>
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,211,238,0.4), transparent)'}}></div>
<a className="relative z-10 group flex items-center gap-4 rounded-full border border-white/10 bg-black/40 pr-4 pl-1.5 py-1.5 hover:border-white/20 transition-all overflow-hidden" href="#">
<span className="rounded-full bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 text-[10px] font-semibold text-cyan-300 tracking-wide uppercase">
                        New
                    </span>
<span className="text-sm font-light text-gray-300">Fabric 2.0: The Agent Economy</span>
<svg aria-hidden="true" className="iconify text-gray-500 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{width: '14px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center w-full">

<div className="relative z-20 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="flex flex-col gap-2">
<div className="text-white/30 font-mono text-xs mb-3 flex items-center gap-2">
                            01_PROTOCOL <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/80 animate-pulse"></div>
</div>
<h1 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic text-white tracking-tight font-serif">
<span className="block">The liquidity layer</span>
<span className="block not-italic font-light text-gray-500 tracking-tighter">for AI agents.</span>
</h1>
</div>
</div>

<div className="relative z-20 md:text-right [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="flex flex-col gap-2 md:items-end">
<div className="text-white/30 font-mono text-xs mb-3 flex items-center gap-2 justify-start md:justify-end">
<div className="w-1.5 h-1.5 rounded-full bg-sky-500/80 animate-pulse"></div> 02_TREASURY
                        </div>
<h2 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic text-white tracking-tight font-serif">
<span className="block not-italic md:text-6xl text-4xl font-light text-gray-500 tracking-tighter mb-3">Global treasury</span>
<span className="block">at code speed.</span>
</h2>
</div>
</div>
</div>

<div className="mt-12 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">

<div className="group relative rounded-2xl bg-white/[0.02] p-6 md:p-8 spotlight-group spotlight-card overflow-hidden" style={{-MouseXRel: '1149.5px', -MouseYRel: '1374.5px'}}>
<div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl"></div>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,211,238,0.15), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-0.5 h-10 bg-gradient-to-b from-cyan-500 to-sky-600 rounded-r-full"></div>
<p className="text-base md:text-lg text-gray-300 font-serif italic leading-relaxed z-10 relative max-w-lg">
                        "Issue cards, generate IBANs, and manage treasury with a single API call. The financial stack designed for autonomous commerce."
                    </p>
<div className="mt-6 flex gap-3 items-center">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-black bg-gray-800 flex items-center justify-center text-[8px] text-white">F</div>
<div className="h-6 w-6 rounded-full border border-black bg-cyan-900 flex items-center justify-center text-[8px] text-white">A</div>
<div className="h-6 w-6 rounded-full border border-black bg-sky-900 flex items-center justify-center text-[8px] text-white">B</div>
</div>
<span className="text-[10px] text-gray-500 font-mono tracking-wider">TRUSTED_BY_AGENTS</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-5 z-10 pl-2 relative justify-end">

<button className="group/btn rounded-full relative">
<div className="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-cyan-500/40 opacity-40 rounded-full absolute blur"></div>
<div className="flex gap-3 active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_2px_0_#0e7490] transition-all duration-150 text-cyan-950 bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-500 h-14 rounded-full px-8 relative shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_4px_0_#0e7490,0_10px_15px_-3px_rgba(0,0,0,0.5)] items-center">
<span className="text-lg font-semibold tracking-tight">Get Started</span>
<svg aria-hidden="true" className="iconify text-cyan-950/60 iconify--lucide" data-icon="lucide:zap" height="1em" role="img" style={{width: '20px', height: '20px', strokeWidth: '2'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</button>

<button className="hover:bg-white/5 transition-all flex h-14 text-sm font-medium text-gray-200 bg-white/[0.03] rounded-full px-8 items-center justify-center group relative overflow-hidden" style={{-BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '9999px'}}>
<span className="text-base font-medium text-gray-300 tracking-tight group-hover:text-white transition-colors">Documentation</span>
<svg aria-hidden="true" className="iconify ml-2 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-200 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="z-20 w-full mt-16 relative [animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate">
<p className="uppercase text-xs font-semibold text-gray-600 tracking-widest font-mono text-center mb-8">Powering the next generation</p>
<div className="relative flex overflow-hidden group marquee-mask opacity-70 hover:opacity-100 transition-opacity duration-500">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 gap-y-20 items-center">
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<svg className="text-gray-500" data-icon-set="simple-icons" data-simple-icons="vercel" height="36" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path>
</svg>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:ycombinator" width="96"></iconify-icon>
<svg className="text-gray-500" data-icon-set="simple-icons" data-simple-icons="coinbase" height="36" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg"><path d="M4.844 11.053c-.872 0-1.553.662-1.553 1.548s.664 1.542 1.553 1.542s1.564-.667 1.564-1.547c0-.875-.664-1.543-1.564-1.543m.006 2.452c-.497 0-.86-.386-.86-.904c0-.523.357-.909.854-.909c.502 0 .866.392.866.91c0 .517-.364.903-.86.903m1.749-1.778h.433v2.36h.693V11.11H6.599zm-5.052-.035c.364 0 .653.224.762.558h.734c-.133-.713-.722-1.197-1.49-1.197c-.872 0-1.553.662-1.553 1.548c0 .887.664 1.543 1.553 1.543c.75 0 1.351-.484 1.484-1.203h-.728a.78.78 0 0 1-.756.564c-.502 0-.855-.386-.855-.904c0-.523.347-.909.85-.909zm18.215.622l-.508-.075c-.242-.035-.415-.115-.415-.305c0-.207.225-.31.53-.31c.336 0 .55.143.595.379h.67c-.075-.599-.537-.95-1.247-.95c-.733 0-1.218.375-1.218.904c0 .506.317.8.958.892l.508.075c.249.034.387.132.387.316c0 .236-.242.334-.577.334c-.41 0-.641-.167-.676-.42h-.681c.064.581.52.99 1.35.99c.757 0 1.26-.346 1.26-.938c0-.53-.364-.806-.936-.892M7.378 9.885a.43.43 0 0 0-.444.437c0 .254.19.438.444.438a.43.43 0 0 0 .445-.438a.43.43 0 0 0-.445-.437m10.167 2.245c0-.645-.392-1.076-1.224-1.076c-.785 0-1.224.397-1.31 1.007h.687c.035-.236.22-.432.612-.432c.352 0 .525.155.525.345c0 .248-.317.311-.71.351c-.531.058-1.19.242-1.19.933c0 .535.4.88 1.034.88c.497 0 .809-.207.965-.535c.023.293.242.483.548.483h.404v-.616h-.34zm-.68.748c0 .397-.347.69-.769.69c-.26 0-.48-.11-.48-.34c0-.293.353-.373.676-.408c.312-.028.485-.097.572-.23zm-3.679-1.825c-.386 0-.71.162-.94.432V9.856h-.693v4.23h.68v-.391c.232.282.56.449.953.449c.832 0 1.461-.656 1.461-1.543s-.64-1.548-1.46-1.548zm-.103 2.452c-.497 0-.86-.386-.86-.904c0-.517.369-.909.865-.909c.503 0 .855.386.855.91c0 .517-.364.903-.86.903m-3.187-2.452c-.45 0-.745.184-.919.443v-.385H8.29v2.975h.693v-1.617c0-.455.289-.777.716-.777c.398 0 .647.282.647.69v1.704h.692v-1.755c0-.748-.386-1.278-1.142-1.278M24 12.503c0-.851-.624-1.45-1.46-1.45c-.89 0-1.542.668-1.542 1.548c0 .927.698 1.543 1.553 1.543c.722 0 1.287-.426 1.432-1.03h-.722c-.104.264-.358.414-.699.414c-.445 0-.78-.276-.854-.76H24v-.264zm-2.252-.23c.11-.414.422-.615.78-.615c.392 0 .693.224.762.615Z" fill="currentColor"></path></svg>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
</div>
<div aria-hidden="true" className="flex gap-20 animate-marquee whitespace-nowrap items-center min-w-full absolute top-0 left-full pl-20">
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:vercel" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:ycombinator" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:coinbase" width="96"></iconify-icon>
<iconify-icon className="text-gray-500" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-44 mr-auto mb-44 ml-auto px-6 relative items-center" id="features">

<div className="text-center max-w-2xl mx-auto px-6 mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h2 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">Full Spectrum</span>
<span className="text-cyan-400">Financial Infrastructure</span>
</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed">
                    Offering a suite of advanced primitives designed to elevate your autonomous commerce capabilities with pixel-perfect precision.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll" style={{-MouseXRel: '1149.5px', -MouseYRel: '648px'}}>

<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(34,211,238,0.06), transparent 40%)'}}></div>

<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex flex-col p-4 gap-3 select-none">
<div className="w-full h-full absolute top-0 left-0"></div>

<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 relative z-10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
<div className="h-1.5 w-12 bg-white/20 rounded"></div>
</div>
<div className="h-1.5 w-8 bg-white/10 rounded"></div>
</div>

<div className="flex items-center justify-between p-2 rounded bg-transparent border border-white/5 relative z-10 opacity-60">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-gray-600"></div>
<div className="h-1.5 w-16 bg-white/20 rounded"></div>
</div>
<div className="h-1.5 w-6 bg-white/10 rounded"></div>
</div>

<div className="flex items-center justify-between p-2 rounded bg-transparent border border-white/5 relative z-10 opacity-40">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-gray-600"></div>
<div className="h-1.5 w-10 bg-white/20 rounded"></div>
</div>
<div className="h-1.5 w-8 bg-white/10 rounded"></div>
</div>

<div className="absolute bottom-4 right-4 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 z-20 shadow-xl">
<iconify-icon className="text-cyan-400" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-[10px] font-mono text-cyan-200">SETTLED</span>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-cyan-500 border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 rounded">01</span>
<iconify-icon className="text-gray-400 group-hover:text-cyan-400 transition-colors" icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Sophisticated Ledgers</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Dynamism refined. Model your financial data to fit your application's specific settlement needs with immutable logging.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll" style={{-MouseXRel: '730.8359375px', -MouseYRel: '648px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(14,165,233,0.06), transparent 40%)'}}></div>

<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_70%)]"></div>
<div className="w-full max-w-[180px] space-y-3 relative z-10">

<div className="flex items-center justify-between px-3 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400 text-xs" icon="solar:graph-new-linear"></iconify-icon>
<div className="h-1.5 w-12 bg-white/30 rounded"></div>
</div>
<div className="text-[10px] text-sky-400 font-mono">+2.44%</div>
</div>

<div className="flex gap-2">
<div className="h-6 w-full bg-white/5 border border-white/5 rounded-md flex items-center px-2">
<div className="h-1 w-8 bg-white/10 rounded"></div>
</div>
<div className="h-6 w-8 bg-sky-500/20 border border-sky-500/30 rounded-md flex items-center justify-center">
<iconify-icon className="text-sky-400 text-xs" icon="solar:tuning-2-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-sky-500 border border-sky-500/20 bg-sky-500/5 px-2 py-0.5 rounded">02</span>
<iconify-icon className="text-gray-400 group-hover:text-sky-400 transition-colors" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Powerful Pivots</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Aggregate and group treasury data to discern patterns and gain valuable insights into your autonomous cash flows.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 spotlight-group overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col h-full [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll" style={{-MouseXRel: '312.171875px', -MouseYRel: '648px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(99,102,241,0.06), transparent 40%)'}}></div>

<div className="h-48 w-full mb-8 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center p-6 select-none">

<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 100px'}}>
</div>
<div className="relative w-full h-full border border-dashed border-white/10 rounded-lg flex flex-col justify-between p-3">
<div className="flex justify-between w-full">
<div className="w-2 h-2 rounded-full border border-indigo-400"></div>
<div className="w-2 h-2 rounded-full border border-indigo-400"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-2">
                                    Select Range
                                </div>
</div>
<div className="flex justify-between w-full">
<div className="w-2 h-2 rounded-full border border-indigo-400"></div>
<div className="w-2 h-2 rounded-full border border-indigo-400"></div>
</div>

<div className="absolute top-4 left-4 right-8 bottom-8 bg-indigo-500/5 border border-indigo-500/30 rounded border-dashed animate-pulse"></div>
</div>
</div>

<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-indigo-400 border border-indigo-400/20 bg-indigo-400/5 px-2 py-0.5 rounded">03</span>
<iconify-icon className="text-gray-400 group-hover:text-indigo-400 transition-colors" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Adaptable Selection</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Graphite Grid includes a customizable row selection API that is tailored to your specific data interaction needs.
                        </p>
</div>
</div>
</div>
</section><section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative items-center" id="workflow">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">

<div className="flex flex-col justify-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-cyan-400">Autonomous Treasury</span>
</div>

<h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight mb-6 leading-[0.95]">
<span className="italic block text-gray-500 font-light">Financial logic</span>
<span className="font-medium">without the chaos.</span>
</h2>

<p className="text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-lg">
                Deterministic, auditable, and instant. Fabric provides the primitive rails for machine-to-machine value transfer, designed specifically for the agent economy.
            </p>

<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-16">
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-cyan-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200 mb-1">Instant Settlement</div>
<div className="text-xs text-gray-500 font-light">Optimized for high-frequency</div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-cyan-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200 mb-1">SDK Native</div>
<div className="text-xs text-gray-500 font-light">Type-safe integration</div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-cyan-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200 mb-1">Audit-Ready</div>
<div className="text-xs text-gray-500 font-light">Cryptographically secure</div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-cyan-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200 mb-1">Multi-Agent Sig</div>
<div className="text-xs text-gray-500 font-light">Built for autonomy</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-10">
<p className="text-sm text-gray-500 mb-8 font-light">
                    Teams building on Fabric scale operations with zero overhead
                    <iconify-icon className="inline align-text-bottom ml-1 opacity-50" icon="solar:info-circle-linear"></iconify-icon>
</p>
<div className="flex gap-16">
<div>
<div className="text-5xl font-serif italic text-white mb-2 tracking-tight">&lt; 50ms</div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">Latency</div>
</div>
<div>
<div className="text-5xl font-serif italic text-white mb-2 tracking-tight">$40B+</div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">Volume</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-12 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="w-full rounded-xl bg-[#050505] border border-white/10 p-1 relative shadow-2xl overflow-hidden group/ui">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

<div className="flex overflow-hidden bg-black/40 w-full h-[500px] rounded-lg">

<div className="flex-1 border-r border-white/5 bg-white/[0.01] p-5 flex flex-col gap-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-200">Pending</span>
<span className="text-xs font-mono text-gray-600">4</span>
</div>
<iconify-icon className="text-gray-600 hover:text-white transition-colors cursor-pointer" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="p-4 rounded-lg bg-[#0F0F0F] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group/card shadow-lg">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-gray-600 group-hover/card:text-gray-500 transition-colors">TX-944</span>
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-gray-500 text-xs" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-sm text-gray-200 font-medium mb-3 leading-snug">Rebalance Liquidity Pool A</div>
<div className="flex gap-2">
<span bg-amber-500"="" className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-amber-500/10 text- &lt;div class=" h-1="" rounded-full="" w-1=""></span></div> High Priority
                                
                            </div>
</div>

<div className="hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group/card bg-[#0F0F0F] border-white/5 border rounded-lg mx-2 my-2 px-4 py-4 shadow-lg">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-gray-600 group-hover/card:text-gray-500 transition-colors">TX-948</span>
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-gray-500 text-xs" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-sm text-gray-200 font-medium mb-3 leading-snug">Yield Harvest: USDC Vault</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear" width="10"></iconify-icon> Auto
                                </span>
</div>
</div>

<div className="bg-[#0F0F0F] opacity-40 border-white/5 border rounded-lg mx-2 my-2 pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-gray-600">TX-951</span>
</div>
<div className="h-2 w-2/3 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
</div>
</div>

<div className="flex-1 p-5 flex flex-col gap-4 bg-black/20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-200">Settled</span>
<span className="text-xs font-mono text-gray-600">824</span>
</div>
<iconify-icon className="text-gray-600 hover:text-white transition-colors cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="p-4 rounded-lg bg-[#0F0F0F] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group/card shadow-lg opacity-80 hover:opacity-100">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-gray-600 group-hover/card:text-gray-500 transition-colors">TX-902</span>
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-gray-500 text-xs" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-sm text-gray-500 font-medium mb-3 leading-snug line-through group-hover/card:text-gray-400 transition-colors">Settle Batch #2891</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-cyan-950/30 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
<iconify-icon icon="solar:verified-check-linear" width="10"></iconify-icon> Finalized
                                </span>
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-mono bg-white/5 text-gray-500 border border-white/5">
                                    #2891
                                </span>
</div>
</div>

<div className="p-4 rounded-lg bg-[#0F0F0F] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer group/card shadow-lg opacity-60 hover:opacity-100">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-gray-600">TX-402</span>
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-gray-500 text-xs" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-sm text-gray-500 font-medium mb-3 leading-snug line-through">Update Risk Parameters</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Governance
                                </span>
</div>
</div>
</div>
</div>
</div>

<div className="pl-2 relative">
<div className="absolute -left-6 top-0 text-6xl font-serif text-white/5 -z-10 select-none">“</div>
<blockquote className="text-2xl font-serif text-gray-300 leading-relaxed mb-8 italic">
                    "Fabric is the only infrastructure reliable enough for our autonomous trading swarms. It's not just faster; it's mathematically verified."
                </blockquote>
<div className="flex items-center gap-5">
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Elena K.</span>
<span className="text-sm text-gray-500">Lead Architect</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<iconify-icon className="text-gray-500 opacity-80 hover:opacity-100 transition-opacity" height="36" icon="simple-icons:coinbase" width="96"></iconify-icon>
</div>
</div>
</div>
</section><section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative" id="pricing">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:tag-price-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-cyan-400">Transparent Pricing</span>
</div>
<h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight mb-6 leading-[0.95]">
<span className="italic block text-gray-500 font-light">Predictable costs</span>
<span className="font-medium">for infinite scale.</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
                Pay only for the compute and settlement resources your agents consume. No hidden gas fees, no surprise overages.
            </p>
</div>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
<span className="text-sm font-medium text-white">Contact Sales</span>
<iconify-icon className="text-gray-400 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="w-full overflow-x-auto pb-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="min-w-[900px]">

<div className="grid grid-cols-4 gap-4 mb-4 items-end">

<div className="p-6">
<span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Core Features</span>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-cyan-900/10 rounded-t-2xl blur-xl opacity-50"></div>
<div className="relative bg-[#0A0A0A] border border-cyan-500/30 border-b-0 rounded-t-2xl p-8 pb-12 flex flex-col gap-6 shadow-[0_-10px_40px_-10px_rgba(34,211,238,0.15)]">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
<span className="text-sm font-medium text-cyan-200">Settlement</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-serif text-white">$0.002</span>
<span className="text-xs text-gray-500 font-mono">/ TX</span>
</div>
<p className="text-xs text-gray-400 mt-2 font-light">Per validated state transition</p>
</div>
<button className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                            Start Building <iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</button>

<div className="absolute -bottom-4 left-0 w-full h-8 bg-[#0A0A0A] z-10"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 border-b-0 rounded-t-2xl p-8 pb-12 flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full border border-gray-500"></div>
<span className="text-sm font-medium text-gray-200">Intelligence</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-serif text-white">$0.04</span>
<span className="text-xs text-gray-500 font-mono">/ REQ</span>
</div>
<p className="text-xs text-gray-500 mt-2 font-light">Per inference request</p>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors">
                        Enable Access
                    </button>
</div>

<div className="bg-[#0A0A0A] border border-white/5 border-b-0 rounded-t-2xl p-8 pb-12 flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full border border-gray-500"></div>
<span className="text-sm font-medium text-gray-200">Governance</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-serif text-white">$299</span>
<span className="text-xs text-gray-500 font-mono">/ MO</span>
</div>
<p className="text-xs text-gray-500 mt-2 font-light">Fixed protocol fee</p>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors">
                        Deploy DAO
                    </button>
</div>
</div>

<div className="bg-[#0A0A0A]/50 backdrop-blur-sm border-t border-white/10">

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row">
<div className="p-6 text-sm text-gray-400 font-medium flex items-center gap-2">
                        Throughput
                        <iconify-icon className="text-gray-600 cursor-help" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="p-6 text-sm text-cyan-300 bg-cyan-950/[0.1] border-x border-cyan-500/10 font-mono">
                        120k TPS
                    </div>
<div className="p-6 text-sm text-gray-400 font-mono">
                        On-Demand
                    </div>
<div className="p-6 text-sm text-gray-400 font-mono">
                        Unlimited
                    </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row">
<div className="p-6 text-sm text-gray-400 font-medium">Finality Time</div>
<div className="p-6 text-sm text-gray-200 bg-cyan-950/[0.1] border-x border-cyan-500/10 font-mono">
                        &lt; 50ms
                    </div>
<div className="p-6 text-sm text-gray-400 font-mono">
                        ~200ms
                    </div>
<div className="p-6 text-sm text-gray-400 font-mono">
                        1 block
                    </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row">
<div className="p-6 text-sm text-gray-400 font-medium">Encryption</div>
<div className="p-6 text-sm text-gray-200 bg-cyan-950/[0.1] border-x border-cyan-500/10">
                        zk-SNARKs
                    </div>
<div className="p-6 text-sm text-gray-400">
                        TLS 1.3
                    </div>
<div className="p-6 text-sm text-gray-400">
                        Multi-Sig
                    </div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row">
<div className="p-6 text-sm text-gray-400 font-medium">Audit Trail</div>
<div className="p-6 flex justify-center bg-cyan-950/[0.1] border-x border-cyan-500/10">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="p-6 flex justify-center">
<iconify-icon className="text-gray-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="p-6 flex justify-center">
<iconify-icon className="text-gray-200 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors group/row">
<div className="p-6 text-sm text-gray-400 font-medium">Network Access</div>
<div className="p-6 text-sm text-gray-200 bg-cyan-950/[0.1] border-x border-cyan-500/10">
                        Global
                    </div>
<div className="p-6 text-sm text-gray-400">
                        Regional
                    </div>
<div className="p-6 text-sm text-gray-400">
                        Private
                    </div>
</div>
</div>
</div>
</div>
</section><section className="w-full relative py-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-black pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
            Fabric Mainnet is Live
        </div>
<h2 className="text-6xl md:text-[80px] font-serif text-white tracking-tight leading-none mb-8">
            Start the <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-600">revolution.</span>
</h2>
<p className="text-xl text-gray-400 font-light max-w-2xl mb-12">
            Join the network of over 4,000 autonomous agents processing $40B+ in volume. The infrastructure for the machine economy is here.
        </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                Get API Keys
                <iconify-icon className="text-xl" icon="solar:key-minimalistic-square-linear"></iconify-icon>
</button>
<button className="h-14 px-8 rounded-full bg-black border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                Read Documentation
                <iconify-icon className="text-xl text-gray-400" icon="solar:documents-minimalistic-linear"></iconify-icon>
</button>
</div>
</div>
</section><footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">

<div className="col-span-2 md:col-span-4 flex flex-col gap-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:infinity-bold"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">Fabric</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                    The deterministic liquidity layer designed for the autonomous agent economy. Built for speed, verified by math.
                </p>
<div className="flex gap-4 mt-2">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-sm font-medium text-white mb-6">Product</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Settlement</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Intelligence</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Governance</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-white mb-6">Resources</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Audit Reports</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-white mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-gray-600 font-mono">
                © 2024 Fabric Protocol Inc. All rights reserved.
            </div>
<div className="flex items-center gap-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
<iconify-icon className="text-gray-400" icon="simple-icons:ycombinator" width="24"></iconify-icon>
<iconify-icon className="text-gray-400" icon="simple-icons:soc" width="24"></iconify-icon>
<iconify-icon className="text-gray-400" icon="simple-icons:gdpr" width="24"></iconify-icon>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>


    </>
  );
}
