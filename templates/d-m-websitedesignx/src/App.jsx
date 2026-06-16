import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const root = document.querySelector("#about");
      if (!root) return;

      const tabsWrap = root.querySelector("[data-about-tabs]");
      const tabs = Array.from(root.querySelectorAll("[data-about-tab]"));
      const panels = Array.from(root.querySelectorAll("[data-about-panel]"));
      if (!tabsWrap || !tabs.length || !panels.length) return;

      function setActive(key) {
        tabs.forEach((t) => {
          const isActive = t.getAttribute("data-about-tab") === key;
          t.setAttribute("aria-selected", isActive ? "true" : "false");

          if (isActive) {
            t.classList.add("text-white", "ring-2", "ring-blue-500/40");
            t.classList.remove("text-white/75", "hover:bg-white/5");
          } else {
            t.classList.remove("text-white", "ring-2", "ring-blue-500/40");
            t.classList.add("text-white/75", "hover:bg-white/5");
          }
        });

        panels.forEach((p) => {
          const isActive = p.getAttribute("data-about-panel") === key;
          p.classList.toggle("hidden", !isActive);
        });
      }

      tabs.forEach((t) => {
        t.addEventListener("click", () => setActive(t.getAttribute("data-about-tab")));
      });

      tabsWrap.addEventListener("keydown", (e) => {
        const idx = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
        if (idx < 0) return;

        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          const nextIdx = e.key === "ArrowRight"
            ? (idx + 1) % tabs.length
            : (idx - 1 + tabs.length) % tabs.length;

          tabs[nextIdx].focus();
          setActive(tabs[nextIdx].getAttribute("data-about-tab"));
        }
      });

      setActive("why");
    })();
  


      // Contact form: submit via AJAX to Formspree + show on-page status (no redirect)
  (function () {
    const form = document.getElementById("contact-form");
    const statusEl = document.getElementById("form-status");
    const submitBtn = document.getElementById("form-submit");

    if (!form || !statusEl || !submitBtn) return;

    function setStatus(message, ok) {
      statusEl.classList.remove("hidden", "text-green-400", "text-red-400", "text-gray-300");
      statusEl.classList.add(ok ? "text-green-400" : "text-red-400");
      statusEl.textContent = message;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // prevents redirect to Formspree thank-you page

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Изпращане...";

      // show neutral message while sending (optional)
      statusEl.classList.remove("hidden");
      statusEl.classList.add("text-gray-300");
      statusEl.textContent = "Изпращане...";

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          form.reset();

          // clear saved draft if you want (works with your existing draft script)
          try { localStorage.removeItem("dm_form_draft_v1"); } catch {}

          setStatus("Успешно изпратено!", true);
        } else {
          setStatus("Грешка при изпращане. Опитайте отново.", false);
        }
      } catch (err) {
        setStatus("Няма връзка или възникна грешка. Опитайте отново.", false);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  })();
    (function () {
      const root = document.querySelector("[data-proc-root]");
      if (!root) return;

      const stage = root.querySelector("[data-proc-stage]");
      const dots = Array.from(root.querySelectorAll(".proc-dot"));

      const btnPrev = root.querySelector("[data-proc-prev]");
      const btnNext = root.querySelector("[data-proc-next]");

      const prevStepBtn = root.querySelector("[data-proc-prev-step]");
      const nextStepBtn = root.querySelector("[data-proc-next-step]");

      const prevNum = root.querySelector("[data-proc-prev-num]");
      const nextNum = root.querySelector("[data-proc-next-num]");

      const prevTitle = root.querySelector("[data-proc-prev-title]");
      const nextTitle = root.querySelector("[data-proc-next-title]");

      const badge = root.querySelector("[data-proc-badge]");
      const title = root.querySelector("[data-proc-title]");
      const desc = root.querySelector("[data-proc-desc]");
      const micro = root.querySelector("[data-proc-micro]");
      const card = root.querySelector("[data-proc-card]");

      if (!stage || !badge || !title || !desc || !micro || !card) return;

      const steps = [
        { n: 1, title: "Форма & цели", desc: "Попълвате кратка форма, за да разберем целите, стила и приоритетите ви, резервации, запитвания или продажби.", micro: "Отнема ~1 минута, без излишни въпроси." },
        { n: 2, title: "Демо за 48 часа", desc: "До 48 часа получавате персонализирано демо, давате обратна връзка, ние ви даваме ясна оферта и срок.", micro: "Виждате реален дизайн, преди да поемете разход." },
        { n: 3, title: "Изработка & старт", desc: "Изработваме целия сайт с итерации, плащате когато сте 100% доволни, пускаме онлайн, 1 седмица хостинг и поддръжка са безплатни.", micro: "Всичко е ясно, без скрити условия." }
      ];

      const total = steps.length;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let active = 1;

      const wrap = (n) => ((n - 1 + total) % total) + 1;
      const prevOf = (n) => wrap(n - 1);
      const nextOf = (n) => wrap(n + 1);

      function setDots(step) {
        dots.forEach((d) => {
          const isActive = Number(d.getAttribute("data-dot")) === step;
          d.setAttribute("aria-current", isActive ? "true" : "false");
          d.style.background = isActive ? "rgba(37,99,235,0.95)" : "rgba(255,255,255,0.20)";
          d.style.boxShadow = isActive ? "0 0 16px rgba(37,99,235,0.55)" : "none";
        });
      }

      function animateCardSwap() {
        if (prefersReduced) return;
        card.style.transition = "opacity 180ms ease";
        card.style.opacity = "0";
        requestAnimationFrame(() => {
          setTimeout(() => { card.style.opacity = "1"; }, 110);
        });
      }

      function render() {
        const s = steps[active - 1];
        const p = prevOf(active);
        const n = nextOf(active);

        const pStep = steps[p - 1];
        const nStep = steps[n - 1];

        if (prevNum) prevNum.textContent = String(p);
        if (nextNum) nextNum.textContent = String(n);
        if (prevTitle) prevTitle.textContent = pStep.title;
        if (nextTitle) nextTitle.textContent = nStep.title;

        animateCardSwap();
        badge.textContent = String(s.n);
        title.textContent = s.title;
        desc.textContent = s.desc;
        micro.textContent = s.micro;

        setDots(active);

        if (prevStepBtn) prevStepBtn.setAttribute("aria-label", "Стъпка " + p + ": " + pStep.title);
        if (nextStepBtn) nextStepBtn.setAttribute("aria-label", "Стъпка " + n + ": " + nStep.title);
      }

      function goTo(step) {
        active = wrap(step);
        render();
      }

      if (btnPrev) btnPrev.addEventListener("click", () => goTo(active - 1));
      if (btnNext) btnNext.addEventListener("click", () => goTo(active + 1));

      if (prevStepBtn) prevStepBtn.addEventListener("click", () => goTo(active - 1));
      if (nextStepBtn) nextStepBtn.addEventListener("click", () => goTo(active + 1));

      dots.forEach((d) => d.addEventListener("click", () => goTo(Number(d.getAttribute("data-dot")))));

      stage.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
        if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
      });

      let startX = null;
      stage.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
        const dx = endX - startX;
        if (Math.abs(dx) > 40) dx < 0 ? goTo(active + 1) : goTo(active - 1);
        startX = null;
      }, { passive: true });

      render();
    })();
  


  // Contact form: prefill + persist user inputs + context from clicks
  (function () {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameEl = document.getElementById("form-name");
    const phoneEl = document.getElementById("form-phone");
    const bizEl = document.getElementById("form-business");
    const msgEl = document.getElementById("form-message");

    const DRAFT_KEY = "dm_form_draft_v1";
    const PREFILL_KEY = "dm_form_prefill_v1";

    function safeJSONParse(v) {
      try { return JSON.parse(v); } catch { return null; }
    }

    function loadDraft() {
      const draft = safeJSONParse(localStorage.getItem(DRAFT_KEY)) || {};
      if (nameEl && !nameEl.value && draft.name) nameEl.value = draft.name;
      if (phoneEl && !phoneEl.value && draft.phone) phoneEl.value = draft.phone;
      if (bizEl && !bizEl.value && draft.businessType) bizEl.value = draft.businessType;
      if (msgEl && !msgEl.value && draft.message) msgEl.value = draft.message;
    }

    function saveDraft() {
      const draft = {
        name: nameEl ? nameEl.value.trim() : "",
        phone: phoneEl ? phoneEl.value.trim() : "",
        businessType: bizEl ? bizEl.value : "",
        message: msgEl ? msgEl.value.trim() : ""
      };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    }

    function applyPrefillMessage() {
      const pre = safeJSONParse(localStorage.getItem(PREFILL_KEY)) || {};
      if (msgEl && pre.message) {
        const current = (msgEl.value || "").trim();
        if (!current) msgEl.value = pre.message;
      }
    }

    // Query prefill (optional): ?name=&phone=&business=&message=
    const qs = new URLSearchParams(window.location.search);
    if (nameEl && qs.get("name")) nameEl.value = qs.get("name");
    if (phoneEl && qs.get("phone")) phoneEl.value = qs.get("phone");
    if (bizEl && qs.get("business")) bizEl.value = qs.get("business");
    if (msgEl && qs.get("message")) msgEl.value = qs.get("message");

    loadDraft();
    applyPrefillMessage();

    [nameEl, phoneEl, bizEl, msgEl].forEach((el) => {
      if (!el) return;
      el.addEventListener("input", saveDraft);
      el.addEventListener("change", saveDraft);
    });

    // Capture context from CTA clicks (packages / demo)
    document.querySelectorAll("[data-prefill-message], [data-prefill-package]").forEach((el) => {
      el.addEventListener("click", () => {
        const msg = el.getAttribute("data-prefill-message") || "";
        const pkg = el.getAttribute("data-prefill-package") || "";
        localStorage.setItem(PREFILL_KEY, JSON.stringify({ package: pkg, message: msg }));
        setTimeout(applyPrefillMessage, 50);
      });
    });

    // Apply when navigating to #contact
    window.addEventListener("hashchange", () => {
      if (window.location.hash === "#contact") {
        loadDraft();
        applyPrefillMessage();
      }
    });
  })();

  lucide.createIcons();



