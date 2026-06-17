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



        // Detailed Course Data
        const courses = {
            engineering: { 
                title: "Engineering Orbit", 
                desc: "An intense trajectory aimed at IITs and top NITs.",
                sub: ["JEE Main Target Batch", "JEE Advanced Pro", "Crash Courses", "Rank Booster Programs", "All India Test Series"],
                faculty: "IIT Alumni & Experts",
                results: "AIR 12, 50+ Top 1000"
            },
            medical: { 
                title: "Medical Orbit", 
                desc: "Comprehensive biosciences curriculum for top medical institutes.",
                sub: ["NEET UG Full Year", "NEET Crash Course", "AIIMS Target Batch", "Biology Mastery"],
                faculty: "Top Medical Professionals",
                results: "AIR 35, 98% Qualify"
            },
            state: { 
                title: "State Exams Orbit", 
                desc: "Targeted state-board aligned curriculum for premier local colleges.",
                sub: ["MHT-CET Target", "State Board Entrance", "Polytechnic Entrance"],
                faculty: "State Subject Experts",
                results: "Top Percentile Ranks"
            },
            govt: { 
                title: "Govt & Banking Orbit", 
                desc: "Structured paths for central government and banking sector examinations.",
                sub: ["SSC (CGL, CHSL, MTS)", "Banking (IBPS, SBI)", "Railway (RRB)", "Insurance Exams"],
                faculty: "Ex-Govt Officers",
                results: "10,000+ Selections"
            },
            foundation: { 
                title: "Foundation Orbit", 
                desc: "Building a rock-solid analytical base early without academic burnout.",
                sub: ["Class 8th-10th Support", "Olympiad Prep", "NTSE Prep", "Early IIT/NEET"],
                faculty: "Pedagogy Specialists",
                results: "100+ NTSE Scholars"
            },
            skill: { 
                title: "Skill Development", 
                desc: "Enhancing core personal and professional skills for the modern world.",
                sub: ["Spoken English", "Personality Development", "Interview Prep", "Communication Skills"],
                faculty: "Industry Trainers",
                results: "95% Placement Boost"
            },
            digital: { 
                title: "Digital Programs", 
                desc: "Learn from anywhere with our state-of-the-art online platform.",
                sub: ["Live Online Classes", "Recorded Vault", "Doubt Solving App", "AI Tracking"],
                faculty: "ImDarpana Core Tech",
                results: "1M+ Hours Streamed"
            }
        };

        // DOM Elements
        const modal = document.getElementById('course-modal');
        const modalContent = document.getElementById('modal-content');
        const sysNodes = document.querySelectorAll('.sys-node');
        const planets = document.querySelectorAll('.planet-hitbox');

        // Interaction Logic
        planets.forEach(planet => {
            planet.addEventListener('mouseenter', () => {
                sysNodes.forEach(node => node.classList.add('anim-paused'));
            });
            
            planet.addEventListener('mouseleave', () => {
                sysNodes.forEach(node => node.classList.remove('anim-paused'));
            });

            planet.addEventListener('click', () => {
                const id = planet.getAttribute('data-course');
                const data = courses[id];
                if(data) {
                    document.getElementById('modal-title').textContent = data.title;
                    document.getElementById('modal-desc').textContent = data.desc;
                    document.getElementById('modal-faculty').textContent = data.faculty;
                    document.getElementById('modal-results').textContent = data.results;
                    
                    const subList = document.getElementById('modal-subcourses');
                    subList.innerHTML = data.sub.map(item => `<li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-orange-500"></div>${item}</li>`).join('');
                    
                    modal.classList.remove('opacity-0', 'pointer-events-none');
                    modalContent.classList.remove('scale-95');
                    modalContent.classList.add('scale-100');
                }
            });
        });

        function closeModal() {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    


	import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

	createChat({
		webhookUrl: 'https://abhijeet01.app.n8n.cloud/webhook/2e566fcc-4c7d-4397-89d8-fc49d6c637ed/chat'
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
      

<div className="fixed top-6 left-6 z-50">
<span className="text-white font-semibold tracking-tighter text-lg">IMD.</span>
</div>



<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,58,138,0.2)_0%,_rgba(2,6,23,1)_100%)] pointer-events-none -z-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="absolute top-[20%] left-[15%] w-1 h-1 bg-orange-400/40 rounded-full animate-[float-slow_7s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[25%] right-[20%] w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-[float-slow_10s_ease-in-out_infinite_reverse]"></div>

