import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons({ strokeWidth: 1.5 });

        // --- Custom Cursor Logic ---
        const cursor = document.getElementById('cursor');
        const cursorGlow = document.getElementById('cursor-glow');
        const cursorText = document.getElementById('cursor-text');
        const interactives = document.querySelectorAll('.interactive, a, button, input, textarea');
        const customCursorAreas = document.querySelectorAll('[data-cursor]');

        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                // Smooth follow
                cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            });

            // Standard interactive hover
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.replace('w-3', 'w-10');
                    cursor.classList.replace('h-3', 'h-10');
                    cursor.classList.replace('bg-white', 'bg-transparent');
                    cursor.classList.add('border', 'border-white/50');
                    cursorGlow.classList.replace('opacity-0', 'opacity-30');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.replace('w-10', 'w-3');
                    cursor.classList.replace('h-10', 'h-3');
                    cursor.classList.replace('bg-transparent', 'bg-white');
                    cursor.classList.remove('border', 'border-white/50');
                    cursorGlow.classList.replace('opacity-30', 'opacity-0');
                });
            });

            // Text cursor hover (for cards, videos)
            customCursorAreas.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    const text = el.getAttribute('data-cursor');
                    cursorText.innerText = text;
                    cursor.classList.replace('w-10', 'w-24');
                    cursor.classList.replace('h-10', 'h-24');
                    cursor.classList.replace('border-white/50', 'border-[#FFC800]/50');
                    cursorGlow.classList.replace('opacity-30', 'opacity-50');
                    cursorText.classList.replace('opacity-0', 'opacity-100');
                    // Ensure bg is transparent during text display
                    cursor.classList.replace('bg-white', 'bg-black/50'); 
                    cursor.classList.add('backdrop-blur-sm');
                });
                el.addEventListener('mouseleave', () => {
                    cursorText.innerText = '';
                    cursor.classList.replace('w-24', 'w-10'); // Returns to standard hover size if nested, else to w-3 based on mouseleave order. Safe to reset fully.
                    cursor.classList.replace('border-[#FFC800]/50', 'border-white/50');
                    cursorGlow.classList.replace('opacity-50', 'opacity-30');
                    cursorText.classList.replace('opacity-100', 'opacity-0');
                    cursor.classList.replace('bg-black/50', 'bg-transparent');
                    cursor.classList.remove('backdrop-blur-sm');
                });
            });
        }

        // --- Epic Transition Logic ---
        const btnEnter = document.getElementById('btn-enter');
        const introGate = document.getElementById('intro-gate');
        const mainContent = document.getElementById('main-content');
        const flashScreen = document.getElementById('flash-screen');
        const transitionSvg = document.getElementById('transition-svg');
        const lightningPaths = document.querySelectorAll('.strike-path');

        btnEnter.addEventListener('click', () => {
            // 1. Show SVGs and trigger drawing animation
            transitionSvg.classList.remove('opacity-0');
            lightningPaths.forEach(path => path.classList.add('strike-active'));
            
            // 2. Shortly after, flash the screen white/yellow
            setTimeout(() => {
                flashScreen.classList.add('active');
                
                // Hide gate, show main content while screen is fully bright
                setTimeout(() => {
                    introGate.style.display = 'none';
                    mainContent.classList.remove('hidden', 'opacity-0');
                    document.body.classList.remove('overflow-hidden');
                    
                    // 3. Fade out flash
                    flashScreen.classList.remove('active');
                    flashScreen.classList.add('fade');
                    transitionSvg.classList.add('opacity-0');

                    // Trigger scroll reveals immediately for elements in view
                    checkScrollReveal();
                }, 100);
            }, 300); // Wait for lightning to draw
            
            // Clean up
            setTimeout(() => {
                flashScreen.style.display = 'none';
                transitionSvg.style.display = 'none';
            }, 2000);
        });

        // --- Scroll Reveal Logic ---
        const revealElements = document.querySelectorAll('.reveal');

        const checkScrollReveal = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight * 0.9) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', checkScrollReveal);

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
                navbar.classList.add('py-6');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<div className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[10000] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center" id="cursor">
<div className="absolute inset-0 rounded-full bg-[#FFC800] blur-md opacity-0 transition-opacity duration-300" id="cursor-glow"></div>
<span className="text-[8px] font-medium tracking-widest uppercase text-black opacity-0 transition-opacity duration-300" id="cursor-text"></span>
</div>

