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
  


      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Parallax Background Logic
        const parallaxGrid = document.getElementById('parallax-grid');
        const glow1 = document.getElementById('parallax-glow-1');
        const glow2 = document.getElementById('parallax-glow-2');

        window.addEventListener('scroll', () => {
          const scrolled = window.scrollY;
          // Move grid slowly to create depth
          if (parallaxGrid) {
            parallaxGrid.style.transform = `perspective(500px) rotateX(20deg) translateY(${scrolled * 0.2}px)`;
          }
          // Move glows at different speeds
          if (glow1) {
            glow1.style.transform = `translateY(${scrolled * 0.4}px)`;
          }
          if (glow2) {
            glow2.style.transform = `translateY(${scrolled * 0.15}px)`;
          }
        });

        // Existing Animations
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          gsap.set(".hero-eyebrow, .hero-title, .hero-subtitle, .hero-context, .hero-actions, .hero-panel, .section-content, .spotlight, .animate-on-scroll", { opacity: 1, y: 0, visibility: "visible" });
          return;
        }

        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl
          .from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
          .from(".hero-title", { y: 30, opacity: 0, duration: 1, skewY: 1 }, "-=0.6")
          .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
          .from(".hero-actions", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
          .from(".hero-panel", { y: 40, opacity: 0, duration: 1.2, filter: "blur(10px)" }, "-=0.6");

        const sections = gsap.utils.toArray(".section");

        sections.forEach((section) => {
          if (section.querySelector('.hero-title')) return;

          const spotlight = section.querySelector(".spotlight");
          const content = section.querySelector(".section-content");
          const children = section.querySelectorAll(".animate-on-scroll");

          const stTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            }
          });

          if (spotlight) {
            stTl.from(spotlight, { opacity: 0, duration: 1.2 });
          }

          if (content) {
            stTl.from(content, { y: 30, opacity: 0, duration: 0.8 }, "<+=0.1");
          }

          if (children.length > 0) {
            stTl.from(children, {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.08,
              clearProps: "all"
            }, "-=0.5");
          }
        });

        ScrollTrigger.refresh();
      });
    


      // Mobile Menu Functionality
      document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.getElementById('mobile-menu-button');
        const closeBtn = document.getElementById('close-menu-button');
        const mobileMenu = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('translate-x-full');
            if (isHidden) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
      });
    


      function switchPipeline(index) {
        const btns = document.querySelectorAll('.pipeline-btn');
        const line = document.getElementById('active-line');

        btns.forEach((btn, i) => {
          const tag = btn.querySelector('.tag-label');
          const title = btn.querySelector('h3');
          const desc = btn.querySelector('p');

          if (i === index) {
            btn.classList.add('active');
            if(tag) {
               tag.classList.remove('text-[color:var(--text-subtle)]', 'border-[color:var(--border)]', 'bg-[color:var(--bg-card)]');
               tag.classList.add('text-[color:var(--accent)]', 'bg-[color:var(--accent-soft)]', 'border-[color:var(--border)]');
            }
            if(title) {
              title.classList.remove('text-[color:var(--text-subtle)]');
              title.classList.add('text-[color:var(--text)]');
            }
             if(desc) {
              desc.classList.remove('text-[color:var(--text-subtle)]');
              desc.classList.add('text-[color:var(--text-muted)]');
            }
          } else {
            btn.classList.remove('active');
            if(tag) {
               tag.classList.remove('text-[color:var(--accent)]', 'bg-[color:var(--accent-soft)]');
               tag.classList.add('text-[color:var(--text-subtle)]', 'bg-[color:var(--bg-card)]', 'border-[color:var(--border)]');
            }
            if(title) {
              title.classList.remove('text-[color:var(--text)]');
              title.classList.add('text-[color:var(--text-subtle)]');
            }
             if(desc) {
              desc.classList.remove('text-[color:var(--text-muted)]');
              desc.classList.add('text-[color:var(--text-subtle)]');
            }
          }
        });

        if (line) line.style.top = (index * 33.33) + '%';

        const visuals = document.querySelectorAll('.pipeline-visual');
        const tagLabel = document.getElementById('pipeline-header-tag');

        const tags = ['INITIATE::ACTIVE', 'TRACK::ACTIVE', 'COMPLETE::ACTIVE'];
        if(tagLabel) tagLabel.textContent = tags[index];

        const anims = [
          { active: ['opacity-100', 'translate-x-0', 'z-10'], inactive: ['opacity-0', '-translate-x-4', 'pointer-events-none', 'z-0'] },
          { active: ['opacity-100', 'scale-100', 'z-10'], inactive: ['opacity-0', 'scale-95', 'pointer-events-none', 'z-0'] },
          { active: ['opacity-100', 'translate-y-0', 'z-10'], inactive: ['opacity-0', 'translate-y-8', 'pointer-events-none', 'z-0'] }
        ];

        visuals.forEach((vis, i) => {
          const conf = anims[i];
          if (i === index) {
            vis.classList.remove(...conf.inactive);
            vis.classList.add(...conf.active);
          } else {
            vis.classList.remove(...conf.active);
            vis.classList.add(...conf.inactive);
          }
        });
      }
    


      window.toggleHeroPanel = function(state) {
        const inputPanel = document.getElementById('panel-input');
        const outputPanel = document.getElementById('panel-output');
        const outputCard = document.getElementById('output-card');
        const btnInput = document.getElementById('btn-input');
        const btnOutput = document.getElementById('btn-output');

        if (state === 'input') {
          inputPanel.classList.remove('opacity-0', 'translate-y-4', 'z-0');
          inputPanel.classList.add('opacity-100', 'translate-y-0', 'z-10');

          outputPanel.classList.remove('opacity-100', 'translate-y-0', 'z-10');
          outputPanel.classList.add('opacity-0', 'translate-y-4', 'z-0');

          outputCard.classList.remove('scale-100');
          outputCard.classList.add('scale-95');

          btnInput.classList.remove('text-[color:var(--text-subtle)]', 'border-transparent');
          btnInput.classList.add('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');

          btnOutput.classList.remove('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');
          btnOutput.classList.add('text-[color:var(--text-subtle)]', 'border-transparent', 'hover:text-[color:var(--text)]');
        } else {
          inputPanel.classList.remove('opacity-100', 'translate-y-0', 'z-10');
          inputPanel.classList.add('opacity-0', 'translate-y-4', 'z-0');

          outputPanel.classList.remove('opacity-0', 'translate-y-4', 'z-0');
          outputPanel.classList.add('opacity-100', 'translate-y-0', 'z-10');

          setTimeout(() => {
            outputCard.classList.remove('scale-95');
            outputCard.classList.add('scale-100');
          }, 50);

          btnOutput.classList.remove('text-[color:var(--text-subtle)]', 'border-transparent');
          btnOutput.classList.add('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');

          btnInput.classList.remove('bg-[color:var(--bg-card)]', 'text-[color:var(--text)]', 'border-[color:var(--border)]');
          btnInput.classList.add('text-[color:var(--text-subtle)]', 'border-transparent', 'hover:text-[color:var(--text)]');
        }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4gq2Yrv2p0bIa0hdLPQx"></div>

</div></div>

<div className="parallax-wrapper">
<div className="bg-grid" id="parallax-grid"></div>
<div className="bg-glow-1" id="parallax-glow-1"></div>
<div className="bg-glow-2" id="parallax-glow-2"></div>
</div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-[color:var(--bg-main)]/80 backdrop-blur-md border-b border-[color:var(--border)]">
<div className="sm:px-6 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center flex-shrink-0 md:mr-4">
<iconify-icon className="text-[color:var(--accent)] text-xl mr-2" icon="solar:truck-bold"></iconify-icon>
<a className="text-[color:var(--text)] font-display text-lg sm:text-xl uppercase tracking-tighter cursor-pointer hover:opacity-80 transition-opacity" href="#home">
            S&amp;L Freight
          </a>
</div>

<div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="group relative px-1 py-2 text-[13px] font-medium text-[color:var(--text)] transition-colors tracking-tight hover:text-[color:var(--accent)]" href="#services">
            Services
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors tracking-tight" href="#network">
            Network
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors tracking-tight" href="#drivers">
            Drivers
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors tracking-tight" href="#tracking">
            Tracking
          </a>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20" id="mobile-menu-button">
<iconify-icon className="text-[color:var(--text)] text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="hidden sm:block text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors" href="#">
            Login
          </a>
<a className="text-xs px-5 py-2.5 bg-[color:var(--text)] text-[color:var(--bg-main)] font-semibold rounded tracking-tight transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white/25" href="#quote">
            Get Quote
          </a>
</div>
</div>
</nav>

<div className="fixed inset-0 z-50 bg-[color:var(--bg-main)]/95 backdrop-blur-xl translate-x-full transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8" id="mobile-menu-overlay">
<button className="absolute top-4 right-4 p-2 text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors" id="close-menu-button">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<a className="mobile-link text-2xl font-display uppercase tracking-tight text-[color:var(--text)] hover:text-[color:var(--accent)] transition-colors" href="#services">Services</a>
<a className="mobile-link text-2xl font-display uppercase tracking-tight text-[color:var(--text)] hover:text-[color:var(--accent)] transition-colors" href="#network">Network</a>
<a className="mobile-link text-2xl font-display uppercase tracking-tight text-[color:var(--text)] hover:text-[color:var(--accent)] transition-colors" href="#drivers">Drivers</a>
<a className="mobile-link text-2xl font-display uppercase tracking-tight text-[color:var(--text)] hover:text-[color:var(--accent)] transition-colors" href="#tracking">Tracking</a>
<a className="mobile-link text-xl font-medium text-[color:var(--bg-main)] bg-[color:var(--accent)] px-8 py-3 rounded hover:bg-[color:var(--accent-hover)] transition-colors mt-4" href="#quote">Get Quote</a>
</div>

<main className="section section--main overflow-hidden min-h-screen flex flex-col sm:px-6 sm:pt-40 sm:pb-24 z-10 pt-36 pr-4 pb-24 pl-4 relative" id="home">
<div className="mx-auto text-center relative max-w-7xl flex-1 flex flex-col items-center">

<div className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[200px] sm:h-[300px] blur-[100px] rounded-full pointer-events-none bg-[color:var(--accent)]/20 mix-blend-screen"></div>
<div className="relative z-10 flex flex-col items-center w-full max-w-5xl" data-speed="0.9"> 
<div className="hero-eyebrow flex items-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_var(--accent)]"></div>
<span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[color:var(--text-subtle)]">
              Nationwide Logistics Solutions
            </span>
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_var(--accent)]"></div>
</div>
<h1 className="hero-title sm:text-7xl md:text-8xl uppercase leading-[0.9] text-5xl font-medium text-[color:var(--text)] tracking-tighter font-display mb-6 drop-shadow-2xl">
            Precision Freight
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-white font-semibold glow-text">
              Without Compromise.
            </span>
