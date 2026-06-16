import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        // State & Refs
        const mainContent = document.getElementById('main-content');
        const caseStudyOverlay = document.getElementById('case-study-overlay');
        const printsOverlay = document.getElementById('prints-overlay');
        
        // Data for simulation
        const projectData = {
            'neo-bank': {
                title: 'Neo Bank',
                category: 'Fintech',
                image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'
            },
            'komorebi': {
                title: 'Komorebi',
                category: 'E-Commerce',
                image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2532&auto=format&fit=crop'
            }
        };

        // Case Study Logic
        function openCaseStudy(projectId) {
            const data = projectData[projectId] || projectData['neo-bank'];
            
            document.getElementById('cs-title').innerText = data.title;
            document.getElementById('cs-category').innerText = data.category;
            document.getElementById('cs-hero-img').src = data.image;

            caseStudyOverlay.classList.remove('translate-y-full');
            caseStudyOverlay.classList.add('translate-y-0');
            mainContent.classList.add('scale-down');
            caseStudyOverlay.scrollTop = 0;
        }

        function closeCaseStudy() {
            caseStudyOverlay.classList.remove('translate-y-0');
            caseStudyOverlay.classList.add('translate-y-full');
            mainContent.classList.remove('scale-down');
        }

        // Prints Logic
        function openPrints() {
            printsOverlay.classList.remove('translate-y-full');
            printsOverlay.classList.add('translate-y-0');
            mainContent.classList.add('scale-down');
            printsOverlay.scrollTop = 0;
        }

        function closePrints() {
            printsOverlay.classList.remove('translate-y-0');
            printsOverlay.classList.add('translate-y-full');
            mainContent.classList.remove('scale-down');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="page-content origin-top" id="main-content">

<nav className="fixed top-0 w-full z-40 bg-[#F3F0EB] border-b-2 border-black">
<div className="flex justify-between items-stretch h-16">
<div className="flex items-center px-6 border-r-2 border-black">
<span className="text-2xl font-semibold tracking-tight">RONIN<span className="text-[#B8282B]">.UX</span></span>
</div>
<div className="hidden md:flex flex-grow justify-end">
<a className="flex items-center px-8 border-l-2 border-black hover:bg-[#B8282B] hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm" href="#work">
                        Work
                    </a>

<button className="flex items-center px-8 border-l-2 border-black hover:bg-[#B8282B] hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm" onclick="openPrints()">
                        Prints <span className="ml-2 w-2 h-2 bg-[#B8282B] rounded-full animate-pulse"></span>
</button>
<a className="flex items-center px-8 border-l-2 border-black hover:bg-[#B8282B] hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm" href="#process">
                        Manifesto
                    </a>
<a className="flex items-center px-8 border-l-2 border-black bg-black text-[#F3F0EB] hover:bg-[#B8282B] hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm" href="#contact">
                        Contact
                    </a>
</div>

<div className="md:hidden flex items-center px-6 border-l-2 border-black">
<button onclick="openPrints()"><i className="w-5 h-5 mr-4" data-lucide="shopping-bag"></i></button>
<i className="w-6 h-6" data-lucide="menu"></i>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col pt-16">
<div className="flex-grow flex flex-col lg:flex-row border-b-2 border-black">

<div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black relative bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]">
<div>
<div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1 rounded-full mb-6 bg-white reveal">
<div className="w-2 h-2 bg-[#B8282B] rounded-full animate-pulse"></div>
<span className="font-mono text-xs font-medium uppercase tracking-widest">System Active v2.0</span>
</div>
<h1 className="text-6xl lg:text-8xl font-medium uppercase leading-[0.9] tracking-tight mb-6 reveal">
                            Digital <br/>
<span className="text-[#B8282B]">Experience</span> <br/>
                            Architect
                        </h1>
<p className="font-mono text-sm max-w-md mt-8 reveal delay-100 leading-relaxed">
                            Forging intuitive interfaces with the precision of a craftsman. Bridging the gap between raw aesthetic and functional clarity. 
                        </p>
</div>
<div className="mt-12 lg:mt-0 reveal delay-200">
<div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
<a className="group relative overflow-hidden border-2 border-black px-8 py-4 bg-[#B8282B] text-white w-full md:w-auto text-center" href="#work">
<span className="relative z-10 uppercase tracking-widest font-medium flex items-center justify-center gap-2">
                                    Explore The Garden <i className="w-4 h-4" data-lucide="arrow-down-right"></i>
