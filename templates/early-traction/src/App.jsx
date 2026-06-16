import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      document.addEventListener('DOMContentLoaded', () => {
        // Navbar Scroll Logic (Scroll Down to Hide, Scroll Up to Show)
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;

        if (navbar) {
          window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Logic:
            // 1. If scrolling DOWN (current > last) AND not at the very top (current > 10) -> Hide
            // 2. If scrolling UP (current < last) -> Show
            // 3. Always show at very top (current < 10) for safety
            
            if (currentScrollY > lastScrollY && currentScrollY > 10) {
              navbar.classList.add('-translate-y-full');
            } else {
              navbar.classList.remove('-translate-y-full');
            }
            
            lastScrollY = currentScrollY;
          });
        }

        // Mobile Carousel Logic (Ken Burns)
        const carousel = document.getElementById('mobileKenBurnsCarousel');
        const items = document.querySelectorAll('.mobile-carousel-item');
        
        if (carousel && items.length > 0) {
          const observer = new IntersectionObserver((entries) => {
             entries.forEach(entry => {
                if (entry.isIntersecting) {
                   entry.target.classList.add('ken-burns-active');
                   entry.target.classList.add('scale-100');
                   entry.target.classList.remove('scale-95');
                   entry.target.classList.remove('opacity-60');
                } else {
                   entry.target.classList.remove('ken-burns-active');
                   entry.target.classList.add('scale-95');
                   entry.target.classList.add('opacity-60');
                   entry.target.classList.remove('scale-100');
                }
             });
          }, { threshold: 0.6 });
          
          items.forEach(item => observer.observe(item));
        }

        // Process Section Accordion & Scroll Behavior
        window.toggleProcess = function(index) {
          const steps = document.querySelectorAll('.process-step-item');
          
          // Desktop Logic (Vertical Bar)
          const progressBar = document.getElementById('process-progress-bar');
          if (progressBar && window.innerWidth >= 768) {
             const percentage = (index * 25) + 12.5; // Center of segment
             progressBar.style.height = percentage + '%';
          }

          // Toggle Classes
          steps.forEach((step, i) => {
             const content = step.querySelector('.process-content');
             const chevron = step.querySelector('.process-chevron');
             
             if (i === index) {
                // Active
                step.classList.add('process-step-active');
                step.classList.remove('md:process-step-inactive');
                step.classList.remove('process-step-inactive');
                
                // Mobile Accordion
                if (window.innerWidth < 768) {
                  content.classList.remove('hidden');
                  if(chevron) chevron.style.transform = 'rotate(180deg)';
                } else {
                   // Desktop: Ensure visible but rely on opacity class
                   content.classList.remove('hidden');
                }

             } else {
                // Inactive
                step.classList.remove('process-step-active');
                step.classList.add('md:process-step-inactive');
                step.classList.add('process-step-inactive');

                // Mobile Accordion
                if (window.innerWidth < 768) {
                  content.classList.add('hidden');
                  if(chevron) chevron.style.transform = 'rotate(0deg)';
                } else {
                   // Desktop: Keep visible structure, just dimmed
                   content.classList.remove('hidden');
                }
             }
          });
        };

        // Scroll Observer for Process Steps
        const processSteps = document.querySelectorAll('.process-step-item');
        const processObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Find the index of the intersecting element
              const index = Array.from(processSteps).indexOf(entry.target);
              if (index !== -1) {
                toggleProcess(index);
              }
            }
          });
        }, {
          root: null,
          rootMargin: '-40% 0px -40% 0px', // Trigger when element is in the vertical center 20% of screen
          threshold: 0
        });

        // Observe each step only on desktop where scroll effect matters most
        if(window.innerWidth >= 768) {
             processSteps.forEach(step => processObserver.observe(step));
        } else {
             // Initialize first step active on mobile
             toggleProcess(0);
        }

        // Footer Parallax Effect
        const footerText = document.getElementById('footer-parallax-text');
        if (footerText) {
          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;
            
            // Calculate distance from bottom
            const distanceToBottom = bodyHeight - (scrollY + windowHeight);
            
            // Only animate when near bottom (last 800px)
            if (distanceToBottom < 800) {
              // Map 800px -> 0px to TranslateX -100px -> 0px
              const move = Math.max(0, (distanceToBottom / 800) * -150);
              footerText.style.transform = `translateX(${move}px)`;
            }
          });
        }
        
        // Rotating Words in Hero
        const words = document.querySelectorAll('.glitch-word');
        let currentWord = 0;
        
        if(words.length > 0) {
            setInterval(() => {
                words[currentWord].classList.remove('glitch-active');
                currentWord = (currentWord + 1) % words.length;
                words[currentWord].classList.add('glitch-active');
            }, 3000);
        }

        // Polaroid Hover Reveal Logic (Desktop)
        const polaroidWrappers = document.querySelectorAll('.polaroid-wrapper');
        const revealText = document.getElementById('polaroid-reveal-text');
        const container = document.getElementById('polaroid-container');

        // Initial Scatter Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                   // Trigger animations
                   const wrappers = entry.target.querySelectorAll('.polaroid-wrapper');
                   wrappers.forEach(w => {
                       w.classList.remove('scatter-tl', 'scatter-tr', 'scatter-ml', 'scatter-mr', 'scatter-bl', 'scatter-br');
                       w.classList.add('polaroid-entered');
                   });
                   // Fade in text
                   if(revealText) revealText.classList.remove('opacity-0');
                   observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if(container) observer.observe(document.getElementById('polaroid-section'));

        // Hover Effect to Dim Others
        polaroidWrappers.forEach(wrapper => {
            wrapper.addEventListener('mouseenter', () => {
                if(revealText) revealText.style.opacity = '0'; // Hide "Hover to reveal"
                polaroidWrappers.forEach(w => {
                    if (w !== wrapper) {
                        w.style.opacity = '0.1';
                        w.style.filter = 'grayscale(100%) blur(2px)';
                    } else {
                        w.style.zIndex = '50';
                    }
                });
            });
            wrapper.addEventListener('mouseleave', () => {
                if(revealText) revealText.style.opacity = '1';
                polaroidWrappers.forEach(w => {
                    w.style.opacity = '1';
                    w.style.filter = 'grayscale(0%) blur(0px)';
                    w.style.zIndex = '10';
                });
            });
        });
      });
    


