import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Attach lucide icons (1.5 strokeWidth)
      lucide.createIcons({
        attrs: { "stroke-width": 1.5 },
        icons: {
          ArrowUpRight: lucide.ArrowUpRight,
          ExternalLink: lucide.ExternalLink,
          Mail: lucide.Mail,
        },
      });

      document.getElementById("arrow-icon").innerHTML =
        lucide.ArrowUpRight.toSvg({ "stroke-width": 1.5, class: "w-4 h-4" });
      document.getElementById("work-icon").innerHTML =
        lucide.ArrowUpRight.toSvg({ "stroke-width": 1.5, class: "w-3.5 h-3.5" });
      document.getElementById("link-icon").innerHTML =
        lucide.ExternalLink.toSvg({ "stroke-width": 1.5, class: "w-3.5 h-3.5" });
      document.getElementById("mail-icon").innerHTML =
        lucide.Mail.toSvg({ "stroke-width": 1.5, class: "w-4 h-4" });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex-1 flex flex-col">

<header className="w-full border-b border-white/5 bg-[#05040A]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 sm:h-20">

<div className="flex items-center space-x-2">
<div className="h-8 w-8 rounded-lg border border-white/15 flex items-center justify-center bg-white/5">
<span className="text-xs font-semibold tracking-[0.22em] uppercase">Mg</span>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-sm sm:text-base font-medium tracking-tight text-white">Magna Studio</span>
<span className="text-[11px] text-white/40">
                  Web design &amp; build
                </span>
</div>
</div>

<nav className="hidden md:flex items-center space-x-8 text-sm">
<button className="text-white/70 hover:text-white transition-colors">
                Work
              </button>
<button className="text-white/70 hover:text-white transition-colors">
                Services
              </button>
<button className="text-white/70 hover:text-white transition-colors">
                Process
              </button>
<button className="text-white/70 hover:text-white transition-colors">
                Studio
              </button>
</nav>

<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex items-center text-xs sm:text-sm text-white/60 hover:text-white transition-colors">
<span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Now booking Q1 2025</span>
</button>
<button className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-tight text-white hover:bg-white/10 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A2FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05040A] transition-colors">
<span>Book a call</span>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative border-b border-white/5 bg-gradient-to-b from-[#05040A] via-[#05040A] to-[#080617]">

<div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
<div className="absolute -top-40 -right-24 h-80 w-80 rounded-full bg-[#C5A4FF]/10 blur-3xl"></div>
<div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#7E80FF]/10 blur-3xl"></div>
<div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

<div className="w-full lg:w-[52%]">
<div className="inline-flex items-center space-x-2 mb-6">
<div className="rounded-full bg-white/5 border border-white/10 px-2 py-1 flex items-center space-x-2">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/60">Web Studio</span>
</div>
<span className="text-[11px] text-white/40">
                    Based in Europe · Available Worldwide
                  </span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.05] md:leading-tight font-semibold tracking-tight text-white mb-5">
                  Magnetic websites for brands
                  <span className="text-[#C5A4FF]">ready to get serious</span>.
                </h1>
<p className="text-sm sm:text-base text-white/65 max-w-xl mb-8 leading-relaxed">
                  Magna is a small web studio crafting conversion-focused,
                  performance-first websites for teams who are done treating
                  their site like an afterthought.
                </p>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70">
