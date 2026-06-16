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
geist: ['Geist', 'sans-serif'],
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'loading-bar': 'loading 1.5s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
},
loading: {
'0%': { transform: 'translateX(-100%)' },
'50%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



    // Remove preloader when loaded
    window.onload = function() {
        const loader = document.getElementById('preloader');
        const body = document.body;
        
        // Slight delay to ensure smooth transition
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            body.classList.add('loaded');
        }, 800);
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="preloader">
<div className="flex flex-col items-center gap-4">
<div className="loader-bar">
<div className="loader-progress"></div>
</div>
<p className="text-xs text-neutral-500 font-geist tracking-widest uppercase">Loading Experience</p>
</div>
</div>

<div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-[#0b0b0c]"></div>

<div className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full bg-emerald-500/5 blur-[120px] animate-pulse-slow will-change-transform"></div>
<div className="absolute top-[40%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse-slow delay-1000 will-change-transform"></div>
<div className="absolute bottom-[-10%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-fuchsia-500/5 blur-[100px] animate-pulse-slow delay-700 will-change-transform"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0b0c]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex group items-center">
<a className="group-hover:opacity-80 transition-opacity text-lg font-semibold text-white tracking-tight font-geist" href="#">NMD</a>
</div>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-geist" href="#about">About</a>
<a className="px-4 py-2 rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-geist" href="#services">Services</a>
<a className="px-4 py-2 rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-geist" href="#hire-me">Hire Me</a>
<a className="px-4 py-2 rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-geist" href="#contact">Contact</a>
</div>
<div className="flex items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 group text-sm font-medium text-neutral-100 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur" href="#contact">
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:send" width="16"></iconify-icon>
<span className="hidden sm:inline font-geist">Get in touch</span>
</a>
</div>
</div>
</div>
</nav>

<header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40" id="about">
<div className="animate-on-load animate-fade-in-up">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 shadow-sm backdrop-blur hover:bg-white/[0.05] transition-colors cursor-default">
<iconify-icon className="text-emerald-400" icon="lucide:badge-check" width="16"></iconify-icon>
<span className="text-[13px] leading-none text-neutral-300 font-geist">Expert Designer</span>
</div>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-neutral-100 tracking-tighter font-geist mt-6">Naseem Muneer Baloch <br/> <span className="text-neutral-500 font-geist tracking-tighter">Your Creative Partner.</span></h1>
<p className="mt-6 text-lg text-neutral-400 max-w-2xl font-geist leading-relaxed font-light">
            I craft digital experiences that merge functionality with bold aesthetics. Specialized in UI/UX design and interaction for forward-thinking brands.
        </p>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<section className="animate-on-load animate-fade-in-up delay-100 relative group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl -z-10"></div>
<div className="relative shadow-2xl overflow-hidden border border-white/10 rounded-3xl backdrop-blur-xl bg-black/40 hover:border-white/20 transition-all duration-500">
<div className="p-3 sm:p-4">
<div className="relative rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
<div className="bg-gradient-to-t from-black/60 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Portrait" className="sm:h-96 transform group-hover:scale-105 transition-transform duration-700 ease-out w-full h-80 object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7808e4e8-7626-4824-9cc1-6e20e2ef5124_1600w.png"/>
<div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
<span className="text-[12px] text-neutral-200 font-geist font-medium">Available for work</span>
</div>
</div>
<div className="px-2 pt-6 pb-2">
<h2 className="text-3xl font-medium text-neutral-100 tracking-tight font-geist">Hello, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">Naseem Muneer Baloch</span></h2>
<p className="mt-2 text-sm text-neutral-400 font-geist leading-relaxed">
                    UI/UX Interaction Designer based in Berlin. Obsessed with detail and user delight.
                </p>
<div className="mt-6 flex items-center gap-3">
<a className="group/icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white text-neutral-400 hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="group/icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white text-neutral-400 hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="group/icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white text-neutral-400 hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:dribbble" width="18"></iconify-icon>
</a>
<a className="group/icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white text-neutral-400 hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
<div className="my-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
<div className="mb-2">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-geist" href="#contact">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
                    Connect with me
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="animate-on-load animate-fade-in-up delay-200 relative h-full flex flex-col">
<div className="flex-1 relative shadow-2xl sm:p-8 border border-white/10 rounded-3xl p-6 backdrop-blur-xl bg-black/40 hover:border-white/20 transition-colors duration-500">
<p className="leading-relaxed text-lg font-light text-neutral-300 font-geist">I'm Naseem Muneer Baloch, a dedicated UI/UX Designer based in the vibrant city of Islamabad, Pakistan. I specialize in blending creative design with seamless technical execution to craft exceptional digital experiences.</p>
<div className="mt-8 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

