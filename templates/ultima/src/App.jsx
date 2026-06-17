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



          (function() {
      const testimonials = document.querySelectorAll('[data-testimonial-index]');
      const quoteEl = document.getElementById('testimonial-quote');
      const authorEl = document.getElementById('testimonial-author');

      testimonials.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
          // Remove active state from all
          testimonials.forEach(function(t) {
            const isActive = t.getAttribute('data-active') === 'true';
            t.removeAttribute('data-active');
            
            // Remove active classes (including the orange ring) and add inactive classes
            t.classList.remove('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-[#ECA72C]', 'shadow-lg');
            t.classList.add('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
          });

          // Set clicked as active
          thumbnail.setAttribute('data-active', 'true');
          thumbnail.classList.remove('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
          // Add active classes including orange ring
          thumbnail.classList.add('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-[#ECA72C]', 'shadow-lg');

          // Fade out
          quoteEl.style.opacity = '0';
          authorEl.style.opacity = '0';

          setTimeout(function() {
            // Update content
            var quote = thumbnail.getAttribute('data-testimonial-quote');
            var name = thumbnail.getAttribute('data-testimonial-name');
            var role = thumbnail.getAttribute('data-testimonial-role');

            quoteEl.querySelector('p').innerHTML = quote;
            authorEl.querySelector('p').innerHTML = name + ' <span class="text-slate-400 font-normal font-geist">' + role + '</span>';

            // Fade in
            quoteEl.style.opacity = '1';
            authorEl.style.opacity = '1';
          }, 250);
        });
      });
    })();
        


    (function() {
      const testimonials = document.querySelectorAll('[data-testimonial-index]');
      const quoteEl = document.getElementById('testimonial-quote');
      const authorEl = document.getElementById('testimonial-author');

      testimonials.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
          // Remove active state from all
          testimonials.forEach(function(t) {
            t.removeAttribute('data-active');
            t.classList.remove('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-[#ECA72C]', 'shadow-lg');
            t.classList.add('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
          });

          // Set clicked as active
          thumbnail.setAttribute('data-active', 'true');
          thumbnail.classList.remove('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
          thumbnail.classList.add('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-[#ECA72C]', 'shadow-lg');

          // Fade out
          quoteEl.style.opacity = '0';
          authorEl.style.opacity = '0';

          setTimeout(function() {
            // Update content
            var quote = thumbnail.getAttribute('data-testimonial-quote');
            var name = thumbnail.getAttribute('data-testimonial-name');
            var role = thumbnail.getAttribute('data-testimonial-role');

            quoteEl.querySelector('p').innerHTML = quote;
            authorEl.querySelector('p').innerHTML = name + ' <span class="text-slate-400 font-normal font-geist">' + role + '</span>';

            // Fade in
            quoteEl.style.opacity = '1';
            authorEl.style.opacity = '1';
          }, 250);
        });
      });
    })();
  


        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
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

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.youtube.com/watch?v=SadzfrxVuF0"></video></div>

<nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
</nav>

<section className="min-h-[700px] flex md:pb-32 overflow-hidden h-screen pb-24 relative items-end justify-center">

<div className="absolute inset-0 z-0">

<img alt="Muay Thai Training Sunset" className="w-full h-full object-cover object-top animate-subtle-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e78516dd-f1ec-4681-adcb-37d803cb92b8_3840w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80 md:via-transparent md:to-transparent"></div>

<div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/4761767/4761767-uhd_2560_1440_25fps.mp4"></video>

<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
<div className="absolute inset-0 overflow-hidden">
<iframe allow="autoplay; encrypted-media" className="absolute top-1/2 left-1/2 w-[150%] h-[150%] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover opacity-80 mix-blend-luminosity" frameborder="0" src="https://www.youtube.com/embed/SadzfrxVuF0?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=SadzfrxVuF0&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;disablekb=1&amp;modestbranding=1"></iframe>
<div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0">
<style>
        /* Force hide the residual background image */
        img[src*="e78516dd-f1ec-4681-adcb-37d803cb92b8"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }
    </style>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-center items-center">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover -z-20" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/4761767/4761767-uhd_2560_1440_25fps.mp4"></video>

<div className="bg-black/40 -z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="w-full max-w-[1200px] px-6 md:text-left text-center relative mx-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/20 backdrop-blur-md mb-8 reveal-on-scroll is-visible">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#ECA72C]"></span>
<span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90">Immersion Thaïlande</span>
</div>
<div className="grid md:grid-cols-12 gap-x-12 gap-y-12 items-end">
<div className="md:col-span-8">
<h1 className="md:text-8xl lg:text-[7rem] leading-[0.9] reveal-on-scroll delay-100 is-visible text-6xl font-semibold text-white tracking-tighter font-heading mb-4 drop-shadow-2xl">
                    Tu repars 
                    <span className="text-accent">Différente.</span>
