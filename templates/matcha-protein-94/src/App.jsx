import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
serif: ['Playfair Display', 'serif'],
body: ['Lora', 'serif'],
},
extend: {
colors: {
citrus: {
light: '#F9F6F0',
cream: '#EFEBE2',
main: '#FF5500',
dark: '#2C1810',
}
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float-slow': 'float 8s ease-in-out infinite',
'float-medium': 'float 6s ease-in-out infinite reverse',
'float-fast': 'float 4s ease-in-out infinite',
'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
'50%': { opacity: '0.7', transform: 'scale(1.1)' },
}
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
      

<nav className="animate-enter-down w-full px-6 py-6 flex flex-col md:flex-row items-center justify-between relative z-50 gap-4 md:gap-0">

<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#FF5500] text-white rounded-full transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#FF5500] text-white rounded-full transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95">
<iconify-icon icon="solar:music-note-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#FF5500] text-white rounded-full transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center bg-white/10 border border-white/20 backdrop-blur-md rounded-full p-1.5 shadow-sm hover:bg-white/15 transition-colors">
<a className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-citrus-dark transition-colors" href="#">Origins</a>
<a className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-citrus-dark transition-colors" href="#">Harvest</a>
<a className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-citrus-dark transition-colors" href="#">Taste</a>
</div>

<button className="group flex items-center gap-2 bg-white text-[#FF5500] pl-5 pr-2 py-2 rounded-full hover:bg-citrus-dark hover:text-white transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5">
<span className="text-sm font-medium italic pr-1">Pre-order Box</span>
<div className="w-8 h-8 bg-[#FF5500]/10 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</button>
</nav>

<section className="flex flex-col md:pt-12 md:pb-12 w-full pt-8 pb-16 relative items-center">

<div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse-glow -z-10"></div>
<div className="absolute top-0 right-1/4 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl animate-float-slow -z-10"></div>
<h1 className="animate-scale-in delay-100 select-none text-9xl text-white tracking-tight font-serif opacity-100 mix-blend-soft-light relative z-10">
            ZEST
        </h1>
</section>

<main className="w-full border-t border-white/20 relative">
<div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1600px] mx-auto min-h-[750px] relative">

<div className="animate-enter-up delay-200 relative border-r border-white/20 p-8 flex flex-col justify-between h-full bg-gradient-to-b from-transparent to-black/5">
<div className="flex items-center justify-between mb-12">
<span className="text-xs font-serif italic text-white/80">No. 01</span>
<span className="text-xs font-semibold uppercase tracking-widest text-white/60">Analysis</span>
</div>
<div className="relative flex-1 flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-12 gap-12 py-10">

<div className="absolute left-6 top-0 bottom-0 w-px bg-white/20 hidden lg:block"></div>

<div className="relative z-10 w-full pl-8 group cursor-default">
<div className="absolute left-0 top-3 w-3 h-3 border border-white rounded-full bg-transparent group-hover:bg-white transition-colors animate-float-slow"></div>
<span className="text-5xl font-serif tracking-tight text-white block group-hover:translate-x-2 transition-transform duration-300">500<span className="text-xl align-top font-body italic opacity-60 ml-1">mg</span></span>
<span className="text-sm uppercase tracking-widest text-white/90 font-semibold mt-1 block">Vitamin C</span>
<p className="text-xs text-white/70 mt-2 max-w-[150px] leading-relaxed">Daily immunity boost in a single serving.</p>
</div>

<div className="relative z-10 w-full pl-8 group cursor-default">
<div className="absolute left-0 top-3 w-3 h-3 border border-white rounded-full bg-transparent group-hover:bg-white transition-colors animate-float-medium"></div>
<span className="text-5xl font-serif tracking-tight text-white block group-hover:translate-x-2 transition-transform duration-300">100<span className="text-xl align-top font-body italic opacity-60 ml-1">%</span></span>
<span className="text-sm uppercase tracking-widest text-white/90 font-semibold mt-1 block">Cold Pressed</span>
<p className="text-xs text-white/70 mt-2 max-w-[150px] leading-relaxed">Never heated, preserving all enzymes.</p>
</div>

<div className="relative z-10 w-full pl-8 group cursor-default">
<div className="absolute left-0 top-3 w-3 h-3 border border-white rounded-full bg-transparent group-hover:bg-white transition-colors animate-float-fast"></div>
<span className="text-5xl font-serif tracking-tight text-white block group-hover:translate-x-2 transition-transform duration-300">4.5<span className="text-xl align-top font-body italic opacity-60 ml-1">pH</span></span>
<span className="text-sm uppercase tracking-widest text-white/90 font-semibold mt-1 block">Acidity</span>
<p className="text-xs text-white/70 mt-2 max-w-[150px] leading-relaxed">Perfectly balanced for refreshing taste.</p>
</div>
</div>
</div>

<div className="animate-enter-up delay-300 relative border-r border-white/20 p-8 flex flex-col h-full overflow-hidden bg-white/5">
<div className="flex items-center justify-between z-20">
<span className="text-xs font-serif italic text-white/80">No. 02</span>
<span className="text-xs font-semibold uppercase tracking-widest text-white/60">The App</span>
</div>
<div className="flex-1 flex items-center justify-center relative py-12">

