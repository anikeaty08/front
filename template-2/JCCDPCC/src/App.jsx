import React, { useEffect } from 'react';
import createGlobe from "https://cdn.skypack.dev/cobe";

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
      {

    const canvas = document.getElementById("cobe");

    let phi = 0;
    let isHovering = false;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.05,
      mapSamples: 16000,
      mapBrightness: 6.2,
      baseColor: [1, 0.85, 0],          // Accent base (yellow)
      markerColor: [1, 0.9, 0.3],       // Marker tint
      glowColor: [1, 0.8, 0.2],         // Soft amber glow
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [22.3193, 114.1694], size: 0.03 },
        { location: [-33.8688, 151.2093], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi;
        if (!isHovering) phi += 0.005;
      },
    });

    canvas.addEventListener("mouseenter", () => (isHovering = true));
    canvas.addEventListener("mouseleave", () => (isHovering = false));

    // Scan card selection
    const scanCards = Array.from(document.querySelectorAll(".scan-card"));
    const scanTypeInput = document.getElementById("scanType");
    function setSelected(type) {
      scanCards.forEach((card) => {
        const active = card.getAttribute("data-scan") === type;
        card.classList.toggle("ring-2", active);
        card.classList.toggle("ring-yellow-400/60", active);
        card.classList.toggle("border-yellow-400/60", active);
        card.classList.toggle("bg-yellow-400/10", active);
      });
      scanTypeInput.value = type;
    }
    setSelected("network");
    scanCards.forEach((card) => {
      card.addEventListener("click", () => {
        setSelected(card.getAttribute("data-scan"));
      });
    });

    // Basic form handling
    const form = document.getElementById("scan-form");
    const msg = document.getElementById("scan-msg");

    function validDomain(d) {
      // Simple domain check: letters/digits/hyphen + dot + TLD 2-24
      return /^[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})+\.[a-zA-Z]{2,24}$/.test(
        d.includes("://") ? d.split("://")[1] : d
      ) || /^[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,24}$/.test(d);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const domain = (document.getElementById("domain").value || "").trim().toLowerCase();
      const email = (document.getElementById("email").value || "").trim();
      const scanType = scanTypeInput.value;

      let error = "";
      if (!validDomain(domain)) error = "Enter a valid domain (e.g., example.com).";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = "Enter a valid email address.";

      msg.classList.remove("hidden");
      if (error) {
        msg.textContent = error.toUpperCase();
        msg.classList.remove("text-emerald-300");
        msg.classList.add("text-yellow-300/80");
        return;
      }

      msg.textContent = `Starting ${scanType} scan for ${domain}. Confirmation will be sent to ${email}.`.toUpperCase();
      msg.classList.remove("text-yellow-300/80");
      msg.classList.add("text-emerald-300");

      // TODO: Hook into backend API here.
    });

    // Initialize icons with stroke width 1.5
    window.addEventListener("DOMContentLoaded", () => {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }
    });

    // Respect tab visibility (reduce background work)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    });
  
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
      

<header className="relative">
<div className="mx-auto max-w-7xl px-6">
<nav className="flex items-center justify-between py-5">
<a className="flex items-center gap-3" href="#">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/90 ring-1 ring-yellow-300/50">
<svg aria-hidden="true" className="h-5 w-5 text-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" height="14" rx="2" width="14"></rect>
</svg>
</span>
<span className="text-lg tracking-tight uppercase text-white">Cipher</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Industries</a>
</div>
<div className="flex items-center gap-3">
<button className="text-sm rounded-md px-4 py-2 border border-white/10 hover:bg-white/5 transition-colors">Sign in</button>
<button className="hidden sm:inline-flex items-center gap-2 text-sm rounded-md px-4 py-2 bg-black text-yellow-400 ring-1 ring-yellow-400/50 hover:bg-black/80 transition-colors">
            Boost Security
            <i className="h-4 w-4" data-lucide="shield-check"></i>
</button>
</div>
</nav>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
</header>

<main className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>
<div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl"></div>
</div>
<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
<div className="flex flex-col md:flex-row items-center gap-14">

<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1.5 text-xs text-yellow-300 mb-5">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-yellow-300"></span>
              Security scanning
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal leading-tight uppercase text-yellow-400">
              No Breaches, Only Bold Moves
            </h1>
<p className="mt-5 text-lg md:text-xl text-yellow-200/80 max-w-xl uppercase">
              we empower you to take bold actions that secure your digital world and eliminate threats.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-yellow-400 text-black ring-1 ring-yellow-300 hover:bg-yellow-300 transition-colors uppercase">
                Boost Security
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors uppercase">
<i className="h-4 w-4" data-lucide="circle-help"></i>
                About Cipher
              </button>
</div>