function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      autoDisplay: true
    },
    'google_translate_element'
  );
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title className="font-sans">D&amp;M Website Design - Пловдив</title>


<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #020617; /* Slate 950 */
            color: #e2e8f0; /* Slate 200 */
        }
        
        /* Custom Grid Background similar to reference image */
        .bg-grid {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }

        /* Smooth fade-in animation */
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #020617;
        }
        ::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #475569;
        }

        .glass-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .gradient-text {
            background: linear-gradient(to right, #fff, #94a3b8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

    </style>
<meta content="font-roboto,font-montserrat,font-poppins,font-instrument-serif,font-merriweather,font-jakarta,font-space-grotesk,font-work-sans,font-pt-serif,font-geist-mono,font-space-mono,font-quicksand,font-nunito,font-google-sans-flex,font-oswald,font-manrope,font-bricolage,font-playfair,font-geist,font-newsreader" name="disabled-font-classes"/><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-dm-sans" rel="stylesheet"/><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style>

<nav className="fixed w-full z-50 top-0 border-b backdrop-blur-md transition-all duration-300 border-white/5 bg-gray-950/80" style={{}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="block w-32 opacity-90 hover:opacity-100 transition-opacity" href="#">
<img alt="Agency Logo" className="w-1000 h-10000 max-w-lg max-h-24 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4d23027-f88f-4c82-a35a-443b4ad8d862_3840w.png"/>
</a>

<div className="hidden md:flex items-center space-x-8 text-lg font-light text-gray-400" style={{}}>
<a className="transition-colors hover:text-white font-sans" href="/#about">За нас</a>
<a className="transition-colors hover:text-white font-sans" href="#services">Услуги</a>
<a className="transition-colors hover:text-white font-sans" href="/#process">Процес</a>
<a className="transition-colors hover:text-white font-sans" href="#faq">FAQ</a>
</div>

<div className="hidden md:block">
<a className="hover:bg-blue-500 transition-all duration-300 text-base font-medium text-white rounded-full px-6 py-2.5 bg-blue-600 shadow-[0_0_24px_rgba(37,99,235,0.75)] hover:shadow-[0_0_32px_rgba(37,99,235,0.9)] ring-1 ring-blue-400/70 font-sans" data-prefill-message="Здравейте! Искам безплатно демо." data-prefill-package="Безплатно демо" href="#contact">
  Запази демо
</a>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" style={{}}>
<svg className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden md:hidden border-b absolute w-full bg-gray-950 border-white/5" id="mobile-menu" style={{}}>
<div className="flex flex-col p-6 space-y-4 text-lg">
<a className="text-gray-300 font-sans" href="#about" style={{}}>За нас</a>
<a className="text-gray-300 font-sans" href="#services" style={{}}>Услуги</a>
<a className="text-gray-300 font-sans" href="#process" style={{}}>Процес</a>
<a className="font-medium text-blue-400 font-sans" data-prefill-message="Здравейте! Искам безплатно демо." data-prefill-package="Безплатно демо" href="#contact" style={{}}>Запази демо</a>
</div>
</div>
</nav>

<section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-28 pb-20 md:pt-32 md:pb-24" data-hero="">
<style>
    @media (prefers-reduced-motion: reduce) {
      .hero-anim {
        animation: none !important;
        transition: none !important;
      }
    }

    /* Globe rotation */
    .hero-globe-spin {
      animation: heroGlobeSpin 24s linear infinite;
    }

    @keyframes heroGlobeSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Optional very subtle float for accents */
    .hero-float {
      animation: heroFloat 10s ease-in-out infinite;
    }

    @keyframes heroFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  </style>

<div className="absolute inset-0 bg-slate-950"></div>

<div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">

<div className="absolute right-[6%] top-[34%] opacity-[0.16] hero-anim hero-float">
<div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-white/10" style="
          mask-image: radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%);
          -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 70%);
        "></div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">

<div className="absolute inset-0 rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 65%)'}}></div>

<div className="relative hero-anim hero-globe-spin w-[560px] h-[560px] md:w-[720px] md:h-[720px] lg:w-[860px] lg:h-[860px] rounded-full" style={{opacity: '0.10'}}>
<img alt="" className="w-full h-full object-contain select-none" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c861ca64-0f4c-42f4-a149-3936705dc48e_1600w.png" style={{filter: 'drop-shadow(rgba(37, 99, 235, 0.25) 0px 0px 28px)'}}/>
</div>
</div>

<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] fade-in-up delay-100 text-5xl tracking-tight mb-8 font-dm-sans font-light">
<span className="gradient-text font-dm-sans font-light">Вашият сайт е</span>
      първото впечатление.
    </h1>