<div className="absolute w-[300px] h-[300px] bg-white/20 rounded-full blur-[80px] animate-pulse-glow"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[60%] left-[20%] w-4 h-4 rounded-full bg-white/20 animate-float-slow"></div>
<div className="absolute top-[30%] right-[20%] w-6 h-6 rounded-full bg-white/10 animate-float-fast"></div>
<div className="absolute bottom-[20%] right-[30%] w-3 h-3 rounded-full bg-white/30 animate-float-medium"></div>
</div>

<div className="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[3.5rem] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-transform duration-700 ease-out z-10 ring-1 ring-white/10 animate-enter-up delay-500">

<div className="w-full h-full bg-[#FDFBF7] relative overflow-hidden flex flex-col rounded-[3rem]">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-40 flex items-center justify-center">
<div className="w-16 h-full flex items-center justify-between px-1">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-800/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/0"></div>
</div>
</div>

<div className="flex-1 relative">

<img alt="Orange Texture" className="w-full h-[60%] object-cover" src="https://images.unsplash.com/photo-1547514701-42782101795e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
<div className="absolute top-12 left-6 right-6 flex justify-between items-center text-white z-30">
<iconify-icon className="hover:rotate-180 transition-transform duration-500" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-widest uppercase text-shadow-sm">Orangery</span>
<iconify-icon icon="solar:bag-3-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 w-full h-[45%] bg-white rounded-t-[2.5rem] p-6 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.05)] animate-enter-up delay-700">
<div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
<h3 className="text-2xl text-citrus-dark mb-1 font-serif">Valencia Gold</h3>
<div className="flex items-center gap-1 mb-4">
<iconify-icon className="text-[#FF5500]" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-[#FF5500]" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-[#FF5500]" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-[#FF5500]" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-[#FF5500]" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-xs text-gray-400 ml-1 font-sans">(1.2k)</span>
</div>
<div className="flex justify-between items-center mt-auto">
<div>
<span className="text-xs text-gray-400 uppercase tracking-wider block">Price</span>
<span className="text-xl font-semibold text-citrus-dark">$24.00</span>
</div>
<button className="bg-[#FF5500] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-citrus-dark transition-colors hover:scale-110 active:scale-90">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-enter-up delay-500 relative p-8 flex flex-col justify-between h-full bg-white/10 backdrop-blur-sm">
<div className="flex items-center justify-between mb-12">
<span className="text-xs font-serif italic text-white/80">No. 03</span>
<span className="text-xs font-semibold uppercase tracking-widest text-white/60">Manifesto</span>
</div>
<div className="flex-1 flex flex-col justify-center pr-4">
<h2 className="text-6xl md:text-7xl font-serif tracking-tight leading-[0.9] mb-8 text-white">
<span className="text-citrus-light font-serif">Sun</span> Kissed<br/>
                        Winter<br/>
<span className="text-white/70 italic font-serif">Sweetness</span>
</h2>
<p className="text-lg text-white/90 leading-relaxed font-body max-w-sm">
                        Grown in the volcanic soils of Sicily, our blood oranges are harvested at the peak of winter to ensure maximum antioxidant content and a flavor that defies nature.
                    </p>
<div className="mt-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md animate-float-slow hover:bg-white/20 transition-colors cursor-pointer">
<iconify-icon className="text-white" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md animate-float-medium hover:bg-white/20 transition-colors cursor-pointer">
<iconify-icon className="text-white" icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md animate-float-fast hover:bg-white/20 transition-colors cursor-pointer">
<iconify-icon className="text-white" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
</div>

<div className="mt-auto pt-12">
<form className="flex w-full border-b border-white/30 pb-2 group focus-within:border-white transition-colors">
<input className="bg-transparent w-full outline-none text-white placeholder-white/60 font-serif italic text-lg" placeholder="Join the grove list" type="email"/>
<button className="text-white hover:text-citrus-dark transition-colors group-focus-within:translate-x-1 duration-300" type="button">
<iconify-icon icon="solar:plain-3-linear" width="24"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>

<div className="animate-enter-up delay-700 w-full bg-[#2C1810] overflow-hidden py-5 relative z-30 border-t-4 border-white/10">
<div className="whitespace-nowrap flex animate-marquee items-center">
<div className="flex items-center gap-8 px-4">
<span className="text-8xl md:text-9xl text-[#FF5500] tracking-tighter opacity-10 font-serif">Freshly Squeezed</span>
<iconify-icon className="text-[#FF5500] text-6xl opacity-50" icon="solar:star-bold"></iconify-icon>
</div>
<div className="flex items-center gap-8 px-4">
<span className="text-8xl md:text-9xl text-[#FF5500] tracking-tighter opacity-10 font-serif">Freshly Squeezed</span>
<iconify-icon className="text-[#FF5500] text-6xl opacity-50" icon="solar:star-bold"></iconify-icon>
</div>
<div className="flex items-center gap-8 px-4">
<span className="text-8xl md:text-9xl text-[#FF5500] tracking-tighter opacity-10 font-serif">Freshly Squeezed</span>
<iconify-icon className="text-[#FF5500] text-6xl opacity-50" icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="absolute -top-12 -right-12 text-[#FF5500] opacity-10 rotate-12 animate-float-slow">
<iconify-icon icon="solar:sun-2-bold" width="200"></iconify-icon>
</div>
</div>
</main>

    </>
  );
}
