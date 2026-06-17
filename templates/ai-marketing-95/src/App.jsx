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
  


        lucide.createIcons();

        /* --- AI Text Reveal Engine (VelvetSound Enhanced) --- */
        document.addEventListener('DOMContentLoaded', () => {
            
            const processTextElement = (el) => {
                if (el.classList.contains('ai-processed') || !el.textContent.trim()) return;
                
                const isHeading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName);
                const text = el.innerText; 
                
                if (el.children.length > 0 && !['SPAN', 'STRONG', 'B', 'I'].includes(el.children[0].tagName)) return; 

                el.classList.add('ai-content', 'ai-processed');
                el.innerHTML = '';

                if (isHeading) {
                    const chars = text.split('');
                    chars.forEach((char, index) => {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'ai-char';
                        if (char === ' ') span.innerHTML = '&nbsp;';
                        span.style.setProperty('--ai-index', index);
                        el.appendChild(span);
                    });
                } else {
                    const words = text.split(/(\s+)/); 
                    let wordIndex = 0;
                    words.forEach((word) => {
                        if (word.trim().length === 0) {
                            el.appendChild(document.createTextNode(word));
                        } else {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.className = 'ai-word';
                            span.style.setProperty('--ai-index', wordIndex);
                            el.appendChild(span);
                            wordIndex++;
                        }
                    });
                }
            };

            const selectors = [
                'h1', 'h2', 'h3', 'p', 'li', 'span.ai-observe', 'label', 'a.ai-observe', 'button .ai-observe'
            ];
            
            document.querySelectorAll(selectors.join(',')).forEach(el => {
                if(el.offsetParent === null) return;
                processTextElement(el);
            });

            // Intersection Observer using VelvetSound logic for timing/classes
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ai-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.ai-content, .ai-observe').forEach(el => {
                observer.observe(el);
            });

            // --- Number Counter Animation ---
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseFloat(el.getAttribute('data-target'));
                        
                        // Prevent re-animation if needed, or leave to trigger once per session
                        if(el.classList.contains('animated')) return;
                        el.classList.add('animated');

                        // If target is 0, just show 0
                        if (target === 0) {
                            el.innerText = '0';
                            return;
                        }

                        const duration = 1500; // ms
                        const start = 0;
                        const startTime = performance.now();

                        const animate = (currentTime) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            
                            // Ease Out Quart for a smooth finish
                            const ease = 1 - Math.pow(1 - progress, 4);
                            
                            const current = Math.floor(start + (target - start) * ease);
                            el.innerText = current;

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                el.innerText = target;
                            }
                        };
                        requestAnimationFrame(animate);
                        observer.unobserve(el);
                    }
                });
            }, {
                threshold: 0.5,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.counter-item').forEach(el => {
                counterObserver.observe(el);
            });
        });

        // --- Navbar Scroll Logic ---
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                if (currentScrollY > lastScrollY) {
                    navbar.style.transform = 'translateY(-10px)';
                    navbar.style.opacity = '0.8';
                    navbar.classList.add('backdrop-blur-none'); 
                } else {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.opacity = '1';
                    navbar.classList.add('backdrop-blur-md');
                }
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.opacity = '1';
            }
            lastScrollY = currentScrollY;
        });

        // --- Parallax Effect ---
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrolled = window.scrollY;
                    document.querySelectorAll('.parallax-effect').forEach(el => {
                        const speed = el.getAttribute('data-parallax-speed') || 0.05;
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                             el.style.transform = `translateY(${scrolled * speed}px)`;
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });

        // --- Accordion Logic ---
        document.querySelectorAll('.accordion-btn').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                    content.style.maxHeight = '0px';
                    content.style.opacity = '0';
                    content.classList.remove('open');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.opacity = '1';
                    content.classList.add('open');
                }
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="krvLrHX3sj3cg8BHywDj"></div>

</div></div>

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
</div>

<div className="fixed top-0 w-full h-[100vh] pointer-events-none opacity-40 z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#331505_0%,_#000000_60%)]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.03\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="ai-observe text-xl font-semibold tracking-tight text-white ai-hover-target">MARKET<span className="text-orange-500">.AI</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#">Product</a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#">Solutions</a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#">Resources</a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="ai-observe hidden md:block text-sm font-medium hover:text-white text-neutral-400 transition-colors ai-hover-target" href="#">Sign In</a>
<a className="ai-observe bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all ai-hover-target" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="section-number top-32 right-6 md:right-12">01</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

