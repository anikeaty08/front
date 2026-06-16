import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
rulo: {
green: '#004225',
ivory: '#F7F1E5',
lime: '#C8FFDC',
orange: '#D96C06',
black: '#1a1a1a',
}
},
fontFamily: {
sans: ['Raleway', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.03em',
widest: '0.15em',
},
transitionTimingFunction: {
'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
'slow-mo': 'cubic-bezier(0.7, 0, 0.3, 1)',
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
}
}
}
}



        // Icons
        lucide.createIcons();

        // Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const triggers = document.querySelectorAll('.hover-trigger');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add Listeners to existing and new elements
        function updateCursorListeners() {
            document.querySelectorAll('.hover-trigger').forEach(trigger => {
                trigger.addEventListener('mouseenter', () => {
                    document.body.classList.add('hovering');
                    const text = trigger.getAttribute('data-cursor');
                    if(text) {
                        cursorOutline.style.width = '80px';
                        cursorOutline.style.height = '80px';
                    }
                });
                trigger.addEventListener('mouseleave', () => {
                    document.body.classList.remove('hovering');
                    cursorOutline.style.width = '40px';
                    cursorOutline.style.height = '40px';
                });
            });
        }
        updateCursorListeners();

        // 3D Tilt Effect on Hero
        const hero = document.getElementById('hero');
        const court = document.getElementById('court');

        if(hero && court && window.matchMedia("(min-width: 768px)").matches) {
            hero.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5);
                const y = (e.clientY / window.innerHeight - 0.5);
                
                const rotateX = 55 - (y * 10);
                const rotateZ = -35 + (x * 10);
                
                court.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
            });
        }

        // Horizontal Scroll Logic
        const track = document.getElementById('h-track');
        const section = document.querySelector('.horizontal-section');

        window.addEventListener('scroll', () => {
            const offsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollY >= offsetTop && scrollY <= offsetTop + sectionHeight - windowHeight) {
                const percentage = (scrollY - offsetTop) / (sectionHeight - windowHeight);
                const moveAmount = track.scrollWidth - window.innerWidth;
                track.style.transform = `translateX(-${percentage * moveAmount}px)`;
            }
        });

        // Text Split & Reveal
        document.querySelectorAll('.reveal-text').forEach(el => {
            if(el.querySelectorAll('span.char').length === 0) { // Prevent double init
                const text = el.innerText;
                el.innerHTML = '';
                const words = text.split(' ');
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.classList.add('inline-block', 'mr-2', 'overflow-hidden', 'align-top');
                    span.innerHTML = `<span class="char inline-block translate-y-full transition-transform duration-700">${word}</span>`;
                    el.appendChild(span);
                });
            }
        });

        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('reveal-text')) {
                        entry.target.querySelectorAll('.char').forEach((char, i) => {
                            setTimeout(() => {
                                char.style.transform = 'translateY(0)';
                                char.style.opacity = '1';
                            }, i * 50);
                        });
                    }
                    if (entry.target.classList.contains('mask-reveal')) {
                        entry.target.classList.add('active');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.reveal-text, .mask-reveal').forEach(el => observer.observe(el));

        // Loading Screen
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const text = document.getElementById('loader-text');
            const line = document.getElementById('loader-line');

            text.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                line.style.width = '100px';
            }, 500);

            setTimeout(() => {
                loader.style.transform = 'translateY(-100%)';
                document.querySelector('#hero h1').classList.add('active');
                document.querySelectorAll('#hero .char').forEach((char, i) => {
                    setTimeout(() => char.style.transform = 'translateY(0)', 800 + (i*50));
                    setTimeout(() => char.style.opacity = '1', 800 + (i*50));
                });
            }, 1800);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="fixed inset-0 z-[100] bg-rulo-green flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)]" id="loader">