</h1>
<p className="hero-subtitle text-[color:var(--text-muted)] text-lg sm:text-xl font-normal tracking-tight mb-8 leading-tight max-w-2xl">
            Modernizing the supply chain with reliable fleet operations, 
            real-time tracking, and dedicated service.
          </p>
<div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-16">
<a className="flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-[color:var(--accent)] text-white text-sm font-semibold rounded tracking-tight transition-all duration-300 hover:bg-[color:var(--accent-hover)] shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] border border-[color:var(--accent)]" href="#tracking">
              Track Shipment
            </a>
<a className="w-full sm:w-auto px-6 py-3 bg-transparent text-[color:var(--text)] border border-[color:var(--border)] hover:bg-[color:var(--bg-card)] text-sm font-medium rounded transition-all flex items-center justify-center gap-2 group hover:border-[color:var(--text-subtle)]" href="#quote">
              Request a Rate
            </a>
</div>
<div className="hero-panel w-full max-w-4xl mx-auto rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-card)]/50 backdrop-blur-xl shadow-[var(--shadow)] overflow-hidden relative group" style={{filter: 'none'}}>
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border)] bg-[color:var(--bg-card)]/80 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#333] border border-[#444]"></div>
<div className="w-2 h-2 rounded-full bg-[#333] border border-[#444]"></div>
<div className="w-2 h-2 rounded-full bg-[#333] border border-[#444]"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] ml-2">
                  System_Portal::Dispatch
                </span>
