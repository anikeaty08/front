import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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

        const tags = ['INGEST::ACTIVE', 'GOVERN::ACTIVE', 'DEPLOY::ACTIVE'];
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
<span className="text-[color:var(--text)] font-display text-lg sm:text-xl uppercase tracking-tighter cursor-default">
            Buildr
          </span>
</div>
<div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="group relative px-1 py-2 text-[13px] font-medium text-[color:var(--text)] transition-colors tracking-tight" href="#">
            Infrastructure
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors tracking-tight" href="#">
            Solutions
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors tracking-tight" href="#">
            Docs
          </a>
<a className="px-1 py-2 text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors tracking-tight" href="#">
            Pricing
          </a>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]" id="mobile-menu-button">
<iconify-icon className="text-[color:var(--text)] text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<a className="hidden sm:block text-[13px] font-normal text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors" href="#">
            Sign in
          </a>
<a className="text-xs px-5 py-2.5 bg-[color:var(--accent)] text-white font-semibold rounded tracking-tight transition-all duration-300 hover:bg-[color:var(--accent-hover)] shadow-[var(--shadow)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]" href="#">
            Request Access
          </a>
</div>
</div>
</nav>

<main className="section section--main overflow-hidden min-h-screen flex flex-col sm:px-6 sm:pt-36 sm:pb-24 z-10 pt-36 pr-4 pb-24 pl-4 relative">
<div className="absolute inset-0" data-container-bg="true">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/crystalball-de222de54d6fc4752fa850b54fb654de/" width="100%"></iframe>
</div>
</div>
<div className="mx-auto text-center relative max-w-7xl flex-1 flex flex-col items-center">
<div className="absolute -top-20 sm:-top-32 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[200px] sm:h-[300px] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none bg-[color:var(--accent)]/10"></div>
<div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
<div className="hero-eyebrow flex items-center gap-3 mb-6">
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
<span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[color:var(--text-subtle)]">
              API Infrastructure for Modern SaaS
            </span>
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
</div>
<h1 className="hero-title sm:text-6xl md:text-7xl uppercase leading-[0.95] text-4xl font-medium text-[color:var(--text)] tracking-tighter font-display mb-3 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
            The Infrastructure
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              for Modern APIs.
            </span>
</h1>
<p className="hero-subtitle text-[color:var(--text)] text-lg sm:text-xl font-normal tracking-tight mb-8 leading-tight bg-[color:var(--bg-card)]/70 backdrop-blur-sm rounded-lg px-4 py-3 shadow-[var(--shadow)]">
            Design, secure, and deploy scalable API endpoints — without exposing
            your core logic.
          </p>
<p className="hero-context text-sm sm:text-base text-[color:var(--text)] max-w-xl mx-auto mb-10 leading-relaxed font-light text-center bg-[color:var(--bg-card)]/70 backdrop-blur-sm rounded-lg px-3 py-3 shadow-[var(--shadow)]">
            Buildr is the control layer behind modern SaaS platforms. It
            validates requests, enforces policies, and governs deployment —
            turning fragile endpoints into production-grade infrastructure.
          </p>
<div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3 bg-[color:var(--accent)] text-white text-sm font-semibold rounded tracking-tight transition-all duration-300 hover:bg-[color:var(--accent-hover)] shadow-[var(--shadow)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-main)]">
              Request Access
            </button>
<button className="w-full sm:w-auto px-6 py-3 bg-[color:var(--bg-card)] text-[color:var(--text)] border border-[color:var(--border)] hover:bg-[color:var(--bg-card-hover)] text-sm font-medium rounded transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-main)]">
              View Documentation
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
                  Endpoint_Preview::v1
                </span>
</div>
<div className="flex bg-[color:var(--bg-surface)] rounded p-1 border border-[color:var(--border)]">
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded bg-[color:var(--bg-card)] text-[color:var(--text)] border border-[color:var(--border)] shadow-[var(--shadow)] transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20" id="btn-input" onclick="toggleHeroPanel('input')">
                  Request
                </button>