<div className="fixed inset-0 z-[5000] bg-[#030303] flex flex-col items-center justify-center overflow-hidden" id="intro-gate">

<div className="absolute inset-0 z-0">
<div className="lightning-flash-bg"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mask-image:linear-gradient(to_bottom,black,transparent)"></div>
<div className="window-storm"></div>
</div>
<div className="z-10 flex flex-col text-center max-w-screen-md mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="mb-12 opacity-80">
<svg className="h-16 w-auto fill-[#FFC800] drop-shadow-[0_0_20px_rgba(255,200,0,0.3)]" viewbox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
<path d="M5,100 L30,5 L48,5 L48,70 L72,60 L50,100 Z"></path>
<path d="M60,35 L95,20 C115,15 120,45 108,68 L85,100 L65,100 L95,55 Z"></path>
</svg>
</div>
<h1 className="md:text-6xl uppercase text-4xl font-medium text-zinc-100 tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Dynamic Promotions
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light tracking-wide mb-4">
                Creative video <span className="text-zinc-600 px-2">/</span> photography <span className="text-zinc-600 px-2">/</span> digital storytelling
            </p>
<p className="text-sm text-zinc-500 font-normal mb-16 italic">
                Připraveni tvořit něco výjimečného?
            </p>
<button className="group relative px-12 py-5 bg-[#0A0A0C] border border-white/10 rounded-full overflow-hidden interactive transition-all duration-500 hover:-translate-y-2 hover:border-[#FFC800]/50 hover:shadow-[0_0_40px_-5px_rgba(255,200,0,0.4)]" id="btn-enter">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFC800]/20 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] transition-transform"></div>
<span className="relative z-10 text-xs font-medium tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors flex items-center gap-3">
                    Vstoupit <i className="w-4 h-4 text-[#FFC800] group-hover:fill-[#FFC800] transition-colors" data-lucide="zap"></i>
</span>
</button>
</div>
</div>

<svg className="fixed inset-0 w-full h-full pointer-events-none z-[5001] opacity-0" id="transition-svg" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="strike-path" d="M50,50 L45,30 L60,20 L40,0" fill="none" id="lightning-path-1" stroke="#FFC800" strokeWidth="0.5" style={{filter: 'drop-shadow(0 0 5px #FF8C00)'}}></path>
<path className="strike-path" d="M50,50 L55,70 L30,80 L40,100" fill="none" id="lightning-path-2" stroke="#ffffff" strokeWidth="0.3" style={{filter: 'drop-shadow(0 0 3px #fff)'}}></path>
<path className="strike-path" d="M50,50 L70,60 L80,40 L100,60" fill="none" id="lightning-path-3" stroke="#FF8C00" strokeWidth="0.8" style={{filter: 'drop-shadow(0 0 8px #FFC800)'}}></path>
</svg>
<div className="transition-flash" id="flash-screen"></div>

<div className="opacity-0 hidden min-h-screen flex-col relative z-10" id="main-content">

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#FFC800]/5 blur-[150px] rounded-full animate-[pulse_10s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-[#FF8C00]/5 blur-[150px] rounded-full animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 px-6 py-6 transition-all duration-300" id="navbar">
<div className="max-w-screen-2xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-4 interactive group" href="#">
<svg className="h-6 w-auto fill-white group-hover:fill-[#FFC800] transition-colors duration-300" viewbox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
<path d="M5,100 L30,5 L48,5 L48,70 L72,60 L50,100 Z"></path>
<path d="M60,35 L95,20 C115,15 120,45 108,68 L85,100 L65,100 L95,55 Z"></path>
</svg>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-100 hidden sm:block opacity-0 md:opacity-100 transition-opacity">Dynamic Promotions</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium tracking-widest uppercase text-zinc-500 hover:text-white transition-colors interactive" href="#services">Služby</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-500 hover:text-white transition-colors interactive" href="#work">Projekty</a>
<a className="text-xs font-medium tracking-widest uppercase text-zinc-500 hover:text-white transition-colors interactive" href="#agency">Agentura</a>
</div>

<a className="inline-flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-6 md:py-3 bg-white text-black text-xs font-medium tracking-widest uppercase rounded-full hover:bg-[#FFC800] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,200,0,0.4)] interactive" href="#contact">
<span className="hidden md:block">Kontakt</span>
<i className="w-4 h-4 md:hidden" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
<main className="flex-grow pt-32 pb-24 space-y-40">

