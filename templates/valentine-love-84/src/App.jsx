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



        // Particle Generation
        const particleContainer = document.getElementById('particles');
        for (let i = 0; i < 20; i++) {
            let p = document.createElement('div');
            p.className = 'particle';
            let size = Math.random() * 20 + 5;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}vw`;
            p.style.animationDuration = `${Math.random() * 10 + 10}s`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            particleContainer.appendChild(p);
        }

        // Scene 1 Logic: The Button Runaway
        const noBtn = document.getElementById('btn-no');
        const phrases = ["Hmm...", "Wirklich?", "Überleg nochmal 😉", "Na komm...", "Bitte?"];
        let phraseIndex = 0;

        function moveButton() {
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 100);
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${Math.max(20, Math.min(x, window.innerWidth - 120))}px`;
            noBtn.style.top = `${Math.max(20, Math.min(y, window.innerHeight - 60))}px`;
            
            // Change Text
            noBtn.innerText = phrases[phraseIndex];
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        // Start Journey
        function startStory() {
            const introScene = document.getElementById('intro-scene');
            const mainStory = document.getElementById('main-story');
            
            // Fade out intro
            introScene.style.opacity = '0';
            introScene.style.transform = 'translateY(-20px)';
            introScene.style.transition = 'all 1s ease';

            setTimeout(() => {
                introScene.style.display = 'none';
                mainStory.classList.add('visible-story');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                observer.observe(document.querySelector('h2')); // Trigger observer
            }, 800);
        }

        // Accordion Logic
        function toggleAccordion(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('iconify-icon:last-child');
            
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                icon.style.transform = 'rotate(0deg)';
                btn.parentElement.classList.remove('border-rose-200');
            } else {
                // Close others (optional - strictly following simple accordion)
                document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('open'));
                document.querySelectorAll('iconify-icon[icon="solar:alt-arrow-down-linear"]').forEach(el => el.style.transform = 'rotate(0deg)');
                
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
                btn.parentElement.classList.add('border-rose-200');
            }
        }

        // Letter Logic
        function toggleLetter(card) {
            if (!card.classList.contains('open')) {
                card.classList.add('open');
                // Optional: Create mini particle explosion
                createHeartBurst(card);
            }
        }

        function createHeartBurst(element) {
            // Simple visual effect placeholder
            // In a full implementation, this would add absolute div hearts flying out
        }

        // Scroll Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
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
      

<div id="particles"></div>

<section className="h-screen w-full flex flex-col items-center justify-center relative z-10 px-6" id="intro-scene">
<div className="text-center space-y-8 max-w-2xl mx-auto">
<h1 className="text-4xl md:text-6xl font-serif tracking-tight text-rose-950 fade-in-up">
                Willst du mein Valentin sein? <span className="text-rose-500 inline-block align-middle text-3xl md:text-5xl">💘</span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 fade-in-up delay-300 relative h-32 md:h-auto w-full">

<button className="group relative px-8 py-3 bg-rose-950 text-rose-50 rounded-full text-sm font-medium tracking-wide hover:bg-rose-900 transition-all duration-300 shadow-lg hover:shadow-rose-900/20 active:scale-95" onclick="startStory()">
<span className="flex items-center gap-2">
                        Ja <iconify-icon className="text-rose-200" icon="solar:heart-bold"></iconify-icon>
</span>
</button>

<button className="px-8 py-3 bg-white border border-rose-100 text-rose-900 rounded-full text-sm font-medium tracking-wide hover:bg-rose-50 transition-all shadow-sm" id="btn-no" onclick="moveButton()" onmouseover="moveButton()">
                    Nein 😶
                </button>
</div>
</div>
<div className="absolute bottom-8 text-rose-300 text-xs font-light fade-in-up delay-700">
            Bitte sag Ja...
        </div>
</section>

<div className="w-full relative z-10" id="main-story">

