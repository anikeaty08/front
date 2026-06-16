import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
50: '#f9f7f1',
100: '#efead8',
200: '#e0d2ae',
300: '#d0ba83',
400: '#c2a35f',
500: '#b08b45',
900: '#46361a',
},
wine: {
800: '#2d0c13',
900: '#1a0508',
},
dark: '#050505',
panel: '#0f0f0f',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
}
}
}
}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent pointer-events-none">
<div className="flex items-center gap-3 pointer-events-auto cursor-pointer group">

<svg className="text-3xl text-gold-200 group-hover:rotate-12 transition-transform duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 5h-2.4c-.31 0-.6.15-.77.4L12 18l-6.8-12.6A.91.91 0 0 0 4.4 5H2"></path><path d="M8 9.5a4.8 4.8 0 0 1 2.3-1.3"></path><path d="M11 15a6.5 6.5 0 0 0 2.8-1.5"></path><path d="M12 18v4"></path><path d="M8 22h8"></path></svg>
<div className="flex flex-col leading-none">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400">Est. 1894</span>
<span className="text-lg font-serif tracking-widest text-gold-50">DOMAINE</span>
</div>
</div>
<div className="pointer-events-auto cursor-pointer group p-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hover:border-gold-300 transition-colors">

<svg className="group-hover:text-gold-200 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</div>
</nav>

<header className="overflow-hidden flex flex-col text-center w-full h-[1000px] relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Vineyard" className="animate-[spin-slow_60s_linear_infinite_alternate] opacity-50 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e30587a4-bd0e-46fa-9e49-712860d16807_3840w.png" style={{animationDuration: '120s'}}/>
</div>

<div className="border-[1px] md:m-8 z-10 pointer-events-none border-white/5 mt-4 mr-4 mb-4 ml-4 absolute top-0 right-0 bottom-0 left-0" style={{}}>
<div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-gold-400/30" style={{}}></div>
</div>

<div className="max-w-5xl z-10 mt-12 pr-6 pl-6 relative">
<div className="[animation:animationIn_1s_ease-out_0s_both] animate-on-scroll animate">
<span className="inline-block border-gold-500/30 text-gold-300 uppercase text-xs font-semibold tracking-[0.2em] bg-black/40 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">The 2025 Harvest</span>
</div>
<h1 className="md:text-7xl lg:text-9xl leading-[1.1] [animation:animationIn_1s_ease-out_0.2s_both] animate-on-scroll animate text-5xl font-normal text-white tracking-tight font-serif mb-8">WHERE THE WINES <span className="text-gold-200 italic">MEET THE SEASONS</span></h1>
<div className="flex flex-col items-center [animation:animationIn_1s_ease-out_0.4s_both] animate-on-scroll animate">
<p className="leading-relaxed text-lg font-light text-stone-300 max-w-lg mb-10">
                    Experience wines crafted with patience in the heart of the valley. A sanctuary for the senses.
                </p>
<button className="group relative px-10 py-4 overflow-hidden rounded-sm bg-gold-500 text-dark hover:bg-white transition-colors duration-500">
<span className="relative z-10 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                        Book a Tasting
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute bottom-12 z-20 animate-bounce [animation:animationIn_1s_ease-out_1s_both] animate-on-scroll animate">
<div className="rounded-full border border-white/10 p-4 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition text-stone-400 hover:text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>
</header>

<section className="relative z-10 py-32 bg-dark overflow-hidden">

<div className="absolute left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
<div className="px-6 md:px-12 mb-16 text-center relative">