<section className="relative min-h-[85vh] flex items-center">
<div className="max-w-screen-2xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-7 flex flex-col items-start reveal">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md mb-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC800] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC800]"></span>
</span>
<span className="text-[10px] font-medium tracking-widest uppercase text-zinc-300">Příjmáme nové projekty</span>
</div>
<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight font-medium uppercase leading-[0.9] text-zinc-100 mb-8">
                            Co kdyby<br/>
                            vaše vize<br/>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC800] to-[#FF8C00] drop-shadow-[0_0_30px_rgba(255,200,0,0.3)]">
                                ožily?
                            </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-12">
                            Design, marketing a produkce, která nezná kompromisy. Tvoříme vizuální zážitky pro značky, které chtějí vést.
                        </p>
<div className="flex flex-wrap items-center gap-6 w-full">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC800] text-black text-xs font-medium tracking-widest uppercase rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,200,0,0.3)] interactive group" href="#contact">
                                Začít projekt <i className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/10 text-xs font-medium tracking-widest uppercase rounded-full hover:bg-white/5 transition-all duration-300 interactive gap-3 group" href="#showreel">
<i className="w-4 h-4 text-[#FFC800] group-hover:scale-110 transition-transform" data-lucide="play"></i> Showreel
                            </a>
</div>
</div>

<div className="lg:col-span-5 relative w-full aspect-[4/5] max-w-md mx-auto lg:mr-0 rounded-2xl glass-panel overflow-hidden group interactive reveal cursor-play" data-cursor="Přehrát">
<img alt="Cinematic Setup" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity group-hover:opacity-80 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>

