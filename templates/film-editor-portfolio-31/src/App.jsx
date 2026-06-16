import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Mobile menu
      const menuBtn = document.getElementById("menuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
      mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.add("hidden")));

      // Trailer modal
      (function () {
        const modal = document.getElementById("trailerModal");
        const backdrop = document.getElementById("trailerBackdrop");
        const frame = document.getElementById("trailerFrame");
        const closeBtn = document.getElementById("trailerClose");

        function openTrailer(videoId) {
          if (!videoId) return;
          frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1";
          modal.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
        }

        function closeTrailer() {
          modal.classList.add("hidden");
          frame.src = "";
          document.body.classList.remove("overflow-hidden");
        }

        window.openTrailer = openTrailer;
        window.closeTrailer = closeTrailer;

        backdrop.addEventListener("click", closeTrailer);
        closeBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); closeTrailer(); });

        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && !modal.classList.contains("hidden")) closeTrailer();
        });
      })();

      // Contact modal
      (function () {
        const modal = document.getElementById("contactModal");
        const backdrop = document.getElementById("contactBackdrop");
        const closeBtn = document.getElementById("contactClose");

        function openContactModal() {
          modal.classList.remove("hidden");
          document.body.classList.add("overflow-hidden");
        }

        function closeContactModal() {
          modal.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        }

        window.openContactModal = openContactModal;
        window.closeContactModal = closeContactModal;

        backdrop.addEventListener("click", closeContactModal);
        closeBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); closeContactModal(); });

        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && !modal.classList.contains("hidden")) closeContactModal();
        });

        function sendMailFromForm(nameEl, emailEl, typeEl, msgEl) {
          const to = "tomswiftpost@gmail.com";
          const subject = encodeURIComponent("Website Enquiry — " + (typeEl.value || "Project"));
          const body = encodeURIComponent(
            "Name: " + nameEl.value + "\n" +
            "Email: " + emailEl.value + "\n" +
            "Project Type: " + typeEl.value + "\n\n" +
            msgEl.value
          );
          window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
        }

        document.getElementById("contactForm").addEventListener("submit", function (e) {
          e.preventDefault();
          sendMailFromForm(
            document.getElementById("name"),
            document.getElementById("email"),
            document.getElementById("type"),
            document.getElementById("message")
          );
        });

        document.getElementById("contactModalForm").addEventListener("submit", function (e) {
          e.preventDefault();
          sendMailFromForm(
            document.getElementById("m_name"),
            document.getElementById("m_email"),
            document.getElementById("m_type"),
            document.getElementById("m_message")
          );
          closeContactModal();
        });
      })();

      // Work card click handler
      (function () {
        function isYouTubeUrl(url) {
          if (!url) return false;
          try {
            const u = new URL(url);
            const host = (u.hostname || "").toLowerCase();
            return host.includes("youtube.com") || host.includes("youtu.be");
          } catch {
            return false;
          }
        }

        function extractYouTubeId(url) {
          try {
            const u = new URL(url);
            const host = (u.hostname || "").toLowerCase();

            if (host.includes("youtu.be")) {
              const id = u.pathname.replace("/", "").trim();
              return id || null;
            }

            const pathParts = u.pathname.split("/").filter(Boolean);
            const shortsIdx = pathParts.indexOf("shorts");
            if (shortsIdx !== -1 && pathParts[shortsIdx + 1]) return pathParts[shortsIdx + 1];

            const v = u.searchParams.get("v");
            if (v) return v;

            const embedIdx = pathParts.indexOf("embed");
            if (embedIdx !== -1 && pathParts[embedIdx + 1]) return pathParts[embedIdx + 1];

            return null;
          } catch {
            return null;
          }
        }

        window.handleWorkClick = function (url, comingSoon) {
          if (comingSoon && !url) return;
          if (!url) return;

          if (isYouTubeUrl(url)) {
            const id = extractYouTubeId(url);
            if (id) window.openTrailer(id);
            return;
          }

          window.open(url, "_blank", "noopener,noreferrer");
        };
      })();

      // All Work Filters
      (function () {
        const pills = Array.from(document.querySelectorAll(".filter-pill"));
        const cards = Array.from(document.querySelectorAll(".work-card"));
        const empty = document.getElementById("emptyState");

        function setActivePill(activeFilter) {
          pills.forEach((p) => {
            const isActive = p.dataset.filter === activeFilter;
            p.setAttribute("aria-pressed", isActive ? "true" : "false");

            if (isActive) {
              p.classList.add("bg-white/10", "text-white");
              p.classList.remove("text-neutral-300");
              p.style.borderColor = "rgba(124,219,255,.35)";
            } else {
              p.classList.remove("bg-white/10", "text-white");
              p.classList.add("text-neutral-300");
              p.style.borderColor = "rgba(255,255,255,.10)";
            }
          });
        }

        function applyFilter(filter) {
          let shown = 0;

          cards.forEach((card) => {
            const cat = (card.dataset.category || "").toLowerCase();
            const match = (filter === "all") || (cat === filter);

            card.classList.toggle("hidden", !match);
            if (match) shown++;
          });

          empty.classList.toggle("hidden", shown !== 0);
        }

        pills.forEach((p) => {
          p.addEventListener("click", () => {
            const filter = p.dataset.filter;
            setActivePill(filter);
            applyFilter(filter);
          });
        });

        setActivePill("all");
        applyFilter("all");
      })();

      // Scroll reveal (unobserve after reveal to reduce work)
      (function () {
        const els = Array.from(document.querySelectorAll(".reveal"));
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.12 });

        els.forEach((el, i) => {
          el.style.transitionDelay = Math.min(i * 60, 240) + "ms";
          io.observe(el);
        });
      })();

      // Tilt (only on fine pointer devices + rAF throttled)
      (function () {
        const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
        if (prefersReduced || !finePointer) return;

        const cards = Array.from(document.querySelectorAll(".tilt"));
        const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

        cards.forEach((card) => {
          let rect = null;
          let rafId = null;
          let lastEvent = null;

          function applyTilt() {
            rafId = null;
            if (!rect || !lastEvent) return;

            const e = lastEvent;
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            const rotY = clamp((x - 0.5) * 6, -4, 4);
            const rotX = clamp((0.5 - y) * 6, -4, 4);

            card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-1px)`;
          }

          function onMove(e) {
            lastEvent = e;
            if (!rect) rect = card.getBoundingClientRect();

            if (rafId) return;
            rafId = requestAnimationFrame(applyTilt);
          }

          function onLeave() {
            rect = null;
            lastEvent = null;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
            card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
          }

          card.addEventListener("mouseenter", () => { rect = card.getBoundingClientRect(); }, { passive: true });
          card.addEventListener("mousemove", onMove, { passive: true });
          card.addEventListener("mouseleave", onLeave, { passive: true });
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient">
<div className="blob one"></div>
<div className="blob two"></div>
<div className="blob three"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/60 backdrop-blur-md border-b border-white/5 glow-divider">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-18 md:h-20 flex items-center justify-between">
<a className="text-white text-sm md:text-base font-semibold tracking-[0.16em] uppercase hover:opacity-80 transition" href="#top">
          Tom Swift
        </a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm text-neutral-400 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all" href="#work">
            Work
          </a>
<a className="text-sm text-neutral-400 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all" href="#all-work">
            All Work
          </a>
<a className="text-sm text-neutral-400 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all" href="#about">
            About
          </a>
<a className="text-sm text-neutral-400 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all" href="#contact">
            Contact
          </a>
</div>
<button aria-label="Open menu" className="md:hidden text-white/90" id="menuBtn" type="button">
<iconify-icon className="" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="md:hidden hidden border-t border-white/5 bg-[#0A0A0A]/90" id="mobileMenu">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
<a className="py-2 text-sm text-neutral-300 hover:text-white" href="#work">
            Work
          </a>
<a className="py-2 text-sm text-neutral-300 hover:text-white" href="#all-work">
            All Work
          </a>
<a className="py-2 text-sm text-neutral-300 hover:text-white" href="#about">
            About
          </a>
<a className="py-2 text-sm text-neutral-300 hover:text-white" href="#contact">
            Contact
          </a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center overflow-hidden grain" id="top">
<div className="hero-media">

<img alt="" aria-hidden="true" className="hero-img" decoding="async" fetchpriority="high" height="1350" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a0b9b67-f51d-4cbb-9cf1-24414cf5a362_3840w.jpg?w=2400&amp;q=80" width="2400"/>

<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full">
<div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-20">
<div className="max-w-3xl reveal is-visible" style={{transitionDelay: '0ms'}}>
<p className="uppercase text-xs text-neutral-400 tracking-[0.22em] mb-5">
              Freelance Video Editor
            </p>
<h1 className="text-white font-semibold tracking-tight leading-[1.02] text-4xl sm:text-5xl md:text-6xl drop-shadow-md">
              Story-first editing for documentary, drama, factual and branded
              films.
            </h1>
<p className="md:text-lg leading-relaxed text-base text-neutral-200 mt-6 drop-shadow-sm">
              London-based. Remote. Worldwide. Also available for cinematic
              wedding films.
            </p>
<div className="mt-10 flex flex-wrap gap-4 items-center">
<a className="btn-accent inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition" href="#work">
                View work
                <span aria-hidden="true">→</span>
</a>
<button className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 bg-black/20 backdrop-blur-sm text-white text-sm font-semibold tracking-wide hover:bg-white/10 transition" onclick="openContactModal()" type="button">
                Get in touch
              </button>

<button className="text-sm text-neutral-200 hover:text-white transition underline underline-offset-4 decoration-white/30 hover:decoration-white/60 drop-shadow-sm" onclick="openTrailer('2YFmwHjC5IE')" type="button">
                Play showreel
              </button>
</div>
</div>
<a className="mt-16 inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition reveal is-visible" href="#work" style={{transitionDelay: '60ms'}}>
            Scroll
            <iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-10 border-y border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-40 hover:opacity-70 transition reveal" style={{transitionDelay: '120ms'}}>
<span className="text-white text-xs tracking-[0.22em] uppercase">
            Netflix
          </span>
<span className="text-white text-xs tracking-[0.22em] uppercase">
            Apple
          </span>
<span className="text-white text-xs tracking-[0.22em] uppercase">
            FOX
          </span>
<span className="text-white text-xs tracking-[0.22em] uppercase">
            Disney+
          </span>
<span className="text-white text-xs tracking-[0.22em] uppercase">
            National Grid
          </span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="work">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-end justify-between gap-6 mb-12 md:mb-16 reveal" style={{transitionDelay: '180ms'}}>
<div>
<p className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-3">
              Selected Work
            </p>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">
              Featured Projects
            </h2>
<p className="mt-4 text-neutral-400 max-w-2xl">
              A curated selection of recent work. Click a poster to play
              in-page.
            </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition" href="#all-work">
            View all work
            <span aria-hidden="true">→</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">

<article className="group reveal" style={{transitionDelay: '240ms'}}>
<button className="w-full text-left tilt" onclick="openTrailer('iLFm7nRiX7s')" type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl mb-6 ring-1 ring-white/5">
<img alt="Matchroom" className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-80" decoding="async" height="900" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8545d461-5445-4334-89e5-3dce9c68e778_3840w.jpg?w=1600&amp;q=80" width="1600"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                        Watch Trailer
                      </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-neutral-500 uppercase tracking-[0.22em] font-medium">
                  Netflix
                </span>
<h3 className="text-xl md:text-2xl text-white font-semibold tracking-tight group-hover:text-neutral-200 transition">
                  Matchroom: The Greatest Showmen
                </h3>
<span className="text-sm text-neutral-400">Documentary Series</span>
</div>
</button>
</article>

<article className="group md:mt-24 reveal" style={{transitionDelay: '240ms'}}>

<a className="block w-full text-left tilt" href="https://www.youtube.com/watch?v=WoFpyFL8E7s" rel="noopener noreferrer" target="_blank">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl mb-6 ring-1 ring-white/5">
<img alt="F1" className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-80" decoding="async" height="900" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1c5dcba-28ea-47b3-87cc-dee66140dc56_1600w.jpg" width="1600"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                        Watch Trailer
                      </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-neutral-500 uppercase tracking-[0.22em] font-medium">
                  Netflix
                </span>
<h3 className="text-xl md:text-2xl text-white font-semibold tracking-tight group-hover:text-neutral-200 transition">
                  F1: Drive To Survive
                </h3>
<span className="text-sm text-neutral-400">Documentary Series</span>
</div>
</a>
</article>

<article className="group reveal" style={{transitionDelay: '240ms'}}>
<button className="w-full text-left tilt" onclick="openTrailer('xyDtYWo-qeU')" type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl mb-6 ring-1 ring-white/5">
<img alt="Six Nations" className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-80" decoding="async" height="900" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e9635b9-a071-4375-b916-17af6d3206b2_1600w.jpg" width="1600"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                        Watch Trailer
                      </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs text-neutral-500 uppercase tracking-[0.22em] font-medium">
                  Netflix
                </span>
<h3 className="text-xl md:text-2xl text-white font-semibold tracking-tight group-hover:text-neutral-200 transition">
                  Six Nations: Full Contact
                </h3>
<span className="text-sm text-neutral-400">Documentary Series</span>
</div>
</button>
</article>

<article className="group md:mt-24 reveal" style={{transitionDelay: '240ms'}}>
<button className="w-full text-left tilt" onclick="openTrailer('2YFmwHjC5IE')" type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl mb-6 ring-1 ring-white/5">
<img alt="Project" className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-80" decoding="async" height="900" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45ca7988-af3c-4d0a-96b3-2b2f42e0a6a1_1600w.jpg" width="1600"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
</div>
<div className="flex flex-col gap-1">
<span className="uppercase text-xs font-medium text-neutral-500 tracking-[0.22em]">
                  fox
                </span>
<h3 className="md:text-2xl group-hover:text-neutral-200 transition text-xl font-semibold text-white tracking-tight">
                  Special Forces: World's Toughest Test
                </h3>
<span className="text-sm text-neutral-400">
                  Factual Entertainment
                </span>
</div>
</button>
</article>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] border-white/5 border-t pt-24 pb-24 relative z-10" id="all-work">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-end justify-between gap-6 mb-10 reveal" style={{transitionDelay: '240ms'}}>
<div>
<p className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-3">
              All Work
            </p>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">
              Full Archive
            </h2>
<p className="mt-3 text-neutral-400 max-w-2xl">
              Filter by category to find relevant examples.
            </p>
</div>
<button className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition" onclick="openContactModal()" type="button">
            Get in touch
            <span aria-hidden="true">→</span>
</button>
</div>

<div aria-label="Work filters" className="flex flex-wrap gap-3 mb-10 reveal" role="tablist" style={{transitionDelay: '240ms'}}>
<button aria-pressed="true" className="filter-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border border-white/10 text-white bg-white/10" data-filter="all" style={{borderColor: 'rgba(124, 219, 255, 0.35)'}} type="button">
            All
          </button>
<button aria-pressed="false" className="filter-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10" data-filter="documentary" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}} type="button">
            Documentary
          </button>
<button aria-pressed="false" className="filter-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10" data-filter="drama" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}} type="button">
            Drama
          </button>
<button aria-pressed="false" className="filter-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10" data-filter="factual" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}} type="button">
            Factual
          </button>
<button aria-pressed="false" className="filter-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10" data-filter="branded" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}} type="button">
            Branded / Corporate
          </button>
<button aria-pressed="false" className="filter-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10" data-filter="weddings" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}} type="button">
            Weddings
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="allWorkGrid">

<button className="work-card group text-left tilt reveal" data-category="documentary" onclick="handleWorkClick('https://www.youtube.com/watch?v=iLFm7nRiX7s')" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Matchroom" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8545d461-5445-4334-89e5-3dce9c68e778_3840w.jpg?w=1200&amp;q=80" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-500 uppercase tracking-[0.22em]">
                Netflix
              </div>
<div className="text-white font-semibold tracking-tight mt-1">
                Matchroom: The Greatest Showmen
              </div>
<div className="text-sm text-neutral-400 mt-1">
                Documentary Series
              </div>
</div>
</button>

<a className="work-card group block text-left tilt reveal" data-category="documentary" href="https://www.youtube.com/watch?v=WoFpyFL8E7s" rel="noopener noreferrer" style={{transitionDelay: '240ms'}} target="_blank">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="F1: Drive To Survive" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1c5dcba-28ea-47b3-87cc-dee66140dc56_1600w.jpg" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-500 uppercase tracking-[0.22em]">
                Netflix
              </div>
<div className="text-white font-semibold tracking-tight mt-1">
                F1: Drive To Survive
              </div>
<div className="text-sm text-neutral-400 mt-1">
                Documentary Series
              </div>
</div>
</a>

<button className="work-card group text-left tilt reveal" data-category="factual" onclick="handleWorkClick('https://www.imdb.com/title/tt22003362')" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Special Forces: World's Toughest Test" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45ca7988-af3c-4d0a-96b3-2b2f42e0a6a1_1600w.jpg" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-500 uppercase tracking-[0.22em]">
                FOX
              </div>
<div className="text-white font-semibold tracking-tight mt-1">
                Special Forces: World's Toughest Test
              </div>
<div className="text-sm text-neutral-400 mt-1">
                Factual Entertainment
              </div>
</div>
</button>

<button className="work-card group text-left tilt reveal" data-category="branded" onclick="handleWorkClick('https://www.youtube.com/watch?v=ELCGji34eCw')" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Helping A Young Family Heat Their Home" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3def01f-f803-4c86-b8f6-a9922937fadc_800w.jpg" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="uppercase text-xs text-neutral-500 tracking-[0.22em]">
                National Grid
              </div>
<div className="font-semibold text-white tracking-tight mt-1">
                Helping A Young Family Heat Their Home
              </div>
<div className="text-sm text-neutral-400 mt-1">Corporate</div>
</div>
</button>

<button className="work-card group text-left tilt reveal" data-category="drama" onclick="handleWorkClick('https://www.imdb.com/title/tt37511051/', true)" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Maya" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33938273-39c2-4788-89e9-69782ed96763_800w.jpg?w=800&amp;q=80" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Coming soon
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="uppercase text-xs text-neutral-500 tracking-[0.22em]">
                Channel 4
              </div>
<div className="font-semibold text-white tracking-tight mt-1">
                Maya
              </div>
<div className="text-sm text-neutral-400 mt-1">Drama</div>
</div>
</button>

<button className="work-card group text-left tilt reveal" data-category="documentary" onclick="handleWorkClick('https://youtu.be/j79P8BA5B1E?si=28R_yWnd9OF9Oc7P')" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Make Or Break" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/409a6077-4b04-4881-8430-047056b9e6fa_800w.jpg" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="uppercase text-xs text-neutral-500 tracking-[0.22em]">
                Apple • Documentary
              </div>
<div className="font-semibold text-white tracking-tight mt-1">
                Make Or Break
              </div>
<div className="text-sm text-neutral-400 mt-1">
                Documentary Series
              </div>
</div>
</button>

<button className="work-card group text-left tilt reveal" data-category="documentary" onclick="handleWorkClick('https://stopfarmwashing.co.uk/')" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Farmers Against Farmwashing" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0062aef4-63d1-4fd5-897e-ed5870699f60_800w.jpg" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-500 uppercase tracking-[0.22em]">
                Documentary
              </div>
<div className="font-semibold text-white tracking-tight mt-1">
                Farmers Against Farmwashing
              </div>
<div className="text-sm text-neutral-400 mt-1">Mini Documentary</div>
</div>
</button>

<button className="work-card group text-left tilt reveal" data-category="factual" onclick="handleWorkClick('https://www.youtube.com/shorts/Z9hCU_gjVjI')" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Secret Genius" className="w-full h-full object-cover opacity-90 transition duration-700 ease-out group-hover:opacity-100 group-hover:scale-[1.03]" decoding="async" height="675" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0df2f2f1-9ce2-4d00-ab04-5edc5a43995b_3840w.jpg?w=1200&amp;q=80" width="1200"/>
<div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<iconify-icon className="text-white" icon="solar:play-linear" width="18"></iconify-icon>
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Watch Trailer
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="uppercase text-xs text-neutral-500 tracking-[0.22em]">
                Channel 4
              </div>
<div className="text-white font-semibold tracking-tight mt-1">
                Secret Genius
              </div>
<div className="text-sm text-neutral-400 mt-1">
                Factual Entertainment
              </div>
</div>
</button>

<button aria-disabled="true" className="work-card group text-left tilt reveal" data-category="weddings" onclick="handleWorkClick('', true)" style={{transitionDelay: '240ms'}} type="button">
<div className="relative overflow-hidden aspect-video bg-[#111] rounded-xl ring-1 ring-white/5">
<img alt="Coming soon" className="w-full h-full object-cover opacity-90" decoding="async" height="900" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/778221cb-5db8-4537-b95d-3d5be9a72ee7_800w.png" width="1600"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<div className="inline-flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
<span className="text-white text-xs tracking-[0.22em] uppercase">
                      Coming soon
                    </span>
</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-500 uppercase tracking-[0.22em]">
                Weddings
              </div>
<div className="text-white font-semibold tracking-tight mt-1">
                Wedding Portfolio (Coming Soon)
              </div>
<div className="text-sm text-neutral-400 mt-1">
                Highlights / Trailers
              </div>
</div>
</button>
</div>

<div className="hidden mt-10 text-neutral-400 reveal" id="emptyState" style={{transitionDelay: '240ms'}}>
          No projects in this category yet.
        </div>
</div>
</section>

<section className="md:py-32 z-10 border-white/5 border-t pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="reveal" style={{transitionDelay: '240ms'}}>
<p className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-5">
              About
            </p>
<h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight leading-tight mb-8">
              Editing that serves story first.
            </h2>
<div className="text-neutral-300/90 leading-relaxed space-y-5 max-w-xl">
<p className="">
                I'm Tom, a London-based freelance film editor working across
                documentary, TV, drama and branded content. I specialise in
                shaping story, refining pacing, and delivering cinematic edits
                that hold attention. I work with production companies, agencies
                and brands to craft narrative-driven films for broadcast,
                streaming and digital platforms. Available for remote projects
                worldwide.
              </p>
<p className="">
                I’m also expanding into wedding films with a cinematic,
                story-led approach - built to be rewatched.
              </p>
</div>
<div className="mt-10">
<button className="btn-accent inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition" onclick="openContactModal()" type="button">
                Get in touch
                <span aria-hidden="true">→</span>
</button>
</div>
</div>
<div className="relative reveal" style={{transitionDelay: '240ms'}}>
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/5 bg-[#111] aspect-[4/5] md:aspect-square">
<img alt="Tom Swift" className="w-full h-full object-cover grayscale contrast-125 opacity-90 hover:opacity-100 transition" decoding="async" height="1600" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f411cdb-4a00-4d25-808c-dd8e2045c60d_3840w.jpg?w=1600&amp;q=80" width="1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] border-white/5 border-t pt-24 pb-24 relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
<div className="reveal" style={{transitionDelay: '240ms'}}>
<p className="text-xs text-neutral-500 tracking-[0.22em] uppercase mb-4">
              Contact
            </p>
<h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight mb-6">
              Get in touch
            </h2>
<p className="text-neutral-300/80 leading-relaxed max-w-md mb-10">
              Share a brief summary of the project and timeline. For wedding
              films, include the date and location.
            </p>
<div className="space-y-5 text-neutral-300">
<div className="flex items-center gap-4">
<iconify-icon className="text-neutral-500" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-sm">tomswiftpost@gmail.com</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm">London • Remote Worldwide</span>
</div>
</div>
</div>
<form className="space-y-8 reveal" id="contactForm" style={{transitionDelay: '240ms'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                  Name
                </label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition placeholder-neutral-700" id="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                  Email
                </label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition placeholder-neutral-700" id="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                Project Type
              </label>
<select className="focus:border-white outline-none transition text-sm text-white bg-transparent w-full border-neutral-700 border-b pt-3 pb-3" id="type">
<option className="bg-[#0A0A0A]" value="Documentary">
                  Documentary
                </option>
<option className="bg-[#0A0A0A]" value="Drama">Drama</option>
<option className="bg-[#0A0A0A]" value="Factual">Factual</option>
<option className="bg-[#0A0A0A]" value="Branded / Corporate">
                  Branded / Corporate
                </option>
<option className="bg-[#0A0A0A]" value="Wedding Film">
                  Wedding Film
                </option>
<option className="bg-[#0A0A0A]" value="Other">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                Message
              </label>
<textarea className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition placeholder-neutral-700 resize-none" id="message" placeholder="Brief summary, timeline, links to footage/references..." required="" rows="5"></textarea>
</div>
<button className="inline-flex items-center gap-3 text-white text-sm font-semibold tracking-wide hover:opacity-85 transition" type="submit">
              Send message
              <span aria-hidden="true">→</span>
</button>
<p className="leading-relaxed text-xs text-neutral-600">This opens your email client (mailto).</p>
</form>
</div>
</div>
</section>
<footer className="py-10 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-neutral-600 text-xs tracking-[0.22em] uppercase">
          ©
          <span id="year">2026</span>
          Tom Swift
        </span>
<div className="flex gap-6">
<a className="hover:text-white uppercase transition text-xs text-neutral-600 tracking-[0.22em]" href="https://www.instagram.com/tomswifteditor/" rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
<a className="text-neutral-600 hover:text-white text-xs tracking-[0.22em] uppercase transition" href="https://www.linkedin.com/in/tomswift10/" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
<a className="hover:text-white uppercase transition text-xs text-neutral-600 tracking-[0.22em]" href="https://www.imdb.com/name/nm9091797/?ref_=nv_sr_srsg_2_tt_3_nm_5_in_0_q_tom%2520swift" rel="noopener noreferrer" target="_blank">
            IMDB
          </a>
<a className="hover:text-white uppercase transition text-xs text-neutral-600 tracking-[0.22em]" href="/sitemap.xml">
            Sitemap
          </a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[9999] hidden" id="trailerModal">
<div className="absolute inset-0 bg-black/90 backdrop-blur-sm" id="trailerBackdrop"></div>
<div className="relative w-full h-full flex items-center justify-center p-4">
<div className="w-full max-w-6xl aspect-video relative bg-black shadow-2xl ring-1 ring-white/10 rounded-xl overflow-hidden">
<iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" id="trailerFrame" loading="lazy" src="" title="Trailer player"></iframe>
<button aria-label="Close" className="absolute top-4 right-4 z-50 p-2 bg-neutral-900/60 hover:bg-neutral-900 text-white rounded-full backdrop-blur-md transition-colors" id="trailerClose" type="button">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[9999] hidden" id="contactModal">
<div className="absolute inset-0 bg-black/90 backdrop-blur-sm" id="contactBackdrop"></div>
<div className="relative w-full h-full flex items-center justify-center p-4">
<div className="w-full max-w-2xl bg-[#0F0F0F] ring-1 ring-white/10 rounded-2xl overflow-hidden">
<div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
<div>
<div className="text-xs text-neutral-500 tracking-[0.22em] uppercase">
                Get in touch
              </div>
<div className="text-white font-semibold tracking-tight mt-1">
                Send a quick brief
              </div>
</div>
<button aria-label="Close" className="p-2 bg-neutral-900/60 hover:bg-neutral-900 text-white rounded-full transition" id="contactClose" type="button">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<form className="p-6 md:p-8 space-y-6" id="contactModalForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                  Name
                </label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition placeholder-neutral-700" id="m_name" placeholder="Your name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                  Email
                </label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition placeholder-neutral-700" id="m_email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                Project Type
              </label>
<select className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition" id="m_type">
<option className="bg-[#0A0A0A]" value="Documentary">
                  Documentary
                </option>
<option className="bg-[#0A0A0A]" value="Drama">Drama</option>
<option className="bg-[#0A0A0A]" value="Factual">Factual</option>
<option className="bg-[#0A0A0A]" value="Branded / Corporate">
                  Branded / Corporate
                </option>
<option className="bg-[#0A0A0A]" value="Wedding Film">
                  Wedding Film
                </option>
<option className="bg-[#0A0A0A]" value="Other">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                Message
              </label>
<textarea className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white text-sm outline-none transition placeholder-neutral-700 resize-none" id="m_message" placeholder="Brief summary, timeline, links..." required="" rows="5"></textarea>
</div>
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-neutral-600">
                Sends via your email app (mailto).
              </div>
<button className="btn-accent inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition" type="submit">
                Send
                <span aria-hidden="true">→</span>
</button>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
