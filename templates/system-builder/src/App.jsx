import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);

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
          .from(".hero-context", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
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
    


      document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('mobile-menu-button');
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

        const tags = ['INPUT::ACTIVE', 'GOVERN::ACTIVE', 'OUTPUT::ACTIVE'];
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
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-[color:var(--bg-card)]/90 backdrop-blur-md border-b border-[color:var(--border)]">
<div className="sm:px-6 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center flex-shrink-0 md:mr-4">
<span className="text-[color:var(--text)] sm:text-xl uppercase cursor-default cursor-pointer text-lg tracking-tighter font-display" onclick="window.location.href='/home'" role="button">
            Buildr
          </span>
</div>
<div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="group text-[13px] text-[color:var(--text)] transition-colors font-medium tracking-tight pt-2 pr-1 pb-2 pl-1 relative" href="/system">
            System
          </a>
<a className="text-[13px] text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors font-normal tracking-tight pt-2 pr-1 pb-2 pl-1" href="/cases">
            Use Cases
          </a>
<a className="text-[13px] text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors font-normal tracking-tight pt-2 pr-1 pb-2 pl-1" href="/docs">
            Docs
          </a>
<a className="text-[13px] text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors font-normal tracking-tight pt-2 pr-1 pb-2 pl-1" href="/pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]" id="mobile-menu-button">
<iconify-icon className="text-[color:var(--text)] text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="hidden sm:block text-[13px] text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors font-normal" href="/signin">
            Sign in
          </a>
<a className="text-xs px-5 py-2.5 bg-[color:var(--accent)] text-white font-semibold rounded tracking-tight transition-all duration-300 hover:bg-[color:var(--accent-hover)] shadow-[var(--shadow)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]" href="/demo">
            Request Demo
          </a>
</div>
</div>
</nav>

<main className="section section--main overflow-hidden min-h-screen flex flex-col sm:px-6 sm:pt-36 sm:pb-24 z-10 pt-36 pr-4 pb-24 pl-4 relative"><div className="absolute inset-0" data-container-bg="true"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>
<div className="mx-auto text-center relative max-w-7xl flex-1 flex flex-col items-center">
<div className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[200px] sm:h-[300px] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none bg-[color:var(--accent)]/10"></div>
<div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
<div className="hero-eyebrow flex items-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[color:var(--text-subtle)]">
              AI Infrastructure for Builders
            </span>
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
</div>
<h1 className="hero-title sm:text-6xl md:text-7xl uppercase leading-[0.95] text-4xl font-medium text-[color:var(--text)] tracking-tighter font-display mb-3 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
            The Operating System
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              for AI Creators.
            </span>
</h1>
<p className="hero-subtitle text-[color:var(--text-muted)] text-lg sm:text-xl font-normal tracking-tight mb-8 leading-tight">
            Design, secure, and deploy AI systems — without exposing your logic.
          </p>
<p className="hero-context text-sm sm:text-base text-[color:var(--text-muted)] max-w-xl mx-auto mb-10 leading-relaxed font-light text-center">
            Buildr is not another AI tool or prompt library. It’s a system layer
            that turns fragile logic into secure, reusable, production-ready
            products — without exposing your IP.
          </p>
<div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3 bg-[color:var(--accent)] text-white text-sm font-semibold rounded tracking-tight transition-all duration-300 hover:bg-[color:var(--accent-hover)] shadow-[var(--shadow)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-main)]">
              Request Demo
            </button>
<button className="w-full sm:w-auto px-6 py-3 bg-[color:var(--bg-card)] text-[color:var(--text)] border border-[color:var(--border)] hover:bg-[color:var(--bg-card-hover)] text-sm font-medium rounded transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-main)]">
              View the System
            </button>
