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
colors: {
accent: '#AFCA3F',
dark: '#050505',
surface: '#111111',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
},
letterSpacing: {
tighter: '-.04em',
tight: '-.02em',
widest: '.2em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for General Reveal Animations
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            const revealOnScroll = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                });
            }, revealOptions);
            reveals.forEach(reveal => revealOnScroll.observe(reveal));
        });

        // ==========================================
        // NEW: CINEMATIC PPF LANDING ANIMATION LOGIC
        // ==========================================
        const carScene = document.getElementById('car-scene');
        const hoodFilm = document.getElementById('hood-film');
        const bumperFilm = document.getElementById('bumper-film');
        const labelHood = document.getElementById('label-hood');
        const labelBumper = document.getElementById('label-bumper');
        const hoodGlossWrap = document.getElementById('hood-gloss-wrap');
        const bumperGlossWrap = document.getElementById('bumper-gloss-wrap');
        const finalBadge = document.getElementById('final-badge');

        const filmAnimations = {
            'hood-film': {
                startTransform: 'translateX(-35%) translateY(-130%) rotate(-6deg) scaleY(0.6)',
                duration: 900,
                delay: 0
            },
            'bumper-film': {
                startTransform: 'translateX(25%) translateY(120%) rotate(5deg) scaleY(0.6)',
                duration: 900,
                delay: 400
            }
        };

        // Initialize element transforms
        if (hoodFilm && bumperFilm) {
            hoodFilm.style.transform = filmAnimations['hood-film'].startTransform;
            bumperFilm.style.transform = filmAnimations['bumper-film'].startTransform;

            const ppfObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    ppfObserver.disconnect();
                    playPPFAnimation();
                }
            }, { threshold: 0.4 });

            ppfObserver.observe(carScene);
        }

        function playPPFAnimation() {
            // Hood Animation
            setTimeout(() => {
                hoodFilm.style.transition = 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease-out';
                hoodFilm.style.opacity = '1';
                hoodFilm.style.transform = 'none';

                setTimeout(() => {
                    hoodFilm.classList.add('installed');
                    hoodGlossWrap.style.opacity = '1';
                    hoodGlossWrap.querySelector('.gloss-layer').classList.add('active');

                    labelHood.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
                    labelHood.style.opacity = '1';
                    labelHood.style.transform = 'translateX(-50%) translateY(0)';
                }, filmAnimations['hood-film'].duration + 300);
            }, filmAnimations['hood-film'].delay);

            // Bumper Animation
            setTimeout(() => {
                bumperFilm.style.transition = 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease-out';
                bumperFilm.style.opacity = '1';
                bumperFilm.style.transform = 'none';

                setTimeout(() => {
                    bumperFilm.classList.add('installed');
                    bumperGlossWrap.style.opacity = '1';
                    bumperGlossWrap.querySelector('.gloss-layer').classList.add('active');

                    labelBumper.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
                    labelBumper.style.opacity = '1';
                    labelBumper.style.transform = 'translateX(-50%) translateY(0)';

                    // Final Badge Reveal
                    setTimeout(() => {
                        finalBadge.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease-out';
                        finalBadge.style.opacity = '1';
                        finalBadge.style.transform = 'translateX(-50%) translateY(0) scale(1)';
                    }, 500);

                }, filmAnimations['bumper-film'].duration + 300);
            }, filmAnimations['bumper-film'].delay);
        }

        // Before/After Slider Logic
        const slider = document.getElementById('before-after-slider');
        const overlay = document.getElementById('slider-overlay');
        const handle = document.getElementById('slider-handle');

        if(slider && overlay && handle) {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                overlay.style.width = `${value}%`;
                handle.style.left = `${value}%`;
            });
        }

        // Color Configurator Logic
        function changeCarColor(button) {
            document.querySelectorAll('.configurator-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const hue = button.getAttribute('data-hue');
            const sat = button.getAttribute('data-sat');
            const bri = button.getAttribute('data-bri');
            const label = button.getAttribute('aria-label');

            document.getElementById('current-color-label').innerText = label;

            const car = document.getElementById('config-car');
            car.style.filter = `sepia(1) hue-rotate(${hue}deg) saturate(${sat}) brightness(${bri})`;
        }
    
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
      

<div className="bg-grain"></div>
<div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-[0.03]">
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white"></div>
<div className="w-px h-full bg-white hidden md:block"></div>
<div className="w-px h-full bg-white hidden lg:block"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 reveal active">
<div className="flex items-center justify-between bg-surface/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 w-full max-w-5xl shadow-2xl">
<div className="flex items-center gap-2">
<span className="font-display font-medium text-lg tracking-widest uppercase">Apex</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
<a className="hover:text-white transition-colors" href="#ochrana">Ochrana laku</a>
<a className="hover:text-white transition-colors" href="#konfigurator">Změna barvy</a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
</div>
<a className="px-5 py-2 bg-white/5 hover:bg-accent hover:text-dark border border-white/10 hover:border-accent rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300" href="#kontakt">
                Poptávka
            </a>
</div>
</nav>

<section className="relative h-screen w-full flex items-end pb-24 px-6 md:px-12 overflow-hidden bg-dark">
<div className="absolute inset-0 z-0 animate-hero">
<img alt="Luxury Car in Studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=3869&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent opacity-80"></div>
<div className="light-sweep-effect"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 reveal active" style={{animationDelay: '0.5s'}}>
<div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#AFCA3F] animate-pulse"></div>
<span className="text-xs font-mono uppercase tracking-widest text-accent">Prémiové aplikační centrum</span>
</div>
<h1 className="font-display text-fluid-hero font-medium tracking-tighter leading-[0.9] text-white reveal active" style={{animationDelay: '0.7s'}}>
                    Dokonalá <br/>
<span className="text-white/40 italic font-light">Ochrana.</span>
</h1>
<div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mt-4 md:mt-12 reveal active" style={{animationDelay: '0.9s'}}>
<p className="max-w-md text-white/60 font-light leading-relaxed text-sm md:text-base">
                        Instalace neviditelné ochranné fólie (PPF) a profesionální změna barvy vozu v kinematografickém studiovém prostředí.
                    </p>
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark transition-colors backdrop-blur-md bg-white/5">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</button>
<span className="text-xs font-medium uppercase tracking-widest text-white/60">Přehrát proces</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-dark border-t border-white/5 py-32" id="ochrana">

<div className="relative z-40 text-center max-w-3xl mx-auto px-6 mb-16 reveal">
<span className="text-accent text-xs font-mono uppercase tracking-widest">Technologie</span>
<h2 className="text-fluid-h2 font-display font-medium tracking-tighter mt-4 drop-shadow-lg">Jak probíhá instalace<br/>ochranné PPF fólie</h2>
<p className="text-white/70 font-light mt-4 text-sm md:text-base drop-shadow-md">Podívejte se, jak chráníme lak vašeho vozu pomocí prémiové ochranné fólie.</p>
</div>

<div className="relative w-full max-w-6xl mx-auto px-6 aspect-[4/3] md:aspect-video flex items-center justify-center z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 bg-dark" id="car-scene">

<img alt="Ferrari in garage" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(0,120,80,0.08) 0%, rgba(0,0,0,0.6) 70%)'}}></div>



