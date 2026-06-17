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

        // 1. Text Animation: Letter by Letter slide down
        const heroTitle = document.getElementById('hero-title');
        
        function splitText(element) {
            const originalContent = element.innerHTML;
            const lines = originalContent.split('<br>');
            let newHTML = '';
            lines.forEach((line, lineIndex) => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = line;
                const processNode = (node) => {
                    if (node.nodeType === 3) {
                        const chars = node.nodeValue.split('');
                        return chars.map((char, i) => {
                            if(char === ' ') return ' ';
                            const delay = (lineIndex * 200) + (i * 30) + 'ms';
                            return `<span class="char-wrapper"><span class="char-reveal" style="animation-delay: ${delay}">${char}</span></span>`;
                        }).join('');
                    } else if (node.nodeType === 1) {
                        const innerChars = node.innerText.split('');
                        const startDelay = (lineIndex * 200) + 300;
                        const processedInner = innerChars.map((char, i) => {
                            if(char === ' ') return ' ';
                            const delay = startDelay + (i * 30) + 'ms';
                            return `<span class="char-wrapper"><span class="char-reveal" style="animation-delay: ${delay}">${char}</span></span>`;
                        }).join('');
                        const clone = node.cloneNode(false);
                        clone.innerHTML = processedInner;
                        return clone.outerHTML;
                    }
                    return '';
                }
                Array.from(tempDiv.childNodes).forEach(node => { newHTML += processNode(node); });
                if (lineIndex < lines.length - 1) newHTML += '<br>';
            });
            element.innerHTML = newHTML;
        }

        splitText(heroTitle);

        // 2. Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('reveal-hidden');
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-trigger').forEach(el => observer.observe(el));

        // 3. Flashlight / Spotlight Effect
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            });
        });

        // 4. Carousel Logic
        const slides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        const urlBar = document.getElementById('url-bar');
        const urls = [
            'app.acceldata.io/observability/health',
            'app.acceldata.io/observability/costs',
            'app.acceldata.io/observability/lineage'
        ];
        
        let currentSlide = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0';
                slide.style.transform = 'scale(0.98) translateX(20px)';
            });
            
            const active = slides[index];
            active.classList.add('active');
            setTimeout(() => {
                active.style.opacity = '1';
                active.style.transform = 'scale(1) translateX(0)';
            }, 10);
            
            urlBar.innerText = urls[index];
        }

        function next() { currentSlide = (currentSlide + 1) % totalSlides; showSlide(currentSlide); }
        function prev() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; showSlide(currentSlide); }

        nextBtn.addEventListener('click', next);
        prevBtn.addEventListener('click', prev);
        setInterval(next, 5000);
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 grid-bg opacity-30"></div>

<div className="absolute inset-0 overflow-hidden">
<div className="light-beam"></div>
<div className="light-beam"></div>
<div className="light-beam"></div>
<div className="light-beam"></div>
<div className="light-beam"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#02000f]/80 backdrop-blur-md reveal-trigger reveal-visible">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-semibold shadow-lg shadow-indigo-500/20">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-white font-medium tracking-tight text-lg">acceldata</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>

<div className="btn-beam cursor-pointer group">
<button className="btn-beam-content flex items-center gap-2 bg-[#050505] text-white px-4 py-2 text-sm font-medium">
                        Request Demo
                    </button>
</div>
</div>
</div>
</nav>

<section className="z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center space-y-8">

<div className="reveal-trigger inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300 mb-4 backdrop-blur-sm reveal-visible">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Introducing Data Reliability Cloud 2.0
        </div>

<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-2xl" id="hero-title"><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>
</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>
</span></span></span> <span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>T</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>o</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>t</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>a</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>l</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>
</span></span></span> <span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>v</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>i</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>s</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>i</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>b</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>i</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>l</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>i</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>t</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>y</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>
</span></span></span> <span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>f</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>o</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>r</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>
</span></span></span> <span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>y</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>o</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>u</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>r</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '300ms'}}>
</span></span></span> <br/><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '500ms'}}>
</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '500ms'}}>
</span></span></span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '500ms'}}>m</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '530ms'}}>o</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '560ms'}}>d</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '590ms'}}>e</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '620ms'}}>r</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '650ms'}}>n</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '680ms'}}>
</span></span> <span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1070ms'}}>d</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1100ms'}}>a</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1130ms'}}>t</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1160ms'}}>a</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1190ms'}}>
</span></span> <span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1580ms'}}>s</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1610ms'}}>t</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1640ms'}}>a</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1670ms'}}>c</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1700ms'}}>k</span></span><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '1730ms'}}>.</span></span></span><span className="char-wrapper"><span className="char-wrapper"><span className="char-reveal" style={{animationDelay: '500ms'}}>
</span></span></span> </h1>