<div className="mt-8">
<h3 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4 font-geist">Expertise</h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-neutral-300 font-geist hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">Product Design</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-neutral-300 font-geist hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">UX Research</span>
<span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-neutral-300 font-geist hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">Interaction</span>
<span className="inline-flex items-center hover:bg-white/10 hover:border-white/20 transition-colors cursor-default text-sm text-neutral-300 font-geist border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3">React js</span>
<span className="inline-flex items-center hover:bg-white/10 hover:border-white/20 transition-colors cursor-default text-sm text-neutral-300 font-geist border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3">Graphics</span>
<span className="inline-flex items-center hover:bg-white/10 hover:border-white/20 transition-colors cursor-default text-sm text-neutral-300 font-geist border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3">Web Design</span>
</div>
</div>
<div className="mt-8 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

<div className="mt-8 space-y-4">
<h3 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4 font-geist">Career</h3>
<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 flex items-center justify-between hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-emerald-400" icon="lucide:briefcase" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist group-hover:text-white transition-colors">Freelance</p>
<p className="text-xs text-neutral-500 font-geist">GreenLeaf Co</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-geist font-medium">2021</span>
</div>
<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 flex items-center justify-between hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-cyan-500/10 ring-1 ring-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-cyan-400" icon="lucide:layout" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist group-hover:text-white transition-colors">UX/UI Designer</p>
<p className="text-xs text-neutral-500 font-geist">Figma - Adobe XD</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-geist font-medium">2022</span>
</div>
<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 flex items-center justify-between hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-fuchsia-500/10 ring-1 ring-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-fuchsia-400" icon="lucide:package" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist group-hover:text-white transition-colors">Product Designer</p>
<p className="text-xs text-neutral-500 font-geist">PixelCraft Studios</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-geist font-medium">2023</span>
</div>
<div className="group relative rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 flex items-center justify-between hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 cursor-default">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-amber-500/10 ring-1 ring-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-amber-400" icon="lucide:palette" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist group-hover:text-white transition-colors">Graphic Designer</p>
<p className="text-xs text-neutral-500 font-geist">VistaWorks</p>
</div>
</div>
<span className="text-xs text-neutral-500 font-geist font-medium">2024</span>
</div>
</div>
</div>
</section>
</div>

<section className="mt-24 md:mt-32" id="services">
<div className="text-center mb-16 animate-on-load animate-fade-in-up delay-300">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 shadow-sm backdrop-blur mb-6 hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-cyan-400" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="text-[13px] leading-none text-neutral-300 font-geist">Design Suite</span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-5xl text-neutral-100 font-geist tracking-tighter font-medium">
          Creative <span className="text-neutral-500 font-geist tracking-tighter">Services</span>
</h2>
<p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-geist font-light">
          Explore a modern set of services crafted to elevate your product and brand presence across web and identity.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">

<div className="group relative animate-on-load animate-fade-in-up delay-300 lg:row-span-2 overflow-hidden border border-white/10 rounded-3xl backdrop-blur-xl bg-black/40 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
</div>
<div className="sm:p-8 flex flex-col h-full pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4 mb-2">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white/80" icon="lucide:layout-dashboard" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-geist tracking-tight font-medium">Website Design</h3>
</div>
<p className="text-sm sm:text-base text-neutral-400 font-geist mb-6 leading-relaxed">
                High-performing, user-centered websites that accelerate growth and feel unmistakably yours.
            </p>
