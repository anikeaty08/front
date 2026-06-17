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



      // Load Lucide icons
      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
      });

      // Theme toggle with localStorage + prefers-color-scheme
      (function () {
        const root = document.documentElement;
        const toggle = document.getElementById("theme-toggle");
        const icon = document.getElementById("theme-icon");
        const stored =
          typeof window !== "undefined"
            ? window.localStorage.getItem("theme")
            : null;

        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initial =
          stored || (prefersDark ? "dark" : "light");

        function applyTheme(theme) {
          if (theme === "dark") {
            root.classList.add("dark");
            document.body.classList.remove("bg-white", "text-slate-900");
            document.body.classList.add("bg-slate-950", "text-slate-50");
            icon && icon.setAttribute("data-lucide", "moon");
          } else {
            root.classList.remove("dark");
            document.body.classList.remove("bg-slate-950", "text-slate-50");
            document.body.classList.add("bg-white", "text-slate-900");
            icon && icon.setAttribute("data-lucide", "sun");
          }
          if (window.lucide) {
            lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }
        }

        applyTheme(initial);

        if (toggle) {
          toggle.addEventListener("click", function () {
            const current = root.classList.contains("dark")
              ? "dark"
              : "light";
            const next = current === "dark" ? "light" : "dark";
            window.localStorage.setItem("theme", next);
            applyTheme(next);
          });
        }
      })();

      // Dynamic year
      document.addEventListener("DOMContentLoaded", function () {
        const yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = new Date().getFullYear();
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
      
<div className="flex min-h-screen flex-col">

<div className="relative flex-1 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute inset-x-0 top-[-10%] mx-auto h-[24rem] max-w-4xl rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.1),_transparent_55%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
</div>

<header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pt-6 sm:px-6 lg:px-8">

<a aria-label="Pranta home" className="group inline-flex items-center gap-2" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 shadow-sm shadow-black/40 ring-1 ring-black/50 backdrop-blur">
<span className="text-sm font-semibold tracking-tight text-slate-50 group-hover:text-indigo-300">
                PS
              </span>
</div>
<span className="hidden text-sm font-medium tracking-tight text-slate-300 sm:inline-flex">
              pranta.saha
            </span>
</a>

<nav aria-label="Primary" className="flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/70 px-1.5 py-1 text-xs text-slate-300 shadow-sm shadow-black/40 backdrop-blur">
<a className="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-300 hover:bg-slate-800/80 hover:text-slate-50" href="#work">
              Work
            </a>
<a className="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-300 hover:bg-slate-800/80 hover:text-slate-50" href="#about">
              About
            </a>
<a className="hidden rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-300 hover:bg-slate-800/80 hover:text-slate-50 sm:inline-flex" href="#experiments">
              Experiments
            </a>
<a className="hidden rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-300 hover:bg-slate-800/80 hover:text-slate-50 md:inline-flex" href="#contact">
              Contact
            </a>

<button aria-label="Toggle theme" className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 shadow-sm shadow-black/40 hover:bg-slate-800" id="theme-toggle" type="button">
<i className="h-3.5 w-3.5" data-lucide="moon" id="theme-icon"></i>
</button>
</nav>
</header>

<main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pb-20" id="top">

<section aria-labelledby="hero-heading" className="w-full space-y-10 lg:max-w-xl">
<div className="space-y-6">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Developer &amp; Creative Technologist
              </p>
<h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl" id="hero-heading">
                I build
                <span className="text-indigo-300">interactive</span> experiences for the modern web.
              </h1>
<p className="max-w-xl text-base font-medium text-slate-300">
                I’m Pranta, a developer focused on expressive interfaces, thoughtful motion, and
                fast, accessible products. I work primarily with
                <span className="text-sky-300">React</span>,
                <span className="text-emerald-300">TypeScript</span>, and modern tooling.
              </p>
</div>

<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 text-xs font-medium tracking-tight text-slate-950 shadow-sm shadow-slate-900/60 ring-1 ring-slate-200 hover:bg-slate-100" href="#work">
<span>View Selected Work</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/40 px-3.5 py-2 text-xs font-medium tracking-tight text-slate-200 hover:border-slate-500 hover:bg-slate-900/70" href="mailto:prantasaha.dev@gmail.com">
<i className="h-3.5 w-3.5" data-lucide="send"></i>
<span>Open to collaborations</span>
</a>
</div>

<div className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 text-xs text-slate-300 shadow-sm shadow-black/40 backdrop-blur sm:grid-cols-3">
<div className="space-y-1">
<p className="font-medium tracking-tight text-slate-400">Currently</p>
<p className="font-semibold tracking-tight text-slate-100">
                  Building React experiences
                </p>
<p className="text-[0.7rem] text-slate-400">Freelance &amp; personal projects</p>
</div>
<div className="space-y-1">
<p className="font-medium tracking-tight text-slate-400">Focus</p>
<p className="font-semibold tracking-tight text-slate-100">
                  Frontend, UX, Motion
                </p>
<p className="text-[0.7rem] text-slate-400">Performance &amp; accessibility first</p>
</div>
<div className="space-y-1">
<p className="font-medium tracking-tight text-slate-400">Stack</p>
<p className="font-semibold tracking-tight text-slate-100">
                  React, TS, Node, WebGL
                </p>
<p className="text-[0.7rem] text-slate-400">Open to exploring new tools</p>
</div>
</div>
</section>

<section aria-label="Featured visual" className="w-full lg:flex lg:flex-1 lg:justify-end">
<div className="relative mx-auto mt-2 w-full max-w-xl rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_24px_120px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-5 lg:mt-0">

<div className="mb-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20"></span>
<span className="tracking-tight">Available for select projects</span>
</div>
<div className="flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/80 px-2 py-1 text-[0.7rem] text-slate-400">
<span className="inline-flex h-1 w-1 rounded-full bg-indigo-400"></span>
<span>Last updated 2025</span>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950">

<div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-950/80 px-3 py-2">
<div className="flex items-center gap-1.5">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-500/90"></span>
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
</div>
<p className="text-[0.7rem] font-medium tracking-tight text-slate-400">
                    sahapranta.dev / portfolio.tsx
                  </p>
<div className="flex items-center gap-1 text-[0.7rem] text-slate-500">
<i className="h-2.5 w-2.5" data-lucide="circle"></i>
<i className="h-2.5 w-2.5" data-lucide="square"></i>
</div>
</div>

<div className="grid gap-0 border-t border-slate-900/60 sm:grid-cols-5">

<div className="relative col-span-3 border-r border-slate-900/60 bg-slate-950/90 p-3 sm:p-4">
<div className="mb-2 flex items-center justify-between text-[0.7rem] text-slate-400">
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="code-2"></i>
<span className="font-medium tracking-tight">React · TypeScript</span>
</div>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium">
                        src/portfolio.tsx
                      </span>
</div>
<pre className="overflow-x-auto rounded-xl bg-gradient-to-br from-slate-950/80 via-slate-950/95 to-slate-950 p-3 text-[0.68rem] leading-relaxed text-slate-300 ring-1 ring-slate-900/80"><code>// typed by pranta

const Hero = () =&gt; {
  return (
    &lt;section className="min-h-[60vh] flex flex-col justify-center"&gt;
      &lt;h1 className="text-4xl sm:text-5xl font-semibold tracking-tight"&gt;
        I build expressive web experiences
      &lt;/h1&gt;
      &lt;p className="mt-3 text-base text-slate-300"&gt;
        Focused on React, TypeScript, motion and performance.
      &lt;/p&gt;
    &lt;/section&gt;
  )
}</code></pre>
</div>

<div className="col-span-2 flex flex-col justify-between gap-3 bg-slate-950/70 p-3 sm:p-4">
<div className="space-y-2">
<p className="text-[0.7rem] font-medium tracking-tight text-slate-400">
                        Tooling
                      </p>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-sky-200 ring-1 ring-sky-500/40">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="react"></i>
                          React
                        </span>
<span className="inline-flex items-center rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-indigo-200 ring-1 ring-indigo-500/40">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="file-code"></i>
                          TypeScript
                        </span>
<span className="inline-flex items-center rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-emerald-200 ring-1 ring-emerald-500/40">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="framer"></i>
                          Motion
                        </span>
<span className="inline-flex items-center rounded-full bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-tight text-slate-200 ring-1 ring-slate-700/60">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="cpu"></i>
                          Performance
                        </span>
</div>
</div>
<div className="mt-1 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 p-3">
<p className="text-[0.7rem] font-medium tracking-tight text-slate-400">
                        Craft
                      </p>
<p className="mt-1 text-xs font-medium text-slate-200">
                        Motion as a design tool, not a distraction.
                      </p>
<p className="mt-1 text-[0.7rem] text-slate-400">
                        I obsess over the details: easing curves, micro-interactions, and how
                        performance feels—not just how it measures.
                      </p>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between text-[0.7rem] text-slate-500">
<div className="flex items-center gap-1.5">
<i className="h-3 w-3" data-lucide="activity"></i>
<span>Built for the web. Shipped with care.</span>
</div>
<div className="hidden items-center gap-1 sm:flex">
<span className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400">
</span>
<span>Optimized &amp; accessible</span>
</div>
</div>
</div>
</section>
</main>
</div>

<section aria-label="Selected work" className="relative border-t border-slate-800/80 bg-slate-950/95" id="work">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_55%)]"></div>
<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Selected work
              </h2>
