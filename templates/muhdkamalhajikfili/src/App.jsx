import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // 1. Smart Sticky Header Logic
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                if (currentScrollY > lastScrollY) {
                    navbar.classList.add('nav-hidden');
                    navbar.classList.remove('scrolled-up'); 
                } else {
                    navbar.classList.remove('nav-hidden');
                    navbar.classList.add('scrolled-up'); 
                }
            } else {
                navbar.classList.remove('nav-hidden');
                navbar.classList.remove('scrolled-up');
            }
            lastScrollY = currentScrollY;
        });


        // 2. Scroll Text Highlight Logic & Diagram Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const textElement = document.getElementById('scrolling-text');
            const diagram = document.querySelector('.reveal-diagram');
            
            if (textElement) {
                const textContent = textElement.innerText;
                const words = textContent.split(' ');
                textElement.innerHTML = words.map(word => `<span>${word} </span>`).join('');
                const spans = textElement.querySelectorAll('span');

                const updateOpacity = () => {
                    const windowHeight = window.innerHeight;
                    const centerPoint = windowHeight / 2;
                    
                    // Text Highlight
                    spans.forEach(span => {
                        const rect = span.getBoundingClientRect();
                        const spanCenter = rect.top + (rect.height / 2);
                        const distanceFromCenter = Math.abs(spanCenter - centerPoint);
                        let opacity = 1 - (distanceFromCenter / 300);
                        opacity = Math.max(0.2, Math.min(1, opacity));
                        span.style.opacity = opacity;
                        if(opacity > 0.8) span.classList.add('active');
                        else span.classList.remove('active');
                    });
                    
                    // Diagram Reveal
                    if(diagram) {
                        const diagRect = diagram.getBoundingClientRect();
                        if(diagRect.top < windowHeight * 0.8) {
                            diagram.style.opacity = '1';
                            diagram.style.transform = 'translateY(0)';
                        }
                    }
                };

                window.addEventListener('scroll', updateOpacity);
                window.addEventListener('resize', updateOpacity);
                updateOpacity(); 
            }
        });

        // 3. Scroll Animation Logic for Expertise Section
        const processSection = document.getElementById('expertise');
        const headings = {
            design: document.getElementById('head-design'),
            dev: document.getElementById('head-dev'),
            marketing: document.getElementById('head-marketing')
        };
        const tags = document.querySelectorAll('.process-tag');

        function updateProcessState() {
            if (!processSection || window.innerWidth < 1024) return;
            if (!headings.design) return;

            const rect = processSection.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const scrollDistance = -rect.top;
            const totalDistance = rect.height - viewHeight;
            let progress = scrollDistance / totalDistance;
            progress = Math.max(0, Math.min(1, progress));

            let activeCategory = '';
            if (progress < 0.33) activeCategory = 'design';
            else if (progress < 0.66) activeCategory = 'dev';
            else activeCategory = 'marketing';

            Object.keys(headings).forEach(key => {
                if (key === activeCategory) headings[key].classList.add('active');
                else headings[key].classList.remove('active');
            });

            tags.forEach(tag => {
                const tagCat = tag.getAttribute('data-cat');
                if (tagCat === activeCategory) tag.classList.add('active');
                else tag.classList.remove('active');
            });
        }

        window.addEventListener('scroll', updateProcessState);
        window.addEventListener('resize', updateProcessState);
        updateProcessState();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="noise-overlay absolute inset-0 z-20 mix-blend-overlay"></div>
<div className="absolute -top-[10%] -left-[10%] w-[140%] h-[80%] bg-gradient-to-r from-neutral-900 via-[#1a0b2e] to-[#050505] blur-[100px] rounded-[100%] rotate-12 opacity-80 z-0"></div>
<div className="blur-[150px] z-1 bg-cyan-500/10 w-[80%] h-[40%] absolute top-[10%] left-[10%]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#22d3ee]/5 blur-[150px] rounded-full z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full z-0"></div>
</div>

