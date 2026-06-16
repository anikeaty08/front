import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        window.addEventListener('load', () => {
            const progress = document.getElementById('loader-progress');
            const preloader = document.getElementById('preloader');

            let loadVal = 0;
            const loadInterval = setInterval(() => {
                loadVal += Math.random() * 10 + 5;
                if(loadVal > 100) loadVal = 100;
                progress.style.width = loadVal + '%';

                if(loadVal === 100) {
                    clearInterval(loadInterval);
                    setTimeout(() => {
                        preloader.classList.add('loaded');
                        document.querySelector('#hero').classList.add('hero-revealed');
                        setTimeout(revealOnScroll, 500);
                    }, 500);
                }
            }, 50);
        });

        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);

        const cardsContainer = document.getElementById('cards-container');
        const dots = [
          document.getElementById('dot-1'),
          document.getElementById('dot-2'),
          document.getElementById('dot-3'),
          document.getElementById('dot-4')
        ];

        let currentCard = 1;
        let isAnimating = false;

        function updateDots() {
            if(!cardsContainer) return;
            dots.forEach((dot, index) => {
                if (index === currentCard - 1) {
                dot.className = 'cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]';
                } else {
                dot.className = 'cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300';
                }
            });
        }

        function setActiveCard(cardNumber) {
          if(!cardsContainer) return;
          if (isAnimating || cardNumber === currentCard) return;

          isAnimating = true;
          cardsContainer.className = `stack-section card-${cardNumber}-active relative`;
          currentCard = cardNumber;
          updateDots();

          setTimeout(() => {
            isAnimating = false;
          }, 800);
        }

        dots.forEach((dot, index) => {
          if(dot) {
              dot.addEventListener('click', () => {
                setActiveCard(index + 1);
              });
          }
        });

        if(cardsContainer) {
            setInterval(() => {
              if (!isAnimating) {
                const nextCard = currentCard === 4 ? 1 : currentCard + 1;
                setActiveCard(nextCard);
              }
            }, 5000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor"></div>
<div className="noise-overlay"></div>
<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="liquid-blob bg-[#1a2c5b]" style={{width: '500px', height: '500px', top: '-100px', left: '-100px', animationDuration: '15s'}}></div>
<div className="liquid-blob bg-slate-600/50" style={{width: '400px', height: '400px', top: '40%', right: '-100px', animationDuration: '20s', animationDelay: '-5s'}}></div>
<div className="liquid-blob bg-[#1a2c5b]" style={{width: '600px', height: '600px', bottom: '-150px', left: '20%', animationDuration: '25s', animationDelay: '-10s'}}></div>
</div>
<div id="preloader">
<div className="flex flex-col items-center gap-4 px-4 text-center">
<span className="font-heading tracking-[0.2em] text-xs uppercase text-white/50" id="loader-text">INITIATING EXECUTIVE SEARCH</span>
<div className="loader-bar">
<div className="loader-progress" id="loader-progress"></div>
</div>
</div>
</div>
<nav className="fixed w-full z-[60] top-0 transition-all duration-300 py-4 max-w-[100vw]">
<div className="max-w-7xl mx-auto px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between border-white/10 bg-white/[0.02]">
<a className="cursor-hover group flex flex-col w-fit" href="#">
<span className="font-heading font-medium text-xl tracking-tight text-white leading-none flex items-center">
                        accsensia<span className="text-white font-extrabold ml-1 translate-y-[0.05em]">&gt;</span>
</span>
</a>
<div className="hidden lg:flex items-center gap-6">
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#about">About</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#sectors">Sectors</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#process">Process</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#candidates">Candidates</a>
</div>
<div className="hidden lg:block">
<a className="cursor-hover px-5 py-2.5 bg-[#007bff] text-white rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_15px_rgba(0,123,255,0.3)]" href="#contact">
                        Discuss a Mandate
                    </a>
</div>
<button className="lg:hidden text-white cursor-hover flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden max-w-[100vw]" id="hero">

<div className="absolute inset-0 z-0 overflow-hidden bg-[#050a14]">
<video autoplay="" className="hero-video absolute inset-0 w-full h-full object-cover" id="hero-video" loop="" muted="" playsinline="" preload="auto">
<source src="https://res.cloudinary.com/dvcbw9vh1/video/upload/v1772104649/iStock-2205039420_dkkkuw.mp4" type="video/mp4"/>
</video>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050a14] to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
<h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-white hero-anim hero-anim-1" style={{filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.9)) drop-shadow(0px 2px 4px rgba(0,0,0,0.9))'}}>
<span className="block">People Who Move</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Businesses Forward</span>
</h1>
<p className="mt-8 text-base md:text-lg text-white font-light max-w-3xl mx-auto leading-relaxed hero-anim hero-anim-2" style={{textShadow: '0px 4px 20px rgba(0,0,0,0.9), 0px 2px 6px rgba(0,0,0,0.9)'}}>
                Strategic executive search and senior talent solutions for organisations operating in high-growth and complex sectors. We partner with businesses to secure leadership talent that drives strategy, execution, and long-term growth.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full hero-anim hero-anim-3">
<a className="cursor-hover w-full sm:w-auto px-8 py-4 bg-[#007bff] text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,123,255,0.4)] text-center" href="#contact">
                    Connect With Accsensia
                </a>
<a className="cursor-hover w-full sm:w-auto px-8 py-4 glass-panel border border-white/20 text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center bg-black/30" href="#solutions">
                    Discuss a Leadership Mandate
                </a>
</div>
<div className="mt-16 flex items-center justify-center gap-8 text-[0.65rem] uppercase tracking-[0.2em] text-white/90 hero-anim hero-anim-4 font-medium" style={{textShadow: '0px 4px 12px rgba(0,0,0,0.9), 0px 2px 4px rgba(0,0,0,0.9)'}}>
<span>Executive Search</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/60" style={{boxShadow: '0 2px 6px rgba(0,0,0,0.9)'}}></span>
<span>Senior Appointments</span>
<span className="w-1.5 h-1.5 rounded-full bg-white/60" style={{boxShadow: '0 2px 6px rgba(0,0,0,0.9)'}}></span>
<span>Strategic Sectors</span>
</div>
</div>
</header>
<section className="py-10 border-y border-white/5 bg-white/[0.01] backdrop-blur-md relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="font-heading text-sm md:text-base font-medium tracking-widest text-white uppercase leading-relaxed flex flex-wrap justify-center items-center gap-y-2">
<span>Executive Search</span>
<span className="text-[#007bff] mx-3 hidden sm:inline">|</span>
<span>Senior Appointments</span>
<span className="text-[#007bff] mx-3 hidden md:inline">|</span>
<span>Strategic Talent Mapping</span>
<span className="text-[#007bff] mx-3 hidden lg:inline">|</span>
<span>Leadership Team Build-Outs</span>
</h2>
<p className="text-xs text-gray-500 mt-4 tracking-wider uppercase">Address your growth demands and meet the talent that fits your needs.</p>
</div>
</section>
<section className="pt-32 pb-20 relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="flex items-center space-x-2 mb-6">
<div className="w-1.5 h-1.5 bg-[#007bff] rounded-full animate-pulse shadow-[0_0_10px_#007bff]"></div>
<p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">Strategic Talent Solutions</p>
</div>
<h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-8 text-white leading-tight">Driving Growth Through<br/><span className="text-gray-500">Strategic Talent Solutions</span></h2>
</div>
<div className="reveal delay-100 space-y-6 text-base text-gray-400 leading-relaxed font-light">
<p>Accsensia provides executive search and senior recruitment solutions for organisations seeking high-calibre leadership talent across strategically important sectors.</p>
<p>We work in close partnership with boards, founders, CEOs, and senior hiring stakeholders to understand the broader context of each mandate — business objectives, organisational dynamics, and the leadership capability required to deliver results.</p>
<p className="text-white font-medium">Our approach combines:</p>
<ul className="space-y-3 pl-4 border-l border-[#007bff]/30">
<li className="flex items-center gap-3"><iconify-icon className="text-[#007bff]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon> Executive search and selection methodologies</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#007bff]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon> Market mapping and talent intelligence</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#007bff]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon> Discreet engagement of senior professionals</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#007bff]" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon> Structured assessment aligned to strategic fit</li>
</ul>
<p className="pt-4 border-t border-white/10 italic text-gray-300">We do not simply fill roles. We help clients strengthen leadership teams and build the capability required for sustainable growth.</p>
</div>
</div>
</div>
</section>
<section className="py-20 relative z-10 bg-black/20">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal text-center">
<h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Why Organisations<br/><span className="text-gray-500">Partner With Accsensia</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#007bff] mb-6 group-hover:scale-110 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Strategic Search with Business Alignment</h3>
<p className="text-sm text-gray-400 leading-relaxed">We approach each mandate through a commercial lens, ensuring leadership appointments are aligned to your growth plans, operating model, and long-term objectives.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#007bff] mb-6 group-hover:scale-110 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Focused Access to Senior Talent</h3>
<p className="text-sm text-gray-400 leading-relaxed">Our search model is designed to identify and engage high-calibre professionals beyond active applicants, giving clients access to deeper talent pools.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#007bff] mb-6 group-hover:scale-110 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Discreet, Professional Delivery</h3>
<p className="text-sm text-gray-400 leading-relaxed">Senior hiring often requires confidentiality, precision, and stakeholder alignment. We manage each process with professionalism from briefing through to completion.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-300">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#007bff] mb-6 group-hover:scale-110 group-hover:bg-[#007bff] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Sector-Led Search Capability</h3>
<p className="text-sm text-gray-400 leading-relaxed">We focus on sectors where leadership quality and specialist expertise are critical to performance, transformation, and value creation.</p>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden z-10 min-h-[90vh] flex items-center max-w-[100vw]" id="solutions">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-[#1a2c5b]/30 to-transparent pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 w-full h-full relative z-10">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
<div className="flex-1 max-w-xl lg:pr-8 reveal">
<div className="flex items-center space-x-2 mb-6">
<div className="w-1.5 h-1.5 bg-[#007bff] rounded-full animate-pulse shadow-[0_0_10px_#007bff]"></div>
<p className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">Core Capabilities</p>
</div>
<div className="mb-12">
<h2 className="font-heading text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-6 text-white">
                            Executive Search<br/><span className="text-gray-500">Solutions</span>
</h2>
<p className="text-base text-gray-400 leading-relaxed max-w-md">
                            We support organisations with senior and executive hiring mandates where leadership capability, technical depth, and strategic judgement are essential.
                        </p>
</div>
<div className="flex space-x-4 items-center pl-1">
<button className="cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]" id="dot-1"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-4"></button>
</div>
</div>
<div className="flex flex-col space-y-8 items-center w-full lg:w-auto reveal delay-200">
<div className="stack-section card-1-active relative" id="cards-container">
<div className="stack-card glass-panel rounded-2xl h-[32rem] md:h-[34rem] border border-white/10 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<div className="flex items-center space-x-3">
<iconify-icon className="text-[#007bff] text-xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Mandate Focus</span>
</div>
<span className="glass-panel px-3 py-1.5 rounded text-[0.65rem] uppercase tracking-wider text-white">C-Suite &amp; Board</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-2 text-white">Executive Search</h3>
<p className="text-xs text-[#007bff] mb-6 uppercase tracking-widest font-medium">End-to-end critical appointments</p>
<p className="text-sm text-gray-300 mb-6 leading-relaxed">We deliver mandates across C-suite, board, and senior leadership positions, tailored to the complexity of each appointment.</p>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-[#007bff]" icon="solar:check-circle-linear"></iconify-icon> CEO &amp; MD</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-[#007bff]" icon="solar:check-circle-linear"></iconify-icon> CFO &amp; COO</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-[#007bff]" icon="solar:check-circle-linear"></iconify-icon> CTO &amp; CISO</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-[#007bff]" icon="solar:check-circle-linear"></iconify-icon> Head of Strategy</div>
</div>
</div>
</div>
</div>
<div className="stack-card glass-panel rounded-2xl h-[32rem] md:h-[34rem] border border-white/10 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<div className="flex items-center space-x-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:diagram-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Mandate Focus</span>
</div>
<span className="glass-panel px-3 py-1.5 rounded text-[0.65rem] uppercase tracking-wider text-white">Functional Heads</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-2 text-white">Senior Functional Search</h3>
<p className="text-xs text-emerald-400 mb-6 uppercase tracking-widest font-medium">Specialist Leadership</p>
<p className="text-sm text-gray-300 mb-6 leading-relaxed">We support the recruitment of senior professionals who provide the expertise and leadership capacity required in high-performance organisations.</p>
<div className="space-y-3 mt-auto">
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Finance &amp; Investment</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Technical &amp; Engineering</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Cyber, Risk &amp; Governance</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> AI &amp; Data Leadership</div>
</div>
</div>
</div>
</div>
<div className="stack-card glass-panel rounded-2xl h-[32rem] md:h-[34rem] border border-white/10 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<div className="flex items-center space-x-3">
<iconify-icon className="text-purple-400 text-xl" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Mandate Focus</span>
</div>
<span className="glass-panel px-3 py-1.5 rounded text-[0.65rem] uppercase tracking-wider text-white">Intelligence</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-2 text-white">Strategic Talent Mapping</h3>
<p className="text-xs text-purple-400 mb-6 uppercase tracking-widest font-medium">Market Intelligence</p>
<p className="text-sm text-gray-300 mb-6 leading-relaxed">For organisations preparing for a critical appointment, we provide market mapping and talent intelligence before launching a formal process.</p>
<div className="space-y-3 mt-auto">
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Talent Landscape Analysis</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Target Company Mapping</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Compensation Insight</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Succession Strategy Support</div>
</div>
</div>
</div>
</div>
<div className="stack-card glass-panel rounded-2xl h-[32rem] md:h-[34rem] border border-white/10 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
<div className="flex items-center space-x-3">
<iconify-icon className="text-orange-400 text-xl" icon="solar:structure-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Mandate Focus</span>
</div>
<span className="glass-panel px-3 py-1.5 rounded text-[0.65rem] uppercase tracking-wider text-white">Scaling &amp; Growth</span>
</div>
<div className="flex-1 flex flex-col">
<h3 className="font-heading text-2xl font-semibold tracking-tight mb-2 text-white">Team Build-Outs</h3>
<p className="text-xs text-orange-400 mb-6 uppercase tracking-widest font-medium">Building Capability</p>
<p className="text-sm text-gray-300 mb-6 leading-relaxed">Where clients are establishing a new division, entering a new market, or strengthening leadership capacity, we support coordinated hiring.</p>
<div className="space-y-3 mt-auto">
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Coordinated Multi-Hire</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Market Entry Leadership</div>
<div className="text-xs text-gray-400 flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Division Establishment</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 relative z-10 bg-black/20 border-y border-white/5" id="sectors">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal text-center max-w-2xl mx-auto">
<h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Sectors We<br/><span className="text-gray-500">Cover</span></h2>
<p className="text-gray-400 text-base leading-relaxed">Accsensia focuses on sectors where leadership quality, specialist expertise, and execution capability have a disproportionate impact on outcomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal">
<div className="w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/10 relative">
<img alt="Renewable Energy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Renewable Energy</h3>
<p className="text-sm text-gray-400 leading-relaxed">Executive and senior search across clean energy, transition, and infrastructure — supporting leadership hires in operations, project delivery, strategy, and finance.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100">
<div className="w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/10 relative">
<img alt="Mining" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/873a8774-75ec-42d9-bdbc-7a13566bfb75_800w.png?w=800&amp;q=80"/>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Mining</h3>
<p className="text-sm text-gray-400 leading-relaxed">Senior and executive recruitment for natural resources organisations, including commercial, finance, technical, and leadership appointments in complex environments.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/10 relative">
<img alt="Artificial Intelligence" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Artificial Intelligence (AI)</h3>
<p className="text-sm text-gray-400 leading-relaxed">Search solutions for senior AI, data, and technology leaders who can translate technical innovation into scalable business performance.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal">
<div className="w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/10 relative">
<img alt="Cybersecurity" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Cybersecurity</h3>
<p className="text-sm text-gray-400 leading-relaxed">Executive and leadership hiring for organisations building digital resilience, security capability, and governance across evolving risk environments.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-100 bg-[#1a2c5b]/20 border border-[#1a2c5b]/40">
<div className="w-full h-32 mb-6 rounded-xl overflow-hidden border border-[#1a2c5b]/50 relative">
<img alt="Finance" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Investment Banking &amp; Finance</h3>
<p className="text-sm text-gray-400 leading-relaxed">Senior appointments across investment banking, corporate finance, and broader financial services, including strategic finance and transaction leadership.</p>
</div>
<div className="glass-panel p-8 rounded-2xl cursor-hover group reveal delay-200">
<div className="w-full h-32 mb-6 rounded-xl overflow-hidden border border-white/10 relative">
<img alt="Defence &amp; Security" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8914e18-27e5-4a9a-88e6-2c9bdc9541cd_800w.png?w=800&amp;q=80"/>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">Defence &amp; Security</h3>
<p className="text-sm text-gray-400 leading-relaxed">Senior appointments and executive search across the defence, aerospace, and national security sectors, identifying leaders capable of navigating highly regulated environments.</p>
</div>
</div>
</div>
</section>
<section className="py-32 relative z-10 overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal">
<h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">A Structured Approach to<br/><span className="text-gray-500">Executive Hiring</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
<div className="reveal delay-100 flex flex-col relative">
<div className="text-5xl font-heading font-medium text-white/10 mb-4">01</div>
<h4 className="font-heading text-lg font-medium text-white mb-3">Mandate Definition</h4>
<p className="text-sm text-gray-400">We align on the strategic brief, success profile, reporting lines, and leadership requirements of the role.</p>
<div className="hidden lg:block absolute top-6 -right-3 w-6 border-t border-white/10"></div>
</div>
<div className="reveal delay-200 flex flex-col relative pt-0 lg:pt-8">
<div className="text-5xl font-heading font-medium text-white/20 mb-4">02</div>
<h4 className="font-heading text-lg font-medium text-white mb-3">Market Mapping</h4>
<p className="text-sm text-gray-400">We identify target organisations, relevant talent pools, and candidate profiles through structured research and market intelligence.</p>
<div className="hidden lg:block absolute top-14 -right-3 w-6 border-t border-white/10"></div>
</div>
<div className="reveal delay-300 flex flex-col relative">
<div className="text-5xl font-heading font-medium text-white/30 mb-4">03</div>
<h4 className="font-heading text-lg font-medium text-white mb-3">Search &amp; Engagement</h4>
<p className="text-sm text-gray-400">We conduct targeted outreach and discreet engagement with senior professionals aligned to the mandate.</p>
<div className="hidden lg:block absolute top-6 -right-3 w-6 border-t border-white/10"></div>
</div>
<div className="reveal delay-400 flex flex-col relative pt-0 lg:pt-8">
<div className="text-5xl font-heading font-medium text-white/40 mb-4">04</div>
<h4 className="font-heading text-lg font-medium text-white mb-3">Assessment &amp; Shortlist</h4>
<p className="text-sm text-gray-400">We assess candidates against leadership capability, technical fit, motivations, and organisational alignment.</p>
<div className="hidden lg:block absolute top-14 -right-3 w-6 border-t border-white/10"></div>
</div>
<div className="reveal delay-500 flex flex-col relative">
<div className="text-5xl font-heading font-medium text-[#007bff] mb-4 drop-shadow-[0_0_15px_rgba(0,123,255,0.4)]">05</div>
<h4 className="font-heading text-lg font-medium text-white mb-3">Offer &amp; Completion</h4>
<p className="text-sm text-gray-400">We support stakeholder coordination, candidate management, and offer discussions to drive a successful conclusion.</p>
</div>
</div>
</div>
</section>
<section className="py-24 relative z-10 bg-black/20 border-t border-white/5" id="candidates">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal glass-panel p-10 rounded-2xl">
<h3 className="font-heading text-2xl font-medium text-white mb-8 tracking-tight">What Executive Search Should Deliver</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#007bff] mt-1 text-xl shrink-0" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-sm text-gray-300 leading-relaxed">Leadership appointments aligned to strategic priorities</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#007bff] mt-1 text-xl shrink-0" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-sm text-gray-300 leading-relaxed">Access to high-calibre talent not visible through standard hiring channels</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#007bff] mt-1 text-xl shrink-0" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-sm text-gray-300 leading-relaxed">Better hiring decisions through structured assessment and market insight</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#007bff] mt-1 text-xl shrink-0" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-sm text-gray-300 leading-relaxed">Reduced risk on critical senior appointments</span>
</li>
</ul>
</div>
<div className="reveal delay-200 flex flex-col justify-center">
<div className="flex items-center space-x-2 mb-6">
<iconify-icon className="text-gray-500 text-lg" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Candidate Network</p>
</div>
<h3 className="font-heading text-3xl font-medium text-white mb-6 tracking-tight">For Senior Professionals<br/>and Executives</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">
                    We work with experienced leaders and senior professionals across our focus sectors, supporting confidential discussions around career progression, leadership opportunities, and strategic appointments.
                </p>
<p className="text-base text-gray-400 leading-relaxed mb-8">
                    Our approach is professional, discreet, and relationship-led — with a focus on long-term alignment for both client and candidate.
                </p>
<a className="cursor-hover w-fit px-8 py-3 glass-panel border border-white/20 text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                    Connect With Our Team
                </a>
</div>
</div>
</section>
<section className="py-32 relative z-10" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-tight">Transforming Vision<br/><span className="text-[#007bff]">Into Capability</span></h2>
<p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mb-10">
                    Whether you are appointing a key executive, strengthening a senior leadership team, or planning a strategic hire, Accsensia provides executive search support built around your growth objectives.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="cursor-hover px-8 py-4 bg-[#007bff] text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center shadow-[0_0_20px_rgba(0,123,255,0.3)]">
                        Speak to Accsensia
                    </button>
<button className="cursor-hover px-8 py-4 glass-panel border border-white/20 text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center">
                        Start a Search Brief
                    </button>
</div>
</div>
<div className="reveal delay-200 glass-panel p-8 md:p-10 rounded-2xl border-white/10 bg-black/40">
<h3 className="font-heading text-xl font-medium text-white mb-8 tracking-tight border-b border-white/10 pb-4">Submit a Confidential Enquiry</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium ml-1">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#007bff] transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium ml-1">Company</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#007bff] transition-colors" placeholder="Organisation Name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium ml-1">Work Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#007bff] transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium ml-1">Phone Number (Optional)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#007bff] transition-colors" placeholder="+44 20 7946 0958" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium ml-1">Hiring Need / Mandate Type</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#007bff] transition-colors cursor-hover">
<option disabled="" selected="" value="">Select an option...</option>
<option value="Executive Search">Executive Search</option>
<option value="Senior Functional Hire">Senior Functional Hire</option>
<option value="Strategic Talent Mapping">Strategic Talent Mapping</option>
<option value="Leadership Team Build-Out">Leadership Team Build-Out</option>
<option value="Candidate Enquiry">Candidate Enquiry</option>
<option value="Other">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#007bff] transition-colors resize-none" placeholder="Briefly describe your requirements..." rows="4"></textarea>
</div>
<button className="cursor-hover w-full py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#007bff] hover:text-white transition-all duration-300" type="button">
                        Submit Enquiry
                    </button>
</form>
</div>
</div>
</section>
<footer className="bg-black/80 backdrop-blur-xl pt-24 pb-8 border-t border-white/10 relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="space-y-4 lg:col-span-1">
<a className="cursor-hover group flex flex-col w-fit" href="#">
<span className="font-heading font-medium text-2xl tracking-tight text-white leading-none flex items-center">
                            accsensia<span className="text-white font-extrabold ml-1 translate-y-[0.05em]">&gt;</span>
</span>
</a>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">Executive search and senior recruitment solutions for strategic sectors.</p>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-xs uppercase tracking-widest">Solutions</h5>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#solutions">Executive Search</a></li>
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#solutions">Senior Functional Search</a></li>
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#solutions">Strategic Talent Mapping</a></li>
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#solutions">Leadership Team Build-Outs</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-xs uppercase tracking-widest">Sectors</h5>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#sectors">Renewable Energy</a></li>
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#sectors">Mining</a></li>
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#sectors">Artificial Intelligence (AI)</a></li>
<li><a className="cursor-hover hover:text-[#007bff] transition-colors" href="#sectors">Cybersecurity</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-xs uppercase tracking-widest">Connect</h5>
<div className="space-y-6">
<div>
<p className="text-[0.65rem] uppercase tracking-widest text-gray-500 mb-1">Global Office</p>
<a className="cursor-hover text-gray-300 text-sm hover:text-white transition-colors" href="tel:+442080814222">+44 20 8081 4222</a>
</div>
<div>
<p className="text-[0.65rem] uppercase tracking-widest text-gray-500 mb-1">Confidential Inquiry</p>
<a className="cursor-hover text-gray-300 text-sm hover:text-white transition-colors" href="mailto:contact@accsensia.com">contact@accsensia.com</a>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] uppercase tracking-widest text-gray-600">
<p>© Accsensia. All rights reserved.</p>
<div className="flex gap-6">
<a className="cursor-hover hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="cursor-hover hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