<div className="absolute inset-0 w-full h-full overflow-hidden gloss-layer-wrapper" id="hood-gloss-wrap" style={{clipPath: 'polygon(25% 45%, 75% 45%, 85% 70%, 15% 70%)'}}>
<img alt="Glossy Hood" className="gloss-layer" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flying-film-piece" id="hood-film" style={{width: '50%', height: '25%', top: '45%', left: '25%'}}></div>

<div className="micro-label" id="label-hood" style={{top: '35%', left: '50%', transform: 'translateX(-50%) translateY(15px)'}}>
<iconify-icon className="text-accent" icon="solar:user-hands-linear"></iconify-icon>
<iconify-icon className="text-white/60" icon="solar:shield-warning-linear"></iconify-icon>
                Ochrana proti kamínkům
            </div>



<div className="absolute inset-0 w-full h-full overflow-hidden gloss-layer-wrapper" id="bumper-gloss-wrap" style={{clipPath: 'polygon(15% 70%, 85% 70%, 90% 90%, 10% 90%)'}}>
<img alt="Glossy Bumper" className="gloss-layer" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flying-film-piece" id="bumper-film" style={{width: '70%', height: '20%', top: '70%', left: '15%'}}></div>

<div className="micro-label" id="label-bumper" style={{top: '88%', left: '50%', transform: 'translateX(-50%) translateY(15px)'}}>
<iconify-icon className="text-accent" icon="solar:user-hands-linear"></iconify-icon>
<iconify-icon className="text-white/60" icon="solar:magic-stick-3-linear"></iconify-icon>
                Ochrana proti škrábancům
            </div>



