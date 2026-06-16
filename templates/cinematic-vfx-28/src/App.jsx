import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#050505',
maroon: '#50000A',
red: '#B91C1C',
accent: '#FF0033'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'spin-slow': 'spin 8s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
},
plugins: [
function({ addUtilities }) {
const rotateUtilities = {};
const values = [0, 180];
values.forEach(v => {
rotateUtilities[`.rotate-y-${v}`] = { transform: `rotateY(${v}deg)` };
});
addUtilities({
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' },
'.backface-hidden': { backfaceVisibility: 'hidden' },
...rotateUtilities,
'.text-shadow-glow': { textShadow: '0 0 10px rgba(220, 38, 38, 0.5)' },
'.clip-path-slant': { clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }
});
}
]
};



        // --- Interactions Script ---
        
        // 1. Loader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            // Minimum load time of 1.5s for effect
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Trigger hero animations here if needed
                }, 700);
            }, 1500);
        });

        // 2. Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isOpen = !mobileMenu.classList.contains('translate-x-full');
            if (isOpen) {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            }
        }

        menuToggle.addEventListener('click', toggleMenu);
        menuClose.addEventListener('click', toggleMenu);
        
        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // 3. Navbar Blur on Scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700" id="loader" style={{opacity: '0', display: 'none'}}>
<div className="glitch-wrapper mb-8">
<h1 className="glitch-text text-5xl md:text-6xl font-black tracking-tighter text-white uppercase" data-text="STREAX">STREAX</h1>
</div>
<div className="w-64 h-1 bg-neutral-900 rounded-full overflow-hidden relative">
<div className="scan-line absolute top-0 left-0"></div>
</div>
<div className="mt-4 font-mono text-[10px] text-red-500 tracking-widest animate-pulse">SYSTEM INITIALIZING...</div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-brand-maroon/20 border border-red-900/50 rounded flex items-center justify-center group-hover:border-red-500 transition-colors">
<svg aria-hidden="true" className="iconify text-red-600 iconify--lucide" data-icon="lucide:hexagon" data-width="16" height="16" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="uppercase group-hover:text-red-500 transition-colors text-sm font-bold text-white tracking-tight">Hai Pham Studios</span>
</a>

<div className="hidden md:flex text-[11px] uppercase font-medium text-neutral-400 tracking-widest space-x-8 items-center">
<a className="hover:text-white hover:text-shadow-glow transition-all" href="#nexus">Home</a>
<a className="hover:text-white hover:text-shadow-glow transition-all" href="#about">Plan</a>
<a className="hover:text-white hover:text-shadow-glow transition-all" href="#disciplines">about</a>
<a className="hover:text-white hover:text-shadow-glow transition-all" href="#archive">sponsor</a>
<a className="hover:text-white hover:text-shadow-glow transition-all" href="#team">character</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-sm text-[11px] font-bold uppercase hover:bg-neutral-200 transition-colors tracking-tight clip-path-slant" href="#transmission">
<span className="">Start Join</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white hover:text-red-500 transition-colors" id="menu-toggle">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-black/95 z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center gap-8 md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-neutral-400 hover:text-white" id="menu-close">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="mobile-link text-2xl font-bold text-white uppercase tracking-tight" href="#nexus">Nexus</a>
<a className="mobile-link text-2xl font-bold text-white uppercase tracking-tight" href="#about">Manifest</a>
<a className="mobile-link text-2xl font-bold text-white uppercase tracking-tight" href="#disciplines">Disciplines</a>
<a className="mobile-link text-2xl font-bold text-white uppercase tracking-tight" href="#archive">Archive</a>
<a className="mobile-link text-2xl font-bold text-white uppercase tracking-tight" href="#team">Unit</a>
<a className="mobile-link text-lg font-mono text-red-500 uppercase tracking-widest border border-red-900/50 px-6 py-3 rounded hover:bg-red-900/20" href="#transmission">Initiate</a>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center" id="nexus">

<div className="absolute inset-0 z-0 opacity-40">
<div className="z-10 bg-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-[140%] -mt-[20%] object-cover pointer-events-none scale-150" frameborder="0" src="https://www.youtube.com/embed/hhlgphVf-1g&amp;t=5s?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=Z7aMCp9RCbk&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;start=15" title="Hero Background">
</iframe>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none"></div>

<div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-[-5vh]">
<div className="flex items-center justify-center gap-3 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards_1s]">
<div className="h-[1px] w-12 bg-red-600"></div>
<span className="uppercase text-xs text-red-500 tracking-[0.2em] font-mono">T1 team số 1 thế giới</span>
<div className="h-[1px] w-12 bg-red-600"></div>
</div>
<h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
<span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">haipham</span>
<span className="block stroke-text text-transparent">varlorant</span>
</h1>
</div>

