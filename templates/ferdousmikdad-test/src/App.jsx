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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
orange: '#FF4F00',
dark: '#1A1A1A',
gray: '#F6F9FC',
slate: '#334155',
blue: '#00B5E2'
}
},
letterSpacing: {
tighter: '-0.04em',
tightest: '-0.06em',
}
}
}
}
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
});



        import createGlobe from "https://cdn.skypack.dev/cobe";
  
        let phi = 0;
        let canvas = document.getElementById("cobe");
  
        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: 1000,
            height: 1000,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 1.2,
            scale: 1,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [1, 1, 1], // White base
            markerColor: [1, 0.31, 0], // Brand Orange #FF4F00
            glowColor: [0.95, 0.95, 0.95],
            offset: [0, 0],
            markers: [
                { location: [40.7128, -74.006], size: 0.05 }, // New York
                { location: [41.0082, 28.9784], size: 0.05 }, // Istanbul
                { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka
            ],
            onRender: (state) => {
                // Called on every animation frame.
                state.phi = phi;
                phi += 0.003;
            }
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#">
<div className="flex items-center justify-center text-brand-orange transition-transform group-hover:rotate-12">
<iconify-icon icon="solar:infinity-bold" width="28"></iconify-icon>
</div>
<span className="font-display font-bold text-2xl tracking-tight text-slate-900 uppercase">WPPOOL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-orange transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-brand-orange transition-colors" href="#products">Products</a>
<a className="hover:text-brand-orange transition-colors" href="#team">Team</a>
<a className="hover:text-brand-orange transition-colors" href="#culture">Culture</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#join">
                    Apply Now
                </a>
<button className="md:hidden text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-12 lg:pt-48 lg:pb-20 overflow-hidden bg-slate-50/50">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="reveal-up text-center lg:text-left z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-xs font-bold mb-8 tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
</span>
                        Optimizing the Web
                    </div>
<h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                        We solve problems <br/>
<span className="text-gradient">with WordPress.</span>
</h1>
<p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-light">
                        WPPOOL is a global team of experts delivering high-performance WordPress solutions. We build plugins, optimize sites, and help businesses scale without limits.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
<button className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-orange text-white font-semibold text-sm hover:shadow-xl hover:shadow-brand-orange/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
<span>Apply Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                            Let’s Join
                        </button>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-slate-800" icon="simple-icons:wordpress" width="28"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:woocommerce" width="28"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:php" width="28"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:react" width="28"></iconify-icon>
</div>
</div>

<div className="reveal-up stagger-delay-1 relative h-[500px] w-full flex items-center justify-center z-10">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/20 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="relative w-full max-w-[500px] aspect-square">
<canvas className="w-full h-full" height="1000" id="cobe" width="1000"></canvas>

<div className="absolute bottom-12 left-0 md:left-4 bg-white/90 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 animate-[bounce_4s_infinite] z-20">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:global-bold"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-slate-800">Global Presence</div>
<div className="text-xs text-slate-500">Active across 3 continents</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20 reveal-up">
<h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                    Building, Growing, Scaling
                </h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">
                    We’ve evolved from a small plugin developer to a global WordPress powerhouse.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 group reveal-up stagger-delay-1">
<div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500 h-full flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:code-square-bold" width="32"></iconify-icon>
</div>
<div className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full mb-4">FOUNDATION</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">The Beginning</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Started with a single plugin, focusing on code quality and user experience above all else.
                        </p>
</div>
</div>

<div className="relative z-10 group reveal-up stagger-delay-2">
<div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500 h-full flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:users-group-rounded-bold" width="32"></iconify-icon>
</div>
<div className="bg-orange-50 text-brand-orange text-[10px] font-bold px-3 py-1 rounded-full mb-4">EXPANSION</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Global Talent</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Expanded our team across 3 continents, hiring top-tier talent from USA, Turkey, and Bangladesh.
                        </p>
</div>
</div>

<div className="relative z-10 group reveal-up stagger-delay-3">
<div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500 h-full flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
<iconify-icon icon="solar:rocket-bold" width="32"></iconify-icon>
</div>
<div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4">FUTURE</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Ecosystem Leader</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                            Building a comprehensive ecosystem of tools that power over 100,000+ businesses worldwide.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
<div>
<h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">Meet the Minds</h2>
<p className="text-slate-500 text-lg max-w-xl">
                        A diverse team of engineers, designers, and strategists working from every corner of the globe.
                    </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-100">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-slate-100">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 reveal-up">

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-2xl bg-slate-200 mb-4 relative">
<img alt="Member" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://i.pravatar.cc/400?img=11"/>
<div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon className="text-brand-orange text-sm block" icon="simple-icons:linkedin"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900 leading-tight">Sarah Jenkins</h3>
<p className="text-sm text-slate-500 mt-1">Head of Engineering</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-2xl bg-slate-200 mb-4 relative">
<img alt="Member" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://i.pravatar.cc/400?img=33"/>
<div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon className="text-brand-orange text-sm block" icon="simple-icons:linkedin"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900 leading-tight">David Chen</h3>
<p className="text-sm text-slate-500 mt-1">Senior Product Designer</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-2xl bg-slate-200 mb-4 relative">
<img alt="Member" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://i.pravatar.cc/400?img=68"/>
<div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon className="text-brand-orange text-sm block" icon="simple-icons:linkedin"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900 leading-tight">Michael Ross</h3>
<p className="text-sm text-slate-500 mt-1">Backend Lead</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden rounded-2xl bg-slate-200 mb-4 relative">
<img alt="Member" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://i.pravatar.cc/400?img=49"/>
<div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
<iconify-icon className="text-brand-orange text-sm block" icon="simple-icons:linkedin"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900 leading-tight">Emily Watson</h3>
<p className="text-sm text-slate-500 mt-1">Marketing Director</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="culture">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal-up order-2 lg:order-1">
<div className="w-8 h-12 rounded-full bg-slate-100 mb-8"></div>
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                        Where Remote Work <br/>
                        Feels Like Home
                    </h2>
<p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                        We value flexibility, autonomy, and deep work. At WPPOOL, we’ve created an environment where talented people from all over the world come together to collaborate, innovate, and grow. From virtual coffee breaks to project sprints, we make remote work feel connected.
                    </p>
<div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=12"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=32"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=41"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                +40
                            </div>
</div>
<a className="text-sm font-semibold text-slate-900 hover:text-brand-orange transition-colors flex items-center gap-2" href="#join">
                            Join the family
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-up stagger-delay-1 order-1 lg:order-2">
<div className="grid grid-cols-2 gap-5 h-[500px] md:h-[600px]">

<div className="row-span-2 relative rounded-3xl overflow-hidden group">
<img alt="Remote Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>

<div className="relative rounded-3xl overflow-hidden group">
<img alt="Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="bg-brand-blue rounded-3xl p-8 flex flex-col justify-end text-white relative overflow-hidden group">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
<div className="relative z-10">
<iconify-icon className="text-3xl mb-auto absolute top-0 left-0" icon="solar:heart-bold"></iconify-icon>
<div className="mt-12">
<div className="text-5xl font-display font-bold tracking-tight mb-1">100%</div>
<div className="text-sm font-medium opacity-90">Employee Satisfaction</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Our Journey</h2>
<p className="text-slate-500 text-lg">From a single commit to a global ecosystem.</p>
</div>

<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center justify-between group reveal-up">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-4 md:mb-0">
<span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold mb-2">CURRENT</span>
<h3 className="text-xl font-bold text-slate-900">Ecosystem Expansion</h3>
<p className="text-slate-500 text-sm mt-2">Reaching 100k+ active installations across all products.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-orange rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<span className="text-4xl font-display font-bold text-slate-200 group-hover:text-brand-orange transition-colors duration-300">2024</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center justify-between group reveal-up stagger-delay-1">
<div className="md:w-1/2 md:pl-12 pl-12 mb-4 md:mb-0">
<h3 className="text-xl font-bold text-slate-900">Global Team Growth</h3>
<p className="text-slate-500 text-sm mt-2">Expanded to 50+ remote engineers and designers across 12 countries.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-slate-300 rounded-full shadow-sm -translate-x-1/2 z-10 group-hover:border-brand-orange transition-colors"></div>
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<span className="text-4xl font-display font-bold text-slate-200 group-hover:text-slate-400 transition-colors duration-300">2022</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group reveal-up stagger-delay-2">
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0 mb-4 md:mb-0">
<h3 className="text-xl font-bold text-slate-900">Enterprise Solutions</h3>
<p className="text-slate-500 text-sm mt-2">Launched enterprise-grade support and custom development services.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-slate-300 rounded-full shadow-sm -translate-x-1/2 z-10 group-hover:border-brand-orange transition-colors"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<span className="text-4xl font-display font-bold text-slate-200 group-hover:text-slate-400 transition-colors duration-300">2020</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse items-center justify-between group reveal-up stagger-delay-3">
<div className="md:w-1/2 md:pl-12 pl-12 mb-4 md:mb-0">
<h3 className="text-xl font-bold text-slate-900">Inception</h3>
<p className="text-slate-500 text-sm mt-2">Founded with a vision to simplify WordPress for non-tech users.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-slate-300 rounded-full shadow-sm -translate-x-1/2 z-10 group-hover:border-brand-orange transition-colors"></div>
<div className="md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
<span className="text-4xl font-display font-bold text-slate-200 group-hover:text-slate-400 transition-colors duration-300">2019</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="join">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
<div>
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">We’re Hiring!</h2>
<p className="text-slate-500 text-lg max-w-xl">
                        Join a team where location doesn't matter, but impact does. Become a WPPOOLian today.
                    </p>
</div>
<button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-bold hover:border-brand-orange hover:text-brand-orange transition-all flex items-center gap-2">
                    View all 12 positions
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 reveal-up stagger-delay-1 flex flex-col justify-between h-64" href="#">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:monitor-smartphone-bold" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">Remote</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-orange transition-colors">Senior React Developer</h3>
<p className="text-slate-500 text-sm">Engineering Team</p>
</div>
<div className="flex items-center text-sm font-semibold text-slate-900 gap-2">
                        Apply Now <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 reveal-up stagger-delay-2 flex flex-col justify-between h-64" href="#">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:pallete-2-bold" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">Remote</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-orange transition-colors">Product Designer</h3>
<p className="text-slate-500 text-sm">Design Team</p>
</div>
<div className="flex items-center text-sm font-semibold text-slate-900 gap-2">
                        Apply Now <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 reveal-up stagger-delay-3 flex flex-col justify-between h-64" href="#">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:document-add-bold" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">Remote</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-orange transition-colors">Technical Writer</h3>
<p className="text-slate-500 text-sm">Marketing Team</p>
</div>
<div className="flex items-center text-sm font-semibold text-slate-900 gap-2">
                        Apply Now <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl shadow-slate-200/50 reveal-up">
<iconify-icon className="text-brand-orange text-5xl mb-6 animate-bounce" icon="solar:chat-round-like-bold"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Ready to make an impact?</h2>
<p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto font-light">
                    Join a culture that celebrates autonomy, mastery, and purpose. We are building the future of WordPress, one commit at a time.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-10 py-4 rounded-full bg-brand-orange text-white font-bold hover:shadow-xl hover:shadow-brand-orange/20 hover:scale-105 transition-all duration-300">
                        Become a WPPOOLian
                    </button>
<button className="px-10 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all duration-300">
                        View Benefits
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6 text-white">
<iconify-icon icon="solar:infinity-bold" width="24"></iconify-icon>
<span className="font-display font-bold text-2xl tracking-tight uppercase">WPPOOL</span>
</div>
<p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                        We deliver high-quality WordPress solutions for businesses worldwide. Innovating independently from USA, Turkey, and Bangladesh.
                    </p>
</div>
<div>
<h4 className="font-bold mb-6 text-white">Company</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-brand-orange transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-white">Products</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-brand-orange transition-colors" href="#">WP Dark Mode</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Sheets to WP</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Chat Widgets</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-white">Social</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-2"><iconify-icon icon="simple-icons:twitter"></iconify-icon> <a className="hover:text-brand-orange transition-colors" href="#">Twitter</a></li>
<li className="flex items-center gap-2"><iconify-icon icon="simple-icons:linkedin"></iconify-icon> <a className="hover:text-brand-orange transition-colors" href="#">LinkedIn</a></li>
<li className="flex items-center gap-2"><iconify-icon icon="simple-icons:facebook"></iconify-icon> <a className="hover:text-brand-orange transition-colors" href="#">Facebook</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2024 WPPOOL. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
