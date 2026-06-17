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
  


            (function() {
                // New Data Configuration with updated images
                const newData = [
                    {
                        id: "01",
                        sub: "Module 01",
                        title: "Foundations of<br>Topology",
                        desc: "Master the basics of 3D geometry. Learn proper edge flow, polygon management, and how to build clean models ready for animation and complex deformation.",
                        img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e135f35b-eaeb-4b52-b2df-a9690249ff63_1600w.jpg"
                    },
                    {
                        id: "02",
                        sub: "Module 02",
                        title: "Advanced Shading<br>Techniques",
                        desc: "Dive deep into material creation. Understand PBR workflows, procedural textures, and node-based shader construction to create realistic surfaces.",
                        img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d38370-5873-45cf-bab1-60a7b923dc6e_1600w.jpg"
                    },
                    {
                        id: "03",
                        sub: "Module 03",
                        title: "Physics & Kinetic<br>Dynamics",
                        desc: "Bring your scenes to life with rigid body simulations, soft body dynamics, and particle systems that obey the laws of physics for organic movement.",
                        img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_1600w.jpg"
                    },
                    {
                        id: "04",
                        sub: "Deep Dive",
                        title: "Cinematic Lighting<br>Essentials",
                        desc: "Understand the physical properties of light. Learn to construct studio setups, volumetric environments, and dramatic moods that elevate your renders from flat to photorealistic.",
                        img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_1600w.webp"
                    }
                ];
                
                // Initialize Carousel
                const initCarousel = () => {
                    let current = 0;
                    const img = document.getElementById('crs-img-v2');
                    const num = document.getElementById('crs-num-v2');
                    
                    // Access sibling elements
                    const sub = document.getElementById('crs-sub');
                    const title = document.getElementById('crs-title');
                    const desc = document.getElementById('crs-desc');
                    const dots = document.getElementById('crs-dots');
                    const btnPrev = document.getElementById('btn-prev');
                    const btnNext = document.getElementById('btn-next');
                    
                    if (!img || !num || !sub || !btnPrev) return;
        
                    function renderDots() {
                        dots.innerHTML = '';
                        newData.forEach((_, i) => {
                            const btn = document.createElement('button');
                            btn.innerText = '0' + (i + 1);
                            btn.className = i === current ? 'text-white transition-colors duration-300' : 'text-slate-600 hover:text-slate-400 transition-colors duration-300';
                            btn.onclick = () => go(i);
                            dots.appendChild(btn);
                        });
                    }
                    
                    function go(index) {
                        if (index === current) return;
                        current = index;
                        
                        // Animate Out
                        img.classList.remove('opacity-80');
                        img.classList.add('opacity-0', 'scale-105');
                        [sub, title, desc, num].forEach(el => el.classList.add('opacity-0', 'translate-y-4'));
                        
                        setTimeout(() => {
                            const d = newData[current];
                            img.src = d.img;
                            num.innerText = d.id;
                            sub.innerText = d.sub;
                            title.innerHTML = d.title;
                            desc.innerText = d.desc;
                            
                            renderDots();
                            
                            // Animate In
                            requestAnimationFrame(() => {
                                img.classList.remove('opacity-0', 'scale-105');
                                img.classList.add('opacity-80');
                                [sub, title, desc, num].forEach(el => el.classList.remove('opacity-0', 'translate-y-4'));
                            });
                        }, 300);
                    }
                    
                    // Clone buttons to strip old event listeners
                    const newBtnPrev = btnPrev.cloneNode(true);
                    const newBtnNext = btnNext.cloneNode(true);
                    if (btnPrev.parentNode) btnPrev.parentNode.replaceChild(newBtnPrev, btnPrev);
                    if (btnNext.parentNode) btnNext.parentNode.replaceChild(newBtnNext, btnNext);
                    
                    newBtnPrev.addEventListener('click', () => {
                        const next = (current - 1 + newData.length) % newData.length;
                        go(next);
                    });
                    
                    newBtnNext.addEventListener('click', () => {
                        const next = (current + 1) % newData.length;
                        go(next);
                    });
                    
                    renderDots();
                };

                // Wait for DOM content to be ready (ensure sibling elements exist)
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', initCarousel);
                } else {
                    initCarousel();
                }
            })();
          


        (function() {
            const data = [
                {
                    id: "01",
                    sub: "Module 01",
                    title: "Foundations of<br>Topology",
                    desc: "Master the basics of 3D geometry. Learn proper edge flow, polygon management, and how to build clean models ready for animation and complex deformation.",
                    img: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80"
                },
                {
                    id: "02",
                    sub: "Module 02",
                    title: "Advanced Shading<br>Techniques",
                    desc: "Dive deep into material creation. Understand PBR workflows, procedural textures, and node-based shader construction to create realistic surfaces.",
                    img: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80"
                },
                {
                    id: "03",
                    sub: "Module 03",
                    title: "Physics & Kinetic<br>Dynamics",
                    desc: "Bring your scenes to life with rigid body simulations, soft body dynamics, and particle systems that obey the laws of physics for organic movement.",
                    img: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80"
                },
                {
                    id: "04",
                    sub: "Deep Dive",
                    title: "Cinematic Lighting<br>Essentials",
                    desc: "Understand the physical properties of light. Learn to construct studio setups, volumetric environments, and dramatic moods that elevate your renders from flat to photorealistic.",
                    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3d4d588-f8cc-4129-8a9b-d0f004d15ab4_1600w.webp"
                }
            ];
            
            let current = 3;
            const img = document.getElementById('crs-img');
            const num = document.getElementById('crs-num');
            const sub = document.getElementById('crs-sub');
            const title = document.getElementById('crs-title');
            const desc = document.getElementById('crs-desc');
            const dots = document.getElementById('crs-dots');
            
            function renderDots() {
                dots.innerHTML = '';
                data.forEach((_, i) => {
                    const btn = document.createElement('button');
                    btn.innerText = '0' + (i + 1);
                    btn.className = i === current ? 'text-white transition-colors duration-300' : 'text-slate-600 hover:text-slate-400 transition-colors duration-300';
                    btn.onclick = () => go(i);
                    dots.appendChild(btn);
                });
            }
            
            function go(index) {
                if (index === current) return;
                current = index;
                
                // Animate Out
                img.classList.remove('opacity-80');
                img.classList.add('opacity-0', 'scale-105');
                [sub, title, desc, num].forEach(el => el.classList.add('opacity-0', 'translate-y-4'));
                
                setTimeout(() => {
                    // Update content
                    const d = data[current];
                    img.src = d.img;
                    num.innerText = d.id;
                    sub.innerText = d.sub;
                    title.innerHTML = d.title;
                    desc.innerText = d.desc;
                    
                    renderDots();
                    
                    // Animate In
                    requestAnimationFrame(() => {
                        img.classList.remove('opacity-0', 'scale-105');
                        img.classList.add('opacity-80');
                        [sub, title, desc, num].forEach(el => el.classList.remove('opacity-0', 'translate-y-4'));
                    });
                }, 300);
            }
            
            document.getElementById('btn-prev').addEventListener('click', () => {
                const next = (current - 1 + data.length) % data.length;
                go(next);
            });
            
            document.getElementById('btn-next').addEventListener('click', () => {
                const next = (current + 1) % data.length;
                go(next);
            });
            
            renderDots();
        })();
      


    (function() {
      const yearBtns = document.querySelectorAll('.year-btn');
      
      yearBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          yearBtns.forEach(b => {
            b.classList.remove('text-orange-400', 'border-orange-400', 'border-b-2', '-mb-8.5', 'active-year');
            b.classList.add('text-slate-500');
          });
          
          this.classList.remove('text-slate-500');
          this.classList.add('text-orange-400', 'border-orange-400', 'border-b-2', '-mb-8.5', 'active-year');
          
          const year = this.dataset.year;
          console.log('Selected year:', year);
        });
      });
    })();
  


        (function() {
          const carousel = document.getElementById('showcase-carousel');
          const prevBtn = document.getElementById('showcase-prev');
          const nextBtn = document.getElementById('showcase-next');
          
          let currentIndex = 0;
          const totalCards = 6;
          const visibleCards = window.innerWidth >= 768 ? 3 : 1;
          const maxIndex = totalCards - visibleCards;
          
          function getCardWidth() {
            const card = carousel.children[0];
            if (card) {
              return card.offsetWidth + 32; // card width + gap
            }
            return 0;
          }
          
          function updateCarousel() {
            const cardWidth = getCardWidth();
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
          }
          
          prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
              currentIndex--;
            } else {
              currentIndex = maxIndex;
            }
            updateCarousel();
          });
          
          nextBtn.addEventListener('click', function() {
            if (currentIndex < maxIndex) {
              currentIndex++;
            } else {
              currentIndex = 0;
            }
            updateCarousel();
          });
          
          window.addEventListener('resize', function() {
            const newVisibleCards = window.innerWidth >= 768 ? 3 : 1;
            const newMaxIndex = totalCards - newVisibleCards;
            if (currentIndex > newMaxIndex) {
              currentIndex = newMaxIndex;
            }
            updateCarousel();
          });
        })();
      


      function switchPlan(plan) {
        const btnMonthly = document.getElementById('btn-monthly');
        const btnYearly = document.getElementById('btn-yearly');
        const activePill = document.getElementById('active-pill');
        const card1 = document.getElementById('price-card-1');
        const card2 = document.getElementById('price-card-2');
        const card3 = document.getElementById('price-card-3');
        
        // Configuration
        const prices = {
          monthly: ['$49', '$99', '$249'],
          yearly: ['$499', '$999', '$2,499']
        };
        const periods = {
          monthly: '/mo',
          yearly: '/year'
        };

        // UI State Update
        if (plan === 'monthly') {
          activePill.style.transform = 'translateX(0%)';
          
          btnMonthly.classList.add('text-white', 'font-semibold');
          btnMonthly.classList.remove('text-slate-400', 'font-medium');
          
          btnYearly.classList.add('text-slate-400', 'font-medium');
          btnYearly.classList.remove('text-white', 'font-semibold');
        } else {
          activePill.style.transform = 'translateX(100%)';
          
          btnYearly.classList.add('text-white', 'font-semibold');
          btnYearly.classList.remove('text-slate-400', 'font-medium');
          
          btnMonthly.classList.add('text-slate-400', 'font-medium');
          btnMonthly.classList.remove('text-white', 'font-semibold');
        }
        
        // Content Update with Fade Transition
        const updateText = () => {
          [card1, card2, card3].forEach((card, index) => {
            card.querySelector('.price-amount').textContent = prices[plan][index];
            card.querySelector('.price-period').textContent = periods[plan];
          });
        };

        // Animation Sequence
        [card1, card2, card3].forEach(card => card.classList.add('opacity-0'));
        setTimeout(() => {
          updateText();
          [card1, card2, card3].forEach(card => card.classList.remove('opacity-0'));
        }, 300);
      }
    
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px] hue-rotate-90 brightness-125 opacity-40" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<div className="fixed inset-0 z-0 bg-grid-pattern bg-[length:4rem_4rem] pointer-events-none"></div>

