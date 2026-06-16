import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Mulish', 'sans-serif'],
serif: ['Italiana', 'serif'],
},
colors: {
void: '#050505',
charcoal: '#0F0F0F',
gold: '#C6A87C',
skin: '#C4A496'
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
letterSpacing: {
'widest': '0.25em',
'super-wide': '0.4em',
}
}
}
}



        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500" id="navbar">
<button className="group flex flex-col gap-1.5 w-8">
<span className="h-[1px] w-8 bg-white transition-all group-hover:w-6"></span>
<span className="h-[1px] w-6 bg-white transition-all group-hover:w-8"></span>
</button>
<a className="text-3xl font-serif tracking-widest uppercase absolute left-1/2 -translate-x-1/2" href="#">
            Lumière
        </a>
<div className="flex items-center gap-6">
<span className="hidden md:block text-xs uppercase tracking-widest hover:text-stone-400 transition-colors cursor-pointer">Account</span>
<span className="text-xs uppercase tracking-widest hover:text-stone-400 transition-colors cursor-pointer">Bag (0)</span>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/30 z-10"></div>

<img alt="Model silhouette in dark water" className="w-full h-full object-cover object-center opacity-80 ken-burns" src="https://images.unsplash.com/photo-1545912452-8ea1d0821d43?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-20 text-center flex flex-col items-center gap-8 px-4">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tighter leading-none opacity-0 animate-[fadeIn_1.5s_ease-out_forwards] delay-300">
                Let them look.
            </h1>
<div className="h-px w-0 bg-white/50 animate-[width_1s_ease-out_forwards] delay-1000" style={{animationFillMode: 'forwards', width: '100px'}}></div>
<a className="text-xs tracking-[0.3em] uppercase text-white/80 hover:text-white transition-all hover:tracking-[0.4em] opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-1000" href="#shop">
                Enter The Shop
            </a>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-pulse">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
</div>
</header>

<section className="py-32 px-6 bg-void relative z-10">
<div className="max-w-2xl mx-auto text-center reveal">
<p className="font-serif text-3xl md:text-4xl leading-relaxed text-white/90">
<span className="italic text-gold block mb-2 text-xl opacity-80">The Philosophy</span>
                Clothing should cover the body. <br/>
                Lumière is designed to reveal it.
            </p>
</div>
</section>

<section className="min-h-screen bg-void px-0 md:px-0 flex flex-col md:flex-row border-t border-white/5" id="shop">

<div className="w-full md:w-1/3 flex flex-col justify-center px-8 md:px-16 py-20 border-r border-white/5 sticky top-0 h-screen">
<span className="text-gold text-xs uppercase tracking-super-wide mb-6">Collection 01</span>
<h2 className="font-serif text-5xl md:text-6xl text-white mb-8">Barely<br/>There</h2>
<p className="text-stone-500 font-light text-sm leading-7 mb-10 max-w-xs">
                Minimal coverage. Maximum impact. Cuts that defy gravity and invite the gaze. Not for the timid.
            </p>
<a className="inline-flex items-center gap-4 text-xs uppercase tracking-widest hover:text-white transition-colors group w-max" href="#">
                View Selection
                <span className="w-8 h-px bg-stone-700 group-hover:bg-white transition-colors"></span>
</a>
</div>

<div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2">

<div className="group relative aspect-[3/4] border-b border-r border-white/5 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors"></div>

<img alt="Model in Black Bikini" className="w-full h-full object-cover img-zoom brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1623190623573-455b9343360b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="font-serif text-xl text-white italic">The Onyx Micro</h3>
<p className="text-xs text-white/60 mt-1 uppercase tracking-widest">$180</p>
</div>
</div>

<div className="group relative aspect-[3/4] border-b border-white/5 overflow-hidden cursor-pointer">

<img alt="Model in String Bikini" className="w-full h-full object-cover img-zoom brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1526437996843-982823349925?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="font-serif text-xl text-white italic">Wet String Bottom</h3>
<p className="text-xs text-white/60 mt-1 uppercase tracking-widest">$120</p>
</div>
</div>

<div className="group relative aspect-[3/4] border-r border-white/5 overflow-hidden cursor-pointer">

