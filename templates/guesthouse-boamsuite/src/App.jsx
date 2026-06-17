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



{
"@context":"https://schema.org",
"@type":"LodgingBusiness",
"name":"BOAM SUITE",
"description":"Private Airbnb suite with private jacuzzi near Pairi Daiza in Hyon (Mons), Belgium.",
"address":{
"@type":"PostalAddress",
"streetAddress":"Rue de la Place 37",
"postalCode":"7022",
"addressLocality":"Hyon (Mons)",
"addressCountry":"BE"
},
"telephone":"+32479975479",
"email":"nadia.scandari@hotmail.com",
"checkinTime":"18:00",
"checkoutTime":"12:00"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      window.BOAM_BOOKING_URL = "https://example.com/booking";
    


          (function(){
            const tabNames=["L'Écrin","Massage","Confort","Hygiène"];
            const steps=[
              {
                title:'Immersion Nocturne',
                description:"Plongez dans une eau à 38°C alors que la fraîcheur de la soirée s'installe. Notre jacuzzi est équipé d'un système de chromothérapie avec LED subaquatiques vous permettant de choisir l'ambiance qui vous ressemble : bleu apaisant pour la méditation ou ambre chaleureux pour une soirée romantique. L'horizon dégagé vous offre un premier rang pour contempler le coucher du soleil ou la voûte céleste, sans aucun vis-à-vis.",
                image:'https://zygomorphic-cyan-gozmu7mg8c.edgeone.app/IMG_2980.jpg'
              },
              {
                title:'Relâchement Absolu',
                description:"Oubliez les tensions de la journée grâce à nos jets de massage haute performance. Chaque siège a été conçu pour cibler une zone spécifique : des cervicales aux lombaires, jusqu'à la voûte plantaire. La puissance des jets est entièrement réglable pour passer d'un drainage lymphatique doux à un massage sportif profond. La position allongée vous permet une flottaison totale pour une sensation d'apesanteur unique.",
                image:'https://purring-tan-jkl0dz09u6.edgeone.app/IMG_3038.jpg'
              },
              {
                title:'Les Petites Attentions',
                description:"Parce que le luxe se niche dans le détail, nous mettons à votre disposition tout le nécessaire pour une session parfaite : peignoirs moelleux en coton, chaussons de bain et serviettes épaisses. Une tablette de bord est prévue pour accueillir vos boissons fraîches ou une coupe de champagne. Une enceinte Bluetooth haute fidélité vous permet de diffuser votre propre playlist relaxante tout en restant immergé.",
                image:'https://massive-harlequin-3mpzokzdam.edgeone.app/IMG_3047.jpg'
              },
              {
                title:'Pureté Garantie',
                description:"Votre santé et votre confort sont notre priorité absolue. Nous utilisons un système de filtration de dernière génération qui permet de réduire l'utilisation de produits chimiques tout en garantissant une eau cristalline et douce pour la peau. Le jacuzzi est contrôlé, testé et nettoyé rigoureusement avant chaque nouvelle arrivée pour une sécurité sanitaire irréprochable.",
                image:'https://thundering-violet-38s4fsktiw.edgeone.app/IMG_3048.jpg'
              }
            ];
            let activeStep=0;
            function setActiveStep(idx){
              activeStep=idx;
              const img=document.getElementById('stepImage');
              const title=document.getElementById('stepTitle');
              const desc=document.getElementById('stepDesc');
              img.style.opacity='0';
              setTimeout(()=>{
                img.src=steps[idx].image;
                title.textContent=steps[idx].title;
                desc.textContent=steps[idx].description;
                img.style.opacity='1';
              },300);
              const tabs=document.querySelectorAll('.step-tab');
              tabs.forEach((tab,i)=>{
                const num=String(i+1).padStart(2,'0');
                if(i===idx){
                  tab.className='step-tab group w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer';
                  tab.style.cssText='background:linear-gradient(to bottom right,rgba(107,45,62,0.1),rgba(107,45,62,0.05));border:1px solid rgba(107,45,62,0.2);';
                  tab.innerHTML='<div class="relative z-10"><div class="flex items-center justify-between mb-2"><span class="text-lg font-medium text-[#6B2D3E]" style="font-family:Cormorant Garamond,serif;">'+tabNames[i]+'</span><span class="text-sm font-semibold text-[#A8D5D0]">'+num+'</span></div><div class="h-1 w-12 rounded-full bg-[#6B2D3E]/30 mt-2"><div class="h-full rounded-full bg-[#6B2D3E]" style="width:100%;transition:width 0.5s;"></div></div></div>';
                }else{
                  tab.className='step-tab group w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer';
                  tab.style.cssText='border:1px solid #E8E0D8;background:transparent;';
                  tab.innerHTML='<div class="relative z-10"><div class="flex items-center justify-between"><span class="text-lg font-medium text-[#6B5B4E] group-hover:text-[#6B2D3E] transition-colors" style="font-family:Cormorant Garamond,serif;">'+tabNames[i]+'</span><span class="text-sm font-semibold text-[#A8D5D0]/60 group-hover:text-[#A8D5D0] transition-colors">'+num+'</span></div></div>';
                }
              });
            }
            const tabs=document.querySelectorAll('.step-tab');
            tabs.forEach((tab,i)=>{
              tab.addEventListener('click',()=>setActiveStep(i));
            });
            setActiveStep(0);
          })();
        


          (function(){
            var section = document.getElementById('board-games');
            if(!section) return;
            var els = section.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            var obs = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  obs.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            els.forEach(function(el) { obs.observe(el); });

            section.querySelectorAll('.icon-hover-bounce').forEach(function(card) {
              card.addEventListener('mouseenter', function() {
                var icon = this.querySelector('.icon-animated');
                if (icon) {
                  icon.style.animation = 'iconBounce 0.6s ease';
                  icon.addEventListener('animationend', function() {
                    icon.style.animation = '';
                  }, { once: true });
                }
              });
            });
          })();
        


      // Mobile Menu Toggle
      const menuBtn = document.getElementById('menuBtn');
      const menuCloseBtn = document.getElementById('menuCloseBtn');
      const mobileMenu = document.getElementById('mobileMenu');

      menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });

      menuCloseBtn?.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });

      document.querySelectorAll('.mobileNavLink').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        });
      });

      // Lightbox
      const lightbox = document.getElementById('lightbox');
      const lbImg = document.getElementById('lbImg');
      const lbClose = document.getElementById('lbClose');

      document.querySelectorAll('[data-lightbox]').forEach(btn => {
        btn.addEventListener('click', () => {
          const img = btn.querySelector('img');
          if (img) {
            lbImg.src = img.src;
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
          }
        });
      });

      lbClose?.addEventListener('click', () => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      });

      lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.closest('.absolute.inset-0')) {
          lightbox.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });

      // Scroll Reveal (Intersection Observer)
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
      };

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll, .animate-on-scroll, .fade-in').forEach(el => {
        revealObserver.observe(el);
      });

      // Navbar scroll effect
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        const header = document.getElementById('siteHeader');
        const scrollY = window.scrollY;

        if (scrollY > 100) {
          header.style.background = 'rgba(253, 251, 247, 0.97)';
          header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
        } else {
          header.style.background = 'rgba(253, 251, 247, 0.92)';
          header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        }

        lastScroll = scrollY;
      });

      // Active nav link highlighting
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.navLink');

      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.style.color = '#2C1A12';
          link.style.textDecoration = 'none';
          if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#9F3926';
            link.style.textDecoration = 'underline';
          }
        });
      });
    


      document.addEventListener('DOMContentLoaded', function() { var heroVideo = document.querySelector('#hero-section video'); if (heroVideo) { heroVideo.play().catch(function(error) { console.log('Autoplay prevented:', error); }); } });
    


      (function(){
        // Scroll Progress Bar
        const scrollProgress = document.getElementById('scrollProgress');
        window.addEventListener('scroll', function() {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = (scrollTop / scrollHeight) * 100;
          if (scrollProgress) scrollProgress.style.width = progress + '%';
        });

        // Floating Particles
        const particlesContainer = document.getElementById('particlesContainer');
        function createParticle() {
          if (!particlesContainer) return;
          const particle = document.createElement('div');
          particle.className = 'particle';
          const colors = ['#9F3926', '#D4AF37', '#A8D5D0'];
          particle.style.background = colors[Math.floor(Math.random() * colors.length)];
          particle.style.opacity = '0';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.bottom = '-10px';
          const size = (Math.random() * 4 + 3) + 'px';
          particle.style.width = size;
          particle.style.height = size;
          const duration = Math.random() * 8 + 8;
          particle.style.animation = 'floatParticle ' + duration + 's ease-in-out forwards';
          particlesContainer.appendChild(particle);
          setTimeout(function() { particle.remove(); }, duration * 1000);
        }
        setInterval(createParticle, 1500);

        // Enhanced Scroll Reveal
        var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        var revealObs = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(function(el) { revealObs.observe(el); });

        // Ripple Effect
        document.querySelectorAll('.ripple-container').forEach(function(btn) {
          btn.addEventListener('click', function(e) {
            var rect = this.getBoundingClientRect();
            var ripple = document.createElement('span');
            ripple.className = 'ripple';
            var size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(function() { ripple.remove(); }, 600);
          });
        });

        // Header enhanced scroll
        var header = document.getElementById('siteHeader');
        var prevScroll = 0;
        window.addEventListener('scroll', function() {
          var currentScroll = window.scrollY;
          if (header) {
            header.style.transition = 'all 0.3s ease';
            if (currentScroll > lastScroll && currentScroll > 500) {
              header.style.transform = 'translateY(-100%)';
            } else {
              header.style.transform = 'translateY(0)';
            }
            prevScroll = currentScroll;
          }
        });

        // Icon hover bounce on amenity cards
        document.querySelectorAll('.icon-hover-bounce').forEach(function(card) {
          card.addEventListener('mouseenter', function() {
            var icon = this.querySelector('.icon-animated');
            if (icon) {
              icon.style.animation = 'iconBounce 0.6s ease';
              icon.addEventListener('animationend', function() {
                icon.style.animation = '';
              }, { once: true });
            }
          });
        });
      })();
    


      document.addEventListener('DOMContentLoaded',function(){var a=document.getElementById('boamMenuOpen'),b=document.getElementById('boamMenuClose'),c=document.getElementById('boamMobileMenu'),d=document.getElementById('boamMenuPanel'),e=document.getElementById('boamOverlay'),f=document.querySelectorAll('#boamMobileMenu .boam-mobile-link'),g=document.querySelectorAll('.hamburger-line');function h(){c.classList.remove('hidden');c.setAttribute('aria-hidden','false');a.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';setTimeout(function(){d.classList.remove('translate-x-full');e.classList.remove('opacity-0');e.classList.add('opacity-100')},10);g[0].style.transform='translateY(8px) rotate(45deg)';g[1].style.opacity='0';g[2].style.transform='translateY(-8px) rotate(-45deg)'}function i(){d.classList.add('translate-x-full');e.classList.remove('opacity-100');e.classList.add('opacity-0');a.setAttribute('aria-expanded','false');document.body.style.overflow='';g[0].style.transform='';g[1].style.opacity='1';g[2].style.transform='';setTimeout(function(){c.classList.add('hidden');c.setAttribute('aria-hidden','true')},500)}if(a)a.addEventListener('click',h);if(b)b.addEventListener('click',i);if(e)e.addEventListener('click',i);f.forEach(function(l){l.addEventListener('click',i)});document.addEventListener('keydown',function(k){if(k.key==='Escape'&&!c.classList.contains('hidden'))i()});window.addEventListener('resize',function(){if(window.innerWidth>=1024&&!c.classList.contains('hidden'))i()})});
    
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
      
<div className="" id="scrollProgress" style={{width: '100%'}}></div>


<header className="fixed z-[9999] transition-all duration-300 top-0 right-0 left-0" id="siteHeader" style={{background: 'rgba(253, 251, 247, 0.97)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(159, 57, 38, 0.15)'}}>
<div className="mx-auto max-w-[75rem] px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="/">
<span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#9F3926]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              BOAM SUITE
            </span>
<span className="hidden md:inline-flex text-xs font-semibold text-[#9F3926] tracking-[0.2em] bg-[#F5EDE3] border-[#9F3926]/30 border pt-1 pr-3 pb-1 pl-3" style={{borderRadius: '0 0.75rem 0 0.75rem'}}>
              Votre espace privée
            </span>
</a>
<nav className="hidden lg:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-[#9F3926] text-sm font-semibold text-[#2C1A12] tracking-wide" href="/home">
              Acceuil
            </a>
<a className="transition-colors hover:text-[#9F3926] text-sm font-semibold text-[#2C1A12] tracking-wide" href="/gallerie">
              La suite
            </a>
<a className="transition-colors hover:text-[#9F3926] text-sm font-semibold text-[#2C1A12] tracking-wide" href="/tarifs">
              Tarifs
            </a>
<a className="transition-colors hover:text-[#9F3926] text-sm font-semibold text-[#2C1A12] tracking-wide" href="/faq">
              FAQ
            </a>
<a className="transition-colors underline text-sm font-semibold text-[#9F3926] tracking-wide" href="/contact" style={{textUnderlineOffset: '0.5rem'}}>
              Contact
            </a>
</nav>
<div className="flex items-center gap-3">
<a className="group hidden sm:relative sm:inline-flex items-center justify-center overflow-hidden sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(159,57,38,0.5)] min-h-12 lg:inline-flex text-sm font-semibold text-[#FDFBF7] tracking-[0.08em] bg-[#9F3926] border-[#FDFBF7]/20 border-2 pt-3 pr-6 pb-3 pl-6 relative" href="/tarifs" style={{borderRadius: '0 0.75rem 0 0.75rem'}}>
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_1.5s_infinite] via-white/20"></span>
<span className="relative flex items-center gap-2">
                Réserver
                <svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</span>
</a>
<button aria-expanded="false" aria-label="Ouvrir le menu" className="lg:hidden inline-flex flex-col gap-1.5 w-12 h-12 items-center justify-center bg-[#FDFBF7]/70 backdrop-blur-sm z-[10001] transition-all duration-300 hover:scale-105" id="boamMenuOpen" style={{borderRadius: '0 0.75rem 0 0.75rem'}}>
<span className="hamburger-line w-6 h-0.5 bg-[#9F3926] transition-all duration-300"></span>
<span className="hamburger-line w-6 h-0.5 bg-[#9F3926] transition-all duration-300"></span>
<span className="hamburger-line h-0.5 transition-all duration-300 bg-[#9F3926] w-6"></span>
</button>
</div>
</div>
</div>
</header>

<main className="relative" id="home">
<section className="relative w-full h-screen overflow-hidden" id="hero-section" style={{background: 'transparent'}}>
<div className="absolute top-10 -left-20 w-80 h-80 bg-[#9F3926]/5 blob-1 pointer-events-none z-0"></div>
<div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#A8D5D0]/8 blob-2 pointer-events-none z-0"></div>
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0" id="particlesContainer">
<div className="particle" style={{background: 'rgb(168, 213, 208)', left: '15.2074%', bottom: '-10px', width: '5.84774px', height: '5.84774px', animation: '15.6504s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(159, 57, 38)', left: '27.1191%', bottom: '-10px', width: '3.06985px', height: '3.06985px', animation: '15.093s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(212, 175, 55)', left: '97.2042%', bottom: '-10px', width: '4.50237px', height: '4.50237px', animation: '15.3725s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(159, 57, 38)', left: '24.4881%', bottom: '-10px', width: '3.48691px', height: '3.48691px', animation: '12.8808s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(212, 175, 55)', left: '19.9618%', bottom: '-10px', width: '3.44541px', height: '3.44541px', animation: '13.4673s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(159, 57, 38)', left: '77.3797%', bottom: '-10px', width: '5.94701px', height: '5.94701px', animation: '14.8325s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(168, 213, 208)', left: '16.636%', bottom: '-10px', width: '4.25173px', height: '4.25173px', animation: '11.5025s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(212, 175, 55)', left: '65.1043%', bottom: '-10px', width: '6.54185px', height: '6.54185px', animation: '10.5789s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(168, 213, 208)', left: '41.0932%', bottom: '-10px', width: '3.84633px', height: '3.84633px', animation: '15.0359s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(212, 175, 55)', left: '68.3928%', bottom: '-10px', width: '3.70259px', height: '3.70259px', animation: '9.87433s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(168, 213, 208)', left: '15.2074%', bottom: '-10px', width: '5.84774px', height: '5.84774px', animation: '15.6504s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(168, 213, 208)', left: '15.2074%', bottom: '-10px', width: '5.84774px', height: '5.84774px', animation: '15.6504s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
<div className="particle" style={{background: 'rgb(168, 213, 208)', left: '15.2074%', bottom: '-10px', width: '5.84774px', height: '5.84774px', animation: '15.6504s ease-in-out 0s 1 normal forwards running floatParticle'}}></div>
</div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://anxious-harlequin-dz0dyukul7.edgeone.app/AIVideo_260216_1f4eb20d-106e-4ab1-8d38-61bab1f5c03a_0_MiriCanvas.mp4"></video>

<video autoplay="" className="z-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" preload="auto" style={{minWidth: '100%', minHeight: '100%'}}>
<source src="https://yelping-copper-ye3su5opkx.edgeone.app/AIVideo_260216_1f4eb20d-106e-4ab1-8d38-61bab1f5c03a_0_MiriCanvas.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

<div className="absolute inset-0 sm:hidden z-0 hidden">
<img alt="BOAM SUITE private jacuzzi ambience" className="h-full w-full object-cover" loading="eager" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-[1] bg-black/50"></div>

<div className="z-10 flex flex-col sm:px-6 text-center h-full pr-4 pl-4 relative items-center justify-center">
<div className="mx-auto max-w-3xl">
<div className="reveal-load-1 sm:text-sm uppercase text-xs font-semibold tracking-[0.3em] text-slate-50/95">
              Suite avec jacuzzi privé près de Pairi Daiza
            </div>
<h1 className="reveal-load-2 sm:text-6xl lg:text-7xl text-6xl font-medium text-[#9F3926] tracking-tight mt-4" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 4px 20px rgba(0,0,0,0.2)'}}>
              Votre évasion commence ici
            </h1>
<p className="reveal-load-3 leading-relaxed sm:text-xl lg:text-2xl text-base mt-6 text-slate-50/95">
              Un havre de paix lumineux et chaleureux à Hyon (Mons).
            </p>
<div className="reveal-load-4 mt-10 flex flex-col items-center justify-center gap-4">
<a className="group inline-flex items-center justify-center overflow-hidden sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(159,57,38,0.5)] min-h-12 boam-btn btn-pulse ripple-container text-sm font-semibold text-[#FDFBF7] tracking-[0.08em] bg-[#9F3926] border-[#FDFBF7]/20 border-2 rounded-tr-xl pt-3 pr-6 pb-3 pl-6 relative" href="/gallerie" rel="noreferrer" target="_blank">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_1.5s_infinite] via-white/20"></span>
<span className="flex items-center gap-2 relative">
                  Découvrez la suite
                  <svg className="text-xl transition-transform duration-300 group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
<a className="inline-flex flex-col items-center gap-2 text-[#FDFBF7]/80 hover:text-[#FDFBF7] transition-colors" href="#welcome">
<span className="text-xs font-semibold tracking-[0.25em] uppercase">
              Scroll
            </span>
<svg className="animate-bounce text-2xl" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
</div>
</section>

<section className="sm:py-24 lg:py-28 overflow-hidden bg-[#FDFBF7] pt-16 pb-16 relative" id="welcome">
<div className="absolute top-0 right-0 w-80 h-80 bg-[#9F3926]/3 blob-2 pointer-events-none" style={{position: 'absolute'}}></div>
<div className="sm:px-6 max-w-[75rem] mr-auto ml-auto pr-4 pl-4">
<div className="reveal-on-scroll mx-auto max-w-3xl text-center visible reveal">
<div className="mx-auto mb-6 h-0.5 w-20 bg-[#9F3926]"></div>
<h2 className="sm:text-5xl lg:text-6xl text-5xl font-medium text-[#9F3926] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Bienvenue chez boam suite
            </h2>
<p className="sm:text-xl leading-relaxed text-lg text-[#2C1A12] mt-6" style={{lineHeight: '1.8', fontFamily: '\'Cormorant Garamond\', serif'}}>
              Niché à Hyon, à quelques minutes seulement de Pairi Daiza,
              découvrez votre havre de paix.
            </p>
<div className="overflow-hidden aspect-video group w-full rounded-t-[3rem] mt-10 mb-12 relative shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://civilian-chocolate-xuaravie8b.edgeone.app/WhatsApp%20Video%202026-02-24%20at%2021.34.00.mp4"></video>
<div className="flex z-10 group-hover:bg-black/5 transition-colors bg-black/10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"></div>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1572576922986-e97022227d8e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<source src="https://cdn.coverr.co/videos/coverr-bedroom-with-a-view-4578/1080p.mp4" type="video/mp4"/>
</video>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 gap-x-6 gap-y-6">
<div className="reveal-on-scroll stagger transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(159,57,38,0.12)] border-[#9F3926]/20 pt-7 pr-7 pb-7 pl-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-t-[3rem] rounded-b-lg border-double border-4 relative overflow-hidden bg-white visible reveal stagger-1 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 8s ease-in-out infinite'}}></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 13s ease-in-out infinite reverse'}}></div>
</div>
<div className="flex gap-3 text-center gap-x-3 gap-y-3 items-center">
<span className="inline-flex h-12 w-12 items-center justify-center bg-[#F5EDE3] border border-[#9F3926]/20 rounded-t-full rounded-b-lg icon-animated" style={{animation: '0.6s ease 0s 1 normal none running iconBounce'}}>
<svg className="text-2xl" height="26" style={{color: '#9F3926'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M2 13h20" strokeLinecap="round"></path>
<path d="M2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13"></path>
<path d="M5 13V5.5A2.5 2.5 0 0 1 7.5 3v0A2.5 2.5 0 0 1 10 5.5V6m-2 7V9m14 4v5m-17 0v2m17-2v2" strokeLinecap="round"></path>
</g>
</svg>
</span>
<h3 className="text-3xl font-medium text-[#2C1A12] tracking-tight text-center" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Jacuzzi privatif
                </h3>
</div>
<p className="leading-relaxed text-base text-[#6B5B4E] text-center mt-4">
                Votre bulle de bien-être
              </p>
</div>
<div className="reveal-on-scroll stagger transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(159,57,38,0.12)] border-double overflow-hidden border-[#9F3926]/20 border-4 rounded-t-[3rem] pt-7 pr-7 pb-7 pl-7 relative shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white visible reveal stagger-2 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 10s ease-in-out infinite'}}></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 14s ease-in-out infinite reverse'}}></div>
</div>
<div className="flex gap-x-3 gap-y-3 items-center">
<span className="inline-flex h-12 w-12 items-center justify-center bg-[#F5EDE3] border border-[#9F3926]/20 rounded-t-full rounded-b-lg icon-animated" style={{animation: '0.6s ease 0s 1 normal none running iconBounce'}}>
<svg className="text-2xl" height="26" style={{color: '#9F3926'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M12 5.502S9.695 2 6.308 2C3.384 2 1 4.408 1 7.563c0 5.643 5.674 9.401 9.09 11.088A3.987 3.987 0 0 0 12 19.17a3.987 3.987 0 0 0 1.91-.518C17.326 16.964 23 13.206 23 7.563C23 4.408 20.616 2 17.692 2C14.305 2 12 5.502 12 5.502Z"></path>
</g>
</svg>
</span>
<h3 className="text-3xl font-medium text-[#2C1A12] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Suite privée
                </h3>
</div>
<p className="leading-relaxed text-base text-[#6B5B4E] text-center mt-4">
                Design chic et soigné
              </p>
</div>
<div className="reveal-on-scroll stagger border-[#9F3926]/20 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(159,57,38,0.12)] rounded-t-[3rem] rounded-b-lg border-double border-4 relative overflow-hidden bg-white visible reveal stagger-3 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 7s ease-in-out infinite'}}></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 12s ease-in-out infinite reverse'}}></div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex h-12 w-12 items-center justify-center bg-[#F5EDE3] border border-[#9F3926]/20 rounded-t-full rounded-b-lg icon-animated" style={{animation: '0.6s ease 0s 1 normal none running iconBounce'}}>
<svg className="text-2xl" height="26" style={{color: '#9F3926'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<path className="" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.143Z"></path>
<circle className="" cx="12" cy="10" r="3"></circle>
</g>
</svg>
</span>
<h3 className="text-3xl font-medium text-[#2C1A12] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Visite Pairi Daiza
                </h3>
</div>
<p className="leading-relaxed text-base text-[#6B5B4E] text-center mt-4">
                À deux pas de Pairi Daiza
              </p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 bg-[#FDFBF7] max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="amenities">
<div className="animate-in text-center reveal">
<span className="inline-flex items-center gap-1 bg-[#9F3926]/10 px-3 py-1 text-xs text-[#9F3926] ring-1 ring-[#9F3926]/20 uppercase tracking-widest font-semibold rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none">
<svg height="14" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
            Inclus
          </span>
<h2 className="sm:text-5xl text-4xl font-medium text-[#9F3926] tracking-tight mt-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Tout ce dont vous avez besoin
          </h2>
<p className="text-lg text-[#6B5B4E] max-w-2xl mt-4 mr-auto ml-auto" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Tout est pensé pour votre confort.
          </p>
</div>
<div className="relative mx-auto mt-16 max-w-4xl">
<div className="animate-in stagger-delay-1 flex flex-wrap items-center justify-center gap-6 sm:gap-10 reveal stagger-2">
<div className="flex flex-col items-center gap-3">
<span className="inline-flex items-center justify-center w-16 h-16 ring-[#9F3926]/20 ring-1 shadow-sm rounded-t-[3rem] rounded-b-lg bg-white icon-animated">
<svg className="text-[#9F3926]" height="28" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.143Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
</span>
<span className="text-sm font-semibold text-[#2C1A12]">
                Proche de Pairi Daiza
              </span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="inline-flex h-16 w-16 items-center justify-center ring-1 ring-[#9F3926]/20 shadow-sm rounded-t-[3rem] rounded-b-lg bg-white">
<svg className="text-[#9F3926]" height="28" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M12 18.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"></path>
<path d="M9.5 15.5a3.5 3.5 0 0 1 5 0m-8-3a7 7 0 0 1 11 0m-14-3c4.97-4.97 13.03-4.97 18 0" strokeLinecap="round"></path>
</g>
</svg>
</span>
<span className="text-sm font-semibold text-[#2C1A12]">
                Wi-Fi haut débit
              </span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="inline-flex items-center justify-center w-16 h-16 ring-[#9F3926]/20 ring-1 shadow-sm rounded-t-[3rem] rounded-b-lg bg-white">
<svg className="text-[#9F3926]" height="28" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M19 20v-1.5M5 20v-1.5" strokeLinecap="round"></path>
<path d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></path>
<path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"></path>
</g>
</svg>
</span>
<span className="text-sm font-semibold text-[#2C1A12]">
                Literie premium
              </span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="inline-flex h-16 w-16 items-center justify-center ring-1 ring-[#9F3926]/20 shadow-sm rounded-t-[3rem] rounded-b-lg bg-white">
<svg className="text-[#9F3926]" height="28" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<rect height="18.5" rx="6" width="18.5" x="2.75" y="2.75"></rect>
<path d="M9.5 16V8h3a3 3 0 1 1 0 6h-3" strokeLinecap="round"></path>
</g>
</svg>
</span>
<span className="text-sm font-semibold text-[#2C1A12]">
                Parking gratuit
              </span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="inline-flex h-16 w-16 items-center justify-center ring-1 ring-[#9F3926]/20 shadow-sm rounded-t-[3rem] rounded-b-lg bg-white">
<svg className="text-[#9F3926]" height="28" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.5 8.965c0-.986 0-1.478.29-1.727c.29-.248.726-.06 1.596.318l5.606 2.432c.98.425 1.47.637 1.47 1.012s-.49.587-1.47 1.012l-5.606 2.432c-.87.378-1.306.566-1.596.318c-.29-.249-.29-.741-.29-1.727V8.965Z"></path>
</g>
</svg>
</span>
<span className="text-sm font-semibold text-[#2C1A12]">Netflix</span>
</div>
<div className="flex flex-col items-center gap-3">
<span className="inline-flex h-16 w-16 items-center justify-center ring-1 ring-[#9F3926]/20 shadow-sm rounded-t-[3rem] rounded-b-lg bg-white">
<svg className="text-[#9F3926]" height="28" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M2 13h20" strokeLinecap="round"></path>
<path d="M2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13"></path>
<path d="M5 13V5.5A2.5 2.5 0 0 1 7.5 3v0A2.5 2.5 0 0 1 10 5.5V6m-2 7V9m14 4v5m-17 0v2m17-2v2" strokeLinecap="round"></path>
</g>
</svg>
</span>
<span className="text-sm font-semibold text-[#2C1A12]">Jacuzzi</span>
</div>
</div>
<div className="animate-in stagger-delay-2 relative mt-10 h-64 opacity-60" style={{color: 'rgb(44, 26, 18)', overflow: 'hidden'}}>
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[896px] h-[256px]" fill="none" strokeWidth="2" style={{color: 'rgb(44, 26, 18)', width: '896px', height: '256px'}} viewbox="0 0 900 360">
<circle cx="150" cy="30" fill="#9F3926" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="270" cy="30" fill="#9F3926" r="4">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="390" cy="30" fill="#9F3926" r="4">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="510" cy="30" fill="#9F3926" r="4">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="630" cy="30" fill="#9F3926" r="4">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="750" cy="30" fill="#9F3926" r="4">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#9F3926" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" dur="3s" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#9F3926" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" dur="3s" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#9F3926" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" dur="3s" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#9F3926" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" dur="3s" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#9F3926" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" dur="3s" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#9F3926" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" dur="3s" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-12 w-12 items-center justify-center bg-[#9F3926]/10 ring-2 ring-[#9F3926]/40 shadow-[0_0_20px_rgba(159,57,38,0.4)] rounded-t-full rounded-b-lg">
<svg className="text-[#9F3926]" height="24" style={{color: 'rgb(159, 57, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<path d="M12 5.502S9.695 2 6.308 2C3.384 2 1 4.408 1 7.563c0 5.643 5.674 9.401 9.09 11.088A3.987 3.987 0 0 0 12 19.17a3.987 3.987 0 0 0 1.91-.518C17.326 16.964 23 13.206 23 7.563C23 4.408 20.616 2 17.692 2C14.305 2 12 5.502 12 5.502Z"></path>
</g>
</svg>
</span>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#FDFBF7] pt-24 pb-24 relative" id="gallery">
<div className="sm:px-6 max-w-[75rem] mr-auto ml-auto pr-4 pl-4">
<div className="mb-12 text-center reveal">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#9F3926]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Découvrez les Espaces
            </h2>
<p className="mt-4 text-lg text-[#6B5B4E]">
              Chaque coin de la suite est pensé pour votre bien-être.
            </p>
</div>
<div className="flex flex-col md:flex-row gap-2 w-full h-[600px] gap-x-2 gap-y-2">
<div className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer rounded-t-[3rem] rounded-b-lg reveal stagger-1 gallery-tilt" style={{clipPath: 'inset(0 0 0 0 round 3rem 3rem 0.5rem 0.5rem)'}}>
<img alt="Cuisine" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b08f62e1-17f7-40ce-a18f-77826bc15381_800w.jpg"/>
<div className="bg-gradient-to-t from-[#6B2D3E]/80 via-[#6B2D3E]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-block transform group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer text-[#FDFBF7] bg-[#6B2D3E]/80 opacity-0 ring-[#FDFBF7]/20 ring-1 rounded-tr-xl mb-2 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md translate-y-8" onclick="window.location.href='/gallerie'" role="button">
                  Tout équipé
                </div>
<h3 className="text-3xl font-medium text-[#FDFBF7] whitespace-nowrap" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Cuisine Équipée
                </h3>
</div>
</div>
<div className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer rounded-t-[3rem] rounded-b-lg reveal stagger-2 gallery-tilt" style={{clipPath: 'inset(0 0 0 0 round 3rem 3rem 0.5rem 0.5rem)'}}>
<img alt="Salle de Bain" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="bg-gradient-to-t from-[#6B2D3E]/80 via-[#6B2D3E]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-block transform group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#FDFBF7] bg-[#6B2D3E]/80 opacity-0 rounded-tr-xl ring-[#FDFBF7]/20 ring-1 mb-2 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md translate-y-8" onclick="window.location.href='/gallerie'" role="button">
                  Luxe &amp; Détente
                </div>
<h3 className="text-3xl font-medium text-[#FDFBF7] whitespace-nowrap" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Salle de Bain
                </h3>
</div>
</div>
<div className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer rounded-t-[3rem] rounded-b-lg reveal stagger-3 gallery-tilt" style={{clipPath: 'inset(0 0 0 0 round 3rem 3rem 0.5rem 0.5rem)'}}>
<img alt="Terrasse" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#6B2D3E]/80 via-[#6B2D3E]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-block transform group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer text-[#FDFBF7] bg-[#6B2D3E]/80 opacity-0 rounded-tr-xl ring-[#FDFBF7]/20 ring-1 mb-2 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md translate-y-8" onclick="window.location.href='/gallerie'" role="button">
                  Air Frais
                </div>
<h3 className="text-3xl font-medium text-[#FDFBF7] whitespace-nowrap" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Terrasse
                </h3>
</div>
</div>
<div className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer rounded-t-[3rem] rounded-b-lg reveal stagger-4 gallery-tilt" style={{clipPath: 'inset(0 0 0 0 round 3rem 3rem 0.5rem 0.5rem)'}}>
<img alt="Coin Café" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#6B2D3E]/80 via-[#6B2D3E]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-block transform group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-[#FDFBF7] bg-[#6B2D3E]/80 opacity-0 ring-[#FDFBF7]/20 ring-1 rounded-tr-xl mb-2 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md translate-y-8" onclick="window.location.href='/gallerie'" role="button">
                  Gourmandise
                </div>
<h3 className="text-3xl font-medium text-[#FDFBF7] whitespace-nowrap" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Coin Café
                </h3>
</div>
</div>
<div className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer rounded-t-[3rem] rounded-b-lg reveal stagger-5 gallery-tilt" style={{clipPath: 'inset(0 0 0 0 round 3rem 3rem 0.5rem 0.5rem)'}}>
<img alt="Salon Détente" className="transition-transform duration-700 group-hover:scale-110 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8adbe2-aae7-451a-b84f-eef11dc2325b_800w.jpg"/>
<div className="bg-gradient-to-t from-[#6B2D3E]/80 via-[#6B2D3E]/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-block transform group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer text-[#FDFBF7] bg-[#6B2D3E]/80 opacity-0 rounded-tr-xl ring-[#FDFBF7]/20 ring-1 mb-2 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md translate-y-8" onclick="window.location.href='/gallerie'" role="button">
                  Une Pause
                </div>
<h3 className="text-3xl font-medium text-[#FDFBF7] whitespace-nowrap" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Salon Détente
                </h3>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#FDFBF7] pt-24 pb-24 relative" id="equipements-grid">
<div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A8D5D0]/5 blob-1 pointer-events-none" style={{position: 'absolute'}}></div>
<div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 reveal">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none bg-[#9F3926]/10 border border-[#9F3926]/20 text-xs font-semibold text-[#9F3926] tracking-widest uppercase mb-6">
<svg className="text-[#9F3926]" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
              Nos Équipements
            </span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-medium text-[#9F3926] tracking-tight mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Un confort absolu
            </h2>
<p className="text-lg text-[#6B5B4E] max-w-2xl mr-auto ml-auto" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Tout le confort dont vous avez besoin.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-1 hover-lift hover-glow">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 8s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 12s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6">
<svg className="" fill="none" height="24" stroke="#9F3926" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10V8a5 5 0 0 1 10 0v2"></path>
<path d="M9.5 14.5v0"></path>
<path d="M14.5 14.5v0"></path>
<rect className="" height="10" rx="2" width="18" x="3" y="10"></rect>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  PRODUITS D'ACCUEIL
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Savon, shampoing, gel douche, sèche-cheveux, miroir,
                  pantoufles, serviettes de bain et peignoirs.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-2 hover-lift hover-glow">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 10s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 14s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6">
<svg className="" fill="none" height="24" stroke="#9F3926" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  CHAUFFAGE
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Radiateurs &amp; chauffage électrique. Pour l’été,
                  refroidisseur d’air.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-3 hover-lift hover-glow">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 9s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 11s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6">
<svg className="" fill="none" height="24" stroke="#9F3926" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  CHECK-IN AUTONOME
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Boîte à clés avec code d’accès. Instructions envoyées avant
                  votre arrivée. Assistance 24h/24.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-4 hover-lift hover-glow">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 11s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 13s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6">
<svg className="" fill="none" height="24" stroke="#9F3926" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="15" rx="2" width="20" x="2" y="3"></rect>
<path d="M8 21h8"></path>
<path d="M12 18v3"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  SMART TV
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  TV 55" avec Netflix, Amazon prime &amp; YouTube. Enceinte
                  Bluetooth connectée.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-5 hover-lift hover-glow">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 7s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 15s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6">
<svg fill="none" height="24" stroke="#9F3926" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  TERRASSE
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Espace détente avec salon de jardin cosy, jeu de fléchettes et
                  guirlande lumineuse pour une ambiance chaleureuse en soirée.
                </p>
</div>
</div>

<div className="group border-double hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white border-[#9F3926]/20 border-4 rounded-t-[3rem] pt-8 pr-8 pb-8 pl-8 relative shadow-sm cursor-pointer reveal stagger-6 hover-lift hover-glow" onclick="window.location.href='/faq'" role="button">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 13s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 9s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6">
<svg className="" fill="none" height="24" stroke="#9F3926" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12v10H4V12"></path>
<path d="M2 7h20v5H2z"></path>
<path d="M12 22V7"></path>
<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  EXTRAS
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Machine à café italienne et thé à volonté, sirops Monin,
                  biscuits spéculos et bonbons.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#FDFBF7] pt-24 pb-24 relative" id="jacuzzi-experience">
<div className="absolute top-20 right-0 w-80 h-80 bg-[#A8D5D0]/5 blob-1 pointer-events-none" style={{position: 'absolute'}}></div>
<div className="sm:px-6 max-w-[75rem] mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6B2D3E]/10 border border-[#6B2D3E]/20 mb-6 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none">
<svg className="text-[#6B2D3E]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.5c-3.5 0-7-2.5-7-7.5C5 9 12 2.5 12 2.5S19 9 19 14c0 5-3.5 7.5-7 7.5Z"></path>
</svg>
<span className="text-xs font-semibold text-[#6B2D3E] tracking-widest uppercase">
                L'Expérience Jacuzzi
              </span>
</div>
<h2 className="sm:text-5xl lg:text-6xl text-5xl font-medium text-[#6B2D3E] tracking-tight mb-4 reveal" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Votre Moment de
              <em className="text-[#A8D5D0]" style={{fontStyle: 'italic'}}>
                Bien-Être
              </em>
<br className=""/>
              dans les moindres détails.
            </h2>
<p className="text-lg text-[#6B5B4E] max-w-2xl mx-auto" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Du jacuzzi à la chromothérapie, des jets massants aux petites
              attentions — chaque détail a été pensé pour vous offrir une
              expérience inoubliable.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-start">
<div className="flex flex-col text-center space-y-3 items-start reveal-left" id="stepTabs">
<button className="step-tab group w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer" data-step="0" style={{background: 'linear-gradient(to right bottom, rgba(107, 45, 62, 0.1), rgba(107, 45, 62, 0.05))', border: '1px solid rgba(107, 45, 62, 0.2)'}}><div className="relative z-10"><div className="flex items-center justify-between mb-2"><span className="text-lg font-medium text-[#6B2D3E]" style={{fontFamily: 'Cormorant Garamond, serif'}}>L'Écrin</span><span className="text-sm font-semibold text-[#A8D5D0]">01</span></div><div className="h-1 w-12 rounded-full bg-[#6B2D3E]/30 mt-2"><div className="h-full rounded-full bg-[#6B2D3E]" style={{width: '100%', transition: 'width 0.5s'}}></div></div></div></button>
<button className="step-tab group w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer" data-step="1" style={{border: '1px solid rgb(232, 224, 216)', background: 'transparent'}}><div className="relative z-10"><div className="flex items-center justify-between"><span className="text-lg font-medium text-[#6B5B4E] group-hover:text-[#6B2D3E] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>Massage</span><span className="text-sm font-semibold text-[#A8D5D0]/60 group-hover:text-[#A8D5D0] transition-colors">02</span></div></div></button>
<button className="step-tab group w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer" data-step="2" style={{border: '1px solid rgb(232, 224, 216)', background: 'transparent'}}><div className="relative z-10"><div className="flex items-center justify-between"><span className="text-lg font-medium text-[#6B5B4E] group-hover:text-[#6B2D3E] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>Confort</span><span className="text-sm font-semibold text-[#A8D5D0]/60 group-hover:text-[#A8D5D0] transition-colors">03</span></div></div></button>
<button className="step-tab group w-full text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer" data-step="3" style={{border: '1px solid rgb(232, 224, 216)', background: 'transparent'}}><div className="relative z-10"><div className="flex items-center justify-between"><span className="text-lg font-medium text-[#6B5B4E] group-hover:text-[#6B2D3E] transition-colors" style={{fontFamily: 'Cormorant Garamond, serif'}}>Hygiène</span><span className="text-sm font-semibold text-[#A8D5D0]/60 group-hover:text-[#A8D5D0] transition-colors">04</span></div></div></button>
</div>
<div className="lg:sticky lg:top-24 reveal-right">
<div className="overflow-hidden border-[#A8D5D0]/20 bg-[#F5EDE3] shadow-lg rounded-t-[3rem] rounded-b-lg border-double border-4 reveal-left map-animate">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Jacuzzi experience" className="transition-all duration-700 hover:scale-105 bg-center w-full h-full object-cover" id="stepImage" src="https://zygomorphic-cyan-gozmu7mg8c.edgeone.app/IMG_2980.jpg"/>
</div>
<div className="text-center pt-8 pr-8 pb-8 pl-8">
<h3 className="sm:text-3xl text-2xl font-medium text-[#6B2D3E] tracking-tight mb-4" id="stepTitle" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Immersion Nocturne</h3>
<p className="text-[#6B5B4E] leading-relaxed mb-6" id="stepDesc">Plongez dans une eau à 38°C alors que la fraîcheur de la soirée s'installe. Notre jacuzzi est équipé d'un système de chromothérapie avec LED subaquatiques vous permettant de choisir l'ambiance qui vous ressemble : bleu apaisant pour la méditation ou ambre chaleureux pour une soirée romantique. L'horizon dégagé vous offre un premier rang pour contempler le coucher du soleil ou la voûte céleste, sans aucun vis-à-vis.</p>
<a className="group inline-flex items-center justify-center overflow-hidden gap-2 transition-all duration-300 hover:bg-[#B8442E] hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(159,57,38,0.5)] min-h-12 boam-btn text-sm font-semibold text-[#FDFBF7] tracking-[0.08em] bg-[#9F3926] border-[#FDFBF7]/20 border-2 rounded-tr-xl pt-3 pr-6 pb-3 pl-6 relative" href="/gallerie" rel="noreferrer" target="_blank">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_1.5s_infinite] via-white/20"></span>
<span className="flex items-center gap-2 relative">
                      Découvre ton jacuzzi
                      <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="overflow-hidden bg-[#FDFBF7] pt-24 pb-24 relative" id="board-games">
<div className="absolute top-10 left-0 w-80 h-80 bg-[#A8D5D0]/5 blob-2 pointer-events-none" style={{position: 'absolute'}}></div>
<div className="sm:px-6 max-w-[75rem] mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9F3926]/10 border border-[#9F3926]/20 mb-6 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none">
<svg className="text-[#9F3926]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" ry="2" width="12" x="2" y="10"></rect>
<path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"></path>
<path d="M6 18h.01"></path>
<path d="M10 14h.01"></path>
<path d="M15 6h.01"></path>
<path d="M18 9h.01"></path>
</svg>
<span className="text-xs font-semibold text-[#9F3926] tracking-widest uppercase">
                Divertissement
              </span>
</div>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-medium text-[#9F3926] tracking-tight mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Soirées Jeux de Société
            </h2>
<p className="text-lg text-[#6B5B4E] max-w-2xl mx-auto" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Prolongez la détente après le jacuzzi avec notre sélection de jeux
              de société. Des moments de partage chaleureux, disponibles
              gratuitement dans votre suite.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-1 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 8s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 12s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6 text-[#9F3926] icon-animated">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  STRATÉGIE
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Défiez votre esprit et élaborez les meilleures tactiques pour
                  remporter la victoire.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-2 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 10s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 14s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6 text-[#9F3926] icon-animated" style={{animation: '0.6s ease 0s 1 normal none running iconBounce'}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5.8 11.3 2 22l10.7-3.79"></path>
<path d="M4 3h.01"></path>
<path d="M22 8h.01"></path>
<path d="M15 2h.01"></path>
<path d="M22 20h.01"></path>
<path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
<path d="m22 13-.82-.33c-.86-.36-1.86.06-2.14.94l-.19.6c-.29.9-1.26 1.42-2.15 1.15l-.26-.08c-.89-.28-1.85.2-2.13 1.08l-.13.43"></path>
<path d="m8.5 15.5 7-7"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  AMBIANCE
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Fous rires garantis avec notre sélection de jeux rapides, fun
                  et résolument conviviaux.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-3 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 9s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 11s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6 text-[#9F3926] icon-animated">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M8 8h.01"></path>
<path d="M16 8h.01"></path>
<path d="M8 16h.01"></path>
<path d="M16 16h.01"></path>
<path d="M12 12h.01"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  CLASSIQUES
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Redécouvrez les grands classiques intemporels qui ont déjà
                  fait leurs preuves.
                </p>
</div>
</div>

<div className="group relative rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white reveal stagger-4 hover-lift hover-glow icon-hover-bounce">
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="dot-animate absolute w-2 h-2 rounded-full bg-[#D4AF37]/40" style={{animation: 'moveDot 11s ease-in-out infinite'}}></div>
<div className="dot-animate absolute w-1.5 h-1.5 rounded-full bg-[#9F3926]/30" style={{animation: 'moveDot 13s ease-in-out infinite reverse'}}></div>
</div>
<div className="z-10 text-center relative">
<span className="inline-flex items-center justify-center h-14 w-14 rounded-t-[2rem] rounded-b-lg bg-[#F5EDE3] border-double border-4 border-[#9F3926]/20 mb-6 text-[#9F3926] icon-animated">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</span>
<h3 className="text-xl font-medium text-[#9F3926] mb-3" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  POUR TOUS
                </h3>
<p className="leading-relaxed text-sm text-[#6B5B4E]">
                  Une sélection variée et accessible, parfaite pour jouer en
                  couple ou entre amis.
                </p>
</div>
</div>
</div>
</div>

</section>















<section className="bg-[#F5EDE3]">
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6">
<div className="text-center mb-14 reveal-on-scroll reveal">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2C1A12] leading-[1.1]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
<span className="text-[#9F3926]">Comment réserver ?</span>
<span className="block text-[#6B5B4E]">Votre séjour en 4 étapes</span>
</h2>
<p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-[#6B5B4E] leading-relaxed">
              Réservez votre évasion en quelques minutes. Simple, rapide et
              sécurisé, tout est pensé pour votre tranquillité.
            </p>
</div>
<div className="relative mt-24 mb-24 items-center justify-center reveal-on-scroll">
<div className="step-line-container-mobile sm:hidden">
<div className="step-line-glow"></div>
</div>
<div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-[#9F3926]/30 overflow-hidden hidden sm:block">
<div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-[#9F3926] via-[#D4A373] to-transparent animate-pulse" style={{width: '200px', animation: 'connectionFlow 3s linear infinite'}}></div>
</div>
<div className="relative mx-auto mt-14 max-w-5xl px-6">
<div className="pointer-events-none relative mb-4">
<div className="absolute -top-0 left-1/2 h-16 w-full max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#9F3926]/40 to-transparent blur-xl"></div>
<div className="absolute -top-0 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#D4A373]/30 to-transparent blur-lg"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="flex flex-col items-center text-center reveal stagger-1">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-[#FDFBF7] bg-gradient-to-tr from-[#9F3926] to-[#D4A373] w-12 h-12 ring-[#FDFBF7]/30 ring-8 shadow-lg rounded-t-full rounded-b-lg">
                      1
                    </span>
</div>
<p className="leading-relaxed text-sm text-[#2C1A12] max-w-xs mt-3 font-semibold">
                    Réservez vos dates
                  </p>
</div>
<div className="flex flex-col items-center text-center reveal stagger-2">
<div className="relative flex w-full h-20 items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-[#FDFBF7] bg-gradient-to-tr from-[#9F3926] to-[#8B3D52] w-12 h-12 ring-[#FDFBF7]/30 ring-8 shadow-lg rounded-t-full rounded-b-lg">
                      2
                    </span>
</div>
<p className="leading-relaxed text-sm text-[#2C1A12] max-w-xs mt-3 font-semibold">
                    Personnalisez votre séjour
                  </p>
</div>
<div className="flex flex-col items-center text-center reveal stagger-3">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-[#FDFBF7] bg-gradient-to-tr from-[#9F3926] to-[#D4A373] w-12 h-12 ring-[#FDFBF7]/30 ring-8 shadow-lg rounded-t-full rounded-b-lg">
                      3
                    </span>
</div>
<p className="mt-3 max-w-xs text-sm text-[#2C1A12] leading-relaxed font-semibold">
                    Confirmation immédiate
                  </p>
</div>
<div className="flex flex-col items-center text-center reveal stagger-4">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-[#FDFBF7] bg-gradient-to-tr from-[#A8D5D0] to-[#9F3926] w-12 h-12 ring-[#FDFBF7]/30 ring-8 shadow-lg rounded-t-full rounded-b-lg">
                      4
                    </span>
</div>
<p className="mt-3 max-w-xs text-sm text-[#2C1A12] leading-relaxed font-semibold">
                    Profitez de votre évasion
                  </p>
</div>
</div>
<div className="mt-10 flex justify-center">
<a className="group inline-flex items-center justify-center overflow-hidden sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(159,57,38,0.5)] min-h-12 boam-btn text-sm font-semibold text-[#FDFBF7] tracking-[0.08em] bg-[#9F3926] border-[#FDFBF7]/20 border-2 rounded-tr-xl pt-3 pr-6 pb-3 pl-6 relative shadow-xl backdrop-blur-md" href="/tarifs">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_1.5s_infinite] via-white/20"></span>
<span className="relative flex items-center gap-2">
                    Réservation
                    <svg className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#FDFBF7] pt-24 pb-24">
<div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="sm:text-5xl text-4xl font-medium text-[#9F3926] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Nous Trouver
            </h2>
<p className="mt-4 text-lg text-[#6B5B4E]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              À quelques minutes de Pairi Daiza, au cœur de Hyon.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">

<div className="overflow-hidden ring-[#A8D5D0]/20 shadow-lg h-[400px] lg:h-full min-h-[400px] rounded-t-[3rem] rounded-b-lg border-double border-4">
<iframe allowfullscreen="" className="w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.5!2d3.94!3d50.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI2JzI0LjAiTiAzwrA1NicyNC4wIkU!5e0!3m2!1sfr!2sbe!4v1700000000000" style={{border: '0'}} width="100%"></iframe>
</div>

<div className="space-y-6 reveal-right">
<div className="ring-[#9F3926]/10 p-8 shadow-sm rounded-t-[3rem] rounded-b-lg border-double border-4 bg-white">
<h3 className="text-2xl font-medium text-[#2C1A12] text-center mb-6" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Infos &amp; Contact
                </h3>
<div className="space-y-5">
<div className="flex items-start gap-4">
<span className="inline-flex h-10 w-10 items-center justify-center bg-[#F5EDE3] flex-shrink-0 rounded-t-full rounded-b-lg">
<svg className="" fill="none" height="20" stroke="#9F3926" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.143Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</span>
<div className="">
<p className="text-sm font-semibold text-[#2C1A12]">
                        Adresse
                      </p>
<p className="text-sm text-[#6B5B4E]">
                        Rue de la Place 37, 7022 Hyon (Mons), Belgique
                      </p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="inline-flex h-10 w-10 items-center justify-center bg-[#F5EDE3] flex-shrink-0 rounded-t-full rounded-b-lg">
<svg className="" fill="none" height="20" stroke="#9F3926" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path>
</svg>
</span>
<div className="">
<p className="text-sm font-semibold text-[#2C1A12]">
                        Téléphone
                      </p>
<a className="text-sm text-[#9F3926] hover:underline" href="tel:+32479975479">
                        +32 479 97 54 59
                      </a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="inline-flex h-10 w-10 items-center justify-center bg-[#F5EDE3] flex-shrink-0 rounded-t-full rounded-b-lg">
<svg className="" fill="none" height="20" stroke="#9F3926" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</span>
<div className="">
<p className="text-sm font-semibold text-[#2C1A12]">Email</p>
<a className="hover:underline text-sm text-[#9F3926]" href="/mailto:services@boamsuite.be">
                        services@boamsuite.be
                      </a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="inline-flex h-10 w-10 items-center justify-center bg-[#F5EDE3] flex-shrink-0 rounded-t-full rounded-b-lg">
<svg className="" fill="none" height="20" stroke="#9F3926" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</span>
<div className="">
<p className="text-sm font-semibold text-[#2C1A12]">
                        Check-in
                      </p>
<p className="text-sm text-[#6B5B4E]">
                        Check-in : 18h30 — Check-out : 11h30
                      </p>
</div>
</div>
</div>
</div>

<div className="bg-[#9F3926] p-8 text-[#FDFBF7] rounded-t-[3rem] rounded-b-lg">
<h3 className="text-xl font-medium text-center mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                  Prêt à Réserver ?
                </h3>
<p className="leading-relaxed text-sm text-[#FDFBF7]/80 text-center mb-6">
                  Offrez-vous une parenthèse enchantée. Réservez dès maintenant
                  et commencez à rêver.
                </p>
<a className="group inline-flex items-center justify-center overflow-hidden gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(159,57,38,0.5)] min-h-12 boam-btn text-sm font-semibold text-[#9F3926] tracking-[0.08em] bg-[#FDFBF7] w-full border-[#FDFBF7]/20 border-2 rounded-tr-xl pt-3 pr-6 pb-3 pl-6 relative" href="/tarifs" rel="noreferrer" target="_blank">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_1.5s_infinite] via-white/20"></span>
<span className="relative flex items-center gap-2">
                    Réserver maintenant
                    <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#FDFBF7] pt-24 pb-24 relative" id="pairi-daiza">
<div className="max-w-[75rem] mx-auto px-4 sm:px-6">

<div className="flex justify-center reveal-scale">

<div className="group relative w-full max-w-[420px] cursor-pointer transition-all duration-500 hover:scale-[1.02] rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20" style={{aspectRatio: '3/5', boxShadow: '0 25px 60px -12px rgba(159, 57, 38, 0.25), 0 8px 24px -8px rgba(44, 26, 18, 0.15)', overflow: 'hidden', isolation: 'isolate'}}>

<div className="bg-center transition-transform duration-700 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce232b9f-bf0f-4fe6-8d41-fe71f6287ee8_1600w.png)] bg-cover z-[2] absolute top-0 right-0 bottom-0 left-0"></div>

<video className="group-hover:opacity-100 transition-opacity duration-700 opacity-0 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc4d99bf-1f7b-4d4a-b7bf-ce5f14a02cb7_1600w.png)] bg-cover z-[2] absolute top-0 right-0 bottom-0 left-0" loop="" muted="" onmouseenter="this.play()" onmouseleave="this.pause(); this.currentTime=0;" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-a-red-panda-sitting-in-a-tree/1080p.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 z-[1]"></div>

<div className="z-[2] group-hover:bg-[#9F3926]/5 transition-colors duration-500 bg-[#9F3926]/10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="sm:p-8 z-[3] pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 left-0" style={{clipPath: 'inset(0 0 0 0 round 3rem 3rem 0.5rem 0.5rem)'}}>

<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center justify-center bg-[#FDFBF7]/20 w-10 h-10 border-[#FDFBF7]/30 border rounded-t-full backdrop-blur-md">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="#FDFBF7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(44, 26, 18)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.143Z"></path>
<circle className="" cx="12" cy="10" r="3"></circle>
</svg>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[#FDFBF7] bg-[#9F3926]/60 backdrop-blur-md border border-[#FDFBF7]/20 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none">

                    15 min
                  </span>
</div>

<h3 className="sm:text-5xl leading-[1.1] text-4xl font-medium text-[#9F3926] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 2px 12px rgba(0,0,0,0.3)'}}>
                  Pairi Daiza
                </h3>

<p className="text-sm font-semibold text-[#9F3926]/80 tracking-wide mt-2">
                  À seulement 15 minutes de Mons
                </p>

<div className="inline-flex gap-2 mt-6 gap-x-2 gap-y-2 items-end">
<span className="leading-none text-5xl font-medium text-[#9F3926] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif', textShadow: '0 2px 12px rgba(0,0,0,0.3)'}}>
                    15
                  </span>
<div className="flex flex-col pb-1">
<span className="leading-none text-lg font-medium text-[#9F3926]/90" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                      min
                    </span>
<span className="text-[10px] uppercase font-semibold text-[#9F3926] tracking-widest">
                      en voiture
                    </span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-[3]">


<a className="group/btn inline-flex items-center justify-center overflow-hidden gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(159,57,38,0.5)] min-h-12 boam-btn text-sm font-semibold text-[#9F3926] tracking-[0.08em] bg-[#FDFBF7] w-full border-[#FDFBF7]/20 border-2 rounded-tr-xl pt-3 pr-6 pb-3 pl-6 relative" href="/tarifs" rel="noreferrer" target="_blank">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#9F3926]/10 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></span>
<span className="relative flex items-center gap-2">
                    Planifier ma visite
                    <svg className="transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 17 17 7"></path>
<path className="" d="M7 7h10v10"></path>
</svg>
</span>
</a>

<div className="mt-4 flex items-center justify-center gap-2">
<svg className="opacity-60 w-[14px] h-[14px]" data-icon-replaced="true" fill="none" height="14" stroke="#FDFBF7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(44, 26, 18)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
<span className="uppercase text-xs font-semibold text-neutral-50 tracking-widest">
                    Brugelette
                  </span>
</div>
</div>
</div>
</div>

</div>
</section>









<section className="overflow-hidden bg-[#F5EDE3] pt-24 pb-24">
<style>
          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }

            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scrollDown {
            0% {
              transform: translateY(-50%);
            }

            100% {
              transform: translateY(0);
            }
          }

          .animate-scroll-up {
            animation: scrollUp 40s linear infinite;
          }

          .animate-scroll-down {
            animation: scrollDown 40s linear infinite;
          }

          .pause-on-hover:hover .animate-scroll-up,
          .pause-on-hover:hover .animate-scroll-down {
            animation-play-state: paused;
          }
        </style>

<div className="max-w-[75rem] mx-auto px-4 sm:px-6 mb-12 text-center">

<span className="text-[#9F3926] font-semibold tracking-widest text-xs uppercase border-double border-4 border-[#9F3926]/20 px-3 py-1 rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none">
            Témoignages
          </span>

<h2 className="sm:text-5xl text-4xl font-medium text-[#9F3926] mt-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Ce que nos hôtes disent de BOAM SUITE
          </h2>

<div className="mt-4 flex items-center justify-center gap-2 text-[#6B5B4E]">
<svg className="text-amber-400" fill="currentColor" height="16" style={{color: '#FBBF24'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<span className="font-bold">4.9/5</span>
<span>•</span>
<span className="">150+ avis</span>
</div>
</div>

<div className="h-[600px] relative w-full max-w-[75rem] mx-auto px-4 sm:px-6 pause-on-hover">

<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F5EDE3] to-transparent z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F5EDE3] to-transparent z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-hidden">



<div className="space-y-6 animate-scroll-up">

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">

<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>

<p className="text-[#2C1A12] italic font-serif">
                  "Un endroit magique. Le jacuzzi, la déco, l'ambiance — tout
                  était parfait. On ne voulait plus partir !"
                </p>
<div className="mt-4 flex items-center gap-3">


<img alt="Sophie &amp; Marc" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>

<div className="font-bold text-[#2C1A12]">
                      Sophie &amp; Marc
                    </div>

<div className="text-xs text-[#6B5B4E]">Bruxelles</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "Le petit-déjeuner livré en suite était délicieux. Un vrai
                  moment de bonheur dès le réveil."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Laura" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="font-bold text-[#2C1A12]">Laura</div>
<div className="text-xs text-[#6B5B4E]">Liège</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "Mieux qu'un hôtel. Privé, calme, luxueux mais abordable. On
                  reviendra !"
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Nadia &amp; Sam" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="font-bold text-[#2C1A12]">Nadia &amp; Sam</div>
<div className="text-xs text-[#6B5B4E]">Charleroi</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "Un endroit magique. Le jacuzzi, la déco, l'ambiance — tout
                  était parfait. On ne voulait plus partir !"
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Sophie &amp; Marc" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="font-bold text-[#2C1A12]">
                      Sophie &amp; Marc
                    </div>
<div className="text-xs text-[#6B5B4E]">Bruxelles</div>
</div>
</div>
</div>
</div>



<div className="animate-scroll-down space-y-6">

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "On a réservé la décoration romantique pour notre
                  anniversaire. Ça a dépassé toutes nos attentes !"
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Amélie" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="font-bold text-[#2C1A12]">Amélie</div>
<div className="text-xs text-[#6B5B4E]">Namur</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "Le jacuzzi est incroyable, surtout le soir avec les bougies.
                  Une vraie bulle de sérénité."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Thomas &amp; Julie" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="font-bold text-[#2C1A12]">
                      Thomas &amp; Julie
                    </div>
<div className="text-xs text-[#6B5B4E]">Anvers</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "L'hôte est super réactive et attentionnée. Tout était
                  impeccable. 10/10."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Kevin" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<div className="font-bold text-[#2C1A12]">Kevin</div>
<div className="text-xs text-[#6B5B4E]">Mons</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "On a réservé la décoration romantique pour notre
                  anniversaire. Ça a dépassé toutes nos attentes !"
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Amélie" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div>
<div className="font-bold text-[#2C1A12]">Amélie</div>
<div className="text-xs text-[#6B5B4E]">Namur</div>
</div>
</div>
</div>
</div>



<div className="space-y-6 animate-scroll-up">

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "La base parfaite pour visiter Pairi Daiza ! Zoo le jour,
                  jacuzzi le soir. Meilleur weekend depuis longtemps."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Carlos &amp; Elena" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="">
<div className="font-bold text-[#2C1A12]">
                      Carlos &amp; Elena
                    </div>
<div className="text-xs text-[#6B5B4E]">Tournai</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "J'ai surpris ma copine pour son anniversaire — ils ont décoré
                  avec des ballons et pétales de roses. Elle a pleuré de joie !"
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Maxime" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="">
<div className="font-bold text-[#2C1A12]">Maxime</div>
<div className="text-xs text-[#6B5B4E]">Bruxelles</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "Propreté irréprochable, décoration sublime. On se sent comme
                  dans un cocon."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Isabelle" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="font-bold text-[#2C1A12]">Isabelle</div>
<div className="text-xs text-[#6B5B4E]">Wavre</div>
</div>
</div>
</div>

<div className="p-6 bg-[#FDFBF7] shadow-sm border-[#A8D5D0]/30 rounded-t-[3rem] rounded-b-lg border-double border-4">
<div className="flex gap-1 mb-3">
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
<svg fill="#FBBF24" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"></path>
</svg>
</div>
<p className="text-[#2C1A12] italic font-serif">
                  "La base parfaite pour visiter Pairi Daiza ! Zoo le jour,
                  jacuzzi le soir. Meilleur weekend depuis longtemps."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Carlos &amp; Elena" className="w-10 h-10 object-cover ring-2 ring-[#A8D5D0]/30 rounded-t-full rounded-b-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<div className="font-bold text-[#2C1A12]">
                      Carlos &amp; Elena
                    </div>
<div className="text-xs text-[#6B5B4E]">Tournai</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 sm:mt-16 max-w-7xl mt-10 mr-auto ml-auto pr-4 pb-16 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-7 reveal-left">
<h1 className="leading-none text-[#2C1A12] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold text-[#9F3926] tracking-tight text-center">
<span className="tracking-tighter" style={{display: 'inline-block'}}>
                  Nadia
                </span>
<span className="block"></span>
<span className="tracking-tight scale-100" style={{display: 'inline-block'}}>
                  Scandari
                </span>
</span>
</h1>
<p className="sm:mt-5 sm:text-2xl leading-relaxed text-base text-[#6B5B4E] tracking-tight text-center max-w-2xl mt-4 mx-auto" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Amoureuse de la culture orientale et du détail, j’ai imaginé un
              lieu unique mêlant élégance, tradition et confort moderne. Mon
              Airbnb est bien plus qu’un logement : c’est une immersion dans une
              atmosphère chaleureuse, aux touches artisanales et aux senteurs
              délicates. J’accueille chaque voyageur avec le cœur, pour
              transformer un simple séjour en véritable voyage sensoriel.
            </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"></div>
</div>
<div className="lg:col-span-5 reveal-right">
<div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(159,57,38,0.12)] rounded-t-[3rem] rounded-b-lg border-double border-4 border-[#9F3926]/20 bg-white">
<img alt="BOAM SUITE — Suite privée avec jacuzzi" className="transition-transform duration-700 hover:scale-105 w-full h-full object-auto absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/491db970-41e1-48d5-ae43-705a1d81c026_800w.jpg"/>
<div className="bg-gradient-to-t from-[#2C1A12]/30 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
<div className="rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none bg-[#2C1A12]/60 backdrop-blur-md border border-[#FDFBF7]/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-amber-700"></div>
<div className="text-base font-semibold text-[#FDFBF7] tracking-tight">
                      350+
                    </div>
</div>
<p className="text-[11px] text-[#FDFBF7]/70 text-left">
                    Avis clients
                  </p>
</div>
<div className="rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none bg-[#2C1A12]/60 backdrop-blur-md border border-[#FDFBF7]/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-amber-700"></div>
<div className="text-base font-semibold tracking-tight text-[#FDFBF7]">
                      4.9/5
                    </div>
</div>
<p className="text-[11px] text-[#FDFBF7]/70 text-left">
                    Note moyenne
                  </p>
</div>
<div className="rounded-tr-xl rounded-bl-xl rounded-tl-none rounded-br-none bg-[#2C1A12]/60 backdrop-blur-md border border-[#FDFBF7]/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-amber-700"></div>
<div className="text-base font-semibold text-[#FDFBF7] tracking-tight">
                      100%
                    </div>
</div>
<p className="text-[11px] text-[#FDFBF7]/70 text-left">
                    A l'écoute
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>






<section className="overflow-hidden bg-[#9F3926] pt-4 pb-4">
<div className="whitespace-nowrap animate-marquee-rtl" id="marquee-scroll" style={{display: 'inline-flex', width: 'max-content'}}>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Jacuzzi Privatif
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Chambre Romantique
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Décoration Sur Mesure
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Ambiance Tamisée
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Terrasse Privée
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Hyon (Mons)
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Jacuzzi Privatif
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Chambre Romantique
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Décoration Sur Mesure
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Ambiance Tamisée
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Terrasse Privée
          </span>
<span className="mx-8 text-white/70 text-sm font-semibold tracking-widest uppercase">
            ✦ Hyon (Mons)
          </span>
</div>
</section>
</main>



<footer className="sm:px-6 bg-[#2C1A12] pt-8 pr-4 pb-8 pl-4">
<div className="max-w-7xl mx-auto">
<div className="relative overflow-hidden ring-1 bg-[#1a0f09] rounded-3xl ring-white/10 text-white">
<div className="absolute inset-0 bg-gradient-to-br from-[#9F3926]/10 via-transparent to-[#9F3926]/5"></div>
<div className="sm:px-6 lg:px-8 lg:py-8 pt-6 pr-3 pb-6 pl-3 relative">

<div className="flex flex-col text-center gap-x-4 gap-y-4 items-center">
<div className="max-w-lg">
<a className="inline-flex items-center gap-2 justify-center" href="#home">
<span className="text-lg font-semibold text-[#9F3926] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
                    BOAM SUITE
                  </span>
</a>
<p className="mt-2 text-xs leading-relaxed text-white/70">
                  Votre évasion privée avec jacuzzi à Hyon (Mons), Belgique. À
                  quelques minutes de Pairi Daiza.
                </p>

<div className="mt-3 flex justify-center">
<a className="group inline-flex overflow-hidden gap-1 hover:bg-[#B8442E] hover:scale-105 hover:shadow-[0_0_10px_-3px_rgba(159,57,38,0.5)] transition-all duration-300 min-h-8 boam-btn items-center justify-center text-xs font-semibold text-[#FDFBF7] tracking-[0.06em] bg-[#9F3926] border-[#FDFBF7]/20 border rounded-tr-lg pt-2 pr-4 pb-2 pl-4 relative" href="/tarifs" target="_blank">
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent group-hover:animate-[shimmer_1.5s_infinite] via-white/20"></span>
<span className="relative flex items-center gap-1">
                      Réserver maintenant
                      <svg className="h-3 w-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>

<div className="mt-4 grid grid-cols-3 gap-2">
<div className="flex flex-col items-center gap-1 bg-white/5 ring-1 ring-white/10 rounded-lg px-2 py-2">
<svg className="text-[#9F3926]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="text-[10px] text-white/70 font-medium">
                      Jacuzzi privé
                    </span>
</div>
<div className="flex flex-col items-center gap-1 bg-white/5 ring-1 ring-white/10 rounded-lg px-2 py-2">
<svg className="text-[#9F3926]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline className="" points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="text-[10px] font-medium text-white/70">
                      25 min Pairi Daiza
                    </span>
</div>
<div className="flex flex-col items-center gap-1 bg-white/5 ring-1 ring-white/10 rounded-lg px-2 py-2">
<svg className="text-[#9F3926]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<span className="text-[10px] text-white/70 font-medium">
                      Annulation gratuite
                    </span>
</div>
</div>
<p className="text-xs font-medium text-[#9F3926] mt-3">
                  ★ 5.0 — Plus de 350 couples satisfaits
                </p>

<div className="mt-3 text-center">
<p className="text-[10px] text-white/60">
                    Rue de la Place 37, 7022 Hyon (Mons), BE ·
                    <a className="transition-colors hover:text-white" href="tel:+32479975479">
                      +32 479 97 54 59
                    </a>
</p>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-2 border-white/10">
<p className="text-[10px] text-white/60">
                © 2024 BOAM SUITE. Tous droits réservés.
              </p>
<div className="flex items-center gap-1">
<a aria-label="Instagram" className="inline-flex items-center justify-center transition-colors hover:bg-white/10 bg-white/5 w-6 h-6 ring-white/10 ring-1 rounded-full" href="https://www.instagram.com/boamsuite/">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center transition-colors hover:bg-white/10 bg-white/5 w-6 h-6 ring-white/10 ring-1 rounded-full" href="https://www.facebook.com/p/Boam-Suite-61574430754100/">
<svg className="text-white/80" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a aria-label="WhatsApp" className="inline-flex items-center justify-center transition-colors hover:bg-white/10 bg-white/5 w-6 h-6 ring-white/10 ring-1 rounded-full" href="https://wa.me/32479975459">
<svg className="text-white/80" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>






<div aria-hidden="true" className="fixed inset-0 z-[9999] hidden lg:hidden" id="boamMobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-500" id="boamOverlay"></div>
<div className="relative h-full w-full sm:w-96 sm:ml-auto flex flex-col bg-gradient-to-br from-[#2C1A12] via-[#3D2519] to-[#2C1A12] transform translate-x-full transition-transform duration-500 ease-out overflow-y-auto" id="boamMenuPanel">
<div className="flex items-center justify-between px-6 pt-5 pb-4 relative z-10">
<div className="menu-logo flex items-center gap-3">
<span className="text-2xl font-semibold text-[#FDFBF7] tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              BOAM SUITE
            </span>
<span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#D4AF37] border border-[#D4AF37]/30 rounded-tr-lg rounded-bl-lg">
              Suite Privée
            </span>
</div>
<button aria-label="Fermer le menu" className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FDFBF7]/10 text-[#FDFBF7] hover:bg-[#FDFBF7]/20 transition-colors z-10" id="boamMenuClose">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<nav className="flex-1 flex flex-col justify-center px-8 py-8 gap-2 relative z-10">
<a className="boam-mobile-link flex items-center gap-4 py-4 px-2 text-[#FDFBF7] no-underline group" href="/home">
<span className="boam-mobile-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
<svg fill="none" height="22" stroke="#FDFBF7" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"></path>
<path d="M12 15v3" strokeLinecap="round"></path>
</svg>
</span>
<span className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Accueil
            </span>
<svg className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="boam-mobile-link flex items-center gap-4 py-4 px-2 text-[#FDFBF7] no-underline group" href="/gallerie">
<span className="boam-mobile-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
<svg fill="none" height="22" stroke="#FDFBF7" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></path>
<path d="m4 7l-.012-1c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937c.49.489.725 1.132.837 2.063v1"></path>
<circle cx="17.5" cy="10.5" r="1.5"></circle>
<path d="m2 14.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 20.5" strokeLinecap="round"></path>
</svg>
</span>
<span className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              La Suite
            </span>
<svg className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="boam-mobile-link flex items-center gap-4 py-4 px-2 text-[#FDFBF7] no-underline group" href="/tarifs">
<span className="boam-mobile-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
<svg fill="none" height="22" stroke="#FDFBF7" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321c-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302s1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45c1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.671-1.344 3.015-4.033 5.704c-2.69 2.69-4.034 4.034-5.705 4.034c-1.67 0-3.015-1.344-5.704-4.033z"></path>
<circle cx="8.607" cy="8.879" r="2" transform="rotate(-45 8.607 8.879)"></circle>
</svg>
</span>
<span className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Tarifs
            </span>
<svg className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="boam-mobile-link flex items-center gap-4 py-4 px-2 text-[#FDFBF7] no-underline group" href="/faq">
<span className="boam-mobile-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
<svg fill="none" height="22" stroke="#FDFBF7" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13" strokeLinecap="round"></path>
<circle cx="12" cy="16" fill="#FDFBF7" r="1"></circle>
</svg>
</span>
<span className="text-3xl font-medium tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              FAQ
            </span>
<svg className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="boam-mobile-link flex items-center gap-4 py-4 px-2 text-[#FDFBF7] no-underline group" href="/contact">
<span className="boam-mobile-icon inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
<svg fill="none" height="22" stroke="#D4AF37" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12h.009m3.982 0H12m3.991 0H16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"></path>
</svg>
</span>
<span className="text-3xl font-medium tracking-tight text-[#D4AF37]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Contact
            </span>
<svg className="ml-auto opacity-60 transition-opacity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
<div className="px-8 pb-8 relative z-10">
<div className="menu-cta mb-6">
<a className="menu-cta-btn group w-full inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(159,57,38,0.6)] min-h-14 text-base font-semibold tracking-[0.08em] text-[#FDFBF7] bg-[#9F3926] relative" href="/tarifs" style={{borderTopLeftRadius: '0', borderTopRightRadius: '0.75rem', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0', border: '2px solid rgba(253,251,247,0.2)'}}>
<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></span>
<span className="relative flex items-center gap-3">
<svg fill="none" height="20" stroke="#FDFBF7" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></path>
<path d="M7 4V2.5M17 4V2.5M2.5 9h19" strokeLinecap="round"></path>
<circle cx="17" cy="17" fill="#FDFBF7" r="1"></circle>
<circle cx="17" cy="13" fill="#FDFBF7" r="1"></circle>
<circle cx="12" cy="17" fill="#FDFBF7" r="1"></circle>
<circle cx="12" cy="13" fill="#FDFBF7" r="1"></circle>
<circle cx="7" cy="17" fill="#FDFBF7" r="1"></circle>
<circle cx="7" cy="13" fill="#FDFBF7" r="1"></circle>
</svg>
                Réserver maintenant
                <svg className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</span>
</a>
</div>
<div className="flex items-center justify-center gap-4 mb-5">
<a aria-label="Instagram" className="menu-social-icon inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 text-[#FDFBF7]/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors" href="https://www.instagram.com/boamsuite/">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
</svg>
</a>
<a aria-label="Facebook" className="menu-social-icon inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 text-[#FDFBF7]/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors" href="https://www.facebook.com/p/Boam-Suite-61574430754100/">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path>
</svg>
</a>
<a aria-label="WhatsApp" className="menu-social-icon inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 text-[#FDFBF7]/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors" href="https://wa.me/32479975479">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></path>
</svg>
</a>
</div>
<div className="menu-footer text-center">
<p className="text-xs text-[#FDFBF7]/40" style={{fontFamily: '\'Nunito\', sans-serif'}}>
              +32 479 97 54 79 · Hyon (Mons), Belgique
            </p>
</div>
</div>
</div>
</div>


    </>
  );
}