<div className="absolute bottom-10 left-0 w-full z-20 border-y border-white/5 bg-black/40 backdrop-blur-sm py-4">
<div className="marquee-container">
<div className="marquee-content uppercase text-lg font-bold tracking-tight">
<span className="text-white pr-8 pl-8">20 years kinh nghiệm</span>
<span className="text-red-500 px-2">•</span>
<span className="text-neutral-400 pr-8 pl-8">nycu student</span>
<span className="text-red-500 px-2">•</span>
<span className="text-white pr-8 pl-8">best yoru</span>
<span className="text-red-500 px-2">•</span>
<span className="text-neutral-400 pr-8 pl-8">leader có tầm</span>
<span className="text-red-500 px-2">•</span>
<span className="text-white pr-8 pl-8">no cheating</span>
<span className="text-red-500 px-2">•</span>
<span className="text-neutral-400 pr-8 pl-8">1 triệu + mvp</span>
<span className="text-red-500 px-2">•</span>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-neutral-900/20 pt-32 pb-32 relative" id="about">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-maroon rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 space-y-24">

<div className="glass-panel p-10 md:p-16 rounded-2xl relative z-10 border-l-4 border-l-brand-red">
<div className="flex flex-col md:flex-row gap-12 gap-x-12 gap-y-12 items-center">
<div className="flex-1">
<h2 className="uppercase flex items-center gap-2 text-xs text-red-500 tracking-widest font-mono mb-6"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Overview</h2>
<h3 className="md:text-4xl leading-tight text-3xl font-bold text-white mb-6">T1 không thiếu cúp, T1 chỉ thiếu <span className="text-red-500">BẠN</span> </h3>
<p className="leading-relaxed md:text-base text-sm text-neutral-400"><strong className="text-white">HAIPHAM STUDIOS</strong> Sứ mệnh tối thượng: Tìm kiếm những "đôi tay vàng" để hoàn thiện đội hình T1 Varlorant. Dưới sự dẫn dắt của Đội Trưởng HaiPham – người có tâm gánh team và có tầm nhìn bảng đếm số – chúng ta sẽ cùng nhau nâng cúp (trong mơ). Yêu cầu: Tay to, não to, hoặc đơn giản là biết hô "Vamos!" thật to. </p>
</div>

<div className="grid grid-cols-2 gap-4 w-full md:w-auto">
<div className="bg-black/50 p-6 rounded border border-white/5 text-center group hover:border-red-500/50 transition-colors">
<div className="group-hover:text-red-500 transition-colors text-3xl font-bold text-white">0,0027+</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Years Active</div>
</div>
<div className="bg-black/50 p-6 rounded border border-white/5 text-center group hover:border-red-500/50 transition-colors">
<div className="group-hover:text-red-500 transition-colors text-3xl font-bold text-white">1</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-widest mt-1">Global Nember</div>
</div>
<div className="bg-black/50 p-6 rounded border border-white/5 text-center col-span-2 group hover:border-red-500/50 transition-colors">
<div className="group-hover:text-red-500 transition-colors text-3xl font-bold text-white">100%</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-widest mt-1">team Success</div>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-12">
<div className="flex justify-between items-end mb-8">
<div className="">
<h3 className="uppercase text-lg font-bold text-white">Global Operations</h3>
<p className="text-xs text-neutral-500 font-mono mt-1">server_status: <span className="text-green-500">online</span></p>
</div>
</div>
<div className="relative w-full h-[300px] bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden group">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 text-neutral-600">
<svg className="w-[1016px] h-[298px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{color: 'rgb(82, 82, 82)', width: '1016px', height: '298px'}} viewbox="0 0 1000 500">
<path className="" d="M220,150 Q250,120 280,150 T340,180 T400,250 T350,350 T250,300 T220,150 M550,100 Q600,80 650,120 T700,200 T650,300 T550,250 T550,100 M800,150 Q850,130 900,160 T920,250 T850,300 T800,150"></path>
</svg>
</div>

<div className="map-dot top-[30%] left-[20%] active" title="USA"></div> 
<div className="map-dot top-[28%] left-[48%] active" title="UK"></div> 
<div className="map-dot top-[40%] left-[60%] active" title="Dubai"></div> 
<div className="map-dot top-[35%] left-[55%]" title="Turkey"></div> 

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-red-800/40 stroke-[1] fill-none">
<path className="animate-pulse" d="M200,150 Q350,100 480,140 T600,200" stroke-dasharray="5,5"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#080808] border-white/5 pt-24 pb-24" id="disciplines">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-12">
<svg aria-hidden="true" className="iconify text-red-600 iconify--lucide" data-icon="lucide:cpu" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<h2 className="uppercase text-xs font-bold text-neutral-500 tracking-widest">Introducing</h2>
</div>
<div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-2">