<nav className="z-50 sticky bg-[#0b0c15]/60 w-full border-white/5 border-b top-0 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b763a66-5dbf-4079-af7e-a616cc333698_320w.png)] bg-cover rounded-full" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-slate-400 uppercase">
<a className="flex items-center gap-2 text-white border-b pb-0.5 border-cyan-400" href="#" style={{}}>
<iconify-icon className="text-cyan-400" icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
          Curriculum
        </a>
<a className="hover:text-white transition-colors" href="#">Workshops</a>
<a className="hover:text-white transition-colors" href="#">Mentors</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium tracking-widest text-slate-400 uppercase hover:text-white transition-colors" href="#">
        Log In
      </a>
<button className="text-white" style={{}}>
<iconify-icon icon="solar:hamburger-menu-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="z-10 overflow-hidden border-white/5 border-b pt-20 pb-32 relative">

<div className="max-w-7xl mx-auto px-6 relative">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full animate-pulse bg-cyan-500"></span>
<span className="text-xs font-medium tracking-widest uppercase text-cyan-300">
              Next Cohort: Oct 12, 2024
            </span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-white mb-8 text-glow" style={{}}>
            Advanced
            <br/>
            Kinetic
            <br/>
            Systems 3D
          </h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed mb-10">
            Master procedural modeling and kinetic animation techniques. A
            12-week deep dive into the future of motion design.
          </p>
