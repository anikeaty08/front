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
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.23, 1, 0.32, 1)',
}
}
}
}



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
      

<nav @scroll.window="scrolled = (window.pageYOffset &gt; 20)" className="fixed top-0 w-full z-50 mix-blend-difference" x-data="{ scrolled: false }">
<div :className="scrolled ? 'py-4' : 'py-8'" className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between transition-all duration-700 ease-spring">
<div className="flex items-center gap-2">
<span className="text-xl tracking-tighter font-semibold text-white">SN</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
<a className="hover:text-white transition-colors duration-300" href="#vision">Vision</a>
<a className="hover:text-white transition-colors duration-300" href="#initiatives">Initiatives</a>
<a className="hover:text-white transition-colors duration-300" href="#impact">Impact</a>
</div>
<div>
<a className="text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full border border-zinc-700/50 hover:bg-white hover:text-zinc-950 transition-all duration-500 text-white backdrop-blur-sm" href="#">
                    Join Us
                </a>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0" x-data="{ loaded: false }" x-init="setTimeout(() =&gt; loaded = true, 50)">
<img :className="loaded ? 'scale-100 opacity-40' : 'scale-110 opacity-0'" alt="Moody luxury forest" className="w-full h-full object-cover origin-center transition-all duration-[2000ms] ease-spring" src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto" x-data="{ shown: false }" x-init="setTimeout(() =&gt; shown = true, 300)">
<div className="overflow-hidden mb-6">
<p :className="shown ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'" className="text-sm font-medium tracking-wide text-zinc-400 uppercase transition-all duration-1000 ease-spring">
                    A vision by Uttam
                </p>
</div>
<h1 :className="shown ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'" className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white transition-all duration-1000 ease-spring delay-100">
                Preserve the <br className="hidden md:block"/>
<span className="italic font-light text-zinc-300">Extraordinary</span>
</h1>
<p :className="shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'" className="mt-8 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-spring delay-300">
                We approach environmental conservation not as a duty, but as the curation of the world's most luxurious asset: Nature.
            </p>
<div :className="shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'" className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-spring delay-500">
<a className="w-full sm:w-auto rounded-full bg-zinc-50 text-zinc-950 px-8 py-4 text-sm font-medium hover:bg-zinc-200 hover:scale-105 transition-all duration-500 ease-spring" href="#vision">
                    Explore the Vision
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
<div className="w-[1px] h-12 bg-zinc-700 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-white origin-top" style={{animation: 'scroll-down 2s cubic-bezier(0.23, 1, 0.32, 1) infinite'}}></div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6" id="vision">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

<div className="order-2 lg:order-1" x-data="{ shown: false }" x-intersect.margin.-10%.0px.-10%.0px="shown = true">
<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="flex items-center gap-3 mb-8" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)'}}>
<div className="w-8 h-[1px] bg-zinc-600"></div>
<span className="text-xs uppercase tracking-widest font-medium text-zinc-400">The Ethos</span>
</div>
<h2 :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s'}}>
                    Design meets <br/>conservation.
                </h2>
<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="mt-8 space-y-6 text-base text-zinc-400 leading-relaxed" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s'}}>
<p>
                        "True luxury is untouched wilderness. As a designer, I've spent my career obsessing over details, aesthetics, and lasting impact. With Save Nature, we apply these same rigorous principles to the preservation of our planet."
                    </p>
<p>
                        We do not merely plant trees; we architect resilient ecosystems. We view every conservation effort as a high-end installation, requiring patience, precision, and an unwavering commitment to quality.
                    </p>
</div>
<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="mt-12 flex items-center gap-4" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s'}}>
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold tracking-tighter">
                        UT
                    </div>
