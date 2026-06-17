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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Update Copyright Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Header Scroll Effect
        const header = document.getElementById('header');
        const logoText = document.getElementById('logo-text-1');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'border-b', 'border-slate-800', 'shadow-sm');
                header.classList.remove('bg-transparent', 'py-4');
                header.classList.add('py-3');
                logoText.classList.remove('text-white');
                logoText.classList.add('text-white'); 
            } else {
                header.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'border-b', 'border-slate-800', 'shadow-sm', 'py-3');
                header.classList.add('bg-transparent', 'py-4');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl"></iconify-icon>';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = '';
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });

        // Scroll Reveal Animations for General Elements
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Advanced Process Sequence Scroll Animation
        const processContainer = document.getElementById('process-container');
        const processLine = document.getElementById('process-line');
        const processSteps = document.querySelectorAll('.process-step');

        function updateProcessScroll() {
            if (!processContainer || !processLine || processSteps.length === 0) return;
            
            const rect = processContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Start lighting up when the container crosses 75% of the viewport height
            const startTrigger = windowHeight * 0.75;
            
            if (rect.top < startTrigger) {
                const scrolledPast = startTrigger - rect.top;
                const totalDistance = rect.height; 
                
                let progress = scrolledPast / totalDistance;
                progress = Math.min(Math.max(progress, 0), 1);
                
                processLine.style.height = `${progress * 100}%`;
                
                processSteps.forEach((step) => {
                    const stepTop = step.offsetTop;
                    // Trigger each step slightly ahead of the line for a fluid feel
                    const stepProgress = stepTop / rect.height;
                    
                    if (progress >= stepProgress - 0.05) {
                        step.classList.add('active');
                    } else {
                        step.classList.remove('active');
                    }
                });
            } else {
                processLine.style.height = '0%';
                processSteps.forEach(step => step.classList.remove('active'));
            }
        }

        window.addEventListener('scroll', updateProcessScroll);
        window.addEventListener('resize', updateProcessScroll);
        // Execute once slightly after load to set initial state correctly if scrolled down
        setTimeout(updateProcessScroll, 100);

    
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
      

<header className="fixed w-full top-0 z-50 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
<a className="flex items-center gap-2 group z-50" href="#">
<div className="flex flex-col">
<span className="text-2xl tracking-tight font-semibold transition-colors duration-300" id="logo-text-1">AMERICAN PRO</span>
<span className="text-xs tracking-widest text-red-500 font-medium uppercase mt-0.5 text-center flex items-center justify-center gap-2">
<span className="w-4 h-0.5 bg-slate-400"></span>
                        CONSTRUCTION
                        <span className="w-4 h-0.5 bg-slate-400"></span>
</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base text-slate-200 hover:text-white transition-colors font-medium" href="#about">About</a>
<a className="text-base text-slate-200 hover:text-white transition-colors font-medium" href="#services">Services</a>
<a className="text-base text-slate-200 hover:text-white transition-colors font-medium" href="#process">Process</a>
<a className="text-base text-slate-200 hover:text-white transition-colors font-medium" href="#projects">Projects</a>
<a className="text-base text-slate-200 hover:text-white transition-colors font-medium" href="#faq">FAQ</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 text-base text-white hover:text-slate-200 transition-colors font-medium" href="tel:760-216-0862">
<iconify-icon className="text-base text-red-500" icon="solar:phone-linear"></iconify-icon>
                    (760) 216-0862
                </a>
<a className="bg-red-600 text-white px-5 py-2.5 rounded-md text-base font-medium hover:bg-red-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5" href="#contact">
                    Free Estimate
                </a>
</div>

<button className="lg:hidden text-white z-50 p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-slate-900 z-40 flex flex-col pt-24 px-6 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<a className="text-xl text-slate-300 hover:text-white font-medium mobile-link" href="#about">About</a>
<a className="text-xl text-slate-300 hover:text-white font-medium mobile-link" href="#services">Services</a>
<a className="text-xl text-slate-300 hover:text-white font-medium mobile-link" href="#process">Process</a>
<a className="text-xl text-slate-300 hover:text-white font-medium mobile-link" href="#projects">Projects</a>
<a className="text-xl text-slate-300 hover:text-white font-medium mobile-link" href="#faq">FAQ</a>
</nav>
<div className="mt-12 flex flex-col gap-4">
<a className="bg-slate-800 text-white px-6 py-4 rounded-md text-lg font-medium text-center flex items-center justify-center gap-2" href="tel:760-216-0862">
<iconify-icon className="text-xl text-red-500" icon="solar:phone-linear"></iconify-icon>
                    Call (760) 216-0862
                </a>
