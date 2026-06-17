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



        // Text Animation Logic
        const heroText = document.getElementById('heroText');
        const text = "Universal Asset Management.";
        let html = '';
        for (let char of text) {
            html += `<span class="char-wrapper"><span class="char" style="animation-delay: ${Math.random() * 0.3}s">${char === ' ' ? '&nbsp;' : char}</span></span>`;
        }
        heroText.innerHTML = html;

        // Background Clip Animation
        window.addEventListener('load', () => {
            const cols = document.querySelectorAll('.bg-col');
            cols.forEach(col => col.classList.add('active'));
        });

        // Scroll Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));

        // Spotlight / Flashlight Effect
        document.addEventListener('mousemove', e => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Content Switcher Logic
        const cards = document.querySelectorAll('.rotator-card');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        let activeIndex = 0;

        function updateCards() {
            cards.forEach((card, index) => {
                // Reset styles
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9) translateX(40px)';
                card.style.zIndex = '10';

                // Determine position relative to active
                if (index === activeIndex) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateX(0)';
                    card.style.zIndex = '30';
                } else if (index === (activeIndex + 1) % cards.length) {
                    card.style.opacity = '0.4';
                    card.style.transform = 'scale(0.95) translateX(20px)';
                    card.style.zIndex = '20';
                }
            });
        }

        function nextCard() {
            activeIndex = (activeIndex + 1) % cards.length;
            updateCards();
        }

        function prevCard() {
            activeIndex = (activeIndex - 1 + cards.length) % cards.length;
            updateCards();
        }

        nextBtn.addEventListener('click', () => {
            clearInterval(autoRotate);
            nextCard();
        });
        prevBtn.addEventListener('click', () => {
            clearInterval(autoRotate);
            prevCard();
        });

        let autoRotate = setInterval(nextCard, 4000);
        updateCards(); // Initial state

        // Lightbox Logic
        function openLightbox() {
            const lb = document.getElementById('lightbox');
            lb.style.visibility = 'visible';
            lb.style.opacity = '1';
        }

        function closeLightbox() {
            const lb = document.getElementById('lightbox');
            lb.style.opacity = '0';
            setTimeout(() => lb.style.visibility = 'hidden', 300);
        }

        // Dropzone Visuals
        const dropZone = document.getElementById('dropZone');
        
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'rgba(255,255,255,0.4)';
            dropZone.style.backgroundColor = 'rgba(255,255,255,0.05)';
        });

        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '';
            dropZone.style.backgroundColor = '';
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '';
            dropZone.style.backgroundColor = '';
            // Visual feedback only
            const icon = dropZone.querySelector('iconify-icon');
            icon.setAttribute('icon', 'lucide:check');
            icon.classList.add('text-green-400');
            setTimeout(() => {
                icon.setAttribute('icon', 'lucide:upload-cloud');
                icon.classList.remove('text-green-400');
            }, 2000);
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
      