<div className="absolute bottom-6 md:bottom-12 left-1/2 flex flex-col items-center gap-3 z-40 w-[90%] md:w-auto" id="final-badge" style={{opacity: '0', transform: 'translateX(-50%) translateY(30px) scale(0.9)'}}>
<div className="flex items-center gap-3 bg-dark/90 border border-accent/50 text-white font-medium px-5 py-3 rounded-full shadow-[0_0_40px_rgba(175,202,63,0.2)] backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#AFCA3F] flex-shrink-0"></span>
<iconify-icon className="text-accent" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-[10px] md:text-xs uppercase tracking-widest truncate">Neviditelná ochrana laku</span>
</div>
<span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 bg-dark/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 hidden md:block">
                    Zachování hodnoty vozu
                </span>
</div>
</div>
</section>

<section className="py-32 bg-surface relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16 reveal">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Evoluce vzhledu</h2>
<p className="text-white/50 font-light mt-2 text-sm">Porovnejte původní lak s prémiovou fólií.</p>
</div>
<div className="max-w-7xl mx-auto px-6 relative reveal">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 select-none group">
<div className="absolute inset-0 bg-dark">
<img alt="Original Color" className="w-full h-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&amp;w=3200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 bg-dark/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-white/50">
                        Původní barva
                    </div>
</div>
<div className="absolute inset-0 z-10 w-1/2 overflow-hidden border-r-2 border-accent shadow-[4px_0_20px_rgba(175,202,63,0.3)]" id="slider-overlay" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', width: '50%'}}>
<img alt="Wrapped Car" className="absolute h-full w-[200vw] max-w-none object-cover filter sepia hue-rotate-[15deg] saturate-[3] brightness-90" src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&amp;w=3200&amp;auto=format&amp;fit=crop" style={{width: 'calc(100vw - 3rem)', maxWidth: '80rem'}}/>
<div className="absolute top-6 left-6 bg-accent/20 backdrop-blur-md px-4 py-2 rounded-full border border-accent/50 text-xs uppercase tracking-widest text-accent flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                        Satin Orange Wrap
                    </div>
</div>
<input className="custom-slider" id="before-after-slider" max="100" min="0" type="range" value="50"/>
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-surface rounded-full border-2 border-accent flex items-center justify-center pointer-events-none shadow-[0_0_20px_rgba(175,202,63,0.5)] transition-transform group-hover:scale-110" id="slider-handle">
<iconify-icon className="text-accent" icon="solar:round-transfer-horizontal-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 bg-dark relative border-t border-white/5" id="konfigurator">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
<div>
<span className="text-accent text-xs font-mono uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Interaktivní</span>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mt-6">Vyzkoušejte změnu barvy vozu</h2>
</div>
<p className="text-white/50 text-sm max-w-xs font-light">Vyberte si z naší nabídky prémiových fólií a vizualizujte si výsledek.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
<div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-surface border border-white/5 aspect-video flex items-center justify-center">
<img alt="Studio Background" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-40" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="relative w-[90%] z-10 transition-all duration-700 ease-in-out" id="config-car-container">
<img alt="Car" className="w-full h-auto drop-shadow-2xl transition-all duration-500 filter sepia hue-rotate-[15deg] saturate-[3] brightness-90" id="config-car" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-8">
<div className="bg-surface/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
<h3 className="text-sm uppercase tracking-widest text-white/40 mb-6">Barva fólie</h3>
<div className="flex flex-wrap gap-4">
<button aria-label="Satin Orange" className="configurator-btn active relative w-12 h-12 rounded-full bg-[#E05C15] border-2 border-transparent transition-all shadow-lg" data-bri="0.9" data-color="satin-orange" data-hue="15" data-sat="3" onclick="changeCarColor(this)"></button>
<button aria-label="Matte Black" className="configurator-btn relative w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-transparent transition-all shadow-lg" data-bri="0.2" data-color="matte-black" data-hue="0" data-sat="0" onclick="changeCarColor(this)"></button>
<button aria-label="Gloss White" className="configurator-btn relative w-12 h-12 rounded-full bg-[#F5F5F5] border-2 border-transparent transition-all shadow-lg" data-bri="2" data-color="gloss-white" data-hue="0" data-sat="0" onclick="changeCarColor(this)"></button>
<button aria-label="Satin Dark Grey" className="configurator-btn relative w-12 h-12 rounded-full bg-[#4A4D54] border-2 border-transparent transition-all shadow-lg" data-bri="0.6" data-color="satin-grey" data-hue="220" data-sat="0.2" onclick="changeCarColor(this)"></button>
<button aria-label="Metallic Blue" className="configurator-btn relative w-12 h-12 rounded-full bg-[#1546E0] border-2 border-transparent transition-all shadow-lg" data-bri="0.8" data-color="metallic-blue" data-hue="210" data-sat="2" onclick="changeCarColor(this)"></button>
</div>
<div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
<span className="font-display text-lg" id="current-color-label">Satin Orange</span>
<span className="text-xs uppercase tracking-widest text-white/30">Premium Line</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center reveal">
<iconify-icon className="text-accent text-4xl mb-6" icon="solar:magic-stick-3-linear"></iconify-icon>
<h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-2xl">
                Vizualizace budoucnosti pomocí <span className="text-accent font-medium">tekutých barev.</span>
