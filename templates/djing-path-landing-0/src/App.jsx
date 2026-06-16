import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'seedj-bg': '#09090b',
'seedj-card': '#121214',
'seedj-magenta': '#ea4cff',
'seedj-cyan': '#4ffaf6',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Scroll Reveal Animation Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed top-0 left-0 h-full w-64 bg-black/40 border-r border-white/5 backdrop-blur-xl hidden lg:flex flex-col p-6 z-50">
<div className="flex items-center gap-2 mb-10 text-white">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
</svg>
<span className="text-lg font-medium tracking-tight">seedj</span>
</div>
<nav className="space-y-2">
<a className="flex items-center gap-3 px-4 py-3 bg-zinc-800/50 text-white rounded-lg text-sm font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                Shop
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 rounded-lg text-sm transition-colors" href="#">
<i className="w-4 h-4" data-lucide="play-square"></i>
                My courses
            </a>
</nav>
</aside>

<header className="lg:hidden fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 text-white">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
</svg>
<span className="font-medium">seedj</span>
</div>
<button className="text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</header>

<main className="lg:ml-64 min-h-screen pt-24 lg:pt-12 px-6 lg:px-12 pb-24 overflow-hidden">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 hero-enter opacity-0">

<div className="relative group rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[500px]">
<img alt="DJ Equipment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 flex justify-between items-end w-[calc(100%-3rem)]">
<h2 className="text-white font-medium text-lg tracking-wide uppercase">DJing Path</h2>
<i className="text-zinc-400 w-5 h-5" data-lucide="info"></i>
</div>
</div>

<div className="bg-seedj-card rounded-2xl p-8 lg:p-10 border border-white/5 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<i className="w-48 h-48" data-lucide="music"></i>
</div>
<div className="relative z-10">
<h1 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-2">DJING PATH</h1>
<div className="w-8 h-0.5 bg-zinc-700 mb-4"></div>
<h2 className="text-xl text-white mb-8 font-normal">DJing as an Artform</h2>
<span className="inline-block px-2 py-1 bg-purple-500/20 text-seedj-magenta text-xs font-medium tracking-wider uppercase rounded mb-3">Cyber Week Price</span>
<div className="flex items-baseline gap-3 mb-2">
<span className="text-4xl font-medium text-white">€ 39</span>
<span className="text-2xl text-zinc-600 line-through decoration-zinc-600">€ 89</span>
</div>
<p className="text-green-400 text-sm mb-8">48% off - limited availability at this price.</p>
<div className="space-y-3">
<button className="w-full py-3 bg-seedj-magenta hover:bg-fuchsia-400 text-black font-medium text-sm uppercase tracking-wide rounded transition-all hover:shadow-[0_0_20px_rgba(234,76,255,0.3)] hover:-translate-y-0.5">
                            Buy now
                        </button>
<div className="text-center text-xs text-zinc-500">or</div>
<button className="w-full py-3 bg-seedj-cyan hover:bg-cyan-300 text-black font-medium text-sm uppercase tracking-wide rounded transition-all hover:shadow-[0_0_20px_rgba(79,250,246,0.3)] hover:-translate-y-0.5">
                            Get subscription
                        </button>
</div>
<p className="mt-6 text-xs text-zinc-500 leading-relaxed">
                        Get this and all our courses (+200 hrs) plus contests, samples, charts starting at at 40% off (only 150 slots available).
                    </p>
</div>
</div>
</section>

<div className="flex justify-center mb-12 reveal-on-scroll">
<div className="inline-flex items-center bg-zinc-900 p-1 rounded-lg border border-white/5">
<button className="px-6 py-2 bg-white text-black rounded text-xs font-medium tracking-wide">DJING</button>
<button className="px-6 py-2 text-zinc-400 hover:text-white transition-colors rounded text-xs font-medium tracking-wide">PRODUCTION</button>
<button className="px-6 py-2 text-zinc-400 hover:text-white transition-colors rounded text-xs font-medium tracking-wide">DJING &amp; PRODUCTION</button>
</div>
</div>
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Choose your path</h2>
</div>

<section className="mb-24 reveal-on-scroll">
<div className="relative rounded-2xl overflow-hidden aspect-video w-full group cursor-pointer border border-white/5">
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
<svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto text-center mt-12 space-y-6">
<p className="text-lg text-zinc-300 font-light leading-relaxed">
                    Want to understand the core of the techno industry? The Industry Foundations bundle gives you exclusive access to essential knowledge shared by true icons of the scene.
                </p>
<p className="text-lg text-zinc-300 font-light leading-relaxed">
                    With courses from DVS1, Bloody Mary, and Perc, you'll gain invaluable insights into the industry's foundations, covering key aspects in DJing, production, music business, career development, and the mindset needed to navigate the electronic music world successfully.
                </p>
</div>
</section>

<section className="mb-24 reveal-on-scroll">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Bonus masterclass</h2>
<p className="text-zinc-500 text-sm font-light">Master every aspect of DJing with our comprehensive curriculum covering gear, software, techniques.</p>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">