<section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center">
<div className="max-w-xl mx-auto space-y-8">
<h2 className="text-sm font-medium tracking-widest text-rose-400 uppercase mb-4 opacity-0 reveal-on-scroll">
                    Dann ist das hier für dich
                </h2>
<p className="text-2xl md:text-4xl font-serif leading-tight text-rose-950 opacity-0 reveal-on-scroll delay-100">
                    Es gibt Menschen, die verändern nichts –
                </p>
<p className="text-2xl md:text-4xl font-serif leading-tight text-rose-950 opacity-0 reveal-on-scroll delay-300">
                    und es gibt Menschen,<br/>die alles heller machen.
                </p>
<div className="w-px h-16 bg-rose-200 mx-auto mt-12 opacity-0 reveal-on-scroll delay-500"></div>
</div>
</section>

<section className="py-24 px-6 bg-white/50 backdrop-blur-sm border-y border-rose-50/50">
<div className="max-w-2xl mx-auto">
<h3 className="text-2xl md:text-3xl font-serif text-center mb-16 text-rose-950 tracking-tight opacity-0 reveal-on-scroll">
                    Warum du so besonders bist
                </h3>
<div className="space-y-4">

<div className="group border border-rose-100 bg-white rounded-xl p-1 overflow-hidden transition-all hover:border-rose-200 opacity-0 reveal-on-scroll delay-100">
<button className="w-full flex items-center justify-between p-4 text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="flex items-center gap-3 text-base md:text-lg font-medium text-rose-900">
<iconify-icon className="text-rose-400 text-xl" icon="solar:smile-circle-linear"></iconify-icon>
                                Dein Lächeln
                            </span>
<iconify-icon className="text-rose-300 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-4 pb-4 pl-12">
<p className="text-stone-600 font-light leading-relaxed">
                                    Es hat diese seltene Art, alles leichter wirken zu lassen. Wenn du lachst, verschwindet der graue Alltag für einen Moment.
                                </p>
</div>
</div>
</div>

<div className="group border border-rose-100 bg-white rounded-xl p-1 overflow-hidden transition-all hover:border-rose-200 opacity-0 reveal-on-scroll delay-200">
<button className="w-full flex items-center justify-between p-4 text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="flex items-center gap-3 text-base md:text-lg font-medium text-rose-900">
<iconify-icon className="text-rose-400 text-xl" icon="solar:heart-shine-linear"></iconify-icon>
                                Deine Art
                            </span>
<iconify-icon className="text-rose-300 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-4 pb-4 pl-12">
<p className="text-stone-600 font-light leading-relaxed">
                                    So ehrlich, so warm und so einzigartig, dass man sie nicht übersehen kann. Du bist authentisch in einer Welt voller Kopien.
                                </p>
</div>
</div>
</div>

<div className="group border border-rose-100 bg-white rounded-xl p-1 overflow-hidden transition-all hover:border-rose-200 opacity-0 reveal-on-scroll delay-300">
<button className="w-full flex items-center justify-between p-4 text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="flex items-center gap-3 text-base md:text-lg font-medium text-rose-900">
<iconify-icon className="text-rose-400 text-xl" icon="solar:stars-linear"></iconify-icon>
                                Wie du bist
                            </span>
<iconify-icon className="text-rose-300 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-4 pb-4 pl-12">
<p className="text-stone-600 font-light leading-relaxed">
                                    Unkompliziert und gleichzeitig besonders. Genau so, wie man es sich wünscht.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 min-h-screen flex flex-col justify-center">
<div className="max-w-4xl mx-auto w-full">
<div className="text-center mb-16 space-y-2 opacity-0 reveal-on-scroll">
<iconify-icon className="text-3xl text-rose-300 mb-4" icon="solar:letter-linear"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-serif text-rose-950 tracking-tight">
                        Sechs kleine Briefe für dich
                    </h3>