</div>
<div className="flex bg-[color:var(--bg-surface)] rounded p-1 border border-[color:var(--border)]">
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded bg-[color:var(--bg-card)] text-[color:var(--text)] border border-[color:var(--border)] shadow-sm transition-all" id="btn-input" onclick="toggleHeroPanel('input')">
                  Load Info
                </button>
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded text-[color:var(--text-subtle)] hover:text-[color:var(--text)] border border-transparent transition-all" id="btn-output" onclick="toggleHeroPanel('output')">
                  Live Status
                </button>
</div>
</div>
<div className="relative h-[340px] bg-[color:var(--bg-card)]/40 group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>
<div className="absolute inset-0 p-6 sm:p-10 transition-all duration-500 opacity-100 translate-y-0 z-10 flex flex-col justify-center" id="panel-input">
<div className="font-mono text-xs sm:text-sm leading-loose text-[color:var(--text-muted)]">
<div className="flex gap-3">
<span className="text-[color:var(--accent)]">Order</span>
<span className="text-[color:var(--text)]">Manifest</span>
                    = {
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">tracking_id</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">
                      'SL-89240'
                    </span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">origin</span>
                    :
                    <span className="text-[color:var(--accent)]">"Dallas, TX"</span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">destination</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">
                      "Chicago, IL"
                    </span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">cargo</span>
                    : {
                  </div>
<div className="pl-12">
<span className="text-[color:var(--text)]">weight</span>
                    :
                    <span className="text-[color:var(--accent)]">42,000 lbs</span>
                    ,
                  </div>
<div className="pl-12">
<span className="text-[color:var(--text)]">type</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">"Industrial Parts"</span>
</div>
<div className="pl-6">}</div>
<div>};</div>
</div>
<div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-100">
<span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
                    System Online
                  </span>
</div>
</div>
<div className="absolute inset-0 transition-all duration-500 opacity-0 translate-y-4 z-0 flex items-center justify-center" id="panel-output">
<div className="w-full max-w-sm bg-[#050505] border border-[color:var(--border)] rounded-lg p-6 shadow-2xl relative overflow-hidden transform transition-all duration-500 scale-95" id="output-card">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[color:var(--accent)] to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[color:var(--bg-surface)] flex items-center justify-center border border-[color:var(--border)]">
<iconify-icon className="text-[color:var(--text)] text-sm" icon="solar:truck-bold"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-[color:var(--text)] uppercase tracking-wide">
                          Shipment In Transit
                        </h4>
