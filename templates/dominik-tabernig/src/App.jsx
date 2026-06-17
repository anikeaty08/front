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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
900: '#0B1121',
950: '#020617', // Main background
},
accent: {
400: '#60A5FA', // Vivid blue
500: '#3B82F6',
600: '#2563EB',
}
},
boxShadow: {
'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qPVvnWEWLLiJgYtSkKyB"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-600/10 rounded-full blur-[120px]"></div>

<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[100px]"></div>

<div className="absolute inset-0 opacity-[0.03] bg-[url(default)] bg-cover bg-center" style={{}}></div>
</div>

<div className="relative z-50 w-full border-b border-white/5 bg-navy-950/80 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">

<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
<div className="hover:bg-white transition-colors flex shadow-white/5 bg-slate-900/95 rounded px-3 py-1.5 shadow-lg items-center">
<img alt="PLUS University of Salzburg" className="h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff50a4ac-a8a7-43ff-bf26-80362192eaa2_320w.png" style={{}}/>
</div>
</div>

<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
<div className="hover:bg-white transition-colors flex shadow-white/5 bg-slate-900/95 rounded px-3 py-1.5 shadow-lg items-center">
<img alt="UBS Université Bretagne Sud" className="w-auto h-6 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c30f944d-868f-47a3-bb74-25ece561bc09_320w.png" style={{}}/>
</div>
</div>

<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
<div className="hover:bg-white transition-colors flex shadow-white/5 bg-slate-900/95 rounded px-3 py-1.5 shadow-lg items-center">
<img alt="Copernicus Master in Digital Earth" className="h-6 w-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1f74c8f-11a5-4a0f-b2f6-4fca89c69c23_800w.png"/>
</div>
</div>

<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
<div className="hover:bg-white transition-colors flex shadow-white/5 bg-slate-900/95 rounded px-3 py-1.5 shadow-lg items-center">
<img alt="New Partner Logo" className="h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/803891ce-4ab6-434a-9ead-228933a0d50b_320w.png" style={{}}/>
</div>
</div>
</div>
</div>

<nav className="sticky glass-nav transition-all duration-300 w-full z-40 top-0">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors border border-white/10">
<span className="font-semibold text-white text-sm">DT</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">About</a>

<a className="hover:text-white transition-colors flex items-center gap-1 text-sm font-medium text-slate-300" href="https://drive.google.com/file/d/1PSaRSaDAzWj84D9Yq4_AIHHCD9ewmQij/view?usp=sharing">
                    CV
                    <svg className="lucide lucide-external-link opacity-50 w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#coursework">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#projects">Portfolio</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<button className="md:hidden text-slate-300 hover:text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="min-h-[calc(100vh-140px)] flex flex-col text-center z-10 pt-20 pr-6 pb-20 pl-6 relative items-center justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8 animate-[fadeIn_1s_ease-out]">
<svg className="lucide lucide-sparkles w-3 h-3 text-accent-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-semibold tracking-wide text-accent-400 uppercase">Copernicus Master in Digital Earth</span>
</div>

<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-4 drop-shadow-2xl">
      Dominik Tabernig
   </h1>

<p className="md:text-2xl text-xl font-light text-slate-50 tracking-tight">
      Welcome to my ePortfolio
   </p>

<p className="text-sm md:text-base text-accent-400 font-medium tracking-widest uppercase mb-8">
      Earth Observation • Remote Sensing • Digital Earth
   </p>

<p className="leading-relaxed text-lg text-slate-400 max-w-2xl mb-10">
      This ePortfolio provides an overview of my academic work and professional development during my studies in the
      Copernicus Master in Digital Earth (CDE).
   </p>

<a className="group relative inline-flex items-center gap-2 bg-white text-navy-950 px-8 py-3.5 rounded-full font-medium shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-0.5" href="#about">
      Learn More
      <svg className="lucide lucide-arrow-down w-4 h-4 transition-transform group-hover:translate-y-1" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</section>

<main className="max-w-6xl z-10 mr-auto ml-auto pr-6 pb-24 pl-6 relative space-y-32">

<section className="scroll-mt-32" id="about">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">About Me</h2>
<div className="h-1 w-20 bg-accent-500 rounded-full mb-10"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="md:col-span-3 glass-card rounded-[18px] p-8 md:p-10 shadow-glass">
<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
<svg className="lucide lucide-user w-5 h-5 text-accent-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Personal Information
                    </h3>
<div className="space-y-6">
<div className="">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Name</p>
<p className="text-lg text-slate-200">Dominik Tabernig</p>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Born</p>
<p className="text-lg text-slate-200">18 August 1999, Salzburg, Austria</p>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Programme</p>
<p className="text-lg text-slate-200 leading-relaxed">Erasmus Mundus Joint Master – <span className="text-accent-400">Copernicus Master in Digital Earth (CDE)</span></p>
</div>
</div>
</div>

<div className="md:col-span-2 h-full min-h-[300px] glass-card rounded-[18px] overflow-hidden relative group">
<div className="z-10 bg-gradient-to-t from-navy-950/80 to-transparent opacity-100 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Dominik Tabernig" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecfeb48d-5a8b-4c21-94f1-225faea2fba3_800w.jpg" style={{}}/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-xs font-mono text-accent-400 border border-accent-400/30 px-2 py-1 rounded inline-block bg-navy-950/50 backdrop-blur-sm">
                            CDE STUDENT
                        </div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<section className="">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-accent-500/10 border border-accent-500/20">
<svg className="lucide lucide-graduation-cap w-5 h-5 text-accent-400" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Academic Background</h3>
</div>
<div className="space-y-6 border-l border-white/10 pl-8 relative">

<div className="relative">
<div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border border-accent-500 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-accent-500"></div>
</div>
<h4 className="text-lg font-medium text-white">Copernicus Master in Digital Earth</h4>
<p className="text-sm text-accent-400 mb-1">2023 – Present</p>
<p className="text-slate-400 text-sm leading-relaxed">
                            Specialization: GeoData Science (PLUS) &amp; Geo-Intelligence (UBS).
                            Focus on advanced EO data analysis, machine learning, and spatial modelling.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border border-slate-700"></div>
<h4 className="text-lg font-medium text-white">Bachelor of Science in Geography</h4>
<p className="text-sm text-slate-500 mb-1">2019 – 2023</p>
<p className="leading-relaxed text-sm text-slate-400">University of Salzburg. Thesis on Alpine snow remote sensing applications.</p>
</div>
</div>
</section>

<section className="">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
<svg className="lucide lucide-briefcase w-5 h-5 text-emerald-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Professional Experience</h3>
</div>
<div className="space-y-6 border-l border-white/10 pl-8 relative">

<div className="relative">
<div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border border-white/30"></div>
<h4 className="text-lg font-medium text-white">Chef de Partie</h4>
<p className="text-sm text-emerald-400 mb-1">2022-Present</p>
<p className="text-slate-400 text-sm">Stiegl Brauwelt, Salzburg</p>
</div>

<div className="relative">
<div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border border-white/10"></div>
<h4 className="text-lg font-medium text-white">Emergency Medical Technician</h4>
<p className="text-sm text-slate-500 mb-1">2019 – 2020</p>
<p className="text-slate-400 text-sm">Austrian Armed Forces</p>
</div>
</div>
</section>
</div>

<section className="glass-card rounded-[18px] p-8 md:p-12 border-l-4 border-l-accent-500">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Motivation &amp; Goals</h3>
<p className="leading-relaxed text-lg text-slate-300">Earth observation is where my curiosity feels most at home. I am particularly interested in optical satellite sensors, calibration and validation, and the transformation of raw instrument signals into scientifically reliable products. Through the CDE programme, I aim to deepen my technical skills in remote sensing and Digital Earth concepts and to prepare for a future career contributing to operational Earth-observation missions, ideally in an international research or space-agency context.</p>
</section>

<section className="" id="coursework">
<div className="flex flex-col items-center text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Coursework &amp; Expertise</h2>
<p className="text-slate-400 max-w-2xl">Competencies developed during the master's programme:</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card hover:-translate-y-1 transition-transform duration-300 rounded-[18px] pt-6 pr-6 pb-6 pl-6">
<svg className="lucide lucide-satellite w-8 h-8 text-accent-400 mb-4" data-lucide="satellite" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path><path d="M16.5 7.5 19 5"></path><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path><path d="M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></svg>
<h4 className="text-lg font-medium text-white mb-2">Advanced Remote Sensing</h4>
<p className="text-sm text-slate-400">Automated image analysis, radiometric correction, segmentation, SVM/Random Forest, CNN concepts, and quality assessment.</p>
</div>

<div className="glass-card p-6 rounded-[18px] hover:-translate-y-1 transition-transform duration-300">
<svg className="lucide lucide-map w-8 h-8 text-purple-400 mb-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<h4 className="text-lg font-medium text-white mb-2">Software Engineering</h4>
<p className="text-sm text-slate-400">Object-oriented programming, Python, Java, geo-software frameworks including GeoServer, GeoTools, and OpenLayers.</p>
</div>

<div className="glass-card p-6 rounded-[18px] hover:-translate-y-1 transition-transform duration-300">
<svg className="lucide lucide-code-2 w-8 h-8 text-emerald-400 mb-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<h4 className="text-lg font-medium text-white mb-2">Geospatial Data Models</h4>
<p className="text-sm text-slate-400">UML-based modeling, General Feature Model, XML fundamentals, and Geography Markup Language (GML) implementation.</p>
</div>

<div className="glass-card p-6 rounded-[18px] hover:-translate-y-1 transition-transform duration-300">
<svg className="lucide lucide-earth mb-4" data-icon-replaced="true" data-icon-set="lucide" data-lucide="earth" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(251, 146, 60)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h4 className="text-lg font-medium text-white mb-2">Big Earth Data</h4>
<p className="text-sm text-slate-400">Data cube concepts, AI and machine learning for continental and global-scale remote sensing analysis.</p>
</div>

<div className="glass-card p-6 rounded-[18px] hover:-translate-y-1 transition-transform duration-300">
<svg className="lucide lucide-blocks mb-4" data-icon-replaced="true" data-icon-set="lucide" data-lucide="blocks" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
<h4 className="text-lg font-medium text-white mb-2">Object-Based Analysis</h4>
<p className="text-sm text-slate-400">Image segmentation, knowledge representation, class modeling, and object-based classification techniques.</p>
</div>

<div className="glass-card p-6 rounded-[18px] hover:-translate-y-1 transition-transform duration-300">
<svg className="lucide lucide-airplay lucide-brain-circuit mb-4 w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="airplay" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(34, 211, 238)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><path d="m12 15 5 6H7Z"></path></svg>
<h4 className="text-lg font-medium text-white mb-2">Machine Learning</h4>
<p className="text-sm text-slate-400">Applying Random Forest and CNNs for land cover classification.</p>
</div>
</div>
</section>

<section className="border-slate-950" id="projects">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Selected Projects</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-card rounded-[18px] overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden group">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-slate-900/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Snow Cover Analysis" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b040a87-d55b-447f-96d0-654dad922a24_1600w.webp" style={{}}/>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white mb-3">Bachelor's Thesis: Snow Cover and Snow Height Mapping</h3>
<p className="flex-1 text-sm text-slate-400 mb-6">This project investigated snow extent and snow depth in the High Tauern / Großglockner region by integrating optical satellite imagery with laser altimetry. The work demonstrates multi-sensor data fusion and physically meaningful interpretation of Earth observation data.</p>
<div className="space-y-3 pt-6 border-t border-white/5">
<div className="flex items-start gap-3">
<span className="text-xs font-semibold text-accent-400 uppercase w-16 shrink-0 mt-0.5">Data</span>
<span className="text-sm text-slate-300"> Sentinel-2 (optical), ICESat-2 (LiDAR)</span>
</div>
<div className="flex items-start gap-3">
<span className="text-xs font-semibold text-accent-400 uppercase w-16 shrink-0 mt-0.5">Methods</span>
<span className="text-sm text-slate-300">NDSI, spatial matching, elevation differencing, GIS-based visualization</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-[18px] overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden group">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-slate-900/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Satellite Earth Data" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8317f70-c986-41f2-96d9-67391ab6efa0_1600w.jpg" style={{}}/>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-white mb-3">Advanced Remote Sensing Analysis</h3>
<p className="flex-1 text-sm text-slate-400 mb-6">Hands-on assignments focused on advanced image understanding workflows and quality assessment, reflecting real-world EO application scenarios.</p>
<div className="space-y-3 pt-6 border-t border-white/5">
<div className="flex items-start gap-3">
<span className="text-xs font-semibold text-emerald-400 uppercase w-16 shrink-0 mt-0.5">Data</span>
<span className="text-sm text-slate-300">Copernicus EO data, VHR imagery, Radar and LiDAR examples</span>
</div>
<div className="flex items-start gap-3">
<span className="text-xs font-semibold text-emerald-400 uppercase w-16 shrink-0 mt-0.5">Methods</span>
<span className="text-sm text-slate-300">Radiometric correction, segmentation, SVM / Random Forest, CNN concepts</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="glass-card rounded-[24px] p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4 relative z-10">Learning Journey</h2>
<p className="text-slate-400 max-w-3xl z-10 mb-10 relative">The CDE programme has been instrumental in shaping my technical capabilities and theoretical understanding of Digital Earth concepts. During the first semester of the CDE programme, I learned how theoretical concepts in Digital Earth are directly connected to real-world applications. The interdisciplinary structure helped me understand problems from technical, environmental, and societal perspectives.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

<div className="">
<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-accent-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        Key Learning Outcomes
                    </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></span>
<span className="text-sm text-slate-300">Digital Earth concepts and Copernicus services</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></span>
<span className="text-sm text-slate-300">Practical geospatial data workflows</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></span>
<span className="text-sm text-slate-300">Ability to communicate complex scientific results effectively.</span>
</li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<svg className="lucide lucide-cpu w-5 h-5 text-purple-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                        Technical Skills
                    </h4>
<div className="flex flex-wrap gap-x-2 gap-y-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Python</span>
<span className="text-xs text-white bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3">Remote Sensing: Sentinel data, LiDAR, Radar</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">ArcGIS Pro</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">QGIS</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">SNAP</span>
<span className="text-xs text-white bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3">MATLAB</span>
<span className="text-xs text-white bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3">Trimble eCognition</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white">Git</span>
</div>
</div>
</div>
</section>

<section className="" id="contact">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center mb-12">Get in Touch</h2>
<div className="glass-card rounded-[18px] overflow-hidden grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
<h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-map-pin w-5 h-5 text-accent-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
<p className="text-white">Salzburg, Austria</p>
</div>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-school w-5 h-5 text-accent-400" data-lucide="school" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 5v16"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 5v16"></path><circle cx="12" cy="9" r="2"></circle></svg>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider">Programme</p>
<p className="text-white">Copernicus Master in Digital Earth</p>
</div>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-languages w-5 h-5 text-accent-400" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase tracking-wider">Languages</p>
<p className="text-white">German (Native), English (C2), Italian (A1)</p>
</div>
</li>
</ul>
</div>

<div className="p-8 md:p-12 bg-white/[0.02]">
<h3 className="text-xl font-semibold text-white mb-6">Programme Information</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        The Copernicus Master in Digital Earth is an Erasmus Mundus Joint Master programme co-funded by the European Union.
                    </p>
<div className="space-y-2 mb-8">
<p className="text-xs font-semibold text-white uppercase">Partner Universities</p>
<p className="text-sm text-slate-400">• Paris Lodron University Salzburg (PLUS)</p>
<p className="text-sm text-slate-400">• University of South Brittany (UBS)</p>
<p className="text-sm text-slate-400">• Palacký University Olomouc (UPOL)</p>
</div>
<a className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium" href="/#https://master-cde.eu/">
                        Visit Programme Website
                        <svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(96, 165, 250)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-navy-900/50 backdrop-blur-lg pt-16 pb-8">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-accent-500/20 flex items-center justify-center border border-accent-500/30">
<span className="text-xs font-bold text-accent-400">DT</span>
</div>
<span className="font-semibold text-white">Dominik Tabernig</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Specializing in Earth Observation and Digital Earth technologies to analyze our changing planet.
                    </p>
</div>

<div className="md:text-center">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
<div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#coursework">Services</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#projects">Portfolio</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>

<div className="md:text-right">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Programme</h4>
<p className="text-sm text-slate-500">Erasmus Mundus Joint Master</p>
<p className="text-sm text-slate-500">Copernicus Master in Digital Earth</p>
</div>
</div>

<div className="flex mb-12 justify-center gap-8 flex-wrap">

<div className="hover:opacity-100 transition-opacity bg-slate-900 opacity-90 rounded-xl px-4 py-4">
<img alt="University of Salzburg Logo" className="md:h-20 bg-center opacity-80 w-auto h-16 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf9dd540-3e6d-4c82-af75-8f410a61663c_320w.png" style={{}}/>
</div>

<div className="hover:opacity-100 transition-opacity flex bg-slate-900 opacity-90 rounded-xl pt-4 pr-4 pb-4 pl-4 items-center">
<img alt="Université Bretagne Sud Logo" className="md:h-20 opacity-80 w-auto h-16 object-contain rotate-x-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaad6eb2-075e-417b-b21c-2f6caa527050_320w.png" style={{}}/>
</div>

<div className="hover:opacity-100 transition-opacity flex bg-slate-900 opacity-80 rounded-xl px-4 py-4 items-center">
<img alt="Partner Logo" className="md:h-20 opacity-80 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d910253-cea5-4798-b1f9-c67f48dc9f23_800w.png"/>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
                    © 2025 Dominik Tabernig. All rights reserved.
                </p>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-600">Powered by Readdy</span>
<div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
</div>
</div>
</div>
</footer>



    </>
  );
}
