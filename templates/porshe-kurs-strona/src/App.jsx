import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter text-zinc-50 flex items-center" href="#">
                    PORSCHE
                </a>
<div className="hidden lg:flex items-center gap-6 text-sm font-normal">
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#heritage">Heritage</a>
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#models">Models</a>
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#performance">Performance</a>
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#configure">Build</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-50 hover:text-red-500 transition-colors" href="#configure">
                    Configurator
                    <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="lg:hidden text-zinc-50 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-16 min-h-screen flex flex-col justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/80 md:via-zinc-950/50 to-transparent z-10"></div>
<img alt="Porsche 911" className="w-full h-full object-cover object-center opacity-70 md:opacity-100" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-20 w-full mt-12 md:mt-0">
<div className="max-w-3xl">
<h1 className="text-5xl sm:text-6xl md:text-8xl font-medium tracking-tighter text-zinc-50 leading-[1.05] mb-6 md:mb-8">
                    Porsche:<br/> The Epitome of<br/> Engineering.
                </h1>
<p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-8 md:mb-10 max-w-xl">
                    Form dictated by function. Performance driven by passion. Discover a lineup where every model inherits a decades-long racing bloodline.
                </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-red-600 text-zinc-50 font-medium text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2" href="#models">
                        Discover Models
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 border-t border-white/5 relative" id="heritage">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="space-y-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 text-red-500">
<iconify-icon className="text-xl" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-zinc-50 leading-tight">
                        A legacy forged <br className="hidden sm:block"/> on the track.
                    </h2>
<div className="space-y-6 text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
<p>
                            "I couldn't find the sports car of my dreams, so I built it myself." These words by Ferdinand Porsche ignited a revolution in automotive engineering. Since 1948, the Porsche crest has stood for uncompromising performance and timeless design.
                        </p>
<p>
                            From the grueling straights of Le Mans to the winding corners of the Nürburgring, our racing DNA is woven into the chassis of every vehicle that leaves Stuttgart. We don't just build cars; we engineer sports cars for everyday driving.
                        </p>
</div>
</div>
<div className="relative group aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
<div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
<img alt="Porsche Heritage" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1598387088924-f5713429b69b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 border-t border-white/5 relative" id="models">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-zinc-50 mb-4">The Lineup.</h2>
<p className="text-zinc-400 font-light text-sm sm:text-base max-w-lg">Choose your driving experience. From mid-engine purists to electric visionaries, there is a Porsche for every soul.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<a className="group relative md:col-span-2 aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 block" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Porsche 911" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full flex justify-between items-end">
<div>
<span className="text-xs font-medium text-red-500 uppercase tracking-widest mb-2 block">The Icon</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-50">911</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-zinc-50 group-hover:bg-zinc-50 group-hover:text-zinc-950 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group relative md:col-span-1 aspect-[4/3] md:aspect-[16/9] md:h-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 block" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Porsche 718" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&amp;w=2825&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full flex justify-between items-end">
<div>
<span className="text-xs font-medium text-red-500 uppercase tracking-widest mb-2 block">Boxster &amp; Cayman</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-zinc-50">718</h3>
</div>
</div>
</a>

<a className="group relative md:col-span-1 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 block" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Porsche Taycan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full flex justify-between items-end">
<div>
<span className="text-xs font-medium text-red-500 uppercase tracking-widest mb-2 block">Electric Soul</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-zinc-50">Taycan</h3>
</div>
</div>
</a>

<a className="group relative md:col-span-1 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 block" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Porsche Panamera" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&amp;w=2944&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full flex justify-between items-end">
<div>
<span className="text-xs font-medium text-red-500 uppercase tracking-widest mb-2 block">Luxury Sedan</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-zinc-50">Panamera</h3>
</div>
</div>
</a>