<p className="text-[10px] text-[color:var(--text-subtle)]">
                          Unit #402 • Interstate 55
                        </p>
</div>
</div>
<span className="text-[9px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded border border-[#10b981]/20 shadow-[0_0_10px_-2px_rgba(16,185,129,0.3)]">
                      On Time
                    </span>
</div>
<div className="space-y-3 mb-6 font-mono text-[10px]">
<div className="flex justify-between items-center py-2 border-b border-[color:var(--border)]">
<span className="text-[color:var(--text-subtle)]">
                        ETA
                      </span>
<span className="text-[color:var(--text)]">Today, 14:00 CST</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[color:var(--border)]">
<span className="text-[color:var(--text-subtle)]">
                        Distance Remaining
                      </span>
<span className="text-[color:var(--text)]">142 Miles</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[color:var(--border)]">
<span className="text-[color:var(--text-subtle)]">
                        Status
                      </span>
<span className="text-[color:var(--text)] flex items-center gap-1">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:map-point-wave-bold"></iconify-icon>
                        Moving
                      </span>
</div>
</div>
<button className="w-full py-2 bg-[color:var(--bg-surface)] text-[color:var(--text)] text-[10px] font-semibold uppercase tracking-widest rounded hover:bg-[color:var(--border)] transition-colors focus:outline-none border border-[color:var(--border)]">
                    View Full Map
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</main>

<section className="section section--surface py-24 md:py-32" id="tracking">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative z-10 animate-on-scroll" data-speed="1.1"> 
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-3 block">
              Operations Workflow
            </span>
<h2 className="text-3xl md:text-5xl font-display text-[color:var(--text)] uppercase tracking-tighter leading-none mb-4 font-medium">
              BOOKING
              <br/>
<span className="font-semibold text-[color:var(--accent)]">
                →
                <span className="font-semibold text-white">DELIVERY</span>
</span>
</h2>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed mb-12 max-w-md">
              From the moment you request a quote to final proof of delivery, 
              our process is transparent, secure, and efficient.
            </p>
<div className="relative flex flex-col gap-0" id="pipeline-controls">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[color:var(--border)]"></div>
<div className="absolute left-0 top-0 w-[2px] bg-[color:var(--accent)] h-[33.33%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_10px_var(--accent)]" id="active-line"></div>
<button className="pipeline-btn active group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(0)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text)] transition-colors">
                    BOOKING &amp; DISPATCH
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--accent)] bg-[color:var(--accent-soft)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    INITIATE
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                  Instant load confirmation, carrier assignment, and pickup scheduling.
                </p>
</button>
<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(1)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                    TRANSIT MONITORING
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--text-subtle)] bg-[color:var(--bg-card)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    TRACK
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-subtle)] group-hover:text-[color:var(--text-muted)] leading-relaxed max-w-sm transition-colors">
                  24/7 GPS tracking, driver communication, and safety compliance checks.
                </p>
</button>
<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(2)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                    DELIVERY &amp; PROOF
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--text-subtle)] bg-[color:var(--bg-card)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    COMPLETE
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-subtle)] group-hover:text-[color:var(--text-muted)] leading-relaxed max-w-sm transition-colors">
                  Digital POD, instant invoicing, and performance analytics.
                </p>
</button>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[color:var(--bg-card)] rounded-2xl border border-[color:var(--border)] overflow-hidden shadow-[var(--shadow)] flex flex-col group animate-on-scroll">
<div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border)] bg-[color:var(--bg-card)]/70 backdrop-blur-md z-20">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[color:var(--bg-surface)] border border-[color:var(--border)]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[color:var(--bg-surface)] border border-[color:var(--border)]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[color:var(--bg-surface)] border border-[color:var(--border)]"></div>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
                FLEET STATE :: ACTIVE
              </span>
<div className="text-[9px] font-mono font-semibold text-[color:var(--accent)] bg-[color:var(--accent-soft)] px-2 py-1 rounded border border-[color:var(--border)] transition-all duration-300" id="pipeline-header-tag">
                INITIATE::ACTIVE
              </div>
</div>
<div className="relative flex-1 w-full bg-[#050505]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-100 translate-x-0 z-10" id="pipeline-visual-0">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Load Assignment
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    Step 01
                  </span>
</div>
<div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
<div className="flex flex-col gap-2">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-1">
                      Documents
                    </span>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono border-l-2 border-l-[color:var(--accent)] shadow-[var(--shadow)]">
                      Rate Confirmation
                    </div>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono">
                      Bill of Lading
                    </div>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono">
                      Insurance Cert
                    </div>
</div>
<div className="flex flex-col gap-3 relative pl-4 border-l border-[color:var(--border)] border-dashed">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-1">
                      Dispatch
                    </span>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        1
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Driver Assigned
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        2
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Route Optimized
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        3
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Pickup Scheduled
                      </span>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)]">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-2 block">
                    Status
                  </span>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-[color:var(--accent-soft)] border border-[color:var(--border)] text-[9px] text-[color:var(--accent)] font-mono flex items-center gap-1.5">