<button className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider font-medium rounded text-[color:var(--text-subtle)] hover:text-[color:var(--text)] border border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20" id="btn-output" onclick="toggleHeroPanel('output')">
                  Response
                </button>
</div>
</div>
<div className="relative h-[340px] bg-[color:var(--bg-card)] group">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none"></div>
<div className="absolute inset-0 p-6 sm:p-10 transition-all duration-500 opacity-100 translate-y-0 z-10 flex flex-col justify-center" id="panel-input">
<div className="font-mono text-xs sm:text-sm leading-loose text-[color:var(--text-muted)]">
<div className="flex gap-3">
<span className="text-[color:var(--accent)]">const</span>
<span className="text-[color:var(--text)]">request</span>
                    = {
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">endpoint</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">
                      '/payments'
                    </span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">method</span>
                    :
                    <span className="text-[color:var(--accent)]">"POST"</span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">auth</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">
                      "Bearer key_xxx"
                    </span>
                    ,
                  </div>
<div className="pl-6">
<span className="text-[color:var(--text)]">payload</span>
                    : {
                  </div>
<div className="pl-12">
<span className="text-[color:var(--text)]">amount</span>
                    :
                    <span className="text-[color:var(--accent)]">2400</span>
                    ,
                  </div>
<div className="pl-12">
<span className="text-[color:var(--text)]">currency</span>
                    :
                    <span className="text-[color:var(--text-subtle)]">"USD"</span>
</div>
<div className="pl-6">}</div>
<div>};</div>
</div>
<div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-100">
<span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse"></span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
                    Infrastructure Active
                  </span>
</div>
</div>
<div className="absolute inset-0 transition-all duration-500 opacity-0 translate-y-4 z-0 flex items-center justify-center" id="panel-output">
<div className="w-full max-w-sm bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-lg p-6 shadow-[var(--shadow)] relative overflow-hidden transform transition-all duration-500 scale-95" id="output-card">
<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[color:var(--accent)]/60 to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[color:var(--bg-surface)] flex items-center justify-center border border-[color:var(--border)]">
<iconify-icon className="text-[color:var(--text)] text-sm" icon="solar:server-square-bold"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-[color:var(--text)] uppercase tracking-wide">
                          Payment Status
                        </h4>
<p className="text-[10px] text-[color:var(--text-subtle)]">
                          Transaction ID: #tx_9982
                        </p>
</div>
</div>
<span className="text-[9px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded border border-[#10b981]/20">
                      200 OK
                    </span>
</div>
<div className="space-y-3 mb-6 font-mono text-[10px]">
<div className="flex justify-between items-center py-2 border-b border-[color:var(--border)]">
<span className="text-[color:var(--text-subtle)]">
                        Status
                      </span>
<span className="text-[color:var(--text)]">Processed</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[color:var(--border)]">
<span className="text-[color:var(--text-subtle)]">
                        Latency
                      </span>
<span className="text-[color:var(--text)]">34ms</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-[color:var(--border)]">
<span className="text-[color:var(--text-subtle)]">
                        Policies
                      </span>
<span className="text-[color:var(--text)] flex items-center gap-1">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:shield-check-bold"></iconify-icon>
                        Enforced
                      </span>
</div>
</div>
<button className="w-full py-2 bg-[color:var(--bg-surface)] text-[color:var(--text)] text-[10px] font-semibold uppercase tracking-widest rounded hover:bg-[color:var(--border)] transition-colors focus:outline-none border border-[color:var(--border)]">
                    View Logs
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
              Workflow v2.0
            </span>
<h2 className="text-3xl md:text-5xl font-display text-[color:var(--text)] uppercase tracking-tighter leading-none mb-4 font-medium">
              REQUEST
              <br/>
<span className="font-semibold text-[color:var(--accent)]">
                →
                <span className="font-semibold">PRODUCTION</span>
