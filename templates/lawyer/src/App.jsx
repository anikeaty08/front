import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener("DOMContentLoaded", () => {
        
        // --- NEW PRELOADER LOGIC ---
        const keywords = [
            "ACTUS REUS", "MENS REA", "HABEAS CORPUS", "AUDI ALTERAM PARTEM", 
            "NULLA POENA SINE LEGE", "PRESUMPTION OF INNOCENCE", "CASE DISMISSED"
        ];

        const preloaderText = document.getElementById('preloader-text');
        const preloaderBar = document.getElementById('preloader-bar');
        const preloader = document.getElementById('preloader');
        
        let index = 0;
        const totalDuration = 5000;
        const intervalTime = totalDuration / keywords.length;

        const textInterval = setInterval(() => {
            if (index < keywords.length) {
                preloaderText.style.opacity = '0';
                setTimeout(() => {
                    preloaderText.innerText = keywords[index];
                    if(index === keywords.length - 1) {
                        preloaderText.classList.add('text-red-600');
                        preloaderText.classList.remove('text-white');
                    }
                    preloaderText.style.opacity = '1';
                    index++;
                }, 100);
                const percentage = ((index + 1) / keywords.length) * 100;
                preloaderBar.style.width = `${percentage}%`;
            } else {
                clearInterval(textInterval);
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    startMainSiteAnimations();
                }, 800);
            }
        }, intervalTime);

        // --- MAIN ANIMATIONS ---
        function startMainSiteAnimations() {
            setTimeout(() => { document.querySelector("header").classList.add("loaded"); }, 100);
            setTimeout(() => { 
                const heroTitle = document.getElementById("hero-title");
                if (heroTitle) heroTitle.classList.add("reveal-active");
            }, 300);
            setTimeout(() => {
                const img = document.querySelector(".hero-image");
                if (img) img.classList.add("active");
            }, 100);
            initializeObservers();
            startLawTicker();
        }

        // --- MENU LOGIC ---
        const btn = document.getElementById("mobile-menu-btn");
        const menu = document.getElementById("mobile-menu");
        const links = document.querySelectorAll(".mobile-link");

        if(btn) {
            btn.addEventListener("click", () => {
              menu.classList.toggle("hidden");
              const icon = btn.querySelector("iconify-icon");
              if (menu.classList.contains("hidden")) {
                icon.setAttribute("icon", "lucide:menu");
              } else {
                icon.setAttribute("icon", "lucide:x");
              }
            });
            links.forEach((link) => {
              link.addEventListener("click", () => {
                menu.classList.add("hidden");
                btn.querySelector("iconify-icon").setAttribute("icon", "lucide:menu");
              });
            });
        }

        // --- OBSERVER ---
        function initializeObservers() {
             const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    if (entry.target.querySelector(".text-reveal-content")) {
                      entry.target.classList.add("reveal-active");
                    }
                    const blurImg = entry.target.querySelector(".blur-reveal-img");
                    if (blurImg) {
                      blurImg.classList.add("active");
                    }
                  }
                });
              }, { threshold: 0.1 });

            document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
            const profileSection = document.querySelector(".blur-reveal-img")?.closest("section");
            if (profileSection) observer.observe(profileSection);
        }

        window.addEventListener("scroll", () => {
          const scrolled = window.scrollY;
          document.querySelectorAll(".parallax-img").forEach((el) => {
            const speed = el.dataset.speed || 0.1;
            el.style.transform = `translateY(${scrolled * speed}px)`;
          });
        });

        // --- TICKER ---
        function startLawTicker() {
            const lawDisplay = document.getElementById("law-display");
            if (lawDisplay) {
              const legalFacts = [
                "Article 19(2)(c): Every person charged with a criminal offence shall be presumed to be innocent until he is proved or has pleaded guilty.",
                "Act 29, Section 1: The Criminal Offences Act (1960) remains the primary statutory basis for criminal liability and definitions in Ghana.",
                "Article 14(3): A person arrested shall be brought before a court within 48 hours. Habeas Corpus applies immediately thereafter.",
                "Article 19(1): A person charged with a criminal offence shall be given a fair hearing within a reasonable time by a court.",
                "Article 19(2)(e): A defendant has the right to be given adequate time and facilities for the preparation of his defence.",
                "Double Jeopardy (Article 19(7)): No person who shows that he has been tried by a competent court for a criminal offence shall be tried again for that offence.",
                "Right to Counsel: Under Ghanaian law, an accused person is entitled to a lawyer of their choice during proceedings.",
              ];
              let factIndex = 0;
              function updateLawTicker() {
                lawDisplay.style.opacity = "0";
                setTimeout(() => {
                  lawDisplay.innerText = legalFacts[factIndex];
                  lawDisplay.style.opacity = "1";
                  factIndex = (factIndex + 1) % legalFacts.length;
                }, 500);
              }
              updateLawTicker();
              setInterval(updateLawTicker, 5000);
            }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="preloader">
<div className="relative z-10 text-center px-4">
<h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter text-white uppercase mb-8 min-h-[80px]" id="preloader-text">
</h1>
<div className="w-64 h-1 bg-neutral-900 mx-auto rounded-full overflow-hidden">
<div className="h-full bg-red-700 w-0 transition-all duration-300 ease-out" id="preloader-bar"></div>
</div>
<div className="mt-4 text-xs font-mono text-neutral-500 tracking-widest uppercase">
                Initializing Defense Protocol...
            </div>
</div>
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
</div>
<div className="border-x bg-white max-w-[1400px] border-neutral-200 mr-auto ml-auto relative">
<div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 gap-0 z-0 h-full w-full">
<div className="hidden md:block md:col-span-3 border-r border-neutral-200/50 h-full"></div>
<div className="hidden md:block md:col-span-6 border-r border-neutral-200/50 h-full"></div>
<div className="hidden md:block md:col-span-3 h-full"></div>
</div>
<header className="relative z-50 border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-sm nav-load">
<div className="flex justify-between items-center px-4 md:px-6 py-4 md:py-5">
<div className="flex items-center gap-12">
<button className="md:hidden text-2xl text-black hover:text-red-700 transition-colors focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu"></iconify-icon>
</button>
<div className="hidden md:flex gap-12">
<a className="text-xs font-medium tracking-widest uppercase hover:text-red-700 transition-colors" href="about.html">About</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-red-700 transition-colors" href="credibility.html">Credibility</a>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group cursor-pointer whitespace-nowrap">
<iconify-icon className="text-xl text-red-700 group-hover:scale-110 transition-transform duration-500" icon="lucide:scale"></iconify-icon>
<a href="index.html">
<span className="font-semibold tracking-tighter text-base md:text-lg uppercase text-black">C. Oppongwaa</span>
</a>
</div>
<div className="flex items-center gap-8 md:gap-12">
<a className="text-xs font-medium tracking-widest uppercase hidden md:block hover:text-red-700 transition-colors" href="#services">Services</a>
<a className="px-4 py-2 md:px-5 md:py-2.5 bg-red-700 text-white text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-black transition-colors whitespace-nowrap" href="book-now.html">Book Now</a>
</div>
</div>
<div className="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-lg" id="mobile-menu">
<div className="flex flex-col p-6 gap-6 text-center">
<a className="mobile-link text-sm font-medium tracking-widest uppercase hover:text-red-700 transition-colors" href="about.html">About</a>
<a className="mobile-link text-sm font-medium tracking-widest uppercase hover:text-red-700 transition-colors" href="credibility.html">Credibility</a>
<a className="mobile-link text-sm font-medium tracking-widest uppercase hover:text-red-700 transition-colors" href="#services">Services</a>
</div>
</div>
</header>
<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 md:min-h-[850px]">
<div className="col-span-1 md:col-span-9 min-h-[85vh] md:min-h-full border-b md:border-b-0 md:border-r border-neutral-200 relative group overflow-hidden bg-black">
<div className="absolute inset-0">
<img className="w-full h-full object-cover grayscale contrast-125 hero-image parallax-img opacity-60" data-speed="0.05" src="https://images.unsplash.com/photo-1608875848903-06eec0bd71e2?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-red-900/20 mix-blend-multiply"></div>
</div>
<div className="absolute bottom-0 left-0 p-6 md:p-12 text-white z-20 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-32">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6" id="hero-title">
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-100">Uncompromising</span></span>
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-200 text-red-600">Defense.</span></span>
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-300 text-neutral-400">Global</span></span>
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-300 text-neutral-400">Reach.</span></span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-light reveal delay-500 mb-8 border-l-2 border-red-700 pl-6">
                Elite legal counsel based in Accra. Specializing in International Criminal Law for high-profile individuals and organizations who demand precision.
              </p>
<div className="flex flex-wrap gap-4 reveal delay-700">
<a className="px-7 py-3.5 bg-red-700 text-white text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-black transition-colors" href="#contact">
                  Schedule Consultation
                </a>
<a className="px-7 py-3.5 border border-white/20 text-white backdrop-blur-sm text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors flex items-center gap-2" href="tel:+233595126483">
<iconify-icon className="text-base text-red-500" icon="lucide:phone"></iconify-icon>
                  +233 59 512 6483
                </a>
</div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-3 grid grid-rows-3 h-auto md:h-full min-h-[400px] bg-neutral-50">
<div className="row-span-1 border-b border-neutral-200 p-8 flex flex-col justify-between reveal delay-500 hover:bg-white transition-colors group">
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:graduation-cap"></iconify-icon>
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-black">LL.M.</h2>
<span className="text-xs font-mono text-neutral-500 mt-2 block uppercase tracking-widest">Intl. Criminal Law &amp; Justice</span>
</div>
</div>
<div className="row-span-1 border-b border-neutral-200 p-8 flex flex-col justify-between reveal delay-700 hover:bg-white transition-colors group">
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:globe-2"></iconify-icon>
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-black">Accra</h2>
<span className="text-xs font-mono text-neutral-500 mt-2 block uppercase tracking-widest">Based • Global Operation</span>
</div>
</div>
<div className="row-span-1 p-8 flex flex-col justify-between reveal delay-700 hover:bg-white transition-colors group relative overflow-hidden">
<iconify-icon className="text-3xl text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:shield-check"></iconify-icon>
<div>
<h2 className="text-4xl font-semibold tracking-tighter text-black">Elite</h2>
<span className="text-xs font-mono text-neutral-500 mt-2 block uppercase tracking-widest">Defense Strategy</span>
</div>
</div>
</div>
</section>
<div className="border-b border-neutral-200 overflow-hidden py-5 bg-white">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> High-Profile Criminal Defense</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> International Arbitration</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> Corporate Compliance</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> Human Rights Litigation</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
</div>
<div className="marquee-content">
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> High-Profile Criminal Defense</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> International Arbitration</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> Corporate Compliance</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-neutral-800 mx-8 flex items-center gap-2"><iconify-icon className="text-red-600" icon="lucide:check-circle"></iconify-icon> Human Rights Litigation</span>
<span className="text-xs font-bold font-mono uppercase tracking-widest text-red-600 mx-8">•</span>
</div>
</div>
</div>
<div className="border-b border-neutral-200 bg-black text-white overflow-hidden relative z-20">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12">
<div className="col-span-1 md:col-span-3 p-6 border-b md:border-b-0 md:border-r border-neutral-800 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_12px_rgba(220,38,38,1)]"></div>
<span className="text-xs font-mono uppercase tracking-widest text-red-500">Constitution Monitor</span>
</div>
<div className="col-span-1 md:col-span-9 p-6 flex items-center">
<p className="text-sm md:text-base font-medium tracking-wide text-neutral-200 transition-opacity duration-500 opacity-100" id="law-display" style={{opacity: '1'}}>
              Article 19(2)(c): Every person charged with a criminal offence shall be presumed to be innocent until he is proved or has pleaded guilty.
            </p>
</div>
</div>
</div>
<section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] border-b border-neutral-200 bg-white">
<div className="order-2 md:order-1 flex flex-col justify-center p-8 md:p-16 border-t md:border-t-0 md:border-r border-neutral-200 relative">
<div className="absolute top-0 left-0 p-6 md:p-12 pointer-events-none">
<svg className="text-neutral-100" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M0 0H24V24H0V0Z" fill="currentColor" fillOpacity="0.5"></path>
</svg>
</div>
<div className="reveal">
<div className="w-12 h-[3px] bg-red-700 mb-8"></div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[0.95] mb-8 text-black">
              "The law is not merely a profession. It is the <span className="text-red-700">architecture of justice</span>."
            </h2>