<iconify-icon className="text-xs" icon="solar:check-circle-bold"></iconify-icon>
                      Ready for Pickup
                    </span>
</div>
</div>
</div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 scale-95 pointer-events-none z-0" id="pipeline-visual-1">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[color:var(--text)]" icon="solar:map-point-wave-bold"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      In Transit
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    Step 02
                  </span>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative my-2">
<div className="w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-xl p-5 relative z-10 shadow-[var(--shadow)] flex flex-col gap-3 group">
<div className="absolute inset-0 bg-[color:var(--accent-soft)] rounded-xl pointer-events-none opacity-60"></div>
<div className="flex items-center justify-between border-b border-[color:var(--border)] pb-2 mb-1">
<span className="text-[9px] uppercase tracking-wider text-[color:var(--accent)]">
                        Vehicle Telematics
                      </span>
<iconify-icon className="text-[color:var(--accent)] text-xs" icon="solar:satellite-bold"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text)]">
<iconify-icon className="text-[color:var(--text-subtle)]" icon="solar:speedometer-low-linear"></iconify-icon>
                      Speed: 65 MPH (Safe)
                    </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text)]">
<iconify-icon className="text-[color:var(--text-subtle)]" icon="solar:thermometer-linear"></iconify-icon>
                      Engine Status: Normal
                    </div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full w-20 text-right pr-3">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] block mb-1">
                      Checkpoints
                    </span>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight">
                      Scale House
                    </div>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight mt-1">
                      Fuel Stop
                    </div>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full w-20 text-left pl-3">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] block mb-1">
                      Log
                    </span>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight">
                      On Schedule
                    </div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)] flex items-center justify-between">
<div className="flex gap-1">
<div className="h-1 w-6 rounded-full bg-[color:var(--accent)] opacity-70"></div>
<div className="h-1 w-6 rounded-full bg-[color:var(--accent)] opacity-70"></div>
</div>
<div className="text-[9px] font-mono text-[color:var(--accent)] uppercase tracking-wide flex items-center gap-2">
<span>GPS Active</span>
<span className="w-1 h-1 rounded-full bg-[color:var(--accent)] shadow-[0_0_5px_var(--accent)]"></span>
</div>
</div>
</div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 translate-y-8 pointer-events-none z-0" id="pipeline-visual-2">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[color:var(--text)]" icon="solar:box-minimalistic-bold-duotone"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Delivery
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    Step 03
                  </span>
</div>
<div className="flex-1 flex flex-col gap-5">
<div>
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-2 block">
                      Documents
                    </span>
<div className="flex gap-2">
<div className="flex-1 bg-[color:var(--accent-soft)] border border-[color:var(--border)] p-2.5 rounded text-center shadow-[var(--shadow)]">
<iconify-icon className="text-[color:var(--text)] text-sm mb-1" icon="solar:file-check-linear"></iconify-icon>
<span className="text-[10px] text-[color:var(--text)] font-semibold block">
                          Signed POD
                        </span>
</div>
<div className="flex-1 bg-[color:var(--bg-card)] border border-[color:var(--border)] p-2.5 rounded text-center opacity-80">
<iconify-icon className="text-[color:var(--text-muted)] text-sm mb-1" icon="solar:bill-check-linear"></iconify-icon>
<span className="text-[10px] text-[color:var(--text-muted)] block">
                          Invoice
                        </span>
</div>
</div>
</div>
<div>
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-2 block">
                      Confirmation
                    </span>
<div className="space-y-2.5 bg-[color:var(--bg-card)] p-3 rounded border border-[color:var(--border)]">
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Cargo Inspected
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Signature Captured
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Unloading Complete
                      </div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-[color:var(--text)] uppercase tracking-wide">
                      Satisfaction
                    </span>
<span className="flex items-center gap-1 text-[9px] text-[color:var(--text)] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                      Completed
                    </span>
</div>
<div className="h-1 w-full bg-[color:var(--bg-surface)] rounded-full overflow-hidden border border-[color:var(--border)]">
<div className="h-full bg-[color:var(--accent)] w-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--main py-28 md:py-36" id="services">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 animate-on-scroll" data-speed="1.05">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[11px] font-medium font-mono uppercase tracking-[0.2em] text-[color:var(--text-subtle)]">
              Logistics Capabilites
            </span>
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
</div>
<h2 className="text-4xl md:text-6xl font-display text-[color:var(--text)] uppercase tracking-tighter leading-[0.95] mb-6 font-medium">
            Tailored For
            <span className="text-[color:var(--accent)] font-semibold">
              → Industry
            </span>
</h2>
<p className="text-base text-[color:var(--text-muted)] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            S&amp;L Freight isn't just a trucking company; we are your strategic partner in supply chain management. 
            We handle complex requirements with ease.
          </p>
