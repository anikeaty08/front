import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // --- Intersection Observer for Scroll Animations ---
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target); // Only animate once
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
          observer.observe(el);
      });

      // --- Spotlight Effect Logic ---
      document.querySelectorAll('.spotlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          });
      });

      // --- Testimonial Carousel Logic ---
      let currentCard = 0;
      const totalCards = 3;

      function showCard(index) {
          document.querySelectorAll('.carousel-card').forEach(el => {
              el.classList.remove('active');
          });
          document.getElementById(`card-${index}`).classList.add('active');
      }

      function nextCard() {
          currentCard = (currentCard + 1) % totalCards;
          showCard(currentCard);
      }

      function prevCard() {
          currentCard = (currentCard - 1 + totalCards) % totalCards;
          showCard(currentCard);
      }

      // Auto rotate carousel every 5 seconds
      setInterval(nextCard, 5000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?w=3840&amp'}}></div>
<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div className="vertical-lines">
<div className="v-line"></div>
<div className="v-line hidden md:block"></div>
<div className="v-line"></div>
</div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-[131px] border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20">
<div className="flex h-14 pl-6 pr-2 items-center justify-between">
<a className="flex items-center gap-2 group z-10" href="#">
<div className="flex text-[#ffffff] bg-emerald-800 w-8 h-8 rounded-full items-center justify-center">
<iconify-icon icon="lucide:pen-tool" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">
            POD STUDIO
          </span>
</a>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#work">
            Work
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#process">
            Process
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#about">
            About
          </a>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-3 z-10">
<a className="hover:text-white transition-colors hidden sm:block text-xs font-medium text-neutral-400 mr-2" href="#">
            Login
          </a>
<button className="hover:bg-neutral-200 transition-colors text-xs font-semibold text-[#ffffff] bg-emerald-800 h-10 rounded-full px-5 flex items-center">
            Start Project
          </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-40 pb-24 overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" loop="" muted="" playsinline="" src="https://assets.mixkit.co/videos/2541/2541-720.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="flex flex-col z-10 text-center max-w-7xl mx-auto px-6 relative items-center">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:border-white/20 transition-colors cursor-pointer group">
<span className="text-[10px] uppercase font-semibold text-white tracking-wider bg-emerald-800/80 rounded px-1.5 py-0.5">
            Slots Open
          </span>
<span className="text-xs text-neutral-300">
            Accepting new clients for Q4
          </span>
<iconify-icon className="text-emerald-500 group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
<h1 className="reveal-on-scroll delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[1]">
<span className="text-gradient-hero">World-class design</span>
<br/>
<span className="text-emerald-700/90">for your startup.</span>
</h1>
<p className="reveal-on-scroll delay-200 md:text-base leading-relaxed text-sm text-neutral-400 max-w-lg mb-10">
          We design and build high-converting landing pages for ambitious
          companies. Delivered in days, not months.
        </p>
<div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="btn-beam-wrapper group">
<span className="btn-beam-bg"></span>
<span className="flex items-center justify-center gap-2 bg-emerald-800 text-white text-sm font-semibold h-11 px-8 rounded-full relative z-10 transition-transform active:scale-95">
              View Portfolio
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="hover:text-white hover:bg-white/5 transition-colors flex gap-2 text-sm font-medium text-neutral-400 h-11 px-8 border border-white/10 rounded-full items-center justify-center">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
            Book a Call
          </button>
</div>
</div>
</main>
<section className="py-24 border-t border-white/5 relative z-10" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Selected Work
          </h2>
<p className="text-neutral-400 text-sm max-w-md mx-auto">
            Recent projects shipped with precision and speed.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-3xl border border-white/10 bg-neutral-900/20 overflow-hidden reveal-on-scroll">
<div className="aspect-[16/10] overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Fintech" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-semibold text-white">
                  Fintech Dashboard
                </h3>
<span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Real-time analytics platform for a Series B startup. Processed
                $500M+ in transactions within the first quarter.
              </p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300">
                  Design System
                </span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300">
                  Development
                </span>
</div>
</div>
<a className="absolute inset-0 z-20" href="#"></a>
</div>

<div className="group relative rounded-3xl border border-white/10 bg-neutral-900/20 overflow-hidden reveal-on-scroll delay-100">
<div className="aspect-[16/10] overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="SaaS" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-2xl font-semibold text-white">
                  SaaS Analytics
                </h3>
<span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Complete overhaul of a legacy enterprise platform. Improved user
                retention by 40% post-launch.
              </p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300">
                  Rebrand
                </span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300">
                  Frontend
                </span>
</div>
</div>
<a className="absolute inset-0 z-20" href="#"></a>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/5 z-10 overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative">

<div className="absolute inset-0 pointer-events-none hidden md:block" style={{zIndex: '0'}}>
<svg fill="none" height="100%" preserveaspectratio="none" viewbox="0 0 1200 600" width="100%">

<path d="M 250 250 C 250 400, 600 100, 600 250" fill="none" stroke="#ffffff" stroke-opacity="0.05" strokeWidth="1"></path>
<path className="beam-path" d="M 250 250 C 250 400, 600 100, 600 250" fill="none" stroke="#10b981" strokeWidth="1"></path>

<path d="M 600 250 C 600 400, 950 100, 950 250" fill="none" stroke="#ffffff" stroke-opacity="0.05" strokeWidth="1"></path>
<path className="beam-path" d="M 600 250 C 600 400, 950 100, 950 250" fill="none" stroke="#10b981" strokeWidth="1" style={{animationDelay: '2.5s'}}></path>
</svg>
</div>
<div className="mb-16 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            The Process
          </h2>
<p className="text-neutral-400 text-sm max-w-md mx-auto">
            From concept to code, we handle everything with a streamlined
            workflow designed for speed.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="spotlight-card rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-sm reveal-on-scroll">
<div className="spotlight-content h-full flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Rapid Integration
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                We don't just design; we deploy. Our workflows plug directly
                into your codebase for immediate impact.
              </p>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-sm reveal-on-scroll delay-100">
<div className="spotlight-content h-full flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="lucide:component" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Systematic Design
              </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                Scalable component libraries that ensure consistency across
                every touchpoint of your product.
              </p>
</div>
</div>

<div className="spotlight-card rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-sm reveal-on-scroll delay-200">
<div className="spotlight-content h-full flex flex-col">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="lucide:globe-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Global Edge</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                Performance-obsessed engineering ensures your site loads
                instantly, anywhere on the planet.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative z-10 overflow-hidden" id="testimonials">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-emerald-900/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Trusted by Founders
          </h2>
<p className="text-neutral-400 text-sm max-w-lg mx-auto">
            We work with the most ambitious teams in tech. Here's what they say
            about shipping with POD.
          </p>
</div>
<div className="max-w-4xl mx-auto mb-20 relative min-h-[280px] flex items-center justify-center">
<div className="carousel-card active w-full" id="card-0">
<div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 border border-white/10 p-10 md:p-14 rounded-3xl backdrop-blur-md text-center">
<div className="mb-8 flex justify-center">
<div className="w-16 h-16 rounded-full p-1 border border-emerald-500/30">
<img alt="Alex" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                "The level of craft they brought to our landing page is
                <span className="text-emerald-400">unmatched</span>
                . It's rare to find a team that cares this much about the
                details."
              </h3>
<div>
<div className="text-white font-semibold tracking-wide">
                  Alex Rivera
                </div>
<div className="text-neutral-500 text-sm">CEO at TechFlow</div>
</div>
</div>
</div>

<div className="carousel-card w-full" id="card-1">
<div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 border border-white/10 p-10 md:p-14 rounded-3xl backdrop-blur-md text-center">
<div className="mb-8 flex justify-center">
<div className="w-16 h-16 rounded-full p-1 border border-emerald-500/30">
<img alt="Sarah" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                "We went from zero to launch in record time. POD Studio is the
                <span className="text-emerald-400">secret weapon</span>
                every founder needs."
              </h3>
<div>
<div className="text-white font-semibold tracking-wide">
                  Sarah Chen
                </div>
<div className="text-neutral-500 text-sm">Founder at Base</div>
</div>
</div>
</div>

<div className="carousel-card w-full" id="card-2">
<div className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 border border-white/10 p-10 md:p-14 rounded-3xl backdrop-blur-md text-center">
<div className="mb-8 flex justify-center">
<div className="w-16 h-16 rounded-full p-1 border border-emerald-500/30">
<img alt="Michael" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
</div>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                "Beautiful design is table stakes. POD delivers design that
                <span className="text-emerald-400">converts</span>
                . Best investment we made this year."
              </h3>
<div>
<div className="text-white font-semibold tracking-wide">
                  Michael Ross
                </div>
<div className="text-neutral-500 text-sm">CTO at Vertex</div>
</div>
</div>
</div>

<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all" onclick="prevCard()">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all" onclick="nextCard()">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="marquee-container w-full pt-10 border-t border-white/5 opacity-50 hover:opacity-100 transition-opacity">
<div className="marquee-content gap-20 gap-x-20 gap-y-20 items-center" style={{minWidth: 'auto'}}>
<iconify-icon className="text-white" icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:auth0" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:openai" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:linear" width="36"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:raycast" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:notion" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:auth0" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:openai" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:linear" width="36"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:raycast" width="40"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:notion" width="40"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-900/10 text-emerald-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
              About the Studio
            </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Crafting digital
              <br/>
<span className="text-emerald-500">masterpieces.</span>
</h2>
<p className="text-neutral-400 text-base leading-relaxed mb-6">
              We are a collective of senior designers and engineers who got
              tired of the agency bloat. We believe in small, elite teams moving
              with extreme velocity.
            </p>
<p className="text-neutral-400 text-base leading-relaxed mb-8">
              No account managers. No fluff. Just direct collaboration with the
              people building your product.
            </p>
<div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
<div>
<div className="text-3xl font-bold text-white mb-1">100+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Clients
                </div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">$50M</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Raised
                </div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">4.9</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Rating
                </div>
</div>
</div>
</div>
<div className="relative reveal-on-scroll delay-200">

<div className="aspect-square rounded-3xl border border-white/10 bg-neutral-900/50 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10"></div>

<div className="relative z-10 p-8 border border-white/10 bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-2xl rotate-3 w-64">
<div className="flex items-center gap-3 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="space-y-3">
<div className="h-2 bg-white/10 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
<div className="h-2 bg-emerald-500/20 rounded w-full"></div>
</div>
</div>
<div className="absolute z-0 w-full h-full">
<svg className="w-full h-full opacity-20 animate-spin-slow" viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" r="150" stroke="white" stroke-dasharray="4 8" strokeWidth="1"></circle>
<circle cx="200" cy="200" fill="none" r="100" stroke="white" stroke-dasharray="2 4" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 relative z-10" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Simple Pricing
          </h2>
<p className="text-neutral-400 text-sm">
            Transparent pricing for teams of all sizes.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card rounded-3xl p-8 border border-white/10 bg-neutral-900/20 flex flex-col reveal-on-scroll">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-neutral-400 text-sm mt-2">
                Perfect for validating ideas.
              </p>
</div>
<div className="mb-8">
<span className="text-4xl font-bold text-white">$3k</span>
<span className="text-neutral-500 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Landing Page (1-3 sections)
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Mobile Optimized
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                3 Day Delivery
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white text-sm font-semibold transition-all">
              Choose Starter
            </button>
</div>

<div className="spotlight-card rounded-3xl p-8 border border-emerald-500/30 bg-emerald-900/10 flex flex-col relative reveal-on-scroll delay-100">
<div className="absolute top-0 right-0 p-4">
<span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-wider">
                Popular
              </span>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-emerald-400">Growth</h3>
<p className="text-emerald-200/60 text-sm mt-2">
                For scaling startups.
              </p>
</div>
<div className="mb-8">
<span className="text-4xl font-bold text-white">$6k</span>
<span className="text-emerald-500/60 text-sm">/ project</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
                Full Marketing Site (5+ pages)
              </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
                CMS Integration
              </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400 mt-0.5 shrink-0" icon="lucide:check-circle-2"></iconify-icon>
                Custom Interactions &amp; 3D
              </li>
</ul>
<button className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20">
              Choose Growth
            </button>
</div>

<div className="spotlight-card rounded-3xl p-8 border border-white/10 bg-neutral-900/20 flex flex-col reveal-on-scroll delay-200">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Scale</h3>
<p className="text-neutral-400 text-sm mt-2">
                Complete product design.
              </p>
</div>
<div className="mb-8">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Web App UI/UX
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Design System Creation
              </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
                Ongoing Support Retainer
              </li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white text-sm font-semibold transition-all">
              Contact Sales
            </button>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 relative z-10" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            FAQ
          </h2>
<p className="text-neutral-400 text-sm">
            Common questions about our process and services.
          </p>
</div>
<div className="space-y-4 reveal-on-scroll delay-100">

<details className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04] open:border-emerald-500/30">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-white text-sm font-medium select-none outline-none">
<span>How quickly can you ship?</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-neutral-400 transition-transform duration-300 group-open:rotate-45 group-open:text-emerald-500">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
              Most standard landing pages are delivered within 5-7 business
              days. Complex projects with custom 3D assets or advanced
              interactions may take 2-3 weeks.
            </div>
