import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        (function() {
          const el = document.getElementById('featureYoyChart');
          if (!el || typeof Chart === 'undefined') return;
          const ctx = el.getContext('2d');
          const grad = ctx.createLinearGradient(0, 0, 0, 120);
          grad.addColorStop(0, 'rgba(163,230,53,0.5)');
          grad.addColorStop(1, 'rgba(163,230,53,0.02)');
          new Chart(el, {
            type: 'line',
            data: {
              labels: ['Jan','Feb','Mar','Apr','May','Jun'],
              datasets: [{
                data: [18, 25, 38, 48, 62, 71],
                borderColor: 'rgba(163,230,53,0.9)',
                backgroundColor: grad,
                tension: 0.35,
                fill: true,
                pointRadius: 0
              },{
                data: [15, 18, 22, 28, 32, 38],
                borderColor: 'rgba(255,255,255,0.25)',
                tension: 0.35,
                fill: false,
                borderDash: [6,6],
                pointRadius: 0
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: {
                x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 } } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { display: false } }
              }
            }
          });
        })();
      


        (function () {
          const cards = [
            { name: 'Sofia Alvarez', role: 'Growth Lead', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Jackson Mitchel', role: 'AI Lead', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80&auto=format&fit=crop' },
            { name: 'John Doe', role: 'Product Head', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Armenia Sean', role: 'Social Media Head', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Maya Patel', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a2d?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Liam Becker', role: 'Platform Engineer', img: 'https://images.unsplash.com/photo-1544005316-04d7f94c1d27?w=1200&q=80&auto=format&fit=crop' }
          ];

          let currentIndex = 2;
          const prevBtn = document.getElementById('teamPrevBtn');
          const nextBtn = document.getElementById('teamNextBtn');
          const carouselCards = document.querySelectorAll('.carousel-card');

          function updateCarousel() {
            carouselCards.forEach((card, i) => {
              const relativePos = i - currentIndex;
              let transform = '';
              let opacity = 1;
              let filter = 'brightness(1)';
              let zIndex = 1;
              let ringClass = 'ring-1 ring-white/10';
              let shadow = '';

              if (relativePos === 0) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                opacity = 1;
                zIndex = 10;
                ringClass = 'ring-2 ring-lime-300/40';
                shadow = '0 20px 60px rgba(163,230,53,0.3)';
              } else if (relativePos === -1) {
                transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
              } else if (relativePos === 1) {
                transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
              } else if (relativePos === -2) {
                transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
              } else if (relativePos === 2) {
                transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
              } else {
                transform = `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15}deg)`;
                opacity = 0;
                filter = 'brightness(0.5)';
                zIndex = 1;
              }

              card.style.transform = transform;
              card.style.opacity = opacity;
              card.style.filter = filter;
              card.style.zIndex = zIndex;
              card.style.boxShadow = shadow;
              card.className = `carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ${ringClass} ${relativePos === 0 ? 'bg-lime-400/10' : ''} transition-all duration-500`;
            });
          }

          if (prevBtn) {
            prevBtn.addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + cards.length) % cards.length;
              updateCarousel();
            });
          }

          if (nextBtn) {
            nextBtn.addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % cards.length;
              updateCarousel();
            });
          }

          updateCarousel();
        })();
      


      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Billing toggle
      const billingToggle = document.getElementById('billingToggle');
      const starterPrice = document.getElementById('starterPrice');
      const proPrice = document.getElementById('proPrice');
      if (billingToggle && starterPrice && proPrice) {
        billingToggle.addEventListener('click', () => {
          const isYearly = billingToggle.getAttribute('aria-pressed') === 'false';
          billingToggle.setAttribute('aria-pressed', isYearly);
          const toggle = billingToggle.querySelector('span');
          if (toggle) {
            toggle.style.transform = isYearly ? 'translateX(1.25rem)' : 'translateX(0)';
          }
          starterPrice.textContent = '$0';
          proPrice.textContent = isYearly ? '$37' : '$49';
        });
      }

      // Intersection Observer for animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.animate-in, .animate-slide-left, .animate-slide-right, .animate-scale').forEach(el => {
        observer.observe(el);
      });

      // Chart.js initialization
      (function() {
        const el = document.getElementById('velocityChart');
        if (!el || typeof Chart === 'undefined') return;
        const ctx = el.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 140);
        gradient.addColorStop(0, 'rgba(163,230,53,0.6)');
        gradient.addColorStop(1, 'rgba(163,230,53,0.02)');
        new Chart(el, {
          type: 'line',
          data: {
            labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8'],
            datasets: [{
              label: 'With Synthesize',
              data: [12, 28, 45, 68, 82, 92, 98, 100],
              borderColor: 'rgba(163,230,53,0.9)',
              backgroundColor: gradient,
              tension: 0.4,
              fill: true,
              pointRadius: 0,
              borderWidth: 2
            },{
              label: 'Traditional',
              data: [8, 12, 18, 22, 28, 32, 38, 42],
              borderColor: 'rgba(255,255,255,0.3)',
              backgroundColor: 'transparent',
              tension: 0.4,
              fill: false,
              borderDash: [8,4],
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                ticks: { color: 'rgba(255,255,255,0.5)', font: { size: 10 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                ticks: { display: false }
              }
            }
          }
        });
      })();

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href !== '#' && href !== '#cta') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Close mobile menu if open
              if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
              }
            }
          }
        });
      });
    


      (function() {
        const lineRiseObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, { threshold: 0.2 });

        document.querySelectorAll('.animate-line-rise, .animate-subtitle-rise').forEach(el => {
          lineRiseObserver.observe(el);
        });
      })();
    


      (function() {
        function wrapWordsForKaraoke(element) {
          if (element.dataset.karaokeWrapped) return;
          const text = element.textContent;
          const words = text.split(/\s+/);
          element.innerHTML = words.map(word => `<span class="karaoke-word">${word}</span>`).join(' ');
          element.classList.add('karaoke-container');
          element.dataset.karaokeWrapped = 'true';
        }

        function animateKaraoke(element) {
          const words = element.querySelectorAll('.karaoke-word');
          if (!words.length) return;

          element.classList.add('is-animating');

          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('is-active');
              setTimeout(() => {
                word.classList.remove('is-active');
                word.classList.add('is-completed');
                if (index === words.length - 1) {
                  element.classList.remove('is-animating');
                }
              }, 150);
            }, index * 80);
          });
        }

        const karaokeObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.karaokeAnimated) {
              entry.target.dataset.karaokeAnimated = 'true';
              animateKaraoke(entry.target);
            }
          });
        }, { threshold: 0.3 });

        function initKaraoke() {
          const selectors = [
            'section h1',
            'section h2',
            'section h3',
            'section p.text-neutral-300',
            'section p.text-neutral-400',
            'section p.text-base',
            'section p.text-lg',
            'section p.text-sm'
          ];

          selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
              if (element.closest('footer')) return;
              if (element.closest('header')) return;
              if (element.closest('form')) return;
              if (element.closest('details')) return;
              if (element.querySelector('svg')) return;
              if (element.querySelector('button')) return;
              if (element.querySelector('a')) return;

              wrapWordsForKaraoke(element);
              karaokeObserver.observe(element);
            });
          });
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initKaraoke);
        } else {
          initKaraoke();
        }
      })();
    


      (function() {
        const titleObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, { threshold: 0.3 });

        document.querySelectorAll('.animate-title-line, .animate-subtitle-line').forEach(el => {
          titleObserver.observe(el);
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute hue-rotate-180 brightness-50 blur-md">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="K7xzrAoejHe2lHXqTJzm"></div>

</div>

<header className="sticky top-0 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="text-lg font-semibold tracking-tight w-32 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad457b1a-a911-459d-9f7b-35c6d76ae781_1600w.png)] bg-cover"></span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#benefits">
              Solutions
            </a>
<a className="hover:text-white transition" href="#why">Platform</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#faqs">Resources</a>
<a className="inline-flex items-center gap-2 rounded-full bg-lime-400/90 px-4 py-2 text-neutral-950 font-medium hover:bg-lime-300 transition" href="#contact">
              Get Started
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</nav>

<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/5" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/5" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2 text-sm text-neutral-300">
<a className="block px-3 py-2 rounded-md hover:bg-white/5" href="#features">
            Features
          </a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5" href="#benefits">
            Solutions
          </a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5" href="#why">
            Platform
          </a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5" href="#pricing">
            Pricing
          </a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5" href="#faqs">
            Resources
          </a>
<a className="block px-3 py-2 rounded-md bg-lime-400/90 text-neutral-950 font-medium hover:bg-lime-300" href="#contact">
            Get Started
          </a>
</div>
</div>
</header>

<section className="overflow-hidden grid-corners relative">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 sm:pt-24 sm:pb-12 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative">
<div className="text-center">
<h1 className="text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.03] font-semibold tracking-tight max-w-5xl mr-auto ml-auto animate-line-rise karaoke-container is-visible animate-title-line" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Build</span>
<span className="karaoke-word">faster</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">AI</span>
<span className="karaoke-word">development</span>
<span className="karaoke-word"></span>
</h1>
<p className="stagger-delay-1 mx-auto mt-5 max-w-2xl text-base sm:text-lg text-neutral-300 animate-subtitle-rise karaoke-container is-visible" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Transform</span>
<span className="karaoke-word">ideas</span>
<span className="karaoke-word">into</span>
<span className="karaoke-word">production‑ready</span>
<span className="karaoke-word">applications</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">intelligent</span>
<span className="karaoke-word">automation</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">modern</span>
<span className="karaoke-word">workflows.</span>
<span className="karaoke-word"></span>
</p>
<div className="animate-in stagger-delay-2 flex flex-col sm:flex-row mt-8 gap-x-4 gap-y-4 items-center justify-center is-visible">
<button className="animated-button" style={{padding: '12px 36px'}}>
<svg className="arr-2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
</svg>
<span className="text">Start Building</span>
<span className="circle"></span>
<svg className="arr-1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
</svg>
</button>
<button className="group relative overflow-hidden cursor-pointer leading-none hover:shadow-2xl text-white bg-white/10 border-white/10 border shadow-sm backdrop-blur" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '16px 32px', minHeight: '56px', minWidth: '160px', borderRadius: '9999px', transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'}}>
<span className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white/5"></span>
<div className="flex relative overflow-hidden font-semibold items-center justify-center" style={{gap: '8px'}}>
<div className="flex items-center justify-center z-10">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
<span className="inline-block transition-colors duration-300 relative z-10 group-hover:text-white font-semibold text-white" style={{fontSize: '16px'}}>
                  View Demo
                </span>
</div>
</button>
</div>
</div>

<div className="absolute top-50 right-2 z-20 animate-in stagger-delay-3 is-visible" style={{animation: 'float 6s ease-in-out infinite'}}>
<div className="relative" style={{width: '140px', height: '140px'}}>

<div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md" style={{background: 'rgba(255, 255, 255, 0.03)', animation: 'rotate 20s linear infinite'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-lime-300/30 backdrop-blur-xl relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.15) 0%, rgba(163, 230, 53, 0.05) 100%)', boxShadow: '0 8px 32px rgba(163, 230, 53, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="text-lime-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{filter: 'drop-shadow(0 2px 8px rgba(163, 230, 53, 0.5))'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
</div>
</div>

<div className="absolute w-3 h-3 rounded-full bg-lime-400/60 backdrop-blur-sm ring-1 ring-lime-300/40" style={{top: '10px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 12px rgba(163, 230, 53, 0.6)', animation: 'orbit1 8s linear infinite'}}></div>
<div className="absolute w-2.5 h-2.5 rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/30" style={{top: '50%', right: '10px', transform: 'translateY(-50%)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)', animation: 'orbit2 10s linear infinite'}}></div>
<div className="absolute w-2 h-2 rounded-full bg-lime-300/50 backdrop-blur-sm ring-1 ring-lime-300/30" style={{bottom: '10px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(163, 230, 53, 0.5)', animation: 'orbit3 12s linear infinite'}}></div>
</div>

</div>

<div className="absolute bottom-20 left-2 z-20 animate-in stagger-delay-4 is-visible" style={{animation: 'float 6s ease-in-out infinite 1s'}}>
<div className="relative" style={{width: '140px', height: '140px'}}>

<div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md" style={{background: 'rgba(255, 255, 255, 0.03)', animation: 'rotate 20s linear infinite reverse'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-lime-300/30 backdrop-blur-xl relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.15) 0%, rgba(163, 230, 53, 0.05) 100%)', boxShadow: '0 8px 32px rgba(163, 230, 53, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="text-lime-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{filter: 'drop-shadow(0 2px 8px rgba(163, 230, 53, 0.5))'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute w-3 h-3 rounded-full bg-lime-400/60 backdrop-blur-sm ring-1 ring-lime-300/40" style={{top: '10px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 12px rgba(163, 230, 53, 0.6)', animation: 'orbit1 8s linear infinite 0.5s'}}></div>
<div className="absolute w-2.5 h-2.5 rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/30" style={{top: '50%', right: '10px', transform: 'translateY(-50%)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)', animation: 'orbit2 10s linear infinite 0.5s'}}></div>
<div className="absolute w-2 h-2 rounded-full bg-lime-300/50 backdrop-blur-sm ring-1 ring-lime-300/30" style={{bottom: '10px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(163, 230, 53, 0.5)', animation: 'orbit3 12s linear infinite 0.5s'}}></div>
</div>

<div className="mt-4 rounded-xl border border-white/10 backdrop-blur-md px-3 py-2 text-xs" style={{background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'}}>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div>
<span className="text-neutral-300">Code Generation</span>
</div>
</div>
</div>
<style>
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit1 {
            0% { transform: translateX(-50%) rotate(0deg) translateX(70px) rotate(0deg); }
            100% { transform: translateX(-50%) rotate(360deg) translateX(70px) rotate(-360deg); }
          }
          @keyframes orbit2 {
            0% { transform: translateY(-50%) rotate(120deg) translateX(70px) rotate(-120deg); }
            100% { transform: translateY(-50%) rotate(480deg) translateX(70px) rotate(-480deg); }
          }
          @keyframes orbit3 {
            0% { transform: translateX(-50%) rotate(240deg) translateX(70px) rotate(-240deg); }
            100% { transform: translateX(-50%) rotate(600deg) translateX(70px) rotate(-600deg); }
          }
        </style>

<div className="animate-in stagger-delay-3 sm:mt-20 is-visible mt-20">
<div className="border-white/10 border rounded-2xl pt-1 pr-1 pb-1 pl-1 relative" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="sm:p-6 ring-white/10 ring-1 rounded-xl pt-4 pr-4 pb-4 pl-4" style={{background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-full gap-x-6 gap-y-6">
<div className="aspect-[16/10] overflow-hidden rounded-xl ring-white/10 ring-1 relative w-full">
<img alt="3D render" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/95b3125e-9329-4d1e-a44f-a163a91e2ed6_1600w.webp"/>
<div className="bg-gradient-to-tr from-lime-400/10 via-transparent to-transparent w-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10" style={{background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
<svg className="lucide lucide-sparkles h-4 w-4 text-lime-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                    AI Generation
                  </div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap gap-1 sm:gap-2 z-10 justify-center px-2 w-full max-w-full">
<div className="rounded-lg border border-white/20 backdrop-blur-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs" style={{background: 'rgba(0, 0, 0, 0.4)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center gap-1.5 sm:gap-2">
<svg className="text-lime-300 sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-white font-medium whitespace-nowrap">
                          24 Tasks
                        </span>
</div>
</div>
<div className="text-[10px] sm:text-xs border-white/20 border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-3 sm:pb-2 sm:pl-3 backdrop-blur-xl" style={{background: 'rgba(0, 0, 0, 0.4)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center gap-1.5 sm:gap-2">
<svg className="text-lime-300 sm:w-3.5 sm:h-3.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
<span className="text-white font-medium whitespace-nowrap">
                          98% Uptime
                        </span>
</div>
</div>
<div className="rounded-lg border border-white/20 backdrop-blur-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs" style={{background: 'rgba(0, 0, 0, 0.4)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center gap-1.5 sm:gap-2">
<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lime-400"></div>
<span className="text-white font-medium whitespace-nowrap">
                          Live
                        </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col w-full">
<h3 className="text-xl font-semibold tracking-tight animate-line-rise karaoke-container is-visible" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Deploy</span>
<span className="karaoke-word">5x</span>
<span className="karaoke-word">faster</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 animate-subtitle-rise karaoke-container is-visible" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Generate</span>
<span className="karaoke-word">production‑ready</span>
<span className="karaoke-word">code,</span>
<span className="karaoke-word">infrastructure,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">workflows</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">intelligent</span>
<span className="karaoke-word">automation.</span>
<span className="karaoke-word"></span>
</p>
<div className="mt-5 rounded-xl border border-white/10 p-3 sm:p-4 w-full" style={{background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}}>
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="min-w-0">
<p className="text-xs sm:text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Development</span>
<span className="karaoke-word">Speed</span>
<span className="karaoke-word"></span>
</p>
<p className="text-base sm:text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Time</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">Production</span>
<span className="karaoke-word"></span>
</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/15 px-2 py-1 text-xs text-lime-300 ring-1 ring-lime-300/20 whitespace-nowrap">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                        +387%
                      </span>
</div>
<div className="mt-3 w-full">
<div className="h-28 sm:h-36 w-full overflow-hidden rounded-lg ring-1 ring-white/10" style={{background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)'}}>
<div className="p-2 h-full">
<div className="relative h-full w-full">
<canvas height="192" id="velocityChart" style={{display: 'block', width: '243px', height: '96px', boxSizing: 'border-box'}} width="486"></canvas>
</div>
</div>
</div>
<p className="mt-2 text-[10px] sm:text-[11px] text-neutral-400 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Comparison</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">traditional</span>
<span className="karaoke-word">development</span>
<span className="karaoke-word">over</span>
<span className="karaoke-word">8</span>
<span className="karaoke-word">weeks.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 sm:py-24 pt-8 pb-8 relative grid-corners">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">
            Powering innovation at
          </p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                  Velocity
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">
                  Quantum
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">
                  Horizon
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">
                  Catalyst
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">
                  Zenith
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Axiom</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">Pulse</span>
</div>
</div>
<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">
                  Velocity
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">
                  Quantum
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">
                  Horizon
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">
                  Catalyst
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">
                  Zenith
                </span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">Axiom</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">Pulse</span>
</div>
</div>
</div>
</div>
</div>
<style>
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
        }
        .ticker-track:hover {
            animation-play-state: paused;
        }
      </style>
</section>

<section className="sm:py-28 pt-20 pb-20 relative grid-corners" id="features">
<div className="grid-corners-bottom"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="animate-in mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight animate-line-rise karaoke-container animate-title-line" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Everything</span>
<span className="karaoke-word">you</span>
<span className="karaoke-word">need</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">ship</span>
<span className="karaoke-word">faster</span>
<span className="karaoke-word"></span>
</h2>
<p className="mt-3 text-neutral-300 karaoke-container animate-subtitle-line" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">From</span>
<span className="karaoke-word">concept</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">deployment,</span>
<span className="karaoke-word">fully</span>
<span className="karaoke-word">automated</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">observable.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="animate-in stagger-delay-1 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-lg hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover:scale-[1.02]">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 ring-1 ring-lime-300/20">
<svg className="lucide lucide-sparkles h-5 w-5 text-lime-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Intelligent</span>
<span className="karaoke-word">Code</span>
<span className="karaoke-word">Generation</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Context-aware</span>
<span className="karaoke-word">AI</span>
<span className="karaoke-word">generates</span>
<span className="karaoke-word">clean,</span>
<span className="karaoke-word">maintainable</span>
<span className="karaoke-word">code</span>
<span className="karaoke-word">following</span>
<span className="karaoke-word">best</span>
<span className="karaoke-word">practices.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="animate-in stagger-delay-2 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-lg">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 ring-1 ring-lime-300/20">
<svg className="lucide lucide-workflow h-5 w-5 text-lime-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Infrastructure</span>
<span className="karaoke-word">Automation</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Databases,</span>
<span className="karaoke-word">APIs,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">cloud</span>
<span className="karaoke-word">resources</span>
<span className="karaoke-word">configured</span>
<span className="karaoke-word">automatically</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">zero</span>
<span className="karaoke-word">configuration.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="animate-in stagger-delay-3 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-lg">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 ring-1 ring-lime-300/20">
<svg className="lucide lucide-monitor-check h-5 w-5 text-lime-300" data-lucide="monitor-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 10 2 2 4-4"></path>
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<path d="M12 17v4"></path>
<path d="M8 21h8"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Live</span>
<span className="karaoke-word">Preview</span>
<span className="karaoke-word">Environments</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Instant</span>
<span className="karaoke-word">deployments</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">shareable</span>
<span className="karaoke-word">URLs</span>
<span className="karaoke-word">for</span>
<span className="karaoke-word">every</span>
<span className="karaoke-word">change</span>
<span className="karaoke-word">you</span>
<span className="karaoke-word">make.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="animate-in stagger-delay-4 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-lg">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 ring-1 ring-lime-300/20">
<svg className="lucide lucide-lock h-5 w-5 text-lime-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Enterprise-grade</span>
<span className="karaoke-word">Security</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Built-in</span>
<span className="karaoke-word">authentication,</span>
<span className="karaoke-word">authorization,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">compliance</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">audit</span>
<span className="karaoke-word">trails.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="animate-in stagger-delay-5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-lg">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 ring-1 ring-lime-300/20">
<svg className="lucide lucide-rocket h-5 w-5 text-lime-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Performance</span>
<span className="karaoke-word">Optimized</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Automatic</span>
<span className="karaoke-word">caching,</span>
<span className="karaoke-word">CDN</span>
<span className="karaoke-word">distribution,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">optimization</span>
<span className="karaoke-word">for</span>
<span className="karaoke-word">lightning</span>
<span className="karaoke-word">speed.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="animate-in stagger-delay-6 border-gradient before:rounded-lg border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 ring-1 ring-lime-300/20">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-lime-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Real-time</span>
<span className="karaoke-word">Analytics</span>
<span className="karaoke-word"></span>
</h3>
<p className="mt-2 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Monitor</span>
<span className="karaoke-word">performance,</span>
<span className="karaoke-word">errors,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">user</span>
<span className="karaoke-word">behavior</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">built-in</span>
<span className="karaoke-word">dashboards.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
</div>
</section>

<section className="sm:py-24 border-white/5 border-t pt-24 pb-24 relative grid-corners" id="benefits">
<div className="grid-corners-bottom"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="animate-in text-center max-w-3xl mx-auto px-4">
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2 py-1 text-[11px] text-lime-300 ring-1 ring-lime-300/20 tracking-tight uppercase animate-line-rise">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
            Solutions
          </span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">The</span>
<span className="karaoke-word">complete</span>
<span className="karaoke-word">development</span>
<span className="karaoke-word">platform</span>
<span className="karaoke-word"></span>
</h2>
<p className="mx-auto mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base karaoke-container animate-subtitle-line" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Design,</span>
<span className="karaoke-word">build,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">scale</span>
<span className="karaoke-word">all</span>
<span className="karaoke-word">in</span>
<span className="karaoke-word">one</span>
<span className="karaoke-word">integrated</span>
<span className="karaoke-word">environment.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="space-y-8">
<div className="animate-slide-left">
<div className="flex items-start gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-lime-400/15 ring-1 ring-lime-300/20 text-lime-300">
<svg className="lucide lucide-command h-3.5 w-3.5" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
</svg>
</span>
<div className="">
<p className="font-medium">Natural language to code</p>
<p className="text-neutral-300 text-sm karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Describe</span>
<span className="karaoke-word">features</span>
<span className="karaoke-word">in</span>
<span className="karaoke-word">plain</span>
<span className="karaoke-word">English</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">watch</span>
<span className="karaoke-word">them</span>
<span className="karaoke-word">come</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">life.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 p-5 relative overflow-hidden hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover:scale-[1.02]">
<div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{background: 'radial-gradient(800px 300px at 20% 10%, rgba(163,230,53,0.25), transparent 40%), radial-gradient(600px 260px at 80% 120%, rgba(163,230,53,0.12), transparent 40%)'}}></div>
<div className="relative">
<p className="text-xl sm:text-2xl font-semibold tracking-tight">
                    Build with
                    <span className="text-lime-300">Voice Commands</span>
</p>
<div className="mt-4 flex items-center gap-2 rounded-full bg-black/50 ring-1 ring-white/10 p-1.5">
<div className="flex-1 rounded-full border border-lime-300/40 bg-neutral-950/40 px-4 py-2 text-sm text-neutral-300">
                      Create a user dashboard with charts...
                    </div>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-neutral-950 hover:bg-lime-300 transition">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="animate-slide-left stagger-delay-2">
<div className="flex items-start gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-lime-400/15 ring-1 ring-lime-300/20 text-lime-300">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</span>
<div>
<p className="font-medium">Track growth metrics in real-time</p>
<p className="text-neutral-300 text-sm karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Visualize</span>
<span className="karaoke-word">performance</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">interactive</span>
<span className="karaoke-word">dashboards.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word">Monthly</span>
<span className="karaoke-word">Growth</span>
</p>
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/15 px-2 py-1 text-xs text-lime-300 ring-1 ring-lime-300/20">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                    +42%
                  </span>
</div>
<div className="mt-3 h-28 w-full overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/10">
<div className="p-2">
<div className="relative h-20 w-full">
<canvas height="160" id="featureYoyChart" style={{display: 'block', boxSizing: 'border-box', height: '80px', width: '438px'}} width="876"></canvas>
</div>
</div>
</div>
<p className="mt-2 text-[11px] text-neutral-400 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">User</span>
<span className="karaoke-word">acquisition</span>
<span className="karaoke-word">vs.</span>
<span className="karaoke-word">revenue</span>
<span className="karaoke-word">growth</span>
<span className="karaoke-word">trends.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
</div>
<div className="space-y-8">
<div className="animate-slide-right">
<div className="flex items-start gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-lime-400/15 ring-1 ring-lime-300/20 text-lime-300">
<svg className="lucide lucide-file-code h-3.5 w-3.5" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12.5 8 15l2 2.5"></path>
<path d="m14 12.5 2 2.5-2 2.5"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
</svg>
</span>
<div>
<p className="font-medium">Export production-ready assets</p>
<p className="text-neutral-300 text-sm karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Download</span>
<span className="karaoke-word">complete</span>
<span className="karaoke-word">codebases</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">documentation</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">one</span>
<span className="karaoke-word">click.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 p-5 relative overflow-hidden">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-400/20 blur-3xl"></div>
<div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
<div className="sm:col-span-1 flex items-center justify-center">
<div className="relative h-24 w-24 rounded-full bg-lime-400/20 ring-1 ring-lime-300/20">
<div className="absolute inset-4 rounded-full bg-lime-400/20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-10 w-10 rounded-full bg-black/50 ring-1 ring-white/10 flex items-center justify-center text-lime-300">
<svg className="lucide lucide-download h-5 w-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="sm:col-span-2">
<p className="font-medium">Complete project ownership</p>
<p className="mt-1 text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Your</span>
<span className="karaoke-word">code,</span>
<span className="karaoke-word">your</span>
<span className="karaoke-word">repository,</span>
<span className="karaoke-word">your</span>
<span className="karaoke-word">infrastructure.</span>
<span className="karaoke-word">Export</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">host</span>
<span className="karaoke-word">anywhere</span>
<span className="karaoke-word">you</span>
<span className="karaoke-word">want.</span>
<span className="karaoke-word"></span>
</p>
<div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5 transition cursor-pointer">
<svg className="lucide lucide-package h-3.5 w-3.5" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
<path d="M12 22V12"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<path d="m7.5 4.27 9 5.15"></path>
</svg>
                      Export project
                    </div>
</div>
</div>
</div>
</div>
<div className="animate-slide-right stagger-delay-2">
<div className="flex items-start gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-lime-400/15 ring-1 ring-lime-300/20 text-lime-300">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</span>
<div className="">
<p className="font-medium">Centralized feedback system</p>
<p className="text-neutral-300 text-sm karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Collect,</span>
<span className="karaoke-word">prioritize,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">action</span>
<span className="karaoke-word">user</span>
<span className="karaoke-word">feedback</span>
<span className="karaoke-word">automatically.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 p-5">
<div className="space-y-3">
<div className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/15 text-lime-300 ring-1 ring-lime-300/20">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<div className="flex-1">
<p className="text-sm font-medium karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">AI-powered</span>
<span className="karaoke-word">categorization</span>
<span className="karaoke-word"></span>
</p>
<p className="text-xs text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Automatically</span>
<span className="karaoke-word">tags</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">groups</span>
<span className="karaoke-word">similar</span>
<span className="karaoke-word">requests</span>
<span className="karaoke-word">for</span>
<span className="karaoke-word">easier</span>
<span className="karaoke-word">prioritization.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text ring-1 ring-white/10">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</span>
<div className="flex-1">
<p className="text-sm font-medium karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word">Priority</span>
<span className="karaoke-word">notifications</span>
</p>
<p className="text-xs text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Get</span>
<span className="karaoke-word">alerted</span>
<span className="karaoke-word">when</span>
<span className="karaoke-word">critical</span>
<span className="karaoke-word">issues</span>
<span className="karaoke-word">need</span>
<span className="karaoke-word">immediate</span>
<span className="karaoke-word">attention.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
<div className="h-full w-3/4 bg-lime-400"></div>
</div>
<p className="text-[11px] text-neutral-400 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">78%</span>
<span className="karaoke-word">of</span>
<span className="karaoke-word">feedback</span>
<span className="karaoke-word">actioned</span>
<span className="karaoke-word">this</span>
<span className="karaoke-word">quarter.</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="sm:py-24 border-white/5 border-t pt-24 pb-24 relative grid-corners" id="integrations">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2 py-1 text-[11px] text-lime-300 ring-1 ring-lime-300/20 uppercase tracking-tight">
<svg className="lucide lucide-plug h-3.5 w-3.5" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5"></path>
<path d="M9 8V2"></path>
<path d="M15 8V2"></path>
<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
</svg>
            Integrations
          </span>
<h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Connect</span>
<span className="karaoke-word">your</span>
<span className="karaoke-word">entire</span>
<span className="karaoke-word">tech</span>
<span className="karaoke-word">stack</span>
<span className="karaoke-word"></span>
</h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-300 karaoke-container animate-subtitle-line" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">One</span>
<span className="karaoke-word">platform,</span>
<span className="karaoke-word">infinite</span>
<span className="karaoke-word">possibilities.</span>
<span className="karaoke-word">Sync</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">all</span>
<span className="karaoke-word">your</span>
<span className="karaoke-word">favorite</span>
<span className="karaoke-word">tools.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="relative mx-auto mt-12 max-w-4xl">
<div className="animate-in stagger-delay-1 flex items-center justify-center gap-6 sm:gap-10">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-github h-5 w-5 text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-slack h-5 w-5 text-white" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-trello h-5 w-5 text-white" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<rect height="9" width="3" x="7" y="7"></rect>
<rect height="5" width="3" x="14" y="7"></rect>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-figma h-5 w-5 text-white" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-database h-5 w-5 text-white" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-cloud h-5 w-5 text-white" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</span>
</div>
<div className="animate-in stagger-delay-2 relative mt-6 h-64">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<circle cx="150" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="270" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="390" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="510" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="630" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="750" cy="30" fill="#A3E635" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#A3E635" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/20 ring-2 ring-lime-300/40" style={{boxShadow: '0 0 20px rgba(163,230,53,0.6), 0 0 40px rgba(163,230,53,0.3)'}}>
<svg className="lucide lucide-zap h-6 w-6 text-lime-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</span>
</div>
</div>
</div>
<div className="animate-in stagger-delay-3 mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-3 flex-wrap text-sm">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-workflow h-4 w-4 text-lime-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
<span className="font-medium">Instant sync</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-lime-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-lime-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-medium">Enterprise security</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-lime-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-gauge h-4 w-4 text-lime-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
<span className="font-medium">Real-time updates</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-lime-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-mouse-pointer-click h-4 w-4 text-lime-300" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.1 12 6"></path>
<path d="m5.1 8-2.9-.8"></path>
<path d="m6 12-1.9 2"></path>
<path d="M7.2 2.2 8 5.1"></path>
<path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
</svg>
<span className="font-medium">One-click setup</span>
</div>
</div>
</div>
</div>
</section>
<section className="sm:py-24 grid-corners border-white/5 border-t pt-24 pb-24 relative">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="animate-slide-left">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Concept.</span>
<span className="karaoke-word">Code.</span>
<span className="karaoke-word">Deploy.</span>
<span className="karaoke-word"></span>
</h2>
<p className="mt-3 text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Transform</span>
<span className="karaoke-word">hours</span>
<span className="karaoke-word">of</span>
<span className="karaoke-word">manual</span>
<span className="karaoke-word">work</span>
<span className="karaoke-word">into</span>
<span className="karaoke-word">minutes.</span>
<span className="karaoke-word">Maintain</span>
<span className="karaoke-word">full</span>
<span className="karaoke-word">control</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">human</span>
<span className="karaoke-word">oversight</span>
<span className="karaoke-word">at</span>
<span className="karaoke-word">every</span>
<span className="karaoke-word">step.</span>
<span className="karaoke-word"></span>
</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-lime-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Battle-tested code and architecture patterns
              </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-lime-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Version control with instant rollback capability
              </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle-2 mt-0.5 h-5 w-5 text-lime-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Integrated testing and performance monitoring
              </li>
</ul>
<div className="mt-6 inline-flex gap-3">
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-neutral-200 hover:bg-white/5 transition" href="#pricing">
<svg className="lucide lucide-credit-card h-5 w-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                View plans
              </a>
<a className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-neutral-950 font-medium hover:bg-lime-300 transition" href="#cta">
                Start building
                <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</a>
</div>
</div>
<div className="animate-slide-right relative overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Minimal workspace" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3691670-52f5-409f-a1aa-c66aabcff3e5_1600w.png"/>
<div className="bg-gradient-to-tr from-black/50 via-transparent to-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 p-4 ring-1 ring-white/10">
<div className="flex text-sm items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bot h-4 w-4 text-lime-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span className="font-medium">AI Assistant</span>
</div>
<span className="text-xs text-neutral-400">
                  24 tasks · 8 running
                </span>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30" style={{animation: 'compassFloat 8s ease-in-out infinite'}}>
<div className="relative" style={{width: '180px', height: '180px'}}>

<div className="absolute inset-0 rounded-full border-2 border-white/20 backdrop-blur-xl" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03))', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)', animation: 'compassRotate 20s linear infinite'}}>

<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute inset-6 rounded-full border border-lime-300/30 backdrop-blur-md" style={{background: 'rgba(163, 230, 53, 0.08)', boxShadow: '0 0 20px rgba(163, 230, 53, 0.3), inset 0 1px 4px rgba(255, 255, 255, 0.15)', animation: 'compassPulse 4s ease-in-out infinite'}}>

<div className="absolute top-2 left-1/2 -translate-x-1/2 text-lime-300 text-xs font-semibold" style={{textShadow: '0 0 8px rgba(163, 230, 53, 0.8)'}}>
                N
              </div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 text-xs">
                S
              </div>
<div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                E
              </div>
<div className="absolute left-2 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                W
              </div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-20 h-20 rounded-full border-2 border-lime-300/40 backdrop-blur-xl overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(163, 230, 53, 0.25) 0%, rgba(163, 230, 53, 0.08) 100%)', boxShadow: '0 12px 40px rgba(163, 230, 53, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.3)'}}>

<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center" style={{animation: 'compassNeedle 6s ease-in-out infinite'}}>
<div className="relative w-1 h-12" style={{transformOrigin: 'center center'}}>

<div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-lime-400 to-lime-300" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', filter: 'drop-shadow(0 2px 4px rgba(163, 230, 53, 0.6))'}}></div>

<div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/60 to-white/30" style={{clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white ring-1 ring-lime-300/50" style={{boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'}}></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<svg className="text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m16.2 7.8-2 6.3-6.4 2.1 2-6.3z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute w-2 h-2 rounded-full bg-lime-400/80 backdrop-blur-sm ring-1 ring-lime-300/50" style={{top: '15px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(163, 230, 53, 0.8)', animation: 'orbitCompass1 10s linear infinite'}}></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-white/60 backdrop-blur-sm ring-1 ring-white/40" style={{top: '50%', right: '15px', transform: 'translateY(-50%)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)', animation: 'orbitCompass2 12s linear infinite'}}></div>
<div className="absolute w-2 h-2 rounded-full bg-lime-300/60 backdrop-blur-sm ring-1 ring-lime-300/40" style={{bottom: '15px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(163, 230, 53, 0.6)', animation: 'orbitCompass3 14s linear infinite'}}></div>
</div>

<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 backdrop-blur-md px-4 py-2 text-xs whitespace-nowrap" style={{background: 'rgba(0, 0, 0, 0.4)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-lime-400" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
<span className="text-neutral-300 font-medium">
                Navigation Active
              </span>
</div>
</div>
</div>
<style>
          @keyframes compassFloat {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-20px); }
          }
          @keyframes compassRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes compassPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.02); }
          }
          @keyframes compassNeedle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(15deg); }
            75% { transform: rotate(-15deg); }
          }
          @keyframes orbitCompass1 {
            0% { transform: translateX(-50%) rotate(0deg) translateX(90px) rotate(0deg); }
            100% { transform: translateX(-50%) rotate(360deg) translateX(90px) rotate(-360deg); }
          }
          @keyframes orbitCompass2 {
            0% { transform: translateY(-50%) rotate(120deg) translateX(90px) rotate(-120deg); }
            100% { transform: translateY(-50%) rotate(480deg) translateX(90px) rotate(-480deg); }
          }
          @keyframes orbitCompass3 {
            0% { transform: translateX(-50%) rotate(240deg) translateX(90px) rotate(-240deg); }
            100% { transform: translateX(-50%) rotate(600deg) translateX(90px) rotate(-600deg); }
          }
        </style>
</div>
</section>

<section className="sm:py-24 grid-corners pt-16 pb-16 relative" id="why">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in mx-auto max-w-3xl text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2 py-1 text-[11px] text-lime-300 ring-1 ring-lime-300/20 uppercase tracking-tight">
<svg className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
            Team
          </span>
<h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mt-4 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Meet</span>
<span className="karaoke-word">the</span>
<span className="karaoke-word">team</span>
<span className="karaoke-word">that</span>
<span className="karaoke-word">talks</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">AI</span>
<span className="karaoke-word">like</span>
<span className="karaoke-word">it's</span>
<span className="karaoke-word">a</span>
<span className="karaoke-word">pet</span>
<span className="karaoke-word"></span>
</h2>
<p className="mx-auto mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base karaoke-container animate-subtitle-line" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">The</span>
<span className="karaoke-word">humans</span>
<span className="karaoke-word">behind</span>
<span className="karaoke-word">the</span>
<span className="karaoke-word">models</span>
<span className="karaoke-word">builders,</span>
<span className="karaoke-word">dreamers,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">delightful</span>
<span className="karaoke-word">nerds.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="flex mt-16 relative items-center justify-center" style={{perspective: '1200px'}}>
<button aria-label="Previous" className="absolute left-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamPrevBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
<div className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="carouselTrack" style={{transformStyle: 'preserve-3d'}}>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="0" style={{transform: 'translateX(-360px) scale(0.85) rotateY(20deg)', opacity: '0.4', filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e22892ae-580d-4f98-b6c4-47cacdd0c9d3_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-white">Growth Lead</span>
</div>
<p className="text-xl font-semibold text-white tracking-tight">
                    John Alvarez
                  </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="1" style={{transform: 'translateX(-180px) scale(0.9) rotateY(10deg)', opacity: '0.6', filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/118fb7f9-cdd4-4a2a-89bd-3170e009a9a4_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
<span className="text-white">AI Lead</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
                    Jackson Mitchel
                  </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-2 ring-lime-300/40 bg-lime-400/10 transition-all duration-500" data-index="2" style={{transform: 'translateX(0px) scale(1) rotateY(0deg)', opacity: '1', zIndex: '10', boxShadow: 'rgba(163, 230, 53, 0.3) 0px 20px 60px', filter: 'brightness(1)'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5e1c1b8c-f44b-4a81-abaf-0241f388c8ff_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
<div className="absolute top-6 right-6">
<div className="inline-flex items-center gap-1 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-medium text-neutral-950">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
                    Featured
                  </div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs ring-1 ring-white/20 backdrop-blur-md mb-4">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="text-white">Product Head</span>
</div>
<p className="text-3xl font-bold text-white tracking-tight mb-1">
                    Jenny Doe
                  </p>
<p className="text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Leading</span>
<span className="karaoke-word">product</span>
<span className="karaoke-word">vision</span>
<span className="karaoke-word">&amp;</span>
<span className="karaoke-word">strategy</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="3" style={{transform: 'translateX(180px) scale(0.9) rotateY(-10deg)', opacity: '0.6', filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c1697f5-cb65-4307-a9e2-c0560b4e3a68_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
<span className="text-white">Social Media Head</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
                    Armenia Sean
                  </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="4" style={{transform: 'translateX(360px) scale(0.85) rotateY(-20deg)', opacity: '0.4', filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11c70762-35c0-4a1d-bdd9-40176c7ee60b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<span className="text-white">Design Lead</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
                    Maya Patel
                  </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="5" style={{transform: 'translateX(540px) scale(0.75) rotateY(-45deg)', opacity: '0', filter: 'brightness(0.5)', zIndex: '1'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
<path d="m16 15-3-3 3-3"></path>
</svg>
<span className="text-white">Platform Engineer</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
                    Liam Becker
                  </p>
</div>
</div>
</div>
</div>
<button aria-label="Next" className="absolute right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamNextBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</section>

<section className="py-16 sm:py-24 border-t border-white/5 relative grid-corners" id="pricing">
<div className="grid-corners-bottom"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="animate-in mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Transparent</span>
<span className="karaoke-word">pricing</span>
<span className="karaoke-word">for</span>
<span className="karaoke-word">every</span>
<span className="karaoke-word">team</span>
<span className="karaoke-word"></span>
</h2>
<p className="mt-3 text-neutral-300 karaoke-container animate-subtitle-line" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Start</span>
<span className="karaoke-word">free.</span>
<span className="karaoke-word">Upgrade</span>
<span className="karaoke-word">only</span>
<span className="karaoke-word">when</span>
<span className="karaoke-word">you</span>
<span className="karaoke-word">need</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">scale.</span>
<span className="karaoke-word"></span>
</p>
<div className="mt-6 flex items-center justify-center gap-3 text-sm">
<span className="text-neutral-300">Monthly</span>
<button aria-pressed="false" className="relative h-6 w-11 rounded-full bg-white/10 ring-1 ring-white/10 transition" id="billingToggle">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white translate-x-0 transition-transform"></span>
</button>
<div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-2 py-1 text-xs text-lime-300 ring-1 ring-lime-300/20">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
              Save 25%
            </div>
<span className="text-neutral-300">Yearly</span>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="animate-scale stagger-delay-1 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover:scale-[1.02]">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight karaoke-container" data-karaoke-wrapped="true">
<span className="karaoke-word">Developer</span>
</h3>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs ring-1 ring-white/10">
<svg className="lucide lucide-rocket h-3.5 w-3.5 text-lime-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
                Free forever
              </span>
</div>
<p className="mt-1 text-sm text-neutral-300 karaoke-container" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Perfect</span>
<span className="karaoke-word">for</span>
<span className="karaoke-word">solo</span>
<span className="karaoke-word">developers</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">side</span>
<span className="karaoke-word">projects.</span>
<span className="karaoke-word"></span>
</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight" id="starterPrice">
                $0
              </span>
<span className="mb-1 text-sm text-neutral-400">/month</span>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                5 active projects
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Community forum access
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Core generation features
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Basic analytics
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-medium hover:bg-white/5 transition" href="#cta">
              Get started free
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="animate-scale stagger-delay-2 relative rounded-2xl border border-lime-300/30 bg-gradient-to-b from-lime-400/10 to-transparent p-6 ring-1 ring-lime-300/20 hover:bg-lime-400/15 transition-all duration-300 cursor-pointer hover:scale-[1.02]">
<div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-lime-400 px-2 py-1 text-xs text-neutral-950">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
              Most popular
            </div>
<h3 className="text-xl font-semibold tracking-tight karaoke-container" data-karaoke-wrapped="true">
<span className="karaoke-word">Professional</span>
</h3>
<p className="mt-1 text-sm text-neutral-300 karaoke-container" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">For</span>
<span className="karaoke-word">teams</span>
<span className="karaoke-word">building</span>
<span className="karaoke-word">serious</span>
<span className="karaoke-word">applications</span>
<span className="karaoke-word">at</span>
<span className="karaoke-word">scale.</span>
<span className="karaoke-word"></span>
</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight" id="proPrice">
                $49
              </span>
<span className="mb-1 text-sm text-neutral-400">/month</span>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Unlimited projects
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Priority email support
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Advanced AI models
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Team collaboration tools
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Custom domain &amp; SSO
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-neutral-950 font-medium hover:bg-lime-300 transition" href="#cta">
              Start 14-day trial
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 relative grid-corners" id="faqs">
<div className="grid-corners-bottom"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="animate-in text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight karaoke-container" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Frequently</span>
<span className="karaoke-word">asked</span>
<span className="karaoke-word">questions</span>
<span className="karaoke-word"></span>
</h2>
<p className="mt-3 text-neutral-300 karaoke-container animate-subtitle-line" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Everything</span>
<span className="karaoke-word">you</span>
<span className="karaoke-word">need</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">know</span>
<span className="karaoke-word">about</span>
<span className="karaoke-word">the</span>
<span className="karaoke-word">platform.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="mt-10 space-y-3">
<details className="animate-in stagger-delay-1 group rounded-xl border border-white/10 bg-white/[0.02] p-5 open:bg-white/[0.03] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">Can I export my entire codebase?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">
              Absolutely. You maintain complete ownership and can export
              everything at any time to host anywhere.
            </p>
</details>
<details className="animate-in stagger-delay-2 group rounded-xl border border-white/10 bg-white/[0.02] p-5 open:bg-white/[0.03]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">How do you protect my data?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">
              End-to-end encryption, SOC 2 compliance, and granular access
              controls ensure your data stays secure.
            </p>
</details>
<details className="animate-in stagger-delay-3 group rounded-xl border border-white/10 bg-white/[0.02] p-5 open:bg-white/[0.03]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">Is self-hosting available?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">
              Yes, enterprise customers can deploy on their own infrastructure
              or private cloud environments.
            </p>
</details>
<details className="animate-in stagger-delay-4 group rounded-xl border border-white/10 bg-white/[0.02] p-5 open:bg-white/[0.03]">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">What tech stacks are supported?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<p className="mt-3 text-sm text-neutral-300">
              React, Next.js, Vue, Node.js, Python, and more. We constantly add
              support for modern frameworks.
            </p>
</details>
</div>
</div>
</section>


<section className="py-16 sm:py-24 relative grid-corners" id="contact">
<div className="grid-corners-bottom"></div>
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="animate-slide-left">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight karaoke-container animate-title-line" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Get</span>
<span className="karaoke-word">in</span>
<span className="karaoke-word">touch</span>
<span className="karaoke-word"></span>
</h2>
<p className="mt-3 text-neutral-300 karaoke-container animate-subtitle-line" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Share</span>
<span className="karaoke-word">your</span>
<span className="karaoke-word">vision</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">we'll</span>
<span className="karaoke-word">help</span>
<span className="karaoke-word">you</span>
<span className="karaoke-word">build</span>
<span className="karaoke-word">it</span>
<span className="karaoke-word">with</span>
<span className="karaoke-word">the</span>
<span className="karaoke-word">perfect</span>
<span className="karaoke-word">solution.</span>
<span className="karaoke-word"></span>
</p>
<div className="mt-6 space-y-4 text-sm">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mail h-5 w-5 text-lime-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
                hello@synthesize.dev
              </div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin h-5 w-5 text-lime-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                Global · Remote First
              </div>
</div>
</div>
<form className="animate-slide-right rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-xs text-neutral-400">First name</label>
<input className="mt-1 w-full rounded-lg bg-black/50 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-lime-300/40 focus:outline-none transition" placeholder="Alex" type="text"/>
</div>
<div className="">
<label className="text-xs text-neutral-400">Last name</label>
<input className="mt-1 w-full rounded-lg bg-black/50 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-lime-300/40 focus:outline-none transition" placeholder="Chen" type="text"/>
</div>
</div>
<div className="">
<label className="text-xs text-neutral-400">Email address</label>
<input className="mt-1 w-full rounded-lg bg-black/50 px-3 py-2 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-lime-300/40 focus:outline-none transition" placeholder="alex@company.com" type="email"/>
</div>
<div className="">
<label className="text-xs text-neutral-400">
                Tell us about your project
              </label>
<textarea className="focus:ring-2 focus:ring-lime-300/40 focus:outline-none transition resize-none text-sm bg-black/50 w-full rounded-lg ring-white/10 ring-1 mt-1 pt-2 pr-3 pb-2 pl-3" placeholder="I'm building an app that..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-neutral-950 font-medium hover:bg-lime-300 transition" type="submit">
              Send message
              <svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</form>
</div>
</div>
</section>

<footer className="border-white/5 border-t pt-12 pb-12 relative" style={{borderTop: '1px solid rgba(163, 230, 53, 0.15)', background: 'linear-gradient(to bottom, rgba(163, 230, 53, 0.08) 0%, transparent 100px)', position: 'relative'}}>

<div style={{position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '1px', background: 'linear-gradient(to right, transparent 0%, rgba(163, 230, 53, 0.6) 50%, transparent 100%)', filter: 'blur(4px)', pointerEvents: 'none'}}></div>
<div style={{position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '40%', height: '40px', background: 'radial-gradient(ellipse at center, rgba(163, 230, 53, 0.15) 0%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none'}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold tracking-tight w-32 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad457b1a-a911-459d-9f7b-35c6d76ae781_1600w.png)] bg-cover"></span>
</div>
<p className="mt-3 text-sm text-neutral-400">
              Build faster with AI-powered development.
            </p>
</div>
<div className="">
<h4 className="text-sm font-medium">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li>
<a className="hover:text-white transition" href="#features">
                  Features
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="#pricing">
                  Pricing
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="#faqs">FAQ</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Changelog</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li className="">
<a className="hover:text-white transition" href="#why">About</a>
</li>
<li className="">
<a className="hover:text-white transition" href="#contact">
                  Contact
                </a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">Careers</a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">Blog</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li>
<a className="hover:text-white transition" href="#">Privacy</a>
</li>
<li><a className="hover:text-white transition" href="#">Terms</a></li>
<li>
<a className="hover:text-white transition" href="#">Security</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Compliance</a>
</li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
<p className="">© 2024 Hova. All rights reserved.</p>
<div className="flex items-center gap-6">
<a aria-label="Twitter" className="hover:text-white transition" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="GitHub" className="hover:text-white transition" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</footer>






    </>
  );
}