<a className="bg-red-600 text-white px-6 py-4 rounded-md text-lg font-medium text-center mobile-link" href="#contact">
                    Get a Free Estimate
                </a>
</div>
</div>
</header>

<section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Construction Site" className="w-full h-full object-cover object-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a97922ec-75de-4d1f-ad0c-5c909763fc3e_3840w.jpg"/>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full mt-16">
<div className="max-w-3xl">
<div className="reveal active">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-slate-300 text-sm font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Accepting New Projects
                    </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-white leading-[1.1] mb-6 reveal reveal-delay-1 active">
                    Built with Integrity. <br/>
<span className="text-slate-300">Finished with Precision.</span>
</h1>
<p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl reveal reveal-delay-2 active">
                    American Pro Construction delivers reliable, high-quality residential and commercial building services. Clean workmanship, honest communication, and professional results from start to finish.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 reveal reveal-delay-3 active">
<a className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-lg text-center flex items-center justify-center gap-2 group" href="#contact">
                        Get a Free Estimate
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 text-center flex items-center justify-center gap-2" href="tel:760-216-0862">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        Call Now
                    </a>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
<iconify-icon className="text-2xl text-slate-400 opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</section>

<div className="bg-slate-50 border-b border-slate-200 py-8">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-200">
<div className="flex flex-col items-center gap-2 reveal active">
<iconify-icon className="text-2xl text-slate-900" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-base font-medium text-slate-900">Quality Workmanship</span>
</div>
<div className="flex flex-col items-center gap-2 reveal reveal-delay-1 active">
<iconify-icon className="text-2xl text-slate-900" icon="solar:calculator-linear"></iconify-icon>
<span className="text-base font-medium text-slate-900">Free Estimates</span>
</div>
<div className="flex flex-col items-center gap-2 reveal reveal-delay-2 active">
<iconify-icon className="text-2xl text-slate-900" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-base font-medium text-slate-900">Reliable Scheduling</span>
</div>
<div className="flex flex-col items-center gap-2 reveal reveal-delay-3 active">
<iconify-icon className="text-2xl text-slate-900" icon="solar:chat-line-linear"></iconify-icon>
<span className="text-base font-medium text-slate-900">Clear Communication</span>
</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="absolute inset-0 bg-slate-100 rounded-2xl transform translate-x-4 translate-y-4 z-0"></div>
<img alt="Construction Planning" className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b84f0bb-f94c-4377-bc0d-2a7f3ecadd90_1600w.jpg"/>
<div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-slate-700 hidden md:block">
<div className="flex items-start gap-4">
<iconify-icon className="text-[32px] text-red-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-base font-medium mb-1 tracking-tight">Personalized Attention</h4>
<p className="text-sm text-slate-400">Direct communication with ownership on every project.</p>
</div>
</div>
</div>
</div>
<div className="reveal reveal-delay-1">
<h2 className="text-slate-900 text-base font-medium tracking-widest uppercase mb-3 flex items-center gap-2">
<span className="w-8 h-px bg-red-600"></span>
                        About Us
                    </h2>
<h3 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900 mb-6">
                        A Commitment to Solid Craftsmanship
                    </h3>
<div className="space-y-6 text-lg text-slate-600">
<p>
                            At American Pro Construction, we believe that every structure should be built on a foundation of trust, clear communication, and unwavering attention to detail. Led by Salim, our focus is entirely on delivering exceptional results for our clients.
                        </p>
<p>
                            Whether it's a home remodel, a commercial build-out, or general construction services, we approach every job with a meticulous eye and a dedication to doing things right the first time. We maintain clean job sites, adhere to reliable schedules, and ensure you are informed at every step.
                        </p>
<p className="font-medium text-slate-900">
                            We aren't just building structures; we are building a reputation for reliability and premium quality in the community.
                        </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-[32px] text-slate-400" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-slate-900">Salim</p>
<p className="text-sm text-slate-500">Owner, American Pro Construction</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-slate-900 text-base font-medium tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<span className="w-8 h-px bg-red-600"></span>
                    Our Expertise
                    <span className="w-8 h-px bg-red-600"></span>
