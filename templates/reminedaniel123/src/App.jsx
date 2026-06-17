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



        // Init Icons
        lucide.createIcons();

        // SCROLL INTERPOLATION LOGIC
        // This handles the "Fade-Away Collage" in the Hero section
        const heroSection = document.getElementById('hero-section');
        const heroImg = document.getElementById('hero-img');
        const ring = document.getElementById('artifact-ring');
        const sp = document.getElementById('artifact-sp');
        const navBg = document.getElementById('nav-bg');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight;
            
            // Nav Frosted Glass Toggle
            if (scrollY > 50) {
                navBg.classList.remove('opacity-0');
            } else {
                navBg.classList.add('opacity-0');
            }

            // Hero Physics
            if (scrollY < heroHeight) {
                const progress = scrollY / heroHeight; // 0 to 1
                
                // Hero Image: Scale down and fade
                heroImg.style.transform = `scale(${1 - progress * 0.1})`;
                heroImg.style.opacity = `${1 - progress * 1.5}`;
                
                // Ring: Move Right and Fade
                ring.style.transform = `translate(${progress * 100}px, -${progress * 50}px) rotate(${progress * 45}deg)`;
                ring.style.opacity = `${0.8 - progress * 1.2}`;

                // SaltPepper: Move Left and Fade
                sp.style.transform = `translate(-${progress * 100}px, ${progress * 20}px)`;
                sp.style.opacity = `${1 - progress * 1.2}`;
            }
        });

        // WORD POPPING OBSERVER
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add spans for words if not already done (simplified here to just show block)
                    const children = entry.target.querySelectorAll('span, p, h2');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 100}ms`;
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => {
            // Pre-process text for animation
            const children = el.querySelectorAll('p, h2');
            children.forEach(child => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(20px)';
                child.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            observer.observe(el);
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
      

<div className="marquee-container">

<div className="marquee-row"><div className="marquee-content">
<span className="marquee-text">Størst av alt er kjærligheten (1. Kor 13:13) • Vann kan ikke slukke kjærligheten (Høys 8:7) • Jeg har funnet den min sjel elsker •</span>
<span className="marquee-text">Størst av alt er kjærligheten (1. Kor 13:13) • Vann kan ikke slukke kjærligheten (Høys 8:7) • Jeg har funnet den min sjel elsker •</span>
</div></div>

<div className="marquee-row"><div className="marquee-content reverse">
<span className="marquee-text">Det Gud har sammenføyd, skal mennesker ikke skille • La alt dere gjør, skje i kjærlighet • Vi elsker fordi han elsket oss først •</span>
<span className="marquee-text">Det Gud har sammenføyd, skal mennesker ikke skille • La alt dere gjør, skje i kjærlighet • Vi elsker fordi han elsket oss først •</span>
</div></div>

<div className="marquee-row"><div className="marquee-content">
<span className="marquee-text">Kjærligheten er tålmodig, kjærligheten er velvillig • Hvor du går, vil jeg gå • To er bedre enn én • En tråd spunnet av tre ryker ikke •</span>
<span className="marquee-text">Kjærligheten er tålmodig, kjærligheten er velvillig • Hvor du går, vil jeg gå • To er bedre enn én • En tråd spunnet av tre ryker ikke •</span>
</div></div>

<div className="marquee-row"><div className="marquee-content reverse">
<span className="marquee-text">Ingen frykt i kjærligheten • Herren gjør deres kjærlighet rik • Vær gode mot hverandre • Jeg er min elskedes og min elskede er min •</span>
<span className="marquee-text">Ingen frykt i kjærligheten • Herren gjør deres kjærlighet rik • Vær gode mot hverandre • Jeg er min elskedes og min elskede er min •</span>
</div></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-[#FFF8E1]/80 backdrop-blur-xl transition-opacity duration-300" id="nav-bg"></div>
<div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<button className="group flex flex-col gap-1.5 p-2 btn-marshmallow">
<div className="w-8 h-0.5 bg-[#B76E79] group-hover:bg-[#2F4F4F] transition-colors relative"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FFD700] rotate-45"></div></div>
<div className="w-8 h-0.5 bg-[#B76E79] group-hover:bg-[#2F4F4F] transition-colors relative"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FFD700] rotate-45"></div></div>
<div className="h-0.5 group-hover:bg-[#2F4F4F] transition-colors bg-[#B76E79] w-8 relative"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FFD700] rotate-45"></div></div>
</button>

<div className="font-hero text-3xl tracking-tighter text-[#2F4F4F]">R <span className="text-[#B76E79]">&amp;</span> D</div>

<a className="hidden md:inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FCEABB] text-[#2F4F4F] font-semibold tracking-tight shadow-lg btn-marshmallow" href="#rsvp">
                SVAR
            </a>
</div>
</nav>

<main className="relative z-10">


<section className="relative h-[200vh]" id="hero-section">
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 w-full h-full" id="hero-bg-layer">
<img alt="Hero Couple" className="w-full h-full object-cover opacity-90 transition-transform duration-75 ease-linear" id="hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ab9c9ed-ec21-419a-bc31-52828d74a3fd_3840w.jpg" style={{transform: 'scale(1)', opacity: '1'}}/>
<div className="bg-gradient-to-t from-[#FFF8E1] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="md:w-64 cinematic-float opacity-80 mix-blend-multiply w-32 absolute top-1/4 right-[10%]" id="artifact-ring" style={{transform: 'translate(0px, 0px) rotate(0deg)', opacity: '0.8'}}>

<div className="w-full h-full border-4 border-[#FFD700] rounded-full aspect-square shadow-[0_0_30px_#FFD700]"></div>
</div>
<div className="absolute bottom-1/4 left-[10%] w-24 md:w-48 cinematic-float" id="artifact-sp" style={{animationDelay: '-2s', transform: 'translate(0px, 0px)', opacity: '1'}}>

</div>

<div className="flex flex-col md:mix-blend-normal text-center mix-blend-overlay z-10 relative gap-x-6 gap-y-6 items-center">
<div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-4 animate-pulse">
<span className="font-display font-bold tracking-widest text-[#FFF8E1] text-xs md:text-sm uppercase drop-shadow-md">Vi gifter oss!</span>
</div>
<h1 className="font-hero text-6xl md:text-9xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFF8E1] to-[#FFD700] drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                        REMINE<br/>&amp; DANIEL
                    </h1>
<div className="flex items-center gap-4 text-[#FFF8E1] font-script text-3xl md:text-5xl drop-shadow-md mt-4">
<span>23. Mai</span>
<div className="w-2 h-2 bg-[#FFD700] rounded-full shadow-[0_0_10px_#FFD700]"></div>
<span>2026</span>
</div>

<div className="mt-12 grid grid-cols-4 gap-4 md:gap-8 text-[#FFF8E1]">
<div className="text-center"><span className="block font-display text-2xl md:text-4xl font-bold">489</span><span className="text-xs uppercase tracking-widest">Dager</span></div>
<div className="text-center"><span className="block font-display text-2xl md:text-4xl font-bold">14</span><span className="text-xs uppercase tracking-widest">Timer</span></div>
<div className="text-center"><span className="block font-display text-2xl md:text-4xl font-bold">22</span><span className="text-xs uppercase tracking-widest">Min</span></div>
<div className="text-center"><span className="block font-display text-2xl md:text-4xl font-bold">09</span><span className="text-xs uppercase tracking-widest">Sek</span></div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#2F4F4F] animate-bounce">
<span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-[#B76E79] rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out opacity-20"></div>
<img alt="Holding hands" className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="space-y-8 reveal-text" id="intro-text">
<h2 className="font-hero text-4xl md:text-6xl text-[#2F4F4F] leading-tight" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] to-[#FFD700]" style={{transitionDelay: '100ms', opacity: '1', transform: 'translateY(0px)'}}>Miss Andersen</span><br/>
                        &amp; Herr Berling
                    </h2>
<div className="font-editorial text-xl md:text-2xl leading-relaxed text-gray-600 space-y-6">
<p style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>To personligheter. To familier. Én stor kjærlighet.</p>
<p style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>Der en sørlending møter en østlending, oppstår det magi. Vi gleder oss til å feire denne dagen med akkurat dere.</p>
<p className="font-script text-4xl text-[#B76E79]" style={{opacity: '0', transform: 'translateY(20px)', transition: '0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'}}>Bryllupet er i gang!</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="relative z-10 space-y-8 max-w-2xl px-6">

<div className="cinematic-float mb-8">

<div className="flex justify-center gap-4">
<div className="w-16 h-24 bg-white/80 border border-gray-200 rounded-t-full shadow-lg flex items-center justify-center font-display font-bold text-gray-400">S</div>
<div className="w-16 h-24 bg-[#2F4F4F]/80 border border-gray-600 rounded-t-full shadow-lg flex items-center justify-center font-display font-bold text-white">P</div>
</div>
</div>
<h3 className="font-display text-2xl md:text-4xl text-[#2F4F4F] tracking-wide">
                    "STØRST AV ALT ER <span className="text-[#B76E79] italic font-serif">KJÆRLIGHETEN</span>"
                </h3>
<p className="font-editorial italic text-lg text-gray-500">- 1. Korinterbrev 13:13</p>
</div>
</section>

<section className="relative h-[120vh] w-full" id="vielse">
<div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1548625361-ad844b58c5a4?q=80&amp'}}>
<div className="absolute inset-0 bg-[#2F4F4F]/30"></div>
</div>

<div className="absolute bottom-0 left-0 w-full md:w-1/2 lg:w-1/3 p-6 md:p-12">
<div className="bg-[#FFF8E1]/90 backdrop-blur-xl p-8 md:p-12 rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.2)] transform transition-transform duration-500 hover:-translate-y-4 border-t border-[#FFD700]/30">
<div className="flex flex-col gap-6">
<div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
<h2 className="font-hero text-4xl text-[#2F4F4F]">Vielsen</h2>
<div className="space-y-4">
<div className="flex items-start gap-4">
<svg className="lucide lucide-map-pin text-[#B76E79] mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<h4 className="font-bold text-lg">Oddernes Kirke</h4>
<p className="text-sm text-gray-600">Oddernesveien 12, 4630 Kristiansand</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-clock text-[#B76E79] mt-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<h4 className="font-bold text-lg">Kl. 13:00</h4>
<p className="text-sm text-gray-600">Vennligst vær på plass 12:45</p>
</div>
</div>
</div>
<a className="mt-4 w-full text-center py-3 rounded-full bg-[#2F4F4F] text-[#FFF8E1] font-bold tracking-wide hover:bg-[#B76E79] transition-colors btn-marshmallow" href="https://maps.google.com" target="_blank">
                            SE KART
                        </a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FFF8E1] relative">
<div className="max-w-3xl mx-auto px-6 relative">
<h2 className="font-hero text-center text-5xl text-[#2F4F4F] mb-20">Dagen</h2>

<div className="absolute left-6 md:left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-[#B76E79] via-[#FFD700] to-[#B76E79] opacity-50"></div>

<div className="space-y-20">

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<h3 className="font-display font-bold text-xl text-[#2F4F4F]">Vielse</h3>
<p className="font-editorial text-gray-600">Oddernes Kirke</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFD700] rounded-full ring-4 ring-[#FFF8E1] shadow-lg z-10 group-hover:scale-150 transition-transform duration-300"></div>
<div className="md:w-5/12 pl-12 md:pl-0 order-1 md:order-2">
<span className="font-script text-3xl text-[#B76E79]">13:00</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<span className="font-script text-3xl text-[#B76E79]">14:30</span>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2F4F4F] rounded-full ring-4 ring-[#FFF8E1] shadow-lg z-10 group-hover:scale-150 transition-transform duration-300"></div>
<div className="md:w-5/12 pl-12 md:pl-0 order-1 md:order-2">
<h3 className="font-display font-bold text-xl text-[#2F4F4F]">Mingling &amp; Foto</h3>
<p className="font-editorial text-gray-600">Hagen på Mosby</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<h3 className="font-display font-bold text-xl text-[#2F4F4F]">Festmiddag</h3>
<p className="font-editorial text-gray-600">Taler, mat og glede</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFD700] rounded-full ring-4 ring-[#FFF8E1] shadow-lg z-10 group-hover:scale-150 transition-transform duration-300"></div>
<div className="md:w-5/12 pl-12 md:pl-0 order-1 md:order-2">
<span className="font-script text-3xl text-[#B76E79]">17:00</span>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<span className="font-script text-3xl text-[#B76E79]">21:00</span>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2F4F4F] rounded-full ring-4 ring-[#FFF8E1] shadow-lg z-10 group-hover:scale-150 transition-transform duration-300"></div>
<div className="md:w-5/12 pl-12 md:pl-0 order-1 md:order-2">
<h3 className="font-display font-bold text-xl text-[#2F4F4F]">Brudedans &amp; Fest</h3>
<p className="font-editorial text-gray-600">Hæla i taket</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#38761D] text-[#FFF8E1] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-hero text-5xl md:text-7xl mb-4">Kvelden Før</h2>
<p className="font-narrative text-xl md:text-2xl text-[#FFD700] tracking-wide">"Fredagstaco og rigging!"</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 p-4">

<div className="bg-white p-4 pb-12 shadow-2xl transform rotate-[-3deg] hover:rotate-0 hover:z-20 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="bg-gray-200 w-full aspect-square mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-polaroid text-[#2F4F4F] text-center text-sm">Huset på Mosby</p>
</div>

<div className="bg-white p-4 pb-12 shadow-2xl transform rotate-[2deg] hover:rotate-0 hover:z-20 hover:scale-105 transition-all duration-500 cursor-pointer md:mt-16">
<div className="bg-gray-200 w-full aspect-square mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-polaroid text-[#2F4F4F] text-center text-sm">Gjengen samlet</p>
</div>

<div className="bg-white p-4 pb-12 shadow-2xl transform rotate-[-1deg] hover:rotate-0 hover:z-20 hover:scale-105 transition-all duration-500 cursor-pointer">
<div className="bg-gray-200 w-full aspect-square mb-4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-polaroid text-[#2F4F4F] text-center text-sm">Remine filmer lek</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FFF8E1]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-hero text-4xl md:text-5xl text-[#2F4F4F] text-center mb-20">Ingen fest uten overnatting</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
<div className="h-48 bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="font-display font-bold text-xl text-[#2F4F4F] mb-2 group-hover:text-[#FF69B4] transition-colors">Citybox</h3>
<p className="text-sm text-gray-500 mb-4">Det urbane valget</p>
<a className="text-xs font-bold uppercase tracking-widest text-[#B76E79] border-b border-[#B76E79] pb-1" href="#">Book her</a>
</div>
</div>

<div className="group bg-[#2F4F4F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-[#FFF8E1]">
<div className="h-48 bg-gray-600 overflow-hidden relative">
<div className="absolute inset-0 bg-[#B76E79] opacity-20 group-hover:opacity-0 transition-opacity"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="font-display font-bold text-xl mb-2">Sovesal / Hus</h3>
<p className="text-sm text-gray-300 mb-4">Guttehus &amp; Jentehus</p>
<a className="text-xs font-bold uppercase tracking-widest text-[#FFD700] border-b border-[#FFD700] pb-1" href="#rsvp">Svar i skjema</a>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
<div className="h-48 bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<h3 className="font-display font-bold text-xl text-[#2F4F4F] mb-2 group-hover:text-orange-500 transition-colors">Airbnb</h3>
<p className="text-sm text-gray-500 mb-4">Finn din egen ro</p>
<a className="text-xs font-bold uppercase tracking-widest text-[#B76E79] border-b border-[#B76E79] pb-1" href="#">Søk nå</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-[#B76E79] to-[#EDAea0] text-[#FFF8E1] text-center">
<div className="max-w-4xl mx-auto px-6">
<div className="inline-block p-6 rounded-full bg-white/10 backdrop-blur-lg mb-8 animate-bounce cursor-pointer btn-marshmallow">
<svg className="lucide lucide-gift w-12 h-12 text-[#FFF8E1]" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<h2 className="font-hero text-5xl mb-6">En Gjestfri Gave</h2>
<p className="font-editorial text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
                    "Vi gleder oss til å bygge et ekte hjem – et sted fylt med minner, latter og varme. Bare det å dele denne dagen med dere er den største gaven."
                </p>
<a className="inline-block px-10 py-4 bg-[#FFF8E1] text-[#B76E79] font-bold rounded-full shadow-xl btn-marshmallow" href="#">
                    SE ØNSKELISTE
                </a>
</div>
</section>

<section className="py-32 bg-[#FFF8E1]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-hero text-4xl text-[#2F4F4F] mb-12 text-center">Spørsmål?</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl p-6 cursor-pointer list-none shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center font-display font-bold text-[#2F4F4F]">
                            Kleskode
                            <svg className="lucide lucide-plus w-5 h-5 text-[#B76E79] group-open:rotate-45 transition-transform" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-editorial">Vi pynter oss! Gjerne i bunad, kjole eller dress. Det er en festdag!</p>
</details>
<details className="group bg-white rounded-2xl p-6 cursor-pointer list-none shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center font-display font-bold text-[#2F4F4F]">
                            Barn i bryllupet?
                            <svg className="lucide lucide-plus w-5 h-5 text-[#B76E79] group-open:rotate-45 transition-transform" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-editorial">Vi elsker barn, men ønsker et bryllup hvor de voksne kan senke skuldrene. Kun barn som ammes/bæres er invitert.</p>
</details>
<details className="group bg-white rounded-2xl p-6 cursor-pointer list-none shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center font-display font-bold text-[#2F4F4F]">
                            Parkering
                            <svg className="lucide lucide-plus w-5 h-5 text-[#B76E79] group-open:rotate-45 transition-transform" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<p className="mt-4 text-gray-600 font-editorial">Masse gratis parkering både ved Oddernes Kirke og ved huset på Mosby.</p>
</details>
</div>
</div>
</section>

<section className="py-32 bg-[#2F4F4F] relative overflow-hidden" id="rsvp">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
<h2 className="font-hero text-5xl text-[#FFF8E1] mb-16">En Invitasjon Venter</h2>

<div className="envelope-stage w-full max-w-lg h-[400px] flex justify-center items-center" id="envelope-trigger">
<div className="envelope w-full h-64 bg-[#FFF8E1] shadow-2xl relative cursor-pointer" onclick="this.classList.toggle('active')">

<div className="flap absolute top-0 left-0 w-full h-1/2 bg-[#FCEABB] origin-top border-b border-gray-300 flex justify-center items-center shadow-lg">
<div className="w-12 h-12 bg-[#B76E79] rounded-full flex items-center justify-center font-hero text-[#FFF8E1] border-4 border-[#B76E79]/50 shadow-inner">R&amp;D</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-full bg-[#FFF8E1] border-t border-gray-200 z-10 pointer-events-none flex items-end justify-center pb-4">
<span className="text-xs tracking-[0.3em] text-gray-400 uppercase">Klikk for å åpne</span>
</div>

<div className="card-insert absolute top-2 left-2 right-2 bottom-2 bg-white p-6 shadow-sm border border-gray-100 flex flex-col gap-4 text-center">
<h3 className="font-hero text-2xl text-[#2F4F4F]">Kommer du?</h3>
<form className="space-y-3 text-left" onsubmit="event.preventDefault(); alert('Takk! Svar sendt.');">
<input className="w-full border-b border-gray-300 py-1 focus:outline-none focus:border-[#B76E79] bg-transparent text-sm" placeholder="Ditt Navn" type="text"/>
<div className="flex gap-4 text-sm mt-2">
<label className="flex items-center gap-2"><input className="accent-[#B76E79]" name="attending" type="radio"/> Ja, klart!</label>
<label className="flex items-center gap-2"><input className="accent-[#B76E79]" name="attending" type="radio"/> Nei, dessverre</label>
</div>
<button className="w-full mt-2 py-2 bg-[#2F4F4F] text-[#FFF8E1] text-xs font-bold uppercase tracking-widest hover:bg-[#B76E79] transition-colors">Send Svar</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative h-[60vh] overflow-hidden flex items-end justify-center pb-20 bg-black">

<div className="absolute inset-0 opacity-60 animate-pan bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp', width: '120%'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2F4F4F] via-transparent to-transparent"></div>

<div className="absolute top-1/2 w-full opacity-30">
<div className="marquee-content">
<span className="marquee-text text-white">Vi gleder oss til å feire med dere! • EST. 2026 REMINE &amp; DANIEL • Vi gleder oss til å feire med dere! • EST. 2026 REMINE &amp; DANIEL •</span>
</div>
</div>
<div className="relative z-10 text-center text-[#FFF8E1]">
<h2 className="font-script text-6xl md:text-8xl mb-4">Remine &amp; Daniel</h2>
<p className="font-display text-sm tracking-[0.5em] uppercase opacity-70">Kristiansand • Norge</p>
</div>
</footer>
</main>



    </>
  );
}
