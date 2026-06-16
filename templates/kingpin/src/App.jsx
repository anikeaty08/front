import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-200 brightness-75 opacity-70" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>

</div>

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-900/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/30 rounded-full blur-[120px]"></div>
</div>

<div className="lg:py-24 flex-grow flex flex-col w-full max-w-6xl z-10 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative justify-center">


<header className="lg:mb-24 flex mb-16 items-center justify-between [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll">
<a className="text-white text-lg tracking-tighter font-semibold hover:opacity-80 transition-opacity uppercase font-geist-mono" href="#">
                KINGPIN.
            </a>
<div className="hidden sm:flex gap-2 text-xs font-medium text-neutral-300 font-geist-mono bg-neutral-900/50 border-neutral-800 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Booking åben
            </div>
</header>
<main className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 gap-x-16 gap-y-16">


<div className="lg:col-span-4 flex flex-col lg:space-y-0 h-full space-y-12 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="">
<h1 className="lg:text-4xl leading-tight text-3xl text-white mb-6 font-montserrat font-bold tracking-tight">
                        Tidløs blæk 
                        &amp; unikt 
                        håndværk.
                    </h1>
<p className="text-sm leading-relaxed text-neutral-500 max-w-sm font-geist-mono">
                        Professionel tatovering i et sterilt og imødekommende miljø. Vi specialiserer os i Amerikansk Traditionel, Blackwork og Fine Line. Walk-ins velkomne efter aftale.
                    </p>
</div>
<div className="space-y-8">

<div className="space-y-4">
<h3 className="uppercase text-xs font-medium text-white tracking-widest font-geist-mono opacity-60">Kontakt for at booke en tid</h3>
<a className="flex items-center gap-3 text-sm hover:text-white transition-colors group" href="tel:+4596728100">
<div className="p-2 rounded-md bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="font-geist-mono">+45 96 72 81 00</span>
</a>
</div>

<div className="space-y-4 pt-4 border-t border-neutral-900">
<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.instagram.com/kingpintattoo/" target="_blank">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="hover:text-white transition-colors text-neutral-500" href="https://www.facebook.com/search/top/?q=kingpin%20tattoo">
<svg className="" data-icon-set="lucide" data-lucide="facebook" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>


<div className="lg:col-span-8 w-full flex flex-col [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium text-white font-geist-mono">@kingpintattoo</span>
</div>
</div>

<div className="min-h-[400px] overflow-hidden bg-neutral-900/20 w-full border-neutral-800/50 border rounded-xl pt-1 pr-1 pb-1 pl-1">


<div className="elfsight-app-8e7834de-c77f-45b8-a72e-a5e340f4a85d" data-elfsight-app-lazy=""></div>
</div>
</div>
</main>


<footer className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-600 gap-4 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<span className="font-geist-mono">© 2024 Kingpin Tattoo. Alle rettigheder forbeholdes.</span>
</footer>
</div>

    </>
  );
}
