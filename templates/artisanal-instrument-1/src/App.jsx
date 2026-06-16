import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
mint: '#8CD5A5',
},
fontSize: {
'hero': ['clamp(3rem, 6vw, 6rem)', { lineHeight: '1' }],
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Sticky Navbar Effect
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-white/10', 'py-4');
                navbar.classList.remove('py-6', 'border-white/0');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-white/10', 'py-4');
                navbar.classList.add('py-6', 'border-white/0');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/0 px-6 py-6 md:px-12" id="navbar">
<div className="max-w-[1440px] mx-auto flex justify-between items-center">

<a className="group flex items-center gap-3 z-50" href="#">
<div className="w-10 h-10 md:w-12 md:h-12 relative text-mint group-hover:opacity-90 transition-opacity">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M0 35C0 15.67 15.67 0 35 0H75C88.8071 0 100 11.1929 100 25V60C100 73.8071 88.8071 85 75 85H30V35H0Z" fill="currentColor"></path>
<rect fill="black" height="30" width="30" x="30" y="30"></rect>
<path d="M0 60H30V100H0V60Z" fill="currentColor"></path>
</svg>
</div>
<div className="hidden md:flex flex-col justify-center leading-none">
<span className="font-heading font-bold text-xl tracking-tight text-mint uppercase">The</span>
<span className="font-heading font-bold text-xl tracking-tight text-mint uppercase">Instrument</span>
<span className="font-heading font-bold text-xl tracking-tight text-mint uppercase">Project</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-lg font-normal text-white/70 hover:text-mint transition-colors tracking-wide" href="#">Products</a>
<a className="text-lg font-normal text-white/70 hover:text-mint transition-colors tracking-wide" href="#">Process</a>
<a className="text-lg font-normal text-white/70 hover:text-mint transition-colors tracking-wide" href="#">Join</a>
</div>

<button className="md:hidden text-white hover:text-mint transition-colors">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center">

<div className="absolute inset-0 z-0">

<img alt="Artisanal Luthier Working" className="w-full h-full object-cover object-right md:object-center opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-8">

<div className="animate-fade-in flex items-center gap-3">
<div className="h-[1px] w-12 bg-mint/50"></div>
<span className="text-mint font-medium text-sm tracking-widest uppercase">Sonic Craftsmanship</span>
</div>

<h1 className="animate-fade-in delay-100 font-heading font-semibold text-hero text-white tracking-tighter capitalize">
                        Re harmonize <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">the world.</span>
</h1>

<p className="animate-fade-in delay-200 text-lg md:text-2xl text-neutral-400 font-normal leading-relaxed max-w-xl">
                        We reclaim history to build the future of sound. Artisanal instruments crafted from recovered timber, designed for the modern purist.
                    </p>

<div className="animate-fade-in delay-300 pt-4 flex flex-wrap gap-6 items-center">
<a className="group flex items-center gap-4 text-white hover:text-mint transition-all duration-300" href="#collection">
<span className="w-12 h-12 rounded-full border border-white/20 group-hover:border-mint flex items-center justify-center transition-colors">
<i className="w-5 h-5 fill-current ml-1" data-lucide="play" strokeWidth="1.5"></i>
</span>
<span className="text-lg tracking-wide">Watch the Film</span>
</a>
</div>
</div>

<div className="lg:col-span-5 hidden lg:block">

</div>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 animate-fade-in delay-300 z-20">
<div className="relative h-16 w-[1px] bg-white/10 overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-mint scroll-cue-line"></div>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Scroll</span>
</div>
</header>

<section className="w-full bg-black py-32 px-6 md:px-12">
<div className="max-w-[1440px] mx-auto border-t border-white/10 pt-24 grid md:grid-cols-2 gap-16">
<h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Instruments with <br/>
<span className="text-neutral-500">a past life.</span>
</h2>
<div className="space-y-6">
<p className="text-xl text-neutral-400 font-normal leading-relaxed">
                    Every piece of wood has a story. We don't just build guitars; we curate history. By sourcing timber from demolished architectural landmarks, we preserve the soul of the past in an instrument built for today's highest fidelity standards.
                </p>
<a className="inline-flex items-center gap-2 text-mint border-b border-mint/30 pb-1 hover:border-mint transition-all" href="#">
                    Explore the collection <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>



    </>
  );
}