</details>

<details className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04] open:border-emerald-500/30">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-white text-sm font-medium select-none outline-none">
<span>Do you work with existing designs?</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-neutral-400 transition-transform duration-300 group-open:rotate-45 group-open:text-emerald-500">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
              Yes! We can take your Figma, Sketch, or Adobe XD files and turn
              them into pixel-perfect code. We also offer design services if
              you're starting from scratch.
            </div>
</details>

<details className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04] open:border-emerald-500/30">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-white text-sm font-medium select-none outline-none">
<span>What is included in the support?</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-neutral-400 transition-transform duration-300 group-open:rotate-45 group-open:text-emerald-500">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
              We provide 30 days of post-launch support to fix any bugs and
              ensure stability. We also provide a Loom video walkthrough of how
              to manage your content.
            </div>
</details>

<details className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/[0.04] open:border-emerald-500/30">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none text-white text-sm font-medium select-none outline-none">
<span>Can you integrate with my CMS?</span>
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-neutral-400 transition-transform duration-300 group-open:rotate-45 group-open:text-emerald-500">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
              We specialize in headless CMS integrations like Sanity,
              Contentful, and Strapi. We can also build on traditional platforms
              if required.
            </div>
</details>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 relative z-10 overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05),_transparent_70%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative text-center reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-900/10 text-emerald-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Available for new projects
        </div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
          Ready to scale your presence?
        </h2>