<p className="text-neutral-500 text-lg leading-relaxed max-w-md mb-8">
              With over a decade of high-stakes litigation experience, I provide clarity in chaos. My practice is built on the foundation of rigorous preparation and unwavering advocacy.
            </p>
<div className="flex items-center gap-4">
<div className="h-12 w-12 bg-black rounded-full flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-white" icon="lucide:pen-tool"></iconify-icon>
</div>
<div>
<span className="block text-sm font-bold uppercase tracking-wide text-black">Christiana Oppongwaa</span>
<span className="block text-xs text-red-700 font-mono font-bold">MANAGING COUNSEL</span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative overflow-hidden h-[600px] md:h-auto bg-neutral-100">
<img alt="Christiana Oppongwaa Portrait" className="absolute inset-0 w-full h-full object-cover object-top blur-reveal-img grayscale contrast-110" src="https://images.unsplash.com/photo-1608875848903-06eec0bd71e2?w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
<div className="absolute bottom-0 right-0 p-8">
<div className="bg-black/90 backdrop-blur-md px-4 py-2 text-xs font-mono uppercase tracking-widest text-white border border-white/10">
              Accra • 5°33'N
            </div>
</div>
</div>
</section>
<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200" id="about">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[400px] border-b md:border-b-0 md:border-r border-neutral-200 reveal bg-neutral-50">
<div className="flex flex-col gap-8">
<div className="w-16 h-16 bg-red-700 rounded-sm flex items-center justify-center shadow-lg shadow-red-900/20">
<iconify-icon className="text-3xl text-white" icon="lucide:gavel"></iconify-icon>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-6">
                Why Christiana Oppongwaa?
              </h3>
