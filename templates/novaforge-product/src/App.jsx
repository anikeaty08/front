import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function() {
      const container = document.getElementById('showcase-container');
      const parallaxImage = document.getElementById('parallax-image');
      let hasAnimated = false;
      
      // Set initial state
      container.style.transform = 'perspective(1000px) rotateX(30deg)';
      
      // Parallax scroll handler
      function handleParallax() {
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress relative to the container
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        
        // Only apply parallax when container is in viewport
        if (containerTop < windowHeight && containerTop + containerHeight > 0) {
          // Calculate parallax offset based on scroll position
          const scrollProgress = (windowHeight - containerTop) / (windowHeight + containerHeight);
          const parallaxOffset = (scrollProgress - 0.5) * 40; // Adjust 40 for intensity
          
          // Apply parallax transform
          parallaxImage.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
        }
      }
      
      // Add scroll listener for parallax
      window.addEventListener('scroll', handleParallax, { passive: true });
      
      // Initial parallax calculation
      handleParallax();
      
      // Intersection observer for container rotation animation
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              container.style.transform = 'perspective(1000px) rotateX(0deg)';
              hasAnimated = true;
            }, 300);
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      });
      
      observer.observe(container);
    })();
  


    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenu?.classList.add('open');
    });

    mobileMenuClose?.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
    });

    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.remove('open');
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-up, .slide-in-left, .slide-in-right, .blur-in, .scale-in').forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none absolute inset-0 -z-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse at center, black 0%, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, black 30%, transparent 70%)'}}></div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]"></div>
</div>

<header className="fixed z-50 fade-in bg-stone-950/90 w-full border-white/5 border-b top-0 backdrop-blur-md" style={{animationPlayState: 'running'}}>
<div className="flex md:px-6 max-w-7xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<a className="flex items-center gap-3" href="#home">
<span className="inline-grid place-items-center shadow-violet-700/30 mix-blend-screen w-12 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a88b5d6e-a467-4bc9-9e3a-8ac6ac068f98_320w.jpg)] bg-cover rounded-xl pr-8 pl-8 invert-0" style={{}}>
</span>
</a>
<nav className="hidden items-center gap-6 md:flex lg:gap-8">
<a className="transition-colors hover:text-white text-sm text-white/70" href="#home">Home</a>
<a className="transition-colors hover:text-white text-sm text-white/70" href="#about">About</a>
<a className="transition-colors hover:text-white text-sm text-white/70" href="/#work">Work</a>
<a className="transition-colors hover:text-white text-sm text-white/70" href="#services">Services</a>
<a className="transition-colors hover:text-white text-sm text-white/70" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden transition hover:border-white/20 hover:text-white md:inline-flex text-sm text-white/80 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur" href="#contact">
           Get in touch
        </a>
<button aria-label="Menu" className="inline-flex transition hover:border-white/20 hover:text-white md:hidden text-white/80 border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-2 backdrop-blur" id="mobile-menu-btn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 5h16"></path><path className="" d="M4 12h16"></path><path className="" d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="mobile-menu fixed md:hidden bg-[#0b0b0f]/95 w-80 h-full max-w-[85vw] border-white/10 border-l top-0 right-0 backdrop-blur-md" id="mobile-menu">
<div className="flex border-white/10 border-b pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-semibold">Menu</span>
<button className="hover:text-white text-white/80 border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-2" id="mobile-menu-close">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 6 6 18"></path><path className="" d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex flex-col bg-[#0b0b0f] rounded-none mt-0 mb-0 pt-6 pr-6 pb-6 pl-6 shadow-lg backdrop-blur-lg gap-x-1 gap-y-1">
<a className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white transition-all" href="#home">Home</a>
<a className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white transition-all" href="#about">About</a>
<a className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white transition-all" href="#work">Work</a>
<a className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white transition-all" href="#services">Services</a>
<a className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white transition-all" href="#contact">Contact</a>
<div className="mt-4 pt-4 border-t border-white/10">
<a className="flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:border-white/20 hover:bg-white/10 transition-all" href="#contact">
<svg className="mr-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Get in touch
          </a>