<div>
<p className="text-sm font-medium text-white">Uttam</p>
<p className="text-xs text-zinc-500">CEO &amp; Lead Designer, Save Nature</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative" x-data="{ shown: false }" x-intersect.margin.-10%.0px.-10%.0px="shown = true">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-zinc-900">
<div :className="shown ? 'scale-y-0' : 'scale-y-100'" className="absolute inset-0 bg-zinc-800 z-10 transition-transform duration-[1.5s] ease-spring origin-top"></div>
<img :className="shown ? 'scale-100' : 'scale-110'" alt="Abstract nature detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-spring" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div :className="shown ? 'opacity-100 scale-100' : 'opacity-0 scale-50'" className="absolute -bottom-6 -left-6 w-32 h-32 border border-zinc-800 rounded-full z-[-1] hidden md:block" style={{transition: 'all 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0.5s'}}></div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-y border-zinc-800/50" id="initiatives">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20" x-data="{ shown: false }" x-intersect="shown = true">
<h2 :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="text-3xl md:text-4xl font-semibold tracking-tight text-white transition-all duration-1000 ease-spring">
                    Our Initiatives
                </h2>
<p :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="mt-4 text-base text-zinc-400 transition-all duration-1000 ease-spring delay-100">
                    Methodical, beautifully executed approaches to restoring balance.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors duration-500" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)'}} x-data="{ shown: false }" x-intersect.margin.-5%.0px.-5%.0px="shown = true">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-spring">
<iconify-icon className="text-xl text-zinc-300" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Flora Curation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Restoring ancient woodlands with genetic precision, treating native species like irreplaceable artifacts.
                    </p>
</div>

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors duration-500" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s'}} x-data="{ shown: false }" x-intersect.margin.-5%.0px.-5%.0px="shown = true">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-spring">
<iconify-icon className="text-xl text-zinc-300" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Oceanic Purity</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Deploying minimalist, low-impact filtration systems to clear waterways without disrupting aquatic life.
                    </p>
</div>

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors duration-500" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s'}} x-data="{ shown: false }" x-intersect.margin.-5%.0px.-5%.0px="shown = true">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-spring">
<iconify-icon className="text-xl text-zinc-300" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Sanctuary Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Architecting protected zones that serve as safe havens for endangered fauna, blending seamlessly with the terrain.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="impact">
<div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden h-[60vh] md:h-[80vh] flex items-center justify-center" x-data="{ shown: false }" x-intersect.margin.-10%.0px.-10%.0px="shown = true">
<div :className="shown ? 'scale-y-0' : 'scale-y-100'" className="absolute inset-0 bg-zinc-800 z-10 transition-transform duration-[1.5s] ease-spring origin-bottom"></div>
<img :className="shown ? 'scale-100' : 'scale-110'" alt="Mountain peaks" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2s] ease-spring" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="relative z-20 text-center px-6 max-w-3xl" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s'}}>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                    Leave a mark of <span className="italic font-light">absence</span>.
                </h2>
<p className="text-base md:text-lg text-zinc-300 mb-10">
                    Our goal is invisible impact. The greatest design achievement is nature restored to a state where our intervention cannot be seen.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors group" href="#">
<span>Support the Foundation</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-zinc-950 z-10">
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-20" x-data="{ shown: false }" x-intersect="shown = true">
<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/60 bg-zinc-900/30 mb-6" style={{transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">Perspectives</span>
</div>
<h2 :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="text-3xl md:text-5xl font-semibold tracking-tight text-white transition-all duration-1000 ease-spring delay-100">
                    Echoes of our impact.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 ease-spring overflow-hidden" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1)'}} x-data="{ shown: false }" x-intersect.margin.-5%.0px.-5%.0px="shown = true">
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-[0.02] blur-3xl rounded-full transition-opacity duration-700"></div>
<div className="relative z-10">
<iconify-icon className="text-3xl text-zinc-700 mb-6 transition-colors group-hover:text-zinc-500" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed mb-8 font-light">
                            "The meticulous attention to detail Uttam brings to conservation is unprecedented. It feels less like an environmental project and more like restoring a masterpiece painting."
                        </p>