</h2>
</div>
<div className="relative w-full h-[400px] mt-16 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 reveal">
<img alt="Abstract Car Detail" className="w-full h-full object-cover animate-liquid-color" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-dark/20 mix-blend-overlay backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark/50 to-dark"></div>
</div>
</section>

<section className="py-32 bg-surface relative border-t border-white/5" id="studio">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 reveal">
<div className="mb-16">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">Proč si vybrat naše studio</h2>
<div className="w-12 h-[1px] bg-accent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<div className="text-xl font-display font-medium mb-2 flex items-center gap-1 text-accent">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-white text-lg font-medium mb-1">Hodnocení zákazníků</p>
<p className="text-white/50 text-sm font-light">100% garance spokojenosti.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:car-linear" width="24"></iconify-icon>
</div>
<div className="text-3xl font-display font-medium mb-2 text-white">500+</div>
<p className="text-white text-lg font-medium mb-1">Polepených vozů</p>
<p className="text-white/50 text-sm font-light">Bohaté portfolio realizací.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hourglass-line-linear" width="24"></iconify-icon>
</div>
<div className="text-3xl font-display font-medium mb-2 text-white">7+</div>
<p className="text-white text-lg font-medium mb-1">Let zkušeností</p>
<p className="text-white/50 text-sm font-light">Specialisté ve svém oboru.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group cursor-default">
<div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-2 opacity-80 filter grayscale group-hover:grayscale-0 transition-all">
<span className="font-display text-xl font-bold tracking-tighter">3M</span>
<div className="w-px h-4 bg-white/20"></div>
<span className="font-display text-xl font-bold tracking-tighter">AVERY</span>
</div>
<p className="text-white text-lg font-medium mb-1">Prémiové fólie</p>
<p className="text-white/50 text-sm font-light">Pracujeme pouze s nejlepšími.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-dark relative border-t border-white/5 overflow-hidden" id="kontakt">
<div className="absolute inset-0 z-0">
<img alt="Background Texture" className="w-full h-full object-cover filter blur-[20px] opacity-10" src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&amp;w=3200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/80"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="font-display text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 drop-shadow-2xl">
                Chcete změnit vzhled <br/><span className="text-white/40 italic font-light">svého auta?</span>
</h2>
<p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Pošlete nám nezávaznou poptávku a ozveme se vám do 24 hodin s návrhem řešení přímo pro váš vůz.
            </p>
<a className="inline-flex items-center gap-3 bg-accent text-dark px-8 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(175,202,63,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105" href="#">
                Získat nezávaznou nabídku
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-surface py-12 border-t border-white/5 text-center relative z-10">
<div className="font-display font-medium text-2xl tracking-widest uppercase text-white/20 mb-6">Apex</div>
<p className="text-xs uppercase tracking-widest text-white/30 font-light">© 2024 Premium Automotive Studio. Všechna práva vyhrazena.</p>
</footer>

<a className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-accent text-dark rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(175,202,63,0.4)] z-50" href="#kontakt">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</a>



    </>
  );
}
