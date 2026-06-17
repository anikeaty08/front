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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Automatically update the current year in footer
      document.getElementById('year').textContent = new Date().getFullYear();

      // Scroll Progress Bar & Navbar Styling on Scroll
      const progressBar = document.getElementById('progress-bar');
      const navbar = document.getElementById('navbar');
      const scrollTopBtn = document.getElementById('scroll-top');

      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';

        // Add shadow and more solid background to navbar upon scrolling
        if(winScroll > 50) {
          navbar.style.background = 'rgba(248,248,245,0.96)';
          navbar.style.boxShadow = '0 4px 24px rgba(10,23,29,0.06)';
        } else {
          navbar.style.background = 'rgba(248,248,245,0.86)';
          navbar.style.boxShadow = 'none';
        }

        // Show/hide scroll to top button
        if(winScroll > 600) {
          scrollTopBtn.classList.add('show');
        } else {
          scrollTopBtn.classList.remove('show');
        }
      });

      // Scroll to top click event
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Hero Text Typewriter/Blur Animation
      const heroH1 = document.getElementById('hero-h1');
      heroH1.innerHTML = '';
      const heroText = "Obsah, který prodává bez toho, aby prodával.";
      const words = heroText.split(' ');

      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.className = 'hero-word';
        span.style.transitionDelay = `${index * 0.1}s`;
        heroH1.appendChild(span);
        if (index < words.length - 1) {
          heroH1.appendChild(document.createTextNode(' '));
        }
      });

      // Trigger animation on page load
      setTimeout(() => {
        document.querySelectorAll('.hero-word').forEach(el => el.classList.add('animate'));
      }, 200);

      // Scroll Reveal Animations via IntersectionObserver
      const revealElements = document.querySelectorAll('.sr, .stagger-children');
      const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, revealOptions);

      revealElements.forEach(el => revealObserver.observe(el));

      // Process Section Accordion Function
      function toggleProcess(element) {
        const allItems = document.querySelectorAll('.process-item');
        const isOpen = element.classList.contains('open');

        // Close all
        allItems.forEach(item => {
          item.classList.remove('open');
          const icon = item.querySelector('.process-icon iconify-icon');
          if (icon) icon.setAttribute('icon', 'solar:add-circle-linear');
        });

        // Open if wasn't open
        if (!isOpen) {
          element.classList.add('open');
          const icon = element.querySelector('.process-icon iconify-icon');
          if (icon) icon.setAttribute('icon', 'solar:minus-circle-linear');
        }
      }

      // Open the first process item automatically
      setTimeout(() => {
        const firstProcessItem = document.querySelector('.process-item');
        if (firstProcessItem) {
          toggleProcess(firstProcessItem);
        }
      }, 1000);

      // Mobile Menu Logic
      const hamburger = document.getElementById('hamburger');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileClose = document.getElementById('mobile-close');
      const mobileOverlay = document.getElementById('mobile-overlay');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function openMenu() {
        mobileMenu.classList.add('open');
        mobileOverlay.classList.remove('hidden');
        mobileOverlay.classList.add('block');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('block');
        mobileOverlay.classList.add('hidden');
        document.body.style.overflow = '';
      }

      hamburger.addEventListener('click', openMenu);
      mobileClose.addEventListener('click', closeMenu);
      mobileOverlay.addEventListener('click', closeMenu);

      mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    


      (function() {
        const cards = document.querySelectorAll('.ref-carousel-card');
        const dots = document.querySelectorAll('.dot-item');
        const prevBtn = document.getElementById('ref-prev');
        const nextBtn = document.getElementById('ref-next');
        let currentIndex = 0;
        const totalCards = cards.length;

        function updateCarousel() {
            if(totalCards === 0) return;
            cards.forEach((card, index) => {
                card.classList.remove('z-20', 'z-10', 'z-0', 'opacity-100', 'opacity-40', 'opacity-0', 'scale-100', 'scale-90', 'scale-75', 'pointer-events-auto', 'pointer-events-none');
                card.style.transform = '';

                let diff = (index - currentIndex + totalCards) % totalCards;

                if (diff === 0) {
                    card.classList.add('z-20', 'opacity-100', 'scale-100', 'pointer-events-auto');
                    card.style.left = '50%';
                    card.style.transform = 'translate(-50%, 0)';
                } else if (diff === 1) {
                    card.classList.add('z-10', 'opacity-40', 'scale-90', 'pointer-events-auto', 'cursor-pointer');
                    card.style.left = '50%';
                    card.style.transform = 'translate(10%, 0)';
                    card.onclick = () => { currentIndex = index; updateCarousel(); };
                } else if (diff === totalCards - 1) {
                    card.classList.add('z-10', 'opacity-40', 'scale-90', 'pointer-events-auto', 'cursor-pointer');
                    card.style.left = '50%';
                    card.style.transform = 'translate(-110%, 0)';
                    card.onclick = () => { currentIndex = index; updateCarousel(); };
                } else {
                    card.classList.add('z-0', 'opacity-0', 'scale-75', 'pointer-events-none');
                    card.style.left = '50%';
                    card.style.transform = 'translate(-50%, 0)';
                    card.onclick = null;
                }
            });

            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.replace('bg-zinc-300', 'bg-[var(--onyx)]');
                } else {
                    dot.classList.replace('bg-[var(--onyx)]', 'bg-zinc-300');
                }
            });
        }

        if(prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCarousel();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalCards;
                updateCarousel();
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
            });

            // Initialize layout on load
            setTimeout(updateCarousel, 100);
        }
      })();
    
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
      