<a className="group relative md:col-span-1 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 block" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<img alt="Porsche SUVs" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full flex justify-between items-end">
<div>
<span className="text-xs font-medium text-red-500 uppercase tracking-widest mb-2 block">SUV Performance</span>
<h3 className="text-xl md:text-2xl font-medium tracking-tighter text-zinc-50">Macan &amp; Cayenne</h3>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 relative border-t border-white/5" id="performance">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-zinc-50 mb-6">Technical Excellence.</h2>
<p className="text-zinc-400 font-light text-sm sm:text-base">The numbers speak for themselves. Unrelenting power, exceptional handling, and aerodynamics engineered to carve through the air seamlessly.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-red-600/30 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
<div className="mb-6 p-4 rounded-full bg-white/5 text-zinc-400 group-hover:text-red-500 transition-colors">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">0-100 km/h</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl sm:text-6xl font-medium tracking-tighter text-zinc-50">2.7</span>
<span className="text-sm font-light text-zinc-400">s</span>
</div>
<p className="mt-4 text-xs font-light text-zinc-500">With Sport Chrono Package (911 Turbo S)</p>
</div>

<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-red-600/30 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
<div className="mb-6 p-4 rounded-full bg-white/5 text-zinc-400 group-hover:text-red-500 transition-colors">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:speedometer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">Top Speed</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl sm:text-6xl font-medium tracking-tighter text-zinc-50">330</span>
<span className="text-sm font-light text-zinc-400">km/h</span>
</div>
<p className="mt-4 text-xs font-light text-zinc-500">Track-focused aerodynamic capability</p>
</div>

<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-red-600/30 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden sm:col-span-2 lg:col-span-1 flex flex-col items-center text-center">
<div className="mb-6 p-4 rounded-full bg-white/5 text-zinc-400 group-hover:text-red-500 transition-colors">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:engine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest mb-3">Max Power</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl sm:text-6xl font-medium tracking-tighter text-zinc-50">650</span>
<span className="text-sm font-light text-zinc-400">hp</span>
</div>
<p className="mt-4 text-xs font-light text-zinc-500">3.8-liter twin-turbocharged boxer 6</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden" id="configure">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-zinc-950/80 z-10"></div>
<img alt="Porsche Detail" className="w-full h-full object-cover object-center grayscale opacity-30" src="https://images.unsplash.com/photo-1606828551108-a5c90bcefc2f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-20">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-50 mb-2">
<iconify-icon className="text-xl" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-zinc-50">Build Your Own Porsche.</h2>
<p className="text-zinc-400 font-light text-sm md:text-base max-w-2xl mx-auto">
                Customize every detail. Select exterior colors, fine-tune interior materials, and choose performance packages to create a machine that is unequivocally yours.
            </p>
<div className="pt-8">
<a className="inline-flex px-8 py-4 rounded-full bg-zinc-50 text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">
                    Start Configurator
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="space-y-6 lg:col-span-1">
<div className="text-lg font-medium tracking-tighter text-zinc-50">
                        PORSCHE
                    </div>
<p className="text-xs text-zinc-500 font-light leading-relaxed max-w-xs">
                        There is no substitute. Engineering excellence crafted in Stuttgart, Germany.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-red-500 hover:text-red-400 transition-colors" href="#">
                        Visit Official Porsche Site
                        <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="hidden lg:block"></div>

<div className="lg:col-span-2 space-y-6">
<h4 className="text-sm font-medium text-zinc-50">The Porsche Newsletter</h4>
<p className="text-xs text-zinc-500 font-light">Stay updated with the latest models, racing news, and exclusive events.</p>
<form className="flex gap-4 items-end max-w-md">
<div className="flex-1">
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-zinc-50 placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition-colors" placeholder="Email address" type="email"/>
</div>
<button className="text-sm font-medium text-zinc-50 hover:text-red-500 transition-colors uppercase tracking-widest pb-2 border-b border-transparent" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-zinc-500 font-light">
<div className="flex gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
<div className="flex flex-wrap justify-center gap-4 sm:gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Legal Notice</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Cookie Settings</a>
</div>
<div className="text-center md:text-right">
                    © 2024 Porsche Concept.
                </div>
</div>
</div>
</footer>

    </>
  );
}
