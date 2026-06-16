import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
dark: '#0e0e0e',
card: '#161616',
accent: '#ff3b30',
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // View Switcher Logic
        function switchView(viewName) {
            const homeView = document.getElementById('view-home');
            const storeView = document.getElementById('view-store');
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (viewName === 'store') {
                homeView.classList.add('hidden');
                storeView.classList.remove('hidden');
            } else {
                storeView.classList.add('hidden');
                homeView.classList.remove('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full pt-6 md:pt-8 px-6 md:px-12 flex flex-col items-center relative z-50">
<div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 border-b border-white/5 pb-6">

<div className="flex flex-wrap justify-center md:justify-start items-center gap-4 w-full md:w-auto">
<button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors">
                    Use for free
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
</button>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<a className="p-2.5 rounded-full border border-white/10 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="dribbble" strokeWidth="1.5"></i>
</a>
<a className="p-2.5 rounded-full border border-white/10 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="p-2.5 rounded-full border border-white/10 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>


<div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-8 order-last md:order-none mt-4 md:mt-0">
<button className="text-neutral-400 hover:text-white transition-colors text-sm font-medium md:pb-8" onclick="switchView('home')">Projects</button>
<div className="flex flex-col items-center gap-3 cursor-pointer" onclick="switchView('home')">
<div className="w-14 h-14 rounded-full bg-accent overflow-hidden border-4 border-dark relative shadow-xl hover:scale-105 transition-transform duration-300">
<img alt="Lana" className="w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-accent text-sm font-medium">Lana</span>
<span className="w-1 h-1 bg-accent rounded-full"></span>
</div>
</div>
<button className="text-neutral-400 hover:text-white transition-colors text-sm font-medium md:pb-8" onclick="switchView('store')">Store</button>
</div>

<div className="hidden md:flex items-center w-auto justify-end">
<button className="w-14 h-8 rounded-full bg-white/5 border border-white/10 flex items-center px-1 relative transition-colors hover:border-white/20">
<div className="absolute right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform">
<i className="w-3.5 h-3.5 text-black fill-current" data-lucide="moon" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>
</nav>

<div className="w-full flex-grow" id="content-area">

<div className="fade-in" id="view-home">

<main className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col items-center">

<div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-8 md:mb-12 relative">
<h1 className="font-display text-[15vw] lg:text-[11rem] leading-[0.85] text-white uppercase tracking-tight text-center lg:text-right">
                        Graphics
                    </h1>

<div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden mt-2 lg:mt-6 border-4 border-dark bg-gradient-to-b from-orange-400 to-orange-600 shrink-0 shadow-2xl z-10">
<img alt="Designer Portrait" className="w-full h-full object-cover mix-blend-normal transform scale-110 translate-y-2" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h1 className="font-display text-[15vw] lg:text-[11rem] leading-[0.85] text-white uppercase tracking-tight text-center lg:text-left">
                        Designer
                    </h1>
</div>

<p className="text-base md:text-xl text-neutral-400 text-center max-w-2xl leading-relaxed font-light mb-12 px-4">
                    I create eye-catching graphics templates that'll make your business stand out, saving you time and helping you win more customers.
                </p>

<button className="bg-white text-black pl-6 pr-5 py-3.5 rounded-full text-base font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Book a call
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
</button>
</main>

<section className="w-full border-t border-white/5 bg-[#0e0e0e]">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
<h2 className="font-display text-5xl md:text-8xl text-center text-white mb-20 uppercase tracking-tight">
                        Latest Project
                    </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

<div className="group relative w-full aspect-[4/3] bg-card rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center screen-glow hover:border-white/10 transition-colors">
<div className="relative w-[70%] transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
<div className="bg-[#1a1a1a] rounded-t-xl border-[1px] border-white/10 p-1 shadow-2xl">
<div className="bg-black w-full aspect-[16/10] rounded overflow-hidden relative">
<div className="absolute inset-0 flex flex-col p-6 text-white">
<div className="flex justify-between items-center mb-8 opacity-50 text-[8px]">
<span>Logo</span>
<div className="flex gap-2"><span>Home</span><span>Shop</span></div>
<div className="px-2 py-0.5 bg-white text-black rounded-sm">Get Started</div>
</div>
<div className="mt-4">
<div className="text-[10px] text-neutral-500 mb-1">DESIGN</div>
<h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">WE CREATE<br/>AWESOME</h3>
</div>
</div>
</div>
</div>
<div className="h-3 bg-[#2a2a2a] rounded-b-lg w-full shadow-xl relative mx-auto mt-[-1px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1a1a1a] rounded-b-md"></div>
</div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/50 blur-xl rounded-[100%]"></div>
</div>
</div>

<div className="group relative w-full aspect-[4/3] bg-card rounded-[2rem] border border-white/5 overflow-hidden flex items-center justify-center screen-glow hover:border-white/10 transition-colors">
<div className="relative w-[65%] transform rotate-[-12deg] group-hover:rotate-[-10deg] group-hover:scale-105 transition-all duration-700 ease-out">
<div className="bg-[#ccc] rounded-t-xl border-[1px] border-white/20 p-0.5 shadow-2xl">
<div className="bg-[#111] w-full aspect-[16/10] rounded overflow-hidden relative border-4 border-black">
<div className="absolute inset-0 flex flex-col p-5 bg-[#0a0a0a] text-white">
<div className="flex justify-between items-center mb-6">
<div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
<div className="px-2 py-0.5 bg-orange-600 text-[6px] rounded-full">Template</div>
</div>
<h3 className="text-lg md:text-xl font-bold leading-none mb-1">We Ship It.</h3>
<div className="mt-4 px-3 py-1 bg-orange-600 w-fit text-[6px] font-bold rounded-sm">Book Now</div>
</div>
</div>
</div>
<div className="h-2 bg-[#888] rounded-b-md w-full shadow-2xl relative mt-[-1px] border-t border-black/50"></div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden fade-in min-h-[80vh]" id="view-store">
<section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">

<div className="w-full text-center mb-20 md:mb-24">
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tight">
                        My Products
                    </h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">

<div className="group bg-[#131313] border border-white/5 rounded-[2rem] p-6 hover:border-white/10 hover:bg-[#161616] transition-all duration-300 flex flex-col">
<div className="flex items-center gap-3 text-neutral-500 mb-6">
<i className="w-4 h-4" data-lucide="monitor" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Website</span>
</div>
<div className="aspect-[16/10] w-full bg-[#0a0a0a] rounded-2xl overflow-hidden mb-6 relative group-hover:shadow-2xl transition-all">

<img alt="Pixel Store" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex justify-between items-center mt-auto">
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-accent transition-colors">Pixel store</h3>
<span className="text-neutral-400 font-medium text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:bg-white group-hover:text-black transition-all">$249</span>
</div>
</div>

<div className="group bg-[#131313] border border-white/5 rounded-[2rem] p-6 hover:border-white/10 hover:bg-[#161616] transition-all duration-300 flex flex-col">
<div className="flex items-center gap-3 text-neutral-500 mb-6">
<i className="w-4 h-4" data-lucide="pen-tool" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Graphics</span>
</div>
<div className="aspect-[16/10] w-full bg-[#0a0a0a] rounded-2xl overflow-hidden mb-6 relative group-hover:shadow-2xl transition-all">

<img alt="African Landscape" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center mt-auto">
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-accent transition-colors">African landscape</h3>
<span className="text-neutral-400 font-medium text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:bg-white group-hover:text-black transition-all">$23</span>
</div>
</div>

<div className="group bg-[#131313] border border-white/5 rounded-[2rem] p-6 hover:border-white/10 hover:bg-[#161616] transition-all duration-300 flex flex-col">
<div className="flex items-center gap-3 text-neutral-500 mb-6">
<i className="w-4 h-4" data-lucide="smartphone" strokeWidth="1.5"></i>
<span className="text-sm font-medium">App</span>
</div>
<div className="aspect-[16/10] w-full bg-[#0a0a0a] rounded-2xl overflow-hidden mb-6 relative group-hover:shadow-2xl transition-all">

<img alt="Vital Card" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center mt-auto">
<h3 className="text-lg text-white font-medium tracking-tight group-hover:text-accent transition-colors">Vital Card</h3>
<span className="text-neutral-400 font-medium text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:bg-white group-hover:text-black transition-all">Free</span>
</div>
</div>
</div>

<div className="w-full flex justify-center pb-20">
<button className="font-display text-xl md:text-2xl text-white/50 hover:text-white uppercase tracking-tight flex items-center gap-2 transition-colors">
                        More Products
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
</button>
</div>
</section>
</div>
</div>


    </>
  );
}