</span>
</h2>
<p className="text-[color:var(--text-muted)] text-sm font-light leading-relaxed mb-12 max-w-md">
              Buildr converts raw requests into governed, production-ready
              actions—without exposing your infrastructure.
            </p>
<div className="relative flex flex-col gap-0" id="pipeline-controls">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[color:var(--border)]"></div>
<div className="absolute left-0 top-0 w-[2px] bg-[color:var(--accent)] h-[33.33%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="active-line"></div>
<button className="pipeline-btn active group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(0)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text)] transition-colors">
                    REQUEST INGESTION
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--accent)] bg-[color:var(--accent-soft)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    INGEST
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                  Validate structure, authentication, and schema compliance.
                </p>
</button>
<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(1)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                    POLICY &amp; GOVERNANCE
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--text-subtle)] bg-[color:var(--bg-card)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    GOVERN
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-subtle)] group-hover:text-[color:var(--text-muted)] leading-relaxed max-w-sm transition-colors">
                  Rate limiting, access control, and usage metering.
                </p>
</button>
<button className="pipeline-btn group text-left pl-8 py-6 relative transition-all duration-300 outline-none focus:outline-none" onclick="switchPipeline(2)">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-lg font-semibold text-[color:var(--text-subtle)] group-hover:text-[color:var(--text)] transition-colors">
                    PRODUCTION DEPLOYMENT
                  </h3>
<span className="font-mono text-[9px] text-[color:var(--text-subtle)] bg-[color:var(--bg-card)] border border-[color:var(--border)] px-1.5 py-0.5 rounded opacity-100 transition-all tag-label">
                    DEPLOY
                  </span>
</div>
<p className="text-sm font-light text-[color:var(--text-subtle)] group-hover:text-[color:var(--text-muted)] leading-relaxed max-w-sm transition-colors">
                  Expose as REST endpoint, webhook, or internal service.
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
                SYSTEM STATE :: API_GATEWAY
              </span>
<div className="text-[9px] font-mono font-semibold text-[color:var(--accent)] bg-[color:var(--accent-soft)] px-2 py-1 rounded border border-[color:var(--border)] transition-all duration-300" id="pipeline-header-tag">
                INGEST::ACTIVE
              </div>
</div>
<div className="relative flex-1 w-full bg-[color:var(--bg-card)]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none"></div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-100 translate-x-0 z-10" id="pipeline-visual-0">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)] animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Request Parsing
                    </span>
</div>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                    01 / 03
                  </span>
</div>
<div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
<div className="flex flex-col gap-2">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-1">
                      Header Validation
                    </span>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono border-l-2 border-l-[color:var(--accent)] shadow-[var(--shadow)]">
                      Authorization
                    </div>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono">
                      Content-Type
                    </div>
<div className="px-3 py-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-card)] text-[10px] text-[color:var(--text-muted)] font-mono">
                      Origin
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
                        Payload Decoded
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        2
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Schema Verified
                      </span>
</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-[color:var(--bg-surface)] text-[9px] flex items-center justify-center text-[color:var(--text)] border border-[color:var(--border)]">
                        3
                      </div>
<span className="text-[10px] text-[color:var(--text)]">
                        Context Injected
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
                      Authenticated
                    </span>
<span className="px-2 py-1 rounded bg-[color:var(--bg-surface)] border border-[color:var(--border)] text-[9px] text-[color:var(--text-muted)] font-mono flex items-center gap-1.5">
<iconify-icon className="text-[color:var(--text-subtle)] text-xs" icon="solar:check-circle-bold"></iconify-icon>
                      Valid JSON
                    </span>
</div>
</div>
</div>
<div className="pipeline-visual absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-0 scale-95 pointer-events-none z-0" id="pipeline-visual-1">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-[color:var(--border)]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[color:var(--text)]" icon="solar:shield-check-bold"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text)]">
                      Policy Enforcement
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
                        Governance Engine
                      </span>