<p className="max-w-md text-base font-medium text-slate-300">
                A few projects that highlight my approach to interaction, structure, and
                performance on the web.
              </p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium tracking-tight text-slate-300 hover:text-slate-50" href="https://github.com/sahapranta" rel="noreferrer" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="github"></i>
<span>Browse full project archive</span>
</a>
</div>

<div className="grid gap-5 md:grid-cols-2">

<article className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40 transition hover:border-slate-600/80 hover:bg-slate-900/80">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight text-emerald-300 ring-1 ring-emerald-500/40">
                    Live
                  </span>
<span>Interactive Web App</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  Motion-driven portfolio experience
                </h3>
<p className="text-sm font-medium text-slate-300">
                  A React-based portfolio with scroll-linked animations, route transitions,
                  and highly tuned micro‑interactions.
                </p>
</div>
<div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-800/80 pt-3 text-[0.7rem] text-slate-400">
<div className="flex flex-wrap items-center gap-1.5">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight">
                    React
                  </span>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight">
                    TypeScript
                  </span>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight">
                    Motion
                  </span>
</div>
<a className="inline-flex items-center gap-1 text-xs font-medium tracking-tight text-slate-300 group-hover:text-slate-50" href="https://sahapranta.github.io/" rel="noreferrer" target="_blank">
<span>Visit</span>
<i className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</article>

