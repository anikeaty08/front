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
heading: ['"Playfair Display"', 'serif'],
body: ['"Instrument Serif"', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative w-full max-w-6xl aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] bg-neutral-900 border border-neutral-800 flex flex-col overflow-hidden group">

<div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/10 pointer-events-none skew-x-12 translate-x-20"></div>
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>

<header className="relative z-10 w-full px-6 py-6 md:px-10 md:py-8 flex justify-between items-center border-b border-neutral-800/50">

<div className="flex items-center gap-2">
<span className="font-heading font-medium tracking-tighter text-2xl text-neutral-100">
                    AESTHETE
                </span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="font-body text-xl text-neutral-400 hover:text-neutral-100 transition-colors italic" href="#">Journal</a>
<a className="font-body text-xl text-neutral-400 hover:text-neutral-100 transition-colors italic" href="#">Collections</a>
<a className="font-body text-xl text-neutral-400 hover:text-neutral-100 transition-colors italic" href="#">Atelier</a>
</nav>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="text-neutral-400 hover:text-white transition-colors md:hidden">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<a className="hidden md:flex items-center gap-2 font-body text-lg text-neutral-100 border border-neutral-700 px-4 py-1.5 hover:bg-neutral-800 transition-colors" href="#">
                    Sign In
                </a>
</div>
</header>

<div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16">
<div className="max-w-3xl">

<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-neutral-600"></span>
<span className="font-body text-lg md:text-xl text-neutral-400 uppercase tracking-widest">Autumn / Winter '24</span>
</div>

<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-neutral-100 leading-[0.95] tracking-tight mb-8">
<span className="italic font-normal opacity-80 block mb-2">Refined</span>
<span className="font-medium">SIMPLICITY.</span>
</h1>

<p className="font-body text-2xl md:text-3xl text-neutral-400 leading-snug max-w-xl mb-10 italic opacity-90">
                    We curate the silence between the noise. A digital sanctuary for the modern minimalist seeking depth in a flat world.
                </p>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6">

<button className="group relative px-8 py-4 bg-neutral-100 text-neutral-950 font-body text-xl italic overflow-hidden transition-all hover:pr-12">
<span className="relative z-10">Explore Collection</span>
<span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-4">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
</button>

<button className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group">
<div className="w-10 h-10 border border-neutral-700 flex items-center justify-center rounded-full group-hover:border-neutral-500 transition-colors">
<span className="ml-0.5" data-icon="lucide:play" data-width="14"></span>
</div>
<span className="font-body text-xl">Watch Film</span>
</button>
</div>
</div>

<div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col gap-6 items-end hidden md:flex">

<label className="flex items-center gap-3 cursor-pointer group">
<span className="font-body text-lg text-neutral-500 group-hover:text-neutral-300 transition-colors">Dark Mode</span>
<div className="relative w-5 h-5 border border-neutral-600 flex items-center justify-center">
<input checked="" className="peer w-full h-full absolute inset-0 opacity-0 cursor-pointer" type="checkbox"/>
<span className="w-3 h-3 bg-neutral-200 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
</div>
</label>

<div className="flex items-center gap-4">
<span className="font-body text-lg text-neutral-500">01</span>
<div className="w-24 h-px bg-neutral-800 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-0.5 bg-neutral-200"></div>
</div>
<span className="font-body text-lg text-neutral-300">04</span>
</div>
</div>
</div>
</main>

    </>
  );
}