<iconify-icon className="text-[color:var(--accent)] text-xs" icon="solar:lock-bold"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text)]">
<iconify-icon className="text-[color:var(--text-subtle)]" icon="solar:server-square-linear"></iconify-icon>
                      Rate limit check: 45/60 reqs
                    </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text)]">
<iconify-icon className="text-[color:var(--text-subtle)]" icon="solar:eye-closed-linear"></iconify-icon>
                      Endpoint authorization: Scoped
                    </div>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full w-20 text-right pr-3">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] block mb-1">
                      Rules
                    </span>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight">
                      Token buckets
                    </div>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight mt-1">
                      ACL Checks
                    </div>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full w-20 text-left pl-3">
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] block mb-1">
                      Audit
                    </span>
<div className="text-[9px] text-[color:var(--text-muted)] leading-tight">
                      Access Logs
                    </div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)] flex items-center justify-between">
<div className="flex gap-1">
<div className="h-1 w-6 rounded-full bg-[color:var(--accent)] opacity-70"></div>
<div className="h-1 w-6 rounded-full bg-[color:var(--accent)] opacity-70"></div>
</div>
<div className="text-[9px] font-mono text-[color:var(--accent)] uppercase tracking-wide flex items-center gap-2">
<span>Approved</span>
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
                      Production
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
                          REST API
                        </span>
</div>
<div className="flex-1 bg-[color:var(--bg-card)] border border-[color:var(--border)] p-2.5 rounded text-center opacity-80">
<iconify-icon className="text-[color:var(--text-muted)] text-sm mb-1" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-[10px] text-[color:var(--text-muted)] block">
                          Webhook
                        </span>
</div>
</div>
</div>
<div>
<span className="text-[9px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-2 block">
                      Response Config
                    </span>
<div className="space-y-2.5 bg-[color:var(--bg-card)] p-3 rounded border border-[color:var(--border)] shadow-[0_1px_0_rgba(15,23,42,0.03)]">
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        JSON Serialized
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Headers Signed
                      </div>
<div className="flex items-center gap-2 text-[10px] text-[color:var(--text-muted)]">
<iconify-icon className="text-[color:var(--accent)]" icon="solar:check-square-bold"></iconify-icon>
                        Latency Tracked
                      </div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-[color:var(--border)]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-[color:var(--text)] uppercase tracking-wide">
                      Uptime
                    </span>
<span className="flex items-center gap-1 text-[9px] text-[color:var(--text)] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                      99.99%
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
              Target Architectures
            </span>
<div className="w-1 h-1 rounded-full bg-[color:var(--accent)]"></div>
</div>
<h2 className="text-4xl md:text-6xl font-display text-[color:var(--text)] uppercase tracking-tighter leading-[0.95] mb-6 font-medium">
            Built For
            <span className="text-[color:var(--accent)] font-semibold">
              → Platforms
            </span>
</h2>
<p className="text-base text-[color:var(--text-muted)] leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            Buildr isn't a simple gateway; it's an operating system designed for
            scale. Whether you're building SaaS, fintech, or marketplaces, our
            infrastructure ensures reliability.
          </p>
<div className="flex flex-col items-center gap-6">
<p className="text-xs text-[color:var(--text-subtle)] font-medium tracking-widest uppercase">
              Infrastructure for builders who ship systems.
            </p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Scalable Endpoints
              </span>
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Secure Validation
              </span>
<span className="px-2.5 py-1 rounded border border-[color:var(--border)] bg-[color:var(--bg-surface)] text-[10px] text-[color:var(--text-subtle)] font-mono uppercase tracking-wide">
                Managed Compliance
              </span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
<div className="group relative flex flex-col p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-[var(--shadow)] hover:bg-[color:var(--bg-card-hover)] transition-all duration-300 h-full overflow-hidden animate-on-scroll transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/40 to-transparent opacity-60"></div>
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[color:var(--text)] border-b border-[color:var(--accent)]/30 pb-0.5">
                SaaS Platforms
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                01
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Public API Access
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Secure public APIs without exposing backend logic. Manage tenant
              keys and usage quotas effortlessly.
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
                Fintech
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                02
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Transaction Safety
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Enforce strict validation and policy control on financial
              transactions. Guarantee immutability.
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
                Marketplaces
              </span>