<nav className="fixed z-50 flex md:px-10 transition-all duration-300 pt-8 pr-6 pb-8 pl-6 top-0 right-0 left-0 items-center justify-between" id="main-nav">

<div className="group cursor-pointer flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center bg-black/50 backdrop-blur neon-box-blue">
<span className="font-mono text-cyan-400 font-bold text-lg">K</span>
</div>
<div className="flex flex-col">
<span className="uppercase text-sm font-bold text-white tracking-widest">Muhammad kamal haji kifli</span>
<span className="text-[8px] text-cyan-400 tracking-wider uppercase">Analyst &amp; Specialist</span>
</div>
</div>

<div className="flex flex-col text-right gap-x-5 gap-y-5 items-end">

<div className="hidden md:block text-[10px] md:text-xs text-neutral-400 tracking-wider font-mono">BRUNEI DARUSSALAM</div>

<div className="flex flex-row gap-6 items-center bg-black/20 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
<a className="text-[11px] font-medium tracking-widest text-neutral-300 hover:text-cyan-400 transition-colors uppercase" href="#expertise">Experience</a>
<a className="text-[11px] font-medium tracking-widest text-neutral-300 hover:text-cyan-400 transition-colors uppercase" href="#about">Profile</a>
<a className="text-[11px] font-medium tracking-widest text-neutral-300 hover:text-cyan-400 transition-colors uppercase" href="#competencies">Skills</a>
<a className="text-[11px] font-medium tracking-widest text-white bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all uppercase" href="#footer">Contact</a>
</div>
</div>
</nav>

<main className="flex flex-col min-h-[100vh] z-10 pt-32 pr-4 pb-32 pl-3 relative items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
<div className="text-sm text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black w-full h-full"></div>
</div>
<div className="animate-reveal delay-100 text-center mb-8 space-y-4 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-900/10 mb-4 mx-auto">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
<span className="text-[10px] uppercase tracking-widest text-cyan-300 font-medium">Curriculum Vitae</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight text-white font-playfair">
<span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">MUHAMMAD KAMAL</span>
<span className="block neon-text-blue text-6xl italic text-cyan-400 tracking-normal font-jakarta text-center">HAJI  KIFLI</span>
</h1>
</div>
<p className="max-w-xl text-center text-neutral-400 text-sm md:text-lg font-light leading-relaxed mb-10 animate-reveal delay-200">
            Bridging the gap between creative strategy and technical infrastructure
        </p>
<div className="flex flex-col animate-reveal delay-300 sm:flex-row gap-x-5 gap-y-5 items-center relative z-10">
<button className="px-8 py-3.5 rounded-full bg-cyan-400 text-black font-medium tracking-wide text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(34,211,238,0.5)]">
                Download CV
            </button>
</div>

<div className="animate-reveal delay-300 text-center w-full pt-3 absolute bottom-8 border-t border-white/5 bg-black/20 backdrop-blur-sm py-4">
<div className="flex justify-center gap-8 md:gap-16">
<div className="flex flex-col items-center">
<span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Experience</span>
<span className="text-xl font-bold text-white">10+ Years</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Education</span>
<span className="text-xl font-bold text-white">Level 5 Dip.</span>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Focus</span>
<span className="text-xl font-bold text-white">IT and Marketing</span>
</div>
</div>
</div>
</main>

<section className="z-10 overflow-hidden border-white/5 border-t pt-24 pb-24 relative bg-neutral-950" id="gallery">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end">
<div className="">
<p className="text-[10px] text-cyan-400 uppercase tracking-[0.2em] font-medium mb-2">Portfolio Snapshots</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Versatility in Action</h2>
</div>
<div className="hidden md:block">
<span className="text-xs uppercase tracking-widest text-neutral-500 border-b border-cyan-400 pb-1">Multidisciplinary</span>
</div>
</div>