<p className="text-neutral-600 leading-relaxed mb-6">
                The legal landscape is unforgiving. It requires more than just knowledge; it demands strategy, foresight, and an unshakeable command of international statutes.
              </p>
<div className="space-y-4 mt-8">
<div className="flex items-center gap-4">
<iconify-icon className="text-red-700" icon="lucide:check"></iconify-icon>
<span className="text-sm font-semibold text-neutral-800">Masters (LLM) in Criminal Law</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-red-700" icon="lucide:check"></iconify-icon>
<span className="text-sm font-semibold text-neutral-800">Cross-border Jurisdiction Expert</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-red-700" icon="lucide:check"></iconify-icon>
<span className="text-sm font-semibold text-neutral-800">Confidentiality Assured</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-7 p-8 md:p-16 flex flex-col justify-center reveal delay-100 bg-white">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight leading-snug text-black mb-8">
            "I don't just represent you; I protect your future. By fusing local Ghanaian legal frameworks with the rigour of International Criminal Justice, I provide a defense that is intellectually superior and <span className="text-red-700 bg-red-50 px-2">strategically impenetrable</span>."
          </h2>
<div className="flex items-center gap-4 mt-4">
<div className="h-px flex-1 bg-neutral-200"></div>
<span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Christiana Oppongwaa, LL.M.</span>
</div>
</div>
</section>
<section className="relative z-10 py-20 bg-white" id="services">
<div className="px-4 md:px-6 mb-16 flex justify-between items-end reveal">
<div>
<span className="text-xs font-mono uppercase text-red-600 font-bold mb-2 block">01 / Practice Areas</span>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
              Legal Expertise
            </h3>