<div className="lg:w-7/12 parallax-effect" data-parallax-speed="0.05">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 ai-observe">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-white/80 uppercase tracking-wide">AI Engine V2.0 Live</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-white ai-observe ai-hover-target">
                        Marketing Automation<br/>
                        Platform Built to<br/>
                        Save Your Time.
                    </h1>
<p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed ai-observe">
                        Streamline your marketing tasks, optimize workflows, and drive growth with our all-in-one automation solution designed for modern teams.
                    </p>

<div className="flex flex-col sm:flex-row gap-3 max-w-md opacity-0 animate-[animationIn_0.8s_1s_forwards] blur-sm filter" style={{animationFillMode: 'forwards'}}>
<input className="flex-1 bg-white text-neutral-900 placeholder:text-neutral-500 px-4 py-3.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-base" placeholder="Enter your email address" type="email"/>
<button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-base ai-hover-target">
<span className="ai-observe">Start Trial</span> <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="lg:w-4/12 flex flex-col gap-12 border-l border-neutral-800 pl-8 lg:pl-12 py-4 parallax-effect" data-parallax-speed="0.02">
<div className="space-y-6">
<div className="ai-observe">
<h3 className="text-orange-500 text-sm font-medium mb-2 uppercase tracking-wide">Strategy &amp; Research</h3>
<p className="text-neutral-400 text-base leading-relaxed">
                                Advanced analytics to track every click and conversion, giving you the insights to pivot fast.
                            </p>
</div>
<div className="ai-observe">
<h3 className="text-orange-500 text-sm font-medium mb-2 uppercase tracking-wide">Full Display</h3>
<p className="text-neutral-400 text-base leading-relaxed">
                                Visualize your data in real-time with our comprehensive dashboard tools.
                            </p>
</div>
</div>
<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 ai-observe animate-float">
<div className="flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-full border border-neutral-800 text-orange-500"><i className="w-5 h-5" data-lucide="flame"></i></div>
<div className="flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-full border border-neutral-800 text-blue-500"><i className="w-5 h-5" data-lucide="cloud"></i></div>
<div className="flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-full border border-neutral-800 text-yellow-500"><i className="w-5 h-5" data-lucide="database"></i></div>
<div className="flex items-center justify-center w-10 h-10 bg-neutral-900 rounded-full border border-neutral-800 text-green-500"><i className="w-5 h-5" data-lucide="boxes"></i></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950/30 relative border-t border-neutral-900/50 overflow-hidden">

<div className="section-number top-12 left-6 md:left-12">02</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-16 parallax-effect" data-parallax-speed="0.03">
<div>
<span className="ai-observe text-orange-500 font-medium text-sm tracking-widest uppercase mb-4 block">Features</span>
<h2 className="ai-observe ai-hover-target text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight">
                        Integrate and Manage
                        all your marketing efforts
                        with one platform.
                    </h2>
<p className="ai-observe text-lg text-neutral-400 leading-relaxed max-w-lg">
                        Unify your marketing stack. Connect ads, social, email, and analytics into a single source of truth. Stop switching tabs and start taking action with data-driven insights at your fingertips.
                    </p>