</div>
</nav>
</div>
</header>

<section className="sm:pt-32 md:px-6 md:pt-40 lg:pt-44 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-8 pl-4 relative" id="home">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex slide-in-right overflow-hidden text-xs text-white/80 bg-[#000000]/5 border-white/10 border rounded-full mb-4 pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" style={{animationPlayState: 'running'}}>Explore our journey<span className="inline-flex items-center justify-center text-violet-400 bg-violet-600/20 w-6 h-6 rounded-full">

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle className="" cx="4" cy="20" r="2"></circle></svg>
</span></div>
<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl slide-in-up animate-delay-200" style={{animationPlayState: 'running'}}>
        Pioneering Intelligent Products with <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Precision</span>
</h1>
<p className="leading-relaxed sm:text-lg slide-in-up animate-delay-400 text-base text-white/70 max-w-2xl mt-5 mr-auto ml-auto" style={{animationPlayState: 'running'}}>
        NovaForge is a product studio for ambitious teams. We blend strategy, design, and engineering to launch delightful, scalable digital experiences.
      </p>
<div className="flex flex-col gap-3 sm:flex-row slide-in-up animate-delay-600 mt-8 items-center justify-center" style={{animationPlayState: 'running'}}>
<a className="button hover:from-violet-400 hover:to-indigo-400 shadow-violet-500/25 transition-colors sm:w-auto ring-white/10 ring-1 text-sm font-medium text-white w-full rounded-xl shadow-lg" href="#work" style={{-HButton: '48px', -WButton: '102px', -Round: '0.75rem', cursor: 'pointer', position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, rgb(122, 90, 248), rgb(122, 90, 248))', borderRadius: 'var(--round)', border: 'none', padding: '12px 18px'}}>
<div className="fold" style={{zIndex: '1', position: 'absolute', top: '0px', right: '0px', height: '1rem', width: '1rem', display: 'inline-block', background: 'radial-gradient(100% 75% at 55% center, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)', boxShadow: 'black 0px 0px 3px', borderBottomLeftRadius: '0.5rem', borderTopRightRadius: 'var(--round)'}}></div>
<div className="points_wrapper" style={{overflow: 'hidden', width: '100%', height: '100%', pointerEvents: 'none', position: 'absolute', zIndex: '1'}}>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '10%', opacity: '1', animationDuration: '2.35s', animationDelay: '0.2s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '30%', opacity: '0.7', animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '25%', opacity: '0.8', animationDuration: '2.2s', animationDelay: '0.1s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '44%', opacity: '0.6', animationDuration: '2.05s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '50%', opacity: '1', animationDuration: '1.9s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '75%', opacity: '0.5', animationDuration: '1.5s', animationDelay: '1.5s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '88%', opacity: '0.9', animationDuration: '2.2s', animationDelay: '0.2s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '58%', opacity: '0.8', animationDuration: '2.25s', animationDelay: '0.2s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '98%', opacity: '0.6', animationDuration: '2.6s', animationDelay: '0.1s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '65%', opacity: '1', animationDuration: '2.5s', animationDelay: '0.2s'}}></div>
</div>
<div className="inner" style={{zIndex: '2', gap: '6px', position: 'relative', width: '100%', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Explore Now<svg className="lucide lucide-rocket icon" data-lucide="rocket" fill="white" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path className="" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path className="" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path className="" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div>
<style>
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      inset: var(--space);
      transition: all 0.5s ease-in-out;
      border-radius: calc(var(--round) - var(--space));
      z-index: 0;
    }
    .button::before {
      --space: 1px;
      background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%);
    }
    .button::after {
      --space: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8);
    }
    .button:active {
      transform: scale(0.95);
    }
    .fold::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 150%;
      height: 150%;
      transform: rotate(45deg) translateX(0%) translateY(-18px);
      background-color: #e8e8e8;
      pointer-events: none;
    }
    .button:hover .fold {
      margin-top: -1rem;
      margin-right: -1rem;
    }
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
      85% {
        opacity: 0;
      }
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
    .button:focus svg.icon {
      fill: white;
    }
    .button:hover svg.icon {
      fill: transparent;
      animation: dasharray 1s linear forwards, filled 0.1s linear forwards 0.95s;
    }
    @keyframes dasharray {
      from {
        stroke-dasharray: 0 0 0 0;
      }
      to {
        stroke-dasharray: 68 68 0 0;
      }
    }
    @keyframes filled {
      to {
        fill: white;
      }
    }
  </style>