</span>
<div className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
</a>
<div className="flex gap-4 px-0 md:px-6 pt-4 md:pt-0">
<div className="group/icon relative">
<i className="w-5 h-5 hover:text-[#B8282B] cursor-pointer transition-colors" data-lucide="figma"></i>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 opacity-0 group-hover/icon:opacity-100 transition-opacity">FIGMA</span>
</div>
<div className="group/icon relative">
<i className="w-5 h-5 hover:text-[#B8282B] cursor-pointer transition-colors" data-lucide="layers"></i>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 opacity-0 group-hover/icon:opacity-100 transition-opacity">STACK</span>
</div>
<div className="group/icon relative">
<i className="w-5 h-5 hover:text-[#B8282B] cursor-pointer transition-colors" data-lucide="code"></i>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 opacity-0 group-hover/icon:opacity-100 transition-opacity">DEV</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-black relative overflow-hidden group h-[50vh] lg:h-auto">
<img alt="Abstract Art" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 border-t-2 border-white/20 bg-black/80 backdrop-blur-sm z-10">
<div className="flex justify-between items-end text-white">
<div>
<p className="font-mono text-xs text-white/60 mb-1">CURRENT LOCATION</p>
<p className="uppercase tracking-widest text-lg">TOKYO / CYBERSPACE</p>
</div>
<div className="text-right">
<p className="font-mono text-xs text-white/60 mb-1">AVAILABLE FOR</p>
<p className="uppercase tracking-widest text-lg text-[#B8282B]">FREELANCE</p>
</div>
</div>
</div>
<div className="absolute top-0 left-12 w-px h-full bg-white/10"></div>
<div className="absolute top-12 left-0 w-full h-px bg-white/10"></div>
</div>
</div>
</header>

<div className="border-b-2 border-black bg-[#B8282B] text-[#F3F0EB] py-3 overflow-hidden flex relative z-10">
<div className="marquee-container font-medium uppercase text-lg tracking-widest w-full">
<div className="marquee-content">
<span className="mx-4">/// UX Research</span> <span className="mx-4">/// UI Design</span> <span className="mx-4">/// Prototyping</span> <span className="mx-4">/// Brand Identity</span> <span className="mx-4">/// Design Systems</span>
<span className="mx-4">/// UX Research</span> <span className="mx-4">/// UI Design</span> <span className="mx-4">/// Prototyping</span> <span className="mx-4">/// Brand Identity</span> <span className="mx-4">/// Design Systems</span>
</div>
</div>
</div>

<section className="border-b-2 border-black" id="work">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="hidden lg:flex lg:col-span-1 border-r-2 border-black items-center justify-center py-12 bg-white">
<h2 className="writing-vertical transform rotate-180 text-xl font-medium uppercase tracking-[0.2em] whitespace-nowrap text-[#B8282B]">
                        Selected Operations
                    </h2>
</div>

<div className="col-span-1 lg:col-span-11">
<div className="grid grid-cols-1 md:grid-cols-2">