<div className="overflow-hidden">
<h1 className="font-display text-8xl md:text-9xl text-rulo-ivory tracking-tighter transform translate-y-full transition-transform duration-700 delay-300" id="loader-text">RULO</h1>
</div>
<div className="w-px h-0 bg-rulo-orange mt-8 transition-all duration-500 delay-700" id="loader-line"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-start pointer-events-none mix-blend-difference text-rulo-ivory">
<a className="pointer-events-auto flex flex-col group" href="#">
<span className="font-display font-semibold text-2xl tracking-tight">RULO</span>
<span className="font-sans text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -mt-1 text-rulo-orange">EST. 2025</span>
</a>
<div className="pointer-events-auto hidden md:flex gap-12">
<a className="nav-link relative text-xs font-medium tracking-widest uppercase hover:text-rulo-orange transition-colors" href="#sanctuary">The Sanctuary</a>
<a className="nav-link relative text-xs font-medium tracking-widest uppercase hover:text-rulo-orange transition-colors" href="#facilities">Facilities</a>
<a className="nav-link relative text-xs font-medium tracking-widest uppercase hover:text-rulo-orange transition-colors" href="#team">Team</a>
<a className="nav-link relative text-xs font-medium tracking-widest uppercase hover:text-rulo-orange transition-colors" href="#journal">Journal</a>
</div>
<button className="pointer-events-auto md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="fixed right-0 top-0 h-screen w-16 md:w-20 z-40 flex flex-col justify-end pb-12 pointer-events-none">
<a className="pointer-events-auto group relative w-full h-48 bg-rulo-lime border-l border-b border-t border-rulo-black/10 rounded-l-2xl mb-4 flex items-center justify-center cursor-none hover-trigger" data-cursor="JOIN" href="#membership">
<div className="vertical-tab font-display text-xl md:text-2xl text-rulo-green font-medium tracking-tight group-hover:text-rulo-orange transition-colors">
                MEMBERSHIP
            </div>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-rulo-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
</a>
<a className="pointer-events-auto group relative w-full h-48 bg-rulo-ivory border-l border-b border-t border-rulo-black/10 rounded-l-2xl shadow-xl flex items-center justify-center cursor-none hover-trigger" data-cursor="PLAY" href="#book">
<div className="vertical-tab font-display text-xl md:text-2xl text-rulo-green font-medium tracking-tight group-hover:text-rulo-orange transition-colors">
                BOOK COURT
            </div>
<div className="absolute right-4 top-4">
<i className="w-4 h-4 text-rulo-orange" data-lucide="plus"></i>
</div>
</a>
</div>

<section className="relative h-screen w-full overflow-hidden bg-[#F2ECE1] scene-container flex items-center" id="hero">

<div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 z-10 pointer-events-none mix-blend-multiply">
<h1 className="font-display font-medium text-[12vw] leading-[0.85] tracking-tighter text-rulo-green opacity-90 reveal-text stagger-text">
                ELEVATE <br/>
<span className="text-transparent stroke-text" style={{WebkitTextStroke: '1px #004225'}}>YOUR</span> <br/>
                GAME
            </h1>
</div>

<div className="court-assembly hover-trigger" data-cursor="ROTATE" id="court">
<div className="court-floor"></div>
<div className="net"></div>
<div className="glass-wall wall-back"></div>
<div className="glass-wall wall-left"></div>
<div className="glass-wall wall-right"></div>