(function () {
const form = document.querySelector('form[action*="formspree.io/f/"]');
  if (!form) return;


  form.addEventListener('submit', async function (e) {
    if (form.__forcedSubmit) return;
    e.preventDefault();
    form.__forcedSubmit = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        alert("Brief submitted successfully.");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }

    form.__forcedSubmit = false;
  }, true);
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e44f336-21b7-4699-8cc2-f464e3bf1ae8_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 left-0 right-0 z-[70] px-6 py-5 md:px-12 backdrop-blur-[6px] bg-[#141414]/65 border-b border-white/10 transition-transform duration-300 ease-in-out w-full max-w-[100%]" id="navbar">
<div className="flex items-center justify-between h-10">

<div className="flex flex-col gap-1">
<a className="uppercase hover:opacity-80 transition-opacity text-sm font-medium text-[#F2EFEA] tracking-tighter" href="#">
            Early Traction©
          </a>
</div>

<div className="hidden md:flex items-center gap-12">
<div className="flex gap-8 text-xs font-medium tracking-widest uppercase text-[#F2EFEA]">
<a className="hover:text-[#FF1F1F] transition-colors" href="#services">
              Output
            </a>
<a className="hover:text-[#FF1F1F] transition-colors" href="#process">
              Process
            </a>
</div>

<a className="px-6 py-2.5 text-xs font-medium uppercase tracking-widest bg-[#FF1F1F] text-[#F2EFEA] hover:bg-[#d91616] transition-colors rounded-sm" href="#contact">
            Start Project
          </a>
</div>

<button className="md:hidden text-[#F2EFEA]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="h-screen w-full max-w-[100%] relative flex flex-col items-center justify-center overflow-hidden z-0">


<div className="absolute inset-0 z-0 bg-black">

<picture className="w-full h-full block">

<source media="(min-width: 768px)" srcset="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e44f336-21b7-4699-8cc2-f464e3bf1ae8_3840w.png"/>

<img alt="Hero Animation" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9eb147e-e168-43cb-8207-c91f1d1f2f9f_3840w.png"/>
</picture>

<div className="absolute inset-0 bg-black/45"></div>

<div className="absolute inset-0 z-[2] grid-overlay animate-pulse-grid pointer-events-none"></div>
</div>

<div className="md:max-w-[95vw] 2xl:max-w-[1600px] flex flex-col md:pb-0 md:px-0 z-10 w-full h-full max-w-[100%] pt-20 pr-4 pb-12 pl-4 relative justify-center">

<div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-[#EAE2D6]/20 pb-4 md:pb-6 relative gap-2 md:gap-0">

<div className="animate-hero-text delay-100">
<h1 className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] mix-blend-screen text-left">
                    Visuals
                </h1>
</div>

<div className="animate-hero-text delay-200">
<h1 className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] mix-blend-screen text-right">
                    That
                </h1>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-[#EAE2D6]/20 py-4 md:py-6 relative gap-2 md:gap-0">

<div className="animate-hero-text delay-300">
<h1 className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] mix-blend-screen text-left">
                    Create
                </h1>
</div>

<div className="animate-hero-text delay-400 flex justify-end md:min-w-[50%]">
<div className="grid grid-cols-1 grid-rows-1 items-center justify-items-end w-full">
<span className="glitch-word glitch-active col-start-1 row-start-1 text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] text-right w-full mix-blend-screen">
                        MOMENTUM
                    </span>
<span className="glitch-word col-start-1 row-start-1 text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] text-right w-full mix-blend-screen">ATTENTION</span>
<span className="glitch-word col-start-1 row-start-1 text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] text-right w-full mix-blend-screen">BELIEF</span>
<span className="glitch-word col-start-1 row-start-1 text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] text-right w-full mix-blend-screen">BUZZ</span>
<span className="glitch-word col-start-1 row-start-1 text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] text-right w-full mix-blend-screen">TRACTION</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between md:items-start w-full pt-4 md:pt-6 relative gap-2 md:gap-0">

<div className="animate-hero-text delay-500">
<span className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] font-medium uppercase tracking-tighter text-[#EAE2D6] mix-blend-screen block text-left">
                    From
                </span>
</div>

<div className="animate-hero-text delay-600 flex justify-end">
<div className="relative inline-block bg-[#EAE2D6] skew-x-[-12deg] px-6 md:px-12 py-1 md:py-4 shadow-xl mt-2 md:mt-0">
<span className="text-[14vw] md:text-[9vw] lg:text-[7.5rem] leading-[0.8] italic text-[#FF1F1F] skew-x-[12deg] block font-bold">
                        ZERO.
                    </span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 md:bottom-4 left-1/2 -translate-x-1/2 z-20 text-[#EAE2D6] animate-bounce flex flex-col items-center gap-2 opacity-80">
<span className="text-[10px] uppercase tracking-widest font-medium hidden md:block">Scroll</span>
<svg className="lucide lucide-chevron-down w-8 h-8 md:w-6 md:h-6" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="overflow-hidden md:pt-24 md:pb-48 bg-[#EAE2D6] w-full max-w-[100%] z-10 pt-16 pb-36 relative">
<div className="container mx-auto px-6 md:px-12 w-full">
<div className="flex flex-col items-center text-center max-w-5xl mx-auto">

<p className="uppercase leading-relaxed md:text-xl text-sm font-bold text-[#1a1a1a]/80 tracking-widest text-center max-w-2xl mx-auto mb-16">
            We are an AI-native creative studio for launches, reframes, and breakthrough
            moments. We design visuals that make people stop, believe, and
            remember.
          </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 w-full pt-8 md:pt-12 border-t border-[#1a1a1a]/10">

<div className="flex flex-col items-center gap-3 text-center group transition-all duration-300 hover:scale-105 cursor-default">
<span className="text-4xl md:text-5xl font-medium text-[#FF1F1F] mb-1">01</span>
<span className="uppercase text-sm font-bold text-[#1a1a1a] tracking-widest">
                Stop The Scroll
              </span>
<div className="h-px w-12 bg-[#FF1F1F]/30 my-2"></div>
<p className="text-[11px] uppercase leading-relaxed group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-[#1a1a1a]/60 opacity-100 max-w-[200px]">
                Visuals designed to interrupt, not blend.
              </p>
</div>

<div className="flex flex-col items-center gap-3 text-center group transition-all duration-300 hover:scale-105 cursor-default">
<span className="text-4xl md:text-5xl font-medium text-[#FF1F1F] mb-1">02</span>
<span className="uppercase text-sm font-bold text-[#1a1a1a] tracking-widest">
                Earn Belief
              </span>
<div className="h-px w-12 bg-[#FF1F1F]/30 my-2"></div>
<p className="text-[11px] uppercase leading-relaxed group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-[#1a1a1a]/60 opacity-100 max-w-[200px]">
                Credibility through taste and clarity.
              </p>
</div>

<div className="flex flex-col items-center gap-3 text-center group transition-all duration-300 hover:scale-105 cursor-default">
<span className="text-4xl md:text-5xl font-medium text-[#FF1F1F] mb-1">03</span>
<span className="uppercase text-sm font-bold text-[#1a1a1a] tracking-widest">
                Create Momentum
              </span>
<div className="h-px w-12 bg-[#FF1F1F]/30 my-2"></div>
<p className="text-[11px] uppercase leading-relaxed group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-[#1a1a1a]/60 opacity-100 max-w-[200px]">
                The visual moment that changes everything.
              </p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-[#1a1a1a] text-[#EAE2D6] pt-24 pb-32 md:pt-28 md:pb-64 relative z-20 -mt-12 rounded-t-[3rem] sticky-section-shadow border-t border-white/10 w-full max-w-[100%] overflow-hidden" id="approach">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1F1F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EAE2D6]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="container md:px-12 w-full z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col text-center max-w-5xl mr-auto ml-auto items-center">

<h2 className="text-5xl md:text-8xl font-condensed font-medium uppercase tracking-tighter leading-[0.9] text-[#EAE2D6] mb-6 md:mb-8 scroll-reveal animate-hero-text">
                Good products die in <br className="hidden md:block"/><span className="text-[#FF1F1F]">silence.</span>
</h2>

<p className="scroll-reveal delay-100 animate-hero-text text-lg font-medium text-[#EAE2D6] mt-8 mb-8 md:text-2xl md:mb-16 w-full max-w-[90%] md:max-w-[720px] lg:max-w-[900px] mx-auto text-center leading-relaxed md:leading-normal whitespace-normal break-words">
                Attention now determines whether products scale or disappear — forward-moving brands engineer consistent visibility and belief.
             </p>

<div className="md:p-10 scroll-reveal delay-200 animate-hero-text bg-[#EAE2D6]/5 w-full max-w-3xl border-[#EAE2D6]/10 border rounded-lg pt-10 pr-10 pb-1 pl-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x md:divide-[#EAE2D6]/10">

<div className="flex flex-col items-center text-center md:px-6">
<h4 className="text-[10px] font-bold uppercase tracking-widest text-[#EAE2D6]/40 mb-4">The Old Way</h4>
<ul className="space-y-2 text-sm md:text-base font-medium text-[#EAE2D6]/50">
<li className="">Slow production cycles</li>
<li className="">Guess-driven creative</li>
<li className="">Volume without differentiation</li>
</ul>
</div>

<div className="flex flex-col items-center text-center md:px-6">
<h4 className="text-[10px] font-bold uppercase tracking-widest text-[#FF1F1F] mb-4">The New Way</h4>
<ul className="space-y-2 text-sm md:text-base font-medium text-[#EAE2D6]">
<li className="">AI-native speed</li>
<li className="">Attention-first creative logic</li>
<li className="">Visuals engineered to earn belief</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:py-48 md:pt-32 md:pb-32 md:-mt-[100px] sticky-section-shadow z-30 bg-[#EAE2D6] w-full max-w-[100%] border-[#1a1a1a]/10 rounded-t-[3rem] border-t pt-10 pb-20 relative" id="polaroid-section">


<div className="hidden md:block absolute inset-0 pointer-events-none" id="polaroid-container">



<div className="polaroid-wrapper polaroid-initial absolute top-[8%] left-[10%] w-48 aspect-[3/4]" style={{transitionDelay: '0ms'}}>
<div className="bg-[#F1F1F1] p-3 shadow-2xl rotate-6 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out group pointer-events-auto h-full">
<img alt="Visual" className="w-full h-full object-cover transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cfe5cf0-c087-41f6-a3ea-f5531df3b9d2_800w.png"/>
</div>
</div>

<div className="polaroid-wrapper polaroid-initial absolute top-[38%] left-[2%] w-64 aspect-[4/3]" style={{transitionDelay: '200ms'}}>
<div className="bg-[#F1F1F1] p-3 shadow-2xl -rotate-3 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out group pointer-events-auto h-full">
<img alt="Visual" className="w-full h-full object-cover transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1551f259-d403-4763-a6cf-fd881afc0704_800w.png"/>
</div>
</div>

<div className="polaroid-wrapper polaroid-initial absolute bottom-[8%] left-[12%] w-56 aspect-[4/5]" style={{transitionDelay: '400ms'}}>
<div className="bg-[#F1F1F1] p-3 shadow-2xl rotate-2 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out group pointer-events-auto h-full">
<img alt="Visual" className="transition-all duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88005e38-97e8-48bc-a145-5153b1baf4c9_1600w.png"/>
</div>
</div>


<div className="polaroid-wrapper polaroid-initial absolute top-[10%] right-[10%] w-52 aspect-[3/4]" style={{transitionDelay: '100ms'}}>
<div className="bg-[#F1F1F1] p-3 shadow-2xl -rotate-6 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out group pointer-events-auto h-full">
<img alt="Visual" className="w-full h-full object-cover transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d32b93d-1e94-4e5c-9b66-7969feed0e50_1600w.png"/>
</div>
</div>

<div className="polaroid-wrapper polaroid-initial absolute top-[40%] right-[2%] w-48 aspect-[3/4]" style={{transitionDelay: '300ms'}}>
<div className="bg-[#F1F1F1] p-3 shadow-2xl rotate-6 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out group pointer-events-auto h-full">
<img alt="Visual" className="w-full h-full object-cover transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9226e91-edff-4320-977e-710c8705d218_800w.png"/>
</div>
</div>

<div className="polaroid-wrapper polaroid-initial absolute bottom-[8%] right-[12%] w-56 aspect-square" style={{transitionDelay: '500ms'}}>
<div className="bg-[#F1F1F1] p-3 shadow-2xl -rotate-2 hover:rotate-0 hover:scale-105 hover:z-40 transition-all duration-500 ease-out group pointer-events-auto h-full">
<img alt="Visual" className="w-full h-full object-cover transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/101b3c44-f1fc-4f4e-8b1b-aad5231e42c4_320w.png"/>
</div>
</div>
</div>

<div className="container flex flex-col text-center z-10 mr-auto ml-auto pr-6 pl-6 relative grayscale-0 scale-95 items-center pointer-events-none w-full">
<span className="uppercase text-xs font-medium text-[#FF1F1F] tracking-widest mb-6 relative z-50">
          What We Build
        </span>
<h2 className="uppercase leading-[0.85] md:text-8xl lg:text-9xl text-4xl sm:text-5xl font-semibold text-[#FF1F1F] tracking-tight font-condensed max-w-5xl mr-auto mb-2 ml-auto scale-100 relative z-50 pointer-events-none">
          From Invisible To
          <span className="text-[#1a1a1a]">Impossible</span>

          To Ignore
        </h2>

<p className="text-sm italic font-medium text-[#1a1a1a]/40 mb-10 relative z-50 hidden md:block transition-opacity duration-1000 delay-[1200ms]" id="polaroid-reveal-text">
          Hover to reveal
        </p>
<p className="md:text-xl leading-relaxed text-lg font-medium text-[#1a1a1a]/70 max-w-2xl mb-12 relative z-50 mt-8 md:mt-0">
          AI-native creative across CGI spectacles, product photography,
          synthetic UGC, and campaign visuals. Every piece designed to stop,
          signal, and sell.
        </p>
<a className="hidden md:inline-flex items-center gap-2 uppercase hover:bg-[#1a1a1a] transition-colors hover:shadow-xl transform hover:-translate-y-1 group text-sm font-medium text-white tracking-widest bg-[#FF1F1F] pt-4 pr-8 pb-4 pl-8 shadow-lg pointer-events-auto relative z-50 rounded-sm" href="#contact">
          Discuss A Project
          <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:-rotate-45 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<div className="relative w-full max-w-full md:hidden flex flex-col items-center pointer-events-auto mt-8 -mb-4">
<div className="flex overflow-x-auto snap-x snap-mandatory py-8 w-full max-w-full scrollbar-hide mobile-carousel-container" id="mobileKenBurnsCarousel">

<div className="w-[80vw] h-[60vh] flex-shrink-0 snap-center relative mx-4">

<div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#d4c5b0] rounded-xl shadow-sm z-0"></div>

<div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#e0d6c4] rounded-xl shadow-md z-10 border border-white/20"></div>

<div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border-4 border-[#F1F1F1] bg-[#F1F1F1] z-20 mobile-carousel-item transform transition-transform">
<img alt="Product Visual" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cfe5cf0-c087-41f6-a3ea-f5531df3b9d2_800w.png"/>
</div>
</div>

<div className="w-[80vw] h-[60vh] flex-shrink-0 snap-center relative mx-4">

<div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#d4c5b0] rounded-xl shadow-sm z-0"></div>

<div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#e0d6c4] rounded-xl shadow-md z-10 border border-white/20"></div>

<div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border-4 border-[#F1F1F1] bg-[#F1F1F1] z-20 mobile-carousel-item transform transition-transform">
<img alt="Additional Visual" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d32b93d-1e94-4e5c-9b66-7969feed0e50_1600w.png"/>
</div>
</div>

<div className="w-[80vw] h-[60vh] flex-shrink-0 snap-center relative mx-4">

<div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#d4c5b0] rounded-xl shadow-sm z-0"></div>

<div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#e0d6c4] rounded-xl shadow-md z-10 border border-white/20"></div>

<div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border-4 border-[#F1F1F1] bg-[#F1F1F1] z-20 mobile-carousel-item transform transition-transform">
<img alt="Campaign Visual" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/101b3c44-f1fc-4f4e-8b1b-aad5231e42c4_320w.png"/>
</div>
</div>

<div className="w-[80vw] h-[60vh] flex-shrink-0 snap-center relative mx-4">

<div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#d4c5b0] rounded-xl shadow-sm z-0"></div>

<div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#e0d6c4] rounded-xl shadow-md z-10 border border-white/20"></div>

<div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border-4 border-[#F1F1F1] bg-[#F1F1F1] z-20 mobile-carousel-item transform transition-transform">
<img alt="Jar Visual" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9226e91-edff-4320-977e-710c8705d218_800w.png"/>
</div>
</div>

<div className="w-[80vw] h-[60vh] flex-shrink-0 snap-center relative mx-4">

<div className="absolute inset-0 translate-x-5 translate-y-5 bg-[#d4c5b0] rounded-xl shadow-sm z-0"></div>

<div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-[#e0d6c4] rounded-xl shadow-md z-10 border border-white/20"></div>

<div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl border-4 border-[#F1F1F1] bg-[#F1F1F1] z-20 mobile-carousel-item transform transition-transform">
<img alt="Jar Visual" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88005e38-97e8-48bc-a145-5153b1baf4c9_1600w.png"/>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center gap-1 mt-4 text-[#1a1a1a]/70 animate-pulse">
<svg className="lucide lucide-hand w-6 h-6" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
<span className="text-[10px] uppercase font-bold tracking-widest">Swipe</span>
</div>
</div>
<div className="flex md:hidden w-full z-50 pointer-events-auto pt-8 pb-0 relative justify-center">
<a className="inline-flex items-center gap-2 uppercase hover:bg-[#1a1a1a] transition-all hover:scale-105 active:scale-95 group text-sm font-medium text-white tracking-widest bg-[#FF1F1F] rounded-full pt-4 pr-10 pb-4 pl-10 shadow-xl" href="#contact">
            Discuss A Project
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:-rotate-45 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="md:px-12 md:py-24 sticky-section-shadow z-40 overflow-hidden text-[#EAE2D6] bg-[#1a1a1a] w-full max-w-[100%] border-white/5 rounded-t-[3rem] border-t pt-20 pb-24 relative" id="services">
<div className="container mx-auto px-6 w-full">

<div className="flex flex-col items-center justify-center w-full mb-12">

<span className="uppercase inline-block text-sm font-bold text-[#FF1F1F] tracking-[0.2em] border-[#FF1F1F] pb-0.5 -translate-y-3">
                Formats
            </span>

<p className="md:text-base leading-tight text-sm font-medium text-[#EAE2D6]/60 tracking-wide text-center max-w-2xl mt-3 -translate-y-3">
                Built for launches, drops, and reframes across fashion, beauty, CPG, and DTC.
            </p>
</div>

<div className="hidden md:grid md:grid-cols-3 gap-px bg-[#EAE2D6]/20 border border-[#EAE2D6]/20">

<div className="group relative bg-[#1a1a1a] h-[400px] md:h-[500px] overflow-hidden">

<img alt="CGI Visual" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20c2078b-9e8d-4039-9cfa-662fe7b69043_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between p-8">
<div className="flex justify-between items-start">

<svg className="lucide lucide-box w-5 h-5 text-[#FF1F1F]/70 group-hover:text-[#FF1F1F] transition-colors" data-lucide="box" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#FF1F1F]" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors mb-3">
                  CGI &amp; FOOH
                </h4>
<p className="text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors uppercase tracking-widest leading-relaxed">
                  Impossible visuals that stop feeds. Built in weeks, not months.
                </p>
</div>
</div>
</div>

<div className="group relative bg-[#1a1a1a] h-[400px] md:h-[500px] overflow-hidden z-10">

<img alt="Photography Visual" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5beb8f05-d486-453c-94cc-6d2809d44e33_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between p-8">
<div className="flex justify-between items-start">
<svg className="lucide lucide-camera w-5 h-5 text-[#FF1F1F] drop-shadow-lg" data-lucide="camera" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#FF1F1F]" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-tight text-white mb-3">
                  Photography
                </h4>
<p className="text-xs font-medium text-white/80 uppercase tracking-widest leading-relaxed">
                  Product shots that look premium fast. No studio needed.
                </p>
</div>
</div>
</div>

<div className="group relative bg-[#1a1a1a] h-[400px] md:h-[500px] overflow-hidden">

<img alt="UGC Visual" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3915563-24d3-420d-8692-3d56b7ec0671_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between p-8">
<div className="flex justify-between items-start">
<svg className="lucide lucide-smartphone w-5 h-5 text-[#FF1F1F]/70 group-hover:text-[#FF1F1F] transition-colors" data-lucide="smartphone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-[#FF1F1F]" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors mb-3">
                  UGC-Style Ads
                </h4>
<p className="uppercase leading-relaxed text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors tracking-widest">
                  AI-generated content that feels authentic. Scales without creators.
                </p>
</div>
</div>
</div>
</div>

<div className="md:hidden flex flex-col gap-6">

<div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
<img alt="CGI" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20c2078b-9e8d-4039-9cfa-662fe7b69043_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-2xl text-white font-condensed font-medium tracking-tight mb-2">CGI &amp; FOOH</h4>
<p className="text-xs font-medium text-white/80 uppercase tracking-widest leading-relaxed">
                  Impossible visuals that stop feeds. Built in weeks, not months.
               </p>
</div>
</div>

<div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
<img alt="Photo" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5beb8f05-d486-453c-94cc-6d2809d44e33_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-2xl text-white font-condensed font-medium tracking-tight mb-2">Photography</h4>
<p className="text-xs font-medium text-white/80 uppercase tracking-widest leading-relaxed">
                  Product shots that look premium fast. No studio needed.
               </p>
</div>
</div>

<div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
<img alt="UGC" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3915563-24d3-420d-8692-3d56b7ec0671_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-2xl text-white font-condensed font-medium tracking-tight mb-2">AI UGC</h4>
<p className="text-xs font-medium text-white/80 uppercase tracking-widest leading-relaxed">
                  AI-generated content that feels authentic. Scales without creators.
               </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 text-[#FF1F1F] bg-[#EAE2D6] pt-24 pr-6 pb-24 pl-6 md:pt-32 md:pb-32 relative z-50 rounded-t-[3rem] sticky-section-shadow border-t border-[#1a1a1a]/10 w-full max-w-[100%]" id="process">
<div className="container mx-auto max-w-6xl w-full">

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative">

<div className="md:col-span-5 hidden md:block">
<div className="sticky top-32">
<span className="text-[#FF1F1F] font-medium tracking-widest text-xs uppercase block mb-6">
                PROCESS
                </span>
<h2 className="uppercase leading-[0.85] text-8xl font-medium text-[#FF1F1F] tracking-tighter font-condensed">
                IDEA FIRST.
                <br/>
                MEDIUM NEXT.
                </h2>
</div>
</div>

<div className="md:col-span-5 md:hidden flex flex-col justify-start">
<span className="uppercase block text-xs font-medium text-[#FF1F1F] tracking-widest text-center mb-6">
              PROCESS
            </span>
<h2 className="uppercase leading-[0.85] text-5xl font-medium text-[#FF1F1F] tracking-tighter font-condensed text-center">
              IDEA FIRST.
              <br/>
              MEDIUM NEXT.
            </h2>
</div>

<div className="md:col-span-7 flex flex-col relative md:pl-12">

<div className="absolute left-0 top-0 bottom-0 w-px bg-[#FF1F1F]/10 hidden md:block"></div>
<div className="absolute left-0 top-0 w-px bg-[#FF1F1F] hidden md:block transition-all duration-300 ease-out" id="process-progress-bar" style={{height: '87.5%'}}></div>

<div className="flex flex-col md:gap-20 gap-x-y-16 gap-y-12">

<div className="process-step-item group border-b border-[#FF1F1F]/20 md:border-none md:mb-0 md:pb-0" id="step-01">
<div className="w-full flex justify-between items-center py-6 md:py-0 md:mb-2 text-left md:cursor-default" onclick="toggleProcess(0)">
<div className="flex items-baseline gap-4 md:gap-0 md:flex-col md:items-start">
<span className="text-sm font-semibold font-mono text-[#FF1F1F] block md:mb-2">01</span>
<h3 className="text-xl md:text-5xl font-semibold uppercase tracking-tight text-[#FF1F1F] font-condensed">Context</h3>
</div>
<div className="md:hidden transition-transform duration-300 process-chevron" style={{transform: 'rotate(180deg)'}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="process-content md:block overflow-hidden transition-all duration-300">
<p className="md:text-xl leading-relaxed md:pb-1 md:mt-4 text-base font-normal text-[#FF1F1F]/80 max-w-md pb-6">
                    We absorb the brand’s positioning, audience signals, and launch moment so the work fits what’s happening now.
                    </p>
</div>
</div>

<div className="process-step-item group border-b border-[#FF1F1F]/20 md:border-none md:mb-0 md:pb-0" id="step-02">
<div className="w-full flex justify-between items-center py-6 md:py-0 md:mb-2 text-left md:cursor-default" onclick="toggleProcess(1)">
<div className="flex items-baseline gap-4 md:gap-0 md:flex-col md:items-start">
<span className="text-sm font-semibold font-mono text-[#FF1F1F] block md:mb-2">02</span>
<h3 className="md:text-5xl uppercase text-xl font-semibold text-[#FF1F1F] tracking-tight font-condensed">Concept</h3>
</div>
<div className="md:hidden transition-transform duration-300 process-chevron" style={{transform: 'rotate(0deg)'}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="process-content md:block overflow-hidden transition-all duration-300">
<p className="text-base md:text-xl font-normal text-[#FF1F1F]/80 leading-relaxed max-w-md pb-6 md:pb-1 md:mt-4">
                    We design one sharp idea engineered to interrupt feeds and create immediate traction.
                    </p>
</div>
</div>

<div className="process-step-item group border-b border-[#FF1F1F]/20 md:border-none md:mb-0 md:pb-0" id="step-03">
<div className="w-full flex justify-between items-center py-6 md:py-0 md:mb-2 text-left md:cursor-default" onclick="toggleProcess(2)">
<div className="flex items-baseline gap-4 md:gap-0 md:flex-col md:items-start">
<span className="text-sm font-semibold font-mono text-[#FF1F1F] block md:mb-2">03</span>
<h3 className="text-xl md:text-5xl font-semibold uppercase tracking-tight text-[#FF1F1F] font-condensed">Build</h3>
</div>
<div className="md:hidden transition-transform duration-300 process-chevron" style={{transform: 'rotate(0deg)'}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="process-content md:block overflow-hidden transition-all duration-300">
<p className="text-base md:text-xl font-normal text-[#FF1F1F]/80 leading-relaxed max-w-md pb-6 md:pb-1 md:mt-4">
                    We translate the idea into a high-impact visual system, executed fast and clean.
                    </p>
</div>
</div>

<div className="process-step-item group border-b border-[#FF1F1F]/20 md:border-none md:mb-0 md:pb-0" id="step-04">
<div className="w-full flex justify-between items-center py-6 md:py-0 md:mb-2 text-left md:cursor-default" onclick="toggleProcess(3)">
<div className="flex items-baseline gap-4 md:gap-0 md:flex-col md:items-start">
<span className="text-sm font-semibold font-mono text-[#FF1F1F] block md:mb-2">04</span>
<h3 className="text-xl md:text-5xl font-semibold uppercase tracking-tight text-[#FF1F1F] font-condensed">Release</h3>
</div>
<div className="md:hidden transition-transform duration-300 process-chevron" style={{transform: 'rotate(0deg)'}}>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="process-content md:block overflow-hidden transition-all duration-300">
<p className="text-base md:text-xl font-normal text-[#FF1F1F]/80 leading-relaxed max-w-md pb-6 md:pb-1 md:mt-4">
                    We refine, finalize, and ship something that holds attention in the real world.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 z-10 sticky-section-shadow overflow-hidden text-[#EAE2D6] bg-[#1a1a1a] w-full max-w-[100%] border-[#EAE2D6]/10 rounded-t-[3rem] border-t pt-20 pr-6 pb-24 pl-6 relative" id="contact">
<div className="container mx-auto relative z-10 w-full">

<div className="flex flex-col z-20 max-w-5xl mr-auto ml-auto relative">
<div className="mb-12 md:mb-16">
<h3 className="leading-[0.85] uppercase md:text-8xl text-5xl font-medium text-[#FF1F1F] tracking-tighter font-condensed text-left mb-6">
              LET'S BUILD SOMETHING.
            </h3>
<p className="leading-relaxed text-sm md:text-base font-normal text-[#EAE2D6]/60 text-left">We typically respond within 3-5 business days.</p>
</div>
<form action="https://formspree.io/f/xykkkrdl" className="w-full" method="POST">


<input className="" name="_next" type="hidden" value="https://www.earlytraction.net/"/>
<input className="" name="_subject" type="hidden" value="Early Traction — New Project Brief"/>

<div className="grid md:grid-cols-3 gap-8 md:mb-12 mb-10">
<div className="group">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                  Name *
                </label>
<input className="placeholder-[#EAE2D6]/30 focus:outline-none focus:border-[#EAE2D6] transition-colors font-normal text-[#EAE2D6] bg-transparent w-full border-[#EAE2D6]/30 rounded-none border-b pt-2 pb-2" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="group">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                  Email *
                </label>
<input className="w-full bg-transparent border-b border-[#EAE2D6]/30 py-2 text-[#EAE2D6] font-normal placeholder-[#EAE2D6]/30 focus:outline-none focus:border-[#EAE2D6] transition-colors rounded-none" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="group">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                  Brand/Company *
                </label>
<input className="w-full bg-transparent border-b border-[#EAE2D6]/30 py-2 text-[#EAE2D6] font-normal placeholder-[#EAE2D6]/30 focus:outline-none focus:border-[#EAE2D6] transition-colors rounded-none" name="brand_company" placeholder="Acme Inc." required="" type="text"/>
</div>
</div>

<div className="group mb-12">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                What are you launching? *
              </label>
<textarea className="placeholder-[#EAE2D6]/30 focus:outline-none focus:border-[#EAE2D6] transition-colors resize-none font-normal text-[#EAE2D6] bg-transparent w-full border-[#EAE2D6]/30 rounded-none border-b pt-3 pb-3" name="project_details" placeholder="Tell us about the project..." required="" rows="4"></textarea>
</div>

<div className="w-full h-px bg-[#EAE2D6]/10 mb-12"></div>

<div className="grid md:grid-cols-3 gap-8 mb-12">

<div className="group relative">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                  Project Type *
                </label>
<div className="relative">
<select className="focus:outline-none focus:border-[#EAE2D6] transition-colors cursor-pointer font-normal text-[#EAE2D6]/90 bg-transparent w-full border-[#EAE2D6]/30 rounded-none border-b pt-2 pr-8 pb-2" name="project_type" required="">
<option className="bg-[#1a1a1a] text-[#EAE2D6]" disabled="" selected="" value="">
                      Select project type
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="hero">
                      Single hero visual — one high-impact asset
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="launch">
                      Launch burst — 3–5 assets across formats
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="campaign">
                      Campaign system — multiple concepts + rollout
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="unsure">
                      Not sure / need guidance
                    </option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#EAE2D6]">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="group relative">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                  Timeline *
                </label>
<div className="relative">
<select className="focus:outline-none focus:border-[#EAE2D6] transition-colors cursor-pointer font-normal text-[#EAE2D6]/90 bg-transparent w-full border-[#EAE2D6]/30 rounded-none border-b pt-2 pr-8 pb-2" name="timeline" required="">
<option className="bg-[#1a1a1a] text-[#EAE2D6]" disabled="" selected="" value="">
                      Select timeline
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="fast">
                      Fast turn — 1–2 weeks
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="standard">
                      Standard — 3–5 weeks
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="planned">
                      Planned rollout — 6–10 weeks
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="flexible">
                      Flexible
                    </option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#EAE2D6]">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="group relative">
<label className="block uppercase text-xs font-bold text-[#FF1F1F] tracking-widest mb-2">
                  Investment Stage *
                </label>
<div className="relative">
<select className="focus:outline-none focus:border-[#EAE2D6] transition-colors cursor-pointer font-normal text-[#EAE2D6]/90 bg-transparent w-full border-[#EAE2D6]/30 rounded-none border-b pr-8" name="investment_stage" required="">
<option className="bg-[#1a1a1a] text-[#EAE2D6]" disabled="" selected="" value="">
                      Select stage
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="early">
                      Early traction — validating demand, first launches
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="growth">
                      Growth push — building momentum and consistency
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="scale">
                      Scale systems — repeatable content at volume
                    </option>
<option className="bg-[#1a1a1a] text-[#EAE2D6]" value="unsure">
                      Not sure yet
                    </option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#EAE2D6]">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="md:pt-2 pt-2">
<button className="group flex gap-4 uppercase hover:text-[#EAE2D6] transition-colors cursor-pointer text-2xl font-semibold text-[#FF1F1F] tracking-widest bg-transparent border-0 pt-0 pr-0 pb-0 pl-0 items-center" type="submit">
<span className="group-hover:border-[#EAE2D6] group-hover:bg-[#FF1F1F] group-hover:text-white group-hover:px-1 transition-all border-transparent border-b-2 pr-1 pl-1">
                  Submit Brief
                </span>
<svg className="lucide lucide-arrow-right w-6 h-6 group-hover:translate-x-2 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-[#EAE2D6] text-[#1a1a1a] pt-10 md:pt-14 pb-12 px-6 md:px-12 relative overflow-hidden z-20 w-full max-w-[100%]">

<div className="absolute bottom-0 right-0 select-none pointer-events-none opacity-[0.03] translate-y-[10%] z-0 hidden md:block">
<span className="text-[25vw] font-medium uppercase tracking-tighter leading-none text-[#1a1a1a] block transition-transform duration-100 ease-linear" id="footer-parallax-text" style={{willChange: 'transform', transform: 'translateX(0px)'}}>
          EARLY
        </span>
</div>
<div className="container z-10 w-full max-w-7xl mr-auto ml-auto relative">
<div className="grid md:grid-cols-2 gap-12 mb-24 items-start">
<div className="flex flex-col gap-2 -ml-0.5">
<h3 className="uppercase md:text-2xl text-xl font-medium text-[#FF1F1F] tracking-tighter translate-y-16">Early Traction©</h3>
<p className="leading-snug text-xs font-normal text-[#1a1a1a] max-w-sm translate-y-16">Attention earning visuals for forward moving brands.</p>
<p className="text-[10px] font-medium uppercase tracking-widest text-[#1a1a1a]/40 translate-y-16 mt-1">Based in Australia &amp; New Zealand</p>
</div>
</div>
<div className="w-full h-[1.5px] bg-[#1a1a1a] mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="flex flex-col gap-1">
<span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#1a1a1a]">
              © 2024 Early Traction Studio
            </span>
<span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#1a1a1a]/40">
              All Rights Reserved
            </span>
</div>
<div className="flex flex-wrap gap-8 md:gap-16">
<a className="text-xs md:text-sm font-medium uppercase tracking-widest text-[#1a1a1a] hover:text-[#FF1F1F] transition-colors" href="#">
              Instagram
            </a>
<a className="text-xs md:text-sm font-medium uppercase tracking-widest text-[#1a1a1a] hover:text-[#FF1F1F] transition-colors" href="#">
              LinkedIn
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