</div>
<div className="hero-panel w-full max-w-4xl mx-auto rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-card)] shadow-[var(--shadow)] overflow-hidden relative" style={{filter: 'none'}}>
<div className="flex items-center justify-between px-4 py-3 border-b border-[color:var(--border)] bg-[color:var(--bg-card)]/70 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-[color:var(--bg-surface)] border border-[color:var(--border)]"></div>
<div className="w-2 h-2 rounded-full bg-[color:var(--bg-surface)] border border-[color:var(--border)]"></div>
<div className="w-2 h-2 rounded-full bg-[color:var(--bg-surface)] border border-[color:var(--border)]"></div>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] ml-2">
                  System_Preview::v1.0
                </span>
</div>
<div className="flex bg-[color:var(--bg-surface)] rounded p-1 border border-[color:var(--border)]">
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded bg-[color:var(--bg-card)] text-[color:var(--text)] border border-[color:var(--border)] shadow-[var(--shadow)] transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20" id="btn-input" onclick="toggleHeroPanel('input')">
                  Input
                </button>
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded text-[color:var(--text-subtle)] hover:text-[color:var(--text)] border border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20" id="btn-output" onclick="toggleHeroPanel('output')">
                  Output
                </button>
</div>
</div>
<div className="relative h-[340px] bg-[color:var(--bg-card)] group">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none"></div>
<div className="absolute inset-0 p-6 sm:p-10 transition-all duration-500 opacity-100 translate-y-0 z-10 flex flex-col justify-center" id="panel-input">
<div className="font-mono text-xs sm:text-sm leading-loose text-[color:var(--text-muted)]">
<div className="flex gap-3">
<span className="text-[color:var(--accent)]">const</span>
<span className="text-[color:var(--text)]">systemConfig</span>
                    = {
                  </div>
<div className="pl-6 py-0.5">
<span className="text-[color:var(--text-subtle)]">
                      // Define core logic parameters
                    </span>
</div>
<div className="pl-6">
<span className="text-[color:var(--text)]">model</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">
                      'claude-3.5-sonnet'
                    </span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">temperature</span>
                    :
                    <span className="text-[color:var(--accent)]">0.1</span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">guardrails</span>
                    : [
                    <span className="text-[color:var(--text-subtle)]">
                      'pii_redaction'
                    </span>
                    ,
                    <span className="text-[color:var(--text-subtle)]">
                      'topic_lock'
                    </span>
                    ],
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">context</span>
                    :
                    <span className="text-[color:var(--accent)]">await</span>
<span className="text-[color:var(--text)]">kb.retrieve</span>
                    (
                    <span className="text-[color:var(--text-subtle)]">
                      'q3_financials'
                    </span>
                    )
                  </div>
<div>};</div>
</div>
<div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-100">
<span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse"></span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
                    System Ready
                  </span>
</div>
</div>
<div className="absolute inset-0 transition-all duration-500 opacity-0 translate-y-4 z-0 flex items-center justify-center" id="panel-output">
<div className="w-full max-w-sm bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-lg p-6 shadow-[var(--shadow)] relative overflow-hidden transform transition-all duration-500 scale-95" id="output-card">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[color:var(--accent)]/60 to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[color:var(--bg-surface)] flex items-center justify-center border border-[color:var(--border)]">
<iconify-icon className="text-[color:var(--text)] text-sm" icon="solar:chart-square-bold"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-[color:var(--text)] uppercase tracking-wide">
                          Q3 Forecast
                        </h4>
<p className="text-[10px] text-[color:var(--text-subtle)]">
                          Automated Analysis
                        </p>
</div>
</div>
<span className="text-[9px] font-mono text-[color:var(--accent)] bg-[color:var(--accent-soft)] px-2 py-1 rounded border border-[color:var(--border)]">
                      COMPLETED
                    </span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-end gap-2 h-16">