<div className="min-w-[300px] w-[300px] md:w-[340px] aspect-[4/5] relative rounded-xl overflow-hidden group cursor-pointer shrink-0 border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Alarico</h3>
<p className="text-zinc-200 text-sm font-medium mb-2">This is my groovy techno</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span>2.5H</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>5 chapters</span>
</div>
</div>
</div>

<div className="min-w-[300px] w-[300px] md:w-[340px] aspect-[4/5] relative rounded-xl overflow-hidden group cursor-pointer shrink-0 border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Slin</h3>
<p className="text-zinc-200 text-sm font-medium mb-2">This is my groovy techno</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span>2.5H</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>5 chapters</span>
</div>
<div className="absolute bottom-6 right-6 text-[10px] text-white/20 rotate-0">SEEDJ</div>
</div>
</div>

<div className="min-w-[300px] w-[300px] md:w-[340px] aspect-[4/5] relative rounded-xl overflow-hidden group cursor-pointer shrink-0 border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Alarico</h3>
<p className="text-zinc-200 text-sm font-medium mb-2">This is my groovy techno</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span>2.5H</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>5 chapters</span>
</div>
</div>
</div>

<div className="min-w-[300px] w-[300px] md:w-[340px] aspect-[4/5] relative rounded-xl overflow-hidden group cursor-pointer shrink-0 border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Slin</h3>
<p className="text-zinc-200 text-sm font-medium mb-2">This is my groovy techno</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span>2.5H</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>5 chapters</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 reveal-on-scroll">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Student Stories</h2>
<p className="text-zinc-500 text-sm font-light max-w-lg mx-auto">Hear from our community of over 5,000 DJs who have transformed their craft with Seedj.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">

<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-8 h-8 text-zinc-800 fill-zinc-800" data-lucide="quote"></i>
</div>
<div className="relative z-10">
<div className="flex gap-0.5 mb-5">
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-sm leading-7 font-normal">
                            "The structure of this course is exactly what I needed. It bridges the gap between bedroom DJing and club performance perfectly."
                        </p>
</div>
<div className="flex items-center gap-3 pt-8 mt-4 border-t border-white/[0.02]">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center text-[10px] font-semibold text-white shadow-inner border border-white/10">AM</div>
<div>
<div className="text-white text-xs font-medium">Alex Martinez</div>
<div className="text-zinc-500 text-[10px]">Resident Advisor</div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-8 h-8 text-zinc-800 fill-zinc-800" data-lucide="quote"></i>
</div>
<div className="relative z-10">
<div className="flex gap-0.5 mb-5">
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
</div>
<p className="text-zinc-300 text-sm leading-7 font-normal">
                            "Finally understood harmonic mixing. The visual aids in the Music Theory module are game-changing for visual learners like me."
                        </p>
</div>
<div className="flex items-center gap-3 pt-8 mt-4 border-t border-white/[0.02]">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center text-[10px] font-semibold text-white shadow-inner border border-white/10">SK</div>
<div>
<div className="text-white text-xs font-medium">Sarah Klein</div>
<div className="text-zinc-500 text-[10px]">Club Owner</div>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-8 h-8 text-zinc-800 fill-zinc-800" data-lucide="quote"></i>
</div>
<div className="relative z-10">
<div className="flex gap-0.5 mb-5">
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-white text-white" data-lucide="star-half"></i>
</div>
<p className="text-zinc-300 text-sm leading-7 font-normal">
                            "Worth every penny just for the career branding section. It helped me land my first residency within 3 months."
                        </p>
</div>
<div className="flex items-center gap-3 pt-8 mt-4 border-t border-white/[0.02]">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center text-[10px] font-semibold text-white shadow-inner border border-white/10">JD</div>
<div>
<div className="text-white text-xs font-medium">Jonas De Vries</div>
<div className="text-zinc-500 text-[10px]">Music Producer</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 max-w-3xl mx-auto reveal-on-scroll">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Frequently Asked Questions</h2>
<p className="text-zinc-500 text-sm font-light">Everything you need to know about The DJ Path</p>
</div>
<div className="space-y-3">

<div className="group bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group-hover:bg-zinc-900/50 transition-colors">
<span className="text-zinc-300 font-medium text-sm">Who is this path for?</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group-hover:bg-zinc-900/50 transition-colors">
<span className="text-zinc-300 font-medium text-sm">Do I need prior experience?</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group-hover:bg-zinc-900/50 transition-colors">
<span className="text-zinc-300 font-medium text-sm">Can I access it from mobile?</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group-hover:bg-zinc-900/50 transition-colors">
<span className="text-zinc-300 font-medium text-sm">Is there a certificate?</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group-hover:bg-zinc-900/50 transition-colors">
<span className="text-zinc-300 font-medium text-sm">What equipment do I need to get started?</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>
</div>

<div className="group bg-zinc-900/30 border border-white/5 rounded-lg overflow-hidden">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group-hover:bg-zinc-900/50 transition-colors">
<span className="text-zinc-300 font-medium text-sm">How long does it take to complete?</span>
<i className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</section>
</main>


    </>
  );
}
