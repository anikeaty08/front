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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
concrete: '#E5E5EA',
navy: '#001F3F',
safety: '#FF9500',
},
borderRadius: {
'squircle': '30px',
}
}
}
}



        // 1. Parallax Effect for Hero
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const bg = document.getElementById('hero-bg');
            // Move background slower than scroll
            bg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
        });

        // 2. Timeline Draw Animation
        const processSection = document.getElementById('process');
        const timelineProgress = document.getElementById('timeline-progress');
        
        window.addEventListener('scroll', () => {
            const rect = processSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const totalHeight = rect.height;
                const visibleHeight = Math.min(totalHeight, windowHeight - rect.top);
                const percentage = (visibleHeight / totalHeight) * 100 + 20; // +20 offset
                timelineProgress.style.height = `${Math.min(100, Math.max(0, percentage))}%`;
            }
        });

        // 3. Staggered Reveal on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on child index or manual delay
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100); 
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

        // 4. Number Counter Animation
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); 
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        });

        document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

        // 5. 3D Tilt Effect for Cards
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
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
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 mesh-blob" style={{animationDelay: '0s'}}></div>
<div className="absolute top-[-10%] right-[-10%] w-2/3 h-2/3 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 mesh-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-20%] left-[20%] w-2/3 h-2/3 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 mesh-blob" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-5xl w-[90%]">
<div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold tracking-tighter">M</div>
<span className="font-semibold tracking-tight text-navy">Müller Bau</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-safety transition-colors" href="#services">Leistungen</a>
<a className="hover:text-safety transition-colors" href="#projects">Projekte</a>
<a className="hover:text-safety transition-colors" href="#process">Prozess</a>
<a className="hover:text-safety transition-colors" href="#about">Über Uns</a>
</div>
<a className="hidden md:block bg-navy text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-safety transition-colors duration-300" href="#contact">
                Kontakt
            </a>
<button className="md:hidden text-navy">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-cover bg-center" id="hero-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp', transform: 'scale(1.1)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-concrete"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
<div className="reveal-item">
<span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-wide mb-6">
                    DEUTSCHE INGENIEURSKUNST
                </span>
</div>
<h1 className="reveal-item text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 drop-shadow-sm leading-[1.1]">
                Wir bauen <br/> Ihre Zukunft.
            </h1>
<p className="reveal-item text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                Präzision, Architektur und Ingenieurskunst seit 2004. <br className="hidden md:block"/>Ihr Partner für anspruchsvolle Bauprojekte.
            </p>
<div className="reveal-item flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group relative overflow-hidden rounded-full bg-glass backdrop-blur-xl border border-safety/50 text-white px-8 py-4 transition-all hover:scale-105 hover:shadow-lg hover:shadow-safety/20 bg-white/10" href="#contact">
<span className="relative z-10 flex items-center gap-2 font-medium">
                        Projekt anfragen
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-safety opacity-20 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
</a>
</div>
</div>
</header>

<section className="relative z-20 -mt-10 pb-20">
<div className="max-w-6xl mx-auto px-6">
<div className="glass rounded-squircle p-8 flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2">
<iconify-icon className="text-navy" icon="solar:verified-check-linear" width="32"></iconify-icon>
<span className="font-bold text-navy tracking-tight text-lg">TÜV SÜD</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-navy" icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
<span className="font-bold text-navy tracking-tight text-lg">MEISTERBETRIEB</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-navy" icon="solar:buildings-linear" width="32"></iconify-icon>
<span className="font-bold text-navy tracking-tight text-lg">ARCHITEKTENKAMMER</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-navy" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="font-bold text-navy tracking-tight text-lg">ISO 9001</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal-item">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-navy mb-4">Unsere Expertise</h2>
<p className="text-slate-500 text-lg">Ganzheitliche Lösungen für moderne Bauvorhaben.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="group relative col-span-1 md:col-span-2 lg:col-span-2 glass rounded-squircle p-8 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer tilt-card reveal-item">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-navy" icon="solar:city-linear" width="150"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between tilt-inner">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy to-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-navy mb-2 tracking-tight">Hochbau</h3>
<p className="text-slate-500 leading-relaxed">Realisierung komplexer Wohn- und Gewerbeimmobilien mit höchstem Anspruch an Statik und Ästhetik.</p>
</div>
</div>
</div>

<div className="group relative col-span-1 lg:col-span-1 glass rounded-squircle p-8 overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer tilt-card reveal-item">
<div className="relative z-10 h-full flex flex-col justify-between tilt-inner">
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-navy mb-4">
<iconify-icon icon="solar:excavator-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-navy mb-2 tracking-tight">Tiefbau</h3>
<p className="text-slate-500 text-sm">Fundamente, Erdarbeiten und Infrastruktur.</p>
</div>
</div>
</div>

<div className="group relative col-span-1 lg:col-span-1 bg-navy text-white rounded-squircle p-8 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer tilt-card reveal-item">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-white" icon="solar:refresh-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between tilt-inner">
<div className="w-12 h-12 rounded-2xl bg-safety flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:refresh-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Sanierung</h3>
<p className="text-white/70 text-sm">Nachhaltige Modernisierung von Bestandsbauten.</p>
</div>
</div>
</div>