<div className="absolute top-10 right-10 z-40 hidden lg:flex gap-4">
<div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/50 rounded-full px-3 py-1.5 flex items-center gap-2">
<iconify-icon className="text-sm" icon="logos:google-icon"></iconify-icon>
<span className="text-xs font-medium text-slate-300">4.8 <span className="text-slate-500">(10k+)</span></span>
</div>
<div className="bg-slate-950/50 backdrop-blur-md border border-slate-800/50 rounded-full px-3 py-1.5 flex items-center gap-2">
<span className="text-xs font-medium text-slate-300">Justdial <span className="text-orange-400">4.7</span></span>
</div>
</div>
<div className="absolute inset-0 z-10 scale-75 md:scale-100" id="solar-system">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center pointer-events-none text-center">
<div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-orange-500/20 blur-3xl animate-[pulse-core_4s_ease-in-out_infinite]"></div>
<p className="text-xs font-medium text-blue-400/80 tracking-widest uppercase mb-2">India’s Largest Coaching Center</p>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-2">
                    ImDarpana
                </h1>
<p className="text-sm text-slate-400 font-medium tracking-tight">
                    Producing Rankers, Building Futures
                </p>
<a className="mt-8 pointer-events-auto group relative px-6 py-2.5 bg-orange-500 text-white rounded-full font-medium text-xs tracking-tight overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]" href="#lead-form">
<span className="relative flex items-center gap-2 z-10">
                        Enroll Now <iconify-icon className="text-sm transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 rounded-full border border-orange-400 scale-[1.1] opacity-0 group-hover:animate-ping z-0"></div>
</a>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full border border-blue-500/20 pointer-events-none border-dashed"></div>
<div className="absolute top-1/2 left-1/2 w-[26rem] h-[26rem] anim-orbit sys-node" style={{animationDuration: '25s'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="engineering">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '25s'}}>
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_20px_rgba(59,130,246,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300 relative">
<iconify-icon className="text-blue-400 text-xl group-hover:text-orange-400" icon="solar:atom-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute top-14 text-xs font-medium text-slate-300 tracking-tight bg-slate-950/90 px-2.5 py-1 rounded-full border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xl">Engineering</span>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="medical">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '25s'}}>
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_20px_rgba(59,130,246,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300 relative">
<iconify-icon className="text-blue-400 text-xl group-hover:text-orange-400" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute bottom-14 text-xs font-medium text-slate-300 tracking-tight bg-slate-950/90 px-2.5 py-1 rounded-full border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xl">Medical</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full border border-blue-500/10 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] anim-orbit sys-node" style={{animationDuration: '45s'}}>

<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="state">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '45s'}}>
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300">
<iconify-icon className="text-slate-400 text-lg group-hover:text-orange-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute left-12 text-xs font-medium text-slate-400 tracking-tight bg-slate-950/90 px-2 py-0.5 rounded border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">State Exams</span>
</div>
</div>

<div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="govt">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '45s'}}>
<div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300">
<iconify-icon className="text-slate-400 text-lg group-hover:text-orange-400" icon="solar:banknotes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute right-12 text-xs font-medium text-slate-400 tracking-tight bg-slate-950/90 px-2 py-0.5 rounded border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Govt/Banking</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54rem] h-[54rem] rounded-full border border-blue-500/5 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 w-[54rem] h-[54rem] anim-orbit sys-node" style={{animationDuration: '70s'}}>

<div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="foundation">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '70s'}}>
<div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all">
<iconify-icon className="text-slate-500 text-sm group-hover:text-orange-400" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute top-10 text-xs font-medium text-slate-400 tracking-tight bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Foundation (8-10)</span>
</div>
</div>

<div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="skill">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '70s'}}>
<div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all">
<iconify-icon className="text-slate-500 text-sm group-hover:text-orange-400" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute top-10 text-xs font-medium text-slate-400 tracking-tight bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Skill Dev</span>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 planet-hitbox cursor-pointer group z-40" data-course="digital">
<div className="anim-counter sys-node flex flex-col items-center" style={{animationDuration: '70s'}}>
<div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500 transition-all">
<iconify-icon className="text-slate-500 text-sm group-hover:text-orange-400" icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="absolute top-10 text-xs font-medium text-slate-400 tracking-tight bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Online Programs</span>
</div>
</div>
</div>