<span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#FFB86C]"></span>
<span className="uppercase tracking-[0.16em]">Three spots left this quarter</span>
</div>
<div className="flex items-center text-[11px] text-white/45 space-x-2">
<span className="h-px w-6 bg-white/10"></span>
<span>Average project timeline: 4–6 weeks</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-white text-[#05040A] px-5 sm:px-6 py-2.5 text-sm font-medium tracking-tight hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05040A] transition-colors">
<span>Schedule a discovery call</span>
<span className="ml-2" id="arrow-icon"></span>
</button>
<button className="inline-flex items-center text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05040A] rounded-full px-3 py-1 transition-colors">
<span>View selected projects</span>
<span className="ml-2" id="work-icon"></span>
</button>
</div>

<div className="mt-10 border-t border-white/10 pt-5">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
<div className="flex -space-x-2">
<img alt="Client 1" className="h-7 w-7 rounded-full border border-[#05040A]" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<img alt="Client 2" className="h-7 w-7 rounded-full border border-[#05040A]" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<img alt="Client 3" className="h-7 w-7 rounded-full border border-[#05040A]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="h-7 w-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[10px] text-white/60">
                        +12
                      </div>
</div>
<p className="text-xs text-white/45 max-w-xs">
                      Growing teams across SaaS, e‑commerce, and productized
                      services trust Magna with their first impressions.
                    </p>
</div>
</div>
</div>

<div className="w-full lg:w-[48%] flex">
<div className="relative w-full rounded-2xl border border-white/10 bg-[#090716]/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.7)] overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-5 pt-4 sm:pt-5 pb-3 border-b border-white/10">
<div className="flex items-center space-x-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                        Latest Launch
                      </span>
</div>
<div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60">
                      B2B SaaS · 5.2s → 1.1s LCP
                    </div>
</div>

<div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-4 space-y-5">

<div className="relative overflow-hidden rounded-xl border border-white/8 bg-gradient-to-br from-[#151125] via-[#0D0A17] to-[#070515]">
<div className="absolute inset-x-0 top-0 h-7 bg-black/40 flex items-center px-3 space-x-1">
<span className="h-2 w-2 rounded-full bg-[#FF5F57]"></span>
<span className="h-2 w-2 rounded-full bg-[#FEBB2E]"></span>
<span className="h-2 w-2 rounded-full bg-[#28C840]"></span>
<span className="ml-3 text-[10px] text-white/40 font-medium">clarum.io</span>
</div>
<img alt="Project preview" className="w-full h-[200px] sm:h-[220px] object-cover mt-7" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none"></div>
</div>

<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-white/55">Conversion rate</span>
<span className="text-[10px] text-emerald-300/90 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">+41%</span>
</div>
<div className="text-sm font-medium tracking-tight">
                          2.9% → 4.1%
                        </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-white/55">Lead quality</span>
<span className="text-[10px] text-[#FFB86C] bg-[#FFB86C]/10 px-1.5 py-0.5 rounded-full">+33%</span>
</div>
<div className="text-sm font-medium tracking-tight">
                          Sales‑ready leads
                        </div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium tracking-tight text-white">
                            Clarum — Revenue analytics for B2B teams
                          </p>
<p className="text-xs text-white/55 mt-1">
                            Strategy, UX, UI, Webflow, CMS, performance
                            optimization.
                          </p>
</div>
<button className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70 hover:bg-white/10 hover:border-white/25 transition-colors">
<span>Case study</span>
<span className="ml-1" id="link-icon"></span>
</button>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 px-4 sm:px-5 py-3 gap-3 text-[11px]">
<div className="flex items-center space-x-3">
<div className="h-6 w-6 rounded-full border border-white/10 overflow-hidden">
<img alt="Founder" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="text-white/70">“We closed 4 deals in 3 weeks
                          post‑launch.”</p>
<p className="text-white/40 mt-0.5">
                          Founder at Clarum (Series A)
                        </p>
</div>
</div>
<div className="flex items-center space-x-2 text-white/40">
<span className="h-px w-8 bg-white/10 hidden sm:block"></span>
<span>Designed &amp; built by Magna</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-14 grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">

<div className="rounded-2xl border border-white/10 bg-[#090716]/70 px-4 sm:px-5 py-4 sm:py-5">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm sm:text-base font-medium tracking-tight text-white">
                    What we do
                  </h2>
<span className="text-[11px] text-white/45 border border-white/10 rounded-full px-2 py-0.5">End‑to‑end or à la carte</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Positioning &amp; narrative</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Website strategy</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">UX &amp; high‑fidelity UI</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Design systems</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Webflow development</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">CMS &amp; content modeling</span>
<span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">Performance &amp; SEO foundations</span>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#090716]/70 px-4 sm:px-5 py-4 sm:py-5">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm sm:text-base font-medium tracking-tight text-white">
                    Typical engagement
                  </h2>
<span className="text-[11px] text-white/45">4–8 weeks</span>
</div>
<div className="space-y-2 text-xs text-white/60">
<p>
                    We partner with teams at the inflection point: new product
                    launch, fresh positioning, fundraising, rebrand, or simply
                    when “that landing page you’ll fix later” needs to carry
                    real weight.
                  </p>
<p>
                    Prefer a retain­er model? We offer ongoing design &amp; website
                    ops support for select clients.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#05040A]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">

<div>
<div className="flex items-center space-x-2 mb-4">
<span className="h-px w-7 bg-white/20"></span>
<span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">How it works</span>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
                  A focused, high‑touch process built around your outcomes.
                </h2>
<p className="text-sm text-white/65 max-w-xl mb-8">
                  No bloated decks, no disappearing designers. Just a small
                  dedicated team, tight communication, and work that keeps
                  momentum instead of slowing it.
                </p>
<div className="space-y-4">

<div className="flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-white/20 text-[11px] text-white/75">
                      01
                    </div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">
                        Direction &amp; discovery
                      </h3>
<p className="text-xs text-white/60">
                        We map out where your site sits in the bigger picture:
                        goals, constraints, jobs‑to‑be‑done, and the non‑negoti­
                        ables for this version of your brand.
                      </p>
</div>
</div>

<div className="flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-white/20 text-[11px] text-white/75">
                      02
                    </div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">
                        Structure, story, and flows
                      </h3>
<p className="text-xs text-white/60">
                        Sitemap, content hierarchy, core narrative, and page
                        flows tuned for how people actually evaluate your
                        product or service.
                      </p>
</div>
</div>

<div className="flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-white/20 text-[11px] text-white/75">
                      03
                    </div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">
                        Visual system &amp; key screens
                      </h3>
<p className="text-xs text-white/60">
                        High‑fidelity UI, component library, and motion details
                        that make your product feel real, considered, and
                        premium without being precious.
                      </p>
</div>
</div>

<div className="flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
<div className="mt-0.5 h-6 w-6 flex items-center justify-center rounded-full border border-white/20 text-[11px] text-white/75">
                      04
                    </div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">
                        Build, QA, and handoff
                      </h3>
<p className="text-xs text-white/60">
                        We ship in a modern site builder with clean structure,
                        accessible interactions, training, and a tidy system so
                        your team can own it long‑term.
                      </p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#090716]/80 px-4 sm:px-5 py-5 sm:py-6 flex flex-col justify-between h-full">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 mb-3">
                    Is Magna a fit?
                  </p>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-white mb-2">
                    We work best with teams who:
                  </h3>
<ul className="space-y-2 text-xs text-white/65">
<li className="flex">
<span className="mt-0.5 mr-2 text-white/35">•</span>
<span>See their site as a core sales, product, or
                        hiring channel—not an afterthought.</span>
</li>
<li className="flex">
<span className="mt-0.5 mr-2 text-white/35">•</span>
<span>Have clarity on their offer, even if the story needs
                        sharpening.</span>
</li>
<li className="flex">
<span className="mt-0.5 mr-2 text-white/35">•</span>
<span>Care about craft, but value shipping even more.</span>
</li>
<li className="flex">
<span className="mt-0.5 mr-2 text-white/35">•</span>
<span>Want a partner that can challenge assumptions—not just
                        push pixels.</span>
</li>
</ul>
</div>
<div className="mt-6 border-t border-white/10 pt-4 space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="space-y-1">
<p className="text-white/55">Typical investment</p>
<p className="text-sm font-medium tracking-tight text-white">
                        €6k–€18k
                      </p>
</div>
<div className="space-y-1 text-right">
<p className="text-white/55">Timeline</p>
<p className="text-sm font-medium tracking-tight text-white">
                        4–8 weeks
                      </p>
</div>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:bg-white/10 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05040A] transition-colors">
<span>Share your project</span>
<span className="ml-2" id="mail-icon"></span>
</button>
<p className="text-[11px] text-white/45">
                    Not sure where to start? Send whatever you have (deck, Loom,
                    Notion doc) and we’ll tell you if we’re a fit—or point you
                    somewhere better.
                  </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#05040A] text-xs text-white/45">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-white/60">Magna Studio</p>
<p className="text-[11px]">
              Small web studio quietly helping good teams show up better
              online.
            </p>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<a className="hover:text-white transition-colors" href="#">Notion overview</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<span className="text-white/30">© 2025</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
