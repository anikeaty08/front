import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="absolute top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center text-sm font-normal">
<div className="flex items-center gap-2 bg-white/5 backdrop-blur-md text-white px-4 py-2 rounded-sm shadow-sm border border-white/10">
<span className="text-xs text-white/70 uppercase tracking-widest">Fonds<br/>de dotation</span>
<span className="text-xl font-medium tracking-tight text-[#8DC63F] italic">botanic</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-white/90">
<a className="hover:text-[#8DC63F] transition-colors" href="#">The Endowment Fund</a>
<a className="hover:text-[#8DC63F] transition-colors" href="#">Our missions</a>
<a className="hover:text-[#8DC63F] transition-colors" href="#">Our projects</a>
<a className="hover:text-[#8DC63F] transition-colors" href="#">Resources</a>
</nav>
<div className="flex items-center gap-4">
<button aria-label="Toggle Sound" className="p-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10 transition-all">
<iconify-icon className="text-white" height="20" icon="solar:volume-up-linear" width="20"></iconify-icon>
</button>
<button aria-label="Search" className="p-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10 transition-all">
<iconify-icon className="text-white" height="20" icon="solar:magnifier-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 pt-32 pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Forest Canopy" className="w-full h-full object-cover grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0a0a0a]/80 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/50"></div>
</div>
<div className="relative z-10 max-w-4xl space-y-8">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight uppercase leading-[1.1] text-white text-balance drop-shadow-lg">
                Commitment to the forest<br/>and its biodiversity
            </h1>
<p className="text-xl font-normal tracking-tight text-white/80 max-w-2xl leading-relaxed drop-shadow-md">
                The botanic endowment fund supports projects for the preservation of forests, ecological corridors and their biodiversity, as well as awareness and training actions for all audiences.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#8DC63F] text-black font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-[#7BB335] transition-all transform hover:-translate-y-0.5 shadow-lg" href="#">
                    The meaning of our approach
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/10 transition-all transform hover:-translate-y-0.5 shadow-lg" href="#">
                    See our actions
                </a>
</div>
</div>
<div className="absolute bottom-12 right-12 z-10 animate-bounce hidden md:block">
<div className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-white" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-[#0a0a0a] flex flex-col items-center border-t border-white/5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-center mb-16 text-white">About Us</h2>
<div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden relative shadow-2xl group cursor-pointer border border-white/10">
<img alt="Forest Aerial View" className="w-full h-full object-cover opacity-40 grayscale-[20%] group-hover:opacity-60 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-[#8DC63F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(141,198,63,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(141,198,63,0.5)] transition-all duration-300">
<iconify-icon className="text-black ml-1" height="32" icon="solar:play-linear" width="32"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="flex items-center gap-4">
<div className="bg-black/60 backdrop-blur-md p-2 rounded-sm shadow-sm flex flex-col justify-center items-center h-12 w-12 border border-white/10">
<span className="text-xs scale-75 leading-tight text-white/70 uppercase font-normal">Fonds</span>
</div>
<div>
<p className="text-white font-normal text-lg tracking-tight">botanic</p>
<p className="text-white/60 text-sm">Ses missions, ses actions</p>
</div>
</div>
<div className="flex items-center gap-2 text-white/80 text-sm bg-black/80 px-3 py-1.5 rounded backdrop-blur-md border border-white/10">
<span>Watch on</span>
<iconify-icon height="16" icon="solar:video-frame-play-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-[#000000] border-t border-white/5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-center mb-16 text-white">The Latest Projects Supported</h2>
<div className="max-w-5xl mx-auto flex flex-col items-center gap-12">

<div className="w-full bg-[#111111] rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/5">
<div className="md:w-2/5 h-64 md:h-auto relative bg-black">
<img alt="Bare plot of land" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-transparent text-white">
<h3 className="text-2xl font-medium tracking-tight mb-4 text-balance">Reforestation of a damaged plot of land in Marigny l'Église, in the Nièvre department</h3>
<div className="flex flex-wrap items-center gap-4 text-sm font-normal text-white/50 mb-6 uppercase tracking-wider">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#8DC63F]" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                            Marigny-l'Église (58)
                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#8DC63F]" height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
                            2026
                        </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#8DC63F]" height="16" icon="solar:leaf-linear" width="16"></iconify-icon>
                            Preservation
                        </div>