<div className="absolute top-[20%] left-[10%] w-48 bg-slate-900/40 border border-slate-800/50 backdrop-blur-md p-3 rounded-2xl animate-[float-slow_8s_ease-in-out_infinite] hidden md:block">
<p className="text-[10px] text-slate-300 leading-relaxed">"Best coaching for JEE. The dynamic approach changed my perspective."</p>
<p className="text-[9px] text-orange-400 mt-1 font-medium">- Rahul, IIT Bombay</p>
</div>
<div className="absolute bottom-[20%] right-[10%] w-48 bg-slate-900/40 border border-slate-800/50 backdrop-blur-md p-3 rounded-2xl animate-[float-slow_9s_ease-in-out_infinite_reverse] hidden md:block">
<p className="text-[10px] text-slate-300 leading-relaxed">"Helped me crack NEET on my first attempt. Amazing support."</p>
<p className="text-[9px] text-orange-400 mt-1 font-medium">- Priya, AIIMS</p>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-50 text-blue-300">
<span className="text-[10px] tracking-widest uppercase">Explore Universe</span>
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>



<section className="max-w-6xl mx-auto px-6 py-24 relative">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tighter text-white">Success Constellation</h2>
<p className="text-sm text-slate-400 mt-2">Numbers that define our legacy in education.</p>
</div>
<div className="relative w-full">

<svg className="absolute inset-0 w-full h-full -z-10 opacity-20 hidden md:block" preserveaspectratio="none" viewbox="0 0 1000 400">
<path className="animate-[dash_20s_linear_infinite]" d="M 100 100 L 300 250 L 500 150 L 700 300 L 900 100" fill="none" stroke="#3b82f6" stroke-dasharray="10 10" strokeWidth="1.5"></path>
<path d="M 300 250 L 500 350 L 700 300" fill="none" stroke="#3b82f6" stroke-dasharray="5 5" strokeWidth="1.5"></path>
</svg>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">