<div className="hotspot" style={{top: '70%', left: '40%', transform: 'translateZ(5px) rotateX(-55deg)'}}>
<div className="hotspot-inner">
<i className="w-3 h-3 text-rulo-green" data-lucide="plus"></i>
</div>
<div className="hotspot-label">
<span className="block font-bold">MONDO TURF</span>
<span className="text-[10px] font-sans opacity-80">Pro-grade surface</span>
</div>
</div>
<div className="hotspot" style={{top: '20%', left: '10%', transform: 'translateZ(80px) rotateX(-55deg)'}}>
<div className="hotspot-inner">
<i className="w-3 h-3 text-rulo-green" data-lucide="plus"></i>
</div>
<div className="hotspot-label">
<span className="block font-bold">PANORAMIC GLASS</span>
<span className="text-[10px] font-sans opacity-80">Seamless visibility</span>
</div>
</div>
<div className="hotspot" style={{top: '10%', right: '10%', transform: 'translateZ(180px) rotateX(-55deg)'}}>
<div className="hotspot-inner">
<i className="w-3 h-3 text-rulo-green" data-lucide="plus"></i>
</div>
<div className="hotspot-label">
<span className="block font-bold">LED LIGHTING</span>
<span className="text-[10px] font-sans opacity-80">Anti-glare technology</span>
</div>
</div>
<div className="absolute w-3 h-3 bg-rulo-orange rounded-full shadow-[0_0_15px_rgba(217,108,6,0.8)] animate-bounce-slow" style={{top: '40%', left: '60%', transform: 'translateZ(20px)'}}></div>
</div>

<div className="absolute bottom-10 left-10 md:left-20 flex gap-4 items-center animate-pulse">
<div className="w-12 h-px bg-rulo-green"></div>
<span className="text-[10px] uppercase tracking-widest text-rulo-green font-medium">Scroll to Explore</span>
</div>
</section>

<div className="py-6 bg-rulo-green text-rulo-ivory overflow-hidden border-y border-rulo-ivory/10 transform -rotate-1 origin-left scale-105 z-20 relative">
<div className="marquee-container">
<div className="marquee-content font-display text-4xl md:text-6xl font-thin tracking-tight opacity-80">
<span>HERITAGE &amp; PRESTIGE</span>
<span className="font-serif italic text-rulo-lime">The Sanctuary</span>
<span>PERFORMANCE</span>
<span className="font-serif italic text-rulo-lime">Wellness</span>
<span>COMMUNITY</span>
<span className="font-serif italic text-rulo-lime">Connect</span>
</div>
<div aria-hidden="true" className="marquee-content font-display text-4xl md:text-6xl font-thin tracking-tight opacity-80">
<span>HERITAGE &amp; PRESTIGE</span>
<span className="font-serif italic text-rulo-lime">The Sanctuary</span>
<span>PERFORMANCE</span>
<span className="font-serif italic text-rulo-lime">Wellness</span>
<span>COMMUNITY</span>
<span className="font-serif italic text-rulo-lime">Connect</span>
</div>
</div>
</div>

<section className="relative py-32 px-6 md:px-20 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20" id="sanctuary">
<div className="lg:col-span-5 relative h-full">
<div className="sticky top-32 space-y-12">
<div>
<span className="inline-block px-3 py-1 border border-rulo-green rounded-full text-[10px] uppercase tracking-widest mb-6">Our Philosophy</span>
<h2 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-rulo-green tracking-tighter leading-[1.1] reveal-text stagger-text">
                        MORE THAN <br/>
<span className="font-serif italic text-rulo-orange">JUST A CLUB</span>.
                    </h2>
</div>
<p className="font-serif text-xl md:text-2xl text-rulo-green/80 leading-relaxed indent-12 reveal-text stagger-text delay-200">
                    We reimagine the padel experience by stripping away the noise. A sanctuary where architectural purity meets athletic excellence.
                </p>
<div className="space-y-8 pt-8 border-t border-rulo-green/10">
<div className="group cursor-pointer hover-trigger" data-cursor="VIEW">
<h3 className="font-display text-lg font-medium flex items-center justify-between">
<span>01. WELLNESS</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" data-lucide="arrow-right"></i>
</h3>
<p className="text-sm mt-2 opacity-60 max-w-sm">Holistic health balancing movement, recovery, and mindset.</p>
</div>
<div className="group cursor-pointer hover-trigger" data-cursor="VIEW">
<h3 className="font-display text-lg font-medium flex items-center justify-between">
<span>02. COMMUNITY</span>
<i className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" data-lucide="arrow-right"></i>
</h3>
<p className="text-sm mt-2 opacity-60 max-w-sm">Curated events and spaces that foster genuine connection.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 space-y-24 pt-20">