<div className="w-1/4 bg-[color:var(--bg-surface)] h-[40%] rounded-t border border-[color:var(--border)]"></div>
<div className="w-1/4 bg-[color:var(--bg-surface)] h-[60%] rounded-t border border-[color:var(--border)]"></div>
<div className="w-1/4 bg-[color:var(--bg-surface)] h-[50%] rounded-t border border-[color:var(--border)]"></div>
<div className="w-1/4 bg-[color:var(--accent)] h-[80%] rounded-t shadow-[0_10px_20px_rgba(79,70,229,0.16)]"></div>
</div>
<div className="h-2 w-full bg-[color:var(--bg-surface)] rounded-full border border-[color:var(--border)]"></div>
<div className="h-2 w-2/3 bg-[color:var(--bg-surface)] rounded-full border border-[color:var(--border)]"></div>
</div>
<button className="w-full py-2 bg-[color:var(--accent)] text-white text-[10px] font-semibold uppercase tracking-widest rounded hover:bg-[color:var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]">
                    View Full Report
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</main>

<section className="section section--surface section-divider py-24 md:py-32">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative z-10 animate-on-scroll">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-3 block">
              Protocol v1.0
            </span>
<h2 className="text-3xl md:text-5xl font-display text-[color:var(--text)] uppercase tracking-tighter leading-none mb-4 font-medium">
              RAW LOGIC
              <br/>
<span className="font-semibold text-[color:var(--accent)]">
                →
                <span className="font-semibold">PRODUCTION</span>
</span>
</h2>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed mb-12 max-w-md">
              Buildr converts prompt logic into protected, deployable
              products—without exposing your IP.
            </p>
<div className="relative flex flex-col gap-0" id="pipeline-controls">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[color:var(--border)]"></div>
<div className="absolute left-0 top-0 w-[2px] bg-[color:var(--accent)] h-[33.33%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="active-line"></div>
<button className="pipeline-btn active group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(0)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text)] transition-colors">
                    LOGIC INGESTION
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--accent)] bg-[color:var(--accent-soft)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    INPUT
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                  Turn raw ideas and prompts into structured system input.
                </p>
</button>
<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(1)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                    ENCAPSULATION &amp; SECURITY
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--text-subtle)] bg-[color:var(--bg-card)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    GOVERN
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-subtle)] group-hover:text-[color:var(--text-muted)] leading-relaxed max-w-sm transition-colors">
                  Lock your logic behind secure system boundaries.
                </p>
</button>
<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(2)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                    PRODUCTION DEPLOYMENT
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--text-subtle)] bg-[color:var(--bg-card)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    OUTPUT
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-subtle)] group-hover:text-[color:var(--text-muted)] leading-relaxed max-w-sm transition-colors">
                  Ship your system as a real app or API.
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
                SYSTEM STATE :: PIPELINE_v1
              </span>
<div className="text-[9px] font-mono font-semibold text-[color:var(--accent)] bg-[color:var(--accent-soft)] px-2 py-1 rounded border border-[color:var(--border)] transition-all duration-300" id="pipeline-header-tag">
                INPUT::ACTIVE
              </div>
</div>
<div className="relative flex-1 w-full bg-[color:var(--bg-card)]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none"></div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-100 translate-x-0 z-10" id="pipeline-visual-0">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Intake Parsing
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    01 / 03
                  </span>
</div>
<div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
<div className="flex flex-col gap-2">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-1">
                      Source Tokens
                    </span>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono border-l-2 border-l-[color:var(--accent)] shadow-[var(--shadow)]">
                      Prompt logic
                    </div>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono">
                      Variables
                    </div>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono">
                      Constraints
                    </div>
</div>
<div className="flex flex-col gap-3 relative pl-4 border-l border-[color:var(--border)] border-dashed">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-1">
                      Processing
                    </span>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        1
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Structure extracted
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        2
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Parameters resolved
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        3
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Version created
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
                      Logic ingested
                    </span>
<span className="px-2 py-1 rounded bg-[color:var(--bg-surface)] border border-[color:var(--border)] text-[9px] text-[color:var(--text-muted)] font-mono flex items-center gap-1.5">
<iconify-icon className="text-[color:var(--text-subtle)] text-xs" icon="solar:check-circle-bold"></iconify-icon>
                      System-readable
                    </span>