<div className="mt-auto rounded-2xl overflow-hidden border border-white/10 bg-black/40 group-hover:border-white/20 transition-colors">
<div className="overflow-hidden">
<img alt="Website design showcase" className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13da3854-7f03-4324-aa3e-de4be61d5219_1600w.jpg"/>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="overflow-hidden rounded-xl border border-white/10">
<img alt="UI concept" className="aspect-[4/3] w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b10aa014-c79d-4be2-a1af-8d9ffc0c1c13_800w.jpg"/>
</div>
<div className="overflow-hidden rounded-xl border border-white/10">
<img alt="Interface detail" className="aspect-[4/3] w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 delay-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcc3dc68-e628-44c5-a5b9-748d563482be_800w.jpg"/>
</div>
<div className="overflow-hidden rounded-xl border border-white/10">
<img alt="Product view" className="aspect-[4/3] w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 delay-200" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73d2df6e-f2df-4c10-b029-1d4f0dcb8fce_800w.jpg"/>
</div>
</div>
</div>
</div>

<div className="group relative animate-on-load animate-fade-in-up delay-400 border border-white/10 rounded-3xl backdrop-blur-xl bg-black/40 hover:border-white/20 transition-all duration-500">
<div className="p-6 sm:p-8 h-full flex flex-col">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white/80" icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-geist tracking-tight font-medium">Logo Systems</h3>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-geist flex-1">
                Distinctive, scalable identity marks with a full system of rules and assets for consistent brand expression.
            </p>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-200 group-hover:text-white transition-colors" icon="lucide:shapes" width="32"></iconify-icon>
</div>
<div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-200 group-hover:text-white transition-colors" icon="lucide:beaker" width="32"></iconify-icon>
</div>
<div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-200 group-hover:text-white transition-colors" icon="lucide:badge-check" width="32"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative animate-on-load animate-fade-in-up delay-500 border border-white/10 rounded-3xl backdrop-blur-xl bg-black/40 hover:border-white/20 transition-all duration-500">
<div className="p-6 sm:p-8 h-full flex flex-col">
<div className="flex gap-4 items-center">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white/80" icon="lucide:mouse-pointer-2" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-geist tracking-tight font-medium">Prototype Design</h3>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-geist flex-1">
                Clickable prototypes and motion studies that clarify flows, validate ideas, and speed up decision‑making.
            </p>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 group-hover:border-white/20 transition-colors">
<img alt="Prototype 1" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f339853f-12ea-4f0a-b674-23dcc3451cfd_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 group-hover:border-white/20 transition-colors">
<img alt="Prototype 2" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500 delay-75" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b99e38d-cc88-41af-aa28-8ab79a6fd05f_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 group-hover:border-white/20 transition-colors">
<img alt="Prototype 3" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500 delay-150" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/474b0095-9f5a-4a6c-a0df-7e4db608b55d_800w.jpg"/>
</div>
</div>
</div>
</div>

<div className="group relative animate-on-load animate-fade-in-up delay-500 lg:col-span-2 border border-white/10 rounded-3xl backdrop-blur-xl bg-black/40 hover:border-white/20 transition-all duration-500">
<div className="p-6 sm:p-8">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon className="text-white/80" icon="lucide:palette" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-geist tracking-tight font-medium">Graphic Design</h3>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-400 font-geist max-w-xl">
                Bold visuals across campaigns, decks, and social that capture attention and communicate with clarity.
            </p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
<img alt="Poster graphic" className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae731e89-9af1-4914-82cc-9039bb5c090d_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
<img alt="3D render" className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition-transform duration-700 delay-75" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa077b0f-a28c-4e66-9c85-7e26d5952d7b_800w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
<img alt="Scenic minimal" className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition-transform duration-700 delay-150" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d2759a4-4221-4752-893b-a860ba56ef2c_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32 animate-on-load animate-fade-in-up delay-200" id="hire-me">
<div className="mb-10 text-center sm:text-left sm:flex sm:items-end sm:justify-between border-b border-white/10 pb-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white font-geist">Available for Hire</h2>
<p className="mt-2 text-neutral-400 font-geist">Choose a package or platform that suits your workflow.</p>
</div>
<div className="hidden sm:block">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Accepting New Projects
                </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
<div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400" icon="lucide:layout" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-geist">Web Design</h3>
<p className="mt-2 text-sm text-neutral-400 font-geist leading-relaxed">
                    Custom responsive websites, landing pages, and web apps tailored to convert and engage.
                </p>
<ul className="mt-6 space-y-2 text-sm text-neutral-300 font-geist">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> High-Fidelity Mockups</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> Interactive Prototypes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> Design Systems</li>
</ul>
</div>