</div>

<div className="-right-20 -translate-y-1/2 hidden lg:block w-[600px] h-[600px] absolute top-1/2">
<img alt="Sphere" className="opacity-90 w-full h-full object-contain rounded-full drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6add742-6a55-445d-b07d-92ef48d3c652_1600w.jpg"/>
</div>
</div>
</header>

<section className="border-b border-white/5 relative z-20 bg-dark/50 backdrop-blur-md">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 max-w-7xl mx-auto">

<div className="p-8 group hover:bg-white/[0.02] transition-colors cursor-pointer">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 block">
            Module 01
          </span>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 transition-colors group-hover:text-cyan-400" style={{}}>
            Foundations
          </h3>
<p className="text-sm text-slate-400">Topology &amp; Forms</p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors cursor-pointer">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 block">
            Module 02
          </span>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 transition-colors group-hover:text-cyan-400" style={{}}>
            Shading
          </h3>
<p className="text-sm text-slate-400">Advanced Textures</p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors cursor-pointer">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 block">
            Module 03
          </span>
<h3 className="text-xl font-medium text-white tracking-tight mb-1 transition-colors group-hover:text-cyan-400" style={{}}>
            Dynamics
          </h3>
<p className="text-sm text-slate-400">Physics Engines</p>
</div>

<div className="relative p-8 bg-panel border-b-2 md:border-b-0 md:border-t-2 border-cyan-500 md:border-t-cyan-500">
<div className="absolute inset-0 bg-cyan-500/5"></div>
<span className="relative text-xs font-medium uppercase tracking-widest mb-2 block text-cyan-400">
            Module 04
          </span>
<h3 className="relative text-xl font-medium text-white tracking-tight mb-1" style={{}}>
            Lighting
          </h3>
<p className="relative text-sm text-slate-400">Cinematic Render</p>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-b relative">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] max-w-7xl mr-auto ml-auto">