</div>
</div>
<div className="fade-up-block ai-observe relative w-full aspect-[16/9] lg:aspect-[21/9] bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl shadow-orange-900/10 group">
<div className="absolute inset-0 bg-neutral-900 p-6 flex flex-col">
<div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
<div className="flex gap-4">
<div className="h-8 w-24 bg-neutral-800 rounded-md animate-pulse"></div>
<div className="h-8 w-8 bg-neutral-800 rounded-md"></div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 bg-neutral-800 rounded-full"></div>
<div className="h-8 w-32 bg-orange-600/20 rounded-md"></div>
</div>
</div>
<div className="flex flex-1 gap-6">
<div className="w-16 lg:w-48 hidden md:flex flex-col gap-3 border-r border-neutral-800 pr-4">
<div className="h-8 w-full bg-neutral-800/50 rounded-md"></div>
<div className="h-8 w-full bg-neutral-800/50 rounded-md"></div>
<div className="h-8 w-full bg-neutral-800/50 rounded-md"></div>
<div className="h-8 w-full bg-orange-600/10 rounded-md border-l-2 border-orange-500"></div>
<div className="h-8 w-full bg-neutral-800/50 rounded-md"></div>
</div>
<div className="flex-1 flex flex-col gap-6">
<div className="grid grid-cols-3 gap-4">
<div className="h-24 bg-neutral-800/30 rounded-xl border border-neutral-800 p-4 hover:border-orange-500/30 transition-colors">
<div className="h-2 w-12 bg-orange-500 rounded-full mb-3"></div>
<div className="h-6 w-16 bg-neutral-700 rounded-md"></div>
</div>
<div className="h-24 bg-neutral-800/30 rounded-xl border border-neutral-800 p-4 hover:border-orange-500/30 transition-colors">
<div className="h-2 w-12 bg-neutral-600 rounded-full mb-3"></div>
<div className="h-6 w-16 bg-neutral-700 rounded-md"></div>
</div>
<div className="h-24 bg-neutral-800/30 rounded-xl border border-neutral-800 p-4 hover:border-orange-500/30 transition-colors">
<div className="h-2 w-12 bg-neutral-600 rounded-full mb-3"></div>
<div className="h-6 w-16 bg-neutral-700 rounded-md"></div>
</div>
</div>
<div className="flex-1 bg-neutral-800/20 rounded-xl border border-neutral-800 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 right-0 h-3/4 w-full" preserveaspectratio="none">
<path d="M0,100 C150,50 300,150 450,80 C600,10 750,100 900,60 L900,200 L0,200 Z" fill="rgba(234, 88, 12, 0.1)" stroke="rgba(234, 88, 12, 0.5)" strokeWidth="2"></path>
<path d="M0,120 C100,100 250,180 400,120 C600,50 800,150 1000,80 L1000,200 L0,200 Z" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="section-number top-24 right-6 md:right-12">03</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 parallax-effect" data-parallax-speed="0.04">
<span className="ai-observe text-orange-500 font-medium text-sm tracking-widest uppercase mb-4 block">Our Focus</span>
<h2 className="ai-observe ai-hover-target text-3xl lg:text-5xl font-medium tracking-tight mb-6">
                    Best Marketing Automation that automates the way you do.
                </h2>
<p className="ai-observe text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    We focus on the critical aspects of scaling your business. Our tools are built to handle the heavy lifting so you can focus on strategy.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 relative">
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800"></div>
<div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-neutral-800"></div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 lg:p-10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-4 right-6 text-[10rem] font-bold text-orange-900/10 leading-none select-none transition-colors group-hover:text-orange-600/10">1</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layout-template"></i>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:text-white transition-colors ai-hover-target">Automate Entire Sales Funnel</h3>
<p className="text-neutral-400 text-lg leading-relaxed">
                            Create automated journeys that guide prospects from awareness to conversion without manual intervention.
                        </p>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 lg:p-10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-4 right-6 text-[10rem] font-bold text-orange-900/10 leading-none select-none transition-colors group-hover:text-orange-600/10">2</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:text-white transition-colors ai-hover-target">Keep High Impact Practices</h3>
<p className="text-neutral-400 text-lg leading-relaxed">
                            Maintain best practices with built-in templates and record-keeping that ensures compliance and quality.
                        </p>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 lg:p-10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-4 right-6 text-[10rem] font-bold text-orange-900/10 leading-none select-none transition-colors group-hover:text-orange-600/10">3</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="share-2"></i>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:text-white transition-colors ai-hover-target">Repurpose Content with AI</h3>
<p className="text-neutral-400 text-lg leading-relaxed">
                            Automatically generate snippets, social posts, and summaries from your long-form content instantly.
                        </p>
</div>
</div>

<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 lg:p-10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-4 right-6 text-[10rem] font-bold text-orange-900/10 leading-none select-none transition-colors group-hover:text-orange-600/10">4</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:text-white transition-colors ai-hover-target">Real-Time Processing</h3>
<p className="text-neutral-400 text-lg leading-relaxed">
                            Get instant feedback on campaign performance with our low-latency data processing engine.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<span className="ai-observe text-orange-500 font-medium text-sm tracking-widest uppercase mb-4 block">Integration</span>