</h1>
<p className="font-heading text-2xl md:text-4xl text-white/90 font-medium tracking-tight mb-8 reveal-on-scroll delay-200 is-visible">
<span className="text-white/40 font-light mr-2">—</span> Pas juste bronzée.
                </p>
<p className="md:text-lg leading-relaxed reveal-on-scroll delay-300 md:pr-12 is-visible text-base font-semibold text-gray-300 max-w-xl mb-10 pr-12">14 jours à 1 mois pour transformer votre corps et votre mental dans une immersion unique en Terre d'Isaan. Sortez de la stagnation, retrouvez la forme et la combativité en découvrant le vrai Muay Thai et la Thaïlande.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 reveal-on-scroll delay-300 is-visible">
<a className="uppercase hover:bg-white hover:text-[#ECA72C] transition-colors flex items-center justify-center gap-2 hover:shadow-none sm:w-auto text-sm font-medium text-black tracking-widest bg-[#ECA72C] w-full rounded-sm pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(236,167,44,0.3)]" href="/#immersion">
                        Découvrir l'immersion
                    </a>
<a className="sm:w-auto hover:border-white hover:text-white transition-colors uppercase flex items-center justify-center gap-2 text-sm font-medium text-gray-300 tracking-widest bg-black/20 w-full border-white/20 border rounded-sm pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="/#contact">choisir mes dates</a>
</div>
</div>

<div className="hidden md:flex md:col-span-4 flex-col gap-6 justify-end pb-2 opacity-80 reveal-on-scroll delay-500 is-visible">
<div className="glass-panel border-l-accent rounded-sm border-l-2 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-accent text-xl" icon="solar:sun-fog-linear"></iconify-icon>
<span className="uppercase text-lg font-medium font-heading">IMMERSION TOTALE</span>
</div>
<p className="leading-relaxed text-xs font-light text-gray-400">Cours privés avec d'anciens champions du monde + coaching personnalisé avec moi. Je serai ton coach, ton guide, ton traducteur. Tu n'as qu'à te concentrer sur ta transformation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#0a0a0a] border-white/5 pt-24 pb-24">
<div className="max-w-[1000px] mx-auto px-6">
<div className="flex flex-col reveal-on-scroll is-visible w-full max-w-[1200px] mr-auto ml-auto gap-x-16 gap-y-16" id="immersion">

<div className="text-center max-w-3xl mx-auto space-y-8">
<div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto opacity-50"></div>
<h2 className="md:text-5xl leading-none text-4xl font-medium text-white tracking-tight font-heading">
            Ce que beaucoup désirent. 
            <span className="text-gray-500">Mais que peu osent réellement s'offrir.</span>
</h2>
<div className="space-y-6">
<p className="text-gray-400 font-light leading-relaxed text-base">
                Soyez honnête : avez-vous laissé les années glisser ? Vous avez essayé des régimes, des sports, des méthodes. Vous vous êtes investie. Et pourtant, les résultats n'ont jamais été à la hauteur de vos efforts. Si vous avez tant donné pour si peu de changement durable, ce n'est pas un manque de volonté. C'est l'approche qu'il faut changer.
            </p>
<p className="text-white font-medium text-lg tracking-tight pt-2">
                Vous vous reconnaissez dans l'une de ces situations ?
            </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 md:gap-12">

<div className="flex flex-col text-center md:text-left space-y-4 group">
<h3 className="md:text-2xl leading-tight min-h-[3rem] text-xl font-medium text-white tracking-tight">Vous devez faire du sport</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed flex-grow">
                Vous le sentez au quotidien. Pas par envie de « faire du sport », mais parce qu'un esprit clair ne peut plus vivre dans un corps négligé. Investir dans votre santé, c'est investir sur le long terme.
            </p>
<p className="text-gray-500 italic text-sm pt-4 border-t border-white/5 mt-4">
                Si rien ne change, c'est votre futur corps qui en paiera le prix.
            </p>
</div>

<div className="flex flex-col text-center md:text-left space-y-4 group">
<h3 className="md:text-2xl leading-tight min-h-[3rem] text-xl font-medium text-white tracking-tight" style={{}}>Vous avez oublié votre puissance</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed flex-grow">
                Depuis combien de temps vous êtes-vous mise en retrait ? Par peur du conflit, du regard des autres, ou de déranger. À force d'éviter, vous avez appris à vous taire.
            </p>