<article className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40 transition hover:border-slate-600/80 hover:bg-slate-900/80">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight text-sky-300 ring-1 ring-sky-500/40">
                    In progress
                  </span>
<span>Experimental UI Lab</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  Web experiments &amp; micro‑interactions
                </h3>
<p className="text-sm font-medium text-slate-300">
                  A growing collection of small front-end explorations: scroll stories, shader
                  sketches, and interface experiments.
                </p>
</div>
<div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-800/80 pt-3 text-[0.7rem] text-slate-400">
<div className="flex flex-wrap items-center gap-1.5">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight">
                    Canvas / WebGL
                  </span>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 font-medium tracking-tight">
                    Framer Motion
                  </span>
</div>
<button className="inline-flex items-center gap-1 text-xs font-medium tracking-tight text-slate-400 group-hover:text-slate-100">
<span>Coming soon</span>
<i className="h-3.5 w-3.5" data-lucide="clock"></i>
</button>
</div>
</article>
</div>
</div>
</section>

<section aria-label="About" className="relative border-t border-slate-800/80 bg-slate-950" id="about">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.08),_transparent_55%)]"></div>
<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-16">
<div className="w-full space-y-3 lg:max-w-md">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              A bit about me
            </h2>
<p className="text-base font-medium text-slate-300">
              I enjoy moving between design and engineering—taking ideas from sketch to
              prototype to production. My work leans towards clean layouts, meaningful motion,
              and systems that scale.
            </p>
