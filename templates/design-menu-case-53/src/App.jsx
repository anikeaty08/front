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



        // --- DATA ---
        const projects = [
            // WEB
            { id: 1, category: 'web', title: 'Lumina Interface', desc: 'A comprehensive financial dashboard focused on data clarity.', success: 'The client provided a highly organized database schema.', time: '2 weeks', plan: 'Pro Plan', image: 'https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?q=80&w=2600&auto=format&fit=crop' },
            { id: 2, category: 'web', title: 'Chronos Landing', desc: 'High-conversion landing page with WebGL interactions.', success: 'High-quality 3D renders from the product team.', time: '4 days', plan: 'Super Plan', image: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?q=80&w=2000&auto=format&fit=crop' },
            { id: 3, category: 'web', title: 'Velvet Storefront', desc: 'Minimalist headless Shopify storefront for fashion retail.', success: 'Clear style guidelines reduced iteration time.', time: '1 week', plan: 'Pro Plan', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop' },
            
            // BRANDING
            { id: 4, category: 'branding', title: 'Apex Identity', desc: 'Visual identity overhaul for an AI infrastructure startup.', success: 'Client was decisive during concept rounds.', time: '3 weeks', plan: 'Super Plan', image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2000&auto=format&fit=crop' },
            { id: 5, category: 'branding', title: 'Oasis Guides', desc: 'Typography and color system for a travel publication.', success: 'Target audience profile helped define the palette.', time: '5 days', plan: 'Graphic Plan', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop' },

            // MOTION
            { id: 6, category: 'motion', title: 'Flux Showreel', desc: 'Kinetic typography package for a music festival.', success: 'Pre-selected audio tracks helped synchronize motion.', time: '1 week', plan: 'Super Plan', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop' },
            { id: 7, category: 'motion', title: 'Zenith Interactions', desc: 'Interaction design patterns for a mobile wallet.', success: 'Developers were involved early.', time: '3 days', plan: 'Pro Plan', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop' },

            // GRAPHIC
            { id: 8, category: 'graphic', title: 'Mono Posters', desc: 'Swiss-style poster collection exploring negative space.', success: 'Open creative license allowed for bold layouts.', time: '2 days', plan: 'Graphic Plan', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop' },
             { id: 9, category: 'graphic', title: 'Serif Specimen', desc: 'Editorial layout showcasing a custom serif typeface.', success: 'Text content was finalized prior to design.', time: '4 days', plan: 'Graphic Plan', image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2000&auto=format&fit=crop' }
        ];

        const container = document.getElementById('projects-list');
        const scrollContainer = document.getElementById('scroll-container');
        const scrollProgress = document.getElementById('scroll-progress');
        const projectCountLabel = document.getElementById('project-count');

        // --- RENDER FUNCTION ---
        function renderProjects(category) {
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.innerHTML = '';
                const filtered = projects.filter(p => p.category === category);
                projectCountLabel.innerText = `${filtered.length} Projects`;
                
                // 1. Render Projects
                filtered.forEach((project, index) => {
                    const section = document.createElement('section');
                    section.className = `snap-section w-full h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden bg-white`;

                    section.innerHTML = `
                        <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center">
                            
                            <!-- Image Side (Left) -->
                            <div class="md:col-span-7 h-[50vh] md:h-[75vh] w-full img-wrapper group">
                                <div class="w-full h-full rounded-lg bg-zinc-100 shadow-sm overflow-hidden relative cursor-pointer">
                                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${project.title}" class="parallax-img w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0">
                                    <div class="img-overlay absolute inset-0 pointer-events-none"></div>
                                    <div class="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                        <div class="w-10 h-10 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg">
                                            <span class="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Text Side (Right) -->
                            <div class="md:col-span-5 flex flex-col justify-center space-y-8 reveal-group">
                                <h2 class="reveal-child text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[0.9] -ml-0.5">${project.title}</h2>
                                <p class="reveal-child text-sm text-zinc-500 font-normal leading-relaxed max-w-sm tracking-tight border-l border-zinc-200 pl-4">${project.desc}</p>
                                
                                <div class="reveal-child bg-zinc-50 rounded-lg p-4 max-w-sm border border-zinc-100/50">
                                    <div class="flex gap-2 items-start mb-1">
                                        <span class="iconify text-emerald-600 mt-0.5 shrink-0" data-icon="lucide:sparkles" data-width="12"></span>
                                        <span class="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">Insight</span>
                                    </div>
                                    <p class="text-xs text-zinc-700 italic leading-5">"${project.success}"</p>
                                </div>

                                <div class="reveal-child flex flex-wrap items-center gap-2">
                                    <div class="badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-100 bg-white shadow-sm text-[10px] font-medium uppercase tracking-wider text-zinc-500 cursor-default">
                                        <span class="iconify text-zinc-400" data-icon="lucide:timer" data-width="12"></span>
                                        ${project.time}
                                    </div>
                                    <div class="badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-100 bg-white shadow-sm text-[10px] font-medium uppercase tracking-wider text-zinc-500 cursor-default">
                                        <span class="iconify text-zinc-400" data-icon="lucide:zap" data-width="12"></span>
                                        ${project.plan}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.appendChild(section);
                });

                // 2. Render "Explore Other Categories" Section (Bottom Nav)
                const categories = ['web', 'branding', 'motion', 'graphic'];
                const otherCats = categories.filter(c => c !== category);
                
                const exploreSection = document.createElement('section');
                exploreSection.className = 'snap-section w-full min-h-[60vh] md:h-screen flex flex-col items-center justify-center p-6 bg-zinc-50 border-t border-zinc-200';
                
                let cardsHtml = '';
                otherCats.forEach(cat => {
                    const sampleImg = projects.find(p => p.category === cat)?.image || '';
                    cardsHtml += `
                        <div onclick="filterProjects('${cat}', this)" class="cat-card group relative w-full h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale">
                            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div class="absolute inset-0 p-6 flex flex-col justify-end">
                                <div class="flex justify-between items-end text-white">
                                    <span class="text-xl font-medium tracking-tight capitalize">${cat}</span>
                                    <span class="cat-arrow iconify opacity-60 group-hover:opacity-100 transition-all" data-icon="lucide:arrow-right" data-width="20"></span>
                                </div>
                            </div>
                        </div>
                    `;
                });

                exploreSection.innerHTML = `
                    <div class="max-w-4xl w-full">
                        <div class="mb-10 text-center">
                            <h3 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Explore other disciplines</h3>
                            <p class="text-zinc-500 text-sm">Continue browsing the archive.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            ${cardsHtml}
                        </div>
                    </div>
                `;
                container.appendChild(exploreSection);

                // Re-init observers
                observeElements();
                container.style.transition = 'opacity 0.6s ease';
                container.style.opacity = '1';
                
            }, 300);
        }

        // --- TABS LOGIC ---
        function filterProjects(category, triggerElement) {
            // Reset all tabs styles
            const allBtns = document.querySelectorAll('.tab-btn');
            allBtns.forEach(btn => {
                btn.classList.remove('text-white', 'bg-zinc-900', 'shadow-sm');
                btn.classList.add('text-zinc-500');
                if(!btn.classList.contains('hover:bg-zinc-200/50')) btn.classList.add('hover:bg-zinc-200/50');
            });

            // Find the specific button in the nav bar that matches this category
            // (Note: triggerElement might be from the bottom cards, so we find the matching nav button)
            const targetBtn = Array.from(allBtns).find(b => b.textContent.toLowerCase().trim() === category) || triggerElement;
            
            if (targetBtn) {
                targetBtn.classList.remove('text-zinc-500', 'hover:bg-zinc-200/50');
                targetBtn.classList.add('text-white', 'bg-zinc-900', 'shadow-sm');
            }

            // Scroll to top of list if we clicked from bottom
            if(triggerElement.classList.contains('cat-card')) {
                document.getElementById('nav-anchor').scrollIntoView({ behavior: 'smooth' });
            }

            renderProjects(category);
        }

        // --- OBSERVERS ---
        function observeElements() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if(entry.target.classList.contains('reveal-group')) {
                            entry.target.classList.add('active');
                        }
                        if(entry.target.classList.contains('img-wrapper')) {
                            entry.target.classList.add('active');
                        }
                    }
                });
            }, { threshold: 0.15 });

            document.querySelectorAll('.reveal-group, .img-wrapper').forEach(el => observer.observe(el));
        }

        // --- SCROLL PROGRESS ---
        scrollContainer.addEventListener('scroll', () => {
            const scrollTop = scrollContainer.scrollTop;
            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.height = `${scrolled}%`;
        });

        // Initial Render
        document.addEventListener('DOMContentLoaded', () => {
            renderProjects('web');
            setTimeout(() => {
                document.querySelector('section.snap-section .reveal-group').classList.add('active');
            }, 100);
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
      

<header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto mix-blend-difference text-white">
<a className="text-sm font-semibold tracking-tighter uppercase flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-full group-hover:scale-90 transition-transform duration-300">
<span className="text-[10px] font-bold">D</span>
</div>
<span className="mix-blend-difference">Design Menu</span>
</a>
</div>
<div className="pointer-events-auto hidden md:flex items-center gap-6 mix-blend-difference text-white">
<nav className="flex gap-4">
<a className="text-xs font-medium opacity-70 hover:opacity-100 transition-opacity tracking-tight" href="#">Studio</a>
<a className="text-xs font-medium opacity-70 hover:opacity-100 transition-opacity tracking-tight" href="#">Process</a>
<a className="text-xs font-medium opacity-70 hover:opacity-100 transition-opacity tracking-tight" href="#">Journal</a>
</nav>
<button className="text-xs font-medium opacity-70 hover:opacity-100 transition-opacity tracking-tight px-3 py-1.5 border border-white/20 rounded-full hover:bg-white hover:text-black">
                Login
            </button>
</div>
</header>

<main className="snap-container w-full h-screen relative" id="scroll-container">

<section className="snap-section w-full h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">

<div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.4] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl w-full px-6 flex flex-col items-center text-center reveal-group">
<div className="reveal-child mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium uppercase tracking-wider text-zinc-600">Available for new projects</span>
</div>
</div>
<h1 className="reveal-child text-5xl md:text-8xl font-semibold tracking-tighter text-zinc-900 leading-[0.95] mb-6">
                    Digital craftsmanship <br/>
<span className="text-zinc-400">that performs.</span>
</h1>
<p className="reveal-child text-sm md:text-base text-zinc-500 font-normal leading-relaxed max-w-lg tracking-tight mb-10">
                    A curated archive of selected works focusing on interface design, brand identity, and interactive motion for ambitious startups.
                </p>
<div className="reveal-child flex items-center gap-4">
<button className="px-6 py-3 bg-zinc-900 text-white text-xs font-medium rounded-full tracking-tight hover:bg-zinc-800 transition-all hover:scale-105 shadow-lg shadow-zinc-200" onclick="document.getElementById('nav-anchor').scrollIntoView({behavior: 'smooth'})">
                        View selected works
                     </button>
</div>
</div>

<div className="absolute bottom-12 w-full flex justify-center animate-float">
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Scroll for projects</span>
<span className="iconify text-zinc-400" data-icon="lucide:arrow-down" data-width="16"></span>
</div>
</div>
</section>


<div className="snap-nav sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300" id="nav-anchor">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xs font-medium text-zinc-400 uppercase tracking-wider hidden md:block">Filter by Category</div>
<div className="flex items-center gap-1 bg-zinc-100/50 p-1 rounded-full mx-auto md:mx-0">
<button className="tab-btn active px-4 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-full tracking-tight transition-all duration-300 hover:shadow-sm" onclick="filterProjects('web', this)">Web</button>
<button className="tab-btn px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-full tracking-tight transition-all duration-300" onclick="filterProjects('branding', this)">Branding</button>
<button className="tab-btn px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-full tracking-tight transition-all duration-300" onclick="filterProjects('motion', this)">Motion</button>
<button className="tab-btn px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-full tracking-tight transition-all duration-300" onclick="filterProjects('graphic', this)">Graphic</button>
</div>
<div className="text-xs font-medium text-zinc-400 hidden md:block w-24 text-right" id="project-count">5 Projects</div>
</div>
</div>

<div className="min-h-screen bg-white" id="projects-list">

</div>

<section className="snap-section w-full h-screen bg-zinc-900 text-white flex items-center justify-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_40%)]"></div>
<div className="relative z-10 max-w-2xl text-center px-6">
<div className="mb-8 flex justify-center">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
<span className="iconify text-white" data-icon="lucide:calendar-check" data-width="32"></span>
</div>
</div>
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-6">
                    Ready to define <br/> your future?
                </h2>
<p className="text-zinc-400 text-sm md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                    We are currently accepting new partnerships for Q4 2024. Let's discuss how we can elevate your digital presence.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-4 bg-white text-zinc-900 text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors hover:scale-105 duration-300">
                        Book a discovery call
                    </button>
<button className="w-full md:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors">
                        Download capabilities deck
                    </button>
</div>
</div>
</section>

<div className="snap-section h-[50vh] w-full bg-zinc-50 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden border-t border-zinc-200">
<div className="relative z-10 flex flex-col items-center">
<a className="text-2xl font-bold tracking-tighter mb-8 block text-zinc-900" href="#">DESIGN MENU</a>
<div className="flex gap-8 mb-12">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300 text-xs uppercase tracking-widest font-medium" href="#">Twitter</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300 text-xs uppercase tracking-widest font-medium" href="#">Instagram</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300 text-xs uppercase tracking-widest font-medium" href="#">LinkedIn</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300 text-xs uppercase tracking-widest font-medium" href="#">Email</a>
</div>
<p className="text-zinc-300 text-[10px] tracking-tight">© 2024 Design Menu Inc. All rights reserved.</p>
</div>
</div>
</main>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 mix-blend-difference text-white pointer-events-none">
<div className="w-0.5 h-12 bg-white/20 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-white transition-all duration-300 h-0" id="scroll-progress"></div>
</div>
</div>


    </>
  );
}