</div>
</div>
</div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 scale-95 pointer-events-none z-0" id="pipeline-visual-1">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[color:var(--text)]" icon="solar:shield-check-bold"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Security Layer
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    02 / 03
                  </span>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative my-2">
<div className="w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-xl p-5 relative z-10 shadow-[var(--shadow)] flex flex-col gap-3 group">
<div className="absolute inset-0 bg-[color:var(--accent-soft)] rounded-xl pointer-events-none opacity-60"></div>
<div className="flex items-center justify-between border-b border-[color:var(--border)] pb-2 mb-1">
<span className="text-[9px] uppercase tracking-wider text-[color:var(--accent)]">
                        Encapsulation Vault
                      </span>
<iconify-icon className="text-[color:var(--accent)] text-xs" icon="solar:lock-bold"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text)]">
<iconify-icon className="text-[color:var(--text-subtle)]" icon="solar:server-square-linear"></iconify-icon>
                      Logic moved server-side
                    </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text)]">
<iconify-icon className="text-[color:var(--text-subtle)]" icon="solar:eye-closed-linear"></iconify-icon>
                      Prompts hidden from client
                    </div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full w-20 text-right pr-3">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] block mb-1">
                      Policies
                    </span>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight">
                      Guardrails enforced
                    </div>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight mt-1">
                      Access controlled
                    </div>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full w-20 text-left pl-3">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] block mb-1">
                      Audit
                    </span>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight">
                      Logging enabled
                    </div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)] flex items-center justify-between">
<div className="flex gap-1">
<div className="h-1 w-6 rounded-full bg-[color:var(--accent)] opacity-70"></div>
<div className="h-1 w-6 rounded-full bg-[color:var(--accent)] opacity-70"></div>
</div>
<div className="text-[9px] font-mono text-[color:var(--accent)] uppercase tracking-wide flex items-center gap-2">
<span>IP Protected</span>
<span className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></span>
<span>Policies Active</span>
</div>
</div>
</div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 translate-y-8 pointer-events-none z-0" id="pipeline-visual-2">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[color:var(--text)]" icon="solar:rocket-bold-duotone"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Deployment
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    03 / 03
                  </span>
</div>
<div className="flex-1 flex flex-col gap-5">
<div>
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-2 block">
                      Target
                    </span>
<div className="flex gap-2">
<div className="flex-1 bg-[color:var(--accent-soft)] border border-[color:var(--border)] p-2.5 rounded text-center shadow-[var(--shadow)]">
<iconify-icon className="text-[color:var(--text)] text-sm mb-1" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span className="text-[10px] text-[color:var(--text)] font-semibold block">
                          Web App
                        </span>
</div>
<div className="flex-1 bg-[color:var(--bg-card)] border border-[color:var(--border)] p-2.5 rounded text-center opacity-80">
<iconify-icon className="text-[color:var(--text-muted)] text-sm mb-1" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-[10px] text-[color:var(--text-muted)] block">
                          API Endpoint
                        </span>
</div>
</div>
</div>
<div>
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-2 block">
                      Configuration
                    </span>
<div className="space-y-2.5 bg-[color:var(--bg-card)] p-3 rounded border border-[color:var(--border)] shadow-[0_1px_0_rgba(15,23,42,0.03)]">
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Public interface defined
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Usage metered
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Access keys issued
                      </div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-[color:var(--text)] uppercase tracking-wide">
                      Launch Status
                    </span>
<span className="flex items-center gap-1 text-[9px] text-[color:var(--text)] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                      System Live
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

<section className="section section--main section-divider py-28 md:py-36">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 animate-on-scroll">
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[11px] font-medium font-mono uppercase tracking-[0.2em] text-[color:var(--text-subtle)]">
              Intended Users
            </span>
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
</div>
<h2 className="text-4xl md:text-6xl font-display text-[color:var(--text)] uppercase tracking-tighter leading-[0.95] mb-6 font-medium">
            Built For
            <span className="text-[color:var(--accent)] font-semibold">
              → Builders
            </span>