<div className="bg-grid-anim" id="bgGrid">
<div className="bg-col" style={{transitionDelay: '0ms'}}></div>
<div className="bg-col" style={{transitionDelay: '100ms'}}></div>
<div className="bg-col" style={{transitionDelay: '200ms'}}></div>
<div className="bg-col" style={{transitionDelay: '300ms'}}></div>
<div className="bg-col" style={{transitionDelay: '400ms'}}></div>
<div className="bg-col" style={{transitionDelay: '500ms'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white/90">Nexus</span>
</div>
<div className="flex gap-6 text-xs font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
</div>
</nav>

<section className="pt-40 pb-20 px-6 max-w-6xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-white/70 mb-8 reveal-element">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            v2.0 Now Available
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]" id="heroText">

</h1>
<p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed reveal-element" style={{transitionDelay: '200ms'}}>
            Seamlessly upload, manage, and distribute your digital assets with enterprise-grade security and blazing fast global delivery.
        </p>
<div className="flex justify-center gap-4 reveal-element" style={{transitionDelay: '300ms'}}>
<button className="relative group">
<div className="beam-border absolute inset-0 rounded-full"></div>
<div className="relative px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Get Started
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</button>
<button className="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Documentation
            </button>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40 overflow-hidden relative reveal-element">
<div className="max-w-6xl mx-auto relative marquee-container">
<div className="flex gap-16 marquee-content w-max">

<span className="text-xl font-semibold tracking-tighter text-white/40">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">HYPERION</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">OBLIVION</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">ECHO</span>

<span className="text-xl font-semibold tracking-tighter text-white/40">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">STRATOS</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">HYPERION</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">OBLIVION</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white/40">ECHO</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-element">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Asset Library</h2>
<p className="text-white/50 text-sm">Upload and manage PDFs, Presentations, and Images.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
</button>
<button className="p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors">
<iconify-icon icon="lucide:list" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group relative w-full h-48 rounded-xl border border-dashed border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col items-center justify-center gap-3 cursor-pointer mb-16 reveal-element overflow-hidden" id="dropZone">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-3 bg-white/5 rounded-full text-white/80 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon icon="lucide:upload-cloud" width="24"></iconify-icon>
</div>
<div className="text-center relative z-10">
<p className="text-sm font-medium text-white/90">Click to upload or drag and drop</p>
<p className="text-xs text-white/40 mt-1">PDF, PPTX, PNG, JPG (max 10MB)</p>
</div>
<input className="absolute inset-0 opacity-0 cursor-pointer z-20" multiple="" type="file"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="spotlight-card rounded-xl border border-white/10 group h-[400px] flex flex-col reveal-element" style={{transitionDelay: '100ms'}}>
<div className="spotlight-border"></div>

<div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-red-500/10 rounded text-red-400">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white/90">Q4_Report.pdf</span>
<span className="text-[10px] text-white/40">2.4 MB</span>
</div>
</div>
<button className="text-white/40 hover:text-white transition-colors">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
</div>

<div className="flex-1 bg-[#1a1a1a] relative overflow-hidden flex flex-col">
<div className="h-8 bg-[#252525] flex items-center justify-between px-3 border-b border-white/5">
<span className="text-[10px] text-white/40">Page 1 of 14</span>
<div className="flex gap-2 text-white/40">
<iconify-icon icon="lucide:minus" width="12"></iconify-icon>
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</div>
</div>
<div className="flex-1 p-4 custom-scroll overflow-y-auto flex justify-center">
<div className="w-full h-[150%] bg-white shadow-lg p-6 max-w-[240px]">
<div className="h-3 w-1/3 bg-gray-200 mb-6"></div>
<div className="h-2 w-full bg-gray-100 mb-2"></div>
<div className="h-2 w-full bg-gray-100 mb-2"></div>
<div className="h-2 w-3/4 bg-gray-100 mb-6"></div>
<div className="grid grid-cols-2 gap-2 mb-4">
<div className="h-20 bg-gray-50 rounded"></div>
<div className="h-20 bg-gray-50 rounded"></div>
</div>
<div className="h-2 w-full bg-gray-100 mb-2"></div>
<div className="h-2 w-full bg-gray-100 mb-2"></div>
</div>
</div>
</div>
</div>

<div className="spotlight-card rounded-xl border border-white/10 group h-[400px] flex flex-col reveal-element" style={{transitionDelay: '200ms'}}>
<div className="spotlight-border"></div>
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-orange-500/10 rounded text-orange-400">
<iconify-icon icon="lucide:presentation" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white/90">Pitch_Deck_v3.pptx</span>
<span className="text-[10px] text-white/40">14.2 MB</span>
</div>
</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center gap-6 relative p-6">
<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/5 flex items-center justify-center border border-white/5 shadow-2xl">
<iconify-icon className="text-orange-400 opacity-80" icon="lucide:file-presentation" width="40"></iconify-icon>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-white mb-1">PowerPoint Presentation</h3>
<p className="text-xs text-white/40">Preview not available for slides</p>
</div>
<button className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                        Download PPT
                    </button>
</div>
</div>

<div className="spotlight-card rounded-xl border border-white/10 group h-[400px] flex flex-col reveal-element" style={{transitionDelay: '300ms'}}>
<div className="spotlight-border"></div>
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
<iconify-icon icon="lucide:image" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white/90">Dashboard_Dark.png</span>
<span className="text-[10px] text-white/40">840 KB</span>
</div>
</div>
<button className="text-white/40 hover:text-white transition-colors">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
</button>
</div>
<div className="flex-1 relative overflow-hidden group/img cursor-zoom-in" onclick="openLightbox()">
<img alt="Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-60 group-hover/img:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white">
<iconify-icon icon="lucide:maximize-2" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-element">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Intelligent Workflows</h2>
<p className="text-white/50 mb-8 max-w-sm">Automate your document processing pipeline with our advanced engine.</p>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all" id="prevBtn">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all" id="nextBtn">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="relative h-[400px] w-full reveal-element" style={{transitionDelay: '200ms'}}>

<div className="rotator-card absolute inset-0 rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-30 opacity-100 scale-100 translate-x-0" data-index="0">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Instant Processing</h3>
<p className="text-sm text-white/50">Files are processed in real-time with sub-second latency across our edge network.</p>
</div>
<div className="h-32 mt-6 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden">
<div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 animate-pulse"></div>
</div>
</div>

<div className="rotator-card absolute inset-0 rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 opacity-40 scale-95 translate-x-8" data-index="1">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Enterprise Security</h3>
<p className="text-sm text-white/50">SOC2 Type II compliant encryption for all data at rest and in transit.</p>
</div>
<div className="h-32 mt-6 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-white/20" icon="lucide:lock" width="32"></iconify-icon>
</div>
</div>

<div className="rotator-card absolute inset-0 rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 opacity-0 scale-90 translate-x-16" data-index="2">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Deep Analytics</h3>
<p className="text-sm text-white/50">Track view counts, download rates, and user engagement detailed reports.</p>
</div>
<div className="h-32 mt-6 rounded-lg bg-white/5 border border-white/5 flex items-end justify-between px-4 pb-4 gap-2">
<div className="w-full bg-white/10 h-1/3 rounded-t-sm"></div>
<div className="w-full bg-white/10 h-2/3 rounded-t-sm"></div>
<div className="w-full bg-green-500/50 h-full rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative">
<div className="text-center mb-16 reveal-element">
<h2 className="text-2xl font-semibold tracking-tight">Trusted by Developers</h2>
</div>
<div className="marquee-container w-full reveal-element">
<div className="flex gap-6 w-max marquee-content" style={{animationDuration: '60s'}}>


<div className="w-80 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
<p className="text-sm text-white/70 mb-4">"The API is incredibly intuitive. We integrated the PDF viewer in less than an hour."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
<div>
<div className="text-xs font-medium text-white">Alex Chen</div>
<div className="text-[10px] text-white/40">CTO @ Vertex</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
<p className="text-sm text-white/70 mb-4">"Best in class security features. Exactly what our enterprise clients needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
<div>
<div className="text-xs font-medium text-white">Sarah Miller</div>
<div className="text-[10px] text-white/40">Eng Lead @ Scale</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
<p className="text-sm text-white/70 mb-4">"The drag and drop interface is buttery smooth. Love the attention to detail."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-emerald-500"></div>
<div>
<div className="text-xs font-medium text-white">David Park</div>
<div className="text-[10px] text-white/40">Product @ Linear</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
<p className="text-sm text-white/70 mb-4">"Blazing fast uploads and the previews are generated instantly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500"></div>
<div>
<div className="text-xs font-medium text-white">Elena R.</div>
<div className="text-[10px] text-white/40">Founder @ DesignKo</div>
</div>
</div>
</div>

<div className="w-80 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
<p className="text-sm text-white/70 mb-4">"The API is incredibly intuitive. We integrated the PDF viewer in less than an hour."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
<div>
<div className="text-xs font-medium text-white">Alex Chen</div>
<div className="text-[10px] text-white/40">CTO @ Vertex</div>
</div>
</div>
</div>
<div className="w-80 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
<p className="text-sm text-white/70 mb-4">"Best in class security features. Exactly what our enterprise clients needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
<div>
<div className="text-xs font-medium text-white">Sarah Miller</div>
<div className="text-[10px] text-white/40">Eng Lead @ Scale</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white/20 rounded-full"></div>
<span className="text-xs font-medium text-white/40">© 2024 Nexus Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center invisible opacity-0 p-6" id="lightbox">
<button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors" onclick="closeLightbox()">
<iconify-icon icon="lucide:x" width="32"></iconify-icon>
</button>
<div className="max-w-4xl w-full max-h-full">
<img alt="Full Preview" className="w-full h-auto rounded-lg shadow-2xl border border-white/10" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="mt-4 flex justify-between items-center">
<span className="text-sm font-medium">Dashboard_Dark.png</span>
<button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-gray-200 transition-colors">
                    Download
                </button>
</div>
</div>
</div>


    </>
  );
}