<div className="group relative flex-accordion flex-1 hover:flex-[2.5] bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer h-[200px] md:h-auto">
<div className="absolute inset-0 bg-gradient-to-b from-brand-maroon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
<span className="text-4xl font-black text-white/5 absolute top-6 right-6">01</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">About</h3>
</div>
<div className="group-hover:opacity-100 transition-all duration-500 delay-75 flex flex-col opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-center">
<svg aria-hidden="true" className="iconify mb-4 iconify--lucide w-[32px] h-[32px]" data-icon="lucide:clapperboard" data-icon-replaced="true" data-icon-set="lucide" data-lucide="info" data-width="32" fill="none" height="32" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(239, 68, 68)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<h3 className="uppercase text-2xl font-bold text-white tracking-tighter mb-2">Basic information</h3>
<p className="leading-relaxed text-sm text-neutral-300">Pham Viet Hoang Hai. Xin giới thiệu 'Bộ não thiên tài' của team, người sở hữu những pha call team thần sầu và tâm lý thép trong mọi tình huống Clutch.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2.5] bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer h-[200px] md:h-auto">
<div className="absolute inset-0 bg-gradient-to-b from-red-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
<span className="text-4xl font-black text-white/5 absolute top-6 right-6">02</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Luật</h3>
</div>
<div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 flex flex-col justify-center">
<svg aria-hidden="true" className="iconify mb-4 iconify--lucide w-[32px] h-[32px]" data-icon="lucide:box" data-icon-replaced="true" data-icon-set="lucide" data-lucide="biceps-flexed" data-width="32" fill="none" height="32" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(248, 113, 113)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"></path><path d="M15 14a5 5 0 0 0-7.584 2"></path><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"></path></svg>
<h3 className="uppercase text-2xl font-bold text-white tracking-tighter mb-2">discipline</h3>
<p className="leading-relaxed text-sm text-neutral-300">Đội trưởng HaiPham luôn đúng.

Nếu đội trưởng sai, xem lại điều.

Cấm toxic, cấm đổ tại lag, chỉ được phép "Vamos!" khi đồng đội feed.</p>
</div>
</div>

<div className="group relative flex-accordion flex-1 hover:flex-[2.5] bg-neutral-900 border border-white/10 overflow-hidden cursor-pointer h-[200px] md:h-auto">
<div className="absolute inset-0 bg-gradient-to-b from-red-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
<span className="text-4xl font-black text-white/5 absolute top-6 right-6">03</span>
<h3 className="text-lg font-bold text-white uppercase tracking-tighter md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:-translate-y-8 whitespace-nowrap">Dream</h3>
</div>
<div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 flex flex-col justify-center">
<svg aria-hidden="true" className="iconify mb-4 iconify--lucide w-[32px] h-[32px]" data-icon="lucide:component" data-icon-replaced="true" data-icon-set="lucide" data-lucide="cloud" data-width="32" fill="none" height="32" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(252, 165, 165)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<h3 className="uppercase text-2xl font-bold text-white tracking-tighter mb-2">Dream</h3>
<p className="leading-relaxed text-sm text-neutral-300">Vô dịch thế giới</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24" id="archive">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="block text-xs text-red-500 font-mono mb-2">/// Các nhà đầu tư lớn</span>
<h2 className="uppercase text-3xl font-bold text-white tracking-tight">Sponsor</h2>
</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 flex gap-4">
<span>Drag to explore</span>
<svg aria-hidden="true" className="iconify animate-pulse iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="w-full overflow-x-auto pb-16 px-6 scrollbar-hide snap-x snap-mandatory">
<div className="flex gap-8 w-max">

<div className="group w-[300px] h-[420px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-maroon via-black to-black opacity-90"></div>
<div className="flex flex-col cursor-pointer z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end" onclick="window.location.href='https://www.riotgames.com/vi'" role="button">
<h3 className="uppercase leading-none text-3xl font-black text-white mb-2">RIOT</h3>
<p className="text-[10px] text-red-400 font-mono tracking-widest">GAME MAKER</p>
</div>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0a0a0a] border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center shadow-[0_0_30px_rgba(185,28,28,0.2)]">
<span className="text-xs font-mono text-red-500 mb-4 tracking-widest">[ TOP 1 ]</span>
<h3 className="text-xl font-bold text-white uppercase mb-4">RIOT</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">Là một công ty chuyên về phát triển và phát hành trò chơi điện tử đa quốc gia của Hoa Kỳ được thành lập vào tháng 9 năm
                            2006, đã đầu tư vào team hơn 50 triệu USD.</p>