</h2>
<p className="text-base text-[color:var(--text-muted)] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Buildr isn't a collection of prompts; it's an operating system
            designed to adapt. Whether you're shipping products, managing
            clients, or selling expertise, our infrastructure transforms your
            logic into a scalable asset.
          </p>
<div className="flex flex-col items-center gap-6">
<p className="text-xs text-[color:var(--text-subtle)] font-medium tracking-widest uppercase">
              Built for builders who ship systems, not demos.
            </p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Reusable logic
              </span>
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Protected IP
              </span>
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Deployable outputs
              </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent opacity-60"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text)] border-b border-[color:var(--accent)]/30 pb-0.5">
                SaaS Founder
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                01
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Lead Engines
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Create free tools like "ROI Calculators" or "Audit Generators" to
              capture emails and qualify leads automatically.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] hover:underline transition-colors" href="#">
                View Blueprint
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                Agency Operator
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                02
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Client Deliverables
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Systematize internal SEO, copy, or design reviews. Ensure
              consistent quality across all client accounts.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] hover:underline transition-colors" href="#">
                See Configuration
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                Consultant
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                03
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Advisory Systems
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Package your specific expertise into a paid diagnostic tool. Sell
              your brain, not just your time.
            </p>
<div className="mt-auto">
<a className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] hover:underline transition-colors" href="#">
                View Output
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-y border-[color:var(--border)] bg-[color:var(--bg-surface)]/50 mb-20 animate-on-scroll">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12">
<div className="flex gap-4 items-start">
<span className="font-mono text-[10px] text-[color:var(--text-subtle)] border border-[color:var(--border)] bg-[color:var(--bg-card)] px-1.5 py-0.5 rounded">
                01
              </span>
<div>
<h4 className="text-[11px] font-semibold uppercase tracking-wide text-[color:var(--text)] mb-1">
                  No blank canvas
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Start from structured inputs
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
                  Protected logic
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  IP stays server-side
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
                  Ship surfaces
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Outputs become products
                </p>
</div>
</div>
</div>
</div>
<div className="text-center mb-12">
<p className="text-xs font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
            Same system. Two perspectives: build it once, ship it everywhere.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[color:var(--border)] rounded-2xl overflow-hidden bg-[color:var(--bg-card)] shadow-[var(--shadow)] animate-on-scroll">
<div className="p-8 lg:p-12 relative flex flex-col justify-between group border-b lg:border-b-0 lg:border-r border-[color:var(--border)]">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] border border-[color:var(--border)] px-2 py-1 rounded bg-[color:var(--accent-soft)]">
                Creator View
              </span>
</div>
<div className="mt-12 space-y-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-16">
<div className="font-mono text-xs text-[color:var(--text-subtle)] leading-loose">
<div className="flex gap-4">
<span className="text-[color:var(--accent)]">const</span>
<span className="text-[color:var(--text)]">workflow</span>
                  = {
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">inputs</span>
                  :
                  <span className="text-[color:var(--text-subtle)]">
                    ['business_type', 'goal']
                  </span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">model</span>
                  :
                  <span className="text-[color:var(--accent)]">
                    Types.Model.CLAUDE_3_5
                  </span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">temperature</span>
                  :
                  <span className="text-[color:var(--accent)]">0.2</span>
</div>
<div className="flex gap-4">};</div>
</div>
</div>
<div className="">
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-2">
                Total Control
              </h3>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                You define the variables, the model parameters, and the cost.
                The backend complexity is yours to manage.
              </p>
</div>
</div>
<div className="p-8 lg:p-12 relative bg-[color:var(--bg-surface)] flex flex-col justify-between group">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] border border-[color:var(--border)] px-2 py-1 rounded bg-[color:var(--bg-card)]">
                User View
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
<div>
<label className="block text-[9px] text-[color:var(--text-subtle)] uppercase tracking-wider mb-1.5">
                      Business Type
                    </label>
