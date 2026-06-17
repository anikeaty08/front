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



        lucide.createIcons();

        // 1. Smart Sticky Header Logic (Slide up on scroll down, Slide down on scroll up)
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('main-nav');

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Only trigger after scrolling a bit to avoid jitter at top
            if (currentScrollY > 50) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling DOWN: Hide Header
                    navbar.classList.add('nav-hidden');
                    navbar.classList.remove('scrolled-up'); // Remove background style while hidden if preferred, or keep it
                } else {
                    // Scrolling UP: Show Header
                    navbar.classList.remove('nav-hidden');
                    navbar.classList.add('scrolled-up'); // Add background styling
                }
            } else {
                // At top
                navbar.classList.remove('nav-hidden');
                navbar.classList.remove('scrolled-up');
            }
            lastScrollY = currentScrollY;
        });


        // 2. Scroll Text Highlight Logic & Diagram Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const textElement = document.getElementById('scrolling-text');
            const diagram = document.querySelector('.reveal-diagram');
            
            if (textElement) {
                const textContent = textElement.innerText;
                const words = textContent.split(' ');
                textElement.innerHTML = words.map(word => `<span>${word} </span>`).join('');
                const spans = textElement.querySelectorAll('span');

                const updateOpacity = () => {
                    const windowHeight = window.innerHeight;
                    const centerPoint = windowHeight / 2;
                    
                    // Text Highlight
                    spans.forEach(span => {
                        const rect = span.getBoundingClientRect();
                        const spanCenter = rect.top + (rect.height / 2);
                        const distanceFromCenter = Math.abs(spanCenter - centerPoint);
                        let opacity = 1 - (distanceFromCenter / 300);
                        opacity = Math.max(0.2, Math.min(1, opacity));
                        span.style.opacity = opacity;
                        if(opacity > 0.8) span.classList.add('active');
                        else span.classList.remove('active');
                    });
                    
                    // Diagram Reveal
                    if(diagram) {
                        const diagRect = diagram.getBoundingClientRect();
                        if(diagRect.top < windowHeight * 0.8) {
                            diagram.style.opacity = '1';
                            diagram.style.transform = 'translateY(0)';
                        }
                    }
                };

                window.addEventListener('scroll', updateOpacity);
                window.addEventListener('resize', updateOpacity);
                updateOpacity(); 
            }
        });

        // 3. Scroll Animation Logic for Expertise Section
        const processSection = document.getElementById('expertise');
        const headings = {
            video: document.getElementById('head-video'),
            design: document.getElementById('head-design'),
            marketing: document.getElementById('head-marketing')
        };
        const tags = document.querySelectorAll('.process-tag');

        function updateProcessState() {
            if (!processSection || window.innerWidth < 1024) return;
            if (!headings.video) return;

            const rect = processSection.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            const scrollDistance = -rect.top;
            const totalDistance = rect.height - viewHeight;
            let progress = scrollDistance / totalDistance;
            progress = Math.max(0, Math.min(1, progress));

            let activeCategory = '';
            if (progress < 0.33) activeCategory = 'video';
            else if (progress < 0.66) activeCategory = 'design';
            else activeCategory = 'marketing';

            Object.keys(headings).forEach(key => {
                if (key === activeCategory) headings[key].classList.add('active');
                else headings[key].classList.remove('active');
            });

            tags.forEach(tag => {
                const tagCat = tag.getAttribute('data-cat');
                if (tagCat === activeCategory) tag.classList.add('active');
                else tag.classList.remove('active');
            });
        }

        window.addEventListener('scroll', updateProcessState);
        window.addEventListener('resize', updateProcessState);
        updateProcessState();
    
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="noise-overlay absolute inset-0 z-20 mix-blend-overlay"></div>
<div className="absolute -top-[10%] -left-[10%] w-[140%] h-[80%] bg-gradient-to-r from-blue-900 via-indigo-950 to-[#050505] blur-[100px] rounded-[100%] rotate-12 opacity-80 z-0" style={{}}></div>
<div className="blur-[150px] z-1 bg-white opacity-5 w-[80%] h-[40%] absolute top-[10%] left-[10%]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#3B82F6]/10 blur-[150px] rounded-full z-0"></div>
</div>

<nav className="fixed flex md:px-10 transition-all duration-300 z-50 pt-8 pr-6 pb-8 pl-6 top-0 right-0 left-0 items-start justify-between" id="main-nav">