</a>
<a className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition-all hover:border-white/20 hover:bg-white/10 w-full sm:w-auto justify-center" href="#contact">
<svg className="mr-2 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Book a call
        </a>
</div>
</div>

</section>

<section className="relative md:px-6 sm:pb-16 md:pb-20 max-w-7xl mt-14 mr-auto ml-auto pr-4 pb-12 pl-4">
<div className="relative mx-auto w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] shadow-2xl shadow-black/50 transition-all duration-1000 ease-out blur-in" id="showcase-container" style={{transform: 'perspective(1000px) rotateX(0deg)', willChange: 'transform', animationPlayState: 'running'}}>

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
<div className="flex gap-2 sm:px-5 bg-black/50 border-white/10 border-b pt-3 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-center">
<span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-red-500/80"></span>
<span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-yellow-500/80"></span>
<span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-green-500/80"></span>
<span className="ml-2 sm:ml-3 text-xs text-white/60">NovaForge Studio</span>
</div>
<div className="relative overflow-hidden">
<img alt="Product dashboard preview" className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[62vh] w-full object-cover transition-transform duration-75 ease-out" id="parallax-image" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a6ea5042-fd78-4888-b5e1-47f268a0569b_1600w.jpg" style={{transform: 'translateY(8.61256px) scale(1.1)', willChange: 'transform'}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent"></div>
<div className="bg-gradient-to-r from-violet-600/20 via-transparent to-fuchsia-600/20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0 hue-rotate-30 brightness-90"></div>
</div>
</div>

</section>

<section className="md:px-6 lg:py-20 sm:pt-16 sm:pb-16 xl:pt-30 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4" id="about">
<div className="grid lg:gap-10 xl:gap-16 lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
<div className="order-2 lg:order-1">
<div className="relative overflow-hidden shadow-black/50 bg-white/5 border-white/10 border rounded-2xl sm:rounded-3xl shadow-2xl slide-in-left" style={{transform: 'perspective(1000px) rotateX(0deg)', animationPlayState: 'running'}}>
<img alt="Team collaborating in modern studio" className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[62vh] w-full max-h-full object-cover saturate-50" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/44cd4dc8-e179-4757-ab22-93db367d24e3_3840w.jpg" style={{}}/>
<div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-violet-600/10 via-transparent to-fuchsia-600/10 mix-blend-overlay"></div>
<div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 2px rgba(124,58,237,0.15), inset 0 40px 120px rgba(0,0,0,0.35)'}}></div>
</div>
</div>
<div className="order-1 lg:order-2 h-full max-h-full relative">
<div className="inline-flex slide-in-right overflow-hidden text-xs text-white/80 bg-[#000000]/5 border-white/10 border rounded-full mb-4 pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" style={{animationPlayState: 'running'}}>
<span className="inline-flex items-center justify-center text-violet-400 bg-violet-600/20 w-6 h-6 rounded-full">

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
          About NovaForge
        </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mt-4 slide-in-right animate-delay-200" style={{animationPlayState: 'running'}}>
          Shaping Tomorrow
          <span className="block bg-clip-text font-light text-transparent bg-neutral-50/60">With Bold Software</span>
</h2>
<p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 slide-in-right animate-delay-400" style={{animationPlayState: 'running'}}>
          NovaForge is a next‑gen product studio for visionaries, researchers, and builders crafting the future of intelligent experiences.
        </p>
<div className="relative overflow-hidden h-60 sm:h-72 md:h-80 max-h-full border-white/10 rounded-2xl sm:rounded-3xl mt-6 sm:mt-8 shadow-lg backdrop-blur-sm slide-in-right animate-delay-600" style={{animationPlayState: 'running'}}>
<div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0b0b0f] to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0b0b0f] to-transparent z-10 pointer-events-none"></div>
<div className="animate-scroll-up pt-6 sm:pt-8 pr-4 sm:pr-6 pb-6 sm:pb-8 pl-4 sm:pl-6 space-y-4" style={{animation: 'scrollUp 12s linear infinite'}}>
<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg opacity-0 translate-y-4" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', animation: 'fadeInUp 0.8s ease-out 0.2s forwards'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white">Strategy</span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight">Full‑Stack Product Development</h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70">
      From concept to launch, we handle strategy, design, and engineering. Our end‑to‑end approach ensures seamless user experiences and scalable technical foundations.
    </p>
