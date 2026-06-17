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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Initialize Icons
        lucide.createIcons();

        // Simple Router System
        function router(pageId, sectionId = null) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('animate-fade');
            });

            // Show selected page
            const activePage = document.getElementById(`page-${pageId}`);
            if(activePage) {
                activePage.classList.remove('hidden');
                activePage.classList.add('animate-fade');
                
                // Scroll handling
                if(sectionId) {
                    setTimeout(() => {
                        const element = document.getElementById(sectionId);
                        if(element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }

            // Re-trigger scroll observer
            setupObserver();
        }

        // Mobile Navigation Helper
        function mobileNav(pageId, sectionId) {
            router(pageId, sectionId);
            toggleMobileMenu();
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('translate-x-full');
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('pointer-events-none');
        }

        // Scroll Observer for Animations
        function setupObserver() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.observe-me').forEach(el => {
                observer.observe(el);
            });
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            setupObserver();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-2" href="#" onclick="router('home')">
<span className="text-xl font-semibold tracking-tighter text-white group-hover:text-[#626041] transition-colors duration-300">CRE8XP</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium hover:text-white transition-colors" onclick="router('home')">Home</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="router('home', 'about-section')">About</button>

<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium hover:text-white transition-colors py-4">
                        Services <i className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
<button className="block w-full text-left px-4 py-3 text-sm hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors" onclick="router('travel')">High Performance Travel</button>
<button className="block w-full text-left px-4 py-3 text-sm hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors" onclick="router('health')">Elite Healthspan</button>
<button className="block w-full text-left px-4 py-3 text-sm hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors" onclick="router('genetics')">Performance Genetics Test</button>
<button className="block w-full text-left px-4 py-3 text-sm hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors" onclick="router('blacklabel')">Private Black Label</button>
</div>
</div>
</div>

<div className="hidden md:block">
<a className="bg-[#626041] hover:bg-[#4e4d34] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" href="#contact">
                    Book Consultation
                </a>
</div>

<button className="md:hidden text-white" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="fixed inset-0 bg-neutral-950 z-40 translate-x-full flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-neutral-400" onclick="toggleMobileMenu()">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<button className="text-2xl font-light tracking-tight text-white" onclick="mobileNav('home')">Home</button>
<button className="text-2xl font-light tracking-tight text-white" onclick="mobileNav('home', 'about-section')">About</button>
<div className="w-12 h-[1px] bg-white/10"></div>
<button className="text-xl font-light text-neutral-400" onclick="mobileNav('travel')">Travel</button>
<button className="text-xl font-light text-neutral-400" onclick="mobileNav('health')">Healthspan</button>
<button className="text-xl font-light text-neutral-400" onclick="mobileNav('genetics')">Genetics</button>
<button className="text-xl font-light text-neutral-400" onclick="mobileNav('blacklabel')">Black Label</button>
</div>
</nav>

<main className="pt-20 min-h-screen" id="app-content">

<div className="page-view" id="page-home">

<section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center rounded-b-[3rem]">

<div className="absolute inset-0 z-0">
<img alt="Tactical Mountains" className="w-full h-full object-cover animate-fade opacity-60 grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/30"></div>
<div className="absolute inset-0 bg-[#626041]/10 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 observe-me">
                        PERFORMANCE <br/> <span className="text-[#626041] bg-clip-text">REIMAGINED</span>
</h1>
<p className="text-lg md:text-xl text-neutral-200 font-light max-w-2xl mx-auto mb-12 observe-me delay-100">
                        Military-grade precision meets ultra-luxury wellness. We engineer high-impact experiences for the world's most discerning leaders.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center observe-me delay-200">
<button className="bg-white text-neutral-950 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-neutral-200 transition-colors" onclick="router('travel')">
                            Explore Services
                        </button>
<a className="border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-white/10 transition-colors" href="#contact">
                            Book Consultation
                        </a>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950" id="about-section">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Elite Training" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 observe-me" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#626041]/20 rounded-full blur-3xl -z-10"></div>
</div>
<div className="order-1 lg:order-2 observe-me delay-100">
<div className="flex items-center gap-3 mb-6">
<span className="w-12 h-[1px] bg-[#626041]"></span>
<span className="text-[#626041] text-xs font-bold tracking-widest uppercase">About CRE8XP</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                            30+ Years Global Expertise. <br/>
<span className="text-neutral-500">Elite Performance Protocols.</span>
</h2>
<div className="space-y-6 text-neutral-400 font-light leading-relaxed">
<p>
                                At CRE8 XP, we create high-impact, turn-key experiences that push boundaries and elevate performance. From elite wellness protocols to bespoke global adventures, every journey we design is built to challenge, inspire, and deliver lasting results.
                            </p>
<p>
                                Whether it's high-performance travel, executive retreats, or curated lifestyle immersions, our team draws on over 30 years of global experience across professional sport and world-class events.
                            </p>
<blockquote className="border-l-2 border-[#626041] pl-6 py-2 my-8 text-white italic text-lg">
                                "Cre8XP delivers unforgettable, high-performance experiences that challenge, inspire, and elevate every aspect of life."
                                <footer className="text-sm text-[#626041] mt-2 not-italic font-semibold uppercase tracking-widest">- James Carter</footer>
</blockquote>
<p>
                                Join the Adventure Tribe, explore our Elite Healthspan programs, or unlock the exclusivity of PRIVE Black Label. This is performance—reimagined.
                            </p>
</div>
<ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-2 text-sm text-white">
<i className="w-4 h-4 text-[#626041]" data-lucide="check-circle"></i> High-Impact Experiences
                            </li>
<li className="flex items-center gap-2 text-sm text-white">
<i className="w-4 h-4 text-[#626041]" data-lucide="check-circle"></i> Elite Wellness Protocols
                            </li>
<li className="flex items-center gap-2 text-sm text-white">
<i className="w-4 h-4 text-[#626041]" data-lucide="check-circle"></i> Bespoke Global Adventures
                            </li>
<li className="flex items-center gap-2 text-sm text-white">
<i className="w-4 h-4 text-[#626041]" data-lucide="check-circle"></i> Performance Reimagined
                            </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center observe-me">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Our Pillars</h2>
<p className="mt-4 text-neutral-400">Four avenues to excellence.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 h-auto md:h-[800px]">

<div className="group relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#626041]/50 transition-colors observe-me delay-100" onclick="router('travel')">
<img alt="Travel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">High Performance Travel</h3>
<p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Unlock new ways of thinking and performing at the highest level with bespoke global journeys.
                                </p>
<span className="inline-flex items-center text-[#626041] text-xs font-bold uppercase tracking-widest">
                                    Learn More <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>

<div className="group relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#626041]/50 transition-colors observe-me delay-200" onclick="router('health')">
<img alt="Health" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Elite Healthspan</h3>
<p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Predictive, preventative, personalised. The Executive Health Protocol for top leaders.
                                </p>
<span className="inline-flex items-center text-[#626041] text-xs font-bold uppercase tracking-widest">
                                    Learn More <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>

<div className="group relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#626041]/50 transition-colors observe-me delay-100" onclick="router('genetics')">
<img alt="Genetics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Performance Genetics</h3>
<p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Personalised health starts with your DNA. Unlock insights tailored to your biology.
                                </p>
<span className="inline-flex items-center text-[#626041] text-xs font-bold uppercase tracking-widest">
                                    Learn More <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>

<div className="group relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#626041]/50 transition-colors observe-me delay-200" onclick="router('blacklabel')">
<img alt="Space" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-all duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Private Black Label</h3>
<p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Ultra-exclusive experiences. From the edge of space to the ends of the earth.
                                </p>
<span className="inline-flex items-center text-[#626041] text-xs font-bold uppercase tracking-widest">
                                    Learn More <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="page-travel">

<header className="relative h-[60vh] flex items-end pb-16 pl-6 md:pl-16 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="relative z-10 max-w-4xl animate-fade">
<div className="flex items-center gap-2 mb-4">
<button className="text-xs uppercase tracking-widest text-[#626041] hover:text-white transition-colors flex items-center gap-1" onclick="router('home')">
<i className="w-3 h-3" data-lucide="arrow-left"></i> Back
                        </button>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">High Performance Travel</h1>
<p className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
                        At CRE8 XP, we deliver transformational, turn-key programs designed to inspire, challenge and elevate. We craft bespoke, life-changing journeys that go beyond expectations.
                    </p>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 py-20">

<div className="mb-20 observe-me">
<h2 className="text-2xl font-semibold text-white mb-6">Our Promise</h2>
<p className="text-neutral-400 leading-relaxed border-l border-[#626041] pl-6">
                        Get ready for a journey that goes beyond the destination. With carefully curated resources — like insightful reading materials, reflective exercises, and practical tools — you'll gain more than just memories. You'll leave with a fresh perspective and profound growth that continues to shape your life long after you return home. This isn't just a trip; it's an experience that stays with you.
                    </p>
</div>

<div className="mb-24 observe-me delay-100">
<h2 className="text-2xl font-semibold text-white mb-8">Our Fully Integrated Approach</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-[#626041]/30 transition-all">
<i className="w-8 h-8 text-[#626041] mb-4" data-lucide="compass"></i>
<h3 className="text-lg font-medium text-white mb-2">Extraordinary Experiences</h3>
<p className="text-sm text-neutral-400">Unlock new ways of thinking and performing at the highest level.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-[#626041]/30 transition-all">
<i className="w-8 h-8 text-[#626041] mb-4" data-lucide="plane"></i>
<h3 className="text-lg font-medium text-white mb-2">Seamless Logistics</h3>
<p className="text-sm text-neutral-400">Handled through our exclusive travel partner, including flights &amp; transfers.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-[#626041]/30 transition-all">
<i className="w-8 h-8 text-[#626041] mb-4" data-lucide="utensils"></i>
<h3 className="text-lg font-medium text-white mb-2">World-Class Hospitality</h3>
<p className="text-sm text-neutral-400">Curated meals and exclusive dinners with inspiring presentations.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-[#626041]/30 transition-all">
<i className="w-8 h-8 text-[#626041] mb-4" data-lucide="trophy"></i>
<h3 className="text-lg font-medium text-white mb-2">Access to Icons</h3>
<p className="text-sm text-neutral-400">Private tours of elite facilities guided by industry leaders.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-[#626041]/30 transition-all">
<i className="w-8 h-8 text-[#626041] mb-4" data-lucide="users"></i>
<h3 className="text-lg font-medium text-white mb-2">Elite Workshops</h3>
<p className="text-sm text-neutral-400">High-performance sessions designed to push boundaries.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-[#626041]/30 transition-all">
<i className="w-8 h-8 text-[#626041] mb-4" data-lucide="network"></i>
<h3 className="text-lg font-medium text-white mb-2">Unmatched Networking</h3>
<p className="text-sm text-neutral-400">Build powerful connections through exclusive events.</p>
</div>
</div>
</div>

<div className="max-w-4xl observe-me delay-200">
<h2 className="text-2xl font-semibold text-white mb-8">Program Modules</h2>
<p className="text-neutral-400 mb-12">
                        Our program is designed to bridge the gap between elite sports and corporate performance.
                    </p>
<div className="space-y-8 border-l border-white/10 ml-3 pl-10 relative">
<div className="relative">
<span className="absolute -left-[49px] w-4 h-4 rounded-full bg-[#626041] ring-4 ring-neutral-950"></span>
<h3 className="text-lg font-medium text-white">01. Elite Athlete Mindset Consultation</h3>
<p className="text-sm text-neutral-400 mt-2">Review EOI, assess destination feasibility, develop tailored experience with costings.</p>
</div>
<div className="relative">
<span className="absolute -left-[49px] w-4 h-4 rounded-full bg-neutral-800 ring-4 ring-neutral-950"></span>
<h3 className="text-lg font-medium text-white">02. Booking &amp; Logistics Management</h3>
<p className="text-sm text-neutral-400 mt-2">Secure accommodation, transport, permits, and insurance. Ensure budget alignment.</p>
</div>
<div className="relative">
<span className="absolute -left-[49px] w-4 h-4 rounded-full bg-neutral-800 ring-4 ring-neutral-950"></span>
<h3 className="text-lg font-medium text-white">03. Financial Management</h3>
<p className="text-sm text-neutral-400 mt-2">Clear pricing structure, milestone payments, and financial reconciliation.</p>
</div>
<div className="relative">
<span className="absolute -left-[49px] w-4 h-4 rounded-full bg-neutral-800 ring-4 ring-neutral-950"></span>
<h3 className="text-lg font-medium text-white">04. On-boarding &amp; Program Planning</h3>
<p className="text-sm text-neutral-400 mt-2">Structured onboarding, detailed itinerary, contingency plans.</p>
</div>
<div className="relative">
<span className="absolute -left-[49px] w-4 h-4 rounded-full bg-neutral-800 ring-4 ring-neutral-950"></span>
<h3 className="text-lg font-medium text-white">05. Experience Execution &amp; Delivery</h3>
<p className="text-sm text-neutral-400 mt-2">On-the-ground support, coordination, and service quality maintenance.</p>
</div>
<div className="relative">
<span className="absolute -left-[49px] w-4 h-4 rounded-full bg-neutral-800 ring-4 ring-neutral-950"></span>
<h3 className="text-lg font-medium text-white">06. Post-Experience Review</h3>
<p className="text-sm text-neutral-400 mt-2">Feedback gathering, debrief, and follow-up support.</p>
</div>
</div>
</div>

<div className="mt-24 p-12 rounded-3xl bg-[#626041]/10 border border-[#626041]/30 text-center observe-me">
<h3 className="text-2xl font-semibold text-white mb-4">Start Your Journey</h3>
<p className="text-neutral-400 mb-8 max-w-xl mx-auto">Ready to bridge the gap between elite sports and corporate performance?</p>
<a className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors" href="#contact">Request Access</a>
</div>
</div>
</div>

<div className="page-view hidden" id="page-health">
<header className="relative h-[60vh] flex items-end pb-16 pl-6 md:pl-16 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="relative z-10 max-w-4xl animate-fade">
<div className="flex items-center gap-2 mb-4">
<button className="text-xs uppercase tracking-widest text-[#626041] hover:text-white transition-colors flex items-center gap-1" onclick="router('home')">
<i className="w-3 h-3" data-lucide="arrow-left"></i> Back
                        </button>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-4">Elite Healthspan</h1>
<h2 className="text-xl md:text-2xl text-[#626041] font-medium mb-6">The Executive Health Protocol</h2>
<p className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
                        Where performance meets personalised health strategy. Predictive, preventative, personalised, participatory, and precision.
                    </p>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div className="observe-me">
<h3 className="text-2xl font-semibold text-white mb-6">What We Do</h3>
<p className="text-neutral-400 mb-6">
                            In a high-stakes world where clarity, energy, and resilience matter, we deliver a science-backed solution. The Executive Health Protocol is a precision-based wellbeing and performance program tailored for founders and senior executives.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#626041] rounded-full"></span> Advanced health diagnostics</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#626041] rounded-full"></span> Personalised performance strategies</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#626041] rounded-full"></span> Ongoing coaching and tracking</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#626041] rounded-full"></span> Sustainable, measurable results</li>
</ul>
<p className="text-white font-medium">Our goal? To help leaders operate at 100%—consistently.</p>
</div>
<div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8 observe-me delay-100">
<h3 className="text-2xl font-semibold text-white mb-6">Who It's For</h3>
<div className="space-y-6">
<div className="flex gap-4">
<i className="w-6 h-6 text-[#626041] shrink-0" data-lucide="zap"></i>
<p className="text-sm text-neutral-400">Leaders who are already high-performing but want to unlock more focus, energy, and edge.</p>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-[#626041] shrink-0" data-lucide="shield-check"></i>
<p className="text-sm text-neutral-400">Those who value future-proofing their health and longevity.</p>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-[#626041] shrink-0" data-lucide="bar-chart-2"></i>
<p className="text-sm text-neutral-400">Individuals who prefer precision and data over trends and guesswork.</p>
</div>
</div>
</div>
</div>
<div className="bg-[#626041] rounded-3xl overflow-hidden relative observe-me">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="relative z-10 p-12 text-center">
<h3 className="text-3xl font-semibold text-white mb-6">Our Difference</h3>
<p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Most programs offer information. We offer transformation. We go beyond basic health checks by integrating genetic testing, biological age assessments, comprehensive biomarkers, and wearable data.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
<div className="bg-neutral-950/20 backdrop-blur p-4 rounded-xl border border-white/10">
<span className="block text-white font-medium">Genetics</span>
</div>
<div className="bg-neutral-950/20 backdrop-blur p-4 rounded-xl border border-white/10">
<span className="block text-white font-medium">Bio Age</span>
</div>
<div className="bg-neutral-950/20 backdrop-blur p-4 rounded-xl border border-white/10">
<span className="block text-white font-medium">Biomarkers</span>
</div>
<div className="bg-neutral-950/20 backdrop-blur p-4 rounded-xl border border-white/10">
<span className="block text-white font-medium">Wearable Data</span>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center observe-me">
<h4 className="text-white text-xl font-medium mb-6">Optimise without burning out.</h4>
<a className="inline-block bg-white text-neutral-900 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors" href="#contact">Request Access</a>
</div>
</div>
</div>

<div className="page-view hidden" id="page-genetics">
<header className="relative h-[60vh] flex items-end pb-16 pl-6 md:pl-16 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="relative z-10 max-w-4xl animate-fade">
<div className="flex items-center gap-2 mb-4">
<button className="text-xs uppercase tracking-widest text-[#626041] hover:text-white transition-colors flex items-center gap-1" onclick="router('home')">
<i className="w-3 h-3" data-lucide="arrow-left"></i> Back
                        </button>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-4">Performance Genetics Test</h1>
<p className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
                        Personalised health starts with your DNA. Unlock genetic insights to fine-tune your nutrition, habits, and lifestyle.
                    </p>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="mb-20 observe-me">
<h2 className="text-2xl font-semibold text-white mb-4">What We Assess</h2>
<p className="text-neutral-400 mb-10">This service combines advanced, clinically-backed DNA testing with a 90-minute consultation.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-900 p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 bg-[#626041]/20 rounded-full flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#626041]" data-lucide="activity"></i>
</div>
<h3 className="text-white font-medium mb-3">Core Biological Systems</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li>Lipid metabolism</li>
<li>Methylation</li>
<li>Detoxification</li>
<li>Inflammation</li>
</ul>
</div>

<div className="bg-neutral-900 p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 bg-[#626041]/20 rounded-full flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#626041]" data-lucide="apple"></i>
</div>
<h3 className="text-white font-medium mb-3">Nutrition</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li>Macro/Micro requirements</li>
<li>Caffeine &amp; Salt sensitivity</li>
<li>Gluten &amp; Lactose risks</li>
</ul>
</div>

<div className="bg-neutral-900 p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 bg-[#626041]/20 rounded-full flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#626041]" data-lucide="scale"></i>
</div>
<h3 className="text-white font-medium mb-3">Weight Management</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li>Weight gain predisposition</li>
<li>Eating behaviours</li>
<li>Fat metabolism</li>
</ul>
</div>

<div className="bg-neutral-900 p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 bg-[#626041]/20 rounded-full flex items-center justify-center mb-4">
<i className="w-5 h-5 text-[#626041]" data-lucide="dumbbell"></i>
</div>
<h3 className="text-white font-medium mb-3">Exercise Response</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li>Power vs. Endurance</li>
<li>Injury risk</li>
<li>Recovery needs</li>
</ul>
</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 border-t border-white/10 pt-20 observe-me">
<div>
<h2 className="text-2xl font-semibold text-white mb-6">What's Included</h2>
<ul className="space-y-4">
<li className="flex gap-4">
<i className="w-5 h-5 text-[#626041] shrink-0 mt-1" data-lucide="package"></i>
<div>
<span className="text-neutral-400 text-sm">Delivered directly to your door.</span>
</div>
</li>
<li className="flex gap-4">
<i className="w-5 h-5 text-[#626041] shrink-0 mt-1" data-lucide="user-check"></i>
<div>
<span className="text-neutral-400 text-sm">1:1 Expert interpretation of results.</span>
</div>
</li>
<li className="flex gap-4">
<i className="w-5 h-5 text-[#626041] shrink-0 mt-1" data-lucide="file-text"></i>
<div>
<span className="text-neutral-400 text-sm">Nutrition and lifestyle recommendations.</span>
</div>
</li>
</ul>
</div>
<div className="bg-neutral-900/50 p-8 rounded-2xl">
<h3 className="text-white font-medium mb-4">Who This Is For</h3>
<p className="text-neutral-400 text-sm mb-6">Ideal if you value precision, want data-driven guidance, and are ready to invest in long-term health optimisation.</p>
<h3 className="text-white font-medium mb-4">Next Step</h3>
<p className="text-neutral-400 text-sm mb-6">Personalised health starts here. Apply below to get started with a complimentary 20-minute Strategy Call.</p>
<a className="block w-full bg-[#626041] text-white text-center py-3 rounded-lg text-sm font-semibold hover:bg-[#504f35] transition-colors" href="#contact">Start Your Application</a>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-blacklabel">
<header className="relative h-[70vh] flex items-end pb-16 pl-6 md:pl-16 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50"></div>
<div className="relative z-10 max-w-5xl animate-fade">
<div className="flex items-center gap-2 mb-4">
<button className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-1" onclick="router('home')">
<i className="w-3 h-3" data-lucide="arrow-left"></i> Back
                        </button>
</div>
<h1 className="text-4xl md:text-7xl font-semibold tracking-tighter text-white mb-4">PRIVATE Black Label</h1>
<p className="text-xl text-neutral-200 font-light tracking-wide">Ultra-Exclusive Experiences for the World's Most Discerning Clients.</p>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center max-w-3xl mx-auto mb-24 observe-me">
<h2 className="text-3xl font-light text-white mb-8">Confidential. Invitation-Only.</h2>
<p className="text-neutral-400 leading-relaxed text-lg">
                        CRE8 XP | PRIVATE BLACK LABEL curates once-in-a-lifetime journeys. We don't just plan events. We engineer unforgettable moments that live with you forever. Merging luxury, adrenaline, performance, and intimacy.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-12 mb-24 observe-me delay-100">
<div className="border-t border-white/10 pt-8">
<h3 className="text-xl text-white font-medium mb-3">Experience Architecture</h3>
<p className="text-neutral-500 text-sm">From ideation to execution, we craft every journey as a story-driven experience—with personal growth, joy, surprise, and exclusivity embedded into every moment.</p>
</div>
<div className="border-t border-white/10 pt-8">
<h3 className="text-xl text-white font-medium mb-3">Global Access, Local Magic</h3>
<p className="text-neutral-500 text-sm">From the summits of New Zealand's untouched backcountry to the edge of space—we open doors that don't exist on Google.</p>
</div>
<div className="border-t border-white/10 pt-8">
<h3 className="text-xl text-white font-medium mb-3">Confidential Access</h3>
<p className="text-neutral-500 text-sm">Our clients are not on the guest list—they are the reason the event exists. Every detail is tailored around who they are.</p>
</div>
<div className="border-t border-white/10 pt-8">
<h3 className="text-xl text-white font-medium mb-3">Performance Meets Purpose</h3>
<p className="text-neutral-500 text-sm">Pre-flight mindset coaching with astronauts, training with Olympic athletes, or backstage with your favorite band.</p>
</div>
</div>

<div className="bg-[#0f0f0f] rounded-3xl p-8 md:p-16 border border-white/5 observe-me">
<h2 className="text-2xl text-white font-semibold mb-10">Previous Signature Experiences</h2>
<div className="space-y-6">
<div className="flex flex-col md:flex-row gap-4 md:items-center justify-between border-b border-white/5 pb-6 group">
<div>
<h4 className="text-white text-lg group-hover:text-[#626041] transition-colors">Australian Open Finals</h4>
<p className="text-neutral-500 text-sm mt-1">VIP court access, helicopter transfer, tennis legend lessons.</p>
</div>
<span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">Sport</span>
</div>
<div className="flex flex-col md:flex-row gap-4 md:items-center justify-between border-b border-white/5 pb-6 group">
<div>
<h4 className="text-white text-lg group-hover:text-[#626041] transition-colors">Edge of Space Travel</h4>
<p className="text-neutral-500 text-sm mt-1">Mindset coaching + 6-hour spaceflight aboard Zephalto's luxury capsule.</p>
</div>
<span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">Adventure</span>
</div>
<div className="flex flex-col md:flex-row gap-4 md:items-center justify-between border-b border-white/5 pb-6 group">
<div>
<h4 className="text-white text-lg group-hover:text-[#626041] transition-colors">Secret NZ Ski Tours</h4>
<p className="text-neutral-500 text-sm mt-1">Heli-skiing remote peaks guided by world-class pros.</p>
</div>
<span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">Travel</span>
</div>
<div className="flex flex-col md:flex-row gap-4 md:items-center justify-between border-b border-white/5 pb-6 group">
<div>
<h4 className="text-white text-lg group-hover:text-[#626041] transition-colors">Backstage with Icons</h4>
<p className="text-neutral-500 text-sm mt-1">Private performances, green room access, music royalty.</p>
</div>
<span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">Music</span>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-neutral-400 mb-6 text-sm">This level of access is strictly by application.</p>
<a className="inline-block border border-white text-white px-10 py-3 rounded-none text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all" href="#contact">Request Private Access</a>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-black border-t border-white/10 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-semibold tracking-tighter text-white block mb-6">CRE8XP</span>
<p className="text-neutral-500 text-sm max-w-sm">
                        High-impact, turn-key experiences that push boundaries and elevate performance.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><button className="hover:text-[#626041] transition-colors" onclick="router('home')">Home</button></li>
<li><button className="hover:text-[#626041] transition-colors" onclick="router('travel')">High Performance Travel</button></li>
<li><button className="hover:text-[#626041] transition-colors" onclick="router('health')">Elite Healthspan</button></li>
<li><button className="hover:text-[#626041] transition-colors" onclick="router('genetics')">Genetics Test</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> a.blake@southernhq.co</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> 0434 770 307</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2025 CRE8XP. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