<div className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
<div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-geist">Mobile Design</h3>
<p className="mt-2 text-sm text-neutral-400 font-geist leading-relaxed">
                    User-friendly interfaces for iOS and Android applications with a focus on usability.
                </p>
<ul className="mt-6 space-y-2 text-sm text-neutral-300 font-geist">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> App UI/UX</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> iOS &amp; Android Guidelines</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> Wireframing</li>
</ul>
</div>

<div className="group p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
<div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-orange-400" icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-geist">Graphics Design</h3>
<p className="mt-2 text-sm text-neutral-400 font-geist leading-relaxed">
                    Visual branding assets including logos, social media kits, and marketing materials.
                </p>
<ul className="mt-6 space-y-2 text-sm text-neutral-300 font-geist">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> Brand Identity</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> Social Media Posts</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="lucide:check" width="14"></iconify-icon> Marketing Assets</li>
</ul>
</div>
</div>

<div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-900 to-black p-1">
<div className="rounded-[22px] bg-[#0b0b0c] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left max-w-lg">
<h3 className="text-xl font-medium text-white font-geist">Ready to collaborate?</h3>
<p className="mt-2 text-sm text-neutral-400 font-geist">
                        Hire me securely through your preferred freelance platform or contact me directly to discuss custom requirements.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

<a className="flex-1 sm:flex-none justify-center group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1dbf73]/10 hover:bg-[#1dbf73]/20 px-5 py-3 text-sm font-medium text-[#1dbf73] transition-all duration-200" href="#">
<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon>
<span className="font-geist">Fiverr</span>
</a>

<a className="flex-1 sm:flex-none justify-center group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#14a800]/10 hover:bg-[#14a800]/20 px-5 py-3 text-sm font-medium text-[#14a800] transition-all duration-200" href="#">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
<span className="font-geist">Upwork</span>
</a>

<a className="flex-1 sm:flex-none justify-center group inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-all duration-200" href="#contact">
<span className="font-geist">Contact Directly</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="mt-24 md:mt-32 mb-20 animate-on-load animate-fade-in-up delay-200" id="contact">
<div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:p-8 border border-white/10 rounded-2xl p-6 backdrop-blur-xl bg-gradient-to-r from-white/[0.03] to-transparent hover:border-white/20 transition-colors duration-500 justify-between">
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-geist">Start a project</h3>
<p className="text-sm text-neutral-400 mt-2 font-geist max-w-md">Tell us about your goals and timelines. We'll reply within 1–2 business days.</p>
</div>
<a className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-neutral-100 hover:bg-white hover:text-black transition-all duration-300" href="mailto:naseembaloch7524@gmail.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
<span className="font-geist">naseembaloch7524@gmail.com</span>
<iconify-icon className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="relative border-t border-white/10 bg-[#0b0b0c]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="md:col-span-2">
<h3 className="text-xl font-semibold tracking-tight text-white mb-4 font-geist">Naseem Muneer Baloch</h3>
<p className="text-sm text-neutral-400 max-w-md mb-6 font-geist leading-relaxed">
            UI/UX Designer creating exceptional digital experiences with seamless technical execution. Based in Islamabad, Pakistan.
          </p>
<div className="flex items-center gap-3">
<a className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:dribbble" width="16"></iconify-icon>
</a>
<a className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-2 font-geist">Services</h4>
<ul className="space-y-2.5 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist inline-block hover:translate-x-1 duration-200" href="#services">Website Design</a></li>
<li><a className="hover:text-white transition-colors font-geist inline-block hover:translate-x-1 duration-200" href="#services">Logo Systems</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist inline-block hover:translate-x-1 duration-200" href="#services">Prototype Design</a></li>
<li><a className="hover:text-white transition-colors font-geist inline-block hover:translate-x-1 duration-200" href="#services">Graphic Design</a></li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-white mb-2 font-geist">Contact</h4>
<ul className="space-y-2.5 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors font-geist" href="mailto:naseembaloch7524@gmail.com">naseembaloch7524@gmail.com</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#hire-me">Hire Me</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-geist">
          © 2024 Naseem Muneer Baloch. All rights reserved.
        </p>
<div className="flex items-center gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