<span className="inline-flex mx-auto items-center gap-2 text-[10px] text-white uppercase tracking-widest border-b border-white/20 pb-1">View Riot Games</span>
</div>
</div>
</div>

<div className="group w-[300px] h-[420px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1a0505] via-black to-neutral-900 opacity-90"></div>
<div className="flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-3xl font-black text-white uppercase leading-none mb-2">APPLE</h3>
<p className="text-[10px] text-red-400 font-mono tracking-widest">IPHONE SUPPLIER</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0a0a0a] border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center shadow-[0_0_30px_rgba(185,28,28,0.2)]">
<span className="text-xs font-mono text-red-500 mb-4 tracking-widest">[ TOP 2 ]</span>
<h3 className="text-xl font-bold text-white uppercase mb-4">APPLE</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">Là một tập đoàn công nghệ đa quốc gia của Hoa Kỳ chuyên về thiết kế và phát triển các thiết bị điện tử tiêu dùng, phần
                            mềm máy tính cùng dịch vụ trực tuyến, đầu tư thiết bị cho team.</p>
<span className="inline-flex mx-auto items-center gap-2 text-[10px] text-white uppercase tracking-widest border-b border-white/20 pb-1">Apple</span>
</div>
</div>
</div>

<div className="group w-[300px] h-[420px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/40 via-black to-black opacity-90"></div>
<div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
<h3 className="text-3xl font-black text-white uppercase leading-none mb-2">SONY</h3>
<p className="text-[10px] text-yellow-500 font-mono tracking-widest">HEADPHONES SUPPLIER</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0a0a0a] border border-yellow-600/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center shadow-[0_0_30px_rgba(202,138,4,0.1)]">
<span className="text-xs font-mono text-yellow-500 mb-4 tracking-widest">[ TOP 3 ]</span>
<h3 className="text-xl font-bold text-white uppercase mb-4">SONY</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">là một trong những công ty hàng đầu thế giới về điện tử, sản xuất tivi, điện thoại, máy ảnh, máy tính xách tay và đồ dân dụng khác, cung cấp tai nghe cho team.</p>
<span className="inline-flex mx-auto items-center gap-2 text-[10px] text-white uppercase tracking-widest border-b border-white/20 pb-1">View Sony</span>
</div>
</div>
</div>

<div className="group w-[300px] h-[420px] perspective-1000 cursor-pointer snap-center">
<div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
<div className="absolute w-full h-full backface-hidden bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-red-950 via-black to-black opacity-90"></div>
<div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
<h3 className="text-3xl font-black text-white uppercase leading-none mb-2">Emirates Airlines</h3>
<p className="text-[10px] text-red-400 font-mono tracking-widest">TRAVELING</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0a0a0a] border border-red-500/30 rounded-xl overflow-hidden p-8 flex flex-col justify-center text-center shadow-[0_0_30px_rgba(185,28,28,0.2)]">
<span className="text-xs font-mono text-red-500 mb-4 tracking-widest">[ TOP 4 ]</span>
<h3 className="text-xl font-bold text-white uppercase mb-4">Emirates Airlines</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">là hãng hàng không 5 sao nổi tiếng của Các Tiểu vương quốc Ả Rập Thống nhất (UAE), đưa đón team sang nước ngoài thi đấu.</p>
<span className="inline-flex mx-auto items-center gap-2 text-[10px] text-white uppercase tracking-widest border-b border-white/20 pb-1">View Emirates</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-6">
<h2 className="uppercase text-xs text-neutral-500 font-mono max-w-xl mb-8">[ TƯỚNG TỦ ]</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-1">

<div className="diagonal-wipe group cursor-pointer overflow-hidden bg-neutral-900 h-72 border-white/5 border relative">
<div className="absolute inset-0 bg-[url('https://preview.redd.it/v7ce9f0xa5e81.png?width=256&amp;format=png&amp;auto=webp&amp;s=3813219733b0ea278c0ef85f3588face949ef70b')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content group-hover:text-white">
<h3 className="uppercase z-30 text-xl font-black text-white tracking-tight relative">Yoru</h3>
<p className="text-[10px] uppercase z-30 text-red-500 tracking-widest font-mono mt-1 relative">duelist</p>
</div>
</div>