<div className="relative aspect-[3/4] md:aspect-[4/3] w-full ml-auto md:w-4/5 mask-reveal observe-trigger">
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-rulo-ivory p-4 border border-rulo-green/10 shadow-xl max-w-[200px]">
<p className="font-display text-xs font-bold uppercase tracking-widest text-rulo-orange">Architecture</p>
<p className="font-serif text-sm italic mt-1">Designed for light &amp; shadow.</p>
</div>
</div>

<div className="relative aspect-[3/4] w-full md:w-3/5 mr-auto mask-reveal observe-trigger delay-100">
<img alt="Interiors" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-rulo-orange/20 rounded-full blur-xl animate-pulse"></div>
</div>
</div>
</section>

<section className="horizontal-section bg-rulo-green text-rulo-ivory" id="facilities">
<div className="horizontal-wrapper">
<div className="absolute top-12 left-6 md:left-20 z-10 mix-blend-difference">
<span className="text-xs uppercase tracking-[0.3em] opacity-60">Facilities</span>
<h2 className="font-display text-4xl md:text-5xl font-semibold mt-2">WORLD CLASS</h2>
</div>
<div className="cards-track" id="h-track">
<div className="flex-shrink-0 w-[80vw] md:w-[30vw] h-[60vh] flex flex-col justify-center pr-20">
<p className="font-serif text-3xl md:text-4xl leading-snug">
                        "Luxury lies in the details. From the grain of the court surface to the scent of the changing rooms."
                    </p>
<div className="w-20 h-px bg-rulo-orange mt-8"></div>
</div>

<div className="flex-shrink-0 relative w-[85vw] md:w-[45vw] h-[70vh] group overflow-hidden border border-rulo-ivory/10 hover-trigger" data-cursor="EXPLORE">
<img alt="Courts" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-rulo-green via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="font-mono text-rulo-orange text-xs mb-2 block">01</span>
<h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">CHAMPIONSHIP<br/>COURTS</h3>
<p className="opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-sm max-w-sm leading-relaxed translate-y-4 group-hover:translate-y-0">
                            WPT Standard. Mondo Supercourt XN turf. 12m clear ceiling height.
                        </p>
</div>
</div>

<div className="flex-shrink-0 relative w-[85vw] md:w-[45vw] h-[70vh] group overflow-hidden border border-rulo-ivory/10 hover-trigger" data-cursor="REFORM">
<img alt="Pilates" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-rulo-green via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="font-mono text-rulo-orange text-xs mb-2 block">02</span>
<h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">PILATES<br/>STUDIO</h3>
<p className="opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-sm max-w-sm leading-relaxed translate-y-4 group-hover:translate-y-0">
                            12 Reformers. Natural light. Sound-dampened acoustics for focus.
                        </p>
</div>
</div>

<div className="flex-shrink-0 relative w-[85vw] md:w-[45vw] h-[70vh] group overflow-hidden border border-rulo-ivory/10 hover-trigger" data-cursor="RELAX">
<img alt="Spa" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-rulo-green via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="font-mono text-rulo-orange text-xs mb-2 block">03</span>
<h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">RECOVERY<br/>&amp; SPA</h3>
<p className="opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-sm max-w-sm leading-relaxed translate-y-4 group-hover:translate-y-0">
                            Cold plunge. Infrared sauna. Physio treatment rooms.
                        </p>
</div>
</div>
<div className="flex-shrink-0 w-[20vw]"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto" id="team">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<span className="text-xs font-bold tracking-widest uppercase text-rulo-orange mb-4 block">The Professionals</span>
<h2 className="font-display text-4xl md:text-6xl text-rulo-green tracking-tighter reveal-text">ELITE COACHING</h2>
</div>
<p className="font-serif text-xl max-w-md text-rulo-green/70 text-right md:text-right">
                Learn from former WPT ranked players. Technical mastery meets strategic depth.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[3/4] overflow-hidden hover-trigger" data-cursor="PROFILE">