<img alt="Model in Monokini" className="w-full h-full object-cover img-zoom brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1544253303-36c507c6f272?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="font-serif text-xl text-white italic">Midnight Monokini</h3>
<p className="text-xs text-white/60 mt-1 uppercase tracking-widest">$240</p>
</div>
</div>

<div className="relative aspect-[3/4] bg-charcoal flex items-center justify-center p-8 text-center border-white/5 overflow-hidden group">

<img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:opacity-50 transition-opacity duration-700" src="https://images.unsplash.com/photo-1574365538573-0f73db2ce75a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<p className="font-serif text-3xl italic text-white/60 mb-4">"Wear less."</p>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-fixed bg-center bg-cover brightness-50" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1566491889054-771184a861c5?q=80&amp'}}>
</div>
<div className="relative z-10 text-center mix-blend-overlay">
<h2 className="text-[12vw] leading-none font-serif text-white opacity-80">UNAPOLOGETIC</h2>
</div>
</section>

<section className="bg-void py-32 px-6 md:px-12">
<div className="flex justify-between items-end mb-16">
<h2 className="text-4xl font-serif text-white">Essentials</h2>
<a className="text-[10px] uppercase tracking-super-wide text-white/50 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="group relative cursor-pointer">
<div className="w-full aspect-[2/3] overflow-hidden bg-charcoal">
<img alt="Swimwear Model" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596708781329-373d57b32d29?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-center opacity-60 group-hover:opacity-100 transition duration-500">
<span className="text-xs uppercase tracking-widest">Noir Triangle</span>
<span className="text-xs tracking-widest">$90</span>
</div>
</div>

<div className="group relative md:mt-12 cursor-pointer"> 
<div className="w-full aspect-[2/3] overflow-hidden bg-charcoal">
<img alt="Swimwear Model" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620215762039-4467dc0b06b3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-center opacity-60 group-hover:opacity-100 transition duration-500">
<span className="text-xs uppercase tracking-widest">Obsidian Brief</span>
<span className="text-xs tracking-widest">$85</span>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="w-full aspect-[2/3] overflow-hidden bg-charcoal">
<img alt="Swimwear Model" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574365538209-42b7194f1345?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-center opacity-60 group-hover:opacity-100 transition duration-500">
<span className="text-xs uppercase tracking-widest">Sheer Sarong</span>
<span className="text-xs tracking-widest">$110</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal text-center border-y border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 h-96">
<div className="h-full w-full overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition duration-1000" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center items-center p-12 bg-void">
<h3 className="font-serif text-3xl md:text-5xl text-white mb-6">Turn Heads.</h3>
<p className="font-light text-stone-500 max-w-sm mb-8 text-sm">
                    Constructed from the finest Italian fabrics that feel like a second skin. 
                    Accented with 24k gold hardware.
                </p>
<a className="text-[10px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 hover:border-gold hover:text-gold transition-colors" href="#">
                    The Fabric Details
                </a>
</div>
</div>
</section>

<footer className="bg-void pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
<div className="max-w-xl mx-auto text-center">
<h2 className="font-serif text-4xl text-white mb-4">Get Closer.</h2>
<p className="text-stone-500 text-xs tracking-widest mb-10 uppercase">
                Private sales. New drops. No spam.
            </p>
<form className="flex flex-col gap-8 mb-24 relative">
<input className="w-full bg-transparent border-b border-stone-800 py-4 text-center text-white placeholder-stone-700 outline-none focus:border-white transition-colors text-sm tracking-widest uppercase" placeholder="ENTER YOUR EMAIL" type="email"/>
<button className="absolute right-0 top-4 text-stone-500 hover:text-white transition-colors" type="submit">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</form>
<div className="flex justify-between items-end text-[10px] text-stone-600 uppercase tracking-widest">
<div className="text-left space-y-2">
<a className="block hover:text-white transition-colors" href="#">Instagram</a>
<a className="block hover:text-white transition-colors" href="#">TikTok</a>
</div>
<div className="text-center">
<span className="font-serif text-2xl text-stone-700">Lumière</span>
</div>
<div className="text-right space-y-2">
<a className="block hover:text-white transition-colors" href="#">Legal</a>
<a className="block hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