<div className="lg:border-b-0 lg:border-r flex border-white/5 border-b pt-12 pr-12 pb-12 pl-12 relative items-center justify-center">

<div className="aspect-square w-full max-w-md relative">
<img alt="Futuristic red-lit VR headset portrait" className="transition-all duration-500 ease-out transform mix-blend-lighten w-full h-full object-cover" id="crs-img-v2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e135f35b-eaeb-4b52-b2df-a9690249ff63_1600w.jpg"/>
<div className="absolute bottom-10 left-10 text-9xl font-semibold text-white/5 select-none transition-all duration-500 ease-out transform" id="crs-num-v2">01</div>
</div>

</div>

<div className="p-12 lg:p-20 flex flex-col justify-center">
<span className="text-xs font-medium uppercase tracking-widest mb-6 block transition-all duration-300 ease-out transform text-cyan-400" id="crs-sub">Module 01</span>
<h2 className="lg:text-5xl transition-all duration-300 ease-out min-h-[2.4em] transform text-4xl font-medium text-white tracking-tight mb-6" id="crs-title">Foundations of Topology</h2>
<p className="text-lg text-slate-400 mb-10 leading-relaxed font-light transition-all duration-300 ease-out min-h-[6em] transform" id="crs-desc">Master the basics of 3D geometry. Learn proper edge flow, polygon management, and how to build clean models ready for animation and complex deformation.</p>
<div className="flex items-center gap-8 mb-16">
<button className="text-dark uppercase hover:bg-slate-700 transition-colors text-xs font-semibold tracking-widest bg-slate-800 pt-4 pr-8 pb-4 pl-8">
              View Syllabus
            </button>
<a className="text-xs font-semibold tracking-widest uppercase text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#" style={{}}>
              Download Assets
            </a>
</div>

<div className="flex items-center gap-1 border border-white/10 w-fit p-1">
<button className="flex hover:bg-white/5 hover:text-white transition-colors group text-slate-400 w-12 h-12 border-white/5 border-r items-center justify-center" id="btn-prev">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="flex hover:bg-white/5 hover:text-white transition-colors group text-slate-400 w-12 h-12 items-center justify-center" id="btn-next">
<svg className="group-hover:translate-x-0.5 transition-transform" data-icon-set="solar" data-solar="arrow-right-linear" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
<div className="mt-4 flex gap-6 text-xs text-slate-600 font-medium" id="crs-dots"><button className="text-white transition-colors duration-300">01</button><button className="text-slate-600 hover:text-slate-400 transition-colors duration-300">02</button><button className="text-slate-600 hover:text-slate-400 transition-colors duration-300">03</button><button className="text-slate-600 hover:text-slate-400 transition-colors duration-300">04</button></div>
</div>
</div>

</section><section className="overflow-hidden bg-[#0B0C15] border-white/5 border-b pt-24 pb-24 relative">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] blur-[100px] rounded-full pointer-events-none bg-cyan-500/10"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row md:items-end gap-8 mb-16 gap-x-8 gap-y-8 justify-between">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-none mb-6">
          The Creative
          Platform
        </h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-md font-light">
          More than just video tutorials. Access a complete ecosystem designed to accelerate your mastery of 3D motion design.
        </p>
</div>
<div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase mb-2 text-cyan-400">
<span className="w-8 h-[1px] bg-cyan-500"></span>
        Included in all plans
      </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden bg-white/10 z-20 border-white/5 border gap-x-px gap-y-px">

<div className="md:col-span-2 group overflow-hidden min-h-[320px] bg-[#0B0C15] z-20 relative">
<div className="overflow-hidden z-20 w-2/3 h-full absolute top-0 right-0">
<div className="z-10 bg-gradient-to-r from-[#0B0C15] via-[#0B0C15]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Assets" className="group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105 opacity-40 w-full h-full object-cover z-20 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2a6572b-2fda-41e6-833d-041a0b24681f_1600w.webp"/>
</div>
<div className="z-20 flex flex-col h-full pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="flex transition-colors text-white bg-white/5 w-12 h-12 border-white/10 border rounded-full mb-6 items-center justify-center group-hover:border-cyan-500/50 group-hover:text-cyan-400">
<svg className="" data-icon-set="solar" data-solar="box-minimalistic-bold-duotone" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073l-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z" fill="currentColor"></path><path className="" d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" fill="currentColor" opacity=".7"></path><path className="" d="m21.403 7.14l-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Production Assets</h3>
<p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Download over 500GB of project files, 4K textures, HDRI maps, and procedural nodes. Yours to keep and use in commercial work.
            </p>
</div>
</div>
</div>

<div className="bg-[#0B0C15] group relative overflow-hidden min-h-[320px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-20 p-10 flex flex-col justify-between h-full">
<div className="flex transition-colors text-white bg-white/5 w-12 h-12 border-white/10 border rounded-full mb-6 items-center justify-center group-hover:border-cyan-500/50 group-hover:text-cyan-400">
<svg className="" data-icon-set="solar" data-solar="infinity-bold-duotone" height="1em" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">4K HDR Player</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Experience every detail with our custom high-bitrate streaming player. Smart chapters and timestamped discussions included.
            </p>