<div className="group cursor-pointer pt-1">
<img alt="Company Logo" className="md:h-10 hover:opacity-100 transition-opacity opacity-90 w-auto h-8 object-contain invert brightness-0" src="https://humanadvisory.com/wp-content/uploads/2025/01/HA-NEw.png"/>
</div>

<div className="flex flex-col text-right gap-x-5 gap-y-5 items-end">


<div className="flex flex-col gap-0.5 items-end">
<a className="text-[10px] hover:text-white transition-colors uppercase font-medium text-blue-300 tracking-[0.1em]" href="#expertise">Expertise</a>
<a className="text-[10px] font-medium tracking-[0.1em] text-blue-300 hover:text-white transition-colors uppercase" href="#about" style={{}}>Philosophy</a>
<a className="text-[10px] font-medium tracking-[0.1em] text-blue-300 hover:text-white transition-colors uppercase" href="#projects" style={{}}>Works</a>
<a className="text-[10px] font-medium tracking-[0.1em] text-blue-300 hover:text-white transition-colors uppercase" href="#footer" style={{}}>Contact</a>
</div>
</div>
</nav>

<main className="flex flex-col min-h-[100vh] z-10 pt-40 pr-4 pb-32 pl-3 relative items-center justify-center">
<div className="animate-reveal delay-100 text-center mb-10 space-y-2">
<h1 className="md:text-7xl lg:text-[90px] leading-[0.95] text-5xl font-medium text-white tracking-tight">
                A era da
                <span className="font-playfair italic font-normal text-blue-400" style={{}}>performance</span>
</h1>
<h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[0.95] tracking-tight font-medium text-white" style={{}}>
                exige artesãos       
                <span className="font-playfair italic font-normal text-blue-400" style={{}}>atenção</span>
</h1>
</div>
<p className="md:text-lg leading-relaxed animate-reveal delay-200 text-sm font-light text-blue-300/80 text-center max-w-2xl mb-12">Transformamos criatividade bruta em ativos visuais de alta performance que convertem espectadores em seguidores fiéis.</p>
<div className="flex flex-col animate-reveal delay-300 sm:flex-row gap-x-5 gap-y-5 items-center">
<button className="hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-lg italic text-white font-playfair bg-blue-500 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_35px_-10px_rgba(59,130,246,0.6)]">Nossos trabalhos</button>
<button className="hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm font-medium text-blue-200 bg-white/5 border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm" onclick="window.location.href='https://wa.me/5518997238240?text=Ol%C3%A1!%20Quero%20saber%20como%20o%20Ateli%C3%AA%20pode%20criar%20um%20projeto%20de%20Performance%20Visual%20para%20minha%20marca.'" role="button">Agendar chamada</button>
</div>
</main>

<section className="z-10 overflow-hidden borborder-t pt-24 pb-24 relative" id="projects">
<div className="md:px-12 flex mb-12 pr-6 pl-6 items-end justify-between">
<div className="">
<p className="text-[10px] uppercase font-medium text-blue-500 tracking-[0.2em] mb-2" style={{}}>Portfólio</p>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight" style={{}}>Nossos Trabalhos</h2>
</div>
</div>

<div className="relative w-full flex overflow-hidden mb-8 group">

<div className="marquee-track group-hover:[animation-play-state:paused] px-3">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Roshni</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Branding / Web</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Mynte®</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Identity</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Apex</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Development</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Lumina</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Interface</p>
</div>
</div>
</div>

<div aria-hidden="true" className="marquee-track group-hover:[animation-play-state:paused] px-3">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Roshni</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Branding / Web</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Mynte®</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Identity</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Apex</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Development</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Lumina</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Interface</p>
</div>
</div>
</div>
</div>

<div className="relative w-full flex overflow-hidden group">

<div className="marquee-track-reverse group-hover:[animation-play-state:paused] px-3">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 5" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2576&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Helix</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Product</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 6" className="transition-transform duration-700 group-hover/card:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Echo</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Audio Visual</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 6" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Vortex</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Web3</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 8" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Obsidian</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Dark Mode</p>
</div>
</div>
</div>

