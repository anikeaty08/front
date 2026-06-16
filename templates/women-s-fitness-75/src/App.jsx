import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: { 850: '#1f1c1a' },
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' }
});
}
]
};



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        document.addEventListener('DOMContentLoaded', () => {

            /* --- TYPEWRITER LOGIC --- */
            const words = ["beste", "stärkste", "vollkommene"];
            let i = 0;
            let currentWordIndex = 0;
            let isDeleting = false;
            let text = '';
            const typeSpeed = 100;
            const deleteSpeed = 50;
            const pauseTime = 2000;
            const element = document.getElementById('typewriter');

            function typeWriter() {
                const currentWord = words[currentWordIndex];

                if (isDeleting) {
                    text = currentWord.substring(0, text.length - 1);
                } else {
                    text = currentWord.substring(0, text.length + 1);
                }

                element.textContent = text;

                let delta = isDeleting ? deleteSpeed : typeSpeed;

                if (!isDeleting && text === currentWord) {
                    delta = pauseTime;
                    isDeleting = true;
                } else if (isDeleting && text === '') {
                    isDeleting = false;
                    currentWordIndex++;
                    if (currentWordIndex === words.length) {
                        currentWordIndex = 0;
                    }
                }

                setTimeout(typeWriter, delta);
            }

            // Start Typewriter
            typeWriter();


            /* --- SCROLL REVEAL LOGIC --- */
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px', 
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('[class*="reveal-"]');
            elements.forEach(el => observer.observe(el));

            /* --- SCROLL TEXT COLOR FILL ANIMATION --- */
            const scrollTextElements = document.querySelectorAll('.scroll-text-reveal');
            
            function handleScrollText() {
                const windowHeight = window.innerHeight;
                
                scrollTextElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const elementTop = rect.top;
                    const elementHeight = rect.height;
                    
                    const startY = windowHeight * 0.9;
                    const endY = windowHeight * 0.4;
                    
                    let progress = 0;
                    
                    if (elementTop < startY) {
                        const totalDistance = startY - endY;
                        const traveled = startY - elementTop;
                        progress = Math.min(Math.max(traveled / totalDistance, 0), 1) * 100;
                    }
                    
                    el.style.setProperty('--scroll-percent', `${progress}%`);
                });
            }

            // Run on scroll and initial load
            window.addEventListener('scroll', handleScrollText, { passive: true });
            handleScrollText();

            /* --- 3D TILT EFFECT LOGIC --- */
            const tiltCards = document.querySelectorAll('.tilt-card');
            
            tiltCards.forEach(card => {
                const glare = card.querySelector('.tilt-glare');
                let bounds;

                function rotateToMouse(e) {
                    bounds = card.getBoundingClientRect();
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;
                    const leftX = mouseX - bounds.x;
                    const topY = mouseY - bounds.y;
                    
                    const center = {
                        x: leftX - bounds.width / 2,
                        y: topY - bounds.height / 2
                    }
                    
                    // Subtle movement
                    card.style.transform = `
                        perspective(1000px)
                        scale3d(1.02, 1.02, 1.02)
                        rotateX(${center.y / 20}deg)
                        rotateY(${-center.x / 20}deg)
                    `;

                    if (glare) {
                        glare.style.opacity = '1';
                        glare.style.background = `radial-gradient(circle at ${leftX}px ${topY}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)`;
                    }
                }

                card.addEventListener('mouseenter', () => {
                    card.style.transition = 'transform 0.1s ease-out';
                });

                card.addEventListener('mousemove', rotateToMouse);

                card.addEventListener('mouseleave', () => {
                    card.style.transition = 'transform 0.5s ease-out';
                    card.style.transform = '';
                    if (glare) {
                        glare.style.opacity = '0';
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK" style={{filter: 'invert(1) hue-rotate(290deg) saturate(0.8) opacity(0.6)'}}></div>
</div>


<nav className="fixed top-0 w-full z-40 bg-[#fff0f5]/80 backdrop-blur-md border-b border-rose-100/50 reveal-down">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-stone-800 flex items-center gap-2">
<span className="iconify text-rose-400" data-icon="lucide:sparkles" data-width="24"></span>
                REBALANCE
            </div>
<a className="hidden md:inline-flex bg-rose-300 text-stone-800 px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-400 transition-colors shadow-sm shadow-rose-200/50" href="#hero">
                Kostenlos teilnehmen
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden z-10" id="hero">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="reveal-left inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-rose-200 text-rose-600 text-xs font-medium tracking-wide uppercase backdrop-blur-sm shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
</span>
                    Startet bald – Jetzt Platz sichern
                </div>
<h1 className="reveal-fx delay-100 text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-stone-800">
                    Werde die <br className="lg:hidden"/>
<span className="text-rose-400 italic serif typewriter-cursor inline-block text-left min-w-[130px] lg:min-w-[170px]" id="typewriter">beste</span>
<br className="block"/>
<span className="text-purple-400 italic serif">Version</span> deiner selbst.
                </h1>
<p className="reveal-left delay-200 text-lg text-stone-600 leading-relaxed max-w-lg font-medium">
                    Das <span className="font-bold text-stone-800">30-Tage-reBalance-Programm</span> für Powerfrauen, die mehr Energie, unerschütterliches Selbstbewusstsein und echte Lebensfreude spüren wollen.
                </p>
<div className="reveal-pop delay-300 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-rose-100/50 border border-white max-w-md transform transition-transform hover:scale-[1.01] duration-500">
<p className="text-sm font-bold text-stone-800 mb-4">Starte Stress-Balance-Analyse jetzt, 100% kostenlos</p>
<form className="space-y-3" onsubmit="event.preventDefault();">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-rose-400 transition-colors">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</span>
<input className="w-full pl-10 pr-4 py-3 bg-white/80 border border-rose-100 rounded-lg text-sm text-stone-800 font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all placeholder:text-stone-400 shadow-sm" placeholder="Dein Vorname" required="" type="text"/>
</div>
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-rose-400 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</span>
<input className="w-full pl-10 pr-4 py-3 bg-white/80 border border-rose-100 rounded-lg text-sm text-stone-800 font-medium focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition-all placeholder:text-stone-400 shadow-sm" placeholder="Deine E-Mail Adresse" required="" type="email"/>
</div>
<button className="w-full h-11 bg-rose-400 hover:bg-rose-500 text-white font-medium text-[15px] rounded-lg shadow-lg shadow-rose-200 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 group mt-2" type="submit">
                            Jetzt anfordern
                            <span className="iconify group-hover:translate-x-0.5 transition-transform opacity-90" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-[10px] text-stone-500 text-center font-medium mt-3">Deine Daten sind sicher. Abmeldung jederzeit möglich.</p>
</form>
</div>
<div className="reveal-fx delay-400 flex items-center gap-4 text-sm text-stone-600 font-medium">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p>Bereits <span className="font-bold text-stone-800">2.400+</span> Teilnehmerinnen</p>
</div>
</div>
<div className="reveal-right delay-500 relative lg:h-[600px] w-full hidden lg:block perspective-1000">
<div className="absolute inset-0 bg-rose-100 rounded-[2rem] overflow-hidden transform transition-transform duration-1000 hover:rotate-1 shadow-2xl shadow-rose-200">
<img alt="Sabine mit grüner Tasse" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-start gap-3">
<div className="bg-rose-100 p-2 rounded-lg text-rose-500">
<span className="iconify" data-icon="lucide:coffee" data-width="20"></span>
</div>
<div>
<h3 className="font-bold text-stone-900 text-sm">Inner Balance</h3>
<p className="text-xs text-stone-600 font-medium mt-1">Starte jeden Tag mit Ruhe &amp; Kraft.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 bg-[#fce7f3] text-stone-800 overflow-hidden relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-left">
<span className="text-rose-500 font-medium tracking-wide text-sm uppercase">Die Realität</span>
<h2 className="text-3xl lg:text-4xl font-medium text-stone-800 mt-4 mb-6 leading-tight tracking-tight">
                        Kennst du dieses Gefühl?
                    </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 reveal-left delay-100">
<div className="min-w-[40px] h-[40px] rounded-full bg-white/80 flex items-center justify-center text-rose-400 border border-white shadow-sm">
<span className="iconify" data-icon="lucide:battery-low" data-width="20"></span>
</div>
<div>
<h4 className="text-stone-800 font-medium text-lg">Erschöpft &amp; Kraftlos</h4>
<p className="text-stone-600 text-sm mt-1 leading-relaxed">Du fühlst dich oft schon morgens müde und der Alltag raubt dir die letzte Energie.</p>
</div>
</li>
<li className="flex items-start gap-4 reveal-left delay-200">
<div className="min-w-[40px] h-[40px] rounded-full bg-white/80 flex items-center justify-center text-rose-400 border border-white shadow-sm">
<span className="iconify" data-icon="lucide:clock-4" data-width="20"></span>
</div>
<div>
<h4 className="text-stone-800 font-medium text-lg">Keine Zeit für dich</h4>
<p className="text-stone-600 text-sm mt-1 leading-relaxed">Job, Familie, Verpflichtungen – deine eigenen Bedürfnisse stehen immer hinten an.</p>
</div>
</li>
<li className="flex items-start gap-4 reveal-left delay-300">
<div className="min-w-[40px] h-[40px] rounded-full bg-white/80 flex items-center justify-center text-rose-400 border border-white shadow-sm">
<span className="iconify" data-icon="lucide:frown" data-width="20"></span>
</div>
<div>
<h4 className="text-stone-800 font-medium text-lg">Unwohl im Körper</h4>
<p className="text-stone-600 text-sm mt-1 leading-relaxed">Der Blick in den Spiegel frustriert dich, statt dich stolz zu machen.</p>
</div>
</li>
</ul>
</div>
<div className="reveal-right delay-200 relative bg-white/60 backdrop-blur-md rounded-2xl p-8 lg:p-12 text-stone-800 shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-700 ring-1 ring-white/80">
<div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-purple-100/50 -z-10"></div>
<span className="iconify absolute top-8 right-8 text-rose-200" data-icon="lucide:quote" data-width="80"></span>
<h3 className="text-2xl lg:text-3xl serif mb-6 relative z-10">Es ist Zeit für eine Veränderung.</h3>
<p className="text-stone-600 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                        Stell dir vor, du wachst auf und freust dich auf den Tag. Du spürst Kraft in deinem Körper, Klarheit in deinem Kopf und ein Lächeln im Gesicht, das von innen kommt.
                    </p>
<div className="border-t border-rose-200 pt-6 relative z-10">
<p className="font-bold text-lg text-rose-500">Die Lösung: 30 Tage, die dein Leben verändern.</p>
<p className="text-sm text-stone-500 mt-2 font-medium">Mit täglichen Aufgaben, Support und einer unschlagbaren Community.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden z-10" id="coach-section">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative reveal-left order-first lg:order-last">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-purple-100 rounded-[2rem] transform rotate-3 scale-105 -z-10 blur-md opacity-70"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-200/50 border-4 border-white transform transition-transform duration-500 hover:scale-[1.01]">
<img alt="Deine Trainerin Sabine" className="w-full h-auto object-cover hover:saturate-150 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:coffee" data-width="20"></span>
</div>
<div>
<p className="text-xs font-bold text-stone-800 uppercase tracking-wide">Sabine's Tipp</p>
<p className="text-sm text-stone-700 italic font-medium">"Nimm dir täglich 5 Minuten nur für dich."</p>
</div>
</div>
</div>
</div>
</div>

<div className="reveal-right">
<span className="inline-block py-1 px-4 rounded-full bg-white/50 border border-rose-200 text-rose-500 font-semibold text-[10px] tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
                    Deine Begleiterin
                </span>
<h2 className="text-5xl lg:text-6xl serif text-stone-800 mb-4 leading-none tracking-tight">
                    Hallo, ich bin Sabine.
                </h2>
<h3 className="text-xl serif text-stone-600 font-medium italic mb-8">
                    Coach für Achtsamkeit &amp; Vitalität
                </h3>
<div className="space-y-6 text-lg leading-relaxed font-medium">
<p className="scroll-text-reveal">
                        Ich weiß genau, wie es sich anfühlt, wenn der Alltag einen überrollt. Zwischen Job, Familie und Haushalt bleibt oft eines auf der Strecke: <strong>Du selbst.</strong>
</p>
<p className="scroll-text-reveal">
                        Mit diesem Programm möchte ich dir zeigen, dass es keine stundenlangen Workouts braucht, um sich wieder wohl im eigenen Körper zu fühlen. Oft reicht schon eine Tasse Tee in Ruhe und die richtige Ausrichtung deiner Gedanken.
                    </p>
<div className="mt-8 relative pl-6 border-l-[3px] border-rose-300">
<p className="serif italic text-stone-600 text-xl leading-relaxed">
                            "Echte Stärke entsteht in den Momenten, in denen wir gut zu uns selbst sind."
                        </p>
</div>
</div>
<div className="mt-10 pt-8 border-t border-rose-100 flex items-center gap-12">
<div>
<p className="text-3xl serif text-stone-800 font-medium">15+</p>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1 font-bold">Jahre Erfahrung</p>
</div>
<div>
<p className="text-3xl serif text-stone-800 font-medium">5k+</p>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1 font-bold">Frauen begleitet</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-fx">
<span className="text-rose-500 font-bold tracking-wide text-sm uppercase">Deine Transformation</span>
<h2 className="text-3xl lg:text-4xl font-medium text-stone-800 mt-3 tracking-tight">Warum du dabei sein musst</h2>
<p className="text-stone-600 font-medium mt-4">Kleine Schritte, große Wirkung. Das erwartet dich in den nächsten 30 Tagen.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 reveal-pop delay-100">
<div className="tilt-card rounded-2xl bg-white/60 border border-white/60 shadow-lg shadow-rose-100 hover:shadow-xl transition-all duration-300 group cursor-default backdrop-blur-md">
<div className="tilt-glare"></div>
<div className="tilt-content p-8 h-full flex flex-col">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-rose-100 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 group-hover:text-rose-500 transition-all duration-300">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-stone-800 mb-3">Grenzenlose Energie</h3>
<p className="text-stone-600 text-sm leading-relaxed flex-grow font-medium">Lerne Techniken, um dein Energielevel dauerhaft hochzuhalten – ohne Koffein-Crashs.</p>
</div>
</div>
<div className="tilt-card rounded-2xl bg-white/60 border border-white/60 shadow-lg shadow-rose-100 hover:shadow-xl transition-all duration-300 group cursor-default delay-100 backdrop-blur-md">
<div className="tilt-glare"></div>
<div className="tilt-content p-8 h-full flex flex-col">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-rose-100 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 group-hover:text-rose-500 transition-all duration-300">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-stone-800 mb-3">Mentale Klarheit</h3>
<p className="text-stone-600 text-sm leading-relaxed flex-grow font-medium">Verabschiede dich vom Gedankenkarussell und finde Fokus für das, was wirklich zählt.</p>
</div>
</div>
<div className="tilt-card rounded-2xl bg-white/60 border border-white/60 shadow-lg shadow-rose-100 hover:shadow-xl transition-all duration-300 group cursor-default delay-200 backdrop-blur-md">
<div className="tilt-glare"></div>
<div className="tilt-content p-8 h-full flex flex-col">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-rose-100 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 group-hover:text-rose-500 transition-all duration-300">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-stone-800 mb-3">Starkes Selbstbild</h3>
<p className="text-stone-600 text-sm leading-relaxed flex-grow font-medium">Entwickle eine liebevolle und wertschätzende Beziehung zu deinem Körper und dir selbst.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-rose-50/60 relative z-10 overflow-hidden border-t border-white/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative reveal-left delay-200">
<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-rose-200/50 relative group border-4 border-white/50">
<img alt="Training Community" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-90" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent mix-blend-overlay"></div>
<div className="absolute bottom-6 left-6 text-white transform transition-transform duration-500 group-hover:translate-x-2 drop-shadow-md">
<p className="serif text-2xl font-medium">"Gemeinsam sind wir stärker."</p>
</div>
</div>
<div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-rose-100 animate-[bounce_4s_infinite]">
<div className="flex items-center gap-3">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20"></span>
<span className="font-bold text-stone-800">Premium Inhalt</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8 reveal-right">
<div>
<span className="text-rose-500 font-bold tracking-wide text-sm uppercase">Dein Paket</span>
<h2 className="text-3xl lg:text-4xl font-medium text-stone-800 mt-3 tracking-tight">Deine mentale und körperliche Gesundheit ist unbezahlbar</h2>
</div>
<div className="space-y-6">
<div className="flex gap-4 reveal-right delay-100">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white text-rose-400 shadow-sm flex items-center justify-center">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<h4 className="text-stone-800 font-bold">Tägliche Power-Impulse</h4>
<p className="text-stone-600 text-sm mt-1 font-medium">Kurze, knackige Videos und Aufgaben direkt auf dein Handy. Maximal 15 Minuten pro Tag.</p>
</div>
</div>
<div className="flex gap-4 reveal-right delay-200">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white text-rose-400 shadow-sm flex items-center justify-center">
<span className="iconify" data-icon="lucide:book-open" data-width="16"></span>
</div>
<div>
<h4 className="text-stone-800 font-bold">Exklusives PDF-Workbook</h4>
<p className="text-stone-600 text-sm mt-1 font-medium">Dein Begleiter für Reflexion und Fortschritt. Wunderschön gestaltet zum Ausdrucken.</p>
</div>
</div>
<div className="flex gap-4 reveal-right delay-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white text-rose-400 shadow-sm flex items-center justify-center">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
</div>
<div>
<h4 className="text-stone-800 font-bold">Community &amp; Support</h4>
<p className="text-stone-600 text-sm mt-1 font-medium">Zugang zu unserer geschlossenen Gruppe. Du bist nicht allein auf diesem Weg!</p>
</div>
</div>
</div>
<div className="pt-4 reveal-right delay-400">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-rose-400 hover:bg-rose-500 transition-all shadow-md shadow-rose-200 hover:shadow-lg hover:scale-105 active:scale-95" href="#hero">
                            Ich will das Paket sichern
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal-fx">
<h2 className="text-3xl lg:text-4xl font-medium text-stone-800 tracking-tight">Der Ablauf</h2>
<p className="text-stone-600 font-medium mt-3">So gestalten wir die 30 Tage gemeinsam, alles online über dein Smartphone in einer privaten Gruppe.</p>
</div>
<div className="relative border-l border-rose-200 ml-6 md:ml-12 space-y-12">
<div className="relative pl-8 md:pl-12 reveal-left delay-100">
<span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-rose-400 ring-4 ring-white shadow-md"></span>
<h3 className="text-xl font-bold text-stone-800">Tag 1: Dein Start zu deinem ausgewogenerem Ich</h3>
<p className="text-stone-600 mt-2 text-sm leading-relaxed font-medium">Wir setzen deine Ziele, schaffen Klarheit und bereiten dich mental auf deine Bestform vor. Das Fundament wird gelegt.</p>
</div>
<div className="relative pl-8 md:pl-12 reveal-left delay-200">
<span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-purple-300 ring-4 ring-white shadow-md"></span>
<h3 className="text-xl font-bold text-stone-800">Tag 2 – 29: Schritt-für-Schritt-Transformationen</h3>
<p className="text-stone-600 mt-2 text-sm leading-relaxed font-medium">Tägliche Fokus-Themen: Ernährung, Mindset, Bewegung, Selbstliebe. Jeden Tag eine kleine Challenge, die dich wachsen lässt.</p>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-white border border-stone-100 text-stone-600 font-semibold text-xs rounded shadow-sm">Bewegung</span>
<span className="px-2 py-1 bg-white border border-stone-100 text-stone-600 font-semibold text-xs rounded shadow-sm">Mindset</span>
<span className="px-2 py-1 bg-white border border-stone-100 text-stone-600 font-semibold text-xs rounded shadow-sm">Ernährung</span>
</div>
</div>
<div className="relative pl-8 md:pl-12 reveal-left delay-300">
<span className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-stone-800 ring-4 ring-white shadow-md"></span>
<h3 className="text-xl font-bold text-stone-800">Tag 30: Das Ende, das ein Neustart ist</h3>
<p className="text-stone-600 mt-2 text-sm leading-relaxed font-medium">Nach der Balance ist vor der Balance. Feiere deine Erfolge! Wir machen den Rückblick und erstellen deinen Plan, wie du die Bestform dauerhaft hältst.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/50 relative overflow-hidden reveal-fx z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 text-center">
<p className="text-xs uppercase text-rose-400 tracking-widest mb-2 font-bold">
                    Echte Erfahrungen
                </p>
<h2 className="text-3xl lg:text-4xl serif tracking-tight font-medium text-stone-800">
                    Stimmen starker Frauen
                </h2>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 py-12 min-h-[450px]">

<div className="relative w-full max-w-[340px] md:w-[340px] h-auto md:h-[340px] flex items-center justify-center md:-mr-12 z-10 hover:z-40 transition-all duration-300 md:hover:-translate-y-4 md:rotate-[-6deg]">
<div className="w-full h-full p-1 rounded-2xl bg-gradient-to-br from-white/70 to-white/30 shadow-[0_25px_25px_rgba(0,0,0,0.05)] border border-white/60 backdrop-blur-md">
<div className="h-full rounded-xl bg-white/60 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-rose-50 text-rose-400 mb-4">
<span className="iconify" data-icon="lucide:quote" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-stone-800 font-bold italic">
                                    "Ich hätte nie gedacht, dass 30 Tage so viel bewirken können. Ich fühle mich wie ausgewechselt und habe endlich wieder Energie für meine Kinder."
                                </p>
</div>
<div className="pt-4 border-t border-stone-200/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-xs">S</div>
<div>
<div className="text-xs font-bold text-stone-800">Sandra M.</div>
<div className="text-[10px] text-stone-500 uppercase tracking-wide font-bold">Teilnehmerin</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-yellow-400">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[340px] md:w-[340px] h-auto md:h-[340px] flex items-center justify-center z-20 hover:z-40 transition-all duration-300 md:hover:-translate-y-4">
<div className="w-full h-full p-1 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 shadow-[0_30px_40px_rgba(0,0,0,0.1)] border border-white/70 backdrop-blur-md">
<div className="h-full rounded-xl bg-white/80 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-rose-50 text-rose-400 mb-4">
<span className="iconify" data-icon="lucide:quote" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-stone-800 font-bold italic">
                                    "Der Support in der Gruppe ist magisch. Endlich ein Programm, das nicht nur auf 'Abnehmen' fokussiert ist, sondern auf echte Stärke."
                                </p>
</div>
<div className="pt-4 border-t border-stone-200/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">L</div>
<div>
<div className="text-xs font-bold text-stone-800">Lena K.</div>
<div className="text-[10px] text-stone-500 uppercase tracking-wide font-bold">Teilnehmerin</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-yellow-400">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[340px] md:w-[340px] h-auto md:h-[340px] flex items-center justify-center md:-ml-12 z-10 hover:z-40 transition-all duration-300 md:hover:-translate-y-4 md:rotate-[6deg]">
<div className="w-full h-full p-1 rounded-2xl bg-gradient-to-br from-white/70 to-white/30 shadow-[0_25px_25px_rgba(0,0,0,0.05)] border border-white/60 backdrop-blur-md">
<div className="h-full rounded-xl bg-white/60 p-6 md:p-8 flex flex-col justify-between">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-rose-50 text-rose-400 mb-4">
<span className="iconify" data-icon="lucide:quote" data-width="16"></span>
</div>
<p className="text-sm leading-relaxed text-stone-800 font-bold italic">
                                    "Kurz, effektiv und unglaublich motivierend. Das Workbook liegt immer noch auf meinem Schreibtisch als tägliche Erinnerung."
                                </p>
</div>
<div className="pt-4 border-t border-stone-200/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-xs">M</div>
<div>
<div className="text-xs font-bold text-stone-800">Miriam H.</div>
<div className="text-[10px] text-stone-500 uppercase tracking-wide font-bold">Teilnehmerin</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-yellow-400">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-stone-800 text-center mb-12 tracking-tight reveal-fx">Häufige Fragen</h2>
<div className="space-y-4">
<details className="group bg-white/60 backdrop-blur-sm rounded-xl border border-white reveal-left delay-100 shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-stone-800 list-none">
<span>Ist die Analyse wirklich kostenlos?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-rose-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-stone-600 px-6 pb-6 text-sm leading-relaxed font-medium">
                        Ja, zu 100%. Unser Ziel ist es, dir zu zeigen, wie viel Potenzial in dir steckt. Es gibt keine versteckten Kosten.
                    </div>
</details>
<details className="group bg-white/60 backdrop-blur-sm rounded-xl border border-white reveal-left delay-200 shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-stone-800 list-none">
<span>Was brauche ich für die Teilnahme?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-rose-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-stone-600 px-6 pb-6 text-sm leading-relaxed font-medium">
                        Konkret kann ich dir das nach der Analyse sagen, da in Balance kommen ein individuelles Anliegen ist.
                    </div>
</details>
<details className="group bg-white/60 backdrop-blur-sm rounded-xl border border-white reveal-left delay-300 shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-stone-800 list-none">
<span>Wie läuft das Programm ab?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-rose-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-stone-600 px-6 pb-6 text-sm leading-relaxed font-medium">
                        Wir sind in einer privaten, exklusiven Chatgruppe für 30 Tage. Dort gibt es Impulse und Austausch zum Thema: In Balance kommen und bleiben.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-rose-100 text-stone-600 py-12 border-t border-rose-200 reveal-fx relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-stone-800 serif text-xl tracking-wide flex items-center gap-2">
<span className="iconify text-rose-400" data-icon="lucide:sparkles" data-width="20"></span>
                REBALANCE
            </div>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:text-rose-500 transition-colors" href="#">Impressum</a>
<a className="hover:text-rose-500 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-rose-500 transition-colors" href="#">Kontakt</a>
</div>
<div className="text-xs text-stone-500 font-medium">
                © 2023 reBalance Programm. Alle Rechte vorbehalten.
            </div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-stone-100 z-50 lg:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] reveal-pop delay-500">
<a className="block w-full py-3 bg-rose-400 text-white text-center font-bold rounded-lg shadow-lg" href="#hero">
            Jetzt kostenlos teilnehmen
        </a>
</div>



    </>
  );
}