</div>
<div className="hidden md:block">
<span className="text-xs font-mono text-neutral-400">SERVING CLIENTS GLOBALLY</span>
</div>
</div>
<div className="group border-y border-neutral-200 bg-white hover:bg-neutral-50 transition-colors duration-500 cursor-pointer">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
<div className="col-span-1 md:col-span-6 p-8 md:p-12 border-r border-neutral-200/0 md:border-neutral-200 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:swords"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider text-black">Primary Specialization</span>
</div>
<h4 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-black">
                International Criminal Law
              </h4>
<p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                Defense against complex charges involving international statutes, extradition treaties, and cross-border jurisdiction issues.
              </p>
</div>
<div className="col-span-6 hidden md:block relative overflow-hidden bg-neutral-100">
<div className="absolute inset-0 flex items-center justify-center p-12">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
<div className="group border-b border-neutral-200 bg-white hover:bg-neutral-50 transition-colors duration-500 cursor-pointer">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
<div className="col-span-1 md:col-span-6 p-8 md:p-12 border-r border-neutral-200/0 md:border-neutral-200 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:building-2"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider text-black">Corporate &amp; High Profile</span>
</div>
<h4 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-black">
                Regulatory &amp; Compliance Defense
              </h4>
<p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                Advising corporations and executives on navigating Ghana's legal frameworks while maintaining international compliance standards.
              </p>
</div>
<div className="col-span-6 hidden md:block relative overflow-hidden bg-neutral-100">
<div className="absolute inset-0 flex items-center justify-center p-12">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1619418602850-35ad20aa1700?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
<div className="group border-b border-neutral-200 bg-white hover:bg-neutral-50 transition-colors duration-500 cursor-pointer">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
<div className="col-span-1 md:col-span-6 p-8 md:p-12 border-r border-neutral-200/0 md:border-neutral-200 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-xl text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:users"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider text-black">Advisory</span>
</div>
<h4 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-black">
                Private Client Services
              </h4>