<p className="text-stone-500 font-light text-sm">Tippe, um sie zu öffnen</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="letter-card bg-white border border-stone-100 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md opacity-0 reveal-on-scroll" onclick="toggleLetter(this)">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">01</span>
<iconify-icon className="letter-icon text-rose-300 text-xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-rose-900">Mein Herz</h4>
<div className="letter-content">
<p className="text-sm text-stone-600 font-light leading-relaxed pt-2 border-t border-rose-100 mt-2">
                                „Ich schenke dir mein Herz – nicht perfekt, aber ehrlich. Nicht makellos, aber ganz.“
                            </p>
</div>
</div>

<div className="letter-card bg-white border border-stone-100 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md opacity-0 reveal-on-scroll delay-100" onclick="toggleLetter(this)">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">02</span>
<iconify-icon className="letter-icon text-rose-300 text-xl" icon="solar:rose-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-rose-900">Ein Strauß Rosen</h4>
<div className="letter-content">
<p className="text-sm text-stone-600 font-light leading-relaxed pt-2 border-t border-rose-100 mt-2">
                                „Ein Strauß Rosen 🌹 als Zeichen dafür, wie besonders du bist. Jede Blüte ein Gedanke an dich.“
                            </p>
</div>
</div>

<div className="letter-card bg-white border border-stone-100 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md opacity-0 reveal-on-scroll delay-200" onclick="toggleLetter(this)">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">03</span>
<iconify-icon className="letter-icon text-rose-300 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-rose-900">Zeit</h4>
<div className="letter-content">
<p className="text-sm text-stone-600 font-light leading-relaxed pt-2 border-t border-rose-100 mt-2">
                                „Zeit ist das Wertvollste, was man geben kann. Und ich möchte sie mit dir teilen.“
                            </p>
</div>
</div>

<div className="letter-card bg-white border border-stone-100 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md opacity-0 reveal-on-scroll" onclick="toggleLetter(this)">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">04</span>
<iconify-icon className="letter-icon text-rose-300 text-xl" icon="solar:sofa-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-rose-900">Nähe</h4>
<div className="letter-content">
<p className="text-sm text-stone-600 font-light leading-relaxed pt-2 border-t border-rose-100 mt-2">
                                „Ein Moment der Ruhe. Ein Gefühl von Sicherheit. Ein Ort, an dem man einfach sein darf.“
                            </p>
</div>
</div>

<div className="letter-card bg-white border border-stone-100 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md opacity-0 reveal-on-scroll delay-100" onclick="toggleLetter(this)">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">05</span>
<iconify-icon className="letter-icon text-rose-300 text-xl" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-rose-900">Ein Lächeln</h4>
<div className="letter-content">
<p className="text-sm text-stone-600 font-light leading-relaxed pt-2 border-t border-rose-100 mt-2">
                                „Für jedes Mal, wenn du lächelst, gibt es hier eines zurück.“
                            </p>
</div>
</div>

<div className="letter-card bg-white border border-stone-100 p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-md opacity-0 reveal-on-scroll delay-200" onclick="toggleLetter(this)">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-stone-400">06</span>
<iconify-icon className="letter-icon text-rose-300 text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-rose-900">Ein Wunsch</h4>
<div className="letter-content">
<p className="text-sm text-stone-600 font-light leading-relaxed pt-2 border-t border-rose-100 mt-2">
                                „Ein Wunsch frei – und ich hoffe, er führt immer wieder zueinander.“
                            </p>
</div>
</div>
</div>
</div>
</section>

<footer className="h-[50vh] flex flex-col items-center justify-center text-center opacity-0 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-serif text-rose-950 tracking-tight mb-6">
                Happy Valentinstag.
            </h2>
<iconify-icon className="text-rose-500 text-2xl animate-pulse" icon="solar:heart-bold"></iconify-icon>
<p className="mt-8 text-xs text-rose-300 font-light tracking-widest uppercase">
                Für Dich erstellt
            </p>
</footer>
</div>


    </>
  );
}