</div>
</div>
</div>

<div className="bg-[#0B0C15] group relative overflow-hidden min-h-[320px]">
<div className="z-20 flex flex-col h-full pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="flex transition-colors text-white bg-white/5 w-12 h-12 border-white/10 border rounded-full mb-6 items-center justify-center group-hover:border-cyan-500/50 group-hover:text-cyan-400">
<svg className="w-[24px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="users-group-rounded-bold-duotone" height="16" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '24px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="15" cy="6" fill="#fb923c" opacity=".4" r="3"></circle><ellipse cx="16" cy="17" fill="#fb923c" opacity=".4" rx="5" ry="3"></ellipse><circle cx="9.001" cy="6" fill="#fb923c" r="4"></circle><ellipse cx="9.001" cy="17.001" fill="#fb923c" rx="7" ry="4"></ellipse></svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Private Discord</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Join 5,000+ alumni. Get feedback on your work, find collaboration partners, and access exclusive job postings.
            </p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#0B0C15] group relative overflow-hidden min-h-[320px]">

<div className="-bottom-24 -right-24 transition-all duration-700 group-hover:opacity-40 group-hover:rotate-12 opacity-20 w-96 h-96 absolute">
<img alt="Abstract" className="mask-image-radial group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105 opacity-40 mix-blend-screen w-full h-full object-cover z-20 rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea262fd9-14f0-4917-be69-86fd3b302ccd_800w.webp"/>
</div>
<div className="flex flex-col z-20 h-full pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="flex transition-colors text-white bg-white/5 w-12 h-12 border-white/10 border rounded-full mb-6 items-center justify-center group-hover:border-cyan-500/50 group-hover:text-cyan-400">
<svg className="" data-icon-set="solar" data-solar="infinity-bold-duotone" height="1em" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="max-w-lg relative">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Lifetime Curriculum Updates</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              The industry moves fast. We push quarterly updates to cover new features in Blender, Cinema 4D, and Unreal Engine 5 at no extra cost to enrolled students.
            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-white/5 border-b pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-none mb-4" style={{}}>
              Industry
              
              Mentors
            </h2>
</div>
<div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase mb-2 text-cyan-400">
<span className="w-8 h-[1px] bg-cyan-500"></span>
            Learn from the best
          </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">

<div className="bg-panel p-0 group relative overflow-hidden">
<div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
<img alt="Mentor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15caab24-bf25-496e-99c0-b00f6f4de74f_1600w.webp"/>

<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-panel via-transparent to-transparent"></div>
</div>
<div className="pt-10 pr-10 pb-10 pl-10 relative">
<div className="-top-6 flex gap-2 absolute right-8 gap-x-2 gap-y-2">
<a className="flex items-center justify-center hover:bg-slate-600 transition-colors text-white bg-slate-700 w-10 h-10 rounded-full" href="#">
<svg className="" data-icon-set="solar" data-solar="basketball-bold" height="1em" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M6.865 20.583A9.96 9.96 0 0 1 3.339 17A9.96 9.96 0 0 1 2 12.159l.145.028c2.949.581 6.304-.469 9.061-2.162q.545-.334 1.065-.706c.413.516.783 1.04 1.08 1.556c.375.647.713 1.417 1.015 2.24q-.778.377-1.508.822c-2.792 1.699-5.174 4.176-5.992 6.644zm9.395.465a10 10 0 0 1-8.04.21l.069-.204c.663-2.002 2.72-4.237 5.348-5.836q.592-.36 1.206-.667c.252.83.471 1.671.655 2.462a51 51 0 0 1 .699 3.597l.008.053l.002.012v.004z" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M16.226 13.943c1.887-.72 3.811-.996 5.477-.63l.204.045a10 10 0 0 1-.71 2.57a9.95 9.95 0 0 1-3.538 4.317l-.013-.079a52 52 0 0 0-.687-3.494a40 40 0 0 0-.733-2.73m-2.773-5.545c1.728-1.469 3.087-3.21 3.672-4.949l.01-.03A9.96 9.96 0 0 1 20.66 7A9.95 9.95 0 0 1 22 11.842c-1.995-.431-4.186-.1-6.256.68c-.32-.864-.685-1.687-1.094-2.397a14 14 0 0 0-1.197-1.728M8.319 3.454a35 35 0 0 0-.6-.465l-.023-.016a9.95 9.95 0 0 1 5.5-.902c.887.107 1.757.333 2.584.67l-.077.229c-.477 1.418-1.65 2.95-3.228 4.29a32 32 0 0 0-2.203-2.16A42 42 0 0 0 8.32 3.453m2.1 5.294c-2.586 1.588-5.55 2.449-7.987 1.969l-.342-.068a10 10 0 0 1 4.19-6.853l.328.239l.002.001l.01.007l.039.029l.154.115a40 40 0 0 1 2.456 2.03c.66.592 1.358 1.26 2.013 1.965q-.42.293-.863.566" fill="currentColor"></path></svg>
</a>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-1" style={{}}>
                Elena Rostova
              </h3>