<span className="text-[10px] font-mono text-[color:var(--text-subtle)]">
                03
              </span>
</div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-3">
              Tenant Governance
            </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8 flex-1">
              Govern multi-tenant endpoints with access segmentation. Isolate
              data and performance per user.
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
                  Structured Ingest
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Strict schema enforcement
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
                  Protected Core
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Logic stays server-side
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
                  Governed Ship
                </h4>
<p className="text-[11px] text-[color:var(--text-muted)] font-light">
                  Endpoints scale instantly
                </p>
</div>
</div>
</div>
</div>
<div className="text-center mb-12">
<p className="text-xs font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
            Two perspectives: The builder's config vs. The consumer's
            experience.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[color:var(--border)] rounded-2xl overflow-hidden bg-[color:var(--bg-card)] shadow-[var(--shadow)] animate-on-scroll">
<div className="p-8 lg:p-12 relative flex flex-col justify-between group border-b lg:border-b-0 lg:border-r border-[color:var(--border)]">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)] border border-[color:var(--border)] px-2 py-1 rounded bg-[color:var(--accent-soft)]">
                Developer View
              </span>
</div>
<div className="mt-12 space-y-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-16">
<div className="font-mono text-xs text-[color:var(--text-subtle)] leading-loose">
<div className="flex gap-4">
<span className="text-[color:var(--accent)]">const</span>
<span className="text-[color:var(--text)]">endpoint</span>
                  = {
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">path</span>
                  :
                  <span className="text-[color:var(--text-subtle)]">
                    '/v1/charge'
                  </span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">method</span>
                  :
                  <span className="text-[color:var(--accent)]">'POST'</span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">rate_limit</span>
                  :
                  <span className="text-[color:var(--text-subtle)]">
                    '1000/min'
                  </span>
                  ,
                </div>
<div className="flex gap-4 pl-4">
<span className="text-[color:var(--text)]">schema</span>
                  :
                  <span className="text-[color:var(--accent)]">Schema.Payment</span>
</div>
<div className="flex gap-4">};</div>
</div>
</div>
<div className="">
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-2">
                Total Control
              </h3>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                You define the validation rules, methods, and schemas. The
                complexity is managed by the infrastructure.
              </p>
</div>
</div>
<div className="p-8 lg:p-12 relative bg-[color:var(--bg-surface)] flex flex-col justify-between group">
<div className="absolute top-6 left-6 z-10">
<span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--text-subtle)] border border-[color:var(--border)] px-2 py-1 rounded bg-[color:var(--bg-card)]">
                Consumer View
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
<div className="font-mono text-[9px] text-[color:var(--text)] leading-relaxed">
<span className="text-[#10b981]">{</span>
<br/>
                      "status": "success",
                    <br/>
                      "id": "ch_329482",
                    <br/>
                      "amount": 2400,
                    <br/>
                      "captured": true
                    <br/>
<span className="text-[#10b981]">}</span>
</div>
<div className="w-full h-px bg-[color:var(--border)]"></div>
<div className="flex justify-between items-center text-[9px]">
<span className="text-[color:var(--text-subtle)]">
                      Latency: 42ms
                    </span>
<span className="text-[#10b981] font-semibold">200 OK</span>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xl text-[color:var(--text)] font-display uppercase tracking-tight mb-2">
                Predictable Response
              </h3>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed max-w-sm">
                Your consumers interact with a clean, fast, and documented API
                endpoint that just works.
              </p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-[0.2em] opacity-90">
            One platform. End-to-end API lifecycle management.
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
              // Benefits
            </span>
<h2 className="text-3xl md:text-5xl font-display font-medium text-[color:var(--text)] uppercase tracking-tighter leading-none mb-4">
              API
              <br/>