<div className="h-7 w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded px-2 flex items-center">
<span className="text-[10px] text-[color:var(--text)]">
                        SaaS Platform
                      </span>
</div>
</div>
<div>
<label className="block text-[9px] text-[color:var(--text-subtle)] uppercase tracking-wider mb-1.5">
                      Goal
                    </label>
<div className="h-7 w-full bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded px-2 flex items-center">
<span className="text-[10px] text-[color:var(--text)]">
                        Increase retention
                      </span>
</div>
</div>
<div className="w-full h-7 bg-[color:var(--accent)] rounded flex items-center justify-center mt-2 cursor-pointer hover:bg-[color:var(--accent-hover)] transition-colors">
<span className="text-[9px] font-semibold uppercase text-white tracking-wide">
                      Generate Report
                    </span>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-2">
                Radical Simplicity
              </h3>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                Your customers don't see prompts. They see a clean, professional
                interface that solves their problem instantly.
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-[0.2em] opacity-90">
            Different builders. Different paths. One underlying system.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--surface section-divider py-24 md:py-32">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-3 block">
              // Outcomes
            </span>
<h2 className="text-3xl md:text-5xl font-display font-medium text-[color:var(--text)] uppercase tracking-tighter leading-none mb-4">
              USE CASES
              <br/>
<span className="text-[color:var(--accent)] font-semibold">
                → OUTCOMES
              </span>
</h2>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed font-light">
              Shift from fragile prompts to durable assets. Buildr transforms
              raw logic into scalable, secure, and revenue-generating products.
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
                // API
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Monetized Endpoints
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Turn your unique logic into a metered API business. Charge per
                request, not per hour.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Logic → Revenue
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70"></div>
<div className="relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-4 block">
                // EXPERTISE
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Advisory Systems
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Package your consulting brain into a diagnostic tool that sells
                your expertise 24/7.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Time → Scale
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70"></div>
<div className="relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-4 block">
                // GROWTH
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Lead Engines
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Deploy free tools that capture, qualify, and route leads
                automatically.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Traffic → Pipeline
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // INTERNAL
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Internal Workflows
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Replace scattered ChatGPT threads with a unified, secure system
                for your team.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Chat → System
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // CLIENT
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                White-Labeled Products
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Deliver custom AI tools to clients without handing over your
                source prompts.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Service → Asset
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // OPS
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Operational Backbones
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Codify manual SOPs into intelligent agents that run without
                supervision.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Manual → Automated
            </div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[11px] font-mono text-[color:var(--text-subtle)] tracking-widest uppercase opacity-90">
            All of these outcomes are powered by the same underlying system.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--main section-divider py-32">
<div className="spotlight"></div>
<div className="section-content max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-4xl mx-auto text-center">
<div className="flex items-center gap-3 mb-6 justify-center animate-on-scroll">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)]">
              Architecture :: Core
            </span>
<div className="h-px w-8 bg-[color:var(--border)]"></div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
              System Guarantees
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[color:var(--text)] uppercase tracking-tighter leading-[0.9] mb-6 animate-on-scroll">
            Immutable Core.
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              Infinite Scale.
            </span>
</h2>
<p className="text-base text-[color:var(--text-muted)] font-light leading-relaxed mb-10 max-w-2xl mx-auto animate-on-scroll">
            Outcomes compound because the architecture is stable. Buildr
            provides a single, encrypted layer that validates inputs, protects
            logic, and governs execution across every product you ship.
          </p>
<div className="flex flex-wrap items-center gap-8 border-t border-[color:var(--border)] pt-6 justify-center animate-on-scroll">
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                100%
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Typed Schema
              </div>
</div>
<div className="w-px h-8 bg-[color:var(--border)]"></div>
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                AES-256
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Logic Encryption
              </div>