<p className="text-xs uppercase tracking-widest mb-4 text-cyan-400">
                Lead Art Director
              </p>
<p className="text-sm text-slate-500">Polygon Studios</p>
</div>
</div>

<div className="bg-panel p-0 group relative overflow-hidden">
<div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
<img alt="Mentor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f4590c0-f760-4c47-8347-9ed5701903e6_1600w.webp"/>
<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-panel via-transparent to-transparent"></div>
</div>
<div className="p-10 relative">
<div className="-top-6 flex gap-2 absolute right-8 gap-x-2 gap-y-2">
<a className="flex items-center justify-center hover:bg-slate-600 transition-colors text-white bg-slate-700 w-10 h-10 rounded-full" href="#">
<iconify-icon className="" icon="solar:basketball-bold" width="18"></iconify-icon>
</a>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight mb-1" style={{}}>
                Marcus Thorne
              </h3>
<p className="text-xs uppercase tracking-widest mb-4 text-cyan-400">
                Senior Motion Dev
              </p>
<p className="text-sm text-slate-500">Spectra Inc.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row border-white/5 border-b mb-16 pb-8 items-end justify-between">
<div className="flex gap-8 text-sm font-medium">
<button className="text-slate-500 hover:text-white transition-colors year-btn" data-year="2022">
      2022
    </button>
<button className="text-slate-500 hover:text-white transition-colors year-btn" data-year="2023">
      2023
    </button>
<button className="-mb-8.5 border-b-2 year-btn active-year text-cyan-400 border-cyan-400" data-year="2024">
      2024
    </button>
<button className="text-slate-500 hover:text-white transition-colors year-btn" data-year="2025">
      2025
    </button>
</div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mt-8 md:mt-0">
    Student
    Showcase
  </h2>

</div>

<div className="relative">

<div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, #0B0C15 0%, transparent 100%)'}}></div>

<div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, #0B0C15 0%, transparent 100%)'}}></div>

<div className="overflow-hidden">
<div className="flex transition-transform duration-500 ease-out gap-x-8 gap-y-8" id="showcase-carousel" style={{transform: 'translateX(-1263px)'}}>

<div className="group relative flex-shrink-0 w-full md:w-[calc(33.333%-1.33rem)]">
<div className="aspect-[4/5] bg-slate-800 overflow-hidden relative">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96e3ccfa-3799-4c9c-9f2a-263c0ff6a449_800w.webp"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-2xl font-medium text-white mb-2" style={{}}>
                      Sarah Jenkins
                    </h4>
<div className="flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-slate-300">
                        Kinetic Typography
                      </span>
<button className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10" style={{}}>
                        View
                      </button>
</div>
</div>
</div>
</div>

<div className="group flex-shrink-0 md:w-[calc(33.333%-1.33rem)] w-full relative">
<div className="aspect-[4/5] overflow-hidden border-white/5 border relative">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-105 mix-blend-lighten w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a032328b-a082-425f-8870-b5222565e31f_800w.webp" style={{}}/>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{}}>
<span className="text-[180px] font-bold text-white opacity-75 mix-blend-overlay">
                      R
                    </span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-2xl font-medium text-white mb-2" style={{}}>David Kim</h4>
<div className="flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-slate-300">
                        Abstract Geo
                      </span>
<button className="px-3 py-1 rounded text-xs text-white shadow-lg bg-cyan-600 shadow-cyan-500/30" style={{}}>
                        Winner
                      </button>
</div>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-full md:w-[calc(33.333%-1.33rem)]">
<div className="aspect-[4/5] bg-slate-800 overflow-hidden relative">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-2xl font-medium text-white mb-2" style={{}}>Alex Chen</h4>
<div className="flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-slate-300">
                        Product Vis
                      </span>
<button className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10" style={{}}>
                        View
                      </button>
</div>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-full md:w-[calc(33.333%-1.33rem)]">
<div className="aspect-[4/5] bg-slate-800 overflow-hidden relative">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/448cc80c-2ef0-44f1-aa35-fb915bd39852_800w.webp"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-2xl font-medium text-white mb-2">Maya Thompson</h4>
<div className="flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-slate-300">
                        3D Composition
                      </span>
<button className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10">
                        View
                      </button>
</div>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-full md:w-[calc(33.333%-1.33rem)]">
<div className="aspect-[4/5] bg-slate-800 overflow-hidden relative">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dee707e7-67d1-4c28-9ed8-e0f71b46347b_800w.webp"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-2xl font-medium text-white mb-2">Jordan Lee</h4>
<div className="flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-slate-300">
                        Motion Graphics
                      </span>