<div className="absolute inset-0 border border-white/0 group-hover:border-[#FFC800]/30 rounded-2xl transition-all duration-700 pointer-events-none shadow-[inset_0_0_0_rgba(255,200,0,0)] group-hover:shadow-[inset_0_0_50px_rgba(255,200,0,0.2)]"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-20 h-20 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white scale-90 opacity-80 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-[#FFC800] group-hover:border-[#FFC800] group-hover:text-black transition-all duration-500">
<i className="w-8 h-8 ml-1 fill-current" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-10">
<div>
<span className="block text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-2 animate-pulse">Live</span>
<h3 className="text-2xl font-medium tracking-tight uppercase text-zinc-100">Agency Showreel 24'</h3>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 max-w-screen-2xl mx-auto" id="services">
<div className="reveal mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
<div>
<h2 className="text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-4">Co děláme</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase text-zinc-100">Naše Služby</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal cursor-view" data-cursor="Detail">
<div className="mb-8 relative w-16 h-16 floating-icon">
<div className="absolute inset-0 bg-[#FFC800]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-12 h-12 text-zinc-400 group-hover:text-[#FFC800] transition-colors duration-500 relative z-10 icon-glow" data-lucide="video"></i>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase text-zinc-100 mb-4 group-hover:text-white transition-colors">Video Produkce</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">High-end reklamní spoty a dynamické reels. Filmová kvalita, která strhne pozornost a odvypráví váš příběh.</p>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal cursor-view delay-100" data-cursor="Detail">
<div className="mb-8 relative w-16 h-16 floating-icon-delayed">
<div className="absolute inset-0 bg-[#FFC800]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-12 h-12 text-zinc-400 group-hover:text-[#FFC800] transition-colors duration-500 relative z-10 icon-glow" data-lucide="camera"></i>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase text-zinc-100 mb-4 group-hover:text-white transition-colors">Fotografie</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Produktová, fashion a lifestylová fotografie. Zachycujeme esenci značky do dokonalých vizuálů.</p>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal cursor-view delay-200" data-cursor="Detail">
<div className="mb-8 relative w-16 h-16 floating-icon">
<div className="absolute inset-0 bg-[#FFC800]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-12 h-12 text-zinc-400 group-hover:text-[#FFC800] transition-colors duration-500 relative z-10 icon-glow" data-lucide="aperture"></i>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase text-zinc-100 mb-4 group-hover:text-white transition-colors">Dron &amp; Letecké</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Epické záběry z ptačí perspektivy. FPV drony pro dynamické průlety a klasické drony pro velkolepé celky.</p>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal cursor-view" data-cursor="Detail">
<div className="mb-8 relative w-16 h-16 floating-icon-delayed">
<div className="absolute inset-0 bg-[#FFC800]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-12 h-12 text-zinc-400 group-hover:text-[#FFC800] transition-colors duration-500 relative z-10 icon-glow" data-lucide="heart"></i>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase text-zinc-100 mb-4 group-hover:text-white transition-colors">Sociální sítě</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Strategické řízení profilů. Tvoříme komunitu a konvertujeme sledující v loajální zákazníky.</p>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal cursor-view delay-100" data-cursor="Detail">
<div className="mb-8 relative w-16 h-16 floating-icon">
<div className="absolute inset-0 bg-[#FFC800]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-12 h-12 text-zinc-400 group-hover:text-[#FFC800] transition-colors duration-500 relative z-10 icon-glow" data-lucide="pen-tool"></i>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase text-zinc-100 mb-4 group-hover:text-white transition-colors">Kreativní koncept</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Od nápadu po scénář. Vymýšlíme kampaně, které mají hlavu, patu a jasný vizuální styl.</p>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal cursor-view delay-200" data-cursor="Detail">
<div className="mb-8 relative w-16 h-16 floating-icon-delayed">
<div className="absolute inset-0 bg-[#FFC800]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-12 h-12 text-zinc-400 group-hover:text-[#FFC800] transition-colors duration-500 relative z-10 icon-glow" data-lucide="bar-chart-2"></i>
</div>
<h4 className="text-xl font-medium tracking-tight uppercase text-zinc-100 mb-4 group-hover:text-white transition-colors">Analytika &amp; Růst</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Data řídí naše rozhodnutí. Měříme výkon, optimalizujeme kampaně a zajišťujeme maximální ROI.</p>
</div>
</div>
</section>

<section className="relative z-10 px-6 max-w-screen-2xl mx-auto overflow-hidden" id="agency">
<div className="reveal mb-12">
<h2 className="text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-4">Lidé za značkou</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase text-zinc-100">Náš Tým</h3>
</div>
<div className="flex flex-col md:flex-row h-[600px] gap-4 team-container reveal w-full">

<div className="relative team-panel rounded-2xl overflow-hidden group interactive cursor-view bg-zinc-900 border border-white/5" data-cursor="Profil">
<img alt="Dominik Chvala" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="transform md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-8 md:left-14 whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300 hidden md:block">
<span className="text-2xl font-medium tracking-tight uppercase text-zinc-400">Dominik Chvala</span>
</div>
</div>

<div className="absolute bottom-0 left-0 p-8 w-full md:w-auto md:min-w-[300px] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end h-full">
<span className="text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-2">Founder &amp; Director</span>
<h4 className="text-3xl font-medium tracking-tight uppercase text-white mb-4">Dominik Chvala</h4>
<p className="text-sm text-zinc-300 font-light hidden md:block line-clamp-3">Vizuální stratég a režisér. Spojuje byznys s nekompromisní estetikou. Má za sebou desítky úspěšných kampaní pro prémiové značky.</p>
</div>
</div>

<div className="relative team-panel rounded-2xl overflow-hidden group interactive cursor-view bg-zinc-900 border border-white/5" data-cursor="Profil">
<img alt="Kamila Tomanová" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="transform md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-8 md:left-14 whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300 hidden md:block">
<span className="text-2xl font-medium tracking-tight uppercase text-zinc-400">Kamila Tomanová</span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full md:w-auto md:min-w-[300px] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end h-full">
<span className="text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-2">Head of Production</span>
<h4 className="text-3xl font-medium tracking-tight uppercase text-white mb-4">Kamila Tomanová</h4>
<p className="text-sm text-zinc-300 font-light hidden md:block line-clamp-3">Udržuje chaos v řádu. Zodpovídá za bezchybný chod natáčení a produkční plánování od A do Z.</p>
</div>
</div>

<div className="relative team-panel rounded-2xl overflow-hidden group interactive cursor-view bg-zinc-900 border border-white/5" data-cursor="Profil">
<img alt="Creative Lead" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="transform md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-8 md:left-14 whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300 hidden md:block">
<span className="text-2xl font-medium tracking-tight uppercase text-zinc-400">Martin Kříž</span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full md:w-auto md:min-w-[300px] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end h-full">
<span className="text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-2">Art Director</span>
<h4 className="text-3xl font-medium tracking-tight uppercase text-white mb-4">Martin Kříž</h4>
<p className="text-sm text-zinc-300 font-light hidden md:block line-clamp-3">Oko pro detail. Definuje vizuální identitu projektů a posouvá hranice digitálního designu a motion grafiky.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 max-w-screen-2xl mx-auto">
<div className="reveal mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
<div>
<h2 className="text-[10px] font-medium tracking-widest uppercase text-[#FFC800] mb-4">Klientské Zkušenosti</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight uppercase text-zinc-100">Recenze</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal">
<div className="flex gap-1 mb-6 text-[#FFC800]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-8 italic">„Spolupráce byla skvělá. Video posunulo naši značku výrazně dál. Tým pochopil přesně, co potřebujeme a dodal výsledek v brutální kvalitě.“</p>
<div>
<span className="block text-sm font-medium uppercase text-white tracking-widest">Jan Novák</span>
<span className="block text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Marketing Director, Vertex</span>
</div>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal delay-100">
<div className="flex gap-1 mb-6 text-[#FFC800]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-8 italic">„Bezkonkurenční přístup. Od prvního konceptu až po finální export. Obsah na sítě nám raketově zvedl dosahy a konverze.“</p>
<div>
<span className="block text-sm font-medium uppercase text-white tracking-widest">Petra Dvořáková</span>
<span className="block text-[10px] text-zinc-500 uppercase tracking-widest mt-1">CEO, Aura Beauty</span>
</div>
</div>

<div className="glass-panel p-10 rounded-2xl hover-glow group interactive reveal delay-200">
<div className="flex gap-1 mb-6 text-[#FFC800]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-8 italic">„Epické záběry z dronu a dynamický střih. Přesně tohle naše kampaň na novou kolekci potřebovala. Profesionálové každým coulem.“</p>
<div>
<span className="block text-sm font-medium uppercase text-white tracking-widest">Tomáš Rubeš</span>
<span className="block text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Brand Manager, Pulse</span>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10 bg-[#050505] border-t border-white/5 pt-20 pb-10">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFC800]/20 to-transparent"></div>
<div className="max-w-screen-2xl mx-auto px-6 reveal">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