<h2 className="ai-observe ai-hover-target text-4xl lg:text-5xl font-medium tracking-tight mb-16">Marketing Automation Solutions</h2>
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="space-y-4">

<div className="border-b border-orange-500/30 pb-6 ai-observe">
<button className="flex items-center justify-between w-full text-left group">
<span className="text-xl font-medium text-orange-500">Real-Time Data Analysis</span>
</button>
<div className="accordion-content open h-auto opacity-100">
<p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                                Analyze market trends, user behavior, and campaign metrics as they happen. Make decisions based on the now, not yesterday.
                            </p>
</div>
</div>

<div className="border-b border-neutral-800 pb-6 pt-2 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group hover:text-white transition-colors">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors ai-hover-target">Custom Reports</span>
</button>
<div className="accordion-content">
<p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                                Generate bespoke reports tailored to your KPIs. Drag and drop widgets to see exactly what matters to your stakeholders.
                            </p>
</div>
</div>
<div className="border-b border-neutral-800 pb-6 pt-2 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group hover:text-white transition-colors">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors ai-hover-target">Data Modeling &amp; Algorithms</span>
</button>
<div className="accordion-content">
<p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                                Use advanced data models to predict future trends. Our proprietary algorithms sort through the noise to find signal.
                            </p>
</div>
</div>
<div className="border-b border-neutral-800 pb-6 pt-2 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group hover:text-white transition-colors">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors ai-hover-target">Marketing &amp; Campaign Analysis</span>
</button>
<div className="accordion-content">
<p className="mt-4 text-lg text-neutral-400 leading-relaxed">
                                Deep dive into campaign performance. Understand attribution, customer journey, and ROI at a granular level.
                            </p>
</div>
</div>
</div>
<div className="fade-up-block ai-observe relative h-[500px] w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex items-center justify-center animate-float-delayed">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl opacity-30"></div>
<div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-12 parallax-effect" data-parallax-speed="0.06">
<div className="w-64 h-64 relative">
<div className="absolute inset-0 bg-orange-500/20 blur-[60px] rounded-full animate-pulse"></div>
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" viewbox="0 0 200 200">
<path d="M20,20 L180,20 L100,180 Z" fill="none" stroke="url(#orange-grad)" strokeWidth="2"></path>
<defs>
<lineargradient id="orange-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<circle className="animate-ping" cx="50" cy="40" fill="#fff" r="2" style={{animationDuration: '2s'}}></circle>
<circle className="animate-ping" cx="150" cy="40" fill="#fff" r="2" style={{animationDuration: '3s'}}></circle>
<circle className="animate-pulse" cx="100" cy="100" fill="#f97316" r="3"></circle>
</svg>
</div>
<div className="text-center mt-8">
<p className="text-sm text-neutral-500 font-mono ai-observe">PROCESSING DATA...</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 bg-black relative overflow-hidden">

<div className="section-number top-12 left-6 md:left-12">04</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<span className="ai-observe text-orange-500 font-semibold text-xs tracking-widest uppercase mb-4 block">Available Today</span>
<h2 className="ai-observe ai-hover-target text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
                Perfect for Busy Business Owners
            </h2>
<p className="ai-observe text-neutral-400 mb-12 text-lg max-w-2xl mx-auto">
                No code, no complex setup. Just intuitive tools that integrate with your existing workflow instantly.
            </p>
<div className="fade-up-block ai-observe border border-neutral-800 bg-neutral-900/40 rounded-xl p-8 mb-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-neutral-800">
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tabular-nums">
<span className="counter-item" data-target="10">0</span><span className="text-orange-500">+</span>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Data Sources</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tabular-nums">
<span className="counter-item" data-target="4">0</span><span className="text-orange-500">x</span>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Faster Analysis</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tabular-nums">
<span className="counter-item" data-target="0">0</span>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Setup Fees</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tabular-nums">
<span className="counter-item" data-target="0">0</span>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Lines of Code</div>
</div>
</div>
</div>
<div className="ai-observe">
<button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all inline-flex items-center gap-2 ai-hover-target shadow-lg shadow-orange-500/20">
                    Start Building Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<span className="ai-observe text-orange-500 font-semibold text-xs tracking-widest uppercase mb-4 block">Easy Setup</span>