</div>
<div className="w-px h-8 bg-[color:var(--border)]"></div>
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                0ms
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Added Latency
              </div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll">
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 shadow-[var(--shadow)]">
<div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-35 transition-opacity">
<iconify-icon className="text-3xl text-[color:var(--text-subtle)]" icon="solar:hashtag-square-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max">
              Layer: Structure
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2">
              Schema Enforcement
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light">
              Every input is typed and validated against strict definitions
              before processing.
            </p>
<div className="mt-auto flex justify-between items-end">
<span className="text-[9px] font-mono text-[color:var(--text-subtle)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Ad-hoc → Defined
              </span>
</div>
</div>
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-5 opacity-100">
<iconify-icon className="text-3xl text-[color:var(--accent)]" icon="solar:lock-keyhole-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--accent)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max relative z-10">
              Layer: Encapsulation
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2 relative z-10">
              Logic Protection
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light relative z-10">
              IP stays server-side. Prompts and logic are never exposed to the
              client.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[color:var(--text-muted)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Prompts → Protected
              </span>
</div>
</div>
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 shadow-[var(--shadow)]">
<div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-35 transition-opacity">
<iconify-icon className="text-3xl text-[color:var(--text-subtle)]" icon="solar:settings-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max">
              Layer: Governance
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2">
              Policy Control
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light">
              Centralized constraints on cost, rate limits, and safety for every
              request.
            </p>
<div className="mt-auto flex justify-between items-end">
<span className="text-[9px] font-mono text-[color:var(--text-subtle)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Variance → Predictable
              </span>
</div>
</div>
<div className="group bg-[color:var(--bg-card)] border border-[color:var(--border)] p-6 rounded-2xl relative overflow-hidden shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-5 opacity-100">
<iconify-icon className="text-3xl text-[color:var(--accent)]" icon="solar:rocket-bold"></iconify-icon>
</div>
<span className="text-[9px] font-mono uppercase tracking-widest text-[color:var(--accent)] block mb-4 border-b border-[color:var(--border)] pb-2 w-max relative z-10">
              Layer: Deployment
            </span>
<h3 className="text-base font-semibold text-[color:var(--text)] mb-2 relative z-10">
              Unified Interface
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light relative z-10">
              One core serves APIs, internal tools, and apps simultaneously.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[color:var(--text-muted)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Logic → Product
              </span>
</div>
</div>
</div>
<div className="mt-20 border-t border-[color:var(--border)] pt-8 text-center animate-on-scroll">
<p className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-[0.2em]">
            This is the system that makes every outcome repeatable.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--surface section-divider py-32">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent),_transparent_90%)] opacity-[0.04] pointer-events-none z-0"></div>
<div className="spotlight absolute top-[-20%] left-0 right-0 h-[600px] bg-[radial-gradient(800px_circle_at_top,_rgba(79,70,229,0.12),_transparent_70%)] pointer-events-none z-0"></div>
<div className="section-content max-w-3xl mx-auto px-6 relative z-10">
<div className="relative rounded-3xl border border-[color:var(--accent)]/10 bg-[color:var(--bg-card)]/90 backdrop-blur-xl p-8 md:p-14 text-center overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),_inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-[color:var(--border)] group">
<div className="absolute top-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_top_left,_var(--accent),_transparent_70%)] opacity-[0.04] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/60 to-transparent shadow-[0_1px_6px_rgba(79,70,229,0.4)]"></div>
<h2 className="text-4xl md:text-6xl font-display text-[color:var(--text)] mb-6 uppercase tracking-tighter leading-[0.95] font-medium relative z-10">
            CREATOR ACCESS
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              →
              <span className="font-semibold">UNLOCKED</span>
</span>
</h2>
<p className="text-sm md:text-base text-[color:var(--text)]/80 mb-10 max-w-lg mx-auto leading-relaxed font-normal relative z-10">
            Turn fragile prompts into protected, deployable systems your users
            can trust.
          </p>
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[11px] text-[color:var(--text)] font-mono tracking-wide">
                Protected Logic
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[11px] text-[color:var(--text)] font-mono tracking-wide">
                Deploy as App or API
              </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[11px] text-[color:var(--text)] font-mono tracking-wide">
                Governed Policies
              </span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
<input className="w-full sm:w-72 bg-[color:var(--bg-surface)] border border-[color:var(--border)] rounded-lg px-4 py-3.5 text-sm text-[color:var(--text)] placeholder-[color:var(--text-subtle)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 focus:border-[color:var(--accent)] transition-all shadow-inner" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto px-10 py-3.5 bg-[color:var(--accent)] text-white text-sm font-semibold rounded-lg tracking-tight shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:bg-[color:var(--accent-hover)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]">
              Request Demo
            </button>
</div>
<div className="mb-10">
<a className="inline-flex items-center gap-1.5 text-[11px] text-[color:var(--accent)] hover:underline transition-colors group pb-0.5" href="#">
              Or explore the system
              <iconify-icon className="text-xs text-[color:var(--accent)] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col items-center gap-8 mt-6 relative z-10">
<div className="w-full max-w-[340px] flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] select-none">
<div className="flex flex-col items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_rgba(79,70,229,0.4)]"></div>
<span className="text-[color:var(--text)] font-semibold">
                  Email Received
                </span>
</div>
<div className="h-px flex-1 bg-[color:var(--border)] mx-3 mb-4"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--border)]"></div>
<span className="opacity-70">Access Reviewed</span>
</div>
<div className="h-px flex-1 bg-[color:var(--border)] mx-3 mb-4"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--border)]"></div>
<span className="opacity-70">Onboarding Sent</span>
</div>
</div>
<div className="text-center space-y-1.5">
<p className="text-[10px] text-[color:var(--text-muted)] font-medium">
                Next: we’ll email access details and onboarding steps.
              </p>