<img alt="Coach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-rulo-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-display text-2xl text-rulo-ivory">JAVIER RUIZ</h3>
<p className="text-rulo-orange text-xs tracking-widest uppercase mt-1">Head Coach</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden hover-trigger" data-cursor="PROFILE">
<img alt="Coach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-rulo-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-display text-2xl text-rulo-ivory">MARTA ORTEGA</h3>
<p className="text-rulo-orange text-xs tracking-widest uppercase mt-1">Technical Director</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden hover-trigger" data-cursor="PROFILE">
<img alt="Coach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-rulo-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-display text-2xl text-rulo-ivory">ALEX SANCHEZ</h3>
<p className="text-rulo-orange text-xs tracking-widest uppercase mt-1">Performance Coach</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-white border-t border-rulo-green/10" id="membership">
<div className="text-center mb-24">
<h2 className="font-display text-4xl md:text-6xl text-rulo-green tracking-tighter mb-4 reveal-text">MEMBERSHIP</h2>
<div className="w-px h-12 bg-rulo-orange mx-auto mb-4"></div>
<p className="font-serif text-xl italic text-rulo-green/60">Limited availability for 2025.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative group p-10 border border-rulo-green/20 bg-rulo-ivory hover:bg-rulo-green transition-colors duration-500 overflow-hidden hover-trigger" data-cursor="APPLY">
<div className="absolute top-0 right-0 w-24 h-24 bg-rulo-orange/10 rounded-bl-full group-hover:bg-rulo-orange transition-colors"></div>
<h3 className="font-display text-2xl text-rulo-green group-hover:text-rulo-ivory mb-2">INDIVIDUAL</h3>
<p className="text-xs tracking-widest uppercase text-rulo-orange mb-8">Full Access</p>
<ul className="space-y-4 text-sm text-rulo-green/70 group-hover:text-rulo-ivory/80 transition-colors">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rulo-orange"></div> Unlimited Play</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rulo-orange"></div> Wellness Access</li>
</ul>
</div>

<div className="relative group p-10 border border-rulo-green/20 bg-rulo-black text-rulo-ivory overflow-hidden scale-105 shadow-2xl z-10 hover-trigger" data-cursor="PRESTIGE">
<div className="absolute inset-0 bg-noise opacity-20"></div>
<div className="absolute top-0 right-0 bg-rulo-orange text-[10px] font-bold px-3 py-1 uppercase">Recommended</div>
<h3 className="font-display text-2xl mb-2">FAMILY</h3>
<p className="text-xs tracking-widest uppercase text-rulo-orange mb-8">Shared Excellence</p>
<ul className="space-y-4 text-sm opacity-80">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rulo-orange"></div> 4 Members</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rulo-orange"></div> Priority Booking</li>
</ul>
</div>

<div className="relative group p-10 border border-rulo-green/20 bg-rulo-ivory hover:bg-rulo-green transition-colors duration-500 overflow-hidden hover-trigger" data-cursor="APPLY">
<div className="absolute top-0 right-0 w-24 h-24 bg-rulo-orange/10 rounded-bl-full group-hover:bg-rulo-orange transition-colors"></div>
<h3 className="font-display text-2xl text-rulo-green group-hover:text-rulo-ivory mb-2">CORPORATE</h3>
<p className="text-xs tracking-widest uppercase text-rulo-orange mb-8">Team Wellness</p>
<ul className="space-y-4 text-sm text-rulo-green/70 group-hover:text-rulo-ivory/80 transition-colors">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rulo-orange"></div> Flexible Slots</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-rulo-orange"></div> Private Events</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto border-t border-rulo-green/10" id="journal">
<div className="flex items-center justify-between mb-16">
<h2 className="font-display text-4xl md:text-5xl text-rulo-green tracking-tighter reveal-text">THE JOURNAL</h2>
<a className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-rulo-orange hover:text-rulo-green transition-colors group" href="#">
                View Archive <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<article className="group cursor-pointer hover-trigger" data-cursor="READ">