<div className="relative w-full flex overflow-hidden mb-8 group">
<div className="marquee-track group-hover:[animation-play-state:paused] px-3">

<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Cybersecurity" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Cybersecurity</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Network &amp; Forensics</p>
</div>
</div>

<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Marketing" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Marketing</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Digital Strategy</p>
</div>
</div>

<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Operations" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Operations</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Logistics &amp; Safety</p>
</div>
</div>

<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Analysis" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Analysis</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Data &amp; Trends</p>
</div>
</div>
</div>
<div aria-hidden="true" className="marquee-track group-hover:[animation-play-state:paused] px-3">

<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Cybersecurity" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Cybersecurity</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Network &amp; Forensics</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Marketing" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Marketing</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Digital Strategy</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Operations" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Operations</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Logistics &amp; Safety</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card border border-white/5">
<img alt="Analysis" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 brightness-50" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-bold tracking-tight uppercase mb-1 text-cyan-50">Analysis</h3>
<p className="text-xs text-cyan-400 uppercase tracking-widest">Data &amp; Trends</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-[#050505] min-h-[90vh] flex flex-col items-center justify-center" id="about">
<div className="max-w-5xl mx-auto px-6 text-center md:text-left w-full">
<span className="inline-block px-3 py-1 mb-8 text-[10px] tracking-widest text-cyan-400 border border-cyan-500/20 rounded-full bg-cyan-900/10 uppercase">Professional Summary</span>
<p className="reveal-text text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.3] text-neutral-600 mb-20" id="scrolling-text"><span style={{opacity: '0.2'}}>Dynamic </span><span style={{opacity: '0.2'}}>and </span><span style={{opacity: '0.2'}}>versatile </span><span style={{opacity: '0.2'}}>professional </span><span style={{opacity: '0.2'}}>combining </span><span style={{opacity: '0.2'}}>hands-on </span><span style={{opacity: '0.2'}}>expertise </span><span style={{opacity: '0.2'}}>in </span><span style={{opacity: '0.2'}}>Digital </span><span style={{opacity: '0.2'}}>Marketing </span><span style={{opacity: '0.2'}}>and </span><span style={{opacity: '0.2'}}>Network </span><span style={{opacity: '0.2'}}>Security. </span><span style={{opacity: '0.2'}}>Known </span><span style={{opacity: '0.2'}}>for </span><span style={{opacity: '0.2'}}>adaptability </span><span style={{opacity: '0.2'}}>across </span><span style={{opacity: '0.2'}}>industries, </span><span style={{opacity: '0.2'}}>from </span><span style={{opacity: '0.2'}}>Telecommunications </span><span style={{opacity: '0.2'}}>to </span><span style={{opacity: '0.2'}}>Oil </span><span style={{opacity: '0.2'}}>&amp; </span><span style={{opacity: '0.2'}}>Gas. </span></p>

<div className="reveal-diagram transition-opacity duration-1000 opacity-0 w-full max-w-3xl mr-auto mb-20 ml-auto gap-x-8 gap-y-8" style={{opacity: '1', transform: 'translateY(0px)'}}>

<div className="flex flex-col w-full gap-x-8 gap-y-8 items-center">
<div className="z-10 bg-neutral-900/50 border-cyan-500/20 border rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_-10px_rgba(34,211,238,0.1)] backdrop-blur-md gap-x-8 gap-y-8 neon-box-blue">
<h3 className="md:text-3xl text-2xl italic text-white tracking-wide font-playfair">Dual Competence</h3>
</div>

<div className="h-12 w-px bg-gradient-to-b from-cyan-500/50 to-cyan-500/20"></div>

<div className="w-[50%] md:w-[60%] h-px bg-cyan-500/20 relative">
<div className="absolute left-0 top-0 h-8 w-px bg-cyan-500/20 origin-top"></div>
<div className="absolute right-0 top-0 h-8 w-px bg-cyan-500/20 origin-top"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 md:gap-12 w-full mt-8 gap-x-8 gap-y-8">

<div className="flex flex-col items-center">
<div className="flex flex-col items-center gap-4">
<span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 bg-[#050505] px-2 relative z-10 -mt-2">Creative</span>
<div className="text-xl md:text-2xl font-medium text-white/90">Marketing</div>

<div className="h-12 w-px border-l border-dashed border-cyan-500/20"></div>

<div className="group relative">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative px-6 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 flex items-center gap-3">
<svg className="lucide lucide-pen-tool w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
<span className="text-sm md:text-base font-medium text-white">Visuals</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center">
<div className="flex flex-col items-center gap-4">
<span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 bg-[#050505] px-2 relative z-10 -mt-2">Technical</span>
<div className="text-xl md:text-2xl font-medium text-white/90">Security</div>

<div className="h-12 w-px border-l border-dashed border-cyan-500/20"></div>

<div className="group relative">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative px-6 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 flex items-center gap-3">
<svg className="lucide lucide-shield-check w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm md:text-base font-medium text-white">Forensics</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 w-full lg:h-[300vh] min-h-screen" id="expertise">

<div className="lg:hidden px-6 py-24 border-t border-white/5 bg-neutral-900/50">
<p className="text-white text-sm uppercase tracking-widest mb-16">Curriculum Vitae</p>
<div className="mb-14">
<h2 className="font-playfair italic text-3xl text-white font-normal mb-6">Experience</h2>
<div className="flex flex-col gap-3">
<span className="text-sm text-neutral-400">BUE Enterprise (Digital Marketing)</span>
<span className="text-sm text-neutral-400">Brunei LNG (Gas Plant Operator)</span>
<span className="text-sm text-neutral-400">BTHC Moshware (Design Admin)</span>
<span className="text-sm text-neutral-400">The Kugelblitz (Visual Comms)</span>
</div>
</div>
<div className="mb-14">
<h2 className="font-playfair italic text-3xl text-white font-normal mb-6">Education</h2>
<div className="flex flex-col gap-3">
<span className="text-sm text-neutral-400">Politeknik Brunei (Level 5 Diploma)</span>
<span className="text-sm text-neutral-400">Maktab Duli PMAMB (A Levels)</span>
<span className="text-sm text-neutral-400">SM Perdana Wazir (O Levels)</span>
</div>
</div>
<div className="mb-8">
<h2 className="font-playfair italic text-3xl text-white font-normal mb-6">Technical</h2>
<div className="flex flex-wrap gap-3">
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm">Forensics</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm">OSINT</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm">Log Analysis</span>
</div>
</div>
</div>

<div className="hidden lg:flex sticky overflow-hidden bg-[#050505]/90 w-full h-screen border-white/5 border-t top-0 backdrop-blur-xl items-center justify-center">
<div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
<p className="text-xs font-medium tracking-[0.2em] text-cyan-400 uppercase mb-4">Background</p>
<div className="process-heading group cursor-pointer" id="head-design">
<h2 className="font-playfair italic text-4xl lg:text-6xl text-white font-medium">Experience</h2>
</div>
<div className="process-heading group cursor-pointer" id="head-dev">
<h2 className="lg:text-6xl text-4xl font-medium italic text-white font-playfair">Education</h2>
</div>
<div className="process-heading group cursor-pointer" id="head-marketing">
<h2 className="font-playfair italic text-4xl lg:text-6xl text-white font-medium">Technical</h2>
</div>
</div>

<div className="lg:col-span-8 w-full">
<div className="flex flex-wrap gap-3 lg:justify-end w-full content-center">

<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Digital Marketing (BUE)</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Visual Comms (Kugelblitz)</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Gas Plant Operator (BLNG)</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Design Admin (BTHC)</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">IT Support (CIC)</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Document Control (BSP)</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Logistics (ASAFF)</div>

<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="dev">Diploma Network &amp; Security</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="dev">Politeknik Brunei</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="dev">GCE A Levels</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="dev">Maktab Duli PMAMB</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="dev">GCE O Levels</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="dev">Physics &amp; Math Credit</div>

<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Cybersecurity Basics</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Digital Forensics</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">OSINT</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Cloud VM</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Data Recovery</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Log Analysis</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Adobe Suite</div>
</div>
</div>
</div>
</div>
</div>

<section className="bg-[#050505] z-10 border-white/5 border-t pt-32 pb-32 relative" id="competencies">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Areas of Expertise</h2>
<p className="text-neutral-400 mb-8">A diverse skillset honed through technical training and creative roles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl bg-[#080808] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-6 group">
<div className="">
<h3 className="font-playfair italic text-2xl text-white mb-2">Digital Marketing</h3>
<p className="text-neutral-500 text-sm h-10">Brand strategies, social media, and content creation.</p>
</div>
<div className="space-y-4 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Social Media Management
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Graphic Design (Adobe)
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Video Editing
                        </div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#0a0a0a] border border-cyan-500/30 shadow-[0_0_30px_-10px_rgba(34,211,238,0.15)] relative flex flex-col gap-6 transform md:-translate-y-4">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="bg-cyan-400 text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]">Core Focus</span>
</div>
<div className="">
<h3 className="font-playfair italic text-2xl text-white mb-2">Network Security</h3>
<p className="text-neutral-500 text-sm h-10">Cybersecurity protocols, analysis, and forensics.</p>
</div>
<div className="space-y-4 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Cloud VM Research
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            OSINT Projects
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Data Recovery &amp; Logs
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-cyan-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Networking Fundamentals
                        </div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#080808] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-6 group">
<div>
<h3 className="font-playfair italic text-2xl text-white mb-2">Operations</h3>
<p className="text-neutral-500 text-sm h-10">Logistics, safety protocols, and administration.</p>
</div>
<div className="space-y-4 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Document Control
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Logistical Planning
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Safety Compliance (HSE)
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 py-24 overflow-hidden" id="footer">

<div className="absolute inset-0 z-0 bg-black">
<div className="absolute w-[150%] h-[150%] -top-[40%] -right-[30%] bg-[radial-gradient(circle_farthest-corner_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050505] to-black blur-[100px] opacity-60 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-4xl md:text-5xl font-playfair font-normal text-white mb-4 tracking-tight">Let's collaborate</h2>
<p className="text-neutral-400 text-sm max-w-md mb-8 leading-relaxed">
                    Based in Brunei Darussalam. Available for projects in Digital Marketing, IT Support, and Security Analysis.
                </p>
<button className="hover:bg-white transition-colors flex gap-2 text-sm font-semibold text-black bg-cyan-400 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)] gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/wa.me/6737447226'" role="button">
                    Contact Me
                    <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/5 pt-16">

<div className="col-span-2 md:col-span-1 flex flex-col justify-between h-full">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center">
<span className="font-mono text-cyan-400 font-bold text-sm">K</span>
</div>
<span className="text-white font-bold tracking-widest text-sm">KIDD KIFLI</span>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Skills</h4>
<span className="text-sm text-neutral-500">Network Security</span>
<span className="text-sm text-neutral-500">Digital Marketing</span>
<span className="text-sm text-neutral-500">Logistics</span>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Education</h4>
<span className="text-sm text-neutral-500">Politeknik Brunei</span>
<span className="text-sm text-neutral-500">A Levels</span>
<span className="text-sm text-neutral-500">Certifications</span>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Location</h4>
<span className="text-sm text-neutral-500">Brunei Darussalam</span>
<span className="text-sm text-neutral-500">Remote Compatible</span>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 text-xs text-neutral-600">
                © 2025 Kidd Kifli. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