<p className="reveal-trigger text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed reveal-visible" style={{transitionDelay: '400ms'}}>
            Eliminate data downtime, optimize compute costs, and ensure data reliability at petabyte scale. The unified
            platform for data observability.
        </p>

<div className="reveal-trigger flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 reveal-visible" style={{transitionDelay: '600ms'}}>

<div className="btn-beam w-full sm:w-auto cursor-pointer">
<button className="btn-beam-content w-full sm:w-auto px-8 py-3.5 bg-black text-white font-medium flex items-center justify-center gap-2 group">
                        Start for free
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform text-indigo-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<button className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:border-white/20">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch demo
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group reveal-trigger reveal-visible" style={{transitionDelay: '800ms'}}>

<button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/10 bg-black/40 text-white hover:bg-white/10 backdrop-blur-md transition-all" id="prevSlide">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/10 bg-black/40 text-white hover:bg-white/10 backdrop-blur-md transition-all" id="nextSlide">
<svg className="lucide lucide-chevron-right w-6 h-6" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000">
</div>
<div className="relative bg-[#0A0A1B] border border-white/10 rounded-xl shadow-2xl overflow-hidden spotlight-card group" id="main-dashboard-card" style={{'--mouse-x': '997px', '--mouse-y': '-615.5px'}}>

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 relative z-20">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 px-3 py-1 bg-black/40 rounded text-[10px] text-slate-500 font-mono w-64 flex items-center justify-between border border-white/5">
<span id="url-bar">app.acceldata.io/observability</span>
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>

<div className="grid grid-cols-12 h-[500px] md:h-[600px] relative">

<div className="col-span-1 border-r border-white/5 hidden md:flex flex-col items-center py-6 gap-6 bg-white/[0.02] relative z-20">
<div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/20"><svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg></div>
<div className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition"><svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg></div>
<div className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition"><svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div>
<div className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition"><svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<div className="mt-auto p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-slate-300 transition">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
</div>

<div className="col-span-12 md:col-span-11 relative overflow-hidden bg-[#0A0A1B]">

<div className="carousel-slide active" data-index="0">
<div className="p-8 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="">
<h3 className="text-white font-medium text-lg">Pipeline Health Overview</h3>
<p className="text-slate-500 text-sm">Real-time monitoring of critical assets</p>
</div>
<span className="px-3 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">System Operational</span>
</div>
<div className="grid grid-cols-3 gap-6 mb-8">
<div className="col-span-1 p-5 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 mb-2"><svg className="lucide lucide-database w-4 h-4 text-indigo-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg><span className="text-sm text-slate-400">Data Freshness</span></div>
<div className="text-2xl text-white font-semibold">99.98%</div>
<div className="mt-4 h-1 w-full bg-white/10 rounded-full">
<div className="h-full w-[99%] bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]">
</div>
</div>
</div>
<div className="col-span-1 p-5 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 mb-2"><svg className="lucide lucide-zap w-4 h-4 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg><span className="text-sm text-slate-400">Query Latency</span></div>
<div className="text-2xl text-white font-semibold">124ms</div>
<div className="mt-4 h-1 w-full bg-white/10 rounded-full">
<div className="h-full w-[80%] bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]">
</div>
</div>
</div>
<div className="col-span-1 p-5 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2 mb-2"><svg className="lucide lucide-alert-circle w-4 h-4 text-rose-400" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg><span className="text-sm text-slate-400">Incidents</span></div>
<div className="text-2xl text-white font-semibold">0 Active</div>
</div>
</div>
<div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-grid opacity-10"></div>
<div className="flex gap-4 items-center opacity-80 z-10">
<div className="w-16 h-16 rounded bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
<svg className="lucide lucide-server w-6 h-6 text-indigo-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div>
<div className="w-8 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
<div className="w-16 h-16 rounded bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
<svg className="lucide lucide-database w-6 h-6 text-cyan-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></div>
<div className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"></div>
<div className="w-16 h-16 rounded bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
<svg className="lucide lucide-bar-chart w-6 h-6 text-purple-400" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg></div>
</div>
</div>
</div>
</div>