<div className="md:col-span-1">
<svg className="h-8 w-auto fill-white mb-6" viewbox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
<path d="M5,100 L30,5 L48,5 L48,70 L72,60 L50,100 Z"></path>
<path d="M60,35 L95,20 C115,15 120,45 108,68 L85,100 L65,100 L95,55 Z"></path>
</svg>
<p className="text-sm text-zinc-500 font-light mb-6">Tvoříme vizuální zážitky, které prodávají. Pojďme spojit síly.</p>
<a className="text-xs font-medium tracking-widest uppercase text-white hover:text-[#FFC800] transition-colors interactive flex items-center gap-2" href="#contact">
                            hello@dynamic.cz <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="md:col-span-1">
<h4 className="text-[10px] font-medium tracking-widest uppercase text-zinc-600 mb-6">Sitemap</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive" href="#">Domů</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive" href="#work">Projekty</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive" href="#services">Služby</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive" href="#agency">Agentura</a></li>
</ul>
</div>

<div className="md:col-span-1">
<h4 className="text-[10px] font-medium tracking-widest uppercase text-zinc-600 mb-6">Socials</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="instagram"></i> Instagram</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i> LinkedIn</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors interactive flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="youtube"></i> YouTube</a></li>
</ul>
</div>

<div className="md:col-span-1">
<h4 className="text-[10px] font-medium tracking-widest uppercase text-zinc-600 mb-6">Newsletter</h4>
<p className="text-xs text-zinc-500 font-light mb-4">Dostávejte občasnou dávku inspirace.</p>
<form className="flex border-b border-zinc-800 pb-2 group interactive">
<input className="bg-transparent text-sm text-white w-full outline-none placeholder:text-zinc-700" placeholder="vas@email.cz" type="email"/>
<button className="text-zinc-400 group-hover:text-[#FFC800] transition-colors" type="button"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-[10px] text-zinc-600 tracking-widest uppercase mb-4 md:mb-0">© 2024 Dynamic Promotions. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 tracking-widest uppercase transition-colors interactive" href="#">Privacy Policy</a>
<a className="text-[10px] text-zinc-600 hover:text-zinc-400 tracking-widest uppercase transition-colors interactive" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