<div className="flex flex-col items-center gap-6">
<p className="text-xs text-[color:var(--text-subtle)] font-medium tracking-widest uppercase">
              Reliable transport for every sector.
            </p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Full Truckload (FTL)
              </span>
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                LTL Services
              </span>
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Expedited
              </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent opacity-60"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text)] border-b border-[color:var(--accent)]/30 pb-0.5">
                General Freight
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                01
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Dry Van Services
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Secure, enclosed transportation for retail goods, electronics, 
              and non-perishable items. 53' trailers available nationwide.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] hover:underline transition-colors" href="#">
                View Capacity
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                Industrial
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                02
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Flatbed &amp; Heavy
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Specialized equipment for machinery, construction materials, 
              and oversized loads. Expert strapping and tarping.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] hover:underline transition-colors" href="#">
                Equipment Types
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                Time Critical
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                03
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Expedited Freight
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Team drivers and dedicated vehicles for when your shipment 
              absolutely has to be there tomorrow.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] hover:underline transition-colors" href="#">
                Get Transit Times
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-y border-[color:var(--border)] bg-[color:var(--bg-surface)]/30 mb-20 animate-on-scroll">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[color:var(--text-subtle)] border border-[color:var(--border)] bg-[color:var(--bg-card)] px-1.5 py-0.5 rounded">
                01
              </span>
<div>
<h4 className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--text)] mb-1">
                  Route Optimization
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Minimize fuel &amp; transit time
                </p>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-[color:var(--border)]"></div>
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[color:var(--text-subtle)] border border-[color:var(--border)] bg-[color:var(--bg-card)] px-1.5 py-0.5 rounded">
                02
              </span>
<div>
<h4 className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--text)] mb-1">
                  Driver Safety
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  ELD compliant &amp; certified
                </p>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-[color:var(--border)]"></div>
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[color:var(--text-subtle)] border border-[color:var(--border)] bg-[color:var(--bg-card)] px-1.5 py-0.5 rounded">
                03
              </span>
<div>
<h4 className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--text)] mb-1">
                  Cargo Security
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Sealed &amp; monitored
                </p>
</div>
</div>
</div>
</div>
<div className="text-center mb-12">
<p className="text-xs font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
            Two perspectives: The Dispatcher's Control vs. The Client's Peace of Mind.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[color:var(--border)] rounded-2xl overflow-hidden bg-[color:var(--bg-card)] shadow-[var(--shadow)] animate-on-scroll">
<div className="p-8 lg:p-12 relative flex flex-col justify-between group border-b lg:border-b-0 lg:border-r border-[color:var(--border)]">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] border border-[color:var(--border)] px-2 py-1 rounded bg-[color:var(--accent-soft)]">
                Dispatcher View
              </span>
</div>
<div className="mt-12 space-y-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-16">
<div className="font-mono text-xs text-[color:var(--text-subtle)] leading-loose">
<div className="flex gap-4">
<span className="text-[color:var(--accent)]">LoadID</span>
<span className="text-[color:var(--text)]">#88219</span>
                  = {
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">driver</span>
                  :
                  <span className="text-[color:var(--text-subtle)]">
                    'M. Johnson'
                  </span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">hos_remaining</span>
                  :
                  <span className="text-[color:var(--accent)]">'4h 30m'</span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">fuel_level</span>
                  :
                  <span className="text-[color:var(--text-subtle)]">
                    '78%'
                  </span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">geo_fence</span>
                  :
                  <span className="text-[color:var(--accent)]">Zone.Midwest</span>
</div>
<div className="flex gap-4">};</div>
</div>
</div>
<div className="">
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-2">
                Operational Control
              </h3>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                We manage hours of service, fuel costs, and lane optimization 
                so you don't have to.
              </p>
</div>
</div>
<div className="p-8 lg:p-12 relative bg-[color:var(--bg-surface)] flex flex-col justify-between group">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] border border-[color:var(--border)] px-2 py-1 rounded bg-[color:var(--bg-card)]">
                Client View
              </span>
</div>
<div className="mt-12 mb-16 relative flex justify-center items-center">
<div className="bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-lg shadow-[var(--shadow)] transform group-hover:-translate-y-1 transition-transform duration-500 w-full max-w-xs overflow-hidden">
<div className="h-8 bg-[color:var(--bg-surface)] border-b border-[color:var(--border)] flex items-center px-3 justify-between">
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--border)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--border)]"></div>
</div>
<div className="h-1 w-8 bg-[color:var(--border)] rounded-full"></div>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-3">
<iconify-icon className="text-[color:var(--accent)] text-xl" icon="solar:box-bold"></iconify-icon>
<div className="">
<div className="text-xs font-semibold text-[color:var(--text)]">Your Shipment</div>
<div className="text-[10px] text-[color:var(--text-subtle)]">Arriving Tuesday</div>
</div>
</div>
<div className="w-full h-px bg-[color:var(--border)]"></div>
<div className="flex justify-between items-center text-[9px]">
<span className="text-[color:var(--text-subtle)]">
                      Current: Cleveland, OH
                    </span>