<p className="md:text-2xl leading-relaxed fade-in-up delay-200 text-xl text-gray-400 max-w-3xl mr-auto mb-10 ml-auto font-dm-sans font-light">Уверете се, че клиентите избират вас, а не конкуренцията. 
Ние създаваме дигитални преживявания, които продават.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="sm:w-auto hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-2 group shadow-blue-600/25 text-lg font-medium text-white bg-blue-600 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg font-sans" data-prefill-message="Здравейте! Искам безплатно демо." data-prefill-package="Безплатно демо" href="#contact">
        Запази безплатно демо
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="sm:w-auto transition-all duration-300 hover:bg-white/10 text-lg font-medium text-white bg-white/5 w-full border-white/10 border rounded-full pt-4 pr-8 pb-4 pl-8 font-sans" href="#services">
        Виж пакети
      </a>
</div>
</div>
</section>

<section className="md:py-32 border-white/5 border-t pt-24 pb-24 relative" id="about">
<style>
    @media (prefers-reduced-motion: reduce) {
      .about-anim {
        transition: none !important;
      }
    }
  </style>
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-12 md:mb-14">
<h2 className="text-3xl md:text-5xl tracking-tight mb-4 text-white font-dm-sans font-light">
        За нас
      </h2>
<p className="text-lg md:text-xl font-light text-gray-400 max-w-3xl mx-auto font-sans">
        Запознайте се с екипа и причините, поради които се отличаваме от останалите.
      </p>