<div className="" id="progress-bar" style={{width: '4.48077%'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center" id="navbar" style={{backdropFilter: 'blur(20px)', background: 'rgba(248, 248, 245, 0.96)', borderBottom: '1px solid rgba(10, 23, 29, 0.06)', boxShadow: 'rgba(10, 23, 29, 0.06) 0px 4px 24px'}}>
<div className="flex w-full items-center justify-between" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<a className="flex items-center gap-0 shrink-0" href="#" style={{fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', fontWeight: '700', letterSpacing: '-0.04em', color: 'var(--onyx)'}}>
          Zanda
          <span className="" style={{position: 'relative'}}>
            C
            <span style={{position: 'absolute', top: '-2px', right: '-5px', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--nectarine)'}}></span>
</span>
          reative
        </a>
<div className="hidden lg:flex items-center gap-8">
<a className="uppercase font-bold" href="#domu" onmouseout="this.style.color='var(--soft)'" onmouseover="this.style.color='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            Domů
          </a>
<a className="uppercase font-bold" href="#sluzby" onmouseout="this.style.color='var(--soft)'" onmouseover="this.style.color='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            Služby
          </a>
<a className="uppercase font-bold" href="#reference" onmouseout="this.style.color='var(--soft)'" onmouseover="this.style.color='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            Reference
          </a>
<a className="uppercase font-bold" href="#o-nas" onmouseout="this.style.color='var(--soft)'" onmouseover="this.style.color='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            O nás
          </a>
<a className="uppercase font-bold" href="#proces" onmouseout="this.style.color='var(--soft)'" onmouseover="this.style.color='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            Proces
          </a>
<a className="uppercase font-bold" href="#kontakt" onmouseout="this.style.color='var(--soft)'" onmouseover="this.style.color='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            Kontakt
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center uppercase font-bold" href="#kontakt" onmouseout="this.style.background='transparent';this.style.color='var(--onyx)';this.style.borderColor='var(--line-strong)'" onmouseover="this.style.background='var(--onyx)';this.style.color='#fff';this.style.borderColor='var(--onyx)'" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--onyx)', border: '1px solid var(--line-strong)', borderRadius: '999px', padding: '10px 22px'}}>
            Domluvit konzultaci
          </a>
<button aria-label="Menu" className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5" id="hamburger">
<span className="block w-5 h-[1.5px] rounded-full" style={{background: 'var(--onyx)'}}></span>
<span className="block w-5 h-[1.5px] rounded-full" style={{background: 'var(--onyx)'}}></span>
<span className="block w-3.5 h-[1.5px] rounded-full" style={{background: 'var(--onyx)'}}></span>
</button>
</div>
</div>
</nav>

<div className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-sm flex flex-col" id="mobile-menu" style={{background: 'var(--bg)', boxShadow: '-10px 0 40px rgba(10,23,29,0.08)'}}>
<div className="flex items-center justify-between p-6" style={{height: '72px', borderBottom: '1px solid var(--line)'}}>
<span className="font-bold" style={{fontSize: '1rem', letterSpacing: '-0.04em'}}>
          Menu
        </span>
<button aria-label="Zavřít" className="w-10 h-10 flex items-center justify-center" id="mobile-close">
<iconify-icon icon="solar:close-circle-linear" style={{color: 'var(--onyx)'}} width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1 p-6 flex-1">
<a className="mobile-link block py-3 font-semibold" href="#domu" style={{fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', letterSpacing: '-0.03em', color: 'var(--onyx)', borderBottom: '1px solid var(--line)'}}>
          Domů
        </a>
<a className="mobile-link block py-3 font-semibold" href="#sluzby" style={{fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', letterSpacing: '-0.03em', color: 'var(--onyx)', borderBottom: '1px solid var(--line)'}}>
          Služby
        </a>
<a className="mobile-link block py-3 font-semibold" href="#reference" style={{fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', letterSpacing: '-0.03em', color: 'var(--onyx)', borderBottom: '1px solid var(--line)'}}>
          Reference
        </a>
<a className="mobile-link block py-3 font-semibold" href="#o-nas" style={{fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', letterSpacing: '-0.03em', color: 'var(--onyx)', borderBottom: '1px solid var(--line)'}}>
          O nás
        </a>
<a className="mobile-link block py-3 font-semibold" href="#proces" style={{fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', letterSpacing: '-0.03em', color: 'var(--onyx)', borderBottom: '1px solid var(--line)'}}>
          Proces
        </a>
<a className="mobile-link block py-3 font-semibold" href="#kontakt" style={{fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
          Kontakt
        </a>
</div>
<div className="p-6">
<a className="mobile-link block text-center uppercase font-bold py-4" href="#kontakt" style={{fontSize: '11px', letterSpacing: '0.08em', color: '#fff', background: 'var(--oceanic)', borderRadius: '999px'}}>
          Domluvit konzultaci
        </a>
</div>
</div>
<div className="fixed inset-0 z-[55] hidden" id="mobile-overlay" style={{background: 'rgba(10, 23, 29, 0.3)', backdropFilter: 'blur(4px)'}}></div>

<section className="relative" id="domu" style={{paddingTop: '120px', paddingBottom: '100px'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="sr mb-8">
<span className="inline-flex items-center gap-2 font-bold uppercase" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)', border: '1px solid var(--line)', borderRadius: '999px', padding: '8px 18px'}}>
<span className="pulse-dot" style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--nectarine)'}}></span>
            Invisible Funnel System
          </span>
</div>
<div className="grid gap-10 lg:gap-8 items-start" id="hero-grid" style={{gridTemplateColumns: '1fr'}}>
<div className="">
<h1 className="" id="hero-h1" style={{fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: '1.05', letterSpacing: '-0.06em', fontWeight: '700', color: 'var(--onyx)', marginBottom: '28px', maxWidth: '900px'}}><span className="hero-word" style={{transitionDelay: '0s'}}>Obsah,</span> <span className="hero-word" style={{transitionDelay: '0.1s'}}>který</span> <span className="hero-word" style={{transitionDelay: '0.2s'}}>prodává</span> <span className="hero-word" style={{transitionDelay: '0.3s'}}>bez</span> <span className="hero-word" style={{transitionDelay: '0.4s'}}>toho,</span> <span className="hero-word" style={{transitionDelay: '0.5s'}}>aby</span> <span className="hero-word" style={{transitionDelay: '0.6s'}}>prodával.</span></h1>
<p className="sr" style={{fontSize: 'clamp(1rem, 1.2vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)', maxWidth: '600px', marginBottom: '36px'}}>
              Nejlepší marketing nepůsobí jako marketing. Buduje důvěru, mění
              přesvědčení a přitahuje správné klienty — dřív, než vůbec otevřou
              DM. To je Invisible Funnel. A tohle stavíme pro vaši značku.
            </p>
<div className="sr flex flex-wrap gap-3 mb-10">
<a className="inline-flex items-center gap-2 font-semibold btn-press" href="#kontakt" onmouseout="this.style.background='var(--oceanic)'" onmouseover="this.style.background='#00525d'" style={{fontSize: 'clamp(0.82rem, 1vw, 0.95rem)', color: 'rgb(255, 255, 255)', background: 'var(--oceanic)', borderRadius: '999px', padding: '14px 28px', letterSpacing: '-0.01em'}}>
                Chci funnel, který funguje
                <iconify-icon icon="solar:arrow-right-linear" style={{color: '#fff'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 font-semibold btn-press" href="#reference" onmouseout="this.style.background='transparent';this.style.color='var(--onyx)';this.style.borderColor='var(--line-strong)'" onmouseover="this.style.background='var(--onyx)';this.style.color='#fff';this.style.borderColor='var(--onyx)'" style={{fontSize: 'clamp(0.82rem, 1vw, 0.95rem)', color: 'var(--onyx)', borderColor: 'var(--line-strong)', borderTopStyle: '', borderTopWidth: '', borderRightStyle: '', borderRightWidth: '', borderBottomStyle: '', borderBottomWidth: '', borderLeftStyle: '', borderLeftWidth: '', borderImageSource: '', borderImageSlice: '', borderImageWidth: '', borderImageOutset: '', borderImageRepeat: '', borderRadius: '999px', padding: '14px 28px', letterSpacing: '-0.01em', background: 'transparent'}}>
                Zobrazit reference
              </a>
</div>
<div className="sr" style={{border: '1px solid var(--line)', borderRadius: '16px', padding: '24px 28px'}}>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-bold stat-number" style={{fontSize: 'clamp(1.2rem, 1.5vw, 1.4rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
                  370M+ views
                </span>
<span className="font-light" style={{fontSize: 'clamp(0.78rem, 0.88vw, 0.88rem)', color: 'var(--soft)'}}>
                  za 3 roky skrz naše střihy.
                </span>
</div>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
                Pozornost umíme získat. Teď ji stavíme tak, aby měnila
                přesvědčení — a přinášela poptávky.
              </p>
</div>
</div>
<div className="sr hidden lg:flex">
<div className="overflow-hidden flex flex-col float-anim w-full relative justify-end" style={{background: 'var(--oceanic)', borderRadius: '32px', minHeight: '440px', padding: '40px'}}>
<div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none" style={{fontSize: 'clamp(180px, 22vw, 280px)', fontWeight: '800', letterSpacing: '-0.08em', color: 'rgba(255,255,255,0.04)', lineHeight: '1'}}>
                ZC
              </div>
<div className="relative z-10">
<div className="mb-4" style={{width: '40px', height: '3px', background: 'var(--nectarine)', borderRadius: '2px'}}></div>
<p className="" style={{fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', fontWeight: '300', lineHeight: '1.65', color: 'rgba(255,255,255,0.7)'}}>
                  Obsah, který mění přesvědčení. Brand, který prodává bez tlaku.
                  Funnel, který funguje neviditelně.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="" style={{borderTop: '1px solid var(--line)', padding: '60px 0'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<p className="sr uppercase font-bold text-center mb-3" style={{fontSize: '11px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
          Pracovali jsme pro tvůrce a značky jako
        </p>
<div className="marquee-wrapper mt-8 mb-10">
<div className="marquee-content gap-x-20 gap-y-x-20">
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffc1482f-b858-4700-88a1-b90ad5c178f4_320w.png"/>
<span className="">Stonkee</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0762171a-a986-4496-8661-175d5827b975_320w.png"/>
<span className="">Cashflow</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c40a312e-3e79-4c64-8736-1017c1f968fb_320w.png"/>
<span className="">Kuba English</span>
</div>
<div className="marquee-item whitespace-nowrap w-max pr-6">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f3f728b-cdc6-4761-9675-985cb6457785_320w.png"/>
<span className="pr-2 whitespace-nowrap">4CAMPS</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0222e487-4ab6-4545-bcc6-0884c686d146_320w.png"/>
<span className="">360 Design</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78ecfc4d-8a05-4409-bf74-34730cf43bd6_320w.png"/>
<span className="">Raego</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc9a10c7-81a2-4ec2-adbd-891049af768b_320w.png"/>
<span className="">DogMama</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b162d1f-ae3a-4830-82ee-fef685c8f769_320w.png"/>
<span className="">Geicha</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f93350b-dd87-41b2-b178-e857cb17cf61_320w.png"/>
<span className="">GorillaSpace</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/933ac055-c4c7-4a8e-83ef-3ed8cc50549d_320w.png"/>
<span className="">Víno od Bodláků</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3be662dc-b54d-425e-abe8-f74f06445bd1_320w.png"/>
<span className="">Brand Production</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47141993-b6bc-4c97-bf96-dc0c6a113682_320w.png"/>
<span className="">Letenky od Kuby</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7af99fe5-61f9-470c-adda-5b80363ab630_320w.png"/>
<span className="">Tom.budfit</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0ffe409-f9a9-4bd8-b7a2-4b0b15514f23_320w.png"/>
<span className="">Tomáš Kryčfalušij</span>
</div>
<div className="marquee-item">
<img alt="Logo" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae6b08f-f4ef-4a4c-861b-4e2aaf6b6ccd_320w.png"/>
<span className="">Nela Smékalová</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60c60bd0-f811-4025-883f-84ff97f46b54_320w.png"/>
<span>Jacob Bartek</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7fe0d19-4ffe-4856-86d5-28045861b922_320w.png"/>
<span>Spotlajt</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc529827-5145-4f83-a405-de0f546c501e_320w.png"/>
<span>Share Yourself</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0539b7c7-226e-4eb5-a929-1724cd5ef56d_320w.png"/>
<span>Zapi.GFX</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c52f53c4-aee1-4535-9f7b-3ddad96e2870_320w.png"/>
<span>Jan Albrecht</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8d9168d-b1cb-4c2d-a572-0f4c002073b9_320w.png"/>
<span>Elody</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d82c9d99-81cf-4464-9e34-e353fdb4c577_320w.png"/>
<span>Robin Suc</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c81d9843-a279-4a3a-a11c-126c5bc02c01_320w.png"/>
<span>Pov Dealer</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49c2d571-dec9-4f23-a8d7-e5cca77b69f2_320w.png"/>
<span>Jarka Popelka</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9080b79-3d1e-4d42-8551-33bb9861b879_320w.png"/>
<span>Ondřej Koběrský</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37aac8e3-f89a-458a-9fc7-82791447ec06_320w.png"/>
<span>Wabi-Sabi Podcast</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b070968c-2412-4b7d-9794-33bcfe298689_320w.png"/>
<span>Pan Čung</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f48bdee3-2824-431b-a2e3-05c83be9c8be_320w.png"/>
<span>Flexybabka</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/372f8aad-110b-4b87-a776-0af0164564a4_320w.png"/>
<span>Taras Povoroznyk</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99608867-e377-4c53-bf71-05faa17b8f72_320w.png"/>
<span>VeryGUD</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffc1482f-b858-4700-88a1-b90ad5c178f4_320w.png"/>
<span>Stonkee</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0762171a-a986-4496-8661-175d5827b975_320w.png"/>
<span>Cashflow Brno</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c40a312e-3e79-4c64-8736-1017c1f968fb_320w.png"/>
<span>Kuba English</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f3f728b-cdc6-4761-9675-985cb6457785_320w.png"/>
<span>4CAMPS</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0222e487-4ab6-4545-bcc6-0884c686d146_320w.png"/>
<span>360 Desing</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78ecfc4d-8a05-4409-bf74-34730cf43bd6_320w.png"/>
<span>Raego</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc9a10c7-81a2-4ec2-adbd-891049af768b_320w.png"/>
<span>DogMama</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f93350b-dd87-41b2-b178-e857cb17cf61_320w.png"/>
<span>GorillaSpace</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b162d1f-ae3a-4830-82ee-fef685c8f769_320w.png"/>
<span>Geicha</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/933ac055-c4c7-4a8e-83ef-3ed8cc50549d_320w.png"/>
<span>Víno od Bodláků</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3be662dc-b54d-425e-abe8-f74f06445bd1_320w.png"/>
<span>Brand Production</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47141993-b6bc-4c97-bf96-dc0c6a113682_320w.png"/>
<span>Letenky od Kuby</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7af99fe5-61f9-470c-adda-5b80363ab630_320w.png"/>
<span>Tom.budfit</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae6b08f-f4ef-4a4c-861b-4e2aaf6b6ccd_320w.png"/>
<span>Nela Smékalová</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0ffe409-f9a9-4bd8-b7a2-4b0b15514f23_320w.png"/>
<span>Tomáš Kryčfalušij</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60c60bd0-f811-4025-883f-84ff97f46b54_320w.png"/>
<span>Jacob Bartek</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7fe0d19-4ffe-4856-86d5-28045861b922_320w.png"/>
<span>Spotlajt</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc529827-5145-4f83-a405-de0f546c501e_320w.png"/>
<span>Share Yourself</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0539b7c7-226e-4eb5-a929-1724cd5ef56d_320w.png"/>
<span>Zapi.GFX</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c52f53c4-aee1-4535-9f7b-3ddad96e2870_320w.png"/>
<span>Jan Albrecht</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8d9168d-b1cb-4c2d-a572-0f4c002073b9_320w.png"/>
<span>Elody</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d82c9d99-81cf-4464-9e34-e353fdb4c577_320w.png"/>
<span>Robin Suc</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c81d9843-a279-4a3a-a11c-126c5bc02c01_320w.png"/>
<span>Pov Dealer</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49c2d571-dec9-4f23-a8d7-e5cca77b69f2_320w.png"/>
<span>Jarka Popelka</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9080b79-3d1e-4d42-8551-33bb9861b879_320w.png"/>
<span>Ondrřej Koběrský</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37aac8e3-f89a-458a-9fc7-82791447ec06_320w.png"/>
<span>Wabi-Sabi Podcast</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b070968c-2412-4b7d-9794-33bcfe298689_320w.png"/>
<span>Pan Čung</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f48bdee3-2824-431b-a2e3-05c83be9c8be_320w.png"/>
<span>FlexyBabka</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/372f8aad-110b-4b87-a776-0af0164564a4_320w.png"/>
<span>Taras Povoroznyk</span>
</div>
<div className="marquee-item">
<img alt="Logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99608867-e377-4c53-bf71-05faa17b8f72_320w.png"/>
<span>VeryGUD</span>
</div>
</div>
</div>
<p className="sr font-light text-center" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', lineHeight: '1.6', color: 'var(--soft)', maxWidth: '560px', margin: '0 auto'}}>
          Desítky až stovky výstupů. Reálné zkušenosti s tím, co na sociálních
          sítích funguje — na pozornost, brand i výkon.
        </p>
</div>
</section>

<section className="" style={{borderTop: '1px solid var(--line)', padding: '100px 0'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="sr flex lg:gap-0 gap-x-4 gap-y-4 items-start" style={{flexDirection: 'column'}}>
<span className="uppercase font-bold block mb-6" style={{fontSize: '12px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            01 — Pozice
          </span>
<div className="">
<h2 className="" style={{fontSize: 'clamp(26px, 3.8vw, 46px)', fontWeight: '700', letterSpacing: '-0.05em', lineHeight: '1.1', color: 'var(--onyx)', marginBottom: '24px', maxWidth: '640px'}}>
              Hezký content nestačí. Musí měnit přesvědčení.
            </h2>
<p className="" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)', maxWidth: '640px', marginBottom: '20px'}}>
              Mnoho značek platí za content, který vypadá dobře. Má views, má
              reach, má design. Ale objednávky nepřicházejí.
            </p>
<p className="" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)', maxWidth: '640px', marginBottom: '20px'}}>
              Problém není v algoritmu. Problém je v tom, že obsah nemění
              způsob, jakým lidé přemýšlejí — a bez toho nikdo nekoupí. Lidi
              nekupují službu. Nejdřív kupují nový pohled na realitu.
            </p>
<p className="font-semibold" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)', lineHeight: '1.65', color: 'var(--onyx)', maxWidth: '640px', marginBottom: '48px'}}>
              Invisible Funnel to řeší vrstva po vrstvě:
            </p>
</div>
</div>
<div className="stagger-children">
<div className="grid items-start gap-0" style={{gridTemplateColumns: '40px 1fr', borderTop: '1px solid var(--line)', padding: '20px 0'}}>
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)'}}>
              01
            </span>
<span className="font-semibold" style={{fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', letterSpacing: '-0.02em', color: 'var(--onyx)'}}>
              Content zastaví správného člověka
            </span>
</div>
<div className="grid items-start gap-0" style={{gridTemplateColumns: '40px 1fr', borderTop: '1px solid var(--line)', padding: '20px 0'}}>
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)'}}>
              02
            </span>
<span className="font-semibold" style={{fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', letterSpacing: '-0.02em', color: 'var(--onyx)'}}>
              Messaging rozbije starý způsob přemýšlení
            </span>
</div>
<div className="grid items-start gap-0" style={{gridTemplateColumns: '40px 1fr', borderTop: '1px solid var(--line)', padding: '20px 0'}}>
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)'}}>
              03
            </span>
<span className="font-semibold" style={{fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', letterSpacing: '-0.02em', color: 'var(--onyx)'}}>
              Brand buduje autoritu dřív, než zákazník zavolá
            </span>
</div>
<div className="grid items-start gap-0" style={{gridTemplateColumns: '40px 1fr', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '20px 0'}}>
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)'}}>
              04
            </span>
<span className="font-semibold" style={{fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', letterSpacing: '-0.02em', color: 'var(--onyx)'}}>
              Funnel vede k akci bez tlaku
            </span>
</div>
</div>
</div>
</section>

<section className="" id="funnel" style={{borderTop: '1px solid var(--line)', padding: '100px 0'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="sr mb-6">
<span className="uppercase font-bold block mb-6" style={{fontSize: '12px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            02 — Invisible Funnel
          </span>
<h2 className="" style={{fontSize: 'clamp(36px, 4.5vw, 58px)', letterSpacing: '-0.06em', fontWeight: '700', lineHeight: '1.05', color: 'var(--onyx)', maxWidth: '700px'}}>
            Invisible Funnel: 6 vrstev od pozornosti k touze.
          </h2>
</div>
<p className="sr mb-14" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)', maxWidth: '640px'}}>
          Každý člověk prochází psychologickými fázemi, než nakoupí. Náš systém
          je navržený tak, aby váš obsah vedl člověka všemi vrstvami —
          nenápadně, přirozeně a efektivně.
        </p>
<div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="funnel-step flex flex-col" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '22px', padding: '32px', boxShadow: 'var(--card-shadow)'}}>
<span className="font-bold mb-4" style={{fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', color: 'var(--nectarine)'}}>
              01
            </span>
<h3 className="font-semibold mb-3" style={{fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
              Pozornost
            </h3>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
              Nezastavujeme náhodně. Zastavujeme správného člověka ve správný
              moment — přes přesně mířený hook, napětí a relevantní problém.
            </p>
</div>
<div className="funnel-step flex flex-col" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '22px', padding: '32px', boxShadow: 'var(--card-shadow)'}}>
<span className="font-bold mb-4" style={{fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', color: 'var(--nectarine)'}}>
              02
            </span>
<h3 className="font-semibold mb-3" style={{fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
              Změna přesvědčení
            </h3>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
              Rozbíjíme starý způsob přemýšlení a nabídneme nový rámec. Dokud se
              přesvědčení nezmění, ke konverzi nedojde.
            </p>
</div>
<div className="funnel-step flex flex-col" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '22px', padding: '32px', boxShadow: 'var(--card-shadow)'}}>
<span className="font-bold mb-4" style={{fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', color: 'var(--nectarine)'}}>
              03
            </span>
<h3 className="font-semibold mb-3" style={{fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
              Signál autority
            </h3>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
              Konzistentní insighty, přesný jazyk a vlastní frameworky budují
              vnímanou kompetenci — ještě dřív, než zákazník zavolá.
            </p>
</div>
<div className="funnel-step flex flex-col" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '22px', padding: '32px', boxShadow: 'var(--card-shadow)'}}>
<span className="font-bold mb-4" style={{fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', color: 'var(--nectarine)'}}>
              04
            </span>
<h3 className="font-semibold mb-3" style={{fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
              Budování důvěry
            </h3>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
              Stories, zákulisí a lidský rozměr zkracují vzdálenost. Kombinace
              autority a blízkosti vytváří nejsilnější důvěru.
            </p>
</div>
<div className="funnel-step flex flex-col" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '22px', padding: '32px', boxShadow: 'var(--card-shadow)'}}>
<span className="font-bold mb-4" style={{fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', color: 'var(--nectarine)'}}>
              05
            </span>
<h3 className="font-semibold mb-3" style={{fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
              Touha
            </h3>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
              Ukazujeme žádoucí budoucnost — ne jen řešení problému, ale
              identitu, do které zákazník chce vstoupit. Touha prodává víc než
              argument.
            </p>
</div>
<div className="funnel-step flex flex-col" style={{background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '22px', padding: '32px', boxShadow: 'var(--card-shadow)'}}>
<span className="font-bold mb-4" style={{fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', color: 'var(--nectarine)'}}>
              06
            </span>
<h3 className="font-semibold mb-3" style={{fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
              Přirozená konverze
            </h3>
<p className="font-light" style={{fontSize: 'clamp(0.82rem, 0.92vw, 0.92rem)', lineHeight: '1.6', color: 'var(--soft)'}}>
              Žádný tlak. Zákazník sám pociťuje, že chce udělat krok. Proto jsou
              naše poptávky kvalitnější — lidé přicházejí předehřátí.
            </p>
</div>
</div>
</div>
</section>

<section className="" id="sluzby" style={{borderTop: '1px solid var(--line)', padding: '100px 0'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>

<div className="sr flex flex-col md:flex-row md:items-end justify-between gap-6 px-1 mb-10">
<div className="max-w-2xl">
<span className="uppercase font-semibold block mb-6" style={{fontSize: '12px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
              03 — Služby
            </span>
<h2 className="md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight mb-4 leading-[1.05]">
              Od pozornosti ke konverzi.
              <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600">
                Celý systém.
              </span>
</h2>
<p className="leading-relaxed text-[clamp(0.95rem,1.1vw,1.19rem)] font-light text-zinc-500">
              Nepracujeme na výstupech. Pracujeme na systému, kde každý kus
              obsahu má funkci — v brandingu, v důvěře, v prodeji.
            </p>
</div>
</div>

<div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-zinc-900/5 bg-zinc-200 rounded-[2rem] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-px gap-y-px">

<div className="group hover:bg-zinc-50 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400">
<iconify-icon icon="solar:video-frame-bold-duotone" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center uppercase font-semibold mb-3" style={{fontSize: '10px', letterSpacing: '0.08em', color: 'var(--oceanic)'}}>
                Content
              </span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Střih, který drží pozornost
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Reels, short-form, YouTube i promo — každá sekunda má účel.
                Zastavujeme správného člověka a držíme ho do konce.
              </p>
</div>
<div className="flex flex-col flex-grow mt-8 pt-4 pb-4 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-12 border-b border-r border-l border-zinc-200 rounded-b-2xl pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] h-6 w-px bg-zinc-200 pointer-events-none"></div>
<div className="flex gap-4 mb-6 relative z-10">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/578a5bc5-2c9f-4285-8ae6-0d7dafefba84_320w.webp"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a99aa12-9c50-44fe-bb7d-5dfef28b7d59_320w.webp"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e91b8c7-be64-41b5-8bd8-75efab28bdbe_320w.webp"/>
</div>
<div className="flex text-[10px] uppercase shadow-zinc-900/20 group-hover:scale-105 transition-transform font-semibold text-white tracking-wider bg-zinc-900 rounded-full mt-2 px-4 py-2 shadow-lg gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:play-circle-bold-duotone" width="16"></iconify-icon>
<span>100K+ Views</span>
</div>
</div>
</div>

<div className="group hover:bg-zinc-50 transition-colors flex flex-col min-h-[340px] overflow-hidden bg-white h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400">
<iconify-icon className="" icon="solar:chart-square-bold-duotone" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center uppercase font-semibold mb-3" style={{fontSize: '10px', letterSpacing: '0.08em', color: 'var(--deep-nectarine)'}}>
                Strategie
              </span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Strategie obsahu a značky
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Navrhujeme témata, messaging a obsahový rámec tak, aby váš
                content postupně měnil způsob, jakým lidé přemýšlejí o vašem
                problému — a o vás.
              </p>
</div>
<div className="mt-8 relative flex items-center justify-center flex-grow">
<div className="relative w-full h-32 flex items-center justify-center">
<div className="w-40 bg-white border border-zinc-100 rounded-xl shadow-xl flex flex-col p-4 group-hover:-translate-y-2 group-hover:rotate-2 transition-all duration-500 z-10">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="" icon="solar:target-bold-duotone" width="20"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-900">
                      Pozice
                    </span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-[#E69F4A] rounded-full"></div>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-zinc-300 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute -right-2 -bottom-2 w-12 h-12 bg-white border border-zinc-100 rounded-2xl shadow-lg -rotate-12 flex items-center justify-center group-hover:-rotate-6 group-hover:translate-x-2 transition-all duration-500 z-20">
<iconify-icon className="text-zinc-800" icon="solar:magnet-bold-duotone" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px] overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400">
<iconify-icon icon="solar:graph-up-bold-duotone" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center uppercase font-semibold mb-3" style={{fontSize: '10px', letterSpacing: '0.08em', color: 'var(--oceanic)'}}>
                Reklamy
              </span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Výkonnostní kreativy
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Facebook a Instagram reklamy, které nepůsobí jako reklama.
                Zaujmou, sedí značce a ve správný moment vedou k akci.
              </p>
</div>
<div className="mt-8 relative flex flex-col items-center justify-center flex-grow">
<div className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 shadow-sm flex items-center gap-3 relative z-10 group-hover:shadow-md transition-all duration-300">
<iconify-icon className="text-zinc-400" icon="solar:cursor-square-linear" width="20"></iconify-icon>
<div className="h-2 w-20 bg-zinc-200 rounded-full"></div>
<div className="ml-auto flex items-center gap-1.5">
<span className="text-[10px] font-semibold text-zinc-400">
                    CTR
                  </span>
</div>
</div>
<div className="absolute -left-2 bottom-8 w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500 delay-100 z-20">
<iconify-icon className="text-white" icon="solar:bolt-circle-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px]">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400">
<iconify-icon icon="solar:routing-2-bold-duotone" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center uppercase font-semibold mb-3" style={{fontSize: '10px', letterSpacing: '0.08em', color: 'var(--deep-nectarine)'}}>
                Funnel
              </span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Architektura funnelu
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Mapujeme cestu od prvního dojmu ke konverzi. Zpráva, tok výzev k
                akci, kontaktní body — nastavujeme tak, aby člověk věděl, proč
                udělat další krok.
              </p>
</div>
<div className="mt-8 flex items-center justify-center py-4 relative flex-grow">
<div className="group-hover:opacity-100 transition-opacity opacity-80 w-48 h-32 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center z-10 shadow-lg ring-4 ring-zinc-200">
<iconify-icon className="text-zinc-300" icon="solar:filter-bold-duotone" width="20"></iconify-icon>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-400 rounded-full"></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-[#003F47] rounded-full"></div>
</div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-400 rounded-full"></div>
</div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-[#E69F4A] rounded-full"></div>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none text-zinc-300" style={{zIndex: '0'}}>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="96" y1="64" y2="16"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="96" y1="64" y2="112"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="16" y1="64" y2="64"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="176" y1="64" y2="64"></line>
</svg>
</div>
</div>
</div>

<div className="group hover:bg-zinc-50 transition-colors flex flex-col min-h-[340px] bg-white h-full p-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400">
<iconify-icon className="" icon="solar:crown-star-bold-duotone" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center uppercase font-semibold mb-3" style={{fontSize: '10px', letterSpacing: '0.08em', color: 'var(--oceanic)'}}>
                Brand
              </span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Kreativní vedení značky
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Vizuální a komunikační směr, který dělá z vašeho profilu a webu
                autoritu. Konzistentní brand mluví ještě před tím, než začnete
                prodávat.
              </p>
</div>
<div className="mt-8 flex items-end justify-center relative flex-grow">
<div className="flex overflow-hidden group-hover:shadow-lg transition-shadow duration-500 bg-gradient-to-b from-zinc-50 to-zinc-100 w-24 h-24 border-zinc-200 border rounded-full relative scale-50 items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:star-fall-bold-duotone" width="40"></iconify-icon>
</div>
<div className="absolute top-0 right-4 flex items-center gap-1.5 bg-white border border-zinc-100 px-2 py-1 rounded-full shadow-sm">
<div className="w-1.5 h-1.5 bg-[#E69F4A] rounded-full animate-pulse"></div>
<span className="text-[9px] font-semibold text-zinc-600 uppercase tracking-wide">
                  Autorita
                </span>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px]">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400">
<iconify-icon icon="solar:layers-bold-duotone" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center uppercase font-semibold mb-3" style={{fontSize: '10px', letterSpacing: '0.08em', color: 'var(--deep-nectarine)'}}>
                Systém
              </span>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight">
                Invisible Funnel — kompletní systém
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                Od positioningu a contentu přes reklamy po funnel logiku. Pro
                značky, které chtějí přitahovat správné klienty, ne jen views.
              </p>
</div>
<div className="mt-8 flex flex-col items-center justify-center relative flex-grow">
<div className="relative w-32 h-24 group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-x-0 bottom-0 h-10 bg-zinc-200 border border-zinc-300 rounded-xl transform translate-y-4 shadow-sm"></div>
<div className="absolute inset-x-0 bottom-4 h-10 bg-zinc-100 border border-zinc-200 rounded-xl transform translate-y-2 shadow-md"></div>
<div className="absolute inset-x-0 bottom-8 h-10 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-circle-bold-duotone" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="" id="o-nas" style={{borderTop: '1px solid var(--line)', padding: '100px 0'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="sr mb-14">
<span className="uppercase font-bold block mb-6" style={{fontSize: '12px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            04 — O nás
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
<div className="sr">
<h2 className="mb-8" style={{fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.05em', fontWeight: '700', lineHeight: '1.08', color: 'var(--onyx)'}}>
              Začínal jsem jako editor. Skončil jsem jako Brand Architect.
            </h2>
<p className="mb-5" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)'}}>
              Prvních několik let jsem pracoval jako editor. Střihal jsem pro
              tvůrce jako Tary, Flexybabka, Pan Čung, Geicha, Kuba Letenka nebo
              Kuba English. Za tu dobu naše střihy nasbíraly přes 370 milionů
              views.
            </p>
<p className="mb-5" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)'}}>
              Čísla vypadala dobře. Ale něco mi nesedelo. Viděl jsem, jak značky
              a tvůrci rostou na dosahu — a přesto bojují o klienty. Platili za
              reklamy, které tlačily. Za content, který křičel. Za funnely,
              které působily jako past. Algoritmus fungoval. Brand ne.
            </p>
<p className="mb-5" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)'}}>
              Začal jsem zkoumat, co skutečně přesvědčí člověka, aby chtěl — ne
              aby byl dotlačen. Jak vypadá obsah, který mění přesvědčení dřív,
              než někdo otevře DM. Jak brand buduje důvěru bez toho, aby
              prodával.
            </p>
<p className="mb-5" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)'}}>
              Z toho vznikl Invisible Funnel. Ne jako buzzword. Jako systém —
              postavený na psychologii pozornosti, změně přesvědčení a brand
              positioningu. Systém, kde content neprodává křikem, ale přirozenou
              cestou, po které člověk dojde sám k tomu, že chce.
            </p>
<p className="" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '400', lineHeight: '1.65', color: 'var(--onyx)'}}>
              Dnes nejsem editor. Jsem Brand Architect. A ZandaCreative je
              místo, kde tenhle systém stavíme pro vaši značku.
            </p>
</div>
<div className="sr flex items-start justify-center lg:justify-end">
<div className="w-full max-w-sm flex flex-col items-center justify-center text-center" style={{background: 'var(--wheat)', borderRadius: '22px', padding: '56px 40px', border: '1px solid rgba(10,23,29,0.05)'}}>
<span style={{fontSize: 'clamp(56px, 7vw, 80px)', fontWeight: '800', letterSpacing: '-0.06em', color: 'var(--oceanic)', lineHeight: '1'}}>
                370M+
              </span>
<span className="mt-3 font-light" style={{fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', color: 'var(--soft)'}}>
                views za poslední 3 roky
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[var(--bg)]" id="reference" style={{borderTop: '1px solid var(--line)', padding: '100px 0', overflow: 'hidden'}}>
<div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sr" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="">
<span className="uppercase font-bold block mb-6" style={{fontSize: '12px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            05 — Reference
          </span>
<h2 className="" style={{fontSize: 'clamp(36px, 4.5vw, 58px)', letterSpacing: '-0.06em', fontWeight: '700', lineHeight: '1.05', color: 'var(--onyx)', maxWidth: '700px'}}>
            Značky, pro které pozornost přinesla výsledky.
          </h2>
</div>

<div className="flex gap-2 shrink-0">
<button className="w-12 h-12 rounded-xl border border-[var(--line-strong)] hover:bg-zinc-100 transition-colors flex items-center justify-center text-[var(--onyx)]" id="ref-prev">
<iconify-icon className="text-lg" icon="lucide:arrow-left" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-xl border border-[var(--line-strong)] hover:bg-zinc-100 transition-colors flex items-center justify-center text-[var(--onyx)]" id="ref-next">
<iconify-icon className="text-lg" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-visible w-full h-[360px] lg:h-[400px] relative items-center justify-center sr" id="ref-carousel">
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="0" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white bg-[var(--oceanic)] text-lg">
              T
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Tary
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Energetický short-form content s precizním tempem a smyčkami, které
            drží pozornost a budují osobní brand.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="1" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-[var(--onyx)] bg-[var(--nectarine)] text-lg">
              KE
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Kuba English
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Edukační content navržený tak, aby byl srozumitelný, sledovatelný a
            zároveň posiloval zájem o nákup.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="2" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white bg-[var(--oceanic)] text-lg">
              G
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Geicha
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Obsah propojující estetiku, emoci a positioning značky do
            konzistentního vizuálního světa.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="3" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-[var(--onyx)] bg-[var(--nectarine)] text-lg">
              KL
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Kuba Letenka
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Travel content zaměřený na atmosféru, tok a zapamatovatelnost —
            budování značky přes silné příběhy.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="4" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white bg-[var(--oceanic)] text-lg">
              PČ
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Pan Čung
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Výrazný content s osobitým tempem a jasnou charakterovou linkou —
            brand, který je poznat na první pohled.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="5" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-[var(--onyx)] bg-[var(--nectarine)] text-lg">
              F
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Flexybabka
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Přirozený, lidský content, který buduje hlubokou důvěru skrz
            autenticitu a konzistentní komunikaci.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="6" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white bg-[var(--oceanic)] text-lg">
              S
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Stonkee
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Efektivní strategie pro růst komunity a prodeje, propojující
            vizuální atraktivitu a konverzní logiku.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="7" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-[var(--onyx)] bg-[var(--nectarine)] text-lg">
              R
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              Raego
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Emoční storytelling a hudební promo, které rezonuje s publikem a
            vytváří silné propojení se značkou.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="8" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-white bg-[var(--oceanic)] text-lg">
              4C
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              4CAMPS
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Zábavný a interaktivní obsah pro mladé publikum, navržený pro
            maximální retenci a sdílení.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
<div className="ref-carousel-card absolute w-[300px] lg:w-[400px] h-[360px] lg:h-[400px] bg-[var(--card-bg)] rounded-3xl shadow-[var(--card-shadow)] border border-[var(--card-border)] overflow-hidden flex flex-col justify-between p-8 transition-all duration-500 will-change-transform" data-index="9" style={{left: '50%'}}>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-full font-bold text-[var(--onyx)] bg-[var(--nectarine)] text-lg">
              DM
            </div>
<h3 className="font-semibold text-2xl text-[var(--onyx)] tracking-tight">
              DogMama
            </h3>
</div>
<p className="font-light text-[var(--soft)] leading-relaxed text-[0.95rem] flex-grow">
            Autentická komunikace budující důvěru pejskařů prostřednictvím tipů,
            rad a sdílených zkušeností.
          </p>
<div className="mt-4 flex justify-end">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-[var(--onyx)] transition-colors group-hover:bg-[var(--nectarine)]">
<iconify-icon className="text-lg" icon="lucide:plus"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8 sr" id="ref-dots">
<div className="w-2 h-2 rounded-full bg-[var(--onyx)] transition-colors dot-item cursor-pointer" data-index="0"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="1"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="2"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="3"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="4"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="5"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="6"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="7"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="8"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 transition-colors dot-item cursor-pointer" data-index="9"></div>
</div>
</section>

<section className="" id="proces" style={{borderTop: '1px solid var(--line)', padding: '100px 0'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="sr mb-6">
<span className="uppercase font-bold block mb-6" style={{fontSize: '12px', letterSpacing: '0.08em', color: 'var(--soft)'}}>
            06 — Proces
          </span>
<h2 className="" style={{fontSize: 'clamp(36px, 4.5vw, 58px)', letterSpacing: '-0.06em', fontWeight: '700', lineHeight: '1.05', color: 'var(--onyx)', maxWidth: '600px'}}>
            Od prvního hovoru k funnel systému.
          </h2>
</div>
<p className="sr mb-14" style={{fontSize: 'clamp(0.95rem, 1.1vw, 1.19rem)', fontWeight: '300', lineHeight: '1.65', color: 'var(--soft)', maxWidth: '640px'}}>
          Přinášíme strukturu, ne chaos. Každý krok má účel a klient vždy ví,
          kde v procesu jsme a co přijde dál.
        </p>
<div className="stagger-children">
<div className="process-item cursor-pointer" onclick="toggleProcess(this)" style={{borderTop: '1px solid var(--line)'}}>
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-5">
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)', minWidth: '32px'}}>
                  01
                </span>
<h3 className="font-semibold" style={{fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
                  Audit a cíl
                </h3>
</div>
<div className="process-icon flex items-center justify-center w-8 h-8 rounded-full" style={{background: 'rgba(10,23,29,0.04)'}}>
<iconify-icon icon="solar:minus-circle-linear" style={{color: 'var(--onyx)'}} width="18"></iconify-icon>
</div>
</div>
<div className="process-content" style={{paddingLeft: '52px'}}>
<p className="font-light" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', lineHeight: '1.6', color: 'var(--soft)', maxWidth: '540px'}}>
                Projdeme váš content, positioning, nabídku a prostor pro růst.
                Identifikujeme, kde dnes funnel selhává.
              </p>
</div>
</div>
<div className="process-item cursor-pointer" onclick="toggleProcess(this)" style={{borderTop: '1px solid var(--line)'}}>
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-5">
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)', minWidth: '32px'}}>
                  02
                </span>
<h3 className="font-semibold" style={{fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
                  Strategie
                </h3>
</div>
<div className="process-icon flex items-center justify-center w-8 h-8 rounded-full" style={{background: 'rgba(10,23,29,0.04)'}}>
<iconify-icon icon="solar:add-circle-linear" style={{color: 'var(--onyx)'}} width="18"></iconify-icon>
</div>
</div>
<div className="process-content" style={{paddingLeft: '52px'}}>
<p className="font-light" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', lineHeight: '1.6', color: 'var(--soft)', maxWidth: '540px'}}>
                Navrhujeme messaging, sekvenci změny přesvědčení a logiku
                konverze — celý systém na papíře.
              </p>
</div>
</div>
<div className="process-item cursor-pointer" onclick="toggleProcess(this)" style={{borderTop: '1px solid var(--line)'}}>
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-5">
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)', minWidth: '32px'}}>
                  03
                </span>
<h3 className="font-semibold" style={{fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
                  Podklady
                </h3>
</div>
<div className="process-icon flex items-center justify-center w-8 h-8 rounded-full" style={{background: 'rgba(10,23,29,0.04)'}}>
<iconify-icon icon="solar:add-circle-linear" style={{color: 'var(--onyx)'}} width="18"></iconify-icon>
</div>
</div>
<div className="process-content" style={{paddingLeft: '52px'}}>
<p className="font-light" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', lineHeight: '1.6', color: 'var(--soft)', maxWidth: '540px'}}>
                Řekneme vám přesně, co potřebujeme — nebo vytěžíme maximum z
                toho, co již máte.
              </p>
</div>
</div>
<div className="process-item cursor-pointer" onclick="toggleProcess(this)" style={{borderTop: '1px solid var(--line)'}}>
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-5">
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)', minWidth: '32px'}}>
                  04
                </span>
<h3 className="font-semibold" style={{fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
                  Exekuce
                </h3>
</div>
<div className="process-icon flex items-center justify-center w-8 h-8 rounded-full" style={{background: 'rgba(10,23,29,0.04)'}}>
<iconify-icon icon="solar:add-circle-linear" style={{color: 'var(--onyx)'}} width="18"></iconify-icon>
</div>
</div>
<div className="process-content" style={{paddingLeft: '52px'}}>
<p className="font-light" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', lineHeight: '1.6', color: 'var(--soft)', maxWidth: '540px'}}>
                Realizujeme výstupy s maximální péčí o tempo, messaging,
                estetiku i funkci každého kusu v rámci funnelu.
              </p>
</div>
</div>
<div className="process-item cursor-pointer" onclick="toggleProcess(this)" style={{borderTop: '1px solid var(--line)'}}>
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-5">
<span className="font-bold" style={{fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: 'var(--soft)', minWidth: '32px'}}>
                  05
                </span>
<h3 className="font-semibold" style={{fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)', letterSpacing: '-0.03em', color: 'var(--onyx)'}}>
                  Optimalizace
                </h3>
</div>
<div className="process-icon flex items-center justify-center w-8 h-8 rounded-full" style={{background: 'rgba(10,23,29,0.04)'}}>
<iconify-icon icon="solar:add-circle-linear" style={{color: 'var(--onyx)'}} width="18"></iconify-icon>
</div>
</div>
<div className="process-content" style={{paddingLeft: '52px'}}>
<p className="font-light" style={{fontSize: 'clamp(0.85rem, 0.95vw, 0.95rem)', lineHeight: '1.6', color: 'var(--soft)', maxWidth: '540px'}}>
                Sledujeme data a chování publika. Upravujeme detaily, hooky i
                flow tak, aby funnel konvertoval s maximální a dlouhodobou
                efektivitou.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-center bg-neutral-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21844782-ee2e-4575-a666-31b6edd04644_3840w.jpg)] bg-cover border-neutral-200 border-t pt-20 pb-16 relative" id="kontakt">
<div className="absolute inset-0 bg-neutral-950/60 mix-blend-multiply pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="max-w-3xl mx-auto text-center sr">
<div className="inline-flex bg-gradient-to-b from-white/10 to-white/0 rounded-full mb-6 pt-1 pr-4 pb-1 pl-4 backdrop-blur-lg gap-x-2 gap-y-2 items-center" style={{position: 'relative', border: '1px solid rgba(255,255,255,0.1)'}}>
<iconify-icon className="text-neutral-300" icon="solar:flash-circle-bold-duotone" width="18"></iconify-icon>
<span className="text-[11px] uppercase font-semibold text-white tracking-[0.18em]">
              Začněme spolupracovat
            </span>
</div>
<h2 className="text-4xl lg:text-5xl tracking-tight text-white leading-[1.05] mb-4 font-semibold">
            Získejte funnel, který přitahuje a prodává.
          </h2>
<p className="leading-relaxed text-base font-light text-neutral-300 max-w-2xl mr-auto mb-10 ml-auto">
            Domluvte si s námi bezplatnou 30minutovou konzultaci. Probereme vaši
            aktuální situaci, ukážeme si, kde váš současný marketing ztrácí
            pozornost, a navrhneme, jak by mohl vypadat váš
            <span className="font-semibold text-white">Invisible Funnel</span>
            .
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group inline-flex items-center justify-center rounded-full bg-white text-neutral-900 text-sm font-semibold px-6 py-3 shadow-[0_18px_45px_-24px_rgba(255,255,255,0.3)] hover:bg-neutral-100 transition-all btn-press" href="mailto:hello@zandacreative.cz">
              Domluvit konzultaci
              <iconify-icon className="ml-2" icon="solar:arrow-right-up-bold-duotone" width="18"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap gap-4 text-xs text-neutral-500 mt-8 gap-x-4 gap-y-4 items-center justify-center">
<div className="inline-flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-white/70">Nezávazný hovor, 30 minut</span>
</div>
<span className="hidden sm:inline text-neutral-700">•</span>
<div className="inline-flex items-center gap-1">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-bold-duotone" width="16"></iconify-icon>
<span className="text-white/70">Žádný tvrdý prodej</span>
</div>
</div>
</div>
</div>
</section>

<footer className="" style={{background: 'var(--onyx)', color: 'rgba(255, 255, 255, 0.6)', padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
<div className="" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 28px'}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 mb-16">
<div className="md:col-span-5 flex flex-col items-start">
<a className="flex items-center gap-0 shrink-0 text-white mb-6" href="#" style={{fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.04em'}}>
              Zanda
              <span className="" style={{position: 'relative'}}>
                C
                <span className="" style={{position: 'absolute', top: '-2px', right: '-5px', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--nectarine)'}}></span>
</span>
              reative
            </a>
<p className="font-light mb-6" style={{fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '320px'}}>
              Obsah, který mění přesvědčení. Brand, který prodává bez tlaku.
              Funnel, který funguje neviditelně.
            </p>
<div className="flex items-center gap-4">
<a aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full border transition-all border-white/10 hover:border-white hover:text-white" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="fa6-brands:instagram" width="18"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full border transition-all border-white/10 hover:border-white hover:text-white" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="fa6-brands:linkedin-in" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-3 md:col-start-7">
<h4 className="font-semibold mb-6 text-white" style={{letterSpacing: '-0.02em'}}>
              Navigace
            </h4>
<div className="flex flex-col gap-4 font-light text-sm">
<a className="transition-colors w-fit hover:text-white" href="#domu">
                Domů
              </a>
<a className="transition-colors w-fit hover:text-white" href="#sluzby">
                Služby
              </a>
<a className="transition-colors w-fit hover:text-white" href="#reference">
                Reference
              </a>
<a className="transition-colors w-fit hover:text-white" href="#o-nas">
                O nás
              </a>
<a className="transition-colors w-fit hover:text-white" href="#proces">
                Proces
              </a>
</div>
</div>
<div className="md:col-span-3">
<h4 className="font-semibold mb-6 text-white" style={{letterSpacing: '-0.02em'}}>
              Kontakt
            </h4>
<div className="flex flex-col gap-4 font-light text-sm">
<a className="transition-colors flex items-center gap-2 hover:text-white" href="mailto:hello@zandacreative.cz">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                hello@zandacreative.cz
              </a>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                Praha, Česká republika
              </span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 font-light text-xs" style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px'}}>
<p>
            ©
            <span id="year">2026</span>
            ZandaCreative. Všechna práva vyhrazena.
          </p>
<div className="flex gap-6">
<a className="transition-colors hover:text-white" href="#">
              Ochrana osobních údajů
            </a>
<a className="transition-colors hover:text-white" href="#">
              Obchodní podmínky
            </a>
</div>
</div>
</div>
</footer>

<button aria-label="Nahoru k hlavičce" className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center rounded-full" id="scroll-top" style={{background: 'var(--oceanic)', boxShadow: '0 10px 24px rgba(0,63,71,0.25)'}}>
<iconify-icon icon="solar:alt-arrow-up-linear" style={{color: '#fff'}} width="24"></iconify-icon>
</button>




    </>
  );
}