<span className="text-[color:var(--accent)] font-semibold">
                → OUTCOMES
              </span>
</h2>
<p className="text-sm text-[color:var(--text-muted)] leading-relaxed font-light">
              Shift from fragile scripts to durable infrastructure. Buildr
              transforms raw backend logic into scalable, secure assets.
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
                // REVENUE
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Monetized Endpoints
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Turn your backend into a business. Charge per request, not per
                hour.
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
                // CONTROL
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Enforced Rate Limits
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Prevent abuse with granular rate limiting per user, IP, or
                token.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Chaos → Order
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-[color:var(--accent-soft)] to-transparent opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/45 to-transparent opacity-70"></div>
<div className="relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent)] mb-4 block">
                // SECURITY
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Tokenized Access
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Issue and revoke API keys instantly. Manage scopes and
                permissions centrally.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] group-hover:text-[color:var(--accent)] transition-colors flex items-center gap-2 relative z-10">
              Open → Secured
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // OBSERVABILITY
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Centralized Logging
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Full visibility into every request, latency metrics, and error
                rate.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Blind → Visible
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // DEVOPS
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Multi-Environment
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Deploy to staging, prod, and dev environments with a single
                configuration.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Manual → CI/CD
            </div>
</div>
<div className="group bg-[color:var(--bg-card)] hover:bg-[color:var(--bg-card-hover)] transition-colors p-8 flex flex-col justify-between h-full relative">
<div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--accent)]/15 transition-colors pointer-events-none"></div>
<div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-subtle)] mb-4 block">
                // GOVERNANCE
              </span>
<h3 className="text-lg font-semibold text-[color:var(--text)] mb-2 tracking-tight">
                Policy-Driven Execution
              </h3>
<p className="text-sm text-[color:var(--text-muted)] font-light leading-relaxed mb-8">
                Define execution policies that apply globally across all your
                endpoints.
              </p>
</div>
<div className="text-[10px] font-mono text-[color:var(--text-subtle)] transition-colors">
              Ad-hoc → Standardized
            </div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[11px] font-mono text-[color:var(--text-subtle)] tracking-widest uppercase opacity-90">
            Infrastructure grade. Enterprise ready.
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
            Immutable Infrastructure.
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              Infinite Scale.
            </span>
</h2>
<p className="text-base text-[color:var(--text-muted)] font-light leading-relaxed mb-10 max-w-2xl mx-auto animate-on-scroll">
            Outcomes compound because the architecture is stable. Buildr
            provides a single layer that validates inputs, protects logic, and
            governs execution across every API you ship.
          </p>
<div className="flex flex-wrap items-center gap-8 border-t border-[color:var(--border)] pt-6 justify-center animate-on-scroll">
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                100%
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Schema Validation
              </div>
</div>
<div className="w-px h-8 bg-[color:var(--border)]"></div>
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                AES-256
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Encryption
              </div>
</div>
<div className="w-px h-8 bg-[color:var(--border)]"></div>
<div>
<div className="text-lg font-semibold text-[color:var(--text)] tracking-tight">
                &lt;50ms
              </div>