<div className="mt-8 flex items-center justify-center">
<div aria-label="Навигация за секция За нас" className="inline-flex items-center gap-3" data-about-tabs="" role="tablist">
<button aria-controls="about-panel-why" aria-selected="true" className="about-anim hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60 md:text-base text-sm text-white bg-slate-950/40 border-white/10 border ring-blue-500/40 ring-2 rounded-2xl pt-2.5 pr-6 pb-2.5 pl-6 relative flex items-center justify-center text-center" data-about-tab="why" id="about-tab-why" role="tab" type="button">
  Защо ние
</button>
<button aria-controls="about-panel-who" aria-selected="false" className="about-anim md:text-base hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/60 text-sm bg-slate-950/40 border-white/10 border rounded-2xl pt-2.5 pr-6 pb-2.5 pl-6 relative text-white/75 hover:bg-white/5 font-sans" data-about-tab="who" id="about-tab-who" role="tab" type="button">
            Кои сме
          </button>
</div>
</div>
</div>

<div className="relative">

<div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 h-[280px] w-[520px] md:h-[320px] md:w-[640px] blur-3xl rounded-full" style={{background: 'radial-gradient(circle, rgba(37,99,235,0.18), transparent 62%)'}}>
</div>

<div aria-labelledby="about-tab-why" className="about-anim relative" data-about-panel="why" id="about-panel-why" role="tabpanel">
<div className="glass-card md:p-10 overflow-hidden bg-slate-950/40 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<div className="mb-8">
<h3 className="md:text-2xl text-xl font-light text-white font-dm-sans mb-2">
      Как се отличаваме
    </h3>
<p className="text-base md:text-lg font-light text-gray-400 max-w-3xl font-sans">
      Ясен процес и фокус върху резултат: повече обаждания, заявки и доверие.
    </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 mb-6 md:mb-8 relative hover:border-blue-500/30 transition-colors shadow-2xl shadow-blue-900/20">

<div className="pointer-events-none absolute -inset-6 bg-blue-500/10 blur-3xl opacity-30"></div>
<div className="relative">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 grid place-items-center">
<svg className="" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2l1.5 5L19 9l-5.5 2L12 16l-1.5-5L5 9l5.5-2L12 2z"></path>
<path className="" d="M5 14l.8 2.6L8.4 18l-2.6.8L5 21l-.8-2.2L1.6 18l2.6-1.4L5 14z"></path>
</svg>
</div>
<h4 className="md:text-xl text-lg font-extrabold text-white">Безплатно демо преди изработка</h4>
</div>
<p className="font-light text-gray-400 max-w-4xl">Показваме ви реално демо на вашия бъдещ сайт. От дизайнът, до структурата и ключовите секции, в действие, преди да започнем пълната изработка, за да видите как ще работи за вашия бизнес. Без риск, без ангажимент, само резултати.</p>
<a className="inline-flex items-center justify-center hover:bg-white/10 transition-colors text-sm font-medium text-white bg-white/5 border-white/10 border rounded-lg mt-5 pt-2 pr-4 pb-2 pl-4" href="#contact">
    Заяви демо
  </a>
</div>
</div>

<div className="grid md:grid-cols-3 gap-5 md:gap-6">

<div className="hover:border-blue-500/30 transition-colors bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 grid place-items-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-3-6.7"></path>
<path d="M21 3v7h-7"></path>
</svg>
</div>
<h4 className="font-semibold text-white">1 седмица QA</h4>
</div>
<p className="text-sm font-light text-gray-400">
        След пускане правим проверки и корекции, за да е всичко стегнато и работещо.
      </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 grid place-items-center">
<svg className="" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 7v6l4 2"></path>
</svg>
</div>
<h4 className="text-base font-semibold text-white">Сайт за под 7 дни</h4>
</div>
<p className="text-sm font-light text-gray-400">
        Работим с готова система и ясен процес, за да стартирате бързо без компромис.
      </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/30 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 grid place-items-center">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3l7.5 18 2-7 7-2L3 3z"></path>
<path d="M13 13l6 6"></path>
</svg>
</div>
<h4 className="text-base font-semibold text-white">Итерации до 100%</h4>
</div>
<p className="text-sm font-light text-gray-400">
        Работим по вашия обратна връзка до финален вариант, с който сте напълно доволни.
      </p>
</div>
</div>
</div>
</div>

<div aria-labelledby="about-tab-who" className="about-anim relative hidden" data-about-panel="who" id="about-panel-who" role="tabpanel">
<div className="glass-card rounded-2xl p-6 md:p-10 border border-white/10 bg-slate-950/40 backdrop-blur-md overflow-hidden">
<div className="mb-10">
<h3 className="text-xl md:text-2xl text-white mb-2 font-dm-sans font-light">
              Екипът зад сайтовете
            </h3>
<p className="text-base md:text-lg font-light text-gray-400 max-w-3xl font-sans">
              Двама съоснователи с допълващи се умения: дизайн, който впечатлява, и стратегия, която носи клиенти.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<article className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-8 text-center">