<h2 className="ai-observe ai-hover-target text-3xl md:text-5xl font-medium tracking-tight mb-16 max-w-2xl">
                Setup your AI-powered marketing
                Automation in 3 Steps.
            </h2>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="ai-observe">
<div className="flex items-center gap-6 mb-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-semibold">1</div>
<span className="text-white font-medium text-sm">Select your Tools</span>
</div>
<div className="w-8 h-px bg-neutral-800"></div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 font-medium">2</div>
<span className="text-neutral-400 text-sm">Connect the workflows</span>
</div>
<div className="w-8 h-px bg-neutral-800"></div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 font-medium">3</div>
<span className="text-neutral-400 text-sm">Launch campaigns</span>
</div>
</div>
<div className="space-y-6">
<span className="inline-block px-3 py-1 bg-orange-900/20 text-orange-500 text-xs font-semibold rounded uppercase tracking-wider">Step 01</span>
<h3 className="text-2xl font-medium text-white ai-hover-target">Connect Your Ecosystem</h3>
<p className="text-neutral-400 text-lg leading-relaxed">
                            Easily integrate with over 50+ marketing tools including CRM, Social Media platforms, and Analytics dashboards. Our one-click OAuth authentication makes setup a breeze without needing an engineering team.
                        </p>
<a className="inline-flex items-center text-orange-500 hover:text-orange-400 font-medium mt-2 ai-hover-target" href="#">
                            View all integrations <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="fade-up-block relative ai-observe">
<div className="aspect-video bg-neutral-900 rounded-2xl border border-neutral-800 relative overflow-hidden flex items-end justify-center group shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
<div className="relative z-10 flex gap-4 mb-0 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="w-24 h-32 bg-neutral-800 rounded-t-full border-t border-x border-neutral-700 flex items-center justify-center relative">
<div className="w-12 h-12 bg-neutral-700 rounded-full absolute -top-6 border border-neutral-600 flex items-center justify-center text-neutral-400">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
</div>
<div className="w-28 h-40 bg-orange-600 rounded-t-full border-t border-x border-orange-500 flex items-center justify-center relative shadow-[0_0_30px_rgba(234,88,12,0.3)] z-20 animate-float">
<div className="w-14 h-14 bg-orange-500 rounded-full absolute -top-7 border border-orange-400 flex items-center justify-center text-white">
<i className="w-8 h-8" data-lucide="smile"></i>
</div>
</div>
<div className="w-24 h-32 bg-neutral-800 rounded-t-full border-t border-x border-neutral-700 flex items-center justify-center relative">
<div className="w-12 h-12 bg-neutral-700 rounded-full absolute -top-6 border border-neutral-600 flex items-center justify-center text-neutral-400">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="ai-observe text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3 block">Features</span>
<h2 className="ai-observe ai-hover-target text-3xl lg:text-4xl font-medium text-white tracking-tight">Why Choose Market.AI forMarketing Automation?</h2>
</div>
<div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl">
<div className="w-10 h-10 bg-orange-900/20 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm ai-hover-target">Real-Time Analytics</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Track performance as it happens with zero latency dashboard updates.
                    </p>
</div>
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl" style={{animationDelay: '0.1s'}}>
<div className="w-10 h-10 bg-orange-900/20 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm ai-hover-target">Enterprise Security</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                        SOC2 compliant infrastructure keeping your data safe and encrypted.
                    </p>
</div>
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl" style={{animationDelay: '0.2s'}}>
<div className="w-10 h-10 bg-orange-900/20 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm ai-hover-target">AI Driven Insights</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Machine learning models that predict trends before they happen.
                    </p>
</div>
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl" style={{animationDelay: '0.3s'}}>
<div className="w-10 h-10 bg-orange-900/20 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm ai-hover-target">Team Collaboration</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Built for teams with granular permission controls and activity logs.
                    </p>