<p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                Discreet, effective counsel for high-net-worth individuals requiring immediate and confidential legal intervention.
              </p>
</div>
<div className="col-span-6 hidden md:block relative overflow-hidden bg-neutral-100">
<div className="absolute inset-0 flex items-center justify-center p-12">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply" src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 bg-neutral-50">
<div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-neutral-200 reveal">
<span className="text-xs font-mono uppercase text-red-600 font-bold mb-2 block">02 / Information</span>
<h2 className="text-4xl font-medium tracking-tight mb-6 text-black">
            Legal Insights
          </h2>
<p className="text-neutral-500 text-sm leading-relaxed">
            Regular analysis on the shifting landscape of International Justice and Ghanaian Law.
          </p>
</div>
<div className="col-span-1 md:col-span-8 bg-white">
<a className="block p-8 md:p-12 border-b border-neutral-200 hover:bg-neutral-50 transition-colors group reveal delay-100" href="#">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-red-600 font-mono font-bold">LATEST BRIEFING</span>
<iconify-icon className="text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-black mb-2 group-hover:text-neutral-700">
              The Extradition Dilemma: Navigating Cross-Border Charges in 2024
            </h3>
<p className="text-neutral-500 text-sm">
              An analysis of recent precedents in West African international courts.
            </p>
</a>
<a className="block p-8 md:p-12 hover:bg-neutral-50 transition-colors group reveal delay-200" href="#">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-red-600 font-mono font-bold">CASE STUDY</span>
<iconify-icon className="text-neutral-400 group-hover:text-red-700 transition-colors" icon="lucide:arrow-up-right"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-medium text-black mb-2 group-hover:text-neutral-700">
              Corporate Liability in Human Rights Violations
            </h3>
<p className="text-neutral-500 text-sm">
              Protecting the corporate veil while ensuring strict compliance.
            </p>
</a>
</div>
</section>
<footer className="relative z-10 bg-black text-neutral-200 pt-24 pb-12" id="contact">
<div className="px-6 md:px-12 mb-24 text-center">
<div className="reveal">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 text-white">
              Uncompromising<span className="text-red-700">Legal Defense.</span>
</h2>
<a className="inline-block border border-neutral-700 rounded-sm px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-red-700 hover:border-red-700 hover:text-white transition-all duration-300" href="mailto:contact@oppongwaa.com">
              Schedule Consultation
            </a>
</div>
</div>
<div className="border-t border-neutral-800 w-full mb-12"></div>
<div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-12 gap-12 md:gap-0">
<div className="col-span-1 md:col-span-3">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-xl text-red-600" icon="lucide:scale"></iconify-icon>
<span className="font-bold tracking-tight text-lg text-white">C. OPPONGWAA</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-[200px]">
              International Criminal Law Counsel. Providing elite defense strategy in Accra and beyond.
            </p>
</div>
<div className="col-span-1 md:col-span-3">
<h4 className="text-xs font-mono uppercase text-neutral-500 mb-6 tracking-widest">
              Sitemap
            </h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#credibility">Credibility</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal Briefings</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-3">
<h4 className="text-xs font-mono uppercase text-neutral-500 mb-6 tracking-widest">
              Contact
            </h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="https://wa.me/233595126483">WhatsApp <iconify-icon className="text-xs text-neutral-600" icon="lucide:arrow-up-right"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+233595126483">Urgent Line <iconify-icon className="text-xs text-neutral-600" icon="lucide:arrow-up-right"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:contact@oppongwaa.com">Email Office <iconify-icon className="text-xs text-neutral-600" icon="lucide:arrow-up-right"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">LinkedIn <iconify-icon className="text-xs text-neutral-600" icon="lucide:arrow-up-right"></iconify-icon></a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-3 flex flex-col justify-between h-full">
<div className="text-right hidden md:block">
<iconify-icon className="text-4xl text-neutral-800" icon="lucide:globe"></iconify-icon>
</div>
<div className="text-left md:text-right mt-4 md:mt-0">
<span className="text-xs text-neutral-600 block mb-1">© 2024 C. Oppongwaa Law.</span>
<span className="text-xs text-neutral-600">Accra, Ghana.</span>
</div>
</div>
</div>
<div className="mt-12 md:mt-24 text-center opacity-10 pointer-events-none select-none overflow-hidden">
<span className="text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[20rem] font-bold leading-none tracking-tighter whitespace-nowrap text-white">
        JUSTICE
    </span>
</div>

</footer></div>
    </>
  );
}