<p className="text-[10px] text-[color:var(--text-subtle)] opacity-80">
                No spam. Your email stays private.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[color:var(--bg-card)] border-t border-[color:var(--border)] pt-8 pb-6">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10 w-full">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] opacity-70">
              Connect
            </span>
<div className="flex flex-col gap-2.5 text-center md:text-left">
<a className="group flex items-center gap-2.5 text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors justify-center md:justify-start" href="#">
<iconify-icon className="text-sm text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors" icon="ri:twitter-x-line"></iconify-icon>
<span>Twitter / X</span>
</a>
<a className="group flex items-center gap-2.5 text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors justify-center md:justify-start" href="#">
<iconify-icon className="text-sm text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors" icon="ri:github-line"></iconify-icon>
<span>GitHub</span>
</a>
<a className="group flex items-center gap-2.5 text-xs text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors justify-center md:justify-start" href="#">
<iconify-icon className="text-sm text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors" icon="ri:linkedin-line"></iconify-icon>
<span>LinkedIn</span>
</a>
</div>
</div>
<div className="flex flex-col items-center justify-center gap-2.5 mt-2 md:mt-0">
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--accent)] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--accent)]"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                System Online
              </span>
</div>
<div className="flex gap-3 text-[9px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest opacity-80">
<span>SYS::v1.0</span>
<span className="text-[color:var(--border)]">|</span>
<span>Policies Active</span>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] opacity-70">
              System
            </span>
<div className="flex flex-col gap-2.5 text-center md:text-right">
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                System Overview
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                Use Cases
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                Docs
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                Pricing
              </a>
</div>
</div>
</div>
<div className="pt-4 border-t border-[color:var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
            © 2026 Buildr Systems
          </span>
<div className="flex gap-6">
<a className="text-[10px] font-mono text-[color:var(--text-subtle)] hover:text-[color:var(--text)] uppercase tracking-widest transition-colors" href="#">
              Privacy
            </a>
<a className="text-[10px] font-mono text-[color:var(--text-subtle)] hover:text-[color:var(--text)] uppercase tracking-widest transition-colors" href="#">
              Terms
            </a>
</div>
</div>
</div>
</footer>








    </>
  );
}