</div>
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl" style={{animationDelay: '0.4s'}}>
<div className="w-10 h-10 bg-orange-900/20 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="download"></i>
</div>
<h3 className="text-white font-medium mb-2 text-sm ai-hover-target">Easy Data Export</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Export your reports to PDF, CSV or Excel with a single click.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="ai-observe text-orange-500 font-semibold text-xs tracking-widest uppercase mb-4 block">FAQ</span>
<h2 className="ai-observe ai-hover-target text-4xl font-medium tracking-tight text-white mb-6">Frequently Asked Questions</h2>
<p className="ai-observe text-neutral-400">Can't find the answer you're looking for? Reach out to our customer support team.</p>
</div>
<div className="lg:col-span-8">
<div className="space-y-4">
<div className="fade-up-block border-b border-orange-500/30 pb-6 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left">
<span className="text-lg font-medium text-white ai-hover-target">How does the 14-day free trial work?</span>
<i className="text-orange-500 w-5 h-5" data-lucide="minus"></i>
</button>
<div className="accordion-content open" style={{maxHeight: '200px', opacity: '1'}}>
<p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                                    Signing up gives you full access to all features for 14 days. No credit card required. At the end of the trial, you can choose a plan that suits your needs or continue with our free tier.
                                </p>
</div>
</div>
<div className="fade-up-block border-b border-neutral-800 pb-6 pt-2 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group">
<span className="text-lg font-medium text-neutral-400 group-hover:text-white transition-colors ai-hover-target">Is my data secure?</span>
<i className="text-neutral-500 group-hover:text-white transition-colors w-5 h-5" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                                    Yes, we use bank-grade encryption and are SOC2 certified to ensure your data is always protected.
                                </p>
</div>
</div>
<div className="fade-up-block border-b border-neutral-800 pb-6 pt-2 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group">
<span className="text-lg font-medium text-neutral-400 group-hover:text-white transition-colors ai-hover-target">Can I change plans anytime?</span>
<i className="text-neutral-500 group-hover:text-white transition-colors w-5 h-5" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                                    Absolutely. You can upgrade or downgrade your plan at any time directly from your dashboard.
                                </p>
</div>
</div>
<div className="fade-up-block border-b border-neutral-800 pb-6 pt-2 ai-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group">
<span className="text-lg font-medium text-neutral-400 group-hover:text-white transition-colors ai-hover-target">Do you offer enterprise custom solutions?</span>
<i className="text-neutral-500 group-hover:text-white transition-colors w-5 h-5" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                                    Yes, for large teams we offer custom integrations, dedicated support, and SLA guarantees.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-black border-t border-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center parallax-effect" data-parallax-speed="0.03">
<div className="w-32 h-32 mx-auto mb-12 relative ai-observe animate-float">
<div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>
<div className="relative w-full h-full flex items-center justify-center">
<i className="w-24 h-24 text-orange-500 stroke-[1]" data-lucide="box"></i>
</div>
<div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-50 animate-ping"></div>
<div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-70 animate-bounce"></div>
</div>
<h2 className="ai-observe ai-hover-target text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 text-glow">
                The best platform for AIMarketing Automation
            </h2>
<p className="ai-observe text-neutral-400 text-lg mb-10">Start your journey today.</p>
<div className="ai-observe flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black hover:bg-neutral-200 px-8 py-3.5 rounded-lg font-semibold transition-all w-full sm:w-auto ai-hover-target shadow-xl">
                    Get Started
                </button>
<button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all w-full sm:w-auto flex items-center justify-center gap-2 ai-hover-target shadow-xl shadow-orange-500/20">
                    Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<footer className="bg-[#F97316] text-white pt-20 pb-10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 ai-observe">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl font-bold tracking-tight">MARKET.AI</span>
</div>
<p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs">
                        The world's most advanced marketing automation platform powered by artificial intelligence.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div className="ai-observe">
<h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
<ul className="space-y-4 text-sm text-white/80">
<li><a className="hover:text-white" href="#">Features</a></li>
<li><a className="hover:text-white" href="#">Integrations</a></li>
<li><a className="hover:text-white" href="#">Pricing</a></li>
<li><a className="hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div className="ai-observe">
<h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
<ul className="space-y-4 text-sm text-white/80">
<li><a className="hover:text-white" href="#">About Us</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-2 ai-observe">
<h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Subscribe</h4>
<p className="text-white/80 text-sm mb-4">Get the latest updates and resources.</p>
<div className="flex gap-2">
<input className="bg-white text-neutral-900 px-4 py-2.5 rounded-lg text-sm w-full focus:outline-none" placeholder="Enter email" type="email"/>
<button className="bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-900 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
<div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60 ai-observe">
<p>© 2024 Market.AI Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