</h2>
<h3 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900 mb-6">
                    Professional Construction Services
                </h3>
<p className="text-lg text-slate-600">
                    Comprehensive building and remodeling solutions tailored to meet the highest standards of quality and durability.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:home-2-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Residential Remodeling</h4>
<p className="text-base text-slate-600 leading-relaxed">
                        Complete home renovations, from kitchen and bathroom upgrades to full interior transformations designed for modern living.
                    </p>
</div>

<div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal reveal-delay-1">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Commercial Build-outs</h4>
<p className="text-base text-slate-600 leading-relaxed">
                        Professional interior finishes, framing, and renovations for commercial spaces, prioritizing functionality and brand aesthetics.
                    </p>
</div>

<div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal reveal-delay-2">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">General Construction</h4>
<p className="text-base text-slate-600 leading-relaxed">
                        Structural framing, drywall installation, flooring, and comprehensive general contracting services with a focus on structural integrity.
                    </p>
</div>

<div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:pallete-2-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Exterior Improvements</h4>
<p className="text-base text-slate-600 leading-relaxed">
                        Enhancing curb appeal and structural protection through siding, exterior painting, deck construction, and protective finishes.
                    </p>
</div>

<div className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal reveal-delay-1">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:ruler-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Custom Projects</h4>
<p className="text-base text-slate-600 leading-relaxed">
                        Specialized construction tasks tailored to unique architectural requirements or specific client design visions.
                    </p>
</div>

<div className="group bg-slate-900 rounded-xl p-8 border border-slate-800 flex flex-col justify-center items-center text-center reveal reveal-delay-2 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] opacity-10 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="relative z-10">
<h4 className="text-xl font-semibold text-white mb-4 tracking-tight">Need a specific service?</h4>
<p className="text-base text-slate-300 mb-6">Contact us to discuss your unique project requirements.</p>
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-red-400 transition-colors" href="#contact">
                            Discuss Your Project <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative" id="process">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-slate-400 text-base font-medium tracking-widest uppercase mb-3 flex items-center gap-2">
<span className="w-8 h-px bg-red-600"></span>
                        The American Pro Difference
                    </h2>
<h3 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mb-8">
                        Why Partner With Us?
                    </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-xl text-red-500" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 tracking-tight">Honest Communication</h4>
<p className="text-slate-400 text-base">We provide clear timelines, transparent pricing, and regular updates so you are never left guessing.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-xl text-red-500" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 tracking-tight">Clean Workmanship</h4>
<p className="text-slate-400 text-base">We respect your property. Our job sites are kept tidy, safe, and organized throughout the construction process.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-xl text-red-500" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2 tracking-tight">Detail-Oriented Execution</h4>
<p className="text-slate-400 text-base">From the first framing stud to the final coat of paint, we focus on precision and high-quality finishes.</p>
</div>
</div>
</div>
</div>

<div className="reveal reveal-delay-1 bg-slate-800/50 p-8 md:p-10 rounded-2xl border border-slate-700 backdrop-blur-sm relative z-0">
<h3 className="text-2xl tracking-tight font-semibold text-white mb-10">
                        Our Streamlined Process
                    </h3>
<div className="relative ml-4 space-y-12 py-2" id="process-container">

<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700/50"></div>