<span className="text-[#10b981] font-semibold">On Time</span>
</div>
</div>
</div>
</div>
<div className="">
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-2">
                Simple Visibility
              </h3>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                You get the information you need: Where is it? When will it get there? 
                Is it safe?
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-[0.2em] opacity-90">
            One partner. End-to-end logistics management.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--surface py-24 md:py-32" id="network">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-3 block">
              // Why Choose S&amp;L
            </span>
<h2 className="text-3xl md:text-5xl font-display font-medium text-[color:var(--text)] uppercase tracking-tighter leading-none mb-4">
              SERVICE
              <br/>
<span className="text-[color:var(--accent)] font-semibold">
                → OUTCOMES
              </span>
</h2>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed font-light">
              Shift from uncertain shipping to predictable logistics. 
              S&amp;L Freight transforms transportation into a competitive advantage.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden bg-[color:var(--border)] border border-[color:var(--border)] rounded-[2rem] shadow-[var(--shadow)] gap-px">
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70"></div>
<div className="relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-4 block">
                // SPEED
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Reduced Transit Time
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Optimized lane selection and team drivers mean your cargo stops less and arrives sooner.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Delays → Velocity
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70"></div>
<div className="relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-4 block">
                // COST
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Transparent Pricing
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                No hidden fees. We provide clear, all-in rates so you can forecast your logistics spend accurately.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Surprises → Stability
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70"></div>
<div className="relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-4 block">
                // SAFETY
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Claims Prevention
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Rigorous blocking and bracing standards significantly reduce the risk of cargo damage.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Risk → Security
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // TRACKING
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Real-Time Updates
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Know exactly where your truck is. Automated email and SMS notifications at key milestones.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Dark → Visible
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // SUPPORT
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Dedicated Account Reps
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Single point of contact. No call centers, just people who know your business.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Tickets → Partners
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // COMPLIANCE
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Fully Licensed &amp; Insured
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                We meet all FMCSA requirements and carry excess liability coverage for high-value loads.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Standard → Certified
            </div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[11px] font-mono text-[color:var(--text-subtle)] tracking-widest uppercase opacity-90">
            Professional Fleet. Enterprise Reliability.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--main py-32" id="drivers">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-4xl mx-auto text-center">
<div className="flex items-center gap-3 mb-6 justify-center animate-on-scroll">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)]">
              Fleet :: Standards
            </span>
<div className="h-px w-8 bg-[color:var(--border)]"></div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
              Performance Guarantees
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[color:var(--text)] uppercase tracking-tighter leading-[0.9] mb-6 animate-on-scroll">
            Modern Fleet.
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              Proven Performance.
            </span>
</h2>
<p className="text-base text-[color:var(--text-muted)] font-light leading-relaxed mb-10 max-w-2xl mx-auto animate-on-scroll">
            Reliability isn't an accident. It's the result of rigorous maintenance, 
            experienced drivers, and constant monitoring of our nationwide network.
          </p>
<div className="flex flex-wrap items-center gap-8 border-t border-[color:var(--border)] pt-6 justify-center animate-on-scroll">
<div className="">
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                99.8%
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                On-Time Delivery
              </div>
</div>
<div className="w-px h-8 bg-[color:var(--border)]"></div>
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                24/7
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Dispatch Support
              </div>
</div>
<div className="w-px h-8 bg-[color:var(--border)]"></div>
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                48
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                States Covered
              </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 shadow-[var(--shadow)]">
<div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-35 transition-opacity">
<iconify-icon className="text-3xl text-[color:var(--text-subtle)]" icon="solar:wrench-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max">
              Focus: Maintenance
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2">
              Preventative Care
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light">
              Our trucks undergo strict inspections before every trip to minimize mechanical failures.
            </p>
<div className="mt-auto flex justify-between items-end">
<span className="text-[9px] font-mono text-[color:var(--text-subtle)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Breakdown → Uptime
              </span>