<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-orange-500 mb-4 shadow-[0_0_15px_rgba(249,115,22,0.6)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">50k+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Students Trained</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-blue-400 mb-4 shadow-[0_0_10px_rgba(96,165,250,0.5)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">10k+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Selections</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-orange-400 mb-4 shadow-[0_0_10px_rgba(251,146,60,0.5)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">500+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Top Ranks</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-blue-500 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">Top 100</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">AIR Rankers</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-blue-500 mb-4 shadow-[0_0_10px_rgba(59,130,246,0.4)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">95%</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Satisfaction</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-orange-500 mb-4 shadow-[0_0_10px_rgba(249,115,22,0.4)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">100+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Expert Faculty</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-blue-400 mb-4 shadow-[0_0_10px_rgba(96,165,250,0.4)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">20+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Centers</span>
</div>
<div className="group flex flex-col items-center p-4">
<div className="w-2 h-2 rounded-full bg-orange-400 mb-4 shadow-[0_0_15px_rgba(251,146,60,0.6)] group-hover:scale-150 transition-transform"></div>
<span className="text-3xl font-semibold tracking-tighter text-white">1M+</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Online Hours</span>
</div>
</div>
</div>
</section>



<section className="max-w-6xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold tracking-tighter text-white mb-8">Shining Stars</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/40 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-4xl text-blue-500" icon="solar:star-fall-bold"></iconify-icon>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-full mb-4 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl text-orange-400" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tighter text-white mb-1">AIR 12</h3>
<p className="text-xs text-slate-400 font-medium mb-4">JEE Advanced 2023</p>
<div className="text-xs text-slate-300 bg-slate-950 rounded-md px-3 py-2 border border-slate-800 inline-block">
                    Aarav Sharma
                </div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/40 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-4xl text-blue-500" icon="solar:star-fall-bold"></iconify-icon>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-full mb-4 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl text-orange-400" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tighter text-white mb-1">AIR 35</h3>
<p className="text-xs text-slate-400 font-medium mb-4">NEET UG 2023</p>
<div className="text-xs text-slate-300 bg-slate-950 rounded-md px-3 py-2 border border-slate-800 inline-block">
                    Sneha Patel
                </div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/40 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-4xl text-blue-500" icon="solar:star-fall-bold"></iconify-icon>
</div>
<div className="w-12 h-12 bg-slate-800 rounded-full mb-4 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl text-orange-400" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tighter text-white mb-1">Top 50</h3>
<p className="text-xs text-slate-400 font-medium mb-4">SSC CGL 2023</p>
<div className="text-xs text-slate-300 bg-slate-950 rounded-md px-3 py-2 border border-slate-800 inline-block">
                    Multiple Students
                </div>
</div>
</div>
</section>



<section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-6">The ImDarpana Gravity Zone</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-slate-900 p-1.5 rounded-md border border-slate-800">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">Experienced Faculty</h4>
<p className="text-xs text-slate-400 mt-0.5">Average 10+ years experience from premier institutes.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-slate-900 p-1.5 rounded-md border border-slate-800">
<iconify-icon className="text-orange-500" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">Personalized Mentorship</h4>
<p className="text-xs text-slate-400 mt-0.5">1-on-1 guidance to navigate exam stress and strategy.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-slate-900 p-1.5 rounded-md border border-slate-800">
<iconify-icon className="text-orange-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">AI Performance Tracking</h4>
<p className="text-xs text-slate-400 mt-0.5">Data-driven insights to identify and fix weak areas.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-slate-900 p-1.5 rounded-md border border-slate-800">
<iconify-icon className="text-orange-500" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">Hybrid Learning</h4>
<p className="text-xs text-slate-400 mt-0.5">Seamless integration of offline centers and online tools.</p>
</div>
</li>
</ul>
</div>

<div className="relative w-full aspect-video bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden group cursor-pointer flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20"></div>
<div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform z-10">
<iconify-icon className="text-white text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 z-10">
<span className="text-xs font-medium text-white bg-slate-950/70 px-2 py-1 rounded backdrop-blur-md">Success Stories</span>
</div>
</div>
</section>



<section className="max-w-md mx-auto px-6 py-12 relative" id="lead-form">
<div className="absolute inset-0 bg-blue-900/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>
<div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
<h2 className="text-2xl font-semibold tracking-tighter text-white mb-2 text-center">Start Your Journey</h2>
<p className="text-xs text-slate-400 text-center mb-8">Get free counseling from our experts.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">Full Name</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-orange-500/50 focus:outline-none input-glow transition-all placeholder:text-slate-600" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">Phone Number</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-orange-500/50 focus:outline-none input-glow transition-all placeholder:text-slate-600" placeholder="+91" required="" type="tel"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">Course Interest</label>
<select className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-orange-500/50 focus:outline-none input-glow transition-all appearance-none">
<option value="">Select an Orbit...</option>
<option value="jee">Engineering (JEE)</option>
<option value="neet">Medical (NEET)</option>
<option value="govt">Government/Banking</option>
<option value="state">State Exams</option>
<option value="foundation">Foundation (8th-10th)</option>
</select>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1">City</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-orange-500/50 focus:outline-none input-glow transition-all placeholder:text-slate-600" placeholder="Mumbai" required="" type="text"/>
</div>
<button className="w-full mt-6 bg-orange-500 text-white font-medium text-sm py-3 rounded-lg hover:bg-orange-600 transition-colors tracking-tight" type="submit">
                    Get Free Counseling
                </button>
</form>
</div>
</section>



<div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300 bg-slate-950/80 backdrop-blur-md" id="course-modal">
<div className="w-[90%] max-w-md bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl transform scale-95 transition-transform duration-300 pointer-events-auto flex flex-col relative overflow-hidden" id="modal-content">
<div className="flex justify-between items-start mb-4">
<h2 className="text-xl font-semibold text-white tracking-tight" id="modal-title">Course Name</h2>
<button className="text-slate-500 hover:text-white transition-colors p-1" onclick="closeModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-6" id="modal-desc">Course description.</p>
<div className="space-y-4 mb-6">
<div>
<h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Available Programs</h4>
<ul className="text-xs text-slate-300 space-y-1.5" id="modal-subcourses">

</ul>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
<div>
<h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Faculty</h4>
<p className="text-xs text-slate-300 font-medium" id="modal-faculty">--</p>
</div>
<div>
<h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Results</h4>
<p className="text-xs text-white font-medium" id="modal-results">--</p>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-orange-500 text-white text-xs font-semibold rounded-lg hover:bg-orange-600 transition-colors tracking-tight" onclick="closeModal(); document.getElementById('lead-form').scrollIntoView();">
                Enroll in Orbit
            </button>
</div>
</div>

<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet"/>

</link>
    </>
  );
}