<div aria-hidden="true" className="marquee-track-reverse group-hover:[animation-play-state:paused] px-3">
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 5" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=2576&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Helix</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Product</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 6" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Echo</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Audio Visual</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 6" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Vortex</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Web3</p>
</div>
</div>
<div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card">
<img alt="Project 8" className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" style={{}}></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold tracking-tighter uppercase mb-1">Obsidian</h3>
<p className="text-xs text-blue-300 uppercase tracking-widest" style={{}}>Dark Mode</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-t border-white/5 bg-[#050505] min-h-[90vh] flex flex-col items-center justify-center" id="about" style={{}}>
<div className="md:text-left text-center w-full max-w-5xl mr-auto ml-auto pr-6 pl-6">
<span className="inline-block text-[10px] uppercase text-blue-400 tracking-widest bg-[#3B82F6]/5 border-[#3B82F6]/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3">Nossa Filosofia</span>
<p className="reveal-text md:text-5xl lg:text-6xl leading-[1.3] text-3xl font-medium text-blue-400/80 mb-20" id="scrolling-text"><span style={{opacity: '0.2'}}>A </span><span style={{opacity: '0.2'}}>atenção </span><span style={{opacity: '0.2'}}>é </span><span style={{opacity: '0.2'}}>o </span><span style={{opacity: '0.2'}}>recurso </span><span style={{opacity: '0.2'}}>mais </span><span style={{opacity: '0.2'}}>escasso </span><span style={{opacity: '0.2'}}>do </span><span style={{opacity: '0.2'}}>século. </span><span style={{opacity: '0.2'}}>Por </span><span style={{opacity: '0.2'}}>isso, </span><span style={{opacity: '0.2'}}>tratamos </span><span style={{opacity: '0.2'}}>cada </span><span style={{opacity: '0.2'}}>pixel </span><span style={{opacity: '0.2'}}>e </span><span style={{opacity: '0.2'}}>cada </span><span style={{opacity: '0.2'}}>frame </span><span style={{opacity: '0.2'}}>com </span><span style={{opacity: '0.2'}}>a </span><span style={{opacity: '0.2'}}>reverência </span><span style={{opacity: '0.2'}}>de </span><span style={{opacity: '0.2'}}>quem </span><span style={{opacity: '0.2'}}>esculpe. </span><span style={{opacity: '0.2'}}>Não </span><span style={{opacity: '0.2'}}>somos </span><span style={{opacity: '0.2'}}>uma </span><span style={{opacity: '0.2'}}>fábrica </span><span style={{opacity: '0.2'}}>de </span><span style={{opacity: '0.2'}}>posts. </span><span style={{opacity: '0.2'}}>Somos </span><span style={{opacity: '0.2'}}>um </span><span style={{opacity: '0.2'}}>ateliê </span><span style={{opacity: '0.2'}}>de </span><span style={{opacity: '0.2'}}>performance. </span><span style={{opacity: '0.2'}}>Marketing </span><span style={{opacity: '0.2'}}>sem </span><span style={{opacity: '0.2'}}>alma </span><span style={{opacity: '0.2'}}>é </span><span style={{opacity: '0.2'}}>apenas </span><span style={{opacity: '0.2'}}>poluição </span><span style={{opacity: '0.2'}}>visual, </span><span style={{opacity: '0.2'}}>e </span><span style={{opacity: '0.2'}}>a </span><span style={{opacity: '0.2'}}>arte </span><span style={{opacity: '0.2'}}>sem </span><span style={{opacity: '0.2'}}>estratégia </span><span style={{opacity: '0.2'}}>é </span><span style={{opacity: '0.2'}}>apenas </span><span style={{opacity: '0.2'}}>decoração. </span><span style={{opacity: '0.2'}}>Trabalhamos </span><span style={{opacity: '0.2'}}>para </span><span style={{opacity: '0.2'}}>que </span><span style={{opacity: '0.2'}}>as </span><span style={{opacity: '0.2'}}>marcas </span><span style={{opacity: '0.2'}}>não </span><span style={{opacity: '0.2'}}>sejam </span><span style={{opacity: '0.2'}}>apenas </span><span style={{opacity: '0.2'}}>vistas, </span><span style={{opacity: '0.2'}}>mas </span><span style={{opacity: '0.2'}}>lembradas. </span></p>

<div className="reveal-diagram transition-opacity duration-1000 opacity-0 w-full max-w-3xl mr-auto mb-20 ml-auto gap-x-8 gap-y-8" style={{opacity: '1', transform: 'translateY(0px)'}}>


</div>
</div>
</section>

<div className="relative z-10 w-full lg:h-[300vh] min-h-screen" id="expertise">

<div className="lg:hidden px-6 py-24 border-t border-white/5" style={{}}>
<p className="text-white text-sm uppercase tracking-widest mb-16" style={{}}>Our Process and Expertise</p>

<div className="mb-14">
<h2 className="font-playfair italic text-3xl text-white font-normal mb-6" style={{}}>Video</h2>
<div className="flex flex-wrap gap-3">
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Motion Graphics</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Video Editing</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>3D Animation</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Post-Production</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Color Grading</span>
</div>
</div>

<div className="mb-14">
<h2 className="font-playfair italic text-3xl text-white font-normal mb-6" style={{}}>Design</h2>
<div className="flex flex-wrap gap-3">
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Logo &amp; Identity</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Branding</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Wireframes</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>UI/UX Design</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Art Direction</span>
</div>
</div>

<div className="mb-8">
<h2 className="font-playfair italic text-3xl text-white font-normal mb-6" style={{}}>Marketing</h2>
<div className="flex flex-wrap gap-3">
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Analytics</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Strategy</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Performance</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>SEO</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Content Creation</span>
<span className="px-5 py-2.5 rounded-full bg-[#181818] border border-white/20 text-white text-sm" style={{}}>Ad Campaigns</span>
</div>
</div>
</div>

<div className="hidden lg:flex sticky overflow-hidden bg-[#050505]/80 w-full h-screen border-white/5 border-t top-0 backdrop-blur-xl items-center justify-center">
<div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
<p className="uppercase text-xs font-medium text-blue-500 tracking-[0.2em] mb-4" style={{}}>nossa Expertise</p>
<div className="process-heading group cursor-pointer" id="head-video">
<h2 className="font-playfair italic text-4xl lg:text-6xl text-white font-medium" style={{}}>Video</h2>
</div>
<div className="process-heading group cursor-pointer" id="head-design">
<h2 className="lg:text-6xl text-4xl font-medium italic text-white font-playfair" style={{}}>Design</h2>
</div>
<div className="process-heading group cursor-pointer" id="head-marketing">
<h2 className="font-playfair italic text-4xl lg:text-6xl text-white font-medium" style={{}}>Marketing</h2>
</div>
</div>

<div className="lg:col-span-8 w-full">
<div className="flex flex-wrap gap-3 lg:justify-end w-full content-center">

<div className="process-tag transition-all duration-500 text-sm border rounded-full pt-3 pr-6 pb-3 pl-6" data-cat="video">Motion Graphics</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="video">Video Editing</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="video">3D Animation</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="video">Post-Production</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="video">Color Grading</div>

<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Branding</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">UI/UX Design</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Web Design</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Logo &amp; Identity</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="design">Art Direction</div>

<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">SEO</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Content Creation</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Analytics</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Ad Campaigns</div>
<div className="process-tag px-6 py-3 rounded-full border text-sm transition-all duration-500" data-cat="marketing">Strategy</div>
</div>
</div>
</div>
</div>
</div>


<footer className="relative z-20 py-24 overflow-hidden" id="footer">

<div className="absolute inset-0 z-0 bg-black" style={{}}>
<div className="absolute w-[150%] h-[150%] -top-[40%] -right-[30%] bg-[radial-gradient(circle_farthest-corner_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-[#050505] to-black blur-[100px] opacity-60 pointer-events-none" style={{}}></div>
<div className="absolute w-[80%] h-[80%] top-[10%] right-[0%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent blur-[80px] rotate-45 pointer-events-none" style={{}}></div>
<div className="opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0 brightness-100"></div>
</div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col text-center mb-24 items-center">
<h2 className="text-4xl md:text-5xl font-playfair font-normal text-white mb-4 tracking-tight" style={{}}>Ready to transform your brand?</h2>
<p className="leading-relaxed text-sm text-blue-200/60 max-w-md mb-8">
                    Schedule a free consultation to discuss your project needs and how we can help elevate your digital presence.
                </p>
<button className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-blue-100 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] flex items-center gap-2" style={{}}>
                    Book a Strategy Call
                    <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>


<div className="text-xs text-blue-500/60 text-center border-white/5 border-t mt-16 pt-8">© 2025 Kerim. Todos os direitos reservados.</div>
</div>
</footer>


    </>
  );
}