<div className="group relative col-span-1 md:col-span-2 lg:col-span-4 h-[200px] glass rounded-squircle p-8 overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer tilt-card reveal-item flex items-center justify-between">
<div className="flex flex-col justify-center h-full tilt-inner max-w-2xl">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl bg-orange-100 text-safety flex items-center justify-center">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-navy tracking-tight">Projektleitung</h3>
</div>
<p className="text-slate-500">Von der ersten Skizze bis zur Schlüsselübergabe – wir koordinieren alle Gewerke für einen reibungslosen Ablauf.</p>
</div>
<div className="hidden md:block tilt-inner">
<iconify-icon className="text-slate-300" icon="solar:chart-square-linear" width="80"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal-item">
<span className="text-safety font-semibold tracking-wide text-xs uppercase mb-2 block">Über Müller Bau</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-navy mb-6 leading-tight">
                    Fundamente für <br/>die Ewigkeit.
                </h2>
<div className="space-y-6 text-slate-600 text-lg leading-relaxed">
<p>
                        Bei Müller Bau Design verstehen wir Bauen nicht nur als das Zusammensetzen von Materialien, sondern als die Verwirklichung von Visionen.
                    </p>
<p>
                        Mit Wurzeln im traditionellen deutschen Handwerk und dem Blick auf modernste Technologien schaffen wir Räume, die Generationen überdauern. Unsere Standards für Sicherheit und Qualität liegen weit über dem Durchschnitt.
                    </p>