<div className="mt-8 rounded-lg border border-yellow-400/20 bg-white/5 backdrop-blur-sm">
<form className="p-4 md:p-5" id="scan-form">
<div className="grid grid-cols-1 md:grid-cols-12 gap-3">
<div className="md:col-span-5">
<label className="text-xs uppercase text-gray-300" htmlFor="domain">Domain</label>
<div className="mt-1 flex items-center rounded-md border border-white/10 bg-black/30 focus-within:border-yellow-400/50">
<span className="pl-3 text-gray-400">
<i className="h-4 w-4" data-lucide="globe"></i>
</span>
<input className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-gray-500" id="domain" name="domain" placeholder="example.com" required type="text" />
</div>
</div>
<div className="md:col-span-5">
<label className="text-xs uppercase text-gray-300" htmlFor="email">Work Email</label>
<div className="mt-1 flex items-center rounded-md border border-white/10 bg-black/30 focus-within:border-yellow-400/50">
<span className="pl-3 text-gray-400">
<i className="h-4 w-4" data-lucide="mail"></i>
</span>
<input className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-gray-500" id="email" name="email" placeholder="you@company.com" required type="email" />
</div>
</div>
<div className="md:col-span-2 flex md:items-end">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 bg-yellow-400 text-black ring-1 ring-yellow-300 hover:bg-yellow-300 transition-colors uppercase" type="submit">
                      Start Scan
                      <i className="h-4 w-4" data-lucide="scan-line"></i>
</button>
</div>
</div>
<div className="mt-4">
<p className="text-xs uppercase text-gray-300 mb-2">Select scan type</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<button className="scan-card group rounded-md border border-white/10 hover:border-yellow-400/50 bg-black/30 p-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/50" data-scan="network" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/20">
<i className="h-4 w-4" data-lucide="network"></i>
</span>
<span className="text-sm uppercase text-yellow-300 tracking-tight">Network Security</span>
</div>
<p className="mt-2 text-xs text-gray-400 uppercase">Safeguard infrastructure against unauthorized access and attacks.</p>
</button>

<button className="scan-card group rounded-md border border-white/10 hover:border-yellow-400/50 bg-black/30 p-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/50" data-scan="audit" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/20">
<i className="h-4 w-4" data-lucide="shield-check"></i>
</span>
<span className="text-sm uppercase text-yellow-300 tracking-tight">Security Audits</span>
</div>
<p className="mt-2 text-xs text-gray-400 uppercase">Comprehensive reviews for compliance, protection, and efficiency.</p>
</button>

<button className="scan-card group rounded-md border border-white/10 hover:border-yellow-400/50 bg-black/30 p-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/50" data-scan="forensics" type="button">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/20">
<i className="h-4 w-4" data-lucide="search"></i>
</span>
<span className="text-sm uppercase text-yellow-300 tracking-tight">Forensics Analysis</span>
</div>
<p className="mt-2 text-xs text-gray-400 uppercase">Investigate incidents to prevent future occurrences.</p>
</button>
</div>
<input id="scanType" name="scanType" type="hidden" value="network" />
</div>
<p className="mt-3 text-xs text-yellow-300/80 hidden" id="scan-msg"></p>
</form>
<div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
<div className="px-4 py-3 md:px-5">
<p className="text-[11px] uppercase text-gray-500">By starting a scan you agree to our Terms and confirm you own or have authorization for the specified domain.</p>
</div>
</div>
<div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
<div className="mt-6 grid grid-cols-3 gap-6 text-sm text-gray-300">
<div className="rounded-md border border-white/10 p-4">
<p className="text-3xl tracking-tight font-normal text-yellow-400">93%</p>
<p className="text-gray-400 mt-1 uppercase">Faster workflow</p>
</div>
<div className="rounded-md border border-white/10 p-4">
<p className="text-3xl tracking-tight font-normal text-yellow-400">10k+</p>
<p className="text-gray-400 mt-1 uppercase">Global users</p>
</div>
<div className="rounded-md border border-white/10 p-4">
<p className="text-3xl tracking-tight font-normal text-yellow-400">99.9%</p>
<p className="text-gray-400 mt-1 uppercase">Uptime</p>
</div>
</div>
</div>

<div className="w-full md:w-1/2 relative">
<div className="relative mx-auto md:mx-0">

<div className="absolute inset-0 -top-8 -left-8 -right-8 -bottom-8">
<div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-3xl"></div>
<div className="absolute inset-0 rounded-full bg-amber-300/10 blur-3xl"></div>
</div>
<div className="relative mx-auto flex items-center justify-center">
<div className="relative">
<div className="absolute inset-0 rounded-full ring-1 ring-yellow-400/20 pointer-events-none"></div>
<canvas aria-label="Interactive globe visualization" className="relative z-10 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px]" height="1200" id="cobe" width="1200"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
</div>
</section>
</main>

<footer className="py-10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
<p>© 2025 Cipher Inc.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