</div>
</div>
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-5 opacity-100">
<iconify-icon className="text-3xl text-[color:var(--accent)]" icon="solar:shield-check-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--accent)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max relative z-10">
              Focus: Safety
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2 relative z-10">
              Driver Standards
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light relative z-10">
              We hire experienced drivers with clean records and provide ongoing safety training.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[color:var(--text-muted)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Risk → Experience
              </span>
</div>
</div>
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 shadow-[var(--shadow)]">
<div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-35 transition-opacity">
<iconify-icon className="text-3xl text-[color:var(--text-subtle)]" icon="solar:settings-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max">
              Focus: Technology
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2">
              Route Planning
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light">
              Advanced algorithms optimize lanes for fuel efficiency and on-time arrivals.
            </p>
<div className="mt-auto flex justify-between items-end">
<span className="text-[9px] font-mono text-[color:var(--text-subtle)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Manual → AI Optimized
              </span>
</div>
</div>
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-5 opacity-100">
<iconify-icon className="text-3xl text-[color:var(--accent)]" icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--accent)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max relative z-10">
              Focus: Service
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2 relative z-10">
              Client Comm
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light relative z-10">
              Proactive communication. If there's weather or traffic, you'll know before it impacts you.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[color:var(--text-muted)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Reactive → Proactive
              </span>
</div>
</div>
</div>
<div className="mt-20 border-t border-[color:var(--border)] pt-8 text-center animate-on-scroll">
<p className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-[0.2em]">
            This is the infrastructure that moves your business forward.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--surface pt-32 pb-32" id="quote">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent),_transparent_90%)] opacity-[0.08] pointer-events-none z-0"></div>
<div className="spotlight absolute top-[-20%] left-0 right-0 h-[600px] bg-[radial-gradient(800px_circle_at_top,_rgba(59,130,246,0.15),_transparent_70%)] pointer-events-none z-0"></div>
<div className="section-content max-w-3xl mx-auto px-6 relative z-10">
<div className="relative rounded-3xl border border-[color:var(--accent)]/30 bg-[color:var(--bg-card)]/80 backdrop-blur-xl p-8 md:p-14 text-center overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.1)] group">
<div className="absolute top-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_top_left,_var(--accent),_transparent_70%)] opacity-[0.1] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent shadow-[0_0_15px_var(--accent)]"></div>
<h2 className="text-4xl md:text-6xl font-display text-[color:var(--text)] mb-6 uppercase tracking-tighter leading-[0.95] font-medium relative z-10">
            Ready to
            <br/>
<span className="text-[color:var(--accent)] font-semibold glow-text">
              Move Your Freight?
            </span>
</h2>
<p className="text-sm md:text-base text-[color:var(--text)]/80 mb-10 max-w-lg mx-auto leading-relaxed font-normal relative z-10">
            Get a competitive rate quote today and experience the difference of S&amp;L Freight Service.
          </p>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_var(--accent)]"></div>
<span className="text-[11px] text-[color:var(--text)] font-mono tracking-wide">
                Instant Quotes
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_var(--accent)]"></div>
<span className="text-[11px] text-[color:var(--text)] font-mono tracking-wide">
                Nationwide Coverage
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_var(--accent)]"></div>
<span className="text-[11px] text-[color:var(--text)] font-mono tracking-wide">
                Dedicated Support
              </span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
<input className="w-full sm:w-72 bg-[color:var(--bg-main)] border border-[color:var(--border)] rounded-lg px-4 py-3.5 text-sm text-[color:var(--text)] placeholder-[color:var(--text-subtle)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/30 focus:border-[color:var(--accent)] transition-all shadow-inner" placeholder="Enter work email" type="email"/>
<button className="w-full sm:w-auto px-10 py-3.5 bg-[color:var(--accent)] text-white text-sm font-semibold rounded-lg tracking-tight shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] hover:bg-[color:var(--accent-hover)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]">
              Get Started
            </button>
</div>
<div className="mb-10">
<a className="inline-flex items-center gap-1.5 text-[11px] text-[color:var(--accent)] hover:text-white transition-colors group pb-0.5" href="#">
              Contact Sales Team
              <iconify-icon className="text-xs text-[color:var(--accent)] group-hover:text-white transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-[color:var(--bg-card)] border-t border-[color:var(--border)] pt-8 pb-6" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10 w-full">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] opacity-70">
              Connect
            </span>
<div className="flex flex-col gap-2.5 text-center md:text-left">
<a className="group flex items-center gap-2.5 text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors justify-center md:justify-start" href="#">
<iconify-icon className="text-sm text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors" icon="ri:twitter-x-line"></iconify-icon>
<span className="">Twitter / X</span>
</a>
<a className="group flex items-center gap-2.5 text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors justify-center md:justify-start" href="#">
<iconify-icon className="text-sm text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors" icon="ri:linkedin-line"></iconify-icon>
<span>LinkedIn</span>
</a>
<a className="group flex items-center gap-2.5 text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors justify-center md:justify-start" href="#">
<iconify-icon className="text-sm text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
<span>800-555-0199</span>
</a>
</div>
</div>
<div className="flex flex-col items-center justify-center gap-2.5 mt-2 md:mt-0">
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--accent)] shadow-[0_0_8px_var(--accent)]"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                Fleet Status: Active
              </span>
</div>
<div className="flex gap-3 text-[9px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest opacity-80">
<span>USDOT: 129402</span>
<span className="text-[color:var(--border)]">|</span>
<span>MC: 88421</span>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] opacity-70">
              Company
            </span>
<div className="flex flex-col gap-2.5 text-center md:text-right">
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                About Us
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#services">
                Services
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#drivers">
                Drive for Us
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#quote">
                Contact
              </a>
</div>
</div>
</div>
<div className="pt-4 border-t border-[color:var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
            © 2026 S&amp;L Freight Service LLC
          </span>
<div className="flex gap-6">
<a className="text-[10px] font-mono text-[color:var(--text-subtle)] hover:text-[color:var(--text)] uppercase tracking-widest transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-[10px] font-mono text-[color:var(--text-subtle)] hover:text-[color:var(--text)] uppercase tracking-widest transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>








    </>
  );
}