<div className="diagonal-wipe group cursor-pointer overflow-hidden bg-neutral-900 h-72 border-white/5 border relative">
<div className="absolute inset-0 bg-[url('https://mmonster.co/media/7e/88/5a/1745860923/Jett-icon-valorant.webp')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="uppercase z-30 text-xl font-black text-white tracking-tight relative">jett</h3>
<p className="text-[10px] uppercase z-30 text-red-400 tracking-widest font-mono mt-1 relative">duelist</p>
</div>
</div>

<div className="diagonal-wipe h-72 bg-neutral-900 relative group cursor-pointer overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-[url('https://static.valorantstats.xyz/agent-headshots/omen-headshot.png')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="uppercase z-30 text-xl font-black text-white tracking-tight relative">omen</h3>
<p className="text-[10px] uppercase z-30 text-red-600 tracking-widest font-mono mt-1 relative">Controller</p>
</div>
</div>

<div className="diagonal-wipe group cursor-pointer overflow-hidden bg-neutral-900 h-72 border-white/5 border relative">
<div className="absolute inset-0 bg-[url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/1368e917e5026c3a13b235a41686a90f10a9b21f-2500x2611.jpg')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="uppercase z-30 text-xl font-black text-white tracking-tight relative">phoenix</h3>
<p className="text-[10px] uppercase z-30 text-red-300 tracking-widest font-mono mt-1 relative">duelist</p>
</div>
</div>

<div className="diagonal-wipe group cursor-pointer overflow-hidden bg-neutral-900 h-72 border-white/5 border relative">
<div className="absolute inset-0 bg-[url('https://valoranttracker.org/images/agents/reyna/reyna.png')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="wipe-content pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<h3 className="uppercase z-30 text-xl font-black text-white tracking-tight relative">reyna</h3>
<p className="text-[10px] uppercase z-30 text-yellow-500 tracking-widest font-mono mt-1 relative">duelist</p>
</div>
</div>

<div className="diagonal-wipe group cursor-pointer overflow-hidden bg-neutral-900 h-72 border-white/5 border relative">
<div className="absolute inset-0 bg-[url('https://valoranttracker.org/images/agents/sova/sova.png')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 wipe-content">
<h3 className="uppercase z-30 text-xl font-black text-white tracking-tight relative">sova</h3>
<p className="text-[10px] uppercase z-30 text-orange-500 tracking-widest font-mono mt-1 relative">Initiator</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#030303] border-white/5 border-t pt-32 pb-32 relative" id="transmission">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-brand-maroon blur-[150px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-center gap-16">
<div className="text-center lg:text-left space-y-6">
<h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Ready to <span className="text-red-600">Join?</span></h2>
<p className="lg:mx-0 text-neutral-400 max-w-md mr-auto ml-auto">Hãy nhấn vào ô đỏ phía bên phải để tham gia T1 Varlorant</p>
<div className="flex flex-col lg:flex-row gap-6 pt-4 text-sm font-mono text-neutral-300">
<a className="hover:text-red-500 transition-colors flex items-center justify-center lg:justify-start gap-3 group" href="/mailto:phamviethoanghai07042021@gmail.com">phamviethoanghai07042021@gmail.com</a>
<a className="hover:text-red-500 transition-colors flex items-center justify-center lg:justify-start gap-3 group" href="#">@haiphamstudios</a>
</div>
</div>
<a className="group relative px-10 py-6 bg-brand-maroon text-white font-bold tracking-[0.2em] uppercase rounded-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(185,28,28,0.4)]" href="mailto:streaxstudios@gmail.com">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span className="flex items-center gap-4 z-10 cursor-pointer relative" onclick="window.location.href='https://playvalorant.com/zh-tw/?utm_campaign=188_904_5784_TWM_VALORANT&amp;wpsrc=Google+AdWords&amp;wpscid=147699126419&amp;wpsnetn=g&amp;wpkwn=valorant&amp;utm_source=google&amp;wpkmatch=e&amp;wpcrid=652564571407&amp;utm_medium=keyword&amp;wpcid=19895980220&amp;wpkwid=kwd-928551313914&amp;gad_source=1&amp;gad_campaignid=19895980220&amp;gbraid=0AAAAApXCJMFdLzJlZ48sPgaqMbCR0jkET&amp;gclid=Cj0KCQiAgbnKBhDgARIsAGCDdlfB7kuko1Yd9Uij0ZfQiNGFUhfBiWErsIEVf1NDmTirtnPjXWUbAgsaApK2EALw_wcB'" role="button">Join Team <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</a>
</div>
<div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
<span className="">© 2025 Hai Pham Studios. All Systems Operational.</span>
<span className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Protocol</a>
<a className="hover:text-white transition-colors" href="#">Terms of Svc</a>
</span>
</div>
</div>
</section>


    </>
  );
}