<div className="pt-4 flex gap-6">
<div className="flex flex-col">
<span className="text-3xl font-bold text-navy counter" data-target="20">0</span>
<span className="text-sm text-slate-400">Jahre Erfahrung</span>
</div>
<div className="w-px h-12 bg-slate-200"></div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-navy">DIN</span>
<span className="text-sm text-slate-400">Zertifiziert</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal-item">
<div className="relative rounded-squircle overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl shadow-navy/20">
<img alt="Construction Site" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 glass p-4 rounded-2xl flex items-center gap-4 max-w-xs">
<div className="w-10 h-10 rounded-full bg-safety flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<p className="text-xs text-navy font-medium leading-snug">"Qualität ist kein Zufall, sondern das Ergebnis intelligenter Anstrengung."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/50 backdrop-blur-sm" id="projects">
<div className="px-6 max-w-7xl mx-auto mb-12 flex justify-between items-end reveal-item">
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-navy mb-2">Ausgewählte Projekte</h2>
<p className="text-slate-500">Einblicke in unsere jüngsten Erfolge.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" onclick="document.getElementById('slider').scrollBy({left: -400, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-navy hover:text-white transition-colors" onclick="document.getElementById('slider').scrollBy({left: 400, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x mandatory no-scrollbar reveal-item" id="slider">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-squircle overflow-hidden relative group cursor-pointer">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-safety text-xs font-semibold tracking-wider uppercase mb-1 block">München</span>
<h3 className="text-2xl font-semibold text-white mb-2">Villa Grünwald</h3>
<p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Luxuriöse Privatvilla mit Sichtbeton-Elementen und Smart-Home Integration.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-squircle overflow-hidden relative group cursor-pointer">
<img alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-safety text-xs font-semibold tracking-wider uppercase mb-1 block">Berlin</span>
<h3 className="text-2xl font-semibold text-white mb-2">Office Tower Mitte</h3>
<p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Nachhaltiger Büroneubau mit LEED-Gold Zertifizierung.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-squircle overflow-hidden relative group cursor-pointer">
<img alt="Residential" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-safety text-xs font-semibold tracking-wider uppercase mb-1 block">Hamburg</span>
<h3 className="text-2xl font-semibold text-white mb-2">HafenCity Residenz</h3>
<p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Exklusiver Wohnkomplex mit Tiefgarage direkt an der Elbe.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="process">
<div className="max-w-4xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tighter text-navy mb-16 text-center reveal-item">Der Weg zum Ziel</h2>
<div className="relative">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

<div className="absolute left-[20px] md:left-1/2 top-0 w-px bg-safety transform md:-translate-x-1/2 transition-all duration-300" id="timeline-progress" style={{height: '0%'}}></div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 group reveal-item">
<div className="md:w-[45%] md:text-right order-2 md:order-1 pl-12 md:pl-0">
<h3 className="text-2xl font-semibold text-navy">Beratung</h3>
<p className="text-slate-500 mt-2">Wir analysieren Ihre Wünsche und prüfen die Machbarkeit vor Ort.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center transform md:-translate-x-1/2 z-10 transition-colors duration-500 group-hover:border-safety order-1">
<span className="text-sm font-bold text-slate-400 group-hover:text-safety">1</span>
</div>
<div className="md:w-[45%] order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 group reveal-item">
<div className="md:w-[45%] order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center transform md:-translate-x-1/2 z-10 transition-colors duration-500 group-hover:border-safety order-1">
<span className="text-sm font-bold text-slate-400 group-hover:text-safety">2</span>
</div>
<div className="md:w-[45%] order-2 pl-12 md:pl-0">
<h3 className="text-2xl font-semibold text-navy">Planung</h3>
<p className="text-slate-500 mt-2">Architekten und Ingenieure erstellen detaillierte Pläne und 3D-Modelle.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 group reveal-item">
<div className="md:w-[45%] md:text-right order-2 md:order-1 pl-12 md:pl-0">
<h3 className="text-2xl font-semibold text-navy">Bauphase</h3>
<p className="text-slate-500 mt-2">Effiziente Umsetzung mit unseren Fachteams und ständiger Bauleitung.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center transform md:-translate-x-1/2 z-10 transition-colors duration-500 group-hover:border-safety order-1">
<span className="text-sm font-bold text-slate-400 group-hover:text-safety">3</span>
</div>
<div className="md:w-[45%] order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group reveal-item">
<div className="md:w-[45%] order-2 md:order-1"></div>
<div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-safety border-4 border-safety flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg shadow-safety/30 order-1">
<iconify-icon className="text-white" icon="solar:key-linear"></iconify-icon>
</div>
<div className="md:w-[45%] order-2 pl-12 md:pl-0">
<h3 className="text-2xl font-semibold text-navy">Schlüsselübergabe</h3>
<p className="text-slate-500 mt-2">Pünktliche Fertigstellung und gemeinsame Endabnahme.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-navy relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety opacity-5 rounded-full blur-3xl"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="glass-dark rounded-squircle p-10 text-center hover:-translate-y-2 transition-transform duration-300 reveal-item">
<iconify-icon className="text-safety mb-4" icon="solar:calendar-linear" width="40"></iconify-icon>
<div className="text-5xl font-bold text-white mb-2 flex justify-center items-baseline gap-1">
<span className="counter" data-target="20">0</span>
</div>
<p className="text-slate-400 font-medium">Jahre Erfahrung</p>
</div>

<div className="glass-dark rounded-squircle p-10 text-center hover:-translate-y-2 transition-transform duration-300 reveal-item" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-safety mb-4" icon="solar:buildings-2-linear" width="40"></iconify-icon>
<div className="text-5xl font-bold text-white mb-2 flex justify-center items-baseline gap-1">
<span className="counter" data-target="500">0</span>
<span className="text-2xl text-safety">+</span>
</div>
<p className="text-slate-400 font-medium">Projekte Realisiert</p>
</div>

<div className="glass-dark rounded-squircle p-10 text-center hover:-translate-y-2 transition-transform duration-300 reveal-item" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-safety mb-4" icon="solar:stopwatch-linear" width="40"></iconify-icon>
<div className="text-5xl font-bold text-white mb-2 flex justify-center items-baseline gap-1">
<span className="counter" data-target="100">0</span>
<span className="text-2xl text-safety">%</span>
</div>
<p className="text-slate-400 font-medium">Termin-Treue</p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-slate-300 mb-8 mx-auto reveal-item" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold text-navy tracking-tight leading-tight mb-8 reveal-item">
                "Müller Bau hat unsere Erwartungen bei Weitem übertroffen. Die Präzision und Sauberkeit auf der Baustelle waren beeindruckend."
            </h2>
<div className="reveal-item">
<div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<p className="font-bold text-navy">Dr. Thomas Weber</p>
<p className="text-sm text-slate-500">CEO, Weber Immobilien AG</p>
</div>
</div>
</section>

<footer className="bg-navy pt-20 pb-10 px-6 text-white rounded-t-[50px] mt-10" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h3 className="text-2xl font-bold tracking-tight mb-6">Müller Bau Design</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Ihr zuverlässiger Partner für Hochbau, Tiefbau und Projektmanagement. Qualität made in Germany.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safety transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-safety transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Kontakt</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-safety" icon="solar:map-point-linear"></iconify-icon>
                            Industriestraße 45, 10115 Berlin
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-safety" icon="solar:phone-calling-linear"></iconify-icon>
                            +49 (0) 30 123 456 78
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-safety" icon="solar:letter-linear"></iconify-icon>
                            info@mueller-bau-design.de
                        </li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Unternehmen</h4>
<ul className="space-y-3 text-slate-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Über Uns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-white transition-colors" href="#">Presse</a></li>
<li><a className="hover:text-white transition-colors" href="#">Impressum &amp; Datenschutz</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-6 text-lg">Projekt starten</h4>
<p className="text-slate-400 text-sm mb-4">Lassen Sie uns über Ihre Vision sprechen.</p>
<button className="w-full py-3 px-6 rounded-xl bg-safety text-white font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-safety/20">
                        Kostenloses Angebot
                    </button>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 Müller Bau Design GmbH. Alle Rechte vorbehalten.</p>
<div className="mt-4 md:mt-0 flex gap-6">
<a className="hover:text-white" href="#">AGB</a>
<a className="hover:text-white" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