<p className="text-neutral-400 text-sm md:text-base mb-12 max-w-xl mx-auto">
          Your new site is just a message away. Fill out the form below and
          we'll get back to you within 24 hours.
        </p>
<form className="max-w-md mx-auto space-y-4 text-left relative z-20">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="name">
                Name
              </label>
<input className="w-full h-11 bg-white/[0.03] border border-white/10 rounded-lg px-4 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="email">
                Email
              </label>
<input className="w-full h-11 bg-white/[0.03] border border-white/10 rounded-lg px-4 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="message">
              Message
            </label>
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-4 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all resize-none" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full h-12 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 flex items-center justify-center gap-2 mt-2 group" type="button">
            Send Message
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="z-10 bg-black/50 border-white/5 border-t pt-12 pb-0 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="flex text-[#ffffff] bg-emerald-800 w-6 h-6 rounded items-center justify-center">
<iconify-icon icon="lucide:pen-tool" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">
                POD
              </span>
</a>
<p className="text-xs text-neutral-500">
              Designing the future, one pixel at a time.
            </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-emerald-500 transition-colors" href="#">
                  Terms
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2023 POD Studio. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:github"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:dribbble"></iconify-icon>
</a>
</div>
</div>
<div className="mt-20 flex justify-center w-full select-none pointer-events-none">
<span className="text-[14vw] font-semibold text-emerald-700 tracking-tighter leading-[0.8]">
            POD STUDIO
          </span>
</div>
</div>
</footer>


    </>
  );
}