<div className="absolute left-0 top-0 w-[3px] -ml-[1px] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 h-0 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(245,158,11,0.6)] rounded-full z-0" id="process-line"></div>
<div className="relative pl-10 process-step z-10">
<div className="absolute w-8 h-8 bg-slate-900 border-[2px] border-slate-700 rounded-full -left-[16px] -top-1 flex items-center justify-center step-node">
<span className="text-sm font-semibold step-number transition-colors duration-700 text-slate-500">1</span>
</div>
<h4 className="text-xl font-medium mb-2 step-title">Consultation</h4>
<p className="text-base step-desc leading-relaxed">We discuss your vision, requirements, and budget to understand the scope.</p>
</div>
<div className="relative pl-10 process-step z-10">
<div className="absolute w-8 h-8 bg-slate-900 border-[2px] border-slate-700 rounded-full -left-[16px] -top-1 flex items-center justify-center step-node">
<span className="text-sm font-semibold step-number transition-colors duration-700 text-slate-500">2</span>
</div>
<h4 className="text-xl font-medium mb-2 step-title">Site Review &amp; Estimate</h4>
<p className="text-base step-desc leading-relaxed">Detailed inspection of the site followed by a comprehensive, transparent proposal.</p>
</div>
<div className="relative pl-10 process-step z-10">
<div className="absolute w-8 h-8 bg-slate-900 border-[2px] border-slate-700 rounded-full -left-[16px] -top-1 flex items-center justify-center step-node">
<span className="text-sm font-semibold step-number transition-colors duration-700 text-slate-500">3</span>
</div>
<h4 className="text-xl font-medium mb-2 step-title">Planning &amp; Scheduling</h4>
<p className="text-base step-desc leading-relaxed">Locking in materials, permits (if necessary), and a reliable start date.</p>
</div>
<div className="relative pl-10 process-step z-10">
<div className="absolute w-8 h-8 bg-slate-900 border-[2px] border-slate-700 rounded-full -left-[16px] -top-1 flex items-center justify-center step-node">
<span className="text-sm font-semibold step-number transition-colors duration-700 text-slate-500">4</span>
</div>
<h4 className="text-xl font-medium mb-2 step-title">Execution</h4>
<p className="text-base step-desc leading-relaxed">Professional construction with ongoing communication and clean job site management.</p>
</div>
<div className="relative pl-10 process-step z-10">
<div className="absolute w-8 h-8 bg-slate-900 border-[2px] border-slate-700 rounded-full -left-[16px] -top-1 flex items-center justify-center step-node">
<span className="text-sm font-semibold step-number transition-colors duration-700 text-slate-500">5</span>
</div>
<h4 className="text-xl font-medium mb-2 step-title">Final Walkthrough</h4>
<p className="text-base step-desc leading-relaxed">Reviewing the completed project together to ensure your total satisfaction.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
<div className="max-w-2xl">
<h2 className="text-slate-900 text-base font-medium tracking-widest uppercase mb-3 flex items-center gap-2">
<span className="w-8 h-px bg-red-600"></span>
                        Featured Work
                    </h2>
<h3 className="text-4xl md:text-5xl tracking-tight font-semibold text-slate-900">
                        Quality in Every Detail
                    </h3>
</div>
<p className="text-lg text-slate-500 pb-2">Explore our commitment to excellence.</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] reveal">
<img alt="Kitchen Remodel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-red-400 text-sm font-medium tracking-wide uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Interior Remodel</span>
<h4 className="text-white text-2xl font-semibold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Modern Kitchen Update</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] reveal reveal-delay-1">
<img alt="Bathroom Renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-red-400 text-sm font-medium tracking-wide uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Renovation</span>
<h4 className="text-white text-2xl font-semibold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Bathroom Refinishing</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] reveal reveal-delay-2">
<img alt="Exterior Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-red-400 text-sm font-medium tracking-wide uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Exterior</span>
<h4 className="text-white text-2xl font-semibold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Deck &amp; Siding Improvement</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center mb-16 reveal">
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Client Feedback</h3>
<p className="text-lg text-slate-600">Building trust through reliable results.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm reveal">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">"Salim was extremely professional and responsive. He clearly communicated the timeline and the work was incredibly clean and detailed. Highly recommend American Pro Construction."</p>
<div>
<p className="font-medium text-slate-900">Michael R.</p>
<p className="text-sm text-slate-500">Residential Remodel</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm reveal reveal-delay-1">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">"Great communication and solid craftsmanship from start to finish. They showed up when they said they would, kept the site tidy, and delivered exactly what we asked for."</p>
<div>
<p className="font-medium text-slate-900">Sarah T.</p>
<p className="text-sm text-slate-500">Interior Renovation</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm reveal reveal-delay-2">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl text-yellow-400" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">"It's hard to find contractors who actually care about the small details. Salim and his team did a fantastic job on our exterior project. Reliable and honest."</p>
<div>
<p className="font-medium text-slate-900">David L.</p>
<p className="text-sm text-slate-500">Exterior Improvements</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6 md:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Common Questions</h2>
<p className="text-lg text-slate-600">Everything you need to know about working with us.</p>
</div>
<div className="space-y-12">
<div className="reveal">
<h3 className="text-xl font-medium text-slate-900 mb-3">Do you offer free estimates?</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Yes, we provide free, no-obligation estimates for all potential projects. We will review your requirements and provide a transparent breakdown of expected costs and timelines.
                    </p>