</div>
<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg opacity-0 translate-y-4" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', animation: 'fadeInUp 0.8s ease-out 0.4s forwards'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white">Design</span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight">User‑Centered Design Excellence</h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70">
      Beautiful, intuitive interfaces backed by research and testing. We craft experiences that users love and that drive business results through thoughtful design systems.
    </p>
</div>
<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg opacity-0 translate-y-4" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', animation: 'fadeInUp 0.8s ease-out 0.6s forwards'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white">Engineering</span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight">Scalable Technical Architecture</h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70">
      Modern, maintainable codebases built for growth. We use proven technologies and best practices to deliver reliable, performant applications that stand the test of time.
    </p>
</div>

<div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg" style={{borderTop: '1px solid rgb(255 255 255 / 0.4)', boxShadow: '0 -2px 8px rgba(255, 255, 255, 0.15), 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}>
<div className="flex items-start justify-between">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 text-white border border-white/20">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white">Strategy</span>
</div>
<h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold tracking-tight">Full‑Stack Product Development</h3>
<p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70">
      From concept to launch, we handle strategy, design, and engineering. Our end‑to‑end approach ensures seamless user experiences and scalable technical foundations.
    </p>
</div>
</div>
</div>
<style>
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-25%);
            }
          }

          .animate-scroll-up:hover {
            animation-play-state: paused;
          }
        </style>
</div>
</div>
</section>

<section className="md:px-6 lg:pb-16 xl:pb-20 sm:mt-16 md:mt-20 sm:py-12 bg-neutral-50/5 max-w-7xl border-neutral-50/10 border rounded-3xl mt-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4" id="work">
<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="slide-in-left" style={{animationPlayState: 'running'}}>
<div className="inline-flex gap-2 text-xs text-white/80 bg-white/5 border-white/10 border rounded-full mb-4 pt-2 pr-3 pb-2 pl-3 backdrop-blur items-center">
<span className="inline-flex items-center justify-center text-[#ffffff] bg-stone-50/20 w-6 h-6 rounded-full">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 8h10"></path><path className="" d="M7 12h4"></path><path d="M7 16h9"></path><rect className="" height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</span>
          Featured Projects
        </div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Selected<span className="bg-clip-text font-light italic text-transparent font-playfair bg-[#ffffff]/60 pr-2 pl-2">Work</span></h2>
<p className="mt-2 text-white/70 text-sm sm:text-base">Recent projects that showcase our approach to intelligent product design.</p>
</div>
<a className="hidden items-center hover:text-white sm:inline-flex group text-sm italic text-white/80 slide-in-right animate-delay-200" href="#" style={{animationPlayState: 'running'}}>
        Browse all
        <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