<article className="project-card group border-b-2 md:border-b-0 md:border-r-2 border-black relative overflow-hidden cursor-pointer" onclick="openCaseStudy('neo-bank')">
<div className="h-[28rem] overflow-hidden relative border-b-2 border-black">
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-[#B8282B] text-white text-xs font-mono px-2 py-1 uppercase">Fintech</span>
<span className="bg-black text-white text-xs font-mono px-2 py-1 uppercase">2024</span>
</div>
<img alt="Project 1" className="project-img w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
</div>
<div className="p-6 bg-[#F3F0EB] group-hover:bg-black transition-colors duration-300 min-h-[200px] flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-3xl font-medium uppercase tracking-tight group-hover:text-white transition-colors">Neo Bank</h3>
<i className="w-6 h-6 group-hover:text-[#B8282B] transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="font-mono text-xs text-gray-600 group-hover:text-gray-400 uppercase tracking-wide">Mobile App Redesign / Design System</p>
</div>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs uppercase tracking-widest border-b border-[#B8282B] pb-1">View Case Study</span>
</div>
</div>
</article>

<article className="project-card group border-b-2 border-black relative overflow-hidden cursor-pointer" onclick="openCaseStudy('komorebi')">
<div className="h-[28rem] overflow-hidden relative border-b-2 border-black">
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-[#B8282B] text-white text-xs font-mono px-2 py-1 uppercase">E-Commerce</span>
<span className="bg-black text-white text-xs font-mono px-2 py-1 uppercase">2023</span>
</div>
<img alt="Project 2" className="project-img w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 bg-[#F3F0EB] group-hover:bg-black transition-colors duration-300 min-h-[200px] flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-3xl font-medium uppercase tracking-tight group-hover:text-white transition-colors">Komorebi Store</h3>
<i className="w-6 h-6 group-hover:text-[#B8282B] transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="font-mono text-xs text-gray-600 group-hover:text-gray-400 uppercase tracking-wide">Web Design / Shopify Dev</p>
</div>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs uppercase tracking-widest border-b border-[#B8282B] pb-1">View Case Study</span>
</div>
</div>
</article>

<article className="project-card group md:border-r-2 border-black relative overflow-hidden cursor-pointer border-b-2 md:border-b-0">
<div className="h-[28rem] overflow-hidden relative border-b-2 border-black">
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-[#B8282B] text-white text-xs font-mono px-2 py-1 uppercase">SaaS</span>
<span className="bg-black text-white text-xs font-mono px-2 py-1 uppercase">2023</span>
</div>
<img alt="Project 3" className="project-img w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 bg-[#F3F0EB] group-hover:bg-black transition-colors duration-300 min-h-[200px] flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-3xl font-medium uppercase tracking-tight group-hover:text-white transition-colors">Data Core</h3>
<i className="w-6 h-6 group-hover:text-[#B8282B] transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="font-mono text-xs text-gray-600 group-hover:text-gray-400 uppercase tracking-wide">Dashboard UX / Interaction</p>
</div>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs uppercase tracking-widest border-b border-[#B8282B] pb-1">View Case Study</span>
</div>
</div>
</article>

<article className="project-card group relative overflow-hidden cursor-pointer">
<div className="h-[28rem] overflow-hidden relative border-b-2 border-black">
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-[#B8282B] text-white text-xs font-mono px-2 py-1 uppercase">Social</span>
<span className="bg-black text-white text-xs font-mono px-2 py-1 uppercase">2022</span>
</div>
<img alt="Project 4" className="project-img w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 bg-[#F3F0EB] group-hover:bg-black transition-colors duration-300 min-h-[200px] flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-3xl font-medium uppercase tracking-tight group-hover:text-white transition-colors">Connect V2</h3>
<i className="w-6 h-6 group-hover:text-[#B8282B] transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="font-mono text-xs text-gray-600 group-hover:text-gray-400 uppercase tracking-wide">User Research / Strategy</p>
</div>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs uppercase tracking-widest border-b border-[#B8282B] pb-1">View Case Study</span>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="border-b-2 border-black bg-white" id="process">
<div className="grid grid-cols-2 md:grid-cols-4">
<div className="p-8 border-r-2 border-black border-b-2 md:border-b-0 flex flex-col justify-between h-48 reveal">
<i className="w-8 h-8 text-[#B8282B]" data-lucide="cpu"></i>
<div>
<h4 className="text-4xl font-medium mb-1">45+</h4>
<p className="font-mono text-xs uppercase tracking-wider text-gray-500">Projects Shipped</p>
</div>
</div>
<div className="p-8 md:border-r-2 border-black border-b-2 md:border-b-0 flex flex-col justify-between h-48 reveal delay-100">
<i className="w-8 h-8 text-[#B8282B]" data-lucide="globe"></i>
<div>
<h4 className="text-4xl font-medium mb-1">08</h4>
<p className="font-mono text-xs uppercase tracking-wider text-gray-500">Countries Served</p>
</div>
</div>
<div className="p-8 border-r-2 border-black flex flex-col justify-between h-48 reveal delay-200">
<i className="w-8 h-8 text-[#B8282B]" data-lucide="award"></i>
<div>
<h4 className="text-4xl font-medium mb-1">12</h4>
<p className="font-mono text-xs uppercase tracking-wider text-gray-500">Design Awards</p>
</div>
</div>
<div className="p-8 flex flex-col justify-between h-48 reveal delay-300">
<i className="w-8 h-8 text-[#B8282B]" data-lucide="coffee"></i>
<div>
<h4 className="text-4xl font-medium mb-1">∞</h4>
<p className="font-mono text-xs uppercase tracking-wider text-gray-500">Caffeine Consumed</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh] border-b-2 border-black">
<div className="col-span-1 lg:col-span-5 bg-black text-[#F3F0EB] p-12 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-white/10">
<div className="reveal">
<span className="text-[#B8282B] font-mono text-sm uppercase tracking-widest mb-4 block">/// The Philosophy</span>
<h2 className="text-5xl lg:text-6xl font-medium uppercase leading-none mb-8">
                        Design is not <br/> just how it <br/> looks.
                    </h2>
<p className="font-mono text-sm text-white/60 leading-relaxed max-w-md">
                        It is a system of thinking. A relentless pursuit of simplification. I build digital gardens where users find clarity amidst the chaos of the web.
                    </p>
</div>
</div>
<div className="col-span-1 lg:col-span-7 bg-[#F3F0EB] p-0">
<div className="grid grid-rows-3 h-full">
<div className="border-b-2 border-black p-8 flex items-center justify-between group hover:bg-[#B8282B] hover:text-white transition-colors cursor-default">
<div className="flex items-center gap-6">
<span className="font-mono text-xl">01</span>
<span className="text-3xl uppercase font-medium tracking-tight">Strategic Discovery</span>
</div>
<i className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="search"></i>
</div>
<div className="border-b-2 border-black p-8 flex items-center justify-between group hover:bg-[#B8282B] hover:text-white transition-colors cursor-default">
<div className="flex items-center gap-6">
<span className="font-mono text-xl">02</span>
<span className="text-3xl uppercase font-medium tracking-tight">Iterative Prototyping</span>
</div>
<i className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="refresh-ccw"></i>
</div>
<div className="p-8 flex items-center justify-between group hover:bg-[#B8282B] hover:text-white transition-colors cursor-default">
<div className="flex items-center gap-6">
<span className="font-mono text-xl">03</span>
<span className="text-3xl uppercase font-medium tracking-tight">Pixel-Perfect Polish</span>
</div>
<i className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="zap"></i>
</div>
</div>
</div>
</section>

<footer className="relative bg-white pt-20 pb-12" id="contact">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
<div>
<h2 className="text-7xl lg:text-9xl font-medium uppercase tracking-tighter leading-none mb-6 reveal">
                            Let's <br/> <span className="text-stroke-black">Build</span>
</h2>
<a className="inline-block border-2 border-black bg-[#B8282B] text-white px-10 py-5 text-xl uppercase tracking-widest font-medium hover:bg-black transition-colors duration-300" href="mailto:hello@ronin.ux">
                            Start Project
                        </a>
</div>
<div className="reveal delay-100">
<ul className="flex flex-col gap-2 text-right">
<li><a className="uppercase font-medium text-lg hover:text-[#B8282B] transition-colors" href="#">Twitter / X</a></li>
<li><a className="uppercase font-medium text-lg hover:text-[#B8282B] transition-colors" href="#">LinkedIn</a></li>
<li><a className="uppercase font-medium text-lg hover:text-[#B8282B] transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
</div>
<div className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-[#B8282B] rounded-full"></div>
<span className="font-mono text-xs uppercase">Based in Tokyo / Worldwide</span>
</div>
<div className="font-mono text-xs uppercase text-right">
                        © 2024 Ronin UX.<br/>
<span className="text-gray-400">Optimized for html.to.design</span>
</div>
</div>
</div>
</footer>
</div>

<div className="overlay-screen fixed inset-0 z-50 bg-[#F3F0EB] overflow-y-auto translate-y-full" id="case-study-overlay">

<div className="fixed top-0 right-0 z-50 p-6">
<button className="bg-black text-white w-16 h-16 flex items-center justify-center rounded-full hover:bg-[#B8282B] transition-colors duration-300 shadow-lg" onclick="closeCaseStudy()">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
</div>

<div className="min-h-screen pb-20">

<div className="h-[70vh] relative border-b-2 border-black">
<img className="w-full h-full object-cover filter grayscale contrast-125" id="cs-hero-img" src=""/>
<div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 lg:p-12">
<span className="bg-[#B8282B] text-white text-sm font-mono px-3 py-1 uppercase self-start mb-4 inline-block" id="cs-category">Category</span>
<h1 className="text-6xl lg:text-9xl font-medium text-white uppercase tracking-tighter leading-none" id="cs-title">Project Title</h1>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-black bg-white sticky top-0 z-40">
<div className="p-6 border-r-2 border-black border-b-2 md:border-b-0">
<p className="font-mono text-xs text-gray-500 mb-1 uppercase">Role</p>
<p className="uppercase font-medium">Lead Product Design</p>
</div>
<div className="p-6 border-r-2 md:border-r-2 border-black border-b-2 md:border-b-0">
<p className="font-mono text-xs text-gray-500 mb-1 uppercase">Client</p>
<p className="uppercase font-medium">Global Corp</p>
</div>
<div className="p-6 border-r-2 border-black">
<p className="font-mono text-xs text-gray-500 mb-1 uppercase">Timeline</p>
<p className="uppercase font-medium">4 Months</p>
</div>
<div className="p-6">
<p className="font-mono text-xs text-gray-500 mb-1 uppercase">Deliverables</p>
<p className="uppercase font-medium">App, Web, System</p>
</div>
</div>
<div className="container mx-auto px-6 py-20">
<div className="max-w-4xl mx-auto">
<p className="text-xl leading-relaxed font-light mb-12 text-gray-800">
                        Detailed case study content would populate here. Focusing on the "Art Prints" addition for this request.
                    </p>
<button className="inline-block border-2 border-black px-12 py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-colors" onclick="closeCaseStudy()">
                        Back to Projects
                    </button>
</div>
</div>
</div>
</div>

<div className="overlay-screen fixed inset-0 z-50 bg-[#F3F0EB] overflow-y-auto translate-y-full" id="prints-overlay">

<div className="fixed top-0 right-0 z-50 p-6">
<button className="bg-black text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full hover:bg-[#B8282B] transition-colors duration-300 shadow-lg" onclick="closePrints()">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="x"></i>
</button>
</div>
<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

<div className="relative min-h-[50vh] lg:min-h-screen border-b-2 lg:border-b-0 lg:border-r-2 border-black">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=1589&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-6 left-6 z-10 bg-white border-2 border-black px-4 py-2">
<p className="font-mono text-xs uppercase tracking-widest">Selected Artworks</p>
</div>
</div>

<div className="flex flex-col">

<div className="p-8 lg:p-16 border-b-2 border-black bg-white">
<div className="inline-block bg-[#B8282B] text-white px-3 py-1 font-mono text-xs uppercase mb-6">Shop Open</div>
<h2 className="text-6xl lg:text-7xl font-medium uppercase leading-[0.9] tracking-tighter mb-4">
                        Prints <br/> Available
                    </h2>
<p className="font-mono text-sm text-gray-600 max-w-sm">
                        High-quality archival prints of my digital explorations. Signed and numbered.
                    </p>
</div>

<div className="flex-grow bg-[#F3F0EB]">
<div className="border-b-2 border-black p-4 bg-gray-100">
<p className="font-mono text-xs uppercase text-gray-500 tracking-widest">/// Specification Sheet</p>
</div>

<div className="flex border-b-2 border-black hover:bg-white transition-colors">
<div className="w-1/3 p-6 border-r-2 border-black font-mono font-medium text-lg">A5</div>
<div className="w-1/3 p-6 border-r-2 border-black font-mono text-gray-500">148 x 210 mm</div>
<div className="w-1/3 p-6 font-mono font-medium text-lg text-right">RS 150</div>
</div>
<div className="flex border-b-2 border-black hover:bg-white transition-colors">
<div className="w-1/3 p-6 border-r-2 border-black font-mono font-medium text-lg">A4</div>
<div className="w-1/3 p-6 border-r-2 border-black font-mono text-gray-500">210 x 297 mm</div>
<div className="w-1/3 p-6 font-mono font-medium text-lg text-right">RS 220</div>
</div>
<div className="flex border-b-2 border-black hover:bg-white transition-colors">
<div className="w-1/3 p-6 border-r-2 border-black font-mono font-medium text-lg">A3</div>
<div className="w-1/3 p-6 border-r-2 border-black font-mono text-gray-500">297 x 420 mm</div>
<div className="w-1/3 p-6 font-mono font-medium text-lg text-right">RS 320</div>
</div>

<div className="bg-black text-white p-6 border-b-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div className="flex items-center gap-4">
<i className="w-6 h-6 text-[#B8282B]" data-lucide="truck"></i>
<div>
<p className="font-mono text-sm uppercase tracking-wider">Shipping: RS 99 Flat</p>
<p className="font-mono text-xs text-gray-400">Free shipping on orders above RS 500</p>
</div>
</div>
</div>

<div className="p-8 lg:p-12 flex flex-col gap-6">
<a className="group w-full border-2 border-black bg-white p-6 flex justify-between items-center hover:bg-[#B8282B] hover:text-white transition-colors duration-300" href="https://instagram.com" target="_blank">
<div>
<h4 className="text-2xl font-medium uppercase tracking-tight">Browse Artworks</h4>
<p className="font-mono text-xs text-gray-500 group-hover:text-white/80 mt-1 uppercase">View Portfolio Gallery</p>
</div>
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
<a className="group w-full border-2 border-black bg-[#B8282B] text-white p-6 flex justify-between items-center hover:bg-black transition-colors duration-300" href="mailto:hello@ronin.ux?subject=Print%20Order">
<div>
<h4 className="text-2xl font-medium uppercase tracking-tight">Order Now</h4>
<p className="font-mono text-xs text-white/80 mt-1 uppercase">DM me art + size</p>
</div>
<i className="w-6 h-6" data-lucide="send"></i>
</a>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
