import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="glow-bg"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-base font-normal text-white tracking-tighter hover:opacity-80 transition-opacity" href="#">AH</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
</div>
<a className="text-xs font-normal text-black bg-white px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="mailto:alhamdaalhamda5@gmail.com">Contact</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 reveal">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-300"></span>
</span>
<span className="text-xs font-light text-neutral-300 tracking-wide">Available for work</span>
</div>
<h1 className="text-6xl sm:text-7xl md:text-8xl font-normal text-white tracking-tighter leading-none mb-4 reveal delay-100">
                    Al Hamda.
                </h1>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-400 tracking-tight mb-6 reveal delay-200">
                    Full Stack Developer
                </h2>
<p className="text-base font-light text-neutral-500 max-w-md leading-relaxed mb-10 reveal delay-300">
                    Bridging the gap between elegant interface design and robust backend architecture to build seamless digital experiences.
                </p>
<div className="flex items-center gap-4 reveal delay-300">
<a className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-normal text-sm hover:bg-neutral-200 transition-all active:scale-95" href="#work">
                        View Projects
                    </a>
<a className="flex items-center gap-2 bg-transparent border border-white/10 text-white px-5 py-2.5 rounded-full font-normal text-sm hover:bg-white/5 transition-all active:scale-95" href="https://linkedin.com/in/al-hamda" target="_blank">
<iconify-icon className="text-base" icon="solar:link-minimalistic-linear"></iconify-icon>
                        LinkedIn
                    </a>
</div>
</div>

<div className="w-full md:w-auto flex justify-center md:justify-end reveal">

<div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl shadow-white/[0.02]">
<img alt="Al Hamda" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10 border-t border-white/5 bg-black/20" id="work">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 reveal">
<div>
<h2 className="text-3xl font-normal text-white tracking-tight">Selected Works</h2>
<p className="text-sm font-light text-neutral-500 mt-2">Recent client projects and technical builds.</p>
</div>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1" href="https://github.com" target="_blank">
                    View GitHub <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

<a className="group block p-1.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 reveal" href="https://liwanfurniture.com/" target="_blank">
<div className="aspect-square w-full rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-3 group-hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-neutral-700 group-hover:text-neutral-300 group-hover:scale-110 transition-all duration-500" icon="solar:sofa-linear"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-normal text-white tracking-tight">Liwan Furniture</h3>
<iconify-icon className="text-xs text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs font-light text-neutral-500">Ecommerce</p>
</div>
</a>

<a className="group block p-1.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 reveal delay-100" href="https://lavaelectric.in/" target="_blank">
<div className="aspect-square w-full rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-3 group-hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-neutral-700 group-hover:text-neutral-300 group-hover:scale-110 transition-all duration-500" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-normal text-white tracking-tight">Lava Electric</h3>
<iconify-icon className="text-xs text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs font-light text-neutral-500">Smart Home</p>
</div>
</a>

<a className="group block p-1.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 reveal delay-200" href="https://elinaut.com/" target="_blank">
<div className="aspect-square w-full rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-3 group-hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-neutral-700 group-hover:text-neutral-300 group-hover:scale-110 transition-all duration-500" icon="solar:diploma-linear"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-normal text-white tracking-tight">Elinaut</h3>
<iconify-icon className="text-xs text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs font-light text-neutral-500">EdTech</p>
</div>
</a>

<a className="group block p-1.5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 reveal delay-300" href="https://dhinteriorsindia.com/" target="_blank">
<div className="aspect-square w-full rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-3 group-hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-neutral-700 group-hover:text-neutral-300 group-hover:scale-110 transition-all duration-500" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="px-2 pb-2">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-normal text-white tracking-tight">DH Interiors</h3>
<iconify-icon className="text-xs text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs font-light text-neutral-500">Agency</p>
</div>
</a>
</div>
<div className="mt-8 text-center reveal">
<button className="inline-flex items-center gap-2 text-xs font-normal text-neutral-500 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-colors">
                    Load more projects
                    <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 relative z-10 border-t border-white/5" id="experience">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors reveal">
<h2 className="text-2xl font-normal text-white tracking-tight mb-8">Experience</h2>
<div className="space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-black border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-white/20 group-hover:text-white transition-all">
<iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-normal text-white tracking-tight">Web Developer</h3>
<p className="text-xs font-light text-neutral-500 mt-0.5">Digital Volcanoes</p>
</div>
</div>
<span className="text-xs font-light text-neutral-400 bg-black px-3 py-1 rounded-full sm:self-center self-start ml-14 sm:ml-0 border border-white/5">2024 - Present</span>
</div>
<div className="w-px h-6 bg-white/5 ml-5 hidden sm:block"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-black border border-white/10 flex items-center justify-center text-neutral-400 group-hover:border-white/20 group-hover:text-white transition-all">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-normal text-white tracking-tight">Web Dev Intern</h3>
<p className="text-xs font-light text-neutral-500 mt-0.5">TrackGenesis</p>
</div>
</div>
<span className="text-xs font-light text-neutral-400 bg-black px-3 py-1 rounded-full sm:self-center self-start ml-14 sm:ml-0 border border-white/5">2024</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-4 reveal delay-100">

<div className="flex-1 p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
<h2 className="text-2xl font-normal text-white tracking-tight mb-4">Stack</h2>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black text-xs font-light text-neutral-300">Laravel</span>
<span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black text-xs font-light text-neutral-300">React</span>
<span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black text-xs font-light text-neutral-300">Node.js</span>
<span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black text-xs font-light text-neutral-300">MongoDB</span>
<span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black text-xs font-light text-neutral-300">PHP</span>
<span className="px-3 py-1.5 rounded-lg border border-white/5 bg-black text-xs font-light text-neutral-300">MySQL</span>
</div>
</div>

<div className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
<h2 className="text-2xl font-normal text-white tracking-tight mb-4">Education</h2>
<div className="space-y-4">
<div>
<h4 className="text-sm font-normal text-neutral-200">BCA</h4>
<p className="text-xs font-light text-neutral-500 mt-1">Mahatma Gandhi University • 2024</p>
</div>
<div>
<h4 className="text-sm font-normal text-neutral-200">Full Stack Web Dev</h4>
<p className="text-xs font-light text-neutral-500 mt-1">ICT Academy of Kerala • 2024</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 relative z-10 bg-black" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
<div className="text-center md:text-left reveal">
<h2 className="text-3xl font-normal text-white tracking-tight mb-2">Ready to build?</h2>
<p className="text-sm font-light text-neutral-500">Reach out and let's discuss your next project.</p>
</div>
<div className="flex items-center gap-3 reveal delay-100">
<a className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all" href="mailto:alhamdaalhamda5@gmail.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all" href="tel:+918138957192">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all" href="https://linkedin.com/in/al-hamda" target="_blank">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-600 reveal delay-200">
<p>© 2024 Al Hamda. All rights reserved.</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-sm" icon="solar:globus-linear"></iconify-icon>
<span>Kerala, India</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
