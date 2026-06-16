import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
geist: ['Inter', 'sans-serif'], // Mapping geist to Inter for consistency with request
},
extend: {
colors: {
slate: {
850: '#151e2e',
950: '#020617',
},
blue: {
600: '#2563eb',
700: '#1d4ed8',
}
},
animation: {
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



/* Sequence animation on scroll when visible */
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
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
// Flashlight Logic
document.addEventListener('mousemove', e => {
const cards = document.getElementsByClassName('flashlight');
for (const card of cards) {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.setProperty('--mouse-x', `${x}px`);
card.style.setProperty('--mouse-y', `${y}px`);
}
});
});
})();



    lucide.createIcons();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 opacity-90 bg-cover bg-center mix-blend-luminosity brightness-75" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/932f9f82-c448-471c-b979-4a37ec799374_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed z-50 w-full border-b top-0 bg-slate-950/10 border-white/5 [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll" style={{-FxFilter: 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex cursor-pointer group items-center gap-2">
<span className="iconify text-blue-500 w-[28px] h-[28px] group-hover:rotate-12 transition-transform duration-300" data-icon="solar:layers-minimalistic-bold-duotone"></span>
<span className="text-xl font-thin tracking-tight font-geist text-white">Improve My Home</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="transition-colors hover:text-white" href="#">Home</a>
<div className="flex items-center gap-1 transition-colors cursor-pointer hover:text-white group/nav">
                Services <span className="iconify opacity-50 w-4 h-4 group-hover/nav:rotate-180 transition-transform" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</div>
<a className="transition-colors hover:text-white" href="#">Portfolio</a>
<a className="transition-colors hover:text-white" href="#">Showroom</a>
<div className="flex items-center gap-1 transition-colors cursor-pointer hover:text-white group/nav">
                Blog <span className="iconify opacity-50 w-4 h-4 group-hover/nav:rotate-180 transition-transform" data-icon="solar:alt-arrow-down-bold-duotone"></span>
</div>
<a className="transition-colors hover:text-white" href="#">Contact</a>
</div>
<button className="hidden md:flex items-center gap-2 border px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-lg font-geist bg-slate-800 hover:bg-slate-700 border-white/10 text-white shadow-black/20 group">
<span className="iconify w-4 h-4 text-blue-400 group-hover:text-white transition-colors" data-icon="solar:phone-calling-bold-duotone"></span>
            (415) 920-3300
        </button>
<button className="md:hidden text-slate-300">
<span className="iconify w-7 h-7" data-icon="solar:hamburger-menu-bold-duotone"></span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden pt-20 relative justify-between">
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-20 pb-20">

<div className="lg:col-span-6 flex flex-col items-start gap-8">
<div className="flex items-center gap-3 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="h-px w-8 bg-cyan-500"></div>
<span className="text-xs font-semibold tracking-widest uppercase font-geist text-cyan-400">California's Premier Renovation</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-geist font-light tracking-tighter text-white [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                Bring Your Vision 
                <span className="font-geist font-light tracking-tighter text-slate-400">To Life With</span> 
                Precision Craft.
            </h1>
<p className="leading-relaxed text-lg font-geist max-w-lg text-slate-400 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
                Whether you're refreshing a master suite or transforming your entire home, we deliver precision, style, and seamless installation across the Bay Area.
            </p>
<div className="pt-2 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<button className="button group" type="button">
<span className="inner font-geist flex items-center gap-2">
                        START TRANSFORMATION
                        <span className="iconify w-5 h-5 group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-bold-duotone"></span>
</span>
</button>
</div>
</div>

<div className="lg:col-span-6 relative h-[500px] lg:h-[600px] w-full flex items-center justify-center [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="swatch-container group flex w-full h-full relative perspective-[1000px] items-center justify-center">

<div className="absolute w-48 h-80 sm:w-56 sm:h-96 rounded-lg origin-bottom-left transform border overflow-hidden z-10 shadow-[-5px_5px_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] bg-gray-300 border-white/20">
<img alt="Concrete" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&amp;q=80"/>
</div>

<div className="absolute w-48 h-80 sm:w-56 sm:h-96 rounded-lg origin-bottom-left transform border overflow-hidden z-20 shadow-[-5px_5px_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] bg-amber-700 border-white/20">
<img alt="Oak" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&amp;q=80"/>
</div>

<div className="absolute w-48 h-80 sm:w-56 sm:h-96 rounded-lg origin-bottom-left transform border overflow-hidden z-30 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] bg-slate-200 border-white/20 swatch-card">
<img alt="Marble" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&amp;q=80"/>
</div>

<div className="absolute w-48 h-80 sm:w-56 sm:h-96 rounded-lg origin-bottom-left transform border overflow-hidden z-20 shadow-[-5px_5px_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] bg-teal-600 border-white/20">
<img alt="Tile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=800&amp;q=80"/>
</div>

<div className="absolute w-48 h-80 sm:w-56 sm:h-96 bg-amber-500 rounded-lg origin-bottom-left transform border overflow-hidden z-10 shadow-[-5px_5px_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] border-white/20">
<img alt="Fabric" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="relative z-20 w-full border-t py-8 overflow-hidden bg-slate-900 border-slate-800 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex animate-marquee whitespace-nowrap min-w-full items-center gap-16">

<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:architects"></span> ARCHITECTS
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:houzz"></span> HOUZZ PRO
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:autodesk"></span> AUTODESK
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="solar:paint-roller-bold-duotone"></span> PRIME COAT
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:dribbble"></span> URBAN FINISH
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="solar:buildings-bold-duotone"></span> ELITE ESTATES
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:codesandbox"></span> STUDIO
            </div>

<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:architects"></span> ARCHITECTS
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:houzz"></span> HOUZZ PRO
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:autodesk"></span> AUTODESK
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="solar:paint-roller-bold-duotone"></span> PRIME COAT
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:dribbble"></span> URBAN FINISH
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="solar:buildings-bold-duotone"></span> ELITE ESTATES
            </div>
<div className="flex items-center gap-3 text-slate-500 font-semibold text-sm font-geist">
<span className="iconify text-3xl" data-icon="simple-icons:codesandbox"></span> STUDIO
            </div>
</div>
</div>
</main>

<section className="lg:py-32 overflow-hidden font-geist w-full border-t pt-24 pb-24 relative bg-slate-900 border-white/5">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none bg-cyan-600/10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

<div className="relative group order-2 lg:order-1 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute -inset-4 bg-gradient-to-tr to-transparent rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 from-cyan-600/20"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
<img alt="Specialist" className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105 saturate-[0.9] group-hover:saturate-100" src="https://images.unsplash.com/photo-1758524942860-c314c999c80c?w=1600&amp;q=80"/>
</div>
<div className="absolute bottom-6 left-6 right-6 sm:right-auto rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] flex items-center gap-5 border border-cyan-500/50 backdrop-blur-sm z-20 bg-cyan-600">
<div className="rounded-full p-2.5 shadow-lg shrink-0 bg-white text-blue-600">
<span className="iconify w-6 h-6" data-icon="logos:google-icon"></span>
</div>
<div>
<div className="flex items-center gap-1 mb-0.5 text-white">
<span className="font-bold text-lg leading-none">5.0</span>
<div className="flex text-yellow-300">
<span className="iconify w-4 h-4" data-icon="solar:star-bold"></span>
<span className="iconify w-4 h-4" data-icon="solar:star-bold"></span>
<span className="iconify w-4 h-4" data-icon="solar:star-bold"></span>
<span className="iconify w-4 h-4" data-icon="solar:star-bold"></span>
<span className="iconify w-4 h-4" data-icon="solar:star-bold"></span>
</div>
</div>
<div className="text-xs font-medium tracking-wide text-cyan-100">Rated Best Over 15.7k Reviews</div>
</div>
</div>
</div>

<div className="flex flex-col items-start order-1 lg:order-2">
<div className="flex items-center gap-3 mb-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="h-px w-8 bg-cyan-500"></div>
<span className="text-cyan-500 font-semibold tracking-widest text-xs uppercase">About Us</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-white [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
                Crafting Beautiful Spaces, 
                <span className="text-slate-400">One Room at a Time</span>
</h2>
<p className="text-lg leading-relaxed mb-8 max-w-lg text-slate-400 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
                With a keen eye for design and unmatched attention to detail, we help bring your vision to life through expertly executed renovations that elevate any space.
            </p>
<button className="group px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)] flex items-center gap-2 mb-10 bg-cyan-600 hover:bg-cyan-700 text-white [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
                See Our Work
                <span className="iconify w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-icon="solar:arrow-right-up-bold-duotone"></span>
</button>

<div className="flashlight w-full backdrop-blur-md rounded-2xl p-6 sm:p-8 relative group [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="hidden sm:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent to-transparent via-white/10"></div>
<div className="grid sm:grid-cols-2 gap-8 relative z-10">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-1 text-cyan-400">
<span className="iconify w-6 h-6" data-icon="solar:ruler-pen-bold-duotone"></span>
</div>
<h3 className="font-semibold text-lg tracking-tight text-white">The Design Experts</h3>
<p className="text-sm leading-relaxed text-slate-400">With an eye for design attention to detail, we make sure every project reflects your unique style.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-1 text-cyan-400">
<span className="iconify w-6 h-6" data-icon="solar:hammer-bold-duotone"></span>
</div>
<h3 className="font-semibold text-lg tracking-tight text-white">Passionate Builders</h3>
<p className="text-sm leading-relaxed text-slate-400">From trendy updates to timeless designs, we bring the perfect renovation to life with precision.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden font-geist w-full border-t pt-24 pb-24 relative bg-slate-950 border-white/5">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none bg-cyan-900/10"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-cyan-500"></div>
<span className="text-cyan-500 font-medium tracking-widest text-xs uppercase">Selected Works</span>
</div>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] text-white">
                    Curated Spaces, <span className="text-slate-500">Elevated Living.</span>
</h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 text-white hover:text-cyan-400" href="#">
                View Full Portfolio
                <div className="group-hover:bg-cyan-600/20 border group-hover:border-cyan-500/30 p-2 rounded-full transition-all duration-300 bg-white/5 border-white/10">
<span className="iconify w-4 h-4" data-icon="solar:arrow-right-bold-duotone"></span>
</div>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

<div className="lg:col-span-7 flashlight group relative h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-2xl [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<img alt="Modern Living Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 from-slate-950 via-slate-950/40"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
<div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="px-3 py-1 rounded-full backdrop-blur-md border text-[11px] font-semibold uppercase tracking-wider bg-white/10 border-white/10 text-white">Full Remodel</span>
<span className="px-3 py-1 rounded-full backdrop-blur-md border text-[11px] font-semibold uppercase tracking-wider bg-white/10 border-white/10 text-white">2024</span>
</div>
<h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2 text-white">The Atherton Residence</h3>
<p className="text-sm md:text-base max-w-md line-clamp-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity text-slate-300">
                        A complete structural reimagining of a mid-century classic, opening spaces to light and integrating smart home technology.
                    </p>
<div className="flex items-center gap-2 text-sm font-medium group/link cursor-pointer text-cyan-400">
                        View Project 
                        <span className="iconify w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" data-icon="solar:arrow-right-up-bold-duotone"></span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 h-full">
<div className="flashlight group relative flex-1 min-h-[250px] rounded-3xl overflow-hidden shadow-xl [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<img alt="Kitchen Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-950/90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-semibold uppercase tracking-widest mb-1 block text-cyan-400">Kitchen</span>
<h3 className="text-xl font-medium tracking-tight text-white">Mission District Minimalist</h3>
</div>
<div className="w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/10 border-white/10 text-white">
<span className="iconify w-5 h-5" data-icon="solar:add-circle-bold-duotone"></span>
</div>
</div>
</div>
</div>
<div className="flashlight group relative flex-1 min-h-[250px] rounded-3xl overflow-hidden shadow-xl [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<img alt="Interior Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-950/90"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
<div className="flex justify-between items-end">
<div>
<span className="text-xs font-semibold uppercase tracking-widest mb-1 block text-cyan-400">Interiors</span>
<h3 className="text-xl font-medium tracking-tight text-white">Presidio Heights Suite</h3>
</div>
<div className="w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/10 border-white/10 text-white">
<span className="iconify w-5 h-5" data-icon="solar:add-circle-bold-duotone"></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-10 border-white/5 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<div className="flex flex-col gap-1">
<span className="text-3xl font-light tracking-tight text-white">150+</span>
<span className="text-sm text-slate-500 font-medium">Projects Completed</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-light tracking-tight text-white">15 <span className="text-lg text-slate-600">yrs</span></span>
<span className="text-sm text-slate-500 font-medium">Industry Experience</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-light tracking-tight text-white">24 <span className="text-lg text-slate-600">mo</span></span>
<span className="text-sm text-slate-500 font-medium">Warranty on Build</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-light tracking-tight text-white">100%</span>
<span className="text-sm text-slate-500 font-medium">Client Satisfaction</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 border-t relative overflow-hidden font-geist bg-slate-950 border-white/5">
<div className="absolute top-0 left-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-green-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-cyan-500"></div>
<span className="text-cyan-500 font-medium tracking-widest text-xs uppercase">Latest Blog</span>
</div>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] text-white">
                    Everything You Need to Know <span className="text-slate-500">About Wallpapering.</span>
</h2>
</div>
<a className="group inline-flex items-center gap-2 hover:bg-cyan-500 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.6)] bg-cyan-600 text-white" href="#">
                See All Articles
                <span className="iconify w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-icon="solar:arrow-right-bold-duotone"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<article className="flashlight group relative h-[420px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute inset-0 overflow-hidden">
<img alt="Wallpaper Trends" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]" src="https://images.unsplash.com/photo-1472553384749-8596bacb90c5?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-90 from-slate-950 via-slate-950/80"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full z-10">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
<span className="iconify w-3.5 h-3.5" data-icon="solar:calendar-bold-duotone"></span>
                                16 Aug 2025
                            </div>
<span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider text-cyan-400">Trends</span>
</div>
<h3 className="text-xl font-medium leading-snug mb-6 group-hover:text-cyan-100 transition-colors text-white">Texture, Tone &amp; Trends: What's Hot in Wallpaper Design</h3>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors text-white/80">
                            Read Article
                            <span className="iconify w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-icon="solar:arrow-right-up-bold-duotone"></span>
</div>
</div>
</div>
</article>

<article className="flashlight group relative h-[420px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="absolute inset-0 overflow-hidden">
<img alt="Dining Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]" src="https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-90 from-slate-950 via-slate-950/80"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full z-10">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
<span className="iconify w-3.5 h-3.5" data-icon="solar:calendar-bold-duotone"></span>
                                23 Aug 2025
                            </div>
<span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider text-cyan-400">Showcase</span>
</div>
<h3 className="text-xl font-medium leading-snug mb-6 group-hover:text-cyan-100 transition-colors text-white">Client Spotlight: Elegant Dining Room Transformation</h3>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors text-white/80">
                            Read Article
                            <span className="iconify w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-icon="solar:arrow-right-up-bold-duotone"></span>
</div>
</div>
</div>
</article>

<article className="flashlight group relative h-[420px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="absolute inset-0 overflow-hidden">
<img alt="Pro Tips" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-90 from-slate-950 via-slate-950/80"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full z-10">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
<span className="iconify w-3.5 h-3.5" data-icon="solar:calendar-bold-duotone"></span>
                                28 Aug 2025
                            </div>
<span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider text-cyan-400">Expertise</span>
</div>
<h3 className="text-xl font-medium leading-snug mb-6 group-hover:text-cyan-100 transition-colors text-white">What It's Really Like to Work with A Wallpaper Pro</h3>
<div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors text-white/80">
                            Read Article
                            <span className="iconify w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-icon="solar:arrow-right-up-bold-duotone"></span>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<footer className="z-20 font-geist pt-24 pb-12 relative bg-white [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r to-green-500 from-cyan-600 via-cyan-400"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-4 flex flex-col gap-6 pr-0 lg:pr-8">
<div className="flex gap-2 group cursor-default items-center">
<span className="iconify text-blue-500 w-[30px] h-[30px] group-hover:rotate-12 transition-transform duration-300" data-icon="solar:layers-minimalistic-bold-duotone"></span>
<span className="text-xl font-thin tracking-tight font-geist text-slate-900">Improve My Home</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    At LuxeBuild, we're more than just renovations. We are passionate professionals committed to quality, reliability, and beautiful results.
                </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-slate-500 transition-all duration-300 shadow-sm hover:shadow-lg bg-slate-50 border-slate-100 hover:bg-cyan-600 hover:text-white hover:border-cyan-600" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:facebook"></span>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-slate-500 transition-all duration-300 shadow-sm hover:shadow-lg bg-slate-50 border-slate-100 hover:bg-cyan-600 hover:text-white hover:border-cyan-600" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:linkedin"></span>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-slate-500 transition-all duration-300 shadow-sm hover:shadow-lg bg-slate-50 border-slate-100 hover:bg-cyan-600 hover:text-white hover:border-cyan-600" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:youtube"></span>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center text-slate-500 transition-all duration-300 shadow-sm hover:shadow-lg bg-slate-50 border-slate-100 hover:bg-cyan-600 hover:text-white hover:border-cyan-600" href="#">
<span className="iconify w-4 h-4" data-icon="simple-icons:x"></span>
</a>
</div>
</div>
<div className="lg:col-span-2">
<h4 className="font-bold tracking-tight text-sm uppercase mb-6 text-slate-900">Quick Links</h4>
<ul className="flex flex-col gap-3">
<li><a className="text-slate-500 text-sm font-medium transition-colors duration-200 block hover:text-cyan-600" href="#">Home</a></li>
<li><a className="text-slate-500 text-sm font-medium transition-colors duration-200 block hover:text-cyan-600" href="#">About Us</a></li>
<li><a className="text-slate-500 text-sm font-medium transition-colors duration-200 block hover:text-cyan-600" href="#">Services</a></li>
<li><a className="text-slate-500 text-sm font-medium transition-colors duration-200 block hover:text-cyan-600" href="#">Blog</a></li>
<li><a className="text-slate-500 text-sm font-medium transition-colors duration-200 block hover:text-cyan-600" href="#">Contact</a></li>
</ul>
</div>
<div className="lg:col-span-3">
<h4 className="font-bold tracking-tight text-sm uppercase mb-6 text-slate-900">Business Hours</h4>
<div className="rounded-2xl p-5 border shadow-sm bg-slate-50 border-slate-100">
<ul className="flex flex-col gap-3">
<li className="flex justify-between items-center text-sm">
<span className="font-semibold text-slate-900">Mon – Fri:</span>
<span className="text-slate-500">8 AM – 6 PM</span>
</li>
<li className="flex justify-between items-center text-sm border-t pt-3 border-slate-200">
<span className="font-semibold text-slate-900">Saturday:</span>
<span className="text-slate-500">9 AM – 2 PM</span>
</li>
<li className="flex justify-between items-center text-sm border-t pt-3 border-slate-200">
<span className="font-semibold text-slate-900">Sunday:</span>
<span className="text-amber-500 px-2 py-0.5 rounded text-xs font-medium bg-amber-50">Closed</span>
</li>
</ul>
</div>
</div>
<div className="lg:col-span-3">
<h4 className="font-bold tracking-tight text-sm uppercase mb-6 text-slate-900">Contact Us</h4>
<ul className="flex flex-col gap-5">
<li className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 bg-cyan-50 text-cyan-600">
<span className="iconify w-4 h-4" data-icon="solar:phone-calling-bold-duotone"></span>
</div>
<div>
<span className="block text-xs font-semibold uppercase tracking-wide mb-0.5 text-slate-400">Phone</span>
<span className="text-sm font-medium transition-colors text-slate-700 hover:text-cyan-600">+1 (415) 920-3300</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 bg-cyan-50 text-cyan-600">
<span className="iconify w-4 h-4" data-icon="solar:map-point-bold-duotone"></span>
</div>
<div>
<span className="block text-xs font-semibold uppercase tracking-wide mb-0.5 text-slate-400">Location</span>
<span className="text-sm font-medium transition-colors text-slate-700 hover:text-cyan-600">421 Allen St, San Francisco 94103</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 bg-cyan-50 text-cyan-600">
<span className="iconify w-4 h-4" data-icon="solar:letter-bold-duotone"></span>
</div>
<div>
<span className="block text-xs font-semibold uppercase tracking-wide mb-0.5 text-slate-400">Email</span>
<span className="text-sm font-medium transition-colors text-slate-700 hover:text-cyan-600">hello@luxebuild.com</span>
</div>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-100">
<div className="text-slate-500 text-sm font-medium">© 2025 LuxeBuild Inc. All rights reserved.</div>
<div className="flex items-center gap-6">
<a className="text-slate-500 text-sm font-medium transition-colors hover:text-cyan-600" href="#">Terms &amp; Conditions</a>
<a className="text-slate-500 text-sm font-medium transition-colors hover:text-cyan-600" href="#">Privacy Policy</a>
<a className="text-slate-500 text-sm font-medium transition-colors hover:text-cyan-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>
<style>
    .gradient-blur {
        position: fixed;
        z-index: 5;
        inset: auto 0 0 0;
        height: 100px; /* Reduced height to not block interactions */
        pointer-events: none;
    }
    .gradient-blur>div, .gradient-blur::before, .gradient-blur::after {
        position: absolute;
        inset: 0;
    }
    .gradient-blur::before {
        content: "";
        z-index: 1;
        backdrop-filter: blur(0.5px);
        mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
    }
    .gradient-blur>div:nth-of-type(1) { z-index: 2; backdrop-filter: blur(1px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%); }
    .gradient-blur>div:nth-of-type(2) { z-index: 3; backdrop-filter: blur(2px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%); }
    .gradient-blur>div:nth-of-type(3) { z-index: 4; backdrop-filter: blur(4px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%); }
    .gradient-blur>div:nth-of-type(4) { z-index: 5; backdrop-filter: blur(8px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%); }
    .gradient-blur>div:nth-of-type(5) { z-index: 6; backdrop-filter: blur(16px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%); }
    .gradient-blur>div:nth-of-type(6) { z-index: 7; backdrop-filter: blur(32px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%); }
    .gradient-blur::after { content: ""; z-index: 8; backdrop-filter: blur(64px); mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%); }
</style>


    </>
  );
}