<a className="group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] transition-all hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02] slide-in-up animate-delay-200" href="#" style={{animationPlayState: 'paused'}}>
<div className="relative saturate-0">
<img alt="Mountain project" className="h-40 sm:h-48 md:h-56 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c36a35c4-e075-44fd-a671-2b81d4b23ee4_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-fuchsia-600/20 mix-blend-overlay"></div>
<div className="sm:top-4 sm:left-4 absolute top-3 left-3">
<span className="inline-flex items-center sm:px-3 text-xs text-white bg-black/40 border-white/20 border rounded-full pt-1 pr-2 pb-1 pl-2 backdrop-blur">Platform</span>
</div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span>Scale-up</span>
<span className="h-1 w-1 rounded-full bg-white/20"></span>
<span>2024</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">Summit OS</h3>
<p className="mt-1 text-xs sm:text-sm text-white/70">Telemetry, offline sync, and predictive routing for outdoor teams.</p>
<div className="flex text-xs font-medium text-[#ffffff] mt-3 items-center">
<span className="">View project</span>
<svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group overflow-hidden sm:rounded-2xl transition-all hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02] slide-in-up animate-delay-400 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/10 border rounded-xl" href="#" style={{animationPlayState: 'paused'}}>
<div className="relative saturate-0">
<img alt="Analytics dashboard" className="h-40 sm:h-48 md:h-56 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a94f0892-d87e-4173-ba0b-b5a019b0ca3f_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-teal-600/20 mix-blend-overlay"></div>
<div className="absolute top-3 sm:top-4 left-3 sm:left-4">
<span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-2 sm:px-3 py-1 text-xs text-white backdrop-blur">AI</span>
</div>
</div>
<div className="sm:p-5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="">Analytics</span>
<span className="h-1 w-1 rounded-full bg-white/20"></span>
<span className="">2024</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">Neon Metrics</h3>
<p className="mt-1 text-xs sm:text-sm text-white/70">LLM-assisted insights for product, growth, and operations teams.</p>
<div className="flex text-xs font-medium text-[#ffffff] mt-3 items-center">
<span className="">View project</span>
<svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
<a className="group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] transition-all hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.02] slide-in-up animate-delay-600 md:col-span-2 lg:col-span-1" href="#" style={{animationPlayState: 'paused'}}>
<div className="relative">
<img alt="Mobile app" className="h-40 sm:h-48 md:h-56 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5162c07d-8a65-4a42-9a8c-c48dbea36297_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 via-transparent to-blue-600/20 mix-blend-overlay"></div>
<div className="absolute top-3 sm:top-4 left-3 sm:left-4">
<span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-2 sm:px-3 py-1 text-xs text-white backdrop-blur">Consumer</span>
</div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 text-xs text-white/60 mb-2">
<span className="">Mobile</span>
<span className="h-1 w-1 rounded-full bg-white/20"></span>
<span className="">2024</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">Lumen Journal</h3>
<p className="mt-1 text-xs sm:text-sm text-white/70">A calm, privacy-first journal with fast sync and elegant gestures.</p>
<div className="flex text-xs font-medium text-[#ffffff] mt-3 items-center">
<span>View project</span>
<svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</section>

<section className="md:px-6 lg:pb-16 xl:pb-20 sm:mt-16 md:mt-20 sm:py-12 bg-neutral-50/5 max-w-7xl border-neutral-50/10 border rounded-3xl mt-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="sm:p-8 md:p-10 sm:rounded-3xl border-0 rounded-2xl pt-6 pr-6 pb-6 pl-6 blur-in backdrop-blur-sm" style={{animationPlayState: 'paused'}}>
<div className="mb-6 sm:mb-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur mb-4 slide-in-up" style={{animationPlayState: 'paused'}}>
<span className="inline-flex items-center justify-center text-[#ffffff] bg-stone-50/20 w-6 h-6 rounded-full">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
</span>
          Core Values
        </div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight slide-in-up animate-delay-200" style={{animationPlayState: 'paused'}}>
          How We <span className="bg-clip-text font-light italic text-transparent font-playfair bg-[#ffffff]/60 px-2">Deliver</span>