<div className="flex flex-col items-center">
<div className="relative shrink-0 mb-4">
<img alt="Даниел" className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover border-2 border-blue-500/70 ring-4 ring-blue-500/20 shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_0_28px_rgba(37,99,235,0.25)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a92e527-d778-4f58-8ee9-8457e524d3b8_320w.png"/>
</div>
<h4 className="text-2xl text-white leading-tight font-dm-sans font-light">Даниел</h4>
<p className="text-sm text-blue-300/90 mt-1 font-sans">Съосновател</p>
<p className="mt-4 text-gray-300/90 font-light leading-relaxed max-w-md font-sans">
                  Създавам модерния дизайн и ясната структура на сайта, така че посетителят да разбере бързо какво
                  предлагате и да направи следващата стъпка.
                </p>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-8 text-center">
<div className="flex flex-col items-center">
<div className="relative shrink-0 mb-4">
<img alt="Мартин" className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover border-2 border-blue-500/70 ring-4 ring-blue-500/20 shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_0_28px_rgba(37,99,235,0.25)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afdf2e54-14ac-48dc-b5f9-5a7232526a74_3840w.png"/>
</div>
<h4 className="text-2xl text-white leading-tight font-dm-sans font-light">Мартин</h4>
<p className="text-sm text-blue-300/90 mt-1 font-sans">Съосновател</p>
<p className="mt-4 text-gray-300/90 font-light leading-relaxed max-w-md font-sans">
                  Подреждам позиционирането и стратегията за растеж, за да работи сайтът като инструмент за повече
                  заявки и по-добро онлайн присъствие.
                </p>
</div>
</article>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="bg-gray-950 border-white/5 border-t pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-light tracking-tight font-dm-sans mb-4">Пакети за уебсайт</h2>
<p className="text-xl font-light text-gray-400 max-w-2xl mr-auto ml-auto font-sans">
      Ясни нива според целта: доверие → запитвания → продажби и автоматизация.
    </p>
</div>

<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="glass-card flex flex-col hover:border-blue-500/30 transition-colors duration-300 group rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-4">
<h3 className="text-xl font-bold text-white mb-2 font-sans">Старт</h3>
<p className="text-lg text-gray-400 font-sans">Професионално присъствие за доверие и ясна информация.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-light text-white font-dm-sans">290 €</span>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex text-lg text-gray-300 gap-x-2 gap-y-0 items-start">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  3 уеб страници + 9 секции за информация
</li>
<li className="flex text-lg text-gray-300 gap-x-2 gap-y-x-2 items-start">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  Мобилна версия + бързо зареждане
</li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  Форма за контакт (запитвания) + админ панел
</li>
<li className="flex text-lg text-gray-300 gap-x-2 gap-y-x-2 items-start">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  Уникален / персонализиран дизайн за вас
</li>
<li className="flex text-lg text-gray-300 gap-x-2 gap-y-x-2 items-start">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  Изображения с лиценз - 3 бр.
</li>
</ul>
<a className="w-full block text-center border py-3 rounded-lg transition-all text-lg bg-white/5 hover:bg-white/10 border-white/10 text-white font-sans" data-prefill-message="Здравейте! Интересувам се от пакет “Старт” (289 €)." data-prefill-package="Старт" href="#contact">
    Избери Старт
  </a>
</div>

<div className="glass-card flex flex-col shadow-blue-900/10 border-blue-500/50 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm px-4 py-1 rounded-full font-medium bg-blue-600 text-white font-sans">
    Най-популярен
  </div>
<div className="mb-4">
<h3 className="text-xl font-bold text-white mb-2">Растеж</h3>
<p className="text-lg text-gray-400">Сайт, който превръща посещенията в реални запитвания.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-light text-white font-dm-sans">490 €</span>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex text-lg text-gray-300 items-start gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Всичко от пакет “Старт”
  </li>
<li className="flex text-lg text-gray-300 gap-x-2 gap-y-x-2 items-start">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  5 страници + 12 секции
</li>
<li className="flex text-lg text-gray-300 gap-x-2 gap-y-x-2 items-start">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    SEO оптимизация
  </li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Абонамент за бюлетин
  </li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
  15 лицензирани + 5 наши 
</li>
</ul>
<a className="block hover:bg-blue-500 transition-all text-lg font-medium text-white text-center bg-blue-600 w-full rounded-lg pt-3 pb-3 font-sans" data-prefill-message="Здравейте! Интересувам се от пакет “Растеж” (489 €)." data-prefill-package="Растеж" href="#contact">
    Избери Растеж
  </a>
</div>

<div className="glass-card flex flex-col hover:border-blue-500/30 transition-colors duration-300 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-4">
<h3 className="text-xl font-bold text-white mb-2 font-sans">Доминирай</h3>
<p className="text-lg text-gray-400">Многостраничен, многоезичен сайт, който продава. </p>
</div>
<div className="mb-8">
<span className="text-4xl font-light text-white font-dm-sans">890 € </span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Всичко от пакет “Растеж”
  </li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    7 страници + до 20 секции
  </li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Мултиезичност
  </li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    Онлайн магазин/каталог
  </li>
<li className="flex items-start text-lg text-gray-300 font-sans gap-x-2">
<svg className="lucide lucide-check w-6 h-6 shrink-0 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
    21 лицензирани + 10 наши
  </li>
</ul>
<a className="w-full block text-center border py-3 rounded-lg transition-all text-lg bg-white/5 hover:bg-white/10 border-white/10 text-white font-sans" data-prefill-message="Здравейте! Интересувам се от пакет “Доминирай” (1 390 €)." data-prefill-package="Доминирай" href="#contact">
    Избери Доминирай
  </a>
</div>
</div>

