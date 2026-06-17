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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ["Inter", "sans-serif"] },
colors: {
brand: {
50: "#f8fafc",
100: "#f1f5f9",
200: "#e2e8f0",
300: "#cbd5e1",
400: "#94a3b8",
500: "#64748b",
600: "#475569",
700: "#334155",
800: "#1e293b",
900: "#0f172a",
},
},
animation: {
"ping-slow": "pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
"pulse-glow": "pulseGlow 2s ease-in-out infinite",
scroll: "scroll 1.5s infinite",
"fade-in": "fadeIn 0.5s ease-out",
},
keyframes: {
pingSlow: {
"0%": { transform: "scale(1)", opacity: "1" },
"75%, 100%": { transform: "scale(2)", opacity: "0" },
},
pulseGlow: {
"0%, 100%": { opacity: "0.5" },
"50%": { opacity: "0.8" },
},
scroll: {
"0%": { transform: "translateY(0)", opacity: "1" },
"100%": { transform: "translateY(12px)", opacity: "0" },
},
fadeIn: {
"0%": { opacity: "0", transform: "translateY(10px)" },
"100%": { opacity: "1", transform: "translateY(0)" },
},
},
},
},
};



      // Mobile menu
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      function setMenu(open) {
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        mobileMenu.classList.toggle("menu-open", open);
        mobileMenu.classList.toggle("menu-closed", !open);
        menuBtn.innerHTML = open
          ? '<iconify-icon icon="solar:close-circle-linear" width="20" height="20" class="text-slate-900"></iconify-icon>'
          : '<iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20" class="text-slate-900"></iconify-icon>';
      }
      menuBtn?.addEventListener("click", () => {
        const open = mobileMenu.classList.contains("menu-closed");
        setMenu(open);
      });

      // Close menu on link click
      mobileMenu?.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => setMenu(false));
      });

      // Spotlight hover tracking
      document.querySelectorAll(".spotlight-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      });

      // Thanks modal
      const thanks = document.getElementById("thanks");
      function openThanks() {
        thanks.classList.remove("hidden");
      }
      function closeThanks() {
        thanks.classList.add("hidden");
      }
      window.openThanks = openThanks;
      window.closeThanks = closeThanks;

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Escape closes modal
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !thanks.classList.contains("hidden")) closeThanks();
      });

      // Click backdrop closes modal
      thanks?.addEventListener("click", (e) => {
        if (e.target === thanks) closeThanks();
      });
    


      // Ensure icon stroke width (Solar Linear via Iconify supports style)
      document.querySelectorAll("iconify-icon").forEach((i) => {
        const currentStyle = i.getAttribute("style") || "";
        if (!/stroke-width/i.test(currentStyle)) {
          i.setAttribute("style", (currentStyle ? currentStyle + "; " : "") + "stroke-width: 1.5;");
        }
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-500/30 blur-[70px] animate-pulse-glow mix-blend-multiply"></div>
<div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/30 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-500/30 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 grid place-items-center shadow-sm">
<iconify-icon className="text-white" height="20" icon="solar:wind-linear" width="20"></iconify-icon>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold text-slate-900 tracking-tight">Engage Air &amp; Electrical</div>
<div className="text-xs text-slate-600">Newcastle &amp; Hunter</div>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#process">How it works</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#why">Why us</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-slate-800 cta-glow" href="#quote">
              Get a quote
            </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 text-sm font-semibold px-4 py-2 shadow-sm border border-slate-200 hover:bg-slate-50" href="tel:+61400000000">
              Call
            </a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm" id="menu-btn">
<iconify-icon className="text-slate-900" height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="md:hidden menu-closed" id="mobile-menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 pt-2">
<div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm overflow-hidden">
<div className="p-4 grid gap-2">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#services">Services</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#process">How it works</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#why">Why us</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#faq">FAQ</a>
<div className="pt-2 grid gap-2">
<a className="rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2 text-center cta-glow" href="#quote">Get a quote</a>
<a className="rounded-xl bg-white text-slate-900 text-sm font-semibold px-4 py-2 text-center border border-slate-200" href="tel:+61400000000">Call</a>
</div>
<div className="text-xs text-slate-500 pt-2">Licensed &amp; insured • Fast scheduling • Clean installs</div>
</div>
</div>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="pt-28 sm:pt-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-700">Ventilation supply, install &amp; repairs</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Ventilation that keeps your home dry, healthy, and comfortable.
              </h1>
<p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
                From bathroom exhaust fans to whole-home ventilation, we design and install quiet, effective airflow solutions for Newcastle and the Hunter.
              </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-semibold px-5 py-3 shadow-sm hover:bg-slate-800 cta-glow" href="#quote">
                  Request a free quote
                </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 text-sm font-semibold px-5 py-3 shadow-sm border border-slate-200 hover:bg-slate-50" href="#services">
                  See ventilation services
                </a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
<div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Licensed</div>
<div className="text-xs text-slate-600">Fully insured</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:volume-knob-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Quiet</div>
<div className="text-xs text-slate-600">Low-noise fans</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:bolt-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Efficient</div>
<div className="text-xs text-slate-600">Right-sized airflow</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-3 text-xs text-slate-600">
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-slate-700" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Newcastle • Lake Macquarie • Maitland • Hunter</span>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm overflow-hidden">
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">What we can fix fast</div>
<div className="text-xs text-slate-600 mt-1">Common ventilation issues</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
<iconify-icon className="text-slate-800" height="16" icon="solar:airbuds-case-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Quiet solutions</span>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-3">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white border border-slate-200 grid place-items-center">
<iconify-icon className="text-slate-800" height="18" icon="solar:dropper-minimalistic-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Condensation</div>
<div className="text-xs text-slate-600">Foggy mirrors &amp; damp walls</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white border border-slate-200 grid place-items-center">
<iconify-icon className="text-slate-800" height="18" icon="solar:mask-happly-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Musty odours</div>
<div className="text-xs text-slate-600">Stale air in wet areas</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white border border-slate-200 grid place-items-center">
<iconify-icon className="text-slate-800" height="18" icon="solar:volume-cross-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Noisy fans</div>
<div className="text-xs text-slate-600">Rattles, hums, vibration</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-white border border-slate-200 grid place-items-center">
<iconify-icon className="text-slate-800" height="18" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Poor extraction</div>
<div className="text-xs text-slate-600">Steam lingers too long</div>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Need help today?</div>
<div className="text-xs text-slate-600">Call for fast scheduling</div>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-slate-800" href="tel:+61400000000">
                        Call now
                      </a>
</div>
</div>
</div>
<div className="border-t border-slate-200 bg-slate-50/70 px-6 sm:px-8 py-4">
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-slate-600">Scroll for services, pricing guidance, and FAQ</div>
<div className="h-9 w-9 rounded-full border border-slate-200 bg-white grid place-items-center">
<iconify-icon className="text-slate-900 animate-scroll" height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-slate-500">
                We recommend ducted extraction to the outside where possible (not into roof cavities).
              </div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Ventilation services</h2>
<p className="mt-3 text-sm sm:text-base text-slate-600">
              Practical solutions for bathrooms, laundries, kitchens, and whole-home airflow. We size the fan correctly, route ducting properly, and leave a clean finish.
            </p>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:bath-linear" width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Bathroom exhaust fans</h3>
<p className="mt-2 text-sm text-slate-600">Supply &amp; install, ducted to outside. Ideal for steam and mould control.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Ceiling or wall-mounted options</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Backdraft prevention</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Low-noise selections</li>
</ul>
</div>
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:washing-machine-linear" width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Laundry ventilation</h3>
<p className="mt-2 text-sm text-slate-600">Reduce moisture build-up, odours, and lingering humidity in utility areas.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Duct routing &amp; vents</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Fan upgrades &amp; replacements</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Moisture control</li>
</ul>
</div>
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:air-conditioning-linear" width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Whole-home airflow</h3>
<p className="mt-2 text-sm text-slate-600">Improve comfort by balancing stale air removal with controlled fresh air intake.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Assessment &amp; sizing</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Targeted extraction</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Draft &amp; odour reduction</li>
</ul>
</div>
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:tools-linear" width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Servicing &amp; repairs</h3>
<p className="mt-2 text-sm text-slate-600">Noisy, weak, or dead fans? We troubleshoot wiring, switches, and airflow issues.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Motor &amp; fan replacement</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Duct blockages</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Switches &amp; timers</li>
</ul>
</div>
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Timers &amp; smart controls</h3>
<p className="mt-2 text-sm text-slate-600">Set run-on timers so fans clear humidity after showers without wasting power.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Run-on timers</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Humidity-sensing options</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Clean, compliant install</li>
</ul>
</div>
<div className="spotlight-card rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:home-smile-linear" width="22"></iconify-icon>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">New builds &amp; renovations</h3>
<p className="mt-2 text-sm text-slate-600">Plan ventilation early for discreet duct runs and better long-term performance.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Builder coordination</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Vent placement planning</li>
<li className="flex gap-2"><span className="mt-0.5 text-emerald-600">•</span>Compliance guidance</li>
</ul>
</div>
</div>
<div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm">
<div className="grid lg:grid-cols-12 gap-6 items-center">
<div className="lg:col-span-8">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Not sure what you need?</h3>
<p className="mt-2 text-sm sm:text-base text-slate-600">
                  Tell us the room size and what’s happening (steam, mould, odours, noise). We’ll recommend the right fan capacity and ducting approach.
                </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
<a className="rounded-xl bg-slate-900 text-white text-sm font-semibold px-5 py-3 text-center shadow-sm hover:bg-slate-800 cta-glow" href="#quote">
                  Get recommendations
                </a>
<a className="rounded-xl bg-white text-slate-900 text-sm font-semibold px-5 py-3 text-center border border-slate-200 hover:bg-slate-50" href="tel:+61400000000">
                  Call to discuss
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How it works</h2>
<p className="mt-3 text-sm sm:text-base text-slate-600">A clean, simple process — from first message to a neat, compliant install.</p>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-4">
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="20" icon="solar:chat-round-linear" width="20"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-600">Step 1</div>
</div>
<div className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Tell us the issue</div>
<div className="mt-2 text-sm text-slate-600">Room type, symptoms, and photos if possible.</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="20" icon="solar:ruler-linear" width="20"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-600">Step 2</div>
</div>
<div className="mt-5 text-lg font-semibold tracking-tight text-slate-900">We size the solution</div>
<div className="mt-2 text-sm text-slate-600">Fan capacity, ducting route, and vent location.</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-600">Step 3</div>
</div>
<div className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Book a time</div>
<div className="mt-2 text-sm text-slate-600">We schedule a visit that suits your week.</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-600">Step 4</div>
</div>
<div className="mt-5 text-lg font-semibold tracking-tight text-slate-900">Install &amp; test</div>
<div className="mt-2 text-sm text-slate-600">Neat finish, correct extraction, clean-up included.</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="why">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Why ventilation matters</h2>
<p className="mt-3 text-sm sm:text-base text-slate-600">
                Moisture and stale air can cause mould, damage paint and plaster, and make your home feel colder. Good extraction reduces condensation and improves indoor comfort.
              </p>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:virus-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Reduce mould risk</div>
<div className="text-xs text-slate-600">Control humidity at the source</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Improve air quality</div>
<div className="text-xs text-slate-600">Remove odours and stale air</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:home-add-angle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Protect your home</div>
<div className="text-xs text-slate-600">Less moisture damage over time</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm">
<div className="flex items-start justify-between gap-6">
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Pricing guidance</div>
<div className="text-xs text-slate-600 mt-1">Every home is different — we quote clearly before work.</div>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
<iconify-icon className="text-slate-800" height="16" icon="solar:tag-price-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Upfront quotes</span>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<div className="text-sm font-semibold text-slate-900 tracking-tight">Fan replacement</div>
<div className="mt-1 text-xs text-slate-600">Like-for-like swap where wiring/ducting exists.</div>
<div className="mt-4 text-sm text-slate-700">
                      Typical factors:
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="text-emerald-600">•</span>Access to ceiling space</li>
<li className="flex gap-2"><span className="text-emerald-600">•</span>Existing duct condition</li>
<li className="flex gap-2"><span className="text-emerald-600">•</span>Noise level preference</li>
</ul>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<div className="text-sm font-semibold text-slate-900 tracking-tight">New ducted install</div>
<div className="mt-1 text-xs text-slate-600">New fan + ducting to eave/roof vent as appropriate.</div>
<div className="mt-4 text-sm text-slate-700">
                      Typical factors:
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><span className="text-emerald-600">•</span>Duct route length</li>
<li className="flex gap-2"><span className="text-emerald-600">•</span>Vent placement and weatherproofing</li>
<li className="flex gap-2"><span className="text-emerald-600">•</span>Switch/timer requirements</li>
</ul>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Want an exact price?</div>
<div className="text-xs text-slate-600">We’ll confirm scope and quote before starting.</div>
</div>
</div>
<a className="rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2 text-center shadow-sm hover:bg-slate-800 cta-glow" href="#quote">
                      Request a quote
                    </a>
</div>
</div>
<div className="mt-4 text-xs text-slate-500">
                  Note: We aim for correct ducting to the outside rather than venting into roof spaces.
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="quote">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-slate-200 bg-white/85 backdrop-blur shadow-sm overflow-hidden">
<div className="p-6 sm:p-10">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Request a ventilation quote</h2>
<p className="mt-3 text-sm sm:text-base text-slate-600">
                    Send a few details and we’ll get back to you with next steps. If you can, include photos of the ceiling/wall area and any existing duct outlet.
                  </p>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-900" height="18" icon="solar:inbox-linear" width="18"></iconify-icon>
<div className="text-sm text-slate-700"><span className="font-semibold">Response:</span> typically same or next business day</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-900" height="18" icon="solar:home-2-linear" width="18"></iconify-icon>
<div className="text-sm text-slate-700"><span className="font-semibold">Service area:</span> Newcastle &amp; Hunter Region</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="grid gap-4" onsubmit="event.preventDefault(); openThanks();">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs font-medium text-slate-700">Full name</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="Jane Citizen" required="" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-slate-700">Phone</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="04xx xxx xxx" required="" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs font-medium text-slate-700">Email</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="you@email.com" required="" type="email"/>
</div>
<div>
<label className="text-xs font-medium text-slate-700">Suburb</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="Merewether" required="" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs font-medium text-slate-700">Room type</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="Bathroom / Laundry / Other" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-slate-700">What do you need?</label>
<input className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="Install / Replace / Repair" type="text"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-slate-700">Describe the issue</label>
<textarea className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="E.g., steam lingers, mould spots, fan is loud, no outside vent..." rows="4"></textarea>
<div className="mt-2 text-xs text-slate-500">Tip: mention ceiling height and if there’s easy roof access.</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
<button className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white text-sm font-semibold px-5 py-3 shadow-sm hover:bg-slate-800 cta-glow" type="submit">
                        Submit request
                      </button>
<div className="text-xs text-slate-500">By submitting, you agree we can contact you about your request.</div>
</div>
</form>
</div>
</div>
</div>
<div className="border-t border-slate-200 bg-slate-50/70 px-6 sm:px-10 py-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="text-sm text-slate-700">
                  Prefer a call? <a className="font-semibold text-slate-900" href="tel:+61400000000">04 00 000 000</a>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-700" height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
<span>Clean installs • Compliant work • Clear communication</span>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="thanks">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
<div className="absolute inset-0 grid place-items-center p-4">
<div className="w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-2xl bg-slate-900 grid place-items-center">
<iconify-icon className="text-white" height="22" icon="solar:check-circle-linear" width="22"></iconify-icon>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">Request sent</div>
<div className="text-sm text-slate-600">We’ll get back to you shortly.</div>
</div>
</div>
<button aria-label="Close" className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm" onclick="closeThanks()" type="button">
<iconify-icon className="text-slate-900" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    If it’s urgent, call us now and we’ll try to fit you in sooner.
                  </div>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="rounded-xl bg-slate-900 text-white text-sm font-semibold px-5 py-3 text-center hover:bg-slate-800" href="tel:+61400000000">
                      Call
                    </a>
<button className="rounded-xl bg-white text-slate-900 text-sm font-semibold px-5 py-3 text-center border border-slate-200 hover:bg-slate-50" onclick="closeThanks()" type="button">
                      Back to page
                    </button>
</div>
</div>
<div className="border-t border-slate-200 bg-slate-50/70 px-6 py-4 text-xs text-slate-600">
                  Tip: Photos of the existing fan and any outside vent help us quote faster.
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">FAQ</h2>
<p className="mt-3 text-sm sm:text-base text-slate-600">Quick answers to common ventilation questions.</p>
</div>
<div className="mt-10 grid lg:grid-cols-2 gap-4">
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900 tracking-tight">Should bathroom fans vent into the roof?</div>
<div className="mt-2 text-sm text-slate-600">
                Generally no — moisture should be ducted to the outside to avoid condensation issues in roof spaces. We’ll recommend the best vent outlet for your home.
              </div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900 tracking-tight">How do I know what size fan I need?</div>
<div className="mt-2 text-sm text-slate-600">
                It depends on room size, ceiling height, and duct length. We’ll size the fan so it clears humidity effectively without being overly noisy.
              </div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900 tracking-tight">Can you replace an old fan with a quieter model?</div>
<div className="mt-2 text-sm text-slate-600">
                Yes — we can replace many older fans with modern low-noise options and improve ducting if needed.
              </div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-900 tracking-tight">Do you install timers or humidity sensors?</div>
<div className="mt-2 text-sm text-slate-600">
                Yes — run-on timers and humidity-sensing controls can help clear steam after showers and reduce mould risk.
              </div>
</div>
</div>
<div className="mt-8 rounded-3xl border border-slate-200 bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
<div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">Ready to improve your airflow?</div>
<div className="mt-2 text-sm sm:text-base text-slate-600">Get a clear recommendation and an upfront quote.</div>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="rounded-xl bg-slate-900 text-white text-sm font-semibold px-5 py-3 text-center shadow-sm hover:bg-slate-800 cta-glow" href="#quote">
                  Get a quote
                </a>
<a className="rounded-xl bg-white text-slate-900 text-sm font-semibold px-5 py-3 text-center border border-slate-200 hover:bg-slate-50" href="tel:+61400000000">
                  Call
                </a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm">
<div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 grid place-items-center shadow-sm">
<iconify-icon className="text-white" height="20" icon="solar:wind-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Engage Air &amp; Electrical</div>
<div className="text-xs text-slate-600">Ventilation • Airflow • Electrical</div>
</div>
</div>
<div className="text-xs text-slate-600 flex flex-col sm:flex-row gap-2 sm:gap-4">
<a className="hover:text-slate-900" href="#services">Services</a>
<a className="hover:text-slate-900" href="#process">How it works</a>
<a className="hover:text-slate-900" href="#faq">FAQ</a>
<a className="hover:text-slate-900 font-semibold" href="#quote">Get a quote</a>
</div>
</div>
<div className="border-t border-slate-200 px-6 sm:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<div>© <span id="year"></span> Engage Air &amp; Electrical. All rights reserved.</div>
<div>Newcastle &amp; Hunter Region</div>
</div>
</div>
</div>
</footer>
</main>



    </>
  );
}