</h2>
<p className="mt-2 text-white/70 text-sm sm:text-base slide-in-up animate-delay-400" style={{animationPlayState: 'paused'}}>Three principles that guide every project we take on.</p>
</div>
<div className="overflow-hidden sm:rounded-3xl sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 max-w-7xl max-h-fit border-stone-50 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative saturate-100" style={{backgroundColor: '#0f0f14', backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)', backgroundSize: '16px 16px', backgroundPosition: '0 0, 8px 8px', border: '1px solid rgba(255, 255, 255, 0.08)'}}>

<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400/80 to-purple-500/70 w-60 transition-all duration-1000 ease-in-out" id="top-flare" style={{animation: 'moveTopFlare 4s linear infinite'}}></div>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 bg-gradient-to-r from-transparent via-blue-400/30 to-purple-500/30 w-60 h-2 rounded-full blur-sm transition-all duration-1000 ease-in-out" id="top-flare-glow" style={{animation: 'moveTopFlare 4s linear infinite'}}></div>

<div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-px bg-gradient-to-l from-transparent via-cyan-400/80 to-teal-500/70 w-60 transition-all duration-1000 ease-in-out" id="bottom-flare" style={{animation: 'moveBottomFlare 4s linear infinite'}}></div>
<div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 bg-gradient-to-l from-transparent via-cyan-400/30 to-teal-500/30 w-60 h-2 rounded-full blur-sm transition-all duration-1000 ease-in-out" id="bottom-flare-glow" style={{animation: 'moveBottomFlare 4s linear infinite'}}></div>

<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f0f14] via-[#0f0f14]/80 to-transparent z-10"></div>

<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f0f14] via-[#0f0f14]/80 to-transparent z-10"></div>

<div className="scroll-container flex max-h-fit gap-x-6 gap-y-6" style={{animation: 'scrollLeft 20s linear infinite'}}>
<div className="slide-in-up animate-delay-600 flex-none max-h-fit shadow-sm backdrop-blur-sm" style={{animationPlayState: 'paused', width: '280px'}}>
<div className="relative sm:rounded-2xl sm:p-6 bg-neutral-50/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-none">
<div className="flex items-start justify-between mb-4">
<div className="inline-flex sm:h-12 sm:w-12 sm:rounded-xl text-[#ffffff] bg-[#ffffff]/20 w-10 h-10 border-[#ffffff]/30 border rounded-lg items-center justify-center">
<svg className="sm:h-6 sm:w-6 w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white/80">01</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">Vision First</h3>
<p className="text-sm sm:text-base text-white/70 leading-relaxed">
          We start with your big picture goals and work backwards to create solutions that truly matter. Every design decision serves the larger vision.
        </p>
</div>
</div>
<div className="slide-in-up animate-delay-600 flex-none max-h-fit shadow-sm backdrop-blur-sm" style={{animationPlayState: 'paused', width: '280px'}}>
<div className="relative sm:rounded-2xl sm:p-6 bg-neutral-50/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-none">
<div className="flex items-start justify-between mb-4">
<div className="inline-flex sm:h-12 sm:w-12 sm:rounded-xl text-[#ffffff] bg-[#ffffff]/20 w-10 h-10 border-[#ffffff]/30 border rounded-lg items-center justify-center">
<svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path d="m2 17 10 5 10-5"></path>
<path d="m2 12 10 5 10-5"></path>
</svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white/80">02</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">Built to Scale</h3>
<p className="text-sm sm:text-base text-white/70 leading-relaxed">
          Our architecture and design systems grow with your business. We build foundations that handle today's needs and tomorrow's ambitions.
        </p>
</div>
</div>
<div className="slide-in-up animate-delay-600 flex-none max-h-fit shadow-sm backdrop-blur-sm" style={{animationPlayState: 'paused', width: '280px'}}>
<div className="relative sm:rounded-2xl sm:p-6 bg-neutral-50/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-none">
<div className="flex items-start justify-between mb-4">
<div className="inline-flex sm:h-12 sm:w-12 sm:rounded-xl text-[#ffffff] bg-[#ffffff]/20 w-10 h-10 border-[#ffffff]/30 border rounded-lg items-center justify-center">
<svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white/80">03</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">Speed &amp; Quality</h3>
<p className="text-sm sm:text-base text-white/70 leading-relaxed">
          We move fast without breaking things. Our proven processes and skilled team deliver exceptional results on ambitious timelines.
        </p>
</div>
</div>
<div className="slide-in-up animate-delay-600 flex-none max-h-fit shadow-sm backdrop-blur-sm" style={{animationPlayState: 'paused', width: '280px'}}>
<div className="relative sm:rounded-2xl sm:p-6 bg-neutral-50/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-none">
<div className="flex items-start justify-between mb-4">
<div className="inline-flex sm:h-12 sm:w-12 sm:rounded-xl text-[#ffffff] bg-[#ffffff]/20 w-10 h-10 border-[#ffffff]/30 border rounded-lg items-center justify-center">
<svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
<path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
</svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white/80">04</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">User Tested</h3>
<p className="text-sm sm:text-base text-white/70 leading-relaxed">
          Every feature is validated with real users through research and testing. We create experiences based on data, not assumptions.
        </p>
</div>
</div>
<div className="slide-in-up animate-delay-600 shadow-sm backdrop-blur-sm flex-none" style={{animationPlayState: 'paused', width: '280px'}}>
<div className="relative sm:rounded-2xl sm:p-6 bg-neutral-50/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-none">
<div className="flex items-start justify-between mb-4">
<div className="inline-flex sm:h-12 sm:w-12 sm:rounded-xl text-[#ffffff] bg-[#ffffff]/20 w-10 h-10 border-[#ffffff]/30 border rounded-lg items-center justify-center">
<svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-6 0v4"></path>
<rect height="11" rx="2" ry="2" width="20" x="2" y="9"></rect>
</svg>
</div>
<span className="rounded-full border border-white/20 bg-white/10 px-2 sm:px-3 py-1 text-xs text-white/80">05</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">Security First</h3>
<p className="text-sm sm:text-base text-white/70 leading-relaxed">
          Built with security in mind from day one. We implement industry best practices to protect your data and your users.
        </p>
</div>
</div>
</div>
<style>
    @keyframes scrollLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes moveTopFlare {
      0% {
        left: -240px;
      }
      100% {
        left: calc(100% + 0px);
      }
    }

    @keyframes moveBottomFlare {
      0% {
        right: -240px;
      }
      100% {
        right: calc(100% + 0px);
      }
    }

    .scroll-container:hover {
      animation-play-state: paused;
    }

    .scroll-container {
      will-change: transform;
    }
  </style>
</div></div>
</section>

<section className="sm:py-20 md:px-6 lg:py-24 xl:py-32 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative" id="contact">
<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm">

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
<div className="relative sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 text-center pt-12 pr-6 pb-12 pl-6 blur-none">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur mb-6 slide-in-up" style={{animationPlayState: 'paused'}}>
<span className="inline-flex items-center justify-center text-[#ffffff] bg-stone-50/20 w-6 h-6 rounded-full">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
</span>
          Get in Touch
        </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 slide-in-up animate-delay-200" style={{animationPlayState: 'paused'}}>
          Ready to Build Something
          <span className="block bg-clip-text font-light text-transparent bg-neutral-50/60">Extraordinary?</span>
</h2>
<p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-white/70 mb-8 slide-in-up animate-delay-400" style={{animationPlayState: 'paused'}}>
          Let's discuss your vision and how we can help bring it to life. We're always excited to work on ambitious projects with forward-thinking teams.
        </p>
<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center slide-in-up animate-delay-600" style={{animationPlayState: 'paused'}}>
<a className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/15 w-full sm:w-auto justify-center group" href="mailto:hello@novaforge.studio">
<svg className="mr-2 h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            hello@novaforge.studio
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="button hover:from-violet-400 hover:to-indigo-400 shadow-violet-500/25 transition-colors sm:w-auto text-sm font-medium text-white w-full ring-white/10 ring-1 rounded-xl shadow-lg" href="#work" style={{-HButton: '48px', -WButton: '102px', -Round: '0.75rem', cursor: 'pointer', position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, rgb(122, 90, 248), rgb(122, 90, 248))', borderRadius: 'var(--round)', border: 'none', padding: '12px 18px'}}>
<div className="fold" style={{zIndex: '1', position: 'absolute', top: '0px', right: '0px', height: '1rem', width: '1rem', display: 'inline-block', background: 'radial-gradient(100% 75% at 55% center, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%)', boxShadow: 'black 0px 0px 3px', borderBottomLeftRadius: '0.5rem', borderTopRightRadius: 'var(--round)'}}></div>
<div className="points_wrapper" style={{overflow: 'hidden', width: '100%', height: '100%', pointerEvents: 'none', position: 'absolute', zIndex: '1'}}>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '10%', opacity: '1', animationDuration: '2.35s', animationDelay: '0.2s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '30%', opacity: '0.7', animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '25%', opacity: '0.8', animationDuration: '2.2s', animationDelay: '0.1s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '44%', opacity: '0.6', animationDuration: '2.05s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '50%', opacity: '1', animationDuration: '1.9s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '75%', opacity: '0.5', animationDuration: '1.5s', animationDelay: '1.5s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '88%', opacity: '0.9', animationDuration: '2.2s', animationDelay: '0.2s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '58%', opacity: '0.8', animationDuration: '2.25s', animationDelay: '0.2s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '98%', opacity: '0.6', animationDuration: '2.6s', animationDelay: '0.1s'}}></div>
<div className="point" style={{bottom: '-10px', position: 'absolute', animation: 'floating-points infinite ease-in-out', pointerEvents: 'none', width: '2px', height: '2px', backgroundColor: '#fff', borderRadius: '9999px', left: '65%', opacity: '1', animationDuration: '2.5s', animationDelay: '0.2s'}}></div>
</div>
<div className="inner" style={{zIndex: '2', gap: '6px', position: 'relative', width: '100%', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '500', lineHeight: '1.5'}}>Book a call<svg className="lucide lucide-rocket icon" data-lucide="rocket" fill="white" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path className="" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path className="" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path className="" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div>
<style>
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      inset: var(--space);
      transition: all 0.5s ease-in-out;
      border-radius: calc(var(--round) - var(--space));
      z-index: 0;
    }
    .button::before {
      --space: 1px;
      background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%);
    }
    .button::after {
      --space: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8);
    }
    .button:active {
      transform: scale(0.95);
    }
    .fold::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 150%;
      height: 150%;
      transform: rotate(45deg) translateX(0%) translateY(-18px);
      background-color: #e8e8e8;
      pointer-events: none;
    }
    .button:hover .fold {
      margin-top: -1rem;
      margin-right: -1rem;
    }
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
      85% {
        opacity: 0;
      }
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
    .button:focus svg.icon {
      fill: white;
    }
    .button:hover svg.icon {
      fill: transparent;
      animation: dasharray 1s linear forwards, filled 0.1s linear forwards 0.95s;
    }
    @keyframes dasharray {
      from {
        stroke-dasharray: 0 0 0 0;
      }
      to {
        stroke-dasharray: 68 68 0 0;
      }
    }
    @keyframes filled {
      to {
        fill: white;
      }
    }
  </style>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-gradient-to-b from-transparent to-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/586fe153-4525-4bc0-b6ff-39cbac276d12_3840w.jpg)] bg-cover border-white/10 border-t hue-rotate-30 saturate-50">