<div className="my-14 flex items-center justify-center">
<div className="h-px flex-1 bg-blue-900/40"></div>
<span className="px-6 text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-blue-300/80 bg-gray-950 whitespace-nowrap font-sans">
        допълнителни услуги
      </span>
<div className="h-px flex-1 bg-blue-900/40"></div>
</div>

<div className="grid md:grid-cols-2 gap-6 mt-12">
<div className="p-6 border rounded-xl flex items-center gap-4 border-white/5 bg-gray-900/50">
<div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
<svg className="lucide lucide-shield w-6 h-6" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-white font-sans">Месечна поддръжка</h4>
<p className="font-light text-gray-400 font-sans">50 € / месец — промени, подобрения и спокойствие.</p>
</div>
</div>
<div className="p-6 border rounded-xl flex items-center gap-4 border-white/5 bg-gray-900/50">
<div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-white font-sans">Проследяване и анализ</h4>
<p className="font-light text-gray-400 font-sans">25 € / месец — измерване на посещения и заявки.</p>
</div>
</div>
</div>
<p className="text-center text-gray-500 mt-8 text-base font-light font-sans">
    * Пакетите са базови и подлежат на персонализация според нишата, съдържанието и функционалностите.
  </p>
</div>
</section>

<section className="overflow-x-hidden pt-24 pb-24 relative border-t border-white/5" id="process">
<style>
    @media (prefers-reduced-motion: reduce) {
      .proc-anim {
        transition: none !important;
      }
    }
  </style>
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl tracking-tight mb-4 text-center font-dm-sans font-light">
      Как работим?
    </h2>
<p className="text-center text-white/70 max-w-2xl mx-auto mb-14 text-base md:text-lg font-sans">
      3 стъпки, ясни условия, демо версия преди да платите.
    </p>
<div className="relative mx-auto max-w-5xl" data-proc-root="">
<div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(37,99,235,0.25), transparent 60%)'}}>
</div>

<div aria-label="Процес на работа" aria-roledescription="carousel" className="relative h-[420px] md:h-[360px] px-6 md:px-16 flex items-center justify-center" data-proc-stage="" role="region" tabindex="0">

<button aria-label="Стъпка 3: Изработка &amp; старт" className="proc-anim absolute left-2 md:left-6 top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-950/45 backdrop-blur-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60 w-14 h-14 p-0 md:w-[260px] md:h-[76px] md:px-4 md:py-3 flex items-center justify-center md:justify-start gap-3 md:gap-4 z-10" data-proc-prev-step="" type="button">
<span className="grid place-items-center h-12 w-12 rounded-full border border-white/10 bg-slate-950/60 text-white/85 shrink-0">
<span className="text-lg font-light font-sans" data-proc-prev-num="">3</span>
</span>
<span className="hidden md:block min-w-0">
<span className="block text-[11px] uppercase text-white/35 tracking-wider font-sans">Стъпка</span>
<span className="block text-sm text-white/55 leading-tight truncate font-sans" data-proc-prev-title="">Изработка &amp; старт</span>
</span>
</button>

<article className="proc-anim w-[92%] md:w-[560px] relative rounded-2xl border bg-slate-950/40 backdrop-blur-md p-8 md:p-10 border-blue-500/40 z-30" data-proc-card="" style={{boxShadow: 'rgba(255, 255, 255, 0.03) 0px 0px 0px 1px, rgba(37, 99, 235, 0.22) 0px 0px 72px', opacity: '0', transition: 'opacity 180ms'}}>
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border bg-slate-900/60 text-2xl border-blue-500 text-blue-400 font-dm-sans font-light" data-proc-badge="" style={{boxShadow: '0 0 34px rgba(37,99,235,0.55)'}}>1</div>
<h3 className="text-xl font-semibold text-center mb-2 text-white font-sans" data-proc-title="">Форма &amp; цели</h3>
<p className="text-center text-base md:text-lg font-light leading-relaxed text-white/70 font-sans" data-proc-desc="">Попълвате кратка форма, за да разберем целите, стила и приоритетите ви, резервации, запитвания или продажби.</p>
<p className="mt-6 text-center text-sm text-white/55 font-sans" data-proc-micro="">Отнема ~1 минута, без излишни въпроси.</p>
</article>

<button aria-label="Стъпка 2: Демо за 48 часа" className="proc-anim absolute right-2 md:right-6 top-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-950/45 backdrop-blur-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60 w-14 h-14 p-0 md:w-[260px] md:h-[76px] md:px-4 md:py-3 flex items-center justify-center md:justify-end gap-3 md:gap-4 z-10" data-proc-next-step="" type="button">
<span className="hidden md:block min-w-0 text-right">
<span className="block text-[11px] uppercase text-white/35 tracking-wider text-center font-sans">Стъпка</span>
<span className="block text-sm text-white/55 leading-tight truncate font-sans" data-proc-next-title="">Демо за 48 часа</span>
</span>
<span className="grid place-items-center h-12 w-12 rounded-full border border-white/10 bg-slate-950/60 text-white/85 shrink-0">
<span className="text-lg font-light font-sans" data-proc-next-num="">2</span>
</span>
</button>
</div>