<p className="text-gray-500 italic text-sm pt-4 border-t border-white/5 mt-4">
                Il est temps de réveiller une affirmation calme, solide, assumée.
            </p>
</div>

<div className="flex flex-col md:text-left group text-center relative space-y-0">
<div className="absolute inset-0 bg-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
<h3 className="md:text-2xl leading-tight min-h-[3rem] text-xl font-medium text-white tracking-tight">
                Votre feu intérieur s'éteint
            </h3>
<p className="leading-relaxed flex-grow text-sm font-light text-gray-400">
                Quand avez-vous ressenti, pour la dernière fois, cette énergie vivante en vous ? Cette force intérieure qui pousse à avancer, à décider, à oser.
            </p>
<p className="text-accent italic text-sm pt-4 border-t border-white/5 mt-4 font-medium">
                Si aujourd'hui vous vous sentez spectatrice de votre propre vie, alors quelque chose en vous demande à renaître.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black pt-24 pb-24 relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-heading font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
            ISAAN
        </div>
<div className="max-w-[1200px] z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[150%] -z-10 pointer-events-none select-none overflow-hidden">
<img alt="Thailand Landscape" className="w-full h-full object-cover opacity-[0.12] mix-blend-luminosity" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll is-visible">
<iconify-icon className="text-accent mb-6" icon="solar:map-point-linear" width="40"></iconify-icon>
<h2 className="font-heading text-4xl md:text-5xl font-medium mb-6 uppercase tracking-tight">La Thaïlande est un terrain de transformation unique</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed">
                    Ici, tout est réuni pour vous permettre de vraiment changer.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 hover:border-accent/50 transition-colors duration-500 group reveal-on-scroll is-visible">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-accent transition-colors" icon="solar:globus-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-heading mb-3">Apprendre des meilleurs.</h3>
<p className="leading-relaxed text-sm text-gray-500">Ici, tes coachs sont d'anciens champions du monde. Pas des vidéos YouTube — des légendes vivantes qui corrigent ta garde, ton souffle, ta posture.</p>
</div>

<div className="glass-panel p-8 hover:border-accent/50 transition-colors duration-500 group reveal-on-scroll delay-100 is-visible">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-accent transition-colors" icon="solar:sun-fog-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-heading mb-3">Manger pour performer.</h3>
<p className="leading-relaxed text-sm text-gray-500">Un chef partenaire, 100% bio, cuisine chaque repas selon tes objectifs. Tu choisis, on calcule tout. Tu manges, tu t'entraînes, tu répares.</p>
</div>

<div className="glass-panel hover:border-accent/50 transition-colors duration-500 group reveal-on-scroll delay-200 is-visible pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-accent transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-heading mb-3">Récupérer vraiment.</h3>
<p className="leading-relaxed text-sm text-gray-500">Yoga, Fly Yoga, bains de glace, massages thaï. Ton corps encaisse, ton corps récupère. Ici, les deux vont ensemble.</p>
</div>