<div className="md:px-6 lg:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="lg:col-span-2">
<a className="flex items-center gap-3 mb-4" href="#home">
<span className="inline-grid place-items-center shadow-violet-700/30 mix-blend-screen w-12 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a88b5d6e-a467-4bc9-9e3a-8ac6ac068f98_320w.jpg)] bg-cover rounded-xl pr-8 pl-8 invert-0 saturate-100" style={{}}>
</span>
</a>
<p className="max-w-md text-sm text-white/70 leading-relaxed">
            A product studio crafting intelligent digital experiences for ambitious teams. Based in San Francisco, working globally.
          </p>
</div>
<div className="">
<h3 className="text-sm font-medium text-white mb-4">Services</h3>
<ul className="space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white transition-colors" href="#services">Product Strategy</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">UI/UX Design</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">Full-Stack Development</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">AI Integration</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-medium text-white mb-4">Connect</h3>
<ul className="space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white transition-colors" href="mailto:hello@novaforge.studio">Email</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
<p className="text-xs text-white/50">
          © 2025 NovaForge. All rights reserved.
        </p>
<div className="flex gap-6 text-xs text-white/50">
<a className="hover:text-white/80 transition-colors" href="#">Privacy</a>
<a className="hover:text-white/80 transition-colors" href="#">Terms</a>
<a className="hover:text-white/80 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