<p className="text-base font-medium text-slate-300">
              On the technical side I focus on front-end architecture, design systems, and the
              details that make interfaces feel alive.
            </p>
</div>
<div className="w-full space-y-6 lg:flex-1">
<div className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40 sm:grid-cols-2">
<div className="space-y-2">
<p className="text-xs font-medium tracking-tight text-slate-400">
                  Capabilities
                </p>
<ul className="space-y-1.5 text-sm font-medium text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400"></span>
                    Interface engineering &amp; systems
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400"></span>
                    Interaction &amp; motion design
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-indigo-400"></span>
                    Performance &amp; accessibility
                  </li>
</ul>
</div>
<div className="space-y-2">
<p className="text-xs font-medium tracking-tight text-slate-400">
                  Interested in
                </p>
<ul className="space-y-1.5 text-sm font-medium text-slate-300">
<li>Creative tools &amp; editors</li>
<li>Developer experience</li>
<li>Data-driven storytelling</li>
<li>Experimental interfaces</li>
</ul>
</div>
</div>
<div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm shadow-black/40" id="experiments">
<div className="flex items-center justify-between gap-2">
<p className="text-xs font-medium tracking-tight text-slate-400">
                  Experiments
                </p>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.7rem] font-medium tracking-tight text-slate-300">
<i className="h-3 w-3" data-lucide="flask-conical"></i>
<span>Small things often</span>
</span>
</div>
<p className="text-sm font-medium text-slate-300">
                I keep a running collection of prototypes exploring scrolling narratives,
                unconventional navigation, and techniques that don’t always fit into shipped
                products—but teach me something new.
              </p>
</div>
</div>
</div>
</section>

<section aria-label="Contact" className="relative border-t border-slate-800/80 bg-slate-950" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.12),_transparent_50%)]"></div>
<div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-12">
<div className="space-y-3">
<h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Let’s build something together
            </h2>
<p className="max-w-xl text-base font-medium text-slate-300">
              I’m open to freelance work, collaborations, and front-end roles where design and
              engineering sit close together. Short notes are welcome.
            </p>
</div>
<div className="space-y-3">
<a className="inline-flex items-center justify-between gap-4 rounded-2xl border border-emerald-400/60 bg-emerald-400/10 px-4 py-3 text-sm font-medium tracking-tight text-emerald-50 shadow-sm shadow-emerald-500/30 hover:bg-emerald-400/20" href="mailto:prantasaha.dev@gmail.com">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-[0.22em] text-emerald-200">
                  Primary channel
                </span>
<span className="text-sm font-semibold tracking-tight">
                  prantasaha.dev<span className="text-emerald-200">@gmail.com</span>
</span>
</div>
<i className="h-4 w-4 shrink-0" data-lucide="arrow-up-right"></i>
</a>
<div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 hover:border-slate-600 hover:bg-slate-900" href="https://github.com/sahapranta" rel="noreferrer" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="github"></i>
<span>GitHub</span>
</a>
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 hover:border-slate-600 hover:bg-slate-900" href="https://www.linkedin.com" rel="noreferrer" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="linkedin"></i>
<span>LinkedIn</span>
</a>
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 hover:border-slate-600 hover:bg-slate-900" href="https://sahapranta.github.io/" rel="noreferrer" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="globe-2"></i>
<span>Current site</span>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800/80 bg-slate-950/95 text-[0.7rem] text-slate-500">
<div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
<p className="font-medium tracking-tight">
            © <span id="year"></span> Pranta Saha. Crafted for the web.
          </p>
<p className="text-slate-500">
            Built with React, thoughtful motion, and a focus on performance.
          </p>
</div>
</footer>
</div>


    </>
  );
}