</div>
<p className="text-white/60 text-lg leading-relaxed">
                        Marigny l'Église, a small town in the Nièvre region, has a 104-hectare forest that has suffered severe dieback, leaving a bare plot.
                    </p>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#111111] text-white border border-white/10 font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-all transform hover:-translate-y-0.5 shadow-lg" href="#">
                See all our actions
            </a>
</div>
</section>

<section className="py-32 px-8 md:px-24 bg-[#0a0a0a] text-white border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
<div className="flex flex-col">
<div className="flex flex-wrap gap-x-4 gap-y-2 text-7xl md:text-9xl font-medium tracking-tight text-white leading-none">
<span>4</span><span>40</span><span>0</span><span>0</span><span>1</span>
</div>
<div className="flex items-end gap-6 mt-4">
<span className="text-6xl md:text-8xl font-medium tracking-tight text-[#8DC63F] leading-none drop-shadow-[0_0_15px_rgba(141,198,63,0.2)]">50</span>
<span className="text-3xl md:text-4xl font-medium tracking-tight uppercase pb-2 text-white/90">Trees Planted</span>
</div>
</div>

<div className="flex gap-4 items-end opacity-70">
<div className="flex flex-col items-center gap-1">
<iconify-icon className="text-white/20" height="64" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 pb-4">
<iconify-icon className="text-[#8DC63F] drop-shadow-[0_0_10px_rgba(141,198,63,0.3)]" height="80" icon="solar:leaf-linear" width="80"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 pb-8">
<iconify-icon className="text-white/20" height="64" icon="solar:leaf-linear" width="64"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 pb-2">
<iconify-icon className="text-white/20" height="56" icon="solar:leaf-linear" width="56"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-[#000000] border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-3 flex flex-col items-start gap-8 lg:sticky lg:top-32 h-fit">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase text-white leading-tight">Recent<br/>Content</h2>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#111111] text-white font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors shadow-md border border-white/10" href="#">
                    See all resources
                </a>
</div>

<div className="lg:col-span-9 flex flex-col gap-8">

<a className="group flex flex-col md:flex-row gap-8 items-center border-b border-white/10 pb-8 hover:bg-[#111111]/50 p-4 rounded-lg transition-colors -ml-4" href="#">
<div className="w-full md:w-1/3 aspect-video overflow-hidden rounded bg-[#111111] border border-white/5">
<img alt="Man in forest" className="w-full h-full object-cover opacity-70 grayscale-[20%] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-center">
<span className="text-sm font-normal text-white/40 mb-2">March 13, 2026</span>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4 group-hover:text-[#8DC63F] transition-colors">Interview with Sébastien Laguet, specialist in mountain birds and small mammals</h3>
<span className="text-sm font-medium uppercase tracking-wider text-[#8DC63F] flex items-center gap-2">
                            Read the article <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</a>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="group flex flex-col gap-6 hover:bg-[#111111]/50 p-4 rounded-lg transition-colors -ml-4" href="#">
<div className="w-full aspect-square overflow-hidden rounded bg-[#111111] border border-white/5">
<img alt="Tree climbing" className="w-full h-full object-cover opacity-70 grayscale-[20%] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-white/40 mb-2">March 13, 2026</span>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 group-hover:text-[#8DC63F] transition-colors line-clamp-2">Cliff forests – When nature clings to the stone</h3>
<span className="text-sm font-medium uppercase tracking-wider text-[#8DC63F] flex items-center gap-2 mt-auto">
                                Read the article <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</a>

<a className="group flex flex-col gap-6 hover:bg-[#111111]/50 p-4 rounded-lg transition-colors -ml-4" href="#">
<div className="w-full aspect-square overflow-hidden rounded bg-[#111111] border border-white/5 p-8 flex items-center justify-center">
<img alt="Game box illustration placeholder" className="w-full h-full object-contain opacity-40 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500 mix-blend-luminosity" src="https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-white/40 mb-2">March 13, 2026</span>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 group-hover:text-[#8DC63F] transition-colors line-clamp-2">The Acorn Game of the Goose</h3>
<span className="text-sm font-medium uppercase tracking-wider text-[#8DC63F] flex items-center gap-2 mt-auto">
                                Read the article <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-center mb-16 text-white max-w-2xl text-balance leading-tight">
                Our missions to act in favor<br/>of the forest and its biodiversity
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">

<div className="flex flex-col gap-6">
<div className="flex h-[400px]">
<div className="w-16 flex-shrink-0 flex items-center justify-center bg-[#111111] border border-white/10 rounded-l-sm z-10">
<h3 className="vertical-text text-3xl font-medium tracking-tight uppercase text-white whitespace-nowrap text-white/90">Preservation</h3>
</div>
<div className="flex-grow relative overflow-hidden rounded-r-sm bg-black border-y border-r border-white/10">
<img alt="Forest detail" className="w-full h-full object-cover opacity-50 grayscale-[30%]" src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="text-white/60 text-lg leading-relaxed">
                        To support actions for the defense, preservation or development of natural forest areas, their ecosystems and their biodiversity.
                    </p>
<div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#111111] text-white border border-white/10 font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors shadow-md" href="#">
                            Our preservation mission
                        </a>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex h-[400px]">
<div className="w-16 flex-shrink-0 flex items-center justify-center bg-[#111111] border border-white/10 rounded-l-sm z-10">
<h3 className="vertical-text text-3xl font-medium tracking-tight uppercase text-white whitespace-nowrap text-white/90">Awareness</h3>
</div>
<div className="flex-grow relative overflow-hidden rounded-r-sm bg-black border-y border-r border-white/10">
<img alt="Child in nature" className="w-full h-full object-cover opacity-50 grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<p className="text-white/60 text-lg leading-relaxed">
                        To work with all audiences to raise awareness of the forest and the richness of its ecosystems, but also of the problems that threaten its vitality.
                    </p>
<div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#111111] text-white border border-white/10 font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors shadow-md" href="#">
                            Our awareness mission
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-[#000000] border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-3 flex flex-col items-start gap-8 lg:sticky lg:top-32">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase text-white leading-tight">Our<br/>Partners</h2>
<a className="inline-flex items-center justify-center px-6 py-3 bg-[#111111] text-white border border-white/10 font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/5 transition-colors shadow-md" href="#">
                    See all our partners
                </a>
</div>

<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#111111] border border-white/5 text-white p-10 flex flex-col items-center text-center gap-6 rounded-sm shadow-xl hover:-translate-y-1 hover:border-white/10 transition-all duration-300">
<div className="h-20 flex items-center justify-center w-full bg-black/50 p-4 rounded border border-white/5">
<div className="flex items-center gap-2 font-medium tracking-tight text-xl text-white">
<iconify-icon className="text-[#8DC63F]" height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
                            Association Francis Hallé
                        </div>
</div>
<h3 className="text-2xl font-medium tracking-tight mt-4">Francis Hallé Association</h3>
<p className="text-white/50 text-lg leading-relaxed">
                        Its mission: to enable the rebirth of a large primeval forest in Western Europe
                    </p>
</div>

<div className="bg-[#111111] border border-white/5 text-white p-10 flex flex-col items-center text-center gap-6 rounded-sm shadow-xl hover:-translate-y-1 hover:border-white/10 transition-all duration-300">
<div className="h-20 flex items-center justify-center w-full bg-black/50 p-4 rounded border border-white/5">
<div className="flex items-center gap-2 font-medium tracking-tight text-xl text-white">
<iconify-icon className="text-[#8DC63F]" height="28" icon="solar:sprout-linear" width="28"></iconify-icon>
                            Agroforesterie
                        </div>
</div>
<h3 className="text-2xl font-medium tracking-tight mt-4">French Agroforestry Association</h3>
<p className="text-white/50 text-lg leading-relaxed">
                        Its mission: to act to accelerate the agroecological transition in the different territories of France, supporting stakeholders in the agricultural sector in the deployment of more fertile agriculture.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 md:px-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase whitespace-nowrap">Stay Informed.</h2>
<div className="flex flex-col gap-4 w-full max-w-xl z-10">
<p className="text-white/60 text-lg">Subscribe to our newsletter to follow our adventures and take action with us!</p>
<form className="flex w-full gap-2 bg-[#111111] p-1 rounded shadow-sm border border-white/10 focus-within:border-[#8DC63F]/50 transition-colors">
<input className="flex-grow px-4 py-3 bg-transparent outline-none text-white placeholder:text-white/30 text-base" placeholder="E-mail" required="" type="email"/>
<button className="bg-[#8DC63F] text-black px-8 py-3 font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-[#7BB335] transition-colors" type="submit">
                        Send
                    </button>
</form>
</div>

<div className="hidden lg:flex w-32 h-32 relative items-center justify-center flex-shrink-0 animate-[spin_20s_linear_infinite]">
<svg className="absolute inset-0 w-full h-full text-white/10 overflow-visible" viewbox="0 0 100 100">
<path d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" id="circlePath"></path>
<text className="text-[10px] uppercase font-medium tracking-[0.2em] fill-current">
<textpath href="#circlePath" startoffset="0%">INSCRIS-TOI • INSCRIS-TOI • INSCRIS-TOI • </textpath>
</text>
</svg>
<div className="w-12 h-12 bg-[#111111] border border-white/10 rounded-full text-[#8DC63F] flex items-center justify-center shadow-[0_0_15px_rgba(141,198,63,0.1)]">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="bg-[#000000] text-white pt-24 pb-8 px-8 md:px-24 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

<div className="flex flex-col items-start">
<div className="flex items-center gap-2 bg-[#111111] text-white px-4 py-2 rounded-sm mb-6 border border-white/10">
<span className="text-xs text-white/50 uppercase tracking-widest">Fonds<br/>de dotation</span>
<span className="text-xl font-medium tracking-tight text-[#8DC63F] italic">botanic</span>
</div>
</div>

<div className="flex flex-col gap-4">
<a className="text-white/60 hover:text-[#8DC63F] transition-colors font-normal text-lg tracking-tight" href="#">The Endowment Fund</a>
<a className="text-white/60 hover:text-[#8DC63F] transition-colors font-normal text-lg tracking-tight" href="#">The supported projects</a>
<a className="text-white/60 hover:text-[#8DC63F] transition-colors font-normal text-lg tracking-tight" href="#">Our newsletters</a>
<a className="text-white/60 hover:text-[#8DC63F] transition-colors font-normal text-lg tracking-tight" href="#">All resources</a>
<a className="text-white/60 hover:text-[#8DC63F] transition-colors font-normal text-lg tracking-tight" href="#">Take action with us</a>
<a className="text-white/60 hover:text-[#8DC63F] transition-colors font-normal text-lg tracking-tight" href="#">Contact</a>
</div>

<div className="flex flex-col gap-6">
<h3 className="text-2xl font-medium tracking-tight uppercase text-white">Follow us</h3>
<div className="flex gap-4">
<a aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="mdi:facebook" width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="mdi:linkedin" width="20"></iconify-icon>
</a>
<a aria-label="Pinterest" className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="mdi:pinterest" width="20"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a aria-label="YouTube" className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all" href="#">
<iconify-icon height="20" icon="mdi:youtube" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Legal notice</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Cookie preferences</a>
</div>
<div>
                Website by <span className="font-medium text-white/80">Vinci.</span>
</div>
</div>
</footer>

    </>
  );
}