</div>
<div className="reveal reveal-delay-1">
<h3 className="text-xl font-medium text-slate-900 mb-3">What types of projects do you take on?</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        We handle a wide variety of residential and commercial construction projects, including general remodeling, framing, drywall, painting, exterior improvements, and custom structural work.
                    </p>
</div>
<div className="reveal reveal-delay-2">
<h3 className="text-xl font-medium text-slate-900 mb-3">How long does a typical project take?</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Timelines vary greatly depending on the scope of work. During our initial consultation and estimate process, we provide a clear, realistic schedule and strive to complete projects efficiently without compromising quality.
                    </p>
</div>
<div className="reveal reveal-delay-3">
<h3 className="text-xl font-medium text-slate-900 mb-3">Will Salim be involved in my project?</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Absolutely. As the owner, Salim is deeply involved in client communication and oversees projects to ensure our high standards of quality and professionalism are met.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-red-600/5 mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white mb-6">Ready to Build Something Solid?</h2>
<p className="text-xl text-slate-300 mb-10">Contact us today to discuss your project and schedule a free estimate.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-red-700 transition-all shadow-lg inline-flex justify-center items-center gap-2" href="#contact">
                    Start Your Project
                </a>
<a className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md text-lg font-medium transition-all inline-flex justify-center items-center gap-2" href="tel:760-216-0862">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                    (760) 216-0862
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid lg:grid-cols-5 gap-12 lg:gap-24">

<div className="lg:col-span-2 reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Get in Touch</h2>
<p className="text-lg text-slate-600 mb-10">We look forward to discussing how American Pro Construction can help with your next project.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-slate-900" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Call Us</h4>
<a className="text-xl font-medium text-slate-900 hover:text-red-600 transition-colors" href="tel:760-216-0862">(760) 216-0862</a>
<p className="text-sm text-slate-500 mt-1">Ask for Salim</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-slate-900" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Email Us</h4>
<a className="text-lg font-medium text-slate-900 hover:text-red-600 transition-colors break-all" href="mailto:salimalilouche@yahoo.com">salimalilouche@yahoo.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-slate-900" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Service Area</h4>
<p className="text-lg font-medium text-slate-900">Proudly serving the local community</p>
<p className="text-sm text-slate-500 mt-1">Contact us to verify your location</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 reveal reveal-delay-1">
<form className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm" onsubmit="event.preventDefault(); alert('Form submitted! (This is a placeholder UI)');">
<h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Request an Estimate</h3>
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all text-base text-slate-900" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all text-base text-slate-900" id="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div className="space-y-2 mb-6">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all text-base text-slate-900" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-2 mb-6">
<label className="block text-sm font-medium text-slate-700" htmlFor="service">Project Type</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-md border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all text-base text-slate-900 appearance-none" id="service">
<option disabled="" selected="" value="">Select a service</option>
<option value="remodel">Residential Remodel</option>
<option value="commercial">Commercial Construction</option>
<option value="exterior">Exterior Improvements</option>
<option value="general">General Construction / Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
<iconify-icon className="text-base text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2 mb-8">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-md border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all text-base text-slate-900 resize-none" id="message" placeholder="Tell us a bit about what you're looking to build or renovate..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-slate-800 transition-all duration-300" type="submit">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex flex-col mb-6">
<span className="text-xl tracking-tight font-semibold text-white">AMERICAN PRO</span>
<span className="text-[10px] tracking-widest text-red-500 font-medium uppercase mt-0.5">Construction</span>
</div>
<p className="text-sm mb-6 leading-relaxed">
                        Premium construction and remodeling services built on integrity, clear communication, and precise execution.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Our Process</a></li>
<li><a className="hover:text-white transition-colors" href="#projects">Projects</a></li>
<li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">General Construction</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Remodeling</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Commercial Services</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Exterior Work</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex flex-col">
<span className="text-slate-500 text-xs uppercase tracking-wider mb-1">Phone</span>
<a className="text-white hover:text-red-400 transition-colors" href="tel:760-216-0862">(760) 216-0862</a>
</li>
<li className="flex flex-col mt-4">
<span className="text-slate-500 text-xs uppercase tracking-wider mb-1">Email</span>
<a className="text-white hover:text-red-400 transition-colors break-all" href="mailto:salimalilouche@yahoo.com">salimalilouche@yahoo.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs">© <span id="year">2026</span> American Pro Construction. All rights reserved.</p>
<div className="text-xs flex gap-4">
<span className="opacity-50">Fully Licensed &amp; Insured (Pending info)</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
