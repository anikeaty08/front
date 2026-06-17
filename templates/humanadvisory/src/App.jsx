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



        // Initialize Icons
        lucide.createIcons();

        // 1. Initialize Lenis (Smooth Scroll)
        const lenis = new Lenis({
            lerp: 0.1, // Smoothness intensity
            wheelMultiplier: 1, 
            smooth: true,
            direction: 'vertical',
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. Clock
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            document.getElementById('clock').textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // 3. Text Reveal Logic (Philosophy Section)
        const textElement = document.getElementById('scrolling-text');
        const diagram = document.querySelector('.reveal-diagram');
        
        if (textElement) {
            // Split text into words/spans
            const textContent = textElement.innerText;
            const words = textContent.split(' ');
            textElement.innerHTML = words.map(word => `<span class="reveal-word">${word} </span>`).join('');
            const spans = textElement.querySelectorAll('.reveal-word');

            // Using Lenis scroll event for smoother updates
            lenis.on('scroll', () => {
                const windowHeight = window.innerHeight;
                const centerPoint = windowHeight / 2;
                
                // Text Highlight Logic
                spans.forEach(span => {
                    const rect = span.getBoundingClientRect();
                    const distFromCenter = Math.abs(rect.top + (rect.height / 2) - centerPoint);
                    
                    // Logic: Closer to center = higher opacity
                    // Range: 250px around center
                    let opacity = 1 - (distFromCenter / 250); 
                    opacity = Math.max(0.15, Math.min(1, opacity)); // Clamp between 0.15 and 1
                    
                    span.style.opacity = opacity;
                    
                    if (opacity > 0.8) {
                        span.classList.add('active');
                    } else {
                        span.classList.remove('active');
                    }
                });

                // Diagram Reveal Logic
                if (diagram) {
                    const diagRect = diagram.getBoundingClientRect();
                    if (diagRect.top < windowHeight * 0.85) {
                        diagram.style.opacity = '1';
                        diagram.style.transform = 'translateY(0)';
                    }
                }
            });
        }

        // 4. Expertise Section Scroll Logic
        const expertiseSection = document.getElementById('expertise');
        const headings = {
            design: document.getElementById('head-design'),
            dev: document.getElementById('head-dev'),
            marketing: document.getElementById('head-marketing')
        };
        const tags = document.querySelectorAll('.process-tag');

        function updateExpertise(scrollPos) {
            if (!expertiseSection) return;
            
            const rect = expertiseSection.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate progress: 0 when top of section hits top of screen, 1 when bottom hits bottom
            // Since it's sticky, we map the scroll within the container
            // rect.top is negative as we scroll down
            
            // Adjust start point so it triggers exactly when sticky starts
            const startOffset = 0; 
            const endOffset = sectionHeight - windowHeight;
            
            let progress = -rect.top / endOffset;
            progress = Math.max(0, Math.min(1, progress));

            let activeCategory = 'design';
            if (progress > 0.33) activeCategory = 'dev';
            if (progress > 0.66) activeCategory = 'marketing';

            // Update Headings
            Object.keys(headings).forEach(key => {
                const el = headings[key];
                if (key === activeCategory) {
                    el.classList.add('active');
                    el.style.opacity = '1';
                } else {
                    el.classList.remove('active');
                    el.style.opacity = '0.2';
                }
            });

            // Update Tags
            tags.forEach(tag => {
                const tagCat = tag.getAttribute('data-cat');
                if (tagCat === activeCategory) {
                    tag.classList.add('active');
                } else {
                    tag.classList.remove('active');
                }
            });
        }

        // Attach to Lenis scroll
        lenis.on('scroll', (e) => {
            updateExpertise();
        });

        // 5. Sticky Nav Logic
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('main-nav');
        
        lenis.on('scroll', ({ scroll }) => {
             if (scroll > 50) {
                if (scroll > lastScrollY) {
                    navbar.classList.add('nav-hidden');
                    navbar.classList.remove('scrolled-up'); 
                } else {
                    navbar.classList.remove('nav-hidden');
                    navbar.classList.add('scrolled-up'); 
                }
            } else {
                navbar.classList.remove('nav-hidden');
                navbar.classList.remove('scrolled-up');
            }
            lastScrollY = scroll;
        });

        // Helper to scroll to specific stage in expertise (optional click handler)
        window.scrollToStage = (index) => {
            const section = document.getElementById('expertise');
            const rect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.top;
            const step = (section.offsetHeight - window.innerHeight) / 3;
            const target = scrollTop + (step * index) + 50; // +50 buffer
            
            lenis.scrollTo(target, { duration: 1.5 });
        };

    
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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opacity-80"></div>
<div className="absolute top-0 left-0 w-full h-full opacity-40">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10s]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#00FA9A]/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>
<div className="noise-overlay absolute inset-0 z-20 mix-blend-overlay opacity-30"></div>
</div>

<nav className="fixed z-50 flex md:px-10 pt-8 pr-6 pb-8 pl-6 top-0 right-0 left-0 items-start justify-between" id="main-nav">
<div className="group cursor-pointer pt-1">
<img alt="Company Logo" className="md:h-10 hover:opacity-100 transition-opacity opacity-90 w-auto h-8 object-contain invert brightness-0" src="https://humanadvisory.com/wp-content/uploads/2025/01/HA-NEw-1.png"/>
</div>
<div className="flex flex-col gap-5 text-right items-end">
<div className="text-[10px] md:text-xs text-white tracking-wider font-mono opacity-60 hover:opacity-100 transition-opacity">[UK] <span id="clock">00:00</span></div>
<div className="flex flex-col gap-0.5 items-end">
<a className="text-[10px] font-medium tracking-[0.1em] text-neutral-400 hover:text-[#00FA9A] transition-colors uppercase" href="#about">Philosophy</a>
<a className="text-[10px] font-medium tracking-[0.1em] text-neutral-400 hover:text-[#00FA9A] transition-colors uppercase" href="#expertise">Expertise</a>
<a className="text-[10px] font-medium tracking-[0.1em] text-neutral-400 hover:text-[#00FA9A] transition-colors uppercase" href="#projects">Works</a>
<a className="text-[10px] font-medium tracking-[0.1em] text-neutral-400 hover:text-[#00FA9A] transition-colors uppercase" href="#contact">Contact</a>
</div>
</div>
</nav>

<main className="flex flex-col min-h-screen z-10 pt-40 pr-4 pb-32 pl-3 relative items-center justify-center">
<div className="animate-reveal delay-100 text-center mb-10 space-y-1">
<h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight text-white">
<span className="font-playfair italic font-normal text-neutral-400 pr-4">Refreshing</span>
<span className="font-medium tracking-tighter">Digital</span>
</h1>
<h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight font-medium text-white">
                experiences with creative
            </h1>
<h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight font-medium text-white">
                design for every brand
            </h1>
</div>
<p className="max-w-2xl text-center text-neutral-400 text-sm md:text-lg font-light leading-relaxed mb-12 animate-reveal delay-200">
            Websites, apps, e-commerce, graphic identities, graphic design, and advertising; crafted for a distinct digital presence.
        </p>
<div className="flex flex-col animate-reveal delay-300 sm:flex-row gap-x-6 gap-y-5 items-center">
<button className="px-8 py-3.5 rounded-full bg-neutral-200 text-[#050505] font-playfair italic text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)]" onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'})">
                Discover our works
            </button>
<button className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-neutral-200 text-sm font-medium hover:border-[#00FA9A]/50 hover:bg-[#00FA9A]/10 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(0,250,154,0.3)] transition-all duration-300" onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})">
                Book a call
            </button>
</div>
<div className="animate-reveal delay-300 text-center w-full pt-3 absolute bottom-8">
<p className="text-[10px] uppercase font-medium text-neutral-600 tracking-[0.3em]">trusted by 50+ clients globally</p>
</div>
</main>

<section className="relative z-10 py-32 border-t border-white/5 bg-[#050505] min-h-[90vh] flex flex-col items-center justify-center" id="about">
<div className="max-w-5xl mx-auto px-6 text-center md:text-left w-full">
<span className="inline-block px-3 py-1 mb-12 text-[10px] tracking-widest text-[#00FA9A] border border-[#00FA9A]/20 rounded-full bg-[#00FA9A]/5 uppercase">The Philosophy</span>

<p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.4] text-neutral-500 mb-24 transition-colors duration-300" id="scrolling-text">
                We founded Human Advisory on a simple principle: digital experiences should bridge the gap between technology and humanity. We strip away the noise to focus on what matters—genuine advice and connection.
            </p>

<div className="reveal-diagram transition-all duration-1000 opacity-0 transform translate-y-10 w-full max-w-3xl mx-auto">
<div className="flex flex-col w-full items-center">
<div className="z-10 bg-neutral-900/80 border-white/10 border rounded-xl px-10 py-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] backdrop-blur-md">
<h3 className="md:text-3xl text-2xl italic text-white tracking-wide font-playfair">Human Advisory</h3>
</div>
<div className="h-16 w-px bg-gradient-to-b from-white/20 to-white/10"></div>
<div className="w-[60%] h-px bg-white/10 relative">
<div className="absolute left-0 top-0 h-8 w-px bg-white/10"></div>
<div className="absolute right-0 top-0 h-8 w-px bg-white/10"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-12 w-full mt-8">
<div className="flex flex-col items-center group">
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 bg-[#050505] px-2 relative z-10 -mt-2">Core</span>
<div className="text-xl md:text-2xl font-medium text-white/90 mt-4">Human</div>
<div className="h-12 w-px border-l border-dashed border-white/20 my-4"></div>
<div className="px-6 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 flex items-center gap-3 hover:border-[#00FA9A]/40 hover:bg-[#00FA9A]/5 transition-all duration-500">
<i className="w-4 h-4 text-[#00FA9A]" data-lucide="users"></i>
<span className="text-sm font-medium text-white">Connection</span>
</div>
</div>
<div className="flex flex-col items-center group">
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 bg-[#050505] px-2 relative z-10 -mt-2">Method</span>
<div className="text-xl md:text-2xl font-medium text-white/90 mt-4">Advisory</div>
<div className="h-12 w-px border-l border-dashed border-white/20 my-4"></div>
<div className="px-6 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 flex items-center gap-3 hover:border-[#00FA9A]/40 hover:bg-[#00FA9A]/5 transition-all duration-500">
<i className="w-4 h-4 text-[#00FA9A]" data-lucide="lightbulb"></i>
<span className="text-sm font-medium text-white">Advice</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 overflow-hidden border-white/5 border-t pt-24 pb-24 relative bg-[#050505]" id="projects">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end">
<div>
<p className="text-[10px] text-[#00FA9A] uppercase tracking-[0.2em] font-medium mb-2">Portfolio</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Selected Works</h2>
</div>
<button className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 hidden md:block">View All Projects</button>
</div>
<div className="relative w-full flex overflow-hidden mb-8 group">
<div className="flex flex-shrink-0 gap-8 min-w-full animate-marquee pr-8">

<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Roshni</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Branding / Web</p>
</div>
</div>

<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Mynte®</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Identity</p>
</div>
</div>

<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Apex</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Development</p>
</div>
</div>
</div>

<div aria-hidden="true" className="flex flex-shrink-0 gap-8 min-w-full animate-marquee pr-8">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Roshni</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Branding / Web</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Mynte®</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Identity</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Apex</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Development</p>
</div>
</div>
</div>
</div>

<div className="relative w-full flex overflow-hidden group">
<div className="flex flex-shrink-0 gap-8 min-w-full animate-marquee-reverse pr-8">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Helix</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Product</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Echo</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Audio Visual</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Vortex</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Web3</p>
</div>
</div>
</div>
<div aria-hidden="true" className="flex flex-shrink-0 gap-8 min-w-full animate-marquee-reverse pr-8">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Helix</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Product</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Echo</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Audio Visual</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100" src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Vortex</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Web3</p>
</div>
</div>
</div>
</div>
</section>


<section className="relative z-10 w-full min-h-[300vh] bg-[#050505]" id="expertise">

<div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t border-white/5">
<div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-4 flex flex-col gap-8">
<p className="text-[10px] font-medium tracking-[0.2em] text-[#00FA9A] uppercase mb-4">Our Expertise</p>
<div className="process-heading active cursor-pointer" id="head-design" onclick="scrollToStage(0)">
<h2 className="font-playfair italic text-5xl lg:text-7xl text-white/40 font-medium hover:text-white transition-colors">Design</h2>
</div>
<div className="process-heading cursor-pointer" id="head-dev" onclick="scrollToStage(1)">
<h2 className="font-playfair italic text-5xl lg:text-7xl text-white/40 font-medium hover:text-white transition-colors">Develop</h2>
</div>
<div className="process-heading cursor-pointer" id="head-marketing" onclick="scrollToStage(2)">
<h2 className="font-playfair italic text-5xl lg:text-7xl text-white/40 font-medium hover:text-white transition-colors">Growth</h2>
</div>
</div>

<div className="lg:col-span-8 w-full pl-0 lg:pl-20">
<div className="flex flex-wrap gap-4 lg:justify-start w-full content-center">

<div className="process-tag px-6 py-3 rounded-full border text-sm active" data-cat="design">Brand Identity</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm active" data-cat="design">UI/UX Systems</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm active" data-cat="design">Art Direction</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm active" data-cat="design">Motion Design</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm active" data-cat="design">Design Systems</div>

<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="dev">React / Next.js</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="dev">Mobile Apps</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="dev">WebGL / 3D</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="dev">Headless CMS</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="dev">E-commerce</div>

<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="marketing">SEO / SEM</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="marketing">Social Strategy</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="marketing">Content Creation</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm" data-cat="marketing">Data Analytics</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] z-10 border-white/5 border-t pt-32 pb-32 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Transparent investment</h2>
<p className="text-neutral-400 mb-8 font-light">Choose the engagement that fits your ambition.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col gap-6 group hover:-translate-y-2">
<div>
<h3 className="font-playfair italic text-2xl text-white mb-2">Essential</h3>
<p className="text-neutral-500 text-sm h-10">Foundational design for emerging brands.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$3,000</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">Get Started</button>
<div className="space-y-4 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Brand Identity
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Landing Page
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Basic Assets
                        </div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#00FA9A]/30 shadow-[0_0_40px_-15px_rgba(0,250,154,0.15)] relative flex flex-col gap-6 transform md:-translate-y-4">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="bg-[#00FA9A] text-black text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">Recommended</span>
</div>
<div>
<h3 className="font-playfair italic text-2xl text-white mb-2">Growth</h3>
<p className="text-neutral-500 text-sm h-10">Complete digital transformation.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$6,500</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<button className="w-full py-3 rounded-lg bg-[#00FA9A] text-black text-sm font-semibold hover:bg-[#00e08b] transition-colors shadow-lg shadow-[#00FA9A]/20">Get Started</button>
<div className="space-y-4 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-[#00FA9A]" data-lucide="check"></i>
                            Full Web Development
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-[#00FA9A]" data-lucide="check"></i>
                            Advanced Animations
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-[#00FA9A]" data-lucide="check"></i>
                            SEO &amp; Analytics
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-[#00FA9A]" data-lucide="check"></i>
                            Priority Support
                        </div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col gap-6 group hover:-translate-y-2">
<div>
<h3 className="font-playfair italic text-2xl text-white mb-2">Partner</h3>
<p className="text-neutral-500 text-sm h-10">Dedicated team extension.</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">Custom</span>
</div>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">Contact Us</button>
<div className="space-y-4 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Dedicated Project Manager
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Full-Stack Team
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            24/7 SLA
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 py-24 overflow-hidden border-t border-white/10" id="contact">
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-4xl md:text-5xl font-playfair font-normal text-white mb-6 tracking-tight">Ready to elevate your brand?</h2>
<p className="text-neutral-400 text-sm max-w-md mb-10 leading-relaxed font-light">
                    Schedule a free consultation to discuss your vision and how we can bring it to life.
                </p>
<button className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] flex items-center gap-2 group">
                    Book a Strategy Call
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/5 pt-16">
<div className="col-span-2 md:col-span-1 flex flex-col justify-between h-full">
<img alt="Brand Logo" className="opacity-80 w-auto h-6 object-contain invert brightness-0 mb-6" src="https://humanadvisory.com/wp-content/uploads/2025/01/HA-NEw-1.png"/>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Services</h4>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Design</a>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Development</a>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Strategy</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Company</h4>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">About</a>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Careers</a>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white text-sm">Legal</h4>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-500 hover:text-[#00FA9A] transition-colors" href="#">Terms</a>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 text-xs text-neutral-600 flex justify-between items-center">
<span>© 2025 Human Advisory.</span>
<span>London, UK</span>
</div>
</div>
</footer>


    </>
  );
}