<div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] mt-1">
                Overhead
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
              Logic Encapsulation
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light relative z-10">
              Business logic is isolated. Backend complexity is never exposed to
              the client.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[color:var(--text-muted)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Exposed → Secured
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
              Centralized Policy
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
              Unified Deployment
            </h3>
<p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-8 font-light relative z-10">
              One core serves REST APIs, webhooks, and internal services
              simultaneously.
            </p>
<div className="mt-auto flex justify-between items-end relative z-10">
<span className="text-[9px] font-mono text-[color:var(--text-muted)] bg-[color:var(--bg-surface)] px-1.5 py-0.5 rounded border border-[color:var(--border)]">
                Fragmented → Unified
              </span>
</div>
</div>
</div>
<div className="mt-20 border-t border-[color:var(--border)] pt-8 text-center animate-on-scroll">
<p className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-[0.2em]">
            This is the infrastructure that makes every request reliable.
          </p>
</div>
</div>
<div aria-hidden="true" className="surface-seam"></div>
</section>

<section className="section section--surface section-divider py-32">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent),_transparent_90%)] opacity-[0.04] pointer-events-none z-0"></div>
<div className="spotlight absolute top-[-20%] left-0 right-0 h-[600px] bg-[radial-gradient(800px_circle_at_top,_rgba(37,99,235,0.12),_transparent_70%)] pointer-events-none z-0"></div>
<div className="section-content max-w-3xl mx-auto px-6 relative z-10">
<div className="relative rounded-3xl border border-[color:var(--accent)]/10 bg-[color:var(--bg-card)]/90 backdrop-blur-xl p-8 md:p-14 text-center overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),_inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-[color:var(--border)] group">
<div className="absolute top-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_top_left,_var(--accent),_transparent_70%)] opacity-[0.04] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accent)]/60 to-transparent shadow-[0_1px_6px_rgba(37,99,235,0.4)]"></div>
<h2 className="text-4xl md:text-6xl font-display text-[color:var(--text)] mb-6 uppercase tracking-tighter leading-[0.95] font-medium relative z-10">
            Ship APIs
            <br/>
<span className="text-[color:var(--accent)] font-semibold">
              with Confidence.
            </span>
</h2>
<p className="text-sm md:text-base text-[color:var(--text)]/80 mb-10 max-w-lg mx-auto leading-relaxed font-normal relative z-10">
            Deploy governed, production-ready endpoints in minutes.
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
                Deploy as API
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
<input className="w-full sm:w-72 bg-[color:var(--bg-surface)] border border-[color:var(--border)] rounded-lg px-4 py-3.5 text-sm text-[color:var(--text)] placeholder-[color:var(--text-subtle)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 focus:border-[color:var(--accent)] transition-all shadow-inner" placeholder="Enter work email" type="email"/>
<button className="w-full sm:w-auto px-10 py-3.5 bg-[color:var(--accent)] text-white text-sm font-semibold rounded-lg tracking-tight shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:bg-[color:var(--accent-hover)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/25 focus:ring-offset-2 focus:ring-offset-[color:var(--bg-card)]">
              Request Access
            </button>
</div>
<div className="mb-10">
<a className="inline-flex items-center gap-1.5 text-[11px] text-[color:var(--accent)] hover:underline transition-colors group pb-0.5" href="#">
              Explore Documentation
              <iconify-icon className="text-xs text-[color:var(--accent)] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col items-center gap-8 mt-6 relative z-10">
<div className="w-full max-w-[340px] flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] select-none">
<div className="flex flex-col items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
<span className="text-[color:var(--text)] font-semibold">
                  Email Received
                </span>
</div>
<div className="h-px flex-1 bg-[color:var(--border)] mx-3 mb-4"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--border)]"></div>
<span className="opacity-70">Key Issued</span>
</div>
<div className="h-px flex-1 bg-[color:var(--border)] mx-3 mb-4"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[color:var(--border)]"></div>
<span className="opacity-70">Webhook Active</span>
</div>
</div>
<div className="text-center space-y-1.5">
<p className="text-[10px] text-[color:var(--text-muted)] font-medium">
                Start shipping production-grade endpoints today.
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
                Infrastructure Active
              </span>
</div>
<div className="flex gap-3 text-[9px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest opacity-80">
<span>API::v2.4</span>
<span className="text-[color:var(--border)]">|</span>
<span>All Systems Operational</span>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--text-subtle)] opacity-70">
              Platform
            </span>
<div className="flex flex-col gap-2.5 text-center md:text-right">
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                Infrastructure
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                Solutions
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                API Docs
              </a>
<a className="text-xs text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors" href="#">
                Pricing
              </a>
</div>
</div>
</div>
<div className="pt-4 border-t border-[color:var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
<span className="text-[10px] font-mono text-[color:var(--text-subtle)] uppercase tracking-widest">
            © 2026 Buildr Infrastructure
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