<div className="carousel-slide" data-index="1">
<div className="p-8 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white font-medium text-lg">Compute Cost Analysis</h3>
<p className="text-slate-500 text-sm">Snowflake &amp; Databricks Spend</p>
</div>
<span className="px-3 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Optimization Found</span>
</div>
<div className="grid grid-cols-2 gap-6 mb-6">
<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-sm text-slate-400 mb-2">Total Spend (MTD)</div>
<div className="text-3xl text-white font-semibold">$12,450</div>
<div className="text-xs text-green-400 mt-1">↓ 12% vs last month</div>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="text-sm text-slate-400 mb-2">Potential Savings</div>
<div className="text-3xl text-white font-semibold">$3,200</div>
<div className="text-xs text-slate-500 mt-1">From idle warehouses</div>
</div>
</div>
<div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] flex items-end justify-between p-6 gap-2">
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[40%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100">
                                        $400</div>
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[60%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100">
                                        $600</div>
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[30%] rounded-t-sm">
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[80%] rounded-t-sm">
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[50%] rounded-t-sm">
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[45%] rounded-t-sm">
</div>
<div className="w-full bg-indigo-500/20 hover:bg-indigo-500/40 transition-all duration-300 h-[70%] rounded-t-sm">
</div>
</div>
</div>
</div>

<div className="carousel-slide" data-index="2">
<div className="p-8 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white font-medium text-lg">Column-Level Lineage</h3>
<p className="text-slate-500 text-sm">Impact analysis &amp; traceability</p>
</div>
<button className="p-2 rounded border border-white/10 hover:bg-white/5"><svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg></button>
</div>
<div className="flex-1 relative">
<div className="absolute inset-0 flex items-center justify-center">

<div className="flex flex-col items-center gap-8">
<div className="w-12 h-12 rounded bg-fuchsia-500/20 border border-fuchsia-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(217,70,239,0.3)]">
<svg className="lucide lucide-file-text w-5 h-5 text-fuchsia-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
<div className="h-8 w-[2px] bg-white/10"></div>
<div className="flex gap-12">
<div className="flex flex-col items-center gap-4">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-table w-4 h-4 text-slate-500" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg></div>
<div className="h-6 w-[2px] bg-white/10"></div>
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-user w-4 h-4 text-slate-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-table w-4 h-4 text-slate-500" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg></div>
<div className="h-6 w-[2px] bg-white/10"></div>
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-shopping-cart w-4 h-4 text-slate-500" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded text-xs border border-white/10 text-slate-400 backdrop-blur-sm">
                                    Zoom: 100%
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01] reveal-trigger relative z-10">
<div className="max-w-full overflow-hidden marquee-container">
<div className="flex items-center gap-20 w-max marquee-content opacity-40 grayscale hover:grayscale-0 transition-all duration-500 px-6">

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold tracking-tighter text-white">stripe</span>
<span className="text-xl font-bold tracking-tighter text-white">linear</span>
<span className="text-xl font-bold tracking-tighter text-white">H<span className="text-indigo-400">Y</span>PER</span>
<span className="text-xl font-bold tracking-tighter text-white">VORTEX</span>
<span className="text-xl font-bold tracking-tighter text-white">raycast</span>
<span className="text-xl font-bold tracking-tighter text-white">vercel</span>

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold tracking-tighter text-white">stripe</span>
<span className="text-xl font-bold tracking-tighter text-white">linear</span>
<span className="text-xl font-bold tracking-tighter text-white">H<span className="text-indigo-400">Y</span>PER</span>
<span className="text-xl font-bold tracking-tighter text-white">VORTEX</span>
<span className="text-xl font-bold tracking-tighter text-white">raycast</span>
<span className="text-xl font-bold tracking-tighter text-white">vercel</span>
</div>
</div>
</section>

<section className="z-10 pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 reveal-trigger">Comprehensive observabilitywithout the complexity.</h2>
<p className="text-slate-400 text-lg max-w-2xl reveal-trigger">Monitor compute, reliability, and data quality across your entire warehouse and lakehouse infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 spotlight-group">

<div className="spotlight-card rounded-2xl p-8 border border-white/10 reveal-trigger" style={{transitionDelay: '100ms', '--mouse-x': '997px', '--mouse-y': '-1831.5px'}}>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Data Reliability</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                            Detect anomalies in real-time. Automatically validate schema changes, volume, and freshness.
                        </p>
</div>
</div>

<div className="spotlight-card rounded-2xl p-8 border border-white/10 reveal-trigger" style={{transitionDelay: '200ms', '--mouse-x': '653px', '--mouse-y': '-1831.5px'}}>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
<svg className="lucide lucide-coins w-6 h-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cost Intelligence</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                            Gain granular visibility into spend. Identify expensive queries, unused tables, and optimize resource allocation.
                        </p>
</div>
</div>

<div className="spotlight-card rounded-2xl p-8 border border-white/10 reveal-trigger" style={{transitionDelay: '300ms', '--mouse-x': '309px', '--mouse-y': '-1831.5px'}}>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-6">
<svg className="lucide lucide-git-branch w-6 h-6" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Pipeline Lineage</h3>
<p className="text-slate-400 leading-relaxed text-sm">
                            Visualize dependencies across your entire stack. Trace errors back to the source with column-level lineage.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-2 spotlight-card rounded-2xl p-8 border border-white/10 flex flex-col sm:flex-row justify-between min-h-[300px] reveal-trigger" style={{transitionDelay: '400ms', '--mouse-x': '997px', '--mouse-y': '-2124.5px'}}>
<div className="relative z-10 max-w-sm">
<h3 className="text-xl font-medium text-white mb-2">Automated Rules</h3>
<p className="text-slate-400 text-sm">Set up ML-driven alerts that adapt to your data's seasonality without manual thresholding.</p>
</div>
<div className="relative z-10 mt-6 sm:mt-0 w-full max-w-xs border border-white/10 rounded-lg bg-[#0A0A1B] overflow-hidden flex flex-col p-4 gap-2 shadow-2xl">
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-xs text-slate-300">Schema Drift</span>
</div>
<span className="text-[10px] text-slate-500">2m ago</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 opacity-60">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
<span className="text-xs text-slate-300">Volume Spike</span>
</div>
<span className="text-[10px] text-slate-500">15m ago</span>
</div>
</div>
</div>

<div className="col-span-1 spotlight-card rounded-2xl p-8 border border-white/10 reveal-trigger" style={{transitionDelay: '500ms', '--mouse-x': '309px', '--mouse-y': '-2124.5px'}}>
<div className="relative z-10 h-full flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Integrations</h3>
<p className="text-slate-400 text-sm mb-8">Seamlessly connects with your stack.</p>
<div className="grid grid-cols-3 gap-3 mt-auto opacity-70">
<div className="bg-white/5 p-3 rounded border border-white/10 flex justify-center hover:bg-white/10 transition"><svg className="lucide lucide-snowflake w-6 h-6" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg></div>
<div className="bg-white/5 p-3 rounded border border-white/10 flex justify-center hover:bg-white/10 transition"><svg className="lucide lucide-database w-6 h-6" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></div>
<div className="bg-white/5 p-3 rounded border border-white/10 flex justify-center hover:bg-white/10 transition"><svg className="lucide lucide-cloud w-6 h-6" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 relative overflow-hidden bg-white/[0.01] z-10">
<div className="marquee-container">
<div className="flex items-center gap-6 w-max marquee-content px-6">

<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<p className="text-slate-300 text-sm">"Acceldata helped us reduce our Snowflake spend by 30% in the first month."</p>
<div className="flex items-center gap-2 mt-auto">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">JD</div>
<div className="text-xs text-slate-500">Head of Data, Fintech Co</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<div className="text-3xl font-bold text-white">500TB+</div>
<div className="text-sm text-slate-400">Data Monitored Daily</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<p className="text-slate-300 text-sm">"The lineage mapping saved our engineering team hundreds of hours."</p>
<div className="flex items-center gap-2 mt-auto">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs font-bold text-cyan-400">AL</div>
<div className="text-xs text-slate-500">CTO, HealthTech</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<div className="text-3xl font-bold text-white">99.9%</div>
<div className="text-sm text-slate-400">Alert Accuracy</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<p className="text-slate-300 text-sm">"Finally, we can trust our dashboards. A game changer."</p>
<div className="flex items-center gap-2 mt-auto">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400">MK</div>
<div className="text-xs text-slate-500">VP Eng, RetailGiant</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<p className="text-slate-300 text-sm">"Acceldata helped us reduce our Snowflake spend by 30% in the first month."</p>
<div className="flex items-center gap-2 mt-auto">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">JD</div>
<div className="text-xs text-slate-500">Head of Data, Fintech Co</div>
</div>
</div>
<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<div className="text-3xl font-bold text-white">500TB+</div>
<div className="text-sm text-slate-400">Data Monitored Daily</div>
</div>
<div className="w-80 p-6 rounded-xl border border-white/10 bg-[#0A0A1B] flex flex-col gap-4">
<p className="text-slate-300 text-sm">"The lineage mapping saved our engineering team hundreds of hours."</p>
<div className="flex items-center gap-2 mt-auto">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs font-bold text-cyan-400">AL</div>
<div className="text-xs text-slate-500">CTO, HealthTech</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 text-center pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 reveal-trigger">Ready to trust your data?</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto reveal-trigger">Get started with Acceldata today and bring complete visibility to your modern data stack.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-trigger">

<div className="btn-beam cursor-pointer">
<button className="btn-beam-content px-8 py-3 bg-[#050505] text-white font-medium hover:bg-[#111] transition-all">
                        Get Started Free
                    </button>
</div>
<button className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#02000f] pt-20 pb-10 px-6 reveal-trigger relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-md flex items-center justify-center text-white text-xs">
<svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-white font-medium tracking-tight">acceldata</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        The world's first multidimensional data observability cloud for the modern enterprise.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Compute</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Reliability</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 Acceldata. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