<button className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10">
                        View
                      </button>
</div>
</div>
</div>
</div>

<div className="group relative flex-shrink-0 w-full md:w-[calc(33.333%-1.33rem)]">
<div className="aspect-[4/5] bg-slate-800 overflow-hidden relative">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d3f4658-ecfd-47b7-8318-ab5e0f7dba77_800w.webp"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h4 className="text-2xl font-medium text-white mb-2">Emma Wilson</h4>
<div className="flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-slate-300">
                        Digital Art
                      </span>
<button className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10">
                        View
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-4 mt-16">
<button className="flex hover:bg-white hover:text-dark transition-all text-slate-400 w-12 h-12 border-white/10 border items-center justify-center" id="showcase-prev">
<iconify-icon className="" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="flex hover:bg-white hover:text-dark transition-all text-slate-400 w-12 h-12 border-white/10 border items-center justify-center" id="showcase-next">
<iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

</section><section className="overflow-hidden border-white/5 border-b pt-32 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] blur-[120px] rounded-full pointer-events-none mix-blend-screen bg-cyan-900/10"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="w-1 h-1 rounded-full bg-cyan-500"></span>
<span className="text-xs font-medium tracking-widest uppercase text-cyan-400">
            Enrollment Open
          </span>
</div>
<h2 className="md:text-6xl text-4xl font-medium text-white tracking-tight mb-6" style={{}}>
          Invest in your
          
          creative future
        </h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-md">
          Choose the learning path that fits your schedule. All plans include lifetime access to course materials and project files.
        </p>
</div>

<div className="flex bg-white/5 border-white/5 border rounded-full p-1 backdrop-blur-sm items-center relative isolation-auto">

