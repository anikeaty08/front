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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
},
slate: {
850: '#151f32',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-100px', opacity: '0' },
'20%': { opacity: '1' },
'80%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



        const body = document.getElementById('main-body');
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            body.style.setProperty('--mouse-x', `${x}px`);
            body.style.setProperty('--mouse-y', `${y}px`);

            spotlightGroups.forEach(group => {
                const rect = group.getBoundingClientRect();
                const relX = x - rect.left;
                const relY = y - rect.top;
                
                group.style.setProperty('--mouse-x-rel', `${relX}px`);
                group.style.setProperty('--mouse-y-rel', `${relY}px`);
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/crystalball-de222de54d6fc4752fa850b54fb654de/" width="100%"></iframe></div></div>


<div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full h-full">
<div className="w-full h-full max-w-7xl grid grid-cols-6 md:grid-cols-12 border-x border-slate-100">

<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-20 -right-[1px] w-[2px] h-40 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-beam" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
</div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-32 -right-[1px] w-[2px] h-60 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-beam" style={{animationDelay: '0s', animationDuration: '10s'}}></div>
</div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-40 -right-[1px] w-[2px] h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-beam" style={{animationDelay: '4s', animationDuration: '8s'}}></div>
</div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-20 -right-[1px] w-[2px] h-48 bg-gradient-to-b from-transparent via-sky-500 to-transparent animate-beam" style={{animationDelay: '1.5s', animationDuration: '9s'}}></div>
</div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden">
<div className="absolute -top-24 -right-[1px] w-[2px] h-40 bg-gradient-to-b from-transparent via-blue-600 to-transparent animate-beam" style={{animationDelay: '5s', animationDuration: '12s'}}></div>
</div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden"></div>
<div className="border-r border-slate-100 h-full hidden md:block relative overflow-hidden"></div>

<div className="absolute top-32 w-full h-px bg-slate-100"></div>
<div className="absolute top-96 w-full h-px bg-slate-100"></div>
</div>
</div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mix-blend-multiply" style={{background: 'radial-gradient(1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(224, 242, 254, 0.4), transparent 50%)'}}>
</div>

<div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 z-50"></div>

<nav className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md shrink-0">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<img alt="Sentvia" className="w-auto h-8 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d70f3109-9926-4139-825b-6b41d6f290bf_320w.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group" href="#">
                    Products
                    <iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Developers</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
                    Log in
                </a>
<button className="relative rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden group">
<span className="relative z-10 uppercase">Contact Sales</span>
</button>
</div>
</div>
</nav>

<main className="z-10 pt-12 relative">

<section className="flex flex-col w-full max-w-7xl mt-20 md:mt-24 mr-auto mb-24 md:mb-32 ml-auto px-6 relative" id="hero">

<div className="w-full flex justify-start mb-8 spotlight-group relative animate-on-scroll animate" style={{'--mouse-x-rel': '1034px', '--mouse-y-rel': '1101px'}}>
<div className="-inset-px spotlight-border transition-opacity duration-300 opacity-0 w-fit rounded-full absolute" style={{background: 'radial-gradient(120px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(14, 165, 233, 0.3), transparent)'}}></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center w-full">

<div className="relative z-20 animate-on-scroll animate" style={{animationDelay: '0.1s'}}>
<div className="flex flex-col gap-2">
<h1 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic text-slate-900 tracking-tight font-serif">
<span className="block" style={{}}>Stablecoins Simplified.</span>
<span className="block not-italic font-light text-slate-400 tracking-tighter" style={{}}>Send. Receive. Convert.</span>
</h1>
</div>
</div>

<div className="relative z-20 md:text-right animate-on-scroll animate" style={{animationDelay: '0.2s'}}>
<div className="flex flex-col gap-2 md:items-end">
<h2 className="md:text-6xl lg:text-[78px] leading-[0.9] text-5xl italic text-slate-900 tracking-tight font-serif">
<span className="block not-italic md:text-6xl text-4xl font-light text-slate-400 tracking-tighter mb-3" style={{}}></span>
<span className="block" style={{}}>Secure global solutions for stablecoin payments.</span>
</h2>
</div>
</div>
</div>

<div className="mt-12 md:mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end animate-on-scroll animate" style={{animationDelay: '0.3s'}}>

<div className="group relative rounded-2xl bg-white border border-slate-200 p-6 md:p-8 spotlight-group spotlight-card overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{'--mouse-x-rel': '1034px', '--mouse-y-rel': '665px'}}>
<div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 spotlight-border transition-opacity duration-300 border border-transparent" style={{background: 'border-box radial-gradient(300px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(14, 165, 233, 0.2), transparent) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
<div className="absolute left-0 top-6 w-1 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-r-full"></div>
<p className="md:text-lg leading-relaxed z-10 text-base italic text-slate-600 font-serif max-w-lg relative" style={{}}>Simplify your payment operations through next-generation payment technology, stablecoins.</p>
<div className="mt-6 flex gap-3 items-center">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-white bg-slate-800 flex items-center justify-center text-[8px] text-white">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="h-6 w-6 rounded-full border border-white bg-blue-600 flex items-center justify-center text-[8px] text-white">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="h-6 w-6 rounded-full border border-white bg-cyan-600 flex items-center justify-center text-[8px] text-white">
<iconify-icon className="text-sm" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<span className="text-[10px] text-slate-400 font-mono tracking-wider">TRUSTED_BY_FINANCE_LEADERS</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-4 z-10 pl-2 relative justify-end">

<button className="group/btn rounded-full relative">
<div className="-inset-1 group-hover/btn:opacity-40 transition duration-500 bg-blue-500/30 opacity-20 rounded-full absolute blur"></div>
<div className="flex gap-3 active:translate-y-[1px] transition-all duration-150 text-white bg-slate-900 h-14 rounded-full px-8 relative shadow-lg hover:bg-slate-800 items-center overflow-hidden">
<span className="z-10 text-lg font-semibold tracking-tight relative" style={{}}>Sign Up</span>
<iconify-icon className="relative z-10 text-blue-300 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</button>

<button className="h-14 text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all rounded-full px-8 flex items-center justify-center group shadow-sm">
<span className="text-base font-medium tracking-tight" style={{}}>Learn More</span>
<iconify-icon className="ml-2 text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:book-linear"></iconify-icon>
</button>
</div>
</div>

<div className="z-20 w-full mt-20 relative animate-on-scroll animate" style={{animationDelay: '0.4s'}}>
<p className="uppercase text-xs font-semibold text-slate-400 tracking-widest font-mono text-center mb-10">Powering the next generation economy</p>
<div className="relative flex overflow-hidden group marquee-mask">
<div className="flex animate-marquee whitespace-nowrap min-w-full gap-x-20 gap-y-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-slate-800" icon="simple-icons:stripe" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:shopify" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:paypal" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:plaid" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:wise" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:revolut" width="80"></iconify-icon>
</div>
<div className="flex animate-marquee whitespace-nowrap min-w-full absolute top-0 left-full pl-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-slate-800" icon="simple-icons:stripe" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:shopify" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:paypal" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:plaid" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:wise" width="80"></iconify-icon>
<iconify-icon className="text-slate-800" icon="simple-icons:revolut" width="80"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative items-center" id="features">

<div className="text-center max-w-2xl mx-auto px-6 mb-16 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 tracking-tight mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">Full Spectrum</span>
<span className="text-blue-600">Infrastructure</span>
</h2>
<p className="text-slate-500 text-lg font-light leading-relaxed">
                    Advanced primitives designed to elevate your commerce capabilities with pixel-perfect precision and bank-grade security.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">

<div className="group relative rounded-2xl bg-white border border-slate-200 p-6 spotlight-group overflow-hidden hover:border-blue-200 transition-colors duration-500 flex flex-col h-full shadow-sm animate-on-scroll" style={{animationDelay: '0.1s', '--mouse-x-rel': '1034px', '--mouse-y-rel': '44.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(56, 189, 248, 0.08), transparent 40%)'}}></div>

<div className="h-48 w-full mb-8 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden flex flex-col p-4 gap-3 select-none">

<div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200 shadow-sm relative z-10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<div className="h-1.5 w-12 bg-slate-200 rounded"></div>
</div>
<div className="h-1.5 w-8 bg-slate-100 rounded"></div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/60 border border-slate-200/60 relative z-10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
<div className="h-1.5 w-16 bg-slate-200 rounded"></div>
</div>
<div className="h-1.5 w-6 bg-slate-100 rounded"></div>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 border border-blue-100 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 z-20 shadow-lg">
<iconify-icon className="text-blue-500 text-xs" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[10px] font-mono text-blue-600 font-medium">SETTLED</span>
</div>
</div>
<div className="z-10 mt-auto relative">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-blue-600 border border-blue-100 bg-blue-50 px-2 py-0.5 rounded">01</span>
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors text-xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-2" style={{}}>Named IBAN</h3>
<p className="leading-relaxed text-sm text-slate-500" style={{}}>Model your financial data to fit specific settlement needs with immutable, double-entry logging out of the box.</p>
</div>
</div>

<div className="group relative rounded-2xl bg-white border border-slate-200 p-6 spotlight-group overflow-hidden hover:border-cyan-200 transition-colors duration-500 flex flex-col h-full shadow-sm animate-on-scroll" style={{animationDelay: '0.2s', '--mouse-x-rel': '615.34375px', '--mouse-y-rel': '44.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(6, 182, 212, 0.08), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden flex items-center justify-center p-4 select-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05),transparent_70%)]"></div>
<div className="w-full max-w-[180px] space-y-3 relative z-10">
<div className="flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 text-xs" icon="solar:graph-up-linear"></iconify-icon>
<div className="h-1.5 w-12 bg-slate-200 rounded"></div>
</div>
<div className="text-[10px] text-cyan-600 font-mono">+4.2%</div>
</div>
<div className="flex gap-2">
<div className="h-6 w-full bg-white border border-slate-200 rounded-md flex items-center px-2">
<div className="h-1 w-8 bg-slate-200 rounded"></div>
</div>
<div className="h-6 w-8 bg-cyan-50 border border-cyan-100 rounded-md flex items-center justify-center">
<iconify-icon className="text-cyan-500 text-xs" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-cyan-600 border border-cyan-100 bg-cyan-50 px-2 py-0.5 rounded">02</span>
<iconify-icon className="text-slate-400 group-hover:text-cyan-500 transition-colors text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-2" style={{}}>Fiat and Stablecoins</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Aggregate and visualize treasury data to discern patterns and gain valuable insights into your cash flows.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl bg-white border border-slate-200 p-6 spotlight-group overflow-hidden hover:border-indigo-200 transition-colors duration-500 flex flex-col h-full shadow-sm animate-on-scroll" style={{animationDelay: '0.3s', '--mouse-x-rel': '196.671875px', '--mouse-y-rel': '44.5px'}}>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(99, 102, 241, 0.08), transparent 40%)'}}></div>
<div className="h-48 w-full mb-8 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden flex items-center justify-center p-6 select-none">
<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative w-full h-full border border-dashed border-indigo-200 rounded-lg flex flex-col justify-between p-3 bg-white/50">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-500 text-xs font-mono">
                                    Select Range
                                </div>
</div>

<div className="absolute top-4 left-4 right-8 bottom-8 bg-indigo-500/5 border border-indigo-500/20 rounded border-dashed animate-pulse"></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-mono text-indigo-600 border border-indigo-100 bg-indigo-50 px-2 py-0.5 rounded">03</span>
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors text-xl" icon="solar:table-linear"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 font-medium mb-2 tracking-tight">Flexible Grid</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Sentvia Grid includes a customizable row selection API tailored to your specific data interaction needs.
                        </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative items-center" id="workflow">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">

<div className="flex flex-col justify-center animate-on-scroll">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-blue-500 text-sm" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-blue-600">Autonomous Workflow</span>
</div>
<h2 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight mb-6 leading-[0.95]">
<span className="italic block text-slate-400 font-light">Financial logic</span>
<span className="font-medium">without the chaos.</span>
</h2>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-12 max-w-lg">
                        Deterministic, auditable, and instant. Sentvia provides the primitive rails for machine-to-machine value transfer.
                    </p>

<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-16">
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-blue-500 bg-blue-50 p-1.5 rounded-md">
<iconify-icon className="text-lg" icon="solar:stopwatch-play-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-800 mb-1">Instant Settlement</div>
<div className="text-xs text-slate-500 font-light">Optimized for high-frequency</div>
</div>
</div>
<div className="flex items-start gap-3 group">
<div className="mt-0.5 text-blue-500 bg-blue-50 p-1.5 rounded-md">
<iconify-icon className="text-lg" icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-800 mb-1">SDK Native</div>
<div className="text-xs text-slate-500 font-light">Type-safe integration</div>
</div>
</div>
</div>

<div className="border-t border-slate-200 pt-10">
<div className="flex gap-16">
<div className="">
<div className="text-5xl font-serif italic text-slate-900 mb-2 tracking-tight">&lt; 50ms</div>
<div className="text-xs text-slate-400 font-mono uppercase tracking-widest">Latency</div>
</div>
<div>
<div className="text-5xl font-serif italic text-slate-900 mb-2 tracking-tight">$40B+</div>
<div className="text-xs text-slate-400 font-mono uppercase tracking-widest">Volume</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-12 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="w-full rounded-xl bg-white border border-slate-200 p-1 relative shadow-2xl overflow-hidden group/ui">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

<div className="flex overflow-hidden bg-slate-50 w-full h-[500px] rounded-lg">

<div className="flex-1 border-r border-slate-200 bg-white p-5 flex flex-col gap-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full border-2 border-slate-300"></div>
<span className="text-sm font-semibold text-slate-700">Pending</span>
<span className="text-xs font-mono text-slate-400 bg-slate-100 px-1.5 rounded">4</span>
</div>
<iconify-icon className="text-slate-400 cursor-pointer hover:text-slate-600 text-lg" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer shadow-sm group/card">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-slate-400">TX-944</span>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500">EH</div>
</div>
<div className="text-sm text-slate-800 font-medium mb-3 leading-snug">Rebalance Liquidity Pool A</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-amber-50 text-amber-600 border border-amber-100">High Priority</span>
</div>
</div>

<div className="p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer shadow-sm group/card">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-slate-400">TX-948</span>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500">SV</div>
</div>
<div className="text-sm text-slate-800 font-medium mb-3 leading-snug">Yield Harvest: USDC Vault</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center gap-1">
                                            Auto
                                        </span>
</div>
</div>
</div>

<div className="flex-1 p-5 flex flex-col gap-4 bg-slate-50/50">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500 text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">Settled</span>
<span className="text-xs font-mono text-slate-400 bg-white border border-slate-200 px-1.5 rounded">824</span>
</div>
</div>

<div className="p-4 rounded-lg bg-white/60 border border-slate-200 hover:bg-white transition-all cursor-pointer opacity-80 hover:opacity-100">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-slate-400">TX-902</span>
</div>
<div className="text-sm text-slate-400 font-medium mb-3 leading-snug line-through">Settle Batch #2891</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-[4px] text-[10px] font-medium bg-green-50 text-green-600 border border-green-100 flex items-center gap-1">
                                            Finalized
                                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="pl-2 relative">
<div className="absolute -left-6 top-0 text-6xl font-serif text-slate-200 -z-10 select-none">“</div>
<blockquote className="text-2xl font-serif text-slate-600 leading-relaxed mb-8 italic">
                            "Sentvia is the only infrastructure reliable enough for our autonomous trading swarms. It's not just faster; it's verified."
                        </blockquote>
<div className="flex items-center gap-5">
<div className="flex flex-col">
<span className="text-sm text-slate-900 font-bold">Elena K.</span>
<span className="text-sm text-slate-500">Lead Architect</span>
</div>
<div className="h-8 w-px bg-slate-200"></div>
<iconify-icon className="text-slate-400 opacity-80 hover:opacity-100 transition-opacity" height="30" icon="simple-icons:coinbase" width="96"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col w-full max-w-7xl z-20 mt-32 mr-auto mb-32 ml-auto px-6 relative" id="pricing">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-on-scroll">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-blue-500 text-sm" icon="solar:tag-price-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-blue-600">Transparent Pricing</span>
</div>
<h2 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight mb-6 leading-[0.95]">
<span className="italic block text-slate-400 font-light">Predictable costs</span>
<span className="font-medium">for infinite scale.</span>
</h2>
</div>
<button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-all">
<span className="text-sm font-medium">Contact Sales</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform text-slate-500" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="w-full overflow-x-auto pb-8 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="min-w-[900px]">
<div className="grid grid-cols-4 gap-4 mb-4 items-end">
<div className="p-6"></div> 

<div className="relative group">
<div className="relative bg-white border border-blue-200 border-b-0 rounded-t-2xl p-8 pb-12 flex flex-col gap-6 shadow-[0_-10px_30px_-15px_rgba(14,165,233,0.1)]">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-full"></div>
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm font-bold text-blue-700">Settlement</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-serif text-slate-900">$0.002</span>
<span className="text-xs text-slate-500 font-mono">/ TX</span>
</div>
<p className="text-xs text-slate-400 mt-2 font-light">Per validated transaction</p>
</div>
<button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
                                    Start Building
                                </button>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 border-b-0 rounded-t-2xl p-8 pb-12 flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity hover:bg-white">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
<span className="text-sm font-bold text-slate-600">Intelligence</span>
</div>
<div className="">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-serif text-slate-700">$0.04</span>
<span className="text-xs text-slate-400 font-mono">/ REQ</span>
</div>
<p className="text-xs text-slate-400 mt-2 font-light">Per inference request</p>
</div>
<button className="w-full py-3 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:border-slate-300 transition-colors">
                                Enable Access
                            </button>
</div>

<div className="bg-slate-50 border border-slate-200 border-b-0 rounded-t-2xl p-8 pb-12 flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity hover:bg-white">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
<span className="text-sm font-bold text-slate-600">Governance</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-serif text-slate-700">$299</span>
<span className="text-xs text-slate-400 font-mono">/ MO</span>
</div>
<p className="text-xs text-slate-400 mt-2 font-light">Fixed protocol fee</p>
</div>
<button className="w-full py-3 rounded-lg bg-white border border-slate-200 text-slate-600 font-medium text-sm hover:border-slate-300 transition-colors">
                                Deploy DAO
                            </button>
</div>
</div>

<div className="bg-white border-t border-slate-200 shadow-sm rounded-b-xl">

<div className="grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="p-6 text-sm text-slate-600 font-medium flex items-center gap-2">Throughput</div>
<div className="p-6 text-sm text-blue-700 bg-blue-50/50 border-x border-blue-100 font-mono">120k TPS</div>
<div className="p-6 text-sm text-slate-500 font-mono">On-Demand</div>
<div className="p-6 text-sm text-slate-500 font-mono">Unlimited</div>
</div>

<div className="grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="p-6 text-sm text-slate-600 font-medium">Finality Time</div>
<div className="p-6 text-sm text-blue-700 bg-blue-50/50 border-x border-blue-100 font-mono">&lt; 50ms</div>
<div className="p-6 text-sm text-slate-500 font-mono">~200ms</div>
<div className="p-6 text-sm text-slate-500 font-mono">1 block</div>
</div>

<div className="grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="p-6 text-sm text-slate-600 font-medium">Audit Trail</div>
<div className="p-6 flex justify-center bg-blue-50/50 border-x border-blue-100">
<iconify-icon className="text-blue-600 text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="p-6 flex justify-center">
<iconify-icon className="text-slate-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="p-6 flex justify-center">
<iconify-icon className="text-slate-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 overflow-hidden bg-slate-50">

<div className="absolute inset-0 bg-gradient-to-t from-white to-slate-50 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100 blur-[120px] rounded-full pointer-events-none opacity-60"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-mono mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Sentvia Mainnet is Live
                </div>
<h2 className="text-6xl md:text-[80px] font-serif text-slate-900 tracking-tight leading-none mb-8">
                    Start the <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-600">revolution.</span>
</h2>
<p className="text-xl text-slate-500 font-light max-w-2xl mb-12">
                    Join the network of over 4,000 autonomous agents processing billions in volume. The infrastructure for the machine economy is here.
                </p>
<div className="flex flex-col md:flex-row gap-4 items-center">
<button className="h-14 px-8 rounded-full bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2">
                        Get API Keys
                        <iconify-icon className="text-slate-400 text-lg" icon="solar:key-linear"></iconify-icon>
</button>
<button className="h-14 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-lg hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-2">
                        Read Documentation
                        <iconify-icon className="text-slate-400 text-lg" icon="solar:book-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="w-full border-t border-slate-200 bg-white pt-20 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">

<div className="col-span-2 md:col-span-4 flex flex-col gap-6">
<div className="flex items-center gap-2">
<img alt="Sentvia" className="h-6 w-auto grayscale opacity-80" src="https://top-media-uploads.s3.amazonaws.com/1731614741634.png"/>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                            The deterministic liquidity layer designed for the autonomous agent economy. Built for speed, verified by math.
                        </p>
<div className="flex gap-4 mt-2">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="simple-icons:github" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2 md:col-start-7">
<h4 className="text-sm font-semibold text-slate-900 mb-6">Product</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Settlement</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Intelligence</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Governance</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-semibold text-slate-900 mb-6">Resources</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Audit Reports</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-semibold text-slate-900 mb-6">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-slate-400 font-mono">
                        © 2024 Sentvia Inc. All rights reserved.
                    </div>
<div className="flex items-center gap-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
<iconify-icon className="text-slate-600" icon="simple-icons:ycombinator" width="20"></iconify-icon>
<iconify-icon className="text-slate-600" icon="simple-icons:soc" width="20"></iconify-icon>
<iconify-icon className="text-slate-600" icon="simple-icons:gdpr" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
