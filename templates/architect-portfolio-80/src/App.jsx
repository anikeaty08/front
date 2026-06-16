import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#121212',
gray: '#1f1f1f',
accent: '#a3cc56', /* Lime green */
muted: '#9ca3af'
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Data for Projects
        const projects = [
            {
                id: 0,
                title: "Brooklyn <br>Synagogue.",
                tagline: "Bold.<br>Curved.<br>Gentle.",
                client: "Hebrew Society of Brooklyn",
                completed: "01/01/2025",
                area: "25,452 sf.",
                desc: "Brooklyn Synagogue is a proposal for a new synagogue and community center in Brooklyn, emphasizing light, curve, and community integration.",
                image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
            },
            {
                id: 1,
                title: "Nordic <br>Museum.",
                tagline: "Stark.<br>Silent.<br>Historic.",
                client: "Oslo City Council",
                completed: "12/10/2023",
                area: "18,200 sf.",
                desc: "A cultural anchor sitting at the edge of the fjord, reflecting the stark beauty of the nordic landscape through concrete and glass.",
                image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2700&auto=format&fit=crop"
            },
            {
                id: 2,
                title: "Desert <br>Pavilion.",
                tagline: "Raw.<br>Earth.<br>Shelter.",
                client: "Private Residence",
                completed: "05/22/2022",
                area: "4,500 sf.",
                desc: "A retreat carved into the rock, providing shelter from the harsh sun while framing the horizon with minimalistic geometry.",
                image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2700&auto=format&fit=crop"
            },
            {
                id: 3,
                title: "Vertex <br>Tower.",
                tagline: "Glass.<br>Sky.<br>Vertical.",
                client: "Vertex Group",
                completed: "08/15/2021",
                area: "140,000 sf.",
                desc: "A new landmark for London's skyline, balancing transparency with structural integrity in a dense urban fabric.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2700&auto=format&fit=crop"
            }
        ];

        let currentIdx = 0;
        let isTransitioning = false;

        // Initialize Icons
        lucide.createIcons();

        // DOM Elements
        const elTitle = document.getElementById('hero-title');
        const elInfoContent = document.getElementById('hero-info-content');
        const elTagline = document.getElementById('info-tagline');
        const elClient = document.getElementById('info-client');
        const elCompleted = document.getElementById('info-completed');
        const elArea = document.getElementById('info-area');
        const elDesc = document.getElementById('info-desc');
        const elCounter = document.getElementById('hero-counter');
        const elDots = document.getElementById('hero-dots');
        const elBg1 = document.getElementById('hero-bg-1');
        const elBg2 = document.getElementById('hero-bg-2');

        // Initial Render
        function init() {
            // Set initial image
            elBg1.style.backgroundImage = `url(${projects[0].image})`;
            elBg2.style.backgroundImage = `url(${projects[0].image})`; // Preload current
            renderDots();
            lucide.createIcons();
        }

        function renderDots() {
            elDots.innerHTML = '';
            projects.forEach((_, idx) => {
                const dot = document.createElement('div');
                dot.className = `w-2 h-2 transition-all duration-300 ${idx === currentIdx ? 'bg-white' : 'border border-white/40 bg-transparent'}`;
                elDots.appendChild(dot);
            });
        }

        function updateProject(direction) {
            if (isTransitioning) return;
            isTransitioning = true;

            // Update Index
            if (direction === 'next') {
                currentIdx = (currentIdx + 1) % projects.length;
            } else {
                currentIdx = (currentIdx - 1 + projects.length) % projects.length;
            }

            const p = projects[currentIdx];

            // 1. Image Transition (Crossfade)
            // Determine which is visible
            const activeBg = elBg1.style.opacity !== '0' ? elBg1 : elBg2;
            const nextBg = activeBg === elBg1 ? elBg2 : elBg1;

            nextBg.style.backgroundImage = `url(${p.image})`;
            nextBg.style.zIndex = '2';
            activeBg.style.zIndex = '1';

            // Trigger Fade
            activeBg.style.opacity = '0';
            nextBg.style.opacity = '1';

            // 2. Text Content Transition
            // Fade out
            elInfoContent.classList.add('content-fade-out');
            elInfoContent.classList.remove('content-fade-in');
            
            elTitle.style.opacity = '0';
            elTitle.style.transform = 'translateY(20px)';

            setTimeout(() => {
                // Update Text Content
                elTitle.innerHTML = p.title;
                elTagline.innerHTML = p.tagline;
                elClient.textContent = p.client;
                elCompleted.textContent = p.completed;
                elArea.textContent = p.area;
                elDesc.textContent = p.desc;
                elCounter.textContent = `0${currentIdx + 1} / 0${projects.length}`;

                // Update Dots
                renderDots();

                // Fade In
                elInfoContent.classList.remove('content-fade-out');
                elInfoContent.classList.add('content-fade-in');
                
                elTitle.style.opacity = '1';
                elTitle.style.transform = 'translateY(0)';

                setTimeout(() => {
                    isTransitioning = false;
                }, 500);
            }, 300);
        }

        function nextProject() {
            updateProject('next');
        }

        function prevProject() {
            updateProject('prev');
        }

        // Router
        function router(viewName) {
            const views = ['home', 'projects', 'about', 'people', 'contact'];
            views.forEach(v => {
                const el = document.getElementById('view-' + v);
                if(el) {
                    el.classList.add('hidden');
                    el.classList.remove('fade-enter-active');
                }
            });

            const target = document.getElementById('view-' + viewName);
            if(target) {
                target.classList.remove('hidden');
                void target.offsetWidth; 
                target.classList.add('fade-enter-active');
                window.scrollTo(0,0);
            }
        }
        
        // Simple detail open function placeholder
        function openDetail(idx) {
           // In a full app, this would route to detail view with id
           console.log("Opening project", idx);
        }

        document.addEventListener("DOMContentLoaded", init);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 md:py-10 text-white mix-blend-normal">