<div className="aspect-[16/10] overflow-hidden mb-6">
<img alt="Article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-4 mb-3 text-[10px] uppercase tracking-widest text-rulo-green/60">
<span>Events</span>
<span className="w-1 h-1 bg-rulo-orange rounded-full"></span>
<span>Oct 12, 2025</span>
</div>
<h3 className="font-display text-2xl text-rulo-green leading-tight group-hover:text-rulo-orange transition-colors">The Rulo Winter Open: Tournament Recap</h3>
</article>

<article className="group cursor-pointer hover-trigger" data-cursor="READ">
<div className="aspect-[16/10] overflow-hidden mb-6">
<img alt="Article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex items-center gap-4 mb-3 text-[10px] uppercase tracking-widest text-rulo-green/60">
<span>Wellness</span>
<span className="w-1 h-1 bg-rulo-orange rounded-full"></span>
<span>Nov 01, 2025</span>
</div>
<h3 className="font-display text-2xl text-rulo-green leading-tight group-hover:text-rulo-orange transition-colors">Integrating Pilates for Padel Performance</h3>
</article>

<article className="group cursor-pointer hover-trigger" data-cursor="READ">
<div className="aspect-[16/10] overflow-hidden mb-6">
<img alt="Article" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-4 mb-3 text-[10px] uppercase tracking-widest text-rulo-green/60">
<span>Community</span>
<span className="w-1 h-1 bg-rulo-orange rounded-full"></span>
<span>Nov 15, 2025</span>
</div>
<h3 className="font-display text-2xl text-rulo-green leading-tight group-hover:text-rulo-orange transition-colors">Evening Socials: The Art of Post-Match Connection</h3>
</article>
</div>
</section>

<footer className="bg-rulo-green text-rulo-ivory pt-32 pb-12 px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full select-none pointer-events-none opacity-5">
<h2 className="text-[20vw] font-display font-bold leading-none text-center tracking-tighter">RULO</h2>
</div>
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
<div className="md:col-span-2">
<a className="inline-block font-display font-bold text-3xl tracking-tight mb-8" href="#">RULO</a>
<p className="font-serif text-xl italic max-w-sm mb-12">
                    Redefining the standards of the game. A legacy in the making.
                </p>
<form className="flex gap-0 border-b border-rulo-ivory/30 max-w-sm pb-2">
<input className="bg-transparent w-full outline-none placeholder:text-rulo-ivory/30 font-sans text-sm" placeholder="Subscribe for updates" type="email"/>
<button className="text-xs font-bold tracking-widest uppercase text-rulo-orange hover:text-white transition-colors">Submit</button>
</form>
</div>
<div>
<h4 className="text-xs font-bold tracking-widest uppercase text-rulo-orange mb-6">Explore</h4>
<ul className="space-y-4 font-sans text-sm opacity-80">
<li><a className="hover:text-rulo-lime transition-colors" href="#">The Sanctuary</a></li>
<li><a className="hover:text-rulo-lime transition-colors" href="#">Facilities</a></li>
<li><a className="hover:text-rulo-lime transition-colors" href="#">Membership</a></li>
<li><a className="hover:text-rulo-lime transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold tracking-widest uppercase text-rulo-orange mb-6">Contact</h4>
<ul className="space-y-4 font-sans text-sm opacity-80">
<li>hello@rulo.club</li>
<li>+44 20 7123 4567</li>
<li className="mt-8">
                        12 Heritage Lane,<br/>
                        London, UK
                    </li>
</ul>
<div className="flex gap-4 mt-8">
<i className="w-5 h-5 cursor-pointer hover:text-rulo-orange transition-colors" data-lucide="instagram"></i>
<i className="w-5 h-5 cursor-pointer hover:text-rulo-orange transition-colors" data-lucide="twitter"></i>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest opacity-40">
<p>© 2025 RULO Padel Club.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Credits</a>
</div>
</div>
</footer>



    </>
  );
}