<div className="mx-auto w-px h-16 bg-gold-500/50 mb-6 [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll"></div>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-white mb-4 font-normal [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">Signature Vintages</h2>
<p className="text-stone-400 text-lg max-w-xl mx-auto [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">Award-winning bottles from our oldest vines, available for tasting and purchase.</p>
</div>

<div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 no-scrollbar snap-x snap-mandatory pl-6 md:pl-24">

<div className="relative min-w-[85vw] md:min-w-[40vw] lg:min-w-[28vw] aspect-[3/4] group cursor-pointer snap-center border border-white/5 bg-panel hover:border-gold-500/30 transition-all duration-500 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute inset-2 overflow-hidden">
<img alt="Wine" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57330459-abac-4e45-bd08-3938550b2c66_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
</div>
<div className="absolute top-8 left-8 flex items-center gap-3 z-10">
<div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-md">
<span className="font-serif text-gold-200 italic">98</span>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-widest text-gold-400">Points</p>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">James Suckling</p>
</div>
</div>
<div className="absolute bottom-10 left-8 right-8 z-10">
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-serif text-3xl tracking-tight text-white leading-tight">Cabernet Sauvignon</h3>
</div>
<p className="text-stone-400 text-sm mb-6 font-light">Reserve Block 4 • 2018</p>
<div className="flex justify-between items-center border-t border-white/10 pt-5">
<div className="flex gap-4 text-xs text-stone-400 uppercase tracking-wider">
<span>Red</span>
<span>•</span>
<span>Full Body</span>
</div>
<div className="text-white group-hover:translate-x-2 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative min-w-[85vw] md:min-w-[40vw] lg:min-w-[28vw] aspect-[3/4] group cursor-pointer snap-center border border-white/5 bg-panel hover:border-gold-500/30 transition-all duration-500 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute inset-2 overflow-hidden">
<img alt="Wine" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bb81ce8-e160-4898-ab77-88b159e88177_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
</div>
<div className="absolute top-8 left-8 flex items-center gap-3 z-10">
<div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-md">
<span className="font-serif text-gold-200 italic">96</span>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-widest text-gold-400">Points</p>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">Decanter</p>
</div>
</div>
<div className="absolute bottom-10 left-8 right-8 z-10">
<h3 className="font-serif text-3xl tracking-tight text-white mb-2 leading-tight">Grand Chardonnay</h3>
<p className="text-stone-400 text-sm mb-6 font-light">Estate Grown • 2021</p>
<div className="flex justify-between items-center border-t border-white/10 pt-5">
<div className="flex gap-4 text-xs text-stone-400 uppercase tracking-wider">
<span>White</span>
<span>•</span>
<span>Oaked</span>
</div>
<div className="text-white group-hover:translate-x-2 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="relative min-w-[85vw] md:min-w-[40vw] lg:min-w-[28vw] aspect-[3/4] group cursor-pointer snap-center border border-white/5 bg-panel hover:border-gold-500/30 transition-all duration-500 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="absolute inset-2 overflow-hidden">
<img alt="Wine" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fd299e1-2838-4cf1-9345-1e72aeafd061_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
</div>
<div className="absolute top-8 left-8 flex items-center gap-3 z-10">
<div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 bg-black/50 backdrop-blur-md">
<span className="font-serif text-gold-200 italic">Ltd</span>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-widest text-gold-400">Edition</p>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">500 Bottles</p>
</div>
</div>
<div className="absolute bottom-10 left-8 right-8 z-10">
<h3 className="font-serif text-3xl tracking-tight text-white mb-2 leading-tight">Pinot Noir Rosé</h3>
<p className="text-stone-400 text-sm mb-6 font-light">Single Vineyard • 2023</p>
<div className="flex justify-between items-center border-t border-white/10 pt-5">
<div className="flex gap-4 text-xs text-stone-400 uppercase tracking-wider">
<span>Rosé</span>
<span>•</span>
<span>Crisp</span>
</div>
<div className="text-white group-hover:translate-x-2 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-dark border-t border-white/5 relative">
<div className="bg-pattern-dots absolute inset-0 opacity-10 pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
<div className="[animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll">
<span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2 block">Visit The Estate</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white font-normal">Tasting Experiences</h2>
</div>
<div className="hidden md:flex gap-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<button className="p-4 border border-stone-800 rounded-full hover:border-gold-500 hover:text-gold-200 transition text-stone-400"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-4 border border-stone-800 rounded-full hover:border-gold-500 hover:text-gold-200 transition text-stone-400"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="relative overflow-hidden aspect-[4/3] mb-6 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c39acbd-6bde-4b06-900e-b2173491a510_1600w.webp" style={{}}/>
<div className="absolute bottom-4 right-4 bg-black/80 p-3 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-gold-500 transition-colors">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-white/30"></div>
</div>
<h3 className="text-xl font-serif text-white mb-2">Cellar Tours</h3>
<p className="text-stone-500 text-sm leading-relaxed">Walk through our historic underground caves and barrel rooms.</p>
</div>

<div className="group cursor-pointer [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="relative overflow-hidden aspect-[4/3] mb-6 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c939aaf-1d8e-4385-a941-734463e89d77_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-black/80 p-3 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-gold-500 transition-colors">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-white/30"></div>
</div>
<h3 className="text-xl font-serif text-white mb-2">Private Tastings</h3>
<p className="text-stone-500 text-sm leading-relaxed">A guided flight of 5 wines paired with artisanal cheeses.</p>
</div>

<div className="group cursor-pointer [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="relative overflow-hidden aspect-[4/3] mb-6 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b910e00-e459-498c-8474-95547d8a465b_1600w.jpg" style={{}}/>
<div className="absolute bottom-4 right-4 bg-black/80 p-3 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-gold-500 transition-colors">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-white/30"></div>
</div>
<h3 className="text-xl font-serif text-white mb-2">Member's Terrace</h3>
<p className="text-stone-500 text-sm leading-relaxed">Exclusive access to the vineyard overlook for club members.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-dark flex justify-center">
<div className="w-full max-w-4xl bg-panel border border-white/5 p-8 md:p-16 relative overflow-hidden [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
<div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-gold-500"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-gold-500"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-gold-500"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-gold-500"></div>

<div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-900/10 blur-[100px] pointer-events-none rounded-full"></div>
<div className="text-center mb-12 relative z-10">
<svg className="mx-auto mb-4 text-gold-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M7 10h10"></path><path d="M12 15v7"></path><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8h-6c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path></svg>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white mb-2 font-normal">Reserve Your Visit</h2>
<div className="flex items-center justify-center gap-4 mt-6">
<div className="h-px w-8 bg-stone-700"></div>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Bookings Required</span>
<div className="h-px w-8 bg-stone-700"></div>
</div>
</div>
<form className="space-y-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-gold-400 transition-colors">First &amp; Last Name</label>
<input className="w-full bg-transparent border-b border-stone-800 text-lg text-white py-3 focus:outline-none focus:border-gold-400 transition-colors placeholder-stone-700" placeholder="e.g. Eleanor Vance" type="text"/>
</div>
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-gold-400 transition-colors">Email Address</label>
<input className="w-full bg-transparent border-b border-stone-800 text-lg text-white py-3 focus:outline-none focus:border-gold-400 transition-colors placeholder-stone-700" placeholder="eleanor@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-2 relative group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-gold-400 transition-colors">Date</label>
<div className="flex items-center border-b border-stone-800 py-3 group-focus-within:border-gold-400 transition-colors">
<svg className="text-stone-500 mr-3" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<input className="w-full bg-transparent text-lg text-white focus:outline-none font-serif" type="text" value="Oct 24, 2024"/>
</div>
</div>
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-gold-400 transition-colors">Experience</label>
<div className="flex items-center border-b border-stone-800 py-3 relative group-focus-within:border-gold-400 transition-colors">
<svg className="text-stone-500 mr-3" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M7 10h10"></path><path d="M12 15v7"></path><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8h-6c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path></svg>
<select className="w-full bg-transparent text-lg text-white focus:outline-none appearance-none cursor-pointer font-serif">
<option className="bg-panel text-stone-300">Signature Tasting</option>
<option className="bg-panel text-stone-300" selected="">Cellar Tour &amp; Taste</option>
<option className="bg-panel text-stone-300">Private Library Flight</option>
</select>
<svg className="absolute right-0 text-stone-600 pointer-events-none" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-gold-400 transition-colors">Guests</label>
<div className="flex items-center border-b border-stone-800 py-3 relative group-focus-within:border-gold-400 transition-colors">
<svg className="text-stone-500 mr-3" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<select className="w-full bg-transparent text-lg text-white focus:outline-none appearance-none cursor-pointer font-serif">
<option className="bg-panel text-stone-300">2 Guests</option>
<option className="bg-panel text-stone-300">3 Guests</option>
<option className="bg-panel text-stone-300">4 Guests</option>
<option className="bg-panel text-stone-300">Large Group (5+)</option>
</select>
<svg className="absolute right-0 text-stone-600 pointer-events-none" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2 group">
<label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold group-focus-within:text-gold-400 transition-colors">Wine Club ID (Optional)</label>
<input className="w-full bg-transparent border-b border-stone-800 text-lg text-white py-3 focus:outline-none focus:border-gold-400 transition-colors placeholder-stone-700" placeholder="Enter Member ID" type="text"/>
</div>
</div>
<div className="pt-8 flex justify-center">
<button className="bg-white hover:bg-gold-400 text-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-gold-300 hover:shadow-[0_0_20px_rgba(194,163,95,0.3)]">
<span>Confirm Reservation</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="m16 6 6 6-6 6"></path></svg>
</button>
</div>
</form>
</div>
</section>

<section className="pb-24 px-6 md:px-12 bg-dark">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">

<div className="md:col-span-4 bg-gold-100 p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="bg-center opacity-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a4add23-3986-4997-8df1-a3ff74903c30_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<svg className="text-stone-800" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<h3 className="text-xs font-bold uppercase tracking-widest text-stone-800">Tasting Room Hours</h3>
</div>
<div className="space-y-6">
<div>
<p className="text-[10px] uppercase text-stone-500 font-bold mb-1">Daily</p>
<p className="text-3xl font-serif text-stone-900">10:00 <span className="text-sm text-stone-500 font-sans">AM</span> — 05:00 <span className="text-sm text-stone-500 font-sans">PM</span></p>
</div>
<div>
<p className="text-[10px] uppercase text-stone-500 font-bold mb-1">Last Pour</p>
<p className="text-3xl font-serif text-stone-900">04:30 <span className="text-sm text-stone-500 font-sans">PM</span></p>
</div>
</div>
</div>
<div className="pt-8 border-t border-stone-300 relative z-10">
<div className="flex justify-between items-center">
<div>
<p className="text-[10px] uppercase text-stone-500 font-bold mb-1">Standard Flight</p>
<p className="text-xl font-serif text-stone-900">$45.00 <span className="text-xs text-stone-500 font-sans font-normal">per person</span></p>
</div>
<div className="w-10 h-10 rounded-full border border-stone-400 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300 cursor-pointer">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 relative group overflow-hidden cursor-pointer [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63e603a2-b6db-4f7e-9b1e-2d5fbd1da884_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-4 border border-white/10 group-hover:border-gold-500/50 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-gold-300 text-[10px] font-bold uppercase tracking-widest mb-2 block">Membership</span>
<h3 className="text-2xl font-serif text-white mb-2 font-normal">Join The Club</h3>
<p className="text-stone-300 text-sm line-clamp-2 mb-6">Receive allocations of our limited releases and invitations to harvest events.</p>
<div className="flex justify-end">
<svg className="text-white opacity-50 group-hover:opacity-100 transition-opacity" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 8 4 4-4 4"></path><path d="M8 12h8"></path></svg>
</div>
</div>
</div>

<div className="md:col-span-4 relative group overflow-hidden cursor-pointer [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cfd558f-8a19-4434-84ba-28cc87d9b116_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-4 border border-white/10 group-hover:border-gold-500/50 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-gold-300 text-[10px] font-bold uppercase tracking-widest mb-2 block">Shop Online</span>
<h3 className="text-2xl font-serif text-white mb-2 font-normal">Acquire Wines</h3>
<p className="text-stone-300 text-sm line-clamp-2 mb-6">Browse our current release wines and large format bottles.</p>
<div className="flex justify-end">
<svg className="text-white opacity-50 group-hover:opacity-100 transition-opacity" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 8 4 4-4 4"></path><path d="M8 12h8"></path></svg>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-stone-500 py-16 px-6 md:px-12 border-t border-white/5 text-sm [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-3">

<svg className="text-stone-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 5h-2.4c-.31 0-.6.15-.77.4L12 18l-6.8-12.6A.91.91 0 0 0 4.4 5H2"></path><path d="M8 9.5a4.8 4.8 0 0 1 2.3-1.3"></path><path d="M11 15a6.5 6.5 0 0 0 2.8-1.5"></path><path d="M12 18v4"></path><path d="M8 22h8"></path></svg>
<span className="font-serif text-stone-300 tracking-widest text-lg">DOMAINE</span>
</div>
<div className="text-xs leading-loose">
                    1240 Vineyard Lane<br/>
                    Napa Valley, CA 94574<br/>
                    +1 (707) 555-0123
                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<span className="text-white text-xs font-bold uppercase tracking-widest">Wines</span>
<a className="hover:text-white transition-colors" href="#">Cabernet</a>
<a className="hover:text-white transition-colors" href="#">Pinot Noir</a>
<a className="hover:text-white transition-colors" href="#">Chardonnay</a>
<a className="hover:text-white transition-colors" href="#">Rosé</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white text-xs font-bold uppercase tracking-widest">Visit</span>
<a className="hover:text-white transition-colors" href="#">Tastings</a>
<a className="hover:text-white transition-colors" href="#">Tours</a>
<a className="hover:text-white transition-colors" href="#">Private Events</a>
<a className="hover:text-white transition-colors" href="#">Culinary</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white text-xs font-bold uppercase tracking-widest">Social</span>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<div>© 2024 Domaine Estate Winery. Drink Responsibly.</div>
<div className="flex gap-6">
<a className="hover:text-stone-400" href="#">Privacy Policy</a>
<a className="hover:text-stone-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