<div aria-label="Навигация по стъпки" className="mt-6 flex items-center justify-center gap-4">
<button aria-label="Предишна стъпка" className="proc-anim inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-white/80 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-blue-500/60" data-proc-prev="" type="button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18l-6-6 6-6"></path>
</svg>
</button>
<div className="flex items-center justify-center gap-3" id="proc-dots">
<button aria-current="true" aria-label="Стъпка 1" className="proc-dot h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-white/40 transition focus:outline-none focus:ring-2 focus:ring-blue-500/60" data-dot="1" style={{background: 'rgba(37, 99, 235, 0.95)', boxShadow: 'rgba(37, 99, 235, 0.55) 0px 0px 16px'}}></button>
<button aria-current="false" aria-label="Стъпка 2" className="proc-dot h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-white/40 transition focus:outline-none focus:ring-2 focus:ring-blue-500/60" data-dot="2" style={{background: 'rgba(255, 255, 255, 0.2)', boxShadow: 'none'}}></button>
<button aria-current="false" aria-label="Стъпка 3" className="proc-dot h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-white/40 transition focus:outline-none focus:ring-2 focus:ring-blue-500/60" data-dot="3" style={{background: 'rgba(255, 255, 255, 0.2)', boxShadow: 'none'}}></button>
</div>
<button aria-label="Следваща стъпка" className="proc-anim inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-white/80 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-blue-500/60" data-proc-next="" type="button">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</button>
</div>
<p className="mt-4 text-center text-sm text-white/45 font-sans">
        Използвайте стрелките, точките или стъпките отстрани. (Фокус + ← / →)
      </p>
</div>
</div>

</section>

<section className="bg-gray-950 border-white/5 border-t pt-24 pb-24" id="faq">
<style>
    /* Simple + stable: multi-open allowed, no custom animations */
    #faq summary::-webkit-details-marker { display: none; }
  </style>
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl tracking-tight mb-12 font-dm-sans font-light">
      Често задавани въпроси
    </h2>
<div className="space-y-4">

<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3">
<h3 className="text-xl font-medium text-white font-sans">За колко време е готово демото?</h3>
<span className="shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-45 font-sans">+</span>
</summary>
<p className="text-lg font-light text-gray-400 pb-2 font-sans">
          Изготвяме персонализираното демо в рамките на 48 часа след първоначалния разговор или попълване на формата.
        </p>
</details>

<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3">
<h3 className="text-xl font-medium text-white font-sans">Колко струва целият сайт?</h3>
<span className="shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-45 font-sans">+</span>
</summary>
<p className="text-lg font-light text-gray-400 pb-2 font-sans">
          Зависи от нуждите и обхвата. Стартовите решения започват от 130 € за информационен сайт и се уточняват след демото.
          Няма скрити такси.
        </p>
</details>

<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3">
<h3 className="text-xl font-medium text-white font-sans">Трябва ли да имам домейн и хостинг?</h3>
<span className="shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-45 font-sans">+</span>
</summary>
<p className="text-lg font-light text-gray-400 pb-2 font-sans">
          Не. Ако нямате, ние помагаме с избора и настройката на домейн и хостинг, така че всичко да работи без главоболия.
        </p>
</details>

<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3">
<h3 className="text-xl font-medium text-white font-sans">Мога ли да правя промени след това?</h3>
<span className="shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-45 font-sans">+</span>
</summary>
<p className="text-lg font-light text-gray-400 pb-2 font-sans">
          Да. Можем да ви покажем как да редактирате дребни неща сами, или ние да поемем промените при нужда.
        </p>
</details>

<details className="group border-b border-white/10 pb-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3">
<h3 className="text-xl font-medium text-white font-sans">Какво включва поддръжката?</h3>
<span className="shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-45 font-sans">+</span>
</summary>
<p className="text-lg font-light text-gray-400 pb-2 font-sans">
          След пускане получавате първа седмица активна техническа поддръжка, мониторинг и отстраняване на евентуални проблеми.
        </p>
</details>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative border-t border-white/5" id="contact">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-dm-sans font-light">Готови ли сте за растеж?</h2>
<p className="text-xl font-light mb-10 text-gray-400 font-sans" style={{}}>
          Попълнете формата и ще се свържем с вас за безплатна консултация и демо. Не губете повече клиенти заради слаб
          сайт.
        </p>
<div className="space-y-6">
<a aria-label="Обади се: +359 876 500 632" className="flex items-center gap-4 transition-colors hover:text-blue-400 text-lg text-gray-300" href="tel:+359876500632">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="font-sans">+359 876 500 632</span>
</a>
<a aria-label="Изпрати имейл до dmdigitalpartners@gmail.com" className="flex items-center gap-4 text-lg transition-colors text-gray-300 hover:text-blue-400" href="mailto:dmdigitalpartners@gmail.com?subject=%D0%97%D0%B0%D0%BF%D0%B8%D1%82%D0%B2%D0%B0%D0%BD%D0%B5%20%D0%B7%D0%B0%20%D1%83%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="font-sans">dmdigitalpartners@gmail.com</span>
</a>
<a className="group flex items-center gap-4 text-lg text-gray-300 transition-colors hover:text-blue-400" href="https://www.facebook.com/daniel.yanchevv" rel="noopener noreferrer" target="_blank">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5">
<svg className="w-6 h-6 text-white transition-colors group-hover:text-[#2563eb]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</div>
<span className="font-sans">daniel.yanchevv</span>
</a>
</div>
</div>
<div className="glass-card md:p-10 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<form accept-charset="UTF-8" action="https://formspree.io/f/mbdrwkvv" className="space-y-6" id="contact-form" method="POST">
<div>
<label className="block text-sm font-medium mb-2 text-gray-400 font-sans">Име</label>
<input autocomplete="name" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors bg-gray-900/80 border-white/10 text-white placeholder:text-white/30" id="form-name" name="name" placeholder="Вашето име" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-400 font-sans">Имейл</label>
<input autocomplete="email" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors bg-gray-900/80 border-white/10 text-white placeholder:text-white/30" id="form-email" inputmode="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-400 font-sans">Телефон</label>
<input autocomplete="tel" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors bg-gray-900/80 border-white/10 text-white placeholder:text-white/30" id="form-phone" inputmode="tel" name="phone" placeholder="+359 88X XXX XXX" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-400 font-sans">Тип бизнес</label>
<select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none bg-gray-900/80 border-white/10 text-white" id="form-business" name="businessType" required="">
<option disabled="" selected="" value="">Изберете тип</option>
<option value="Ресторант / Кафене">Ресторант / Кафене</option>
<option value="Услуги / Салон">Услуги / Салон</option>
<option value="Магазин">Магазин</option>
<option value="Друго">Друго</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-gray-400 font-sans">Съобщение (по желание)</label>
<textarea className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors bg-gray-900/80 border-white/10 text-white placeholder:text-white/30" id="form-message" name="message" placeholder="Накратко: какъв сайт искате и каква е целта?" rows="4"></textarea>
</div>