<div className="glass-panel p-8 hover:border-accent/50 transition-colors duration-500 group reveal-on-scroll delay-300 is-visible">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-accent transition-colors" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white font-heading mb-3">Ne jamais être seule.</h3>
<p className="leading-relaxed text-sm text-gray-500">Je suis là. Coach, guide, référent — du réveil au coucher. Tu ne gères rien. Tu te transformes.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black border-white/5 border-t pt-24 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none"></div>
<section className="sm:p-8 bg-[#0a0a0a] border-white/10 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6" style={{position: 'relative', overflow: 'hidden'}}>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent">
</div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent">
</div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent">
</div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent">
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="uppercase text-xs font-bold text-[#ECA72C] tracking-widest font-heading">SANCTUAIRE HOLISTIQUE</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] font-medium text-white tracking-tighter font-heading mt-2">L’environnement fait tout.</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-gray-500 bg-[#0a0a0a] px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4 text-[#ECA72C]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
<span className="text-sm font-normal font-sans">Focus</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4 text-[#ECA72C]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
<span className="text-sm font-normal font-sans">Intensité</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4 text-[#ECA72C]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
<span className="text-sm font-normal font-sans">Récupération</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm font-medium text-white tracking-tight font-sans">Reconstruisez vos fondations</p>
<p className="text-sm text-gray-400 font-sans mt-1">Un sanctuaire conçu sur mesure pour le focus, l’intensité et la récupération. Explorez l’espace où vous serez reconstruit.</p>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block hidden">
</div>
<p className="leading-relaxed sm:text-right sm:pl-8 text-base text-gray-300 font-sans">Notre espace est conçu pour éliminer le bruit et amplifier votre force intérieure. Un repos dépouillé de distractions, riche en possibilités.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<article className="relative overflow-hidden h-[200px] bg-white/5 border border-white/10 rounded-2xl group hover:border-[#ECA72C]/50 transition-colors">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&amp;fit=crop&amp;w=800&amp;q=80)] bg-cover hover:scale-105 transition-transform duration-500 opacity-60">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ECA72C] text-black border border-[#ECA72C]">
<svg className="lucide lucide-swords h-3.5 w-3.5" data-lucide="swords" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" x2="19" y1="19" y2="13"></line><line x1="16" x2="20" y1="16" y2="20"></line><line x1="19" x2="21" y1="21" y2="19"></line><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline><line x1="5" x2="9" y1="14" y2="18"></line><line x1="7" x2="4" y1="20" y2="17"></line><line x1="3" x2="5" y1="19" y2="21"></line></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-gray-300 font-normal border border-white/10 font-sans">Combat</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-heading">Muay Thaï / Boxe</p>
<p className="leading-snug line-clamp-2 text-xs text-gray-400 mt-1">Discipline par le combat — précision, acuité, humilité.</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-white/5 border border-white/10 rounded-2xl group hover:border-[#ECA72C]/50 transition-colors">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&amp;fit=crop&amp;w=800&amp;q=80)] bg-cover hover:scale-105 transition-transform duration-500 opacity-60">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ECA72C] text-black border border-[#ECA72C]">
<svg className="lucide lucide-wind h-3.5 w-3.5" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-gray-300 font-normal border border-white/10 font-sans">Balance</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-heading">Yoga &amp; Respiration</p>
<p className="leading-snug line-clamp-2 text-xs text-gray-400 mt-1">Calme entre les tempêtes. Revenir à la présence.</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-white/5 border border-white/10 rounded-2xl group hover:border-[#ECA72C]/50 transition-colors">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&amp;fit=crop&amp;w=800&amp;q=80)] bg-cover hover:scale-105 transition-transform duration-500 opacity-60">
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ECA72C] text-black border border-[#ECA72C]">
<svg className="lucide lucide-snowflake h-3.5 w-3.5" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="2" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="22"></line><path d="m20 20-5-5"></path><path d="m20 4-5 5"></path><path d="m4 20 5-5"></path><path d="m4 4 5 5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-gray-300 font-normal border border-white/10 font-sans">Recovery</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-heading">Bain de glace</p>
<p className="leading-snug text-xs text-gray-400 mt-1">Le froid pour la détermination. Réinitialiser le système nerveux.</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-white/5 border border-white/10 rounded-2xl group hover:border-[#ECA72C]/50 transition-colors">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1505693416388-b034680c5006?auto=format&amp;fit=crop&amp;w=800&amp;q=80)] bg-cover hover:scale-105 transition-transform duration-500 opacity-60">
</div>
<div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ECA72C] text-black border border-[#ECA72C]">
<svg className="lucide lucide-bed h-3.5 w-3.5" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[11px] text-gray-300 font-normal border border-white/10 font-sans">Rest</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-lg font-medium text-white tracking-tight font-heading">Séjour Essentiel</p>
<p className="leading-snug text-xs text-gray-400 mt-1">Un repos sans distractions, où tout est pensé pour vous.</p>
</div>
</article>
</div>
</div>
</section>

<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll is-visible">
</div>

<div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-16">

<div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-accent/40 transition-all duration-300 reveal-on-scroll is-visible">
<svg className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg>
<h3 className="uppercase text-sm font-semibold text-white tracking-wider font-heading mb-2">Entraînement</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed">Pour repousser vos limites.</p>
</div>

<div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-accent/40 transition-all duration-300 reveal-on-scroll delay-100 is-visible">
<svg className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path><path d="M18 8a4 4 0 0 1-4-4"></path><path d="M14 8a4 4 0 0 1-4-4"></path><path d="M10 8a4 4 0 0 1-4-4"></path></svg>
<h3 className="uppercase text-sm font-semibold text-white tracking-wider font-heading mb-2">Nutrition</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed">Pour nourrir votre clarté.</p>
</div>

<div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-accent/40 transition-all duration-300 reveal-on-scroll delay-200 is-visible">
<svg className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 4v16"></path><path className="" d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
<h3 className="uppercase text-sm font-semibold text-white tracking-wider font-heading mb-2">Récupération</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed">Pour restaurer votre tranchant.</p>
</div>

<div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-accent/40 transition-all duration-300 reveal-on-scroll delay-300 is-visible">
<svg className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="6"></rect><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><path d="M2 14h20"></path></svg>
<h3 className="uppercase text-sm font-semibold text-white tracking-wider font-heading mb-2">Coaching Privé</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed">Pour un suivi taillé sur mesure.</p>
</div>

<div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-accent/40 transition-all duration-300 reveal-on-scroll delay-400 is-visible">
<svg className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
<h3 className="uppercase text-sm font-semibold text-white tracking-wider font-heading mb-2">Transferts</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed">Pour un voyage sans friction.</p>
</div>

<div className="glass-panel p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-accent/40 transition-all duration-300 reveal-on-scroll delay-500 is-visible">
<svg className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300 w-8 h-8" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<h3 className="uppercase text-sm font-semibold text-white tracking-wider font-heading mb-2">Excursions</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed">Pour goûter à la vraie liberté.</p>
</div>
</div>

<div className="text-center space-y-4 reveal-on-scroll is-visible">
<p className="text-white text-lg md:text-xl font-medium tracking-tight">Vous arrivez avec une intention — nous fournissons l'environnement pour changer.</p>
<p className="text-gray-500 italic text-sm font-light">"Ici, l'entraînement est l'outil. Le cadre est l'avantage."</p>
</div>
</section>

<section className="bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24" id="programme">
<div className="max-w-[1000px] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal-on-scroll mb-16 gap-x-6 gap-y-6 justify-between is-visible">
<div className="">
<h2 className="font-heading text-3xl font-medium uppercase tracking-tight mb-2">Votre Journée Type</h2>
<p className="text-gray-500 text-sm">Tout est modulable selon vos envies et votre niveau.</p>
</div>
<div className="h-px w-full md:w-32 bg-white/10 mb-2"></div>
</div>
<div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-12 md:space-y-0">

<div className="relative md:pl-12 md:grid md:grid-cols-5 md:gap-12 group reveal-on-scroll is-visible">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-accent group-hover:border-accent transition-colors"></div>
<div className="md:col-span-1 pl-6 md:pl-0 pt-1 md:pt-0">
<span className="text-accent text-xs font-bold uppercase tracking-widest">Le Matin</span>
</div>
<div className="md:col-span-4 pl-6 md:pl-0">
<h3 className="text-white text-lg font-medium mb-2">Réveil &amp; Nature</h3>
<p className="text-gray-500 font-light">Profitez du calme des jardins et d'un petit-déjeuner sain au son des oiseaux.</p>
</div>
</div>

<div className="relative md:pl-12 md:grid md:grid-cols-5 md:gap-12 group reveal-on-scroll delay-100 mt-8 md:mt-12 is-visible">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-accent group-hover:border-accent transition-colors"></div>
<div className="md:col-span-1 pl-6 md:pl-0 pt-1 md:pt-0">
<span className="text-accent text-xs font-bold uppercase tracking-widest">Matinée</span>
</div>
<div className="md:col-span-4 pl-6 md:pl-0">
<h3 className="text-lg font-medium text-white mb-2">Training ou Récupération</h3>
<p className="font-light text-gray-500">Selon le jour : session Muay Thai avec les champions, coaching privé avec moi, ou yoga pour récupérer. Tout est planifié pour toi.</p>
</div>
</div>

<div className="relative md:pl-12 md:grid md:grid-cols-5 md:gap-12 group reveal-on-scroll delay-200 mt-8 md:mt-12 is-visible">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-accent group-hover:border-accent transition-colors"></div>
<div className="md:col-span-1 pl-6 md:pl-0 pt-1 md:pt-0">
<span className="text-accent text-xs font-bold uppercase tracking-widest">Midi</span>
</div>
<div className="md:col-span-4 pl-6 md:pl-0">
<h3 className="text-white text-lg font-medium mb-2">Pause &amp; Récupération</h3>
<p className="text-gray-500 font-light">Repas savoureux suivi d'un temps libre indispensable (sieste, lecture, piscine).</p>
</div>
</div>

<div className="relative md:pl-12 md:grid md:grid-cols-5 md:gap-12 group reveal-on-scroll delay-300 mt-8 md:mt-12 is-visible">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-accent group-hover:border-accent transition-colors"></div>
<div className="md:col-span-1 pl-6 md:pl-0 pt-1 md:pt-0">
<span className="text-accent text-xs font-bold uppercase tracking-widest">Après-midi</span>
</div>
<div className="md:col-span-4 pl-6 md:pl-0">
<h3 className="text-white text-lg font-medium mb-2">Liberté ou Intensité</h3>
<p className="font-light text-gray-500" style={{}}>Choisissez selon l'envie : massage, visite touristique ou 2ème entraînement pour les motivés.</p>
</div>
</div>

<div className="relative md:pl-12 md:grid md:grid-cols-5 md:gap-12 group reveal-on-scroll delay-400 mt-8 md:mt-12 is-visible">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-accent group-hover:border-accent transition-colors"></div>
<div className="md:col-span-1 pl-6 md:pl-0 pt-1 md:pt-0">
<span className="text-accent text-xs font-bold uppercase tracking-widest">Soirée</span>
</div>
<div className="md:col-span-4 pl-6 md:pl-0">
<h3 className="text-white text-lg font-medium mb-2">Dîner &amp; Vie Locale</h3>
<p className="text-gray-500 font-light">Dîner, échanges et détente dans l'un des marchés ou un resto en centre ville.</p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 lg:pt-12 lg:pb-12 z-10 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative" id="features">
<div className="overflow-hidden sm:p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ECA72C]/10 blur-3xl"></div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 animate">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-[#ECA72C]">
<span className="font-geist">TÉMOIGNAGES</span>
<span className="font-geist">(02)</span>
</div>
<div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>
<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:flex-row sm:items-end sm:justify-between mb-0 gap-x-0 gap-y-0 animate">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white text-left mt-0 font-heading font-light tracking-tighter">
            Ce qu'ils en disent</h2>
</div>
<p className="sm:text-base text-sm text-slate-300 text-left max-w-[42ch] font-geist">Retours authentiques de participants qui ont transformé leur corps et leur esprit avec nous.</p>
</div>
</div>

<section className="sm:px-6 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 z-10 max-w-7xl mr-auto ml-auto relative gap-x-0 gap-y-0" id="testimonial">
<div className="overflow-hidden sm:p-10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{minHeight: '540px'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:64px_64px]">
</div>
<div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#ECA72C]/10 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#ECA72C]/10 blur-3xl">
</div>
<div className="absolute top-6 left-6 opacity-10 text-white">
<svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" strokeWidth="1.3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path>
</svg>
</div>
<div className="flex flex-col justify-between" style={{minHeight: '420px'}}>
<blockquote className="relative text-center max-w-5xl mx-auto transition-opacity duration-300 flex-1 flex items-center justify-center" id="testimonial-quote">
<p className="sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-2xl font-light text-white tracking-tighter font-heading">
              Cette expérience a totalement
              <span className="text-[#ECA72C] font-heading font-light tracking-tighter">transformé ma façon</span>
              de voir l'entraînement.
              Je me sens plus forte, alignée et concentrée —
              <span className="text-[#ECA72C] font-heading font-light tracking-tighter">sans jamais avoir l'impression de forcer</span> mais plutôt de me découvrir.
            </p>
</blockquote>
<div className="mt-8 text-center transition-opacity duration-300" id="testimonial-author">
<p className="text-sm sm:text-base text-slate-200 font-medium font-geist">
              Sarah Nguyen <span className="text-slate-400 font-normal font-geist">Directrice Artistique, Paris</span>
</p>
</div>
<div className="mt-10 flex flex-wrap items-end justify-center gap-3 sm:gap-4">
<img alt="Avatar 1" className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="0" data-testimonial-name="Michael Chen" data-testimonial-quote="L'approche holistique m'a permis de &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;dépasser mes limites&lt;/span&gt; physiques. Je rentre avec une énergie décuplée pour mes projets pro, c'est &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;bluffant&lt;/span&gt;." data-testimonial-role="Entrepreneur, Lyon" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp"/>
<img alt="Avatar 2" className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="1" data-testimonial-name="Émilie Rodriguez" data-testimonial-quote="Venir ici a été la &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;meilleure décision&lt;/span&gt; de mon année. L'encadrement est bienveillant, le cadre sublime, et les résultats sont &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;visibles immédiatement&lt;/span&gt;." data-testimonial-role="Architecte, Bruxelles" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<img alt="Avatar 3" className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="2" data-testimonial-name="David Kim" data-testimonial-quote="La discipline du Muay Thaï m'a appris à &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;calmer mon esprit&lt;/span&gt;. C'est bien plus que du sport, c'est une véritable &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;leçon de vie&lt;/span&gt; pour gérer le stress." data-testimonial-role="Développeur, Bordeaux" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg"/>
<img alt="Avatar highlighted" className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover ring-2 ring-[#ECA72C] shadow-lg cursor-pointer" data-active="true" data-testimonial-index="3" data-testimonial-name="Sarah Nguyen" data-testimonial-quote="Cette expérience a totalement &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;transformé ma façon&lt;/span&gt; de voir l'entraînement. Je me sens plus forte, alignée et concentrée — &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;sans jamais avoir l'impression de forcer&lt;/span&gt; mais plutôt de me découvrir." data-testimonial-role="Directrice Artistique, Paris" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
<img alt="Avatar 5" className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60 hidden sm:block" data-testimonial-index="4" data-testimonial-name="Jessica Park" data-testimonial-quote="Du matin au soir, tout est pensé pour nous rendre &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;la vie simple et saine&lt;/span&gt;. J'ai perdu du poids, mais j'ai surtout gagné une &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;confiance énorme&lt;/span&gt; en moi." data-testimonial-role="Directrice Opérations, Genève" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp"/>
<img alt="Avatar 6" className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60 hidden sm:block" data-testimonial-index="5" data-testimonial-name="Alex Thompson" data-testimonial-quote="La clarté mentale que j'ai retrouvée ici est inestimable. Je ne pensais pas être capable de &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;telles performances&lt;/span&gt;. Un séjour &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;haut de gamme&lt;/span&gt;." data-testimonial-role="Designer, Lille" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp"/>
<img alt="Avatar 7" className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60 hidden md:block" data-testimonial-index="6" data-testimonial-name="Rachel Foster" data-testimonial-quote="C'est devenu mon &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;lieu de ressourcement&lt;/span&gt; annuel. L'équilibre entre effort et détente est parfait, me rendant &lt;span className='text-[#ECA72C] font-heading font-light tracking-tighter'&gt;incroyablement sereine&lt;/span&gt;." data-testimonial-role="Coach, Marseille" src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"/>
</div>
</div>

</div>
</section>
</div>

</section>


<section className="bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<h2 className="font-heading text-3xl font-medium uppercase tracking-tight mb-16 text-left text-white reveal-on-scroll">Foire aux questions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
<div className="reveal-on-scroll group">
<h3 className="text-white font-semibold text-lg mb-3 tracking-tight">Je n'ai jamais fait de Muay Thai, c'est pour moi ?</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Oui. La majorité des participants découvrent le Muay Thai sur place. Ce qui compte, c'est ta volonté, pas ton niveau. Les coachs — d'anciens champions — savent exactement comment t'accompagner depuis zéro.</p>
</div>
<div className="reveal-on-scroll delay-100 group">
<h3 className="text-white font-semibold text-lg mb-3 tracking-tight">Qu'est-ce qui est inclus dans le tarif ?</h3>
<p className="leading-relaxed text-sm font-light text-gray-400">Tout sauf le vol. Hébergement, pension complète (petit-déj, shake post-training, dîner), séances privées avec anciens champions du monde, coaching avec moi, yoga, fly yoga, massages thaï, ice bath, transferts. Tu arrives, on gère le reste.</p>
</div>
<div className="reveal-on-scroll delay-100 group">
<h3 className="text-white font-semibold text-lg mb-3 tracking-tight">Je ne suis pas très sportive, vais-je tenir ?</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Ce n'est pas un bootcamp militaire. Le programme s'adapte à toi, à ton corps, à ton rythme. On est là pour te faire progresser, pas pour te casser.</p>
</div>
<div className="reveal-on-scroll delay-200 group">
<h3 className="text-white font-semibold text-lg mb-3 tracking-tight">Que se passe-t-il si je dois annuler ?</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">On sait que la vie réserve des imprévus. Les conditions d'annulation te seront communiquées après inscription. On trouve toujours une solution.</p>
</div>
<div className="reveal-on-scroll delay-200 group">
<h3 className="text-white font-semibold text-lg mb-3 tracking-tight">Je serai seule ou avec d'autres participants ?</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed">Les deux sont possibles. Tu peux vivre l'expérience en solo ou rejoindre une session avec d'autres participantes. Dans tous les cas, je suis là du réveil au coucher.</p>
</div>
<div className="reveal-on-scroll delay-300 group">
<h3 className="text-white font-semibold text-lg mb-3 tracking-tight">Quels résultats puis-je attendre en 14 jours ?</h3>
<p className="leading-relaxed text-sm font-light text-gray-400">En 14 jours : plus de force, plus de tonus, un corps qui se réveille. Une clarté mentale et une confiance retrouvées. En 1 mois : une vraie transformation physique et mentale durable. Ce ne sont pas des vacances — c'est un reset complet.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center text-center px-6" id="contact">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-20 md:p-12 overflow-hidden flex bg-[#0a0a0a] w-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-7xl gap-x-12 gap-y-12 items-center">

<div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl order-2 lg:order-1 relative overflow-hidden group">
<div className="z-50 md:p-8 flex flex-col overflow-hidden text-white font-sans bg-[#0D0D0D] w-full h-full pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0">
<iframe allowfullscreen="" className="w-full h-full rounded-lg" frameborder="0" height="100%" scrolling="auto" src="https://743ea8dd.sibforms.com/serve/MUIFAHPhqlpE1t7fXxwma7wMTxUGgTTllBlwakC4k4xvxnfeEVy8I6wT_3qYM99agqlffkGXR3X8fVK_LpP691Pjn4yMJ1Jo2vhDeE_GQpIESjJXjHIlFO1xNwwPuAr2KwBnWoaO3rM3sXTkB5KPMqWDRlAsh_j4hArKYe5aNqwoQZtwWijjgNyUFANW074vHbrSlaA3AJzy_kLujQ==" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}} width="100%"></iframe>
</div>
<div className="relative z-10">
<div className="mb-8">
<h3 className="text-black font-heading text-2xl font-semibold uppercase tracking-tight">Une question ?</h3>
<p className="text-gray-500 text-sm mt-2 font-medium">Laissez-nous vos coordonnées, on s'occupe du reste.</p>
</div>
<form className="space-y-5">
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-900 uppercase tracking-wider">Nom complet</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all font-medium" placeholder="Prénom Nom" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-900 uppercase tracking-wider">Email</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all font-medium" placeholder="votre@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-semibold text-gray-900 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none font-medium" placeholder="Parlez-nous de votre projet d'immersion..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white font-heading font-semibold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-[#ECA72C] hover:text-black transition-all flex items-center justify-center gap-2 group mt-4" type="button">
                        Envoyer ma demande
                        <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[10px] text-gray-400 text-center leading-relaxed mt-4 font-medium">
                        En cliquant sur envoyer, vous acceptez d'être recontacté par notre équipe. 
                        Nous répondons généralement sous 24h.
                    </p>
</form>
</div>
</div>

<div className="order-1 lg:order-2 lg:pl-10 text-left pl-0 space-y-10">
<div className="">
<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-2 leading-none">
                    On revient vers toi <span className="text-[#ECA72C]">sous 48h.</span>
</h2>
</div>
<div className="space-y-8 pt-4">

<div className="flex gap-5 items-start group">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#ECA72C]/50 group-hover:bg-[#ECA72C]/10 transition-colors">
<svg className="lucide lucide-mail-check text-[#ECA72C]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="M16 19l2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-white font-heading text-sm font-semibold uppercase tracking-wider mb-2">RÉPONSE RAPIDE</h4>
<p className="text-gray-500 text-sm font-light leading-relaxed">Chaque candidature est lue personnellement. Tu reçois une réponse sous 48h.</p>
</div>
</div>

<div className="flex gap-5 items-start group">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#ECA72C]/50 group-hover:bg-[#ECA72C]/10 transition-colors">
<svg className="lucide lucide-sparkles text-[#ECA72C]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M3 5h4"></path><path d="M3 9h4"></path></svg>
</div>
<div className="">
<h4 className="text-white font-heading text-sm font-semibold uppercase tracking-wider mb-2">ZÉRO PRISE DE TÊTE</h4>
<p className="text-gray-500 text-sm font-light leading-relaxed">Transferts, logement, repas, entraînements — on gère tout. Tu n'as qu'à venir.</p>
</div>
</div>
</div>

<div className="inline-flex items-center gap-4 p-2 pr-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm mt-4">
<div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden ring-2 ring-[#ECA72C]/20">
<img alt="Support Team" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="flex flex-col leading-none">
<span className="text-[11px] uppercase font-bold text-white tracking-wide mb-1">laurent</span>
<span className="text-[#ECA72C] text-[10px] font-medium uppercase tracking-wider">Head Coach</span>
</div>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<span className="text-gray-400 text-xs font-medium">Disponible aujourd'hui</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-col leading-none select-none">
<div className="font-heading font-bold text-2xl tracking-tighter text-white">
<span className="text-accent">8LIMBS</span>.BE
                </div>
<div className="flex justify-between w-full text-[0.6rem] font-bold uppercase tracking-[0.15em] mt-0.5">
<span className="text-white">Thaï Boxing</span>
</div>
</div>
<p className="text-gray-600 text-xs text-center md:text-right">© 2024 8LIMBS.BE. Tous droits réservés.</p>
</div>
</footer>


    </>
  );
}
