import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 w-full z-50 p-6">
<div className="container mx-auto flex justify-between items-center">
<a className="text-xl font-semibold tracking-tight uppercase flex items-center gap-2" href="#">
<i className="w-6 h-6 text-red-600 stroke-[1.5]" data-lucide="dumbbell"></i>
                Titan
            </a>
<button aria-label="Menu" className="md:hidden text-neutral-300 hover:text-white transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#programs">Programs</a>
<a className="hover:text-white transition-colors" href="#about">The Facility</a>
<a className="hover:text-white transition-colors" href="#contact">Join</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden border-b border-neutral-900">

<div className="absolute inset-0 z-0 bg-neutral-950">
<img alt="Athlete training" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
</div>

<div className="absolute top-1/4 right-10 md:right-32 opacity-30 z-0 hidden lg:block pointer-events-none">
<svg className="text-red-600 fill-current" height="240" viewbox="0 0 100 100" width="240">
<pattern height="8" id="stripes" patterntransform="rotate(45 0 0)" patternunits="userSpaceOnUse" width="8">
<line stroke="currentColor" strokeWidth="3" x1="0" x2="0" y1="0" y2="8"></line>
</pattern>
<rect fill="url(#stripes)" height="100" width="100"></rect>
</svg>
</div>

<div className="absolute top-32 -left-10 pointer-events-none opacity-5 select-none overflow-hidden z-0 w-full flex justify-center">
<h2 className="text-[12vw] leading-none font-extrabold uppercase tracking-tighter text-white whitespace-nowrap">
                Metamorphosis
            </h2>
</div>

<div className="container mx-auto px-6 relative z-10">
<div className="max-w-2xl">
<h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold uppercase leading-[0.85] tracking-tighter mb-6 text-neutral-100 flex flex-col">
<span>Built</span>
<span className="text-red-600 mt-2">Different.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg font-normal leading-relaxed border-l-2 border-red-600 pl-4">
                    Elite training environment for those who refuse average. Break your limits and forge an entirely new reality.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-10 uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-3 group text-center" href="#join">
                        Join Now
                        <i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="border border-neutral-600 hover:border-neutral-400 text-neutral-200 font-semibold py-4 px-10 uppercase tracking-wider text-sm transition-colors text-center bg-neutral-900/50 backdrop-blur-sm" href="#programs">
                        View Programs
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-neutral-950 relative border-b border-neutral-900" id="programs">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-16 flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white inline-block relative pb-4">
                    Programs
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600"></span>
</h2>
<p className="text-neutral-500 mt-4 text-base max-w-md font-normal">Choose your path. Our specialized tracks are designed for maximum adaptation and results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<a className="group relative block aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden border border-neutral-800 bg-neutral-900 transition-all hover:border-red-600/50" href="#">
<img alt="Strength Training" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-10 h-10 mb-4 border border-red-600/50 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
<i className="w-5 h-5 text-red-500 stroke-[1.5]" data-lucide="activity"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors uppercase">Strength &amp; Hypertrophy</h3>
<p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
                            Focus on heavy compound movements to build raw power and massive muscle mass. Scientifically backed protocols.
                        </p>
</div>
</a>

<a className="group relative block aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden border border-neutral-800 bg-neutral-900 transition-all hover:border-red-600/50" href="#">
<img alt="Athletic Conditioning" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-10 h-10 mb-4 border border-red-600/50 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
<i className="w-5 h-5 text-red-500 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors uppercase">Athletic Conditioning</h3>
<p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
                            Improve your cardiovascular endurance, agility, and explosive power. Train like a high-performance athlete.
                        </p>
</div>
</a>

<a className="group relative block aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden border border-neutral-800 bg-neutral-900 transition-all hover:border-red-600/50" href="#">
<img alt="Personal Coaching" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<div className="w-10 h-10 mb-4 border border-red-600/50 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
<i className="w-5 h-5 text-red-500 stroke-[1.5]" data-lucide="target"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors uppercase">Personal Coaching</h3>
<p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed">
                            1-on-1 personalized training plans, strict nutritional guidance, and unwavering accountability for real results.
                        </p>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-black py-16 border-t border-neutral-900">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-semibold uppercase tracking-tight">
<i className="w-5 h-5 text-red-600 stroke-[1.5]" data-lucide="dumbbell"></i>
                Titan Elite
            </div>
<div className="flex gap-6 text-sm text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-sm text-neutral-600 uppercase tracking-wider font-medium">© 2024 Built Different.</p>
</div>
</footer>


    </>
  );
}