<input name="_subject" type="hidden" value="Ново запитване от сайта (D&amp;M)"/>

<p aria-live="polite" className="hidden text-sm font-sans" id="form-status"></p>
<button className="w-full hover:bg-blue-500 font-medium py-4 rounded-lg transition-all text-lg shadow-lg bg-blue-600 text-white shadow-blue-900/20 font-sans" id="form-submit" type="submit">
      Изпрати запитване
    </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-white/10 border-t">
<footer className="bg-slate-950 border-white/10 border-t">
<div className="max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">

<div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-10 gap-x-y-12 gap-y-12">

<div className="md:col-span-5 flex flex-col items-start">

<div className="mb-4">
<p className="leading-none md:text-3xl text-lg text-[#2663eb] tracking-tighter font-dm-sans font-light">D&amp;M Web Design
      </p>
<p className="md:text-sm text-xs text-white/60 mt-1 font-sans">Уебсайтове, които продават.</p>
</div>
<p className="md:text-base leading-relaxed text-sm font-light text-white/80 max-w-md font-sans">
      Вашият уебсайт е първото впечатление. Ние се уверяваме, че е правилното.
    </p>
<a className="inline-flex items-center justify-center hover:bg-blue-500 transition-colors text-sm font-medium text-[#e9effd] bg-[#2563eb] rounded-xl mt-6 pt-3 pr-5 pb-3 pl-5 font-sans" data-prefill-message="Здравейте! Искам безплатно демо." data-prefill-package="Безплатно демо" href="#contact">
      Резервирай безплатна демо версия
      <span className="ml-3 font-sans">→</span>
</a>
</div>

<div className="md:col-span-3">
<p className="text-white text-sm font-medium mb-5 font-sans">Услуги</p>
<ul className="space-y-3 text-sm text-white/75 font-sans">
<li className="font-sans">Създаване на уебсайт</li>
<li className="font-sans">Редизайн и оптимизация</li>
<li className="font-sans">Проследяване и анализ</li>
<li className="font-sans">Поддръжка</li>
</ul>
</div>

<div className="md:col-span-2">
<p className="text-sm font-medium text-white mb-5 font-sans">Компания</p>
<ul className="space-y-3 text-sm text-white/75 font-sans">
<li className=""><a className="hover:text-white transition-colors font-sans" href="#about">За нас</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#services">Услуги</a></li>
<li className=""><a className="hover:text-white transition-colors font-sans" href="#process">Процес</a></li>
</ul>
</div>

<div className="md:col-span-2">
<p className="text-sm font-medium text-white mb-5 font-sans">Свържете се с нас</p>
<div className="space-y-3 text-sm text-white/75 font-sans">

<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:+359876500632">
<span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
</path>
</svg>
</span>
<span className="leading-tight whitespace-nowrap font-sans">+359 876 500 632</span>
</a>

<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:dmdigitalpartners@gmail.com">
<span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</span>
<span className="min-w-0 leading-tight">
<span className="block truncate max-w-[220px] sm:max-w-[260px] md:max-w-[220px] font-sans" title="dmdigitalpartners@gmail.com">
                dmdigitalpartners@gmail.com
              </span>
</span>
</a>


<div className="flex items-center gap-3">
<span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</span>
<span className="leading-tight font-sans">Пловдив, България</span>
</div>
</div>
</div>
</div>

<div className="mt-12 border-t border-white/10"></div>

<div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center md:text-left">
<p className="text-xs md:text-sm text-white/60 font-sans">
      © 2026 D&amp;M Website Design. Всички права запазени.
    </p>
<div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs md:text-sm text-white/60 font-sans">
<a className="hover:text-white transition-colors font-sans" href="/privacy-policy">Политика за поверителност</a>
<a className="hover:text-white transition-colors font-sans" href="/terms">Условия за ползване</a>
<a className="hover:text-white transition-colors font-sans" href="/copyright">Авторски права</a>
</div>
</div>
</div>
</footer>
</footer>

<div id="google_translate_element"></div>
<div id="google_translate_element" style={{display: 'none'}}></div>




    </>
  );
}