<div className="flex items-center gap-12">

<button className="hover:text-brand-accent transition-colors duration-300">
<i className="w-5 h-5" data-lucide="grid-3x3"></i>
</button>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-tight uppercase text-white/80">
<button className="hover:text-white transition-colors duration-300" onclick="router('projects')">Projects</button>
<button className="hover:text-white transition-colors duration-300" onclick="router('about')">About</button>
<button className="hover:text-white transition-colors duration-300" onclick="router('people')">People</button>
<button className="hover:text-white transition-colors duration-300" onclick="router('contact')">Contact</button>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50" onclick="router('home')">
<div className="relative w-8 h-8">

<div className="absolute top-0 right-0 w-4 h-4 bg-brand-accent"></div>

<div className="absolute top-0 left-0 w-4 h-4 bg-zinc-600"></div>

<div className="absolute bottom-0 left-0 w-8 h-4 bg-white rounded-t-full"></div>
</div>
</div>

<div className="flex items-center gap-6 text-xs font-medium text-white/90">
<button className="hover:text-brand-accent transition-colors duration-300">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<div className="flex items-center gap-2 font-mono">
<span className="opacity-100">EN</span>
<button className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
<i className="w-3 h-3 ml-2 inline-block" data-lucide="mouse"></i>
</button>
</div>
</div>
</nav>

<main className="relative w-full min-h-screen" id="app-content">

<section className="relative w-full h-screen overflow-hidden" id="view-home">

<div className="absolute inset-0 z-0 bg-brand-dark">
<div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out opacity-0 brightness-[0.6] contrast-[1.1]" id="hero-bg-2"></div>
<div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out opacity-100 brightness-[0.6] contrast-[1.1]" id="hero-bg-1"></div>

<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-black/20"></div>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24">
<div className="w-full flex flex-col md:flex-row items-end md:items-center justify-between h-full pb-12 pt-24">

<div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
<h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold leading-[0.85] tracking-tighter text-white drop-shadow-2xl transition-all duration-500 ease-out origin-left" id="hero-title">
                            Brooklyn <br/>
                            Synagogue.
                        </h1>
</div>

<div className="w-full md:w-[26rem] glass-panel glass-glow p-8 md:p-10 relative group hover:border-white/40 transition-colors duration-500 flex flex-col justify-between min-h-[500px]">

<div className="absolute -inset-px rounded-sm bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none"></div>

<div className="flex flex-col h-full justify-between transition-all duration-500" id="hero-info-content">
<div>
<span className="text-xs font-bold tracking-widest uppercase text-white mb-8 block">info.</span>
<h2 className="text-3xl font-bold tracking-tighter leading-tight mb-8 text-white" id="info-tagline">
                                    Bold.<br/>
                                    Curved.<br/>
                                    Gentle.
                                </h2>
</div>

