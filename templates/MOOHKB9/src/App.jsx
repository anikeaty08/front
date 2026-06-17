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
      
(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



    // Initialize icons with stroke width 1.5
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    });

    // Tab switching
    const tabs = ["feed", "generate", "market", "info", "profile"];
    const tabButtons = document.querySelectorAll(".tab-btn");
    const sections = tabs.map(id => document.getElementById("tab-" + id));

    function setTab(name) {
      sections.forEach(sec => sec.classList.add("hidden"));
      document.getElementById("tab-" + name).classList.remove("hidden");
      tabButtons.forEach(btn => {
        if (btn.dataset.tab === name) {
          btn.classList.remove("text-zinc-400");
          btn.classList.add("text-zinc-100");
        } else {
          btn.classList.remove("text-zinc-100");
          btn.classList.add("text-zinc-400");
        }
      });
    }
    // Auth state
    let isAuthed = false;

    // Auth modal helpers
    const authModal = document.getElementById("authModal");
    const openAuth = () => { authModal.classList.remove("hidden"); lucide.createIcons({ attrs: { "stroke-width": 1.5 } }); };
    const closeAuth = () => authModal.classList.add("hidden");
    document.getElementById("closeAuth").addEventListener("click", closeAuth);
    authModal.addEventListener("click", (e) => { if (e.target === authModal) closeAuth(); });

    // Intercept profile tab when not signed in
    tabButtons.forEach(btn => btn.addEventListener("click", () => {
      const name = btn.dataset.tab;
      if (name === "profile" && !isAuthed) {
        openAuth();
        return;
      }
      setTab(name);
    }));
    setTab("feed");

    // Like toggle
    document.querySelectorAll(".likeBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = btn.querySelector("svg");
        const liked = btn.classList.toggle("bg-zinc-900");
        btn.classList.toggle("border-zinc-700", liked);
        i.classList.toggle("text-red-500", liked);
      });
    });

    // Post sheet
    const postSheet = document.getElementById("postSheet");
    document.getElementById("openPost")?.addEventListener("click", () => postSheet.classList.remove("hidden"));
    document.getElementById("openPostSm")?.addEventListener("click", () => postSheet.classList.remove("hidden"));
    document.getElementById("closePost")?.addEventListener("click", () => postSheet.classList.add("hidden"));
    postSheet.addEventListener("click", (e) => { if (e.target === postSheet) postSheet.classList.add("hidden"); });

    // Filter sheet
    const filterSheet = document.getElementById("filterSheet");
    document.getElementById("openFilter")?.addEventListener("click", () => filterSheet.classList.remove("hidden"));
    document.getElementById("closeFilter")?.addEventListener("click", () => filterSheet.classList.add("hidden"));
    filterSheet.addEventListener("click", (e) => { if (e.target === filterSheet) filterSheet.classList.add("hidden"); });

    // FAQ accordion
    document.querySelectorAll(".faq-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("hidden");
        const icon = btn.querySelector("svg");
        icon.style.transform = content.classList.contains("hidden") ? "rotate(0deg)" : "rotate(180deg)";
        icon.style.transition = "transform 200ms ease";
      });
    });

    // Generate logic
    const promptInput = document.getElementById("prompt");
    const regionSelect = document.getElementById("region");
    const lenBtns = document.querySelectorAll(".len-btn");
    const chips = document.querySelectorAll(".gen-chip");
    const results = document.getElementById("results");
    const resultMeta = document.getElementById("resultMeta");
    const generateBtn = document.getElementById("generate");
    const clearGenBtn = document.getElementById("clearGen");

    let targetLen = 5;
    lenBtns.forEach(b => {
      if (b.dataset.len == targetLen) b.classList.add("border-zinc-700");
      b.addEventListener("click", () => {
        lenBtns.forEach(x => x.classList.remove("border-zinc-700"));
        b.classList.add("border-zinc-700");
        targetLen = parseInt(b.dataset.len, 10);
      });
    });
    chips.forEach(c => c.addEventListener("click", () => {
      const v = c.textContent.trim();
      promptInput.value = promptInput.value ? (promptInput.value + ", " + v) : v;
    }));
    clearGenBtn.addEventListener("click", () => {
      promptInput.value = "";
      results.innerHTML = "";
      resultMeta.textContent = "0 results";
    });

    function normalize(s) {
      return s.toUpperCase().replace(/[^A-Z0-9]/g, "");
    }
    function synthIdeas(seed, len) {
      const map = { A: "4", E: "3", I: "1", O: "0", S: "5", T: "7", B: "8", G: "6" };
      const base = normalize(seed).slice(0, 10) || "PLATE";
      const tokens = base.split(/[ ,]+/).filter(Boolean);
      const bag = [...tokens, ..."EVBOOSTCLEANLUXJDMSTEALTHTRACK".match(/.{1,3}/g)];
      const uniq = new Set();
      const out = [];
      function stylize(str) {
        return str.replace(/[AEIOSTBG]/g, ch => (Math.random() < 0.6 ? map[ch] : ch));
      }
      while (out.length < 12) {
        let pick = (bag[Math.floor(Math.random() * bag.length)] || "PLT").slice(0, len);
        if (Math.random() > 0.5 && pick.length < len) {
          pick = pick + String(Math.floor(Math.random() * 10)).repeat(Math.max(0, len - pick.length));
        }
        pick = stylize(pick).slice(0, len);
        if (pick.length < len) pick = pick.padEnd(len, "X");
        if (!uniq.has(pick)) { uniq.add(pick); out.push(pick); }
      }
      return out;
    }

    const previewModal = document.getElementById("previewModal");
    const previewPlate = document.getElementById("previewPlate");
    document.getElementById("closePreview").addEventListener("click", () => previewModal.classList.add("hidden"));
    previewModal.addEventListener("click", (e) => { if (e.target === previewModal) previewModal.classList.add("hidden"); });

    function renderResults(ideas) {
      results.innerHTML = "";
      ideas.forEach(code => {
        const card = document.createElement("button");
        card.className = "group rounded-xl border border-zinc-900 bg-zinc-950 overflow-hidden hover:border-zinc-800 transition text-left";
        card.innerHTML = `
          <div class="bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center h-20"></div>
          <div class="p-3 flex items-center justify-between">
            <div class="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold">${code}</div>
            <i data-lucide="eye" class="w-4 h-4 text-zinc-500 group-hover:text-zinc-300"></i>
          </div>
        `;
        card.addEventListener("click", () => {
          previewPlate.querySelector("div").textContent = code;
          previewModal.classList.remove("hidden");
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
        results.appendChild(card);
      });
      resultMeta.textContent = ideas.length + " results • " + regionSelect.value;
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    }

    generateBtn.addEventListener("click", () => {
      const seed = promptInput.value || regionSelect.value;
      const ideas = synthIdeas(seed, targetLen);
      renderResults(ideas);
    });

    // Profile segmented control
    const profileTabs = document.querySelectorAll(".profile-tab");
    const postsGrid = document.getElementById("profile-posts");
    const platesGrid = document.getElementById("profile-plates");

    profileTabs.forEach(btn => {
      btn.addEventListener("click", () => {
        profileTabs.forEach(b => {
          b.classList.remove("bg-zinc-100", "text-zinc-900", "border-zinc-300", "font-medium");
          b.classList.add("bg-zinc-900", "border-zinc-800");
        });
        btn.classList.remove("bg-zinc-900", "border-zinc-800");
        btn.classList.add("bg-zinc-100", "text-zinc-900", "border-zinc-300", "font-medium");
        const view = btn.dataset.view;
        if (view === "plates") {
          postsGrid.classList.add("hidden");
          platesGrid.classList.remove("hidden");
        } else {
          platesGrid.classList.add("hidden");
          postsGrid.classList.remove("hidden");
        }
      });
    });

    // Auth toggle and behavior
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
    const formLogin = document.getElementById("formLogin");
    const formSignup = document.getElementById("formSignup");

    function setAuthMode(mode) {
      if (mode === "login") {
        btnLogin.classList.add("bg-zinc-100", "text-zinc-900", "border-zinc-300", "font-medium");
        btnLogin.classList.remove("bg-zinc-900", "border-zinc-800");
        btnSignup.classList.add("bg-zinc-900", "border-zinc-800");
        btnSignup.classList.remove("bg-zinc-100", "text-zinc-900", "border-zinc-300", "font-medium");
        formLogin.classList.remove("hidden");
        formSignup.classList.add("hidden");
      } else {
        btnSignup.classList.add("bg-zinc-100", "text-zinc-900", "border-zinc-300", "font-medium");
        btnSignup.classList.remove("bg-zinc-900", "border-zinc-800");
        btnLogin.classList.add("bg-zinc-900", "border-zinc-800");
        btnLogin.classList.remove("bg-zinc-100", "text-zinc-900", "border-zinc-300", "font-medium");
        formSignup.classList.remove("hidden");
        formLogin.classList.add("hidden");
      }
    }
    btnLogin.addEventListener("click", () => setAuthMode("login"));
    btnSignup.addEventListener("click", () => setAuthMode("signup"));

    // Password visibility toggles
    document.querySelectorAll(".togglePass").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-target");
        const input = document.getElementById(id);
        const icon = btn.querySelector("svg");
        const isPw = input.type === "password";
        input.type = isPw ? "text" : "password";
        icon.setAttribute("data-lucide", isPw ? "eye-off" : "eye");
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });
    });

    // Fake auth submit -> sign in and open profile
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      isAuthed = true;
      closeAuth();
      setTab("profile");
    });
    formSignup.addEventListener("submit", (e) => {
      e.preventDefault();
      isAuthed = true;
      closeAuth();
      setTab("profile");
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
      
<div className="max-w-md mx-auto min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 bg-zinc-950/70 border-b border-zinc-900">
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<span className="text-xs tracking-tighter font-semibold">CP</span>
</div>
<div className="flex flex-col">
<span className="text-[15px] tracking-tight font-semibold">CarPlate</span>
<span className="text-[11px] text-zinc-400 -mt-0.5">Social • Marketplace</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-1.5 rounded-md px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[13px] transition-colors" id="openPost">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="tracking-tight">Post</span>
</button>
<button className="p-2 rounded-md border border-zinc-800 hover:bg-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
</div>
</div>
</header>

<main className="flex-1 relative pb-24">

<section className="px-4 space-y-5 pt-4" id="tab-feed">

<div className="flex items-center gap-2">
<div className="flex-1 relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" placeholder="Search plates, cars, people" type="text"/>
</div>
<button className="sm:hidden p-2 rounded-md border border-zinc-800 hover:bg-zinc-900 transition-colors" id="openPostSm">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition whitespace-nowrap">#vanity</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition whitespace-nowrap">#rare</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition whitespace-nowrap">#auction</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition whitespace-nowrap">#california</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition whitespace-nowrap">#jdm</button>
<button className="px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition whitespace-nowrap">#euro</button>
</div>

<article className="rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950">
<div className="p-3 flex items-center gap-3">
<img alt="avatar" className="w-9 h-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-[13px] font-medium tracking-tight">nova.drive</span>
<span className="text-[11px] text-zinc-500">• 2h</span>
</div>
<div className="text-[12px] text-zinc-400">Model 3 Performance</div>
</div>
<button className="p-2 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="relative">
<img alt="car" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2">
<div className="px-4 py-2 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 shadow">
<div className="text-[18px] tracking-[0.35em] font-semibold">EL3CTR</div>
<div className="text-[9px] text-zinc-600 text-center -mt-0.5">CA • CLEAN AIR VEHICLE</div>
</div>
</div>
</div>
<div className="p-3">
<div className="flex items-center gap-3">
<button className="likeBtn p-2 rounded-md border border-zinc-800 hover:bg-zinc-900 transition">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
<button className="p-2 rounded-md border border-zinc-800 hover:bg-zinc-900 transition">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
<button className="p-2 rounded-md border border-zinc-800 hover:bg-zinc-900 transition ml-auto">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
</div>
<div className="mt-2 text-[12px] text-zinc-400">
<span className="font-medium text-zinc-100">1,284</span> likes • <span className="underline underline-offset-2">View comments</span>
</div>
<p className="mt-2 text-[13px] leading-5">
              Swapped to ceramic, new aero kit. Plate reveal tomorrow. Thoughts on spacing?
            </p>
</div>
</article>

<div className="space-y-3">
<h3 className="text-[17px] tracking-tight font-semibold">Trending Plates</h3>
<div className="grid grid-cols-2 gap-3">

<div className="rounded-lg border border-zinc-900 overflow-hidden hover:border-zinc-800 transition">
<div className="bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center h-24"></div>
<div className="p-3">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold w-max">CLNPLT</div>
<div className="text-[11px] text-zinc-400 mt-1">New York • Rare</div>
</div>
</div>
<div className="rounded-lg border border-zinc-900 overflow-hidden hover:border-zinc-800 transition">
<div className="bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center h-24"></div>
<div className="p-3">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold w-max">B00ST</div>
<div className="text-[11px] text-zinc-400 mt-1">Florida • Auction</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden px-4 pt-4 space-y-5" id="tab-generate">
<div className="flex items-center justify-between">
<h2 className="text-[20px] tracking-tight font-semibold">Generate plates</h2>
<button className="text-[12px] text-zinc-400 hover:text-zinc-200 underline underline-offset-2" id="clearGen">Clear</button>
</div>

<div className="space-y-3 rounded-xl border border-zinc-900 p-3 bg-zinc-950">
<label className="text-[12px] text-zinc-400">Describe your vibe</label>
<div className="relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="sparkles"></i>
<input className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" id="prompt" placeholder="e.g. electric, minimal, stealth, 3 letters" type="text"/>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="gen-chip px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">EV</button>
<button className="gen-chip px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Track</button>
<button className="gen-chip px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Clean</button>
<button className="gen-chip px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Luxury</button>
<button className="gen-chip px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">JDM</button>
<button className="gen-chip px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Stealth</button>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 grid grid-cols-4 gap-2">
<button className="len-btn px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition" data-len="3">3</button>
<button className="len-btn px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition" data-len="4">4</button>
<button className="len-btn px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition" data-len="5">5</button>
<button className="len-btn px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition" data-len="6">6</button>
</div>
<div className="w-[1px] h-8 bg-zinc-900"></div>
<select className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition focus:outline-none" id="region">
<option>California</option>
<option>New York</option>
<option>Florida</option>
<option>Texas</option>
<option>Ontario</option>
<option>Dubai</option>
</select>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-zinc-100 text-zinc-900 hover:bg-white/90 border border-zinc-300 transition" id="generate">
<i className="w-5 h-5" data-lucide="wand-2"></i>
<span className="text-[14px] tracking-tight font-medium">Generate</span>
</button>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-[16px] tracking-tight font-semibold">Suggestions</h3>
<div className="text-[12px] text-zinc-500" id="resultMeta">0 results</div>
</div>
<div className="grid grid-cols-2 gap-3" id="results"></div>
</div>
</section>

<section className="hidden px-4 pt-4 space-y-4" id="tab-market">
<div className="flex items-center justify-between">
<h2 className="text-[20px] tracking-tight font-semibold">Marketplace</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition flex items-center gap-1.5" id="openFilter">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i> Filters
            </button>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" placeholder="Search plates for sale" type="text"/>
</div>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Auction</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Buy Now</button>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="rounded-xl border border-zinc-900 overflow-hidden hover:border-zinc-800 transition group">
<div className="relative">
<img alt="car" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold w-max group-hover:shadow transition">HYP3R</div>
</div>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<div className="text-[13px] font-medium tracking-tight">California</div>
<div className="text-[11px] text-zinc-400">Ends in 2d</div>
</div>
<div className="text-right">
<div className="text-[12px] text-zinc-400">Current</div>
<div className="text-[14px] font-medium">$3,450</div>
</div>
</div>
<button className="mt-2 w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[12px] transition">Place Bid</button>
</div>
</div>
<div className="rounded-xl border border-zinc-900 overflow-hidden hover:border-zinc-800 transition group">
<div className="relative">
<img alt="car" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold w-max">GHOST</div>
</div>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<div className="text-[13px] font-medium tracking-tight">New York</div>
<div className="text-[11px] text-zinc-400">Buy Now</div>
</div>
<div className="text-right">
<div className="text-[12px] text-zinc-400">Price</div>
<div className="text-[14px] font-medium">$7,900</div>
</div>
</div>
<button className="mt-2 w-full px-3 py-2 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 hover:bg-white/90 text-[12px] transition">Buy Now</button>
</div>
</div>
</div>
</section>

<section className="hidden px-4 pt-4 space-y-5" id="tab-info">
<h2 className="text-[20px] tracking-tight font-semibold">Info &amp; rules</h2>
<div className="rounded-xl border border-zinc-900 p-4 bg-zinc-950 space-y-3">
<div className="flex items-start gap-3">
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
<i className="w-5 h-5" data-lucide="badge-check"></i>
</div>
<div>
<div className="text-[14px] font-medium tracking-tight">Availability &amp; restrictions</div>
<p className="text-[12px] text-zinc-400 mt-1">Each region enforces character limits and content rules. Offensive combinations are rejected, and some letters may be restricted.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<div>
<div className="text-[14px] font-medium tracking-tight">Transfer &amp; resale</div>
<p className="text-[12px] text-zinc-400 mt-1">Ownership transfer processes differ by state or country. Confirm that the name on record can be reassigned before bidding or buying.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded-md bg-zinc-900 border border-zinc-800">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div>
<div className="text-[14px] font-medium tracking-tight">Safe trading</div>
<p className="text-[12px] text-zinc-400 mt-1">Use escrow for high-value plates and verify seller identity. Avoid off-platform payments.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-900 bg-zinc-950 divide-y divide-zinc-900">
<button className="w-full text-left p-4 flex items-center justify-between faq-item">
<div>
<div className="text-[14px] font-medium tracking-tight">California</div>
<div className="text-[12px] text-zinc-400">2–7 chars • A–Z 0–9 • No special chars</div>
</div>
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden p-4 text-[12px] text-zinc-400">
            Tips: Reserve early, submit alternates, and avoid ambiguous combos that can be misread.
          </div>
<button className="w-full text-left p-4 flex items-center justify-between faq-item">
<div>
<div className="text-[14px] font-medium tracking-tight">New York</div>
<div className="text-[12px] text-zinc-400">2–8 chars • A–Z 0–9 • Spaces allowed</div>
</div>
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden p-4 text-[12px] text-zinc-400">
            Tip: Numeric prefixes can open unique availability. Check multiple layouts.
          </div>
<button className="w-full text-left p-4 flex items-center justify-between faq-item">
<div>
<div className="text-[14px] font-medium tracking-tight">Dubai</div>
<div className="text-[12px] text-zinc-400">1–5 chars • Category letters vary</div>
</div>
<i className="w-5 h-5 text-zinc-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden p-4 text-[12px] text-zinc-400">
            Tip: Low-digit plates command premium—consider auction timing.
          </div>
</div>
</section>

<section className="hidden px-4 pt-4 space-y-5" id="tab-profile">

<div className="relative rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950">
<img alt="cover" className="w-full h-28 sm:h-36 object-cover" src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border border-zinc-800 absolute -bottom-6 left-4" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&amp;q=80"/>
<button className="absolute top-2 right-2 p-2 rounded-md bg-zinc-900/70 border border-zinc-800 hover:bg-zinc-900 transition">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</div>

<div className="pt-7">
<div className="flex items-start justify-between">
<div>
<div className="text-[18px] tracking-tight font-semibold">Nova Drive</div>
<div className="text-[12px] text-zinc-400">@nova.drive</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Share</button>
<button className="px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 hover:bg-white/90 text-[12px] transition">Edit</button>
</div>
</div>
<p className="mt-2 text-[13px] text-zinc-300 leading-5">
            EV nerd. Track days on weekends. Collecting clean, minimalist plates.
          </p>

<div className="mt-3 flex items-center gap-4 text-[12px] text-zinc-400">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="map-pin"></i>
              Bay Area, CA
            </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="car"></i>
              Model 3P • GTI
            </div>
<a className="flex items-center gap-1.5 hover:text-zinc-200 transition" href="#">
<i className="w-4 h-4" data-lucide="link-2"></i>
              novadrive.me
            </a>
</div>

<div className="mt-4 grid grid-cols-3 divide-x divide-zinc-900 border border-zinc-900 rounded-lg overflow-hidden">
<div className="p-3">
<div className="text-[14px] font-medium tracking-tight">128</div>
<div className="text-[11px] text-zinc-400">Posts</div>
</div>
<div className="p-3">
<div className="text-[14px] font-medium tracking-tight">4,829</div>
<div className="text-[11px] text-zinc-400">Followers</div>
</div>
<div className="p-3">
<div className="text-[14px] font-medium tracking-tight">312</div>
<div className="text-[11px] text-zinc-400">Following</div>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="profile-tab flex-1 px-3 py-2 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 text-[12px] font-medium tracking-tight" data-view="posts">Posts</button>
<button className="profile-tab flex-1 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[12px] transition" data-view="plates">Plates</button>
</div>

<div className="grid grid-cols-3 gap-1.5" id="profile-posts">
<button className="relative group rounded-md overflow-hidden border border-zinc-900">
<img alt="" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition"></div>
</button>
<button className="relative group rounded-md overflow-hidden border border-zinc-900">
<img alt="" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition"></div>
</button>
<button className="relative group rounded-md overflow-hidden border border-zinc-900">
<img alt="" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition"></div>
</button>
<button className="relative group rounded-md overflow-hidden border border-zinc-900">
<img alt="" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition"></div>
</button>
<button className="relative group rounded-md overflow-hidden border border-zinc-900">
<img alt="" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition"></div>
</button>
<button className="relative group rounded-md overflow-hidden border border-zinc-900">
<img alt="" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/20 transition"></div>
</button>
</div>

<div className="hidden space-y-3" id="profile-plates">
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-zinc-900 overflow-hidden hover:border-zinc-800 transition">
<div className="bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center h-24"></div>
<div className="p-3 flex items-center justify-between">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold">EVNERD</div>
<span className="text-[11px] text-zinc-400">CA</span>
</div>
</div>
<div className="rounded-lg border border-zinc-900 overflow-hidden hover:border-zinc-800 transition">
<div className="bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center h-24"></div>
<div className="p-3 flex items-center justify-between">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold">CLN3R</div>
<span className="text-[11px] text-zinc-400">NY</span>
</div>
</div>
<div className="rounded-lg border border-zinc-900 overflow-hidden hover:border-zinc-800 transition">
<div className="bg-[url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center h-24"></div>
<div className="p-3 flex items-center justify-between">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold">ST3ALTH</div>
<span className="text-[11px] text-zinc-400">FL</span>
</div>
</div>
<div className="rounded-lg border border-zinc-900 overflow-hidden hover:border-zinc-800 transition">
<div className="bg-[url('https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center h-24"></div>
<div className="p-3 flex items-center justify-between">
<div className="px-3 py-1 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold">TRKDAY</div>
<span className="text-[11px] text-zinc-400">TX</span>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-40">
<div className="max-w-md mx-auto border-t border-zinc-900 bg-zinc-950/90 backdrop-blur">
<div className="grid grid-cols-5">
<button className="tab-btn py-3 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-200" data-tab="feed">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[11px]">Feed</span>
</button>
<button className="tab-btn py-3 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-200" data-tab="generate">
<i className="w-5 h-5" data-lucide="wand-2"></i>
<span className="text-[11px]">Generate</span>
</button>
<button className="tab-btn py-3 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-200" data-tab="market">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="text-[11px]">Market</span>
</button>
<button className="tab-btn py-3 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-200" data-tab="info">
<i className="w-5 h-5" data-lucide="info"></i>
<span className="text-[11px]">Info</span>
</button>
<button className="tab-btn py-3 flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-200" data-tab="profile">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[11px]">Profile</span>
</button>
</div>
</div>
</nav>
</div>

<div className="fixed inset-0 z-50 hidden" id="postSheet">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute bottom-0 left-0 right-0">
<div className="max-w-md mx-auto rounded-t-2xl bg-zinc-950 border-t border-zinc-900 p-4">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">New post</div>
<button className="p-2 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition" id="closePost">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center gap-3">
<img alt="avatar" className="w-9 h-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<input className="flex-1 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[13px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Caption" type="text"/>
</div>
<div className="grid grid-cols-5 gap-2">
<div className="h-16 rounded-md border border-zinc-800 bg-[url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=400&amp;auto=format&amp;fit=crop')] bg-cover"></div>
<div className="h-16 rounded-md border border-zinc-800 bg-[url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&amp;w=400&amp;auto=format&amp;fit=crop')] bg-cover"></div>
<label className="h-16 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center cursor-pointer hover:border-zinc-700 transition">
<input className="hidden" type="file"/>
<i className="w-5 h-5 text-zinc-400" data-lucide="image-plus"></i>
</label>
</div>
<div className="flex items-center gap-2">
<div className="px-3 py-2 rounded bg-zinc-100 text-zinc-900 text-[14px] tracking-[0.3em] font-semibold">MYPL8</div>
<input className="flex-1 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[13px] placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Plate text" type="text"/>
</div>
<button className="w-full px-4 py-2.5 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 hover:bg-white/90 text-[14px] font-medium tracking-tight">Publish</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="filterSheet">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute bottom-0 left-0 right-0">
<div className="max-w-md mx-auto rounded-t-2xl bg-zinc-950 border-t border-zinc-900 p-4 space-y-4">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Filters</div>
<button className="p-2 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition" id="closeFilter">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">EV</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Low-digit</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Vintage</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Buy Now</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Auction</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition">Under $5k</button>
</div>
<button className="w-full px-4 py-2.5 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 hover:bg-white/90 text-[14px] font-medium tracking-tight">Apply</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="previewModal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="absolute inset-x-0 top-10">
<div className="max-w-md mx-auto rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950">
<div className="flex items-center justify-between p-3 border-b border-zinc-900">
<div className="text-[14px] font-medium tracking-tight">Preview</div>
<button className="p-2 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition" id="closePreview">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2">
<div className="px-4 py-2 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 shadow" id="previewPlate">
<div className="text-[18px] tracking-[0.35em] font-semibold">PLTIDEA</div>
<div className="text-[9px] text-zinc-600 text-center -mt-0.5">CA • PERSONALIZED</div>
</div>
</div>
</div>
<div className="p-3 flex items-center gap-2">
<button className="flex-1 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[12px] transition flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="save"></i> Save
          </button>
<button className="flex-1 px-3 py-2 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 hover:bg-white/90 text-[12px] transition flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="share-2"></i> Share
          </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="authModal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="absolute inset-x-0 top-6 sm:top-10">
<div className="max-w-md mx-auto rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950">
<div className="p-4 border-b border-zinc-900 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<span className="text-xs tracking-tighter font-semibold">CP</span>
</div>
<div className="text-[14px] font-medium tracking-tight">Welcome</div>
</div>
<button className="p-2 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition" id="closeAuth">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-4">

<div className="grid grid-cols-2 gap-2">
<button className="px-3 py-2 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-300 text-[12px] font-medium tracking-tight" id="btnLogin">Log in</button>
<button className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-[12px] hover:border-zinc-700 transition" id="btnSignup">Sign up</button>
</div>

<form className="space-y-3" id="formLogin">
<div className="text-[16px] tracking-tight font-semibold">Log in</div>
<div className="relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail"></i>
<input className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" id="loginEmail" placeholder="Email" required="" type="email"/>
</div>
<div className="relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="key-round"></i>
<input className="w-full pl-9 pr-9 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" id="loginPassword" placeholder="Password" required="" type="password"/>
<button className="togglePass absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800" data-target="loginPassword" type="button">
<i className="w-4 h-4 text-zinc-500" data-lucide="eye"></i>
</button>
</div>
<div className="flex items-center justify-between">
<a className="text-[12px] text-zinc-400 hover:text-zinc-200 underline underline-offset-2" href="#">Forgot password?</a>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-zinc-100 text-zinc-900 hover:bg-white/90 border border-zinc-300 transition" type="submit">
<i className="w-5 h-5" data-lucide="log-in"></i>
<span className="text-[14px] tracking-tight font-medium">Continue</span>
</button>
<p className="text-[11px] text-zinc-500 text-center">
              By continuing, you agree to our <a className="underline hover:text-zinc-300" href="#">Terms</a> and <a className="underline hover:text-zinc-300" href="#">Privacy</a>.
            </p>
</form>

<form className="space-y-3 hidden" id="formSignup">
<div className="text-[16px] tracking-tight font-semibold">Create account</div>
<div className="relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="user"></i>
<input className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" id="suName" placeholder="Username" required="" type="text"/>
</div>
<div className="relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail"></i>
<input className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" id="suEmail" placeholder="Email" required="" type="email"/>
</div>
<div className="relative">
<i className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="key-round"></i>
<input className="w-full pl-9 pr-9 py-2.5 bg-zinc-900/60 border border-zinc-800 rounded-md text-[13px] placeholder:text-zinc-500 outline-none focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-zinc-700 transition" id="suPassword" placeholder="Password" required="" type="password"/>
<button className="togglePass absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800" data-target="suPassword" type="button">
<i className="w-4 h-4 text-zinc-500" data-lucide="eye"></i>
</button>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-zinc-100 text-zinc-900 hover:bg-white/90 border border-zinc-300 transition" type="submit">
<i className="w-5 h-5" data-lucide="user-plus"></i>
<span className="text-[14px] tracking-tight font-medium">Create account</span>
</button>
<p className="text-[11px] text-zinc-500 text-center">
              By creating an account, you agree to our <a className="underline hover:text-zinc-300" href="#">Terms</a> and <a className="underline hover:text-zinc-300" href="#">Privacy</a>.
            </p>
</form>
</div>
<div className="px-4 pb-4">
<div className="rounded-lg border border-zinc-900 bg-zinc-950 p-3 text-[12px] text-zinc-400">
            Tip: You can generate plate ideas before signing in. Posting or bidding requires an account.
          </div>
</div>
</div>
</div>
</div>


    </>
  );
}