<div className="absolute top-1 bottom-1 left-1 w-32 bg-[#ffffff]/10 rounded-full shadow-lg shadow-white/5 transition-transform duration-300 ease-out z-0" id="active-pill" style={{transform: 'translateX(0%)', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}></div>
<button className="relative z-10 w-32 py-2.5 text-xs font-semibold tracking-widest uppercase text-white transition-colors duration-300" id="btn-monthly" onclick="switchPlan('monthly')">
          Monthly
        </button>
<button className="relative z-10 w-32 py-2.5 text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-300" id="btn-yearly" onclick="switchPlan('yearly')">
          Yearly
        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group md:p-10 hover:bg-white/[0.02] transition-all duration-300 flex flex-col overflow-hidden bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 pt-8 pr-8 pb-8 pl-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<div className="mb-8">
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4 block">
            Independent
          </span>
<div className="flex items-baseline gap-1 transition-opacity duration-300" id="price-card-1">
<span className="text-4xl font-medium text-white tracking-tight price-amount">$49</span>
<span className="text-sm text-slate-500 font-medium price-period">/mo</span>
</div>
</div>
<p className="text-sm text-slate-400 mb-8 pb-8 border-b border-white/5 leading-relaxed">
          Perfect for self-driven learners who want to master the curriculum at their own pace.
        </p>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Full 12-Week Curriculum</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Project Files &amp; Assets</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Lifetime Updates</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-500 line-through decoration-slate-600/50">
<svg className="text-slate-600 mt-0.5 text-lg shrink-0" data-icon-set="solar" data-solar="close-circle-linear" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
<span className="">Mentor Feedback</span>
</li>
</ul>
<button className="uppercase hover:bg-slate-800 hover:text-dark transition-all duration-300 group-hover:border-white text-xs font-semibold text-white tracking-widest w-full border-white/10 border pt-4 pb-4">
          Start Learning
        </button>
</div>

<div className="md:p-10 flex flex-col overflow-hidden pt-8 pr-8 pb-8 pl-8 relative bg-cyan-950/10" style={{position: 'relative', '--border-gradient': 'linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(234, 88, 12, 0.5), rgba(255, 255, 255, 0))', maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'}}>

<div className="absolute inset-0 bg-gradient-to-b via-transparent to-transparent pointer-events-none from-cyan-500/5"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-50 via-cyan-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="">
<span className="text-xs font-semibold tracking-widest uppercase mb-4 block text-cyan-400">
                Live Cohort
              </span>
<div className="flex items-baseline gap-1 transition-opacity duration-300" id="price-card-2">
<span className="text-4xl font-medium text-white tracking-tight text-glow price-amount">$99</span>
<span className="text-sm text-slate-400 font-medium price-period">/mo</span>
</div>
</div>
<span className="text-white text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded shadow-lg bg-cyan-500 shadow-cyan-500/20" style={{}}>
              Popular
            </span>
</div>
<p className="text-sm mb-8 pb-8 border-b leading-relaxed text-cyan-100/70 border-cyan-500/20">
            The complete experience. Join a global class of artists with weekly live sessions and reviews.
          </p>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-white" style={{}}>
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Everything in Independent</span>
</li>
<li className="flex items-start gap-3 text-sm text-white" style={{}}>
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Weekly Live Q&amp;A Sessions</span>
</li>
<li className="flex items-start gap-3 text-sm text-white" style={{}}>
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Professional Assignment Review</span>
</li>
<li className="flex items-start gap-3 text-sm text-white" style={{}}>
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span>Private Discord Community</span>
</li>
</ul>
<button className="w-full py-4 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/20 hover:shadow-cyan-600/40" style={{}}>
            Secure Your Spot
          </button>
</div>
</div>

<div className="group md:p-10 hover:bg-white/[0.02] transition-all duration-300 flex flex-col overflow-hidden bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 px-8 py-8 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<div className="mb-8">
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4 block">
            Mentorship
          </span>
<div className="flex items-baseline gap-1 transition-opacity duration-300" id="price-card-3">
<span className="text-4xl font-medium text-white tracking-tight price-amount">$249</span>
<span className="text-sm text-slate-500 font-medium price-period">/mo</span>
</div>
</div>
<p className="text-sm text-slate-400 mb-8 pb-8 border-b border-white/5 leading-relaxed">
          Direct 1-on-1 guidance for professionals looking to fast-track their career growth.
        </p>
<ul className="flex flex-col gap-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span>Everything in Cohort</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">4x 1-on-1 Strategy Calls</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span>Portfolio Direction</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 text-lg shrink-0 text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Agency Referral Network</span>
</li>
</ul>
<button className="uppercase hover:bg-slate-800 hover:text-dark transition-all duration-300 group-hover:border-white text-xs font-semibold text-white tracking-widest w-full border-white/10 border pt-4 pb-4">
          Apply for Mentorship
        </button>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
        Trusted by artists at top studios
      </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-30 grayscale mix-blend-screen select-none">
<span className="text-lg font-bold text-white tracking-tight">Google</span>
<span className="text-lg font-bold font-serif text-white" style={{}}>Apple</span>
<span className="text-lg font-bold font-sans text-white tracking-tighter" style={{}}>Meta</span>
<span className="text-lg font-bold font-mono text-white" style={{}}>Netflix</span>
<span className="text-lg font-bold font-sans text-white italic" style={{}}>Nike</span>
<span className="text-lg font-bold font-sans text-white" style={{}}>Buck</span>
</div>
</div>

</div>
</section>

<footer className="overflow-hidden border-white/5 border-t pt-20 pb-10 relative">

<div className="-translate-x-1/2 pointer-events-none bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-30 w-[800px] h-[800px] rounded-full absolute bottom-0 left-1/2 blur-3xl translate-y-1/3" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
<div className="flex flex-col justify-between h-full">
<a className="inline-flex items-center justify-center bg-center w-[140px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b763a66-5dbf-4079-af7e-a616cc333698_320w.png)] bg-cover rounded-full" href="#"></a>
<div className="mt-auto">
<div className="flex gap-4 mb-8">
<a className="flex items-center justify-center hover:text-white hover:border-white transition-all bg-center text-slate-400 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e66c0296-2c66-4807-ab74-9626c9bf90ca_320w.webp)] bg-cover border-white/10 border rounded-full" href="#">
<iconify-icon icon="solar:facebook-bold" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:text-white hover:border-white transition-all bg-center text-slate-400 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3f33b24-5083-4ed7-890e-acca5261bec4_320w.webp)] bg-cover border-white/10 border rounded-full" href="#">
<iconify-icon icon="solar:twitter-bold" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:text-white hover:border-white transition-all bg-center text-slate-400 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45346b2f-1ebf-4fd1-ad60-5f4c935b534f_320w.webp)] bg-cover border-white/10 border rounded-full" href="#">
<iconify-icon icon="solar:instagram-bold" width="16"></iconify-icon>
</a>
</div>
<p className="text-xs text-slate-600">
                Copyright © FLUX 2024. All rights reserved.
              </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col gap-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Platform
              </h5>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                Courses
              </a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                Workshops
              </a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                Podcast
              </a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Company
              </h5>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                About
              </a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                Careers
              </a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                Contact
              </a>
</div>

<div className="col-span-2 md:col-span-2 pt-8 md:pt-0 border-t md:border-t-0 border-white/5">
<h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4" style={{}}>
                Subscribe to updates
              </h5>
<form className="flex flex-col gap-4">
<input className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors w-full focus:border-cyan-500" placeholder="Enter your email" style={{}} type="email"/>
<button className="uppercase hover:bg-slate-800 hover:text-dark transition-all duration-300 group-hover:border-white text-xs font-semibold text-white tracking-widest w-full border-white/10 border pt-4 pb-4">
                  Subscribe
                </button>
</form>
</div>
</div>
</div>
</div>

</footer>

    </>
  );
}
