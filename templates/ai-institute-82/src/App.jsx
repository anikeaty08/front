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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Zoom-In Storytelling Logic
        const mapContainer = document.getElementById('system-map-container');
        const sections = document.querySelectorAll('.scroll-section');

        // Transform States
        const states = {
            'section-intro': 'scale(1) translate(0, 0)',
            'section-eterna': 'scale(2.5) translate(0, 20%)',   // Zoom to top center
            'section-lab': 'scale(2.5) translate(25%, -25%)',   // Zoom to bottom left
            'section-synth': 'scale(2.5) translate(-25%, -25%)', // Zoom to bottom right
            'section-outro': 'scale(0.8) translate(0, -10%)'    // Zoom out to see full loop
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when section is in middle 20% of screen
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Update Active Class for Text Opacity
                    sections.forEach(s => s.classList.remove('active'));
                    entry.target.classList.add('active');

                    // Update Map Transform
                    const sectionId = entry.target.id;
                    if (states[sectionId]) {
                        mapContainer.style.transform = states[sectionId];
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Add subtle mouse movement parallax when in intro state
        document.addEventListener('mousemove', (e) => {
            if(window.scrollY < window.innerHeight) {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                // Only apply parallax if we are at the top to avoid fighting the scroll transform
                if(window.scrollY < 100) {
                     mapContainer.style.transform = `scale(1) translate(${x}px, ${y}px)`;
                }
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
      


<div className="fixed inset-0 w-full h-screen z-0 flex items-center justify-center overflow-hidden pointer-events-none">

<div className="relative w-[1000px] h-[1000px] origin-center transform-gpu" id="system-map-container">
<svg className="w-full h-full pointer-events-auto" viewbox="0 0 1000 1000">
<defs>

<lineargradient id="grad-eterna" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#14b8a6"></stop> 
<stop offset="100%" stop-color="#2563eb"></stop> 
</lineargradient>

<lineargradient id="grad-lab" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#10b981"></stop> 
<stop offset="100%" stop-color="#f59e0b"></stop> 
</lineargradient>

<lineargradient id="grad-synth" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#9333ea"></stop> 
<stop offset="100%" stop-color="#0ea5e9"></stop> 
</lineargradient>
</defs>

<g className="lines-layer">

<path className="connection-line" d="M500 300 L250 750" stroke="#cbd5e1" strokeWidth="1.5"></path>
<path className="connection-line" d="M500 300 L750 750" stroke="#cbd5e1" strokeWidth="1.5"></path>
<path className="connection-line" d="M250 750 L750 750" stroke="#cbd5e1" strokeWidth="1.5"></path>

<path className="pulse-line" d="M500 300 L250 750" opacity="0.6" stroke="url(#grad-eterna)" strokeWidth="2"></path>
<path className="pulse-line" d="M750 750 L500 300" opacity="0.6" stroke="url(#grad-synth)" strokeWidth="2" style={{animationDelay: '1.3s'}}></path>
<path className="pulse-line" d="M250 750 L750 750" opacity="0.6" stroke="url(#grad-lab)" strokeWidth="2" style={{animationDelay: '2.6s'}}></path>
</g>

<g className="map-node-group group" data-node="eterna">

<circle className="animate-pulse" cx="500" cy="300" fill="url(#grad-eterna)" opacity="0.15" r="60"></circle>

<circle className="map-node glow-eterna" cx="500" cy="300" fill="url(#grad-eterna)" r="25" stroke="white" strokeWidth="2"></circle>

<foreignobject className="pointer-events-none text-white" height="24" width="24" x="488" y="288">
<iconify-icon height="24" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</foreignobject>

<foreignobject className="node-tooltip" height="80" width="300" x="350" y="200">
<div className="bg-white/90 backdrop-blur-md border border-teal-100 p-3 rounded-xl shadow-xl text-center">
<p className="text-xs font-semibold text-teal-800 uppercase tracking-wider mb-1">EternaSense AI</p>
<p className="text-xs text-slate-600 leading-tight">Applied technology startup designing adaptive assistive AI systems.</p>
</div>
</foreignobject>
</g>

<g className="map-node-group group" data-node="lab">
<circle className="animate-pulse" cx="250" cy="750" fill="url(#grad-lab)" opacity="0.15" r="60" style={{animationDelay: '0.5s'}}></circle>
<circle className="map-node glow-lab" cx="250" cy="750" fill="url(#grad-lab)" r="25" stroke="white" strokeWidth="2"></circle>
<foreignobject className="pointer-events-none text-white" height="24" width="24" x="238" y="738">
<iconify-icon height="24" icon="solar:city-linear" width="24"></iconify-icon>
</foreignobject>
<foreignobject className="node-tooltip" height="80" width="300" x="100" y="800">
<div className="bg-white/90 backdrop-blur-md border border-emerald-100 p-3 rounded-xl shadow-xl text-center">
<p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">AI Community Lab</p>
<p className="text-xs text-slate-600 leading-tight">Deployment &amp; testing engine. Putting tools in schools, libraries, and centers.</p>
</div>
</foreignobject>
</g>

<g className="map-node-group group" data-node="synth">
<circle className="animate-pulse" cx="750" cy="750" fill="url(#grad-synth)" opacity="0.15" r="60" style={{animationDelay: '1s'}}></circle>
<circle className="map-node glow-synth" cx="750" cy="750" fill="url(#grad-synth)" r="25" stroke="white" strokeWidth="2"></circle>
<foreignobject className="pointer-events-none text-white" height="24" width="24" x="738" y="738">
<iconify-icon height="24" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</foreignobject>
<foreignobject className="node-tooltip" height="80" width="300" x="600" y="800">
<div className="bg-white/90 backdrop-blur-md border border-violet-100 p-3 rounded-xl shadow-xl text-center">
<p className="text-xs font-semibold text-violet-800 uppercase tracking-wider mb-1">Synthesis Collective</p>
<p className="text-xs text-slate-600 leading-tight">Research &amp; publishing initiative. Studies outcomes and preserves knowledge.</p>
</div>
</foreignobject>
</g>
</svg>
</div>
</div>

<main className="relative z-10">



<section className="scroll-section active min-h-screen flex flex-col items-center justify-center pt-20 px-6" id="section-intro">
<div className="max-w-3xl text-center glass-panel p-8 rounded-3xl shadow-sm">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">System Online</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight-custom text-slate-900 mb-6">
                    The Continuum Institute
                </h1>
<p className="text-lg text-slate-600 font-medium mb-10 max-w-xl mx-auto">
                    Three interdependent engines. One unified mission. <br/>Built and run by high school students.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="text-xs font-medium text-slate-400 animate-bounce mt-4">
                        Scroll to Explore the Ecosystem
                        <iconify-icon className="block mx-auto mt-1" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="scroll-section min-h-screen flex items-center justify-center pointer-events-none" id="section-eterna">
<div className="max-w-lg w-full px-6 pointer-events-auto">
<div className="bg-white/90 backdrop-blur-xl border-l-4 border-teal-500 p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-teal-600 text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Engine 01</span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight-custom">EternaSense AI</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        Applied technology startup. We design and build adaptive assistive AI systems that reduce friction in daily life for people facing cognitive, sensory, and communication challenges.
                    </p>
<button className="text-sm font-medium text-teal-700 hover:text-teal-900 flex items-center gap-1">
                        View Technology <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="scroll-section min-h-screen flex items-center justify-start md:pl-24 pointer-events-none" id="section-lab">
<div className="max-w-lg w-full px-6 pointer-events-auto">
<div className="bg-white/90 backdrop-blur-xl border-l-4 border-emerald-500 p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-emerald-600 text-2xl" icon="solar:city-linear"></iconify-icon>
<span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Engine 02</span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight-custom">AI Community Lab</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        Deployment and testing engine. We put tools in real environments—schools, libraries, centers—test with actual users, and feed honest data back for improvement.
                    </p>
<button className="text-sm font-medium text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                        See Deployments <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="scroll-section min-h-screen flex items-center justify-end md:pr-24 pointer-events-none" id="section-synth">
<div className="max-w-lg w-full px-6 pointer-events-auto">
<div className="bg-white/90 backdrop-blur-xl border-l-4 border-violet-500 p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-violet-600 text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Engine 03</span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight-custom">Synthesis Collective</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        Research and publishing initiative. We turn deployments into rigorous studies, publish findings, and archive knowledge so it outlasts any single student.
                    </p>
<button className="text-sm font-medium text-violet-700 hover:text-violet-900 flex items-center gap-1">
                        Read Journal <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="scroll-section min-h-[60vh] flex flex-col items-center justify-center px-6" id="section-outro">
<div className="max-w-4xl w-full bg-white/60 backdrop-blur-md rounded-3xl p-12 text-center shadow-lg border border-white">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">The Cycle Continues</h2>
<div className="grid md:grid-cols-3 gap-8 mb-2 text-left">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="text-teal-600 font-bold mb-1">1. Build</div>
<p className="text-xs text-slate-500">Real tools for real problems.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="text-emerald-600 font-bold mb-1">2. Deploy</div>
<p className="text-xs text-slate-500">Real users in live environments.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="text-violet-600 font-bold mb-1">3. Measure</div>
<p className="text-xs text-slate-500">Documented outcomes &amp; archival.</p>
</div>
</div>
</div>
</section>


<div className="relative bg-[#F8FAF9] z-20 pt-24 pb-32 border-t border-slate-200 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)]">

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Our Philosophy</span>
<h3 className="text-4xl font-medium tracking-tight text-slate-900 mb-6">
                            Technology is temporary.<br/>
<span className="text-slate-400">Impact is permanent.</span>
</h3>
<p className="text-slate-600 text-lg leading-relaxed mb-6">
                            At the Continuum Institute, we don't just write code. We build living systems that solve human problems. Our work is student-led but industry-standard, bridging the gap between academic theory and real-world application.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-slate-600 hover:border-slate-600 transition-colors" href="#">
                            Read our Manifesto <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-violet-50 rounded-2xl transform rotate-3"></div>
<div className="relative bg-white border border-slate-100 p-8 rounded-2xl shadow-sm">
<div className="flex items-start gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-slate-400" icon="solar:quote-up-linear"></iconify-icon>
</div>
<div>
<p className="text-slate-600 italic mb-4">"The Institute gave me the resources to take a prototype from a classroom idea to a deployed product used by 200+ people daily."</p>
<p className="text-xs font-bold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Lead Engineer, EternaSense '25</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="text-center mb-16">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Inside the Ecosystem</h3>
<p className="text-slate-500 mt-2">Deep dive into our operational pillars.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 text-teal-600">
<iconify-icon className="text-2xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Open Source Core</h4>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                            All EternaSense models are open-sourced. We believe accessibility tools should belong to the public domain, not walled gardens.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">Python</span>
<span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">TensorFlow</span>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-600">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">User-First Testing</h4>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                            The Community Lab partners with local senior centers to run 6-week beta programs, gathering qualitative feedback loops.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">UX Research</span>
<span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">Field Ops</span>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
<div className="w-12 h-12 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-6 text-violet-600">
<iconify-icon className="text-2xl" icon="solar:notebook-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Rigor</h4>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                            Synthesis Collective publishes a biannual journal. Peer-reviewed by alumni and industry mentors to ensure data integrity.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">Publishing</span>
<span className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">Data Sci</span>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div>
<div className="text-3xl font-bold text-slate-900 mb-1">12</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Projects</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 mb-1">850+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Users Impacted</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 mb-1">42</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Student Fellows</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Open Source</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ready to build the future?</h2>
<p className="text-slate-600 mb-10 max-w-lg mx-auto">Applications for the Fall 2026 Cohort are now open. Join a team of designers, engineers, and researchers.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2">
                        Apply Now
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        View Open Roles
                    </button>
</div>
</section>

<footer className="border-t border-slate-200 pt-16 pb-8 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2">
<h5 className="font-bold text-slate-900 mb-4 tracking-tight">The Continuum Institute</h5>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                                A student-led organization dedicated to the development, deployment, and study of assistive artificial intelligence technologies.
                            </p>
</div>
<div>
<h6 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Engines</h6>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">EternaSense</a></li>
<li><a className="hover:text-slate-900" href="#">Community Lab</a></li>
<li><a className="hover:text-slate-900" href="#">Synthesis Collective</a></li>
</ul>
</div>
<div>
<h6 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Connect</h6>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#">Twitter / X</a></li>
<li><a className="hover:text-slate-900" href="#">GitHub</a></li>
<li><a className="hover:text-slate-900" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
<p className="text-xs text-slate-400">© 2026 Continuum Institute. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>
</main>

<nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
<div className="glass-dock px-3 py-2.5 rounded-full flex items-center gap-2 shadow-2xl transition-all duration-300">
<a className="dock-item relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50" href="#section-intro">
<iconify-icon className="text-xl text-slate-600 group-hover:text-slate-900" icon="solar:home-smile-linear"></iconify-icon>
</a>
<div className="w-px h-6 bg-slate-300/50 mx-1"></div>
<a className="dock-item relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50" href="#section-eterna">
<iconify-icon className="text-xl text-slate-600 group-hover:text-teal-600" icon="solar:cpu-bolt-linear"></iconify-icon>
</a>
<a className="dock-item relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50" href="#section-lab">
<iconify-icon className="text-xl text-slate-600 group-hover:text-emerald-600" icon="solar:city-linear"></iconify-icon>
</a>
<a className="dock-item relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50" href="#section-synth">
<iconify-icon className="text-xl text-slate-600 group-hover:text-violet-600" icon="solar:book-bookmark-linear"></iconify-icon>
</a>
<div className="w-px h-6 bg-slate-300/50 mx-1"></div>
<a className="dock-item relative group flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50" href="#">
<iconify-icon className="text-xl text-slate-600 group-hover:text-slate-900" icon="solar:user-plus-rounded-linear"></iconify-icon>
</a>
</div>
</nav>


    </>
  );
}