<div className="flex items-center gap-4 border-t border-zinc-800/50 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white">David Chen</h4>
<p className="text-xs text-zinc-500">Director, Global Ecosphere</p>
</div>
</div>
</div>
</div>

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 ease-spring overflow-hidden" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.1s'}} x-data="{ shown: false }" x-intersect.margin.-5%.0px.-5%.0px="shown = true">
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-[0.02] blur-3xl rounded-full transition-opacity duration-700"></div>
<div className="relative z-10">
<iconify-icon className="text-3xl text-zinc-700 mb-6 transition-colors group-hover:text-zinc-500" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed mb-8 font-light">
                            "They don't just protect habitats; they curate them. The resulting biodiversity thrives precisely because it was designed to flourish in its purest native state."
                        </p>
<div className="flex items-center gap-4 border-t border-zinc-800/50 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Elena Rostova</h4>
<p className="text-xs text-zinc-500">Chief Scientist, Terra Institute</p>
</div>
</div>
</div>
</div>

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 ease-spring overflow-hidden md:col-span-2 lg:col-span-1" style={{transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s'}} x-data="{ shown: false }" x-intersect.margin.-5%.0px.-5%.0px="shown = true">
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-[0.02] blur-3xl rounded-full transition-opacity duration-700"></div>
<div className="relative z-10">
<iconify-icon className="text-3xl text-zinc-700 mb-6 transition-colors group-hover:text-zinc-500" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base text-zinc-300 leading-relaxed mb-8 font-light">
                            "Working with Save Nature redefined our approach to corporate sustainability. They execute with a quiet, undeniable luxury that makes preservation aspirational."
                        </p>
<div className="flex items-center gap-4 border-t border-zinc-800/50 pt-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Marcus Vance</h4>
<p className="text-xs text-zinc-500">Founder, Aether Partners</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-zinc-950 pt-32 pb-12 overflow-hidden border-t border-zinc-900 z-0" x-data="{ shown: false }" x-intersect.margin.-10%.0px.-10%.0px="shown = true">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 selection:bg-transparent">
<h2 :className="shown ? 'scale-100 opacity-100' : 'scale-75 opacity-0'" className="text-[18vw] font-bold tracking-tighter text-zinc-900/30 whitespace-nowrap leading-none transition-all duration-[2000ms] ease-spring">
                UTTAM
            </h2>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 transition-all duration-[1500ms] ease-spring delay-200">
<div className="lg:col-span-2">
<span className="text-2xl tracking-tighter font-semibold text-white mb-4 block">SN</span>
<p className="text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
                        Join our private briefing. Receive quarterly, meticulously curated updates on our conservation architecture and foundation milestones.
                    </p>

<div className="relative max-w-md group">
<input className="w-full bg-zinc-900/40 border border-zinc-800/80 rounded-full py-3.5 pl-6 pr-32 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900/80 transition-all duration-500 backdrop-blur-sm" placeholder="Enter your email address" type="email"/>
<button className="absolute right-1 top-1 bottom-1 bg-white text-zinc-950 rounded-full px-5 text-xs font-semibold hover:bg-zinc-200 hover:scale-95 transition-all duration-300">
                            Subscribe
                        </button>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Initiatives</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" href="#">Flora Curation</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" href="#">Oceanic Purity</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" href="#">Sanctuary Design</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" href="#">Impact Reports</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-white tracking-widest uppercase mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block flex items-center gap-2" href="#">Twitter <iconify-icon className="text-xs" icon="solar:arrow-up-right-linear"></iconify-icon></a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block flex items-center gap-2" href="#">Instagram <iconify-icon className="text-xs" icon="solar:arrow-up-right-linear"></iconify-icon></a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block flex items-center gap-2" href="#">LinkedIn <iconify-icon className="text-xs" icon="solar:arrow-up-right-linear"></iconify-icon></a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block" href="#">Contact Concierge</a></li>
</ul>
</div>
</div>

<div :className="shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-800/50 transition-all duration-[1500ms] ease-spring delay-300">
<div className="text-xs text-zinc-600 font-medium">
                    © 2023 Save Nature by Uttam. The art of preservation.
                </div>
<div className="flex gap-6 text-xs text-zinc-600 font-medium">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<style>
        @keyframes scroll-down {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { transform: translateY(0%); opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
        }
    </style>

    </>
  );
}