<div className="relative w-full h-16 mb-4 overflow-hidden">
<div className="absolute top-1/2 left-0 w-[120%] h-px bg-white/30 -rotate-12 origin-center transform -translate-x-4"></div>
</div>
<div className="space-y-8">

<div className="grid grid-cols-2 gap-y-6">
<div>
<p className="text-[11px] font-bold text-white mb-1">Client.</p>
<p className="text-[13px] text-gray-300 font-medium" id="info-client">Hebrew Society of Brooklyn</p>
</div>
<div></div> 
<div>
<p className="text-[11px] font-bold text-white mb-1">Completed.</p>
<p className="text-[13px] text-gray-300 font-mono" id="info-completed">01/01/2020</p>
</div>
<div>
<p className="text-[11px] font-bold text-white mb-1">Area</p>
<p className="text-[13px] text-gray-300 font-mono" id="info-area">25,452 sf.</p>
</div>
</div>

<div>
<p className="text-[11px] font-bold text-white mb-2">Architect</p>
<p className="text-[13px] leading-relaxed text-gray-300 font-medium" id="info-desc">
                                        Brooklyn Synagogue is a proposal for a new synagogue and community center in Brooklyn.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center z-20">
<span className="text-xs font-bold tracking-widest vertical-text -rotate-90 origin-center whitespace-nowrap mb-8 text-white/90 font-mono" id="hero-counter">
                        01 / 04
                    </span>
<div className="flex flex-col w-14 glass-panel border-r-0 rounded-l-sm overflow-hidden">
<button className="h-16 flex items-center justify-center hover:bg-white/10 transition-colors border-b border-white/10 text-white/60 hover:text-white group" onclick="prevProject()">
<i className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" data-lucide="chevron-up"></i>
</button>
<button className="h-16 flex items-center justify-center bg-brand-accent text-brand-dark hover:bg-[#bbe075] transition-colors" onclick="nextProject()">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="absolute bottom-8 left-8 md:left-12 text-[10px] text-white/60 tracking-wide flex items-center gap-2 font-medium">
<span>© 2025 J Frankl Architects. Design by Inspo.Graph</span>
</div>

<div className="absolute bottom-8 right-12 md:right-16 flex gap-3" id="hero-dots">

</div>
</div>
</section>

<section className="hidden min-h-screen pt-32 px-6 md:px-12 pb-20 fade-enter" id="view-projects">
<header className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
<h2 className="text-5xl font-semibold tracking-tighter text-white">Selected Works</h2>
<span className="text-sm text-brand-muted">2020 — 2025</span>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer" onclick="openDetail(0)">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<img className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start border-t border-white/10 pt-4">
<div>
<h3 className="text-xl font-medium mb-1 text-white">Brooklyn Synagogue</h3>
<p className="text-sm text-brand-muted">New York, USA</p>
</div>
<span className="text-sm font-mono text-brand-accent">2025</span>
</div>
</div>

<div className="group cursor-pointer" onclick="openDetail(1)">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<img className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start border-t border-white/10 pt-4">
<div>
<h3 className="text-xl font-medium mb-1 text-white">Nordic Museum</h3>
<p className="text-sm text-brand-muted">Oslo, Norway</p>
</div>
<span className="text-sm font-mono text-brand-muted">2023</span>
</div>
</div>
</div>
</section>

<section className="hidden min-h-screen pt-32 px-6 md:px-24 fade-enter" id="view-about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight mb-12 text-white">
                        We design spaces that silence the noise. Our architecture is a pursuit of clarity, light, and timeless form.
                    </h2>
</div>
</div>

</section>

<section className="hidden min-h-screen pt-32 px-6 md:px-12 fade-enter" id="view-people">
<h2 className="text-5xl font-semibold tracking-tighter mb-16 text-white">The Team</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="group">
<div className="w-full aspect-[3/4] bg-zinc-800 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=600"/>
</div>
<h3 className="text-lg font-medium text-white">Jonas Frankl</h3>
<p className="text-sm text-brand-muted">Principal</p>
</div>
</div>
</section>
<section className="hidden min-h-screen pt-32 px-6 md:px-24 fade-enter" id="view-contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
<div>
<h2 className="text-5xl font-semibold tracking-tighter mb-8 text-white">Get in touch.</h2>
<p className="text-brand-muted text-lg mb-12">142 Bowery St,<br/>New York, NY 10013</p>
<p className="text-brand-accent text-lg">hello@jfrankl.arch</p>
</div>
</div>
</section>
</main>


    </>
  );
}
